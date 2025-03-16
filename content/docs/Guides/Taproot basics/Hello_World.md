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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEKSNUL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rTdFiRFMEN3Yfu7N8oslqOywzMGCpxcWMIcHtq2begIhAKBnO%2BuEKKOkxZPBcNDalbXZmvNz4jh9N%2F2QxJO8N7qoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwoRqXLo7KmIn3Nzfsq3APck%2BxnHDQy9qvvpnCxYIqeMjrQH%2BrTgkoPAuEgt8cWnndTTCaQM0GDhsCNER4dK2xyeOnqnTkp6IFvEVqKY9A7KffACvWCPrt1u8TonLEe3zWgEZew6Z0YPGGNomF01Itr%2BJEi5UD1jNMOqT%2Fu%2FWyTFrWkL%2BIIHAagUT3pngi%2FqhP%2B42g56uy%2B%2FbMOy2lyqZ3Is3bZPnaAL8azUaKpGk0kM0%2FQ9fzdpmOPcP%2BJ86wSEC5qE%2F7LQRWMBbMDiv5dAlZhjxg%2BWL7RNSiZXVjQffRZ1dUsXjpaRA2Ut356XgNc%2FeqEiUxuF2uqBS90lpi9Uqfe7Zue6eiDEmnaKBYmYdukgfLrbll8nBElPKi5uCySnB2%2BIQHSFON9edHY%2FcdWRB5pU1kFmGmXz0Kc4f1hMpmdVmp%2FqqYwRrr8MDCbylyTCX1DDcRWeUJofiyj3q8CcoIkkoQ9bN2gZ8w6Bu8IN%2BAzHUs4TbHSUdqPoGOjQnjpiAey6hXmQ9sHVsB%2F%2BEdsHNKIzX9s3LrJP%2FEPoDfGveBxf3211PFY18C3%2Fb2257BF5hjuSmbtuD1j%2FaOdznDTS6Wnvs70t9yv3G5mqT5e2Gs90Z0QvNut5e2TPzEX1o4rDTT7Y3O25wFwpPvxNjCmrtu%2BBjqkAfBzt68GrCcOrsy1NqDEixSFynAn%2FhQ%2BL4ifiLBzU7JipAF6s7gSAMo4cJ3TgJJQtRg9h5tTt5hJaJ4YaQUPeCB7q%2FexxOUIc8NRVv7IKNWzBOVPKJdZ0VeB%2Bp4PHkRxr2Xnn5LZzwDZxaiEyekHuysGfX%2FC3txsZ3ZGiNJzL2OE6CDDimbhlIWKP5Fge1IHgALJ1IUs3eD2RltkZbRObfRx8N6d&X-Amz-Signature=9137b971c12dbbdbf12efd63aa88a4cfc326f025496cb0b66490a8661ed148e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEKSNUL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rTdFiRFMEN3Yfu7N8oslqOywzMGCpxcWMIcHtq2begIhAKBnO%2BuEKKOkxZPBcNDalbXZmvNz4jh9N%2F2QxJO8N7qoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwoRqXLo7KmIn3Nzfsq3APck%2BxnHDQy9qvvpnCxYIqeMjrQH%2BrTgkoPAuEgt8cWnndTTCaQM0GDhsCNER4dK2xyeOnqnTkp6IFvEVqKY9A7KffACvWCPrt1u8TonLEe3zWgEZew6Z0YPGGNomF01Itr%2BJEi5UD1jNMOqT%2Fu%2FWyTFrWkL%2BIIHAagUT3pngi%2FqhP%2B42g56uy%2B%2FbMOy2lyqZ3Is3bZPnaAL8azUaKpGk0kM0%2FQ9fzdpmOPcP%2BJ86wSEC5qE%2F7LQRWMBbMDiv5dAlZhjxg%2BWL7RNSiZXVjQffRZ1dUsXjpaRA2Ut356XgNc%2FeqEiUxuF2uqBS90lpi9Uqfe7Zue6eiDEmnaKBYmYdukgfLrbll8nBElPKi5uCySnB2%2BIQHSFON9edHY%2FcdWRB5pU1kFmGmXz0Kc4f1hMpmdVmp%2FqqYwRrr8MDCbylyTCX1DDcRWeUJofiyj3q8CcoIkkoQ9bN2gZ8w6Bu8IN%2BAzHUs4TbHSUdqPoGOjQnjpiAey6hXmQ9sHVsB%2F%2BEdsHNKIzX9s3LrJP%2FEPoDfGveBxf3211PFY18C3%2Fb2257BF5hjuSmbtuD1j%2FaOdznDTS6Wnvs70t9yv3G5mqT5e2Gs90Z0QvNut5e2TPzEX1o4rDTT7Y3O25wFwpPvxNjCmrtu%2BBjqkAfBzt68GrCcOrsy1NqDEixSFynAn%2FhQ%2BL4ifiLBzU7JipAF6s7gSAMo4cJ3TgJJQtRg9h5tTt5hJaJ4YaQUPeCB7q%2FexxOUIc8NRVv7IKNWzBOVPKJdZ0VeB%2Bp4PHkRxr2Xnn5LZzwDZxaiEyekHuysGfX%2FC3txsZ3ZGiNJzL2OE6CDDimbhlIWKP5Fge1IHgALJ1IUs3eD2RltkZbRObfRx8N6d&X-Amz-Signature=d19adc6cb53b13b5f6b38b06535267765e4db030cc5be98be4e6c2977bdaa97f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
