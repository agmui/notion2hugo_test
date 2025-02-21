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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOM7LK62%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfbWJ0nC5QNzvEzKeo3vXLkjBYfvF6Vk%2BqUb%2Bq9MPtzQIhAPy3P%2Bgz%2Fn11H78Axql%2BBQ0V3oYyYrOPJvrWMj8It8NeKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgWxz9BeKtnQCACU8q3AP7OA7l920vY08z7kgVVU91wWzSgSu0qripm4HHxKYbhZ2zF7PLECtUTfZScYmDC5j3rmYIHN9JldK4jUcemmlYeywN%2Bd9GIFf31wmnspmJxmyT5vQ2146nORDQb%2BV92sfrBMZ5aRWSE%2BJUAoVKBDYAyUnlRnY3mrR6%2BCT818zpyNTXuAONoK7uaq1mVQFyZ4xhlMMHM6Xik5BBOb0unzrU6mSCx%2Bk%2BgE3NmnH8HmnoM23dg3AfUQVHngrajqxsTdqPNRDNRTzb6BrMsUui%2F7iDkgTKYPVPuJZVEYW00WWUDW4K9UguOtAnbyhc2JcRhq4uN0RNF7TwH8upjyp3pl%2FDOFpj6N0ODLRy5BLbywUnyTRWV1i5K82g111ZDKKJ0cI4Fm9eCLh9hrjHFDYk1q0x9liwAlq40U%2FZOTsZqgO3O94m3sdUkR3kB2eCBK6fB2FSEXVCfOp%2B3ygbtufgMJ7%2F%2B63ZPKeXCmN%2FF2UcunrVrGJpBAC%2FHeMYLTdAb2NwllhDBIxDuM1XgThzfuiBI4U1n1rHHaKlwWxWMU2xBgN75kgS%2F8siiwDJBvXmWBELk2ksHmHRTwtqxtO7nGpaZfmgDSzVdbGE4nkgSr8%2FmXsFDWzQewBrsBbCynnvzTC34%2BK9BjqkAQgfCzaF4jKQNazj0I939YbeMCr2GpJm%2BCdfvkVG6z08jS%2FeUpIiZTlOUlRU8MDrVvTRlXM9hEZwUay0nIpU2X5l6Buns48nadKPdgJAU3pbN8s0Ll9Tw%2BvufRofQkupwEKJDgOuGIaDZ5RJSnG8H2Ph6aoCRkj5qdsiYrtG%2F0oW8EzQGTwR0YwortUYG%2F2L9HY2Ckm9tMCB27QFhNPtLICgTOlw&X-Amz-Signature=40ea4d03e7289c2227ddfb85774956801fcbb61cf64034333e2acad03eb0afb5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOM7LK62%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfbWJ0nC5QNzvEzKeo3vXLkjBYfvF6Vk%2BqUb%2Bq9MPtzQIhAPy3P%2Bgz%2Fn11H78Axql%2BBQ0V3oYyYrOPJvrWMj8It8NeKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgWxz9BeKtnQCACU8q3AP7OA7l920vY08z7kgVVU91wWzSgSu0qripm4HHxKYbhZ2zF7PLECtUTfZScYmDC5j3rmYIHN9JldK4jUcemmlYeywN%2Bd9GIFf31wmnspmJxmyT5vQ2146nORDQb%2BV92sfrBMZ5aRWSE%2BJUAoVKBDYAyUnlRnY3mrR6%2BCT818zpyNTXuAONoK7uaq1mVQFyZ4xhlMMHM6Xik5BBOb0unzrU6mSCx%2Bk%2BgE3NmnH8HmnoM23dg3AfUQVHngrajqxsTdqPNRDNRTzb6BrMsUui%2F7iDkgTKYPVPuJZVEYW00WWUDW4K9UguOtAnbyhc2JcRhq4uN0RNF7TwH8upjyp3pl%2FDOFpj6N0ODLRy5BLbywUnyTRWV1i5K82g111ZDKKJ0cI4Fm9eCLh9hrjHFDYk1q0x9liwAlq40U%2FZOTsZqgO3O94m3sdUkR3kB2eCBK6fB2FSEXVCfOp%2B3ygbtufgMJ7%2F%2B63ZPKeXCmN%2FF2UcunrVrGJpBAC%2FHeMYLTdAb2NwllhDBIxDuM1XgThzfuiBI4U1n1rHHaKlwWxWMU2xBgN75kgS%2F8siiwDJBvXmWBELk2ksHmHRTwtqxtO7nGpaZfmgDSzVdbGE4nkgSr8%2FmXsFDWzQewBrsBbCynnvzTC34%2BK9BjqkAQgfCzaF4jKQNazj0I939YbeMCr2GpJm%2BCdfvkVG6z08jS%2FeUpIiZTlOUlRU8MDrVvTRlXM9hEZwUay0nIpU2X5l6Buns48nadKPdgJAU3pbN8s0Ll9Tw%2BvufRofQkupwEKJDgOuGIaDZ5RJSnG8H2Ph6aoCRkj5qdsiYrtG%2F0oW8EzQGTwR0YwortUYG%2F2L9HY2Ckm9tMCB27QFhNPtLICgTOlw&X-Amz-Signature=bab668de69b2b1d8abc3aafeff1b518eadc764cbeb59ce08d2c27f624a952efb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
