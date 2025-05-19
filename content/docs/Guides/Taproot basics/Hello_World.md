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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7B4GCR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVzMGWtlGHowi4NVKFPYXwqjn127rBV6s83s1tkQ2AvQIhAKysp2yhNykY223N55apbnNwwRFuah8eKPm8iIy9QWIqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz672NmbKkn3sbp1zkq3ANPiEh5DnkadafuDKosONyGZh93ZGddkbCr6oHjgh7mEMwRpHRCbBCbkjFSP98A0ue4jZ3dIkkeTg8u2QM%2BJ8B5oWJsLns7TKdpy3ggXbLkwNrvaqipqLta0Tz6KELD5KfvZkyYhKvq%2Fb8gru3E2QGzj8yuHQliwymAWfXDXIS7G4OWxtyRHxvYB0Yx25RWKcwiZNJQvABXnT7OhCLh%2FnMpBNzfvoJAl%2BE%2B2D%2FjO%2Fj7VsOiQkDmDH4Kymn2F6jnSIZn2efyTIYXJPijl9lbIAQPNVtMOUM%2BNhU6hvWPMmZ25kzvSnz%2BVGWwGrWB9N%2BDZTDIyd3oYmwTuE%2BVgkZYyEbXFyNe9HUxPIboSR6xto9jkcLw4JZCzbYFbwhZf%2BPSVIiK0bTv%2BNiABFxcT6jpNXbWafDEbqNGExw9jX0TaKjiAMj3aBy5X52etc9AHwI28DrfstS2f1YbXjKFMEVnjw5jKtOF6CQ91K07mWogoRzpgid4zQTYFPOkKBuPmSHuFQSs3UbRscqNi1e7TlNpSQb%2FXJqq3BkxCz%2FpZBzzN5aR5S7F7Jbu0SqJ9nL1QRkTVuadphPLoVtvdiYSSnlw%2F%2F9EBx7ghtThNJ4AmRe0ojl9gPTijNhpCxfNVfhQqjDKnqvBBjqkAeHx9aBzefTg5%2BNQgs7OWVjI8kMj4z064O0tU0y%2B2Sf7aUsJ1458pRQIl0m0yPiSZ4uE3j6pT98NdaV9X0VcUtos4VvQr8EdmZxpTV50p3nLwv5cTyEWwaBaEPKPD6WKBcF6OqgREmQNyiQ9pOUa7C6S37ZeneX5DP4parIRhnOoiPeMCdgPAlekBmX5BDPnFDu2VDC%2Brr1u1AzWUaBIKOKxiprs&X-Amz-Signature=32495ec6557e23f4fda0b84ed5bf800d53f730bac03b8cc6456928f891dc13c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7B4GCR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVzMGWtlGHowi4NVKFPYXwqjn127rBV6s83s1tkQ2AvQIhAKysp2yhNykY223N55apbnNwwRFuah8eKPm8iIy9QWIqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz672NmbKkn3sbp1zkq3ANPiEh5DnkadafuDKosONyGZh93ZGddkbCr6oHjgh7mEMwRpHRCbBCbkjFSP98A0ue4jZ3dIkkeTg8u2QM%2BJ8B5oWJsLns7TKdpy3ggXbLkwNrvaqipqLta0Tz6KELD5KfvZkyYhKvq%2Fb8gru3E2QGzj8yuHQliwymAWfXDXIS7G4OWxtyRHxvYB0Yx25RWKcwiZNJQvABXnT7OhCLh%2FnMpBNzfvoJAl%2BE%2B2D%2FjO%2Fj7VsOiQkDmDH4Kymn2F6jnSIZn2efyTIYXJPijl9lbIAQPNVtMOUM%2BNhU6hvWPMmZ25kzvSnz%2BVGWwGrWB9N%2BDZTDIyd3oYmwTuE%2BVgkZYyEbXFyNe9HUxPIboSR6xto9jkcLw4JZCzbYFbwhZf%2BPSVIiK0bTv%2BNiABFxcT6jpNXbWafDEbqNGExw9jX0TaKjiAMj3aBy5X52etc9AHwI28DrfstS2f1YbXjKFMEVnjw5jKtOF6CQ91K07mWogoRzpgid4zQTYFPOkKBuPmSHuFQSs3UbRscqNi1e7TlNpSQb%2FXJqq3BkxCz%2FpZBzzN5aR5S7F7Jbu0SqJ9nL1QRkTVuadphPLoVtvdiYSSnlw%2F%2F9EBx7ghtThNJ4AmRe0ojl9gPTijNhpCxfNVfhQqjDKnqvBBjqkAeHx9aBzefTg5%2BNQgs7OWVjI8kMj4z064O0tU0y%2B2Sf7aUsJ1458pRQIl0m0yPiSZ4uE3j6pT98NdaV9X0VcUtos4VvQr8EdmZxpTV50p3nLwv5cTyEWwaBaEPKPD6WKBcF6OqgREmQNyiQ9pOUa7C6S37ZeneX5DP4parIRhnOoiPeMCdgPAlekBmX5BDPnFDu2VDC%2Brr1u1AzWUaBIKOKxiprs&X-Amz-Signature=f372efbd7d84bb1082d41fc5ef6c425e47d95767c86a60377ad69a82255e27f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
