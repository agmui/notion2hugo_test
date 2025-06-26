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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5R4X43%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdlSns8lPwdO0u0lb%2BHjyw6JZ3a7pbUmj0wn0Ofb7oEQIhAPBb8kDhdHT3%2F0zb1saGdVWLyNWri39unnQ34DpAUurDKv8DCFUQABoMNjM3NDIzMTgzODA1Igye1U%2FXVbVBFKrH6eEq3APod1tKl9XhbCOiloVveT8uYqsiPF5kyfMJ%2BcXEjMwXpgiiD8Z20MY3cLtvnWCpJgn1%2FAUYQ3pzhz4KuZFU0wqJ9bPkL8p79Jgy%2FC1p%2F%2F6lv7I%2B1%2FRPSe8IRyteHafhb1qJd0EJt8MvrcZQjAttGwnfs7S4kELP0yc%2FVOBd88vEoEzpOaHiCxiXrMweyiMVm0EhmnHf1RYIYILaUBOO1%2BvApre9v7I%2BzNfbQAmUkMq%2FJiVdfX9lI14me9WQdFNrp0g%2BR2dfG3BXLSAsCWVfmRu8kjGbjiSioP0FnZElv%2B%2Bfpijk0NTtJZAkxIbjVkYoWpFnS5QlDwjtiI5ykLg5Ld46fkJJ7IzpYd8feJeKrKKSLSjKN%2BmFj1ckmwtK3rf2vgDD645aK%2F%2BJEIFDu8HXkKSo3C4O4zQ6xajeucO0slULWNQLLw%2BioGXMsvn0XSgmtY0ycFna%2FQf8BgMG18Wgfl70IJIQzbqCeDQ7kn7aThrJOTpNz4Wvzx50NoOb0PiHCQr%2FCXAnJGLnxDxSr81Y%2BKCuTfO7xX8JkTjr3JEqDC%2FDAFDAMGTRBdC%2FPOSP5r7E%2BHY1IfxQfAiNRjQVrbiIZ%2Fv11rlqXXIO3G1MZFPnXwupBxcEVfE2k96mibxjQzDCifPCBjqkAal2RG9TvwmqBvvKJx585IOUsKy%2FOBcURmGJTWllI4yu9mPJ71z5Iy%2B26xl25lPJh9I2CKhxOtD3pPSilAAfwuUUEF1OVI5oUc2uVXdjpwHgaUo2igcYx3GNrIjQCETsZsSrxxWDbueqJKwG7qXj%2B1WeABMKfxpjes3zjKrurvu3XRsmUwkIdFQgguYK4nvdGVA6cr%2Fsa1ywaUyi5IWpvCN7fSp5&X-Amz-Signature=bdb37c255506a0b844c2b64d3207aea56e74f00cc68071339f8c0e5df7da2df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5R4X43%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdlSns8lPwdO0u0lb%2BHjyw6JZ3a7pbUmj0wn0Ofb7oEQIhAPBb8kDhdHT3%2F0zb1saGdVWLyNWri39unnQ34DpAUurDKv8DCFUQABoMNjM3NDIzMTgzODA1Igye1U%2FXVbVBFKrH6eEq3APod1tKl9XhbCOiloVveT8uYqsiPF5kyfMJ%2BcXEjMwXpgiiD8Z20MY3cLtvnWCpJgn1%2FAUYQ3pzhz4KuZFU0wqJ9bPkL8p79Jgy%2FC1p%2F%2F6lv7I%2B1%2FRPSe8IRyteHafhb1qJd0EJt8MvrcZQjAttGwnfs7S4kELP0yc%2FVOBd88vEoEzpOaHiCxiXrMweyiMVm0EhmnHf1RYIYILaUBOO1%2BvApre9v7I%2BzNfbQAmUkMq%2FJiVdfX9lI14me9WQdFNrp0g%2BR2dfG3BXLSAsCWVfmRu8kjGbjiSioP0FnZElv%2B%2Bfpijk0NTtJZAkxIbjVkYoWpFnS5QlDwjtiI5ykLg5Ld46fkJJ7IzpYd8feJeKrKKSLSjKN%2BmFj1ckmwtK3rf2vgDD645aK%2F%2BJEIFDu8HXkKSo3C4O4zQ6xajeucO0slULWNQLLw%2BioGXMsvn0XSgmtY0ycFna%2FQf8BgMG18Wgfl70IJIQzbqCeDQ7kn7aThrJOTpNz4Wvzx50NoOb0PiHCQr%2FCXAnJGLnxDxSr81Y%2BKCuTfO7xX8JkTjr3JEqDC%2FDAFDAMGTRBdC%2FPOSP5r7E%2BHY1IfxQfAiNRjQVrbiIZ%2Fv11rlqXXIO3G1MZFPnXwupBxcEVfE2k96mibxjQzDCifPCBjqkAal2RG9TvwmqBvvKJx585IOUsKy%2FOBcURmGJTWllI4yu9mPJ71z5Iy%2B26xl25lPJh9I2CKhxOtD3pPSilAAfwuUUEF1OVI5oUc2uVXdjpwHgaUo2igcYx3GNrIjQCETsZsSrxxWDbueqJKwG7qXj%2B1WeABMKfxpjes3zjKrurvu3XRsmUwkIdFQgguYK4nvdGVA6cr%2Fsa1ywaUyi5IWpvCN7fSp5&X-Amz-Signature=328ab639571d1b018163ef83c2dfdc4554beb90b6a6bc2476f255e68ce022df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
