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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWBWF3YB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrx64%2B78Zpi9b4UBh2jxV3qcUjnNbWFG1wJCvp%2FyfDtwIgTRt%2BBEdy%2BqoxWhhGqssOA%2BZmFUsxvvvXGQv0nQOjOVAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC1pvzyKpYTzrgcTCrcA4DV7VtHFVguwsHv%2FHE%2FkstQl0G56A7b7%2B0OwRzEaFob4R%2F0GUuLAeSl8yxdqIFH1Olt6SzpFa6VdIqw2i%2BhPjd04ZRNetwfNbiBBiMSH1xmbmHxeZUoEVy7iUQr%2FRlk5TZByUKEVilQuYDcSn1Z3TAJ43xcPjWIdM8J2pB94yBsnIHcvpeI5zxpOIxHUovl4IQHfbsXeHnjauMif3pdgGWAcpe2hOm2ko%2B%2B5m43VtrGU%2FtOexvLWFzGv3PbC%2FEnuQr1bmYlXPdehlwuPa6S72lcb%2BdU5BmYlg913CNMqFxOzpxYL8Ff5viIxHPd0MipNp2nNupo27HxmP3%2FVZUfAVkfTEiSqj4hA5TNMBlHkVGaabPzfEaPeLf0RdybfcFjZHq4boB9otPxdhpioACFgjj5e5FN6%2FYdwJJIi8oPF2qM%2F0eZ7%2BzV1JjUyzmQ5yE7akM%2FttyDPOZSF411Kvxgwres9xLoDunzdT0v7nJg2jM366Ej2p1bDROK9iFp4%2F%2FSsowYI63A84UiuBQAbU4s31KTi9t0HukdetHdzpcklm3godV26R6xPUhw5hGuF%2FkMdevNqRbTkUHFBddGKTOtlfTG1c1gIimOOcI8ZxD7vVv4O50vt%2BxDXCq%2BIJYOMJCKu74GOqUBmD1ztjtEO90VgFfdgh4k2oHwHtGMSI9ewefS%2BMaiOaBpd3JZ71nOJF8IXJecsrdDEXVtk2OXqAcYoZyXXkjgUOOAIQIy%2FjNs%2F%2BQ%2BNg4LUvU7So96sC4F85vI4XQJGENVMgjglaO0aTF8a94l%2BITWIV2d1WwByoOirZyk0ZZcY06va75O%2FRfVhDiAgy1l%2B8DXv2LbDebA4lugNR%2FyNFX89tsx24ZF&X-Amz-Signature=2fa4530c1ee57f7ee156d22553f287afd293c87dc3162c0f35054238bf865d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWBWF3YB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrx64%2B78Zpi9b4UBh2jxV3qcUjnNbWFG1wJCvp%2FyfDtwIgTRt%2BBEdy%2BqoxWhhGqssOA%2BZmFUsxvvvXGQv0nQOjOVAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC1pvzyKpYTzrgcTCrcA4DV7VtHFVguwsHv%2FHE%2FkstQl0G56A7b7%2B0OwRzEaFob4R%2F0GUuLAeSl8yxdqIFH1Olt6SzpFa6VdIqw2i%2BhPjd04ZRNetwfNbiBBiMSH1xmbmHxeZUoEVy7iUQr%2FRlk5TZByUKEVilQuYDcSn1Z3TAJ43xcPjWIdM8J2pB94yBsnIHcvpeI5zxpOIxHUovl4IQHfbsXeHnjauMif3pdgGWAcpe2hOm2ko%2B%2B5m43VtrGU%2FtOexvLWFzGv3PbC%2FEnuQr1bmYlXPdehlwuPa6S72lcb%2BdU5BmYlg913CNMqFxOzpxYL8Ff5viIxHPd0MipNp2nNupo27HxmP3%2FVZUfAVkfTEiSqj4hA5TNMBlHkVGaabPzfEaPeLf0RdybfcFjZHq4boB9otPxdhpioACFgjj5e5FN6%2FYdwJJIi8oPF2qM%2F0eZ7%2BzV1JjUyzmQ5yE7akM%2FttyDPOZSF411Kvxgwres9xLoDunzdT0v7nJg2jM366Ej2p1bDROK9iFp4%2F%2FSsowYI63A84UiuBQAbU4s31KTi9t0HukdetHdzpcklm3godV26R6xPUhw5hGuF%2FkMdevNqRbTkUHFBddGKTOtlfTG1c1gIimOOcI8ZxD7vVv4O50vt%2BxDXCq%2BIJYOMJCKu74GOqUBmD1ztjtEO90VgFfdgh4k2oHwHtGMSI9ewefS%2BMaiOaBpd3JZ71nOJF8IXJecsrdDEXVtk2OXqAcYoZyXXkjgUOOAIQIy%2FjNs%2F%2BQ%2BNg4LUvU7So96sC4F85vI4XQJGENVMgjglaO0aTF8a94l%2BITWIV2d1WwByoOirZyk0ZZcY06va75O%2FRfVhDiAgy1l%2B8DXv2LbDebA4lugNR%2FyNFX89tsx24ZF&X-Amz-Signature=de4b3ef93e69c3b42018e6382374b263704ea68d7b7c35d33660c42ec22f2be6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
