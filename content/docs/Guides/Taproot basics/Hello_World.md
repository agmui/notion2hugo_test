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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDC5F47%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxrkIe%2FncTWsyoqTjZfDAdnzCY8r4jrlq8ctJz5%2B58iAiB8Z%2BpY7Ra8tajX6bm0%2FaKWCqEV9yL2tOnnr8STG0BDvCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QLbYrryCUCzy9fuKtwDKdzQNdaqHSVAaDVblgE%2FVRvtKDrX6tZ9LYcfns5jaesrS8kNpikxAuWdCLpQ0HqA6pN879iXkw2LjH96F%2BCbUmKXfhNtk2qOT7lNZuPp8UANTjOXzxWTEisw%2BSsnENpoPwCEfn%2BKFmXkLONKzlorIdvJ27OxyR%2B3Xri2He2UdkwmUaMaeDLD8R%2Fsbl%2Fmz2UC%2BpIS7Wx9sDg0w6YBsJc5rs4nMYCMfQWuir0mh%2FQ4qBdc74FeIb48UJB83QTUaRUiV912xKfw5258AfKLv1qmVU4zmlQ9pix8T2OwsUBrZv62yr2%2B7VwUzlPEQwEKqdxOcUH%2Fdrg6rLOKYjFJEjSsY0SjC4RbGaWtDCzBKvwYVwsaC5ytxKLulyE0YSwp9B1mkL55LpR%2FpP%2BpITQXRJwDBnVfEMCSwvSjpAWcGX1ByW1Jswand4MJttVuJJTlZ832%2BlIQfHbY5HosmieC%2BCiWY%2BCQgvW93Z8LJAzzpdrT5N29hQztteUEGxw7BLXD7A%2FnM5jBeLbidgkHM8gDEzexnyzu%2BySPGu0Vdx1QmTT8RpSdnbCqeeHO9b%2F2pkNiKLRQIbjrDiYfkHofw75rDtbP8gdbbN2DGMUe79cXQcPQUQMwAslrgVWiF9T8XlMwspaVvgY6pgEalEj%2BPSjk%2Fs%2BoFQG3Ir7Ofh6k328rkFM6mw6mJxHG3u5kOsF2Ih8QfGlhXzgjzkvX8etOlnWF%2Fo0XSiE5lnaRN7FX7XIm%2FE1iOBJN5dUK3EBabhgsfBqLTzQ5etXK76FDuyP0npw93PFnN5lXTjbWP3tPl96%2FYEPDjFEiL%2Fd7z96%2FbDuQodGoi0dJn71LXV72UIWEPKDqqVXwNmQaAlvcevU%2FR5yD&X-Amz-Signature=b4a50e093aedf8e65f17a5ae8cd77cd6938a9db674ddaadfd37ee9b1ec637732&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDC5F47%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxrkIe%2FncTWsyoqTjZfDAdnzCY8r4jrlq8ctJz5%2B58iAiB8Z%2BpY7Ra8tajX6bm0%2FaKWCqEV9yL2tOnnr8STG0BDvCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QLbYrryCUCzy9fuKtwDKdzQNdaqHSVAaDVblgE%2FVRvtKDrX6tZ9LYcfns5jaesrS8kNpikxAuWdCLpQ0HqA6pN879iXkw2LjH96F%2BCbUmKXfhNtk2qOT7lNZuPp8UANTjOXzxWTEisw%2BSsnENpoPwCEfn%2BKFmXkLONKzlorIdvJ27OxyR%2B3Xri2He2UdkwmUaMaeDLD8R%2Fsbl%2Fmz2UC%2BpIS7Wx9sDg0w6YBsJc5rs4nMYCMfQWuir0mh%2FQ4qBdc74FeIb48UJB83QTUaRUiV912xKfw5258AfKLv1qmVU4zmlQ9pix8T2OwsUBrZv62yr2%2B7VwUzlPEQwEKqdxOcUH%2Fdrg6rLOKYjFJEjSsY0SjC4RbGaWtDCzBKvwYVwsaC5ytxKLulyE0YSwp9B1mkL55LpR%2FpP%2BpITQXRJwDBnVfEMCSwvSjpAWcGX1ByW1Jswand4MJttVuJJTlZ832%2BlIQfHbY5HosmieC%2BCiWY%2BCQgvW93Z8LJAzzpdrT5N29hQztteUEGxw7BLXD7A%2FnM5jBeLbidgkHM8gDEzexnyzu%2BySPGu0Vdx1QmTT8RpSdnbCqeeHO9b%2F2pkNiKLRQIbjrDiYfkHofw75rDtbP8gdbbN2DGMUe79cXQcPQUQMwAslrgVWiF9T8XlMwspaVvgY6pgEalEj%2BPSjk%2Fs%2BoFQG3Ir7Ofh6k328rkFM6mw6mJxHG3u5kOsF2Ih8QfGlhXzgjzkvX8etOlnWF%2Fo0XSiE5lnaRN7FX7XIm%2FE1iOBJN5dUK3EBabhgsfBqLTzQ5etXK76FDuyP0npw93PFnN5lXTjbWP3tPl96%2FYEPDjFEiL%2Fd7z96%2FbDuQodGoi0dJn71LXV72UIWEPKDqqVXwNmQaAlvcevU%2FR5yD&X-Amz-Signature=4bfacd6f2221bfdba948eaa0853f93aa8bff79481764050772a42b0974e3f401&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
