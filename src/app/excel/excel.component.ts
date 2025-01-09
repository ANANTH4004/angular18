import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { SafeGuardPipe } from '../pipes/safe-guard.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excel',
  standalone: true,
  imports: [SafeGuardPipe, CommonModule],
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.scss',
})
export class ExcelComponent implements OnInit {
  data = [
    { id: 1, name: 'Alice', age: 28, city: 'New York' },
    { id: 2, name: 'Bob', age: 32, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 25, city: 'Chicago' },
    { id: 4, name: 'Diana', age: 30, city: 'Houston' },
    { id: 5, name: 'Eve', age: 27, city: 'Miami' },
  ];
  excelBlobUrl: string = '';
  excelHtmlContent!: string;
  iframeSrc: any;
  ngOnInit(): void {
    console.log('Oninit called');
  }
  openExcelInNewTab() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const blob: Blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const fileUrl = window.URL.createObjectURL(blob);
    const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${fileUrl}`;
    this.iframeSrc = officeViewerUrl;
    console.log(`file url ${this.iframeSrc}`);
    //window.open(officeViewerUrl, '_blank');
    // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    // const workbook: XLSX.WorkBook = {
    //   Sheets: { data: worksheet },
    //   SheetNames: ['data'],
    // };
    // const excelBuffer: any = XLSX.write(workbook, {
    //   bookType: 'xls',
    //   type: 'array',
    // });
    // const blob: Blob = new Blob([excelBuffer], {
    //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // });
    // //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    // const url = window.URL.createObjectURL(blob);
    // console.log('url', url);
    // const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
    //   url
    // )}`;
    // console.log('viewurl', officeViewerUrl);
    // window.open(officeViewerUrl, '_blank');
  }
  genereateExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    this.excelHtmlContent = XLSX.utils.sheet_to_html(workbook.Sheets['data']);
    // const excelBuffer: any = XLSX.write(workbook, {
    //   bookType: 'xlsx',
    //   type: 'array',
    // });
    // const blob: Blob = new Blob([excelBuffer], {
    //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // });
    // this.excelBlobUrl = window.URL.createObjectURL(blob);
  }
}
