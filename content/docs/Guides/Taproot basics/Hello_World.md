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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINDEQ3Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxBEWlg9TV8lyPdFor6B4EiA%2FiGvSr2o2VjdbOOWNQUAiEAtBkKsAt0n2OQdCnN8%2BWQHPHSpLIX1mEtjp3U5mLLqwQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtigcVmvo%2F7dmCVfSrcA%2Bwh4QCSC7e%2FqAE7nFQyGSjoSgIGdf%2Bd2K5%2FZaPtkSDS3ZfkKANWJeV8MlDQ3Yyx3DDerPx1ZQOz1OwCcHIfW7genVQLJVMyim5UzDW%2FQnFKNt3fVkO7HLoHYeLaOo0VPWcrFiJ8lJLqMP4a4pElo%2FnX4Z5ovrGeCJyR57wl2R8QIMCHx0Kk1D6vidUJ005Y3VDD5Wubx2fHh1CKXZ5ioWHR5QH4%2FGYwOzx8af2vLzz9d3%2BdbLBmLF5oPf9pTv9ff3lQ8NM15w%2BgCf5kWb5Hb%2FBCH%2BcgMPtexV%2BzOiqK1XLqkUuXRrazhF4TafbVpgBoYx3C%2BJnw4FglVRryN2y7GxqxoHXoth4j%2BeYh4JVzewy6XDidVwWhVmgMqdJoHkbnEM3OLqWzKXlR2o%2BS7AqkBrQqk3vepcmH%2BZT%2Bh%2FQK%2Ba1M9qyhpSXO2RnezIpnYT27uLq3PRIFqQxx4g8EmP0p4MRE%2BCPAqT7kE%2B%2FVRmtdXU0f5%2BYp4dt6WPDqtc7Y67LpZOzDoNvEeeVR5MWkD9rI8J5pWqoGpoyuE7VG8k3FUOO91OYOibbrGuCu3xIOERrO2I8rAJ3gMy9d985TaKq4uHWmxy5uo9Jatv%2FFXF2Ugz7sDdnut2v%2F9dDz%2F8wmML%2Bt87wGOqUBfYTbp4dOFG7kWpwZMOOSV4aRJE1dpuTRL1XwoJk8LRegXXtC67FKJZ60kUPi9gFwsziKHnpFBzJqZ5klGWBS%2FAovncxczhXWK%2FgmTW94BR614i9oCEq0mq9V8Fa%2Fqj9kIcMaH0BBYhd0toCuVH6wqYXE39UqaytsN9Iqb3K3d9%2FMx6p7E89vouP3vpa3QIqSecjvmyrbzjG5Z1Q40AzNddRpsFF3&X-Amz-Signature=95271f5af086583452673d7339b7aacdfe82112d12b480592dd67ad95ef73be4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINDEQ3Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxBEWlg9TV8lyPdFor6B4EiA%2FiGvSr2o2VjdbOOWNQUAiEAtBkKsAt0n2OQdCnN8%2BWQHPHSpLIX1mEtjp3U5mLLqwQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtigcVmvo%2F7dmCVfSrcA%2Bwh4QCSC7e%2FqAE7nFQyGSjoSgIGdf%2Bd2K5%2FZaPtkSDS3ZfkKANWJeV8MlDQ3Yyx3DDerPx1ZQOz1OwCcHIfW7genVQLJVMyim5UzDW%2FQnFKNt3fVkO7HLoHYeLaOo0VPWcrFiJ8lJLqMP4a4pElo%2FnX4Z5ovrGeCJyR57wl2R8QIMCHx0Kk1D6vidUJ005Y3VDD5Wubx2fHh1CKXZ5ioWHR5QH4%2FGYwOzx8af2vLzz9d3%2BdbLBmLF5oPf9pTv9ff3lQ8NM15w%2BgCf5kWb5Hb%2FBCH%2BcgMPtexV%2BzOiqK1XLqkUuXRrazhF4TafbVpgBoYx3C%2BJnw4FglVRryN2y7GxqxoHXoth4j%2BeYh4JVzewy6XDidVwWhVmgMqdJoHkbnEM3OLqWzKXlR2o%2BS7AqkBrQqk3vepcmH%2BZT%2Bh%2FQK%2Ba1M9qyhpSXO2RnezIpnYT27uLq3PRIFqQxx4g8EmP0p4MRE%2BCPAqT7kE%2B%2FVRmtdXU0f5%2BYp4dt6WPDqtc7Y67LpZOzDoNvEeeVR5MWkD9rI8J5pWqoGpoyuE7VG8k3FUOO91OYOibbrGuCu3xIOERrO2I8rAJ3gMy9d985TaKq4uHWmxy5uo9Jatv%2FFXF2Ugz7sDdnut2v%2F9dDz%2F8wmML%2Bt87wGOqUBfYTbp4dOFG7kWpwZMOOSV4aRJE1dpuTRL1XwoJk8LRegXXtC67FKJZ60kUPi9gFwsziKHnpFBzJqZ5klGWBS%2FAovncxczhXWK%2FgmTW94BR614i9oCEq0mq9V8Fa%2Fqj9kIcMaH0BBYhd0toCuVH6wqYXE39UqaytsN9Iqb3K3d9%2FMx6p7E89vouP3vpa3QIqSecjvmyrbzjG5Z1Q40AzNddRpsFF3&X-Amz-Signature=08639e910b78f7e2751b74156f3c52739030518b5792745b50ea560263aafaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
