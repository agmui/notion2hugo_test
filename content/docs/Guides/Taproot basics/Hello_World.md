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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUXG6GG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFb80dXPWe%2FntesYFLzGmosMxCMNdKChyqqJPPcU93wzAiAWbotVotjG0ZiWVSpYJXu0xk1iYJ3NCMe8qCN4S9A%2FkSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMhtBT1lOSEz5lfjV%2BKtwDiDjIhHDDriUBhfcquYaZIwQOlo7QTBXLXEK7y9MgI2K6WtZt%2BLp%2B61utC0Rh%2FKUxu2lsVCzgc9UwlYsDghhSiQLCLeUsMhsZ8h0uDikODtqHlILkJuUVEv8wpv1NIvwTlBHKW6Qxa0yf6SPYLZukQZv35H4z%2F8J%2BFmhLgkRrbNlBqGD5popczhE2aQLdJtchkczIJR8i9WKcNh7hSjTHLt4YSNkSRikfDLeCcy%2BDnzadIY8fT%2FZIWsRmCFw3AVAmZ7Dzn73uyKDbxAYRf%2Bf4m6ybtXceiLQtVt5N%2B9RPeZj0Am6ApKJi%2BY5ifS9bbu%2F%2Bp%2BhS8YgWbIpalhSVvjYP3ygQKdt9ycm1FP6gqR3p3i1%2FLTMdQFkTazf0Yt4MIgM50AmxTObOf9RSzde0UQ4LkF9j9wKwzu8ZmB0ees8gKhE3D5D%2BDZUEIW7ejXD0kIW8G%2BvS6WYERmwDLyZjz4mjhnJm6XgNXHMAvzOBOaIj4ZyLlhBm1OjHRXwwVQeZXbmS8F5ZFHrFbRi%2BnqL61QIv%2F1xGapCQP8Z6Js2EgmQZJrqs3Xyxe2crbjooh0tunk0j2%2BB3Ez7HExyRfBCqZU7ti4dhqdPdTbLvda0IvLpqhZId07gPSKCRKeZdrxkwi7S%2FvQY6pgGhmCmFrL6TBNg6wRyFdH3KDr61UlP5dtoyEK1jmPeAqsJYwNuiuAHDPnko7KIEPvOcfhSeThAHlFv600Q%2B%2Fpq8WEAnC3Qk9XomoifIquPyXcepmrqYtlZrfmok95TJeGX7jIV%2FSzz%2FhsmcY7XAS6lWx0VGetfgdTnS53KLYH%2BFY5T53gGRI9nuOHs7kxlOMCkxyusAcgiqOo%2BVkwbR%2FzrWoR1jZjJs&X-Amz-Signature=d6404cf1be965d06a5e4ba7be1da2d494fab8404f27cecd12279852424ab4e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUXG6GG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFb80dXPWe%2FntesYFLzGmosMxCMNdKChyqqJPPcU93wzAiAWbotVotjG0ZiWVSpYJXu0xk1iYJ3NCMe8qCN4S9A%2FkSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMhtBT1lOSEz5lfjV%2BKtwDiDjIhHDDriUBhfcquYaZIwQOlo7QTBXLXEK7y9MgI2K6WtZt%2BLp%2B61utC0Rh%2FKUxu2lsVCzgc9UwlYsDghhSiQLCLeUsMhsZ8h0uDikODtqHlILkJuUVEv8wpv1NIvwTlBHKW6Qxa0yf6SPYLZukQZv35H4z%2F8J%2BFmhLgkRrbNlBqGD5popczhE2aQLdJtchkczIJR8i9WKcNh7hSjTHLt4YSNkSRikfDLeCcy%2BDnzadIY8fT%2FZIWsRmCFw3AVAmZ7Dzn73uyKDbxAYRf%2Bf4m6ybtXceiLQtVt5N%2B9RPeZj0Am6ApKJi%2BY5ifS9bbu%2F%2Bp%2BhS8YgWbIpalhSVvjYP3ygQKdt9ycm1FP6gqR3p3i1%2FLTMdQFkTazf0Yt4MIgM50AmxTObOf9RSzde0UQ4LkF9j9wKwzu8ZmB0ees8gKhE3D5D%2BDZUEIW7ejXD0kIW8G%2BvS6WYERmwDLyZjz4mjhnJm6XgNXHMAvzOBOaIj4ZyLlhBm1OjHRXwwVQeZXbmS8F5ZFHrFbRi%2BnqL61QIv%2F1xGapCQP8Z6Js2EgmQZJrqs3Xyxe2crbjooh0tunk0j2%2BB3Ez7HExyRfBCqZU7ti4dhqdPdTbLvda0IvLpqhZId07gPSKCRKeZdrxkwi7S%2FvQY6pgGhmCmFrL6TBNg6wRyFdH3KDr61UlP5dtoyEK1jmPeAqsJYwNuiuAHDPnko7KIEPvOcfhSeThAHlFv600Q%2B%2Fpq8WEAnC3Qk9XomoifIquPyXcepmrqYtlZrfmok95TJeGX7jIV%2FSzz%2FhsmcY7XAS6lWx0VGetfgdTnS53KLYH%2BFY5T53gGRI9nuOHs7kxlOMCkxyusAcgiqOo%2BVkwbR%2FzrWoR1jZjJs&X-Amz-Signature=bf9e3d64b4e6e2212026330d46b980ae0d651f7f199ae0a9e43db84831f17462&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
