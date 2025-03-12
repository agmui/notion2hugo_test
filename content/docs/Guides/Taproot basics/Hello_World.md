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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLVSFWK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDP3mOAXgTYyQRwlajDgN6xb3XEBoVOYn1NUnzqIgEY5AIgJ%2BAtd1D5Pub9YM4Yl%2BsQKklkWvkOrvC4x3n6%2B3ijbzwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaiPNcqSlEx4mMnjyrcA2W5QUsBrEw3EbiAct4GscW%2FZw2SqJnBZvwkubjuIcWm7ELTbFihbzjck59La4JTqGOgvHdgdHj5p9EJFdgKcWvkA7iTjJk45pD7KLUWPG56kuY2VWwIvUfCi8xpLr%2FE07lUc8olp8hY4bTeeJxU7innOpIEmKSlVaBmgMvSPkU67AEgibzj7bqPSwnLfGp7q6DrantHIZHlp9hCF9XhvhsKnz3klI02a8DFVKZuDLWdlf6hlP0etobAOMhu0wWoy930z0oqSwSIiT6qz2px2vXaSIoC%2BhxjdHQcMbHyXNfisMFhhfDTvfJNMYjF94tS9cz%2BkRT%2FqSdDw0Wrf%2BS%2FwyjRE%2Bm1aEIah%2FwOcIgukIRuhacv6NbaaqINIjVh4Wgoc%2BTHJ%2FsdDfqBIYA40jx%2B7N1QSQu%2BTnk50DuTk5RvbSPAE%2FH19sUtcpfBf9fBG0%2BEO%2BKUFl%2B1R1xGDypxg9lo63vguB6%2BMN%2BkCqIOOskBNXszA7DC1lR6FqO858Xenp%2BRN8jgaIc0JHK%2FHD4UaikRYhNS6%2FRCWkB8nC53kinjH7M4jiGRK%2FLXbzK3RF4Rx5DaXXiTeu96r4aSNmN01jYF%2FebMWoNRkEW5uPnIGYMvsrF0N0cdYmMmP5DxUqmDMPiexr4GOqUBAY7XfJUoilWVhVe6RaC%2B%2Fk2O6RWIgpBx2zlBsf0sDVab09TUO%2FBbbKtLRA8Uhu0CbB5j%2BDYXtXA0aqlfTj74iRzh0A2mBfs7ibzLB2evO0Io33hOq3e%2Bsxhdk3ItpWQKl6k7AJU93UQLYDec2ardPKAgCew0rL0kXDIgEAo7EMdsZ8yU1O7TDevWMZaUz5ZUjmLzdtn%2FU66%2Fi8qtasI1wR2q4ecB&X-Amz-Signature=0a28eba6b2753f8b04529e27335a939c089dc009409c25c8bd34b42f0beb8234&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLVSFWK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDP3mOAXgTYyQRwlajDgN6xb3XEBoVOYn1NUnzqIgEY5AIgJ%2BAtd1D5Pub9YM4Yl%2BsQKklkWvkOrvC4x3n6%2B3ijbzwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaiPNcqSlEx4mMnjyrcA2W5QUsBrEw3EbiAct4GscW%2FZw2SqJnBZvwkubjuIcWm7ELTbFihbzjck59La4JTqGOgvHdgdHj5p9EJFdgKcWvkA7iTjJk45pD7KLUWPG56kuY2VWwIvUfCi8xpLr%2FE07lUc8olp8hY4bTeeJxU7innOpIEmKSlVaBmgMvSPkU67AEgibzj7bqPSwnLfGp7q6DrantHIZHlp9hCF9XhvhsKnz3klI02a8DFVKZuDLWdlf6hlP0etobAOMhu0wWoy930z0oqSwSIiT6qz2px2vXaSIoC%2BhxjdHQcMbHyXNfisMFhhfDTvfJNMYjF94tS9cz%2BkRT%2FqSdDw0Wrf%2BS%2FwyjRE%2Bm1aEIah%2FwOcIgukIRuhacv6NbaaqINIjVh4Wgoc%2BTHJ%2FsdDfqBIYA40jx%2B7N1QSQu%2BTnk50DuTk5RvbSPAE%2FH19sUtcpfBf9fBG0%2BEO%2BKUFl%2B1R1xGDypxg9lo63vguB6%2BMN%2BkCqIOOskBNXszA7DC1lR6FqO858Xenp%2BRN8jgaIc0JHK%2FHD4UaikRYhNS6%2FRCWkB8nC53kinjH7M4jiGRK%2FLXbzK3RF4Rx5DaXXiTeu96r4aSNmN01jYF%2FebMWoNRkEW5uPnIGYMvsrF0N0cdYmMmP5DxUqmDMPiexr4GOqUBAY7XfJUoilWVhVe6RaC%2B%2Fk2O6RWIgpBx2zlBsf0sDVab09TUO%2FBbbKtLRA8Uhu0CbB5j%2BDYXtXA0aqlfTj74iRzh0A2mBfs7ibzLB2evO0Io33hOq3e%2Bsxhdk3ItpWQKl6k7AJU93UQLYDec2ardPKAgCew0rL0kXDIgEAo7EMdsZ8yU1O7TDevWMZaUz5ZUjmLzdtn%2FU66%2Fi8qtasI1wR2q4ecB&X-Amz-Signature=d5db8993da67ccdd758a94a614cee5fa776b6316715f5ffcd80a09bba3b9e90b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
