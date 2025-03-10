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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547DMJYJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDYfulVv%2ByLSDE%2BvMXIDq1AMXxFFntfszdFSZmgBfEIUgIhAMZLtqidmOjhuCG4iJWyRTIEV2HEDyrl0XStzLzuyrwxKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycblmMEF27rxX3r1Aq3AOkzuJ4Dfb3AhaforVxKwDo8%2FQtZKLQLIhWCQL8%2FwKpqqXHpeo4yJvIAcLIz42Q%2B4qiwASGYr6S0InIwurjmAK5VzlwNUlxWJgpYC%2FiuXv7I%2FL2QwQIwQ91%2FY0aWxQxbqmWcofv7mYHJe9k%2B%2FXdTL%2FLclMH4Cizq6OroOWRTR1jmmG9%2B9wReUKZNZ4oWkbyHLOQ0Fy%2B%2FPh66WlSP9Q1ywu0CybopKX8Cs2zr9QAleWMOBF7dgvLKvADzH%2FpgaTGvgjswFor3GzP3glomdP1p3F0out0Tri%2BjQ7muBViVNW%2BNQqEHI2F36yvHqtGUt%2FHa6QCSzRATCiJ7PPW0hxS7z81la3h7LIxLLq9BS%2BkWn68S8cYQq4H425xpbp7R6hFOhB9ggKtR9KNo4yZQ2ImBY8v3nXqp4hE6yeUZddXF9dvTQmAk2rH19OgthSZbdN%2FoRaUWIt3m7TcuGCKMEy8J26XJ5kpIN7Ag6YYPnOCttROZ0U5%2BVr%2BmRJ3nzZrpy8jvTvVplIbawpOCZpx4oNgilgCCFVISze%2FG4b%2FuU9pyCU%2FaX0v0Tucw15S8%2F9EB%2BZGC%2Bo6cZOR9fgNAOT11hUEB5TxCxKE%2BY2aMArva7NoIkopkO2%2BCC0NWvybif17xDCv3Li%2BBjqkASLLYm5yDe%2FRZi0LXrydzqVbR2e5DjiK83h1yYHzM%2BQ5RbwcHsJae9V%2FcJUBbS0y9XLNC6dn5dwyp7JPzPmS3M2bxX8RZ7hCdQYoxH8vNuCInPRPUHi%2Bt%2FyYit3fpfDIAGfYqllsIF6x8NMZGe2LJJGgm9yXBvxfl5EawhS0FhuncYQZouaTFciPLj0XZqxZc3TlebWT1W660T4Bq99cm74EjZKq&X-Amz-Signature=525b8c0c38d4084abbd0df35e2b0450cd76d46dc4a6d3cdec02844e7d507de2a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547DMJYJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDYfulVv%2ByLSDE%2BvMXIDq1AMXxFFntfszdFSZmgBfEIUgIhAMZLtqidmOjhuCG4iJWyRTIEV2HEDyrl0XStzLzuyrwxKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycblmMEF27rxX3r1Aq3AOkzuJ4Dfb3AhaforVxKwDo8%2FQtZKLQLIhWCQL8%2FwKpqqXHpeo4yJvIAcLIz42Q%2B4qiwASGYr6S0InIwurjmAK5VzlwNUlxWJgpYC%2FiuXv7I%2FL2QwQIwQ91%2FY0aWxQxbqmWcofv7mYHJe9k%2B%2FXdTL%2FLclMH4Cizq6OroOWRTR1jmmG9%2B9wReUKZNZ4oWkbyHLOQ0Fy%2B%2FPh66WlSP9Q1ywu0CybopKX8Cs2zr9QAleWMOBF7dgvLKvADzH%2FpgaTGvgjswFor3GzP3glomdP1p3F0out0Tri%2BjQ7muBViVNW%2BNQqEHI2F36yvHqtGUt%2FHa6QCSzRATCiJ7PPW0hxS7z81la3h7LIxLLq9BS%2BkWn68S8cYQq4H425xpbp7R6hFOhB9ggKtR9KNo4yZQ2ImBY8v3nXqp4hE6yeUZddXF9dvTQmAk2rH19OgthSZbdN%2FoRaUWIt3m7TcuGCKMEy8J26XJ5kpIN7Ag6YYPnOCttROZ0U5%2BVr%2BmRJ3nzZrpy8jvTvVplIbawpOCZpx4oNgilgCCFVISze%2FG4b%2FuU9pyCU%2FaX0v0Tucw15S8%2F9EB%2BZGC%2Bo6cZOR9fgNAOT11hUEB5TxCxKE%2BY2aMArva7NoIkopkO2%2BCC0NWvybif17xDCv3Li%2BBjqkASLLYm5yDe%2FRZi0LXrydzqVbR2e5DjiK83h1yYHzM%2BQ5RbwcHsJae9V%2FcJUBbS0y9XLNC6dn5dwyp7JPzPmS3M2bxX8RZ7hCdQYoxH8vNuCInPRPUHi%2Bt%2FyYit3fpfDIAGfYqllsIF6x8NMZGe2LJJGgm9yXBvxfl5EawhS0FhuncYQZouaTFciPLj0XZqxZc3TlebWT1W660T4Bq99cm74EjZKq&X-Amz-Signature=34be2df76244ee22d49061517549ad9defd641ca94b3539688d7a312bd8b42ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
