import React from 'react';
import { FaCheck, FaExclamationTriangle, FaTint, FaFilter, FaFlask, FaInfoCircle } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion";

function Waterpage() {
    return (
        <>
            <Navbar />
            <motion.div
                className="max-w-5xl mx-auto px-4 py-10 font-sans text-gray-800"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* 页面标题 */}
                <header className="text-center mb-12">
                    <div className="inline-block px-6 py-2 bg-blue-50 rounded-full mb-4">
                        <span className="text-blue-600 font-medium">Water Quality Guide</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
                        Know Your Water: Complete Guide to Drinking Water Quality
                    </h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">
                        Make informed decisions about your water purification needs
                    </p>
                </header>

                {/* TDS 介绍 */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <FaTint className="text-blue-600 text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Understanding TDS in Water</h2>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <p className="text-gray-700 mb-6">
                            <span className="font-bold text-blue-700">Total Dissolved Solids (TDS)</span> measures all inorganic and organic substances dissolved in water, expressed in mg/L. Not all dissolved solids are harmful - many are essential minerals.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-3">Key Facts</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500 text-sm" />
                                        </div>
                                        <span>Healthy minerals contribute to TDS</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500 text-sm" />
                                        </div>
                                        <span>Only measures dissolved particles</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500 text-sm" />
                                        </div>
                                        <span>Seasonal fluctuations occur</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-3">Common Ranges</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm">Municipal Water</span>
                                            <span className="text-sm font-bold">100-500 mg/L</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm">Ideal Drinking Water</span>
                                            <span className="text-sm font-bold">150-250 mg/L</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm">Sea Water</span>
                                            <span className="text-sm font-bold">~35,000 mg/L</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TDS 表格 - 核心内容 */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <FaFilter className="text-blue-600 text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">TDS Guide & Purification Recommendations</h2>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold text-blue-800">TDS Level</th>
                                        <th className="px-6 py-4 text-left font-bold text-blue-800">Mineral Level</th>
                                        <th className="px-6 py-4 text-left font-bold text-blue-800">Drinking Safety</th>
                                        <th className="px-6 py-4 text-left font-bold text-blue-800">Recommended Technology</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium">0 - 100 mg/L</td>
                                        <td className="px-6 py-4">Very Low</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">Not Recommended</span>
                                        </td>
                                        <td className="px-6 py-4">Gravity, MF or UF</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium">100 - 150 mg/L</td>
                                        <td className="px-6 py-4">Low</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">Acceptable</span>
                                        </td>
                                        <td className="px-6 py-4">UF or NF</td>
                                    </tr>
                                    <tr className="bg-blue-50 hover:bg-blue-100">
                                        <td className="px-6 py-4 font-bold text-blue-800">150 - 250 mg/L</td>
                                        <td className="px-6 py-4 font-bold">Ideal</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Ideal</span>
                                        </td>
                                        <td className="px-6 py-4">UF or NF</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium">250 - 500 mg/L</td>
                                        <td className="px-6 py-4">High</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">Acceptable</span>
                                        </td>
                                        <td className="px-6 py-4">NF</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium">500 - 1200 mg/L</td>
                                        <td className="px-6 py-4">Very High</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">Limited</span>
                                        </td>
                                        <td className="px-6 py-4">NF</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium">1200+ mg/L</td>
                                        <td className="px-6 py-4">Hard Water</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">Not Safe</span>
                                        </td>
                                        <td className="px-6 py-4">RO Required</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                            <p className="text-sm text-gray-600">*BIS allows usage only in absence of alternatives</p>
                        </div>
                    </div>

                    {/* 移动端视图 */}
                    <div className="md:hidden mt-6 space-y-4">
                        {[
                            { tds: "0-100 mg/L", level: "Very Low", safety: "Not Recommended", tech: "Gravity/MF/UF", color: "red" },
                            { tds: "100-150 mg/L", level: "Low", safety: "Acceptable", tech: "UF/NF", color: "yellow" },
                            { tds: "150-250 mg/L", level: "Ideal", safety: "Ideal", tech: "UF/NF", color: "green", highlight: true },
                            { tds: "250-500 mg/L", level: "High", safety: "Acceptable", tech: "NF", color: "yellow" },
                            { tds: "500-1200 mg/L", level: "Very High", safety: "Limited*", tech: "NF", color: "orange" },
                            { tds: "1200+ mg/L", level: "Hard Water", safety: "Not Safe", tech: "RO Required", color: "red" }
                        ].map((item, index) => (
                            <div key={index} className={`border rounded-lg p-4 ${item.highlight ? 'border-blue-300 bg-blue-50' : 'border-gray-200'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-blue-800">{item.tds}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm bg-${item.color}-50 text-${item.color}-700`}>
                                        {item.safety}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-600 mb-1">Level: {item.level}</div>
                                <div className="text-sm font-medium">Tech: {item.tech}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* pH值部分 */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <FaFlask className="text-blue-600 text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Understanding pH Levels</h2>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-700 mb-6">
                                    pH measures acidity/alkalinity on a 0-14 scale. WHO recommends drinking water pH between <span className="font-bold text-blue-700">6.5 to 8.0</span>.
                                </p>

                                <div className="mb-6">
                                    <h3 className="font-bold text-gray-800 mb-3">Body pH Levels</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span>Blood</span>
                                            <span className="font-bold">7.35 - 7.45</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span>Stomach</span>
                                            <span className="font-bold">1.5 - 3.5</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Liver</span>
                                            <span className="font-bold">~7.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>Acidic</span>
                                        <span>Neutral</span>
                                        <span>Alkaline</span>
                                    </div>
                                    <div className="relative h-8 bg-linear-to-r from-red-400 via-green-400 to-blue-400 rounded-lg overflow-hidden">
                                        <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-white"></div>
                                        <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-white"></div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <div className="text-3xl font-bold text-blue-700">6.5 - 8.0</div>
                                        <p className="text-gray-600 mt-1">WHO Recommended Range</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-800 mb-2">Important Note</h4>
                                    <p className="text-sm text-gray-700">
                                        RO can lower pH. Use mineralizers only if pH &lt; 6. Avoid unnecessary alkaline filters.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 影响因素 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Key Water Quality Factors</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                                <span className="font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Water Source</h3>
                            <p className="text-gray-600 text-sm">
                                Municipal, bore-well, or tanker water each have unique purification needs.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                                <span className="font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Avoid TDS Adjusters</h3>
                            <p className="text-gray-600 text-sm">
                                Bypass valves mix impure water with RO output, defeating the purification purpose.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                                <span className="font-bold text-blue-600">3</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Regular Maintenance</h3>
                            <p className="text-gray-600 text-sm">
                                Change filters every 6-12 months to prevent microbial growth and ensure effectiveness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 结论部分 */}
                <section className="mb-12">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Key Takeaways</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-4">Summary</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="bg-white p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500" />
                                        </div>
                                        <span>Ideal TDS: 150-250 mg/L (acceptable up to 500)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500" />
                                        </div>
                                        <span>Optimal pH: 6.5-8.0</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500" />
                                        </div>
                                        <span>Choose purification based on your water's actual quality</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white p-1 rounded mr-3">
                                            <FaCheck className="text-blue-500" />
                                        </div>
                                        <span>Regular testing and maintenance are essential</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800 mb-4">Final Recommendation</h3>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-gray-700 mb-4">
                                        "Make an informed decision based on your household's specific water quality, not generic marketing claims."
                                    </p>
                                    <div className="text-center">
                                        <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                                            <FaFilter className="mr-2" />
                                            Get Your Water Tested
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 页脚 */}
                <footer className="text-center pt-8 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                        Based on WHO and BIS recommendations. Consult local water experts for specific advice.
                    </p>
                </footer>
            </motion.div>
        </>
    );
}

export default Waterpage;