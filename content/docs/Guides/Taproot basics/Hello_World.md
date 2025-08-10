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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO4KV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn6kVb1JT7L3wfTCsSDrlBm2R%2BZcYXaxQNNei%2BuYr8IAiEAiG27bk9KHXCGoBdG0rNWaF%2BU7woiuLVAgo8bSOdde6IqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcM1%2FKa3Hw7ZrObEyrcA45q1OX3UR76%2B%2BMZsTJjRNtp8dZlq1cBYjTEmbFVXY0QOByi%2FkxkZ7%2FU8PF67kaXUxyBYpz0yOS4she26Zfs1YRmJruJ1%2BGIhHAgRi8mmmh1QNYQoMpxTyXsB7oLfLX2BqvkobrGiQJ66ii6EGzzrSQffMKX0eA6MAOVIIyLl9mb7HcIZifAGJFUEWVWiDq0iGqSHoq0CPSfNFBfYoSW92ZcJ1hlJhsTw%2FIFZO63fdmtxMp5A%2FGCgsAhxJpCDeAaZGKxFRG2DIDR3EuCsAdhOkOBBJC4JmpaivuX3dgRptLWWs06zLV1OOMM52MuhK6tMSm5KteAXwKtoynm%2FJuomKF1Id2R8dVIYS%2BaP5f8jnDFAgbJCuO9B%2BT9YMEwyhO%2FxNSX15ZrVWtTGTUBo3CMm2MjJPqkJYMTNh1FjVM21H0uFx%2BRwTunoniXjrY89ljPqbzrJHFel0tRL97kH4OprM8wcNgE%2FI%2FVfEWTukvQIk1aY4v51k3uzvy2Yf3EFFpP%2Fl0yrmLZewzLekYbD48r%2F4VIpRjVdHBumHPLw6rSJPm%2FvAP0BaP65XfK9JU54VSHlaTpNJCrq6mP%2BbnAU2%2FCZSodOITb9%2BOz9N%2By4zcXqMimmqgeHMfNHG0nalArMMOy38QGOqUBDpRKtJzR%2BYc%2BMQCbsyV1TGMYPcGb2XT4Z2e1cdKO00%2BModipJCIkbwq9wKnOZtooRBziLzhPrZd7CK1fzjUD8C3kyBHPwmcMTnEY9icYyWfCQMemOsgVxeD91QpFvp%2FQ%2FylfXkBpprmTP4hm0VTeNfSxKYiBhLics5gcV3psv3o%2BX%2FaiqG2GHPBvn5rzLdsHspCghimr0tjFcJh3XIBQ%2BARWBdM0&X-Amz-Signature=208c51feaee9a621c93b0d0c6bdf0ddd61d98108cb79e14ca64e80c0f6569fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO4KV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn6kVb1JT7L3wfTCsSDrlBm2R%2BZcYXaxQNNei%2BuYr8IAiEAiG27bk9KHXCGoBdG0rNWaF%2BU7woiuLVAgo8bSOdde6IqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcM1%2FKa3Hw7ZrObEyrcA45q1OX3UR76%2B%2BMZsTJjRNtp8dZlq1cBYjTEmbFVXY0QOByi%2FkxkZ7%2FU8PF67kaXUxyBYpz0yOS4she26Zfs1YRmJruJ1%2BGIhHAgRi8mmmh1QNYQoMpxTyXsB7oLfLX2BqvkobrGiQJ66ii6EGzzrSQffMKX0eA6MAOVIIyLl9mb7HcIZifAGJFUEWVWiDq0iGqSHoq0CPSfNFBfYoSW92ZcJ1hlJhsTw%2FIFZO63fdmtxMp5A%2FGCgsAhxJpCDeAaZGKxFRG2DIDR3EuCsAdhOkOBBJC4JmpaivuX3dgRptLWWs06zLV1OOMM52MuhK6tMSm5KteAXwKtoynm%2FJuomKF1Id2R8dVIYS%2BaP5f8jnDFAgbJCuO9B%2BT9YMEwyhO%2FxNSX15ZrVWtTGTUBo3CMm2MjJPqkJYMTNh1FjVM21H0uFx%2BRwTunoniXjrY89ljPqbzrJHFel0tRL97kH4OprM8wcNgE%2FI%2FVfEWTukvQIk1aY4v51k3uzvy2Yf3EFFpP%2Fl0yrmLZewzLekYbD48r%2F4VIpRjVdHBumHPLw6rSJPm%2FvAP0BaP65XfK9JU54VSHlaTpNJCrq6mP%2BbnAU2%2FCZSodOITb9%2BOz9N%2By4zcXqMimmqgeHMfNHG0nalArMMOy38QGOqUBDpRKtJzR%2BYc%2BMQCbsyV1TGMYPcGb2XT4Z2e1cdKO00%2BModipJCIkbwq9wKnOZtooRBziLzhPrZd7CK1fzjUD8C3kyBHPwmcMTnEY9icYyWfCQMemOsgVxeD91QpFvp%2FQ%2FylfXkBpprmTP4hm0VTeNfSxKYiBhLics5gcV3psv3o%2BX%2FaiqG2GHPBvn5rzLdsHspCghimr0tjFcJh3XIBQ%2BARWBdM0&X-Amz-Signature=9b01131b90b412ec5847cba5e88005778ce039b29de3e4fc236f6915dfa7faab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
