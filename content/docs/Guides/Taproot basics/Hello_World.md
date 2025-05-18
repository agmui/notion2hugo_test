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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDE5SQIL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSAVd7QJvnFrx1MHtUrumSYhqlgM8UUMU4XpLgDk2kXgIhALOHeywEJm6BgaOj7WsKTQaYP7lC4KfdESwavaOx6f%2F1Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzIZHBhymctBqqxeiQq3AOdBmSQmfCt6CG2DAZ2zEfFlMTMCA5elIjKpeJDmqNXl47%2BQXjiaPDgIONUw3WTAkWBWA77SFF%2BchFYPEAmahDZcQqtygNRi1qmWa8TKEUssUfljazyIJfQoTvg4tK84cSoAqWJwpimggR15fUMY1lbm8jKK7XDxa92MzvK0NFiX6z%2Fptbi9ZDTXLq3dJH3DEpyx98nXb%2BgO6sgXwLc%2FB481GPSGoQLfXiPhuD6NceRmBtGWAxDHe1UF0xRGKCcpaKA4QxonB9p94rTZjwFkoF2ABq1%2BnRTCcW69ahFE5nJ98m%2FgU%2B4m9qF1GxrPAIOtFPNeVQXjAJq%2BsbCjpxhAbhliYyMEZKfh3G6jq28RUfxRZNRmz0vTXfTi1kNI9w9EHwPuaCIvOvxc1tl%2BX7ydRnF8cfvffo8AlgYkmw11mS%2FqzBuV3qVMM14lrnbgiapGuGM3cpoWQmRdfL21yE1PJ47GwAPl1MHyq2wPcFdHo0LkNMIJZOA44UvMMP%2BFtiVEboTGMh%2Bjz09md%2BBJeOY%2F1HvTvjPHRq5ZiGnBclR4%2FbrFHjEDsGUdAVochW8cYswL192tkOlmO8axY98mwJDpjT7O%2FLsK0VyGPFpBcOeBrrwA0xf34Rpd2FwVCCHrTDj5qjBBjqkAYw84WhDm8QVMZIIqJYqZfOkuM1J2CciGcTi7j65lx%2FO4d07mKIo1c4Gb%2FXFQzaunO3U5iBczIFnrZhZG21bAarZMBurnJ3SmwK%2BkD%2FND6ohi4ILOgNQMATq%2BMnk%2B9FMzz%2FIqlxeD5yFAvG9Do4ij8y7thjP5VpLKbk14s2mXw3EOBfo%2Bme5gP4yfXKBthE81UdMR0IlUZ158XgUVRSrn4HcyDD7&X-Amz-Signature=83431e5c2ec79c111d9c2f2c27fe9d82f38f61b87d84c687390fbf9febb3cfab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDE5SQIL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSAVd7QJvnFrx1MHtUrumSYhqlgM8UUMU4XpLgDk2kXgIhALOHeywEJm6BgaOj7WsKTQaYP7lC4KfdESwavaOx6f%2F1Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzIZHBhymctBqqxeiQq3AOdBmSQmfCt6CG2DAZ2zEfFlMTMCA5elIjKpeJDmqNXl47%2BQXjiaPDgIONUw3WTAkWBWA77SFF%2BchFYPEAmahDZcQqtygNRi1qmWa8TKEUssUfljazyIJfQoTvg4tK84cSoAqWJwpimggR15fUMY1lbm8jKK7XDxa92MzvK0NFiX6z%2Fptbi9ZDTXLq3dJH3DEpyx98nXb%2BgO6sgXwLc%2FB481GPSGoQLfXiPhuD6NceRmBtGWAxDHe1UF0xRGKCcpaKA4QxonB9p94rTZjwFkoF2ABq1%2BnRTCcW69ahFE5nJ98m%2FgU%2B4m9qF1GxrPAIOtFPNeVQXjAJq%2BsbCjpxhAbhliYyMEZKfh3G6jq28RUfxRZNRmz0vTXfTi1kNI9w9EHwPuaCIvOvxc1tl%2BX7ydRnF8cfvffo8AlgYkmw11mS%2FqzBuV3qVMM14lrnbgiapGuGM3cpoWQmRdfL21yE1PJ47GwAPl1MHyq2wPcFdHo0LkNMIJZOA44UvMMP%2BFtiVEboTGMh%2Bjz09md%2BBJeOY%2F1HvTvjPHRq5ZiGnBclR4%2FbrFHjEDsGUdAVochW8cYswL192tkOlmO8axY98mwJDpjT7O%2FLsK0VyGPFpBcOeBrrwA0xf34Rpd2FwVCCHrTDj5qjBBjqkAYw84WhDm8QVMZIIqJYqZfOkuM1J2CciGcTi7j65lx%2FO4d07mKIo1c4Gb%2FXFQzaunO3U5iBczIFnrZhZG21bAarZMBurnJ3SmwK%2BkD%2FND6ohi4ILOgNQMATq%2BMnk%2B9FMzz%2FIqlxeD5yFAvG9Do4ij8y7thjP5VpLKbk14s2mXw3EOBfo%2Bme5gP4yfXKBthE81UdMR0IlUZ158XgUVRSrn4HcyDD7&X-Amz-Signature=77409799f4d6c5e15f09fc5cb2156def2fc0c4c99513099581237012dc33ce46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
