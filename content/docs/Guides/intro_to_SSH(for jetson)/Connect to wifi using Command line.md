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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQH5B27%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPrMZRR8UJaqIg9F0kNJ6OASamUopOu8xpdo7MpDd64AiEAo9aR6bhlDoFK%2BHPWLW783tlNVF487ZGKM0kC%2BFSyXvwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkq9VSWEHb65bcpCrcA0ayD4DLxpY8DQVNLTVbwvGYorIK71qwILzSeRTaL6kJdxA4E9OKl3GP%2BRkhI9KTUPbIoUB4JjxHWhryRLj6Fd59CS2phfmRJA6bDeXyKN4jIawQguejrvnEQGomqUJgd0S41MeQwAlHY5LVTbikdnHVBCu%2F%2BvH%2BpsXf1FAREqdI%2FGx9S%2FzCJyd0CQYrLmsQwx4zIqJ46iQIg%2FCQaAKDQoGYy4KHddIN6DUK3YHDsVWzEpPQyDzR4clE9cpXJBoZ03PaYtD08QkqIyhdMxc%2BFKRZ951nlLGaEV0RvMptUBJkV7HOT8Z9DhPxAl9BYeWlIW5JAH1YwVcyvTe%2F3WCC9DFnnvTlvry7B%2B1I6Sf4JydYWsHAnMbpVe5UQH0QwITCyIQUgSzl1xMC44NEZtrBJ%2Bmqp5KSl3QMfvg7dt%2FCyobVQFjfvH37o%2Fv9%2FSSyHRfX5mSuKrnwd5z70EPs%2F7XN96uYjuWkDi920NNRwhw2mFh%2BCV8yEAxz%2BF8hfBx9kv9Ztmhh%2FNBLyesW5kBGT4tTmFwzestQla4tMJQx8zTbTrn4c1%2FDhhAE%2FMDDae7UFWSLli79OqPEtlshN4bsMf8eSqwFZ39OBRQ69UdarqpGH7X42fK8z16GWA9fyBUoMLvV18YGOqUBYeILAdOfptWszgezVsVWbqU7Eb1cbI0Z2Z25RoI%2F5QsRiAbFjGfZyck4LmiIXgMbYzXT%2BVZJ%2FXsYB3KxxwNeXfVstNUsNnzv%2Fe2XxI%2BhqKh1qeumnBuFgIDFAKWCRmZzU%2BfumF%2B724qb0ZptRopfonLeZ3S4AhejFUJuszrLPx%2B0hESgJZH%2FSLlQsbDDo2He%2FI9LSlSGgVm1s0runkTPkaC7GQoq&X-Amz-Signature=3297cf58339299ff29ae14d6f27d3ca4f2868308fed1bddee2f70326d2501874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
