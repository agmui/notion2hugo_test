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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGWC6RV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtquxP7AcOVg9tsIW25wBZHsEmp9KAJGkNbbBXW5VcoAiEAgDiJGiTxb%2FN8q%2B8540tF1C1vcxD21mJkyENMw27WkAsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDGnR25peeSR%2FpVvCrcA1u4ewCHq%2Fn9pL8X4g49dtTuLd%2BRe%2FxDbdBVJgn7mv58xjbGQ5IK%2BfNTK2YrHw12SJDYQaIDq8zAeOwwyHVC3DrKSpvvHUUydLdMnX2q2Pqll%2BPucUih8DBwptAYVZXUEtFIJrNa%2Bx%2B42FiCLoiUejgFZpoVG9vICQMrMP7Yp6ImHKbk05Rgmqd%2BKB19dFLJA11TzpbyoBwQNVXH%2B6jqPunwf%2BXdRgnUxGROT5Af8544dqUr38kgGhO8d664%2FzFdSr%2Fo3mU4qMIV%2F91N4%2FoT4BVHAMa56W05PmZqctOePU18rPD6EDueWDRvHZ8JjAgn37BzUPWc8f9PDA%2FP9QuOvlWPHkkYSpqnp71iswNYR5QhC%2FmV5C2%2BM2XNCzHrdyAwemCEsn7kIP2wZgKtOWtTvNqaMs5OGlpm%2BXp%2FAV0iQ%2FnBvMKsycu6W2uTyRkxlgE%2FrLE%2FD0JgzDt%2FVw%2FdQem%2B8W8M6JHHcBhJxob8ZSQyRP7sUuIByZKtF8GODq0HO3N%2BszSeGz81lhVNYsRcHhWkgrzLvmP4fJ7SeH%2F3q22efpdylcG89nFtXfmroDre7vdj0e9ZcQeS1s4GIYYXu58zEKYnuzYtbjNNYvtQHWBmXVm6R6jsvPkWgVn4hH%2F3MPCsjcoGOqUByo2JLvn28nx0vROHW5CEUF6g7I%2FLeYsiDXRA8SHiTZOaRlrFoah1%2BKFMLx9G3d7rEwahOp8%2F1xRcgbfLFe%2BkgHATiwxiEtFFnGvU%2FsHN2YbnbobQip%2F%2B3zsinD1%2FPi00DnXI1xrLEmzVdZ8WJCZl8JGD26OtW2S6s10GRLS8RrSOHorImflI9KOjUSMmWOiEElFO4P1Px4rLELPj9iYfDhACtUeL&X-Amz-Signature=daf3d057f3a6a24e66e408fde70d215041c6b57648201490b7536fe11437653e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
