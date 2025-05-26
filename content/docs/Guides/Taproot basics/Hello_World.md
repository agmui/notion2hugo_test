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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBS3TPT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGhTPs%2FOqSrRUsd0Pn5YKoEGZw%2B6zt5nxxnopZWoUjLOAiA0mh1nZjQutrZVOILwhMJr0MDfqdrqohQjQ7OkOkiCoSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaUNhTLk7mzVxFkk3KtwDDmaLwlzylrvZAj1d7IEljlt4hq%2BZ5kCOHFigZTUEkYWyIVTy%2BVsrkozwQ7%2BGdQtqspw6WUsrz6cDPEx4ACPfmEjkAxHE9PzIR8vDbUyZqtV0QBuZQtFgP6WZR%2BfrUuRrU0vw1UjVyqQKfk4TU6UWxK1H5FU0UlsdEap6%2FV6S0INJB0wUmcZB%2FoOf6UnIu4hrVKCON2hCqOvVTUIUcdPvlFAOnAyP6vNtF5umIHlTTKueqN%2BB6vFEGOTLP5892fEeIhXecsiU7zPdpWqvMQCYK5rXAN5w9yqzww564LlYTjaUoL0PVr8X%2Bv%2FFIFFx14X0IdfA8jDvME96HLU3mNPBwPU1%2BIO0EybmeoBFvW4l7ATUXEc6USEOyvwlvw3Ti4fEm3QjJPBCR4GR1QUPL70H8cdbZFP8XsGixUadJyyB6HJS1cPOyKuKUGkt4BkiWPVQd%2BYfA0rdCoao%2F%2Bg7gnvqXCgd8NCiJXXxiw%2FviXiUim8Ox6VAUfNqRz8p3kBX8NvEAQGA4fXJEypPSSjkGbkVrKxFjrGQyruhS7cTQwpXF1CdJADB287NLTfAp%2BpCia2eAe8yeIEMyNRUteT78%2Bl2H4RZICgdMjXiSymBO85Ha4XB6XZS32TDVSfYmR8wg9bQwQY6pgF957%2BMXOPN6YphldrC64J2T38ft5Do5L2tXBYKlU4Mu3TWlviG8l8PiEEHSgBgrBrcPHdsLxBieBLN8ZrAdylYeGYEAcjtQcHjhh%2BA8fnKosW69fKc7wHJfsrGtL0uPGJcrzl2FHIKFbuhFApGv%2BZ38lDJeuIm%2Bed%2F5ZPpVzPm7PQZeOJbUqrq3g%2FPJ5t9zPVXccZQr63y0%2FSpueqYOIqB%2BZj%2FB9Mc&X-Amz-Signature=0aa66f1d9fdae378c2bf1875faf58707a6505314642b5b177ac4a8793b93fad6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBS3TPT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGhTPs%2FOqSrRUsd0Pn5YKoEGZw%2B6zt5nxxnopZWoUjLOAiA0mh1nZjQutrZVOILwhMJr0MDfqdrqohQjQ7OkOkiCoSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaUNhTLk7mzVxFkk3KtwDDmaLwlzylrvZAj1d7IEljlt4hq%2BZ5kCOHFigZTUEkYWyIVTy%2BVsrkozwQ7%2BGdQtqspw6WUsrz6cDPEx4ACPfmEjkAxHE9PzIR8vDbUyZqtV0QBuZQtFgP6WZR%2BfrUuRrU0vw1UjVyqQKfk4TU6UWxK1H5FU0UlsdEap6%2FV6S0INJB0wUmcZB%2FoOf6UnIu4hrVKCON2hCqOvVTUIUcdPvlFAOnAyP6vNtF5umIHlTTKueqN%2BB6vFEGOTLP5892fEeIhXecsiU7zPdpWqvMQCYK5rXAN5w9yqzww564LlYTjaUoL0PVr8X%2Bv%2FFIFFx14X0IdfA8jDvME96HLU3mNPBwPU1%2BIO0EybmeoBFvW4l7ATUXEc6USEOyvwlvw3Ti4fEm3QjJPBCR4GR1QUPL70H8cdbZFP8XsGixUadJyyB6HJS1cPOyKuKUGkt4BkiWPVQd%2BYfA0rdCoao%2F%2Bg7gnvqXCgd8NCiJXXxiw%2FviXiUim8Ox6VAUfNqRz8p3kBX8NvEAQGA4fXJEypPSSjkGbkVrKxFjrGQyruhS7cTQwpXF1CdJADB287NLTfAp%2BpCia2eAe8yeIEMyNRUteT78%2Bl2H4RZICgdMjXiSymBO85Ha4XB6XZS32TDVSfYmR8wg9bQwQY6pgF957%2BMXOPN6YphldrC64J2T38ft5Do5L2tXBYKlU4Mu3TWlviG8l8PiEEHSgBgrBrcPHdsLxBieBLN8ZrAdylYeGYEAcjtQcHjhh%2BA8fnKosW69fKc7wHJfsrGtL0uPGJcrzl2FHIKFbuhFApGv%2BZ38lDJeuIm%2Bed%2F5ZPpVzPm7PQZeOJbUqrq3g%2FPJ5t9zPVXccZQr63y0%2FSpueqYOIqB%2BZj%2FB9Mc&X-Amz-Signature=8614078a35192d0f6c45f9f5f93f4e88efc3add43e45668ac54d86b1788bc258&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
