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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6T3N3RI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFsQV7rLrCjwB%2BKL8CR50bcI0TK50qt6t9hr3%2FM8oTU0AiB1vVCOtdFkHFZhaYZ4lduRuudHvqSK2Q8jubj0j3OMuSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMGDrBVr5KlJkZkebUKtwD72nut9Sao6sAMXHMa4pHLjOE1HVnoM9QQybTi6bvfwP4IlKbkWzZeLnZp0qnOyy0JfbIAgt4Tyd1VmNEUatO1jltuRIe4tycyQbeuaLMNgz%2B%2FbWghkAyFbAAyFTE5%2Bs4c4rp8B6VaBCxGaYaXpxnDQgGIPmHYrbijYdHtSWBpTWgAeFl8u%2B1DfqFRdfxVS3G1h5YtzAVzAvNCa4LtfPMT7qhtEcY4MGVz30LZeXvpUuxoQimlAF3CjjZdWLKj5lL3rzEEw9TF%2FcnwtHHcIACW%2FKrmOXocSxbesm%2Fc8yZVV6BwW%2FO9NS%2FQr%2BJSDiLa1KRbxrRIG4405IkrO6PlmbrMfTtncYzHtRuKy5W2Fe2iGjC8IP%2FeFL63z9o1mBmWnBcN4mE84VyBOaWcfgtJqERNuU%2FfjlBm6GzLY5FQ301yC99wyLyd7NXcTUA%2FfT5tR4decz7AmNic%2FUAPE%2Ft2YiYZAn0utAvWsl86GNsHfM%2FeGgPcSTpL2uAsYskqD46eEY0FNNdOeR4wFSZMWHPkZtBRtKKZG4V9lWqJylVGoAJGIbQLFrahyCtnxft%2FLMSP5Q%2F0qFpvGHk03%2Fo5%2B462DhfEBW6SemdVnKm91lfrlkFiqacYutl5ZsmXHm83TcwmY34vQY6pgEb7C59oicwHtD1CIhfizClojrrVgT4inIigxuOggNNgB1AHtmjzMxw3uKLe1w2E%2FVhgXPQtxDcicjcaOe%2B1GDwJHB%2FSDcvR3dUnBTQbAOB6yu4dJi1XMtKlwk561%2Fx5YydqtlXyKJq%2BDBBy22tgl%2BKBWrF9L50vSzhpm9g302cqOMescM6LmXchYNV0tvyDpowojOIZlOgEN1p%2BNq8BJcmc4G%2FLT%2B4&X-Amz-Signature=f46261162f2ceac10b2d94766fcb85b32e9e1a82b1b2dbcb2314f24bce06918e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6T3N3RI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFsQV7rLrCjwB%2BKL8CR50bcI0TK50qt6t9hr3%2FM8oTU0AiB1vVCOtdFkHFZhaYZ4lduRuudHvqSK2Q8jubj0j3OMuSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMGDrBVr5KlJkZkebUKtwD72nut9Sao6sAMXHMa4pHLjOE1HVnoM9QQybTi6bvfwP4IlKbkWzZeLnZp0qnOyy0JfbIAgt4Tyd1VmNEUatO1jltuRIe4tycyQbeuaLMNgz%2B%2FbWghkAyFbAAyFTE5%2Bs4c4rp8B6VaBCxGaYaXpxnDQgGIPmHYrbijYdHtSWBpTWgAeFl8u%2B1DfqFRdfxVS3G1h5YtzAVzAvNCa4LtfPMT7qhtEcY4MGVz30LZeXvpUuxoQimlAF3CjjZdWLKj5lL3rzEEw9TF%2FcnwtHHcIACW%2FKrmOXocSxbesm%2Fc8yZVV6BwW%2FO9NS%2FQr%2BJSDiLa1KRbxrRIG4405IkrO6PlmbrMfTtncYzHtRuKy5W2Fe2iGjC8IP%2FeFL63z9o1mBmWnBcN4mE84VyBOaWcfgtJqERNuU%2FfjlBm6GzLY5FQ301yC99wyLyd7NXcTUA%2FfT5tR4decz7AmNic%2FUAPE%2Ft2YiYZAn0utAvWsl86GNsHfM%2FeGgPcSTpL2uAsYskqD46eEY0FNNdOeR4wFSZMWHPkZtBRtKKZG4V9lWqJylVGoAJGIbQLFrahyCtnxft%2FLMSP5Q%2F0qFpvGHk03%2Fo5%2B462DhfEBW6SemdVnKm91lfrlkFiqacYutl5ZsmXHm83TcwmY34vQY6pgEb7C59oicwHtD1CIhfizClojrrVgT4inIigxuOggNNgB1AHtmjzMxw3uKLe1w2E%2FVhgXPQtxDcicjcaOe%2B1GDwJHB%2FSDcvR3dUnBTQbAOB6yu4dJi1XMtKlwk561%2Fx5YydqtlXyKJq%2BDBBy22tgl%2BKBWrF9L50vSzhpm9g302cqOMescM6LmXchYNV0tvyDpowojOIZlOgEN1p%2BNq8BJcmc4G%2FLT%2B4&X-Amz-Signature=f80d409e900a0754141e8c583ede2dafbdd39727d601b50a6905f5d8d83a702f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
