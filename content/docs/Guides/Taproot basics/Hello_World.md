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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAHBG4B7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEjnT9QnygP4XE9vmb2PXHcnaNRlljxDeswom2rxiJ4DAiB8YIlE3uq63nuYFiaQqTQ6GpYNHwaglyef39s%2Bnv%2BXlSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQjhTtnJAxUUpkaRKtwDrIJnb6PNxuUh09s1%2FEGot0vbfselfTPcowrgm52o1mL0bp06%2BDe5VmzRjP6HSZqFgwkNmzCf19W5PpIP5QhOKIVH4WiCdduclcGUklzrlKTcfHwm3xBtJytPGX7gytm7Q4LKU8DB0i1g6VkQ0Uxx0V3T94vqIX71EQwuS6W%2BdSesboivY%2B8h1nvxRVod4dtwHQ9Jg9T0q76kZ6HLjmMawHlZyzJHiCdryNhA2AESwq%2BZqHZ14t%2BmBg7qmcj3f3cEB8s%2Bkwgddw0nvtuwBLZoSCFz59O77fZbZHQ3dkI3XGImUrqVcBOk8khd%2BZh2BAEDzkQVOQ4Z5X4t90CWEuIr4FyqfNIns1bSRH58myOCKHzhPlzBl%2BXH0O0d4EnQO5tPgqiEGXnciKpnBsTunvhS4tAATp6wugjIrnUy9erRdjAcDL3FDAnzZcCywAZQkRtPQq1TsGcbAQR6%2FD3yQgoKA%2FGXAS%2B%2BJ3Y0ioz38AsVNNsJNciXcmVPYRJWUAUy0SFyCMABbzywk9OSIjE323P1aQvJz500YhsVyR%2BYxTrvi3%2B2sLdG13lDkBNirXo8bFiKDXcmE7KVbAGfotR7S42akMZ8Hr%2BM8Fp3UlCCBqjg6BaK8MsDWTo7NpZSsvowveapvwY6pgGSsHxoludY%2BgBuNXAvijDQrbAgfCcSgYxbvDPukWBcPedZwukn2Jh38COga4ihWxgLAloeFnXIG24jzT25cVjx3jXXBOiivfm0elqCmeBs2yuwHqe22VTYTsEhFAbKu3JovP1zUdR5g1ksM5raMDpEOL4KDdBhYEF6GbZinf2J9mlwxO5eCj4RSGwQZ4y1bAHxUcI8ffWkHW7lFqisnbomn%2FYpSFXv&X-Amz-Signature=c67b6cccdf3477bd3543349eee14aac6f4fe3cac9bd1f4ece9803c90d1196491&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAHBG4B7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEjnT9QnygP4XE9vmb2PXHcnaNRlljxDeswom2rxiJ4DAiB8YIlE3uq63nuYFiaQqTQ6GpYNHwaglyef39s%2Bnv%2BXlSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQjhTtnJAxUUpkaRKtwDrIJnb6PNxuUh09s1%2FEGot0vbfselfTPcowrgm52o1mL0bp06%2BDe5VmzRjP6HSZqFgwkNmzCf19W5PpIP5QhOKIVH4WiCdduclcGUklzrlKTcfHwm3xBtJytPGX7gytm7Q4LKU8DB0i1g6VkQ0Uxx0V3T94vqIX71EQwuS6W%2BdSesboivY%2B8h1nvxRVod4dtwHQ9Jg9T0q76kZ6HLjmMawHlZyzJHiCdryNhA2AESwq%2BZqHZ14t%2BmBg7qmcj3f3cEB8s%2Bkwgddw0nvtuwBLZoSCFz59O77fZbZHQ3dkI3XGImUrqVcBOk8khd%2BZh2BAEDzkQVOQ4Z5X4t90CWEuIr4FyqfNIns1bSRH58myOCKHzhPlzBl%2BXH0O0d4EnQO5tPgqiEGXnciKpnBsTunvhS4tAATp6wugjIrnUy9erRdjAcDL3FDAnzZcCywAZQkRtPQq1TsGcbAQR6%2FD3yQgoKA%2FGXAS%2B%2BJ3Y0ioz38AsVNNsJNciXcmVPYRJWUAUy0SFyCMABbzywk9OSIjE323P1aQvJz500YhsVyR%2BYxTrvi3%2B2sLdG13lDkBNirXo8bFiKDXcmE7KVbAGfotR7S42akMZ8Hr%2BM8Fp3UlCCBqjg6BaK8MsDWTo7NpZSsvowveapvwY6pgGSsHxoludY%2BgBuNXAvijDQrbAgfCcSgYxbvDPukWBcPedZwukn2Jh38COga4ihWxgLAloeFnXIG24jzT25cVjx3jXXBOiivfm0elqCmeBs2yuwHqe22VTYTsEhFAbKu3JovP1zUdR5g1ksM5raMDpEOL4KDdBhYEF6GbZinf2J9mlwxO5eCj4RSGwQZ4y1bAHxUcI8ffWkHW7lFqisnbomn%2FYpSFXv&X-Amz-Signature=7f24ba743d854ec912a2147835dd08bc1c3d620408973fc035fcbb777770014a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
