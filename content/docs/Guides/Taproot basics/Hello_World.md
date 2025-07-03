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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNCNHFQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCJ%2F05dU5cTBvYQpTxHf9emzrEMlWhISSnkLbxqMJXaAwIhAOll%2FrteNpnDmJjo%2FOLq%2Fo26pnSmoHncYvOng9PGJ7OOKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmSE6Y7O2WBei5mAsq3AN8udHx97RtJ7gYj1mspebUhET3PDEEkzR1TNVkpRZAR3aOtjcn2w%2FESyNybgVf2HTbB7H8850nmrqOPzJ8LQN2R%2FY%2BAWkjFd6ViMtmo7qadgQIpn58T8rirZu7cAtwza9OxP%2Fe8m4uCZM3tpaxbzYLztIIc4PABq8Q6ujCyk2hZ9epzkRTpRJzQ%2BCNUwYuVK3b9uRZQqakOVX9NPnidRigMn7aLu953fdZ%2FaPjRGWDqsZDVIlPeQ%2Ba6LmGVBzhX%2B7wGooS92SAq4uh2wblsnqE8gb8z8eUsi6X6jnkkkX56lqH5w7PAq%2FU5TopUHMv%2BLvp4lFJ2pVmjwBMMyxHgwLI91TW5FHF8Q6Te2K0uND6%2B1%2BkK6EbZ4w3gGCqJufBKKrvUrYXB3rzNohgRjj3%2FfWMeuZYpAdNJ8Ilegw0d079e7s5PbU0LCX%2F87Wt7erGgTQBbfbhKJ8E%2BLT07gMctQFaOz8V7EgadoaL1PnTyEsTzKJKfc838hGn3f5TTW2kE0VRBqwuqgq%2Fir3gVFd8Rs%2F3TVCWk%2FKFb%2Bdw2GfpHuzwT2cU910k5VdRk5WdUH7EZ80NQUF7Hd%2Bbt9zoEV61rPCvgGegsrw%2BL4Kb94ze0lslr2Os7%2FxmItpZvu2OlzCDiJjDBjqkAUwXq8BYz4N3zPOl9jJETqiDXRlmoCrn%2BDNRx7DY4kZ4HWf11Hzdf4w1J%2FfTuDPvg7%2B3aG7%2BZZ%2F3T4nxru8owkH5uVgCUUa%2FT8YYoqD0%2FF60FlqgP2NDRHPL4v0Yb0pj%2Bx%2Fb8biwdDvqZ4fKFNArqeuIyqbq9GZpc1e5iATeCeXqBoQOFDYW33ObZ3ehMR5VPCRCHN4nzvTiUkgaQfQE83keAuOL&X-Amz-Signature=96ac30b88ba4d9e82cc410daf8d37896c02d0a9f0724c648f89427d837610b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNCNHFQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCJ%2F05dU5cTBvYQpTxHf9emzrEMlWhISSnkLbxqMJXaAwIhAOll%2FrteNpnDmJjo%2FOLq%2Fo26pnSmoHncYvOng9PGJ7OOKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmSE6Y7O2WBei5mAsq3AN8udHx97RtJ7gYj1mspebUhET3PDEEkzR1TNVkpRZAR3aOtjcn2w%2FESyNybgVf2HTbB7H8850nmrqOPzJ8LQN2R%2FY%2BAWkjFd6ViMtmo7qadgQIpn58T8rirZu7cAtwza9OxP%2Fe8m4uCZM3tpaxbzYLztIIc4PABq8Q6ujCyk2hZ9epzkRTpRJzQ%2BCNUwYuVK3b9uRZQqakOVX9NPnidRigMn7aLu953fdZ%2FaPjRGWDqsZDVIlPeQ%2Ba6LmGVBzhX%2B7wGooS92SAq4uh2wblsnqE8gb8z8eUsi6X6jnkkkX56lqH5w7PAq%2FU5TopUHMv%2BLvp4lFJ2pVmjwBMMyxHgwLI91TW5FHF8Q6Te2K0uND6%2B1%2BkK6EbZ4w3gGCqJufBKKrvUrYXB3rzNohgRjj3%2FfWMeuZYpAdNJ8Ilegw0d079e7s5PbU0LCX%2F87Wt7erGgTQBbfbhKJ8E%2BLT07gMctQFaOz8V7EgadoaL1PnTyEsTzKJKfc838hGn3f5TTW2kE0VRBqwuqgq%2Fir3gVFd8Rs%2F3TVCWk%2FKFb%2Bdw2GfpHuzwT2cU910k5VdRk5WdUH7EZ80NQUF7Hd%2Bbt9zoEV61rPCvgGegsrw%2BL4Kb94ze0lslr2Os7%2FxmItpZvu2OlzCDiJjDBjqkAUwXq8BYz4N3zPOl9jJETqiDXRlmoCrn%2BDNRx7DY4kZ4HWf11Hzdf4w1J%2FfTuDPvg7%2B3aG7%2BZZ%2F3T4nxru8owkH5uVgCUUa%2FT8YYoqD0%2FF60FlqgP2NDRHPL4v0Yb0pj%2Bx%2Fb8biwdDvqZ4fKFNArqeuIyqbq9GZpc1e5iATeCeXqBoQOFDYW33ObZ3ehMR5VPCRCHN4nzvTiUkgaQfQE83keAuOL&X-Amz-Signature=8d1cb8b79477aba5eaba0e52f0c8a3dd0aa7f7c5606e1f5922a8f1f12e876f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
