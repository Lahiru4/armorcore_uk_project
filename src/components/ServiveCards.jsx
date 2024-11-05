import { motion } from 'framer-motion';

export const ServiceCard = ({ title, description, imgUrl, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-4 hover:shadow-2xl transition-shadow duration-300"
        >
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                    src={imgUrl}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-emerald-500">{title}</h3>
                <p className="text-zinc-300">{description}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-800 group-hover:ring-zinc-700 transition-colors duration-300" />
        </motion.div>
    );
};
