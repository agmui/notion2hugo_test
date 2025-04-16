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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHQOKUK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqAJMkSydRaB2IR4Oc9w4AexKCAmUxT3oK2JhHZcf9ugIhANINNYUPdgH6ZB7t3C2tLWNAqOB73Ww1YUDPRDUdeTPoKv8DCDwQABoMNjM3NDIzMTgzODA1Igzp6xE%2FJUQ4PzAclHUq3AM2W%2FkMlE4T1RKCS3T6NYICc15RfcMx%2Bqs%2F9JzXPaYTzpSy86b80DHaz2x3MN%2Bf1vXcC8GXvbhmLKgWJ0ki8raVSaKOiywtsGD5PMM6F3M4ZC9tCjCFTRWjUsBGZCvwwlZQA6yDdqd4hbZ2c2brURQYVTrGddlCVpnK%2FKFzIH8oTpnfRxZhbQCq9x3tUelelnraUQ4Pw000BtKc7Mv%2Fgxmv2a4KaladagNQsxyKrcQGb5%2F4fDkANw8Xo3OFym8WFB1uJvTsYU4K16AbZD2kCqXAStjkWpvTv6qvgyFZ7SmekyEcRrTHJP62xHxNkq0gqGcHS%2FINyTXPjMnQqghdWHfql%2BP5prhc21jOr8%2FmFc45%2FzGQUskksM615xKE7yVA0iGknk9kPr%2BxaCXNBceFY73adSyXftH8n4RXK9SES18D6qcCI3qHXzlsfvkxx5MtWKjR1hgQgStfpKmaug9GwDXvPHYeojHr1J%2FyDrg%2FYXwrtyNUmYEd5bTHoHk5WnN1vBeyl27H4h8gosAXl2JpoPB8BPDEp%2F1Yit9v7TkzyBZMgPFvWFTwIydI3t0IudIMbnD%2FQn9dtUuGGijf2wUKjtM0%2FeGEZNndTU3fiw7UCyDhQ02bCq8wHtJmwLDE1DDDvfy%2FBjqkAZ7ExSS51Nj0nuWferWvf83CcFBqjIJdMK3xDP4qiLdL8FVbHrsSRaBSxAj8%2Ffd43YyGoximNyf3fhNQkPSHDEnanNT%2BzAj3LG6XxLP5porkLaY%2BqPff%2BsBv2rAS3LQFXdx1ahhJta%2B%2BOvwbJxwkywQou1el%2FmxuRhsTX1in%2FxvDWu4Y6YjNTlHkvq8ox2NN1DjfW80DI%2FvSQL4LzzKUJn9Hzu49&X-Amz-Signature=504073e786e297d39e0b1dcbc47c2e9d844132d66d0d6995174fd88b0a9a5050&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHQOKUK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqAJMkSydRaB2IR4Oc9w4AexKCAmUxT3oK2JhHZcf9ugIhANINNYUPdgH6ZB7t3C2tLWNAqOB73Ww1YUDPRDUdeTPoKv8DCDwQABoMNjM3NDIzMTgzODA1Igzp6xE%2FJUQ4PzAclHUq3AM2W%2FkMlE4T1RKCS3T6NYICc15RfcMx%2Bqs%2F9JzXPaYTzpSy86b80DHaz2x3MN%2Bf1vXcC8GXvbhmLKgWJ0ki8raVSaKOiywtsGD5PMM6F3M4ZC9tCjCFTRWjUsBGZCvwwlZQA6yDdqd4hbZ2c2brURQYVTrGddlCVpnK%2FKFzIH8oTpnfRxZhbQCq9x3tUelelnraUQ4Pw000BtKc7Mv%2Fgxmv2a4KaladagNQsxyKrcQGb5%2F4fDkANw8Xo3OFym8WFB1uJvTsYU4K16AbZD2kCqXAStjkWpvTv6qvgyFZ7SmekyEcRrTHJP62xHxNkq0gqGcHS%2FINyTXPjMnQqghdWHfql%2BP5prhc21jOr8%2FmFc45%2FzGQUskksM615xKE7yVA0iGknk9kPr%2BxaCXNBceFY73adSyXftH8n4RXK9SES18D6qcCI3qHXzlsfvkxx5MtWKjR1hgQgStfpKmaug9GwDXvPHYeojHr1J%2FyDrg%2FYXwrtyNUmYEd5bTHoHk5WnN1vBeyl27H4h8gosAXl2JpoPB8BPDEp%2F1Yit9v7TkzyBZMgPFvWFTwIydI3t0IudIMbnD%2FQn9dtUuGGijf2wUKjtM0%2FeGEZNndTU3fiw7UCyDhQ02bCq8wHtJmwLDE1DDDvfy%2FBjqkAZ7ExSS51Nj0nuWferWvf83CcFBqjIJdMK3xDP4qiLdL8FVbHrsSRaBSxAj8%2Ffd43YyGoximNyf3fhNQkPSHDEnanNT%2BzAj3LG6XxLP5porkLaY%2BqPff%2BsBv2rAS3LQFXdx1ahhJta%2B%2BOvwbJxwkywQou1el%2FmxuRhsTX1in%2FxvDWu4Y6YjNTlHkvq8ox2NN1DjfW80DI%2FvSQL4LzzKUJn9Hzu49&X-Amz-Signature=e5b0280d30e4e5347a642cc6dfa728e86626c82e28233159d25f67f45ca0c48e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
