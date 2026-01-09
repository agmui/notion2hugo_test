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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2YBTDC%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC%2FbREvsCL%2FbzCbM1WH3DPSvCdlZtlsG1MhE4tADX95AiA03OexHbkFw80R%2Fn2vuG9et60jdyX4%2BmlaXEIv2aJC9SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QPl34g0qZ7TVHe4KtwDraMjj9JgxqWi%2FPLvPm9CUAuwT6otlcLNr3Tk6heUsNzojIeivkMX5YqzmpsnlGTZjOJYFquSLw%2BKTniqY7efXUyxBaKd3ICIy35PL8vzd4UtjGJXx0s2JbxtClGIInpfenZYS0QcLB1CysctefzKRDnLY2oq1tuTc%2BVlLt9JlaMkMsod9VT1Qo2oM8Hwtjk4JM7ykeSesDF9W3OndhTiFqQcCu4ZUmda1WXRhPlfYNY0L%2BJZK4MeXb49agoKhNDvAV3C6NBPbMdWB5L0VbHradeNnmf5N3UemzmuKBaWwhbm13JvYip4rOa2kEWq7IZlZVB%2BoA8sPo%2BrUZuL56oPL3nl9qLGZFDj5fbo6G8eqFTjqg27mgnabdbzdOhHnny4shqP%2FBJQaNtuyTGx12VOoVfycX7e4sc47aypcQ8Yb%2F7CV79upnmr3qq6U2x12%2F4BT4XmBeJ0bSyAkoNwihggHK6pdKjgFRuidmOJcbfcG5QaJku4H05WHNOa1OpJLgAkxWN%2FWq6DCpwBpDJ%2FM0P%2F4EDG8HlNo1n5XQczEuOo%2BfcITfzLRrfs290BeNEVcCKrbx2CtCIVXrMD4C6uEkMoz3%2BmORzIupYBrgUkwpYbv6ARfR5Iw8NONXLNprQwgqWBywY6pgGblszrlfvpwihx%2F3xq%2BED3eo0Q8sXTwMa1%2B2pv8Jp8AGI5LnXWEiEDCJYD0Ny8zcgkm3lslmEMks4dPCMKKc9Rds5sx4osQEXVkV0siY67LGDDt9mL2kBeSX6Dw0Vn30vOGhpzrJfGU0nfkM9S%2BZaPvCXSc%2F%2Bvbym9j5YRP8ax5wieIfCpuvQ08z3nw%2BMnv8NZ7b9CWdfmSn3wpRbwVWqwNWlv9hjY&X-Amz-Signature=1032337818e1b8c8d193032f6ebf736fc83e1366e32c5fd68fecf1cd96da48b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
