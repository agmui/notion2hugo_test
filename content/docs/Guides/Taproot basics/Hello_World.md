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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIO6JNC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDbBceJdNcgE5JoDYzGzrqNOwcEpzcLGLIwcRGdgxApoAIgYAP0uL9nPjezHFpfbj19FZeEMhJc5Ha5zFSZe%2BLcEvkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDYy%2B8SnGi5840RSVyrcAwQrNCzraMPtt7ijpba4I%2FIP33axgw0lqoQQYmIlCEhAv695VO%2FInbscZbj%2BiZgHHNvSdAzrW5D2ITsWs8nJas90SKKf0I9s4AyLbWWxFxJGmdcoFaH29qkYPBAiJ8sbN3rxE1K4Mkj%2FPmWUWtxBu0oPnj1Ip1X8hXHbXLckdc6yl5zieDMtfhe3RPykKC9bmKhrBoqlUTvyK2tVrqvGiKE0H8Kfe7sD1P8WSBScF7fyhBg4gQxoWbDaYlOrhMhgiwrvDIEgzTbmZ94wKfeluBpUhjwdw2jayiatdkHYsFE8PmEMWv0t78jB%2FMEzZvZn24qZG9yjxfwkjMy0CuO%2BWht1K083OJTRhbi6BMVz46mxOaomCP7qMEK2emW1VI4MjWTJWeSJgr%2Fx3Oa6wBQ3RMHw%2Bv4CrurhCuzX8cRdY9xnPkXTmWDyBdrSHBcGViawxIU4Rq%2FcIiTA6oubW40dKYjARopxytQBk%2F2XhCyBL6DW2QsdOLIOzEleyfoBPi7jWxvGml6jrBa73LSklqNGel7VMv67qw2IokEXhXOBG8cRH%2FWAljW9N9r9HSGs5h30PACYhgcSk0dxGtOpnrSP7xin3brUBzgT5V4idOGIEkqXfco3nGYieOGP4lO8MLGIk8EGOqUBAGTQnfbSsANuajJcGHeyPUytxp8eGLGh5ztSxzJn5j9UEMXxmFecLr9zMHe8Lk6TMI12lBkvBsPTOHeGLvKO%2BjuhCAfUJBeTIpeuxM6TeDVVjfYOYUiEFlyPb29CaP0upYmxq%2BQytCEQd49kF5250O%2B2QJsOBrKmhzpT70uLpcMX8Pp0dalmKXLsB7nKaGRAR9CB9SvFAGkX%2Bjc7ow12QnG%2FVnJA&X-Amz-Signature=88618438f5f9846e6626e1bd6c461030458faa81a39a3afd79a1bd67e3941923&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIO6JNC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDbBceJdNcgE5JoDYzGzrqNOwcEpzcLGLIwcRGdgxApoAIgYAP0uL9nPjezHFpfbj19FZeEMhJc5Ha5zFSZe%2BLcEvkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDYy%2B8SnGi5840RSVyrcAwQrNCzraMPtt7ijpba4I%2FIP33axgw0lqoQQYmIlCEhAv695VO%2FInbscZbj%2BiZgHHNvSdAzrW5D2ITsWs8nJas90SKKf0I9s4AyLbWWxFxJGmdcoFaH29qkYPBAiJ8sbN3rxE1K4Mkj%2FPmWUWtxBu0oPnj1Ip1X8hXHbXLckdc6yl5zieDMtfhe3RPykKC9bmKhrBoqlUTvyK2tVrqvGiKE0H8Kfe7sD1P8WSBScF7fyhBg4gQxoWbDaYlOrhMhgiwrvDIEgzTbmZ94wKfeluBpUhjwdw2jayiatdkHYsFE8PmEMWv0t78jB%2FMEzZvZn24qZG9yjxfwkjMy0CuO%2BWht1K083OJTRhbi6BMVz46mxOaomCP7qMEK2emW1VI4MjWTJWeSJgr%2Fx3Oa6wBQ3RMHw%2Bv4CrurhCuzX8cRdY9xnPkXTmWDyBdrSHBcGViawxIU4Rq%2FcIiTA6oubW40dKYjARopxytQBk%2F2XhCyBL6DW2QsdOLIOzEleyfoBPi7jWxvGml6jrBa73LSklqNGel7VMv67qw2IokEXhXOBG8cRH%2FWAljW9N9r9HSGs5h30PACYhgcSk0dxGtOpnrSP7xin3brUBzgT5V4idOGIEkqXfco3nGYieOGP4lO8MLGIk8EGOqUBAGTQnfbSsANuajJcGHeyPUytxp8eGLGh5ztSxzJn5j9UEMXxmFecLr9zMHe8Lk6TMI12lBkvBsPTOHeGLvKO%2BjuhCAfUJBeTIpeuxM6TeDVVjfYOYUiEFlyPb29CaP0upYmxq%2BQytCEQd49kF5250O%2B2QJsOBrKmhzpT70uLpcMX8Pp0dalmKXLsB7nKaGRAR9CB9SvFAGkX%2Bjc7ow12QnG%2FVnJA&X-Amz-Signature=f6ca1153825226feed2edc618194124863a9bea56a25fe355fe1289a6d45871d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
