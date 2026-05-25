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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMUYDDI%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZ21jaR8WtRqtML7nNU8vgzbEz3W0%2Fsos%2Fcc1tSfKoaAiAOo49QqFtX95ooot7V3AShIQzSElG5kHZt%2BqBXovMgNSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMK9Fyh0MIpstzr%2B7sKtwDfpyB3DkXzWypNcuG%2FTCb2X8xMoWAwT7XV6rZvoHTsWvRNbd2pxPa31KpUBcw3Pi6CimEasibXhaVq7ajtBuiX7CLh6mSHh12vb1qpmr8io%2BIyA1aPpp30MtJ%2BvBlaRJaUe9ZTpa2s05edNyXs0eQLwmMCQY95TYpKs3YfPk%2F8OLG%2BN1MUv1DSPwU88GBr1xGI7xcS6XzDAT%2FaGYoeTF%2FRSwqvDQnSDmQeTfk8%2BMv83HBUMuVoxzcNLjdON%2F8Yu0Mi%2BMaBCwYnGbtjAKrKdtJ7G8zAe9GSQ1XkiaLUYfql488A%2FtTjORKFIIJqdXBM9q6W2IxTr3lMtHx4vzdj15idqkIx7rGHhKZPePhIEUdsl4UXQ8KxIujRrPhlKTouz5p5mw5Rk9tKJ1d8OvvQEW3MoMnDCxOt5sJE7jRw9WZRKyRB0%2F%2Fuu2r4Gcdg3pZqoH53vk%2B08Wx4z9Gd3%2Bq4AtrgwsCX7GzdNSdQ%2FbS%2Fak3sSRKSbsPNgYJKP%2BfhXlBcDq0Gzg%2B41NUOScY2YE2qbT6gc8jqsJB1hzcr2N1JKvMpB6EBpx4v%2FkMw3CAjXnEIq%2BjIUe1XbOqCnds04D%2BUIDdoQeifKbkbnKNmwHD1n1B1Q3VoAWfcHTi4vNYegQw07LO0AY6pgEk7tl%2BYrlHXEVdAY2HlNtT2ASC95c3FrNBV7svW3DxJPaSmujT10bivGVRT7dJl8yx1cnfv%2BoGoOInGRF8qSUkDchufBnAaTI8pz92pWqpDbZKU6nmuZ3N1qd7JAmFmhjGmtA3FLyrRpF0BZELmW0DTMoFwngECFvYhcJdw%2FXa4tFhOWCZ631sRBcMR%2BAdZv67Fs3KiNpwaL%2FSAMCDjdrpBL5mCAM2&X-Amz-Signature=692dc38be706684b8841d6301647bbf9eda5294ddb2624bbcccc09bdac95649e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
