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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XHDHCQ2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxdw34KIZrK%2BodFJZrmq9UgZQ9q1S%2Bh8DdlAsLfCyI%2BQIhAJGXqkRb%2FDpVaqudYAC4x3xBnD0YyDTh9mOeVOOxdMCCKv8DCCcQABoMNjM3NDIzMTgzODA1IgybQmVSTuyRRmEztpQq3AMgnRJBiDy5mpifJJzTQpxR8GOPaqH%2FmW0baEoi8bzHM3ooNtT%2Bgyx6KUcvCOwRRPvSiT2QmHuOcyttvh9OtLETQMgkjZ4LEXpKsN4zBkmmneqEDICqcUwFpy56yVZdsFvkolP50UZs81R%2FZzRoysgqh527cYwnHAtEKtcqTUFt6YwfiBLsR%2BDUsFRYUKMGh03fO%2BQF1nf60MU%2Bp6frjTzH3DN%2F3G9Ib9W8sU7K5V4VIYImn56esuP2PtQ8KE15uci39NVhIS9lD1iPajaDI4sxpB34sWAw%2BGuyU2v4cr4ukd7NW2eHqKrUwMPmH2aFSncjOQu9BdPZmaioA9TGytJJY3s0izqYOfKg0DtJbSxMOwtNdRHKH5pd9xgetKWWQplTNGjhO794CskCv58hKUwND%2BbZfIH7hq5jYx%2Fi9uI83pQWom0XxlE3HJS9DcHBIXqycOEeR9Bc%2BAgU4XLfpETEmQ1L9BcERPKw2ahLgvpgmGG%2B7ALaN7aJ0sIsnPYoy%2FMFAgBODLzoIrkZentqzgxa%2FSeMVVViZ7YHOE1TmHwBhcW3Z5DC7olose7L%2B5ewayfB7ytqHYAuWw0jB%2BkbmzxXAoitVYlAZIzfgdNrVzLERdlmdLNhDyS7CgfJ4zDl9ujCBjqkAZLxfO5yOjrQv2Gx%2BcamlJhOjQUf36qjA4i2rcDjpyKFIZfTdbNdTwyWkP1sI6EZ9o1%2BUSxypTOCPtFi%2BJE9v2PI7gwACfe3EO6Ksn%2FHVfKiJZlG4aaPmXLaet2G%2BT%2B3aKHOjXLupXA4WYnJOSiMfBaXM3N%2BkJzU4GlZdPUYITrOuloKdvRmdLeWUIo4yKKDOOWk%2FBYWGHJN24F6ghoOLFq763QX&X-Amz-Signature=884c8e7b056de30789c45f03e62f39733c18e9e48542717c351646ec62af065d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XHDHCQ2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxdw34KIZrK%2BodFJZrmq9UgZQ9q1S%2Bh8DdlAsLfCyI%2BQIhAJGXqkRb%2FDpVaqudYAC4x3xBnD0YyDTh9mOeVOOxdMCCKv8DCCcQABoMNjM3NDIzMTgzODA1IgybQmVSTuyRRmEztpQq3AMgnRJBiDy5mpifJJzTQpxR8GOPaqH%2FmW0baEoi8bzHM3ooNtT%2Bgyx6KUcvCOwRRPvSiT2QmHuOcyttvh9OtLETQMgkjZ4LEXpKsN4zBkmmneqEDICqcUwFpy56yVZdsFvkolP50UZs81R%2FZzRoysgqh527cYwnHAtEKtcqTUFt6YwfiBLsR%2BDUsFRYUKMGh03fO%2BQF1nf60MU%2Bp6frjTzH3DN%2F3G9Ib9W8sU7K5V4VIYImn56esuP2PtQ8KE15uci39NVhIS9lD1iPajaDI4sxpB34sWAw%2BGuyU2v4cr4ukd7NW2eHqKrUwMPmH2aFSncjOQu9BdPZmaioA9TGytJJY3s0izqYOfKg0DtJbSxMOwtNdRHKH5pd9xgetKWWQplTNGjhO794CskCv58hKUwND%2BbZfIH7hq5jYx%2Fi9uI83pQWom0XxlE3HJS9DcHBIXqycOEeR9Bc%2BAgU4XLfpETEmQ1L9BcERPKw2ahLgvpgmGG%2B7ALaN7aJ0sIsnPYoy%2FMFAgBODLzoIrkZentqzgxa%2FSeMVVViZ7YHOE1TmHwBhcW3Z5DC7olose7L%2B5ewayfB7ytqHYAuWw0jB%2BkbmzxXAoitVYlAZIzfgdNrVzLERdlmdLNhDyS7CgfJ4zDl9ujCBjqkAZLxfO5yOjrQv2Gx%2BcamlJhOjQUf36qjA4i2rcDjpyKFIZfTdbNdTwyWkP1sI6EZ9o1%2BUSxypTOCPtFi%2BJE9v2PI7gwACfe3EO6Ksn%2FHVfKiJZlG4aaPmXLaet2G%2BT%2B3aKHOjXLupXA4WYnJOSiMfBaXM3N%2BkJzU4GlZdPUYITrOuloKdvRmdLeWUIo4yKKDOOWk%2FBYWGHJN24F6ghoOLFq763QX&X-Amz-Signature=8b15323381891ec639c001c75f9af53451bf491dad9c0d4a62ff944af4b6fc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
