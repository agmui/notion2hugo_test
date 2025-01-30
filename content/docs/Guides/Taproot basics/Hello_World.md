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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFC6XKW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2FtjmeMQfo3GxUqKrSbBrP7iQbTgj53lBI702yn1BbgIgbAUw2YyxeUI0lws6dhfRR1MPD99HDLC1M1XCrAJr1wkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYETFDxvwQ05yJwECrcA28ozQgR3eEaIGQ%2F5N6%2BUh%2FyG0SVv0a3uW0HFwjKJj3GJsWqhglMueKX%2BSRGO4ZnWPYjBpXdeATlqpn9HsrZ26acFlC4IZAO37gJAafj9a3IrAdSkkBbfE2IkvyYle1HVGV%2FVyDgggR5OfLgeM%2FcYHrnU29yxW5wRq14vHyQgrySDvgBJPf2eyXQNNinyTuGgYRfmYZ97%2BlFeS4yaTVrP7g3%2Btwthc%2FMS32AXhyy84N%2BUVeD8lBEEllC3%2Bq5R79qB1dyd4A4Dw1U6jZpUsgh45FcKlAlzZXwytfkV5rLdFLJBDCNZDQ8gEAy99hJpkLWpjF7F7SkLJ9Nhh3HrW%2FL%2Bj%2Fg35ZBxySyTjSt0rBaC%2BjgmnNWuH9F2rRlwshRqHosUZeDuBZZyYHIn71gc3uULBkelHp6fK4mQYcco0gPS9smqQdumgj%2F7tYoWd%2FmCKAT5lZO%2FQSbrZsRzaENdD5B9oZfx7FBNvRJGHOGwZUsFUPdItHz%2FWpYSLU%2BqrQ8WZ0XAoORoCljWTMOpI8JqGRN26mRRILgkoBVOJNQPsHtnEWHnGsBfD7TQy9pv8isCDsRxX7l7MGnTxKlSYOG3azQAKTVKSFDuhVDKqvUcXNRhtPiuY8MRTDc%2BMNACGlnMJPs67wGOqUBdASxwltlhNvgO25o%2BABibsAT6VROzlOndA1wmiYFZvK20Qi8AlVw8K9K4y4e%2BD%2Bo3FWMtqSHJruvoqQltpmk%2FNmGEO0DDot8OxEEDOpdUW4BiKZyfoz5RFCu9mVbefCnzEDjMNrq9hN706IeVn3RPp4YtAmwFxM6jQAKA79tYZxWpZkNaI3ZscGdBiBXqDyuQoGr8dVIVvVHM64O7UyNf2TWBGOO&X-Amz-Signature=c296981bd502f2675ce346253f6af7c022de2342256ddd8ab28640af965da5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFC6XKW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2FtjmeMQfo3GxUqKrSbBrP7iQbTgj53lBI702yn1BbgIgbAUw2YyxeUI0lws6dhfRR1MPD99HDLC1M1XCrAJr1wkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYETFDxvwQ05yJwECrcA28ozQgR3eEaIGQ%2F5N6%2BUh%2FyG0SVv0a3uW0HFwjKJj3GJsWqhglMueKX%2BSRGO4ZnWPYjBpXdeATlqpn9HsrZ26acFlC4IZAO37gJAafj9a3IrAdSkkBbfE2IkvyYle1HVGV%2FVyDgggR5OfLgeM%2FcYHrnU29yxW5wRq14vHyQgrySDvgBJPf2eyXQNNinyTuGgYRfmYZ97%2BlFeS4yaTVrP7g3%2Btwthc%2FMS32AXhyy84N%2BUVeD8lBEEllC3%2Bq5R79qB1dyd4A4Dw1U6jZpUsgh45FcKlAlzZXwytfkV5rLdFLJBDCNZDQ8gEAy99hJpkLWpjF7F7SkLJ9Nhh3HrW%2FL%2Bj%2Fg35ZBxySyTjSt0rBaC%2BjgmnNWuH9F2rRlwshRqHosUZeDuBZZyYHIn71gc3uULBkelHp6fK4mQYcco0gPS9smqQdumgj%2F7tYoWd%2FmCKAT5lZO%2FQSbrZsRzaENdD5B9oZfx7FBNvRJGHOGwZUsFUPdItHz%2FWpYSLU%2BqrQ8WZ0XAoORoCljWTMOpI8JqGRN26mRRILgkoBVOJNQPsHtnEWHnGsBfD7TQy9pv8isCDsRxX7l7MGnTxKlSYOG3azQAKTVKSFDuhVDKqvUcXNRhtPiuY8MRTDc%2BMNACGlnMJPs67wGOqUBdASxwltlhNvgO25o%2BABibsAT6VROzlOndA1wmiYFZvK20Qi8AlVw8K9K4y4e%2BD%2Bo3FWMtqSHJruvoqQltpmk%2FNmGEO0DDot8OxEEDOpdUW4BiKZyfoz5RFCu9mVbefCnzEDjMNrq9hN706IeVn3RPp4YtAmwFxM6jQAKA79tYZxWpZkNaI3ZscGdBiBXqDyuQoGr8dVIVvVHM64O7UyNf2TWBGOO&X-Amz-Signature=7bd3e16761ccd8aa78f3fba041501f2628984e5660944ec0625fbee4ace82168&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
