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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6ZXJSA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtVQczmRPCP9jqiVNGnf0RkbZXkbgbTmIrPcJDb6I2xwIgBnBuyeiIEXbSZJhdlb0DdQz7sQYFoT8gIZwNtrqZHUcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT344XNnEIjye173SrcA8sVZ6Pq%2BZQOO14CfW9EKc6mhH3Ax1fcKPJhjxEhGifLoguuHo6uy0JWSZqAJdrzUihLp%2FjdiPhLbPcmqy8cuqG4omby%2BBUxvJ391LyStPu3fXpOB3Z9E%2BTCBoP7AJr3ejR2YmEPiXuqJkGs60odj%2BI5fLEPqzp8h%2BRAWiXrXwvndxdEmYwmoV7fmAdfa6lf6vtZyj2rCG0wb5UjEZ4gtw63ws8BBIzCzME5V4FcO16t8KFgnPLiYgQWrFEH66Jmn8U%2FaIh9CV4yaFbTAxFCwvlBl5q7UDZ4sF%2Fq74WrlfDYKkGE3OtHSzo9%2FYrJ5ekceqlO2xMf2INixYvbmNjKhDVtKcjCpbIr%2BPgrck9RgLgyBx%2Fc9nsM8NhDf5AMApp7ueVuLPLBAQR6DP1k27qqw2JGzKBHbRJLBc5oQzSlV3Q27fkSXkzJoRiTQn4Wjo1YMAwY0qPfPX2FvSZI%2FzvT1dZHV6IbUe3DUoWMmNLpBJxs9Kx4yCxUD%2Ffh%2BO6tqBpjam9zUuzXSr6NiZNQIRg0I4IZmJ0aO5K4aWzMcTK3C5Ip1nmbvOtKH32KVY11P8o5kZ1J1FjfPsXCol9ILwPd1eCN%2B5QHdet4ZBZna4FpvTY%2BW0ZucvWTjVJICzgkMK%2FLnMIGOqUB1qqrr%2BMqi3FkGpRI7wu1RuRCb9Lrg9hPvIy65adukK2zmyKbibVLUgW3Dflv0q13%2F2zw61K9ngkdeil3rBD7FyyPkO7HKpCeO3HJbuTfgTGfshpsy4mLrPRmlpjVW5%2Frwunu0yWzKUsXO5Zxa8ISeLYFe%2BYQrYGjuRPbV6JNqJmHDjKJuGwAYXmae8iWAJCVzuQFFaqvGGesMFHUmDydwYTKD1vj&X-Amz-Signature=5ad3395f214323d8a064e3251145c4bbe7ca198e856be0f09022048675e4e33a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6ZXJSA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtVQczmRPCP9jqiVNGnf0RkbZXkbgbTmIrPcJDb6I2xwIgBnBuyeiIEXbSZJhdlb0DdQz7sQYFoT8gIZwNtrqZHUcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT344XNnEIjye173SrcA8sVZ6Pq%2BZQOO14CfW9EKc6mhH3Ax1fcKPJhjxEhGifLoguuHo6uy0JWSZqAJdrzUihLp%2FjdiPhLbPcmqy8cuqG4omby%2BBUxvJ391LyStPu3fXpOB3Z9E%2BTCBoP7AJr3ejR2YmEPiXuqJkGs60odj%2BI5fLEPqzp8h%2BRAWiXrXwvndxdEmYwmoV7fmAdfa6lf6vtZyj2rCG0wb5UjEZ4gtw63ws8BBIzCzME5V4FcO16t8KFgnPLiYgQWrFEH66Jmn8U%2FaIh9CV4yaFbTAxFCwvlBl5q7UDZ4sF%2Fq74WrlfDYKkGE3OtHSzo9%2FYrJ5ekceqlO2xMf2INixYvbmNjKhDVtKcjCpbIr%2BPgrck9RgLgyBx%2Fc9nsM8NhDf5AMApp7ueVuLPLBAQR6DP1k27qqw2JGzKBHbRJLBc5oQzSlV3Q27fkSXkzJoRiTQn4Wjo1YMAwY0qPfPX2FvSZI%2FzvT1dZHV6IbUe3DUoWMmNLpBJxs9Kx4yCxUD%2Ffh%2BO6tqBpjam9zUuzXSr6NiZNQIRg0I4IZmJ0aO5K4aWzMcTK3C5Ip1nmbvOtKH32KVY11P8o5kZ1J1FjfPsXCol9ILwPd1eCN%2B5QHdet4ZBZna4FpvTY%2BW0ZucvWTjVJICzgkMK%2FLnMIGOqUB1qqrr%2BMqi3FkGpRI7wu1RuRCb9Lrg9hPvIy65adukK2zmyKbibVLUgW3Dflv0q13%2F2zw61K9ngkdeil3rBD7FyyPkO7HKpCeO3HJbuTfgTGfshpsy4mLrPRmlpjVW5%2Frwunu0yWzKUsXO5Zxa8ISeLYFe%2BYQrYGjuRPbV6JNqJmHDjKJuGwAYXmae8iWAJCVzuQFFaqvGGesMFHUmDydwYTKD1vj&X-Amz-Signature=ac851b2500bb252fb0a290e8dc5a4fd71bedd132640fda9b1996bb34040814c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
