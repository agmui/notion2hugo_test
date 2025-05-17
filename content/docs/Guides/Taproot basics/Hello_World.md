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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5QGI7P%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbZjYey%2BEjbB7sCMbDDeqPUBi%2BbcWLwHtRATTZEa75swIgKo3199gF3KpuzUfd25iZCLS4znqkJLZcHdorHH6RqU8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIEqjNn2b8HCiBgXQSrcAz6Dc0bMj48rVS%2Bj4xT6a3TuiL4XFQMaKSkTc1fy5KU%2BoilK%2Bw6qRHlFprolPNLssJmT0YGUgHJBmAA%2F%2FIVG6dfDPkopQanWchzk7jKwoWimAobc7gLmDk9CGY8wsTJOS10ZpDxQHNDPkVz9TAo%2FYKDwtEooq9SfpaCBpM1FJrAXxLWbj0%2FB1EvxRBGJHx0i%2Bon45hr%2Fk2sGmhRQ6XajIO9mObZG121rwyVFhAsizB1Gtx7h30kG%2BdRca2HZt9BPJ3Z%2Fmt2dinw7v%2BoRS%2B5PV%2BK4YPRTxq92XgYmE4UWoZSvw1pQ65FPLLrdOd5bj%2Byk3i98AXKvGnNsSxXwoudTYvRqeojsG2q75cw8UfTOeuR2VXHVG0GeEGrjI0yvyLKSzkoJuyTYLf1dQCv%2Fv2nr9%2BuBZYA6ncUS2oYGtFs1pJkWfpjPHFa1j6kO2q6Pc49kSq7aKA0XttQypGWHL7AzZoqcLJOOoMf5p9R%2Fz4IzahyV6keuvpMvSViJDzo%2Fu9d0lpw6F%2FRF0XapKG8SywTdc2XbZj5MQbnuWMz20%2Fg7UGgHpAC6Lxv6YR0GRJaw3jsSsxJOv7x%2FIkfwk%2FV9lf7%2B%2BHFBnEc1QK010lh0HL67VHjNZwh8mu7tLQFZjcWcML7cn8EGOqUBP435Uwx%2BO1QT8mtY%2Fvsl9Sqs%2F9T3C9LCK7NsmmhatvzeMTAgCn6g9utYOcDCTDM0Av7tbONRxK3C6ehGqxJD6bTFPJh%2Bk0LLtTYgLQeLJMTE%2BDPWr%2FLdhMD7JtxWhEsjFuYBsDJVpJlz2wro7aeY%2BqbjxXZAqo39Mhfa3H7SqFDiFkmlMWlTZ8o%2B18lMwJQz8zxVpygqvUUq7neq2%2F8sO9pNiTTh&X-Amz-Signature=29575072a951fb8d864c1fab67f029eb80a4afe64eaf56d915c373a925023018&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5QGI7P%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbZjYey%2BEjbB7sCMbDDeqPUBi%2BbcWLwHtRATTZEa75swIgKo3199gF3KpuzUfd25iZCLS4znqkJLZcHdorHH6RqU8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIEqjNn2b8HCiBgXQSrcAz6Dc0bMj48rVS%2Bj4xT6a3TuiL4XFQMaKSkTc1fy5KU%2BoilK%2Bw6qRHlFprolPNLssJmT0YGUgHJBmAA%2F%2FIVG6dfDPkopQanWchzk7jKwoWimAobc7gLmDk9CGY8wsTJOS10ZpDxQHNDPkVz9TAo%2FYKDwtEooq9SfpaCBpM1FJrAXxLWbj0%2FB1EvxRBGJHx0i%2Bon45hr%2Fk2sGmhRQ6XajIO9mObZG121rwyVFhAsizB1Gtx7h30kG%2BdRca2HZt9BPJ3Z%2Fmt2dinw7v%2BoRS%2B5PV%2BK4YPRTxq92XgYmE4UWoZSvw1pQ65FPLLrdOd5bj%2Byk3i98AXKvGnNsSxXwoudTYvRqeojsG2q75cw8UfTOeuR2VXHVG0GeEGrjI0yvyLKSzkoJuyTYLf1dQCv%2Fv2nr9%2BuBZYA6ncUS2oYGtFs1pJkWfpjPHFa1j6kO2q6Pc49kSq7aKA0XttQypGWHL7AzZoqcLJOOoMf5p9R%2Fz4IzahyV6keuvpMvSViJDzo%2Fu9d0lpw6F%2FRF0XapKG8SywTdc2XbZj5MQbnuWMz20%2Fg7UGgHpAC6Lxv6YR0GRJaw3jsSsxJOv7x%2FIkfwk%2FV9lf7%2B%2BHFBnEc1QK010lh0HL67VHjNZwh8mu7tLQFZjcWcML7cn8EGOqUBP435Uwx%2BO1QT8mtY%2Fvsl9Sqs%2F9T3C9LCK7NsmmhatvzeMTAgCn6g9utYOcDCTDM0Av7tbONRxK3C6ehGqxJD6bTFPJh%2Bk0LLtTYgLQeLJMTE%2BDPWr%2FLdhMD7JtxWhEsjFuYBsDJVpJlz2wro7aeY%2BqbjxXZAqo39Mhfa3H7SqFDiFkmlMWlTZ8o%2B18lMwJQz8zxVpygqvUUq7neq2%2F8sO9pNiTTh&X-Amz-Signature=a89f5c589ee39a8b94c5fdd5e337a02220c5e67cea1f8a3a9141949b9ffa8237&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
