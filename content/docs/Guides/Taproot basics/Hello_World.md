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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STFJWYML%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4dlBXynzGN1S7cdF%2FKxaqdw2N1QJ2awNCLWYiecSb5AiA4%2FsLOXnf3z6jEXTLmH1wZcFs6subUbpEkhx7Dqotxiyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM7HP7HunfLOf%2FIycqKtwD7jGA8zQf0EUL8lALT8Ik%2FEjhM%2B1OVndkliQUIugKm0PHq8VVpryu5126kODHOCPepYTXbzJyqPZemE3Q4JljruhmCKi2iRcAQNc%2BDhFOmgrdBqW7pkPeYovHcpYSfeUJVnZqrX0XCsUTTuBjxNn15dXVVSkmAbw8hBVnKqRvPK%2FL1vbc6mhqryFUsmaHCtwCZEu1mcVFhn6EkrEy1M%2FLPsayy1umrrJjPSIvrZCNUibM1egpEFR1yBIOagzHpzzRImCpfVbBjrQBLDXSvB2TvIsyE7rEZiFOxNbLPPPGe7PeT4O9WwsBrS7E0ewZ2UDiExDcN1xR85wy5Qieao56%2FIkVvP8af2B%2FAzyVv%2FdVLEz%2BLeSsTKImd9N7cvNAq80y6%2FoTpJqXxBhnv7Gbl0OGjUcw3mS3LKo0kSX3lFodXftM%2BFuOs9njpf7pLDinNHcTFgIHrBbYTpwMosaRvA9P%2BAqIWCK5yaQWvuhWQlaFNcsl1pcI4A59gMpF5wQrgCGZIiK1LAGAMsZ%2FNFE1zgoSBeX2uD2hfCzjpZEuEq2JS3ARzBPPlsC8XBSs%2FBHaZHxbMH36gThcfl0vvMI81P7r4LOXncT4fugaxwxJ%2BH8KXS3FIDRr1UhMbgRLXB4wzZ%2FzxAY6pgHLK5Edf2xWyJ3kWeYlZFhLR1OOHr%2BjQWP4wSbrynLrgLtr9JPJBW50ULEBurtIV5DQRl05A0ylldbe51mgBq3U4x9pt3P4%2F0Wd1fwoS2ngUQ9HegBRzLeaB17PBT4cXYsRapCM13UExlqDtA5SmIro3UFlszJg5ndziBsPRYhXm3Hk%2BYriQcj2XP8qNKyXnTg%2BAKY2hf0qhBh5Km2zfrw12gzYp34S&X-Amz-Signature=54ae5dafc274508818aea70b2b1f9b6c521af0340474c0a92660bbb8bf96b976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STFJWYML%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4dlBXynzGN1S7cdF%2FKxaqdw2N1QJ2awNCLWYiecSb5AiA4%2FsLOXnf3z6jEXTLmH1wZcFs6subUbpEkhx7Dqotxiyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM7HP7HunfLOf%2FIycqKtwD7jGA8zQf0EUL8lALT8Ik%2FEjhM%2B1OVndkliQUIugKm0PHq8VVpryu5126kODHOCPepYTXbzJyqPZemE3Q4JljruhmCKi2iRcAQNc%2BDhFOmgrdBqW7pkPeYovHcpYSfeUJVnZqrX0XCsUTTuBjxNn15dXVVSkmAbw8hBVnKqRvPK%2FL1vbc6mhqryFUsmaHCtwCZEu1mcVFhn6EkrEy1M%2FLPsayy1umrrJjPSIvrZCNUibM1egpEFR1yBIOagzHpzzRImCpfVbBjrQBLDXSvB2TvIsyE7rEZiFOxNbLPPPGe7PeT4O9WwsBrS7E0ewZ2UDiExDcN1xR85wy5Qieao56%2FIkVvP8af2B%2FAzyVv%2FdVLEz%2BLeSsTKImd9N7cvNAq80y6%2FoTpJqXxBhnv7Gbl0OGjUcw3mS3LKo0kSX3lFodXftM%2BFuOs9njpf7pLDinNHcTFgIHrBbYTpwMosaRvA9P%2BAqIWCK5yaQWvuhWQlaFNcsl1pcI4A59gMpF5wQrgCGZIiK1LAGAMsZ%2FNFE1zgoSBeX2uD2hfCzjpZEuEq2JS3ARzBPPlsC8XBSs%2FBHaZHxbMH36gThcfl0vvMI81P7r4LOXncT4fugaxwxJ%2BH8KXS3FIDRr1UhMbgRLXB4wzZ%2FzxAY6pgHLK5Edf2xWyJ3kWeYlZFhLR1OOHr%2BjQWP4wSbrynLrgLtr9JPJBW50ULEBurtIV5DQRl05A0ylldbe51mgBq3U4x9pt3P4%2F0Wd1fwoS2ngUQ9HegBRzLeaB17PBT4cXYsRapCM13UExlqDtA5SmIro3UFlszJg5ndziBsPRYhXm3Hk%2BYriQcj2XP8qNKyXnTg%2BAKY2hf0qhBh5Km2zfrw12gzYp34S&X-Amz-Signature=272708d3025bb49cc0e8fec5a6130e4b45e0380f41531961b9b0fbb0befc3b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
