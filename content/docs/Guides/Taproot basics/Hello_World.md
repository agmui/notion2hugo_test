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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP34OYLY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGw5k0StuQ%2BcdtjMEOXgh9W89EMEa044KbFBOS4Nc4OLAiEAmaUjUwcRl2oet%2BhfD%2BaUF0aZRaHjRm%2BJSKZKcZpFOSQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJ26%2BMXus2h0UdagvyrcA8X%2Fg1G%2BMioHXyVTwYcLhOZIzUyX5PzQbGIU%2BuiuzG4un2wEbwqKjHcxo8RwW5Lf%2BQ2KGO%2BayaV1QT7J6aQj4Qqy6gv2fWnZjHhGU1ceOBn%2BuzTmFY5oPYsW4dOzGATSTMFvO7sro%2BWIMsWCIJ9jocfAiY1skjckMlbcflQMlA9%2F1o8cvt8ModAPM6pH0Obn3fmG2VLBT8esq3OLMyMoYflJ4Cxpc7qFGsUvw8UEWrsYDTyjiu%2FGM4r8guPatG0odUOVWnGZqaxs9QuVa1P3SdBGMzv4S0nQ9ofCS5UShh3AqBP9dmrSjNq8BH16JtczcCce9a75DbbaWovSo%2BS%2Bkp5C8R0yVZWTwSJSpA6luCxak%2BykohZl2AMB%2Bwkafh0srCYP%2FK8D0UH10bwL1cown05JH4vWS9SGGPKtePjO9pBbb48772yG80WrCnGTFJznJpXKIOj2XUKBdbbs6kdI1W1WINcA5L2K8%2BkapCyBT3sU9OI%2BVt5cDXMc3%2FRG%2BzoiFljuq17oA2duO1Rb1PvZtMM%2Frpim5CPn4ABOHPjhZQsKWwUIgij27JF62naoTDhMWwNVVMUeee9UkOub6U1DwzxOyOyk34F3caXlxZk7dS41obhEevNuohxjBtd2MJPMg70GOqUBbN%2FfWDrVf%2FixvjDKk6MlxVr1b0%2Fy6U%2BSleF8JdJGCnaMqVuVnN%2Bpy0VLIdTd4SJOQqxLzKyCWd5RymZjlMwXuFCXLVEznXmWIY3PCjIGWVopgSh6JFzTPVoJYj%2BIXgiMJG81jwxVWU1KzTgcsj2dn0V97XNOtWXFJ%2F8xaKZ0XKQMC1HlHfup0MM5V8TZf8uYQ6tRTe0sapgFoy%2FTd%2FYPkoK12M8e&X-Amz-Signature=05f3c7564433b00547dc7f93fcf4dd85bb0de6d3d28716a3e04b881171a6d21d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP34OYLY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGw5k0StuQ%2BcdtjMEOXgh9W89EMEa044KbFBOS4Nc4OLAiEAmaUjUwcRl2oet%2BhfD%2BaUF0aZRaHjRm%2BJSKZKcZpFOSQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJ26%2BMXus2h0UdagvyrcA8X%2Fg1G%2BMioHXyVTwYcLhOZIzUyX5PzQbGIU%2BuiuzG4un2wEbwqKjHcxo8RwW5Lf%2BQ2KGO%2BayaV1QT7J6aQj4Qqy6gv2fWnZjHhGU1ceOBn%2BuzTmFY5oPYsW4dOzGATSTMFvO7sro%2BWIMsWCIJ9jocfAiY1skjckMlbcflQMlA9%2F1o8cvt8ModAPM6pH0Obn3fmG2VLBT8esq3OLMyMoYflJ4Cxpc7qFGsUvw8UEWrsYDTyjiu%2FGM4r8guPatG0odUOVWnGZqaxs9QuVa1P3SdBGMzv4S0nQ9ofCS5UShh3AqBP9dmrSjNq8BH16JtczcCce9a75DbbaWovSo%2BS%2Bkp5C8R0yVZWTwSJSpA6luCxak%2BykohZl2AMB%2Bwkafh0srCYP%2FK8D0UH10bwL1cown05JH4vWS9SGGPKtePjO9pBbb48772yG80WrCnGTFJznJpXKIOj2XUKBdbbs6kdI1W1WINcA5L2K8%2BkapCyBT3sU9OI%2BVt5cDXMc3%2FRG%2BzoiFljuq17oA2duO1Rb1PvZtMM%2Frpim5CPn4ABOHPjhZQsKWwUIgij27JF62naoTDhMWwNVVMUeee9UkOub6U1DwzxOyOyk34F3caXlxZk7dS41obhEevNuohxjBtd2MJPMg70GOqUBbN%2FfWDrVf%2FixvjDKk6MlxVr1b0%2Fy6U%2BSleF8JdJGCnaMqVuVnN%2Bpy0VLIdTd4SJOQqxLzKyCWd5RymZjlMwXuFCXLVEznXmWIY3PCjIGWVopgSh6JFzTPVoJYj%2BIXgiMJG81jwxVWU1KzTgcsj2dn0V97XNOtWXFJ%2F8xaKZ0XKQMC1HlHfup0MM5V8TZf8uYQ6tRTe0sapgFoy%2FTd%2FYPkoK12M8e&X-Amz-Signature=33688d79f55b440048934614db2c18133cd978aefcfe8c8e3cbeea8fd4ab60d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
