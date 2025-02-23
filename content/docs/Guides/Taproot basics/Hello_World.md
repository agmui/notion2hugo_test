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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQSPZKC%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHcCeyJx1IGnF9iPkwhw6dAQ%2FaRhKNe%2BVHCIo0AD9hzAIhAOWT%2B1DiMV2J2n95U%2BumpOvWp5FHAX727h6pJXKtDW5IKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK1dAZMmIHshigENEq3ANKEOwCwNYjdT2pIgWujSfB8zMkliryRu6X7u8Bczkmo9ZMwaawI8FHh0wW9yB8dXLDP9mvK3DMvAYKoGZr4RSW9r21HtDg2g1bmwI9g1LHN5tMmwi%2BwpO%2FNk5svak%2B4pJgu5ZK3Y3iumB6EanfoCxJ%2BMi1m%2BXyYu6LqQ%2Brer9lRr619R6XLOrgbDTHL%2BgiASAL%2FqQLcGNF96o0uNaSrPleYUEknmtHxjkavii8BJXIM8n0ZIQVHrWHiyGuQLQtw2A19BYjsjiIEUfxaYdA5IuT3V%2B%2B10RPkTPmlgavO1CqB1BwgsrooqrZjMt%2BoADtU%2BJBFZLBleGPrpbBuXztIob6ShVvZCVCuTIPYcE2pNzLwJp3%2F3WXZn8kXtp1tmZ9VO0d%2FttYs0YS97NWiPa1iS8C0rF1lu7rsQ4xjlNWr9GwhWHGDwNP8TsRosMqWSrmaC3KqHgYS8VP5Jh0AL%2BEwmgHOJhmbUEdwDjJcWuTpLG%2F7m8Pz%2F%2Fxt3nY6GYenaD54wRes2s6i%2Bb%2BKpOlB5KORkpdjt7PIKbgXTp9m0oDr4R0Auw7ga2yheMtdNwjrKOY0K3xwRgP%2Bn2GoVWaAbOJDb4NS4EMpAmM0DPTh3ioZV1gjx0IsWMNOM7C5EHPGTCvn%2Bm9BjqkATG2GCdKQBOLWD%2FnYDTZ2RntQd3Y%2FRxJC7bz8Br7SABsTwXNxonuk0AKCMGXjQHASPmi95ws0i1%2BpPHLpOsTFWKAY4D92Ii8ulEUwKygP4XOEIPARq5EAUbzqJ48d5%2FM0w0k0q7nEP5i1VVJEpg%2BBNTsRW7GmBd5vg2Hr0WiAtVXTzhqwnBVLWc%2FqLqTrkrU8z5NzbI2s7QqZ82IcPqlfhGcoyX%2B&X-Amz-Signature=59a0188531ab70d7d5ec79ebc1302195d1957b562dc144948aa47731dd24147d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQSPZKC%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHcCeyJx1IGnF9iPkwhw6dAQ%2FaRhKNe%2BVHCIo0AD9hzAIhAOWT%2B1DiMV2J2n95U%2BumpOvWp5FHAX727h6pJXKtDW5IKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK1dAZMmIHshigENEq3ANKEOwCwNYjdT2pIgWujSfB8zMkliryRu6X7u8Bczkmo9ZMwaawI8FHh0wW9yB8dXLDP9mvK3DMvAYKoGZr4RSW9r21HtDg2g1bmwI9g1LHN5tMmwi%2BwpO%2FNk5svak%2B4pJgu5ZK3Y3iumB6EanfoCxJ%2BMi1m%2BXyYu6LqQ%2Brer9lRr619R6XLOrgbDTHL%2BgiASAL%2FqQLcGNF96o0uNaSrPleYUEknmtHxjkavii8BJXIM8n0ZIQVHrWHiyGuQLQtw2A19BYjsjiIEUfxaYdA5IuT3V%2B%2B10RPkTPmlgavO1CqB1BwgsrooqrZjMt%2BoADtU%2BJBFZLBleGPrpbBuXztIob6ShVvZCVCuTIPYcE2pNzLwJp3%2F3WXZn8kXtp1tmZ9VO0d%2FttYs0YS97NWiPa1iS8C0rF1lu7rsQ4xjlNWr9GwhWHGDwNP8TsRosMqWSrmaC3KqHgYS8VP5Jh0AL%2BEwmgHOJhmbUEdwDjJcWuTpLG%2F7m8Pz%2F%2Fxt3nY6GYenaD54wRes2s6i%2Bb%2BKpOlB5KORkpdjt7PIKbgXTp9m0oDr4R0Auw7ga2yheMtdNwjrKOY0K3xwRgP%2Bn2GoVWaAbOJDb4NS4EMpAmM0DPTh3ioZV1gjx0IsWMNOM7C5EHPGTCvn%2Bm9BjqkATG2GCdKQBOLWD%2FnYDTZ2RntQd3Y%2FRxJC7bz8Br7SABsTwXNxonuk0AKCMGXjQHASPmi95ws0i1%2BpPHLpOsTFWKAY4D92Ii8ulEUwKygP4XOEIPARq5EAUbzqJ48d5%2FM0w0k0q7nEP5i1VVJEpg%2BBNTsRW7GmBd5vg2Hr0WiAtVXTzhqwnBVLWc%2FqLqTrkrU8z5NzbI2s7QqZ82IcPqlfhGcoyX%2B&X-Amz-Signature=69e4448223a2213bb9b5b3afeaed0618ca7560669b42531030d4d5a29169440c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
