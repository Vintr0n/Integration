//Patient ID handler
for each (pid3 in msg['PID']['PID.3']) {
	//Added to handle A40s 
	if (pid3['PID.3.5'].toString() == 'String1') {
        channelMap.put('TrustID', pid3['PID.3.1'].toString());
    }
    if (pid3['PID.3.5'].toString() == 'SomeString') {
        channelMap.put('TrustID', pid3['PID.3.1'].toString());
    }
     if (pid3['PID.3.5'].toString() == 'AnotherString') {
        channelMap.put('PASPatientID', pid3['PID.3.1'].toString());
    }
    if (pid3['PID.3.5'].toString() == 'NHS') {
        channelMap.put('NHSNumber', pid3['PID.3.1'].toString());
        channelMap.put('NHSTraceStatus', pid3['PID.3.2'].toString());
    } 
}

//Home address handler
for each (pid11 in msg['PID']['PID.11']) {
    if (pid11['PID.11.7'].toString() == 'Letter') {
        channelMap.put('CurrentAddress1', pid11['PID.11.1'].toString());
        channelMap.put('CurrentAddress2', pid11['PID.11.2'].toString());
        channelMap.put('CurrentAddress3', pid11['PID.11.3'].toString());
        channelMap.put('CurrentAddress4', pid11['PID.11.4'].toString());
        channelMap.put('CurrentPostcode', pid11['PID.11.5'].toString());
    }
}


//Telephones and email handler
for each (pid13 in msg['PID']['PID.13']) {
    if (pid13['PID.13.3'].toString() == 'String1' &  pid13['PID.13.2'].toString() == 'String2') {
        channelMap.put('HomePhone', pid13['PID.13.1'].toString());
    }
    if (pid13['PID.13.3'].toString() == 'String3') {
        channelMap.put('MobilePhone', pid13['PID.13.1'].toString());
    }
    if (pid13['PID.13.2'].toString() == 'String4') {
        channelMap.put('Email', pid13['PID.13.4'].toString());
    }
}
