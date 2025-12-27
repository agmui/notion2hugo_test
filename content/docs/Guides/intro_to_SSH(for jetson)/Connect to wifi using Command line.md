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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIOCLQF%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsbEnWvKn8v%2BSZJa3mabliCBCHTkzK161w4GN7c74OvgIhANbjYorO5b%2BAQz01zPZDQod%2B%2B%2B63aYC4F5aR3Cj9u9M4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyAb6Dmg3xAKf%2Fe3EMq3ANlF6b2etSmU2C97okc%2Fyr7Hf%2Blo9FboucfP2yPmFzwYriJSqihMkUNa9sHMTF%2Fq%2FhNK4iisgKM6iv27AVZuq4CSDaJNhFTVTgh5ygJ38yjvNR0Ml9UMGIUtob0QkRFtShZt87YTCgIReRw9TIBQ8dziAqYJwEhMUr217yWxm34opd4JEAxdszjm0WoyCXkxid9czvcGzTzjZD3o1eNXYIkfuDmrxTLhTbfoqeC%2FPxknUgZRzbJkV1BHYbG7SnA%2FywIcfzbWivugJYVnJ7ebmSPVsTbb1SIuYKSQe9ruw2yFAPyZC7DBazV%2F7UUKjZGx6uXL4wzaQGWahFmQndUMt7IkKQgb0eFdl%2BSuaspCbygpzf72V8EKgpB5lKeTBGo%2B%2B0f3pdC2SSUQgb4VcPIgkbAmdav5JtvJkZOWdqBbxyDr9Badv9lJ1qFCULEhF7XSBXzpToMqUBYxysKIhN%2BZS0bih7mrZ5wgraNtSfg973lSYLt3U4Q8SbvN7WQ%2FIwi8iaddt21MZTVZhRRAJMNnZDbkeWYc1sufXuyHWrcebsNJP7uwWZjv2iZFjBIWCyXyeakCYD6PgyVUd66ujZVNywn6XLxuxB6Ov0p6ULret7FpqjMSQoZSd9%2BOiszdTCI8bzKBjqkAWTeyMU%2FRU6Taq1JBF4Oc53vkWcX8bN5XurnH2tpljuguCzUSAF9piM6BzFiv5o9xIIHf8i5QlzwVw47fLIMfNf%2B1UJX7CS0rrkX2u9fDuaTk9%2FdIIASL7FOzqwbl5i%2FZCEuoVWWJcWOKosjbaJlcENUJxNHEyX6hX6t%2FvHBYUjaW2KXM%2FobxxgW6k3Y%2Bm254lvhhl9vPd9ehYQUKHrvYFvINvv4&X-Amz-Signature=ca60a6b02d03c83681db33034237e3c6ec77545a459cc6cab8005a0b5cff794a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
