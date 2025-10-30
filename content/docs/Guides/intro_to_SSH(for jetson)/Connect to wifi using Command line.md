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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GAUTTU%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCh7K4diketvp3BOtetUuRGU4SDl0rO3XfTe1Ge5sS3hwIgM%2F4hNeJAj%2F5il%2FZeV%2B%2BjmPLiOq0Cr0bJTVFubGw2kGwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUXX1G%2BAzhZQGgPuCrcAz2IF5mZ9Qe2zZcjrbxinzfedAUhQ%2Fa0GgcyOefyH4SMMFZDLlqnK2g0dc9l1p0F4yKr3Z9HnL34P0u1OwGAd%2Fm9rHHYnG7nGIQjO9qevGyTf0u4MMUWdOokTRToqekfRsvCocGaK4PN1K7DNDSy9X13OWkFIquFqjWz7NtLdv%2Bum9vblbSZgBiLeUfChxpm11Vl4xdxVtZ7eD4cNMXqdkyp0YNY6wguuXMGnZGTud6wgqLiS8hLxTMWC0RUyrGzshskVvdF25zrNp72CRvDXb2SSzXm5NuAkH3Gc2aqOEbQHxt2TwdBX72iaN%2B3kSGBqX17Tt3a4fMpHaJxXsAHHeNeLs6xsiHWPvT%2FeGZIhjwJzd5d79ezRx631dOgLWkMd7FdQhDgT3zdNZ%2FxHaNk7A6RArTYl9fOXVJwJhYkumC4UCWCUBMoiaxXC4C4FsRQbeDp7HKhxIV8lTIHr6S0IkK0F0sC1u3udnijR8%2BM70nfdO4vXrvaI2fxJT0V%2Bk%2BDQMwyU5z8taRgHYHwkvp%2B0FMJ40FZGIOJPY%2FHBKdhzr8P8wRN9BqVpdBdonk%2FXIdovO7Qn5bZuKCiR%2B%2F1kZlV%2B%2BL3rAtVzsa3WcKHtI5RaCSm6WV0SlTpMypjLVzIMMD1isgGOqUBHAjloUYimx2v2v0nefuAbEu%2BOPclHCb%2FtCQqc5PXAmSLdt0OJ1A9VdcdJ1FHiiND3O1n0kxo%2B%2BjuL%2BXlFEB6kGQrXueR5IcZS5%2BAuz0Q5t%2BrxY4EtKd7aehqnIwU8GVdXORG6zo8CqjDaYcbQo6%2BP1N%2FGQBHuncxjadyPt2BjX6KTuey%2BhYItQG69U%2B9a02f9wXHSbu3mEhJE%2Fp7DeyZu281ztq9&X-Amz-Signature=e07c935d76594c423cdbb4765ffa3f9d9d6dde3910958117d9dd00c3683a9cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
