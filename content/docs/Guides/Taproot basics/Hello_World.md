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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEVZSEQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5xYpE6aDwmp7Oz4rG8xL5RedJ3Bo7sU4B2wlctuVWcgIhANltquLrnIOANAVrMErTj8qBUwPL84h80%2FJmTN5JY5X8KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzQoWyfDUO5Mehctoq3AOeHcDZCkY1NiJT%2BaVsZHz5lknIfn3MawrUPUB%2BeoSwJTwD1NYi07YTdHPzzj1mMld5PA1xM5VHFctgk%2BWkqeRvG42qEPkJ2u6yQN1%2FDG%2FeQX4DQhV91Z%2BXuloJ%2Bnq5%2BBABQt6J%2BN6PgtK3hcU8klOFaoC9SjF%2FCl91HP4kuezADbAmU8SCgI5DCrdyxcoldk0qgRSGtKvxNWE2v58TeyUsTddB7dZ1b5DVTFWRATX%2FGOOb2qmoCSGECIGO0xmjtWXTenbptQHPU2AS1oudCkAQxYzsEkCXFuy1Xi9kc4XRsp%2FrlCCIjRFWjdk8FiBg0O3z7wQDFnnO3E%2FiNYHz9U5fPbu2eabBBNFzOGLbJ%2FKcVe%2FPvb72a%2FxBpwO02kO0ygFZjqogThxNrkKmr7FlvdpsorwTzDF4C0dn%2BSAuRv9U12fg9r40k5ACw8omRUEa89lr130%2BS44ZBw4erKesZhlBgqVUfRE7XkDs%2F04Q2DZf7VMsLMhL1Df2jXWiQN88OD3ZU6UK00w2xLtCfD16ekfechQIfwS%2FhH75OxWXoIpnlP8nvx6XY2pHGUt2eOq5n5QTr2RxbLzfZ%2BwkQMYM40H60AeMD0H%2FUZvlh%2FLbtWhQneL%2Fo9t0ieBZdORHozDk1efBBjqkASB3fbDhqKhxXsId%2Bhn7%2BjSPQZx7iVKlYH2hS2hQGHd4Hx8hnc%2B9cH9hJ8vxSx5n%2Fri38IEk74aM3xDTWQeiTHMOKPDt9dRPaumRQdGF5TLM%2FB%2BAC%2Bo7MLu1ofUTOXaELLXYB8jhIdAjxchgqyh02nvgU%2FvV608Ly01ZwSaqApwlnp0Dx8kIvLfh3FF%2FejBcIl%2F6zfArDw80H9H8H3UIYYaYEX2h&X-Amz-Signature=044ea309882f5cb9bedab1fc5fdd7113a9388a2dc214839ddeddffec6fb9d165&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEVZSEQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5xYpE6aDwmp7Oz4rG8xL5RedJ3Bo7sU4B2wlctuVWcgIhANltquLrnIOANAVrMErTj8qBUwPL84h80%2FJmTN5JY5X8KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzQoWyfDUO5Mehctoq3AOeHcDZCkY1NiJT%2BaVsZHz5lknIfn3MawrUPUB%2BeoSwJTwD1NYi07YTdHPzzj1mMld5PA1xM5VHFctgk%2BWkqeRvG42qEPkJ2u6yQN1%2FDG%2FeQX4DQhV91Z%2BXuloJ%2Bnq5%2BBABQt6J%2BN6PgtK3hcU8klOFaoC9SjF%2FCl91HP4kuezADbAmU8SCgI5DCrdyxcoldk0qgRSGtKvxNWE2v58TeyUsTddB7dZ1b5DVTFWRATX%2FGOOb2qmoCSGECIGO0xmjtWXTenbptQHPU2AS1oudCkAQxYzsEkCXFuy1Xi9kc4XRsp%2FrlCCIjRFWjdk8FiBg0O3z7wQDFnnO3E%2FiNYHz9U5fPbu2eabBBNFzOGLbJ%2FKcVe%2FPvb72a%2FxBpwO02kO0ygFZjqogThxNrkKmr7FlvdpsorwTzDF4C0dn%2BSAuRv9U12fg9r40k5ACw8omRUEa89lr130%2BS44ZBw4erKesZhlBgqVUfRE7XkDs%2F04Q2DZf7VMsLMhL1Df2jXWiQN88OD3ZU6UK00w2xLtCfD16ekfechQIfwS%2FhH75OxWXoIpnlP8nvx6XY2pHGUt2eOq5n5QTr2RxbLzfZ%2BwkQMYM40H60AeMD0H%2FUZvlh%2FLbtWhQneL%2Fo9t0ieBZdORHozDk1efBBjqkASB3fbDhqKhxXsId%2Bhn7%2BjSPQZx7iVKlYH2hS2hQGHd4Hx8hnc%2B9cH9hJ8vxSx5n%2Fri38IEk74aM3xDTWQeiTHMOKPDt9dRPaumRQdGF5TLM%2FB%2BAC%2Bo7MLu1ofUTOXaELLXYB8jhIdAjxchgqyh02nvgU%2FvV608Ly01ZwSaqApwlnp0Dx8kIvLfh3FF%2FejBcIl%2F6zfArDw80H9H8H3UIYYaYEX2h&X-Amz-Signature=3e59d31f3d645233e0e58dd1e265bcb923b4a664e091b14a5a1af9db00e05b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
