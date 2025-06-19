
# Common Notes

> 2025-FEB-13

Had a little issue with the list change on the Lenovo. Somehow branches got
out of sync. I added individual folders for each host under the DES folder, since
installed Chrome apps are unique to each host. IOW each instance of Chrome
maintains a database of installed apps. The entries in these databases are
specific to apps installed on that host only.

In fact, each DES file that doesn't involve Chrome (App or WWW link) is
okay if and only if it opens a web page explicitly by opening a browser
and passing the URL as a parameter.

For DES files that open other resources, such as binaries, the path may
or may not be valid across multiple hosts.

Bottom line is that DES and LNK files are tricky business in any case.

