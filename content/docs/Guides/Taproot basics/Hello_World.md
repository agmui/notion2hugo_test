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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMDMSDT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuGssoBaz5EBeufN9rKMFSDPJkv96ataaU%2FQ0gOY6a2AiA%2BT6zDH1WpDGKMj%2FxPS3cMybJjElB0VeGs%2FoaXlmppdSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbiDGvkA5CzBhgkV3KtwDca86dE6A%2BIt5xTqjS3%2FPOcv6lcZAE3tady46khK256Ig8tugE202EGGKt1y8v0JYKzBuxKoVfGw45D5f%2F7ZWXpHRJt%2F2h12GF9OKvoQdfVrox2n5tHWBjkBHKHLMcM%2FBm2eqG4Y19feb3DILdNbA5bbLd1Kp6Hp0jij%2BRE6GCrNM%2FIz%2BRoPL248eWFRmehhbkBqu3XTAirmHv3o0iWzFV6684iz4UZt3BgE105R18lQhUKNDtx7dIoZtHvys9Se8B9k7sUkxdq6uqqeBH0gFuSBHYARo8WwkHZ8YYeiYvbdBSz8isErOGI3MBvpP%2B4fbG8gBOo26i2SRW7245jhs9TowTukVVuq7Xh1lnoL8uL8%2F1VEs21rtWFHv%2BOx76D2qCi20Iutji5bXhYObw5qphYba1imnplQbzllvOCrKFyusArxMQJlf%2F52652F%2BBKNJJsb2A8RQVbmE%2BsAowGk8omUvF6uVcrUo63BnFv9pZ%2FZ5LyBCZ47iYjTGyiWyNuPRAC5t0Dppg0%2Bfoq3pgs6lR7K2yag2QIxXW4IIpdHa2JA0HsBCa17FLA3QzijHKMuaEkNZ02gWY%2BH3tBAFgzcv47LYKsh%2F0V5JZ2r8odjyxHyNIbTIjjIBcSzEWakwtYy4wAY6pgGw8uGP39dZ0kQGBt4qU2iJ2jM3vX2V%2BBv7t8u4qiIUGcxFDg7ze82%2FC4FI1qT2qYcJhX8VV1TL9OAvJyQe%2BvYLrCb2TRT3dHWBO4Od2QxxBz6nmj0pjbDnwbmJwEIop8ydLLwUQaorpKPVD9W6YZwjIXCOtO%2BL9wGaww9wm%2BDs3mKIFgFk9JYz5d93DWNLVMQZtfKUndOBNStF2OdHPjH3HQc%2F%2FZNk&X-Amz-Signature=8c89338e9d5548b2021521d5e831bcf3c11a10d42e76c0a1a091f09c70290ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMDMSDT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuGssoBaz5EBeufN9rKMFSDPJkv96ataaU%2FQ0gOY6a2AiA%2BT6zDH1WpDGKMj%2FxPS3cMybJjElB0VeGs%2FoaXlmppdSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbiDGvkA5CzBhgkV3KtwDca86dE6A%2BIt5xTqjS3%2FPOcv6lcZAE3tady46khK256Ig8tugE202EGGKt1y8v0JYKzBuxKoVfGw45D5f%2F7ZWXpHRJt%2F2h12GF9OKvoQdfVrox2n5tHWBjkBHKHLMcM%2FBm2eqG4Y19feb3DILdNbA5bbLd1Kp6Hp0jij%2BRE6GCrNM%2FIz%2BRoPL248eWFRmehhbkBqu3XTAirmHv3o0iWzFV6684iz4UZt3BgE105R18lQhUKNDtx7dIoZtHvys9Se8B9k7sUkxdq6uqqeBH0gFuSBHYARo8WwkHZ8YYeiYvbdBSz8isErOGI3MBvpP%2B4fbG8gBOo26i2SRW7245jhs9TowTukVVuq7Xh1lnoL8uL8%2F1VEs21rtWFHv%2BOx76D2qCi20Iutji5bXhYObw5qphYba1imnplQbzllvOCrKFyusArxMQJlf%2F52652F%2BBKNJJsb2A8RQVbmE%2BsAowGk8omUvF6uVcrUo63BnFv9pZ%2FZ5LyBCZ47iYjTGyiWyNuPRAC5t0Dppg0%2Bfoq3pgs6lR7K2yag2QIxXW4IIpdHa2JA0HsBCa17FLA3QzijHKMuaEkNZ02gWY%2BH3tBAFgzcv47LYKsh%2F0V5JZ2r8odjyxHyNIbTIjjIBcSzEWakwtYy4wAY6pgGw8uGP39dZ0kQGBt4qU2iJ2jM3vX2V%2BBv7t8u4qiIUGcxFDg7ze82%2FC4FI1qT2qYcJhX8VV1TL9OAvJyQe%2BvYLrCb2TRT3dHWBO4Od2QxxBz6nmj0pjbDnwbmJwEIop8ydLLwUQaorpKPVD9W6YZwjIXCOtO%2BL9wGaww9wm%2BDs3mKIFgFk9JYz5d93DWNLVMQZtfKUndOBNStF2OdHPjH3HQc%2F%2FZNk&X-Amz-Signature=1e1fbb8d19438a0f5e1bcc56eed2b96c095ec0cced108aaa17c9ce28bf4b4895&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
