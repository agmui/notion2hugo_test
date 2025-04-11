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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVEG6DM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCNrGvd2W%2B6UeqZJvTkFukXbx6lqvlVaJjTpmfZJN1HugIgNoziCia6CJhoSYTpipO2T9VhE0lalfQdo9r5lUxYdSQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACxBWqHlmmiCiTzSCrcAyN%2FzEI%2FyuHnD%2BUhbOSP3%2BMA8b4I5sBzxj5X%2B8AQuhZNd5lwEjUv6Mu%2Fp4C2Ohz9xJyHqV1Y2cajwTmWCqBe40tsZM28bX8CfXtuCyRYkV%2B4vRJzrp55RQdC1CyxTi3AFvqVGVuw5tHGjyJhKpxpuwLS0HCMBBv3f%2FfroElP8nTV8lNfDpz3o0M51pux4uT%2BAJPcfJg37HSDeVUQTIcyzCtVX4cx8ARQLCh9dlwLwAcv2hTBy4M9%2BVLS98cfMrtyJTZjgnURXPrtzMcptSLdfXoTNgr1AygYPbULK6Ztvv6szR3WYw5D%2BzHH9hLAaDRWYEiH5jAT8uB5amoIiCPAjI45ZH%2BsLEMMwQTXkfW2f3IjCgbxwz6STlJbEe8jagk8x5b%2BLx13UtjV9sIoEANmCszcaRTVzIZVnF4teq46ie%2BoVhUFLxMKN66Bi4HHmisP7rPiRZhPqKAgGVEXMTynoKdj2C8cUh%2Ftxnmfsb8reDg3C1bOR9stzsliK0kxqkewXuTQlCb3CoeDFdd38QVzFwqO9eBvEKuTf10BZxEMOaqUrgf07EGQg8E5y8yhwdkzz0xu8Om%2Fb1MOeQwV32UGwCYaY43%2FBP1i2r8%2FJ5kuq8fxP%2Fa3iJDwEN83ItZyMLuc5L8GOqUB5AGQ0vTtNKBUkRSwMSZWTQeQ%2B5Q6Ys3A8OjWZ9B1HAalAMeVM1entTczbOiiGsiqxU2z3pXdVExJZH4qF9s2UNmnCuhl4yjRBSWi7TwNh6kMyOT8i1iybhAs0lX3fNQQsyMLcQ73lJc%2F5SXKS4d5SWuLhlg%2Be6w2RFypKf%2BZ%2F83hbQKf4M872p5nSPXe7Ji0MvhF4a0u1mZsKGh%2FB5UrERLbmyZk&X-Amz-Signature=300c9ce363c064497646940d98a2fdb970603ac686abcf961dfd36dcc73ddd12&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVEG6DM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCNrGvd2W%2B6UeqZJvTkFukXbx6lqvlVaJjTpmfZJN1HugIgNoziCia6CJhoSYTpipO2T9VhE0lalfQdo9r5lUxYdSQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACxBWqHlmmiCiTzSCrcAyN%2FzEI%2FyuHnD%2BUhbOSP3%2BMA8b4I5sBzxj5X%2B8AQuhZNd5lwEjUv6Mu%2Fp4C2Ohz9xJyHqV1Y2cajwTmWCqBe40tsZM28bX8CfXtuCyRYkV%2B4vRJzrp55RQdC1CyxTi3AFvqVGVuw5tHGjyJhKpxpuwLS0HCMBBv3f%2FfroElP8nTV8lNfDpz3o0M51pux4uT%2BAJPcfJg37HSDeVUQTIcyzCtVX4cx8ARQLCh9dlwLwAcv2hTBy4M9%2BVLS98cfMrtyJTZjgnURXPrtzMcptSLdfXoTNgr1AygYPbULK6Ztvv6szR3WYw5D%2BzHH9hLAaDRWYEiH5jAT8uB5amoIiCPAjI45ZH%2BsLEMMwQTXkfW2f3IjCgbxwz6STlJbEe8jagk8x5b%2BLx13UtjV9sIoEANmCszcaRTVzIZVnF4teq46ie%2BoVhUFLxMKN66Bi4HHmisP7rPiRZhPqKAgGVEXMTynoKdj2C8cUh%2Ftxnmfsb8reDg3C1bOR9stzsliK0kxqkewXuTQlCb3CoeDFdd38QVzFwqO9eBvEKuTf10BZxEMOaqUrgf07EGQg8E5y8yhwdkzz0xu8Om%2Fb1MOeQwV32UGwCYaY43%2FBP1i2r8%2FJ5kuq8fxP%2Fa3iJDwEN83ItZyMLuc5L8GOqUB5AGQ0vTtNKBUkRSwMSZWTQeQ%2B5Q6Ys3A8OjWZ9B1HAalAMeVM1entTczbOiiGsiqxU2z3pXdVExJZH4qF9s2UNmnCuhl4yjRBSWi7TwNh6kMyOT8i1iybhAs0lX3fNQQsyMLcQ73lJc%2F5SXKS4d5SWuLhlg%2Be6w2RFypKf%2BZ%2F83hbQKf4M872p5nSPXe7Ji0MvhF4a0u1mZsKGh%2FB5UrERLbmyZk&X-Amz-Signature=5152c84fb8d1a74d848f30fe0b152a331d0a25938d0b37b9ddd269f8a9455b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
