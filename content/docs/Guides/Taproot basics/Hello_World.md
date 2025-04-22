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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKF4ALI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCnsY8QHxu%2BR2LzklQtdz%2BQU9McYFTcUsLAxLgXrJZbxAIhAMT4tKd83KhkJfKLFdb%2FKBX2yBycAl4z4%2Bsb72pxQ3SbKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF6I0lTQXkEPTMir4q3AP3kFqrBT8mEN14W77rGe6YDqIh7hBkl56WSOu7bQSEJkTcElL5nS0JKQgbPzHcWz%2FQUG9OD%2BF2arK3t6ftkzhmy2a3ESQbGo0iakBu7w%2BGPgd3%2FAvZWgtfL5bOXGBINcQXL35%2Fuuk%2FX5ANaintiMEu9QWDZEmysVUt8aNwK%2ByadgP7UVvvY5bp42FDemHbyysZ%2Baz0ov%2B7l5IKXvAJ4OYig1M0HtsCUG%2BHtNh1QtbgF19npYRaRkoTjvn0yAJKueLfBtGaU7RV%2ByOq3ZV7lJCbBEPIVwVmPMhN2qna1tmVqFTYK5oRaANpE6pvo%2FwLddaCSJUD3eoiFozaMMlxdnEyXL8p2heZN%2Fso8V6%2B6HorlCYGfEXwD5mGzo448Z%2FvvImEOxHNjyR5jFHuG9kW9JULSoAPWj%2BEgqtfgi9e9BBe%2FkqBxEdppnb6pnSctjH13%2FkOS3NjjrkIWsEq3YeBXYMOlpU3DJlE4cH3KzoZceErqsPRqFV0dp9Ompk8UVe094Ad8CPrUaFSOs6pWhzA7P4Y1usYxZdwBlI44Iffz2rL0LUDeG0Bm%2F4e4P1c3aAkuJYqSU%2BfooNV9U%2B%2BZnwMYMlNTP1xkvVgFyMk8mxgXK%2BZ%2FfN0wIoV3ViUfa6hIzDaupvABjqkAX93JG7NScx%2BELKLBjlzkZnjA3zYpejfAQPQAgHFBMFve8DEhuhI9NTW%2BI1Gq6KqoUJ%2BlIYQvUJTbRcgNQ4QXgNIV%2B9J7GiUNJi5qHmNzHvvuyCJV76qWdTf3f0ljZf9VuQeuU%2FDXKtGljHbIhX0WKKXi4Zjup1%2F1VJ81V%2FPA6%2FY3wzoPUQ20VBaIldK9mm%2FXD1jL0PaEWF712s7ZiHSjx7bq75u&X-Amz-Signature=da0fea1f447bdda7e9423532de1aa65d7a7a217efa3feb9b362ad73f4da18604&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKF4ALI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCnsY8QHxu%2BR2LzklQtdz%2BQU9McYFTcUsLAxLgXrJZbxAIhAMT4tKd83KhkJfKLFdb%2FKBX2yBycAl4z4%2Bsb72pxQ3SbKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF6I0lTQXkEPTMir4q3AP3kFqrBT8mEN14W77rGe6YDqIh7hBkl56WSOu7bQSEJkTcElL5nS0JKQgbPzHcWz%2FQUG9OD%2BF2arK3t6ftkzhmy2a3ESQbGo0iakBu7w%2BGPgd3%2FAvZWgtfL5bOXGBINcQXL35%2Fuuk%2FX5ANaintiMEu9QWDZEmysVUt8aNwK%2ByadgP7UVvvY5bp42FDemHbyysZ%2Baz0ov%2B7l5IKXvAJ4OYig1M0HtsCUG%2BHtNh1QtbgF19npYRaRkoTjvn0yAJKueLfBtGaU7RV%2ByOq3ZV7lJCbBEPIVwVmPMhN2qna1tmVqFTYK5oRaANpE6pvo%2FwLddaCSJUD3eoiFozaMMlxdnEyXL8p2heZN%2Fso8V6%2B6HorlCYGfEXwD5mGzo448Z%2FvvImEOxHNjyR5jFHuG9kW9JULSoAPWj%2BEgqtfgi9e9BBe%2FkqBxEdppnb6pnSctjH13%2FkOS3NjjrkIWsEq3YeBXYMOlpU3DJlE4cH3KzoZceErqsPRqFV0dp9Ompk8UVe094Ad8CPrUaFSOs6pWhzA7P4Y1usYxZdwBlI44Iffz2rL0LUDeG0Bm%2F4e4P1c3aAkuJYqSU%2BfooNV9U%2B%2BZnwMYMlNTP1xkvVgFyMk8mxgXK%2BZ%2FfN0wIoV3ViUfa6hIzDaupvABjqkAX93JG7NScx%2BELKLBjlzkZnjA3zYpejfAQPQAgHFBMFve8DEhuhI9NTW%2BI1Gq6KqoUJ%2BlIYQvUJTbRcgNQ4QXgNIV%2B9J7GiUNJi5qHmNzHvvuyCJV76qWdTf3f0ljZf9VuQeuU%2FDXKtGljHbIhX0WKKXi4Zjup1%2F1VJ81V%2FPA6%2FY3wzoPUQ20VBaIldK9mm%2FXD1jL0PaEWF712s7ZiHSjx7bq75u&X-Amz-Signature=29b21132257a3ead14670cade3493465cef794431eaa98c7df86affd346a06a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
