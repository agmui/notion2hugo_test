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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLIWH672%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0bimv3OSvJse4D320XHRIn%2FVDsuiwQrNSHSVWYyRf8gIgLPv6vC0a40lHEnFxIZMkSd8Pz3K8%2BpmGiqYjFOwwN58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJlItxhrgdHphOefBSrcAy9XF%2FTunpeZrIxS0GFTCbVJHtt2YYR%2FJAMNIFanJumj33vbphxirUD2yF6VGj1Km%2BbA9ek5J%2FDdhoPGzdmL8C6213LrA2uVDBM3Q38xT0I9mKjBjogg9pPhABRHUD2mhhhsO1DtEV%2FIrrZTniG8X0EY8U1Ak%2Bfqq7rqbwPXtO6Q7%2FY5YJ1cIfuW7838CUEfwbIfjRXPyNTGAbwnlRXMWvsXIP0wO2eOUbfwRnPzmmvOcLy%2BD6LdwJMx0dQYZGk4D63IGV0kI%2F78cyBaE2kZ3J93T3rI7TnawHCPzhzAtzUmAQpDVFcv8MCOYjVgJ8Gd6M4l0ut%2FErcnkIQDf1n9Q%2BgwFZuoRpPIkT7JHEEJ9o4B%2F%2BUH27AeM%2FDFMVDezqnlqvIUoXH5IN3%2BB86Qg2HVqSThjce6dep%2F42Ke%2FR%2B6oG8r%2BnkPgwDos%2BQdbI4X97U3SgXtfkkPsnYIk4w8OqqTcZkHdqgGNHEtjUXLZszs1jkvWq4fPpRnuVa9wF%2FwCYYIXWgXcNMhboRTIHQ8pHDwRfi%2BB9wyQkYT612bIGqUn1oulAWWZnAE5fRstRz16Rd8docOvSuZgDCkFMOz3HjqmxzZGCkF51GO9RVgUhXPbNaSHaXcwkJ0eYw97T06MI6k%2BcIGOqUBVlT9iuXaucHPlxfEzRl4AV1WBjo6M5pnLW7x8zSBZZhQrfz0TQW3USIAQvy%2Bv2YsCFHGZCsaNG5vFtv40fp4MuwS9aD5JSVo2ASzqfCINuFEaAwOCkN%2Fx6s3ZqG7gsxaH6323SWvLdfIJGD1DlB1hpF%2F3433uzw7NkDTVA9FygcWEPNKBAlj7i%2BZqQc7pYGuy5y7pVgE3bpROiCnHH5x57jOyW1l&X-Amz-Signature=62f61bcdfae05138ceecf55222b3f294065445a5178ba297200749ce3117ae0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLIWH672%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0bimv3OSvJse4D320XHRIn%2FVDsuiwQrNSHSVWYyRf8gIgLPv6vC0a40lHEnFxIZMkSd8Pz3K8%2BpmGiqYjFOwwN58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJlItxhrgdHphOefBSrcAy9XF%2FTunpeZrIxS0GFTCbVJHtt2YYR%2FJAMNIFanJumj33vbphxirUD2yF6VGj1Km%2BbA9ek5J%2FDdhoPGzdmL8C6213LrA2uVDBM3Q38xT0I9mKjBjogg9pPhABRHUD2mhhhsO1DtEV%2FIrrZTniG8X0EY8U1Ak%2Bfqq7rqbwPXtO6Q7%2FY5YJ1cIfuW7838CUEfwbIfjRXPyNTGAbwnlRXMWvsXIP0wO2eOUbfwRnPzmmvOcLy%2BD6LdwJMx0dQYZGk4D63IGV0kI%2F78cyBaE2kZ3J93T3rI7TnawHCPzhzAtzUmAQpDVFcv8MCOYjVgJ8Gd6M4l0ut%2FErcnkIQDf1n9Q%2BgwFZuoRpPIkT7JHEEJ9o4B%2F%2BUH27AeM%2FDFMVDezqnlqvIUoXH5IN3%2BB86Qg2HVqSThjce6dep%2F42Ke%2FR%2B6oG8r%2BnkPgwDos%2BQdbI4X97U3SgXtfkkPsnYIk4w8OqqTcZkHdqgGNHEtjUXLZszs1jkvWq4fPpRnuVa9wF%2FwCYYIXWgXcNMhboRTIHQ8pHDwRfi%2BB9wyQkYT612bIGqUn1oulAWWZnAE5fRstRz16Rd8docOvSuZgDCkFMOz3HjqmxzZGCkF51GO9RVgUhXPbNaSHaXcwkJ0eYw97T06MI6k%2BcIGOqUBVlT9iuXaucHPlxfEzRl4AV1WBjo6M5pnLW7x8zSBZZhQrfz0TQW3USIAQvy%2Bv2YsCFHGZCsaNG5vFtv40fp4MuwS9aD5JSVo2ASzqfCINuFEaAwOCkN%2Fx6s3ZqG7gsxaH6323SWvLdfIJGD1DlB1hpF%2F3433uzw7NkDTVA9FygcWEPNKBAlj7i%2BZqQc7pYGuy5y7pVgE3bpROiCnHH5x57jOyW1l&X-Amz-Signature=95bdd2997a5685d838cdf9faa381374a647a7f90b5a74e3f9ee3b4882ebe2afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
