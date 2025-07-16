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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNYDVNQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEzPPjrhzoPSaZSiNhZB6bDQagOvVXqChiW9z23YMULgAiEAw6ZEHfYKRmtoTQaQqf5vDcK1PXhEs64i9fVd6R4Bxzsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBBFrUKjFqcZzv3TDircA%2FmeebpL0Gzg6bIxeo1qH73OAAYcAREiZzzV8V9upI%2FreujNNy4q3ccXdO7bdi9oUka6%2B%2Bx%2BC6RbtICJfuW8jmQj%2FcRC%2Bz0TWFOPwI%2FAPioRxx%2BvRGIE9X0vDMQxh8GIWTbUox8Wm8QWYddN9%2B4I4v9LXrur13Anly6uLP4K%2BohDaTeeKXeGtRhw56NjByBQKgnkJqnGZGzOla191QoeDq9Efft3msN5p9KKBMq%2BhICdq0Noh1rT6IO6v3MhY7TUisHcAa44upGl5oKVQlktfdP6GTbIHFc2Lf86xoYKuq9fp3Km0wxB6W%2B32BzaDDHhVOOPFd97TLp%2BG8UlaingmYmNQx5MgG4FnYN4m3F08XYAwU2buR33Tp2IlqvZTzG7kQmZAlNbBi22AWDT1ttZ9DPYm3mN7wRHnT2yfXtuz9%2FG48AYkoxwpmt3tFOTTyBRW8EmEldIdTwIjPPohUvJuXXwZOuroeWvLs%2FxgasUQA8emahSj07gOC4CiW%2F6j3bUicM9PzjLHInMF8q89NyxoAI1laxLoLDMTqBOwnvELD0qftIpfqeqotf%2FZS63G2HN3tT746%2B6G7Wfojy4WEfVjJEuK8JkCnizwl%2FPCfsnTDbluynNS5RZtf0F9CVoMPz928MGOqUB4IYxjYC3PrzNR1UuT8hgce2wsBuPF7PT%2BcTBZH9A0J4TiOKV0cFoBxlbzKkWx8DMJ4b%2FJs6y0RKc%2F9B4HYBsKVVzJWTnO%2BS%2BMoXD5agKysSZr4vC%2BsNZ4r7hlXP77KmCxykTrnEzcj8TQH41ho2%2B1BxqEi1OIwPlkkXzAxIAvFw6OFxDvxjMDwIHaDhWE3hJy%2FJt2Y0v%2BMnAVhBcZqnXeo788%2Bc%2F&X-Amz-Signature=9aa663c4cbc1274ee443fb6e04a5a2eca775742d1e43a41d4ef33a2433915cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNYDVNQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEzPPjrhzoPSaZSiNhZB6bDQagOvVXqChiW9z23YMULgAiEAw6ZEHfYKRmtoTQaQqf5vDcK1PXhEs64i9fVd6R4Bxzsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBBFrUKjFqcZzv3TDircA%2FmeebpL0Gzg6bIxeo1qH73OAAYcAREiZzzV8V9upI%2FreujNNy4q3ccXdO7bdi9oUka6%2B%2Bx%2BC6RbtICJfuW8jmQj%2FcRC%2Bz0TWFOPwI%2FAPioRxx%2BvRGIE9X0vDMQxh8GIWTbUox8Wm8QWYddN9%2B4I4v9LXrur13Anly6uLP4K%2BohDaTeeKXeGtRhw56NjByBQKgnkJqnGZGzOla191QoeDq9Efft3msN5p9KKBMq%2BhICdq0Noh1rT6IO6v3MhY7TUisHcAa44upGl5oKVQlktfdP6GTbIHFc2Lf86xoYKuq9fp3Km0wxB6W%2B32BzaDDHhVOOPFd97TLp%2BG8UlaingmYmNQx5MgG4FnYN4m3F08XYAwU2buR33Tp2IlqvZTzG7kQmZAlNbBi22AWDT1ttZ9DPYm3mN7wRHnT2yfXtuz9%2FG48AYkoxwpmt3tFOTTyBRW8EmEldIdTwIjPPohUvJuXXwZOuroeWvLs%2FxgasUQA8emahSj07gOC4CiW%2F6j3bUicM9PzjLHInMF8q89NyxoAI1laxLoLDMTqBOwnvELD0qftIpfqeqotf%2FZS63G2HN3tT746%2B6G7Wfojy4WEfVjJEuK8JkCnizwl%2FPCfsnTDbluynNS5RZtf0F9CVoMPz928MGOqUB4IYxjYC3PrzNR1UuT8hgce2wsBuPF7PT%2BcTBZH9A0J4TiOKV0cFoBxlbzKkWx8DMJ4b%2FJs6y0RKc%2F9B4HYBsKVVzJWTnO%2BS%2BMoXD5agKysSZr4vC%2BsNZ4r7hlXP77KmCxykTrnEzcj8TQH41ho2%2B1BxqEi1OIwPlkkXzAxIAvFw6OFxDvxjMDwIHaDhWE3hJy%2FJt2Y0v%2BMnAVhBcZqnXeo788%2Bc%2F&X-Amz-Signature=0c9abdef0d37af34a00e8a5c5f006c9eee7378845ec44b8669e713104cee19ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
