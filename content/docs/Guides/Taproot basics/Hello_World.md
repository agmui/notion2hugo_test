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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYIGWLT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCht8vHUmhILdb3Lp9p6HVZkrN2OH%2BCO5y%2Fjq6cNOPN%2FgIhAPTz0KSUQ8%2Bf%2FngkY2bEK0jt1KdZaY2y1r9v9PpA1PQdKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8P3gfDd7CpHUJqQEq3AMq6SH4MAGqZFewmurZggISVCNNWpyoWiMpBmZYohazE1U8QPWiz%2BKw9z%2FgSorQRO8SdmJSpHeA4wAf2xK%2Bs%2F3wXvehAArKek1R4V4c85El8w63774WyBwiix7GizPSEHyKJhNz1moUF%2FfjlvbeZwh%2FfiyRvG0W4bkHChkwOimfDXA5cffbIW1FpXE8YEu0yFnl3JhDWQcTbCyVVx0hoMKP9Nz8qGrO1E4PBDeXlaQ9SIRqUJJHWa2YCh7u9TNpKrp4LjvX64JlfIpWKlqT3xindecIZ2dGN6OpxG0ONHUQw8WRZDQ3epdUnHNx982mrtAvr3DIRbEdqUbWlAtXW3F504%2BbIcuF1kCDEDmlROw0i%2BhB1xuYP%2FrPDR9ucX9ZOHbRkNXpY4UTBvMPbL2vQm0QDuQf2vVQ9%2FP1lI1ovA3jSIMCvejWyTIBT5W%2B3z3p8AueWEGCTdP0HfSQvPc5WADtoNxUjVcmDNF2V2tZblKxWbCe5WxKG6JFvYWnnYvJMSVuPfTYOGeH%2FipSytnRcCE3AKWQw4va32Q4A2QhMuzYT%2FYOTGQWxXjM%2BYtUYBowhi1S0h9ZJi%2FN4xWCmHFYmMRAHKIBVfU5yuJAC91ddhdmDbbmsz4Mc5VMMK7y2jD3z53BBjqkAXumsiOyJ0s%2BBLQNYpxPEkJx4goOhbZRE%2BW9YfeATlqQTPBeclCQycPs%2F8A%2Bvho9K07pogDTvtyWRY8OLyjiFOwUWaXV2fjNigqzr6YPq8Dgw%2F65%2BnimEbhf%2FxfRoOErufwLlPcOpQ%2FbeS0N63PN8b5Qjp8x2Je35OhROSQfFzSa9i5iWK6o%2BnnjuN8rsIJt4Tto1YPPjaJtP0lj09rpiszJxV2w&X-Amz-Signature=c14cacb5f62d1b52c618fa0d10f6eeafaadd67098ebe5b7fdbdfe7ef8d082e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYIGWLT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCht8vHUmhILdb3Lp9p6HVZkrN2OH%2BCO5y%2Fjq6cNOPN%2FgIhAPTz0KSUQ8%2Bf%2FngkY2bEK0jt1KdZaY2y1r9v9PpA1PQdKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8P3gfDd7CpHUJqQEq3AMq6SH4MAGqZFewmurZggISVCNNWpyoWiMpBmZYohazE1U8QPWiz%2BKw9z%2FgSorQRO8SdmJSpHeA4wAf2xK%2Bs%2F3wXvehAArKek1R4V4c85El8w63774WyBwiix7GizPSEHyKJhNz1moUF%2FfjlvbeZwh%2FfiyRvG0W4bkHChkwOimfDXA5cffbIW1FpXE8YEu0yFnl3JhDWQcTbCyVVx0hoMKP9Nz8qGrO1E4PBDeXlaQ9SIRqUJJHWa2YCh7u9TNpKrp4LjvX64JlfIpWKlqT3xindecIZ2dGN6OpxG0ONHUQw8WRZDQ3epdUnHNx982mrtAvr3DIRbEdqUbWlAtXW3F504%2BbIcuF1kCDEDmlROw0i%2BhB1xuYP%2FrPDR9ucX9ZOHbRkNXpY4UTBvMPbL2vQm0QDuQf2vVQ9%2FP1lI1ovA3jSIMCvejWyTIBT5W%2B3z3p8AueWEGCTdP0HfSQvPc5WADtoNxUjVcmDNF2V2tZblKxWbCe5WxKG6JFvYWnnYvJMSVuPfTYOGeH%2FipSytnRcCE3AKWQw4va32Q4A2QhMuzYT%2FYOTGQWxXjM%2BYtUYBowhi1S0h9ZJi%2FN4xWCmHFYmMRAHKIBVfU5yuJAC91ddhdmDbbmsz4Mc5VMMK7y2jD3z53BBjqkAXumsiOyJ0s%2BBLQNYpxPEkJx4goOhbZRE%2BW9YfeATlqQTPBeclCQycPs%2F8A%2Bvho9K07pogDTvtyWRY8OLyjiFOwUWaXV2fjNigqzr6YPq8Dgw%2F65%2BnimEbhf%2FxfRoOErufwLlPcOpQ%2FbeS0N63PN8b5Qjp8x2Je35OhROSQfFzSa9i5iWK6o%2BnnjuN8rsIJt4Tto1YPPjaJtP0lj09rpiszJxV2w&X-Amz-Signature=69f2a7b44ec61c40453e8d5e8ff8e23b13fc26a82ce5efbac0f68f305a2530fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
