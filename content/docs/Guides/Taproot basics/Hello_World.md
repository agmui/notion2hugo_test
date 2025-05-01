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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODSCEIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDTGj7F5hffxyWMc8WDCJcr8Msj%2BoQ13Dfn%2FmouFCZlhQIgKPOyjoxqp6GkZcQYJub5BtAToNMxlEfpg4Pk0lEsiVMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESTZWip9rh%2FbAxygCrcAyfgJkGm5AGf9VjgGTarvWQA53a7l5JuDqXcBZLz8BOaD5NrpTGO26wfXF4p6aNHdUrY55Q4DZ9IgAgxQmOmGZbRedn0%2BTjUQ%2FHrpZMnMvPPGGiswJd%2FW77yjJS1P63NztuhQTIyTWUubneT57r17qF3zxk6rjbNV3%2FQfVTuF%2FQQOoIVSTwFdDFFLJr5HE2FiSJB0cqpSJZl5rppn79IPI30SXNRrK6hw3M6iK51rHLch0iiEQOIBDckx0pvjdNWBpjP3NCCbRtY2suemz5m7pVsRYbKwLP93psCsCEX40Q4%2FUlOD%2F5fgn5H931RbpVqNF1aL7RJ7hyTcyfQXyCsytWf%2F2nV4SoUsgwx51F%2B%2FSPJmRL5xD1lg2%2Bmp5prD4yWPBLsAz%2F6g6MtbUx2bOp5%2FMS8ImoYtZ2OeFLrWLrXcLcNzDDqKo%2FaYI%2Fv22LeT5vCpmFwtmi0qEgxtug8TgDwWDB0dDtGXmoJ51cLrZg5zGEvh9nkAeiPJ40YPN14NToD%2BdoXRl54N0nL%2FpvrO%2FRKjmM9z%2B5aKuecQoB%2FM9brmN2Ar67bG%2BzIb%2BCaLUcR%2BEkBguYPiRMuwZeUY8CxYMRqyKsjxiy%2BxsC2nWIW4PEE5n3mPSxBJbe0lzvR6T%2FuMKbJzcAGOqUB1HKFw8D2POHBWp7KOo5mIRK7Lsxn%2F6bD5pJrHleEDqJhnjD6qTmgZHOntCelhAJoSZnKHURbqDhcK%2Br88ZTrakDuBRo%2FF3S%2BvEzgFWP8AYM1eBN7tUbNfJsu8FhFDa%2F9314nqPfBiDNaI6Zx6ddbVGxYqxocrvGcml3kcJ98GhuNfF%2FNYCQjBxkxuq925aNu0OPR5OTb4XuPr0la9r1o54dCgEXK&X-Amz-Signature=90f4969d363999c956f12e1dd2058462de7489f31914d595ff5e2e727ee30a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODSCEIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDTGj7F5hffxyWMc8WDCJcr8Msj%2BoQ13Dfn%2FmouFCZlhQIgKPOyjoxqp6GkZcQYJub5BtAToNMxlEfpg4Pk0lEsiVMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESTZWip9rh%2FbAxygCrcAyfgJkGm5AGf9VjgGTarvWQA53a7l5JuDqXcBZLz8BOaD5NrpTGO26wfXF4p6aNHdUrY55Q4DZ9IgAgxQmOmGZbRedn0%2BTjUQ%2FHrpZMnMvPPGGiswJd%2FW77yjJS1P63NztuhQTIyTWUubneT57r17qF3zxk6rjbNV3%2FQfVTuF%2FQQOoIVSTwFdDFFLJr5HE2FiSJB0cqpSJZl5rppn79IPI30SXNRrK6hw3M6iK51rHLch0iiEQOIBDckx0pvjdNWBpjP3NCCbRtY2suemz5m7pVsRYbKwLP93psCsCEX40Q4%2FUlOD%2F5fgn5H931RbpVqNF1aL7RJ7hyTcyfQXyCsytWf%2F2nV4SoUsgwx51F%2B%2FSPJmRL5xD1lg2%2Bmp5prD4yWPBLsAz%2F6g6MtbUx2bOp5%2FMS8ImoYtZ2OeFLrWLrXcLcNzDDqKo%2FaYI%2Fv22LeT5vCpmFwtmi0qEgxtug8TgDwWDB0dDtGXmoJ51cLrZg5zGEvh9nkAeiPJ40YPN14NToD%2BdoXRl54N0nL%2FpvrO%2FRKjmM9z%2B5aKuecQoB%2FM9brmN2Ar67bG%2BzIb%2BCaLUcR%2BEkBguYPiRMuwZeUY8CxYMRqyKsjxiy%2BxsC2nWIW4PEE5n3mPSxBJbe0lzvR6T%2FuMKbJzcAGOqUB1HKFw8D2POHBWp7KOo5mIRK7Lsxn%2F6bD5pJrHleEDqJhnjD6qTmgZHOntCelhAJoSZnKHURbqDhcK%2Br88ZTrakDuBRo%2FF3S%2BvEzgFWP8AYM1eBN7tUbNfJsu8FhFDa%2F9314nqPfBiDNaI6Zx6ddbVGxYqxocrvGcml3kcJ98GhuNfF%2FNYCQjBxkxuq925aNu0OPR5OTb4XuPr0la9r1o54dCgEXK&X-Amz-Signature=9729c3a66077950486823a78449ea5d81805b8fc6b7afc2ae330687daadf02b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
