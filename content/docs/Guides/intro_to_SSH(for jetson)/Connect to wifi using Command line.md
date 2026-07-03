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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNZDHOX%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBonTRdkER%2FtfqpAe6VDQUEZgKYQomf%2F20zQV5ixZnd7AiA%2Fk0HpOzJFv2X8TFQzxoxG6KTj%2BXiYg3tu49SqMImFUCr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIM%2FadyjPPQQ8hDyB1BKtwDGiOJraOq3uAYky6WitFo7OfRINlmTVRmFhkO3pVkzeH%2FQohmcwEN4JnertJHPpxexloMm4vnSdJvQTmDton4%2BZ2iOOc1BHQZr8z1HGY%2FGNS2Y9ht67%2Fq%2BaW4Dxo1g2MXKv6AMfC%2BlZzeEa%2F7UTYma6sKySEgVTTOxSSyxnYVdwHezb3PVCR0LSH5RlUnRoJBESwhqxp1DjBu5sHlOSQ8ESFJkeeu3j6kaDNwih8LqqUx7aLY2RLchhu7FGQl3oUy6J%2BVajoWGsRpwlju3JaAH7B49Oq%2FBh%2F%2BwlsaIB9wC405GFCXu%2BokU5J0wp%2B17kFLLcnbtqnoP%2BBnndm3mvUTmYzVAwKwmrTydeaEpuF5jeWodIDHfcP9HW8CXRlqjT6BzLvyjXAtySe1f%2FWknqaQBEtllud4yDhrkj2Q%2BfBFDw%2BDFNA7o0BW0Dj6%2BaZuCLn8gOQ89y0FDml7CHQahGk7Fxbl%2B63N14GpJytUSSMwK7j8W0IjYmXLw074yb%2FjIiMbVxaRHqkO6PsIc3nXSmCIxwiFlwz65rOrJgtz3AbSu7d8hG9ZIv0KZKXlrDcsYdjWP3nG8jPMOkSy%2Bce0J%2Bsd1sZotBvZcxGIuD%2BJHrqbkg7oadBgzkThiPANcw4wubyc0gY6pgFAv4ryL0PU29fhwAd%2BgkXtUPIDjYgM4vb8lQGiUX2xvRnXOGbeY6QdndZ2mzO5ynThy5V71ihw%2BKz0FjmgnNiyWwRTmaIPXPsAuT8J94R%2FMG3pB%2FE0Nybj2J08IUQshASSFXK6nghSbHlu5ysP28%2B%2Foo2AhRdgi2fVWdIhnbbzU3jjx8i0iV86FeZ5FRCnqkkr2aXN%2Fq7s%2B7oT%2F0XXqMKe2yMecmMF&X-Amz-Signature=14d8a2a3f0882ab9abdc968463e8459d4bd1b22518b4e94b424ee1e53a5eb728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
