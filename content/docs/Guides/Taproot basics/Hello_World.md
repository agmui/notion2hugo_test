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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2B4XKWO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC4FIywC4nsN5OTe1vW3j6esesAeO%2BqjFvjqUpdF8VZggIhAODGdPuiR%2F6mxCtXi5k3GOmmOWkETbQa%2Bon%2Fq2as%2Fa%2FQKv8DCBAQABoMNjM3NDIzMTgzODA1Igw8xifyMMerZjJMM0Uq3AMc36g3MNoIgNEzRnGc32FeZNINaS5eh8gcHzPHqYb10RIs5TLgnX9n537CNJMQd0Mw6DBNMV1yJvSz2DANrGBmnPgaM2dEF%2Bl2nOXDC%2F1n8zLCAE9t8uaNVejUOWFcaS5bG%2Fw%2BfPKsV22g2Fyb8ibCN8UvWCFYc2NPkwRr2Ux0G6b%2Blqu7TVUc4uVs5YaM6nfG7jCi9PqVI0%2BS%2BsyxqL5qrrlJaE8KnXjZpknc%2BIh2v917FIcd2Q83VPX1AWVi%2FFAItQ%2BSAdez0kNs7DBC1mnMMCOnh8O7wW7Ly6dRhJw8ZhODp10JAyWAs3fZD8r9f7M2VqYSflUypFhqfwm%2Fpvaw5HnoC%2FFumAzeVUDdVsx%2Bg8yvVcQbwm3kB30I4N3AkvEe%2Bza%2FusVjEfAZkaiFS%2FAA7K7osZ0ow8DsftaPcqgppiY4h0bprPF3AEVGuW5WuEC6y88h8R2Jumh2qyNXFRHlWgw0gMbP7LeLLF9sbaCJYuMcGdEkdddfkbLmZGVtYARtr0JSlZtCZpWzx1eTdTZoNdiLVKvPDxUP4rRSEvMwncnOq33d6ghxALBVijEhgyY6LL%2F6jLl84pLhDGaxtMjgAEIrb%2BfHRHuN4V%2Fy%2BHDsqSgzGianC49loQ9j2DClia%2FCBjqkAc8%2F5eyu54hOAFthf3lDoQWhiJV203QYjNwefp%2BGy9LLUGPqosyregPgFKwSpmUzHKDBZQRNan8OWvCSQGj1KLY8E%2FzvDrQzvhuEtvp056P3%2BXKfA%2Bj%2FaoVAzXm1itLpSuSZQKSXa5qqdP0dTQ3EcsUi3K7djtGYg5GVGLUGLti%2F7vj2FuCCaecV9QRoZ5%2FZS8TAAcN1VQBNQWa67Gv2nw09bSj%2F&X-Amz-Signature=edf477e802443cbb8d139696a6512696fdb15168c013baa6209c667df4b4ab12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2B4XKWO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC4FIywC4nsN5OTe1vW3j6esesAeO%2BqjFvjqUpdF8VZggIhAODGdPuiR%2F6mxCtXi5k3GOmmOWkETbQa%2Bon%2Fq2as%2Fa%2FQKv8DCBAQABoMNjM3NDIzMTgzODA1Igw8xifyMMerZjJMM0Uq3AMc36g3MNoIgNEzRnGc32FeZNINaS5eh8gcHzPHqYb10RIs5TLgnX9n537CNJMQd0Mw6DBNMV1yJvSz2DANrGBmnPgaM2dEF%2Bl2nOXDC%2F1n8zLCAE9t8uaNVejUOWFcaS5bG%2Fw%2BfPKsV22g2Fyb8ibCN8UvWCFYc2NPkwRr2Ux0G6b%2Blqu7TVUc4uVs5YaM6nfG7jCi9PqVI0%2BS%2BsyxqL5qrrlJaE8KnXjZpknc%2BIh2v917FIcd2Q83VPX1AWVi%2FFAItQ%2BSAdez0kNs7DBC1mnMMCOnh8O7wW7Ly6dRhJw8ZhODp10JAyWAs3fZD8r9f7M2VqYSflUypFhqfwm%2Fpvaw5HnoC%2FFumAzeVUDdVsx%2Bg8yvVcQbwm3kB30I4N3AkvEe%2Bza%2FusVjEfAZkaiFS%2FAA7K7osZ0ow8DsftaPcqgppiY4h0bprPF3AEVGuW5WuEC6y88h8R2Jumh2qyNXFRHlWgw0gMbP7LeLLF9sbaCJYuMcGdEkdddfkbLmZGVtYARtr0JSlZtCZpWzx1eTdTZoNdiLVKvPDxUP4rRSEvMwncnOq33d6ghxALBVijEhgyY6LL%2F6jLl84pLhDGaxtMjgAEIrb%2BfHRHuN4V%2Fy%2BHDsqSgzGianC49loQ9j2DClia%2FCBjqkAc8%2F5eyu54hOAFthf3lDoQWhiJV203QYjNwefp%2BGy9LLUGPqosyregPgFKwSpmUzHKDBZQRNan8OWvCSQGj1KLY8E%2FzvDrQzvhuEtvp056P3%2BXKfA%2Bj%2FaoVAzXm1itLpSuSZQKSXa5qqdP0dTQ3EcsUi3K7djtGYg5GVGLUGLti%2F7vj2FuCCaecV9QRoZ5%2FZS8TAAcN1VQBNQWa67Gv2nw09bSj%2F&X-Amz-Signature=99887e475f5a3f042e7c00712944cde76818523818ee6e5865e97cea02a80a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
