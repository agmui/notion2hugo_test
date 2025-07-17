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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OQZPEO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIC2YeXxiqevugbqh%2BhUXmRU3GD4N0jxdpEqThYJEgJ%2BDAiB72V9svaSwjtizJo%2FsrDIBcVRUel6woAz%2FZZQJU3rGHiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpINgIEzmXM8EA0EhKtwD45oxt%2BYez6EktFAqUuj5YTyvFCt9KPEn%2FmbDADYG7CidZKMtBt9iYaCqe3Fs5RKwrq%2FhAR9KkvPqZUuenLKHbpscPC6dtNzne6%2BYB%2BiPoz6GiEYAk2yDijsR8T6Bm%2BO1rlQibTk3hiPcwa3x6Yf5sc3LOkCX%2FE0%2B4MmjSEzaaKRjXlhd4UXBwS8c0KL0Q8JHOeImdY4bY9sONnCthZBv4bcCcREl5hMxxrWO2Sn46fZfYGQ2IbIlQQySkXaliwOdLmIq3B%2FDTP%2Funz7YBYbFWGxFQrLiccbyOgntsRqiQSIJ2rm1cJhj5FIPNvH66w7xkm%2BSrdHEGknNlcC8707nZ3qoinlkvupxagWMnnjcP6aRk3%2FmhhRkwkPOtCYXDRHD5zQqNXeDFlu10781YoqHu74IiDxh4o%2BG98%2FGfZLmdmm%2BVdyGNMhDGMtHEJF9MtbYsRGlFR6rVZF%2Fbo7giSPwJJTpHRVN0rM9tZKXEe3qCuufyIr6dk%2FI1Di%2Ff4K4dD1cOGnTPr8TkCrOg8H3VPXbH%2FWGF34KUIkmYsCJAcnoHyPAkqUxlWnYmS%2BYdCMOupqJ7ZO7gIUA0kV9wjH%2FsrpGTmxgTR3wY3UsLwWLBXaDmIuEJObDVs44VahM2Ssw1PrlwwY6pgH5JT%2B8QBvGgYpzK9R0K31%2F1BEswdrD%2FEVcM1pyctSEV8H0OYhwG1SiJpkaS%2BNXykstY%2BD2WxgY6zJl9gSSPkwIeytqjYXDxfcTLcdP5Gjuwt9elPjYA58ac8PyS%2Bs5hvbBwW1PmdE83I5njDjs6jlw0yO%2BT86OJMap7X9jJg0r1ci25QtfSCK9RGywMGPk0pTw937DGBYL7zR%2Bwqvl5lTjPPjnITkk&X-Amz-Signature=49f23503edce9503874b207fbd12805b98527a8d9b06dc82f5fdf67b18a17f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OQZPEO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIC2YeXxiqevugbqh%2BhUXmRU3GD4N0jxdpEqThYJEgJ%2BDAiB72V9svaSwjtizJo%2FsrDIBcVRUel6woAz%2FZZQJU3rGHiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpINgIEzmXM8EA0EhKtwD45oxt%2BYez6EktFAqUuj5YTyvFCt9KPEn%2FmbDADYG7CidZKMtBt9iYaCqe3Fs5RKwrq%2FhAR9KkvPqZUuenLKHbpscPC6dtNzne6%2BYB%2BiPoz6GiEYAk2yDijsR8T6Bm%2BO1rlQibTk3hiPcwa3x6Yf5sc3LOkCX%2FE0%2B4MmjSEzaaKRjXlhd4UXBwS8c0KL0Q8JHOeImdY4bY9sONnCthZBv4bcCcREl5hMxxrWO2Sn46fZfYGQ2IbIlQQySkXaliwOdLmIq3B%2FDTP%2Funz7YBYbFWGxFQrLiccbyOgntsRqiQSIJ2rm1cJhj5FIPNvH66w7xkm%2BSrdHEGknNlcC8707nZ3qoinlkvupxagWMnnjcP6aRk3%2FmhhRkwkPOtCYXDRHD5zQqNXeDFlu10781YoqHu74IiDxh4o%2BG98%2FGfZLmdmm%2BVdyGNMhDGMtHEJF9MtbYsRGlFR6rVZF%2Fbo7giSPwJJTpHRVN0rM9tZKXEe3qCuufyIr6dk%2FI1Di%2Ff4K4dD1cOGnTPr8TkCrOg8H3VPXbH%2FWGF34KUIkmYsCJAcnoHyPAkqUxlWnYmS%2BYdCMOupqJ7ZO7gIUA0kV9wjH%2FsrpGTmxgTR3wY3UsLwWLBXaDmIuEJObDVs44VahM2Ssw1PrlwwY6pgH5JT%2B8QBvGgYpzK9R0K31%2F1BEswdrD%2FEVcM1pyctSEV8H0OYhwG1SiJpkaS%2BNXykstY%2BD2WxgY6zJl9gSSPkwIeytqjYXDxfcTLcdP5Gjuwt9elPjYA58ac8PyS%2Bs5hvbBwW1PmdE83I5njDjs6jlw0yO%2BT86OJMap7X9jJg0r1ci25QtfSCK9RGywMGPk0pTw937DGBYL7zR%2Bwqvl5lTjPPjnITkk&X-Amz-Signature=b5e5ce416b4bfa0d4a56aaf8fe9de42488a9721580dbd120f6c3212f26e4b2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
