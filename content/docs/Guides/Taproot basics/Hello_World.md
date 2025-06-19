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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRK3CYZS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNF5m3DTS%2BEcmrbW4yeBpUtlqrVdxT4l1wlCPjDWUL2QIgLEaB%2Fy0CB93psd4glMvUwc%2FMNHGdf%2FGvorvF3JNAngEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhcoxFTrTXG0lT%2BfSrcA2wuPXjZkBWKoy4w0v8Xb2YEWor39uK5jNRLTG8mMWBuIuGBRRnMzMHQ4WDKzbl%2Fw16TKwC6rKM73NjJt1dcTefI%2FuK419hPeYyZc5bT188biV5Jz6aKOHrt8jZYjgzHbbSNuQn7l1OqZnYptwFXr0G9g%2FUGFZg%2BQWrSpBvUYrpXIoUcZTAu6OMyy3VwXux5cX240DnjWkJzIsz4lCR1DbTHawDFXeXOI4dNee11WRhWD90A07%2FZzy%2B9ziETAlfvvwq0MbdXkMQjjRiy2jdkjiBr96to6Lbqa3EkNWg2cYKuqiA4PWJ2mPzb%2BNjsh9REgChZjqVfNkRS5bSoiqVKrPBkBf0r8EzAUaEq0KHZFggkiSkrwa6QKV8UuRJ9BsLB%2FwE5R9wM66z7IlwxQ05vzgWtEVs71ajxIuAn6iDq45TwJD3GgB4BMWpxOOC0dqPyZqdEj7rdfPf7jY7ae0Cg0mqJThghYMyYXb3AJ0Gzc17ljp0f29%2FsOWGGB99wG7LLoZwdWLTSoxnbJQf0oiM%2FDvK6QYlYIqAfb95DK6bt9b8Q9frFiEvPYIZ3LO9Z5juoXAJSg5OK5b%2BXSIbZR33u9dQ1yFea48%2B6RyQ6CJ29%2BWCDTotynLIZwtN4thTfML2I0MIGOqUBEI%2Fr0FTWhFsgCHHZHfPA6YA5NMJlJU2tgGYeBSbbMYuUwuGLb5D7hW1le5EGZBj4KoQDkTjlMLxK%2FvlnwDUWxpQPqLzXDNuUhKMieCq95GFsmFLuQ%2F53WQaJsiMAnGadNQsE%2FKxhrxwWHFSkt1I8eveJO1ZlnzQqNN5tcb30bro9Xj5x7mPNFSzyzZ7b6KvBD0RmYZDvdvwITwQ%2BQEH8VirLmhrt&X-Amz-Signature=450ff92fc5c5eb498f307e1d5e5fc01f0e05ae6932d711e65fcfffa789034833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRK3CYZS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNF5m3DTS%2BEcmrbW4yeBpUtlqrVdxT4l1wlCPjDWUL2QIgLEaB%2Fy0CB93psd4glMvUwc%2FMNHGdf%2FGvorvF3JNAngEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhcoxFTrTXG0lT%2BfSrcA2wuPXjZkBWKoy4w0v8Xb2YEWor39uK5jNRLTG8mMWBuIuGBRRnMzMHQ4WDKzbl%2Fw16TKwC6rKM73NjJt1dcTefI%2FuK419hPeYyZc5bT188biV5Jz6aKOHrt8jZYjgzHbbSNuQn7l1OqZnYptwFXr0G9g%2FUGFZg%2BQWrSpBvUYrpXIoUcZTAu6OMyy3VwXux5cX240DnjWkJzIsz4lCR1DbTHawDFXeXOI4dNee11WRhWD90A07%2FZzy%2B9ziETAlfvvwq0MbdXkMQjjRiy2jdkjiBr96to6Lbqa3EkNWg2cYKuqiA4PWJ2mPzb%2BNjsh9REgChZjqVfNkRS5bSoiqVKrPBkBf0r8EzAUaEq0KHZFggkiSkrwa6QKV8UuRJ9BsLB%2FwE5R9wM66z7IlwxQ05vzgWtEVs71ajxIuAn6iDq45TwJD3GgB4BMWpxOOC0dqPyZqdEj7rdfPf7jY7ae0Cg0mqJThghYMyYXb3AJ0Gzc17ljp0f29%2FsOWGGB99wG7LLoZwdWLTSoxnbJQf0oiM%2FDvK6QYlYIqAfb95DK6bt9b8Q9frFiEvPYIZ3LO9Z5juoXAJSg5OK5b%2BXSIbZR33u9dQ1yFea48%2B6RyQ6CJ29%2BWCDTotynLIZwtN4thTfML2I0MIGOqUBEI%2Fr0FTWhFsgCHHZHfPA6YA5NMJlJU2tgGYeBSbbMYuUwuGLb5D7hW1le5EGZBj4KoQDkTjlMLxK%2FvlnwDUWxpQPqLzXDNuUhKMieCq95GFsmFLuQ%2F53WQaJsiMAnGadNQsE%2FKxhrxwWHFSkt1I8eveJO1ZlnzQqNN5tcb30bro9Xj5x7mPNFSzyzZ7b6KvBD0RmYZDvdvwITwQ%2BQEH8VirLmhrt&X-Amz-Signature=135aa3e410faa6446492fb5241ac47c11927ec87d32debd683f405c014640733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
