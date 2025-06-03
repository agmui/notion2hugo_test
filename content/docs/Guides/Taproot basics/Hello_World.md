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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XVCJKL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDYCrfNirGY8TD12zXDAxzCutB7XWHvdhbBSy%2F9TQJWHwIhANgDuvYglEelkJnjWw%2BqhwqEixN2p1ngRzKF53wWf%2BI3Kv8DCBQQABoMNjM3NDIzMTgzODA1Igz0TH5ay%2Fj97KJwx8sq3AMLPibcN7i%2BM237zWT4BExPXudELbFtD%2BNPid9NIhTqMfVLrPcLLKdl9xDuE8flwSn8v%2BFCiUA85Sd0%2FNaUkqiNn%2Fa1mOHjz52BF6a6p3lrP9I34eBXNuYfKs%2FCB9DduziFxT1XeZii6WJx9nXPlTBYlGBAoDxOlL%2BQ%2BPaQeatr2JugDiGaejc0V2GRGhjCrwtlbtIoeAQJQ7vtkK4zxD01STZWmH09WDv7JCxCf1OwnIzrP6HQLHO5r7%2BNKVKRC9AnUCkIzz9ZTbdWy7lkVa6JFeYiBxAh%2Bi8A9Y5zP1wM8VYz07daEdYmRyoRjBfR3lBxFGY2fApXj9Tuup3pNZP2MOp1QKdz%2BvpYUmHKlDOHs5g72%2F%2BZebsb%2FeRgyiOz6kK2UG3H0JYTK4zrFaH%2FkdXVJc3PVEGxdJeCVMCvjyWH8UPStDjScw5nFMcfG6VB6wzqCGRTzFvUCDj1rUTz6xGayvAyUZ5GaXE9AXW%2B7C%2BUy6%2BpJjzR5wIkiWHC4kRY9y5xsEePuaOMLgZg5ae9Q05Y3HykaTa0gmzYd4FwG8djShO8hIma1CQ6lqbR0eo%2Bfru%2FULAlHldllkKcz2yHW1Qr5yKztf1m6nAp4ikszCn5aR9vPCj2YAxiUCYCTjDZrPvBBjqkASIshl0s8djt2bI29z1PCl%2Bj85IKzyyzo1qtQ0ie88N%2B3RSjO7DKBmsgnfqR4EfYIZkYfos3uQ7IbNLnD%2FDmGGdh4pbjPEbxA5UrVY2hdwcW%2FHMKJADMit1OG67hRdcT9DBlpB0IH%2FYOSLOqoKUVrAeRvkmO8Mij36yXjQBbhHeTJy1NjyORgrU%2B3sHRwOuKVzxRGHo9V7NrIh0mLqE3TMx9qwJD&X-Amz-Signature=3a76b75bd587956d0fd777c69a9d2929626de3820d6f44df2e001764d4cf2029&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XVCJKL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDYCrfNirGY8TD12zXDAxzCutB7XWHvdhbBSy%2F9TQJWHwIhANgDuvYglEelkJnjWw%2BqhwqEixN2p1ngRzKF53wWf%2BI3Kv8DCBQQABoMNjM3NDIzMTgzODA1Igz0TH5ay%2Fj97KJwx8sq3AMLPibcN7i%2BM237zWT4BExPXudELbFtD%2BNPid9NIhTqMfVLrPcLLKdl9xDuE8flwSn8v%2BFCiUA85Sd0%2FNaUkqiNn%2Fa1mOHjz52BF6a6p3lrP9I34eBXNuYfKs%2FCB9DduziFxT1XeZii6WJx9nXPlTBYlGBAoDxOlL%2BQ%2BPaQeatr2JugDiGaejc0V2GRGhjCrwtlbtIoeAQJQ7vtkK4zxD01STZWmH09WDv7JCxCf1OwnIzrP6HQLHO5r7%2BNKVKRC9AnUCkIzz9ZTbdWy7lkVa6JFeYiBxAh%2Bi8A9Y5zP1wM8VYz07daEdYmRyoRjBfR3lBxFGY2fApXj9Tuup3pNZP2MOp1QKdz%2BvpYUmHKlDOHs5g72%2F%2BZebsb%2FeRgyiOz6kK2UG3H0JYTK4zrFaH%2FkdXVJc3PVEGxdJeCVMCvjyWH8UPStDjScw5nFMcfG6VB6wzqCGRTzFvUCDj1rUTz6xGayvAyUZ5GaXE9AXW%2B7C%2BUy6%2BpJjzR5wIkiWHC4kRY9y5xsEePuaOMLgZg5ae9Q05Y3HykaTa0gmzYd4FwG8djShO8hIma1CQ6lqbR0eo%2Bfru%2FULAlHldllkKcz2yHW1Qr5yKztf1m6nAp4ikszCn5aR9vPCj2YAxiUCYCTjDZrPvBBjqkASIshl0s8djt2bI29z1PCl%2Bj85IKzyyzo1qtQ0ie88N%2B3RSjO7DKBmsgnfqR4EfYIZkYfos3uQ7IbNLnD%2FDmGGdh4pbjPEbxA5UrVY2hdwcW%2FHMKJADMit1OG67hRdcT9DBlpB0IH%2FYOSLOqoKUVrAeRvkmO8Mij36yXjQBbhHeTJy1NjyORgrU%2B3sHRwOuKVzxRGHo9V7NrIh0mLqE3TMx9qwJD&X-Amz-Signature=5ee5d9ee76281388def3540ce20f2c2f05fc3e44b0f2239b0752742fcaaeea77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
