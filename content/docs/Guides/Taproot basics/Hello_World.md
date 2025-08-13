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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKVUGVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQkuxCoASnF7Ifv0uhpC7CtSgMrOkMR0qu8QCMvX%2FpsAiAWSGswigNvqyoCNON4g%2Bkm90mpZlWEN9h%2FNkJPLlj5dSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMdXZegXpMgqeGlcNnKtwDfcPTRvLh7jMB36XsvYOFWc5y7NQVzwyVLM3tzCcRY3J3jcXvTh3f%2BqqdKw6921u6C8ht6R66Kebp1TQjZavgkAJ6pfyN3Y1iXS1pb5Kup9f0%2FdsGs5vOoCGpx6C6EUDL%2Fg0QtyLOsjzdK6AT5UGY3zM3Fp1w1Nfv5kf%2FawM0u601J9MuUSj50vnn3SrnIna0k%2BMydOY7Pfo5JymapyYHH2C1rOCTQH4dKQDbofwK5CFM9Rqpr0Mnkusrq52vcc3tVFytmFENO06rQry1m59K9yfQzYzhJzWYHKs972fH3h5K1lEsMu4ZzFSwI5krkRSwXPTqH9caXK6YXxw0lOjMuWoSZ%2BR5NGR4FRTt1WvYzTyBXPmhf28Yvrt2lqyOj18llLCyH6Xh6htAPduNWPDQdnqE46vktmQQqZU%2FsFz5Bc5rfiIcEsPQDBhBnzHH1PFPpzjqBZkyDCbMypGZt5ecEQURwTxvwm05SVRBYJjLZWGKv8TzpRMiY28vjy1gvW7%2BtW5yYbusviRBwlep8dcgqTEJrAdQrLWEnmQV3meKmeUSjA7KuGpZgkYdeAvvspkoRM6pEO300ADM2k7J5UIb%2FfsGTNxrVSHf2cF4D7gjEPbpbv0dA6uP%2FVsKY4Mw0KDzxAY6pgGm7d7uqQWaI8CbUKZ5U%2BbVU0JkMNdFYy%2BkUVBEPXDx1WVHvcss%2F1pMmHvHU5eFvEsZDLbsTqc3OR087Nt5bw%2Bu2Z31bWP77lOarmI99KEvlTyVVF4j1odsZw7GFTJ6T1vqprW05%2BnUsVJsAd0n9alM2GyX07SICyMreaoQ7CtIzqx5DWz7yPweHizK%2FXWOSHYx2861X%2B07M0%2BqVfn5Fp%2BiDaGBZnsj&X-Amz-Signature=9cb4f44fd8b3b7a29009b768a1e465b1521c9db5fd5a9788505864c0fc10e60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKVUGVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQkuxCoASnF7Ifv0uhpC7CtSgMrOkMR0qu8QCMvX%2FpsAiAWSGswigNvqyoCNON4g%2Bkm90mpZlWEN9h%2FNkJPLlj5dSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMdXZegXpMgqeGlcNnKtwDfcPTRvLh7jMB36XsvYOFWc5y7NQVzwyVLM3tzCcRY3J3jcXvTh3f%2BqqdKw6921u6C8ht6R66Kebp1TQjZavgkAJ6pfyN3Y1iXS1pb5Kup9f0%2FdsGs5vOoCGpx6C6EUDL%2Fg0QtyLOsjzdK6AT5UGY3zM3Fp1w1Nfv5kf%2FawM0u601J9MuUSj50vnn3SrnIna0k%2BMydOY7Pfo5JymapyYHH2C1rOCTQH4dKQDbofwK5CFM9Rqpr0Mnkusrq52vcc3tVFytmFENO06rQry1m59K9yfQzYzhJzWYHKs972fH3h5K1lEsMu4ZzFSwI5krkRSwXPTqH9caXK6YXxw0lOjMuWoSZ%2BR5NGR4FRTt1WvYzTyBXPmhf28Yvrt2lqyOj18llLCyH6Xh6htAPduNWPDQdnqE46vktmQQqZU%2FsFz5Bc5rfiIcEsPQDBhBnzHH1PFPpzjqBZkyDCbMypGZt5ecEQURwTxvwm05SVRBYJjLZWGKv8TzpRMiY28vjy1gvW7%2BtW5yYbusviRBwlep8dcgqTEJrAdQrLWEnmQV3meKmeUSjA7KuGpZgkYdeAvvspkoRM6pEO300ADM2k7J5UIb%2FfsGTNxrVSHf2cF4D7gjEPbpbv0dA6uP%2FVsKY4Mw0KDzxAY6pgGm7d7uqQWaI8CbUKZ5U%2BbVU0JkMNdFYy%2BkUVBEPXDx1WVHvcss%2F1pMmHvHU5eFvEsZDLbsTqc3OR087Nt5bw%2Bu2Z31bWP77lOarmI99KEvlTyVVF4j1odsZw7GFTJ6T1vqprW05%2BnUsVJsAd0n9alM2GyX07SICyMreaoQ7CtIzqx5DWz7yPweHizK%2FXWOSHYx2861X%2B07M0%2BqVfn5Fp%2BiDaGBZnsj&X-Amz-Signature=0982b76c85671209d90bacd0522264bcc12ecf2b1b1ef96024b4b9ec033d4899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
