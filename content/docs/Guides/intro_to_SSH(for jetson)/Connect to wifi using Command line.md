---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNO22TZ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDqDL6lJWcR6SNH6JYBvgRVylaiWog82x%2F0xdGSb9SPegIhAO8CedkAMUxbuiegqobSy3bs7tPGR0VxArOl07wcxbroKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtlZikdSSdndrn1T0q3AMJeZjBFqiYTuIEp%2BJqEixTFY5%2FYGXweue7w2fBOKRq8O3Boqd7w%2Brq1%2FsKsc6GWqMU4G%2F%2B4bNI2vUwbLtN2BAELya2FS5I8NEuc1zGeE4oHg8yqtBd5bCeB2tkraNp9XXcHSQv4zgkBaM9ZbAaRPeqYROyJVyOmWOmphSeZpStuc56W9qhuis5xDPYjsXwlV%2FgfVEDfHiLt2LBiyxZy0RMTnj9O%2F9%2B%2B%2F%2FtJTKs0RzYJBADkm2E4FzR35F%2FJvzWiD7TZM0ntlaPGZ%2FnsAe4Y5G7aYs9tgaLPrZShUs%2FTaiJswBwn2PXLtSmZBlXxVmj85fveSFH6rDNyAP478z2Xh9JupUtfIob9GSl9KEf5z%2BZYa5LnCao7avr3aLWP8%2BPmYLwsp2srQTrEKzvQBU1%2FBNY%2F3oXY781aWPYxR%2By1PH%2F3bn9uslPUNsMXzf3OLkrX7i1O2aBnKIwilqUxJU1OzXVIN7qzlggFszWXsTDRVgTayFNkZ79Fg%2BfOw02ABy%2BslbDbRMg2uhVLV%2BbFHkUvI7M4hwsLVCC0xzSR7Yg0c1prs8ci%2FXkVWxhhRRmrxE9TKLOmSwsUo0Mx37sDIAANtyRY8ebOpXQD%2BPft7IKsZ1eXCDuvLpXQpnraaW17jD%2FsfnTBjqkAQZEstJxKwwhPAcMVdWZ4fA%2FDNZ3d5PiSjETMNDCu0aiX%2BZgvKQgM7I7burwMiGB1iFzeg6aEuHnQzq3CxpZlwb7JrxMT6pMfcvDIS8f%2BQvmVXJgPTq21HCnOEWQVSOdMGfZYhfoLCuqjaRsztXJJfSsXmJJaH3vjN7CRGAiUWEeECZmkRjCETSpGdkyYFnYK%2BKsZboKrmGsuN%2B4SrT9D%2B4z1lpF&X-Amz-Signature=1f70c83eaee19469f5a3d829785ac75f12c303a566623e8f958e9bc5ec297113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
