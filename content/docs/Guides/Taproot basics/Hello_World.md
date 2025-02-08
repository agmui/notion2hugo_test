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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XJ7UIJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDhj3R%2BfD9ceuEfezpZjY1iFfSUsIa6gPCaiEPlxeZ0XQIhAO1%2BItnZzuRuH4PzQ9VAbAVzuj9zw61w7Ldi9DomFTAzKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf9tF0wEeiTrShBA4q3ANgiyTkl7DOGnmuA3%2BvDvvY7zZH3IgMaMpugRypBoFdv2nr%2BnaUYhUcPHt9LrLVoPA%2Bk4%2FTt2zaDuIi3m3gcmpSWudWpg45bbJhdJcifqzRPjXhX0CrWoVaz3Ul8iXqBE4%2FvhR4OreicFukjegOHxRiQF6pH94KElV0N31%2FwPpPG7lqeoh03jzIi7Mce7MYjbrkGbnNNACsqXrTJYmmXPaTPolpcBs4E1ktcvGsyHATJ6kyohOibQ3nIof9OdaAaINqJ%2F6ShFiLptLruIRVrhm2gzNLQx3PqPrxjbLfo9xaQeJl25NutRCyowMnZj5MJCQv2CTAONSrwdDaSrUe05LeKVxj28fWUjyLMwI95Z%2BdmPhkNJgP5wKYzeqhhgJ9LcLo4zGizmg%2FMdjRDmDt7KHpLGjLXRmX9HStPrx5dS%2BC%2Fk19U2loHr91X7l0MWX6GvjsWo%2Bsbrw8g8iQNT20gAD2x%2FATsf5yOGJQfFt3U7u1yoIf7b6SIZrfOb63MyuTAD4DxaxwkzZ%2BJ0Ac8hbh%2Fyate%2BSSVpiGHaR28ZTW2Ep9JzBP35UV5mrU4KEA7CXaLQErms3%2FPkKDDJesR1xOLZ65wtlbFY9TIVkarbyWhFckHdZ0CpsM0V3%2FScX3CzDLhp29BjqkAcUIsadv4dcj%2BoZIcscMzLr8K4gKX6z0b1pSMY4Yff3gEG03bN6eBsMK9ZDb4fAJInvkiwxjH%2FCl0EK4JZrYCAJHCTBHQ4RXho%2BPhfOI1IDiXD7r5IPL1E%2B4whD1qWFrppyqRgp6%2BIXqhmxjTncrejGf4P7u1sW8MzHXvqbOmCIf3QKhihYZvoeK2mVd5AU%2B3HfGH42RUg3rs5Iew%2FXRakhmUorS&X-Amz-Signature=088611efe475069f4c9aabe04319699aecc30f486f9c9c4bcd59ea4dd06ca5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XJ7UIJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDhj3R%2BfD9ceuEfezpZjY1iFfSUsIa6gPCaiEPlxeZ0XQIhAO1%2BItnZzuRuH4PzQ9VAbAVzuj9zw61w7Ldi9DomFTAzKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf9tF0wEeiTrShBA4q3ANgiyTkl7DOGnmuA3%2BvDvvY7zZH3IgMaMpugRypBoFdv2nr%2BnaUYhUcPHt9LrLVoPA%2Bk4%2FTt2zaDuIi3m3gcmpSWudWpg45bbJhdJcifqzRPjXhX0CrWoVaz3Ul8iXqBE4%2FvhR4OreicFukjegOHxRiQF6pH94KElV0N31%2FwPpPG7lqeoh03jzIi7Mce7MYjbrkGbnNNACsqXrTJYmmXPaTPolpcBs4E1ktcvGsyHATJ6kyohOibQ3nIof9OdaAaINqJ%2F6ShFiLptLruIRVrhm2gzNLQx3PqPrxjbLfo9xaQeJl25NutRCyowMnZj5MJCQv2CTAONSrwdDaSrUe05LeKVxj28fWUjyLMwI95Z%2BdmPhkNJgP5wKYzeqhhgJ9LcLo4zGizmg%2FMdjRDmDt7KHpLGjLXRmX9HStPrx5dS%2BC%2Fk19U2loHr91X7l0MWX6GvjsWo%2Bsbrw8g8iQNT20gAD2x%2FATsf5yOGJQfFt3U7u1yoIf7b6SIZrfOb63MyuTAD4DxaxwkzZ%2BJ0Ac8hbh%2Fyate%2BSSVpiGHaR28ZTW2Ep9JzBP35UV5mrU4KEA7CXaLQErms3%2FPkKDDJesR1xOLZ65wtlbFY9TIVkarbyWhFckHdZ0CpsM0V3%2FScX3CzDLhp29BjqkAcUIsadv4dcj%2BoZIcscMzLr8K4gKX6z0b1pSMY4Yff3gEG03bN6eBsMK9ZDb4fAJInvkiwxjH%2FCl0EK4JZrYCAJHCTBHQ4RXho%2BPhfOI1IDiXD7r5IPL1E%2B4whD1qWFrppyqRgp6%2BIXqhmxjTncrejGf4P7u1sW8MzHXvqbOmCIf3QKhihYZvoeK2mVd5AU%2B3HfGH42RUg3rs5Iew%2FXRakhmUorS&X-Amz-Signature=031c740c6028cf6c3bde30546bd4b2ac8b550b54ff0a09b030093d185d75d824&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
