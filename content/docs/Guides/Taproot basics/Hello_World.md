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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLDSGLW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCRsuCjVgh7SGulyA0BdNnudfROSPcXkIeccBMnF7Q4sgIgRuCSGRx6lBQfzGQnjzqlcsyYSS2omzidsGBFbs66wrYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDOhlbF0MS4MIS%2BBDyrcA4xeOoaaIb04a3C%2Fm4Yjz8lhjk0ed%2B9%2Bvf4c18AC8J8bHf8r2Olu1ZdUflGH5NAmlBPTL8uu7U3%2FqD6w2SLj96pjGJNw%2F4umrKXaoV8rc%2FpkdYopLXF1ox%2FmfZJaFO9ODTpJjiCnK4cTfHVEj8delE1GwzR5dVpE7EgP%2BcuHqzWOU7fbg1BdO6GO4Z1ttach3yNj7AEWfQTIgscyD2xzP7MDPxYyqlrJ6RM%2Fci8JJGuHYXFK6dWHulhDjis6k8ldn2taGcoGNreg9mdY4NFasftXV%2BswVU9mn%2FjrSXPVhSS7fNMQowbr%2BZJVE8gqCd53imOjRrcnTlxPKklpQuEdqMpnSJUyRR4qDV2B5B9n%2Fr52xmoPdbkp1ge34Ub9rAeFRjQInN5h3k3ZoCxyboCVDIWA1SgEBTIZnQy8zwD29mN4eriysY7dP66bSpjvHnmdnb7zuRh3dP%2BPmUVJI2vzV6rLy6HX6HotEgTYFDSvezO3Yv50yvsXqt17W4O%2Fpm9qrb8Fe1Jye3M0ghtciyNvIOlBDfdZ3p9sRRS9uYfU36gBo4b80yz7f8g5Ik5XUrxE6qzKFST1Upwe7JKozWHMdu6IQXj0Vk14akxMtUPFxbozlZW2Spt2mslFrq%2FXMOKEosMGOqUBMcDLOQFtoXgpKr%2B4WUIJMN1T8zIs70icY%2BjbBvSca58SnT5bccCmd8oSVweqP34skx0647%2FoQrYGqoXtdfvPDfGPfNOmjfHe3qlmDceTAFOSsgmY27HspQUlIKYs0brFg2Ih1EcuXjashhc9TyGHxu6EMte5vr4OxCTw57hlmx42FNUTgKEVL%2BJ9Wf4B8RbZuBKRNKgmcMBXAYvrXJW3KeB8jmym&X-Amz-Signature=7619f72b9714fd22c2d3effce6f15adaaa46eed8f3b1a6bb81f5a28543bc7452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLDSGLW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCRsuCjVgh7SGulyA0BdNnudfROSPcXkIeccBMnF7Q4sgIgRuCSGRx6lBQfzGQnjzqlcsyYSS2omzidsGBFbs66wrYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDOhlbF0MS4MIS%2BBDyrcA4xeOoaaIb04a3C%2Fm4Yjz8lhjk0ed%2B9%2Bvf4c18AC8J8bHf8r2Olu1ZdUflGH5NAmlBPTL8uu7U3%2FqD6w2SLj96pjGJNw%2F4umrKXaoV8rc%2FpkdYopLXF1ox%2FmfZJaFO9ODTpJjiCnK4cTfHVEj8delE1GwzR5dVpE7EgP%2BcuHqzWOU7fbg1BdO6GO4Z1ttach3yNj7AEWfQTIgscyD2xzP7MDPxYyqlrJ6RM%2Fci8JJGuHYXFK6dWHulhDjis6k8ldn2taGcoGNreg9mdY4NFasftXV%2BswVU9mn%2FjrSXPVhSS7fNMQowbr%2BZJVE8gqCd53imOjRrcnTlxPKklpQuEdqMpnSJUyRR4qDV2B5B9n%2Fr52xmoPdbkp1ge34Ub9rAeFRjQInN5h3k3ZoCxyboCVDIWA1SgEBTIZnQy8zwD29mN4eriysY7dP66bSpjvHnmdnb7zuRh3dP%2BPmUVJI2vzV6rLy6HX6HotEgTYFDSvezO3Yv50yvsXqt17W4O%2Fpm9qrb8Fe1Jye3M0ghtciyNvIOlBDfdZ3p9sRRS9uYfU36gBo4b80yz7f8g5Ik5XUrxE6qzKFST1Upwe7JKozWHMdu6IQXj0Vk14akxMtUPFxbozlZW2Spt2mslFrq%2FXMOKEosMGOqUBMcDLOQFtoXgpKr%2B4WUIJMN1T8zIs70icY%2BjbBvSca58SnT5bccCmd8oSVweqP34skx0647%2FoQrYGqoXtdfvPDfGPfNOmjfHe3qlmDceTAFOSsgmY27HspQUlIKYs0brFg2Ih1EcuXjashhc9TyGHxu6EMte5vr4OxCTw57hlmx42FNUTgKEVL%2BJ9Wf4B8RbZuBKRNKgmcMBXAYvrXJW3KeB8jmym&X-Amz-Signature=38c4f6c5d20c533e017423cd970343b413f7700c112bfaef5d697dca87bdbb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
