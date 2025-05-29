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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMLSDI6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnGUWtp3tEEfnEvyKAZcwl5oowbz31kdO9y9i2rFFVWAiBZGJKXPFOjfgPIS4ubTCd9A1vlPwQ635Tb2bbD6lj%2FpiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5QuXLRP4we3%2BQgMAKtwDViBbDHzhqTiKa%2FLIl1uXWxkSYl8yTX9PyGMZ5Fkakw4ZRsAXHXoCDfHU9yHDS09wrXjM3qScs6fCitJjvjX0JlRVefovlj3bLsSd7RTCRtz%2FkiWsUqbNRlX4zUwhl4L9jz5KdAuTsY%2FwgDM6MAhp%2F%2FoGz%2FNuQtfBb50lq%2BTStazRTzDYi0Mh4wKtpLEELkC5iXR8j530sW%2FDpNxHMxFC1oKhOvoPxAYhuYw1m6oqVyMAGE%2FribdLXRPpTxa4yqscdnQbZxSaBdUiGv7XtkzMa2xcLNT6rdb3X1cLrY2SL%2F40Z2gdnSTZZW2LHr3ck%2FGYC%2BsmSeCJ0XKw3ObW%2BiSuJNLmQQ%2BVx4a%2Fm3Trj5mo%2FPWPUKc%2FUiljmHkpMfutBlr%2BxFnWN6JV4EYr9dCRIO%2F%2Fxtt9Ygj7ao5%2B%2FwpU4Nw0Rcy971cRWlVU6LSBNPe3B83N5cN%2BAIW0fefdFgPdMoj%2FLyD8MV6j4pPI5cxcEp7h3WsEizxBTz7rdfQZeHEHa7hdP6rYEUzyrsp0GtWJhOWvceFzflmWqW6k%2FguXySu8Zq%2FMwWEuEYeD7IGyAfBsywsbun95WgFrfeCthd4ONng9%2BAQ4o1NUBn9TT7ONyiiEktvfZuVkqCWvWs3vru8wrK%2FfwQY6pgHjFkZetpCeGk1axURYuVUVu1iOS7uGsB%2FNHe7y6Rsm%2FIY7wGPHY49xHHxp9KLN5TnR3%2FmqfzL0D9zmXNPtGgXsQWpgQWxn7XAFJ2l%2BzHuc2RWuZ9%2BrHOg8yYi%2BMSstTci1Q6CxjjiwG511Tg5yx70T7shOD7mJC9v%2FJZbnIFG2Zccg7l3jiblJIDTX27fFpaV5Rjku%2FyYcuUBvov4bqDYj5OT0G7Mc&X-Amz-Signature=8dfb382ab2daf5cfe0c98e3aa5afdc38a5d3ac5a4360953bfe26615bdbdee9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMLSDI6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnGUWtp3tEEfnEvyKAZcwl5oowbz31kdO9y9i2rFFVWAiBZGJKXPFOjfgPIS4ubTCd9A1vlPwQ635Tb2bbD6lj%2FpiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5QuXLRP4we3%2BQgMAKtwDViBbDHzhqTiKa%2FLIl1uXWxkSYl8yTX9PyGMZ5Fkakw4ZRsAXHXoCDfHU9yHDS09wrXjM3qScs6fCitJjvjX0JlRVefovlj3bLsSd7RTCRtz%2FkiWsUqbNRlX4zUwhl4L9jz5KdAuTsY%2FwgDM6MAhp%2F%2FoGz%2FNuQtfBb50lq%2BTStazRTzDYi0Mh4wKtpLEELkC5iXR8j530sW%2FDpNxHMxFC1oKhOvoPxAYhuYw1m6oqVyMAGE%2FribdLXRPpTxa4yqscdnQbZxSaBdUiGv7XtkzMa2xcLNT6rdb3X1cLrY2SL%2F40Z2gdnSTZZW2LHr3ck%2FGYC%2BsmSeCJ0XKw3ObW%2BiSuJNLmQQ%2BVx4a%2Fm3Trj5mo%2FPWPUKc%2FUiljmHkpMfutBlr%2BxFnWN6JV4EYr9dCRIO%2F%2Fxtt9Ygj7ao5%2B%2FwpU4Nw0Rcy971cRWlVU6LSBNPe3B83N5cN%2BAIW0fefdFgPdMoj%2FLyD8MV6j4pPI5cxcEp7h3WsEizxBTz7rdfQZeHEHa7hdP6rYEUzyrsp0GtWJhOWvceFzflmWqW6k%2FguXySu8Zq%2FMwWEuEYeD7IGyAfBsywsbun95WgFrfeCthd4ONng9%2BAQ4o1NUBn9TT7ONyiiEktvfZuVkqCWvWs3vru8wrK%2FfwQY6pgHjFkZetpCeGk1axURYuVUVu1iOS7uGsB%2FNHe7y6Rsm%2FIY7wGPHY49xHHxp9KLN5TnR3%2FmqfzL0D9zmXNPtGgXsQWpgQWxn7XAFJ2l%2BzHuc2RWuZ9%2BrHOg8yYi%2BMSstTci1Q6CxjjiwG511Tg5yx70T7shOD7mJC9v%2FJZbnIFG2Zccg7l3jiblJIDTX27fFpaV5Rjku%2FyYcuUBvov4bqDYj5OT0G7Mc&X-Amz-Signature=4a330ef2ed83d3f10bff6d0c60d5fc4858e46b86283ec4607701ab3348929eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
