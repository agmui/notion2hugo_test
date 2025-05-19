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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLYJ4HE2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HVDCg0o6bCCZSNxLDTW8NRASpyCmN5YaEEq1qhLinQIgO%2FMJORkLBQ89P5tn4nZ4ov3swvh8859Y325S6xBdTAkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ%2Fd3vi7Dh7FMhQIircAxdcTX46%2FrJHR8Y6rvpztMgn0vIemCCpc%2FsEJAC4DzFXZJty%2BUCNFkVaHEW5rUgNIcRX7ZogO7rf4urmjsLLtbUKqb3f3aL6XP7QmcIhSgKeYovJvo2bli9iB3Rk6bLuI9H0ehEfRltTT%2Fg1Xg3fc0QMpZ6Ri9mGJ1PR349kL2sEh%2FECYmdHBkMwj5chzYbRGLJ1fAuSmlbjqwztasssuxH2hcK00pA0FoBAz5U8j3YxisaGzy%2F2NObIoPl1ElsL2l%2FmKDzK3gqkokKWJTL0cPMhM4OmfTSX%2FyZnMBcYhkpyJM1RujHa%2FDSkfoWG1rK%2B1UFYwEmUezH2d%2BjmyHXirXHQ9q1HHWzoV1nUhPE%2F0hCH9xQGb5c4RqUexkncG0L1mrmV2DsRCDAIy7BidzCKOnBu4lY9hzsgbyDoID4kczyts2L8DOAOuV3JZYpvxqLOp3zos3vSTXoTF%2FjasAXLnrEax%2BzABYuZ9KAMPmubafnHXKMp%2BTX7d7gMybFbHNFHk1cThshl50xaXXfWrwwm96p78VFOK0ts4Ig5rls28SYAZkBpf2B4tKW60GxxfiCxLigeCMpEzvHJY9aSP2YcYkQ4K2FLIP4RnJJFlMUn7e121nxXPZtHJ3TEmcBUMOTHrsEGOqUBHt93RNhU2%2FabrbNX0ZkHcqIRKmOA02SSGsc6JkdflcpsL6MhGQiTon1Ev0bstZ9%2FCplyX6%2Bwirpzd98yf41QUF280Uc7q3iGyC1bu26MQjJ3woBpZtU2U7GU09ksXd6NS6GwUO%2F2NsOeIuWdtR8FOwayh4BbJOCL39d5IdIDACoC1n4yespLXIzijrQZBLLql5fubs2h5%2Bb58GioDnmAPZ3Keq17&X-Amz-Signature=0e06c27b8a3af2f6fc1cd6d3588f7b7f240217afb1c3f263bcb1898737e207e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLYJ4HE2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7HVDCg0o6bCCZSNxLDTW8NRASpyCmN5YaEEq1qhLinQIgO%2FMJORkLBQ89P5tn4nZ4ov3swvh8859Y325S6xBdTAkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ%2Fd3vi7Dh7FMhQIircAxdcTX46%2FrJHR8Y6rvpztMgn0vIemCCpc%2FsEJAC4DzFXZJty%2BUCNFkVaHEW5rUgNIcRX7ZogO7rf4urmjsLLtbUKqb3f3aL6XP7QmcIhSgKeYovJvo2bli9iB3Rk6bLuI9H0ehEfRltTT%2Fg1Xg3fc0QMpZ6Ri9mGJ1PR349kL2sEh%2FECYmdHBkMwj5chzYbRGLJ1fAuSmlbjqwztasssuxH2hcK00pA0FoBAz5U8j3YxisaGzy%2F2NObIoPl1ElsL2l%2FmKDzK3gqkokKWJTL0cPMhM4OmfTSX%2FyZnMBcYhkpyJM1RujHa%2FDSkfoWG1rK%2B1UFYwEmUezH2d%2BjmyHXirXHQ9q1HHWzoV1nUhPE%2F0hCH9xQGb5c4RqUexkncG0L1mrmV2DsRCDAIy7BidzCKOnBu4lY9hzsgbyDoID4kczyts2L8DOAOuV3JZYpvxqLOp3zos3vSTXoTF%2FjasAXLnrEax%2BzABYuZ9KAMPmubafnHXKMp%2BTX7d7gMybFbHNFHk1cThshl50xaXXfWrwwm96p78VFOK0ts4Ig5rls28SYAZkBpf2B4tKW60GxxfiCxLigeCMpEzvHJY9aSP2YcYkQ4K2FLIP4RnJJFlMUn7e121nxXPZtHJ3TEmcBUMOTHrsEGOqUBHt93RNhU2%2FabrbNX0ZkHcqIRKmOA02SSGsc6JkdflcpsL6MhGQiTon1Ev0bstZ9%2FCplyX6%2Bwirpzd98yf41QUF280Uc7q3iGyC1bu26MQjJ3woBpZtU2U7GU09ksXd6NS6GwUO%2F2NsOeIuWdtR8FOwayh4BbJOCL39d5IdIDACoC1n4yespLXIzijrQZBLLql5fubs2h5%2Bb58GioDnmAPZ3Keq17&X-Amz-Signature=0540f3ea7d11edd4eb56d8734db3e9917c78d09ed61cb47cb95ca0dcd5386e51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
