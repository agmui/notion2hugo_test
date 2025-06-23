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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJU5M4NB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDBgbVUKzx%2BWRmeYJTMFfdZiC4ijTAZuIZypR48Cb9MAwIhAJHhoKQeBWlwpAbTEdnwR4iAC8y%2BrNWSTOzS8KTmSBnBKv8DCBoQABoMNjM3NDIzMTgzODA1IgxOZoXT4WZGwix5TTAq3AMIZVKV%2BHSJV6fStItV36FpNCGsnOn%2BWEWf8d5nSjvoOP0zGcYXYdzmxEHysCPwvJ8RGqwEBoNKlNTjqz%2BR7BI1fuMOfQHJHysm7YTEg5wPNaKFr1z5kcDSU03jw%2BkHKaoMxhNpH7Gf9ME60u38V6u1TwLBwaiJbExR8nDAyZBBRu7KOSnqYQ5POdV3iyAjkqiMErAp5zGtxp60UwGQiMnbjUtX8lGQ1%2FBAirmtDVebtiLMt%2B8QCSH5s6IIiUPDjjKHUPrbpTTM64ST86vvwbRFKFOeBSUdjG0a5WphCm6VpEwjDWBygtO%2Bz1JBYM6AArN7tMPeR6kI3vabnphzoPmvoGm11JOCWnLJSx73THs6AqeiGUaf7EISKodqBD4EX1q2NUsjsx%2FV9cfs%2FTIwwYJCl%2Fj3%2Fapk%2FxW4zLNHo63KrjYMukzzuBq7RjueuEhKSrDAMSPgY1F629MIgS6cN28dWDsW4sCwiDsFJ0g6VlgSef%2F5obIr6yKSGx38B%2Fc4q8UjuSMrRoY5R6Lu85UWMdUtK68w%2BofyrIChRlsqVEF2c7ej1Y608ztgy7QOBAsWZ6lySHW5A30Rk6Mqm%2Bn%2BZwTxXEdlx%2BOB9kK4Oo8uUcA4i%2FpsHnfY4Lvwvy2L0zDbh%2BbCBjqkAdeYpHF08vNAKyBp%2F5F7N5%2B3TbjccWNlqzdXeKm73o%2BkU3juvj%2Fr%2BdpypIMLRG10tqXFHqm%2BDqjGpV33i7Bzu%2BQHdL4BPiGNlkwWrf4Ou%2BLZfknFgshyz2%2B%2Be8ZjXw8CHvFNGoK2GO6%2BibecD%2F%2FFwlWKWKQyScSFInRDFzkXIir1UZDSBXTbzze6aY4PYok%2BOw%2Fd%2BWr8jIl2ma8Ewkka8eSUXmIO&X-Amz-Signature=bdf09848a5067d95f66222085efcde2da274bbe3d383f93236f8b2992a1a8c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJU5M4NB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDBgbVUKzx%2BWRmeYJTMFfdZiC4ijTAZuIZypR48Cb9MAwIhAJHhoKQeBWlwpAbTEdnwR4iAC8y%2BrNWSTOzS8KTmSBnBKv8DCBoQABoMNjM3NDIzMTgzODA1IgxOZoXT4WZGwix5TTAq3AMIZVKV%2BHSJV6fStItV36FpNCGsnOn%2BWEWf8d5nSjvoOP0zGcYXYdzmxEHysCPwvJ8RGqwEBoNKlNTjqz%2BR7BI1fuMOfQHJHysm7YTEg5wPNaKFr1z5kcDSU03jw%2BkHKaoMxhNpH7Gf9ME60u38V6u1TwLBwaiJbExR8nDAyZBBRu7KOSnqYQ5POdV3iyAjkqiMErAp5zGtxp60UwGQiMnbjUtX8lGQ1%2FBAirmtDVebtiLMt%2B8QCSH5s6IIiUPDjjKHUPrbpTTM64ST86vvwbRFKFOeBSUdjG0a5WphCm6VpEwjDWBygtO%2Bz1JBYM6AArN7tMPeR6kI3vabnphzoPmvoGm11JOCWnLJSx73THs6AqeiGUaf7EISKodqBD4EX1q2NUsjsx%2FV9cfs%2FTIwwYJCl%2Fj3%2Fapk%2FxW4zLNHo63KrjYMukzzuBq7RjueuEhKSrDAMSPgY1F629MIgS6cN28dWDsW4sCwiDsFJ0g6VlgSef%2F5obIr6yKSGx38B%2Fc4q8UjuSMrRoY5R6Lu85UWMdUtK68w%2BofyrIChRlsqVEF2c7ej1Y608ztgy7QOBAsWZ6lySHW5A30Rk6Mqm%2Bn%2BZwTxXEdlx%2BOB9kK4Oo8uUcA4i%2FpsHnfY4Lvwvy2L0zDbh%2BbCBjqkAdeYpHF08vNAKyBp%2F5F7N5%2B3TbjccWNlqzdXeKm73o%2BkU3juvj%2Fr%2BdpypIMLRG10tqXFHqm%2BDqjGpV33i7Bzu%2BQHdL4BPiGNlkwWrf4Ou%2BLZfknFgshyz2%2B%2Be8ZjXw8CHvFNGoK2GO6%2BibecD%2F%2FFwlWKWKQyScSFInRDFzkXIir1UZDSBXTbzze6aY4PYok%2BOw%2Fd%2BWr8jIl2ma8Ewkka8eSUXmIO&X-Amz-Signature=67642c083e898bb0da443b66c5ad16fcaa953a0ea2a16b2caced180c0307afd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
