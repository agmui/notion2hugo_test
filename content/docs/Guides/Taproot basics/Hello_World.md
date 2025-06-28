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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIYLRAZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjOca29AbnGJRkdRD5eHGrJRskvq%2FvIzEFRhLZRGcDOAiBlHeMjiY69jtITkdLGoR%2B6JpmjP4blyLld8QIe28ZEuiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf70qfqY03nLCTpkNKtwDPKYsHUuPlmiieSOBwCJ40KDSOohj4YMKlW47sJZ7udn0tkdFjrw%2FKLTPPhdGDBjclTctnUttRXV4pinZ6C5ZgTO0etpP90CsL%2BuGS8UoyrEZ89PC8gfITRt%2Ff9lgQAj%2FZty9mnCGwVU0k9hUL9a%2B1Lfq6Qn1ZXkW1SOktsBSYlE6TZtZoP%2FyT0EihfjDV6vdVIGpscR%2B4vfhjHFLNrcyAY7mkZ4Du8sU5hLp2uU%2BiMsdRdQUMk8RbbnLBHIQ53O1qST54f7FXF5jzifMf6gVUs55fqdNElK8KlNLnXbPzZtbE4GdZi1nws2Uv06LwhOOPgWGMuL7RsFMI8DcNecAaxnIMsYFQGT79b31EWWkw8MjJH3LW7ksZARVuLOyA86hdOUOMiG%2FLcyAA7JAyoYenHaf3zg23Siv3eJZej6HKD7lNonvn19UzWRpqseUjGZV%2BSti%2BaY6ba2XBwRDnaPyXs6g%2BI9yZQuXmdCsj2IjPt1bixPiHCPb4grsUm31YMCyPF%2F1zuEKuIOYlNVVCWq9dKy3qWiJ5etlO21dGQWd8IrkfFJa3z1X7ry972aFCd8udz9VP5lXJXbWpKSgoZi5c6hESwahnFx22ajxRIjK%2Bdk%2Bm60mn5hzNVu8txEw06j9wgY6pgGBIvhEpnBW01BX048w%2Fm7krzPSxIWT8TgqX8T%2BYZsMYNbhDhh%2BlBCR25z%2FHJ%2Fv6HfDZX%2BiWuKVMYusl7zEikG%2FZfVA2xp9m7oPGGdXSx74MZ%2BvstGX%2BTz4EqPzPLBg11qYywaaNS%2FIypa2ShYN9Ok%2BnpSVEh8ODX7BGcV5rGecHWKRL0I0hYKZ%2BRGtMESUbxs6cXlyPJO7EGO8TDQEu5kBchoaSM6g&X-Amz-Signature=9968534278048870a2d2c1dca7e00a99a17c3750ed1c2a28abc6b0cd8cf51b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIYLRAZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjOca29AbnGJRkdRD5eHGrJRskvq%2FvIzEFRhLZRGcDOAiBlHeMjiY69jtITkdLGoR%2B6JpmjP4blyLld8QIe28ZEuiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf70qfqY03nLCTpkNKtwDPKYsHUuPlmiieSOBwCJ40KDSOohj4YMKlW47sJZ7udn0tkdFjrw%2FKLTPPhdGDBjclTctnUttRXV4pinZ6C5ZgTO0etpP90CsL%2BuGS8UoyrEZ89PC8gfITRt%2Ff9lgQAj%2FZty9mnCGwVU0k9hUL9a%2B1Lfq6Qn1ZXkW1SOktsBSYlE6TZtZoP%2FyT0EihfjDV6vdVIGpscR%2B4vfhjHFLNrcyAY7mkZ4Du8sU5hLp2uU%2BiMsdRdQUMk8RbbnLBHIQ53O1qST54f7FXF5jzifMf6gVUs55fqdNElK8KlNLnXbPzZtbE4GdZi1nws2Uv06LwhOOPgWGMuL7RsFMI8DcNecAaxnIMsYFQGT79b31EWWkw8MjJH3LW7ksZARVuLOyA86hdOUOMiG%2FLcyAA7JAyoYenHaf3zg23Siv3eJZej6HKD7lNonvn19UzWRpqseUjGZV%2BSti%2BaY6ba2XBwRDnaPyXs6g%2BI9yZQuXmdCsj2IjPt1bixPiHCPb4grsUm31YMCyPF%2F1zuEKuIOYlNVVCWq9dKy3qWiJ5etlO21dGQWd8IrkfFJa3z1X7ry972aFCd8udz9VP5lXJXbWpKSgoZi5c6hESwahnFx22ajxRIjK%2Bdk%2Bm60mn5hzNVu8txEw06j9wgY6pgGBIvhEpnBW01BX048w%2Fm7krzPSxIWT8TgqX8T%2BYZsMYNbhDhh%2BlBCR25z%2FHJ%2Fv6HfDZX%2BiWuKVMYusl7zEikG%2FZfVA2xp9m7oPGGdXSx74MZ%2BvstGX%2BTz4EqPzPLBg11qYywaaNS%2FIypa2ShYN9Ok%2BnpSVEh8ODX7BGcV5rGecHWKRL0I0hYKZ%2BRGtMESUbxs6cXlyPJO7EGO8TDQEu5kBchoaSM6g&X-Amz-Signature=be7964ffb474f06a890a31d7672e65367fe5f705840bb2fa8afd433b08782ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
