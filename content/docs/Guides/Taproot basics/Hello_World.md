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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REU6VXVB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxWZyAjfw0D%2Bxx%2FN23hEqihe868%2Bpk1qePQEmpQfA4kQIgW4r9EHFYcynbbURSgoxZOvLiqYPKDbFWFI1vB8itK6wqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ6YsW5M8uSWBkrnSrcA%2F17P0Ehl0CDf6byD2z1QrxopDkwdjSCCjU%2Ft6pdul0%2FgO1G5sTZiIsmS67aeMzl7q10WCXjWiNy6KgTA2%2FAlAX9WI7lG%2B9KORUpR4KuEV%2BlWTWJLAMeaaXTZ0Jrto1NmH%2FGSvyIuf9UnKvgjvJ6NVlxTy1heODjI6xw129j3Ml0igA4AqSXsETRt1z4M7M0TkCSCGGxRMjVp4Pe0Ji0ATLgV06M0xxRbwRuWSD2H30k%2FGKMkiSRbmPCm02p8AibBR8G7u5c%2B1ZoqDKAMNAPxdyFn3Mh4l8bzR%2F0RCqkAtc1kFZpyTP2a%2B9axhtSWnGrCv9MstPswIB0oOxBHZBqfjXYprUs5Yl64hR3jByKTiQ2g21iQQNP3PZCp43sB19fPTNk%2F5amiwNushixwl43R00mBbL%2BO%2FVgzdT8r%2BY7quZlu2dlvy34w8TTvTk0RNFp%2BteBLFl6ku0GO4y3G3Oo%2F9J1YGt4sXILABTxyNqRXDdIUNmvmJ8ilt1xtIydnsszMXcLCbbZ7NwIMu%2FMak%2F2bO8yEFpdTWPDtK4bSyo4kWcXXWVd2J8OZ3yx%2FVEnF6fkECa9xV86YkvGudoqdeIL1HzIE3Z4E4ZxnJnC7ukA0OOFprSHH2pwfM2zo%2B0kMIL6%2BMMGOqUBOwBQWXVf8CegqwmVVSf4wUuMSvsqwUjLtZQiaNOKuLCSEvHc%2BFtoQTufkfedn0ImPI%2BdQ8RgnYAK64fce8un7EpDH0o4iJMSKxc6cydA3hCZmSI9%2BWQnMmzZZT6iNX1%2B5f6A6%2BZZE366cbNqW86dPdhTx%2F4gXyTYT6ntGtvD71Y%2FgpUvUe8T6yna9R0ZQfsvnt5zYHWCsCCzctJK8vGWEKQ3w3xk&X-Amz-Signature=2099451465b2fef51677ad1df424e5a115532a2c5e7a3496cae9cc46de3595f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REU6VXVB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxWZyAjfw0D%2Bxx%2FN23hEqihe868%2Bpk1qePQEmpQfA4kQIgW4r9EHFYcynbbURSgoxZOvLiqYPKDbFWFI1vB8itK6wqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ6YsW5M8uSWBkrnSrcA%2F17P0Ehl0CDf6byD2z1QrxopDkwdjSCCjU%2Ft6pdul0%2FgO1G5sTZiIsmS67aeMzl7q10WCXjWiNy6KgTA2%2FAlAX9WI7lG%2B9KORUpR4KuEV%2BlWTWJLAMeaaXTZ0Jrto1NmH%2FGSvyIuf9UnKvgjvJ6NVlxTy1heODjI6xw129j3Ml0igA4AqSXsETRt1z4M7M0TkCSCGGxRMjVp4Pe0Ji0ATLgV06M0xxRbwRuWSD2H30k%2FGKMkiSRbmPCm02p8AibBR8G7u5c%2B1ZoqDKAMNAPxdyFn3Mh4l8bzR%2F0RCqkAtc1kFZpyTP2a%2B9axhtSWnGrCv9MstPswIB0oOxBHZBqfjXYprUs5Yl64hR3jByKTiQ2g21iQQNP3PZCp43sB19fPTNk%2F5amiwNushixwl43R00mBbL%2BO%2FVgzdT8r%2BY7quZlu2dlvy34w8TTvTk0RNFp%2BteBLFl6ku0GO4y3G3Oo%2F9J1YGt4sXILABTxyNqRXDdIUNmvmJ8ilt1xtIydnsszMXcLCbbZ7NwIMu%2FMak%2F2bO8yEFpdTWPDtK4bSyo4kWcXXWVd2J8OZ3yx%2FVEnF6fkECa9xV86YkvGudoqdeIL1HzIE3Z4E4ZxnJnC7ukA0OOFprSHH2pwfM2zo%2B0kMIL6%2BMMGOqUBOwBQWXVf8CegqwmVVSf4wUuMSvsqwUjLtZQiaNOKuLCSEvHc%2BFtoQTufkfedn0ImPI%2BdQ8RgnYAK64fce8un7EpDH0o4iJMSKxc6cydA3hCZmSI9%2BWQnMmzZZT6iNX1%2B5f6A6%2BZZE366cbNqW86dPdhTx%2F4gXyTYT6ntGtvD71Y%2FgpUvUe8T6yna9R0ZQfsvnt5zYHWCsCCzctJK8vGWEKQ3w3xk&X-Amz-Signature=e6e7f44dce2f4f5f62983a397f25265035d568e332987c47aebf8cb0e2fc0260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
