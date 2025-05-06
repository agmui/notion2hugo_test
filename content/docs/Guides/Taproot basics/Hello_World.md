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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDWYTI2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOW%2Bwc4JYu1JATlvaqLmuzAZ5by4MNhj29Mzd7Za%2FN0AiAsrgmSGxTn5%2Fek7vYTugSanFQSfUDs2prqTHRjdSqQQyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDs8on8OPOK7YD9PvKtwDFbkqoZ%2FNLer9D%2FaKYGrQC%2FpdAuzRxxVs31A25vwLvtTVJ4XfvP6deTJhEePw7ykq7BddZphL%2Fu1D2a%2FEL94MvXVx33ccLGIevHmoXahlLjxtGZoRBnfZXWVng%2BP3C%2F1OwU3vAdztblu7MXl7wtzuLePKVHDAoKwPdC6qCz%2B%2Fe1zMVkbhZC%2B5ajiG0nKZ4OngGVYUfpEdC5hY1059kN9V0fLxPGNUsz2TJQyTTmCRZtohJhmQQoLRZc%2BEWL%2BKDDp%2FUGRXayVRV3YFQsF1UcEdshS791nrXlbWiiTTJGQlTDjsxeYfXPsb4cS5ufIpGmjR9XJHzxa6J%2BKOi4lvajd7uUzkKdVBQAsrLLaMObrUVwJye0W%2BrokD%2BdrHm%2BiVritav6LYP4F19V8KDJEAjWTPHFBaP2J8KgzZX6TQnlo5RpC%2F8dnW8LTvAm2WvN%2BAvvFRDZB1xzhjbtZkM%2FqfShAVgWB5HA36iP4cGR3Cabr%2BNu8LVIvAgXJTT9thuS5f78sWxDNqokPEut%2B4Sc7aJFc4x331cIUMPaB3XAmWvxlKaWGfFg1WRKCw9nQnOrbSnUGWNVWxz1k0bfKzsPZSKJ9trKZXiXPQGjan86c6ZDrBDkq5aRU1AVDogIS9Dzkw07DlwAY6pgEmRjyna5105k0cONdlHMowIZOsDVc8DdXHiJMmg8JhEPd4%2BwmCh2vm54FLf5AF%2B9vGEsYXDdODfZ1QhecIQx7LgaRjmzl5qCM68O9s0bSeM4Ll90V%2BuGQWLYr9BRFb3aKFnoCCIXvFdKg5PMsZEpEjXWF7gOxVyNcXt27p%2FdtNHLabPPpBrgD9PLudERQ6g6Ha9rzh4m2tGEVw3luohHYFLznlcrxQ&X-Amz-Signature=c7de9336efbab62dd04e892ed88f6db49ac0e6dcefb40a4e32e7cb893d9d3bef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDWYTI2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOW%2Bwc4JYu1JATlvaqLmuzAZ5by4MNhj29Mzd7Za%2FN0AiAsrgmSGxTn5%2Fek7vYTugSanFQSfUDs2prqTHRjdSqQQyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDs8on8OPOK7YD9PvKtwDFbkqoZ%2FNLer9D%2FaKYGrQC%2FpdAuzRxxVs31A25vwLvtTVJ4XfvP6deTJhEePw7ykq7BddZphL%2Fu1D2a%2FEL94MvXVx33ccLGIevHmoXahlLjxtGZoRBnfZXWVng%2BP3C%2F1OwU3vAdztblu7MXl7wtzuLePKVHDAoKwPdC6qCz%2B%2Fe1zMVkbhZC%2B5ajiG0nKZ4OngGVYUfpEdC5hY1059kN9V0fLxPGNUsz2TJQyTTmCRZtohJhmQQoLRZc%2BEWL%2BKDDp%2FUGRXayVRV3YFQsF1UcEdshS791nrXlbWiiTTJGQlTDjsxeYfXPsb4cS5ufIpGmjR9XJHzxa6J%2BKOi4lvajd7uUzkKdVBQAsrLLaMObrUVwJye0W%2BrokD%2BdrHm%2BiVritav6LYP4F19V8KDJEAjWTPHFBaP2J8KgzZX6TQnlo5RpC%2F8dnW8LTvAm2WvN%2BAvvFRDZB1xzhjbtZkM%2FqfShAVgWB5HA36iP4cGR3Cabr%2BNu8LVIvAgXJTT9thuS5f78sWxDNqokPEut%2B4Sc7aJFc4x331cIUMPaB3XAmWvxlKaWGfFg1WRKCw9nQnOrbSnUGWNVWxz1k0bfKzsPZSKJ9trKZXiXPQGjan86c6ZDrBDkq5aRU1AVDogIS9Dzkw07DlwAY6pgEmRjyna5105k0cONdlHMowIZOsDVc8DdXHiJMmg8JhEPd4%2BwmCh2vm54FLf5AF%2B9vGEsYXDdODfZ1QhecIQx7LgaRjmzl5qCM68O9s0bSeM4Ll90V%2BuGQWLYr9BRFb3aKFnoCCIXvFdKg5PMsZEpEjXWF7gOxVyNcXt27p%2FdtNHLabPPpBrgD9PLudERQ6g6Ha9rzh4m2tGEVw3luohHYFLznlcrxQ&X-Amz-Signature=bbde18e30095add56dcc0fff1891731abd274a6c742b05d7cc8160157348d1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
