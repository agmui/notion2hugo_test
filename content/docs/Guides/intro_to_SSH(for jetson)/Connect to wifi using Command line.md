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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KAVKXE%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgo6VbuGYEwV0NCXF35edlLJ2Nxcc71gKf8L4SYOf15AIgTeC2Lvk6NhD5ZTSM0e2n1MMzg%2BQ7PcSlvVQaqqGa%2BSYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB86IEeDFAU00dzwOyrcA%2Bm50%2BfOIuHnS%2Fck5z9mvC8uzBWxVOdXXHZxcUVLdu8hluYwy0UldLhpSyMDUkZIH1nx6Q2Lk1cXEMLLzDapg1KagcGJeXHKVwlosmONocjZ7FVg4HJvSuGPUlnwSEho5AYS4P7wdAMSHZhCZPs7rX4uIIQ%2BTr%2FLvv7PGe7iDBljrH2h9n%2FX0oDqlwzayKiLC37HfKU%2BPONxAl8PAuydqUEexp3e%2F70z4ATqXP%2FKhcATue7o5SBltcdxt01dxJ432e6UAeGmL4dgRMVF0ofTcAkDbSrmL2hR27RgTotgaSkKg4qQu1djWe3XbVVExka0C7R14SZXFQj7YxOLbSmXVR1ZbMIpK%2B1yMmUH%2FLYWPfphXF4b2IOjdCbp83H6qVn9aGf84rJJCKsFBVB0zOPdF%2FqmKtN2Ns0lnRjztNvqlzT8HBKa65UzyLyoHqkK7iIFOO0kFTskXcLRWqzQP1BGsGaBObrsx%2BImlz9TroBTgfUKGRDfeIoDV6ohp%2FXbykL3PXgHYYRTc7AaVWpIsp9iEQX5SZFxWJVso75kmzS6sPbM5z4Olaf1JEtI9XhWqhMEavTN3W3dJ4j6O90x%2BYjqHNc1UJEc0IdMkiXVQdPjHDONHa5391uwxFb%2BaxRdMNLBmNEGOqUBB0SR8hCJ51e6LGJ4S2z6%2BY1E3sLinOj6IK8zFub2i3D5DQaj6IcKIaG6PdAl4skBx7EDkrVlidP3peUBN69AuDtGZ1Wf7Gg3Xl90eFHOA9heruF%2BM56Vj218sP5CWl08P2ghGnwQPrP2lcsF6szqDcP2hVUVuo3kYcXPvnztZWsF2YOeWA0pPfX%2BeXJz89pz5DByX03EuduugM7bMJfLjJrSrk%2F8&X-Amz-Signature=a7284b8e73e7b9c0888d8788533ae6e04332d47374b90bf4376b0372dfce6a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
