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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUKIJSH%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGkA6ihgh82PqJUtpWec098UsivjCHZ1C5rMr8xa%2BM%2FgAiEA3sUmBztPG3fRHNN1eHOumQoLekgPVnnz5G7m8FBu1vMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn7GX%2F169UByx0LKircAx9SnJ59U8ks3daJSN%2Fs3JNi40DdTzd2j3cYq%2FdE%2Fw7avP%2FT40sMZTviEt1QlkHLXS6qT%2FlFx7%2F9LWNxdiC%2FdGhtmPQ4771kh51nHz2UqKbT4axu%2BZljD6QCyH79Q0KN3x7OU6AzystEsnWCOo3ZjdJ6ZSYB2AxvGRO09ppFZ%2FI1zExYm%2FUC%2FRg7LqQqw%2FntE59IlPiVAlbYnpO8zACMX5KZICzWYavc9UZSA0eDgPVkpWcqxX6IhDaAMsHIVZ2E2eSAy82DYBNiXbcb56Jz2ygdIGEjdcX9Dbe5heAutwWzhANCsLCV3zId6HpCgt0kD3U2RojDPzgZv0jc3sa5wmQbRqqtBgvIpsYjmWX6BpWNicreXpZw1H1qjzuw%2BdnYcFME%2BdYR5qdiEZT2IDF5Ks%2FXkCCfEPDW2RxYPrxs0WcKyxGvCBDi4DQyuIg%2BzN%2B18btaJjRgJwzW9D9xmtgujWuaX5qIgXIVb3X4i35AetacfCvzJfT2vg%2B3QxQRfcyM7qG2ckDhAaRu6Npiew1L8SO6RVtLe6ez4thCj0jmeJOGIjPX4ErHP0kM5tkuQvtWtYfD9ReJbVix8Z2pHsrZXfBTN4grcvgxjssjb8o%2BbeIop92nrbym79y4lGNSMJ6mqNEGOqUBZnh4zIiJvTC1xZnhOdgceu4DXxY0jhdhnly6PZSyzKbM4LbAtuDPF05iajybGlKWvHylQKT3%2B2SNkMoX9FBmq7gk9qKLAOT0WXYQ37JMrhdblI2y%2B3tTv%2FMHJya2vQ6MrKgELoQq2iGzoMw4hN%2BlTlFe79UzLBqpggtPzLMIcuUcK36ODeSYCIGg1MCEa5YrnY7AZWUtObFkNVLz2EeWkp4c2UA0&X-Amz-Signature=4359e8c1d8b639f996e2e81401f4f93183ae811a950b8ed3747802fd1033d65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
