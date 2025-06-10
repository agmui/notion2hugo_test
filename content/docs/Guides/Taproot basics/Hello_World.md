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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNBJE3S%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGdO8iHvJu3I8kbMQ4s6mZ82xVzsLj7hCrlfHDx1Yd2AiAy9%2BP61EVDwE093e87hTtaYtd9cZJ4TvHBs%2BTJEgeY%2FiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsY%2FvENSdDUkR%2BFFnKtwDIJBqfAITvqRQLA2wHKESNssMH2JG9cn8PNNleFJRrpbh2o7oxQKh1urbqR0R2w2eIV1T6uYdEbtarlSKiIXEurNuYa6l3HQFx2pzzjtAAw9%2FpluOXJIFNrwNNpwYdPy4iTgqK3%2F7%2BLX%2BYB3PTUwT13oCyDfIwKQMCSka49ejlgVK7PJGfBIOkKan1wcUUMAX2n9goKiSQv8Q4BRYN3P8EVAx1NKZ3pdPR6xlhNSLOfkIUgRjVo%2BdVdxOxSXNgGsVxZoHY%2FiqXSwQHkgMl7xdZlftxdCwq5kYzhB2tO6Xcu9IPDy4ADgQLkVjkbJrxAalu7UMFbx90NORb9Gf1oBa21uQHOjLhwaz8FF1I4HQdsVyN4jVqFZ3SAqKXawuloWYJp6iRg8lqwbV3JPF43vygfhZ7vsNQm60aRhkAXU0XF0eWwytkR4AFttzmpH1qHKWVEon5cc7bKaho8RzfVprtr8mNq5FwMgPgbaD6mO%2FLhJ%2F0a7w66LwLJur1rJIJc0D9zutXXNCX14H%2Fsdgd2hSyqi41v7%2BIXyhmpUIVSlUxS%2B%2FIN6wH1Asc5PfBgS8Mn6w4Rfq9T1VCaNUTWjOBB5GvP9s2dFDL9hxPRHrry30looGw47bW8S94LhS%2FQYw0b6gwgY6pgHCY%2BhF33NM5gWCxSIBhFWxwBBP5au%2FXyZuDfrCXo59I3ucSJUNiIQH9a3cAJ0zKsmPceO8t3te%2B3xgSK3iyeZnwGrQA86rVTr3A0KrkX8qAhJevxszOCogmwKk4iBI5Iim19NMM88NzacTeprpnEFMXI8sQqEonBjMRmw1zzSeNRnJ4xMfkoUVd7nxfT3UuHuGQ1YVCQkyh8wH6m6yr%2FpcyVmdrbtQ&X-Amz-Signature=cd5f06e97a1c09b7ddb1679549b72b77e1e8126b3a2307680b28393cf30ba8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNBJE3S%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGdO8iHvJu3I8kbMQ4s6mZ82xVzsLj7hCrlfHDx1Yd2AiAy9%2BP61EVDwE093e87hTtaYtd9cZJ4TvHBs%2BTJEgeY%2FiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsY%2FvENSdDUkR%2BFFnKtwDIJBqfAITvqRQLA2wHKESNssMH2JG9cn8PNNleFJRrpbh2o7oxQKh1urbqR0R2w2eIV1T6uYdEbtarlSKiIXEurNuYa6l3HQFx2pzzjtAAw9%2FpluOXJIFNrwNNpwYdPy4iTgqK3%2F7%2BLX%2BYB3PTUwT13oCyDfIwKQMCSka49ejlgVK7PJGfBIOkKan1wcUUMAX2n9goKiSQv8Q4BRYN3P8EVAx1NKZ3pdPR6xlhNSLOfkIUgRjVo%2BdVdxOxSXNgGsVxZoHY%2FiqXSwQHkgMl7xdZlftxdCwq5kYzhB2tO6Xcu9IPDy4ADgQLkVjkbJrxAalu7UMFbx90NORb9Gf1oBa21uQHOjLhwaz8FF1I4HQdsVyN4jVqFZ3SAqKXawuloWYJp6iRg8lqwbV3JPF43vygfhZ7vsNQm60aRhkAXU0XF0eWwytkR4AFttzmpH1qHKWVEon5cc7bKaho8RzfVprtr8mNq5FwMgPgbaD6mO%2FLhJ%2F0a7w66LwLJur1rJIJc0D9zutXXNCX14H%2Fsdgd2hSyqi41v7%2BIXyhmpUIVSlUxS%2B%2FIN6wH1Asc5PfBgS8Mn6w4Rfq9T1VCaNUTWjOBB5GvP9s2dFDL9hxPRHrry30looGw47bW8S94LhS%2FQYw0b6gwgY6pgHCY%2BhF33NM5gWCxSIBhFWxwBBP5au%2FXyZuDfrCXo59I3ucSJUNiIQH9a3cAJ0zKsmPceO8t3te%2B3xgSK3iyeZnwGrQA86rVTr3A0KrkX8qAhJevxszOCogmwKk4iBI5Iim19NMM88NzacTeprpnEFMXI8sQqEonBjMRmw1zzSeNRnJ4xMfkoUVd7nxfT3UuHuGQ1YVCQkyh8wH6m6yr%2FpcyVmdrbtQ&X-Amz-Signature=c0ab744b3bd876a18604c680fff000453462cc7c4792cf07eacc33f894832b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
