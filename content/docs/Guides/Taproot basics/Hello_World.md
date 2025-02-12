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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7CHSXW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFs%2FxJeT8zA960ni9ax%2BNdTCE%2FQPj6z0IEdwvGXFi8BAAiBoiWmmXJQhI%2FuKE55c92dt7C0upNLpj5E17VZXHNOeoCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNvB5AB5qdZVtw8eKtwDXensU6%2BUND9oGKdwFVrLywaI0a%2B1XTIbg%2FB7mpU0gN0xf86796HjbAgMynPxFNyKV1dPHF2sCTUtjBR5Vqdz0V8PlcxQvMeH96xvVaLbfmk0aDepKXTvmCVZv%2BwioBQfQI9LuU8xh3lUk3FF4E9ME2J9C3E%2FMntTSt6mK5mcsr%2FG1pOgqfZ86VI2uBKrvW5jWQkbs7va8LkUA8KGMmZS0xuUT5wGxo3nNKzP20IRXnk%2Bid%2B3ABscYgsCtZoaTM7jCztF8vP4EnBQ9%2FOXtPDL3ANIF6ABMu931SpCafAs6ZUJnf%2B8d5nqHPjf5FMs9OnxwmCGz1huenIIEBnWqOshk%2Bs1WsBbSPtOscSqkw14FDkUI%2FRj1KrbBW9h8SMl6Td1QBVff2zp4gq8u0uDlNGhs2ppT5wkQ3yFwkgdRzQfBCsZEtDPp4LECf8Ryx7bc4anxR%2FLeWDYonwSUONK4ciPgRgngYBsYS5pHVgPzuk9y0ZAPIDZRH349ylH4tOzg1yDutST4lI3AKE6zPSS%2Ffsh0CDAmKse4oIzFbv2vDER6AX4N4EAaRKeMcq6eGN5GgrFXm%2F8OF8w8fFO1FEjBW2Jk7%2BuLGBArmCGNECont7mdBHtSLiv3hY0RYzVQyowrciuvQY6pgF9L0tiiNW%2Fmtsh8itLgi%2BYMhdl7%2BMFtB738cEB7kWA%2FO6IP8qFjz0oLo6%2FCBt0wdCQoIQkyQorPtmgcAewZi%2FpLo4OOv9hbhtSnxhIeTa7yWrm%2BvUrK7QZhdhIaE3N%2FugT6CPVZEGvlRU%2B70GEUcl8QBGlksZ8BBNnjXi3nuoteJNuBE0xd6oy%2BrIi28OokdYAm%2Fe9TRD5OSwC31KLiKZR%2F2ydScnm&X-Amz-Signature=847dcdf6b972e16567ea1a699b8dc541eb92e6e85c49e53a84a00dc10f798549&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7CHSXW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFs%2FxJeT8zA960ni9ax%2BNdTCE%2FQPj6z0IEdwvGXFi8BAAiBoiWmmXJQhI%2FuKE55c92dt7C0upNLpj5E17VZXHNOeoCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNvB5AB5qdZVtw8eKtwDXensU6%2BUND9oGKdwFVrLywaI0a%2B1XTIbg%2FB7mpU0gN0xf86796HjbAgMynPxFNyKV1dPHF2sCTUtjBR5Vqdz0V8PlcxQvMeH96xvVaLbfmk0aDepKXTvmCVZv%2BwioBQfQI9LuU8xh3lUk3FF4E9ME2J9C3E%2FMntTSt6mK5mcsr%2FG1pOgqfZ86VI2uBKrvW5jWQkbs7va8LkUA8KGMmZS0xuUT5wGxo3nNKzP20IRXnk%2Bid%2B3ABscYgsCtZoaTM7jCztF8vP4EnBQ9%2FOXtPDL3ANIF6ABMu931SpCafAs6ZUJnf%2B8d5nqHPjf5FMs9OnxwmCGz1huenIIEBnWqOshk%2Bs1WsBbSPtOscSqkw14FDkUI%2FRj1KrbBW9h8SMl6Td1QBVff2zp4gq8u0uDlNGhs2ppT5wkQ3yFwkgdRzQfBCsZEtDPp4LECf8Ryx7bc4anxR%2FLeWDYonwSUONK4ciPgRgngYBsYS5pHVgPzuk9y0ZAPIDZRH349ylH4tOzg1yDutST4lI3AKE6zPSS%2Ffsh0CDAmKse4oIzFbv2vDER6AX4N4EAaRKeMcq6eGN5GgrFXm%2F8OF8w8fFO1FEjBW2Jk7%2BuLGBArmCGNECont7mdBHtSLiv3hY0RYzVQyowrciuvQY6pgF9L0tiiNW%2Fmtsh8itLgi%2BYMhdl7%2BMFtB738cEB7kWA%2FO6IP8qFjz0oLo6%2FCBt0wdCQoIQkyQorPtmgcAewZi%2FpLo4OOv9hbhtSnxhIeTa7yWrm%2BvUrK7QZhdhIaE3N%2FugT6CPVZEGvlRU%2B70GEUcl8QBGlksZ8BBNnjXi3nuoteJNuBE0xd6oy%2BrIi28OokdYAm%2Fe9TRD5OSwC31KLiKZR%2F2ydScnm&X-Amz-Signature=b70cddf059a919ba7b97eb38c85009d55247dc8e3dc163719e85d34517f16e69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
