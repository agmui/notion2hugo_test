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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN46YFBM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCSJPuD%2F9V6ao62nouxRJ1ODypPVUmXGBnHbfmmYI7DBwIhAKvqaqX2A6yqE3t8eTt8Uc%2B2wjqiVaFnzg74bwkjT6ROKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOmRz59HduktL4RL0q3APB87n8IYW%2FSqF3KDDyxqXIozv5ErU9qWh%2BI%2BidI7PSPO85n1oM%2FIPwBwX3PI6AMlXTFtqddNvKSookSPN3EjYRlTm2BCVNdx4DibdmkPi%2F18HS5Ajud8Tl5%2FueqU%2B9%2FJN2i3kmKcg7qoqI698kOuNce7MNMR9lHvMSP3LMrz%2BzIRJR9XngX0dPU2H%2BqvJfHYBKL5iRzRKmKRXrJBfFoMgO5q%2F5BPeZBJO%2FoZD5goqZHJlVD9yfCi6tZp9CAiHTVxiQqBtctLxh0%2F2%2FdtYIj7SGGmeChAmEVtKtnR%2F9DUY0zyHhRxdfDeh%2B5ZwOuzsIabA3UhlPfcGbtqbDnWVT%2F6VWBQieZqoz9oeXZe4jW%2BdmoY58cfyQliK%2BOdTthCJhzOOqBWWKbiEs5PI7uhwzFfEkc8q8oDxS5QvhHzWXvB6RiM5S9MuX%2F2rT3rShds5mJwmp315C3jP3M5Yna3AwQiW9DFxBAI9G1%2FfoXeMM3GGFZn2Sobtlb3Tgs%2BjEWTsfLhxB4cN3%2BppyeG9t6ZIgtjGfC79fe3BBugx1iYgKDwCnjso%2FT%2BeO70iMnX1M%2B2mfe%2FLJ%2FX6k1pz8RHk4iJOpLuQQpRNP6QVFffvyPJpd9pXWIN1pOkBPLJRI6W5S6TCWi72%2BBjqkAV4bD%2F1Rdjc5MmEH3X8Old2%2BXp0KnH4ZQgCUFBYy9k%2FtuCp%2FBWzWoYUTifmIh3iXYNB4EH%2F0HAVyChRkmTPAQArHeJKV8W%2Ft981U1jHsAx1G6czOY5t7JHxeyM04lAnywRIBui0SxxYcdQUd2W0ip%2FF%2Fgo1t7AFGBjah6i0tGu8P0wYk6UPszeWsfxqaf0snKCmUzLG5yZkeFoX%2BaxXML6R1LWLn&X-Amz-Signature=c0d225f467f1dddb91d0179f08fb938a2ed64b48c43640d317db6f05a6c6bfdf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN46YFBM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCSJPuD%2F9V6ao62nouxRJ1ODypPVUmXGBnHbfmmYI7DBwIhAKvqaqX2A6yqE3t8eTt8Uc%2B2wjqiVaFnzg74bwkjT6ROKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOmRz59HduktL4RL0q3APB87n8IYW%2FSqF3KDDyxqXIozv5ErU9qWh%2BI%2BidI7PSPO85n1oM%2FIPwBwX3PI6AMlXTFtqddNvKSookSPN3EjYRlTm2BCVNdx4DibdmkPi%2F18HS5Ajud8Tl5%2FueqU%2B9%2FJN2i3kmKcg7qoqI698kOuNce7MNMR9lHvMSP3LMrz%2BzIRJR9XngX0dPU2H%2BqvJfHYBKL5iRzRKmKRXrJBfFoMgO5q%2F5BPeZBJO%2FoZD5goqZHJlVD9yfCi6tZp9CAiHTVxiQqBtctLxh0%2F2%2FdtYIj7SGGmeChAmEVtKtnR%2F9DUY0zyHhRxdfDeh%2B5ZwOuzsIabA3UhlPfcGbtqbDnWVT%2F6VWBQieZqoz9oeXZe4jW%2BdmoY58cfyQliK%2BOdTthCJhzOOqBWWKbiEs5PI7uhwzFfEkc8q8oDxS5QvhHzWXvB6RiM5S9MuX%2F2rT3rShds5mJwmp315C3jP3M5Yna3AwQiW9DFxBAI9G1%2FfoXeMM3GGFZn2Sobtlb3Tgs%2BjEWTsfLhxB4cN3%2BppyeG9t6ZIgtjGfC79fe3BBugx1iYgKDwCnjso%2FT%2BeO70iMnX1M%2B2mfe%2FLJ%2FX6k1pz8RHk4iJOpLuQQpRNP6QVFffvyPJpd9pXWIN1pOkBPLJRI6W5S6TCWi72%2BBjqkAV4bD%2F1Rdjc5MmEH3X8Old2%2BXp0KnH4ZQgCUFBYy9k%2FtuCp%2FBWzWoYUTifmIh3iXYNB4EH%2F0HAVyChRkmTPAQArHeJKV8W%2Ft981U1jHsAx1G6czOY5t7JHxeyM04lAnywRIBui0SxxYcdQUd2W0ip%2FF%2Fgo1t7AFGBjah6i0tGu8P0wYk6UPszeWsfxqaf0snKCmUzLG5yZkeFoX%2BaxXML6R1LWLn&X-Amz-Signature=a46ea4f3331b68998ebb4d402a8b8b825016aa7ef48b1f75fcee2909a164bde6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
