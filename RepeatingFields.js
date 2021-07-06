//Patient ID handler
for each (pid3 in msg['PID']['PID.3']) {
	//Added to handle A40s 
	if (pid3['PID.3.5'].toString() == 'MRN') {
        channelMap.put('TrustID', pid3['PID.3.1'].toString());
    }
    if (pid3['PID.3.5'].toString() == 'T') {
        channelMap.put('TrustID', pid3['PID.3.1'].toString());
    }
     if (pid3['PID.3.5'].toString() == 'INT') {
        channelMap.put('PASPatientID', pid3['PID.3.1'].toString());
    }
    if (pid3['PID.3.5'].toString() == 'NHS') {
        channelMap.put('NHSNumber', pid3['PID.3.1'].toString());
        channelMap.put('NHSTraceStatus', pid3['PID.3.2'].toString());
    } 
}

//Home address handler
for each (pid11 in msg['PID']['PID.11']) {
    if (pid11['PID.11.7'].toString() == 'H') {
        channelMap.put('CurrentAddress1', pid11['PID.11.1'].toString());
        channelMap.put('CurrentAddress2', pid11['PID.11.2'].toString());
        channelMap.put('CurrentAddress3', pid11['PID.11.3'].toString());
        channelMap.put('CurrentAddress4', pid11['PID.11.4'].toString());
        channelMap.put('CurrentPostcode', pid11['PID.11.5'].toString());
    }
}


//Telephones and email handler
for each (pid13 in msg['PID']['PID.13']) {
    if (pid13['PID.13.3'].toString() == 'PH' &  pid13['PID.13.2'].toString() == 'PRN') {
        channelMap.put('HomePhone', pid13['PID.13.1'].toString());
    }
    if (pid13['PID.13.3'].toString() == 'CP') {
        channelMap.put('MobilePhone', pid13['PID.13.1'].toString());
    }
    if (pid13['PID.13.2'].toString() == 'NET') {
        channelMap.put('Email', pid13['PID.13.4'].toString());
    }
}
