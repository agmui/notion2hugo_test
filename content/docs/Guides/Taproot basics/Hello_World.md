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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWXRGQ6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfeZ0dFfSTL2B4TaujeRoqKJ%2F1oV%2FvgloE0uXHIDYJAwIhANkQljL7r5WDCa09vxwVdmChVhPAaLu7SqDF66ym%2BneFKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzleNOKrQJWRNL93h8q3AO8B4OceQ4xG1LLydg3so%2F1c9x7HvOaKBZiiEzq5XnRS2h59F4tG3z%2F6EGmd5D8WJvVQeK8cYo7vQaMbNBKwFQmp1A5ACmEZgzmq1xrwB91RorXbzReqB6ORh2hFIGN%2BbbfAs6XF8%2BzOe5MhFZmgkykL2ALk3ZNE3oTm7sOqy2ggccc6HbCYQO4S5uaNaicu9LG347udkIBUnvC8BjXXBwbc62Jnlych8xGuMswnkFmeZJ%2BBp5oXTfL71yz3%2BUFfs0%2F4pvVSCzwm2GLw290VeYSuRCoKjYF35jWurX08Bxv2gm98%2BdBow98OwAXdhIoyypIUVxKx%2FMbvzq15OvAk%2BcQgru2ipnqS4sPzdaCxxVRKrCg5qkla4A6rCUoyWPp7aI81TR0LyzTZlR7auEhEUHaJ81w1xk79MbcWxvGIdjVIg7JG46T4DbzJYa608Wefsz%2F94sPsrpXqzbeAyHRmeajNI2tXJIPCr6p%2BEUaCdpo3V1jhUwxb3lw2GC78MqmVeQL35zqb4GGRdxvY3bxJ8bp175M8jQBa4ehKOVvrl%2FCTfDXe0JPvKZGccfN6QVKYbjR%2Fa097IBzQPKrTY126u6wNJp%2B7y6S9M%2BtSWHkq8NeDI1QIUn1bnMiLJyodzC4k5XDBjqkAfCEQUemFmnrekoml5Dy1RZOW8vhq%2F72e24WiAQTWyTJfIqylK7Xvk5%2BIq0LoLf0MFUJGc4fSus%2BzjicfG7is9jYgcy2tATr1atRHFKrnjIj5z6VBpgYS7EHKgYOEWrmPCSEXrL4%2BTOLAnkiGI1EEcjZGAVTU3A78nRD4X1zwrYBJfzIvNl2CIXathCLSIUDHIrep%2FILU1%2F6PeChKdlRQQJq6vO%2B&X-Amz-Signature=a4fcd1238f5eb74bd5fffbdfe9969151f03db172bd60d5bcd4569cc6b62e062c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWXRGQ6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfeZ0dFfSTL2B4TaujeRoqKJ%2F1oV%2FvgloE0uXHIDYJAwIhANkQljL7r5WDCa09vxwVdmChVhPAaLu7SqDF66ym%2BneFKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzleNOKrQJWRNL93h8q3AO8B4OceQ4xG1LLydg3so%2F1c9x7HvOaKBZiiEzq5XnRS2h59F4tG3z%2F6EGmd5D8WJvVQeK8cYo7vQaMbNBKwFQmp1A5ACmEZgzmq1xrwB91RorXbzReqB6ORh2hFIGN%2BbbfAs6XF8%2BzOe5MhFZmgkykL2ALk3ZNE3oTm7sOqy2ggccc6HbCYQO4S5uaNaicu9LG347udkIBUnvC8BjXXBwbc62Jnlych8xGuMswnkFmeZJ%2BBp5oXTfL71yz3%2BUFfs0%2F4pvVSCzwm2GLw290VeYSuRCoKjYF35jWurX08Bxv2gm98%2BdBow98OwAXdhIoyypIUVxKx%2FMbvzq15OvAk%2BcQgru2ipnqS4sPzdaCxxVRKrCg5qkla4A6rCUoyWPp7aI81TR0LyzTZlR7auEhEUHaJ81w1xk79MbcWxvGIdjVIg7JG46T4DbzJYa608Wefsz%2F94sPsrpXqzbeAyHRmeajNI2tXJIPCr6p%2BEUaCdpo3V1jhUwxb3lw2GC78MqmVeQL35zqb4GGRdxvY3bxJ8bp175M8jQBa4ehKOVvrl%2FCTfDXe0JPvKZGccfN6QVKYbjR%2Fa097IBzQPKrTY126u6wNJp%2B7y6S9M%2BtSWHkq8NeDI1QIUn1bnMiLJyodzC4k5XDBjqkAfCEQUemFmnrekoml5Dy1RZOW8vhq%2F72e24WiAQTWyTJfIqylK7Xvk5%2BIq0LoLf0MFUJGc4fSus%2BzjicfG7is9jYgcy2tATr1atRHFKrnjIj5z6VBpgYS7EHKgYOEWrmPCSEXrL4%2BTOLAnkiGI1EEcjZGAVTU3A78nRD4X1zwrYBJfzIvNl2CIXathCLSIUDHIrep%2FILU1%2F6PeChKdlRQQJq6vO%2B&X-Amz-Signature=6f2e0f6178ce045468ce6229f50c86c622500ad4f2e546d3ec335e6e47299675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
