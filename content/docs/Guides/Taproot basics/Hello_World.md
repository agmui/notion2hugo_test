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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBE43CUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDllq0Y0wSS5gUApWSThssDLb0jIXc9cpmlYcSJNxlzvgIgBikQfDoBaSeiDvATmYbZqYhe62d1DUJ7%2BLxND63voswqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXyXATSBblsQTC4dCrcA6m4Iu5Su8Sp5GSOhHWRJ6ELod6GqWDu9CWotxcAaZC%2F%2FWEVoXnXHorJUNbCny24zUHA7V4JTUX7zQWUrMr7flbvIi4FqAGAj4uekJUOJ0Lrr3uVWY3aRQgKhDDZs4GEkX9VZ7hvb3h8btWAyHK5JdX4PhdYh%2FW1zqWcx7ZPeD8AAnh0JWsvfdysFfdpB3Wf84Sr2qlW%2FcijcrjkQbrfCiywLEz8PlEMZyTRIzp41CkAw%2FfPib6Fe8ctRhsfnEb0hJz1tDbNg9XeLPsa22kQafopSuyFGigh1k3uvBEG2Nuju2L%2FT7c71ehYeoTCBeGWdwuG4uA7ewSDnVQENCC0UpbZlxDvtvD7ycNKBmWWtYGYkX3KNT6Tn19IbdGxJIc%2FRe3OuorQJLybq65pDp5qd4K7K51f7KC8%2BXBQNGvUdX%2FTOjsTmI%2BSyp%2BITyCE%2B%2BW7Bgkzl9XBm4VtBOFGtw5XaXf5uIfNFssrSV8CFPDXmK98hF3EWnAKaNtaaSUbSwFPTkt866YGYDBkGdSXwqAJXRJybk9Hk6mIrAA%2B3H%2BOHKldBm%2FyaQeB3JDcgGQfEuvCEtnOeHIRTSjy90f8g9G%2F3jKri25iaDC19ONJvhR7KOR1AV4KkQoFEU1EGT%2BAMOu6qcQGOqUB1LP4MMe2%2F9hJiQcXFhJ3W4nKoIqpYmuqrP5g4mw7RQLFlcSOYf0Fm8h%2FSF68V5FKCnk3H5F0qwYUwfPVfgV6Id3edg0h%2Ftm7XwSnhSzIbn1IxWrj73sxrHUKcFVemynJYl%2FvvSOOTtVOgXrf%2BTiPzfNBhoIHeexBL8wI2WWCfAgRpHVxaWu3h2fSvqJlBrsJRva%2BRnAcjNxqVaEw5Qw0UCSX4wl0&X-Amz-Signature=d16bbebc171b6c0088a7dbbb76c6406b51173f9e8f54fe99da3d232daeb195fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBE43CUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDllq0Y0wSS5gUApWSThssDLb0jIXc9cpmlYcSJNxlzvgIgBikQfDoBaSeiDvATmYbZqYhe62d1DUJ7%2BLxND63voswqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXyXATSBblsQTC4dCrcA6m4Iu5Su8Sp5GSOhHWRJ6ELod6GqWDu9CWotxcAaZC%2F%2FWEVoXnXHorJUNbCny24zUHA7V4JTUX7zQWUrMr7flbvIi4FqAGAj4uekJUOJ0Lrr3uVWY3aRQgKhDDZs4GEkX9VZ7hvb3h8btWAyHK5JdX4PhdYh%2FW1zqWcx7ZPeD8AAnh0JWsvfdysFfdpB3Wf84Sr2qlW%2FcijcrjkQbrfCiywLEz8PlEMZyTRIzp41CkAw%2FfPib6Fe8ctRhsfnEb0hJz1tDbNg9XeLPsa22kQafopSuyFGigh1k3uvBEG2Nuju2L%2FT7c71ehYeoTCBeGWdwuG4uA7ewSDnVQENCC0UpbZlxDvtvD7ycNKBmWWtYGYkX3KNT6Tn19IbdGxJIc%2FRe3OuorQJLybq65pDp5qd4K7K51f7KC8%2BXBQNGvUdX%2FTOjsTmI%2BSyp%2BITyCE%2B%2BW7Bgkzl9XBm4VtBOFGtw5XaXf5uIfNFssrSV8CFPDXmK98hF3EWnAKaNtaaSUbSwFPTkt866YGYDBkGdSXwqAJXRJybk9Hk6mIrAA%2B3H%2BOHKldBm%2FyaQeB3JDcgGQfEuvCEtnOeHIRTSjy90f8g9G%2F3jKri25iaDC19ONJvhR7KOR1AV4KkQoFEU1EGT%2BAMOu6qcQGOqUB1LP4MMe2%2F9hJiQcXFhJ3W4nKoIqpYmuqrP5g4mw7RQLFlcSOYf0Fm8h%2FSF68V5FKCnk3H5F0qwYUwfPVfgV6Id3edg0h%2Ftm7XwSnhSzIbn1IxWrj73sxrHUKcFVemynJYl%2FvvSOOTtVOgXrf%2BTiPzfNBhoIHeexBL8wI2WWCfAgRpHVxaWu3h2fSvqJlBrsJRva%2BRnAcjNxqVaEw5Qw0UCSX4wl0&X-Amz-Signature=affe994b8d0dc89b097c3a87a530d6829934485570b40925ae1882ceee186822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
