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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7TEDEG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD0B6OjeBUi8tCkGz5B0BNj90jb5Ma5x%2BSjwhyG733sZAIgVRoSfT18KRstg38Mc3tBge4hNE0zqUhunxOdD6nwpzEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLhe8XL1K%2BC6K%2BxPNSrcA2dX82lAsIcypZKsFyGQhgU%2BSkZA7fLI0EBL2hSAhQCeDQ8fXK%2FIKQG3F0XksLEqJMAtOiscOIqjFvMSKTAk%2Bgw21aIMptN6BROFbLqL7qVac74VDNaapJQcW3tkMhudIp9Urb46T%2BD3SO5TRkC2CPKOrkDQUw8%2F3TFyFw5p%2FcT6kz6p2ZUEYGNnG0yvf4lC4HBIBGMTFMR0x2H5YkE2YH4yJj36lMDDL9NYIyO%2F7WJyGkORcW3nluMF8NVXsRoStBVCk%2F%2BhaT6MKe4PTPFmNp1FrfB0tHrUBXmZB9GsCY9FP6VaIA5Tovkn9AIMzqpv2UL4HwYUJpqWDi0px5sDxPv4enO%2BmPs0oQHp9fThmSFFocrnaXZaJKQ1%2F4h2rSVvqo%2B7z2BUuXTH3uaVfe2gBJQHoBgGcwodwx7FgR9hsDZHA2MOOZRw5lqxBKiJ4EbvKOkpC0NF45iTMloL69u7oyTlaXcHraZijkObnytAvGJ4%2B8aEa9VwXxxQDVl%2FYre8jpI9GXEpYLa1bDuW817mVY5zIZ88xRDw33p8qLXmbTpSPVVjUMaQ1ZcMB7bNToj7ESpBb9Z2vwy1r6ehMdDjyU1sy4TE1BVH%2FsxvfZMNsbBmGE4OUkVyKb3oTL1aMLq9s8IGOqUBsdv5F6cE%2B5P26NFCuggn7sdX4HNcRJS%2BUHN9UzB7z%2F50BSr8yPDYmg0LDPYBxYGpCs9n3Bxxwl8h396hysx8vSFk2beFJ69hjEayqrVGDYQT4mP9HHbSQSjMNgvj%2Fp2O%2FbjCdberAUa%2BjF%2BBPJfih5O9Jq7TLGuKAqCsOXJL7%2FFycmHb6cYzUaMG9JROmgR6K9HX9e7MjsAJIwPmFqgGCgeKHytD&X-Amz-Signature=6f9fa24153b1eb598dfffd8eb54ff9f4c2f0554982d042dcf7fc9b02f93cc605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7TEDEG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD0B6OjeBUi8tCkGz5B0BNj90jb5Ma5x%2BSjwhyG733sZAIgVRoSfT18KRstg38Mc3tBge4hNE0zqUhunxOdD6nwpzEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLhe8XL1K%2BC6K%2BxPNSrcA2dX82lAsIcypZKsFyGQhgU%2BSkZA7fLI0EBL2hSAhQCeDQ8fXK%2FIKQG3F0XksLEqJMAtOiscOIqjFvMSKTAk%2Bgw21aIMptN6BROFbLqL7qVac74VDNaapJQcW3tkMhudIp9Urb46T%2BD3SO5TRkC2CPKOrkDQUw8%2F3TFyFw5p%2FcT6kz6p2ZUEYGNnG0yvf4lC4HBIBGMTFMR0x2H5YkE2YH4yJj36lMDDL9NYIyO%2F7WJyGkORcW3nluMF8NVXsRoStBVCk%2F%2BhaT6MKe4PTPFmNp1FrfB0tHrUBXmZB9GsCY9FP6VaIA5Tovkn9AIMzqpv2UL4HwYUJpqWDi0px5sDxPv4enO%2BmPs0oQHp9fThmSFFocrnaXZaJKQ1%2F4h2rSVvqo%2B7z2BUuXTH3uaVfe2gBJQHoBgGcwodwx7FgR9hsDZHA2MOOZRw5lqxBKiJ4EbvKOkpC0NF45iTMloL69u7oyTlaXcHraZijkObnytAvGJ4%2B8aEa9VwXxxQDVl%2FYre8jpI9GXEpYLa1bDuW817mVY5zIZ88xRDw33p8qLXmbTpSPVVjUMaQ1ZcMB7bNToj7ESpBb9Z2vwy1r6ehMdDjyU1sy4TE1BVH%2FsxvfZMNsbBmGE4OUkVyKb3oTL1aMLq9s8IGOqUBsdv5F6cE%2B5P26NFCuggn7sdX4HNcRJS%2BUHN9UzB7z%2F50BSr8yPDYmg0LDPYBxYGpCs9n3Bxxwl8h396hysx8vSFk2beFJ69hjEayqrVGDYQT4mP9HHbSQSjMNgvj%2Fp2O%2FbjCdberAUa%2BjF%2BBPJfih5O9Jq7TLGuKAqCsOXJL7%2FFycmHb6cYzUaMG9JROmgR6K9HX9e7MjsAJIwPmFqgGCgeKHytD&X-Amz-Signature=0a5317762dd60acf87fa818f8fdfacfeab23f914c4503ca91ae6c704ed191d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
