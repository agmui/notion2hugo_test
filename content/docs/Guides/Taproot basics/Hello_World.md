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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZECR6FI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDpyeTGj41oeccoCgFTHGjiVKiM9WrByosukTiGOG8GVAIgTwvy3tg7Zy73XywUpoblumcMTkMPdINZsV6tdvqR0sQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmYLRy8KOcOwukGsSrcAwqRZjPyVQMOswYEQGfx2D1yVtcmTmuopQKmkhWUrTisss4SkCsDX4WgtmBY53AZKH3lGAk7kuKfsaRYc7IR8pKVFHz3Xdz7St5gVeVcecwSeoUd4W%2FQJjOzVvpk04FYyv5If4d4NpQ1muVlDp1rWoqss5A1Rh0QA3NzYykHlYQifpmfCifLEjjo9Ez3DZ9ueq45%2B1p1HPRYYOLCLacC9w3PyBm2%2F7b7pjAXU8uib15xs7csX%2BRPI3YLHi3xTAKRoN83Tm7ChlNBCfCoCWb0KHvkQxBVcIx1kIWMrXAONSMXsB0L4amVd4ouA2FeCGnRGDeQYdWqQveDGNR09BXAkAyxjPtCMQ%2FVeQr6rw3LvNDbMvelYwIOfCDpQwCn8QwxG5CYoUX%2FB50piv%2B1BF05P9xa4nBEH%2BgYCdobOnQmQyQ4SQtK2gxNs%2FEW6KQ86174qyaeRap6Co%2BhiWgWSGcTaBXN0g9JUxCsBLHvjUGDmnPiYBkP2WzL14uMFdzLroP6uhtuqGJkIiYSyz8DC1O7YspsVosYazwqQVeG%2FiscBehN5rnEr2K60v1cSqbT6X9Hywf05slzb76tAqBlr3nX9BMo69Hvq%2Bh1ujh4ZmE38ZoTly%2BBccnm39BzvAxNMNW4q78GOqUBwh7liZPb0xao%2FTMZl6stMbB1EG0jekCh8n6qil%2FmYrjr3BDVZnbjt8Eh6sIg7t1xcmsQ1WTO0axv2mLOXhPsJhT157VVglKALrPVK2n7vtT1nCx9f9LdfsU0NQvnfba2YMZlgGh7g%2Fls8swoNU5i%2B7EE0ycrk9BeXxkcCFxb6H0q%2BjTxMV9RYrJoouo0dEvjABV%2BV8UxhY77u1T1UIltzKZdFTYy&X-Amz-Signature=b93e368cb15c9ecbbac3b9102ab128b697db350e251a26681b6f96497f355d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZECR6FI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDpyeTGj41oeccoCgFTHGjiVKiM9WrByosukTiGOG8GVAIgTwvy3tg7Zy73XywUpoblumcMTkMPdINZsV6tdvqR0sQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmYLRy8KOcOwukGsSrcAwqRZjPyVQMOswYEQGfx2D1yVtcmTmuopQKmkhWUrTisss4SkCsDX4WgtmBY53AZKH3lGAk7kuKfsaRYc7IR8pKVFHz3Xdz7St5gVeVcecwSeoUd4W%2FQJjOzVvpk04FYyv5If4d4NpQ1muVlDp1rWoqss5A1Rh0QA3NzYykHlYQifpmfCifLEjjo9Ez3DZ9ueq45%2B1p1HPRYYOLCLacC9w3PyBm2%2F7b7pjAXU8uib15xs7csX%2BRPI3YLHi3xTAKRoN83Tm7ChlNBCfCoCWb0KHvkQxBVcIx1kIWMrXAONSMXsB0L4amVd4ouA2FeCGnRGDeQYdWqQveDGNR09BXAkAyxjPtCMQ%2FVeQr6rw3LvNDbMvelYwIOfCDpQwCn8QwxG5CYoUX%2FB50piv%2B1BF05P9xa4nBEH%2BgYCdobOnQmQyQ4SQtK2gxNs%2FEW6KQ86174qyaeRap6Co%2BhiWgWSGcTaBXN0g9JUxCsBLHvjUGDmnPiYBkP2WzL14uMFdzLroP6uhtuqGJkIiYSyz8DC1O7YspsVosYazwqQVeG%2FiscBehN5rnEr2K60v1cSqbT6X9Hywf05slzb76tAqBlr3nX9BMo69Hvq%2Bh1ujh4ZmE38ZoTly%2BBccnm39BzvAxNMNW4q78GOqUBwh7liZPb0xao%2FTMZl6stMbB1EG0jekCh8n6qil%2FmYrjr3BDVZnbjt8Eh6sIg7t1xcmsQ1WTO0axv2mLOXhPsJhT157VVglKALrPVK2n7vtT1nCx9f9LdfsU0NQvnfba2YMZlgGh7g%2Fls8swoNU5i%2B7EE0ycrk9BeXxkcCFxb6H0q%2BjTxMV9RYrJoouo0dEvjABV%2BV8UxhY77u1T1UIltzKZdFTYy&X-Amz-Signature=2dc7effd79b3a78af57d1862e91b7ba34efd34e0fab8e7c75a3cf60babd8ed10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
