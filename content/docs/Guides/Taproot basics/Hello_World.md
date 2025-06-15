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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SOVMZH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDgK5%2BbEtwmTeKZMZoFuwBeGcs1iw7IN0ZeOIZAJGBIJAiEA1FP3UbmR0%2B5BQV0b5TwzO0x7nQVURvAuB6ND5Kv%2FoIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNYlcZVbEQPa%2FkUq8CrcA72MvSUTRIcuMGG4w7x0yGAlpAESc3YZBX8c8%2FJe7kz7s8sioGh7EBy%2FxjVAnrhYvj23B73cZxM81UpX32%2BU6HSym231yXTG6AZtzG6%2BnxfSlQOuar2CGo4uuHaoksY%2BJGJN3tNy0Tq248OWVVRueykHVYDmgpBjBQOWBeo3LoBoYRxyRQTY9SdzN4aqxxnoH1g9fh5MepnsVkXp55XtHVdFtfv%2FWJMB0hcCiUD9Mx09HOL%2FKiy1a8d%2BKvd5xxp8rOmtJpgfHjmsNwmYbDTtnsfw7AwGAFxkhwZicP%2F%2Fmwbplskn%2BLFWMqh1FTaam%2FDgb2IcInf5DRsf1NNCJ71CMujfJPDfbAA5cldHsU8bR%2BB0rs5y6RSXUj8DX7rgxn56HCAdgePEon76myvh25xjsUgvLYHvbxCJ4rmaAmzfoBMWTsQDnU89ugflk2lq%2BQ4b6ZrBfxWqxeVQDRcLSt2GWviQs9MOu1%2FJDSdpReKyx%2Bj2s6GtpWHHHVWHelATHFhxhn3PG%2Fenj52URgZI61zUHEo1geHLdl0uxp%2BSKWZxMOGIw7ggyMyz3pEG837AR%2B8Mkx57RNPa5zlBjj6F%2BvStgEMJu9A0vGSiptB%2FDToxJxPQSlgdfRW4DDg%2FLrBiMP%2F%2BuMIGOqUBN4Cw%2BMqvscna%2BkdqQ%2BAvqcEagankJIrIRODd70m3u5Wxp3LFFaVhhQwjK33ZjAISBRBQTsrJZ9piHsxGwedjcVqiDRjp5S43h4dsXcJXmJfCZF4RGRcbsBYY4Eoe3xgVEsDIhtDGHZAfWxKEJiLEOPC7OizRoYFJJmY%2Fsh%2FXuVixLwrvI8ED4NbV0GEooD%2FF2SO5zrfT1dPdi%2FV95gA1ce9U11TH&X-Amz-Signature=5d02f11fe706e7df8f640abbced1abaf4fb6bca593484659afbdbd8bfa5ca724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SOVMZH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDgK5%2BbEtwmTeKZMZoFuwBeGcs1iw7IN0ZeOIZAJGBIJAiEA1FP3UbmR0%2B5BQV0b5TwzO0x7nQVURvAuB6ND5Kv%2FoIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNYlcZVbEQPa%2FkUq8CrcA72MvSUTRIcuMGG4w7x0yGAlpAESc3YZBX8c8%2FJe7kz7s8sioGh7EBy%2FxjVAnrhYvj23B73cZxM81UpX32%2BU6HSym231yXTG6AZtzG6%2BnxfSlQOuar2CGo4uuHaoksY%2BJGJN3tNy0Tq248OWVVRueykHVYDmgpBjBQOWBeo3LoBoYRxyRQTY9SdzN4aqxxnoH1g9fh5MepnsVkXp55XtHVdFtfv%2FWJMB0hcCiUD9Mx09HOL%2FKiy1a8d%2BKvd5xxp8rOmtJpgfHjmsNwmYbDTtnsfw7AwGAFxkhwZicP%2F%2Fmwbplskn%2BLFWMqh1FTaam%2FDgb2IcInf5DRsf1NNCJ71CMujfJPDfbAA5cldHsU8bR%2BB0rs5y6RSXUj8DX7rgxn56HCAdgePEon76myvh25xjsUgvLYHvbxCJ4rmaAmzfoBMWTsQDnU89ugflk2lq%2BQ4b6ZrBfxWqxeVQDRcLSt2GWviQs9MOu1%2FJDSdpReKyx%2Bj2s6GtpWHHHVWHelATHFhxhn3PG%2Fenj52URgZI61zUHEo1geHLdl0uxp%2BSKWZxMOGIw7ggyMyz3pEG837AR%2B8Mkx57RNPa5zlBjj6F%2BvStgEMJu9A0vGSiptB%2FDToxJxPQSlgdfRW4DDg%2FLrBiMP%2F%2BuMIGOqUBN4Cw%2BMqvscna%2BkdqQ%2BAvqcEagankJIrIRODd70m3u5Wxp3LFFaVhhQwjK33ZjAISBRBQTsrJZ9piHsxGwedjcVqiDRjp5S43h4dsXcJXmJfCZF4RGRcbsBYY4Eoe3xgVEsDIhtDGHZAfWxKEJiLEOPC7OizRoYFJJmY%2Fsh%2FXuVixLwrvI8ED4NbV0GEooD%2FF2SO5zrfT1dPdi%2FV95gA1ce9U11TH&X-Amz-Signature=5db00af995a02e01b72539cf4b4cffd895d5c922765fb122ff1f4a96c3276abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
