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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU7E65G%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUBp18BQUnkE5Tbpx00QMfhnbAlk7k1tm%2FJtW5c99EywIgJVC6co6S9Fai2d%2Bp2U4kUaYaGJEMFBzJg%2Fo%2BLL8UXf8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPvqa9TioUqtqEfxtCrcAxFD7LiM%2BAUMfwlCUSbfkxGyNU8PvligXcZ0oJVL5XpVupcfKA20Drsr%2FIk0WVk6RqN5QhieuHdAfmBLFlQhUzc6bAUoYpyYa1DItR12O2unu7GJSADYW7qpVeOnvL8qn03g18yo76l8xfH6lhNfQXyvsRtQq%2Bm0GwQT6IfSoABYS03PmqgWRp0%2BVMD%2FlXyyuAuW54WROPaqbWsOOp2%2B0ZrkvTp1vYUv4Y7eaSyzPbX43%2FQeqyP7PgWwKTOrGoUY9djYLuixbB%2FKBnvVmcbZ7IOlleSyzPQU6kKYq1IlTQrPaDFiBjb7jhZUfr8alg4CeEUhSsWDJOvrGQmsUbv0kO9z9L5O1Em4YZzY1qv1RRt09DrHlISlLaZxhDlbdWfib%2Fiwta8L45mjlo9Bt2osIpgJrJeP6%2FNS%2FT8dAnZBS1JayioFBecYoEHg5duoC659zaVHF5UTVy1Ncbajw%2Bp8nKm5LXtqCTN0mF4YQ%2BvMsbAfAlWvXpgPCjATm326rIerHGjd%2BdK2SnGWRXIE448AmsNe9AKhZmWOBhGN7S4at6ZRbXALBc43i%2BsdLqqaIF1LwdFw8DCA6seMjzmJCR4FgL0dKYbrKYtl3Tml0aGPuaBsu3w4aCcygElWn7ubMPyOh8AGOqUB4fCibUjkmCAajzrFHIWo7cOf2EEPDc782%2B5magooASqcPnbOl7bE7%2FIJjFwzJEyWNfPM378zN0sulgAVdOvwMKVM%2BNf%2FP2mBl6UY3aIE6hD7ZxbuzJzlNBgjjBjVjQ19t4eQ8aK6UUQdQcjtnmp2L3na1%2F3otfq3nv%2FHxqJD38OdCS9iTDiWT8%2FjZ5%2FoPzh4o%2BNXURRxFNhoNBm%2FIClR9%2FTECW3Q&X-Amz-Signature=c3d23f21f0e43d0c0f1560d9838ca8edcad731c6537841bbe671c3795f2cb996&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU7E65G%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUBp18BQUnkE5Tbpx00QMfhnbAlk7k1tm%2FJtW5c99EywIgJVC6co6S9Fai2d%2Bp2U4kUaYaGJEMFBzJg%2Fo%2BLL8UXf8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPvqa9TioUqtqEfxtCrcAxFD7LiM%2BAUMfwlCUSbfkxGyNU8PvligXcZ0oJVL5XpVupcfKA20Drsr%2FIk0WVk6RqN5QhieuHdAfmBLFlQhUzc6bAUoYpyYa1DItR12O2unu7GJSADYW7qpVeOnvL8qn03g18yo76l8xfH6lhNfQXyvsRtQq%2Bm0GwQT6IfSoABYS03PmqgWRp0%2BVMD%2FlXyyuAuW54WROPaqbWsOOp2%2B0ZrkvTp1vYUv4Y7eaSyzPbX43%2FQeqyP7PgWwKTOrGoUY9djYLuixbB%2FKBnvVmcbZ7IOlleSyzPQU6kKYq1IlTQrPaDFiBjb7jhZUfr8alg4CeEUhSsWDJOvrGQmsUbv0kO9z9L5O1Em4YZzY1qv1RRt09DrHlISlLaZxhDlbdWfib%2Fiwta8L45mjlo9Bt2osIpgJrJeP6%2FNS%2FT8dAnZBS1JayioFBecYoEHg5duoC659zaVHF5UTVy1Ncbajw%2Bp8nKm5LXtqCTN0mF4YQ%2BvMsbAfAlWvXpgPCjATm326rIerHGjd%2BdK2SnGWRXIE448AmsNe9AKhZmWOBhGN7S4at6ZRbXALBc43i%2BsdLqqaIF1LwdFw8DCA6seMjzmJCR4FgL0dKYbrKYtl3Tml0aGPuaBsu3w4aCcygElWn7ubMPyOh8AGOqUB4fCibUjkmCAajzrFHIWo7cOf2EEPDc782%2B5magooASqcPnbOl7bE7%2FIJjFwzJEyWNfPM378zN0sulgAVdOvwMKVM%2BNf%2FP2mBl6UY3aIE6hD7ZxbuzJzlNBgjjBjVjQ19t4eQ8aK6UUQdQcjtnmp2L3na1%2F3otfq3nv%2FHxqJD38OdCS9iTDiWT8%2FjZ5%2FoPzh4o%2BNXURRxFNhoNBm%2FIClR9%2FTECW3Q&X-Amz-Signature=acdd61eeec5bab66ee355da5322ddfd55dfbabf05b99f306e2b1b82961ad8e30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
