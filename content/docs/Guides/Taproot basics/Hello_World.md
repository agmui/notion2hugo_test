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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3JQVQF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdiAwE16QxVhJLynK3CO9jJa3B%2BWBKbJK1nhTskailtAIgTZAbj8%2FEPAB641lie3OEbY%2Fk9sbtaAURjLO64bSv2SEq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMgRkQ%2FW3TlbhrJ1NSrcA6WxXNXTwy%2FmjX46oMmkIcAp7LAtsYEH5HyZ7488TWRi4UR0bDEsG2xM9ur2TTuC40DNxe57uqjMP8fHEdlguLRvpTi83lPlQLlNv0BgcnD%2FPIX2r93fLJpr6zRy5aafAM%2FgqVWpxeOSls11xXSNhqcbrt6VuWbaYXuQlaH16RX4FOEOVRsK4es3RyptyljLq7aAPe2duww6fVpyUfIL4UxZnYLcxCpX%2Fx6rsQTzLUZmg8xpiie%2B8bO7qSZ8%2FUBW7MF4k%2BXD%2Fhd0%2FDWkHYdkJ8XbZoljXINSnAtXYs2YcBQU4ov98S4rERhi%2F33cu8NBMjUMRDiNE8Qb2JSYWV7ZHX6s8mp4KsSnXaRRj0P9HAibugP%2B5UUs83hVd2qpHXi9%2Flya5y9jTDKvgqNdyRWObbzks272DMX%2Fr6xUx0nen7xMGwDXYSzCMXXjN0ybc%2FzmLrAELw67e%2BwgFtzyzBrpzpBDHaZQckzxLqW84btsDErBxNFelvdcrqRvE6cn2fkG0BvD%2B4nWTSdzIP4feS%2FZnFcRhTSb3k8fs%2Fxw4fAGrNMcrq9MvENHWk6tbYrq%2FtYww8vfoFgSaERXy1tRXwXypXn0Aj%2BwosYl%2B7MsqgYgjpA6qvmr2NrpcP9GO3KcMJ6%2B274GOqUBI2shxmXfRk0vZegFqFt9U322BnrK08S1juQZ13SWBj3SlFCep9ES2ksk2EfwEVnnU%2FC%2Fph3rlmWIQfPOEf8n8RInBkpInCW6FeNGHLjz8mJLXKqhnFpKl%2FNdGS0X6tglRmOgviINXEXuKA3XKK6XnakC6JqIuIhU3JkH3T7Ydy2Nmh%2FrQwSqohnQEIGDazcbEyikMSKHEm9aj20UXFyfZctIyCr%2F&X-Amz-Signature=52647c5ca72f3c70e88102ee3ba502bbf57d4b4b113bc9075c122205cc30a5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3JQVQF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdiAwE16QxVhJLynK3CO9jJa3B%2BWBKbJK1nhTskailtAIgTZAbj8%2FEPAB641lie3OEbY%2Fk9sbtaAURjLO64bSv2SEq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMgRkQ%2FW3TlbhrJ1NSrcA6WxXNXTwy%2FmjX46oMmkIcAp7LAtsYEH5HyZ7488TWRi4UR0bDEsG2xM9ur2TTuC40DNxe57uqjMP8fHEdlguLRvpTi83lPlQLlNv0BgcnD%2FPIX2r93fLJpr6zRy5aafAM%2FgqVWpxeOSls11xXSNhqcbrt6VuWbaYXuQlaH16RX4FOEOVRsK4es3RyptyljLq7aAPe2duww6fVpyUfIL4UxZnYLcxCpX%2Fx6rsQTzLUZmg8xpiie%2B8bO7qSZ8%2FUBW7MF4k%2BXD%2Fhd0%2FDWkHYdkJ8XbZoljXINSnAtXYs2YcBQU4ov98S4rERhi%2F33cu8NBMjUMRDiNE8Qb2JSYWV7ZHX6s8mp4KsSnXaRRj0P9HAibugP%2B5UUs83hVd2qpHXi9%2Flya5y9jTDKvgqNdyRWObbzks272DMX%2Fr6xUx0nen7xMGwDXYSzCMXXjN0ybc%2FzmLrAELw67e%2BwgFtzyzBrpzpBDHaZQckzxLqW84btsDErBxNFelvdcrqRvE6cn2fkG0BvD%2B4nWTSdzIP4feS%2FZnFcRhTSb3k8fs%2Fxw4fAGrNMcrq9MvENHWk6tbYrq%2FtYww8vfoFgSaERXy1tRXwXypXn0Aj%2BwosYl%2B7MsqgYgjpA6qvmr2NrpcP9GO3KcMJ6%2B274GOqUBI2shxmXfRk0vZegFqFt9U322BnrK08S1juQZ13SWBj3SlFCep9ES2ksk2EfwEVnnU%2FC%2Fph3rlmWIQfPOEf8n8RInBkpInCW6FeNGHLjz8mJLXKqhnFpKl%2FNdGS0X6tglRmOgviINXEXuKA3XKK6XnakC6JqIuIhU3JkH3T7Ydy2Nmh%2FrQwSqohnQEIGDazcbEyikMSKHEm9aj20UXFyfZctIyCr%2F&X-Amz-Signature=6c23510256ecdaa79c1d7eb575c373dd4adb66c7197b2bc721efe7c58c5fca06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
