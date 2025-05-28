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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4DVBQO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDswuR4mfa%2FWtO8annPLeiYo6m079QlWVveiOrDbVDmNgIhAN9Bw66i77p%2Foj7tdyZcb1aHfdrMKVNuA23o%2BACc90aUKv8DCHMQABoMNjM3NDIzMTgzODA1Igzy4bagndrIuzuIz3kq3ANM7Hr9ZFtTdKUVLWpm8zqRZ%2FtCe%2BkJj2QUETCCOq%2FafqeJCt0N3tE3GQGF1%2BEzFEvcnlB5vUHoa%2BuJmtUY9WhP68jESmkBGY4sUZjP2Mw%2F7PyFM0oi3GI5Yb7OnmWb8wjkqocpgoAof4XYQmDtcNbGer4m9AIMIHlu2sJo4SSr8AWrkPlUK17f8xVJHzB%2FpQbYEwHGmbs6FFQ6UzXUpG9kCqWiLaHsVnOlwkqkcWlGJaKAeq9ky3p%2BePFKSwUiSEDloaLgSbQ11pA5mVqpXeLEFMaLxNVVDSKLM3hJlIJb2YX1EaIbTw5ADeaSqStyBRc7iMwCNSRb0siFhlA3MvmFnYrT9FBCP3RIKIpNkzGhMgtPxXfU8Fcce9Cxdu5LnZJCjG5aJcmIT%2FSQEwJ6JwjUdh2F%2FWPw5G%2BTGXpTbgpYDKDYcjycjd80Mp5nk2fiKExqLiHeJ8spcg0ZetEUs3mssOqzCT6uqgX2v0gLSENxUHHH3MPGuNvqZmLLUOt66S%2F4RhpiLTHTA4OhrJBXqklxzkt5ShHMtm2A%2FMLYfGeDs4Qj7rQnDw%2BRlyAQr%2BqMh9%2FCZ2CVLdnMl%2F4jPku%2FVYGj5aVAOKMiYo8kPKSC8jdpmsA%2FwZ68BY72AccyFTDJwdvBBjqkAVaffEPmZYy0sL%2FF1gMbHU34X1yK2Lx9NEfYjQN65kN2N3JyXdFZwAfyIjtjBDJ%2By1Iduo%2FRLTd9TBpOZTXHxjsBC1qGY7TKyhM%2FXzjHxlNgVm8qiTzeMDxldckqyAAHz7wIm7I7bvVSaikCfrXkqGVauslgcf2X2fIcQBKeDhpSu9jtbHDnBG1U8%2F%2BTCBPnWE%2F4ZjokGX60bEnh2qXWooxreC70&X-Amz-Signature=a89dc4d947fef16ade3681e64e17d3eb8b661cffdc6d087647bd8390b033137b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4DVBQO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDswuR4mfa%2FWtO8annPLeiYo6m079QlWVveiOrDbVDmNgIhAN9Bw66i77p%2Foj7tdyZcb1aHfdrMKVNuA23o%2BACc90aUKv8DCHMQABoMNjM3NDIzMTgzODA1Igzy4bagndrIuzuIz3kq3ANM7Hr9ZFtTdKUVLWpm8zqRZ%2FtCe%2BkJj2QUETCCOq%2FafqeJCt0N3tE3GQGF1%2BEzFEvcnlB5vUHoa%2BuJmtUY9WhP68jESmkBGY4sUZjP2Mw%2F7PyFM0oi3GI5Yb7OnmWb8wjkqocpgoAof4XYQmDtcNbGer4m9AIMIHlu2sJo4SSr8AWrkPlUK17f8xVJHzB%2FpQbYEwHGmbs6FFQ6UzXUpG9kCqWiLaHsVnOlwkqkcWlGJaKAeq9ky3p%2BePFKSwUiSEDloaLgSbQ11pA5mVqpXeLEFMaLxNVVDSKLM3hJlIJb2YX1EaIbTw5ADeaSqStyBRc7iMwCNSRb0siFhlA3MvmFnYrT9FBCP3RIKIpNkzGhMgtPxXfU8Fcce9Cxdu5LnZJCjG5aJcmIT%2FSQEwJ6JwjUdh2F%2FWPw5G%2BTGXpTbgpYDKDYcjycjd80Mp5nk2fiKExqLiHeJ8spcg0ZetEUs3mssOqzCT6uqgX2v0gLSENxUHHH3MPGuNvqZmLLUOt66S%2F4RhpiLTHTA4OhrJBXqklxzkt5ShHMtm2A%2FMLYfGeDs4Qj7rQnDw%2BRlyAQr%2BqMh9%2FCZ2CVLdnMl%2F4jPku%2FVYGj5aVAOKMiYo8kPKSC8jdpmsA%2FwZ68BY72AccyFTDJwdvBBjqkAVaffEPmZYy0sL%2FF1gMbHU34X1yK2Lx9NEfYjQN65kN2N3JyXdFZwAfyIjtjBDJ%2By1Iduo%2FRLTd9TBpOZTXHxjsBC1qGY7TKyhM%2FXzjHxlNgVm8qiTzeMDxldckqyAAHz7wIm7I7bvVSaikCfrXkqGVauslgcf2X2fIcQBKeDhpSu9jtbHDnBG1U8%2F%2BTCBPnWE%2F4ZjokGX60bEnh2qXWooxreC70&X-Amz-Signature=ba87266d12899e1c96c993109ec2c3c5846b42d773076201471c3e21453227aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
