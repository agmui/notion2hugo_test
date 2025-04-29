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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQQP4TF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ujICrIR5JeNTYCMEdnQP9K00CJMLZ%2BOvWbetnnSshgIgKtt61nmy77zeUGBhDABDHSmeFnJ0LyaHp8IZEjNh87UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6zGBtUwMgayI1K%2FyrcA0uJD3xBX2wa3NFPn%2BbbLeRFDiFkGYCLPunniy81PusD8JZQHWLI9Mummy4U4LlHRyUwdilE2pD9fuWTdVq%2BUvoZ%2BV2izhtGOoV1grAaehVsZ50rqZYaw4jbBCDSfSO%2BkwypHE4uWNpOA1VfTQ2qBGN8v%2B1bPCFZIMX1H%2BXD5xm9wJYmcRqEhLOPpNeW86Sr%2Bluqw95kcFKWBtf0sz6fraYEF7MPVh3EN1LiweLTzn8SlmG5dERK0FzM9Y8cQOWxPbPJ4qyDQhGu6BTbm6HUPARhVkhHHjw3xevG0Z2eIxuUx%2BNY9nm5e2ZnoUv54JgSp8heTYJ5NAbpX2sF0fNS%2BZ9ewyXakzaSK9uwZFQ8Frpq5n3kEg1lyxV%2FjmpJIPnSLrUghIMRLsw9NQFnGgeyOywhBYLvXVQvzkIr5Aq6h7nHWWK8YgyiKxSmhxLwKs%2BLzkKDvIgoO2kmXWkCGr6qgSrAniJpGjjElk%2BDq%2FTvAcuOFBYGLU7pnqpMCtuFak3WGs%2BchmjnIWzaj5YzTFAm0KkfvqpFgi3%2Bzyjv3pnGxVVHNGSCJxpKVPApevQhuKaI244i%2F8M1kLrOQhSeLs8IxuAC2TOb4GctQwf2rxwBduapUlYvSIJ2Az%2B0F8t%2BMI6jw8AGOqUBQXZTp%2BOcF2BnKEZVuZBqfSqynjtbUWUUsUeV2QZMADPYJwSUTG8YJ3pAk5tClh6zMvwtw0zD%2BhnrtlsvxeqMaX8gh8Kk2Pjt8JvwuH0Sjwpx7KHp13hMBt3dRDO9q%2FYp%2FV70jSNcy7gmv0UTsn9AC5c09Ub7tbr6SraYfyKkkoCJKWD3d1JaixC2M0fcc59fzfZ%2BVac6%2F0ZA%2Bh6Mn7uH8c67%2FmHr&X-Amz-Signature=03edc4aee845e2919ba2229cfb43bd3851e1fad5e961ac7555d8bb986cf86af4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQQP4TF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ujICrIR5JeNTYCMEdnQP9K00CJMLZ%2BOvWbetnnSshgIgKtt61nmy77zeUGBhDABDHSmeFnJ0LyaHp8IZEjNh87UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6zGBtUwMgayI1K%2FyrcA0uJD3xBX2wa3NFPn%2BbbLeRFDiFkGYCLPunniy81PusD8JZQHWLI9Mummy4U4LlHRyUwdilE2pD9fuWTdVq%2BUvoZ%2BV2izhtGOoV1grAaehVsZ50rqZYaw4jbBCDSfSO%2BkwypHE4uWNpOA1VfTQ2qBGN8v%2B1bPCFZIMX1H%2BXD5xm9wJYmcRqEhLOPpNeW86Sr%2Bluqw95kcFKWBtf0sz6fraYEF7MPVh3EN1LiweLTzn8SlmG5dERK0FzM9Y8cQOWxPbPJ4qyDQhGu6BTbm6HUPARhVkhHHjw3xevG0Z2eIxuUx%2BNY9nm5e2ZnoUv54JgSp8heTYJ5NAbpX2sF0fNS%2BZ9ewyXakzaSK9uwZFQ8Frpq5n3kEg1lyxV%2FjmpJIPnSLrUghIMRLsw9NQFnGgeyOywhBYLvXVQvzkIr5Aq6h7nHWWK8YgyiKxSmhxLwKs%2BLzkKDvIgoO2kmXWkCGr6qgSrAniJpGjjElk%2BDq%2FTvAcuOFBYGLU7pnqpMCtuFak3WGs%2BchmjnIWzaj5YzTFAm0KkfvqpFgi3%2Bzyjv3pnGxVVHNGSCJxpKVPApevQhuKaI244i%2F8M1kLrOQhSeLs8IxuAC2TOb4GctQwf2rxwBduapUlYvSIJ2Az%2B0F8t%2BMI6jw8AGOqUBQXZTp%2BOcF2BnKEZVuZBqfSqynjtbUWUUsUeV2QZMADPYJwSUTG8YJ3pAk5tClh6zMvwtw0zD%2BhnrtlsvxeqMaX8gh8Kk2Pjt8JvwuH0Sjwpx7KHp13hMBt3dRDO9q%2FYp%2FV70jSNcy7gmv0UTsn9AC5c09Ub7tbr6SraYfyKkkoCJKWD3d1JaixC2M0fcc59fzfZ%2BVac6%2F0ZA%2Bh6Mn7uH8c67%2FmHr&X-Amz-Signature=ce00cdee4a3541d9ee2f2bce0fb8e4b82cb2f0a6867326f5e79292d6c26365c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
