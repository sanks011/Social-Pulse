import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

// Your CSV data
const csvData = [
  {"post_type": "carousel", "likes": 35927, "shares": 6973, "comments": 3231},
  {"post_type": "carousel", "likes": 54660, "shares": 5016, "comments": 2538},
  {"post_type": "reel", "likes": 29017, "shares": 7987, "comments": 2361},
  {"post_type": "reel", "likes": 58912, "shares": 2081, "comments": 2977},
  {"post_type": "live_stream", "likes": 39601, "shares": 3447, "comments": 1735},
  {"post_type": "static_image", "likes": 13381, "shares": 437, "comments": 437},
  {"post_type": "static_image", "likes": 11316, "shares": 562, "comments": 294},
  {"post_type": "reel", "likes": 60221, "shares": 2491, "comments": 2200},
  {"post_type": "live_stream", "likes": 28823, "shares": 3979, "comments": 1769},
  {"post_type": "live_stream", "likes": 34647, "shares": 2961, "comments": 1584},
  {"post_type": "static_image", "likes": 15767, "shares": 449, "comments": 262},
  {"post_type": "live_stream", "likes": 31078, "shares": 3744, "comments": 1910},
  {"post_type": "carousel", "likes": 35219, "shares": 3672, "comments": 1557},
  {"post_type": "static_image", "likes": 18093, "shares": 730, "comments": 589},
  {"post_type": "static_image", "likes": 11019, "shares": 910, "comments": 483},
  {"post_type": "static_image", "likes": 16107, "shares": 920, "comments": 470},
  {"post_type": "static_image", "likes": 8529, "shares": 506, "comments": 496},
  {"post_type": "reel", "likes": 28181, "shares": 6936, "comments": 625},
  {"post_type": "live_stream", "likes": 29221, "shares": 2939, "comments": 1748},
  {"post_type": "reel", "likes": 66995, "shares": 5330, "comments": 1803},
  {"post_type": "reel", "likes": 56109, "shares": 3751, "comments": 3386},
  {"post_type": "reel", "likes": 55296, "shares": 6984, "comments": 3702},
  {"post_type": "carousel", "likes": 56069, "shares": 6286, "comments": 3104},
  {"post_type": "static_image", "likes": 19688, "shares": 985, "comments": 657},
  {"post_type": "live_stream", "likes": 30552, "shares": 3086, "comments": 1606},
  {"post_type": "static_image", "likes": 19466, "shares": 659, "comments": 226},
  {"post_type": "live_stream", "likes": 37179, "shares": 3724, "comments": 1962},
  {"post_type": "static_image", "likes": 16424, "shares": 519, "comments": 429},
  {"post_type": "static_image", "likes": 8821, "shares": 662, "comments": 643},
  {"post_type": "live_stream", "likes": 28779, "shares": 3710, "comments": 1459},
  {"post_type": "live_stream", "likes": 29361, "shares": 3728, "comments": 1933},
  {"post_type": "live_stream", "likes": 29242, "shares": 3221, "comments": 1546},
  {"post_type": "live_stream", "likes": 31027, "shares": 2892, "comments": 1500},
  {"post_type": "live_stream", "likes": 37989, "shares": 3531, "comments": 1435},
  {"post_type": "reel", "likes": 63774, "shares": 4317, "comments": 3916},
  {"post_type": "live_stream", "likes": 38537, "shares": 3438, "comments": 1673},
  {"post_type": "carousel", "likes": 20501, "shares": 6996, "comments": 2241},
  {"post_type": "reel", "likes": 64058, "shares": 7698, "comments": 3706},
  {"post_type": "static_image", "likes": 12309, "shares": 401, "comments": 389},
  {"post_type": "live_stream", "likes": 31562, "shares": 2893, "comments": 1530},
  {"post_type": "reel", "likes": 25258, "shares": 5132, "comments": 978},
  {"post_type": "carousel", "likes": 20313, "shares": 1759, "comments": 2621},
  {"post_type": "live_stream", "likes": 31680, "shares": 3278, "comments": 1535},
  {"post_type": "reel", "likes": 44483, "shares": 3396, "comments": 696},
  {"post_type": "static_image", "likes": 13516, "shares": 442, "comments": 675},
  {"post_type": "static_image", "likes": 14191, "shares": 548, "comments": 327},
  {"post_type": "carousel", "likes": 22613, "shares": 5552, "comments": 1299},
  {"post_type": "reel", "likes": 60192, "shares": 3328, "comments": 1643},
  {"post_type": "live_stream", "likes": 30338, "shares": 3357, "comments": 1712},
  {"post_type": "reel", "likes": 17022, "shares": 5589, "comments": 2361},
  {"post_type": "carousel", "likes": 29493, "shares": 4216, "comments": 1909},
  {"post_type": "live_stream", "likes": 36567, "shares": 3296, "comments": 1619},
  {"post_type": "carousel", "likes": 25955, "shares": 3609, "comments": 2820},
  {"post_type": "carousel", "likes": 48057, "shares": 1931, "comments": 3059},
  {"post_type": "carousel", "likes": 59544, "shares": 3762, "comments": 1685},
  {"post_type": "carousel", "likes": 42911, "shares": 6015, "comments": 2295},
  {"post_type": "static_image", "likes": 18283, "shares": 796, "comments": 455},
  {"post_type": "live_stream", "likes": 29911, "shares": 3200, "comments": 1444},
  {"post_type": "static_image", "likes": 12413, "shares": 401, "comments": 433},
  {"post_type": "static_image", "likes": 8085, "shares": 414, "comments": 274},
  {"post_type": "live_stream", "likes": 34478, "shares": 3890, "comments": 1615},
  {"post_type": "live_stream", "likes": 32881, "shares": 3818, "comments": 1474},
  {"post_type": "carousel", "likes": 26066, "shares": 3270, "comments": 2400},
  {"post_type": "live_stream", "likes": 39190, "shares": 3329, "comments": 1735},
  {"post_type": "carousel", "likes": 44708, "shares": 2628, "comments": 2401},
  {"post_type": "carousel", "likes": 37164, "shares": 3073, "comments": 2277},
  {"post_type": "live_stream", "likes": 34761, "shares": 3770, "comments": 1838},
  {"post_type": "carousel", "likes": 41364, "shares": 3633, "comments": 1260},
  {"post_type": "live_stream", "likes": 31669, "shares": 3730, "comments": 1918},
  {"post_type": "static_image", "likes": 14458, "shares": 601, "comments": 206}
  // ... rest of your CSV data
];

const AnalyzerForm = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  // Process CSV data for visualizations based on selected post type
  const processCSVData = (postType) => {
    const filteredData = csvData.filter(
      item => item.post_type.toLowerCase() === postType.toLowerCase()
    );

    if (filteredData.length === 0) return null;

    // Calculate averages
    const avgLikes = Math.round(filteredData.reduce((acc, curr) => acc + curr.likes, 0) / filteredData.length);
    const avgShares = Math.round(filteredData.reduce((acc, curr) => acc + curr.shares, 0) / filteredData.length);
    const avgComments = Math.round(filteredData.reduce((acc, curr) => acc + curr.comments, 0) / filteredData.length);

    return {
      distribution: [
        { name: 'Likes', value: avgLikes },
        { name: 'Shares', value: avgShares },
        { name: 'Comments', value: avgComments }
      ],
      trends: filteredData.map((item, index) => ({
        name: `Post ${index + 1}`,
        likes: item.likes,
        shares: item.shares,
        comments: item.comments
      }))
    };
  };

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError("Please enter a post type!");
      return;
    }
    setError("");
    setLoading(true);

    try {
      // Make the backend API call
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();

      // Get visualization data from CSV
      const visualizationData = processCSVData(text);
      
      if (!visualizationData) {
        setError("Invalid post type. Try 'reel', 'carousel', 'static_image', or 'live_stream'");
        setResult(null);
        return;
      }

      // Combine API response with CSV visualization data
      setResult({
        message: data.outputs[0].outputs[0].results.message.text,
        distribution: visualizationData.distribution,
        trends: visualizationData.trends
      });
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ['#8b5cf6', '#6366f1', '#3b82f6'];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl space-y-6"
        >
          <div className="space-y-2 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
            >
              Social Media Content Analyzer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400"
            >
              Enter content type: reel, carousel, static_image, or live_stream
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <input
                type="text"
                placeholder="Enter post type..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="relative w-full rounded-lg bg-gray-900 border border-gray-800 p-4 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            <motion.button
              onClick={handleAnalyze}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-white transition-all duration-300 hover:from-purple-600 hover:to-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <div className="flex items-center justify-center space-x-2">
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <span className="text-lg font-semibold">Analyze Content</span>
                )}
              </div>
            </motion.button>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-400"
              >
                {error}
              </motion.div>
            )}

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Key Insights from API */}
                <div className="rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6">
                  <h2 className="mb-4 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    Key Insights
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <div className="space-y-2">
                      {result.message.split('\n').map((point, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0" />
                          <p className="text-gray-300">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Charts from CSV Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6">
                    <h3 className="text-lg font-semibold mb-4">Engagement Over Time</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={result.trends}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip 
                            contentStyle={{ 
                              background: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '0.5rem'
                            }}
                          />
                          <Legend />
                          <Bar dataKey="likes" fill="#8b5cf6" name="Likes" />
                          <Bar dataKey="shares" fill="#6366f1" name="Shares" />
                          <Bar dataKey="comments" fill="#3b82f6" name="Comments" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6">
                    <h3 className="text-lg font-semibold mb-4">Average Engagement Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={result.distribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            nameKey="name"
                          >
                            {result.distribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ 
                              background: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '0.5rem'
                            }}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyzerForm;