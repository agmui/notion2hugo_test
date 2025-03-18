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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGFRTJ7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIE0qRC8XqOMfoFtMYYuSWccIfL3F8lCFK8jJSjE5dxPJAiAX2lC2c%2BGhIBOCI%2FLjOtkU0f5KUDXaaJ84zeQ7Q2TrHSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIME6ewVyXUqftDGxFmKtwD94OSczOoPDKQlWq5NAfMN5Sct5o8Eu%2BUxed9d9Odpxn4ifkK16kiOcLLBReBwK5RBLKYA74RW58%2FKGVqEwlHA6DBSOoNvBqKt9C3IAt7H9TiRU1TBdSHqRbxvNwBIuUGtpA%2B8G1oRLAwQE6wb6yNnaT9LDrdp05i008OOiCxuNV9nDqJBplbgJE5XmUOz8lKP7zRRcOANAEmb2%2FAjveaJtX0vfxaJpAtfKKBNoBkkwooWFjCC%2Ftqk8nQFYt0%2B76AB6pmzlNCVoSqxUfLTKJd%2BdYip92pnG7Tf67HuZTB06scxwIlY1cbqfumpAvH5zJ7dvlrgKN4v402I4%2FoGS1M1bQ2RtP%2F2vXRMe8f7rr0pLS3Il3Q8yqWTd4raH9IKS2XEw%2ByMNaFSgOiqhkH22gr72PUIIZ7bvem0kz1wqAX1%2F1Mo9WiFePoGrl0v8N6iQNHijkG17BoYwNWV%2FdKsQcDffwVumUcWIbSQVTFKWc79yPfLEZEWx1%2Ftd2PF3O%2Bmg8NFCezW95hl6Ujb66XN2qHUuOUwF6fACqUqTbgPQx1rzGxrYrGD2PccfrLrNLvvJ4zz9WtGYS777MFI6LYYAY4%2BhECrH1I2XVcKdyKGn4DBIG58ug40vLwBQM2HXsww7TmvgY6pgFNPzyGzY7hS7T%2F5UwNBR44COGfCgg1%2F0HFbnzdUtn0PKD3eNBnzqeBVXft45NCMEbnzJ4Whk%2FLCnImeOvV6DwUwUqEwCMGmTJATLl0pxmmVFubO82hYhsTYQ5p5fPjyWausi71YOLCeesYSEQlAafZ1aXjZg%2FzW1IGb%2BKhLqM%2FwBC7SloFUiRHhkpZgJwWYld5d9kcBSD6D%2FJitTjHKM1niUZleHLU&X-Amz-Signature=f0be18b853e87a5b7c44c571f1d8367c5a7f610687e659cf8da6ede710467ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGFRTJ7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIE0qRC8XqOMfoFtMYYuSWccIfL3F8lCFK8jJSjE5dxPJAiAX2lC2c%2BGhIBOCI%2FLjOtkU0f5KUDXaaJ84zeQ7Q2TrHSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIME6ewVyXUqftDGxFmKtwD94OSczOoPDKQlWq5NAfMN5Sct5o8Eu%2BUxed9d9Odpxn4ifkK16kiOcLLBReBwK5RBLKYA74RW58%2FKGVqEwlHA6DBSOoNvBqKt9C3IAt7H9TiRU1TBdSHqRbxvNwBIuUGtpA%2B8G1oRLAwQE6wb6yNnaT9LDrdp05i008OOiCxuNV9nDqJBplbgJE5XmUOz8lKP7zRRcOANAEmb2%2FAjveaJtX0vfxaJpAtfKKBNoBkkwooWFjCC%2Ftqk8nQFYt0%2B76AB6pmzlNCVoSqxUfLTKJd%2BdYip92pnG7Tf67HuZTB06scxwIlY1cbqfumpAvH5zJ7dvlrgKN4v402I4%2FoGS1M1bQ2RtP%2F2vXRMe8f7rr0pLS3Il3Q8yqWTd4raH9IKS2XEw%2ByMNaFSgOiqhkH22gr72PUIIZ7bvem0kz1wqAX1%2F1Mo9WiFePoGrl0v8N6iQNHijkG17BoYwNWV%2FdKsQcDffwVumUcWIbSQVTFKWc79yPfLEZEWx1%2Ftd2PF3O%2Bmg8NFCezW95hl6Ujb66XN2qHUuOUwF6fACqUqTbgPQx1rzGxrYrGD2PccfrLrNLvvJ4zz9WtGYS777MFI6LYYAY4%2BhECrH1I2XVcKdyKGn4DBIG58ug40vLwBQM2HXsww7TmvgY6pgFNPzyGzY7hS7T%2F5UwNBR44COGfCgg1%2F0HFbnzdUtn0PKD3eNBnzqeBVXft45NCMEbnzJ4Whk%2FLCnImeOvV6DwUwUqEwCMGmTJATLl0pxmmVFubO82hYhsTYQ5p5fPjyWausi71YOLCeesYSEQlAafZ1aXjZg%2FzW1IGb%2BKhLqM%2FwBC7SloFUiRHhkpZgJwWYld5d9kcBSD6D%2FJitTjHKM1niUZleHLU&X-Amz-Signature=5596189ece7ca42d00955336dc47c896f7647ffb545bdd6dfb60f3ad4cd398a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
