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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QDKH2U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmbPBrhHtaB1YTD%2B%2B4zOOjM9DggP7DE5zGz%2BkLLDF0sgIgNBt1GkEjEdR%2BygmOSTZA8h2H%2BvFE7yzFpVnCF4wcMgUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bxwi4ELIAc7YEEjCrcAyiofLKjoJsZWQ1XDjS%2FnmYeT5Bg0T9%2Fn13hqWE1mt5hJqmwpwmkR1bGQE%2FhJCRYmFih%2BMoOPLLPtNPDrZOMX3Sv%2BQI3Fa4dRpvcQ59%2FQuGoMK3LDeeS4pVz%2FwSHeQGfnmJvjpGuxellSXtTGcy3As6ganbg3gzas9KP6kFlI%2FgV3cecZmnYR7Bmi92c8zVzqPkRpkeXV5IsBX7Mw8j%2B%2Bn%2FUmd7OlyG1uFFByzTGfjGdB%2FQedt5RqPjPwJTkFSROzy0BUu%2FH0g4%2BaSaHsHGD%2FZKemwyt1Wv7prwNMR3PznQU%2FaGKayLI%2BrPxMluV7XMpWdxRUOz8D2rRONz7wwbyeLRm%2F1ThTl%2FoxJfO6KR7mNLZUJVcmW0cTbzNR5z5%2B6kdlvmMD%2Fp9WhCjBgm90JsaFoQdGdqBSTZT2%2Bz1GutGZW%2BSlHeSisSfb86N8Ahjyg%2FhAYj1NJtw42TAIwcLC%2BcG6lkwxpJiS5NjCMraeC4kkVvtFBGsWBJYSIPO8pA4cChivlCtH4xoahE6IZ0POU5xudcZ5cn%2FKNpGFNG3uFOzOD3a0VrBqqOdfq2KsZ7%2FGFaHfsgzjdg%2FHbI7XW9XDk0o%2BgiDY4VzKm%2FNeUhXIIdfXmwtQh%2Bs3ofxf0ZCa8r7MPLP6MMGOqUBxf0IT4XksT8%2Bs73kDo0xkC1ypigS71JJ%2FGMkjhO3EdouPc5AIeDGx8cSB3zGbuOYfWAJ92vh85fviwVtWnsj7orFVEACrtt5rjA5otxRWsaQeL0mNchDURhKOlowthbkZbfpjzUenUg1aoxzM9PNnsM5oJ8NtEbjlPj2FUWQGemfw5QhxpELGYkOMaGJGhkA8q2tKQzHkxxJ3uX8mYYoYl7tKtly&X-Amz-Signature=c30fdb9a95f15a0a11cae96def20445831152d1192d143327de8b26a3e9c45ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QDKH2U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmbPBrhHtaB1YTD%2B%2B4zOOjM9DggP7DE5zGz%2BkLLDF0sgIgNBt1GkEjEdR%2BygmOSTZA8h2H%2BvFE7yzFpVnCF4wcMgUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bxwi4ELIAc7YEEjCrcAyiofLKjoJsZWQ1XDjS%2FnmYeT5Bg0T9%2Fn13hqWE1mt5hJqmwpwmkR1bGQE%2FhJCRYmFih%2BMoOPLLPtNPDrZOMX3Sv%2BQI3Fa4dRpvcQ59%2FQuGoMK3LDeeS4pVz%2FwSHeQGfnmJvjpGuxellSXtTGcy3As6ganbg3gzas9KP6kFlI%2FgV3cecZmnYR7Bmi92c8zVzqPkRpkeXV5IsBX7Mw8j%2B%2Bn%2FUmd7OlyG1uFFByzTGfjGdB%2FQedt5RqPjPwJTkFSROzy0BUu%2FH0g4%2BaSaHsHGD%2FZKemwyt1Wv7prwNMR3PznQU%2FaGKayLI%2BrPxMluV7XMpWdxRUOz8D2rRONz7wwbyeLRm%2F1ThTl%2FoxJfO6KR7mNLZUJVcmW0cTbzNR5z5%2B6kdlvmMD%2Fp9WhCjBgm90JsaFoQdGdqBSTZT2%2Bz1GutGZW%2BSlHeSisSfb86N8Ahjyg%2FhAYj1NJtw42TAIwcLC%2BcG6lkwxpJiS5NjCMraeC4kkVvtFBGsWBJYSIPO8pA4cChivlCtH4xoahE6IZ0POU5xudcZ5cn%2FKNpGFNG3uFOzOD3a0VrBqqOdfq2KsZ7%2FGFaHfsgzjdg%2FHbI7XW9XDk0o%2BgiDY4VzKm%2FNeUhXIIdfXmwtQh%2Bs3ofxf0ZCa8r7MPLP6MMGOqUBxf0IT4XksT8%2Bs73kDo0xkC1ypigS71JJ%2FGMkjhO3EdouPc5AIeDGx8cSB3zGbuOYfWAJ92vh85fviwVtWnsj7orFVEACrtt5rjA5otxRWsaQeL0mNchDURhKOlowthbkZbfpjzUenUg1aoxzM9PNnsM5oJ8NtEbjlPj2FUWQGemfw5QhxpELGYkOMaGJGhkA8q2tKQzHkxxJ3uX8mYYoYl7tKtly&X-Amz-Signature=2d69d77bc2cda33a9b08bedabc4a5e73f9fce10b4efeb4d958e6dd161b13e651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
