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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SF7HYFQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD9EYAD5o9guSXuJk2iVgmqlO9WnbdddwD1qjIrefWyzQIhAP%2F%2BKTMMchheMrCeSrBUnXzBV8Z0s8dVLw7c%2FjeiBJv%2FKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8YMQ9jGDRY3rnPrMq3AOeeeAX1h4WR%2FKvvLHYmBnDDRLb%2BWxohhy7uv%2FmyD5Ss05WDTx201lKhHfQyFPoeDhMhHjTf8r2foWHSUD0fF1%2F9E7RihlHhBq9Doh%2BA1ZWloxEbttXecU45uprKdcl3OAGyviw9N1X4w6bZiikv50C%2Fil2VrDs7vrhl%2BFviEmrnBwwdexJDXGm1OFhzTVPrzvx4J8%2BO2yU6emyeKaWujF2P1n7AY1bsKcz0YfXdy5nmqQGn2HP4YTcp5qy69YGRGHnMZHyp3HrTpo5s%2BWwCt%2FPZ%2BnER66xt%2BAf43fivbUN%2FSV94UNQNaZQ0nAILkhKE4k%2BIK0FQx0s1Gomzs8FZrHWZ%2BCchNHYe6baujZGADUEKJsxoBanW4tPcnkyh2hEoPV8c810KibAnnbxrcsva83LzmtXzlXBHGrptqQW%2Bsn2n3P8YGbrMmBfeNgmFDiGNEb4cO1SE2ExMfgRUmC2pDkdwhBNcK6XEIeG4tBMF7OexdP%2F5wGu9y0cI4v9yshK5vZmAeMkY9czvj2Qme5AUz6xRinpwAFHn6xm7cbVQ2QizkDY68dW3IFCBcllDY5LnZAwitplP7NeqTw3zIslWcYPA06v1zDj4WgvDx%2Byc2p7Sqlj30mMu8KxpHFvGDCxyNC9BjqkAfhffDrKNRTOocng1gJ8u1q46%2FEKnFBfYRork5ja2R5Ju68boRrWcb0mFZ5pTHubSHnMOc8UoF%2Be01a5UcWWZI%2BOFRVOBg07SVokjqP79qnJQFUQvePERUiQ7Nd0V4scjDqPyXS%2F6nldpwlAGDZtWW8VFkzHT%2B%2FPbv0%2B1KtzNQ8DpxS%2BToF2vvLPYhPbWp3uB5A7d5dm8O6VPIIeZyslLe74KFyR&X-Amz-Signature=f3e14964e233a153ce014231ff65bd66d5b7f46af660b08714171d62bb1c1264&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SF7HYFQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD9EYAD5o9guSXuJk2iVgmqlO9WnbdddwD1qjIrefWyzQIhAP%2F%2BKTMMchheMrCeSrBUnXzBV8Z0s8dVLw7c%2FjeiBJv%2FKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8YMQ9jGDRY3rnPrMq3AOeeeAX1h4WR%2FKvvLHYmBnDDRLb%2BWxohhy7uv%2FmyD5Ss05WDTx201lKhHfQyFPoeDhMhHjTf8r2foWHSUD0fF1%2F9E7RihlHhBq9Doh%2BA1ZWloxEbttXecU45uprKdcl3OAGyviw9N1X4w6bZiikv50C%2Fil2VrDs7vrhl%2BFviEmrnBwwdexJDXGm1OFhzTVPrzvx4J8%2BO2yU6emyeKaWujF2P1n7AY1bsKcz0YfXdy5nmqQGn2HP4YTcp5qy69YGRGHnMZHyp3HrTpo5s%2BWwCt%2FPZ%2BnER66xt%2BAf43fivbUN%2FSV94UNQNaZQ0nAILkhKE4k%2BIK0FQx0s1Gomzs8FZrHWZ%2BCchNHYe6baujZGADUEKJsxoBanW4tPcnkyh2hEoPV8c810KibAnnbxrcsva83LzmtXzlXBHGrptqQW%2Bsn2n3P8YGbrMmBfeNgmFDiGNEb4cO1SE2ExMfgRUmC2pDkdwhBNcK6XEIeG4tBMF7OexdP%2F5wGu9y0cI4v9yshK5vZmAeMkY9czvj2Qme5AUz6xRinpwAFHn6xm7cbVQ2QizkDY68dW3IFCBcllDY5LnZAwitplP7NeqTw3zIslWcYPA06v1zDj4WgvDx%2Byc2p7Sqlj30mMu8KxpHFvGDCxyNC9BjqkAfhffDrKNRTOocng1gJ8u1q46%2FEKnFBfYRork5ja2R5Ju68boRrWcb0mFZ5pTHubSHnMOc8UoF%2Be01a5UcWWZI%2BOFRVOBg07SVokjqP79qnJQFUQvePERUiQ7Nd0V4scjDqPyXS%2F6nldpwlAGDZtWW8VFkzHT%2B%2FPbv0%2B1KtzNQ8DpxS%2BToF2vvLPYhPbWp3uB5A7d5dm8O6VPIIeZyslLe74KFyR&X-Amz-Signature=b7aaa4935c8bce7cf3a8608ef663bd45d29b20398543828ec3a2cd0533aae0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
