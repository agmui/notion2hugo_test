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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBNTE2Z%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA2VJup9dDWLWpxQ%2FZyBUVGi7IEA9zPiuMbaYlOqpmrpAiAvXfbNL84H8ggqQR%2Fw8GfRfxkeWPpKnfAJoIIoCAjhASqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl4DzGwyZ4deCLmhpKtwDRGp563ejaMebxAlnd0IsxeNg1KOCWrriAhe5m35f0%2FbKp1saURZWnIKpv8pP01yn7PeMAeOArS8npk3VqwlsvPkG7t0tMiKivvq8p7mxPred4VBe5nb1mjby%2FvYfjnmnGzzmzmCozuxOSomMQpKx%2FK5hhuwzH2eL%2F3mcNncX%2BkT%2FVGflnBV9JWovTHFlMm36YV%2FderWBYzNAUzAP4TQLpozhNmnDTyoPCGeL9lgq8nsTgaJAjeLZWJ3%2FvMOS9kTG%2BoiMcvdnvLTMryXXytsqENwUt%2FehjVQVbHTPpj02DH%2Fv1tuXESvPjfY%2FOxMv6qjK9zSv6NfFczsroQ%2FYKg6ZX3qjiW3pBiU9BvHNNM5byKaO9tLugJUPQ9WLn1WJHdvz6MJbQbDmoH%2FAZf2ljXSXmQ8n6pBr9DiZ2tHTld%2BdVKwOeyF6v7U7V4Um2iSpJR6aO%2BowCWC6lpTKhTQ8D2ESF7ysXfvby1JObYVcO5GGAN9dpYh0PV0Ai15rOGDgtVdxrWWHVWjNViGtBIkAfAUasMBbfhdXp4KKPvay1Odc%2BuZjYy5zFsuvCEL3XDmGW0m086U2G1Q2NcKQPtWXLWkA5JMMUXvLe3wzbpkPMViWzAQqrMq9f3MXjx0SDpgw1qPowwY6pgH2NiuJspn0yKvB1G1lIaVuifGGc6tzAUesthswaGwIAMWO7hae9azjjJ%2Fh43%2FqJ21JwTofNBYzKRjaRYTkbelRRh1cETZFmHw%2FqSEXIMVIUXSq%2BhaoOFq3zCdANA2VmyLhfBMN4GAf4xuMpomZBsTVxxPZbNaWbxXa3Oxax%2FZBoMQN1h5SfPcrNfF1NHGqcD%2BNtYuC3Jmk23E7OVrJsju7%2FcSlpUkY&X-Amz-Signature=992390f7397a84e6cca0f97c49739bc8c1845299cf5c234d915b24243fdee3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBNTE2Z%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA2VJup9dDWLWpxQ%2FZyBUVGi7IEA9zPiuMbaYlOqpmrpAiAvXfbNL84H8ggqQR%2Fw8GfRfxkeWPpKnfAJoIIoCAjhASqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl4DzGwyZ4deCLmhpKtwDRGp563ejaMebxAlnd0IsxeNg1KOCWrriAhe5m35f0%2FbKp1saURZWnIKpv8pP01yn7PeMAeOArS8npk3VqwlsvPkG7t0tMiKivvq8p7mxPred4VBe5nb1mjby%2FvYfjnmnGzzmzmCozuxOSomMQpKx%2FK5hhuwzH2eL%2F3mcNncX%2BkT%2FVGflnBV9JWovTHFlMm36YV%2FderWBYzNAUzAP4TQLpozhNmnDTyoPCGeL9lgq8nsTgaJAjeLZWJ3%2FvMOS9kTG%2BoiMcvdnvLTMryXXytsqENwUt%2FehjVQVbHTPpj02DH%2Fv1tuXESvPjfY%2FOxMv6qjK9zSv6NfFczsroQ%2FYKg6ZX3qjiW3pBiU9BvHNNM5byKaO9tLugJUPQ9WLn1WJHdvz6MJbQbDmoH%2FAZf2ljXSXmQ8n6pBr9DiZ2tHTld%2BdVKwOeyF6v7U7V4Um2iSpJR6aO%2BowCWC6lpTKhTQ8D2ESF7ysXfvby1JObYVcO5GGAN9dpYh0PV0Ai15rOGDgtVdxrWWHVWjNViGtBIkAfAUasMBbfhdXp4KKPvay1Odc%2BuZjYy5zFsuvCEL3XDmGW0m086U2G1Q2NcKQPtWXLWkA5JMMUXvLe3wzbpkPMViWzAQqrMq9f3MXjx0SDpgw1qPowwY6pgH2NiuJspn0yKvB1G1lIaVuifGGc6tzAUesthswaGwIAMWO7hae9azjjJ%2Fh43%2FqJ21JwTofNBYzKRjaRYTkbelRRh1cETZFmHw%2FqSEXIMVIUXSq%2BhaoOFq3zCdANA2VmyLhfBMN4GAf4xuMpomZBsTVxxPZbNaWbxXa3Oxax%2FZBoMQN1h5SfPcrNfF1NHGqcD%2BNtYuC3Jmk23E7OVrJsju7%2FcSlpUkY&X-Amz-Signature=8fc417be22b869a67652172acb40defa31ddc929bfb4cf0df87aef3d3e5564ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
