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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQL763VA%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVKwu1HgD6A5kz8T%2BqLolM2hUdiCvndqTW639fH1qaEgIhAOJbz%2FpjFROjR9mv%2BIrbKMUQzN4RZSwwjtY2s51WnlqbKv8DCG4QABoMNjM3NDIzMTgzODA1Igxz41tnVjDSjcgC1f4q3AMbkVoOR%2FXRYeojngx4gsVAs%2FKBt3aOsKq8i%2BDdSzm3pfMkQFn3jXKfXNDbiVMX%2FzmAbUCjEtqVbZGfn8avczuBhTIygZMAJZ%2BcPdV23%2FLYUttsbThKCxcYpWWX3GggXCrtISGtouLSBsM7REWt5Qcdh%2BRBT1Jahwk6lZbfKxFy34hW6Rok5o4NjDRWmQAsIqpiuLgWkwHTmD9jGz5RsQIqikGZFYH2M9OdR%2BlKtyj6zyUhAB%2BFimJuzfYfdRZ4MZWrelEMEOZEEI1X%2ByboxOhQg46aDD%2BUEtqmx%2FfbuYx0CTPal%2F2CDfCwAu9Arma3%2B4UjnTaE0Qggh837GV7FCi4qe9xoGME8asE1ep6pcoW46YRb0Svb36yvfwRhfF8k8UA72vfzaV35vMffbkseelDzURp0b4dUgTCLH3TtYYPq%2FlEzekrdEXnzc2hIugBz0VQ0UVfoLrq9J7%2BKkG2hT6fnfoiWcikOg9lWQ3pHhLDpK0udyTDLEFh5zvp6asIpCkJbW21N2563r4Rx1Js0Sz3ODKaeYEiuLMHkKTrQ82X5aj6p4r9snly63lygA40mVZ%2B5DCIBR%2FjvZCDsyUrgkIcTRfV9SVFFomKleRltUv7%2FsjjfcHxIYAOHosjXITD2jKrPBjqkAS7L35qFUUF3koVrcTnl9Llu6MvbyBahs5RESZ9Fq1Vagwc634Yp9IJkGUKeF8rkKxVDeLXukj3qFuNfXzJreGDadkWRaGfF7l3qlxYV%2FbHFwFXHYAeJj3ryHb3MA7S1JdUnLtXjQtsvgt09BCkCftFNhf0EgGmtOsoxnYExZkPPgiQmpHII4l6qdXvgPG4u1TN%2B7X72Y29V2mCjkiUH1P2GDMKH&X-Amz-Signature=f2c1eafce4855c73d0ad79fd9d8ca8a665a550535ccc788e5684ace915f626d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
