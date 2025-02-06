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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPAC23D%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDknX1ex66G%2Bh%2FI6rNYovJectvE%2F5RHI9WkXUMDXzI5bQIgSK1LG0MUrz5t%2Ffp1a3RZMr%2BBe7pTl5MtOaB738oOK0Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGn60dvdZoKmJl7DoircAw3lUO6HdFUpHPdA5essZPvhdDHG%2FFeiN26yu%2BnXR90o0FyntosOKofHYTSn1VakYp5eKgOdDG2l9HqpxBFbgipiN%2BN2HX6ZcO8oFRNbl9yv2Tl0wia95iqEosyQI%2F2s2FPrdC6BLsyjcGG4INzL6hb1iAlBeIMyamNJFbkK%2BrV1ouyJU%2F9EoODzx3UxZ%2FfeWgf4nrPV60Nd%2BBbF13r2fzqVYHwetg0ge7cXLHJKjybMKagN9ugadwjPnq5oXOzQeKJEDT5BdIln5RQ%2Bvu19eBSDRktTTTxnUZgvJtSx3bjnGOIL0%2Ffpqv4eGcxXxsd3i3BZhrYBbZGXXPSYwXyDaQxv9PSlFnsKeHujB8DVWdh%2FLUEV%2FxrzDK02R2bkSUtCYLeY4JzCuWKhd13MRy9JTNIBFvwmO8uG4DD3jp2OKC2WjpFz5kMCvR4%2F4mQUjrsQKs%2Fr5H5vbwMcZymyMA3GEaHhdPE%2B4CfMcQNlHngZ%2BgT1PQq2wvJUVo4KlywN%2FBsskNYz1bKtyd7enu0kAG2nUh9AFJLZHE8H%2FPzLgzgQRu549S%2BBgnMANEU4pgI3Cjj0v4g%2F3KK7P4EbReGkDeem4cPYo4E9EOZMOPm%2FVaUtKJVyjckvv5o4NEHlP9dYMPDSk70GOqUBBlrDKqxiRpZMblqevzhBzQMbjvJcoAjLoyD8VfqKqhhE6owFinQ57WEqL%2BcyBQ3KR9odBrjJ6Z2ZHm8mbAPBA98OJs9IbdjhgM1MX1lqOv2%2BFd8N03vypm%2FqkOWZrbpGOjX8HkM8Zzt5KH6Aj9N0ZHyjcdXR676b0AWeF2nLmlkXHzJNP8vpo9uyJ6HD0iwQsGV0913OjOEPFbSndhSRytzq2C29&X-Amz-Signature=3ce35449c0c63a4839c0c91cb89f8dc3872b6217083be8acfb0e4c4d61d82795&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPAC23D%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDknX1ex66G%2Bh%2FI6rNYovJectvE%2F5RHI9WkXUMDXzI5bQIgSK1LG0MUrz5t%2Ffp1a3RZMr%2BBe7pTl5MtOaB738oOK0Yq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGn60dvdZoKmJl7DoircAw3lUO6HdFUpHPdA5essZPvhdDHG%2FFeiN26yu%2BnXR90o0FyntosOKofHYTSn1VakYp5eKgOdDG2l9HqpxBFbgipiN%2BN2HX6ZcO8oFRNbl9yv2Tl0wia95iqEosyQI%2F2s2FPrdC6BLsyjcGG4INzL6hb1iAlBeIMyamNJFbkK%2BrV1ouyJU%2F9EoODzx3UxZ%2FfeWgf4nrPV60Nd%2BBbF13r2fzqVYHwetg0ge7cXLHJKjybMKagN9ugadwjPnq5oXOzQeKJEDT5BdIln5RQ%2Bvu19eBSDRktTTTxnUZgvJtSx3bjnGOIL0%2Ffpqv4eGcxXxsd3i3BZhrYBbZGXXPSYwXyDaQxv9PSlFnsKeHujB8DVWdh%2FLUEV%2FxrzDK02R2bkSUtCYLeY4JzCuWKhd13MRy9JTNIBFvwmO8uG4DD3jp2OKC2WjpFz5kMCvR4%2F4mQUjrsQKs%2Fr5H5vbwMcZymyMA3GEaHhdPE%2B4CfMcQNlHngZ%2BgT1PQq2wvJUVo4KlywN%2FBsskNYz1bKtyd7enu0kAG2nUh9AFJLZHE8H%2FPzLgzgQRu549S%2BBgnMANEU4pgI3Cjj0v4g%2F3KK7P4EbReGkDeem4cPYo4E9EOZMOPm%2FVaUtKJVyjckvv5o4NEHlP9dYMPDSk70GOqUBBlrDKqxiRpZMblqevzhBzQMbjvJcoAjLoyD8VfqKqhhE6owFinQ57WEqL%2BcyBQ3KR9odBrjJ6Z2ZHm8mbAPBA98OJs9IbdjhgM1MX1lqOv2%2BFd8N03vypm%2FqkOWZrbpGOjX8HkM8Zzt5KH6Aj9N0ZHyjcdXR676b0AWeF2nLmlkXHzJNP8vpo9uyJ6HD0iwQsGV0913OjOEPFbSndhSRytzq2C29&X-Amz-Signature=f68b1adc4b0ed246d3899a709fae40609841def87e2293e45ae89c846558dd53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
