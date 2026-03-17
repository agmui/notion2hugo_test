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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDDODZH%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDrqUozwJkuKc48oQzsAGdkPBerv%2BqHqbf%2F0OLuSeTHZAiBqXoifzLED%2BfSEZNO%2B52slAr9TTbcqDhVASl2sy7RBFCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl7E%2FTPS3Hq%2FUlX2mKtwDfDFlduYptE%2BNg%2FezegkRduE4IU1UHDmERwWCWlaZA0qE7TOo5Hmor3bYMUXHq3RbF%2Fcm5BHob8GZUanXo6lBCKY3%2F0D%2Bin6ni1ZTkAyT02Z9nuph%2B4OS76yJyfaWQorufeTODFTQ2L8mJgwhm6fb3%2Fp%2BPcmJb%2FOSyG1rtCnv0aO8jFcBhJdsAERbyVrfIsfpcZIPEvLhfdu61JRJ1u3WEa389fr0dSW3wysyzFp%2B%2F1EK43WeKx22vYSY14sPNgmIwtLcuD7naKOoH4d6MWGNVKTauFOhAOGPwzoESIeN2DyAiDGs2ps6V9su7BIFrpuPADlP6WaCMbphWobpjT2lYVWUwRkZNob2JB685LykXSJGPr9FpcEkBKa1Zoc2Dh%2BAop0Ya6EEavoiXf5q3da7CSZclfpuDHiMErrV3qEixG%2BdkBkcxrFh0VrdhA0nRzG%2BQnIdGtYqewe2Ua1iQ5tA7xGYLMaV956Jafm5MLlmp9Xj97Eyn6zTUBTkrISGKykcSAtfo411%2BeperDozF0wjVLlVS1hGY2cRVXJu1SO9RlDJsU4YB2iQ4fvhCvbJs1xs2H7%2BqI1I%2BU0nfz7e5t4dl8md1yagRHSXmwvbBtSEOn3qwL1j8%2FRmHiHwnHMw2ufizQY6pgEbCPMHJjklrzU9dIOzciDzxHnAUIwMrlvAKyTXz02QFHLGFB61Uf9Myqhe%2BD4qb4ZPajnsO6Bv6dyzEiqGtai5fRL5WQfjrcbpPjw2qK2yQ0WdvrGYQODpXW7LypeoqEFtZQeEk7Cnf9bRPOmvxCB8uBxDv5cWX59KDbZUOyXDDW%2FCmBaAIrkU9COLD8TRnvX1Kzdu6JOWiI5N9ggsXi%2Fa3ajkEu%2FP&X-Amz-Signature=a0a02a1e8be35feae5bea62fc7493f6c434ad33b0060636f8c2e49ad6c422aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDDODZH%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDrqUozwJkuKc48oQzsAGdkPBerv%2BqHqbf%2F0OLuSeTHZAiBqXoifzLED%2BfSEZNO%2B52slAr9TTbcqDhVASl2sy7RBFCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl7E%2FTPS3Hq%2FUlX2mKtwDfDFlduYptE%2BNg%2FezegkRduE4IU1UHDmERwWCWlaZA0qE7TOo5Hmor3bYMUXHq3RbF%2Fcm5BHob8GZUanXo6lBCKY3%2F0D%2Bin6ni1ZTkAyT02Z9nuph%2B4OS76yJyfaWQorufeTODFTQ2L8mJgwhm6fb3%2Fp%2BPcmJb%2FOSyG1rtCnv0aO8jFcBhJdsAERbyVrfIsfpcZIPEvLhfdu61JRJ1u3WEa389fr0dSW3wysyzFp%2B%2F1EK43WeKx22vYSY14sPNgmIwtLcuD7naKOoH4d6MWGNVKTauFOhAOGPwzoESIeN2DyAiDGs2ps6V9su7BIFrpuPADlP6WaCMbphWobpjT2lYVWUwRkZNob2JB685LykXSJGPr9FpcEkBKa1Zoc2Dh%2BAop0Ya6EEavoiXf5q3da7CSZclfpuDHiMErrV3qEixG%2BdkBkcxrFh0VrdhA0nRzG%2BQnIdGtYqewe2Ua1iQ5tA7xGYLMaV956Jafm5MLlmp9Xj97Eyn6zTUBTkrISGKykcSAtfo411%2BeperDozF0wjVLlVS1hGY2cRVXJu1SO9RlDJsU4YB2iQ4fvhCvbJs1xs2H7%2BqI1I%2BU0nfz7e5t4dl8md1yagRHSXmwvbBtSEOn3qwL1j8%2FRmHiHwnHMw2ufizQY6pgEbCPMHJjklrzU9dIOzciDzxHnAUIwMrlvAKyTXz02QFHLGFB61Uf9Myqhe%2BD4qb4ZPajnsO6Bv6dyzEiqGtai5fRL5WQfjrcbpPjw2qK2yQ0WdvrGYQODpXW7LypeoqEFtZQeEk7Cnf9bRPOmvxCB8uBxDv5cWX59KDbZUOyXDDW%2FCmBaAIrkU9COLD8TRnvX1Kzdu6JOWiI5N9ggsXi%2Fa3ajkEu%2FP&X-Amz-Signature=a257f447454ecb84396fcf707de424cb45df3617b48989e7940c800dc5eaf0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
