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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZOWYVF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCjmhCAKydTMaZ81mfDM7VVMzINAUu3WDK1KPHuDxQNpgIhAKnkbBhBj2vmsmmoS58k5ghW7boZIvl9qVtxdWo3IwB8Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzTwUQvOqDmONz90NYq3ANmCypG0pOB3oaXUpIU2zTit1LJtQIsFi%2FZHgGu%2BsgO5Pn37sjzBA6ozrHhnz9CvkUIlwGck%2BI%2FY%2FE%2BkVFkRUgMqpsjW%2Fiaw9xbPsKjb9f%2FocMkE273daZqMXwAYTBMB8Ptw7YEB9NlJnUYvvojhGhnFiYIppS9CjXrFd0U%2F6DJgNQomsmjDVI6fkptWD0HzgbPGLeL3o3Cj0F3X69mBqCi%2BFfFTjIt94vBb0WqH4%2Bc3Uu3CvLxzXd1FIeckR1CCi9YcYbUxEEVX4mHxsZtp%2FaBnPsF964ATIUIxbP2zwE8l8Ahx4WJTDDgSnyleXh2xVfbGxs1dbtZYgYWImH21wv6Un0RTwasKnV4ANfpDdIwMCeEyjQoRo4g3hNd4mfW%2BEIbIacW5R%2BB%2FoegUx1xcjlAUW8KHxdZLD1yUTXRDlg5BrY2Bhv9Wy8WnM7XqbAaPPDz3Okcm7u5hT4p2RyMj4GGrDH4w%2FhPkLF7EvYQpFJWmPYSN2Vby%2FBIpUnXf0h%2F8qRLVtg1GHbcnLQJsRtAry00dia%2BAZOGbYoupi2LouGeWTeMhYdmi4ZC9kXY%2B5sgK%2BEX2ARMjPFiaBjB7e5wu2Oej9SEeqqcqoaUsVuwz%2BQi%2BtgEM1cIl4ZzIUl30DDTu4O%2BBjqkAUFUleR9Ldn8pX75MMfBMifJXLBJPD0Kmw93KfQxVi%2Fo8GGOZdDsam%2FBFc2Ueve4vnEc8WmuAyOjQ1eyuFi65NzTlGwnyI%2FwZ0pKKZvV1FQrUYYLlfdx73gn5xw8BAKzHcwyLDc4vCkgqCK1qq7WU5IISvNunFXE9DaMGkyyeVRwnU0kNyUy1CdU56JMhQhzDo3HMFCxthVByhgiv9Yaj5rqfW1a&X-Amz-Signature=ab797f0cbb9f34a10b86d261060a38cb1abc8c2df1be03b90b4930005896d887&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZOWYVF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCjmhCAKydTMaZ81mfDM7VVMzINAUu3WDK1KPHuDxQNpgIhAKnkbBhBj2vmsmmoS58k5ghW7boZIvl9qVtxdWo3IwB8Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzTwUQvOqDmONz90NYq3ANmCypG0pOB3oaXUpIU2zTit1LJtQIsFi%2FZHgGu%2BsgO5Pn37sjzBA6ozrHhnz9CvkUIlwGck%2BI%2FY%2FE%2BkVFkRUgMqpsjW%2Fiaw9xbPsKjb9f%2FocMkE273daZqMXwAYTBMB8Ptw7YEB9NlJnUYvvojhGhnFiYIppS9CjXrFd0U%2F6DJgNQomsmjDVI6fkptWD0HzgbPGLeL3o3Cj0F3X69mBqCi%2BFfFTjIt94vBb0WqH4%2Bc3Uu3CvLxzXd1FIeckR1CCi9YcYbUxEEVX4mHxsZtp%2FaBnPsF964ATIUIxbP2zwE8l8Ahx4WJTDDgSnyleXh2xVfbGxs1dbtZYgYWImH21wv6Un0RTwasKnV4ANfpDdIwMCeEyjQoRo4g3hNd4mfW%2BEIbIacW5R%2BB%2FoegUx1xcjlAUW8KHxdZLD1yUTXRDlg5BrY2Bhv9Wy8WnM7XqbAaPPDz3Okcm7u5hT4p2RyMj4GGrDH4w%2FhPkLF7EvYQpFJWmPYSN2Vby%2FBIpUnXf0h%2F8qRLVtg1GHbcnLQJsRtAry00dia%2BAZOGbYoupi2LouGeWTeMhYdmi4ZC9kXY%2B5sgK%2BEX2ARMjPFiaBjB7e5wu2Oej9SEeqqcqoaUsVuwz%2BQi%2BtgEM1cIl4ZzIUl30DDTu4O%2BBjqkAUFUleR9Ldn8pX75MMfBMifJXLBJPD0Kmw93KfQxVi%2Fo8GGOZdDsam%2FBFc2Ueve4vnEc8WmuAyOjQ1eyuFi65NzTlGwnyI%2FwZ0pKKZvV1FQrUYYLlfdx73gn5xw8BAKzHcwyLDc4vCkgqCK1qq7WU5IISvNunFXE9DaMGkyyeVRwnU0kNyUy1CdU56JMhQhzDo3HMFCxthVByhgiv9Yaj5rqfW1a&X-Amz-Signature=740f97bc4537d904812d724ebbbbf71f3298aa4d4b6d78b5886207770b6d1b77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
