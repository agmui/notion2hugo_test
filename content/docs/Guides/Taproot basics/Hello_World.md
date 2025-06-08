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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745XHR5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAwjPoSnnR4%2BPTWWhhW1bhs7K%2F7rrK4y8uH3j%2B4pzwxQIhAPc%2BNUXwIHWZWAYPHqZpDOVa5DLLO2xDZ0nmD%2FyVxFHjKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTv7C%2F%2BKECIHjc3sEq3AOCl%2FRAwhZgP2rg8Wxzz4IkNBpLloQhb9rXzsK8piFcnUmmgfzcqX4iwl6Q1sqqEmvB4ITtyZPtZyeyZZW1ApUSwVXo2747RrjzmTd0lmLRFFn%2FywvuSfFrnaqgs%2FmWisGXWdibidvRTrZS38phsaWoo%2FzJyy1Mj1vfncJ2rtgT0DcT8q%2FEsKbWLilL58V4pp7BP86L9sBGuW5pdaiH3x0mQOKQKsvesJTS8Pcr%2BCTuZHhpJxdMEVI5IbZyeXpegdqXZkrEjP2myzkprAjq2AWYXu5gCbf6WxZEdaxvNYsjMHsw0ad6YyyU1VxGmZrDaPUzNuWYoQhbMOf3MRNqiiy%2FNmcsuGB0BcCjvz9umzrnTZL%2Bxepl7WAIewPwByn3FY5L7E%2FL7aSWJ9ndCyd3DFtH%2BZq5SCIqq7pN1FrJS%2F%2BzGJSbNp0sTMjcB%2BYGqY6bkLUrSJsQGRP4rJW8t4YQMGherCQ2nMSzIx4pK7iFii1KIYCQo0E1csQp2QyRwt9CBdkIQRvJoTXEK6sKGJdawS7uaeJIAVylmmGSeG7kfByuaevxjOGS5CcHreea9E1AnisUXXQgczpmoQEgFF4NVvP7xssenX9j7%2BwwVKi3Is76Q5LdUFhw6XnsHbmAkDCqs5bCBjqkAUhaRqz9Vn%2BNeaZ9zZdKLx3WmswjP4bOH%2Bcv2%2FuYXodSSgOnwhLPE4hLAsUHX2ac%2FZwfdVvFd0v1CX%2Ffg%2BZhXc1I03%2ByWGt3cDmDHFz%2Bd1lwl8zeV%2FIG9b%2FpGE2wL%2BettmgIqp7QIClHCvg7rFh5tDtuFK8mT%2B6ocC2sq0EOd2t%2BkLa7R9FUQWXxpGKvFLsb5B%2FkWvOVgnsScQHBE0PAvul3raI9&X-Amz-Signature=acd79215935b5afbaad01095be6b2ef914b4dfe0d514d9830d7c68d8fe53ab0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745XHR5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAwjPoSnnR4%2BPTWWhhW1bhs7K%2F7rrK4y8uH3j%2B4pzwxQIhAPc%2BNUXwIHWZWAYPHqZpDOVa5DLLO2xDZ0nmD%2FyVxFHjKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTv7C%2F%2BKECIHjc3sEq3AOCl%2FRAwhZgP2rg8Wxzz4IkNBpLloQhb9rXzsK8piFcnUmmgfzcqX4iwl6Q1sqqEmvB4ITtyZPtZyeyZZW1ApUSwVXo2747RrjzmTd0lmLRFFn%2FywvuSfFrnaqgs%2FmWisGXWdibidvRTrZS38phsaWoo%2FzJyy1Mj1vfncJ2rtgT0DcT8q%2FEsKbWLilL58V4pp7BP86L9sBGuW5pdaiH3x0mQOKQKsvesJTS8Pcr%2BCTuZHhpJxdMEVI5IbZyeXpegdqXZkrEjP2myzkprAjq2AWYXu5gCbf6WxZEdaxvNYsjMHsw0ad6YyyU1VxGmZrDaPUzNuWYoQhbMOf3MRNqiiy%2FNmcsuGB0BcCjvz9umzrnTZL%2Bxepl7WAIewPwByn3FY5L7E%2FL7aSWJ9ndCyd3DFtH%2BZq5SCIqq7pN1FrJS%2F%2BzGJSbNp0sTMjcB%2BYGqY6bkLUrSJsQGRP4rJW8t4YQMGherCQ2nMSzIx4pK7iFii1KIYCQo0E1csQp2QyRwt9CBdkIQRvJoTXEK6sKGJdawS7uaeJIAVylmmGSeG7kfByuaevxjOGS5CcHreea9E1AnisUXXQgczpmoQEgFF4NVvP7xssenX9j7%2BwwVKi3Is76Q5LdUFhw6XnsHbmAkDCqs5bCBjqkAUhaRqz9Vn%2BNeaZ9zZdKLx3WmswjP4bOH%2Bcv2%2FuYXodSSgOnwhLPE4hLAsUHX2ac%2FZwfdVvFd0v1CX%2Ffg%2BZhXc1I03%2ByWGt3cDmDHFz%2Bd1lwl8zeV%2FIG9b%2FpGE2wL%2BettmgIqp7QIClHCvg7rFh5tDtuFK8mT%2B6ocC2sq0EOd2t%2BkLa7R9FUQWXxpGKvFLsb5B%2FkWvOVgnsScQHBE0PAvul3raI9&X-Amz-Signature=c3e6d1f47013b8d3551da383eabdba6b4028b88ef792f116c9655c287bd92a22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
