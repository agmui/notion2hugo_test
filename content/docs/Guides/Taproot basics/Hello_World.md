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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAO5V53%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC545zZR%2F4AqW6EJtIiROkomY%2FRx0OiIkShY7nMuatUkAIgdJ1xrW7ek6U%2BGCWP6dpLPLISoajb8wr0xriRE%2FDEGnoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIfT3RfDyXyO%2FX%2BxwircAwhT8FV%2BIwSD4y%2FYR8JB6nMfR2XWZnmxce26Rr1%2FSUrtQKNThEDOIYe06jqI1gXNykA5cQYBz0P5AqfQDcG3HTeo97DbBiA9rkR7UngD5A4zlyJHislvHMAYW4Fe3CwWg5FVmMKM%2FwCLa96BR9YoCQRF8PFOrviXYfd2cLH%2BT8JdZmwU5gIyYmrnJRjFyVmQeDL7quBqqXcOcB2oXKvNepbbxb7FV8xF8fEYU9o%2BMg1I9WTNJ63mh1wgeXW6KdTH8PbWN4mIOmeiDvRvTX1Sj%2BAP3WZvdcHfYzY6eNUkR7POKrdN2aiKkWrkRYpQ1Ln7M8ekJH7BsHNKNtPh64oOSPLolrrtrwu0ZCyIr2o5D7fAw3zIpqcBCqPinEoqDbVedZe7YY5Yk4eRhnYQa6bwDf3iPPRAsJBwrv6MvkBYM9fknKrEZRvOrVipiXSm1OlT7EhAzYThF%2FK2e2beSvyYU6tTxrhm6V2s9tQLrpVviclQwexDlTyDyBkBFea7PvFMjmU3U86RJYxN381SJItoeZXi4CCy0SxQzCJ9QmkEm4170QWakgv5F3aPc5BVgLF%2FQZ76p%2FdCvAeFd86L9StfYDtzQxbMQpfwkXN46jJANn0stoQiFdWF%2B5vz0diIMPeQ68IGOqUBmWR2b8GLgmvt8pSmy6pL34c1Rp5iFSLZPKn4Cw4OQ%2FD1UnoMmM1Jw39RHxfxCDJueOW4PcQrLIZi9htZ2xtNJgDGx3XayeQM%2BzmgTlyOFevMRRas%2BwY4iJYvaA0iNjCe%2FcsriuDAn1E3jJ0EQavtXQswDQ%2FNJmGcEgxr2M0ueqbrGEzmsUl8UahnRKl6N9tNMFE%2FwUqcCjkaZ%2BPDSTNWIIDUw6IE&X-Amz-Signature=9134da84a6a1fce778dc98c1c00997abe731d1f17082a9fcedaedb9972e45dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAO5V53%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC545zZR%2F4AqW6EJtIiROkomY%2FRx0OiIkShY7nMuatUkAIgdJ1xrW7ek6U%2BGCWP6dpLPLISoajb8wr0xriRE%2FDEGnoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIfT3RfDyXyO%2FX%2BxwircAwhT8FV%2BIwSD4y%2FYR8JB6nMfR2XWZnmxce26Rr1%2FSUrtQKNThEDOIYe06jqI1gXNykA5cQYBz0P5AqfQDcG3HTeo97DbBiA9rkR7UngD5A4zlyJHislvHMAYW4Fe3CwWg5FVmMKM%2FwCLa96BR9YoCQRF8PFOrviXYfd2cLH%2BT8JdZmwU5gIyYmrnJRjFyVmQeDL7quBqqXcOcB2oXKvNepbbxb7FV8xF8fEYU9o%2BMg1I9WTNJ63mh1wgeXW6KdTH8PbWN4mIOmeiDvRvTX1Sj%2BAP3WZvdcHfYzY6eNUkR7POKrdN2aiKkWrkRYpQ1Ln7M8ekJH7BsHNKNtPh64oOSPLolrrtrwu0ZCyIr2o5D7fAw3zIpqcBCqPinEoqDbVedZe7YY5Yk4eRhnYQa6bwDf3iPPRAsJBwrv6MvkBYM9fknKrEZRvOrVipiXSm1OlT7EhAzYThF%2FK2e2beSvyYU6tTxrhm6V2s9tQLrpVviclQwexDlTyDyBkBFea7PvFMjmU3U86RJYxN381SJItoeZXi4CCy0SxQzCJ9QmkEm4170QWakgv5F3aPc5BVgLF%2FQZ76p%2FdCvAeFd86L9StfYDtzQxbMQpfwkXN46jJANn0stoQiFdWF%2B5vz0diIMPeQ68IGOqUBmWR2b8GLgmvt8pSmy6pL34c1Rp5iFSLZPKn4Cw4OQ%2FD1UnoMmM1Jw39RHxfxCDJueOW4PcQrLIZi9htZ2xtNJgDGx3XayeQM%2BzmgTlyOFevMRRas%2BwY4iJYvaA0iNjCe%2FcsriuDAn1E3jJ0EQavtXQswDQ%2FNJmGcEgxr2M0ueqbrGEzmsUl8UahnRKl6N9tNMFE%2FwUqcCjkaZ%2BPDSTNWIIDUw6IE&X-Amz-Signature=0fb0467558283410faf616bbe9375dc2dbbe9e3b165abb8f9ae8b223a9fbb903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
