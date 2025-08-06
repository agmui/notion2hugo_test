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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2VHPRG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDcME1jFPgYDe%2FGT9hwRpyF9DciYJ1OAGiK6AbHLxpGIgIhAJtFjb60RBVOBSvV2qhGYmo9H%2BZ96V1HFy8zZ2%2BXnsbzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxuiafmLgKTeoyKyAoq3ANbZvmpShzpDWcmrwEaGn0yBD9TBEx%2BcPhZUl%2F1Nyo4F2Yyxkr%2FT6Pt%2FLKi4wF6SL%2BFlE3GjjdRdlCAgrWQw2VeM%2FM0rXwgtLBbKna%2BAYqlgTWAqZ0zWHwuCQMXARE%2B5EhSzSsDSKUn5VLyzy0aoFBD3sg4oY8rPQVaN8bZ4K5dQG0SnlZxHxh4vD3JSQpZDETxqvIUk8wNDpKr1F2vAAEqXDOv%2B0nJ%2FCKwPwG2dVxV1SuL%2Fax9kRPKa5kptZfq%2F83AjgQqsko7rQacUrHv0%2FAueXN2lpRXiLXXPbrybNugP0OYlyUaucfSR7Tao6zbT9XMGOvCo3%2BZYhrGYyHs4gUv8%2Fbn%2BXf%2FN0fhy%2FubczvTLiFES8ZsCmSIZ8m73KS9Ltcn2JuRr5HvIgUWxLmt6fxr0qOqx3mxqkKvm7xV2kWo1uYBftUrFEtWNOrvVlC5Z3Fdvqtljmzch6GJm3TK%2BvGeZ2twez0hpTd4RGJACD1DjEZd8Wpokspmw3PdxzhH4ZRDCJNncCFTWvSY3xkmQ%2B2T3VOhdft77jbWzdFilvQLDreQPDaLssNxiEeYbDaIHAkEzyhxaq1e0Mw1ufNgqOSA4FvU960Uzz0Bwm7B2XDEshztWDZEED6EbmYL2TCQhc3EBjqkAZjYm2U2iqueFHhW53xfsD7HFJ0NdaNos%2FlBaf0bybNeKqjo%2BUl314tytaAt1vXbR1terwxq4oQQeEcN5WuY2WRdZmLnfKgNT5qjDtIaZ0gayCqaXJMd%2B2yAKfNuWuOScmZZKzmfFjGepfU8N%2BbJzVCsq1ziMSehQcyy5fy1FyQxj9ioz3zEpIu%2BPe%2FC8s8Ii5sP8kyFQyDBdP%2FF2o9lSZ5HBzDX&X-Amz-Signature=ad03adb92d483e20472183cd16735ce41e4510529fea331d997a0bc3a62061da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2VHPRG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDcME1jFPgYDe%2FGT9hwRpyF9DciYJ1OAGiK6AbHLxpGIgIhAJtFjb60RBVOBSvV2qhGYmo9H%2BZ96V1HFy8zZ2%2BXnsbzKv8DCHUQABoMNjM3NDIzMTgzODA1IgxuiafmLgKTeoyKyAoq3ANbZvmpShzpDWcmrwEaGn0yBD9TBEx%2BcPhZUl%2F1Nyo4F2Yyxkr%2FT6Pt%2FLKi4wF6SL%2BFlE3GjjdRdlCAgrWQw2VeM%2FM0rXwgtLBbKna%2BAYqlgTWAqZ0zWHwuCQMXARE%2B5EhSzSsDSKUn5VLyzy0aoFBD3sg4oY8rPQVaN8bZ4K5dQG0SnlZxHxh4vD3JSQpZDETxqvIUk8wNDpKr1F2vAAEqXDOv%2B0nJ%2FCKwPwG2dVxV1SuL%2Fax9kRPKa5kptZfq%2F83AjgQqsko7rQacUrHv0%2FAueXN2lpRXiLXXPbrybNugP0OYlyUaucfSR7Tao6zbT9XMGOvCo3%2BZYhrGYyHs4gUv8%2Fbn%2BXf%2FN0fhy%2FubczvTLiFES8ZsCmSIZ8m73KS9Ltcn2JuRr5HvIgUWxLmt6fxr0qOqx3mxqkKvm7xV2kWo1uYBftUrFEtWNOrvVlC5Z3Fdvqtljmzch6GJm3TK%2BvGeZ2twez0hpTd4RGJACD1DjEZd8Wpokspmw3PdxzhH4ZRDCJNncCFTWvSY3xkmQ%2B2T3VOhdft77jbWzdFilvQLDreQPDaLssNxiEeYbDaIHAkEzyhxaq1e0Mw1ufNgqOSA4FvU960Uzz0Bwm7B2XDEshztWDZEED6EbmYL2TCQhc3EBjqkAZjYm2U2iqueFHhW53xfsD7HFJ0NdaNos%2FlBaf0bybNeKqjo%2BUl314tytaAt1vXbR1terwxq4oQQeEcN5WuY2WRdZmLnfKgNT5qjDtIaZ0gayCqaXJMd%2B2yAKfNuWuOScmZZKzmfFjGepfU8N%2BbJzVCsq1ziMSehQcyy5fy1FyQxj9ioz3zEpIu%2BPe%2FC8s8Ii5sP8kyFQyDBdP%2FF2o9lSZ5HBzDX&X-Amz-Signature=ee232d0d1ae46ac96c3e640cf2715c12c0dca8ed7851c5370fc6af959d615799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
