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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52MVM3J%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBH9wNrHA18yH4UCuK2%2FTjNTikjNVl%2BGYtZED8J2XRCAiEA2a29vZsrgou%2FqrcC6NEOa0TrcTiwtKQXbeRvzqSPTFAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkpft02XzwdZla5lSrcA339q0K6YEcN48aGC93YkaIDSeO%2BLsX0%2F4bnxr4A9ajLKvG6OZHy5YClx4OlTnWFMz1J16LJTALiLdBaxxlY4s3YFhAMn967lzJep%2F5JLKP37BSubEW5XwvtyhaE6RdrUl0hqu65SxVWD7LsS%2BxQRGejWFcBQW3bCUT6p9bfNrQXAvnD6eTusyncdERcaYD3Q1e1kBtUmockLn4W4Fvqe9R2Ef%2Fs3cYwO3eboR841oBuKpT%2BVbFbwsVy9qikrUw15wivVVP4nX2PDzZJkQcYdFa2IwKIUA3TZ%2B8etcOFUpJ4hLVUqto9qfemMlmdbh2feO3WmS0sMQnMIfUd6Hvl7TCC6fYxdaf%2Fh5W0vUzAmM%2B04oy50cLvwIDmTiUGeFGLIDN027VZDP0Ku1bqGYLPYoxQf0pz3eDZYWic2RyJYBGMQCssGGC0gubqIxoko9yBGs0qbhw8jANN4u5wncTqow6QEW5%2FjQ4KwOk7SENMiBpTfdSJ13bMHW6SYMj%2BQlEyeODoSloa3smnOtcJtVvC56yvReJOizN68X8EnV%2FRMu%2BHq%2FSbTYUtnTayvSVfQRm3S0j89ZdFIwCvQz6ssolC7DXm9JxqIkh7PKYPWiWF9h%2FeOaz7eHtFsBqmxAQsMNywzM4GOqUBOikyf7k2JfghU50ZT9%2Br1Jql5Ujkl16AGH89iPLYknThRY%2BVf87mn2smHaRtLcsfB7NuUztWLPfZkt4bieNHjg7RM7jQgo0iEX8IsiAJOdBYYsNxPdj1sfkbX5lmlEk63CzFcgN4fQm1qSeJxr6PaydPMDo4%2FcGW6h24s5BcZxjDoULbBzOzsB%2BECR2hAGBfJndcqaWvQDpkvWcW4dipXS9qCNUV&X-Amz-Signature=62c499f68e8842c166706b37846fb9659168523f0ba64d18f2c465c7b06b9dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52MVM3J%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBH9wNrHA18yH4UCuK2%2FTjNTikjNVl%2BGYtZED8J2XRCAiEA2a29vZsrgou%2FqrcC6NEOa0TrcTiwtKQXbeRvzqSPTFAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkpft02XzwdZla5lSrcA339q0K6YEcN48aGC93YkaIDSeO%2BLsX0%2F4bnxr4A9ajLKvG6OZHy5YClx4OlTnWFMz1J16LJTALiLdBaxxlY4s3YFhAMn967lzJep%2F5JLKP37BSubEW5XwvtyhaE6RdrUl0hqu65SxVWD7LsS%2BxQRGejWFcBQW3bCUT6p9bfNrQXAvnD6eTusyncdERcaYD3Q1e1kBtUmockLn4W4Fvqe9R2Ef%2Fs3cYwO3eboR841oBuKpT%2BVbFbwsVy9qikrUw15wivVVP4nX2PDzZJkQcYdFa2IwKIUA3TZ%2B8etcOFUpJ4hLVUqto9qfemMlmdbh2feO3WmS0sMQnMIfUd6Hvl7TCC6fYxdaf%2Fh5W0vUzAmM%2B04oy50cLvwIDmTiUGeFGLIDN027VZDP0Ku1bqGYLPYoxQf0pz3eDZYWic2RyJYBGMQCssGGC0gubqIxoko9yBGs0qbhw8jANN4u5wncTqow6QEW5%2FjQ4KwOk7SENMiBpTfdSJ13bMHW6SYMj%2BQlEyeODoSloa3smnOtcJtVvC56yvReJOizN68X8EnV%2FRMu%2BHq%2FSbTYUtnTayvSVfQRm3S0j89ZdFIwCvQz6ssolC7DXm9JxqIkh7PKYPWiWF9h%2FeOaz7eHtFsBqmxAQsMNywzM4GOqUBOikyf7k2JfghU50ZT9%2Br1Jql5Ujkl16AGH89iPLYknThRY%2BVf87mn2smHaRtLcsfB7NuUztWLPfZkt4bieNHjg7RM7jQgo0iEX8IsiAJOdBYYsNxPdj1sfkbX5lmlEk63CzFcgN4fQm1qSeJxr6PaydPMDo4%2FcGW6h24s5BcZxjDoULbBzOzsB%2BECR2hAGBfJndcqaWvQDpkvWcW4dipXS9qCNUV&X-Amz-Signature=e1a0575ca66c46127533bbb8c16d75bb319c04653b0731f26201bece4baa9e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
