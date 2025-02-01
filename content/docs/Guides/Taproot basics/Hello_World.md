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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CHH6BK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2FnXZQExmlI9EOvM4ungj9in19QLo76YnEcySeBzVuAiBkAo%2BP%2FUX7%2Bw8tTB3kaVV4tF8BK9p2h8Sw8uKhQZL39CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGY62tZneKqyBtY3KtwDjKxVbhSJqTDzUdgr2Jx4za%2F297W8Zvvk1O25PcjD1ZadDSirG1HABQJbC16bXEm6tOkAWX8Qnp%2BE3uDuiDFfV7tjfsJodT8DDWJyk56CC8bT%2FmtyorzIwxX%2B0zmC%2BrrTCNwGLfFf2ddUq%2FwHrPbLkVIgOr%2B8bVygGJzLElkjn8oYWRcwRqhBYE9YOVs0DttXnSeFPSLZt8QREagHsAghl0wFi23jlyzXqzJb9LLR8uVD7fpWNSBX6nSa0NjPbG40R%2FvkOt4MBUP9T3ZccPswf1MQF6u%2BdfgE3qJzUhzExd0OzFd6%2B4LwlxYws3N37f0p3X9Anz4NoB1NGUsgtsE3sBCVbCW4u0ymS1FbMNFxpywYp9uk%2FjbcnX1TuKgMT4YVpom9JW0PJvNSKeFYXUlEteo7Ung%2BeslUVDJoiSf9hekT4mglkzwZPOcXgjSWKiby7o1i%2BJ4m3oE8gqknnv3gJnHeknCMhZZ9OtlfL2aUxrv2WS%2FwS%2Boy7rdFMBuo1rTIyQx5SjPKy6%2BqMdCg5Z%2B5T%2B6sjk2%2BzdctoG2r9EZBSx0UbEPr0OwLhSJPqWFb0l8zcypsGetzMSZfkXCpM1Md6yTgKXiAn0cJnGZqG%2BN9BmQl%2Fk4j2Qar9DW39oAw1e71vAY6pgGkiTxdWmM1ua8ehXUBFD%2BEikiqnIYq8HyJDZMxiP%2Bn3q9yFJx7anI1WZk3fFdjQRb3qxJcfbJrPrEBXlDzN%2FhtiAUDrOLJpuGSw0slS%2BE1ByIhkrCLlR%2FeskKIPnVrqaQksbJ1R%2Fm6FhwAzC9DJcsda15tZkaTaAPY1ne2I0eYxy0%2FwRDrl0qA1MYMsGIUp7%2FCqhc38YF5nBTTGhvMiSrq9%2FiOvk7d&X-Amz-Signature=12861d697a94e168a389641f6b130b1f60d6761454178549630f17e51dc6db21&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CHH6BK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv%2FnXZQExmlI9EOvM4ungj9in19QLo76YnEcySeBzVuAiBkAo%2BP%2FUX7%2Bw8tTB3kaVV4tF8BK9p2h8Sw8uKhQZL39CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGY62tZneKqyBtY3KtwDjKxVbhSJqTDzUdgr2Jx4za%2F297W8Zvvk1O25PcjD1ZadDSirG1HABQJbC16bXEm6tOkAWX8Qnp%2BE3uDuiDFfV7tjfsJodT8DDWJyk56CC8bT%2FmtyorzIwxX%2B0zmC%2BrrTCNwGLfFf2ddUq%2FwHrPbLkVIgOr%2B8bVygGJzLElkjn8oYWRcwRqhBYE9YOVs0DttXnSeFPSLZt8QREagHsAghl0wFi23jlyzXqzJb9LLR8uVD7fpWNSBX6nSa0NjPbG40R%2FvkOt4MBUP9T3ZccPswf1MQF6u%2BdfgE3qJzUhzExd0OzFd6%2B4LwlxYws3N37f0p3X9Anz4NoB1NGUsgtsE3sBCVbCW4u0ymS1FbMNFxpywYp9uk%2FjbcnX1TuKgMT4YVpom9JW0PJvNSKeFYXUlEteo7Ung%2BeslUVDJoiSf9hekT4mglkzwZPOcXgjSWKiby7o1i%2BJ4m3oE8gqknnv3gJnHeknCMhZZ9OtlfL2aUxrv2WS%2FwS%2Boy7rdFMBuo1rTIyQx5SjPKy6%2BqMdCg5Z%2B5T%2B6sjk2%2BzdctoG2r9EZBSx0UbEPr0OwLhSJPqWFb0l8zcypsGetzMSZfkXCpM1Md6yTgKXiAn0cJnGZqG%2BN9BmQl%2Fk4j2Qar9DW39oAw1e71vAY6pgGkiTxdWmM1ua8ehXUBFD%2BEikiqnIYq8HyJDZMxiP%2Bn3q9yFJx7anI1WZk3fFdjQRb3qxJcfbJrPrEBXlDzN%2FhtiAUDrOLJpuGSw0slS%2BE1ByIhkrCLlR%2FeskKIPnVrqaQksbJ1R%2Fm6FhwAzC9DJcsda15tZkaTaAPY1ne2I0eYxy0%2FwRDrl0qA1MYMsGIUp7%2FCqhc38YF5nBTTGhvMiSrq9%2FiOvk7d&X-Amz-Signature=6792d1e886b2add788be3e05f163c9ca98542410ec05e7d790041e0ed5ed6cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
