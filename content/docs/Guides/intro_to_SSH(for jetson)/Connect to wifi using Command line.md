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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZU5JPFO%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAaiM5tTnZFmfKt4UdSy%2FvLmEBxvzM9dZexa%2Bv8ykagOAiEAi4bNDsjBa8K%2BmyOJruZaAbpM4K5NLlvnWD6BONv3ijEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF%2Bz3B%2B1rY89zIXKOircA6BKRk%2BC9h0C4aJv52zfalq1tnukmwitRbl6GvgVWbIIriK%2FvDG%2FG9oQ%2BUPSlpjuecNWeECmdYhvZ%2BNNp86eVwniv7V8BC%2BHzAIx4rlz5A2Wf3X844mIZRYimTsXEZKmcZ5wfjAudBJ5KZu4mPhqIjmUyX%2FtA288a7peg0nraIvzRuSM8JwAODRceuf6Hb92%2B1Bq3XJWeCB9UygX9S4zMtZxFqHq7Ve%2BebZK7XvRQLgLsY63k9s690yd5GA0RWmpjtYl%2F8fPVape7KWhugIFhFM%2BOQ3ms8LyWBPDBCoESpdDD71ZcuKscgZNYCLLJDPUL85ErOUtUl%2Fe6h%2F0v3PoT61NmlFQDvBPMg%2FOuz1UdWWsqKa%2BxkT8BPvYHhtezlI5uEcpTxxqHjbAGyB37vC4g%2FGnzafg8yxd1kVLJ%2BlI1AsjkAPlfcZITIzEs3JM0tFuJErfocPxbd2OmTtbQDLIJiKnl2G6HqSrcTuF5BLOI4pT6UegztakWWbCbsnJatuBgHwmit6eSxi2eHfhNYXLfweuVCpPpNiXcIQT%2F9oRYBVHro3aTxfjomzUtaxGWF8cGyZr3K0LqhaXoGGKpSME5dpZ9P337PxITCdT4CpWjy52WYofmDycII%2BaxiqzMN3bptIGOqUBk8VxcwDJCiKwwkXrzrVucBRRHgvAsf8pKLawoVZisHKAPq5iKA6JxsLlBg3UA0447afgPD4Mv6VRhQwTFH3B8PPZb3o4fNnALezTVK56XbfCnW0ZFD5m1r8vYhdP9H6RfxRR3tYPZ39jueJ93NctBzrbBn%2FQpfQAiQlIrHpguvCrPAo%2FzCX0iIkkOgG%2F2mrP2uG8mzmoG20oEK6JweYwAlxw2ljQ&X-Amz-Signature=6f4d5a0c32a7c746c182e335caab49a11e31eaf4436f2230970dc9dee188abc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
