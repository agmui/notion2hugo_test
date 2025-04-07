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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V73HONT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1QVrnbgz2tLGzgNQx2GxG0QXm1EyxqiSapJBH1UWxxAiEAzI6PjAvHfEs4AK7yc%2BxA4yYNoL7%2FCuB5OYAAPg6AKH0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN6d3jIKhdAG3gBCNyrcA46Z%2FQ61hxVcfqbJ4k0IocuEDFrDzuUQz5Mk1RoYfgtEvI1XXWtMb9sNpdeSFKUsURaVsc7%2BQ9G90OEgbhJuTTOi14for5jYdFw7aV%2ByFZREF3t6hpBvHpPmzqPTudb34nCxNdR86C5NY4iGcRMAYhtS6QMtgAh1T%2BQp%2BGMer6BEnScNDtBgrlB38vyVLe32BM7srfp7YHdSe0QgpMrMWvt246jGnz2UK4z%2ByNZHofUaItsyaU38q%2B2PGkMCEGlqfRqv31zCvOYAQeIdJPcvG2us1y08bqc9lFk1IWP%2F7l1ml9SUpW0wWh%2BIMWTnVcGHpk8BRYZ47hJS27jnRwyVB1U8dtYuXI7iVSDEBaJbBeqBfD1gUbGHIxT7UsXavda72lQyt%2FlHr9LBu20J8Bo%2FJIg9ddMWb9%2FvTfNMl6Tsmu0nQu6LQL9P%2BdlbglHoLD1u1a7SxflMJs3MTyCiyRsfK6%2B4zs8g%2BVdRNJ2EzDk779Fu5c5QOACG9r5iXo7YMQ4ZaBtSganL92N3o1qY3auWxkf2cg9vCHQPBRzlGQvAtjgaIoKVCvru%2Ff6noQWq6p1g9Le190sIAPJeWNalUpgtmfRqcg%2BPUZ%2Bcci8MEGk3b%2BdDaGRNvtXyb8pxzdf7MOq2z78GOqUBHCM5DHUPlNNZ42NVfihj6h1RU0D3QpHBngJfPKJYV1%2FWFK5wAH6Ru3axzNqAilDOBoYvGRLB06bzCxOMplqKcEm%2F4Yo6Jkww4%2FeNmz2h%2FaiTMGqa2%2BzBK2slfECj1PrG50Ni6NpSBlpt4fxAFkxDqtSH2gPWYkuUpaFvnfm8H3oF1FV44T2aeamVzFt2AnsuJWwhhExluse0e4ukxxIzMX4hlwSN&X-Amz-Signature=7c4a3fc9018b1911d7a3a451a02a1a567c06206f57fd988db84e809aedadf1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V73HONT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1QVrnbgz2tLGzgNQx2GxG0QXm1EyxqiSapJBH1UWxxAiEAzI6PjAvHfEs4AK7yc%2BxA4yYNoL7%2FCuB5OYAAPg6AKH0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDN6d3jIKhdAG3gBCNyrcA46Z%2FQ61hxVcfqbJ4k0IocuEDFrDzuUQz5Mk1RoYfgtEvI1XXWtMb9sNpdeSFKUsURaVsc7%2BQ9G90OEgbhJuTTOi14for5jYdFw7aV%2ByFZREF3t6hpBvHpPmzqPTudb34nCxNdR86C5NY4iGcRMAYhtS6QMtgAh1T%2BQp%2BGMer6BEnScNDtBgrlB38vyVLe32BM7srfp7YHdSe0QgpMrMWvt246jGnz2UK4z%2ByNZHofUaItsyaU38q%2B2PGkMCEGlqfRqv31zCvOYAQeIdJPcvG2us1y08bqc9lFk1IWP%2F7l1ml9SUpW0wWh%2BIMWTnVcGHpk8BRYZ47hJS27jnRwyVB1U8dtYuXI7iVSDEBaJbBeqBfD1gUbGHIxT7UsXavda72lQyt%2FlHr9LBu20J8Bo%2FJIg9ddMWb9%2FvTfNMl6Tsmu0nQu6LQL9P%2BdlbglHoLD1u1a7SxflMJs3MTyCiyRsfK6%2B4zs8g%2BVdRNJ2EzDk779Fu5c5QOACG9r5iXo7YMQ4ZaBtSganL92N3o1qY3auWxkf2cg9vCHQPBRzlGQvAtjgaIoKVCvru%2Ff6noQWq6p1g9Le190sIAPJeWNalUpgtmfRqcg%2BPUZ%2Bcci8MEGk3b%2BdDaGRNvtXyb8pxzdf7MOq2z78GOqUBHCM5DHUPlNNZ42NVfihj6h1RU0D3QpHBngJfPKJYV1%2FWFK5wAH6Ru3axzNqAilDOBoYvGRLB06bzCxOMplqKcEm%2F4Yo6Jkww4%2FeNmz2h%2FaiTMGqa2%2BzBK2slfECj1PrG50Ni6NpSBlpt4fxAFkxDqtSH2gPWYkuUpaFvnfm8H3oF1FV44T2aeamVzFt2AnsuJWwhhExluse0e4ukxxIzMX4hlwSN&X-Amz-Signature=e24dbc6e179402f0151006a0626be7895a4d03be66acb1f3d6fbc94ffa2cf2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
