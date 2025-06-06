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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPFNQZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIEjlPh1POuYPsAAXiDQqB3rNo1p%2B9V7YbcvG212LBmpwAiEAus4ALh%2BuCU49mWwcjrKAXX%2FE%2B5c4ibC9Se5bhLAnLQoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEcrbb0BagaGoaQN6SrcA2yTgEXZy0Lxea9KveieFrdBrkiPzbOVK1C3NsFrEWZAYtekxfAm5GA5OdcB6wxdLnr1NzhKFrNd89k%2BjzhOQazoOKMjNaghwyVZDZL%2BxImIQ%2BDdlC4YGzQMNy5UQEE10jwKARHfLif%2FXBScyjo3ddn32Hmlateld3ANlPtp58Bud%2FdoBkTcpnv5tgdzEQGsBSwfkq8%2FBB9lGty6TyKDG5sfM6mmB%2BemIFtB2IKALGJFz26hbgauiA2xRo12UTUEhN%2Fh4iL7VVHtdKFyO6RnY1eK%2BSDhE4q1aFWn7nsjqrY12pUabS0pvC%2FQnYBqpwca%2BwhOM3AXuYqFN%2BcpcehXaFITnZn8hGdcu2i7MvsKYo8%2BaDLURA9amzhRvnWzvF2b3PTvvDa8JYvKZPNn%2F9147zOkCCE%2FCP99YHYl2AcU102bnOaUdKv4coIp5odeOr0Ygpk9nl565rwgZq9E2fupA2LY4wSUcAnnEBvTx38RsZf2s5q7VMOHR5%2BwqnW6hZ5a%2BEM%2Fwqt1jyIjzYpoZiDpYSY2o0xchRU0B8%2FYfTfU67SOnVcJYYKEhBkHxJjNv1dMthVgyy%2FkNIgiMigjxu0nAbKSNp4eruwDPYUkdFStqs1nyokosi8LVqi%2FWal6MLOYisIGOqUBumnHFEdVysWoG%2BtMXgJ9b5l7DTREc6cVX8oMQEgXNn63Euvo4BxWZ20x4JKWfvbKwPU1XpQLCh0laT8vaSusbq%2FgVORxA%2F8Wm9SA8WsvEFrdNlmub42QuCX0GGzIOpODNSmDr5vTURdplOHneyRBqJtBZOZ3b7THn9e%2BCnByPsiEb%2B4XJLRZnGtMxZz%2Bz%2BKvsVHsAujJzdxUgrnYXS4IPd83%2FKAR&X-Amz-Signature=b12ec69bbbb50177f273a718a9aa0190e1474bf3ff3a689edbe129ffb22b7dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPFNQZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIEjlPh1POuYPsAAXiDQqB3rNo1p%2B9V7YbcvG212LBmpwAiEAus4ALh%2BuCU49mWwcjrKAXX%2FE%2B5c4ibC9Se5bhLAnLQoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEcrbb0BagaGoaQN6SrcA2yTgEXZy0Lxea9KveieFrdBrkiPzbOVK1C3NsFrEWZAYtekxfAm5GA5OdcB6wxdLnr1NzhKFrNd89k%2BjzhOQazoOKMjNaghwyVZDZL%2BxImIQ%2BDdlC4YGzQMNy5UQEE10jwKARHfLif%2FXBScyjo3ddn32Hmlateld3ANlPtp58Bud%2FdoBkTcpnv5tgdzEQGsBSwfkq8%2FBB9lGty6TyKDG5sfM6mmB%2BemIFtB2IKALGJFz26hbgauiA2xRo12UTUEhN%2Fh4iL7VVHtdKFyO6RnY1eK%2BSDhE4q1aFWn7nsjqrY12pUabS0pvC%2FQnYBqpwca%2BwhOM3AXuYqFN%2BcpcehXaFITnZn8hGdcu2i7MvsKYo8%2BaDLURA9amzhRvnWzvF2b3PTvvDa8JYvKZPNn%2F9147zOkCCE%2FCP99YHYl2AcU102bnOaUdKv4coIp5odeOr0Ygpk9nl565rwgZq9E2fupA2LY4wSUcAnnEBvTx38RsZf2s5q7VMOHR5%2BwqnW6hZ5a%2BEM%2Fwqt1jyIjzYpoZiDpYSY2o0xchRU0B8%2FYfTfU67SOnVcJYYKEhBkHxJjNv1dMthVgyy%2FkNIgiMigjxu0nAbKSNp4eruwDPYUkdFStqs1nyokosi8LVqi%2FWal6MLOYisIGOqUBumnHFEdVysWoG%2BtMXgJ9b5l7DTREc6cVX8oMQEgXNn63Euvo4BxWZ20x4JKWfvbKwPU1XpQLCh0laT8vaSusbq%2FgVORxA%2F8Wm9SA8WsvEFrdNlmub42QuCX0GGzIOpODNSmDr5vTURdplOHneyRBqJtBZOZ3b7THn9e%2BCnByPsiEb%2B4XJLRZnGtMxZz%2Bz%2BKvsVHsAujJzdxUgrnYXS4IPd83%2FKAR&X-Amz-Signature=82715a34165df326196245dd19b1d14aaed2a3ba92ddb1dcc3ec4b2bdc216fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
