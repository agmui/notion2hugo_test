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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JESQPF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC4AGLI9jf9t91rDfft4p1bEc4uexjFOWwH5t3HX6Qd1AIhALqDe4AmjHEYTdUfgYkQRrTe8tqZN4dfufNijLg54k3JKv8DCG4QABoMNjM3NDIzMTgzODA1IgwDr8TlgQpHQR3lSEsq3ANQSSEjbgWT4o12cStONVP7r%2B0qayq%2Fqv%2FhjNsSEiGig6A2kX%2Fo%2FTJ1uGObbQxF8L5nvBxnugwzGv6NYsknSyGjrXY0ekxnIcIArz336QTQPfVzMxgK6cvMCTjP3KnRg4xTIiHXVKN%2BQySGsBYBKxLefevOpmxBQE258FA%2BPJYT3vLp5zc46W8SAL%2BoNeOuAcPaXGM5aBoV%2BpvuNuTNmDdaD2r1312cuYrTrDjpPdpGgXhB%2FDHKKCEk8BHznGTt0TlFB0Yfk%2Bip1thaq0%2FzugbjRciiLsBw1oTxgLWNNKANyUPQRwpFumPIwecghts3b60GH%2BR2jLVXUBmWd6RdVV%2BB0gVEZuxz81uIQDBJouuxbKVs7kjszG7CGkCngJjcAchYsG6drYLlP22GbkwhF43Iq3hpKcs5hYhav22b4edaTQ6Pwg8TGS5BRkyqIo7uUUIRmZrIlQrkSXTnvsLBWmFtt%2FU%2F6CQetvH21vWdQYJWntEu272ly2l%2BOWdicA12j6IpNdoZaZZcCgj9a7SMr%2FqeL0RyeuSXGdWlffhEeIO2Xt6gd%2FPrRLF9GAx5gY00aBIKYYnbf3DmqV3Ifgls2fhSsqrHm0rstIHc9zALs3Si9S7GerkcUHqIi8m24jCJr63DBjqkAdP23LKFPlqp5gna0rgi2YenHP3iXeuLHp1Wto3j%2BMlmzdzWEtLLB%2BVv1NeKr4Kv6jBw88enVrT4z%2BzoJXdEXNIj9mFN5OQ1PtrSJjLPZBxMXyWBCVUhTwIsJTvwtNA3arHLr2dUdrDIdHJfV3Nuk03r9oOgj5VWhYyOPDsOQYnSJsoMSug0sKSTQLSdXrW4gQw%2FOfChngIR%2F9iEtci0F8t%2Br7Jq&X-Amz-Signature=e820b0a52b6069ffc194d6b37d5f696cb992bb3eb91b60d9182bd61ac16e42db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JESQPF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC4AGLI9jf9t91rDfft4p1bEc4uexjFOWwH5t3HX6Qd1AIhALqDe4AmjHEYTdUfgYkQRrTe8tqZN4dfufNijLg54k3JKv8DCG4QABoMNjM3NDIzMTgzODA1IgwDr8TlgQpHQR3lSEsq3ANQSSEjbgWT4o12cStONVP7r%2B0qayq%2Fqv%2FhjNsSEiGig6A2kX%2Fo%2FTJ1uGObbQxF8L5nvBxnugwzGv6NYsknSyGjrXY0ekxnIcIArz336QTQPfVzMxgK6cvMCTjP3KnRg4xTIiHXVKN%2BQySGsBYBKxLefevOpmxBQE258FA%2BPJYT3vLp5zc46W8SAL%2BoNeOuAcPaXGM5aBoV%2BpvuNuTNmDdaD2r1312cuYrTrDjpPdpGgXhB%2FDHKKCEk8BHznGTt0TlFB0Yfk%2Bip1thaq0%2FzugbjRciiLsBw1oTxgLWNNKANyUPQRwpFumPIwecghts3b60GH%2BR2jLVXUBmWd6RdVV%2BB0gVEZuxz81uIQDBJouuxbKVs7kjszG7CGkCngJjcAchYsG6drYLlP22GbkwhF43Iq3hpKcs5hYhav22b4edaTQ6Pwg8TGS5BRkyqIo7uUUIRmZrIlQrkSXTnvsLBWmFtt%2FU%2F6CQetvH21vWdQYJWntEu272ly2l%2BOWdicA12j6IpNdoZaZZcCgj9a7SMr%2FqeL0RyeuSXGdWlffhEeIO2Xt6gd%2FPrRLF9GAx5gY00aBIKYYnbf3DmqV3Ifgls2fhSsqrHm0rstIHc9zALs3Si9S7GerkcUHqIi8m24jCJr63DBjqkAdP23LKFPlqp5gna0rgi2YenHP3iXeuLHp1Wto3j%2BMlmzdzWEtLLB%2BVv1NeKr4Kv6jBw88enVrT4z%2BzoJXdEXNIj9mFN5OQ1PtrSJjLPZBxMXyWBCVUhTwIsJTvwtNA3arHLr2dUdrDIdHJfV3Nuk03r9oOgj5VWhYyOPDsOQYnSJsoMSug0sKSTQLSdXrW4gQw%2FOfChngIR%2F9iEtci0F8t%2Br7Jq&X-Amz-Signature=8648ce5e9d986ef777752f72b91a3c83bb7a25dde85dcf3be0b0d5201676d490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
