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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPZ4L5O%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCiPeFU0p9VsqzzCTxyQ7TYCZINmSHjFhcl8j%2FFruCHBgIhANxVG%2FOhS%2BI%2BFPXKoV9nGOATbaAIPIdrSMno8iqxFK7EKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOxTKF6%2FZRtB6JuQq3ANC%2B%2Fnas8vOUJ6FyoCFPkTYRPzNPD2I8ZOjA44qhHh5G%2FHSpClHjdS48ivq9XaCwXFYvKaAsFpQAUpp8nH4Rcc%2FiX5WUNjGGwH%2FnG6ang2s5KTPzhfibkCYg04yHUgk12U%2BEW5%2Fagc%2FYjeGA1nfF9z8xFJPU6djN%2BvWtTx088m%2BX9tT%2FpiKDqX%2FdhSyYNs0sCmTMVni0KhkHQCPlLEt0ZTlBnQuHgJew75zfuIfpjppLZP0ZjSSyLpjI7CCbFOY6V1aJ6JWmiy6Bqng0PMpXEwW7nHpt0apm0GcRHJqi9Fy6Qlzg2yVxKEAkBsKzmUfpryX%2BfT2anqzQQ8%2FxYMBng8lMa0FDwn2eVmFOxADJXis40vA%2BnKnGiSjoE6FV%2Bmd%2BweyVjadfPhUznNXcXX2JjAmTPtfVwHpMxiSvdvijvDtfmvaBN51%2Fqj0xMwKfrnpUc7vtZ1cq8CLZKamu30LWLBQhTiEFZgh7C4dtz6TibYzY0FcieF3kRCftxG2rWFk0hCiNTomG50dvfrJ9xdIDw4c%2F19WguryE5%2BE1HkvI2AfHOWvVSyUKmsgYVw2sgBnA%2FV4y76Jad6pcbyNJvauEKRAjjqp3wcWmW8YCn%2BINF0sR42ef6tGXcnE4T%2BoJDDpuZnABjqkAc5gKpkQWz564v6oTa5raf7c7Gujgk4GudnMEXd6W74Y0qREd5wPNoMmh2YJriB%2FwTheI2ipFYTA%2BiSc7CBBr%2FxCI%2Bhq0haM%2F0xrQN9ujP03%2BiAmA2RMM%2FmHXFDiEVQlUk74%2BjFCaRdnBWim5Adq%2FuMMgzsxjVrkZRulhqnO86i92g723R3YMCzhNCfqFXysrGk%2FI7EpiDwFOCY3mVk3BPIT1PlS&X-Amz-Signature=9629408b4eda52fb08dde013b43f02616557a3ae202cc8250f9523ed68556c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPZ4L5O%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCiPeFU0p9VsqzzCTxyQ7TYCZINmSHjFhcl8j%2FFruCHBgIhANxVG%2FOhS%2BI%2BFPXKoV9nGOATbaAIPIdrSMno8iqxFK7EKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOxTKF6%2FZRtB6JuQq3ANC%2B%2Fnas8vOUJ6FyoCFPkTYRPzNPD2I8ZOjA44qhHh5G%2FHSpClHjdS48ivq9XaCwXFYvKaAsFpQAUpp8nH4Rcc%2FiX5WUNjGGwH%2FnG6ang2s5KTPzhfibkCYg04yHUgk12U%2BEW5%2Fagc%2FYjeGA1nfF9z8xFJPU6djN%2BvWtTx088m%2BX9tT%2FpiKDqX%2FdhSyYNs0sCmTMVni0KhkHQCPlLEt0ZTlBnQuHgJew75zfuIfpjppLZP0ZjSSyLpjI7CCbFOY6V1aJ6JWmiy6Bqng0PMpXEwW7nHpt0apm0GcRHJqi9Fy6Qlzg2yVxKEAkBsKzmUfpryX%2BfT2anqzQQ8%2FxYMBng8lMa0FDwn2eVmFOxADJXis40vA%2BnKnGiSjoE6FV%2Bmd%2BweyVjadfPhUznNXcXX2JjAmTPtfVwHpMxiSvdvijvDtfmvaBN51%2Fqj0xMwKfrnpUc7vtZ1cq8CLZKamu30LWLBQhTiEFZgh7C4dtz6TibYzY0FcieF3kRCftxG2rWFk0hCiNTomG50dvfrJ9xdIDw4c%2F19WguryE5%2BE1HkvI2AfHOWvVSyUKmsgYVw2sgBnA%2FV4y76Jad6pcbyNJvauEKRAjjqp3wcWmW8YCn%2BINF0sR42ef6tGXcnE4T%2BoJDDpuZnABjqkAc5gKpkQWz564v6oTa5raf7c7Gujgk4GudnMEXd6W74Y0qREd5wPNoMmh2YJriB%2FwTheI2ipFYTA%2BiSc7CBBr%2FxCI%2Bhq0haM%2F0xrQN9ujP03%2BiAmA2RMM%2FmHXFDiEVQlUk74%2BjFCaRdnBWim5Adq%2FuMMgzsxjVrkZRulhqnO86i92g723R3YMCzhNCfqFXysrGk%2FI7EpiDwFOCY3mVk3BPIT1PlS&X-Amz-Signature=6e87a6c968c0f8bdfd18d1d9be6224298c914c1034bf3817521d0d7824fbb5ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
