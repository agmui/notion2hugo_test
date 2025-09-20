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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGYQPFEX%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDYgwDax6cxNCouxWZR4II4KmnWigdDEa7d7jc9kDl3dwIhAJcPDK1lYWfWi4vqJgrClV0aQ4bl%2FrIR0TX3uN%2FekOBeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAuviS%2BGDyWtjvbAAq3ANlYzhUFHnCjW316dH6WenGhufIpsCpi%2FelvYlGLquIzjvB7POiHCN8oysjLBJS8bZ32DeAzs6tRfF85aUoTQEOfJvL9C8i7Mo0bO%2FtcN7DVIHIY4FpN5V%2BjeUfnsro5dnqpJsHjVaafnTziwzn23XKZEmptVpkPMR92ArLDC5CSLYQWDjY7jUwAbu0qqjeWwkGWkxyZ104PRwE8WyAyII0e0T8%2FnzAoJ0kVbY8hFKHTZr2HO%2FmXEvOzakJWyTcOMi2qQKKON6XEjyVtBGCqLVmBoHS7%2B4%2FB3R1QJ4Gwz00sLjAA15%2Bu1cx0tqjtnqYsy0MN3mA4zQ5JhuyKKtapHmrvEfYjvG9Ff%2BiUtt3lqNdmJAknvHrzd2IdOTH7E4eQkoHij5oj08E8TY5lu%2BWS582pNS%2FZqpPWkhjPldYQ3ngjqTuaeUzAAE2DYVOT7ILxzlb6NKmvs6kLJuqcL%2F2w%2FbiYKjwlFpdZRqYRoywIcbsp3s6QCbkijD0hoiaqftGUehAzRdFniax%2B5VU3vrXrc9GUMOd3PqSF3VDcbiat56%2B1%2BGXqVh0rHqJheJksUX7m%2BE4JOgy0S6wApoth6bi20mUC0IMHi00OxZDC5Dr8zfA%2F2UkNxp%2F1Q%2BJo5UCsTCzgLjGBjqkAdqMHOd1hR5XRcXjD52JmO0oYTQgIOkeeFCO%2BqpeHCxs9d0J35heTaNNfSpVmxft06knijMjHogFsuQtiqBrtJg2gM4gR%2FzD6T%2BrActTg8TkDX%2BH3jLOwLH2wOaHyt%2FJYbwkolLZkhTngYV6%2FCSftLC50bcRi8B9etpblYbD5Sf9mjoBRuUdUtqOJon4XjXxTd2pxdk2q5KD7NTJhexahjK1I1IY&X-Amz-Signature=8fc369f8f1c4874ac9ee14d8da4dbda787f5fc32df131f26815438af2be5f405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
