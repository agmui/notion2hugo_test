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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJUKAHZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3ilxu0thI%2FtWiRMG4hCQX2W8uXRJZXqxyi%2FIlZcDvFAiBP05QqdiyfVXuwyPq8%2BAYrqY7fUeTzpVHagDlRICfOXCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS3ZHX7QSD158UmhKtwDr29pMsfFw5iYKKNlyKdF3a1xtPIpKQ%2BcYE5QdtiOVG6e%2FXXm%2BidDTpsoTyX0bL3jyIY1rsOARub%2BJslkqWEdHLliP7pwNCR%2BZVvmt13StpMVcQQlWiuFzrjy68QGL2jiw1YcDbRbJcZ9qbnQAHVPu7uppG0HZmJQEWjpc0SLYcZWExAO1Gpnh8YeTaTGYmQ3Dn33IgbAY7ef4mubTKjnaGkilWkvnfldklAKJoDVbcu%2Fh1l%2BSlzVIozYpKy9T81ueM5hW5ODKxNfLYkpGrgxymvkb1H1016NSlhi8KVZVB%2Fg5mbknk0t7%2FwYxuOSZmh0biUEECriH7HxaHo7tjM76RnaQ5b6X%2BkUqrLMy4sSF4p54VGU7sWjA%2FEoJgpUY4blkqTaVoNlLqkWI6N6mWGMBh%2BGoGgOarhfgTwOiYyNvsk231RXk1GOdMEzNkYWWPxzXHOmIWOAYOij4%2BmSTSZxglR3JnmncithA2LEJ4lMM4J2djBk6KruXpu5u2OWn%2BJW7ZIrc6Vnr%2F%2FGwGtw7IwRpTlo4eFiO%2FvnZ2yVTOFOM09dddYJEu8tHehZ5JG4w2E6XXIUpRBZXFJXXgGEQ0Yxih5DZP3vjO9YbCL2rap3gN9YUEuncmAOqF47vy8wp8yvxAY6pgHt%2FvIXqwo9sbsRgpX9%2FYWVYhFV8HT1GIzt7LqLH9EiUfDpqukgkRtrF%2BaGchInubs6WOaufe8xyzsXVI1d0T8SMqb%2BYmUcT%2FPS%2BQuxeVqFuGVKqevoGWu8O9wIzRYTs8LGdNBeAZ4wqFln1INxyvs%2FZswWcjAdxtSxWas9GIbwDzm7VIFkEFcjDKyc2t9ecnAxGl8UpjFxL4D9BcHsqTm3ppiY5xnG&X-Amz-Signature=e06b9bf39c60b0e9f5596352e4f2d646d84f88465a0a3dc3553b44c528fa46f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJUKAHZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3ilxu0thI%2FtWiRMG4hCQX2W8uXRJZXqxyi%2FIlZcDvFAiBP05QqdiyfVXuwyPq8%2BAYrqY7fUeTzpVHagDlRICfOXCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS3ZHX7QSD158UmhKtwDr29pMsfFw5iYKKNlyKdF3a1xtPIpKQ%2BcYE5QdtiOVG6e%2FXXm%2BidDTpsoTyX0bL3jyIY1rsOARub%2BJslkqWEdHLliP7pwNCR%2BZVvmt13StpMVcQQlWiuFzrjy68QGL2jiw1YcDbRbJcZ9qbnQAHVPu7uppG0HZmJQEWjpc0SLYcZWExAO1Gpnh8YeTaTGYmQ3Dn33IgbAY7ef4mubTKjnaGkilWkvnfldklAKJoDVbcu%2Fh1l%2BSlzVIozYpKy9T81ueM5hW5ODKxNfLYkpGrgxymvkb1H1016NSlhi8KVZVB%2Fg5mbknk0t7%2FwYxuOSZmh0biUEECriH7HxaHo7tjM76RnaQ5b6X%2BkUqrLMy4sSF4p54VGU7sWjA%2FEoJgpUY4blkqTaVoNlLqkWI6N6mWGMBh%2BGoGgOarhfgTwOiYyNvsk231RXk1GOdMEzNkYWWPxzXHOmIWOAYOij4%2BmSTSZxglR3JnmncithA2LEJ4lMM4J2djBk6KruXpu5u2OWn%2BJW7ZIrc6Vnr%2F%2FGwGtw7IwRpTlo4eFiO%2FvnZ2yVTOFOM09dddYJEu8tHehZ5JG4w2E6XXIUpRBZXFJXXgGEQ0Yxih5DZP3vjO9YbCL2rap3gN9YUEuncmAOqF47vy8wp8yvxAY6pgHt%2FvIXqwo9sbsRgpX9%2FYWVYhFV8HT1GIzt7LqLH9EiUfDpqukgkRtrF%2BaGchInubs6WOaufe8xyzsXVI1d0T8SMqb%2BYmUcT%2FPS%2BQuxeVqFuGVKqevoGWu8O9wIzRYTs8LGdNBeAZ4wqFln1INxyvs%2FZswWcjAdxtSxWas9GIbwDzm7VIFkEFcjDKyc2t9ecnAxGl8UpjFxL4D9BcHsqTm3ppiY5xnG&X-Amz-Signature=97730bc58665686ad37bcd9641f98f43d7df80a7319d6feb7ebb89159a1b5495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
