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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLQEPT6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcbHEBXdLSJPUT%2F0wf%2B1NhPE%2FcSHCKDLSXbfEdCsGSNAiADsu8%2BSgZKwW4VzTfTM8A5UFr1bLWh1TI89xdq7aiaMCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnd5gII6KWtlsu89%2BKtwDQC1trRf%2BfFnvcCoZNOjGXp3gUNCmveBWe0LHu2nlAQYw%2B9k5nFNBQV%2BZHJTdfyg1Blpqd%2B4tYxfx5MO7ExiicS%2BvKCP2h3bO%2FY4Z53uzXP10qQb9ZoGoQbt5PcKjl6LSL90Ikow7dQBUNIIWab0PZQ%2FRQM%2Fj1sWzgYrPQq%2F%2F4Cs4NnmvCUS82f2GqZPcurQGJkgmgQg91dryAAkL51rGFa3qeN9R66M9sHj%2BJbBBT6LCG7cVusiNHG8m4BXIwkP7w5EYmYx9YDtWYzAC9LNoiIEdteQry7P%2BPcVqavm3SwZQxeNHrT0mVEa6sT5ZHBcLZ9KAjYtesVGKI0A53l52ofDhhF7HTDI9DRa5j6CnmKO8UEDovy4%2FTyI12avIb7Q%2BPkfEzL4CkysM2aO43RtRI8C6Q0gFe86yuqFFYj%2Be1SqZtIUxTLFAN%2BgmMnUDLQgaOw0n3SIuCkXCxUWuC%2FrIsxntWFHKE8MAf8FDpJMDVsjpo1wo3KvOvECSJS7sKxe01XSd061XibAdpX51QPq8TSXHA4zFiq%2FpyJjowqF3S1M27KcUS4S0vsXVe9FxzgKRKFRTKYWbHWzAvbUXaHD9zCLMECiRThoKoH29%2BlMBG1xyAjkQsRvz98Jb%2F0Mw3djuvAY6pgGOyGC2zxwKCOT2Rrk3sc2ylIYi1dFwVZ6oM%2ByO4Y2bZJV%2Bx6KPcd9C2I7GQ7pU5Dq6NyOty4o3UQOAN98%2BLHt4vhOrU%2FCSvUOg5Z8gsVt6%2BY9DeOwTzPOnt1Ef8B9F0E2rdw1Hw5xYYkfzviQF6DTrfJRq15BpfXVnaMyqWT9SM9r%2FKGtT3n1QeZZWl%2BM9NCMNWp20U1JQQgQDiZ7RE5Dv7VlqfBWC&X-Amz-Signature=a9113a8d9a528882faba1c9de747b2c81772d975bf363183215d866c59f2583e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLQEPT6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcbHEBXdLSJPUT%2F0wf%2B1NhPE%2FcSHCKDLSXbfEdCsGSNAiADsu8%2BSgZKwW4VzTfTM8A5UFr1bLWh1TI89xdq7aiaMCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnd5gII6KWtlsu89%2BKtwDQC1trRf%2BfFnvcCoZNOjGXp3gUNCmveBWe0LHu2nlAQYw%2B9k5nFNBQV%2BZHJTdfyg1Blpqd%2B4tYxfx5MO7ExiicS%2BvKCP2h3bO%2FY4Z53uzXP10qQb9ZoGoQbt5PcKjl6LSL90Ikow7dQBUNIIWab0PZQ%2FRQM%2Fj1sWzgYrPQq%2F%2F4Cs4NnmvCUS82f2GqZPcurQGJkgmgQg91dryAAkL51rGFa3qeN9R66M9sHj%2BJbBBT6LCG7cVusiNHG8m4BXIwkP7w5EYmYx9YDtWYzAC9LNoiIEdteQry7P%2BPcVqavm3SwZQxeNHrT0mVEa6sT5ZHBcLZ9KAjYtesVGKI0A53l52ofDhhF7HTDI9DRa5j6CnmKO8UEDovy4%2FTyI12avIb7Q%2BPkfEzL4CkysM2aO43RtRI8C6Q0gFe86yuqFFYj%2Be1SqZtIUxTLFAN%2BgmMnUDLQgaOw0n3SIuCkXCxUWuC%2FrIsxntWFHKE8MAf8FDpJMDVsjpo1wo3KvOvECSJS7sKxe01XSd061XibAdpX51QPq8TSXHA4zFiq%2FpyJjowqF3S1M27KcUS4S0vsXVe9FxzgKRKFRTKYWbHWzAvbUXaHD9zCLMECiRThoKoH29%2BlMBG1xyAjkQsRvz98Jb%2F0Mw3djuvAY6pgGOyGC2zxwKCOT2Rrk3sc2ylIYi1dFwVZ6oM%2ByO4Y2bZJV%2Bx6KPcd9C2I7GQ7pU5Dq6NyOty4o3UQOAN98%2BLHt4vhOrU%2FCSvUOg5Z8gsVt6%2BY9DeOwTzPOnt1Ef8B9F0E2rdw1Hw5xYYkfzviQF6DTrfJRq15BpfXVnaMyqWT9SM9r%2FKGtT3n1QeZZWl%2BM9NCMNWp20U1JQQgQDiZ7RE5Dv7VlqfBWC&X-Amz-Signature=cb4151a65ab58ffb0efc69180e9d49f204f0e130b75e6c2ba72b9aad9ae1d13c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
