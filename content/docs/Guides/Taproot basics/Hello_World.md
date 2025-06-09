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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWENY6XS%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FomIpDGypwXKL2xvEWJXED9ZvkQdemIDIY9nKHFEFsAiA05GozmLKIkcZhak0rUU79r4sb0l%2BATdFG7czazD7vwCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMonm0cD6gdPVGzoY0KtwD%2BYNVRkR%2B4yQlJwEKdcrDSf%2B3U9txQQ%2BztEW4yfNWQYO8eQocJByuNv9MDsHOip2JXHkT174xGgnZWwiBPLmJb5o5V7JY43iX4tbpZwGxAjqQzWb1FTmwZdJ11zI%2BIzttKNrP6wU30ubNxGDpRHEX6TQ5TMTyBkHe89TD%2FiPFb11DxlHdZAFf0QBTzSdLbdhps4CMMDAYZRw9XrHSVY3%2BG4XXDafkfInJO9THuvrm44Uq6ku01gbP9r7MK7p8TwG8cgqHy92cgDcfPR3Ry475D%2B6Fnm%2BL33DVk82i8KXUZ0ktZWF0EzPL1W9tKc5qVKCqUOErgGgu%2Ffq%2F49f0Ce89rIjsBNJwRPy5bVW61lc8%2B5LKLJZbLSU36Ibhwm1DZu51%2BdQFBOnoDIOYLZ6JJwC%2FMIQDNGzJpDFHlOO2lmP2WRthS0qArqoLvPuPahuBhWCyGdseGoGPxTgU0%2Bfg9HiUO6Z75LHLuic%2BDrF86pV6s8CcVLkR4cQuZHA0RREC7yBVqKaemkq5LnxQB2A0in8y%2FYmFwiZAVV%2BYanns%2Fl0L%2BnxB0WGnYMNhYGFKMIGUYI%2Falay%2FVyvnFWy3ZQFo39kKn1GDGrTkgyZBIV2NW1ysfnQNgLe2CaC%2FFHswiX8w96KYwgY6pgE2zO29rzB5ECEA3Doras4IErmJkOxztMENHS3YygoDWCe3kh7ioWUNFgj7q1FC2YhkmIf%2BTVpG%2FZaI%2Bk4Pv96AG3dX98u46wNW39xbfCKP0P8g2Ok0A1XkPWaCPCgui0KsDQnH%2FHMOSrvPpvFlcT0KM4UTLJIKtQowCyUjInRKZmESjk2l5dahsFX1G4yHUPYVoJxjFp3Duq11WgNHzf9WJUKssrUw&X-Amz-Signature=46c0c5851c9baae57c4c34fac663cc06550fc750b9ee8a2b0913826cbfb70c95&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWENY6XS%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FomIpDGypwXKL2xvEWJXED9ZvkQdemIDIY9nKHFEFsAiA05GozmLKIkcZhak0rUU79r4sb0l%2BATdFG7czazD7vwCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMonm0cD6gdPVGzoY0KtwD%2BYNVRkR%2B4yQlJwEKdcrDSf%2B3U9txQQ%2BztEW4yfNWQYO8eQocJByuNv9MDsHOip2JXHkT174xGgnZWwiBPLmJb5o5V7JY43iX4tbpZwGxAjqQzWb1FTmwZdJ11zI%2BIzttKNrP6wU30ubNxGDpRHEX6TQ5TMTyBkHe89TD%2FiPFb11DxlHdZAFf0QBTzSdLbdhps4CMMDAYZRw9XrHSVY3%2BG4XXDafkfInJO9THuvrm44Uq6ku01gbP9r7MK7p8TwG8cgqHy92cgDcfPR3Ry475D%2B6Fnm%2BL33DVk82i8KXUZ0ktZWF0EzPL1W9tKc5qVKCqUOErgGgu%2Ffq%2F49f0Ce89rIjsBNJwRPy5bVW61lc8%2B5LKLJZbLSU36Ibhwm1DZu51%2BdQFBOnoDIOYLZ6JJwC%2FMIQDNGzJpDFHlOO2lmP2WRthS0qArqoLvPuPahuBhWCyGdseGoGPxTgU0%2Bfg9HiUO6Z75LHLuic%2BDrF86pV6s8CcVLkR4cQuZHA0RREC7yBVqKaemkq5LnxQB2A0in8y%2FYmFwiZAVV%2BYanns%2Fl0L%2BnxB0WGnYMNhYGFKMIGUYI%2Falay%2FVyvnFWy3ZQFo39kKn1GDGrTkgyZBIV2NW1ysfnQNgLe2CaC%2FFHswiX8w96KYwgY6pgE2zO29rzB5ECEA3Doras4IErmJkOxztMENHS3YygoDWCe3kh7ioWUNFgj7q1FC2YhkmIf%2BTVpG%2FZaI%2Bk4Pv96AG3dX98u46wNW39xbfCKP0P8g2Ok0A1XkPWaCPCgui0KsDQnH%2FHMOSrvPpvFlcT0KM4UTLJIKtQowCyUjInRKZmESjk2l5dahsFX1G4yHUPYVoJxjFp3Duq11WgNHzf9WJUKssrUw&X-Amz-Signature=682feb322a8ec19512b2a2835f5c725131adb502b8204b040b4dbe585c3afd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
