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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHCKRPI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDOLdqXmE0vuRI4v%2BJKFe%2BFQzaPXwAoTtsKr9CE57eknQIgfR7WZeF%2FtI7tPoCsVFPP382USDopRa5ru0vTwtimAXYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCbucmNUvOm1L7cJCrcAzR%2BLcMycLP4rC%2Foi9IABAooHZBCPMu%2BEhC8orDMikrZcfkNfRST%2FY0zomuJl6kD3p1psxSgxDpo0g7VZJwhGro83oBxDlkGR6T%2FlUABG0YOtfArXpMDUylmWy8RYUOfGEuRcJmfn38n2%2BMqfP7IpmviAVU9d2sA7ahoW5DL0wu%2B%2BJH1fsU%2B3tw8l58eQuieLGRjg%2FJ5tv78CuZ29LLeKyN4JLD38LzhYiNnd9JYI1qapWZJVfoGo2wht8%2F1%2BrqlKLEITd00vBCT5KbTojBvxdu7VsKS9YzZ1eGgcvirN4sVv7KvU9rCnOplpugQulcpbbTd1VRZp00pV6dCfXuSnzmiNhegvMXTLkBU44qxp16rljeWTz4H9DvvvYfY15q7j8A2YkvPZt54Ls3Dxkw5Tp0oIhkvbfrAnWaDjV7biMGZeB9ezONoPRPNlGhFgUuXGYT0SrDK%2Fh%2B26KUYscxpKa1N5RHy9b9gkjkPSZ%2FZtT9akq3Auxhdfs5ZStJOoSB%2BtvO3ByhMfKAjWvU5TrromoiX2DxNA6%2Bkvju2cOS6YJUP71uodgJxTSkNaBadMIfIvqsrg6kCTeWXQq1jG7l4991LxoSI0H2tnhI96bSwcR8Zt3JkuDmIFgqwS5KpMKbtpcMGOqUB5FhHatZGXvRMCc2sDQGpnNqenQwcWF0vdVrZEMAAS%2BP%2BR1A7JsKJnTw7%2Bqe0apezK9a%2BiyYkr6qU%2FunRABlIKEwWxCf%2FT72sSUWmvooXVcQrgGduLPzUqzD9HrqSCaVvtZmcsXVbxJ%2F32sBwx0vUVZ%2B%2B0GwiT4daeFhbqr%2BfK0SbtDrGdH0za9WnLNXGNh54NCdH%2BtMji4G4ilDBlW7LHcs3MiYG&X-Amz-Signature=650a957311791d1b8fa09dcd5d5bca32b25c0c5ad411202528fa72c167cfdfa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHCKRPI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDOLdqXmE0vuRI4v%2BJKFe%2BFQzaPXwAoTtsKr9CE57eknQIgfR7WZeF%2FtI7tPoCsVFPP382USDopRa5ru0vTwtimAXYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCbucmNUvOm1L7cJCrcAzR%2BLcMycLP4rC%2Foi9IABAooHZBCPMu%2BEhC8orDMikrZcfkNfRST%2FY0zomuJl6kD3p1psxSgxDpo0g7VZJwhGro83oBxDlkGR6T%2FlUABG0YOtfArXpMDUylmWy8RYUOfGEuRcJmfn38n2%2BMqfP7IpmviAVU9d2sA7ahoW5DL0wu%2B%2BJH1fsU%2B3tw8l58eQuieLGRjg%2FJ5tv78CuZ29LLeKyN4JLD38LzhYiNnd9JYI1qapWZJVfoGo2wht8%2F1%2BrqlKLEITd00vBCT5KbTojBvxdu7VsKS9YzZ1eGgcvirN4sVv7KvU9rCnOplpugQulcpbbTd1VRZp00pV6dCfXuSnzmiNhegvMXTLkBU44qxp16rljeWTz4H9DvvvYfY15q7j8A2YkvPZt54Ls3Dxkw5Tp0oIhkvbfrAnWaDjV7biMGZeB9ezONoPRPNlGhFgUuXGYT0SrDK%2Fh%2B26KUYscxpKa1N5RHy9b9gkjkPSZ%2FZtT9akq3Auxhdfs5ZStJOoSB%2BtvO3ByhMfKAjWvU5TrromoiX2DxNA6%2Bkvju2cOS6YJUP71uodgJxTSkNaBadMIfIvqsrg6kCTeWXQq1jG7l4991LxoSI0H2tnhI96bSwcR8Zt3JkuDmIFgqwS5KpMKbtpcMGOqUB5FhHatZGXvRMCc2sDQGpnNqenQwcWF0vdVrZEMAAS%2BP%2BR1A7JsKJnTw7%2Bqe0apezK9a%2BiyYkr6qU%2FunRABlIKEwWxCf%2FT72sSUWmvooXVcQrgGduLPzUqzD9HrqSCaVvtZmcsXVbxJ%2F32sBwx0vUVZ%2B%2B0GwiT4daeFhbqr%2BfK0SbtDrGdH0za9WnLNXGNh54NCdH%2BtMji4G4ilDBlW7LHcs3MiYG&X-Amz-Signature=9f5a5aeffb4b4fc4de610d2c35465d466680498002788aaf5d10a7ab8e1cd12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
