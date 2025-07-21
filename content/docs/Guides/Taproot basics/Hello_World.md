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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUOD7WS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi1zN31g6jkcri%2BoujDuzm%2BFhze9VETvA4q79XQxRjHAiBxC%2BjUabVkR7lKdNfMx3KeXd7YmWhOm%2FDLOywYZYQJ%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxqR8iuwQwP27P8CGKtwDBg3Wh1uHxicGiM6g%2Fj0d8nhg9QGm7S8c896XVhiYPEuICtXIQEOMxCHbDTvXqBERtRvViTl3Ao%2Fy2URkxZS6%2FhVD4Wzplxdlz8iIxC9zPo43%2F2nlVZZ0oqnMb%2BrCb1zKRs9TA%2FkSFF0DgJPd5A1RondhO8YLIKH8Zgq7IAUIY5n7QTyhDf96xP1SsBhlC850dfUNmbgq0Uz7b7lKmAIlvGzMt9ZTCvcVYkO7Q6i3cY6QAoaTxQejglvC2KToD0UdTx8xppLEoXnLkWnyGhL6bpLfWpxwTmn4%2BxqAjPM8%2BTyYLehHGbKJ6ZxTRdYEfJzjvfDw%2FYGoK%2B%2FL73vcS%2F5cvlu9lSm0i0rbWY%2BYpzqbm1WzpyPIDlDyPobw072qFLddm0Q%2BHVkIdCmlA6d9GfD4vm8iOJtowsxidn1XwAzOxdROTRWBLDakxvYFItHyXh20OMIVReMQSPSFkc5bsr3F6PB7KqtYND0n5suPgpW%2FFnatMrC5YFLuIPQE6GJis7xA8p%2Bfffgj7%2FdevkpgfIG3AwK%2F2UabFmv6In0VA%2B1Z07OSgy%2BZKoHG71zo8IpFPhv1GP%2B1g7pFo6sFS8CyvQVqI0e%2B79iFbqagU3bLlzdESft1kr6I11m5ujlxorswr%2Bf5wwY6pgF3EBxJNBHAjRy2kb0MseQy4dgckHdrRYql5Eh28InYI7KhVFxzQ4j64U5sQGDqXUR8wPalymuEWdjo%2BsJWz0yTg4KF5g2WnduPHdbrqn9H8Hz4ZxQoVcGOcv8yvOHrHr2J4jZT38eHviFuhycK0mdvhQc%2F48VWyHQhKDS3w1lapdzbFTwmTRDWhuP6%2BS45xaYJdw0y75yLyyxRbmKA4U4FntYVwvWV&X-Amz-Signature=5f331253ef5fc411839fec85b09f40df611ec9567d5922773df6633e54285dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUOD7WS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi1zN31g6jkcri%2BoujDuzm%2BFhze9VETvA4q79XQxRjHAiBxC%2BjUabVkR7lKdNfMx3KeXd7YmWhOm%2FDLOywYZYQJ%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxqR8iuwQwP27P8CGKtwDBg3Wh1uHxicGiM6g%2Fj0d8nhg9QGm7S8c896XVhiYPEuICtXIQEOMxCHbDTvXqBERtRvViTl3Ao%2Fy2URkxZS6%2FhVD4Wzplxdlz8iIxC9zPo43%2F2nlVZZ0oqnMb%2BrCb1zKRs9TA%2FkSFF0DgJPd5A1RondhO8YLIKH8Zgq7IAUIY5n7QTyhDf96xP1SsBhlC850dfUNmbgq0Uz7b7lKmAIlvGzMt9ZTCvcVYkO7Q6i3cY6QAoaTxQejglvC2KToD0UdTx8xppLEoXnLkWnyGhL6bpLfWpxwTmn4%2BxqAjPM8%2BTyYLehHGbKJ6ZxTRdYEfJzjvfDw%2FYGoK%2B%2FL73vcS%2F5cvlu9lSm0i0rbWY%2BYpzqbm1WzpyPIDlDyPobw072qFLddm0Q%2BHVkIdCmlA6d9GfD4vm8iOJtowsxidn1XwAzOxdROTRWBLDakxvYFItHyXh20OMIVReMQSPSFkc5bsr3F6PB7KqtYND0n5suPgpW%2FFnatMrC5YFLuIPQE6GJis7xA8p%2Bfffgj7%2FdevkpgfIG3AwK%2F2UabFmv6In0VA%2B1Z07OSgy%2BZKoHG71zo8IpFPhv1GP%2B1g7pFo6sFS8CyvQVqI0e%2B79iFbqagU3bLlzdESft1kr6I11m5ujlxorswr%2Bf5wwY6pgF3EBxJNBHAjRy2kb0MseQy4dgckHdrRYql5Eh28InYI7KhVFxzQ4j64U5sQGDqXUR8wPalymuEWdjo%2BsJWz0yTg4KF5g2WnduPHdbrqn9H8Hz4ZxQoVcGOcv8yvOHrHr2J4jZT38eHviFuhycK0mdvhQc%2F48VWyHQhKDS3w1lapdzbFTwmTRDWhuP6%2BS45xaYJdw0y75yLyyxRbmKA4U4FntYVwvWV&X-Amz-Signature=db7610e1e3106166ded7ec4bfd27682a34473f09caf90312c2c70449a5465b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
