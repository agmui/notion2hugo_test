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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHDMOLK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDoDm%2FdlZqtbT%2FXODwh16in8KFQxkZAlrmS57I6ZZf0dQIgT6GGxdHpfWf2ZJUJUBo5sdotwT%2FrM7vuApQf00KFNJQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGyuaekwxhEsJLef8yrcA1siN8dxgydKCRgi1F25OCtfMEXksit9AoE%2FiCRVC%2BXKR%2BjlhyC1UqxdRiW7NDI5OOvEcvwt7B2g9OpG4wy0TIcpsG0109a7tx6trP%2BEERpsUeQbWGCPDISLQoNRDf7%2FQ4at7%2Bsy8jsJzgaq7uSUdqhIYwFNlrd7ep%2Bc5wRr%2FLElgS1JkXklrIvlSiPnsM7HD3K4pv0s5qvxQ5DJHNAts4kVazlKtFRM8QsjYREOilj6P5X1P2N2rc2Gnp9OtfZ9xZimrXwrxGnvAe7T0J4yfXv3%2BKFdJ1hv2DjmxPg93IBzKVIfCH6gbwtoZR%2FsQeIInOWY5NiQTCLtyEKtLuSfOGj2wqzYgtENTk6oGs1lbbVzFzUtD3GzmU8v2539TMWj%2BngeJoYE89e4G6iV4OHGtMYpp4UAGZEGNflwVTYvMFLayGG9160uli31SleUVoMBGR%2Fsb1z%2BeEx90mq66eIXha5jLlsl1qoGQpAt7YFtnzVeOYK4HNN2Zh04%2F%2BeNNyeW5bfFEb%2FjI8EFdwnEC%2B9i4LIbrASYe%2F%2FTkScjhg84j%2BK9M9CG43qyDkHxlrmerk8VAOe%2B1kkbbxJmomOhPoR%2ByV%2Bzzg5Diuof2Ca8lF30EV3SmZEZvVlvRjm1GXoqMMDojMQGOqUBq0wgFtbdkYz03E6juZCqloo%2FYqDC6PZTGmZpF3Qz9EpTKTI2WJxwCBznUNti9REEfdscbBWN77%2B1KVXagM1rIn3ubLVK0Ss5ZNIlWZjaNFUQ1qa8ATLBcKka14oHof3aLtit%2FGsZP%2FSQTprMmNxjDNXod3DqNm16W0%2BZZSvWRhI%2FlAs74eAR81542ZsBB0ik2adCJ1GWy9harDhWR3DAUq4uxBBD&X-Amz-Signature=76f11a1654ddc5ae7a3526f4b8f1638472879fc8bd28c1c01ef690ab7a017d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHDMOLK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDoDm%2FdlZqtbT%2FXODwh16in8KFQxkZAlrmS57I6ZZf0dQIgT6GGxdHpfWf2ZJUJUBo5sdotwT%2FrM7vuApQf00KFNJQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGyuaekwxhEsJLef8yrcA1siN8dxgydKCRgi1F25OCtfMEXksit9AoE%2FiCRVC%2BXKR%2BjlhyC1UqxdRiW7NDI5OOvEcvwt7B2g9OpG4wy0TIcpsG0109a7tx6trP%2BEERpsUeQbWGCPDISLQoNRDf7%2FQ4at7%2Bsy8jsJzgaq7uSUdqhIYwFNlrd7ep%2Bc5wRr%2FLElgS1JkXklrIvlSiPnsM7HD3K4pv0s5qvxQ5DJHNAts4kVazlKtFRM8QsjYREOilj6P5X1P2N2rc2Gnp9OtfZ9xZimrXwrxGnvAe7T0J4yfXv3%2BKFdJ1hv2DjmxPg93IBzKVIfCH6gbwtoZR%2FsQeIInOWY5NiQTCLtyEKtLuSfOGj2wqzYgtENTk6oGs1lbbVzFzUtD3GzmU8v2539TMWj%2BngeJoYE89e4G6iV4OHGtMYpp4UAGZEGNflwVTYvMFLayGG9160uli31SleUVoMBGR%2Fsb1z%2BeEx90mq66eIXha5jLlsl1qoGQpAt7YFtnzVeOYK4HNN2Zh04%2F%2BeNNyeW5bfFEb%2FjI8EFdwnEC%2B9i4LIbrASYe%2F%2FTkScjhg84j%2BK9M9CG43qyDkHxlrmerk8VAOe%2B1kkbbxJmomOhPoR%2ByV%2Bzzg5Diuof2Ca8lF30EV3SmZEZvVlvRjm1GXoqMMDojMQGOqUBq0wgFtbdkYz03E6juZCqloo%2FYqDC6PZTGmZpF3Qz9EpTKTI2WJxwCBznUNti9REEfdscbBWN77%2B1KVXagM1rIn3ubLVK0Ss5ZNIlWZjaNFUQ1qa8ATLBcKka14oHof3aLtit%2FGsZP%2FSQTprMmNxjDNXod3DqNm16W0%2BZZSvWRhI%2FlAs74eAR81542ZsBB0ik2adCJ1GWy9harDhWR3DAUq4uxBBD&X-Amz-Signature=6ebd16ca9b712034a73c4708e1746f41160d2fda2358029c2df64a57dc1036a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
