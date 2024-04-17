---
sys:
  pageId: "5cc0e010-b08f-41f1-957a-d530b6b42675"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T04:41:00.000Z"
  propFilepath: "docs/Library_Overview/drivers_class.md"
title: "drivers_class"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
toc: false
icon: ""
---

The library is a port from [taproot](https://github.com/uw-advanced-robotics/taproot) to
work on the pico.

### drivers

The drivers class is a [singleton](https://refactoring.guru/design-patterns/singleton)
and has everything. If you need to do any library operation it is
General through the drivers object. ex:

```c++
drivers->remote.isConnected();drivers->motorHandler.pollCanData();
...
```

see the [examples](about:blank#examples) to learn more.
