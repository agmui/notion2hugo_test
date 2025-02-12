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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHAN43H%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnNEgzjPK5paashUI9f9padIMuu7ZWLuO3dhV7sQE%2FVAiBCPqdCYyMY5IbQiCAuYfVmCriT%2FmZrSY%2FsgdZDe7G0AiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl3fj%2FQOqAoEeZ98UKtwDLv6Bk8yuLL5NPm1d1G1n57CP8TnJcKIyVseoDj6uY%2BgID38cOKqg51oV%2Bw%2FuyAJVCQIt%2B3Kbs%2F3%2B0OjzVmA62gUY36F5QnMbINKi1gw2YvGD%2BTgMO%2B%2BN3pF6cxQPEporxiHffDdP8b8yTJoI6CbdFzov2Si%2FR04ax33%2Bi0Z4sPyYOtIWNmCQrvyU0FOTZmgSuEkFN4b4e2xsGAvT6dmQsjVx8J8cqnG1fahT7z%2BPH7qxyUMMb8x6Bi9ZB8%2F8ScfaTTXU1d%2F7xnCM9P1QXtra7it0fCmg7tMShn%2FE3dGcsx5RPySsWmHwBL1Zg5tP9mocxjfJA0u8meT%2BQ6Y91RExcoyPYNOQPLEveFYvzH1DXMCN4B6E9LoXT%2Fm5%2BnJRnoR9rP6%2B%2F3JFYEjnYwCQxmc21UBBVXq2qIp%2B1NT%2BRv2GJOc247CNsTkdLXC1M09JhlCmH1nIESxegmbdUhLUHd2vhYAfDqufZx26MuuAbj39CN3KRE273K5MCvsb1jpyIbQuJ3B3FJwuc0GThH0AFz4TvOHQaYtKP8LlzOfRsBD1M1YMi8AcmBDjbDh%2FFMMIDVHOrpu%2BJMJpjMW%2B7ToAkhESUtTNIl9ghWbuvXbM17FBg0gg9U81jLPH4rdgJ%2FUw8eivvQY6pgHfSJTM2VINMRziIjN2dngk8w%2B3f9gIMN8NkvliTxB2F4MRQp6MRqcCy94Ck%2BVggqQUTtB2oWQQMgpqMN7%2Fbp8yUrPHM4FUFDS%2Fd%2B%2BqOSYFVA%2FkSASvsYY3ZoCH%2F7Z2gkWgVySmxZM2rbhQxalrAgS%2BeE5eH9Ru0NC%2BNi6HP9alBKiegw%2B8glSm9DbdLF5f3e4A6XKCOQzFy9CUgPO3Ld8UgqP4Dt67&X-Amz-Signature=885320821e4e9829b2f6bc156a86872fff0436b0b4cca29f135aac267fb9507f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHAN43H%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnNEgzjPK5paashUI9f9padIMuu7ZWLuO3dhV7sQE%2FVAiBCPqdCYyMY5IbQiCAuYfVmCriT%2FmZrSY%2FsgdZDe7G0AiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl3fj%2FQOqAoEeZ98UKtwDLv6Bk8yuLL5NPm1d1G1n57CP8TnJcKIyVseoDj6uY%2BgID38cOKqg51oV%2Bw%2FuyAJVCQIt%2B3Kbs%2F3%2B0OjzVmA62gUY36F5QnMbINKi1gw2YvGD%2BTgMO%2B%2BN3pF6cxQPEporxiHffDdP8b8yTJoI6CbdFzov2Si%2FR04ax33%2Bi0Z4sPyYOtIWNmCQrvyU0FOTZmgSuEkFN4b4e2xsGAvT6dmQsjVx8J8cqnG1fahT7z%2BPH7qxyUMMb8x6Bi9ZB8%2F8ScfaTTXU1d%2F7xnCM9P1QXtra7it0fCmg7tMShn%2FE3dGcsx5RPySsWmHwBL1Zg5tP9mocxjfJA0u8meT%2BQ6Y91RExcoyPYNOQPLEveFYvzH1DXMCN4B6E9LoXT%2Fm5%2BnJRnoR9rP6%2B%2F3JFYEjnYwCQxmc21UBBVXq2qIp%2B1NT%2BRv2GJOc247CNsTkdLXC1M09JhlCmH1nIESxegmbdUhLUHd2vhYAfDqufZx26MuuAbj39CN3KRE273K5MCvsb1jpyIbQuJ3B3FJwuc0GThH0AFz4TvOHQaYtKP8LlzOfRsBD1M1YMi8AcmBDjbDh%2FFMMIDVHOrpu%2BJMJpjMW%2B7ToAkhESUtTNIl9ghWbuvXbM17FBg0gg9U81jLPH4rdgJ%2FUw8eivvQY6pgHfSJTM2VINMRziIjN2dngk8w%2B3f9gIMN8NkvliTxB2F4MRQp6MRqcCy94Ck%2BVggqQUTtB2oWQQMgpqMN7%2Fbp8yUrPHM4FUFDS%2Fd%2B%2BqOSYFVA%2FkSASvsYY3ZoCH%2F7Z2gkWgVySmxZM2rbhQxalrAgS%2BeE5eH9Ru0NC%2BNi6HP9alBKiegw%2B8glSm9DbdLF5f3e4A6XKCOQzFy9CUgPO3Ld8UgqP4Dt67&X-Amz-Signature=7346c2d43736b421205058fd1db9cc44c8139015eef7e15303562152bd5af83b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
