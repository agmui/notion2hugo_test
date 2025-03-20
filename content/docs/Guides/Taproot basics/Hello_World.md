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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUNGX6V%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC9XLscZJj%2BUsrKJE1p8sEwJSp3oC4BE7fXUHD%2FfRWffgIhANM1Oq8v607hg1sDoPkbZAD%2FwR3TtKqDWCwwIxeN5pR6KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1O%2Fu8XCh87do642wq3AO9MwAe9tBRmh3rt4PjebLzaguSVkm3SCa8fIkEzbt7xfX7yWcL6zF6155c%2Fe4fyvr4Z5GogIBlehI0H6oX2gBIfU9xhCAJ3myAFMtGz7BjrsNpCHCIJk%2FrHuKscYQ4dZ%2F0FABMZGqdB8gerplPvBU5czu%2Br9Ibsh53%2BG1WY1nHxluTBikXZ0L9xN%2FEDNvj%2FcKWUQqBxv2Tq%2FfuQ8J53BZS0Yf3sEQzDDju2eopSxM1OKZVJEf6UPjO5txyGuuPbGomSZ8Ggr99VluMubo9Wsl12O5xUbFpo083mY3IvEZgqALWCjVbkCBwQwmMWFXLiqIFLl6FHHDGUhm7Prdxoj4bR47k7T1R14F2Vh5%2Bg6QUgY6tneW1uoF3gJVkuEFY2EEspkerLMcEO0a1PBN%2BYflJMaFnrAvzjgwJ4cjGZUoYR%2FzgSvqJXWR55fHn%2FSkYXWnVLIP5otS8ds7R9rd3j0kEp806M%2FeWCVWyAmXokXSXaYSNzfJAF293n6AbXagsdnZLAM8KiicsGiMWBC0YwIzRaCu19GCwcLYw1pYZY4aLlh8G6wBUX3jyVsXv9XugaDnSLV3nzW5m0aZxbabIIXvRGV4uD%2FMah6riUP1Byrtj7fJX56cH%2FqBHUhuqTzDlhvK%2BBjqkAdsl8hh5uXoNu5o68wPx3mrm9%2FVdGwbRtMsnj7U9p%2FVnrF6doGgUkgme08OQ0LlWn44eIuE36tQt76UCYopU7bN%2BcD7BmJT19qHpsja6TTdMiToFuyLAOOU3LZ3zJWWbqN3pnZsv9tcHOjLmEP%2Br9YfIQ9y%2BpXoaZyW7k8vS4Tn2h985lf%2BKYsXAfhAwQzfasxMlIEBoSviyxJvhdSHSLYB1moMS&X-Amz-Signature=c7525f44be0c05d73a38a57ee975e25b9fb29c42ae140ee2dd7797b162bf46ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUNGX6V%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC9XLscZJj%2BUsrKJE1p8sEwJSp3oC4BE7fXUHD%2FfRWffgIhANM1Oq8v607hg1sDoPkbZAD%2FwR3TtKqDWCwwIxeN5pR6KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1O%2Fu8XCh87do642wq3AO9MwAe9tBRmh3rt4PjebLzaguSVkm3SCa8fIkEzbt7xfX7yWcL6zF6155c%2Fe4fyvr4Z5GogIBlehI0H6oX2gBIfU9xhCAJ3myAFMtGz7BjrsNpCHCIJk%2FrHuKscYQ4dZ%2F0FABMZGqdB8gerplPvBU5czu%2Br9Ibsh53%2BG1WY1nHxluTBikXZ0L9xN%2FEDNvj%2FcKWUQqBxv2Tq%2FfuQ8J53BZS0Yf3sEQzDDju2eopSxM1OKZVJEf6UPjO5txyGuuPbGomSZ8Ggr99VluMubo9Wsl12O5xUbFpo083mY3IvEZgqALWCjVbkCBwQwmMWFXLiqIFLl6FHHDGUhm7Prdxoj4bR47k7T1R14F2Vh5%2Bg6QUgY6tneW1uoF3gJVkuEFY2EEspkerLMcEO0a1PBN%2BYflJMaFnrAvzjgwJ4cjGZUoYR%2FzgSvqJXWR55fHn%2FSkYXWnVLIP5otS8ds7R9rd3j0kEp806M%2FeWCVWyAmXokXSXaYSNzfJAF293n6AbXagsdnZLAM8KiicsGiMWBC0YwIzRaCu19GCwcLYw1pYZY4aLlh8G6wBUX3jyVsXv9XugaDnSLV3nzW5m0aZxbabIIXvRGV4uD%2FMah6riUP1Byrtj7fJX56cH%2FqBHUhuqTzDlhvK%2BBjqkAdsl8hh5uXoNu5o68wPx3mrm9%2FVdGwbRtMsnj7U9p%2FVnrF6doGgUkgme08OQ0LlWn44eIuE36tQt76UCYopU7bN%2BcD7BmJT19qHpsja6TTdMiToFuyLAOOU3LZ3zJWWbqN3pnZsv9tcHOjLmEP%2Br9YfIQ9y%2BpXoaZyW7k8vS4Tn2h985lf%2BKYsXAfhAwQzfasxMlIEBoSviyxJvhdSHSLYB1moMS&X-Amz-Signature=da85b5605fa99cdaa3b0e156fad68c3bcc4ad07e3d97851ed88b28f6533f611a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
