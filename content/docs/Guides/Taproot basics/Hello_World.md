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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MDLGA37%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj%2FaQzkjiTYHBtbzWPEVkwUn0p34LCOmXdyjW2vdO25AiBZjl%2FFPOb78ko7o7B7V6pzWFu3po6c0VUCSChOaI4TpSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZBNqu07SQZVHgQkMKtwDjFYhOHLhX%2FFuKL64f0j6Rzi%2F21JsAzejTIh5cDDbzX%2Bax9HFl%2FXwfRU5lo2sRHF7FbuO6hkNhxNRkQIlUvGwPB8XY3t8L7E5wYsCjInBapUaLZxjyOyopHekryXB6qiyiVWUc7Mcpp9fIYDoCc35PCIEjqpaNchzzTS7xkRlLO5pOuqIJWj0k0inr5JxEkLpopYRz9WvXAt%2BxxItnj1whJN%2BlBGmAiB%2BLSfwDyKdNwDkgV7zdmF0ZJ9AdEcobcxPTe%2BkAqdlcFVDW1c4%2Bx8HtCh9fHQwGc6boxqSUHgApb%2BH03VYJnSRInKDWMnDnquO%2BTdISHrB8mgcyozOZsG74rRDCCQLJ4G34DuemU0T%2Fa7OdHUDaBw2jJ5hkSPEiRIQSwtMePIo5fzdXRnlPcT4IWzqppeOzJd4JRocAbzd7%2FtDd8fE8hvjUYQ%2FYWLs0qzEYGKhWbscJeuLE7dFJMuvPD7qtIgFwE0%2BXuY9gxyR%2B0yGoFonq0R8TiVS8NRQBj3hSCMAp6F8WjgnsrDe5EpsAkT9Z2kvOWJcrLgJkN9WsyUBrXGg%2B21jnAp17lykjKk88NYlMnHePLSSpwebPXXLaKr1RQz4jiW7Fm5IIi0ONvc4tVdeUpOXvhgIXhEwq8yzwAY6pgEuERDwI5a0dJSvdt7jAdTOQkFIwuOGUnaqiWejUfYuIwe0a%2FCTXTJl%2FvANVQQbAANwWhKd4MhuH5ODmtvhEdwl6g6Lvyb6Udx1KzfLV4vIlqRU06kFnepWIsexfCD7wlPaPBmT1SktOGlfI03UL1BibKcDaiburSo7uf4Gra5%2B9RIi%2BqGwWAVMY%2F4vaXrXF7bXQ7XczUb8eHh4c5UnW%2BlngV7YzWIb&X-Amz-Signature=97f4fd31e1c14da47a34c4ddefed23d642e99960e2208d09edc9ae10fba44b71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MDLGA37%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj%2FaQzkjiTYHBtbzWPEVkwUn0p34LCOmXdyjW2vdO25AiBZjl%2FFPOb78ko7o7B7V6pzWFu3po6c0VUCSChOaI4TpSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZBNqu07SQZVHgQkMKtwDjFYhOHLhX%2FFuKL64f0j6Rzi%2F21JsAzejTIh5cDDbzX%2Bax9HFl%2FXwfRU5lo2sRHF7FbuO6hkNhxNRkQIlUvGwPB8XY3t8L7E5wYsCjInBapUaLZxjyOyopHekryXB6qiyiVWUc7Mcpp9fIYDoCc35PCIEjqpaNchzzTS7xkRlLO5pOuqIJWj0k0inr5JxEkLpopYRz9WvXAt%2BxxItnj1whJN%2BlBGmAiB%2BLSfwDyKdNwDkgV7zdmF0ZJ9AdEcobcxPTe%2BkAqdlcFVDW1c4%2Bx8HtCh9fHQwGc6boxqSUHgApb%2BH03VYJnSRInKDWMnDnquO%2BTdISHrB8mgcyozOZsG74rRDCCQLJ4G34DuemU0T%2Fa7OdHUDaBw2jJ5hkSPEiRIQSwtMePIo5fzdXRnlPcT4IWzqppeOzJd4JRocAbzd7%2FtDd8fE8hvjUYQ%2FYWLs0qzEYGKhWbscJeuLE7dFJMuvPD7qtIgFwE0%2BXuY9gxyR%2B0yGoFonq0R8TiVS8NRQBj3hSCMAp6F8WjgnsrDe5EpsAkT9Z2kvOWJcrLgJkN9WsyUBrXGg%2B21jnAp17lykjKk88NYlMnHePLSSpwebPXXLaKr1RQz4jiW7Fm5IIi0ONvc4tVdeUpOXvhgIXhEwq8yzwAY6pgEuERDwI5a0dJSvdt7jAdTOQkFIwuOGUnaqiWejUfYuIwe0a%2FCTXTJl%2FvANVQQbAANwWhKd4MhuH5ODmtvhEdwl6g6Lvyb6Udx1KzfLV4vIlqRU06kFnepWIsexfCD7wlPaPBmT1SktOGlfI03UL1BibKcDaiburSo7uf4Gra5%2B9RIi%2BqGwWAVMY%2F4vaXrXF7bXQ7XczUb8eHh4c5UnW%2BlngV7YzWIb&X-Amz-Signature=9abfc4012e9561ded0100cdb1bf03868eae28f6386da6bc1fde47c995bbd35ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
