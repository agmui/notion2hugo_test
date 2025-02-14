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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6EAGME%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICnsUHjgJbbhfrjc77PBbVAPzVpyCdROk%2B1MEUuDiIwxAiAJjv3WXg9G8Y24ajUcmiRBrB8BBcPGO1NYnJlDE1DR%2FSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMIbe0opygXiOX6m1zKtwDoUkBePL9mg2SDMTeGOtbcl4MrCwUY7Ph8wa18SByd2or4vS%2FQ37y4x1Wu11HJQyvDZigoY6GQFHF8nizvrVDS6XhIl8j41bKLVEBKGmT77rFir37KhParpELAiGkz0K1aCwOYX22JFgcl7qrbtsmigjTHPUPWRVn0zXFkY6gVrJ5L48BMkeGzt26SX8qURDIMIbrE3Bb2easn8wOiF8mqIsTh04%2FgwZWT0aFx5q8f0fb7rZgp9sRcEwSIDkY%2B247Z1x0cUWzGmoiHmQjUGWO86WuwvIAEkr4YphEvKaYpBKQ7X4toUUiTSu3FTSjzePxfpGCcFSt27vgfzk%2BHuHvjgZrbOetJPfeQQ%2BG7wj7q3iC6GmO4jbNZCaArWpdnoJae92B5%2FWJv50%2BgycMThpNsW1MquzFQ9OGQ5UlmtqmIDHs7ZzYndqu7odcfxRB4GweIExRxQjrrgkaZajJb53cM%2Bj4HhkXAVW%2FnWaq%2FhWd5u%2BnNtWOaJ1JrhalcFoCEqrql%2FB5M%2FTUGaLZh0kjiUBCQo5Lc0SlLGAKUX800vTPOuDRwRe0cb9uc9qJK4rG4V621BxT2l4KxmfXeVUBcQkCrhfQd4G9rgIBprKQvliDuspUaoznSuFvFHWUId4w3eq8vQY6pgF7FAuub9UHh6owdBva87gyeTo2t8W6CurrsMntwsVKxF9qK8D2FR1liK2RIIKviA4cUgSHuMscweZ%2Bh1RlpYVOnWaD8t33jgsFxQP8KuwS0jlMs0Ugf5qy8hP281977wYH45l3UmmO%2BnymEb2aQxRWuAVMhy6ufTE%2BMXZPKGsH0zCHw%2FnKhfur8bXZXuA0dxkBmdJX6Zp4zM8W%2FQJSS1X5%2FD4xv5co&X-Amz-Signature=ae9a46b34855ec28caceac3eba55bc30b37aaedc444d2284d6cc6710e3cc64fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6EAGME%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICnsUHjgJbbhfrjc77PBbVAPzVpyCdROk%2B1MEUuDiIwxAiAJjv3WXg9G8Y24ajUcmiRBrB8BBcPGO1NYnJlDE1DR%2FSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMIbe0opygXiOX6m1zKtwDoUkBePL9mg2SDMTeGOtbcl4MrCwUY7Ph8wa18SByd2or4vS%2FQ37y4x1Wu11HJQyvDZigoY6GQFHF8nizvrVDS6XhIl8j41bKLVEBKGmT77rFir37KhParpELAiGkz0K1aCwOYX22JFgcl7qrbtsmigjTHPUPWRVn0zXFkY6gVrJ5L48BMkeGzt26SX8qURDIMIbrE3Bb2easn8wOiF8mqIsTh04%2FgwZWT0aFx5q8f0fb7rZgp9sRcEwSIDkY%2B247Z1x0cUWzGmoiHmQjUGWO86WuwvIAEkr4YphEvKaYpBKQ7X4toUUiTSu3FTSjzePxfpGCcFSt27vgfzk%2BHuHvjgZrbOetJPfeQQ%2BG7wj7q3iC6GmO4jbNZCaArWpdnoJae92B5%2FWJv50%2BgycMThpNsW1MquzFQ9OGQ5UlmtqmIDHs7ZzYndqu7odcfxRB4GweIExRxQjrrgkaZajJb53cM%2Bj4HhkXAVW%2FnWaq%2FhWd5u%2BnNtWOaJ1JrhalcFoCEqrql%2FB5M%2FTUGaLZh0kjiUBCQo5Lc0SlLGAKUX800vTPOuDRwRe0cb9uc9qJK4rG4V621BxT2l4KxmfXeVUBcQkCrhfQd4G9rgIBprKQvliDuspUaoznSuFvFHWUId4w3eq8vQY6pgF7FAuub9UHh6owdBva87gyeTo2t8W6CurrsMntwsVKxF9qK8D2FR1liK2RIIKviA4cUgSHuMscweZ%2Bh1RlpYVOnWaD8t33jgsFxQP8KuwS0jlMs0Ugf5qy8hP281977wYH45l3UmmO%2BnymEb2aQxRWuAVMhy6ufTE%2BMXZPKGsH0zCHw%2FnKhfur8bXZXuA0dxkBmdJX6Zp4zM8W%2FQJSS1X5%2FD4xv5co&X-Amz-Signature=7ba8e10aa6847681fe62931807327c2279a0f9f43028fe8fc38865e12591d3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
