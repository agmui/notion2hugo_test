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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TR4V3PW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCXH9x84ZFolKaLJa%2F8X8NM98H%2BQPx7AVqu382V7RI2%2FQIgeU3XqnJ1M7pW25CfLHOPtPRqW1FFQkUGBR7A0anD8hcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL6%2BED1sBsusbd9KSrcA7WKBkThBLPwSWsBUfZPpY%2BKFpDpkgy1FsZkroqjdBZCAzIvysNvSOrRG2jSgY9PtnatxhRDMSk%2B1BowhwA5YbsGiLacqXhwOM2H6vld5Sp4Lvv4nqjffZCyoCkGQ4qae6xgJuVDCtqXYfylzDrlfDb1YsdO0LMaltsA9bRkzc021dRwXYxj3aoWP6%2Blz5Ogmkve%2B4dpo9kAK1e%2Fstyo5FImcL4in5ZD1FNEEMqv7yL9t8dZQywFkBaOOFsEjvMpgv3YAMfh%2FfXSdDx16wwy2gfJt4N%2B55CxXkPrE2nhmyW1WRegZJTxJAeEojwEzMCSE%2BJyRZ%2BpAB84yGccFG4Q2KEgfu%2BWf7niGDJ7VL%2FFXprW8aFw0qT4ugIUjFaW5eDUnBFYbEi09rEQ3b1%2BHGGn%2Fnnb4%2FBuIO2nluxca83lx5VKUZsxAaqBZWJdrGrGzsQ%2FoG6W5ZjgLDOowWlJ16yWJmdGTgJ2pfA5sal3cqDiSOAMCmT4hnkXgrhMz9acH%2F6DxByvcuxpW5m9%2B%2FyK3pOz2e5RrOGX4sq5HBtxSG4kOrpnXvqPQ0i7rwe9%2FqogDXIuXuavm5XC6R61iW1ECQC0UaK1Ll77t5Q0k5cwJMmyWkIXs6dQhbmaZflcq4mCMOiov8EGOqUBBPnNhEWg5%2FrnP9wLQlTsCt3Yx2aImwO%2FxjtNYVWthaRh27v9fw18h%2BeD5lSG3dgGioCR0%2FAoJ43zX3OX41pVA85u3VeQxZwYRqjx%2BWdSbZu0cN4FlRzmaNaxfLHqgtGNgQbnyA7HzDwzt%2F3kxipSup7oa%2BXHXhBMWP1A9EMUZNsRPD%2BlvkXCgi8Y%2Fip9WSxqKiVkgXdESulnkloyPrRC%2BqINEJCb&X-Amz-Signature=fc12b94d23eee583bb567fdfc5a7b8841af4a1fc5105f9c0a94caa49d60a2d65&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TR4V3PW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCXH9x84ZFolKaLJa%2F8X8NM98H%2BQPx7AVqu382V7RI2%2FQIgeU3XqnJ1M7pW25CfLHOPtPRqW1FFQkUGBR7A0anD8hcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL6%2BED1sBsusbd9KSrcA7WKBkThBLPwSWsBUfZPpY%2BKFpDpkgy1FsZkroqjdBZCAzIvysNvSOrRG2jSgY9PtnatxhRDMSk%2B1BowhwA5YbsGiLacqXhwOM2H6vld5Sp4Lvv4nqjffZCyoCkGQ4qae6xgJuVDCtqXYfylzDrlfDb1YsdO0LMaltsA9bRkzc021dRwXYxj3aoWP6%2Blz5Ogmkve%2B4dpo9kAK1e%2Fstyo5FImcL4in5ZD1FNEEMqv7yL9t8dZQywFkBaOOFsEjvMpgv3YAMfh%2FfXSdDx16wwy2gfJt4N%2B55CxXkPrE2nhmyW1WRegZJTxJAeEojwEzMCSE%2BJyRZ%2BpAB84yGccFG4Q2KEgfu%2BWf7niGDJ7VL%2FFXprW8aFw0qT4ugIUjFaW5eDUnBFYbEi09rEQ3b1%2BHGGn%2Fnnb4%2FBuIO2nluxca83lx5VKUZsxAaqBZWJdrGrGzsQ%2FoG6W5ZjgLDOowWlJ16yWJmdGTgJ2pfA5sal3cqDiSOAMCmT4hnkXgrhMz9acH%2F6DxByvcuxpW5m9%2B%2FyK3pOz2e5RrOGX4sq5HBtxSG4kOrpnXvqPQ0i7rwe9%2FqogDXIuXuavm5XC6R61iW1ECQC0UaK1Ll77t5Q0k5cwJMmyWkIXs6dQhbmaZflcq4mCMOiov8EGOqUBBPnNhEWg5%2FrnP9wLQlTsCt3Yx2aImwO%2FxjtNYVWthaRh27v9fw18h%2BeD5lSG3dgGioCR0%2FAoJ43zX3OX41pVA85u3VeQxZwYRqjx%2BWdSbZu0cN4FlRzmaNaxfLHqgtGNgQbnyA7HzDwzt%2F3kxipSup7oa%2BXHXhBMWP1A9EMUZNsRPD%2BlvkXCgi8Y%2Fip9WSxqKiVkgXdESulnkloyPrRC%2BqINEJCb&X-Amz-Signature=c3b1464dd2594efbdd5a443cc61a2e7d9f890db1ca3b9b2584bfe7395aeb2080&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
