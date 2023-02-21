# OPEN Exams 1 read file
with open(r"linear_exams1_read.txt","r+") as linear_exams1_read:
    exams1_list = linear_exams1_read.read().splitlines() 

# OPEN Exams 2 read file
with open(r"linear_exams2_read.txt","r+") as linear_exams2_read:
    exams2_list = linear_exams2_read.read().splitlines() 

# OPEN Exams 3 read file
with open(r"linear_examsfinal_read.txt","r+") as linear_examsfinal_read:
    examsfinal_list = linear_examsfinal_read.read().splitlines() 

# OPEN Exams 1 write file

writefile_exams1 = open('linear_exams1_write.txt','w')
writefile_exams1.truncate()

# OPEN Exams 2 write file
writefile_exams2 = open('linear_exams2_write.txt','w')
writefile_exams2.truncate()

# OPEN Exams final write file
writefile_examsfinal = open('linear_examsfinal_write.txt','w')
writefile_examsfinal.truncate()


# Create import statements & HTML links lists for Exams 1, Exams2, Final
import_statements_exams1 = []
html_links_exams1 = []

import_statements_exams2 = []
html_links_exams2 = []

import_statements_examsfinal = []
html_links_examsfinal = []

# READ EXAMS 1
for i in exams1_list:
    nameoffile=i.replace(".pdf","")

    importline = "import "+nameoffile+" from \"../assets/Past Exams 1/"+i+"\";"
    
    import_statements_exams1.append(importline)

    htmllink = "<a className=\"pdf-link btn btn-dark\" href={"+nameoffile+"} target=\"_blank\" rel=\"noreferrer\">"+nameoffile+"</a>"

    html_links_exams1.append(htmllink)

# READ EXAMS 2
for i in exams2_list:
    nameoffile=i.replace(".pdf","")

    importline = "import "+nameoffile+" from \"../assets/Past Exams 2/"+i+"\";"
    
    import_statements_exams2.append(importline)

    htmllink = "<a className=\"pdf-link btn btn-dark\" href={"+nameoffile+"} target=\"_blank\" rel=\"noreferrer\">"+nameoffile+"</a>"

    html_links_exams2.append(htmllink)

# READ EXAMS final
for i in examsfinal_list:
    nameoffile=i.replace(".pdf","")

    importline = "import "+nameoffile+" from \"../assets/Past Exams Final/"+i+"\";"
    
    import_statements_examsfinal.append(importline)

    htmllink = "<a className=\"pdf-link btn btn-dark\" href={"+nameoffile+"} target=\"_blank\" rel=\"noreferrer\">"+nameoffile+"</a>"

    html_links_examsfinal.append(htmllink)


# WRITE to Exam1 files

for i in import_statements_exams1:
    writefile_exams1.write(i)
    writefile_exams1.write("\n")

print("Completed writing import statements to Exam 1 file")

for i in html_links_exams1:
    writefile_exams1.write(i)
    writefile_exams1.write("\n")

print("Completed writing html links to Exam 1 file")

# WRITE to Exam2 files

for i in import_statements_exams2:
    writefile_exams2.write(i)
    writefile_exams2.write("\n")

print("Completed writing import statements to Exam 2 file")

for i in html_links_exams2:
    writefile_exams2.write(i)
    writefile_exams2.write("\n")

print("Completed writing html links to Exam 2 file")

# WRITE to Final files

for i in import_statements_examsfinal:
    writefile_examsfinal.write(i)
    writefile_examsfinal.write("\n")

print("Completed writing import statements to final file")

for i in html_links_examsfinal:
    writefile_examsfinal.write(i)
    writefile_examsfinal.write("\n")

print("Completed writing html links to final file")

linear_exams1_read.close()
linear_exams2_read.close()
linear_examsfinal_read.close()
writefile_exams1.close()
writefile_exams2.close()
writefile_examsfinal.close()