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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMOL6NO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBdSGRLCspAE3UFEfGotAc6XyDm2pLTs8nQORGEmAFvSAiEAq7w3Q3Mm8lP9eGmAx4hUB2M6P7iYYbpbLhFBUqTfN6Eq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN9yIZenA5fq%2Ff90eCrcA5xRAbpQIpCRmmQ18NdjaoJQZSl4DbVpRqVbk4pCcV6PO4Os0WzNVf1bLDbGMPWx1WuYO9BUQCqKLNKNHfuvbXRHHUsUHxd2J6cEQC4zcIp%2BYaYu1ZB7PeuSaswMWMOv2ynE7vmj5rb1ja6liq2j8jOGo8s8bKJoWlOSfrnfJ4AJS3Xt1p4uU%2BOQhbDEoS5NWCL8iZ0%2BAZ4y4IWrltoS0105qcHO1vAaslQfLSUCyIvKqxF%2FQ9T30V7iGitKSykN%2F1i%2Bk2wruZiBAxAEsYrqtzQU3It0NDKacuBQvLm2n91F2P6uryJDPKSeEK9XznuMy842WxEXxErwcxxpusdJ2LRAVm2yo7XIjPz1m%2BIl%2Bb9wgwOwW8lqE3zFWfZT99%2BcnWT9rJo8jhSZmfi1HXbN8eEHhaA0BjPWDwouthz%2BkrwbzXCVK5cLqDTvX2vfNxoyOS39s%2FArdmpE9Y6LPKxygr3oWTvycvL0%2FzFvBgbvzLvjZftUGsGm48gGyTts1k2i3vE0RHWWWww7FrhtuduFFKabhR23wXHWDNVhLmPfLb6opHQc5ClKodMGYCmiQ1d7HUWS2hCYP2Ki0HtxUkYZY%2BDxapeh%2BMhmld%2Bsw970rD9vC9D3h%2FXJadklfBQdMP3elr0GOqUB0qACyCgU%2FH74y68YG3z7gg2LrLW2GDWmxugOSP6nsbfHZZGxmlRWEbFVoO99nCwuvh20vXr2P221D6eaXdAW2bNq0Z9uCHjr0Jd4GYWXktuU6zqxTK2cY3O4LdNRKifPvWwSbqOGHNsLKJ2CPFijvRAgsfCPpsNXncARNtgWzgsynbjzJkrNpmjZuCbEs8y5WkY15DUrl8wNOi53bfD68SYsgmOe&X-Amz-Signature=90537512db4177dad625137da4b12766d0408f89e69cec6cd3f99a8138858e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMOL6NO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBdSGRLCspAE3UFEfGotAc6XyDm2pLTs8nQORGEmAFvSAiEAq7w3Q3Mm8lP9eGmAx4hUB2M6P7iYYbpbLhFBUqTfN6Eq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN9yIZenA5fq%2Ff90eCrcA5xRAbpQIpCRmmQ18NdjaoJQZSl4DbVpRqVbk4pCcV6PO4Os0WzNVf1bLDbGMPWx1WuYO9BUQCqKLNKNHfuvbXRHHUsUHxd2J6cEQC4zcIp%2BYaYu1ZB7PeuSaswMWMOv2ynE7vmj5rb1ja6liq2j8jOGo8s8bKJoWlOSfrnfJ4AJS3Xt1p4uU%2BOQhbDEoS5NWCL8iZ0%2BAZ4y4IWrltoS0105qcHO1vAaslQfLSUCyIvKqxF%2FQ9T30V7iGitKSykN%2F1i%2Bk2wruZiBAxAEsYrqtzQU3It0NDKacuBQvLm2n91F2P6uryJDPKSeEK9XznuMy842WxEXxErwcxxpusdJ2LRAVm2yo7XIjPz1m%2BIl%2Bb9wgwOwW8lqE3zFWfZT99%2BcnWT9rJo8jhSZmfi1HXbN8eEHhaA0BjPWDwouthz%2BkrwbzXCVK5cLqDTvX2vfNxoyOS39s%2FArdmpE9Y6LPKxygr3oWTvycvL0%2FzFvBgbvzLvjZftUGsGm48gGyTts1k2i3vE0RHWWWww7FrhtuduFFKabhR23wXHWDNVhLmPfLb6opHQc5ClKodMGYCmiQ1d7HUWS2hCYP2Ki0HtxUkYZY%2BDxapeh%2BMhmld%2Bsw970rD9vC9D3h%2FXJadklfBQdMP3elr0GOqUB0qACyCgU%2FH74y68YG3z7gg2LrLW2GDWmxugOSP6nsbfHZZGxmlRWEbFVoO99nCwuvh20vXr2P221D6eaXdAW2bNq0Z9uCHjr0Jd4GYWXktuU6zqxTK2cY3O4LdNRKifPvWwSbqOGHNsLKJ2CPFijvRAgsfCPpsNXncARNtgWzgsynbjzJkrNpmjZuCbEs8y5WkY15DUrl8wNOi53bfD68SYsgmOe&X-Amz-Signature=70783ceddd252792589cf14a5368d647cafe3f81eb17838078ccb86e046fffcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
