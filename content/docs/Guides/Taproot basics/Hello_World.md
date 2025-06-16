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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWW6JX3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCEdQ1bj3vECqGl88V07VNq4TxzmMPQ0PFdn9kcqimVxQIgZ82lQZzImS9MI7ND%2FK3BDPPBZvVINTN9DEQeOZ50GfMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDK4VB2f31pJOdTHlACrcAxHBmptWNsMj08oiapd7mm6rActcpZL1%2F2aJDzEyiAsC%2BJRPEswhRfFj2%2FTgsGdJ9EpbX8lPdDcIuNzrEQ3WdCStxMC24R5K7dWmc3yUR%2F8geu%2BEl4TT2TeBYo7XPvYFElQ0EskElDr3Kg7kT1N8c%2Fwp81EaCeEabhj8JIJXqv6a6BUKnyannWqfmSsXrW%2F9H0zz%2BBQdvhf2Dr%2Fr4erBq2gkvmpK1QxxhTa00dQSWTVBkaFEL1EHcsUHF2K4OOkwJJlGY9fetnUMIl2Q474jsUfkYT4x4QEy%2F7mdfFfWoiwfT998RdzGgjBSqeDAiJoTw%2FRpQdzkfEUhdfJkYr5ncqIsJoNloc82pJ8qn%2B4VD6k2RimcrWeS7PzB%2FoAHo%2FG7uyHS65CQwy5boXek3sV%2BUz%2FlExkG996n3tE2076f1P9VgamxKajbfu0KzL08H0YjbrQ4cN3eq5evMU5K1N7cbaS%2BYVCVXyJ0Rqd%2F2eFUw3q1EPNXO9q8Vw24Uo0R%2FDt78ke1%2Fwde7cMJ%2BnsF74e8wxpqMmPyJx5y6QqjdY1gqJjO8Z36csVMR9qVHO7Wz%2FeAgAaKAJx7gmeWaw%2BvcI4C55k6U3QyAVQTIcrhq8RBWi1%2BEEBEJFl%2BQabFdq89MMrfwcIGOqUBGhXfFNogz0TFzlRNon%2B0I7KDpuDhxzSWxjEwq4czr06230xE6%2Bn4RI3o%2FQQene8%2BqfGZ9%2Bu%2BccLsLz3OkHJB%2F7LuQh010I7JwmG7v865E45f2zb9KsjVzffUtV1z%2FQKQVqXzDP2WY6nZd%2FHpgQnSMQhWa4iViYCJ4dZH0A%2FP%2FokmI0Gafy7ltyUAmL8L3CKZYvskiDHei29t%2Fby%2B%2B8e%2FGI6dRnXt&X-Amz-Signature=f814bfb0761c4708651f3e360e42038616a2b942701c2479ab390aa6b75345e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWW6JX3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCEdQ1bj3vECqGl88V07VNq4TxzmMPQ0PFdn9kcqimVxQIgZ82lQZzImS9MI7ND%2FK3BDPPBZvVINTN9DEQeOZ50GfMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDK4VB2f31pJOdTHlACrcAxHBmptWNsMj08oiapd7mm6rActcpZL1%2F2aJDzEyiAsC%2BJRPEswhRfFj2%2FTgsGdJ9EpbX8lPdDcIuNzrEQ3WdCStxMC24R5K7dWmc3yUR%2F8geu%2BEl4TT2TeBYo7XPvYFElQ0EskElDr3Kg7kT1N8c%2Fwp81EaCeEabhj8JIJXqv6a6BUKnyannWqfmSsXrW%2F9H0zz%2BBQdvhf2Dr%2Fr4erBq2gkvmpK1QxxhTa00dQSWTVBkaFEL1EHcsUHF2K4OOkwJJlGY9fetnUMIl2Q474jsUfkYT4x4QEy%2F7mdfFfWoiwfT998RdzGgjBSqeDAiJoTw%2FRpQdzkfEUhdfJkYr5ncqIsJoNloc82pJ8qn%2B4VD6k2RimcrWeS7PzB%2FoAHo%2FG7uyHS65CQwy5boXek3sV%2BUz%2FlExkG996n3tE2076f1P9VgamxKajbfu0KzL08H0YjbrQ4cN3eq5evMU5K1N7cbaS%2BYVCVXyJ0Rqd%2F2eFUw3q1EPNXO9q8Vw24Uo0R%2FDt78ke1%2Fwde7cMJ%2BnsF74e8wxpqMmPyJx5y6QqjdY1gqJjO8Z36csVMR9qVHO7Wz%2FeAgAaKAJx7gmeWaw%2BvcI4C55k6U3QyAVQTIcrhq8RBWi1%2BEEBEJFl%2BQabFdq89MMrfwcIGOqUBGhXfFNogz0TFzlRNon%2B0I7KDpuDhxzSWxjEwq4czr06230xE6%2Bn4RI3o%2FQQene8%2BqfGZ9%2Bu%2BccLsLz3OkHJB%2F7LuQh010I7JwmG7v865E45f2zb9KsjVzffUtV1z%2FQKQVqXzDP2WY6nZd%2FHpgQnSMQhWa4iViYCJ4dZH0A%2FP%2FokmI0Gafy7ltyUAmL8L3CKZYvskiDHei29t%2Fby%2B%2B8e%2FGI6dRnXt&X-Amz-Signature=93d222c562c0d7ad76e81786e5d800db84c0a895fd2580de209374dc0dbdf1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
