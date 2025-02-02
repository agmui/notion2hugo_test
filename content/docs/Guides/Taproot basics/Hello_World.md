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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6OJICOD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2LQUy%2B9hSCINfUkWKiOkA%2FBAXj0Vg9eCSoxLRJVwfkAiEAvl19Coe%2Bt8EEEB2vDv0hJQKOxP9Y%2FLbYMN4NheTVoX0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH46xkxNViACmRmDAircA%2FgdsVxkGw%2FgBu2IbMZGBhTpjWOEUhH%2Fpkw3C5Qrrm6YcppWwk4tLpVwd30r1ahFycBC3kTYlKdn5vH%2BL2n4amuXaZelbN5uEJDXRvel2udtfB8qWC1q7N9VnJjbrZooIcQwz8G5WeSZTCn7n5UtL1PqbfEHYi3phNQNc%2FQ5u5nDICWUl0jk2B1sH8ot6%2B%2Bu5%2FmZZ1uQrA%2FRNoU1ByEF9%2FaZ9H3Tn0QmuGtj5%2Bc%2BYhJ3BdoSzA4rxly4eIIdRXH7sALgSBOPrm0XRv2xhsYn2j4nanGPPG9H0hJoq5dHqi%2FvNBG7%2Fh%2FFbPUtYdR03Tp9qXWGmsYgueZhobWozsyb5u7lqsCOIETvRwQP%2FmpZ4rT%2FAWG4M2v1FOZmly0F2qZbTss2Qk2hFIgzlVlOM3UMyRoLXHPFMHR%2BCFWGGEnhm8dprrNRfCbYMEize3OU%2BHW8RChDtHBdNWej90yvKsVdb%2F8b4ex1iYSFjk4y9Krhx9A2Gi0WoBSLMJl28BW52DF5FZmyrHDAmPHFIK2XXlgKhYfjm47gnU9n8Vm4M3ErTkZsE57UWc%2Bo66pzRtBZaGtxbuT9%2BFtILboQ%2BVeAqbzLbMFubKoYEnl8KHsJLeOc2vJDRpAK8ToodWjrwLc2MLeg%2B7wGOqUBroVQUEnmbTvHsYSpnL9q9zHLhd8J2c2LAPmT%2F8%2BEUjsPZr%2FIy%2FxXiamfCoaHsZ29BA4w6seJC78T1BbEoGhwTygg9dgyYukAhd9SbEP3hcaUApAuViyT41JWVwc7cev3yUNY8T5PJ7OiGB%2BqAQipe60VZ29eNScPFSb6xdm0ZLhRVv0ar%2FXJ%2BP5sFi3IMfp%2BQQRlEeaZzH9Xs3NXIl6JQ%2Bc%2Bw3jF&X-Amz-Signature=16a1f5680fa7d5cfe8f1a65552e20767018b492a6c3e00fb319e6b4192028cae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6OJICOD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2LQUy%2B9hSCINfUkWKiOkA%2FBAXj0Vg9eCSoxLRJVwfkAiEAvl19Coe%2Bt8EEEB2vDv0hJQKOxP9Y%2FLbYMN4NheTVoX0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH46xkxNViACmRmDAircA%2FgdsVxkGw%2FgBu2IbMZGBhTpjWOEUhH%2Fpkw3C5Qrrm6YcppWwk4tLpVwd30r1ahFycBC3kTYlKdn5vH%2BL2n4amuXaZelbN5uEJDXRvel2udtfB8qWC1q7N9VnJjbrZooIcQwz8G5WeSZTCn7n5UtL1PqbfEHYi3phNQNc%2FQ5u5nDICWUl0jk2B1sH8ot6%2B%2Bu5%2FmZZ1uQrA%2FRNoU1ByEF9%2FaZ9H3Tn0QmuGtj5%2Bc%2BYhJ3BdoSzA4rxly4eIIdRXH7sALgSBOPrm0XRv2xhsYn2j4nanGPPG9H0hJoq5dHqi%2FvNBG7%2Fh%2FFbPUtYdR03Tp9qXWGmsYgueZhobWozsyb5u7lqsCOIETvRwQP%2FmpZ4rT%2FAWG4M2v1FOZmly0F2qZbTss2Qk2hFIgzlVlOM3UMyRoLXHPFMHR%2BCFWGGEnhm8dprrNRfCbYMEize3OU%2BHW8RChDtHBdNWej90yvKsVdb%2F8b4ex1iYSFjk4y9Krhx9A2Gi0WoBSLMJl28BW52DF5FZmyrHDAmPHFIK2XXlgKhYfjm47gnU9n8Vm4M3ErTkZsE57UWc%2Bo66pzRtBZaGtxbuT9%2BFtILboQ%2BVeAqbzLbMFubKoYEnl8KHsJLeOc2vJDRpAK8ToodWjrwLc2MLeg%2B7wGOqUBroVQUEnmbTvHsYSpnL9q9zHLhd8J2c2LAPmT%2F8%2BEUjsPZr%2FIy%2FxXiamfCoaHsZ29BA4w6seJC78T1BbEoGhwTygg9dgyYukAhd9SbEP3hcaUApAuViyT41JWVwc7cev3yUNY8T5PJ7OiGB%2BqAQipe60VZ29eNScPFSb6xdm0ZLhRVv0ar%2FXJ%2BP5sFi3IMfp%2BQQRlEeaZzH9Xs3NXIl6JQ%2Bc%2Bw3jF&X-Amz-Signature=fa7b994ff53c76ccdf506c7630464ce66b16ba314dc50463aa72606ae843655c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
