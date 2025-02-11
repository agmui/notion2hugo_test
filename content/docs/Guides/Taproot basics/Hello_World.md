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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HBOHUJQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFn1fz%2F6AysG0UCfooZuJ9yvNVriN5fw60IBi%2B2MEJeAIhAJEPGV8WdTsCEN%2BcluzWnsX1%2BlEKzdx%2Fr7P%2BsNi15fsoKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4epaiiuin8MrM9YIq3APYcxn5VpMhDaNlPoFFvobD3BMsMwbmDf%2By3bf3Em66X6YsoMIrb4jDYqXN7IZj6M8HQeAPTAFFiGirdMIIQ2UMasmCHsyXf1yXSZ12FtL5687rvm6BeB1cbEjJvz5%2BQo0Fn97NPNnnrJpiozVvE9BRyb4Np%2F1iZxVqf7rl6TmusKJ65HPLVlBMU1dfrbV9WprVHk4TeOYTSHLmkdBjkttx4Hc5SDYqNKnaO66H6HwzieYRpuMMfZA%2Fp6ackNaE1u%2BQ5vxsqkXtRvr5Nlc8gptMRl52q0HUY1XMzyGdgX56id8p4PUmh98tkv0qoNewBL1ktpiHm6m%2Bps%2BKGyEMoZgpj%2BD3qgaauQ79CdZnav473a0tsg8X0lyXoiOj5Amh3P2r4a4nX8rF%2BP3Lmyal79sZk1ic%2FnszCKAYRxNi4rE845uWzhxJbvP0qz6DTAG08yOoF%2B8E6De4FgoDxGF1U6MYRX%2FYPrCh%2BbtxhhZAIOMRR94TQ9vfJcddMovvitbq3sxg8vkvO7O7ExUNWuMTDHKA0KBiDyXXcexLgHlWqtEtA9M00KMh2q0fupfnznSoONzPn6MXO6M%2FIUW0wAPPQrphpHwJZPjevgsFufmoSHQbUVqekWgeLHUHA0QVzDDfkqu9BjqkAZEktLLqt2QglLAp1nlWAqMB5aAyZ7r9JB7F2tVagxAxwwtoDXSSZrKBSatpY3vRNMErwYupfrCXGyrZum6Wx%2F1SpjEnY%2FIE6NZ68RECA7cgrN4JMdvARHa4PHGeejeV5gJmmQ0AXguvPEBV84KSStC%2FFKr8mOQVzrS%2F1IZgwDVMv1Mi%2B0SQOLwtLF4gLw%2BuJWERRs8PYmdFHqJq1yzkjD27zcln&X-Amz-Signature=6edc064bf8227b8a72762b99cbe049870b777b336a5a514809f2bad9c84a33e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HBOHUJQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFn1fz%2F6AysG0UCfooZuJ9yvNVriN5fw60IBi%2B2MEJeAIhAJEPGV8WdTsCEN%2BcluzWnsX1%2BlEKzdx%2Fr7P%2BsNi15fsoKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4epaiiuin8MrM9YIq3APYcxn5VpMhDaNlPoFFvobD3BMsMwbmDf%2By3bf3Em66X6YsoMIrb4jDYqXN7IZj6M8HQeAPTAFFiGirdMIIQ2UMasmCHsyXf1yXSZ12FtL5687rvm6BeB1cbEjJvz5%2BQo0Fn97NPNnnrJpiozVvE9BRyb4Np%2F1iZxVqf7rl6TmusKJ65HPLVlBMU1dfrbV9WprVHk4TeOYTSHLmkdBjkttx4Hc5SDYqNKnaO66H6HwzieYRpuMMfZA%2Fp6ackNaE1u%2BQ5vxsqkXtRvr5Nlc8gptMRl52q0HUY1XMzyGdgX56id8p4PUmh98tkv0qoNewBL1ktpiHm6m%2Bps%2BKGyEMoZgpj%2BD3qgaauQ79CdZnav473a0tsg8X0lyXoiOj5Amh3P2r4a4nX8rF%2BP3Lmyal79sZk1ic%2FnszCKAYRxNi4rE845uWzhxJbvP0qz6DTAG08yOoF%2B8E6De4FgoDxGF1U6MYRX%2FYPrCh%2BbtxhhZAIOMRR94TQ9vfJcddMovvitbq3sxg8vkvO7O7ExUNWuMTDHKA0KBiDyXXcexLgHlWqtEtA9M00KMh2q0fupfnznSoONzPn6MXO6M%2FIUW0wAPPQrphpHwJZPjevgsFufmoSHQbUVqekWgeLHUHA0QVzDDfkqu9BjqkAZEktLLqt2QglLAp1nlWAqMB5aAyZ7r9JB7F2tVagxAxwwtoDXSSZrKBSatpY3vRNMErwYupfrCXGyrZum6Wx%2F1SpjEnY%2FIE6NZ68RECA7cgrN4JMdvARHa4PHGeejeV5gJmmQ0AXguvPEBV84KSStC%2FFKr8mOQVzrS%2F1IZgwDVMv1Mi%2B0SQOLwtLF4gLw%2BuJWERRs8PYmdFHqJq1yzkjD27zcln&X-Amz-Signature=edbbe9ad242232bf14dbac5c9c8a41aa38da68f9f93aa71c0aef54499d810491&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
