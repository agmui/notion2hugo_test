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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USY6VM6L%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc0UCTQiIAfajlUncWgB1rzepxocFAxiqZD6SqYAWPOQIhAOPw9%2BjhMBF4gb5BKkfmpzNbfwzQTIlLgBLtm%2Fx9prKPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziJkkA4rexORyVF%2BUq3AOO9UP%2Fhqa2VVl4sBnejA6EoM%2FhANp3CVI75JmJFjvUyfSxUr1e1P2z86mwsVJpZXaA49%2B6IBMlFh%2FgIyXPSW4Go7S1Fww%2BjJfLgSfKSU1%2FL13EheAu5XnGoLRzmiVZt5Ki5J8s7TLbqaEYcLhrJMmC3H0g%2BWdIA8npA%2BLRF7qRqmvqr%2FBEZ8n6%2F42L2efSL5fWGIxH%2B8nsP85GJb9bDW0%2B9j1DuhvOCfKKQUX5bkGwibbBIyfImujDt3zHr9hEeqNQObDr8Qq7Ga4aP4ilmcZgxbVVPxKUh3D1dvAhH9GubyrXTN3K7CnEyJq0LZr5ITRflkU99%2FkxYTFoAtXev6mzSDNaVnAYGaw29RrxNIaHJsQBmuoEtxGv%2BCcr%2BRRDWSrmrjZuPFb5p%2BAZWUeDt8qnI55VVNoRYnk9YhZ3%2BsJ7abQq%2Bz%2BNkH2K3NTeP%2B5GjjgRcXkOyMNS1q0GMpkWN6t4IgSqwy7KZYk9ycoT1Sg5p%2FDiGhVT9NdEyHs2EP3cSTtqn9Xzeq%2BnB7Lk0jQFDdJmOZjMgt8Q46FlCVjt3bCiCDmpuHikz%2B1zJwXAnyhAYSlmeHFyrc2jSrTM%2Fmv%2FeAChuSOtssMUCBk2nOBGRx681LoytnwW1Ui8qud2djDu14fSBjqkAZiTkrIBURU9LzKCx0ysc7t%2B87jPy4Ww3eaR7AY2Ly9hjuq%2FSgi4kbHC8UWp%2BSnVnvxyQ42vyMgBLWaNu17Ab6LCcaTJlhyxB9yj5fCQNT2rRrzdN%2FHRp1dwgHeFEKl3%2F3YYayfvQbhVZ9bSTRTialYoPjpA1XgGSETQh%2FDnk7RcUcR5JACxHyjfweeT7t7AJi3aWu6%2Fl24hBjtQsKsysTS%2F4MYi&X-Amz-Signature=c9bc671bef67c18d4ed5e07f9a30342176f00e65bd84f47cc3aa1e3d7e8ec119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
