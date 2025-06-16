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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGSFL2V%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIH6IdWqLl8J1QaAYmhadNSVdbSVKmsskh2eHrpkWU7IUAiEA94UtVgvR6tgNg3Aj%2FdYtdG3AMiwtymzQqVS5w%2BK5pFoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJP9AUZkC2q4DIziEircA1LoTDH0MtG5O3HnZwnKGMxv3ki0gWNQIo7Rh9Ogw%2FpQFiUChPjl7O9MgUYYB8x33%2F%2FGj3hXc2j2KqJpBIpF0m0iWVB%2ByILKXmQ9J1sIh5XBQSWFxroa5WM0yVu55xxq0mQNWFO8bZDYxrrBxPXnqCk3T1in8fU5aPaqJaoWjmhDy8KKLjQtDYBe3oiimivb2S3njlX3bkKurJL12aOsuJmermjWtabuGXFMriI1iKJW%2By98wTyq3HeGOGRrit9mdzcSMI915RHWbP0ttiusoaIGVB5xBtU56k7qsYzvCWq3F7RoGYfuz0wd7GifTze8RNG0PhSXYNaBWe8racVTRgzfjL4ICav8KU8QyVAuXGGLM5qmsdOgEpxeAZvnCd36KU4qdSaUVWcAoaV9qBWlHCnTZ2g3cPcEFLyUJl%2FVTPXS9AVlIY8%2FnGFKoi40HDizj4xrsxPoc5GNeRLY81FKCRBgBsBu9qldcMpzHFl%2FBPyVed1WZH4fIsm5prdc8WW4QzpwzT8ez9POH%2FR%2BH%2FZnpU1wTPgUhDuIMwuJ2Xw9d8NAKrW3ycoSP%2FZynCQImX5u%2BeRPXFUKOJtzj1zvxdfxLoj%2FG%2B79KrjYyFwy7t649jCoSEwrsTutVIBP9VkrMNmJv8IGOqUBlpEUGhXeGctUHy8%2FzGO1IiqGD3zqkH15VOLmZzsIzPEESj3nTXepfqvzKNUbSWtzc9skUvF68I%2BJzCRJgq4dnZ727G%2B5ZSDhO3LiGUqmJqBSRsOoJ7cYb%2FB8s9StxaNCg%2FTDr1PUrWW89NtueF9IBuOSMpC1PjCOzU5ZESSAC0BW5ZZBhzmjj3lh3UXIshg23WodM76xtHMUhcNvw8%2FYSIgziBYX&X-Amz-Signature=dbf42658b82ee17084cdaad332cf409988a8a73cf07863fb7e958bb1aec9f157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGSFL2V%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIH6IdWqLl8J1QaAYmhadNSVdbSVKmsskh2eHrpkWU7IUAiEA94UtVgvR6tgNg3Aj%2FdYtdG3AMiwtymzQqVS5w%2BK5pFoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJP9AUZkC2q4DIziEircA1LoTDH0MtG5O3HnZwnKGMxv3ki0gWNQIo7Rh9Ogw%2FpQFiUChPjl7O9MgUYYB8x33%2F%2FGj3hXc2j2KqJpBIpF0m0iWVB%2ByILKXmQ9J1sIh5XBQSWFxroa5WM0yVu55xxq0mQNWFO8bZDYxrrBxPXnqCk3T1in8fU5aPaqJaoWjmhDy8KKLjQtDYBe3oiimivb2S3njlX3bkKurJL12aOsuJmermjWtabuGXFMriI1iKJW%2By98wTyq3HeGOGRrit9mdzcSMI915RHWbP0ttiusoaIGVB5xBtU56k7qsYzvCWq3F7RoGYfuz0wd7GifTze8RNG0PhSXYNaBWe8racVTRgzfjL4ICav8KU8QyVAuXGGLM5qmsdOgEpxeAZvnCd36KU4qdSaUVWcAoaV9qBWlHCnTZ2g3cPcEFLyUJl%2FVTPXS9AVlIY8%2FnGFKoi40HDizj4xrsxPoc5GNeRLY81FKCRBgBsBu9qldcMpzHFl%2FBPyVed1WZH4fIsm5prdc8WW4QzpwzT8ez9POH%2FR%2BH%2FZnpU1wTPgUhDuIMwuJ2Xw9d8NAKrW3ycoSP%2FZynCQImX5u%2BeRPXFUKOJtzj1zvxdfxLoj%2FG%2B79KrjYyFwy7t649jCoSEwrsTutVIBP9VkrMNmJv8IGOqUBlpEUGhXeGctUHy8%2FzGO1IiqGD3zqkH15VOLmZzsIzPEESj3nTXepfqvzKNUbSWtzc9skUvF68I%2BJzCRJgq4dnZ727G%2B5ZSDhO3LiGUqmJqBSRsOoJ7cYb%2FB8s9StxaNCg%2FTDr1PUrWW89NtueF9IBuOSMpC1PjCOzU5ZESSAC0BW5ZZBhzmjj3lh3UXIshg23WodM76xtHMUhcNvw8%2FYSIgziBYX&X-Amz-Signature=2f79c0c0f9d2d2e8f4040632a4fee6a4dbc30a9c540d471a7a9e31c36993fc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
