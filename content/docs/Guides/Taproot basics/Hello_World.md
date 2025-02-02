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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZAQO56G%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUiELdsiULZJNShRS8y%2BCcqslhem1BnIlih%2Fzw1unUvAIgBS5qhX4B7Iv4kotFfAbq0kq4g73Z47leIdPLrAsYQoAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOKbxUndlVKVGivByrcA1DtBxIlQw1AaUi54i1gQz3LEGg%2FqAwiuCdTmYhirJcDKbciwal5JnBkiTPPtFH78%2BnbKPsn9XejuOtWR38NFml655QdrWtOVy5FGeMmhB2htliM8Kt5JpeOUPLbx%2Fz3lPCBRW0G3PSB%2BS4m13ezO%2F5RqAD81LG5NF5ZI%2Bx46d2kyuzdyJpK7G31iV%2Ba7OqbrCQ0QnkX4daj8u%2BYfDAkwuze%2F64IMa%2Bkbbqnx1ACHfXFx%2B2vSEsOseQfp2gY7tjDzz0CVyiqYW6gGrlKCvx9UoFMvPkkNjWiYnv9p5eQcrGHutD3F3jWM9m2t1jEOvUHjS%2BXTfoBu3k%2FDErVibGUyQD3S2GdKNV5D0xOnD8XyjYciNbxzVuFqiWfSr3OVOC8nihHWul%2Bd5zbUfTgDOCa9rBppyQ9gKaJuUEKKvmfzokuIU3kskAC%2BVQ2Ym%2BtTuvHgVJ3JsreRaJM5nLPmSFp8%2FGQ4JZlgQkxKjCt5demTmOViY%2F2zMrCzOZYrdWLvpQ6rjZDv6fMBUG7qSXQgYcCVdzccnWAsjfj6GKW7pwv%2BCReC413tJWBKBxF2DfV0Fo7TW0vwZZrqbSCWnTrF20OIb%2FFyCWkO43nk1phiMBh3OEFHKOpATJjkRbCb1ZeMJ%2Fd%2FrwGOqUBMdEbfNy0bjAEIpMwkR2u9xkm4uX28Z%2B0Ed8LLC4iSkss04MvuPSjiQURsxwJO%2B%2FjpkHgIVoDXWnYSQQri%2F8fekPpZsBTOVbrRSxupRiHc8Ew7MX4YmX2rr3BeGQ%2BxyPZczvaPCKiVYT9VNXZ1mtbeUODeDZRKc%2F2cQEwaKTzH5aU%2BFakOnK04SasH6bbdMpGjZ1IPUBqNGEv0S2TFQpxGPPF5IGQ&X-Amz-Signature=a4d39a7ef46e1fa2aa235dc3dd9aaed16c7ca818dfa152a6eb9961c50f3333f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZAQO56G%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUiELdsiULZJNShRS8y%2BCcqslhem1BnIlih%2Fzw1unUvAIgBS5qhX4B7Iv4kotFfAbq0kq4g73Z47leIdPLrAsYQoAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOKbxUndlVKVGivByrcA1DtBxIlQw1AaUi54i1gQz3LEGg%2FqAwiuCdTmYhirJcDKbciwal5JnBkiTPPtFH78%2BnbKPsn9XejuOtWR38NFml655QdrWtOVy5FGeMmhB2htliM8Kt5JpeOUPLbx%2Fz3lPCBRW0G3PSB%2BS4m13ezO%2F5RqAD81LG5NF5ZI%2Bx46d2kyuzdyJpK7G31iV%2Ba7OqbrCQ0QnkX4daj8u%2BYfDAkwuze%2F64IMa%2Bkbbqnx1ACHfXFx%2B2vSEsOseQfp2gY7tjDzz0CVyiqYW6gGrlKCvx9UoFMvPkkNjWiYnv9p5eQcrGHutD3F3jWM9m2t1jEOvUHjS%2BXTfoBu3k%2FDErVibGUyQD3S2GdKNV5D0xOnD8XyjYciNbxzVuFqiWfSr3OVOC8nihHWul%2Bd5zbUfTgDOCa9rBppyQ9gKaJuUEKKvmfzokuIU3kskAC%2BVQ2Ym%2BtTuvHgVJ3JsreRaJM5nLPmSFp8%2FGQ4JZlgQkxKjCt5demTmOViY%2F2zMrCzOZYrdWLvpQ6rjZDv6fMBUG7qSXQgYcCVdzccnWAsjfj6GKW7pwv%2BCReC413tJWBKBxF2DfV0Fo7TW0vwZZrqbSCWnTrF20OIb%2FFyCWkO43nk1phiMBh3OEFHKOpATJjkRbCb1ZeMJ%2Fd%2FrwGOqUBMdEbfNy0bjAEIpMwkR2u9xkm4uX28Z%2B0Ed8LLC4iSkss04MvuPSjiQURsxwJO%2B%2FjpkHgIVoDXWnYSQQri%2F8fekPpZsBTOVbrRSxupRiHc8Ew7MX4YmX2rr3BeGQ%2BxyPZczvaPCKiVYT9VNXZ1mtbeUODeDZRKc%2F2cQEwaKTzH5aU%2BFakOnK04SasH6bbdMpGjZ1IPUBqNGEv0S2TFQpxGPPF5IGQ&X-Amz-Signature=a89eba6098af5fc2568b8fd379dcc9bf8b38bc698a3a296cfdeadefbe3608072&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
