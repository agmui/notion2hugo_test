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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MP7PVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCApEhKkZWiiYYqi9fSRkQawCgdyP8NqPxa10pe4jtqswIgKxLy%2Fisz85b8hhuTDurOzrUEG91Y5gOydbBY0CgTRR4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLLKv9HvBlpS%2BfOSCrcA%2FM55VP99lbvJ%2Bdlf3EkBgfpNb%2FZiEcXlXn9JEyKDN%2B3pmODKD3nZ2N9HkIis0fRN1lkNZiJDF6AQZmJZGZEna2QMkWBTd0I8eM%2BI%2FEdeMmpjdOcF6wdTAOuy1cv2%2Bf8FMMiO91IV3lhYQhgLNnFt5bOO%2BItqiYvsvAX%2B%2Bq7m1ihJKlodRlgxTzvrsQpAS2ySCCVrg76K71YqPCGWRs8b%2FISHBE%2BAjuvhXZanRWG8ugzfctW1haqeayZygeHoDFxjKdkqfQS4nMtXgG0%2FENOuO0soLlOP4lH9faLl2hRq2VNK6tPK32jg8m2bqek0C9H0jYrO4oam9N83IbV5W3lGe1MF6yFZSTAyQnGKste%2Fxf7thWoCIOqhh8xUbdHgJEM7ZjdENkBrpTvWlRO0%2B5857626PwyH0BARcwfDgOouRakZ3TwlpWgZcHrCuFYMxJF5LNT7TWpG8GanzSynWBsIbUEgGM88CkPjrXCoJzyHXZmhjhYfz6D1TR3hjTezxtjqFZPjp9%2F8A50be9mhRA2M3s4kd0tcJ2PPV6AJUfYAnA%2Bzd9q4ATyRdDgE7V4XNmCZHOcfkEUg30BEcHsieuZAoZOxSVyD6bzUCj6guApkFS1OZpEaaQN0icljy51MPvF%2BLwGOqUBNX%2B%2B6ZyWuxmzWo9CBEV2Khaihb3rsKXodEk%2FhCXnkJVVnLdF3V9x41UF85Tu9460yN22saEUgrvr53gpZU2Jk%2B12Ig9bbK65g2nuaik5JyCx0rzDT0z35csBo4n1xwOuqULsbXVs04GMMK1yxTcMhd38D5YDhzMcLtxptzu9J3ptmdlWy7Kr8V48vKdoI0oGuehL7R9d0KMW1L0E7tS6matB1cfs&X-Amz-Signature=7f62a92bf7927c70f69890f1ff51f57245769c1804c71d7951a909ec20882ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MP7PVD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCApEhKkZWiiYYqi9fSRkQawCgdyP8NqPxa10pe4jtqswIgKxLy%2Fisz85b8hhuTDurOzrUEG91Y5gOydbBY0CgTRR4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLLKv9HvBlpS%2BfOSCrcA%2FM55VP99lbvJ%2Bdlf3EkBgfpNb%2FZiEcXlXn9JEyKDN%2B3pmODKD3nZ2N9HkIis0fRN1lkNZiJDF6AQZmJZGZEna2QMkWBTd0I8eM%2BI%2FEdeMmpjdOcF6wdTAOuy1cv2%2Bf8FMMiO91IV3lhYQhgLNnFt5bOO%2BItqiYvsvAX%2B%2Bq7m1ihJKlodRlgxTzvrsQpAS2ySCCVrg76K71YqPCGWRs8b%2FISHBE%2BAjuvhXZanRWG8ugzfctW1haqeayZygeHoDFxjKdkqfQS4nMtXgG0%2FENOuO0soLlOP4lH9faLl2hRq2VNK6tPK32jg8m2bqek0C9H0jYrO4oam9N83IbV5W3lGe1MF6yFZSTAyQnGKste%2Fxf7thWoCIOqhh8xUbdHgJEM7ZjdENkBrpTvWlRO0%2B5857626PwyH0BARcwfDgOouRakZ3TwlpWgZcHrCuFYMxJF5LNT7TWpG8GanzSynWBsIbUEgGM88CkPjrXCoJzyHXZmhjhYfz6D1TR3hjTezxtjqFZPjp9%2F8A50be9mhRA2M3s4kd0tcJ2PPV6AJUfYAnA%2Bzd9q4ATyRdDgE7V4XNmCZHOcfkEUg30BEcHsieuZAoZOxSVyD6bzUCj6guApkFS1OZpEaaQN0icljy51MPvF%2BLwGOqUBNX%2B%2B6ZyWuxmzWo9CBEV2Khaihb3rsKXodEk%2FhCXnkJVVnLdF3V9x41UF85Tu9460yN22saEUgrvr53gpZU2Jk%2B12Ig9bbK65g2nuaik5JyCx0rzDT0z35csBo4n1xwOuqULsbXVs04GMMK1yxTcMhd38D5YDhzMcLtxptzu9J3ptmdlWy7Kr8V48vKdoI0oGuehL7R9d0KMW1L0E7tS6matB1cfs&X-Amz-Signature=28401701d1a33d0b116fae8da118bf1ddc607578b0b441960e31f0d90c9c2a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
