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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAP6NHTE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD5bknEyVrKHI%2FnwM4b8%2B8WcrKYx8fzW9zvwEOu98PqRwIgQIw79Yw79%2BM1i69MNp5lR0R5LOI77P%2FaFEscltlem7cq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKA9qZlt2YH9oQt4PCrcAyIaTT3oegBX48MFpppThKZnbVywjYktXis8URtFiT1XFNUiQ4UX%2BJQv0d0iahzWZmMpxp3UXLQakjoXzQiU8WcGO9zCxm25ZhvgHLzyrBJ9mUvoWs%2FERKbaFgPCY5QctnZ2YoLMNac53%2FiCGz0J%2FrlsFJv2KCA0tLYH4XQpaj%2FC%2BUwflfYGeJIwX%2BzfvsjiQclJf614zVozKXOmcFpEefzSEP78VK5ZNkUHakyOAX3oAlfXLq%2B8zwG11pYFmTnZSozdIS%2F9P4JkN6plqXvpX%2B8nm0mGmY2hvIfJ%2FIHuARGGybmkhSTATUBZ4HXmwuPNiau5jnmbrhfh6%2FFXtyG%2FjKah5OMCRGf7kYg%2FXFgDI088djireVinLmNiKwx5RlnR1x2xpzKUWDtu0fx8i25Y23D3JfO8mlCPpUPIMbhAABa2FZr863nyuMrG1PCbOc61MscomHvcNzIestDMIUZRwve930E%2F%2F0A8TU7wnFxXenfPjQipHX1eMGatyhNuUUmWWYvolVyBG%2FwZkKqiScgrUlVlwoOV4d%2Byp5NyUrl5As%2FugZ45BVoUYt4SGTaT9hcLdzlkmQk%2BA8CqTuRmr%2B5sUQDkHhSHQ5tFUWiZZphvnoviIp2hjD2H4tA3HVQIMKX91sMGOqUBLImQP%2BxgC%2FSqfkdXwxBwiWPFp5ApEAyYtftfq86lCWhJi0zwqm1UYf0JATwRnHSuHvg1iDsBbedNm926OSXnyHZ14apne88mpa3D0qKlyHT25vU1KaactXR3mUVl9wQSVL6aPGk9hnyFczfvlhcCQP2FvaAH%2BBw6pU0x9GP2YhtGa62DvqYsK7Nesd%2Fg2cMDhO%2BodfrK9FOO67SpE1qKoAFJgNTh&X-Amz-Signature=1a38111e0b92b8dfb4b0d5d5c6ed80ac480c8f1d803248c976c3b54f341a637a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAP6NHTE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD5bknEyVrKHI%2FnwM4b8%2B8WcrKYx8fzW9zvwEOu98PqRwIgQIw79Yw79%2BM1i69MNp5lR0R5LOI77P%2FaFEscltlem7cq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKA9qZlt2YH9oQt4PCrcAyIaTT3oegBX48MFpppThKZnbVywjYktXis8URtFiT1XFNUiQ4UX%2BJQv0d0iahzWZmMpxp3UXLQakjoXzQiU8WcGO9zCxm25ZhvgHLzyrBJ9mUvoWs%2FERKbaFgPCY5QctnZ2YoLMNac53%2FiCGz0J%2FrlsFJv2KCA0tLYH4XQpaj%2FC%2BUwflfYGeJIwX%2BzfvsjiQclJf614zVozKXOmcFpEefzSEP78VK5ZNkUHakyOAX3oAlfXLq%2B8zwG11pYFmTnZSozdIS%2F9P4JkN6plqXvpX%2B8nm0mGmY2hvIfJ%2FIHuARGGybmkhSTATUBZ4HXmwuPNiau5jnmbrhfh6%2FFXtyG%2FjKah5OMCRGf7kYg%2FXFgDI088djireVinLmNiKwx5RlnR1x2xpzKUWDtu0fx8i25Y23D3JfO8mlCPpUPIMbhAABa2FZr863nyuMrG1PCbOc61MscomHvcNzIestDMIUZRwve930E%2F%2F0A8TU7wnFxXenfPjQipHX1eMGatyhNuUUmWWYvolVyBG%2FwZkKqiScgrUlVlwoOV4d%2Byp5NyUrl5As%2FugZ45BVoUYt4SGTaT9hcLdzlkmQk%2BA8CqTuRmr%2B5sUQDkHhSHQ5tFUWiZZphvnoviIp2hjD2H4tA3HVQIMKX91sMGOqUBLImQP%2BxgC%2FSqfkdXwxBwiWPFp5ApEAyYtftfq86lCWhJi0zwqm1UYf0JATwRnHSuHvg1iDsBbedNm926OSXnyHZ14apne88mpa3D0qKlyHT25vU1KaactXR3mUVl9wQSVL6aPGk9hnyFczfvlhcCQP2FvaAH%2BBw6pU0x9GP2YhtGa62DvqYsK7Nesd%2Fg2cMDhO%2BodfrK9FOO67SpE1qKoAFJgNTh&X-Amz-Signature=e7feabcf234ed6c374affd3db11cd8910bc33b494ebd01eb2689b3814d4bcf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
