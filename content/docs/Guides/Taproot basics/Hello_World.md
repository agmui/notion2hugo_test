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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J34HOC2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICFgDCUerTjRX3xIM2nE2hp2R%2FaGRLdROXQ%2FtFFWumeQAiBYEf5kub7jQvGIh0yqaahltiAFU6dyuT%2B2eu4hPB0iUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZoERtVybazBgTfK3KtwDGC0a7pEAZ0VDP%2BfgbjIJKzo%2FL12yPeVLXl%2Fss%2Ft7GRt9GfIaxxH80S3SYXGFiM5STncKcDvGjJZ6ySa%2BKkEiaEOk5MnCvu5pAjRBiFKDs514Q5PBxuWi0uhcRlyPWao%2Ff3xypoASI1M25zZcGfWO10YONt%2FPSf19TO1OwM8ls3ijygwAOuUh4tYYjMfXGM5ooMMgttlMXkwJxQQor%2BZCUlulV0BgKPcUjIcrGwrRinyoMsHc4%2BivoFejk5J3NI7His5hwYE1nekwFA3DoI8vSewljqZ9XoN9tjr9Ebq2eCw831GsWH82jAwKy%2FgmL7JiCka0u0BSqMlndU6r9jtd06AvNZQ3CBvtfv3yR%2FpK6%2BxXgHapelK4HwSJirDgI6Iyit9FkRMxBT7WGRf6R4XlB2rZs9KEOQo0hW6eYUAsdWdB3EM1LdXJf6GW4CXkK5%2F78yKY%2FS1NBHio6JJg%2Br2L8NfdeB3ruJS9h1bAVld3rN4Szu7vJd%2B7Xmq%2Ff%2FZgy7p%2BDUu1Dj4ZODrnUS4hMSQ41S77btjkVzgYuPQGtKt3gSbETLd8BGeiAjvfVNZzCfgLY4vcdM%2BGPtB9L1KgWH9%2FV2B3HRYK8XoZms1zLR7UDdCui7x8Kkk8zS3%2BesQwt77MvQY6pgE%2FT%2BqfYZz%2F2HYDTIpTCDu9cnjZO6AGi0H0VePrJ4x67YDTJV1twVDQDAzC75pswVXDh4gONlhi7MqyqPDfG%2F4BFN0Zgiwp8Dq2y5n5gQqZdgKCS53WOuYvKRz5eViiHhptNeMwmAPaehy%2F7FvoXh9k0J5eKIFy2zjlt4gBIi9dBPNkAcQNUeZWsujXaWvlQNCG98ruJ1pM5TVgMH6v7ThS2s7dc%2F6s&X-Amz-Signature=87c4ab3d2a766396658a27887d41cad4535adefd8613508ffd79e0dae536bbac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J34HOC2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICFgDCUerTjRX3xIM2nE2hp2R%2FaGRLdROXQ%2FtFFWumeQAiBYEf5kub7jQvGIh0yqaahltiAFU6dyuT%2B2eu4hPB0iUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZoERtVybazBgTfK3KtwDGC0a7pEAZ0VDP%2BfgbjIJKzo%2FL12yPeVLXl%2Fss%2Ft7GRt9GfIaxxH80S3SYXGFiM5STncKcDvGjJZ6ySa%2BKkEiaEOk5MnCvu5pAjRBiFKDs514Q5PBxuWi0uhcRlyPWao%2Ff3xypoASI1M25zZcGfWO10YONt%2FPSf19TO1OwM8ls3ijygwAOuUh4tYYjMfXGM5ooMMgttlMXkwJxQQor%2BZCUlulV0BgKPcUjIcrGwrRinyoMsHc4%2BivoFejk5J3NI7His5hwYE1nekwFA3DoI8vSewljqZ9XoN9tjr9Ebq2eCw831GsWH82jAwKy%2FgmL7JiCka0u0BSqMlndU6r9jtd06AvNZQ3CBvtfv3yR%2FpK6%2BxXgHapelK4HwSJirDgI6Iyit9FkRMxBT7WGRf6R4XlB2rZs9KEOQo0hW6eYUAsdWdB3EM1LdXJf6GW4CXkK5%2F78yKY%2FS1NBHio6JJg%2Br2L8NfdeB3ruJS9h1bAVld3rN4Szu7vJd%2B7Xmq%2Ff%2FZgy7p%2BDUu1Dj4ZODrnUS4hMSQ41S77btjkVzgYuPQGtKt3gSbETLd8BGeiAjvfVNZzCfgLY4vcdM%2BGPtB9L1KgWH9%2FV2B3HRYK8XoZms1zLR7UDdCui7x8Kkk8zS3%2BesQwt77MvQY6pgE%2FT%2BqfYZz%2F2HYDTIpTCDu9cnjZO6AGi0H0VePrJ4x67YDTJV1twVDQDAzC75pswVXDh4gONlhi7MqyqPDfG%2F4BFN0Zgiwp8Dq2y5n5gQqZdgKCS53WOuYvKRz5eViiHhptNeMwmAPaehy%2F7FvoXh9k0J5eKIFy2zjlt4gBIi9dBPNkAcQNUeZWsujXaWvlQNCG98ruJ1pM5TVgMH6v7ThS2s7dc%2F6s&X-Amz-Signature=1860cc0469b7c3788aee19d185d283f6c475887f95ee6e18d9a3321694960d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
