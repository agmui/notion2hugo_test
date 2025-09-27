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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPZBZAV%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCH1cxdZB4sCjJpAlNKH23UmrXse51dsjVwSgc1q40Q3gIhAPJBd5BX7KHHCBmJl5P9alN5koMC0jAYF%2FXeSd8QnRP%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyfsd1y9TdcfxHT%2FeMq3ANqnSb0WC4val8A0F3kN4L3cHMW8kzaZ7XFy1QCLssVYhjIvOmC49N5XtPNW4RR%2FWtLZUuwKbeaEAIM1xfBF3%2BaBvHopyWBvN6fZuz5pqISxCgtG7bkrw7UKHiXhEdGAvxoAer5Gj8DvEZIYdnZ87jAIVK6ijr0mLzVxOLwoZR%2FtXUK2D4sKvbtYThkPhjq3i%2FjKZXQlGENrgwg%2BXlIUv0sisqaja08kwf0pkWoczSLQAymdpWno9dUZxSST3bxeJT5840l9JOIqpa49I7MVgDhUKZRhgMAiSSfsPeOAu3kahs%2BJHQZMjEApgh0lz2iTQ6tWDvfWnRqbbGt96dUw9Bu1b26TGE%2FWfbdf3Nz0Z4RSaMNK0dnll%2FLxt5aRn9iNa3a4UkEaUxOsLyBtLk3sPiIjtuMG2b95a8uK%2FcYcfKlgWYwLOmZ0R3DFyyrxIOvoZN9%2B1%2BSgoJI6NM7lH%2FtCltPiuqJl9wZF4OPJ1MEVYfCvuiM3r2kCD%2B4Vi96QSvCwUXWmob3y2i84crmD5fJd1docdJDlfODBNYWYWceebZX0cf2E76yLMnGyRyvGWhBbqDNISREU7xFP1z3jzn2GaF0XsPcogYvfNxkGfOfQDOguOLfZSdHHCAHT8ICmjDQ59zGBjqkAU%2F25qWprdsJ189F8QmJKJLUh7wvpBWi30W%2FjlWjwUy%2Be8zz3JgkpjR4loNsChZZvDq0Dekj932KkV8mDmj1ZxQDgYWN7n9u8OPMGr3z677wgHM60VcJ6xuUv5ONOCOHyLg1s5VKRSX73AV3kzP8f%2BgQS%2Fykz3pskBnApQg9UQR8De%2FQRqqbt5PnrJbCc2KspPd1xAnQMTZxnAv03hMn5ULT8Laq&X-Amz-Signature=c3c2dc815dcbd41202679462d26effc710cf10e3bb2dab94155dac937d27da37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
