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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3BGSBY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz9B749vdo5eTsItO2WeZhb8WqKEuxMyTSn0j7xmX2fAiBbPqaviFhkRIfANO6xTUZ9TeAMIrGm3iQ6HAxXxq%2Bjrir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2Fs7%2Fn%2Fj29C%2BgTZO3KtwDRs3vC1QSPXlRQRcwadhf5rFuqB32qfwVPdaf3QbBEjc%2F2ataL4diDYfJBFwAe5BIBpYNeUO0ipMY1%2Bb%2B0o0xoXQser3fwxUHcW08y45ACg4APHVckxArnRuiS8HDIBSAnIqBOZjMiCA3e5%2Fd%2FcHG0%2FlaEmCjN1ccBtpPDtnDey0BqOQULsM5JxePzzwYE%2Bb0drqI6qK%2Fw42%2BDpOnDpQNsQ%2F6jJCdqnh9HYwho4q6XtiKaai9v%2FQCoVSvownHzAcFMqbWQLyuDLBN%2BSnvqjwAf4KOL5OPZJYc7ab5s050lA5gxLJxb1WRJ46wrD%2ByyWy%2FfVRcRo7ohI1pSDjdVkjBtqpBiW%2BNHVD0NaKhOeyYS%2FsI5c0MyPlHBQlp%2B2tMdUkJFF0tQHps3rHdKaoc4MaO3f3QJhQxXT85v7Ie9TpNJDNhVJOxX8Syhy945OoN0vEpH%2BrWfT%2BKVev1F5%2BhWHIp3OFIn6778ou7Vg%2BUmFVDdAt0evxCxRDNvpRCIevWxQBCjYcTXylH5OUMn6NnkfhaRoqcimyKivd16FB180ZTr0CVE21EUQLnN%2BoIBnp9ZYjtYO4SNpQrjgyemxrNA4uPVHkcTOZI6DUAxUbJsF3kgsKNBHh1fAWjUhXDxpcwybCtwwY6pgH6ANV4j30Hdr6ozlYMqvIX2CYnnYjxramRj66bGyLq9q0jihGACK0SdUbqqOlTz96WN1iOtF4c1m0krJhFqsIF6j7pDF%2F%2FZuNDYBMRbPuKmGUI9iCv8fW44OY3%2FZIS1Li2BxnXXB%2F8iFKb46pAJ%2BGxWMp5j%2F9Xb61mtPk0ll8Xlrt8G%2BxNJtT1JV2JSumY6gngn7FQAgIr3eZ2xcquN4Yr5Wjg4ZYB&X-Amz-Signature=782c7efc18561300ede7f9bd0020ff6533daded03b05bdbba7dc8c8da54b6252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3BGSBY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz9B749vdo5eTsItO2WeZhb8WqKEuxMyTSn0j7xmX2fAiBbPqaviFhkRIfANO6xTUZ9TeAMIrGm3iQ6HAxXxq%2Bjrir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2Fs7%2Fn%2Fj29C%2BgTZO3KtwDRs3vC1QSPXlRQRcwadhf5rFuqB32qfwVPdaf3QbBEjc%2F2ataL4diDYfJBFwAe5BIBpYNeUO0ipMY1%2Bb%2B0o0xoXQser3fwxUHcW08y45ACg4APHVckxArnRuiS8HDIBSAnIqBOZjMiCA3e5%2Fd%2FcHG0%2FlaEmCjN1ccBtpPDtnDey0BqOQULsM5JxePzzwYE%2Bb0drqI6qK%2Fw42%2BDpOnDpQNsQ%2F6jJCdqnh9HYwho4q6XtiKaai9v%2FQCoVSvownHzAcFMqbWQLyuDLBN%2BSnvqjwAf4KOL5OPZJYc7ab5s050lA5gxLJxb1WRJ46wrD%2ByyWy%2FfVRcRo7ohI1pSDjdVkjBtqpBiW%2BNHVD0NaKhOeyYS%2FsI5c0MyPlHBQlp%2B2tMdUkJFF0tQHps3rHdKaoc4MaO3f3QJhQxXT85v7Ie9TpNJDNhVJOxX8Syhy945OoN0vEpH%2BrWfT%2BKVev1F5%2BhWHIp3OFIn6778ou7Vg%2BUmFVDdAt0evxCxRDNvpRCIevWxQBCjYcTXylH5OUMn6NnkfhaRoqcimyKivd16FB180ZTr0CVE21EUQLnN%2BoIBnp9ZYjtYO4SNpQrjgyemxrNA4uPVHkcTOZI6DUAxUbJsF3kgsKNBHh1fAWjUhXDxpcwybCtwwY6pgH6ANV4j30Hdr6ozlYMqvIX2CYnnYjxramRj66bGyLq9q0jihGACK0SdUbqqOlTz96WN1iOtF4c1m0krJhFqsIF6j7pDF%2F%2FZuNDYBMRbPuKmGUI9iCv8fW44OY3%2FZIS1Li2BxnXXB%2F8iFKb46pAJ%2BGxWMp5j%2F9Xb61mtPk0ll8Xlrt8G%2BxNJtT1JV2JSumY6gngn7FQAgIr3eZ2xcquN4Yr5Wjg4ZYB&X-Amz-Signature=b253f47fe30d0a9cb27e8040af947d16fb4e1fcc19066d7e993e0d93a17524f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
