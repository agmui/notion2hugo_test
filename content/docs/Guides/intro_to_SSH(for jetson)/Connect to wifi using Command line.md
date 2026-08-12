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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC3M2H3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGjoV%2FVP%2FzkE%2Ft56NRdvVJq4SyDDVw%2F7NjDLiZvfZLwIhAKZb5vDkWqGVpihDHONvTLXg%2FhEaQFIGRUfFIAvENWMbKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik%2B9vQQfcRMyIhpoq3APaHr7zl7hGqHzGHj1RNwJzKz7R9CqaLy2DoBy8XR73d3PJsuimDa1AqBjFh6RdPs9kLGd7oHNwK5bziLgd6Nc7edQclHivgRE4z%2Bl%2FxlC0B8hCZ4bpXzHF9gRt5dxCqcza4NJ%2FaDitSBuuShmWfEXR5euSf1eMHfvFH4iUg4CkAJMLsc30F1uYXcFzg0%2BZpVKZID00JRhBWb9a046gDV1X94gGDas8KMxvXR4xk39B3JttZtGz3YhScEI0bYKKG9mO8pU2bSQYq6KLn7e7n3dMYO%2F0LZhEiljIVel6%2BD6tZ0plJBL4d5QWJuSWXwFYtNAlLADtd4UQd9%2F7E6chHx226EtQIKbgitBmqZM4yjtnGku3R3cLV5ebb4D6Gxz0IHT7BgGj%2FsnvCja3QqgdrJAXhFsb%2FlFUZ9Ncfv%2FV%2FpoKTddiedmRxuFV%2F%2BKPgtMp7hQ%2FMIq4Hel8cfcv1kfry3MvV3IN5BCQbUv59VMvtRcYiK0lUFcU60hMIuWReMyTeoX2HPoH6mvrfStsktkZ1E6Xfi9NAFVdjYRX3b%2Bj3CHE385LGjYoV9p%2Fy%2F%2B1TwRPDKnv2aUcytythZ1xTkAPQ1b4CHynWh%2FNfJ4Wwh2vopGFSngTW9Wp%2BOpFl%2FlSqzDf5u7TBjqkAREHMQR5aS4N2KQ615hajfZTtXtVtJo6fgS1LaOhAoqx0iTPEZkUR3f9QzlE5LhrOQ62r0WZz8WrWgsLVK9wm9FJfpC3Y%2BPX0Sv25RDBVuZVWudEufWtp26VlGYuukgSe8zuW3rUHtYE5o8MUdmFHXFCse05xNL1XMz2GsPMFtbKRwAksMJYacZuC0NUf69rRxj4BXg3EeiVPz31iZB7tNSY3RSD&X-Amz-Signature=43e1633afeaf15e846f904b521c34ee9088cacccead09aae64deddd2839b18d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
