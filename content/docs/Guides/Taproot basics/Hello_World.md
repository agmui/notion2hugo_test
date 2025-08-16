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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KC226PZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYbUNpqfrXZvM4nJXyiLlIsUj8ggUszEJ4baa6fLSquAiAHoXUlzWs4Ix7p4WcExm%2FuHVUVaB59BkcoHAciFa1tnyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHLm00bZshPpgNYNwKtwDhUEfMTChX9fGW9r1y%2FN4aFV%2F9Ah%2BA69Ru0yC9WjNLQk0HCobtfcGcAxt3oA2McNGJ7peR0DLqoiFni179bfgcBTDq53GT9gv1%2BCbGzCcpAyWGGEXeb%2F36C%2FL1d5EzD7OtVa1xv0rS5zQo4wFTt3R6oPsY9oJWA%2BoRw98kyG3t%2FzPRdNoY5eHRi%2BxKB4Ibnk%2FAqlkXxeQ0XQSHfH7jRPXDmD4tmpJed91y%2BSgRuhl4XbCapbl1kS4kR7OKPizWZYCcyWsuj2AYKAh4GSQvWELLoK%2FxaHnXj5obpauDs976Xh6M0SWVC4g5omK2k3VljLh4fu6iP3uyBgy3gIClEprr8nj17pOPDY8adqFVCDLlA8BWmv8H%2Bn2Ne53N5VM0ygqFfTR8kTpbWgWGYAbDNl8mJWCpsWYggJU0XAfW8YdYFAOq2hD7AzwWyRUpRnXCnNRlNPEziFtz5GWakwjHljJWXrRzy%2BeymRw20bOtYNvYGqlnUgPELATV6ddNFk5g8c%2FVmRMb8p99skNpYfHs7xovUA6z0dohM2mVjAhpp6tEM53vWUDC5CdaCTuiEwczMxnzK8%2B8RqLzyD0MY0LuOXk2Ojph5Y7yXBHNKtABWNTyXS9JFwR1HvdNlPzku4w8ZmCxQY6pgEAuXkJXlS1E%2BkxoOwYgq2h94t32cVDR7dfz%2Bt78dUCU4IeALTFt2TSTfBz1SpuN59XY3EWd8XrjTx5zHCKqzv9yirEFijoGDv%2F84qfrUgOyGFyls67ACda9TEGV%2Bm5kUe4TCpOyaVKxjYXHXgPdxErOgk51%2Fg0gSBI1V3tmUYFHDiHWkZr9p1Kf%2FE4PK0XeXQxO3QO%2BdqpvPdAJqma3yDJNUvlfLgc&X-Amz-Signature=cfcbf95e66cc096c647552cd282ca7451bc6d2304cc5e31c6c52914161f66b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KC226PZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYbUNpqfrXZvM4nJXyiLlIsUj8ggUszEJ4baa6fLSquAiAHoXUlzWs4Ix7p4WcExm%2FuHVUVaB59BkcoHAciFa1tnyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHLm00bZshPpgNYNwKtwDhUEfMTChX9fGW9r1y%2FN4aFV%2F9Ah%2BA69Ru0yC9WjNLQk0HCobtfcGcAxt3oA2McNGJ7peR0DLqoiFni179bfgcBTDq53GT9gv1%2BCbGzCcpAyWGGEXeb%2F36C%2FL1d5EzD7OtVa1xv0rS5zQo4wFTt3R6oPsY9oJWA%2BoRw98kyG3t%2FzPRdNoY5eHRi%2BxKB4Ibnk%2FAqlkXxeQ0XQSHfH7jRPXDmD4tmpJed91y%2BSgRuhl4XbCapbl1kS4kR7OKPizWZYCcyWsuj2AYKAh4GSQvWELLoK%2FxaHnXj5obpauDs976Xh6M0SWVC4g5omK2k3VljLh4fu6iP3uyBgy3gIClEprr8nj17pOPDY8adqFVCDLlA8BWmv8H%2Bn2Ne53N5VM0ygqFfTR8kTpbWgWGYAbDNl8mJWCpsWYggJU0XAfW8YdYFAOq2hD7AzwWyRUpRnXCnNRlNPEziFtz5GWakwjHljJWXrRzy%2BeymRw20bOtYNvYGqlnUgPELATV6ddNFk5g8c%2FVmRMb8p99skNpYfHs7xovUA6z0dohM2mVjAhpp6tEM53vWUDC5CdaCTuiEwczMxnzK8%2B8RqLzyD0MY0LuOXk2Ojph5Y7yXBHNKtABWNTyXS9JFwR1HvdNlPzku4w8ZmCxQY6pgEAuXkJXlS1E%2BkxoOwYgq2h94t32cVDR7dfz%2Bt78dUCU4IeALTFt2TSTfBz1SpuN59XY3EWd8XrjTx5zHCKqzv9yirEFijoGDv%2F84qfrUgOyGFyls67ACda9TEGV%2Bm5kUe4TCpOyaVKxjYXHXgPdxErOgk51%2Fg0gSBI1V3tmUYFHDiHWkZr9p1Kf%2FE4PK0XeXQxO3QO%2BdqpvPdAJqma3yDJNUvlfLgc&X-Amz-Signature=64b36aaa7c800f6ec9caaddd411963bdc8b1859a3292ece18aa07f15f80640ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
