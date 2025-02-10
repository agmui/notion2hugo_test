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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LITKJG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQPfh23rhhQ258job8sOEd%2BCGx763hrDyUK5qCvarAigIhAKpufxovzgawlXSSXxlwWBJeE1bZId2J8lKJ1Kppiy%2FcKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6u9L9jRwbWa4yOXsq3APtF9PEz47wCi8TLkJvHCYxec2%2FewCtm7w5KRCUNO6wFlTTB4C2AqCRgwakjAlv48A5vf4f%2BUoHLXoC%2FYkwg4rZH0SROpUBplkUAJ7CRJP0DJ66%2BAVl%2BYo8I9Zdu%2FabUwseTOQs%2Bh0Fpgx2R%2ByP3YX1L5nszbLEOhEYktd%2FUNKT0394Xs%2BmieYRsbLH25Dw24bvqeTjyE21dVo%2FTizMdBxNJA1nFMyQayu7Njiy4BjzAx59yghqi%2BKcQ7NaVydBC55LGL09lK78%2Bofiq%2B0hQpE6JfP%2FfX%2FqorN1WYUNN4SI9wBzpR0LeKbkuVRe2vdFfbOmGXDAggQD7%2Fx5OSSgxGcAKOFJ8w0IVPHl0AlFjsX1kkyCNML8SEPViZwrDdjTjwyxOt2SfmPh3uA5ZqYj6yaQ16%2BHKV0jrst5GAhYM3BHbhGczJgZZp7y9RODTQ6IWgrxQcqoncih2q6Kvja9NEt3OYrKshdpbZUfzb%2B2tZxLcQnHkqwkwdPQIX68u2pZmUidyHMgqxNk9qs%2BVVPVECALowr5SsGNrAYDZOm7zbBLAlO4oREWco1fg5tZ%2B5crZwZxnibVchUkPyUX09fJOw1focmnNKn7CujlkMtXi0Qr2Mz7A52N3IyUa7P%2B5zCmnKW9BjqkAZluTTOVyUg5K91Q%2B8JAOkT3IlMPyABSl8b0Ysjp52dRZ75hrrAXo8qeMS9c5kWfTPtQQoahIGS9LP9Ht8C8xtJcAnHB4iMtu528TXj1Tb80K7BwOaPlsqOdLbatyeuMbdqhTBkBvpGXVhZ77SgitH8fpbpd7zx92nVuS57SeHsbpzB6PD%2FiXQ3Qol1Jnwi7QccuD%2BZ0tOIPNpGrY%2FIKNYjsdXNO&X-Amz-Signature=c9cee96408455052cf4f39243e9fffd59079a580005b60f42cad2d519b13dd90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LITKJG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQPfh23rhhQ258job8sOEd%2BCGx763hrDyUK5qCvarAigIhAKpufxovzgawlXSSXxlwWBJeE1bZId2J8lKJ1Kppiy%2FcKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6u9L9jRwbWa4yOXsq3APtF9PEz47wCi8TLkJvHCYxec2%2FewCtm7w5KRCUNO6wFlTTB4C2AqCRgwakjAlv48A5vf4f%2BUoHLXoC%2FYkwg4rZH0SROpUBplkUAJ7CRJP0DJ66%2BAVl%2BYo8I9Zdu%2FabUwseTOQs%2Bh0Fpgx2R%2ByP3YX1L5nszbLEOhEYktd%2FUNKT0394Xs%2BmieYRsbLH25Dw24bvqeTjyE21dVo%2FTizMdBxNJA1nFMyQayu7Njiy4BjzAx59yghqi%2BKcQ7NaVydBC55LGL09lK78%2Bofiq%2B0hQpE6JfP%2FfX%2FqorN1WYUNN4SI9wBzpR0LeKbkuVRe2vdFfbOmGXDAggQD7%2Fx5OSSgxGcAKOFJ8w0IVPHl0AlFjsX1kkyCNML8SEPViZwrDdjTjwyxOt2SfmPh3uA5ZqYj6yaQ16%2BHKV0jrst5GAhYM3BHbhGczJgZZp7y9RODTQ6IWgrxQcqoncih2q6Kvja9NEt3OYrKshdpbZUfzb%2B2tZxLcQnHkqwkwdPQIX68u2pZmUidyHMgqxNk9qs%2BVVPVECALowr5SsGNrAYDZOm7zbBLAlO4oREWco1fg5tZ%2B5crZwZxnibVchUkPyUX09fJOw1focmnNKn7CujlkMtXi0Qr2Mz7A52N3IyUa7P%2B5zCmnKW9BjqkAZluTTOVyUg5K91Q%2B8JAOkT3IlMPyABSl8b0Ysjp52dRZ75hrrAXo8qeMS9c5kWfTPtQQoahIGS9LP9Ht8C8xtJcAnHB4iMtu528TXj1Tb80K7BwOaPlsqOdLbatyeuMbdqhTBkBvpGXVhZ77SgitH8fpbpd7zx92nVuS57SeHsbpzB6PD%2FiXQ3Qol1Jnwi7QccuD%2BZ0tOIPNpGrY%2FIKNYjsdXNO&X-Amz-Signature=353feffa4a37cfc8240a647ec045c1a9ef4b90c12d3e33975d339050756512bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
