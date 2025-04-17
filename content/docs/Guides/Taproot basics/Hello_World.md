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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC43KPGW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ysAr2HTx3b1ckiMnG5zkX%2FaHkpu2fb6nQSKAIHn8dAiAntlUd1%2BdbnvT%2BZ4ZbMM2UJ24Shvrt%2BsDuq0pnMjRkpCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMj8Xy3RfO2GJIjSFQKtwDznsroHzmJlcVwvTOQSpSEbNby2kcOh79OwqqLnb8YZzRwJNaVXtV8%2Ff6lCqNwi92tci9rPOJ4UoRHEgChf34vuNPQPDLEdgAf7oKHi5rXsu5sfyhZrHFTVlvHXXxHS3eo%2B6uhuhBtSp89Oc3rQBGUiMNjy7j34nfXYsMeICRT1zkF7ikqbVbcAKEW0t67pRTw3QP%2BBb79cxaouTlfs%2BtjL9wowOVWF7w2t74MoUTvLEXnmGfZZ0d1OTqCSEDG0TUxVchQaa4akm7dPOdDgyX2km3GZnYJ5sGaBrY%2FbNg3f7Eg1MezIJ2jx%2B3kT5pdwu30owvE42tCgQJXliXGoLIY%2B%2FoWIOyRwtS%2FMj3HLCDX28UoQ4MAhS8C%2BPETUYaGeZgSiR6C3ElN4jItJ1lK%2FYP2oh%2FGtXnUuC2JRAhE4Q35gc9kTF8DnlReExsnyqu1nnim5HQWmuITRPvMnshzK1mYPFIyLErWFTnEx3Q1Pi08DHZuXsWcrKfKhX0c6YjQX0Ci6QwjaNA6Q01z19FgZxNDTyruU%2FQmwl88WGcEfLoFdyCyHYfikNxbzmBcwLrrbDTjNzRFUzHUoTMhGfV5KykoBYs%2Fh7eGjpHr3CgtITQZ6dzmJSFv54F71jPXvkwk5yFwAY6pgFne2HgSMUcOpEtvtD9mY%2FNdMMEFS9RzF0uRJYXBiPXe1Gf9XFBGiIXeQFV0WnbGYkT%2Blg7ACgF5U9%2FwiBlyp8LJNlcsKMA5gvL8%2F8aWJFp7lW8BcdaYxfQX5BjM0Grmy3AOq1cRQ2zP0ukWKKrz8oV5tKCOq6hRR5rWw%2B4HfaORcqA9RdJgIMSKxxe9EtCf6wijwyvv4n5lGge7tsXrc157Lw00DpZ&X-Amz-Signature=f46c03cc7a13fad64c4122b28f72a673a114d4a08f0000f73d8c5c5603664523&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC43KPGW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ysAr2HTx3b1ckiMnG5zkX%2FaHkpu2fb6nQSKAIHn8dAiAntlUd1%2BdbnvT%2BZ4ZbMM2UJ24Shvrt%2BsDuq0pnMjRkpCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMj8Xy3RfO2GJIjSFQKtwDznsroHzmJlcVwvTOQSpSEbNby2kcOh79OwqqLnb8YZzRwJNaVXtV8%2Ff6lCqNwi92tci9rPOJ4UoRHEgChf34vuNPQPDLEdgAf7oKHi5rXsu5sfyhZrHFTVlvHXXxHS3eo%2B6uhuhBtSp89Oc3rQBGUiMNjy7j34nfXYsMeICRT1zkF7ikqbVbcAKEW0t67pRTw3QP%2BBb79cxaouTlfs%2BtjL9wowOVWF7w2t74MoUTvLEXnmGfZZ0d1OTqCSEDG0TUxVchQaa4akm7dPOdDgyX2km3GZnYJ5sGaBrY%2FbNg3f7Eg1MezIJ2jx%2B3kT5pdwu30owvE42tCgQJXliXGoLIY%2B%2FoWIOyRwtS%2FMj3HLCDX28UoQ4MAhS8C%2BPETUYaGeZgSiR6C3ElN4jItJ1lK%2FYP2oh%2FGtXnUuC2JRAhE4Q35gc9kTF8DnlReExsnyqu1nnim5HQWmuITRPvMnshzK1mYPFIyLErWFTnEx3Q1Pi08DHZuXsWcrKfKhX0c6YjQX0Ci6QwjaNA6Q01z19FgZxNDTyruU%2FQmwl88WGcEfLoFdyCyHYfikNxbzmBcwLrrbDTjNzRFUzHUoTMhGfV5KykoBYs%2Fh7eGjpHr3CgtITQZ6dzmJSFv54F71jPXvkwk5yFwAY6pgFne2HgSMUcOpEtvtD9mY%2FNdMMEFS9RzF0uRJYXBiPXe1Gf9XFBGiIXeQFV0WnbGYkT%2Blg7ACgF5U9%2FwiBlyp8LJNlcsKMA5gvL8%2F8aWJFp7lW8BcdaYxfQX5BjM0Grmy3AOq1cRQ2zP0ukWKKrz8oV5tKCOq6hRR5rWw%2B4HfaORcqA9RdJgIMSKxxe9EtCf6wijwyvv4n5lGge7tsXrc157Lw00DpZ&X-Amz-Signature=2846c07e915a4c7c2a31c599c3c20c70b2bc71603d0cd85bd930df59abe76858&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
