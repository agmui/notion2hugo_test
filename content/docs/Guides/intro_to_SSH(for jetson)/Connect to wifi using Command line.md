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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75BYP3K%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXwWmIKDKnYyDQynMdnQZMMePz1QZZqSc8aBwQUf05zAiEA67op9HpsvKp%2B8n4YSgqyDqN9%2Bae76%2FybkM3ox9h9W5Aq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIxFQNuHJh34RyDRoCrcA9g5z4nKlel7Mqbma2wJJs%2FMrjyHhUQ9u5UqltVSg9YYh%2BsgypqRYubmtuDoIBRgKKFQgVZ4kRjS4ASwWVTlpw0kQQ%2F2EaQ98OBFpL6msHUfYg3N%2BcWd7ef993NZdWSUEO9YOAE9hZhx1IzrSCJ46k5kh8Bi%2BCAMND%2BsdaOq8MzO2x8un83b2fESvpbpLpuUnp3WFbxtQfPyseYMNfZZW5z9JStRysJ5%2BllGzi2mOQLKD%2F1MfWDPeujh0Jvc94FSeTg4QayL4P%2F6mWbb78gvuEX1DTCMm35lceR3VkFvBp6DYt%2BBO81p1Jr5KNNsxmkOmFYldI6oKcKn4MfRfY8mld88wKvbQq03j09tELp91W0NCO4q7sKhfdQwh7EfsXL8XsXG7D6F5B1CnRTXXgYtAdN30nZd2U%2BuPq1P3tNZiXsToDF5OUBG%2B1oGvi%2FsK9bEzpQs16NtAPPbdoLau4sSP7lf0zvxHYpgNazmlvQqzsnm0CdOhySwRShoNVbKjs3ok%2FJifHpJminKimhCA9VYkPnoPmbkl2RPRezU0d7rbpUvqjM25m%2BolEHyP42frMwaICzY%2FEcJJyKTkrFT9XVAj%2BR4qkS0VdzBpF5YHkzSJISaCHRWyuGGCkOJ2Yc7MIHw5ccGOqUB%2B0%2BOaBvUtq5kZJYFOIF7BXHrYuBb%2Fu1J3WHDESNEVXR%2FPgnMn0tXmVl3AoBpyyyI%2Bh7%2BxOSXg0YMpPrzGjFaajRE%2BmABUKBAFL%2F971%2F3P2oOY%2FG8YX4hobZhFtC8y0GHa6wDAGCadTNISpRKsqHi5RTreDvrvU%2FUGu%2Bv1quwSPQD0RXCr%2BKO3rISLCoL1OlDOmZSsnZ9iAYRvsFq9fofLyP9QhlY&X-Amz-Signature=54b6d4b37032464093cbe9921caf02853f87c38e58fbcf735c6c6d1f29ba14f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
