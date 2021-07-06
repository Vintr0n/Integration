
IF exists(SELECT [TrustID] FROM [HL7].[dbo].[TestMirth] WHERE [TrustID]=${TrustID})
BEGIN
 UPDATE [HL7].[dbo].[TestMirth]  
	SET [TrustID] = ${TrustID}
      ,[PASPatientID] = ${PASPatientID}
      ,[NHSNumber] = ${NHSNumber}
      ,[Surname] = ${Surname}
      ,[Forename1] = ${Forename1}
      ,[Forename2] = ${Forename2}
      ,[Title] = ${Title}
      ,[DateOfBirth] = CAST(LEFT(${DateOfBirth},8) AS DATE)
      ,[DateOfDeath] =  CASE  
        			    WHEN ${DateOfDeath} = '' THEN NULL
                        ELSE CAST(LEFT(${DateOfDeath},8) AS DATE)
                        END 
      ,[CurrentAddress1] = ${CurrentAddress1}
      ,[CurrentAddress2] = ${CurrentAddress2}
      ,[CurrentAddress3] = ${CurrentAddress3}
      ,[CurrentAddress4] = ${CurrentAddress4}
      ,[CurrentPostcode] = ${CurrentPostcode}
      ,[CurrentGPLocal] = ${CurrentGPLocal}
      ,[CurrentGPPracticeLocal] = ${CurrentGPPracticeLocal}
      ,[Sex] = ${Sex}
      ,[Religion] = ${Religion}
      ,[Ethnic] = ${Ethnic}
      ,[MaritalStatus] = ${MaritalStatus}
      ,[HomePhone] = ${HomePhone}
      ,[MobilePhone] = ${MobilePhone}
      ,[Email] = ${Email}
      ,[NHSTraceStatus] = ${NHSTraceStatus}
      ,[UpdatedDateTime] = ${TimeOfMessage}
      ,[DateTime] = GETDATE()
	WHERE [TrustID]=${TrustID}
END                  
ELSE           
BEGIN 
INSERT INTO [HL7].[dbo].[TestMirth]
	([TrustID]
      ,[PASPatientID]
      ,[NHSNumber]
      ,[Surname]
      ,[Forename1]
      ,[Forename2]
      ,[Title]
      ,[DateOfBirth]
      ,[DateOfDeath]
      ,[CurrentAddress1]
      ,[CurrentAddress2]
      ,[CurrentAddress3]
      ,[CurrentAddress4]
      ,[CurrentPostcode]
      ,[CurrentGPLocal]
      ,[CurrentGPPracticeLocal]
      ,[Sex]
      ,[Religion]
      ,[Ethnic]
      ,[MaritalStatus]
      ,[HomePhone]
      ,[MobilePhone]
      ,[Email]
      ,[NHSTraceStatus]
      ,[CreatedDateTime]
      ,[DateTime])
VALUES (
   ${TrustID},
   ${PASPatientID},
   ${NHSNumber},
   ${Surname},
   ${Forename1},
   ${Forename2},
   ${Title},
   CAST(LEFT(${DateOfDeath},8) AS DATE),
   CASE 
        	 WHEN ${DateOfDeath} = '' THEN NULL 
           ELSE CAST(LEFT(${DateOfDeath},8) AS DATE)
           END,
   ${CurrentAddress1},
   ${CurrentAddress2},
   ${CurrentAddress3},
   ${CurrentAddress4},
   ${CurrentPostcode},
   ${CurrentGPLocal},
   ${CurrentGPPracticeLocal},
   ${Sex},
   ${Religion},
   ${Ethnic},
   ${MaritalStatus},
   ${HomePhone},
   ${MobilePhone},
   ${Email},
   ${NHSTraceStatus},
   ${TimeOfMessage},
   GETDATE());
END


