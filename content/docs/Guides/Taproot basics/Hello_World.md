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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662G7OL4C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm8dNEXYPNcZiUHMv2KJHtknSF0R0EHiO9vQKtnc5CKAiEAmLX8e%2Fkel04GGValz5OkDaHcfqEC3%2Fvvu6H3amVL3sAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1KCFTbdLZkw2gOXircA0X%2F0azpdpK3nDsUaLWJKOf6N6Gw8KSNIeJO6QtIh23i4yMK3hDsE%2BFffdzsmo%2BdEaTpkd%2FUcTsTSBWj5hcu5TlfU2%2BmgFiMXvViKdLrpyxKB2PCfRzo0Lx9u5HSYNoWLxbyGPKOko8kyC7HJFNg6RhFwfAxeb3rCJOOTjBxTG4lc2WhTt3thbDc2jJukuElIKm5NzkptZL2uU8xTRNXRpTIYHk7W4QMAkMEjvb%2BqFRy5rXfckWhtXrpF6pWh%2FfCrAFo9%2BRjDl9I%2F4CD%2Bx8cw1alD%2F3sFrUOeRFUkHPzbskXhDIhRhG0QF5cvkmHB44szhpi8Kmb36Gp2U%2B%2BDn%2FhznU4JjKNqpb8RlLI2JcmDhGSCYpPK4jp3WOthjEpLSdH605tg6i7v3kpUcgAYHcmUvSuTlCpjVvpKMjHxvLgCOGnPAR85YBRGrE6ww88KcEauPlYzI1YoJDSKdawz8NqJDvNAPHkQZp9%2Fu4pcCR1E5PPFRnLtOvY3xNHVFPvITynlJ5s6WgiJ1r57j2gfgK93lXQYez5N7m6Ul8b8z%2Bz4VQJc9qMYjJxHd3sYYe6M4nsCYh0uSQIQyAUt38j65C5u9P%2FUphHO8oBLLH1zYfVXdPr2wUwqUFMeX232n1sMKTWm8IGOqUBSh0vLdVUectIe7rPNx4Dyr6klUy%2FF8aZrUMgt7t95gMmudwkNWTJQ3ffdHoyNLNVa1e1Oc%2FVrI85oIBFhfcnt7KA4lM5iTAOo2rmb%2BSj0bgb4v9ChLdwzzlLom6ICoU%2BW7HwNPdwXmHKwsUEocMIsZk1nNk64wNYV61XaQYbckdr%2BnK%2FTNgQL%2FHUW7nn59k6R%2FnG00Wvy7Wu%2FRwyZHc7haffZYuC&X-Amz-Signature=988dd73e2db40b67292550a47079fe575d340632f6a6caaefaed3b38708f81e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662G7OL4C%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm8dNEXYPNcZiUHMv2KJHtknSF0R0EHiO9vQKtnc5CKAiEAmLX8e%2Fkel04GGValz5OkDaHcfqEC3%2Fvvu6H3amVL3sAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1KCFTbdLZkw2gOXircA0X%2F0azpdpK3nDsUaLWJKOf6N6Gw8KSNIeJO6QtIh23i4yMK3hDsE%2BFffdzsmo%2BdEaTpkd%2FUcTsTSBWj5hcu5TlfU2%2BmgFiMXvViKdLrpyxKB2PCfRzo0Lx9u5HSYNoWLxbyGPKOko8kyC7HJFNg6RhFwfAxeb3rCJOOTjBxTG4lc2WhTt3thbDc2jJukuElIKm5NzkptZL2uU8xTRNXRpTIYHk7W4QMAkMEjvb%2BqFRy5rXfckWhtXrpF6pWh%2FfCrAFo9%2BRjDl9I%2F4CD%2Bx8cw1alD%2F3sFrUOeRFUkHPzbskXhDIhRhG0QF5cvkmHB44szhpi8Kmb36Gp2U%2B%2BDn%2FhznU4JjKNqpb8RlLI2JcmDhGSCYpPK4jp3WOthjEpLSdH605tg6i7v3kpUcgAYHcmUvSuTlCpjVvpKMjHxvLgCOGnPAR85YBRGrE6ww88KcEauPlYzI1YoJDSKdawz8NqJDvNAPHkQZp9%2Fu4pcCR1E5PPFRnLtOvY3xNHVFPvITynlJ5s6WgiJ1r57j2gfgK93lXQYez5N7m6Ul8b8z%2Bz4VQJc9qMYjJxHd3sYYe6M4nsCYh0uSQIQyAUt38j65C5u9P%2FUphHO8oBLLH1zYfVXdPr2wUwqUFMeX232n1sMKTWm8IGOqUBSh0vLdVUectIe7rPNx4Dyr6klUy%2FF8aZrUMgt7t95gMmudwkNWTJQ3ffdHoyNLNVa1e1Oc%2FVrI85oIBFhfcnt7KA4lM5iTAOo2rmb%2BSj0bgb4v9ChLdwzzlLom6ICoU%2BW7HwNPdwXmHKwsUEocMIsZk1nNk64wNYV61XaQYbckdr%2BnK%2FTNgQL%2FHUW7nn59k6R%2FnG00Wvy7Wu%2FRwyZHc7haffZYuC&X-Amz-Signature=a5cc21e003cda801a0edd85deb40962e72671ed8e7b5b9a8a746c8d53e0442f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
