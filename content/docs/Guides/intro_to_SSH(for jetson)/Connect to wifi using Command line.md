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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANCNFGK%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCqapmTms7%2BP88gz4n%2FUpXzs2YCmnbBu7vX9pHRPvPUXAIgcmJBIkZClliMEdCIde7rp80Lvoz%2BcH7wiCzmKdz2XQcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk4AczyrYfXZCXctyrcA8wPQriek6S2IIMtbnA4zSGZgADwKLmcgSaNvhLnfz1G011o9zNICrNngb320BBeJcNIeGuckToyiCq5Zvxe4ROdkI%2BC%2FEVrmZ%2FPd5GbfM4SOAs2amXEAkjNLZ0KYy1FquMjGtL%2FQAyH6dubSk3laoyBBqVllOTmlqZ69Q%2B2iLw%2FgkPVEQ%2BO%2Bn64jIwuGh%2FHJjihKmTje6w5Sf2YlvElfIFYW40TA1MrVKUbbjrCvlIv4fNom%2BBeoH8mRkAe2i8CVDLjgRRDoeeK%2FAq95ylDConO1PiObUuiNZulrdoXEJqWkgtal4Niyj3OpviaSLXxGZZCUu53tes8a%2BtWh0coAiBOpFvVZkVjP5%2FhzePuGrUZPJRghbTcirNJdV8kL8BajQLEJ2liM0%2BY%2Fp%2F4DxzdJIOVZSlEii71ZsrssUo%2FH6CstDYfdbXh2f%2FUd6Zgi4O5joLsPqhdtbeRxNi%2BUt7v6Kgha44gPLh64HXiwOz1eBMzzoYW0ChLxNwWqlT5v82uy8K1phvXmpcEJxKdhcI%2BDcBehCM6bCKRXOnUWNZZW3l6Y7ohJhgISTgw0Tj0C7Glue3PA6dNQfO6ALkTT%2F5DC3ze%2B%2FEdkAYeqZrW7o%2BSe0S79FZBtrLNns4nAFsjMIvz%2FcUGOqUB6CUH0%2Bc%2F3n%2FfmwHsA40MQumtyIvrKvdiNK6ilHE9GqwRxur6YnGUBidfC0OwbmxyV3GxcT9XlIfK2o2MG0MPK1tsX2P%2FRmXSmkOTiG85PEXO6%2B3tNZPsRpwG3N7p1jK%2FqoyghKmWvMQL8PRD7tnxFJeDJU54gn13JVDCp6aBRmnY2I1madjYRAlPcbbCiyMVJ7KlieDWV3aOv%2BKMros%2FvMyqeHDU&X-Amz-Signature=df7f61f96c3e24a969080541089f6291b20adf5966e2640a8ae1c16b91304dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
