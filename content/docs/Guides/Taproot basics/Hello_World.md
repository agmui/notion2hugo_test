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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYVCWN7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDCbQjddWa7PegduAkZHb5n5fkIpW5rXnr9%2B%2Bf0uhRaGgIhAMnr6HO256g8yu6BNWur3rv%2FeXNhUjkb81%2BgpQaa7Nq7Kv8DCFsQABoMNjM3NDIzMTgzODA1Igz%2BK4lD2uAy8AF%2Fn8gq3AOdjmIf1cL4t9p12rHwWTDcnKxzLQJk1RHS2piWv4Ix98MUf1f7t1ky1Iqf9zXTrVKfzyrbs1KIt1%2FrLlrdb%2BvD0cyOtZRv%2BSmy%2Fhrznv84o9PjB3bC1mo9uEt1J3s5ZmASTE%2BysxIAOeh6iIjM2H5d8RaUTnW1z5MMvBNYw3Xe6WSIq4AzBkRuoOT3jeUwC1rxeZ1E6xd0YYGP0WK4HS1zTAPD%2BTpzN4%2Bg1xJOAn%2B5xr11qYjx55jJlIhf9raXdGIMl92EShVg0tTTm6aPmqzJmdRk13Xu3CwhAk6jcXxakjbYv783LiUTYR62XftaNfzH5dvbRCUGNxdeiAZNb4Ln%2F0YUL8HLNZNiaLZ1C4IGxhqvQucnTzXUleJXCR2iR3rRbyDrtjeo5my4Im03xjiP3ypDsSQtS5VFc%2Bl8%2FzQR1etearGyPsZZW1TsVvXkyUw8MqnKAbJtiAkPS1faLUhsDsHC3U0MVyUyeq%2BIEEurG87FiWNuBuN%2Bcej90B0hC%2FXoWiULVJSqWhvvD8hOvhRpynXW%2BoNceqLNcFND9rsabuI%2FeiMsHhyir6WRUiNZOnaNvYAHc7ZR6ReLVOkZWc%2Fbm1PL3y%2BurRrlRr%2FxidDCAE1CFcwas7xlQ%2B%2BrOjDbv%2Fu9BjqkAcUG7lBGdt2VmIuHX%2FgjMeWVhicycfkWCTPnqk6p8rrcZEfRQR4sP3RBVnPRoOIFV9YLfgzReJqyCuevTm4owrJasrvc4G%2BwIqcbsbNfefjDC1XjGbFCZvwdRKEqGFFUzJgY6g4dX7y7voP0m%2FaAfNl%2FBB8ZIYtqmF7TG6vmE8Z11wglJSJg3we8Ftlk3PJsllutN8ZkukwNYRFIfzuRnE9rczc5&X-Amz-Signature=60c3705b8097f22487b0724c58a1650cbcb74a68421b82dd789edbd18580b994&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYVCWN7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDCbQjddWa7PegduAkZHb5n5fkIpW5rXnr9%2B%2Bf0uhRaGgIhAMnr6HO256g8yu6BNWur3rv%2FeXNhUjkb81%2BgpQaa7Nq7Kv8DCFsQABoMNjM3NDIzMTgzODA1Igz%2BK4lD2uAy8AF%2Fn8gq3AOdjmIf1cL4t9p12rHwWTDcnKxzLQJk1RHS2piWv4Ix98MUf1f7t1ky1Iqf9zXTrVKfzyrbs1KIt1%2FrLlrdb%2BvD0cyOtZRv%2BSmy%2Fhrznv84o9PjB3bC1mo9uEt1J3s5ZmASTE%2BysxIAOeh6iIjM2H5d8RaUTnW1z5MMvBNYw3Xe6WSIq4AzBkRuoOT3jeUwC1rxeZ1E6xd0YYGP0WK4HS1zTAPD%2BTpzN4%2Bg1xJOAn%2B5xr11qYjx55jJlIhf9raXdGIMl92EShVg0tTTm6aPmqzJmdRk13Xu3CwhAk6jcXxakjbYv783LiUTYR62XftaNfzH5dvbRCUGNxdeiAZNb4Ln%2F0YUL8HLNZNiaLZ1C4IGxhqvQucnTzXUleJXCR2iR3rRbyDrtjeo5my4Im03xjiP3ypDsSQtS5VFc%2Bl8%2FzQR1etearGyPsZZW1TsVvXkyUw8MqnKAbJtiAkPS1faLUhsDsHC3U0MVyUyeq%2BIEEurG87FiWNuBuN%2Bcej90B0hC%2FXoWiULVJSqWhvvD8hOvhRpynXW%2BoNceqLNcFND9rsabuI%2FeiMsHhyir6WRUiNZOnaNvYAHc7ZR6ReLVOkZWc%2Fbm1PL3y%2BurRrlRr%2FxidDCAE1CFcwas7xlQ%2B%2BrOjDbv%2Fu9BjqkAcUG7lBGdt2VmIuHX%2FgjMeWVhicycfkWCTPnqk6p8rrcZEfRQR4sP3RBVnPRoOIFV9YLfgzReJqyCuevTm4owrJasrvc4G%2BwIqcbsbNfefjDC1XjGbFCZvwdRKEqGFFUzJgY6g4dX7y7voP0m%2FaAfNl%2FBB8ZIYtqmF7TG6vmE8Z11wglJSJg3we8Ftlk3PJsllutN8ZkukwNYRFIfzuRnE9rczc5&X-Amz-Signature=446be1d62fc7817955103c63767f2c8641c03744553d8fb1e3e04352de762c45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
