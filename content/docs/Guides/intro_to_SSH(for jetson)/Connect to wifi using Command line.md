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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYU5HNK%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGm3i6Dn7TvhRDipb6xRrAnHCb%2Fetm3EI0ypubO5m5NKAiEA68pUw0PKXPaPaZ%2FE180AYHjhbegjQInvVKL12x%2FQGjAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BXiJ7DlhlC6wW4zCrcAzXOM234BK4g06WqAfxCNTVqxFYP1q71%2FNtGs%2F2jsyoXVV5%2F7gxuWo%2BW8TelxN1m90nlzjcI9VnEH50xrFC8RGVcLDGe3x5H2nnhzao8lorg7pwNQXpHC2KA8MivlupNmyrE2qJ%2FN68tI6yHl%2BsTQunckqG9UP0GUQH21f%2FoCN4Mk10VE5qmEedkO5uV0iVifGqBkO5y0%2BaH1zu8%2FaPuq27EcB5dZyc%2FxvkKPB1jsg6e6X0RebvJxkgJOKOQqOicveNE1WrKoNSyYHo%2FWEUBbyWx5TTs%2FRK8YaUUIQngAp0fxGHrmqHcfCKeaQ2XP93aALMeu%2BhOo%2BlcgnAcAOYLT1804jNNGhrfCAJB9gz1H13xE9vLEBEyCmVobWhgOWgpacvuk%2BYSo0WdWQ8v%2FBEBGWA4qJUNNvWMfgjB1LV0IrAdr%2FlyGxBCEzU%2Bvl9c%2BdGb3MGKKfgWLyY6GmD59QOiyTJjaFGGBrkVqcY5E4%2FlR6Qjg%2FIf6CEGLtCDrx%2BeqkFWtyJes7IxFMVBUbahUwb3G4u0QNWRzFY98%2FSQf6qYzEQbMAawgCjYvLwFVh39KKyhrNeN1x0XEwx8c2sP%2F%2BCs9INrloogUqbKZ4DFfakjYBEAfVrFc93elLCA2kbgML36m8cGOqUBgDQyCRigwtL67f8Z10gZa1z9V6ZtN8blu07AXpalzfffS1oSaO1vD%2BOlUk%2BvqYgXmwBKYs%2FXJ1vkg9YPy7Rqm7g9sZ0zyhwfKLmTj28AD7FvctaqRx9WDoakeUGb7Mcs8IszC3vdIcN9Zwiz8e865TcM%2F8X46FRh43kZgDZFx6Dkqmk6PsPMMDNLSHT3L0jj%2BQ6bh1TL2U9rukNhiJ37SBEdBDRN&X-Amz-Signature=2f2b17835d2173a3dbe98576393a568135a1e1b3fa6c6281256deb383ebe2f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
