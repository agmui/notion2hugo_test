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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHNNLMD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCID1svtDEg7oKwOr2O8RX460rUczSyPHs1Wa22J570ApgAiACB2V%2F%2BgidkDEAiSkuIYD0Q3RkCPzGk%2FKmb4LeS0FKRir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMZ6zEjoLqENbYxCgsKtwD1G1d1HG0t9VslCO8yPlNm1cNkTkoQZ5LMMHEsdg7N7AhWk0qMyn3F%2BrXhXl8lHk2ebV5I5h3XQSUcS4EhpfaCpec0%2FXs8%2BTD0rriEy0sVinOYeDWWyFqmVtapngKS82GHcsk8WyuxTuPD8ROj9hQdYs7rltrgjJLQmX0vL4pBKm6Rd7HFSA77w7SRrjqKCKafLp4PxuvawlikazPRBx8EyENfJkVqMmMqQ3%2BqW0LyPxS4hO%2FsIPUZTut%2FRTbyxq8itYxkzISIwUiZXgdLxyyGOUA7O6Si9zthPgJESsV2TI%2FhRAXb37PWgOE4%2F5qBPGPuQMV7%2F2ZxYpMppVGVOou5Xxv%2BH%2Fngf1EJmsmf3FZ6VNTh3V6ypdFBY%2BzimqNZLZy8zK%2F4ZRJYS1XrpRNXh%2B%2BRmYq4EIfhB6RSmXaROHivj6nlo2a3gnjS4EY03AN%2FqQygAlJ%2BAMWDdFK3UGQw8qPCRHKco0Lqs22hmI0ql9yVqe0mge4R8HTTjeNT7GOQHb12Me2CWfL4CCDRBJZbs3OXqsx76F5Z04UzDd6Y3ZD2ZeolIdWwIts7Zfr%2BGxXjhSkA4tQjiFvsZQWz3zBE4Fpx0hKOP%2F8lXbkgwF1blsRrwqJwkTynkaA%2FeplaUsw94yCvgY6pgGAswa%2B5lZAKnbvBq8rgkmu8HYXn7ZVPVdEqqPw59uFIKZTT6lJ5uhPdfi7HIUj98aqk8snDeoQlKr023voNgb6A76nGhd7zThHzFzaYvBhp0SKTRQ%2BCeM67uEgav1B96WvPled0yIbM%2Bj8SxRnhzZuIqKlZNXqhqgJGb22cJI1UqGbzsx3x8raMhAeEJ5K8FokRmaDqWlJoVd%2FCuuKQIdnvA56qApd&X-Amz-Signature=b6ad065b6e760088e82e813aaae3b9b2ea8386bc775dccb68a264fad7966d982&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHNNLMD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCID1svtDEg7oKwOr2O8RX460rUczSyPHs1Wa22J570ApgAiACB2V%2F%2BgidkDEAiSkuIYD0Q3RkCPzGk%2FKmb4LeS0FKRir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMZ6zEjoLqENbYxCgsKtwD1G1d1HG0t9VslCO8yPlNm1cNkTkoQZ5LMMHEsdg7N7AhWk0qMyn3F%2BrXhXl8lHk2ebV5I5h3XQSUcS4EhpfaCpec0%2FXs8%2BTD0rriEy0sVinOYeDWWyFqmVtapngKS82GHcsk8WyuxTuPD8ROj9hQdYs7rltrgjJLQmX0vL4pBKm6Rd7HFSA77w7SRrjqKCKafLp4PxuvawlikazPRBx8EyENfJkVqMmMqQ3%2BqW0LyPxS4hO%2FsIPUZTut%2FRTbyxq8itYxkzISIwUiZXgdLxyyGOUA7O6Si9zthPgJESsV2TI%2FhRAXb37PWgOE4%2F5qBPGPuQMV7%2F2ZxYpMppVGVOou5Xxv%2BH%2Fngf1EJmsmf3FZ6VNTh3V6ypdFBY%2BzimqNZLZy8zK%2F4ZRJYS1XrpRNXh%2B%2BRmYq4EIfhB6RSmXaROHivj6nlo2a3gnjS4EY03AN%2FqQygAlJ%2BAMWDdFK3UGQw8qPCRHKco0Lqs22hmI0ql9yVqe0mge4R8HTTjeNT7GOQHb12Me2CWfL4CCDRBJZbs3OXqsx76F5Z04UzDd6Y3ZD2ZeolIdWwIts7Zfr%2BGxXjhSkA4tQjiFvsZQWz3zBE4Fpx0hKOP%2F8lXbkgwF1blsRrwqJwkTynkaA%2FeplaUsw94yCvgY6pgGAswa%2B5lZAKnbvBq8rgkmu8HYXn7ZVPVdEqqPw59uFIKZTT6lJ5uhPdfi7HIUj98aqk8snDeoQlKr023voNgb6A76nGhd7zThHzFzaYvBhp0SKTRQ%2BCeM67uEgav1B96WvPled0yIbM%2Bj8SxRnhzZuIqKlZNXqhqgJGb22cJI1UqGbzsx3x8raMhAeEJ5K8FokRmaDqWlJoVd%2FCuuKQIdnvA56qApd&X-Amz-Signature=1924a12d97295b1b162ebac50a75aa9049ed20cfa8ca2c0054d366c700632354&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
