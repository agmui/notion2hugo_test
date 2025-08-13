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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDMJAWK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZRg%2BaqPuWAIAHTUoRJKbt6Cxr8lUm7B%2BycWAYnKWtQAiAcZBtqoAGGeFveG58347HM%2FJI5c4SVlVLYecaoY0aqCir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMKVrlfg46u%2Fu1aqu3KtwDRr4StEwUL4nCKXhv%2B7qX3SMQUzMC4N%2BLvTpbGyZ%2Fpj1QhT%2B%2FEN1MHz42875ln16eoSJBAjTBosFBv%2FUzLQLOhgnH4x93ULNtx%2BCSJwSlKVgltECNDACPSMBLUIbOom2CSxBkFl76sHLZbwedyCjj9gQbOaEcG12TbSsZg7Q0nbYyGuz9Hx8ffBwm%2Fd0ICfRG6ImB6o9RvmecHyPQQ3K6ctL4lVVB3v2WLJMXj%2BinfV1Su7MY%2Fvx5U%2Fk4OR0TpFcenWZAcSJlkdaa6Vs4ZyWel%2FE6cDqiZz04G%2F4OXSwETTINvLfBhcUkJNPQJM6sJzV9NocUQnLD3rXIXtA14RjO%2FhnwEoU62ClyD4UOWlnyG81uIloQfk8M%2F0tQMHeb9neDyKNHfbLfPqaWSeUXE7PL4NkaIq7xgL2G7p6UFxDFkUigPw7fYJXTqrRYUAOuCte84gZEsSGcaQjJqrcjKEA8CFvyGAp3fvmUJhbzCvHeBUFGAKXsCSJ52GfX0V3ZLfNSDPEe2r2FXfAkaTK2Otzz2NhFQYdeFH1rGzb89ZY8sljitAYwGzVNQj%2BM66sKcWGPGUbmRuLtq7pFXZTueO5CmW0aU%2FPMtZZnKwaDYGQrXPc0bfp65OtMMXLos98w9qrwxAY6pgHW9unkPIuigahFDKvJ5VNunNEJuzcePWApgJorKOc91%2BbaovEGxheacmCyZYyMhrOtMYSXo1KE%2FMh3l6QXEMVEtvKAGx2Dw%2BsR9zE4PZQjfW0oCrlW77i6Yw6JZI4X9Yt6O2ESXoSX5mStgT3%2F9AiB7CnsuNuF09VtZFmQmmJ7gCj5K6wo%2B4XNWOUPqUdxUJyTCkQ3TOovPjZWUFY9p35shyE%2BA8%2BA&X-Amz-Signature=678e52f817abe8ae425683a5cca959bd50362da574ed15cd4084fb388e329b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDMJAWK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZRg%2BaqPuWAIAHTUoRJKbt6Cxr8lUm7B%2BycWAYnKWtQAiAcZBtqoAGGeFveG58347HM%2FJI5c4SVlVLYecaoY0aqCir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMKVrlfg46u%2Fu1aqu3KtwDRr4StEwUL4nCKXhv%2B7qX3SMQUzMC4N%2BLvTpbGyZ%2Fpj1QhT%2B%2FEN1MHz42875ln16eoSJBAjTBosFBv%2FUzLQLOhgnH4x93ULNtx%2BCSJwSlKVgltECNDACPSMBLUIbOom2CSxBkFl76sHLZbwedyCjj9gQbOaEcG12TbSsZg7Q0nbYyGuz9Hx8ffBwm%2Fd0ICfRG6ImB6o9RvmecHyPQQ3K6ctL4lVVB3v2WLJMXj%2BinfV1Su7MY%2Fvx5U%2Fk4OR0TpFcenWZAcSJlkdaa6Vs4ZyWel%2FE6cDqiZz04G%2F4OXSwETTINvLfBhcUkJNPQJM6sJzV9NocUQnLD3rXIXtA14RjO%2FhnwEoU62ClyD4UOWlnyG81uIloQfk8M%2F0tQMHeb9neDyKNHfbLfPqaWSeUXE7PL4NkaIq7xgL2G7p6UFxDFkUigPw7fYJXTqrRYUAOuCte84gZEsSGcaQjJqrcjKEA8CFvyGAp3fvmUJhbzCvHeBUFGAKXsCSJ52GfX0V3ZLfNSDPEe2r2FXfAkaTK2Otzz2NhFQYdeFH1rGzb89ZY8sljitAYwGzVNQj%2BM66sKcWGPGUbmRuLtq7pFXZTueO5CmW0aU%2FPMtZZnKwaDYGQrXPc0bfp65OtMMXLos98w9qrwxAY6pgHW9unkPIuigahFDKvJ5VNunNEJuzcePWApgJorKOc91%2BbaovEGxheacmCyZYyMhrOtMYSXo1KE%2FMh3l6QXEMVEtvKAGx2Dw%2BsR9zE4PZQjfW0oCrlW77i6Yw6JZI4X9Yt6O2ESXoSX5mStgT3%2F9AiB7CnsuNuF09VtZFmQmmJ7gCj5K6wo%2B4XNWOUPqUdxUJyTCkQ3TOovPjZWUFY9p35shyE%2BA8%2BA&X-Amz-Signature=bb5773dece1267ddfd15c178bd040f5d6879bd29d345a0fc42b92f93678c0fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
