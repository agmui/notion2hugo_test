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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAHSYJP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUVPEMXSLBthLy4TMgnAUi6%2FFouKKWLjXCdNBFVq8yKAiAcJC2H4fyXGESGssh4g3HlMgw2XBBChoJ10tdmfo4W7Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM3zx1nwiku57zKCSBKtwDfyUOAkAMJs0ZyfHlS0hRlgA0vV%2FCLXyovuP1fuzo2xLHWrAZ%2B36smqGACsf%2FfPVHLVElhtr7X9BKv8KNEmWifqHRdG3EcLsfpjJcHWTRzKaiXvQ8JcdiiyWbVvpnwurjL2PcibDhuEnt5htN8EUgcanrBvAc6JEXKga0XYTkSPzTjnjUn1BJgPu3MiOf8lKkXk8uZvPUtfUNAC%2Fm46x8Zss47CHZXrb5Fnwsz4VP9Tpa3F69qDuVPYciT79xWbuSgyPI0JWscweYuesP91e%2BIbgHakq2iCNuRHp7gXbUby7%2Fxpn8NSlR3u6rtncszx7sfM2ogPXosJE7AEJk5O5cfNfGwATeaqAvrUgCamOkJIY3qGqh%2FtPB8TeJXPxG%2BTWo9NgB9cZ8NUw1KpOc0qW2hRXfEPBbxkTqzyYlXMXrsfNT5wLIr1ZLApzAN83osxD%2BFoZRWWXUXx9wKR6RSSsi8ckje7ougzv%2B1L1JFlLoTOe9lWz0%2FdPyyq1FQ7N4j1PahFxiK35p%2Fs3yr9t1uOw73xwpKa%2BsAuOUJUWLWN6cx%2FKbKNsZpud7chxNs1X8O0%2BYqcLhdIkZ%2BRWsy5Mk6yTqWMyzcAie4sRkQRXed%2BRdVtlWo%2F%2BvjNiycEiQG28whO22wAY6pgGVLsFZV16VAGVAPWrX4HZZ6IjpoYBt11eVUABm14r%2FyrvTpu1S35KSS5ioeGeuVIBRcIdJpwYVt3FJu60VMXO%2F%2BQvh8Wye1zvShnnmn3ci0YlM3zBMmlApR5hH6X0PDzeGD1VjLDz%2FfpwLz5yA4mpX4wkKwHfQy1gvIjC7o69zMekBtx3fNkSCivC8ldpJv87dXyqa3Gbc70ftidM9dfxqusq00%2BxA&X-Amz-Signature=b02131b3e6bc8b20a1b59aaa149014ab0526e89aaac1d2d39353b894312c4286&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAHSYJP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUVPEMXSLBthLy4TMgnAUi6%2FFouKKWLjXCdNBFVq8yKAiAcJC2H4fyXGESGssh4g3HlMgw2XBBChoJ10tdmfo4W7Cr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM3zx1nwiku57zKCSBKtwDfyUOAkAMJs0ZyfHlS0hRlgA0vV%2FCLXyovuP1fuzo2xLHWrAZ%2B36smqGACsf%2FfPVHLVElhtr7X9BKv8KNEmWifqHRdG3EcLsfpjJcHWTRzKaiXvQ8JcdiiyWbVvpnwurjL2PcibDhuEnt5htN8EUgcanrBvAc6JEXKga0XYTkSPzTjnjUn1BJgPu3MiOf8lKkXk8uZvPUtfUNAC%2Fm46x8Zss47CHZXrb5Fnwsz4VP9Tpa3F69qDuVPYciT79xWbuSgyPI0JWscweYuesP91e%2BIbgHakq2iCNuRHp7gXbUby7%2Fxpn8NSlR3u6rtncszx7sfM2ogPXosJE7AEJk5O5cfNfGwATeaqAvrUgCamOkJIY3qGqh%2FtPB8TeJXPxG%2BTWo9NgB9cZ8NUw1KpOc0qW2hRXfEPBbxkTqzyYlXMXrsfNT5wLIr1ZLApzAN83osxD%2BFoZRWWXUXx9wKR6RSSsi8ckje7ougzv%2B1L1JFlLoTOe9lWz0%2FdPyyq1FQ7N4j1PahFxiK35p%2Fs3yr9t1uOw73xwpKa%2BsAuOUJUWLWN6cx%2FKbKNsZpud7chxNs1X8O0%2BYqcLhdIkZ%2BRWsy5Mk6yTqWMyzcAie4sRkQRXed%2BRdVtlWo%2F%2BvjNiycEiQG28whO22wAY6pgGVLsFZV16VAGVAPWrX4HZZ6IjpoYBt11eVUABm14r%2FyrvTpu1S35KSS5ioeGeuVIBRcIdJpwYVt3FJu60VMXO%2F%2BQvh8Wye1zvShnnmn3ci0YlM3zBMmlApR5hH6X0PDzeGD1VjLDz%2FfpwLz5yA4mpX4wkKwHfQy1gvIjC7o69zMekBtx3fNkSCivC8ldpJv87dXyqa3Gbc70ftidM9dfxqusq00%2BxA&X-Amz-Signature=bf7da0e305929264c07a8ce58c428664d14d02d0bfed27d0f57d28c8cc182f16&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
