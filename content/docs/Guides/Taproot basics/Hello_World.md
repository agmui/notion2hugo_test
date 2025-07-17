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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7EVJII%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDrCH%2BqGD3Bfh6MSZfqUT7aQYAR98wazYXA7P4QbGsIMAIhAK8RlH9mYHnQGqN3Rij2HZoKfHI7nf8wCZo1pvr6vjvZKv8DCHIQABoMNjM3NDIzMTgzODA1IgxmHecJTOftDANlBV8q3AO%2BRSHpW8XKlJCJAV9BYk9BvNIi3QkLsZIjVTrqvugAgBJ0whCoIBBFf%2BONFHO1dH0%2B9eEhn3Figjn4qQ8IOR0aqhdWU5sL4w8Qz45wxYqVK4ihUK2np62thlzas5n819ujGPSuCFYjGZ%2BBPfbvDXKLzbUqPe6GbobiM8dYTSv2pZPgxj3%2BoAaRiMJ51I%2BzBTsHthQ6VHYt9Kz05DCRF7MYK5kksaHQfi8wAomdWJqqFJ841PvBzZBVa3PsPH2p52bwdEvb6fA%2FDUIClTmJGXilFsWZXfk9KyQBFHnMzvZ0goYXJjV0K6tecm50E5oT4NNsxAp2BbYpzpd2Y1iIIMYvC%2BzdKgmPt6t2Dt1XRMsuj8SNY9N4W%2BANjkyyegB6UqMyLVz5UYf8aTKsADUjMmIwLx9FS5g%2Fnu8SS7QneMWwkhOhVXQkUY9A7dp6htm%2FdE6GbJSQfYVc8xVkijwrZB2Uv%2F4F%2Fq7H%2F7jbs4oZ9Vl5h9tBGmzzxWAK9o93t6i6S9u6ddSif43GnCnWX3T6W36lrwRlnD4GbwhlIq3cpoBhmNs9U0gtuJXgFj3KRHrawvc9qP5G59R%2Bneeh3BKxhdX2lO0QUjSwD5R4bJBWYAxe5T5Ixn4KN5V52S0eeDCY6%2BLDBjqkAYkeaOOLaqupPfYC538yj%2Ft8qofW3Tu3kg3gNMDySfWTMeV7XYxaeUHV%2FSOo8sDoR5j%2F3tq7snyYi6pIvidsMCmRvVSp%2BHjmtRMj36nIMt8q0eatZMCO4qgj7y6%2FbSVbI0uxyfrlE1d8xue3332bpKmVRY1clWwuPsLiOLEMw8JOHora7m2QkzDIuMj1xA2a1acHa%2BAzUHhTY84k5OxSw6hQYnAJ&X-Amz-Signature=f91c21bc85522b17c21aae752c154a3baf7c8269896adfda9dd0c7a8b2849659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7EVJII%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDrCH%2BqGD3Bfh6MSZfqUT7aQYAR98wazYXA7P4QbGsIMAIhAK8RlH9mYHnQGqN3Rij2HZoKfHI7nf8wCZo1pvr6vjvZKv8DCHIQABoMNjM3NDIzMTgzODA1IgxmHecJTOftDANlBV8q3AO%2BRSHpW8XKlJCJAV9BYk9BvNIi3QkLsZIjVTrqvugAgBJ0whCoIBBFf%2BONFHO1dH0%2B9eEhn3Figjn4qQ8IOR0aqhdWU5sL4w8Qz45wxYqVK4ihUK2np62thlzas5n819ujGPSuCFYjGZ%2BBPfbvDXKLzbUqPe6GbobiM8dYTSv2pZPgxj3%2BoAaRiMJ51I%2BzBTsHthQ6VHYt9Kz05DCRF7MYK5kksaHQfi8wAomdWJqqFJ841PvBzZBVa3PsPH2p52bwdEvb6fA%2FDUIClTmJGXilFsWZXfk9KyQBFHnMzvZ0goYXJjV0K6tecm50E5oT4NNsxAp2BbYpzpd2Y1iIIMYvC%2BzdKgmPt6t2Dt1XRMsuj8SNY9N4W%2BANjkyyegB6UqMyLVz5UYf8aTKsADUjMmIwLx9FS5g%2Fnu8SS7QneMWwkhOhVXQkUY9A7dp6htm%2FdE6GbJSQfYVc8xVkijwrZB2Uv%2F4F%2Fq7H%2F7jbs4oZ9Vl5h9tBGmzzxWAK9o93t6i6S9u6ddSif43GnCnWX3T6W36lrwRlnD4GbwhlIq3cpoBhmNs9U0gtuJXgFj3KRHrawvc9qP5G59R%2Bneeh3BKxhdX2lO0QUjSwD5R4bJBWYAxe5T5Ixn4KN5V52S0eeDCY6%2BLDBjqkAYkeaOOLaqupPfYC538yj%2Ft8qofW3Tu3kg3gNMDySfWTMeV7XYxaeUHV%2FSOo8sDoR5j%2F3tq7snyYi6pIvidsMCmRvVSp%2BHjmtRMj36nIMt8q0eatZMCO4qgj7y6%2FbSVbI0uxyfrlE1d8xue3332bpKmVRY1clWwuPsLiOLEMw8JOHora7m2QkzDIuMj1xA2a1acHa%2BAzUHhTY84k5OxSw6hQYnAJ&X-Amz-Signature=ca58fd3cec0fc61f5f42f3b539a6e6e573e428504564f2c8a1bc81511564b54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
