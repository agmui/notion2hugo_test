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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXTDDXF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBMbx1tX9J9TzrjJVu2hUnkyVDt%2Fq%2FlFtj5I1%2FEX9GeaAiBHBQcm1y3DGhfpuBaKHSI6KeWdUIpBsQi1bI7TVJS1fiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn7QJJ5xg4vb5wb%2BZKtwDu7NhQhrutIhwRFVi3YfhuEvlwTOiT3RvHm%2FVqw7ny6kfBkAIfFLmWjKOsSBKttZ7reov4ujScSpbmltRgeI8SRrmyzBfK%2FlKbdPB1IGfHnSyJ5IvZov2m471f4dOG%2B7UZgDud7NMAaGvXYsHERLAkBQ4DIKbB%2B5g7C6xpD80WpRLNwxLBL0EFM9ZtFmjAXCLtDfJ%2FII6s1kJ2jZ0ZH3Mw19hY3dlk01Hpp%2FKnC74PIBbDMnGvY8yzxaqEXskWCI9Ok7RZAWAMi4%2Bar6mHTDGOrbynVCfxNxinP09UY0oO4PEOYdWXgLPK%2B7wTnAbnURdpq7q4LOHwLW0zbT7VsMkZv%2FbInPxB08KIBI5FixWEI%2F8fHt9p1mzivr2XjJD3fqg8YP%2BBYYrtL8EWHMZ05gWvHkO%2FdfhHj5fQMqspnh4DdboBlN5TZEDL6OiINe8GpUpv0NHhWBVc1oFTDwnay2EK0ZILYWxx%2F0EzjYkAndmDlachPulwF0M%2BiEAgyv1oT4xuasipiBI6CReLKZkQ6nKnRalWet2tuDfBdDjYK2W9PDhC5qZLoczK22navn5t9aoJEMqFuMJCP%2F3zw%2B17SAbnhnYdkLv%2F%2BG6FOVegamkqFI1rWtkHA5iCLMRCoEw7NbgwgY6pgH%2Bi4Kbs6qi4oyu7X6F%2BMc4zb5JWxN%2FPyRvnobLRSf5j2JIMpWGCilxtOMuaVaoAC0BeugND8YUONbQHQrc93mDS%2FfOccK05EhBhq5cq8RfFiaUD2noP4KTqiBj%2FLCek3A%2FYufFyRSVY%2F4qEHmKjz9EcgFOedpUj94mvYqSSCZLXNzjKjYZR58prQw9Y4uyZB8t%2BZRkMWiaB8ui8ZqybZ5JRMtquVGx&X-Amz-Signature=d00e595587b49b7d922ca655f379e2ed48ff40f66e7f60a4550cf4b934b01a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXTDDXF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBMbx1tX9J9TzrjJVu2hUnkyVDt%2Fq%2FlFtj5I1%2FEX9GeaAiBHBQcm1y3DGhfpuBaKHSI6KeWdUIpBsQi1bI7TVJS1fiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn7QJJ5xg4vb5wb%2BZKtwDu7NhQhrutIhwRFVi3YfhuEvlwTOiT3RvHm%2FVqw7ny6kfBkAIfFLmWjKOsSBKttZ7reov4ujScSpbmltRgeI8SRrmyzBfK%2FlKbdPB1IGfHnSyJ5IvZov2m471f4dOG%2B7UZgDud7NMAaGvXYsHERLAkBQ4DIKbB%2B5g7C6xpD80WpRLNwxLBL0EFM9ZtFmjAXCLtDfJ%2FII6s1kJ2jZ0ZH3Mw19hY3dlk01Hpp%2FKnC74PIBbDMnGvY8yzxaqEXskWCI9Ok7RZAWAMi4%2Bar6mHTDGOrbynVCfxNxinP09UY0oO4PEOYdWXgLPK%2B7wTnAbnURdpq7q4LOHwLW0zbT7VsMkZv%2FbInPxB08KIBI5FixWEI%2F8fHt9p1mzivr2XjJD3fqg8YP%2BBYYrtL8EWHMZ05gWvHkO%2FdfhHj5fQMqspnh4DdboBlN5TZEDL6OiINe8GpUpv0NHhWBVc1oFTDwnay2EK0ZILYWxx%2F0EzjYkAndmDlachPulwF0M%2BiEAgyv1oT4xuasipiBI6CReLKZkQ6nKnRalWet2tuDfBdDjYK2W9PDhC5qZLoczK22navn5t9aoJEMqFuMJCP%2F3zw%2B17SAbnhnYdkLv%2F%2BG6FOVegamkqFI1rWtkHA5iCLMRCoEw7NbgwgY6pgH%2Bi4Kbs6qi4oyu7X6F%2BMc4zb5JWxN%2FPyRvnobLRSf5j2JIMpWGCilxtOMuaVaoAC0BeugND8YUONbQHQrc93mDS%2FfOccK05EhBhq5cq8RfFiaUD2noP4KTqiBj%2FLCek3A%2FYufFyRSVY%2F4qEHmKjz9EcgFOedpUj94mvYqSSCZLXNzjKjYZR58prQw9Y4uyZB8t%2BZRkMWiaB8ui8ZqybZ5JRMtquVGx&X-Amz-Signature=a6257142312ea7a4724eef6990167ee8ee5754440fdd21f3877cdd1280e5918b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
