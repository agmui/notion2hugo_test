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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYFR4TD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4PcWD%2BLphG2WXUHg5sQPD3wXWn%2BVfi1UNdxBVFq%2F4XAiEAk5VgjlBUzFVNg%2FFF01Y%2FX%2BC4FKBOgJrR6iYwitmATsoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIpkrRrWAbZ9DEJDircA7GQ0OP9PJRs%2BjkEi6JI6D2t%2B%2FDaO%2F6buqEiTsIjFj0nOIJEyi8%2BxU5dG4zremY3rboN7uQN6vUEAWSNEqpLH34vBY7TeGNnaHA3HD7GdKkFni3C6A3v9Sqtx89qyQEPYBg6Rk519zUs9GVA5HP0PN3yCEZElRVe6EtqHHW%2FO3iOMx%2BRtUGZ2K0jkXavV%2BAZR4KLOdkn1PCltDJaJa545U%2FeaK0PAdFu3ntZ61IbdrRbCrRQS4XiLEnU3ZNoqPxpNwiKYvwRjnyCXz55bFUvlRi0ts1KhiBM1dkjysd9tt9kZlQdln8XR27jb3UQk4tpoVpYGqOCL%2FzxyJx2FMEfT%2FevChyAaEVsHzptvKvLqVvdAO0%2FKfJ1O8iTuEBR2iHbyi05oX7La8ieJMZJiJ%2B4%2FhrcD4LOgd%2Bz7m0OBeQrnrvmzuUmocscvLC53%2BJ4SOIqitItiDOyhLdqDGvXyx4HpRes0%2FPURaRw1WaqHSlH%2BfDYzWAYzrZtDUILaPs0yf57pQJ%2B4YeD3z2sJoXPCWFxmbn1PoIjlkk9LMVvxgLC3FZjIGAznyudaf%2BQ4uTs1n1bM4ciaIIV%2FaoQA%2BgxoePShlRh2DcUCDObXcne9eQ3%2FmVB%2F44Lw%2BgrfEx2bLezMN2Zkr4GOqUB8lRmDbj%2FE0xzkIsnNzNC%2BAjTLKwD%2BS7yzIXbx9PANO7pNeJ%2BDHVll%2FDnvwqFpM76gg1Me4z5kaSnhjs2tISoc3uIK%2Bh0zLdzKS7xbzWnUhXuNeylH%2BBgLEqTSBvCoi7nMKPDnt%2FuqrQ09lOc7W6VSygxx81RXwM0nMK3E33ERTIYhp2ZVceAA9n1PJ0zYKNtFtJK3qXE6nQgtU8uKlfxV6QeTcaq&X-Amz-Signature=187927022722d3a1b0155680008a29a748ab75ab1b4a1dc1f789f5bf73dbe6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYFR4TD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4PcWD%2BLphG2WXUHg5sQPD3wXWn%2BVfi1UNdxBVFq%2F4XAiEAk5VgjlBUzFVNg%2FFF01Y%2FX%2BC4FKBOgJrR6iYwitmATsoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIpkrRrWAbZ9DEJDircA7GQ0OP9PJRs%2BjkEi6JI6D2t%2B%2FDaO%2F6buqEiTsIjFj0nOIJEyi8%2BxU5dG4zremY3rboN7uQN6vUEAWSNEqpLH34vBY7TeGNnaHA3HD7GdKkFni3C6A3v9Sqtx89qyQEPYBg6Rk519zUs9GVA5HP0PN3yCEZElRVe6EtqHHW%2FO3iOMx%2BRtUGZ2K0jkXavV%2BAZR4KLOdkn1PCltDJaJa545U%2FeaK0PAdFu3ntZ61IbdrRbCrRQS4XiLEnU3ZNoqPxpNwiKYvwRjnyCXz55bFUvlRi0ts1KhiBM1dkjysd9tt9kZlQdln8XR27jb3UQk4tpoVpYGqOCL%2FzxyJx2FMEfT%2FevChyAaEVsHzptvKvLqVvdAO0%2FKfJ1O8iTuEBR2iHbyi05oX7La8ieJMZJiJ%2B4%2FhrcD4LOgd%2Bz7m0OBeQrnrvmzuUmocscvLC53%2BJ4SOIqitItiDOyhLdqDGvXyx4HpRes0%2FPURaRw1WaqHSlH%2BfDYzWAYzrZtDUILaPs0yf57pQJ%2B4YeD3z2sJoXPCWFxmbn1PoIjlkk9LMVvxgLC3FZjIGAznyudaf%2BQ4uTs1n1bM4ciaIIV%2FaoQA%2BgxoePShlRh2DcUCDObXcne9eQ3%2FmVB%2F44Lw%2BgrfEx2bLezMN2Zkr4GOqUB8lRmDbj%2FE0xzkIsnNzNC%2BAjTLKwD%2BS7yzIXbx9PANO7pNeJ%2BDHVll%2FDnvwqFpM76gg1Me4z5kaSnhjs2tISoc3uIK%2Bh0zLdzKS7xbzWnUhXuNeylH%2BBgLEqTSBvCoi7nMKPDnt%2FuqrQ09lOc7W6VSygxx81RXwM0nMK3E33ERTIYhp2ZVceAA9n1PJ0zYKNtFtJK3qXE6nQgtU8uKlfxV6QeTcaq&X-Amz-Signature=2d7c09242b50e15667a04a585f49b82da63a14e5cef050811b9eba8e76560ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
