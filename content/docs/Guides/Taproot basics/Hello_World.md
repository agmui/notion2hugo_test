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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RXR4S%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIE48rZ%2BTs7uK7NuF6Cp1YI6asLt3gygaIBnhtbcrSTMAAiAZfBce8y4aN3O83DGwmvuENwJkg1Q8hm3K3fHJZHuH0yr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMwOf0zFLhs8Qqry6HKtwDg%2BSKx1ztgzmflKkogYgJ%2Bf35xIDpNo4wWyFcoNwVEC3%2F2TzTpwfRTuGxazvaSRByQmWWkXzOFtpEeNbuxUt%2F0e0CUsQJUxIEbIk7jTC1B%2FqozZGTwCAgMmZSC7K0ssba2lX4tupfj20D6%2FBxcLRoMcGR5Hlc8bvZnZN0flZSRVD%2FbzP3fxP5YInx8L0WqtQEIBMpI2B10wTDEa3n68vh%2BUU09aAYhVqWiPz5Ch78Aya1fo9GfYVhNYoyuQKtDpI0l%2FvSmNKNxBsMnfN41%2FSXO9cjWrpAJ%2FFSbPU%2FWKSfoPEkTLbSyEywxs7h%2BWUJJqCE3uD%2F4Qf7CwdytL9zjIbTKcIMpU792mTznpNfjAW1bkFMRHLiQeqyHWXCbAxqSYiix95daU7BDviOXAZGzheZtAk97trz%2BkHuxJp2VFpqC%2Bv7pcFfebW1PGbgOvNZLgRJHpTAkM%2Fc%2FaauQmo%2BpLS%2FQO8lpAz%2F9uxjyIlivl6ERgCq9swXP%2FsGnzp2DIqnue29a07qldgUZ0t%2FnXBdfYM%2Fc1rt%2BckVzWS0%2FPsAu75lDZXZ8UISnWdgiDB4IySMSfih8Bsn3IyiHuvPtX0fMt6vbweK0%2Fr7JmBLQYogbOQwEqCqwfx5c8BfHiov9%2BUwm6rywgY6pgGdq%2BQxXPD3kQ222jMARWO4Kb0lcIu69ybhfG8%2BUlkHAvjmjRo2S0kD%2BhDRnnVrCAJfX%2FW1KSLR2YloipOaOZtFlaWOrKEkosgAnzAioMuRLRsiPB%2FvB66y2Uf4r%2FmKpX37HeRxlAEv48zlwqRzwaghCDlas5eKW3Rmo9D6QtPH6DTTwhZdZmPcDeuIoFTu9PePaVfhtR227vV3jhxpbMICPbJfp9u9&X-Amz-Signature=7ce217a8d745a57b80fa9adbe0242a43797a2653e6fed0ce60f604c01c66ad46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RXR4S%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIE48rZ%2BTs7uK7NuF6Cp1YI6asLt3gygaIBnhtbcrSTMAAiAZfBce8y4aN3O83DGwmvuENwJkg1Q8hm3K3fHJZHuH0yr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMwOf0zFLhs8Qqry6HKtwDg%2BSKx1ztgzmflKkogYgJ%2Bf35xIDpNo4wWyFcoNwVEC3%2F2TzTpwfRTuGxazvaSRByQmWWkXzOFtpEeNbuxUt%2F0e0CUsQJUxIEbIk7jTC1B%2FqozZGTwCAgMmZSC7K0ssba2lX4tupfj20D6%2FBxcLRoMcGR5Hlc8bvZnZN0flZSRVD%2FbzP3fxP5YInx8L0WqtQEIBMpI2B10wTDEa3n68vh%2BUU09aAYhVqWiPz5Ch78Aya1fo9GfYVhNYoyuQKtDpI0l%2FvSmNKNxBsMnfN41%2FSXO9cjWrpAJ%2FFSbPU%2FWKSfoPEkTLbSyEywxs7h%2BWUJJqCE3uD%2F4Qf7CwdytL9zjIbTKcIMpU792mTznpNfjAW1bkFMRHLiQeqyHWXCbAxqSYiix95daU7BDviOXAZGzheZtAk97trz%2BkHuxJp2VFpqC%2Bv7pcFfebW1PGbgOvNZLgRJHpTAkM%2Fc%2FaauQmo%2BpLS%2FQO8lpAz%2F9uxjyIlivl6ERgCq9swXP%2FsGnzp2DIqnue29a07qldgUZ0t%2FnXBdfYM%2Fc1rt%2BckVzWS0%2FPsAu75lDZXZ8UISnWdgiDB4IySMSfih8Bsn3IyiHuvPtX0fMt6vbweK0%2Fr7JmBLQYogbOQwEqCqwfx5c8BfHiov9%2BUwm6rywgY6pgGdq%2BQxXPD3kQ222jMARWO4Kb0lcIu69ybhfG8%2BUlkHAvjmjRo2S0kD%2BhDRnnVrCAJfX%2FW1KSLR2YloipOaOZtFlaWOrKEkosgAnzAioMuRLRsiPB%2FvB66y2Uf4r%2FmKpX37HeRxlAEv48zlwqRzwaghCDlas5eKW3Rmo9D6QtPH6DTTwhZdZmPcDeuIoFTu9PePaVfhtR227vV3jhxpbMICPbJfp9u9&X-Amz-Signature=a969fd251525e50d6839b6ad0c6c9084cdb9c20c4617c1e9046e4035e40335ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
