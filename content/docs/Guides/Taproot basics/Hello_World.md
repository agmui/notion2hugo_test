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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHS74QP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7ydXI0zd2YGjozbmBtlz5CHLdQ%2B%2BFktLlEX9IJDnoDAiA5Sz0meRarS4D9Auc38McoupaAkHqeYKE%2BADvzSae7aCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsd9u%2BPLUm1szo2TiKtwDLjgRJS5r%2F9SBxQotnBpvUAC%2BFvzM9pHjIwYOwcY1wqkJ7o8qXT4r1NJfvkcaF%2FcdmmEH25hrRYmX4OFG7IbMCjAUlYMbq5MzcVlArOgusCxzOQAy43pnGAMrx1ao1NrtcTFl7Ds2vkoPZOlWw4uv7sco7gk34RXmVor3PcSRE6ok5IFcI9m9paTDXUiN%2FZedwe5PF8weaW%2FMBvWeCCd5Xb6fUjmXaS0CYCK4zUs6BkGxjJtNUpYQZS2K4pb4Q%2Bl873U0uFoEkWWzRNQqFnUJoPppkY%2BDNdnTOdsJnnK2I684xpuPhBoYXRngPlxBGFpdtvCJAkCbXB72YHsf2L%2F5%2BgZF7HR%2B%2FVqUKtirVqqp8SNOS7c4n6FM%2BHUGLsLbnjj2u7xV%2BNbTkW5zcG19Aam0QhQJQPFl%2BAvc%2Fy8SZ%2FjINMVnwlT7jeITjTBWSvU4PV9yv5DOu4rjBQWa7gu%2F3ze8OidJ23M3F1bw17oEA392odSUz85PPR9U%2FHBukpsEScmhjAc0FiGVOQZnZ1KX6MCdB9OlA%2FEPn8Xh3tDTea7UdHeKJcs33k438rKlbU9Rd24wYixhtq7PCT6xsawRNpED%2BmvAMTkvaxw8u1zGX5D8VFOsqsR7bcdpMe7QSLcwgti1wwY6pgEJLTHsumheqrz0vxRyeeV%2BUNmJRQa%2Fmywto550z7Q6hD9ZNbg46ztaJzhuIn%2Bj9NTBk1KcTADh6%2F3PKMfOtEZoIBUPKFOS1zWNaW2zbgSLOy%2Bd0wBbNl68kU57PlvuIyVD8WrWutHCmrxzFWvuPq06VyQpJUW55vNfXhOjHLJPAlvdRTFX3P09GJYDAsl61QW0xuTui%2FYPIaX%2F4oFkZAmKdv4UwOS7&X-Amz-Signature=cea319ce7e77638ce5b199f0af2644b1dfeeb13e882670c5419ceda8d6be076d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHS74QP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7ydXI0zd2YGjozbmBtlz5CHLdQ%2B%2BFktLlEX9IJDnoDAiA5Sz0meRarS4D9Auc38McoupaAkHqeYKE%2BADvzSae7aCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsd9u%2BPLUm1szo2TiKtwDLjgRJS5r%2F9SBxQotnBpvUAC%2BFvzM9pHjIwYOwcY1wqkJ7o8qXT4r1NJfvkcaF%2FcdmmEH25hrRYmX4OFG7IbMCjAUlYMbq5MzcVlArOgusCxzOQAy43pnGAMrx1ao1NrtcTFl7Ds2vkoPZOlWw4uv7sco7gk34RXmVor3PcSRE6ok5IFcI9m9paTDXUiN%2FZedwe5PF8weaW%2FMBvWeCCd5Xb6fUjmXaS0CYCK4zUs6BkGxjJtNUpYQZS2K4pb4Q%2Bl873U0uFoEkWWzRNQqFnUJoPppkY%2BDNdnTOdsJnnK2I684xpuPhBoYXRngPlxBGFpdtvCJAkCbXB72YHsf2L%2F5%2BgZF7HR%2B%2FVqUKtirVqqp8SNOS7c4n6FM%2BHUGLsLbnjj2u7xV%2BNbTkW5zcG19Aam0QhQJQPFl%2BAvc%2Fy8SZ%2FjINMVnwlT7jeITjTBWSvU4PV9yv5DOu4rjBQWa7gu%2F3ze8OidJ23M3F1bw17oEA392odSUz85PPR9U%2FHBukpsEScmhjAc0FiGVOQZnZ1KX6MCdB9OlA%2FEPn8Xh3tDTea7UdHeKJcs33k438rKlbU9Rd24wYixhtq7PCT6xsawRNpED%2BmvAMTkvaxw8u1zGX5D8VFOsqsR7bcdpMe7QSLcwgti1wwY6pgEJLTHsumheqrz0vxRyeeV%2BUNmJRQa%2Fmywto550z7Q6hD9ZNbg46ztaJzhuIn%2Bj9NTBk1KcTADh6%2F3PKMfOtEZoIBUPKFOS1zWNaW2zbgSLOy%2Bd0wBbNl68kU57PlvuIyVD8WrWutHCmrxzFWvuPq06VyQpJUW55vNfXhOjHLJPAlvdRTFX3P09GJYDAsl61QW0xuTui%2FYPIaX%2F4oFkZAmKdv4UwOS7&X-Amz-Signature=99259af782be1dca4f4ba796777092ee6076605be7b9040e16c53cf0d49b9267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
