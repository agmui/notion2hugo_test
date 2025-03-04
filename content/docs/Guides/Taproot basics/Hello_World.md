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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFH4NC7W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpzbCUOnYefNuOfdYaud1P3YvsCv2wF%2BQDqxjLu%2FCoVAiEArXDaW2x0IHW0C2y398O1Om4svz8Mw8%2FVTDGpXtQcdioqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTeWIOXvFj%2FJ6ciNyrcA0TLNBjMUClyPvu1IHd7IGfOM28qkfQe9sHwQtroTQygtf%2Fp%2BTnDKhwuR35fmqQ26txpGrDb2A5rHRujyH1B6L9Oo6NquafoIj6VELp5VOuuXvjMWKV%2BaEEJJMsDAjKRcE6RPytEfntpA4yH6N8zFtnsP3DPC780nhXJi6z%2BNhNrrSAqeT%2BA81cUVQ8H%2B56ZK5uDnZhLSgfVDFngwHQgC9uCMSC2apqwAsii7DhH7CxQFLk8LjKLS%2FXQoGoHmout9CaDYfs4j1s5AFOuJodYEPrW2gJUG3n8TOb6D0VE47GPcvF7p5wWg2PcOe53gvLpr%2BOi9gDFaQnCA%2FwgIc1GDObB0AeduRbheJTYvVUfaVnFBpqC%2FFZBXHpTwdbsEB67LTo76K8rXcpj8tRfhnxUrpWrzQwkz%2FHE2O5w8S%2FBqVwotNaiqmJZ5X3OgT49IJjjWhUlX2fR3yTOcXNkJWSRm8ZZA3CK%2FG1gHfz4IQVkl%2BXF6Yicl1VIX8mvsWtxcYzoLPoJO%2BwRM8Zc%2FZ7CkwgVIeg6i63rvDXtpDwWZlCjuOUL9%2F8W0C2VtW4XwJ1XpS92XiTorFgnytMqvKqFEDZO1rBkCj46R6%2BfgpvM44qfct0xTAyFH84iB6gkP88vMN%2B6nb4GOqUBFXtP3q%2FkhXeuEP3LytuBQ3Zy3TlVkUZe6qvMz3BcSDXhE6RMM9bESq78Wv2CV4evo854cAzbNra4a%2BZAc4TdX0aXsSGcYyJH%2BiujNLCdp%2Bqa4xvtnU%2BNDSCyHM2mkomrDWSnENgdD2OSdkYnbdbuZDmU5bcXUktGPuyf7%2BzE4OD5vOFsOu6CjPY2jwp91yTU3uWtTHCCRl8mYUv%2BholXq8Jnhnp6&X-Amz-Signature=bedffd4e6d6c7e9a2162693c615f99530d8ffd02a73698727c903d81fa01de4c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFH4NC7W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpzbCUOnYefNuOfdYaud1P3YvsCv2wF%2BQDqxjLu%2FCoVAiEArXDaW2x0IHW0C2y398O1Om4svz8Mw8%2FVTDGpXtQcdioqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTeWIOXvFj%2FJ6ciNyrcA0TLNBjMUClyPvu1IHd7IGfOM28qkfQe9sHwQtroTQygtf%2Fp%2BTnDKhwuR35fmqQ26txpGrDb2A5rHRujyH1B6L9Oo6NquafoIj6VELp5VOuuXvjMWKV%2BaEEJJMsDAjKRcE6RPytEfntpA4yH6N8zFtnsP3DPC780nhXJi6z%2BNhNrrSAqeT%2BA81cUVQ8H%2B56ZK5uDnZhLSgfVDFngwHQgC9uCMSC2apqwAsii7DhH7CxQFLk8LjKLS%2FXQoGoHmout9CaDYfs4j1s5AFOuJodYEPrW2gJUG3n8TOb6D0VE47GPcvF7p5wWg2PcOe53gvLpr%2BOi9gDFaQnCA%2FwgIc1GDObB0AeduRbheJTYvVUfaVnFBpqC%2FFZBXHpTwdbsEB67LTo76K8rXcpj8tRfhnxUrpWrzQwkz%2FHE2O5w8S%2FBqVwotNaiqmJZ5X3OgT49IJjjWhUlX2fR3yTOcXNkJWSRm8ZZA3CK%2FG1gHfz4IQVkl%2BXF6Yicl1VIX8mvsWtxcYzoLPoJO%2BwRM8Zc%2FZ7CkwgVIeg6i63rvDXtpDwWZlCjuOUL9%2F8W0C2VtW4XwJ1XpS92XiTorFgnytMqvKqFEDZO1rBkCj46R6%2BfgpvM44qfct0xTAyFH84iB6gkP88vMN%2B6nb4GOqUBFXtP3q%2FkhXeuEP3LytuBQ3Zy3TlVkUZe6qvMz3BcSDXhE6RMM9bESq78Wv2CV4evo854cAzbNra4a%2BZAc4TdX0aXsSGcYyJH%2BiujNLCdp%2Bqa4xvtnU%2BNDSCyHM2mkomrDWSnENgdD2OSdkYnbdbuZDmU5bcXUktGPuyf7%2BzE4OD5vOFsOu6CjPY2jwp91yTU3uWtTHCCRl8mYUv%2BholXq8Jnhnp6&X-Amz-Signature=b95473ec93c1ad65eb60865a17b7f02ec208692a2db1329c64150cbd5d7c98a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
