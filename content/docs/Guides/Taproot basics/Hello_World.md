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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAH2V2TV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4aAi6PVV9sVJum8yEwyWrhll59nJQYwI%2F0dYPuj3zAIgV0%2B7eb40jCy3Mo6Q%2F7y2ss5HJIRTqn8SXUW%2FAN9rvbAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3n0oit%2BhWE9H6SrSrcA%2FLF7Z5%2FRlOkGs%2FHa%2BamzVOR4aMqACGRBinEbHq9IFgQwFeJyT4tdHwzz6mlK2Iui0oSUKjKn%2B5vKlBbC%2FFxVVGBjMcQjYLNjvpisv9uThuyTO4pTpcOzqPgspM%2Bka8lyn9cDdOyV21os9Z6Ey8rHK8oCGvRi8l837BDFiSEZPP%2BhXP2cEWFswqyMHMZl4JxWbjUW6dg0Wh5U75AKinPJcFn8tB7G2bvwqec%2Bb2sSZq62v2tTC7OelEe8lIWe9faAfUq4B6xoAUOuEv2ygFnommyvfl01fXhgvTfG40VSQEBpq6EsuqjgayqtwruPlsqsgQdV8kiEq6gznAx0X9NR5KGo799vIySdY9HiiWRammAxyLOEov3fwEqwoT3IWZnky4v9fDEx5oV0hOTUKyAhi0FJbChyd9ulsw%2FL0un63wnbjbaxrlS734Vj52fv15FOMlW5sNsfEjKi92OE3jcmTbYiMYean%2F4skWtDcobrUcpLWgtyf%2BcYGAXKJJgOjz8Pepnk4vu3MnAqtqRZzs2xSdgn1aCi1UvabySGYB7PPIoxRXfEwjjtIHdRS6Of9MW3TdiJweH7%2FAu7l7WvNDx8GWAmrEIBezjqH%2FwJm8GR4hUGBLVc2nPsvwobLc%2FMJSqxMMGOqUBP4fIggsIZlwD9tgRV8AnSJA2LUiMWFeskubS62JUzyPS2XFTN03kaHYEDxrr8E%2F2K5Vy9%2BjMlMdirEwT3Q9TmPYM7pmwNA%2BcsrbXWdSH9k1lVGtNe%2Fc9o1i%2BBZ6cYaINYA%2FTZrTSmCsST%2BiM7L8WiNjHGiQRmQl5fMb5fpbsFCcR8yXsyZLfVnVHivMlwtVgxrqaeO4vWEkhNKwdjckTceGLtfK6&X-Amz-Signature=979432caa9fb8ab279755fac24a82dd9da4870059de90f6a29ebd068ec86c559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAH2V2TV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4aAi6PVV9sVJum8yEwyWrhll59nJQYwI%2F0dYPuj3zAIgV0%2B7eb40jCy3Mo6Q%2F7y2ss5HJIRTqn8SXUW%2FAN9rvbAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3n0oit%2BhWE9H6SrSrcA%2FLF7Z5%2FRlOkGs%2FHa%2BamzVOR4aMqACGRBinEbHq9IFgQwFeJyT4tdHwzz6mlK2Iui0oSUKjKn%2B5vKlBbC%2FFxVVGBjMcQjYLNjvpisv9uThuyTO4pTpcOzqPgspM%2Bka8lyn9cDdOyV21os9Z6Ey8rHK8oCGvRi8l837BDFiSEZPP%2BhXP2cEWFswqyMHMZl4JxWbjUW6dg0Wh5U75AKinPJcFn8tB7G2bvwqec%2Bb2sSZq62v2tTC7OelEe8lIWe9faAfUq4B6xoAUOuEv2ygFnommyvfl01fXhgvTfG40VSQEBpq6EsuqjgayqtwruPlsqsgQdV8kiEq6gznAx0X9NR5KGo799vIySdY9HiiWRammAxyLOEov3fwEqwoT3IWZnky4v9fDEx5oV0hOTUKyAhi0FJbChyd9ulsw%2FL0un63wnbjbaxrlS734Vj52fv15FOMlW5sNsfEjKi92OE3jcmTbYiMYean%2F4skWtDcobrUcpLWgtyf%2BcYGAXKJJgOjz8Pepnk4vu3MnAqtqRZzs2xSdgn1aCi1UvabySGYB7PPIoxRXfEwjjtIHdRS6Of9MW3TdiJweH7%2FAu7l7WvNDx8GWAmrEIBezjqH%2FwJm8GR4hUGBLVc2nPsvwobLc%2FMJSqxMMGOqUBP4fIggsIZlwD9tgRV8AnSJA2LUiMWFeskubS62JUzyPS2XFTN03kaHYEDxrr8E%2F2K5Vy9%2BjMlMdirEwT3Q9TmPYM7pmwNA%2BcsrbXWdSH9k1lVGtNe%2Fc9o1i%2BBZ6cYaINYA%2FTZrTSmCsST%2BiM7L8WiNjHGiQRmQl5fMb5fpbsFCcR8yXsyZLfVnVHivMlwtVgxrqaeO4vWEkhNKwdjckTceGLtfK6&X-Amz-Signature=20dab288df8fc4849154ffb3ef9281dd540a49ae68f98ff2bf2d2984e629163b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
