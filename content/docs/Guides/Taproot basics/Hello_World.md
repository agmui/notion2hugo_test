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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5C2EHX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGByDGSJr2E59SAXxDKsLZFRxjB0x%2Fad%2BHaijS6K516zAiAXsHfzmHfJln91Ptbmw9CbrljVFScTBdt7QCbb98iSyiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH74QAwWudUXsXLBpKtwDHRXULeiCPddoIbBy8fImx%2F2iqaalJ%2BSftKBmeWdb%2F1L8BZ1Q854w3F4yha0DDQ92aML0yMH9EUDYjQ49LbmOlhtzzrAUDrfQ5YH7Pde1q9zeJWgVdNKeiK0cQ1lib2AgN5Bfopjn%2BfWKaVPRA1Xhnv6txVcWwWYePVsYIx8SXpt%2Bg2dt13QGP840BX6p2di493b26V53l7Ee%2Fufj5bwVxI76BOHLrHQhKR7Qyop%2BtxPsBCWfiqJlIMiCDdpxubVRrejmWmRA7kmEoKGgQYp%2FO38%2BQSvdAWENOBLZxa4brUljLjdQNEpU1Yq0utw5Htu0Bf2nL4om10Lh0NuP7%2BjNmu1VaPbQgtr%2FiIriaBpHeQEdEPQs9mNfwhMiUuhRTbuQfTNV%2F8V%2F2%2BOcZksK6cSwQigFu%2Fvhi71zl4vrUzarZ4iUtnJtd1N2zLRCs3lj%2BgH71BUi2fIIz0LREyY1n7L1zPuYBNWiBUUKGUSn7Kk4EY79W4x3y5U0x1air2tyup11wLNnMRnlCG3DDyXNmxldSKsK69rFG1QgqdO51x6PpvNILKkE10FYwjTrpVoKMCaUmh1PikCRdTiRlt3q14TDf6rVYTflMMnskiYhHG0zZucCg6ocpXCq8CgYiJkwvPSfvQY6pgFnQNeKTg5VY3q968eUbIFOu3RDDEglwAZXuIt2NJPeiypr%2BI0YyQq7M3BIn0hfYr9nxcd8cFQAEUX7ersKqqkaLs4tEiGULxELtInkPrCI22SVUAoOwLSM0dH%2BgiLCKuSA0yfSe%2FkEqFs9BRgl0JrGhC15AtHWDV%2BJHElkN6GBjTa3blRsEg4gkJDqFzjjLFDX8JXOwIWUjRjsVkSEraMRn0x1QaGZ&X-Amz-Signature=b73c4e43e1b42bd05c854cc000cedaa2f51bf6457c803982b7c7b4f6c666f27d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5C2EHX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGByDGSJr2E59SAXxDKsLZFRxjB0x%2Fad%2BHaijS6K516zAiAXsHfzmHfJln91Ptbmw9CbrljVFScTBdt7QCbb98iSyiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH74QAwWudUXsXLBpKtwDHRXULeiCPddoIbBy8fImx%2F2iqaalJ%2BSftKBmeWdb%2F1L8BZ1Q854w3F4yha0DDQ92aML0yMH9EUDYjQ49LbmOlhtzzrAUDrfQ5YH7Pde1q9zeJWgVdNKeiK0cQ1lib2AgN5Bfopjn%2BfWKaVPRA1Xhnv6txVcWwWYePVsYIx8SXpt%2Bg2dt13QGP840BX6p2di493b26V53l7Ee%2Fufj5bwVxI76BOHLrHQhKR7Qyop%2BtxPsBCWfiqJlIMiCDdpxubVRrejmWmRA7kmEoKGgQYp%2FO38%2BQSvdAWENOBLZxa4brUljLjdQNEpU1Yq0utw5Htu0Bf2nL4om10Lh0NuP7%2BjNmu1VaPbQgtr%2FiIriaBpHeQEdEPQs9mNfwhMiUuhRTbuQfTNV%2F8V%2F2%2BOcZksK6cSwQigFu%2Fvhi71zl4vrUzarZ4iUtnJtd1N2zLRCs3lj%2BgH71BUi2fIIz0LREyY1n7L1zPuYBNWiBUUKGUSn7Kk4EY79W4x3y5U0x1air2tyup11wLNnMRnlCG3DDyXNmxldSKsK69rFG1QgqdO51x6PpvNILKkE10FYwjTrpVoKMCaUmh1PikCRdTiRlt3q14TDf6rVYTflMMnskiYhHG0zZucCg6ocpXCq8CgYiJkwvPSfvQY6pgFnQNeKTg5VY3q968eUbIFOu3RDDEglwAZXuIt2NJPeiypr%2BI0YyQq7M3BIn0hfYr9nxcd8cFQAEUX7ersKqqkaLs4tEiGULxELtInkPrCI22SVUAoOwLSM0dH%2BgiLCKuSA0yfSe%2FkEqFs9BRgl0JrGhC15AtHWDV%2BJHElkN6GBjTa3blRsEg4gkJDqFzjjLFDX8JXOwIWUjRjsVkSEraMRn0x1QaGZ&X-Amz-Signature=8fec5e87f891611b4b3ccea49a80f4674ef54dc52e9fc50b9daf3914b26de5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
