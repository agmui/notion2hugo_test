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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URVGAEM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiW%2BjZLqeqDtPKaFs5%2Fpy1C56JzaUgSZ%2BmNbHCzJQ%2FkQIhAOrm9SmlHOCzc2EgDVcm6tZQ2Qjxa7TaQeWzMfF015aSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkXfmpyR9WsOWB2kcq3AOl0yGujeIamY1Mg5x9Lt4bZMSULBlXKZqcSfjeUkyMsxdeG9peZ5SZoXZ7mgWimkCdjG7g0uaXYtLXY8RxFGqAlg4DMipK%2FhWiycQjt%2BvQjEzIz8f1zitwfcA9s1lghVuE7HQDgaIO5usH%2B0BRsnoCD9i8XFWsND0IulbJlKaXFerNeKddUSUshM3udKSAtzbv6TXStLFArz89nYo2AdWcF0zi0rgh9cpaw%2FP5qdX%2Fncvo5Ni%2BNUk5%2BK8LMt8%2BTztY5kQTHQi3u%2FT9PSATU4D00sA%2BgghguUjUhoxtgO5Un%2BrywiBX3GgFfQO9pjd4wCjpHCVFte23SRa0M5IS6TkEugx4UpxZeGhu1q6Q%2Bd7Eh9MkaQnJvSybDxH1foYdka9N5ISVEZ5dN3WqRf1wl8L7TmKLNvepmnm7rBv6ka7%2FnHl1cV9zzOQqPlrZ19CEgJOotH6GWMLjN2XmLlMbyKw6UIjDyzhdsrcJ9FaUQdjxJWCmz20KEtvtzbZnjjSiRfcSmkchf4M4vWi3ZOYOF%2FvRJsZGh2Vh9REF%2BrZWMVK0W%2BmRNuGQNNQU8gVdMUhUWsbT8wjizSObad3pTg48jUdwWNtYKQ6fdkzgSL1HpFcy8yZ15Q9PtgkdYCTfpDCY%2FefBBjqkAUlol4QErpZamAesCXvP7NELNv5yRBXGZOd3mRICWNzxzI7NFc9vqk23CIGm%2Fq%2FXE%2BUEHuzd9NdfipqJz8aJwJEAYJ34qFl2SPxQoa%2BE0gFaWWyNVtblqPy6IuO3GOGOx%2FIqG5QauZ0Aa8OhLYEMhCkLETSNDYI8yl47PPjb44n28M5nSMzB7BThsWrv2jW1BzrW9OjQFh6KY1rxBPPD2q0rEIpj&X-Amz-Signature=8cce2deeaf00757a9bb8d9c85796a16ed73137862a8bd19230799f901363046f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URVGAEM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiW%2BjZLqeqDtPKaFs5%2Fpy1C56JzaUgSZ%2BmNbHCzJQ%2FkQIhAOrm9SmlHOCzc2EgDVcm6tZQ2Qjxa7TaQeWzMfF015aSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkXfmpyR9WsOWB2kcq3AOl0yGujeIamY1Mg5x9Lt4bZMSULBlXKZqcSfjeUkyMsxdeG9peZ5SZoXZ7mgWimkCdjG7g0uaXYtLXY8RxFGqAlg4DMipK%2FhWiycQjt%2BvQjEzIz8f1zitwfcA9s1lghVuE7HQDgaIO5usH%2B0BRsnoCD9i8XFWsND0IulbJlKaXFerNeKddUSUshM3udKSAtzbv6TXStLFArz89nYo2AdWcF0zi0rgh9cpaw%2FP5qdX%2Fncvo5Ni%2BNUk5%2BK8LMt8%2BTztY5kQTHQi3u%2FT9PSATU4D00sA%2BgghguUjUhoxtgO5Un%2BrywiBX3GgFfQO9pjd4wCjpHCVFte23SRa0M5IS6TkEugx4UpxZeGhu1q6Q%2Bd7Eh9MkaQnJvSybDxH1foYdka9N5ISVEZ5dN3WqRf1wl8L7TmKLNvepmnm7rBv6ka7%2FnHl1cV9zzOQqPlrZ19CEgJOotH6GWMLjN2XmLlMbyKw6UIjDyzhdsrcJ9FaUQdjxJWCmz20KEtvtzbZnjjSiRfcSmkchf4M4vWi3ZOYOF%2FvRJsZGh2Vh9REF%2BrZWMVK0W%2BmRNuGQNNQU8gVdMUhUWsbT8wjizSObad3pTg48jUdwWNtYKQ6fdkzgSL1HpFcy8yZ15Q9PtgkdYCTfpDCY%2FefBBjqkAUlol4QErpZamAesCXvP7NELNv5yRBXGZOd3mRICWNzxzI7NFc9vqk23CIGm%2Fq%2FXE%2BUEHuzd9NdfipqJz8aJwJEAYJ34qFl2SPxQoa%2BE0gFaWWyNVtblqPy6IuO3GOGOx%2FIqG5QauZ0Aa8OhLYEMhCkLETSNDYI8yl47PPjb44n28M5nSMzB7BThsWrv2jW1BzrW9OjQFh6KY1rxBPPD2q0rEIpj&X-Amz-Signature=0969b01ac6f6815b95acad58b1a88524c68b646ef59334cbc334b1ec97dedd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
