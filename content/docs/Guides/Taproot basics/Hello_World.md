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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OFW3OQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvyRJPUW1tLggvNjEr5B1cF5Eyq6e06wEQMVVP2NRMVwIhAKiddtZmFTlaSe2rxe%2Bx4uwWJ5nA8iM4a5kpxooxyeGQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0HPAy9Xl797Z8NMQq3AMuGfWyjTYIhgTaFBWBzouGMSi6jMV%2Bi%2Bz%2B6ZKigkAefLfcuT3XZNuICVtCn9opzKUWYzdrvjy6t%2BPqAwYzuHv9xvzyCUAd3QVaOI2TPEugXs3n7%2BZVH5nfoHmjSdK4HV5sSQw%2FM4xnpz%2FOE3LhYbSNq1%2B5S%2FG44UNY%2Fu7lfLzhke18EY%2FEuhPSferfdgp0ELnGQ2ApqJvmuarsLqXdOAhaXg7eusuyOB1bcmSsQHiwRs%2BKASr%2BS%2FadBTIMVhabUMqO0%2BJ0Dpd%2BRFLC0jrHJiPC1VA7Ajbn%2FOH82X8G86bj0ohRrK3%2BLiyhHbBvPumt1sTE5j0JaKbOGIfDq%2B926rqQ6biVCtNZN1%2FFK0Azny9xz%2F%2B%2FpTlyaym0x6JPuQD65B4SilU4mtozmD%2F8owcj7Ay1EP9vlLC0i0IwirnslQNAKIzDsbaIxFmoLg0Wlvgp28TWZODW8CRxtRp%2BhXu9L9R8OWXgHzy9v%2BeMQR5V3FEwjxPdfR5b9RBx8QqM0ep%2Fpqg4n8BNWX5Db020JzHvA%2Fm5iiSldwKbfjALjhm7T6bLiFfcXtviLXMzlhSLnVZF9xYjpJr%2F2%2B0nIWfY%2F6kLmCZlAuHdggzl0K883CeeeTauFwa7vAvKxbC1SN%2FLwTDIzNS9BjqkAdP5QaJ24QCEXJ6kJAxykqzVpbIu6G7wTExymcg5ydpJGXwKMeufafe6RA79Lbi%2BuSSB820yvdJIilxeJFKAXmcHZfHTh3lDLt%2Bzmw1FssEIRJhMn%2Foo2PYHdM%2BL6KHUMXSSv%2FBiGppF3WAoilXLAIq5FJm2ZtDkikTRY9cd3S3dZ80%2FzpeBZm8PrENED%2BOFxt%2Fr0FWXFB9tLYnyWp8jMxUsfJ8F&X-Amz-Signature=9b595b728dbfbfdc13c5bacf08a66f39d9bba2a8838cc700799b2922e130ada8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OFW3OQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCvyRJPUW1tLggvNjEr5B1cF5Eyq6e06wEQMVVP2NRMVwIhAKiddtZmFTlaSe2rxe%2Bx4uwWJ5nA8iM4a5kpxooxyeGQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0HPAy9Xl797Z8NMQq3AMuGfWyjTYIhgTaFBWBzouGMSi6jMV%2Bi%2Bz%2B6ZKigkAefLfcuT3XZNuICVtCn9opzKUWYzdrvjy6t%2BPqAwYzuHv9xvzyCUAd3QVaOI2TPEugXs3n7%2BZVH5nfoHmjSdK4HV5sSQw%2FM4xnpz%2FOE3LhYbSNq1%2B5S%2FG44UNY%2Fu7lfLzhke18EY%2FEuhPSferfdgp0ELnGQ2ApqJvmuarsLqXdOAhaXg7eusuyOB1bcmSsQHiwRs%2BKASr%2BS%2FadBTIMVhabUMqO0%2BJ0Dpd%2BRFLC0jrHJiPC1VA7Ajbn%2FOH82X8G86bj0ohRrK3%2BLiyhHbBvPumt1sTE5j0JaKbOGIfDq%2B926rqQ6biVCtNZN1%2FFK0Azny9xz%2F%2B%2FpTlyaym0x6JPuQD65B4SilU4mtozmD%2F8owcj7Ay1EP9vlLC0i0IwirnslQNAKIzDsbaIxFmoLg0Wlvgp28TWZODW8CRxtRp%2BhXu9L9R8OWXgHzy9v%2BeMQR5V3FEwjxPdfR5b9RBx8QqM0ep%2Fpqg4n8BNWX5Db020JzHvA%2Fm5iiSldwKbfjALjhm7T6bLiFfcXtviLXMzlhSLnVZF9xYjpJr%2F2%2B0nIWfY%2F6kLmCZlAuHdggzl0K883CeeeTauFwa7vAvKxbC1SN%2FLwTDIzNS9BjqkAdP5QaJ24QCEXJ6kJAxykqzVpbIu6G7wTExymcg5ydpJGXwKMeufafe6RA79Lbi%2BuSSB820yvdJIilxeJFKAXmcHZfHTh3lDLt%2Bzmw1FssEIRJhMn%2Foo2PYHdM%2BL6KHUMXSSv%2FBiGppF3WAoilXLAIq5FJm2ZtDkikTRY9cd3S3dZ80%2FzpeBZm8PrENED%2BOFxt%2Fr0FWXFB9tLYnyWp8jMxUsfJ8F&X-Amz-Signature=e22fc2ee4bd840c29403150d89c693044a43a9bc71fcc83c278fb6fc13c14a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
