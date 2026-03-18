import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Mail, Phone, BookOpen, Calendar, RefreshCw, AlertCircle, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { API_ENDPOINTS } from "@/config/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Contact {
  _id: string;
  name: string;
  email: string;
  mobileNo: string;
  courses: string[];
  createdAt: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { logout, admin, token } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Include auth token in request headers
      const response = await fetch(API_ENDPOINTS.GET_CONTACTS, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid - logout and redirect
          logout();
          navigate("/admin");
          return;
        }
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      setContacts(data.data || data.contacts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Calculate stats
  const totalContacts = contacts.length;
  const uniqueEmails = new Set(contacts.map((c) => c.email)).size;
  const courseCounts = contacts.reduce(
    (acc, contact) => {
      contact.courses?.forEach((course) => {
        acc[course] = (acc[course] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>
  );

  const statCards = [
    {
      title: "Total Submissions",
      value: totalContacts,
      icon: Users,
      gradient: "from-navy to-navy-medium",
      iconBg: "bg-white/20",
    },
    {
      title: "Unique Contacts",
      value: uniqueEmails,
      icon: Mail,
      gradient: "from-gold to-amber-500",
      iconBg: "bg-white/20",
    },
    {
      title: "Course Interest",
      value: Object.keys(courseCounts).length > 0 ? `${Object.keys(courseCounts).length} Levels` : "0 Levels",
      icon: BookOpen,
      gradient: "from-emerald-600 to-emerald-500",
      iconBg: "bg-white/20",
    },
    {
      title: "This Session",
      value: loading ? "..." : `${totalContacts} entries`,
      icon: Calendar,
      gradient: "from-violet-600 to-violet-500",
      iconBg: "bg-white/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero section-pattern">
      {/* Header */}
      <header className="gradient-navy text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl md:text-3xl font-bold font-heading">Admin Dashboard</h1>
              {admin && (
                <p className="text-white/70 text-sm mt-1">Welcome, {admin.name || admin.email}</p>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Card
              key={index}
              className={cn(
                "relative overflow-hidden border-0 shadow-lg",
                "bg-gradient-to-br",
                stat.gradient
              )}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-xs md:text-sm font-medium">{stat.title}</p>
                    <p className="text-white text-xl md:text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={cn("p-2 md:p-3 rounded-xl", stat.iconBg)}>
                    <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contacts Table Card */}
        <Card className="shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-navy/5 border-b">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl md:text-2xl text-navy">Contact Submissions</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">
                  {loading ? "Loading..." : `${totalContacts} total submissions`}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchContacts}
                disabled={loading}
                className="gap-2"
              >
                <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                <RefreshCw className="h-10 w-10 animate-spin mb-4 text-gold" />
                <p className="font-medium">Loading contacts...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="bg-destructive/10 rounded-full p-4 mb-4">
                  <AlertCircle className="h-10 w-10 text-destructive" />
                </div>
                <p className="font-medium text-destructive mb-2">Failed to load contacts</p>
                <p className="text-muted-foreground text-sm mb-4">{error}</p>
                <Button variant="outline" onClick={fetchContacts}>
                  Try Again
                </Button>
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && contacts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div className="bg-muted rounded-full p-4 mb-4">
                  <Users className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="font-medium text-foreground mb-1">No contacts found</p>
                <p className="text-muted-foreground text-sm">
                  Contact submissions will appear here when users submit the registration form.
                </p>
              </div>
            )}

            {/* Contacts Table */}
            {!loading && !error && contacts.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="text-left p-4 font-semibold text-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          Name
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground text-sm hidden sm:table-cell">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          Email
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          Phone
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground text-sm hidden md:table-cell">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          Courses
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground text-sm hidden lg:table-cell">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          Date
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr
                        key={contact._id}
                        className={cn(
                          "border-b hover:bg-muted/30 transition-colors",
                          index % 2 === 0 ? "bg-background" : "bg-muted/10"
                        )}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="hidden sm:flex h-9 w-9 rounded-full gradient-gold items-center justify-center text-white font-semibold text-sm shrink-0">
                              {contact.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{contact.name}</p>
                              <p className="text-xs text-muted-foreground sm:hidden">{contact.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 hidden sm:table-cell">
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:text-gold transition-colors"
                          >
                            {contact.email}
                          </a>
                        </td>
                        <td className="p-4">
                          <span className="font-mono text-sm">{contact.mobileNo}</span>
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {contact.courses && contact.courses.length > 0 ? (
                              contact.courses.map((course) => (
                                <span
                                  key={course}
                                  className={cn(
                                    "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                                    course === "A1" && "bg-green-100 text-green-700",
                                    course === "A2" && "bg-blue-100 text-blue-700",
                                    course === "B1" && "bg-purple-100 text-purple-700",
                                    course === "B2" && "bg-orange-100 text-orange-700"
                                  )}
                                >
                                  {course}
                                </span>
                              ))
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 hidden lg:table-cell">
                          <div>
                            <p className="text-foreground text-sm">{formatDate(contact.createdAt)}</p>
                            <p className="text-xs text-muted-foreground">{formatTime(contact.createdAt)}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mobile Cards View (for very small screens) */}
        {!loading && !error && contacts.length > 0 && (
          <div className="mt-6 md:hidden space-y-4">
            <h3 className="text-lg font-semibold text-foreground px-1">Quick View</h3>
            {contacts.slice(0, 3).map((contact) => (
              <Card key={contact._id} className="shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center text-white font-semibold shrink-0">
                      {contact.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{contact.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{contact.email}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {contact.courses?.map((course) => (
                          <span
                            key={course}
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
                              course === "A1" && "bg-green-100 text-green-700",
                              course === "A2" && "bg-blue-100 text-blue-700",
                              course === "B1" && "bg-purple-100 text-purple-700",
                              course === "B2" && "bg-orange-100 text-orange-700"
                            )}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {contacts.length > 3 && (
              <p className="text-center text-sm text-muted-foreground">
                And {contacts.length - 3} more submissions...
              </p>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white/60 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>Admin Dashboard &copy; {new Date().getFullYear()} Edustack French Pathways</p>
        </div>
      </footer>
    </div>
  );
};

export default Admin;