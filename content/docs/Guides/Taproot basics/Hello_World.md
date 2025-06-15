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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJ6PC27%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBC9i9fXYcK8LNFtQ%2FVkoyqbb7GfGTbNmNH6zGSIydBHAiB4Hfi5HVhrYIA9HJmFEhO2lB2ECRuIykrI%2BphQ2xOogCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMBBlgs6Aj32hlH9gSKtwDoCGKi3mgKRsriXCqtU%2Fh5PJ8yDQ9rTdGJyeBD%2BP5P3XmS3TzwlEccPgyAmfxPfoDbYIwH46aqZZHYtmBxtpYCEt4i7Qfe92coigoKrCexdUPaPH5DjmnLUwomiA%2BMhnBs5%2FjGsy8cw7NvyxmdbYip%2Bei%2B%2FD8KMYxP8dAYIjkpphc9JMKAEXrGgEloFFpWXldFuIHOXbVS57tzEYEkueKg5IHUolwNpsmnJs4cgGa0l8DP6BmiG8utBn8J5DiMWR%2FbbE%2FayKPphsetSWDwpVo6z%2B4RD5HFryvpxTVhfj5FFjg31MMXTpenWUFCfJHAJXJQXE3wDYdFB%2BdiPRW7Oo6qY%2F%2BDMQcnJJY14S4OHmh8YdkV%2FCDw2288G5mhotr91xUtazTCm2%2BfyOpQKyjUmh%2BzP1B4y6COz1nNSpHAOiV081t7yzDYwZCyOLNthgxoi5ukhsjyuZ9MehWfOsZEqEjs%2FtWEl1Ui6NOJzQEtqnuFrv%2BPwJ5wCPoMkObDue7Woxyi9qoeScYF%2FnwwjJq75vzrdwYt4kf1yosrpXqpMDOtOY%2B%2F5ezphq08Id9Aeinb8JKDoM0xRFKEJnEY%2FdlxIR0DThAgsmORrMJIjop1Udn4AiOy50kfdhS%2BIANnyIwxf%2B4wgY6pgG%2FtI9mjaGFLuQ%2Fno6n4m7HuOB4%2FCReXzJigso9Rs7BOdUzihf5NUTbXhyGZGVhIrLR6qVZ%2Fpz7N9xJQiFlICty8i1HrhWWAS86JOpNeKkvMhtVRXgIFaYNQkvj97co9z5bdQEjnnMjjVOXZUa6zo3wCfmX0zdq6QJQI2BPNwZXP3U4pFF%2BcggTFXZ6Ybrqd3vWpS9Frg5jv06%2BBEGS%2ByZ2CgO5VySN&X-Amz-Signature=6b3ac0eea0a6dc0cb8bf44b86f2d31dd4904319c1606810dfc489c663033ffd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJ6PC27%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBC9i9fXYcK8LNFtQ%2FVkoyqbb7GfGTbNmNH6zGSIydBHAiB4Hfi5HVhrYIA9HJmFEhO2lB2ECRuIykrI%2BphQ2xOogCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMBBlgs6Aj32hlH9gSKtwDoCGKi3mgKRsriXCqtU%2Fh5PJ8yDQ9rTdGJyeBD%2BP5P3XmS3TzwlEccPgyAmfxPfoDbYIwH46aqZZHYtmBxtpYCEt4i7Qfe92coigoKrCexdUPaPH5DjmnLUwomiA%2BMhnBs5%2FjGsy8cw7NvyxmdbYip%2Bei%2B%2FD8KMYxP8dAYIjkpphc9JMKAEXrGgEloFFpWXldFuIHOXbVS57tzEYEkueKg5IHUolwNpsmnJs4cgGa0l8DP6BmiG8utBn8J5DiMWR%2FbbE%2FayKPphsetSWDwpVo6z%2B4RD5HFryvpxTVhfj5FFjg31MMXTpenWUFCfJHAJXJQXE3wDYdFB%2BdiPRW7Oo6qY%2F%2BDMQcnJJY14S4OHmh8YdkV%2FCDw2288G5mhotr91xUtazTCm2%2BfyOpQKyjUmh%2BzP1B4y6COz1nNSpHAOiV081t7yzDYwZCyOLNthgxoi5ukhsjyuZ9MehWfOsZEqEjs%2FtWEl1Ui6NOJzQEtqnuFrv%2BPwJ5wCPoMkObDue7Woxyi9qoeScYF%2FnwwjJq75vzrdwYt4kf1yosrpXqpMDOtOY%2B%2F5ezphq08Id9Aeinb8JKDoM0xRFKEJnEY%2FdlxIR0DThAgsmORrMJIjop1Udn4AiOy50kfdhS%2BIANnyIwxf%2B4wgY6pgG%2FtI9mjaGFLuQ%2Fno6n4m7HuOB4%2FCReXzJigso9Rs7BOdUzihf5NUTbXhyGZGVhIrLR6qVZ%2Fpz7N9xJQiFlICty8i1HrhWWAS86JOpNeKkvMhtVRXgIFaYNQkvj97co9z5bdQEjnnMjjVOXZUa6zo3wCfmX0zdq6QJQI2BPNwZXP3U4pFF%2BcggTFXZ6Ybrqd3vWpS9Frg5jv06%2BBEGS%2ByZ2CgO5VySN&X-Amz-Signature=c2c39cc15b801bb85378a4d3d37ca2659480f94437bc31231a1b80d61a41cfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
