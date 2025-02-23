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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NXDGA5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxqaEX0xtdqY2RVP26xl6WQBbnmkZ7TnjLFYu0frw%2FHAiB2XBO5NQHwH%2BMZ%2FdM%2BLbJNV08tqMTwW2cfNXv3NLUX6ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMxBIGhkkR1hRzgXeQKtwDUT6zCMSGOp%2FvpXLeUgpc%2BlG3AqJ62tG%2FeRb%2BDzUTkt0S9BxT5H2iGfoXrhvpgkeZ4Qc7La%2FqNnLaRLWLLJEaE3ZW%2B7iReluLHV8C292RkmBcnWee%2BX9n8Xkt%2BfJeCeLltXJ%2Bdm7%2FvSYVR7XeXNeCU7VufSrXiUGna1jCiERL16KebgDg1XljHLKQQ4xhAsESjasUbJmAbP%2FolBgA1fPJ9Em3NTUgV3IzfOraJzAFKpLTxm8r0dT99o2buCa2OhW5AS095zZlbbTVVrJKPvhSELhWGa9aSZRm1%2BvygjN%2FdJjwiSCraaP4bOaFjGTwvWBwv88rI2ieFbmzC5V%2Ft4A2FvCWihIzw13AozBJBRO8O7njlQh%2FHxJ36tKxMxTVT7yxFqMOmqvyW7X9o2GjCaunCsnGbT%2FAyxX3pOVAGSeQvhcLsREi55zxB1%2FWXoQClsThkOMN4liAJGvSlFDj9AV7thDdVOvVoRr43gZDzjBgWrwtmIyyZrm612PS0Uca%2B4WNZqI3cQ0yBv47RgqQqRLd%2FIFdbVnRPEnIJnVm2RJzTwjh24R%2BCiOf1NrN5gcTd8DMICANs91RWFnM6bjd706W5epPLIEl4Hr5rKzRBfu2SAnBwR5%2BXPKiljGipsEw9bjsvQY6pgGSdaktXQXkMMvCvG1g6sDYcgmHtviydPCUUxMAxLDHl5XHYaiJrPKcJP2zJ5IYGn57qg0x6TFC7MNhH%2FWJz6J7cBUd9mA4a%2Fr8s8771w4%2B70rtuvB2ADok%2FSBorVyw9xAwTNlV%2Fnvzq5yCobo34yf436fI9WnGBQ2CC69VIUXc4oNxs84aLQXe48kZzKeNgQIv3%2BbXObfyDUMA7Vdg0zBz1UDebywy&X-Amz-Signature=00da9062cb4969818b7bc303ab42153605153df35782477d9290999ba5b50bde&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NXDGA5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxqaEX0xtdqY2RVP26xl6WQBbnmkZ7TnjLFYu0frw%2FHAiB2XBO5NQHwH%2BMZ%2FdM%2BLbJNV08tqMTwW2cfNXv3NLUX6ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMxBIGhkkR1hRzgXeQKtwDUT6zCMSGOp%2FvpXLeUgpc%2BlG3AqJ62tG%2FeRb%2BDzUTkt0S9BxT5H2iGfoXrhvpgkeZ4Qc7La%2FqNnLaRLWLLJEaE3ZW%2B7iReluLHV8C292RkmBcnWee%2BX9n8Xkt%2BfJeCeLltXJ%2Bdm7%2FvSYVR7XeXNeCU7VufSrXiUGna1jCiERL16KebgDg1XljHLKQQ4xhAsESjasUbJmAbP%2FolBgA1fPJ9Em3NTUgV3IzfOraJzAFKpLTxm8r0dT99o2buCa2OhW5AS095zZlbbTVVrJKPvhSELhWGa9aSZRm1%2BvygjN%2FdJjwiSCraaP4bOaFjGTwvWBwv88rI2ieFbmzC5V%2Ft4A2FvCWihIzw13AozBJBRO8O7njlQh%2FHxJ36tKxMxTVT7yxFqMOmqvyW7X9o2GjCaunCsnGbT%2FAyxX3pOVAGSeQvhcLsREi55zxB1%2FWXoQClsThkOMN4liAJGvSlFDj9AV7thDdVOvVoRr43gZDzjBgWrwtmIyyZrm612PS0Uca%2B4WNZqI3cQ0yBv47RgqQqRLd%2FIFdbVnRPEnIJnVm2RJzTwjh24R%2BCiOf1NrN5gcTd8DMICANs91RWFnM6bjd706W5epPLIEl4Hr5rKzRBfu2SAnBwR5%2BXPKiljGipsEw9bjsvQY6pgGSdaktXQXkMMvCvG1g6sDYcgmHtviydPCUUxMAxLDHl5XHYaiJrPKcJP2zJ5IYGn57qg0x6TFC7MNhH%2FWJz6J7cBUd9mA4a%2Fr8s8771w4%2B70rtuvB2ADok%2FSBorVyw9xAwTNlV%2Fnvzq5yCobo34yf436fI9WnGBQ2CC69VIUXc4oNxs84aLQXe48kZzKeNgQIv3%2BbXObfyDUMA7Vdg0zBz1UDebywy&X-Amz-Signature=4ee4350e1f7e25d0991de4e725a8b2a3a979c3a1708586388943a3b317e82c13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
