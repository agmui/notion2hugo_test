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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXBKLPY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARxba%2FEjbY0bvpsdqjkPHpXgFsuUUP5AnfE1yPsxF7bAiBI%2BUuwrJZR6grD9NFO8A17qwf3Uwryn2iZ92wLtZG65Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMGy%2BsS6WC8E1%2Fn18QKtwDx2pBWhoCIqzBIwCVSfE3MkdUSaFag%2BsZ%2BBXFUoa4c16PI%2FpotqfRXzf0M1qFUPrCQd4s%2BjNYFMrib72%2BmoR0aYabGP3DqocPELbtgIi%2BreO0vbUUSx%2FlhyWJUjDkY8PEHmtMBar3ckFoZM6oRVxtprp1t1oRDh77tkhrSmSSGnGIHlrV19DXykQU1MmuxcVcIVr2BopfUASaiKkyT9yxwICFL7F3W3trJwex1mKUaSJNQh6RwmE2Q%2BPJjrW2OOtU0tvMktiECKvLyL9yf6WZRbk93wzJAzz0VHCz9Uk4W%2BbyxBsUeftlFPfRPVWBJmmGXzq%2FLcLV322Ns%2Fj04VDViIWIMMU9DGc%2Fyyet%2BSqnkD6bVRkos4NmNUyZUszNEv1FyKjPnQ2DeXYaQps8%2Bpi4Glm6V2N8q2NuHrgcwmDBfj4iuLvZM5pmcrB9lPs4k6NrNEcn9vY2xmEzkNRFCHtTRsqrpcmRv3%2Bvci5DSiK8KNVDlJ7eNCUCaY9iBCJgRpRTdlTJFc6voQJm5d416ODZBMV2mWD5YVSe%2Ft9cEOOWX%2F%2B%2B9Psjgwar%2FKeutuxbEeacGSMEVoWEHieAerrxhzuZwE9QvEBpxQEapl2Pg3jIrUe4iM979oLF%2BT9aI2swvPj%2BvwY6pgFq7NjJeYCrD4pmdIfL1Rk1M1pmUL%2FInUqmBxve9cmW4yTBiuXwTsvNIvUF8nrT633IGnlfZeWfTIgh5Scb%2FogXankupSGMAV7%2Bk6tetKsdKOjE66I2V3RRPlte6SbTO1Ekm6f%2BoApH8j%2BoR5U%2FzlAyTmLWupX4gfSoB6ECc3MCKgtcDTTSQadrizefdTwCW7pjs%2Fz8urDrc4VezpT%2BnGmFCXxSivtC&X-Amz-Signature=6b2222430b532a8f03f4879196b09c83d624a29c1de1309b7a06ce68c1a69ced&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXBKLPY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARxba%2FEjbY0bvpsdqjkPHpXgFsuUUP5AnfE1yPsxF7bAiBI%2BUuwrJZR6grD9NFO8A17qwf3Uwryn2iZ92wLtZG65Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMGy%2BsS6WC8E1%2Fn18QKtwDx2pBWhoCIqzBIwCVSfE3MkdUSaFag%2BsZ%2BBXFUoa4c16PI%2FpotqfRXzf0M1qFUPrCQd4s%2BjNYFMrib72%2BmoR0aYabGP3DqocPELbtgIi%2BreO0vbUUSx%2FlhyWJUjDkY8PEHmtMBar3ckFoZM6oRVxtprp1t1oRDh77tkhrSmSSGnGIHlrV19DXykQU1MmuxcVcIVr2BopfUASaiKkyT9yxwICFL7F3W3trJwex1mKUaSJNQh6RwmE2Q%2BPJjrW2OOtU0tvMktiECKvLyL9yf6WZRbk93wzJAzz0VHCz9Uk4W%2BbyxBsUeftlFPfRPVWBJmmGXzq%2FLcLV322Ns%2Fj04VDViIWIMMU9DGc%2Fyyet%2BSqnkD6bVRkos4NmNUyZUszNEv1FyKjPnQ2DeXYaQps8%2Bpi4Glm6V2N8q2NuHrgcwmDBfj4iuLvZM5pmcrB9lPs4k6NrNEcn9vY2xmEzkNRFCHtTRsqrpcmRv3%2Bvci5DSiK8KNVDlJ7eNCUCaY9iBCJgRpRTdlTJFc6voQJm5d416ODZBMV2mWD5YVSe%2Ft9cEOOWX%2F%2B%2B9Psjgwar%2FKeutuxbEeacGSMEVoWEHieAerrxhzuZwE9QvEBpxQEapl2Pg3jIrUe4iM979oLF%2BT9aI2swvPj%2BvwY6pgFq7NjJeYCrD4pmdIfL1Rk1M1pmUL%2FInUqmBxve9cmW4yTBiuXwTsvNIvUF8nrT633IGnlfZeWfTIgh5Scb%2FogXankupSGMAV7%2Bk6tetKsdKOjE66I2V3RRPlte6SbTO1Ekm6f%2BoApH8j%2BoR5U%2FzlAyTmLWupX4gfSoB6ECc3MCKgtcDTTSQadrizefdTwCW7pjs%2Fz8urDrc4VezpT%2BnGmFCXxSivtC&X-Amz-Signature=64341f8f5c6fd7c83fd3824d59643d855a9c5e118af45ba68143e8240dca2c72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
