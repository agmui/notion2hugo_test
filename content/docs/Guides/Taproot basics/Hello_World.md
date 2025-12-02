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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4SM56V%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCAG9uPD8pvsKLRLfvbJShhGVJOYk8UWfXSuIzwUTsaNgIhAII%2BrQvf%2FljRdxRHRDdZXVG%2FJtcO8EgsAd2M96ozgFqwKv8DCAkQABoMNjM3NDIzMTgzODA1IgxY%2BzsDybDsEJ4XZQ8q3APpRQ19rcxW%2Bg4KDctlBHZXA41N8eHxiSxx2qCgrPWdlhVhvStH4D%2FrTGoyVMw4EBUvXpTvFIRGzFqP%2BM3Y4aAu%2F0KBSKkl2yUwPb%2B%2FlcXlyps1sA6yb0X%2BEq4PIpYAk%2BhUsob00Ye2%2BntIb%2FHWjNJYOSD3KpevYi5b1tPAxLsi%2BGOjvbOWXJb1oDGUG3TLQOMVZMN81PNeGoF5uctXiDzQBE91y63fRAzgFkcKgBE0N0NylA5dd6z9xBAdrdrDSYjN4KCFuPkIVD0R2sZRhwCfgnVvXcZNXz576jGbz5v1P4WwHGrKiJd1y30GADkemNvdAeB3Ij6vsnVOtrSW%2FQN%2Fs6X946himmETD2vGR4B1f1HWemlPUVF%2Fb1zzYM9SH57VMmdf5wyl3NxJdD19BQSYEKcLsHR0Sd7svS5HfVyAceFA8I%2BNQB%2BKuIKlmKPCd516RMEekmTBuw%2FTWwIeInJ4xVhE2pIxRV%2FCvWJivDIMF0PkjrF71oHdjhqqtG9f9r0xX3ImPU10DdjjbTcgeS8QYSbdR8Vf%2BVfd%2FwUiYZaRV6dnZdrQY0Waep6%2Fz7spM6TCpNsKiCtJb%2FeHAjFqMaIPBcQzvUrWeIbwjtnZmFPbz07CN4Gsheo%2FxF3VQjDX3rjJBjqkAWKHQUGEaPZuzn168x%2BXlMYuDdBo7IGPaojOuRagvCwmkDxZX6CpRFrJmMT38l8IgaqlLRjovmS48xLT3UcI7xNAOvrv%2FvYZS5arLfbuiY5LT3IxVUEpsejUSbjVUALEtaAezq98VURJIOUJ7gUBnyhU4U7YLqI%2FZ3HmmflAYJTKIoIXV80RfpLbeeYn3pFwwlcwSxq8w8D%2ByIxZt6nsAOYVVJDS&X-Amz-Signature=a6cf9f1e27b1ee7ad0b5e6cc070297b252d508ebf4860c670ee15bd021c6eed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4SM56V%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCAG9uPD8pvsKLRLfvbJShhGVJOYk8UWfXSuIzwUTsaNgIhAII%2BrQvf%2FljRdxRHRDdZXVG%2FJtcO8EgsAd2M96ozgFqwKv8DCAkQABoMNjM3NDIzMTgzODA1IgxY%2BzsDybDsEJ4XZQ8q3APpRQ19rcxW%2Bg4KDctlBHZXA41N8eHxiSxx2qCgrPWdlhVhvStH4D%2FrTGoyVMw4EBUvXpTvFIRGzFqP%2BM3Y4aAu%2F0KBSKkl2yUwPb%2B%2FlcXlyps1sA6yb0X%2BEq4PIpYAk%2BhUsob00Ye2%2BntIb%2FHWjNJYOSD3KpevYi5b1tPAxLsi%2BGOjvbOWXJb1oDGUG3TLQOMVZMN81PNeGoF5uctXiDzQBE91y63fRAzgFkcKgBE0N0NylA5dd6z9xBAdrdrDSYjN4KCFuPkIVD0R2sZRhwCfgnVvXcZNXz576jGbz5v1P4WwHGrKiJd1y30GADkemNvdAeB3Ij6vsnVOtrSW%2FQN%2Fs6X946himmETD2vGR4B1f1HWemlPUVF%2Fb1zzYM9SH57VMmdf5wyl3NxJdD19BQSYEKcLsHR0Sd7svS5HfVyAceFA8I%2BNQB%2BKuIKlmKPCd516RMEekmTBuw%2FTWwIeInJ4xVhE2pIxRV%2FCvWJivDIMF0PkjrF71oHdjhqqtG9f9r0xX3ImPU10DdjjbTcgeS8QYSbdR8Vf%2BVfd%2FwUiYZaRV6dnZdrQY0Waep6%2Fz7spM6TCpNsKiCtJb%2FeHAjFqMaIPBcQzvUrWeIbwjtnZmFPbz07CN4Gsheo%2FxF3VQjDX3rjJBjqkAWKHQUGEaPZuzn168x%2BXlMYuDdBo7IGPaojOuRagvCwmkDxZX6CpRFrJmMT38l8IgaqlLRjovmS48xLT3UcI7xNAOvrv%2FvYZS5arLfbuiY5LT3IxVUEpsejUSbjVUALEtaAezq98VURJIOUJ7gUBnyhU4U7YLqI%2FZ3HmmflAYJTKIoIXV80RfpLbeeYn3pFwwlcwSxq8w8D%2ByIxZt6nsAOYVVJDS&X-Amz-Signature=920a4370afc08620a999100b6023b7ad3154a5e1bccc11849147b93455babd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
