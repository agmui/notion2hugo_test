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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTS5ZFLI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmsqLN4tr6NB2ppMvIxjiAuDd%2FR1yHOXcgYkczKp918AIgTWDzcv7RV5a1sWvD%2BHOAwhlDwQ3hmGbOYn14ybdbt1wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG5I38nNy0BCh4brHyrcA1p3U8VcdLEBeBFBp1iHHR7gNBjJi9R1qosii2DT%2BiAQqNztVpFn6OIGtLQlF9Qhvp%2FCYllgLxHaesIqneIsaH1auR5E5H8D%2FG6VctHbsyRBNTJWhS8diOtigloU12zOvuLzhqvJRAtxUON6Eoll%2Bjd%2FcZDxuw7E58c93FxxoegzNc674lN0V9DpbfnkTfv14yl23vzqMHnsZb6ULfrzth4fYsMrvtHoI5nPCYApGUBynjAxtnEwpJ0fxQ%2Fk3xDXdrMkPaaFRHbbRE9yS93CwgTf7g5Wx%2BPcPfDM3cAc2DFmlJTvh1rMzAKO43iqSslhPYpK3PXi9c%2FSFP8tDqXgFChGAe1eA6Uke6jDBYW3JTtzPqNJMKfEBYG1bkxR467aHsBN6huW6NEEEA8ma7gygAncYiun630rNsytBGS%2BKZvxHBbUMnGi5WEI489hW9ntr5JtuGLAiPkcK0ACRrJawkWP6igU2%2FvjFWFzRLbINS4EsRpOdiHUy31VKrvxJ3%2BV7DB%2BLohBtQ79l0COc61Ikzrz3NmQh38lgF2BrUq2erfPCEW7MXMC50z%2FF%2Bl%2BzW1G3OkQerlWH4Y7J4lvbifLUxcr6VUNaKtK05uIp0eenebGCBonmXgJW%2By3glaWMJyTgcAGOqUBNJ1CPGLv66AyVY4TXjBKZAOsmX35EV3P8zLBazMpRTEmBjFFn6bYI9W%2FvaXs0IPMSlRRVQp86SmQ%2BERGJ4YrzvKGesb0uOgAeK7qdfymcwPmVPe2elv8tm1qSYQOkUMIJ%2B1umICl3UZ9pDuBp7HYX0sSLlfx%2BlB%2BbQJHPXSQBIXrBprtYUtTW%2FK7Psjz06ar6TsBdqx%2FS6wSIPNLhyFShq89o54E&X-Amz-Signature=bd0bccc5113304c3fa6dd87657f9bbcb38a0c90070a0e929bef07d92efdfa540&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTS5ZFLI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmsqLN4tr6NB2ppMvIxjiAuDd%2FR1yHOXcgYkczKp918AIgTWDzcv7RV5a1sWvD%2BHOAwhlDwQ3hmGbOYn14ybdbt1wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG5I38nNy0BCh4brHyrcA1p3U8VcdLEBeBFBp1iHHR7gNBjJi9R1qosii2DT%2BiAQqNztVpFn6OIGtLQlF9Qhvp%2FCYllgLxHaesIqneIsaH1auR5E5H8D%2FG6VctHbsyRBNTJWhS8diOtigloU12zOvuLzhqvJRAtxUON6Eoll%2Bjd%2FcZDxuw7E58c93FxxoegzNc674lN0V9DpbfnkTfv14yl23vzqMHnsZb6ULfrzth4fYsMrvtHoI5nPCYApGUBynjAxtnEwpJ0fxQ%2Fk3xDXdrMkPaaFRHbbRE9yS93CwgTf7g5Wx%2BPcPfDM3cAc2DFmlJTvh1rMzAKO43iqSslhPYpK3PXi9c%2FSFP8tDqXgFChGAe1eA6Uke6jDBYW3JTtzPqNJMKfEBYG1bkxR467aHsBN6huW6NEEEA8ma7gygAncYiun630rNsytBGS%2BKZvxHBbUMnGi5WEI489hW9ntr5JtuGLAiPkcK0ACRrJawkWP6igU2%2FvjFWFzRLbINS4EsRpOdiHUy31VKrvxJ3%2BV7DB%2BLohBtQ79l0COc61Ikzrz3NmQh38lgF2BrUq2erfPCEW7MXMC50z%2FF%2Bl%2BzW1G3OkQerlWH4Y7J4lvbifLUxcr6VUNaKtK05uIp0eenebGCBonmXgJW%2By3glaWMJyTgcAGOqUBNJ1CPGLv66AyVY4TXjBKZAOsmX35EV3P8zLBazMpRTEmBjFFn6bYI9W%2FvaXs0IPMSlRRVQp86SmQ%2BERGJ4YrzvKGesb0uOgAeK7qdfymcwPmVPe2elv8tm1qSYQOkUMIJ%2B1umICl3UZ9pDuBp7HYX0sSLlfx%2BlB%2BbQJHPXSQBIXrBprtYUtTW%2FK7Psjz06ar6TsBdqx%2FS6wSIPNLhyFShq89o54E&X-Amz-Signature=e680818c81a3d0173bf5d634d2cf02d023aa52679c30e7768feed71fd9c01e64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
