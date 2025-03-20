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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLIQTR5P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD30G%2FNoQDUaJUH%2FE0oTzbwXup7bCBaOzVjQT01We2SCQIhANTUnasHgmHDYbH6eamlRiAEJSoW64SVWwPMWNNNMhRfKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDnwLAMis0aKtO3GAq3AMcAWnWnwSVeymkxJRmDe0GPZvy34C%2Bmz%2FxkomDHFQPUACcbdqanhjc%2BCHnac3l7NWK9QqHS6sJy%2FXwNqBp9hbIGNLBGrZyunxt7WPN5vHDr%2BcXqdauFxCkOrz27KwZ84DXXGm3tTjbG%2Bj7VjEwoB3s1duEgijrU%2B0%2Fo8C3EKSDhfYF5gtdTVoutBqS02Zlt0O7McHhA67IOurVzs%2Br2r%2Fswafu6DhE0syD3Q6RiYhQ196CR2AmhSDxKriQ8k7JBW8lynIP9EzkPXVE1jKzovVKYn3ZzlAqbobIJS7w8Enw%2Bq7nG%2F9Cl4PWDl1TQT%2Bh3ffwC6Bx%2Ff4tY%2BVo%2BsYe8FfeNas66oT%2FHqOOKgz%2FzI7E9CHqAhsr0ln3LlxdOjwC%2Fbdumds531XpV63p8yANHpc%2BNUiSZ6t6TuyBJNh3Pa4L0KVKndbec%2F25ywj0HzQJekAd%2FEzVUbIYZrBrkhOu92nJmItaC5fk0WomHB9X3Sgv6uLbTMI9d2FD9aPLiEANRJoJtrZeUn9gBOPoWOJMuSrIUXrjoVcoA0ar1NHR9bj829JhyEgh6EiW2aOd4FBCBXHuMfxhesLUxWNCE8pCQOtwzcispSCY9W65BQA52U0KQSpsIl47%2BYS5am2RqDCF6e6%2BBjqkAQR5T3VkKqiS%2BnaaQz%2B1beMbmXJscIzi9PuQsqXe10UgFjpbUF9WNHbGDh%2F2zaCi9HBV6RYyL4jv8lAqsMzidDEH8phdNmFT18iR6kXXhVN0mORe9EZzpwsvdCVnkVWqjgmt5arfIlL2i6lY4CIGH8fpHCRlP%2BHcq9iYbyUFPenBuLA%2BuMtvBS02ydDuu7jvwdAye2ajOu1sBeB8b3%2BPywm2QuW4&X-Amz-Signature=924f15d169ef008b48420a1eba32a36bbf11f9aade0e49baec4c5849500b532e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLIQTR5P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD30G%2FNoQDUaJUH%2FE0oTzbwXup7bCBaOzVjQT01We2SCQIhANTUnasHgmHDYbH6eamlRiAEJSoW64SVWwPMWNNNMhRfKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDnwLAMis0aKtO3GAq3AMcAWnWnwSVeymkxJRmDe0GPZvy34C%2Bmz%2FxkomDHFQPUACcbdqanhjc%2BCHnac3l7NWK9QqHS6sJy%2FXwNqBp9hbIGNLBGrZyunxt7WPN5vHDr%2BcXqdauFxCkOrz27KwZ84DXXGm3tTjbG%2Bj7VjEwoB3s1duEgijrU%2B0%2Fo8C3EKSDhfYF5gtdTVoutBqS02Zlt0O7McHhA67IOurVzs%2Br2r%2Fswafu6DhE0syD3Q6RiYhQ196CR2AmhSDxKriQ8k7JBW8lynIP9EzkPXVE1jKzovVKYn3ZzlAqbobIJS7w8Enw%2Bq7nG%2F9Cl4PWDl1TQT%2Bh3ffwC6Bx%2Ff4tY%2BVo%2BsYe8FfeNas66oT%2FHqOOKgz%2FzI7E9CHqAhsr0ln3LlxdOjwC%2Fbdumds531XpV63p8yANHpc%2BNUiSZ6t6TuyBJNh3Pa4L0KVKndbec%2F25ywj0HzQJekAd%2FEzVUbIYZrBrkhOu92nJmItaC5fk0WomHB9X3Sgv6uLbTMI9d2FD9aPLiEANRJoJtrZeUn9gBOPoWOJMuSrIUXrjoVcoA0ar1NHR9bj829JhyEgh6EiW2aOd4FBCBXHuMfxhesLUxWNCE8pCQOtwzcispSCY9W65BQA52U0KQSpsIl47%2BYS5am2RqDCF6e6%2BBjqkAQR5T3VkKqiS%2BnaaQz%2B1beMbmXJscIzi9PuQsqXe10UgFjpbUF9WNHbGDh%2F2zaCi9HBV6RYyL4jv8lAqsMzidDEH8phdNmFT18iR6kXXhVN0mORe9EZzpwsvdCVnkVWqjgmt5arfIlL2i6lY4CIGH8fpHCRlP%2BHcq9iYbyUFPenBuLA%2BuMtvBS02ydDuu7jvwdAye2ajOu1sBeB8b3%2BPywm2QuW4&X-Amz-Signature=3f7f12a62fb7ce16e6196aaf6f30c1f04454963e2b734354e1b80d3cc27c679d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
