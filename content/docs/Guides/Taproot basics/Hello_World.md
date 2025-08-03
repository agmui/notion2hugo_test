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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFF67MX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIwY1La1wAHCNlL0ot%2Bo0khndFCkbg3%2BeEl8pOsBUnwAIgYvPPg1HUATA3Y7l9Y7N%2BoqxYwdO9qqECZF8XarFRtlMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOEvEujTuS39Si3aHircAx6lhJZUc3eehJ9TUPbIRHCg%2FGu8ymwm3ASvDzi0sdQRBsWmGRiasD%2FBzWODtMEEu2crc0D8TObIvR25YplKhWQTGaWkY9p8gluK60FU%2BfJgTecxbV3n%2F6yGhk0RXIHXWUTygJWBkU%2FAJitjWdlREisVMQBaOQzwxHBF%2B9jNYlgX8JP%2B7JRfBpzC8jm5W98OAEyYAWHCHsEmulECipWo0OMV4EiqjQZtSAv0lKDhEPXFkdWSM4wPr%2B%2BoMRblEKMPoz6t7SOqWEjc0qgQqHjCpNieYyf2zlcYyv84OcVcDET3vlrLl5DKoiQtBxQgHMr2yDWbtcWZ1lCq0v7ZUnecQwj9M2xxr4uLlabvCbKXrR6Jc0ljdAB36QH3Pl8wHYz2yGjj8nmx62RO3i%2FRv9rE5kJm6KXGvsdh2w4aw7YVEQi%2FAo4ody%2F9hW539O8rHL75lK4rhmGcSds0YdIWaDTHEoZ1mG%2Fw6tD15%2BbOIRRKewlxAADbJ6InsjB4YaqEotQdqjzT0J6nfVi0U3VxGV3mhJLDQ%2B54aRbQ%2FmEBcU0tGMpNUVozsY6cgqwQ737J8tgbf%2B9%2Fa0lQSYCKFhmmVxulrxvYvb%2FRXUgTq%2FN0CISjPXRvYX40ieZhS6FjZ9OIMPCqvsQGOqUB28p5%2BLF16rWDVzdzGb0%2FbjwLspvmW7HicO9ovtHUgURoxDfdsDfFnv5Wl34JBtItrADrWtTpkCcInxvCNzKrtEczEui%2FHucg%2Fys%2Bgav60PYtcJXnPx%2B6%2BEte2UXMyxf9yB5Is1l2k%2FiKllN9aHXnIpTUF3ztOPeyIgdpA8N6X9tg17qLbcOyCUDqHhCLr0Y980hiee4nKqha3WPLafk6JMDcPGcV&X-Amz-Signature=8a4dfb2e8c12c9d97169f926c188c391307cb003b2d0d51caa8d8284c5e9e3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFF67MX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIwY1La1wAHCNlL0ot%2Bo0khndFCkbg3%2BeEl8pOsBUnwAIgYvPPg1HUATA3Y7l9Y7N%2BoqxYwdO9qqECZF8XarFRtlMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOEvEujTuS39Si3aHircAx6lhJZUc3eehJ9TUPbIRHCg%2FGu8ymwm3ASvDzi0sdQRBsWmGRiasD%2FBzWODtMEEu2crc0D8TObIvR25YplKhWQTGaWkY9p8gluK60FU%2BfJgTecxbV3n%2F6yGhk0RXIHXWUTygJWBkU%2FAJitjWdlREisVMQBaOQzwxHBF%2B9jNYlgX8JP%2B7JRfBpzC8jm5W98OAEyYAWHCHsEmulECipWo0OMV4EiqjQZtSAv0lKDhEPXFkdWSM4wPr%2B%2BoMRblEKMPoz6t7SOqWEjc0qgQqHjCpNieYyf2zlcYyv84OcVcDET3vlrLl5DKoiQtBxQgHMr2yDWbtcWZ1lCq0v7ZUnecQwj9M2xxr4uLlabvCbKXrR6Jc0ljdAB36QH3Pl8wHYz2yGjj8nmx62RO3i%2FRv9rE5kJm6KXGvsdh2w4aw7YVEQi%2FAo4ody%2F9hW539O8rHL75lK4rhmGcSds0YdIWaDTHEoZ1mG%2Fw6tD15%2BbOIRRKewlxAADbJ6InsjB4YaqEotQdqjzT0J6nfVi0U3VxGV3mhJLDQ%2B54aRbQ%2FmEBcU0tGMpNUVozsY6cgqwQ737J8tgbf%2B9%2Fa0lQSYCKFhmmVxulrxvYvb%2FRXUgTq%2FN0CISjPXRvYX40ieZhS6FjZ9OIMPCqvsQGOqUB28p5%2BLF16rWDVzdzGb0%2FbjwLspvmW7HicO9ovtHUgURoxDfdsDfFnv5Wl34JBtItrADrWtTpkCcInxvCNzKrtEczEui%2FHucg%2Fys%2Bgav60PYtcJXnPx%2B6%2BEte2UXMyxf9yB5Is1l2k%2FiKllN9aHXnIpTUF3ztOPeyIgdpA8N6X9tg17qLbcOyCUDqHhCLr0Y980hiee4nKqha3WPLafk6JMDcPGcV&X-Amz-Signature=2aca29757f569dfcf37dafc1beb9cd2e7a59434222a9cdadb1d6a24d884338d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
