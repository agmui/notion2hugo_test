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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JY65W6K%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIAp025%2FXd7d0G57Y51806rhH2mxhKc3xk4xOct8ZR%2Fq2AiAdP%2FxXG%2BFsoHubqwrLOyuOOU8FxVY6wo1gRmDOgSQ2Nir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMGGGPiKOxqOAbqBV0KtwDzs6nrwe%2Fi%2FvdxX0Xj2Lu6ZAFmQwxreEdUmfqU3FEKQ12DSt%2BQ57%2Fq4ibd3PbrAz8G5beCbOryjPD4vi3pUo2AwzRyFFaIRu9lPONu4uFodIuOYx9vJP31CqtR2Z4kz%2FIlNIkziU122whkM%2BDQcmWNhdMMtzmfH0DylCzSe%2BKgewnjTIC7tX%2F%2FKOQlCrJa1sWGm89%2F4QaxPjqgbshssM5tZiX6dLJr4A1lVhj0TuBbPLpOpR18v0qDDsj9EmnV3uBlatqvZWMaYOgMnzUMCzuZ2A5Pp9gGXoSA9jJQ7CWPRJeyqgWMjpMm30VmqEPWduMhpI3Arhd1snxqRd91NwBTIPysoGRiPYoLrnpjJNLKg7JrQFfOLI8M9%2B%2Fq4PsqYsNVL%2BbDLxRMtdbQyg3BYsucS0FF8%2FxxW%2F8gnIRUkTP7WEAJDIlaBcnJklQgbPqULs0j5G6oRps6YMvzNsBtB5ZbUZo9t%2BHYX0FCwfil32WJlIWlztTI0T0YEZIGhyjIGsYKix4crJyRQRDlqIRitwO7oThot3uRFEvQimQ4TQkPmUGLfcO%2F9CMNqBMySKsH670E6tNXB%2F86yWftCl%2Bw1EPfn1i0CKcuVg3izUS75jiQvSPVlMKqZoGr2wkxSIwn625wgY6pgHhEGrMn0yjRQBNg8wybfAG34Dyzzy%2FnqCWaDTVkALAaUfV%2Bp1Qdfqur5sugLZp9f%2FkAPp2No2WZLltbSJ5IHIZT4RBLwy3sIIRRERmAkDJ0OWiUVpae69xZLlBt1Ug0Fn1E7VXljhq5m0%2BRhSDa4E3mLpKgswTkg5e%2B8e0NK%2BUZBdqByOvnydB45cFvPQWCHN9SNjtFzbqEYkNP3YYuwYPpTkcKu8t&X-Amz-Signature=1a159d6305566cb83d840254f5b36c89f8561b8e783c713c045fffa7bca05157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JY65W6K%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIAp025%2FXd7d0G57Y51806rhH2mxhKc3xk4xOct8ZR%2Fq2AiAdP%2FxXG%2BFsoHubqwrLOyuOOU8FxVY6wo1gRmDOgSQ2Nir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMGGGPiKOxqOAbqBV0KtwDzs6nrwe%2Fi%2FvdxX0Xj2Lu6ZAFmQwxreEdUmfqU3FEKQ12DSt%2BQ57%2Fq4ibd3PbrAz8G5beCbOryjPD4vi3pUo2AwzRyFFaIRu9lPONu4uFodIuOYx9vJP31CqtR2Z4kz%2FIlNIkziU122whkM%2BDQcmWNhdMMtzmfH0DylCzSe%2BKgewnjTIC7tX%2F%2FKOQlCrJa1sWGm89%2F4QaxPjqgbshssM5tZiX6dLJr4A1lVhj0TuBbPLpOpR18v0qDDsj9EmnV3uBlatqvZWMaYOgMnzUMCzuZ2A5Pp9gGXoSA9jJQ7CWPRJeyqgWMjpMm30VmqEPWduMhpI3Arhd1snxqRd91NwBTIPysoGRiPYoLrnpjJNLKg7JrQFfOLI8M9%2B%2Fq4PsqYsNVL%2BbDLxRMtdbQyg3BYsucS0FF8%2FxxW%2F8gnIRUkTP7WEAJDIlaBcnJklQgbPqULs0j5G6oRps6YMvzNsBtB5ZbUZo9t%2BHYX0FCwfil32WJlIWlztTI0T0YEZIGhyjIGsYKix4crJyRQRDlqIRitwO7oThot3uRFEvQimQ4TQkPmUGLfcO%2F9CMNqBMySKsH670E6tNXB%2F86yWftCl%2Bw1EPfn1i0CKcuVg3izUS75jiQvSPVlMKqZoGr2wkxSIwn625wgY6pgHhEGrMn0yjRQBNg8wybfAG34Dyzzy%2FnqCWaDTVkALAaUfV%2Bp1Qdfqur5sugLZp9f%2FkAPp2No2WZLltbSJ5IHIZT4RBLwy3sIIRRERmAkDJ0OWiUVpae69xZLlBt1Ug0Fn1E7VXljhq5m0%2BRhSDa4E3mLpKgswTkg5e%2B8e0NK%2BUZBdqByOvnydB45cFvPQWCHN9SNjtFzbqEYkNP3YYuwYPpTkcKu8t&X-Amz-Signature=fe48647009b66a9aa54f88f8dae8faf43f3eeb54c727f48e9b5c665cd6696328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
