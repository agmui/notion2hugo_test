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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQN6NJ4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw9eiMqGLiS7dIRr0gIDg0yp7HnL7qjoAqO1sruwjJEQIhAMIvxkcHU9r4Yc2tK0JeSTb%2BrqjID10uuun1AaJWvoowKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCAE0eQYIWFTrhLJAq3ANj5FPzyccHgUMrsBcT1Z7MTR0YjH8pLhLZcJmdQvea7Vs%2Baj563a0NyynpUCpESRYU%2BcriNhfQiM2FwrUks2w%2F%2FzUGC7e5gZ7gRJFfZKTdJRiBH5OzOMeThh4%2FqhQfFTs%2BWXUYAh0ZBPBL9lKJDO49d1O7GSTKqeHN8JglhfJv3pDmIkGeiPOEISw2Venwf4FtHy9Trz2YGYXs%2BwXJdykcNqaYCMETmC2Jf6SFrluadA2S%2BhsWqcjAdQcqeI69BMLpLJ7ZbRKYIl8jKNuHqS8WHfSLQUU3MQGiOnPxyNWJPirfI3qjTFftxY3J79IoculoLAw08XnJZCYJL7iP5ci43uGpLPrpcVbIFt%2FEnifw9K7CnMsJ0dgvN5BVd%2FWTZ7OPhOXEVRbVhlBTYmaBERSMiQqhjpuozWZ3O%2BCNzi7Jp6z8BqE%2FlxXezxEfD7%2F0GuovDxjYY6267KMEDmJaI%2FngMdJz3y8WknTEgYuq3xEpBY5kGrMtcW6jw4cn65KL4w1UGBKNa8yF4ls42e58OQ2Tnf5sCt%2BKTyhkkeFw5w69C2k806GgNKGSG8ajYNR15rLMLMUbRFHrVdBNibYx%2B2ok8PUh79FQyIwr4p7WoUfP0yBdMg9WfXGFL%2BcGuTC9lvbABjqkAe9lWRJXkvaov%2FXJz81Al38ELczuBhbmqLCrCOF9WPomxiH1noypNXu0qOWTVdBA2oV4GpJHJO7NQ1JlToxXJEt05fvUZc5bDs32GKDjSnSKS1piXxglt8xsY91K%2BLhZGtJNkuT6ZnSMqrwy5qo4RpW4q0phZeEj5pZyWUVJV4pP5uk9FeWHbHApLSd1bI52tWT9xKh4TdQso0NyglD5z7ellKM%2B&X-Amz-Signature=5320c89cf0c9c9de38800e3fd174a0a65ab6af62d200659c6f880ad950c0cfc5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQN6NJ4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw9eiMqGLiS7dIRr0gIDg0yp7HnL7qjoAqO1sruwjJEQIhAMIvxkcHU9r4Yc2tK0JeSTb%2BrqjID10uuun1AaJWvoowKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCAE0eQYIWFTrhLJAq3ANj5FPzyccHgUMrsBcT1Z7MTR0YjH8pLhLZcJmdQvea7Vs%2Baj563a0NyynpUCpESRYU%2BcriNhfQiM2FwrUks2w%2F%2FzUGC7e5gZ7gRJFfZKTdJRiBH5OzOMeThh4%2FqhQfFTs%2BWXUYAh0ZBPBL9lKJDO49d1O7GSTKqeHN8JglhfJv3pDmIkGeiPOEISw2Venwf4FtHy9Trz2YGYXs%2BwXJdykcNqaYCMETmC2Jf6SFrluadA2S%2BhsWqcjAdQcqeI69BMLpLJ7ZbRKYIl8jKNuHqS8WHfSLQUU3MQGiOnPxyNWJPirfI3qjTFftxY3J79IoculoLAw08XnJZCYJL7iP5ci43uGpLPrpcVbIFt%2FEnifw9K7CnMsJ0dgvN5BVd%2FWTZ7OPhOXEVRbVhlBTYmaBERSMiQqhjpuozWZ3O%2BCNzi7Jp6z8BqE%2FlxXezxEfD7%2F0GuovDxjYY6267KMEDmJaI%2FngMdJz3y8WknTEgYuq3xEpBY5kGrMtcW6jw4cn65KL4w1UGBKNa8yF4ls42e58OQ2Tnf5sCt%2BKTyhkkeFw5w69C2k806GgNKGSG8ajYNR15rLMLMUbRFHrVdBNibYx%2B2ok8PUh79FQyIwr4p7WoUfP0yBdMg9WfXGFL%2BcGuTC9lvbABjqkAe9lWRJXkvaov%2FXJz81Al38ELczuBhbmqLCrCOF9WPomxiH1noypNXu0qOWTVdBA2oV4GpJHJO7NQ1JlToxXJEt05fvUZc5bDs32GKDjSnSKS1piXxglt8xsY91K%2BLhZGtJNkuT6ZnSMqrwy5qo4RpW4q0phZeEj5pZyWUVJV4pP5uk9FeWHbHApLSd1bI52tWT9xKh4TdQso0NyglD5z7ellKM%2B&X-Amz-Signature=99af16b8a58a1fa3c594e95275c8ef85bfcec77284717b3b740badfa2670cf50&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
