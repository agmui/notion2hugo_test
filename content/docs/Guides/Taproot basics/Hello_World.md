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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665INZEPGX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC68k%2FDEX7r8bEpUiCDyQ3HGS0DlEAMNYdm1MhH8ipPOgIgfxuwdDMmEiV8WkqFhR3pAECjcjCOpTdMArEqBDbKDMoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNINU%2FcYeO4FhOWPRircA%2FVLm8kjOzChrQ3z25xtg7pEsqlJjtQikSw1mOH%2FMT4EdbzDjNpgFyi39AuEmaCK6TBz52lAygEVQkL7MMK1%2FhJHsqbp6tOEDtmi9G0PwMvlH2PHrSXp42YpFLxlZrUyXwoJtqJbHCi%2BS5Cz5bVn5Q1nYVrBm%2Bmz4qXXQRwQB6aip4TqN7HOdCZCCIEWsIUpjYg0jhTKsSoL%2BbLuDb0%2FJsYJNnLVrfJKKMEa3hJCstWxRErMNjlkx4qXQznBC6Xre45ucT%2BpkWx5j8kEKsMqNl6Z8bqG6Qml%2F92IRaOqo%2FXGam4TyHteK0xiNrRiAXzawgeuGeLUJ%2BGfAwY9Wx0RyR5tij4xo30YvHewveKNK0myX3anu3IPPSt8J2gZuBzlV2jZ0QcPiLaNHcVLgPHrLC9yo90FW9ORnLscy8K8dyJZwNpIebaOPvNUtPbZQE8xF9Fn2ucgJqSwSrnY9TpNFKlbtGgMRqdhNSB4KYbip5ezMcA6q8cFTt20G4egegETr%2BEZVo8snIeFzdC96JyQr6IX08dQl2gkK9EM%2B7CcvoDTDFL9JfjsNyFVLW%2BC5uwvSeagTLt7cekmpPH%2BEJ83Iiwv05qOYB6ELiiOp9L79oXGXhnm1G84EGajBTf5MN2u8r8GOqUBHs0JVk2NSSg%2FBxsMy53GgeycSS19lnY4Jqdfqb3Wwjfae7IDVSRkWl5xhaF57f4%2FuSASye0IwXzbtKPZQAYrhj82JnIUV0PzIBt%2BZlNuzUEMr6Gpg6qlqUOMZodo9xJwGw0Xf52u1qWlVwGG1WIftIfUFGBpEaNU9A50R8I2FLlikWRU06u8rcyUJsopLokw69tIzuAZgxthflyaKac%2B2HcFOwn8&X-Amz-Signature=f25b65cef54e52eb1406a3beef74cd7f62c96382e97b8c2bb49aab5d3e7a7ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665INZEPGX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC68k%2FDEX7r8bEpUiCDyQ3HGS0DlEAMNYdm1MhH8ipPOgIgfxuwdDMmEiV8WkqFhR3pAECjcjCOpTdMArEqBDbKDMoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNINU%2FcYeO4FhOWPRircA%2FVLm8kjOzChrQ3z25xtg7pEsqlJjtQikSw1mOH%2FMT4EdbzDjNpgFyi39AuEmaCK6TBz52lAygEVQkL7MMK1%2FhJHsqbp6tOEDtmi9G0PwMvlH2PHrSXp42YpFLxlZrUyXwoJtqJbHCi%2BS5Cz5bVn5Q1nYVrBm%2Bmz4qXXQRwQB6aip4TqN7HOdCZCCIEWsIUpjYg0jhTKsSoL%2BbLuDb0%2FJsYJNnLVrfJKKMEa3hJCstWxRErMNjlkx4qXQznBC6Xre45ucT%2BpkWx5j8kEKsMqNl6Z8bqG6Qml%2F92IRaOqo%2FXGam4TyHteK0xiNrRiAXzawgeuGeLUJ%2BGfAwY9Wx0RyR5tij4xo30YvHewveKNK0myX3anu3IPPSt8J2gZuBzlV2jZ0QcPiLaNHcVLgPHrLC9yo90FW9ORnLscy8K8dyJZwNpIebaOPvNUtPbZQE8xF9Fn2ucgJqSwSrnY9TpNFKlbtGgMRqdhNSB4KYbip5ezMcA6q8cFTt20G4egegETr%2BEZVo8snIeFzdC96JyQr6IX08dQl2gkK9EM%2B7CcvoDTDFL9JfjsNyFVLW%2BC5uwvSeagTLt7cekmpPH%2BEJ83Iiwv05qOYB6ELiiOp9L79oXGXhnm1G84EGajBTf5MN2u8r8GOqUBHs0JVk2NSSg%2FBxsMy53GgeycSS19lnY4Jqdfqb3Wwjfae7IDVSRkWl5xhaF57f4%2FuSASye0IwXzbtKPZQAYrhj82JnIUV0PzIBt%2BZlNuzUEMr6Gpg6qlqUOMZodo9xJwGw0Xf52u1qWlVwGG1WIftIfUFGBpEaNU9A50R8I2FLlikWRU06u8rcyUJsopLokw69tIzuAZgxthflyaKac%2B2HcFOwn8&X-Amz-Signature=906702f028eafc45df71d147ca825c4c9d2f96b9179dd0116551ae3d64dc7a88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
