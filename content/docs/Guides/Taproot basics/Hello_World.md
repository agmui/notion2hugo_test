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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBUZ3XS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdpNSQ3%2FX4kf79PHHTsjRaCjFC%2BSzr0%2FUMRkkgEjM0vQIhAKz%2BbLPjAhbzsTFlLghSKbQGNtW1AdDN5N%2B2YdLw8LaOKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tGiNRjw4U%2BttU4gq3AMjRe3KaN5MNbItJE%2Fa45ltnq1X4PwYVX7uQDlAEGgs60bxq3FpmiACDJh4%2BJkXj93RsPoZ8VzD3plMlUHE4rQmOMz4qMn2eocylARRGeYU7eogQtEuyEA%2BEomBYbuCAnTjUrSTFiGYa815Cx2aw85rRyW0axU8bG0pi37ayIkfDdBDpmIbyryXFhapJexwz6TdLzQWu68vtxBH4hpz06BMmHw4bXzMifyON9yZ0EBewpHHFHpeM6PUn4mrR7B5zxq%2ByzY5jk2z53trjuPa1jcaB8gjZvFwr0i7eyt9n9zS8J%2BvxIStjtkbyndBtfndtHQDd4zS6u67YLFZ9E3TXPEH%2FFIqXQ5JHCfPFOwjCcRN1hIGfvKvZJkesWznUYooJ1joFdgImRE6NmP0lmtu3j8xoRT3DLsF8%2F4GK5S3lEKqqLwx7s3WYBD2fdC79mYJVPMOeJUekneUghsRUOpFR%2BW6wp8iha3Z0ILvaOgqCv9erUX1Eh7aRXlvjblPkRu2ge5oQf86HrvNpylpSvaexj3TpmAaD8k5UdV4eWKJPtjkW9JPT9%2FVvY%2BW1gNasr4VjYgNgDwehMG7KzjpiDTuv5C%2BiWkR6wGdsnba5IEzngl6vNPhBI8CjvL8AN0DTzCgyPbDBjqkAXY73%2Bx1W306frjdElyhoE7%2FahNOHsR1WtXU%2BctJFgYYi4zow9iJyDHoInZ4khnvPjpWKhJiCPh5vsfhLPcZczEZIbbxvnFfcela%2FkzWMfMsXV6DQJdmTvQs68SBgFBZw50tBaqA6UNiIrA6wQS8abGfznwRKBUF6FpbNsJN83d0gUwtM%2BHcF1ZO3aXGXcQPvHUFh55OEavbgn1lMhkPf3X1vjkz&X-Amz-Signature=a986a69363a558765fa5144d118b2e18bb215357c0b2b41da5c9b4042fdf83ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBUZ3XS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdpNSQ3%2FX4kf79PHHTsjRaCjFC%2BSzr0%2FUMRkkgEjM0vQIhAKz%2BbLPjAhbzsTFlLghSKbQGNtW1AdDN5N%2B2YdLw8LaOKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tGiNRjw4U%2BttU4gq3AMjRe3KaN5MNbItJE%2Fa45ltnq1X4PwYVX7uQDlAEGgs60bxq3FpmiACDJh4%2BJkXj93RsPoZ8VzD3plMlUHE4rQmOMz4qMn2eocylARRGeYU7eogQtEuyEA%2BEomBYbuCAnTjUrSTFiGYa815Cx2aw85rRyW0axU8bG0pi37ayIkfDdBDpmIbyryXFhapJexwz6TdLzQWu68vtxBH4hpz06BMmHw4bXzMifyON9yZ0EBewpHHFHpeM6PUn4mrR7B5zxq%2ByzY5jk2z53trjuPa1jcaB8gjZvFwr0i7eyt9n9zS8J%2BvxIStjtkbyndBtfndtHQDd4zS6u67YLFZ9E3TXPEH%2FFIqXQ5JHCfPFOwjCcRN1hIGfvKvZJkesWznUYooJ1joFdgImRE6NmP0lmtu3j8xoRT3DLsF8%2F4GK5S3lEKqqLwx7s3WYBD2fdC79mYJVPMOeJUekneUghsRUOpFR%2BW6wp8iha3Z0ILvaOgqCv9erUX1Eh7aRXlvjblPkRu2ge5oQf86HrvNpylpSvaexj3TpmAaD8k5UdV4eWKJPtjkW9JPT9%2FVvY%2BW1gNasr4VjYgNgDwehMG7KzjpiDTuv5C%2BiWkR6wGdsnba5IEzngl6vNPhBI8CjvL8AN0DTzCgyPbDBjqkAXY73%2Bx1W306frjdElyhoE7%2FahNOHsR1WtXU%2BctJFgYYi4zow9iJyDHoInZ4khnvPjpWKhJiCPh5vsfhLPcZczEZIbbxvnFfcela%2FkzWMfMsXV6DQJdmTvQs68SBgFBZw50tBaqA6UNiIrA6wQS8abGfznwRKBUF6FpbNsJN83d0gUwtM%2BHcF1ZO3aXGXcQPvHUFh55OEavbgn1lMhkPf3X1vjkz&X-Amz-Signature=9186c272ffaa8140b1415b0846b8a29d85884171370f74faca06b02804d7a239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
