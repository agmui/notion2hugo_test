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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYOLA6GZ%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCFViDhqVnWwJeKpr%2FchDu9a%2Fcbv7YK4jNEEMgfle7PDAIhALr5RSWjyIaxIWzLw7ryww0%2F9cUpCVyFxMw7b%2BMyXLoiKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwftHDZYEGo7rLHwM8q3APSuYH3N83UN8ymjGOg8IDHBxbt7NJYuJV0JN1G1JiwBc5Fpq4qqj2yqOUo3Ooom8yzzgkNLJ1XuNZEO%2BpCHV2TGLC6w5Xsm4P9qghMLraF1ygEwrMrh8r%2BA9d5LmK9VitvRHqBN117gEwI804fy2oUbfXwkySFdRbaKBLL7iqPUpXjbAukY9TLH97cJTPhBfeWxQIUvo9mGD3boe%2FvyPA0LVcZTEKtfwfNlOpuchz96PYYeg1pVEZyZeSFFKjiIZKcQG61cyjIDnTNRCRrYjlj6vm%2F98Qmxv9avNq5HOLoYj4ds70PoXsjKJkrsT6poTujZ9loKI0y8RzVCEnTeCfW6070agfAWLv0R6xiz6g%2BEV65xMo05MnO%2F2rtme2Mhb%2F0f%2FndkO5DINCPrualeQ3zsUGqRa%2FJdCXML5jC3AHHAyKH8U0%2F43%2FqNxJQW5jK2wsaZ9PmanLI96a%2BIKst68%2FVV1S4ncqif%2FwmUxSOLRLc%2Fvysu1FQqUuVmtroRzQoQY6MxjCIKOr%2FpAXQSS1smI7sGfpd8I6T0y3wA%2BSf6hSJFKsARL09fnz5KJahMkCBDiDVuN9AatCeEjAiNtlz%2Fc49z7mqqrCSwLfLG3lN%2FQFNDn3TdXJL21oWtOgW6TC%2F55bHBjqkAWHh%2FsxxlPEkd0ybETIStvKzXgO%2BcISIb2IcBYkreUbUj3yuMFsAQVVpyMIARvRZ8C54t8ra1mC0IICr5ddAhj%2Be4Ex5ASUgvqhXBE%2FUCpOS9BKu7S7pELy7XY4mF%2F40m1bCr0cI%2B8JQJavq3ZIo7mO6ffJ1GK4J82OMPBg%2F95thnrJkB6EunzEkH8yt1o37ihMYptc9inuLXv6pQ6n%2FBwe4%2Bfmx&X-Amz-Signature=420b200d6a54f3c72036257c18d22fa16531132b1df75135b2bbdaad22ac0085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
