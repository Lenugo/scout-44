import React from 'react';
import Link from '@docusaurus/Link';
import { FaFilePdf } from 'react-icons/fa';

export default function LibraryCard({ title, pdfUrl }) {
  return (
    <div className="col col--4 margin-bottom--lg px-2">
      <div className="card h-fit md:h-full hover:shadow-lg transition-shadow">
        <div className="card__header py-2 mb-2">
          <div className="flex items-center gap-2">
            <FaFilePdf className="text-red-500 text-xl" />
            <h3 className="text-base font-semibold mb-0 w-full">{title}</h3>
          </div>
        </div>
        <div className="card__footer py-2 mb-1">
          <Link
            className="button button--primary button--sm button--block"
            to={pdfUrl}
            target="_blank"
            download
          >
            Descargar PDF
          </Link>
        </div>
      </div>
    </div>
  );
}