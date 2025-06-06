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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZWWO5P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCID7nVxYPibiGXe14H1RLCkj8RoKBlaWv2NZDjhTRxmjvAiBbNF4CqciC3bkjyc130hQGaL0gfiywPOAAfnTGILLJ2Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBjqfROzZZ9CAM%2B6eKtwDHsUlFMJDj7uuT8MdgiBrymMdergBs%2FWvXTYu15S%2BtX3EgHgskGFqdicIY7Cb4b2tTr5CEnF6bogEN3TzWeHYo6XHnFfLYAxs0iJ96aSRI91Rqgx8Zhp8nXFQYpCI3QumEugD9XpVEHKzz%2Fwlggj%2FImumAVkZuKwEzjinQda%2FtReOylljOwp2iEX%2FHrdJ3evbiBJ58j4a8WGZIkBozCLxtTH4wz274Hi%2Fzeslf8fGUhSVfknReLxZojnIc0PWWhYS62MdmNKoBe0S2yLyH%2Ftk0aHcLO96Y8LnYddgXdJL8j%2F5wrFWCQpvBhiwl4bm4eGfdiR5QgZPg5eqCDwIiA0XZ%2FjISwY22gmM6Wkt%2FERT04T24krM69R1V4ALbQRsfbhvnfI5sRWzzZHeVeb7tPui%2F6E%2FI9loNwZoqKralzk4YoT93hUzU0%2BuYkoYxyzCBN4J43SUVjqJU63R3V1%2FYJtpkiJpJTOm0EOCrwP8XWiSW6Dtwqrf0XmzRc9i6crTUPjjjQQAaEA6%2BfU%2BZ1c32v0THZaLFLCtle8phqmQj7M65zFsB4dHYKrs75figvq%2F1wnt7PBVZrriWWvCQVFZTyBWaP9W%2BLaawsET2BhdFakax7C%2FoHQJ%2By%2FobZ8QXkIw%2BNWJwgY6pgE49nHca%2B1uYpbrWUzjbe4CThH5bxEuoybB5dZs%2BjUC%2FZXv3eiKXkMVwPqq40pYCniU8lA3MoOrKuXr%2F9Y0gLstvMaDfJUK%2B0L%2BOPPu46loF3OkChfU%2FqZeckRIMhlgJv%2FAw1BsGfB5cLal6s%2FuRy9gPfUXMK5fuNBvmFi1GC0o9giBSadWJ6JGjWmLFThpimh3l3mjLAzBpaRtW4YkXX50UBbwVm5C&X-Amz-Signature=6303c0c785a0e1c4722b3684ddc785e630d1cb24bfbc7ef2a13fbace1d9716ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZWWO5P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCID7nVxYPibiGXe14H1RLCkj8RoKBlaWv2NZDjhTRxmjvAiBbNF4CqciC3bkjyc130hQGaL0gfiywPOAAfnTGILLJ2Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBjqfROzZZ9CAM%2B6eKtwDHsUlFMJDj7uuT8MdgiBrymMdergBs%2FWvXTYu15S%2BtX3EgHgskGFqdicIY7Cb4b2tTr5CEnF6bogEN3TzWeHYo6XHnFfLYAxs0iJ96aSRI91Rqgx8Zhp8nXFQYpCI3QumEugD9XpVEHKzz%2Fwlggj%2FImumAVkZuKwEzjinQda%2FtReOylljOwp2iEX%2FHrdJ3evbiBJ58j4a8WGZIkBozCLxtTH4wz274Hi%2Fzeslf8fGUhSVfknReLxZojnIc0PWWhYS62MdmNKoBe0S2yLyH%2Ftk0aHcLO96Y8LnYddgXdJL8j%2F5wrFWCQpvBhiwl4bm4eGfdiR5QgZPg5eqCDwIiA0XZ%2FjISwY22gmM6Wkt%2FERT04T24krM69R1V4ALbQRsfbhvnfI5sRWzzZHeVeb7tPui%2F6E%2FI9loNwZoqKralzk4YoT93hUzU0%2BuYkoYxyzCBN4J43SUVjqJU63R3V1%2FYJtpkiJpJTOm0EOCrwP8XWiSW6Dtwqrf0XmzRc9i6crTUPjjjQQAaEA6%2BfU%2BZ1c32v0THZaLFLCtle8phqmQj7M65zFsB4dHYKrs75figvq%2F1wnt7PBVZrriWWvCQVFZTyBWaP9W%2BLaawsET2BhdFakax7C%2FoHQJ%2By%2FobZ8QXkIw%2BNWJwgY6pgE49nHca%2B1uYpbrWUzjbe4CThH5bxEuoybB5dZs%2BjUC%2FZXv3eiKXkMVwPqq40pYCniU8lA3MoOrKuXr%2F9Y0gLstvMaDfJUK%2B0L%2BOPPu46loF3OkChfU%2FqZeckRIMhlgJv%2FAw1BsGfB5cLal6s%2FuRy9gPfUXMK5fuNBvmFi1GC0o9giBSadWJ6JGjWmLFThpimh3l3mjLAzBpaRtW4YkXX50UBbwVm5C&X-Amz-Signature=9e5d4993e956e0247794b037c9b2b7b141526b7305a8162c306eda562d095a51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
