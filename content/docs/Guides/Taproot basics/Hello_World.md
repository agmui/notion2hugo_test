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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIBEXHJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCVPaN0gGVZ%2BnWv%2F3mRuvtWzleiDez3iVJm0V%2BkwY4ggIgEC3lKScrsDZXPLFMNj2fw2t%2BiPIhwFWFxFMDIfxOTa8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKDTBqvtWyFBCBXoAircA8OeEGgGQtENm%2BTO6I5uG5ACrLqTHXtPtZLwtbwsXqRjU11cEYH%2F%2FCSt88%2B047JkwNp%2FuQSZgSNl2ONkxg5jrZDm2nXU7nBECKNSDu%2F6YhbyO5PepNwEgZx340It3BAlsQEIO0XJqc%2BxrNbNqVswvvmmziq2aA%2BJBquyntLZ%2FZreYtYBqpCirrnttH0KbeIwa0MnNlFJwWrgafXMR%2BAGXNCS%2Fh02EHFSOk2%2BiKdVSA9fMsu9eebSLFKPIQZJK9tT%2FnWdTiF9JewudOEbueUG9DxravYgJe%2BIoVGhgVyCQP%2B0s8bm7iGLC0LdRWNmOcVTB1S6zJIzmpCoosE67RnfkSPT9g3tJguU6L412Y2vOFrnLXkDfYahAMrjuVYECofk6rU8Nbbvas1Ss6vdHg0rx35zne9LFlLBkQGVCUDrgNmkN0EE0RUZQyKy5cKc%2FPlFBwPMmBoUkDGJFinXcFOsH2vVOaWzsev%2Fw%2Fi6UuJbDSNhmM%2F55Ehh5X8frwU2z8VnYwlZCgTgO%2BFTOZPaSExER692w6aIoLECe%2BAnmU%2BwrLVW1yutOrs5m8d6%2Fo%2FF7qSa2L35GEpoCbUq53jCxT8Hw1MHjeCHosZ%2Btrw8CJi0pdgpJx%2BZ9VPiL8Nmv6znMJWEssAGOqUBEUZ6I15I3J7WIUQqRaNUJsBsph4qDs8MO%2FbHuFlykVLCZz31SNzVaSf1D2Ccj34k6v8jxDeG4qLF192ilgtaIWW7zxkdJGnT%2FF7EdOlpfqrpj2DkGi15ySzOrJ9kIocKYZRK0tcWHBXqs4MtF%2Bfa5IjUou6Ev7UATA8q%2BJR8lx9vXdKTZbYbD9PtYN%2FcUBzSQAbH40iUCKdjJp98eHJU2O0PYDCi&X-Amz-Signature=6da8c15fa5d48af89355d9992ce50d2d5cf910391c001c272d29196737aeaa3b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIBEXHJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCVPaN0gGVZ%2BnWv%2F3mRuvtWzleiDez3iVJm0V%2BkwY4ggIgEC3lKScrsDZXPLFMNj2fw2t%2BiPIhwFWFxFMDIfxOTa8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKDTBqvtWyFBCBXoAircA8OeEGgGQtENm%2BTO6I5uG5ACrLqTHXtPtZLwtbwsXqRjU11cEYH%2F%2FCSt88%2B047JkwNp%2FuQSZgSNl2ONkxg5jrZDm2nXU7nBECKNSDu%2F6YhbyO5PepNwEgZx340It3BAlsQEIO0XJqc%2BxrNbNqVswvvmmziq2aA%2BJBquyntLZ%2FZreYtYBqpCirrnttH0KbeIwa0MnNlFJwWrgafXMR%2BAGXNCS%2Fh02EHFSOk2%2BiKdVSA9fMsu9eebSLFKPIQZJK9tT%2FnWdTiF9JewudOEbueUG9DxravYgJe%2BIoVGhgVyCQP%2B0s8bm7iGLC0LdRWNmOcVTB1S6zJIzmpCoosE67RnfkSPT9g3tJguU6L412Y2vOFrnLXkDfYahAMrjuVYECofk6rU8Nbbvas1Ss6vdHg0rx35zne9LFlLBkQGVCUDrgNmkN0EE0RUZQyKy5cKc%2FPlFBwPMmBoUkDGJFinXcFOsH2vVOaWzsev%2Fw%2Fi6UuJbDSNhmM%2F55Ehh5X8frwU2z8VnYwlZCgTgO%2BFTOZPaSExER692w6aIoLECe%2BAnmU%2BwrLVW1yutOrs5m8d6%2Fo%2FF7qSa2L35GEpoCbUq53jCxT8Hw1MHjeCHosZ%2Btrw8CJi0pdgpJx%2BZ9VPiL8Nmv6znMJWEssAGOqUBEUZ6I15I3J7WIUQqRaNUJsBsph4qDs8MO%2FbHuFlykVLCZz31SNzVaSf1D2Ccj34k6v8jxDeG4qLF192ilgtaIWW7zxkdJGnT%2FF7EdOlpfqrpj2DkGi15ySzOrJ9kIocKYZRK0tcWHBXqs4MtF%2Bfa5IjUou6Ev7UATA8q%2BJR8lx9vXdKTZbYbD9PtYN%2FcUBzSQAbH40iUCKdjJp98eHJU2O0PYDCi&X-Amz-Signature=b77abb23c26febd0d4b2fa0f777934d249f533e2bd156a2c6c9d706ca8db6271&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
