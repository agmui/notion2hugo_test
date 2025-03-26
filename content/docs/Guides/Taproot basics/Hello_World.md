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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KVKHW6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rsO7JykaKY8le8QK2XbPJ00Ws5bojCtdoVgv7VaYDAIhAL9u9lvLyjdUwLycwCZ9cWKUgoIqjpRFXYD%2BfWqK5%2BO%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgzPfwATTqbS%2BOYk834q3AOk1Dd%2BtjLWXDWCCMQjHcP6NQ2mgYX8axpR43Gi5bEPm2xPJnGbP3nSMiLxYEf8uEyJE%2Fabs6RRZTXo%2B%2FroGYIq8FcMK1KRRU5HJd4V8LF89KNDWuDMDx4E4IAMJBc%2BJ%2Bz0fuEj3yL81u6EtddTE38iQZtSie7biXlP4%2F4pM8maAsui335cIMnA6Y957l7JIiAweydkfdXf0clepU4kKOTQhrl4fLO%2FUKK6uYrEpgR96snHkT1bv1t%2Ban0BLA98SKK9IuZ4RLwJD8AiaK5l5FQ%2FFRSL5vG9ImzY20tMtkUbYnYGg%2FakDO5kBIxqhTR6ihng1blSCsziA8VCuDG2KOOol1XxyaL%2BqcGBTBBLEEfAQsfz5iEim84D6Alu8gndqws44G9upqvTJall5WvKJes1hdizKV9EYvT1hBxK%2FvNRBnvy15rJ5UzRAAxVkKuJz7rRLRWI6WZeL0k%2Bk5AjvSbTw8SgLIVqT%2Btk4kIbiBTxZ0vQJIpGnKPwOsB0kUeN0lbAorSrq0xfFH%2BlzWkLGgpj3p1KFTsVFMy162FQaY9uPcOvTZ3PY0Ao93lTJK8vvT0XtmB%2FCFRdYETbrhzajAVXummEee1m35i4ORDxucYo015e%2FQc%2FRFkfVYLg5TC3rY6%2FBjqkAfn%2F0oZokK8ulUsvOP8%2FA9Kf9QvBhlDk1TtHClMVFRFGQtExyLaVr2wC9lDQppHPoetyFFJ8029aFzivCpk78rFyTRN1OeBiLYXUmyaA4lzkIivOQuHjH6yx4gC2o%2BO%2FVOPN3ezP%2FgrPk8KhdATSk43mhHOABXukicUf0vW7O%2Bc2WFpXY%2FLujajY3B1nlIW%2F1avZfQFxpsvCuf%2F1dRAi3RfZtLFc&X-Amz-Signature=15f4bfacdf975ac6d8f942f62a255c4047ed3925391bcc4845b7ffadf881b189&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KVKHW6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rsO7JykaKY8le8QK2XbPJ00Ws5bojCtdoVgv7VaYDAIhAL9u9lvLyjdUwLycwCZ9cWKUgoIqjpRFXYD%2BfWqK5%2BO%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgzPfwATTqbS%2BOYk834q3AOk1Dd%2BtjLWXDWCCMQjHcP6NQ2mgYX8axpR43Gi5bEPm2xPJnGbP3nSMiLxYEf8uEyJE%2Fabs6RRZTXo%2B%2FroGYIq8FcMK1KRRU5HJd4V8LF89KNDWuDMDx4E4IAMJBc%2BJ%2Bz0fuEj3yL81u6EtddTE38iQZtSie7biXlP4%2F4pM8maAsui335cIMnA6Y957l7JIiAweydkfdXf0clepU4kKOTQhrl4fLO%2FUKK6uYrEpgR96snHkT1bv1t%2Ban0BLA98SKK9IuZ4RLwJD8AiaK5l5FQ%2FFRSL5vG9ImzY20tMtkUbYnYGg%2FakDO5kBIxqhTR6ihng1blSCsziA8VCuDG2KOOol1XxyaL%2BqcGBTBBLEEfAQsfz5iEim84D6Alu8gndqws44G9upqvTJall5WvKJes1hdizKV9EYvT1hBxK%2FvNRBnvy15rJ5UzRAAxVkKuJz7rRLRWI6WZeL0k%2Bk5AjvSbTw8SgLIVqT%2Btk4kIbiBTxZ0vQJIpGnKPwOsB0kUeN0lbAorSrq0xfFH%2BlzWkLGgpj3p1KFTsVFMy162FQaY9uPcOvTZ3PY0Ao93lTJK8vvT0XtmB%2FCFRdYETbrhzajAVXummEee1m35i4ORDxucYo015e%2FQc%2FRFkfVYLg5TC3rY6%2FBjqkAfn%2F0oZokK8ulUsvOP8%2FA9Kf9QvBhlDk1TtHClMVFRFGQtExyLaVr2wC9lDQppHPoetyFFJ8029aFzivCpk78rFyTRN1OeBiLYXUmyaA4lzkIivOQuHjH6yx4gC2o%2BO%2FVOPN3ezP%2FgrPk8KhdATSk43mhHOABXukicUf0vW7O%2Bc2WFpXY%2FLujajY3B1nlIW%2F1avZfQFxpsvCuf%2F1dRAi3RfZtLFc&X-Amz-Signature=ca0530a541c5cddfc6fd9a506f35681b946cbbe45919b6dc3a9ddce6504cdc27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
