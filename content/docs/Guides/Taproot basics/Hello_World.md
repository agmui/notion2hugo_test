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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRQ2VUW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHpNQ5yU1QYNRutUMSKfKo7PhAm41VMWPGAo%2FhlDo9rKAiEAoU7DrzgpNTqM9EVVfouTFlXq4Tm4C7RIhpHOXRGZ3ygq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGg3hxTm2kpEsGYl%2FircAyMlu%2BZW1xNCBIfjV94zQontAWLaf7asN2RDs9zIv8XC%2BXz7RpgIwdzK%2B2nXje8wa0XcwRm9CsfMc6gUhbdA%2FQaqcij1AO1nSbDAxoMKNlOESw00KbnA3DUUYPzpG5t3sacohJbN5AZJmypF1nEN6RU9abNbdSDnxJGrq9EP1yPwiKo3ZgWP8UkUcKB60%2BoN%2B3adn3h%2B1kzBU2QgV6xPnQxbaOumgN9Dndb9I0oYkqiBKR1q4pGO8e1%2FC%2B1Q3A51giLrmAr2caCMNtP4QzfHLLU4854xw6MYUWrLkAelG9Ji6i72DwzeY1BD%2BjM%2F92sTG2%2FwgTVB7Nc4IqcNvFPFKlAa4KD5Aeld643r7J0tRpYXL7ETh2ShKtBJD6IeGl9wMI5R41V9lMyXp9EpfqU3rBqHasAdzCFSgPBNw0tfVNJV1H9BDYjkp4%2F6XfFef9opLk33GPgHnTdTG6l9ne4x%2FnefltkTawJYxjDNavqYTNrlWoBOCpRs%2BNYXSVrLlmQ4%2FM8z32VRYIFJDP910qcHOtVTMsvtnaWR%2BNqlh6XS8k0LxkA8EyyduPTJn6oh1lJKBRDJ2F9zC74%2BFDMLBu5%2F%2BC08CEIpMA%2F4whc5yep99X4Z7MqMt7uXnzQw5cRGMPaVvskGOqUBko6cCPr3wtjYLquwNXAEP9VmbWUz41GLgwXzhbWTbCx3JH79KLBfr0Usfy1jMP6TvzJLvvaXsXt9egJEYyqEXD4yGi%2FmaVuyNvzaVwwaRngJ1BNzKv0aKN5UkMZUsEPU9vaUzrz4FQ7r%2Bv6bE%2BtXhU1KMAorQBR%2FOChSqkL8ZT47IYSJOUX1q9iIh0DKBXn5vG2AQsddaholcYaKIC52hH6XCR2J&X-Amz-Signature=a7b596d34512b0b38f957db99bd8b872751437c56da5e0f3aacf3756554e18b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRQ2VUW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHpNQ5yU1QYNRutUMSKfKo7PhAm41VMWPGAo%2FhlDo9rKAiEAoU7DrzgpNTqM9EVVfouTFlXq4Tm4C7RIhpHOXRGZ3ygq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGg3hxTm2kpEsGYl%2FircAyMlu%2BZW1xNCBIfjV94zQontAWLaf7asN2RDs9zIv8XC%2BXz7RpgIwdzK%2B2nXje8wa0XcwRm9CsfMc6gUhbdA%2FQaqcij1AO1nSbDAxoMKNlOESw00KbnA3DUUYPzpG5t3sacohJbN5AZJmypF1nEN6RU9abNbdSDnxJGrq9EP1yPwiKo3ZgWP8UkUcKB60%2BoN%2B3adn3h%2B1kzBU2QgV6xPnQxbaOumgN9Dndb9I0oYkqiBKR1q4pGO8e1%2FC%2B1Q3A51giLrmAr2caCMNtP4QzfHLLU4854xw6MYUWrLkAelG9Ji6i72DwzeY1BD%2BjM%2F92sTG2%2FwgTVB7Nc4IqcNvFPFKlAa4KD5Aeld643r7J0tRpYXL7ETh2ShKtBJD6IeGl9wMI5R41V9lMyXp9EpfqU3rBqHasAdzCFSgPBNw0tfVNJV1H9BDYjkp4%2F6XfFef9opLk33GPgHnTdTG6l9ne4x%2FnefltkTawJYxjDNavqYTNrlWoBOCpRs%2BNYXSVrLlmQ4%2FM8z32VRYIFJDP910qcHOtVTMsvtnaWR%2BNqlh6XS8k0LxkA8EyyduPTJn6oh1lJKBRDJ2F9zC74%2BFDMLBu5%2F%2BC08CEIpMA%2F4whc5yep99X4Z7MqMt7uXnzQw5cRGMPaVvskGOqUBko6cCPr3wtjYLquwNXAEP9VmbWUz41GLgwXzhbWTbCx3JH79KLBfr0Usfy1jMP6TvzJLvvaXsXt9egJEYyqEXD4yGi%2FmaVuyNvzaVwwaRngJ1BNzKv0aKN5UkMZUsEPU9vaUzrz4FQ7r%2Bv6bE%2BtXhU1KMAorQBR%2FOChSqkL8ZT47IYSJOUX1q9iIh0DKBXn5vG2AQsddaholcYaKIC52hH6XCR2J&X-Amz-Signature=545d3d671fb7904753ad949900772ed8230f238424037115f0f535cfad7b595a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
