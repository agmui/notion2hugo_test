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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJT5TOD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD9yax1i%2B9TkHr3uUwWL81uZSd0BSVErQGqeqdCZPKzlgIhAOeTmdjYEDj6a2XCs5yF12QY5rqPYMd4LL0Yp1mkWvOrKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysU2eVRqGkOVRAcqAq3AN4QZnZGfgIi9WZmAB5%2FUsPMsC%2BCJyQDWqu6hkYG1nsrBtcXdEBT6eIy9BAYeJn27A4hm%2FGT9bvUwAJsn2R56plMaSMaGWnqVruZykyGZceDAIfSw3zcDn0RmNyCdVqtEMIeTdzDtZ7pQJbRasQ5KLUFPXSslvvb%2Fu%2BwzoCthaCSUrKJ147EMUrbbpb%2B%2BKOpWvyG2R1SBRI9UneUi6JaOGyYNycohUUccUoULGuqv8Ooc%2BzAMgazhO%2FHmqAaNpgp%2F%2BKuHGXA%2Br062dP51VLKZgevnSecqPrP6NitKFlqtKXIJooC54Jy%2FwKBsH3sKv8KaodTbe3K%2BufL2eHepXbXYz755FJiFxMcIe22I47LYhlXoCyuonsaJlvm%2F7uVfz7Jte%2F2%2BbHnK9Uujqkp1ZzA2tHq%2FoOjcYKLE9dD2gr9Gr9%2FqV8uEThgA27xSn89C4iG1cbaSS4mjkYMLvYuQaIfYBY1SHZmksKAONOWMVKiRmcdyhCXvfXGJXWYAitDyYpe3JaD3diafmtzoppKRQk0FAin%2FYNQpCnE3ZAhLqBb89aHxnaYq8UoOg6F0lXjnkWxm2kiJtVnGlANKmSl16%2BnJ7IsMs%2BtWAizf6LXRwH2N9KfcOX6m9pzqy7eLPoWTDWsLvBBjqkAVeT2AzuvbguYPe78FfOnkyX1FbXZ0QyXc1A2YAUNp1oGKiaa3smuAbxMwArN2%2BbnCwPwJe9fZjHaXDl7JKZieoJOUN8esJJ4KtK34fNl%2FDPZOL7NrAeClImojXZJ7lgUj3y7slLNlVeYGFE%2FgNEU8RKGbIHXtwcwTZO3PsEz39MSAa0xOJJ0CrcR1sex6jbqtNG4XY0oQ7l2c%2FZOlGesWt3SYOj&X-Amz-Signature=984cd0ebe637d2c1ceb58896ef93f76fabe7b0d2ed54949c1bde17d1060975f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJT5TOD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD9yax1i%2B9TkHr3uUwWL81uZSd0BSVErQGqeqdCZPKzlgIhAOeTmdjYEDj6a2XCs5yF12QY5rqPYMd4LL0Yp1mkWvOrKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysU2eVRqGkOVRAcqAq3AN4QZnZGfgIi9WZmAB5%2FUsPMsC%2BCJyQDWqu6hkYG1nsrBtcXdEBT6eIy9BAYeJn27A4hm%2FGT9bvUwAJsn2R56plMaSMaGWnqVruZykyGZceDAIfSw3zcDn0RmNyCdVqtEMIeTdzDtZ7pQJbRasQ5KLUFPXSslvvb%2Fu%2BwzoCthaCSUrKJ147EMUrbbpb%2B%2BKOpWvyG2R1SBRI9UneUi6JaOGyYNycohUUccUoULGuqv8Ooc%2BzAMgazhO%2FHmqAaNpgp%2F%2BKuHGXA%2Br062dP51VLKZgevnSecqPrP6NitKFlqtKXIJooC54Jy%2FwKBsH3sKv8KaodTbe3K%2BufL2eHepXbXYz755FJiFxMcIe22I47LYhlXoCyuonsaJlvm%2F7uVfz7Jte%2F2%2BbHnK9Uujqkp1ZzA2tHq%2FoOjcYKLE9dD2gr9Gr9%2FqV8uEThgA27xSn89C4iG1cbaSS4mjkYMLvYuQaIfYBY1SHZmksKAONOWMVKiRmcdyhCXvfXGJXWYAitDyYpe3JaD3diafmtzoppKRQk0FAin%2FYNQpCnE3ZAhLqBb89aHxnaYq8UoOg6F0lXjnkWxm2kiJtVnGlANKmSl16%2BnJ7IsMs%2BtWAizf6LXRwH2N9KfcOX6m9pzqy7eLPoWTDWsLvBBjqkAVeT2AzuvbguYPe78FfOnkyX1FbXZ0QyXc1A2YAUNp1oGKiaa3smuAbxMwArN2%2BbnCwPwJe9fZjHaXDl7JKZieoJOUN8esJJ4KtK34fNl%2FDPZOL7NrAeClImojXZJ7lgUj3y7slLNlVeYGFE%2FgNEU8RKGbIHXtwcwTZO3PsEz39MSAa0xOJJ0CrcR1sex6jbqtNG4XY0oQ7l2c%2FZOlGesWt3SYOj&X-Amz-Signature=60cbf7060e26a3e6840c7212563020350cdceadd259291ec1f8a7112b88a321c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
