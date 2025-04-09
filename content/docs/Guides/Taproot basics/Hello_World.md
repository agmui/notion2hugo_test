---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEU5CTX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCz6JnPNUACRUtfpOlO8YXFTEsvZqFu%2FqzfwkOSYv5MXgIgX3BizIZ0FOWqNdXOhUMxt8HTOBGsw1r1YhRFbc89ZE0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn%2Bq9kfL6vpG2k%2FzyrcAxGHOF0o8C5YAO6kwpSQxJlGlYYSfBnb%2F39drtcVhf3CDo0borxbjV59wPI04%2Bhprm%2FZHmAd7xF1a7ZkB1S%2BIQaCHuwLzmWgnGsrxuUW0ZUCVTdsAnzqpMIvOVCRayzAn1p7HrXlYsGSzJhMcTDYaT74RVWRMKEm4wazO9A%2FAGAZs5X31fUYuu1GRhaRb1StxNf50hCNYT6P6pT%2BVNPHfgMQZye9t9cshWtkdQp8ObZkfXWIww36%2FUfGuDSOF27sN2%2Fh2L56TtdakAqhULJewCBvA2o%2FFyKruiFz7%2BeLD3f45BKgoXRorHBe96Wi6Qdq0wgXP4LJY43OTjRg2vufvcuX2SDDe0I94EGeWUD%2FClvGrI7ItI5IdK14hUjDiMEskT32hrmdm%2B62PAeYq3JO2iXMAZauO9kuaSI8%2FVPrLr6vWmMM1X%2Bm34mVoKNW6Sb5cOCkN5pNKU6uR%2F%2FcE58%2FFqjIrdIkzG86yoSSoX7X%2Bv6Wym1%2B2Q1vntNw5u4B%2FTMxUgBhgT34J4Qxoy7YXQHQBjlYn8hzPN2R94bd2N8SVHJJUYt10ErLq0xEMgXGqSp%2BSwYDxyN6wvjOJ7lpb6EVEkMSHvsK1lA6aCUtCYVx65G99ymcbuYKvNHw%2BVq0MMb92b8GOqUBlJvx8aZD4cGMR%2FvR5Z7o9GSV9%2FO4t8nn%2BK3EbJcKoVka9tESeCwc5Njt%2BWaYLPPfZxX9zbsgIRuJi281qJePP0V7ybK5H0PsTZG9UP0hY43KjK4E0AZlrEnK1BYNTG9NBvg%2BcDroimZcTkfuN1DTclzruJKbgOgTUEJ7p6XdV3SOmkspV3eDA%2FkDRjCxQtTl7IWPtIb4rYqJcfFg0giIIBDD%2FTu9&X-Amz-Signature=6be9bd0b7e87579d24af25f8aed86487857e5ec71d4e02ede588a1aea81da3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEU5CTX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCz6JnPNUACRUtfpOlO8YXFTEsvZqFu%2FqzfwkOSYv5MXgIgX3BizIZ0FOWqNdXOhUMxt8HTOBGsw1r1YhRFbc89ZE0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn%2Bq9kfL6vpG2k%2FzyrcAxGHOF0o8C5YAO6kwpSQxJlGlYYSfBnb%2F39drtcVhf3CDo0borxbjV59wPI04%2Bhprm%2FZHmAd7xF1a7ZkB1S%2BIQaCHuwLzmWgnGsrxuUW0ZUCVTdsAnzqpMIvOVCRayzAn1p7HrXlYsGSzJhMcTDYaT74RVWRMKEm4wazO9A%2FAGAZs5X31fUYuu1GRhaRb1StxNf50hCNYT6P6pT%2BVNPHfgMQZye9t9cshWtkdQp8ObZkfXWIww36%2FUfGuDSOF27sN2%2Fh2L56TtdakAqhULJewCBvA2o%2FFyKruiFz7%2BeLD3f45BKgoXRorHBe96Wi6Qdq0wgXP4LJY43OTjRg2vufvcuX2SDDe0I94EGeWUD%2FClvGrI7ItI5IdK14hUjDiMEskT32hrmdm%2B62PAeYq3JO2iXMAZauO9kuaSI8%2FVPrLr6vWmMM1X%2Bm34mVoKNW6Sb5cOCkN5pNKU6uR%2F%2FcE58%2FFqjIrdIkzG86yoSSoX7X%2Bv6Wym1%2B2Q1vntNw5u4B%2FTMxUgBhgT34J4Qxoy7YXQHQBjlYn8hzPN2R94bd2N8SVHJJUYt10ErLq0xEMgXGqSp%2BSwYDxyN6wvjOJ7lpb6EVEkMSHvsK1lA6aCUtCYVx65G99ymcbuYKvNHw%2BVq0MMb92b8GOqUBlJvx8aZD4cGMR%2FvR5Z7o9GSV9%2FO4t8nn%2BK3EbJcKoVka9tESeCwc5Njt%2BWaYLPPfZxX9zbsgIRuJi281qJePP0V7ybK5H0PsTZG9UP0hY43KjK4E0AZlrEnK1BYNTG9NBvg%2BcDroimZcTkfuN1DTclzruJKbgOgTUEJ7p6XdV3SOmkspV3eDA%2FkDRjCxQtTl7IWPtIb4rYqJcfFg0giIIBDD%2FTu9&X-Amz-Signature=f12e5a090cf648894979f673e4367353a65f718beb3cf8693958625cd624ba30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
