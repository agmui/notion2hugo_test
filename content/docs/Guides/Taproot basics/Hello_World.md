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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDIU3KL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ73dfLUBUHMw1yQnKokK%2BJNmcnZS9poERNyOPjyvJgIhANv7cw1liBxHg1TDUJ9zy6%2BbPFJb%2BKWYWH61sILpFpk%2FKv8DCGoQABoMNjM3NDIzMTgzODA1IgzrlnqWWFm7XQv0D8sq3APA8chHp7QqHF6l2wqZIauXeEKTHgS2nNC%2Fuwc6gyKy9E4AMVR%2F0qKq9hbcDASQksy%2BSiM6MXwsyQlmQRzY28jymyq%2FD1ukVbbgpVZAtyVQ07Jge4NFjDaMIZYMvPHwXCaegc0tZPiE7xow9jnNC0bjWWnH0lWMcuQZzWmnMLuqX7vj%2Bo2NJLWMGbIrzmCIeX3VXjr6YCAojZ2KFucQfWYQuyj8MpfVvbd9vgEHFXcJbo3xDN6GEGUPBOHD2XtfKN2j5hIztsaSCQVi04JHwDDJUDfRfEd9%2BDBRAeuooZSPVgt85wIFWhOjGtdztA8IyX3TTzXY1yvHKCf0Glr%2B42k%2FtSVGKR2ROWROSa3NLnFYiJ7saBUkjbfias%2BXEv64djhdxTn1hOp0YThT%2FZFfU4YGIWU9PZTgJ0axEOey6Ghdu47rqKkQa5JRlzQ9pa0qgWloy7jNBHosqNJJjlDYUd34DRmvG52jOJapenhyX3VBRerir71nRbj%2BbWhb%2BVcMhx93rs6tKHpskyfD04ZJ0ogpKlwgrkrqtjrr4ZxT%2FIfzGA2FEf7fJcEjPYHufcESAxdi3i37dZYaAesrT8QJxkgJfmEmW1s4wWqRH3xJIaPKCT0VfS%2BujBzxU4zeZzDrorvABjqkAf%2Ba4BNd1MHnmF29r8ED3XrP%2B1OJv642K%2Fwp1zHraEhs49GaASxZCSWfr21WGPYAqfPh079c%2FAaEDlVKRK6BjWdgej1NgdTncItuTb99Bzk6CRuybrxxNDyZmqAwVdu3j0okSCtd%2FopxgDJHE57WVLxjvUqh73temX%2B4m%2FhAStbB0ZXf59gnDk1aqNm8RcjJAabAY44JtyhSKebHrlBKLEyS12Gf&X-Amz-Signature=602b3c7eb569e50ece45b8218c6662b6e0053e0e96ef22fade756ce96b34afed&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDIU3KL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ73dfLUBUHMw1yQnKokK%2BJNmcnZS9poERNyOPjyvJgIhANv7cw1liBxHg1TDUJ9zy6%2BbPFJb%2BKWYWH61sILpFpk%2FKv8DCGoQABoMNjM3NDIzMTgzODA1IgzrlnqWWFm7XQv0D8sq3APA8chHp7QqHF6l2wqZIauXeEKTHgS2nNC%2Fuwc6gyKy9E4AMVR%2F0qKq9hbcDASQksy%2BSiM6MXwsyQlmQRzY28jymyq%2FD1ukVbbgpVZAtyVQ07Jge4NFjDaMIZYMvPHwXCaegc0tZPiE7xow9jnNC0bjWWnH0lWMcuQZzWmnMLuqX7vj%2Bo2NJLWMGbIrzmCIeX3VXjr6YCAojZ2KFucQfWYQuyj8MpfVvbd9vgEHFXcJbo3xDN6GEGUPBOHD2XtfKN2j5hIztsaSCQVi04JHwDDJUDfRfEd9%2BDBRAeuooZSPVgt85wIFWhOjGtdztA8IyX3TTzXY1yvHKCf0Glr%2B42k%2FtSVGKR2ROWROSa3NLnFYiJ7saBUkjbfias%2BXEv64djhdxTn1hOp0YThT%2FZFfU4YGIWU9PZTgJ0axEOey6Ghdu47rqKkQa5JRlzQ9pa0qgWloy7jNBHosqNJJjlDYUd34DRmvG52jOJapenhyX3VBRerir71nRbj%2BbWhb%2BVcMhx93rs6tKHpskyfD04ZJ0ogpKlwgrkrqtjrr4ZxT%2FIfzGA2FEf7fJcEjPYHufcESAxdi3i37dZYaAesrT8QJxkgJfmEmW1s4wWqRH3xJIaPKCT0VfS%2BujBzxU4zeZzDrorvABjqkAf%2Ba4BNd1MHnmF29r8ED3XrP%2B1OJv642K%2Fwp1zHraEhs49GaASxZCSWfr21WGPYAqfPh079c%2FAaEDlVKRK6BjWdgej1NgdTncItuTb99Bzk6CRuybrxxNDyZmqAwVdu3j0okSCtd%2FopxgDJHE57WVLxjvUqh73temX%2B4m%2FhAStbB0ZXf59gnDk1aqNm8RcjJAabAY44JtyhSKebHrlBKLEyS12Gf&X-Amz-Signature=230fe719961cc99a5ac3acbdead1278e294af752e9aa35975bb197155ce8c096&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
