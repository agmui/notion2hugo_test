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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ6MQKAZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc8hTUPGHWYq5I7RM0X4oF%2BZ1sV2k7p965wngA2z2YvAiEA4Ac3iKcFB1t3lvbKqrx1U%2FLhlBqTAe4ENyAm%2BiZyDNEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLMOUbiflEZTIF6zRircA8QYRsRcC7Yf9M%2Fgye3ALniuneEEbQWsPYlxrUJHwDkVAfR%2B9KHZ8FqpA8AmCxHt9cmUkm8z664kSTqJ7pHxIVWVl1j2X%2BeYnYwDDaZig7dJrAXtizEuPpdIG4GitSCuPCaCwj1jVPiWfcIUEW5ArLnK9u8EP45XInV%2BqM2prnA%2FXGh%2Fw1SnIM7H69M7mfXzodq5N3qKPCoB70l4xvAfsSl17FYJPH3qG7uf9ajRopObTX9DqiVNuJcFaPWlLL7oq43Y8KpPkzRLJCFUk9J6eN961zo%2FFyAQ5oJtdYlB62e%2BbjdBmriounz%2B7PHMs0qRy9%2BgD3vq7lMcRoAv8hF1VsvW86n4h9thx%2BeDE9PU72fbctfHKBtG%2Blv1hmnQhmJvVyhbaCm%2F%2F7asLk8V0Ya4yftMWxNyI6dG3FgXgSPDxCmnq3Ew%2FCoSwn4lnzx2EDJIX%2BEGi7D2O3B08SxMoivHRazxyMaTNJgFs%2F9oEqLMfTCX0QBV%2Bp%2FWHh6ACmN%2FUgVMaC2ahPEAwqTvhbMEYuSqKYuLcGgSWxyvxnBemR6WvFpTtrUuQzEr%2BXhX4e3RwLWqnomsf0wRhfOK%2B5GTRgP3OKncHSRiy%2Fv0IwBJ5ahAnWGvujU0uGa5fPVbyVKYMMq%2Fm78GOqUBOvgypv1OvRAJXuvklYDgElvP4zBWTQMjSOpR9hCPEUrvrIYyMOI2%2B390HuW8L5517P51z%2Bz2rbiGLwH6jTDHoqo9DHsHE13N0tNwBOOxmah6x95KniN0Uc5wDntokSCv5ghbd%2BuRUuvSjsUNGqmAXmKhRTMkspiOjZk3%2FyWoZB0BfxHy6IAIkwdzuV0aqj5rps%2FYscPSvCVeRQ5c%2FcDTP0td5EyG&X-Amz-Signature=7fb253d9661c826102aa5d76bf9f8eb1947d677dd668d193c269efc51e8308df&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ6MQKAZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc8hTUPGHWYq5I7RM0X4oF%2BZ1sV2k7p965wngA2z2YvAiEA4Ac3iKcFB1t3lvbKqrx1U%2FLhlBqTAe4ENyAm%2BiZyDNEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLMOUbiflEZTIF6zRircA8QYRsRcC7Yf9M%2Fgye3ALniuneEEbQWsPYlxrUJHwDkVAfR%2B9KHZ8FqpA8AmCxHt9cmUkm8z664kSTqJ7pHxIVWVl1j2X%2BeYnYwDDaZig7dJrAXtizEuPpdIG4GitSCuPCaCwj1jVPiWfcIUEW5ArLnK9u8EP45XInV%2BqM2prnA%2FXGh%2Fw1SnIM7H69M7mfXzodq5N3qKPCoB70l4xvAfsSl17FYJPH3qG7uf9ajRopObTX9DqiVNuJcFaPWlLL7oq43Y8KpPkzRLJCFUk9J6eN961zo%2FFyAQ5oJtdYlB62e%2BbjdBmriounz%2B7PHMs0qRy9%2BgD3vq7lMcRoAv8hF1VsvW86n4h9thx%2BeDE9PU72fbctfHKBtG%2Blv1hmnQhmJvVyhbaCm%2F%2F7asLk8V0Ya4yftMWxNyI6dG3FgXgSPDxCmnq3Ew%2FCoSwn4lnzx2EDJIX%2BEGi7D2O3B08SxMoivHRazxyMaTNJgFs%2F9oEqLMfTCX0QBV%2Bp%2FWHh6ACmN%2FUgVMaC2ahPEAwqTvhbMEYuSqKYuLcGgSWxyvxnBemR6WvFpTtrUuQzEr%2BXhX4e3RwLWqnomsf0wRhfOK%2B5GTRgP3OKncHSRiy%2Fv0IwBJ5ahAnWGvujU0uGa5fPVbyVKYMMq%2Fm78GOqUBOvgypv1OvRAJXuvklYDgElvP4zBWTQMjSOpR9hCPEUrvrIYyMOI2%2B390HuW8L5517P51z%2Bz2rbiGLwH6jTDHoqo9DHsHE13N0tNwBOOxmah6x95KniN0Uc5wDntokSCv5ghbd%2BuRUuvSjsUNGqmAXmKhRTMkspiOjZk3%2FyWoZB0BfxHy6IAIkwdzuV0aqj5rps%2FYscPSvCVeRQ5c%2FcDTP0td5EyG&X-Amz-Signature=45c695a7a91a64c7b711d8f5ee8ec829b952d8db98588833d02889da87d93432&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
