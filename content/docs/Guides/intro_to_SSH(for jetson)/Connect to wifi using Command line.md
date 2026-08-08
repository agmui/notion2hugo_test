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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUECFIH2%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9MziUpQLyFy9iREt031D7rIDUwl5aXSxaSZ2RdL6FhQIhAIl0x2rDJXqacL5PxZD9kQ7cEbO6rn3tdtffuquxxrczKv8DCGIQABoMNjM3NDIzMTgzODA1IgwUtYHrz7frAyQYseMq3AN3ZrCUcfbYs%2BVy7JdCUnfOO%2BzJW7MAp73%2FiO9K4e7bDWMchp9P1FjpQg4aFrSwohPIaHZ2VWzbE4gjkvmwPGQbPGCzIGPh79H15iY9S0x9TMpVCEYnYtM%2F8choxIH0K00u9xVdtQW6KCmE4hsxrr3KjUp0a6NiGCDq8TeLJ%2F1dVTxPfuPFW47xOlXxluNb8c68Mxa5Hrncf4%2BDt2X7Q4%2BpCHku%2BHMfXZ%2Bcscwtm0EkvfZ7SSiKBNk3tOCo%2FdiU4FzQxbgOeZtAI2jwyf57nzaoX6v9S%2Ftd8GTdDzfzDVo0ZUpNkptTSz567bvCu485U7Cm4iobbbiX0PrWnqNQzvJ%2FH%2BylEIFWj2PcMZNKf%2BZAWDvrtj%2BusOnzMXYqfzDXaH6pBLL86nRZqDhMS72%2BI1KyztH1gBHcy6dhRokyn1xmdgAAh5M3erxs%2BTA6khat3x%2FSVHQOYg6zAXs%2BSxpu2T7J8KacKDLZGJic7YSGNtTmXJnzYcPsYGI3nJ6jp%2F%2F2Xj14V1LfjwpwoUthxlzW4Qi3bX1M%2FUYweu0w3YjhzJLTQrI6T8TaTzhOudENtcragdDKhx79N8NzabS68wFPhUB6AAedeZjiihBKXXQHca34cwtykoYa1i3KAn9zKDCY79nTBjqkAaclF6p96K92oE9%2B%2FOJfX%2FfaQ%2B8%2F%2Famm%2BfB1qeySvMGat%2BqeF7kEKZAJsNDwTDXchxxkCulvp3c547FHDyAHNmm7fx2mHShClsklYDrPHAnLI%2Bd3zV0KBG6EGbdVnUo45jUFLSGepYacbio8ZlswZTXkSIovXVAyCuj1UeE5UFw8MvF55KDUZXGdQ8tBpmLAB7GlmUaDMvexjyNXp5zcWUyo0pBY&X-Amz-Signature=52d766360268643a04c4015722ffa735f97587a6fc7b255122a4755760a52837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
