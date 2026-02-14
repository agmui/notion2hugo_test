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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRNE6EW%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0GcKXKOXYGip%2BXAfwOO1YCHV5P1QeRwKAW%2FF6qCi3RgIhALTEki9Y0Gw1yb9m%2B7emmIEXaf4mcYpJNhJFqbklW4XdKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5pzBHCi4zDeWGVoQq3AOddQm7YQrFPJ98axFJLgWWS%2FqK%2BUw5Lz6yOaNtCVkvh%2BMiW%2Fr4miObU4vjBE9yDExJTGmtsAcCpjFXv3D6HCyrmhPjMImwMBQu1JyOy0eLPVonByq1EWm3o93BncBQJIiGlf4%2BgvqZxi6YAPAxXF7ubRNJUAIj%2BOcrTGvcSMk4PZ5AGf35e9w5GP9W%2BU1CDh7KieWXOUhhp0DyD9Gw5fMDkvBHuPcbztQzFY1LAKsYrVDh2NxdAjC9EgOx0lzvsYI130qFgCBm9duy%2BTof4aCEPs0b1Nx06jDc146eug4Jv8IH8LPcNax5SCStfmef%2F3rS6nAzrUNGhsL26rRHfhk%2F8EfDYjKJQf3hQ0yGdqD%2BxCcCuaT908QxLzQKpPMLCmim9BPrN2Bi1OoeEkPpWq9lXMhzhLbOH5eFFYHKrKCbJyLochIeSDtzseom072xQqXELTO9xPsTuGBPl2fLgWb0g7eHoqeaunyBoqf3vv1ydr%2BHEyXScpun47Cunlw35yt3cTcB9ywZMdjh6ThUJ%2FUHyhQCkcDzCpkDLPywe%2Ba5Jlr3BO0q8DylQWePflPFP4IUKAcEl%2FDKr%2Bo6GXQHRds8og81MBXwXS%2BkUNhUWPJjdK5BRrF28juz25TSWDCCk7%2FMBjqkAYA6opxxG3A%2FdNuhOSzsGJj6QYt5eaiEdp2HjDZTOUThshTl9uZQRC3Fg2Hw%2FzhrU%2FbbmCF52VdBnDfpdpNP8Dpngl2CQHnccFaMQPKshj%2FoSZT%2FKZtf8oA5H54OP7cGeZQRG5w5xv5WxouccDR9Xv5Ej6uxtBb8VZY%2F%2FE8nbRT0m1%2F%2BU%2FqnT2P4oWkzyOGKNdmvd57YldI3cjN%2BbzbVL5XtPOn9&X-Amz-Signature=a26caaf13ffebe625a5ecc2cec94a2dacf457051d19670b6b2c48fc53d9d077f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRNE6EW%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0GcKXKOXYGip%2BXAfwOO1YCHV5P1QeRwKAW%2FF6qCi3RgIhALTEki9Y0Gw1yb9m%2B7emmIEXaf4mcYpJNhJFqbklW4XdKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5pzBHCi4zDeWGVoQq3AOddQm7YQrFPJ98axFJLgWWS%2FqK%2BUw5Lz6yOaNtCVkvh%2BMiW%2Fr4miObU4vjBE9yDExJTGmtsAcCpjFXv3D6HCyrmhPjMImwMBQu1JyOy0eLPVonByq1EWm3o93BncBQJIiGlf4%2BgvqZxi6YAPAxXF7ubRNJUAIj%2BOcrTGvcSMk4PZ5AGf35e9w5GP9W%2BU1CDh7KieWXOUhhp0DyD9Gw5fMDkvBHuPcbztQzFY1LAKsYrVDh2NxdAjC9EgOx0lzvsYI130qFgCBm9duy%2BTof4aCEPs0b1Nx06jDc146eug4Jv8IH8LPcNax5SCStfmef%2F3rS6nAzrUNGhsL26rRHfhk%2F8EfDYjKJQf3hQ0yGdqD%2BxCcCuaT908QxLzQKpPMLCmim9BPrN2Bi1OoeEkPpWq9lXMhzhLbOH5eFFYHKrKCbJyLochIeSDtzseom072xQqXELTO9xPsTuGBPl2fLgWb0g7eHoqeaunyBoqf3vv1ydr%2BHEyXScpun47Cunlw35yt3cTcB9ywZMdjh6ThUJ%2FUHyhQCkcDzCpkDLPywe%2Ba5Jlr3BO0q8DylQWePflPFP4IUKAcEl%2FDKr%2Bo6GXQHRds8og81MBXwXS%2BkUNhUWPJjdK5BRrF28juz25TSWDCCk7%2FMBjqkAYA6opxxG3A%2FdNuhOSzsGJj6QYt5eaiEdp2HjDZTOUThshTl9uZQRC3Fg2Hw%2FzhrU%2FbbmCF52VdBnDfpdpNP8Dpngl2CQHnccFaMQPKshj%2FoSZT%2FKZtf8oA5H54OP7cGeZQRG5w5xv5WxouccDR9Xv5Ej6uxtBb8VZY%2F%2FE8nbRT0m1%2F%2BU%2FqnT2P4oWkzyOGKNdmvd57YldI3cjN%2BbzbVL5XtPOn9&X-Amz-Signature=9e735947bf6d2bb631b4f003012b37acfb7a8189eafc418eb049c9d442581639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
