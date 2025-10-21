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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2OVWVB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICm7eqKKxPKUJPUmU56npaH77JvA1gm0ffNirUABr3fMAiBBYAF%2BtffoandJDvSpYE7Ey5cqhC9xOb1BRYepgYwj1iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4fvwJz%2F2UF2khtGtKtwDXnr6tZMcnW7JpMqJCRmM%2BsT4zBfVW%2BTBED1a3LsIOFlBuCjyTPO4pF68gB%2FYC3F3fgBDARQ8Rf2QIci4wIekXyTHgCdzjFyYG%2FyC9JQGIHKRJw5USdxyfDpWlCUOULqdjOFHjlOBq%2Fqkd0C5snU5aIPS8jl0Vpynr91cz2gSCc1KLFP2bUoqLf4SSJVYv1BadXoiGWFk9LpI8NtQXqBkvidX%2BNaheLVSaE9Bw9siMirTZyETegu3vRSewQwx0Mh76P731q9chRv7u2NLN8sDuudFCLQp%2Bb4xvwHTE%2BrU23ePf14m02Ds8Y3fTUBdQHezn03ZIyIvlpqarDPcV2C0D%2FDnH%2FS9Ia2H4KzbNkDmPEuAA8qJgmFpKhNuRkcVc8b8ZHNarKg9Zy%2FyrUSZLMG7PlZKMYwwcJwsW8%2FObSJjyUB%2ByRLs6PX%2FDOW7FQISELSUTZ6n8rSQFIwxwWemqHUvuuS7Q2aB1PzYgnS2%2FBas2RvM7gZOjiQC%2BlAJmb7RHNHQSPuccfF3OYNqCHgZbaOm7lre%2FocuXMhm2GAKFcLr0CvbZno%2FR6mO%2FBjBfkcQAx%2FVS9qfhY2WpAcehOK9FGNIMnB8SnOu1%2BfwGU5QKS1%2B7be%2FKpBnBW%2Flbr8LJb8wu63bxwY6pgEFJ8YnaZAbtVduEFx%2BQ3oC%2BGqmyq2LaFLOeXCBxpIk9NYqsjNY32i5hSul6ehYmfdYf6H1tJYSirhPP1xHod9Tx76jhElQUT0Btd%2BLTprlP8GbzfJmwQXdTns%2F%2F6bCgi55LC%2BG0WfCM2cvjYh73Dhx5BrAxJcgaVdc50NexZtPul7VXxpcAC3oNwBQS8W%2BTRJO2%2FWtppxTCxposLB95xvL8pnAN9pj&X-Amz-Signature=39e10eee6dafa6a21099d7fc5f660218a725e490904c9f16ea7e753dd11dcc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
