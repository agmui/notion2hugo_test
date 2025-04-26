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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTWFJPD%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi%2BfsDKRdsEPVIgd7RxGIMZB8o1sVs4xaPRByjHKwn8AIgftwwInaXnB0HgFlNNBdZgsJvNPb5V9IPByKFn7Ri590q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIzlW5D1Dbur3ZYRlircA%2Bpg4LAzoRRJc6PTh5frc3rCfJZwiJj9t%2BzDBud%2B5TetFHbcUi7Qb%2Bxm5O6hhA36rmxq95i7i6Gau2VRxWr6gIlelBBkQGjzbkgNEkkGTWUJEtsK90CAp6557Pm0eslT49ROaqwwzSQPOEsJnNc5cS7GS37KR3qSEcoaRutCax8vit9sdcXni4sv3UMap%2F02hRdiuDwG8etJlWbFX5yJ1ioBhUm0xTj44du9etXclLn80K9FC%2Bnv6JfVlJnFKKV7zZXUgCNxb7cSJL%2FCUvQ8OJEaZjveNlnshz9Xnq4NX%2B4eIZP1FX2hQHP9uDZ7clqJu7yO9mK6rCCn7c4lU6nkI4hPTsQK6C5rnCgT%2BkOMyCmJdlL%2FUwm73QOfeE%2BKZ2hNTs1UC4AZbYmIfpsKmDMPqlDxg5zqMLt9WOQc6jFHRw0Y30wvoGrZCyQaX1Hhd0AeR8qm%2BIPM8bv7dnWZSmii6wxh5T7CYR5z9A27VgSm89emdIY74VANkByvTUU%2FxzG%2BbYPY2BVmLiIJNrqweum5mVF8IM6MT2Zv5PWbY5au9eVoZfka1oHe%2BuTFXzRxzY1Za2OCdO8TDnVGV5DVmEF4YRin3ox3h2vfOElSIVuPNb19k8bmL83isWvJiPHUMMKitcAGOqUBhA%2BWtg7zJrOQiV4xPGF%2B5hBGiu3Hn7EJ%2Frkw3Ci4n3BfcnCf1REQdFRTYqHN6IBAF9VnNIt4ZgeWNPAWxZxvlmV1hpnMOWUvgR1AxRzCD%2B4GVfm81XfMxctRqUNrPpwgffljutsdtMWxdhiwOscJ6TTIYhb%2Biud1EH5cQBuorn7NuBBuNgNe8FzAhfqRrSuM4D5Nz6HGuqVzfbk%2BDYxT4yBms3C5&X-Amz-Signature=aebd2254db1a2e55b40721cd00ed45aa8c31aa13e354017bb8d1399e5c58dc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTWFJPD%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi%2BfsDKRdsEPVIgd7RxGIMZB8o1sVs4xaPRByjHKwn8AIgftwwInaXnB0HgFlNNBdZgsJvNPb5V9IPByKFn7Ri590q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIzlW5D1Dbur3ZYRlircA%2Bpg4LAzoRRJc6PTh5frc3rCfJZwiJj9t%2BzDBud%2B5TetFHbcUi7Qb%2Bxm5O6hhA36rmxq95i7i6Gau2VRxWr6gIlelBBkQGjzbkgNEkkGTWUJEtsK90CAp6557Pm0eslT49ROaqwwzSQPOEsJnNc5cS7GS37KR3qSEcoaRutCax8vit9sdcXni4sv3UMap%2F02hRdiuDwG8etJlWbFX5yJ1ioBhUm0xTj44du9etXclLn80K9FC%2Bnv6JfVlJnFKKV7zZXUgCNxb7cSJL%2FCUvQ8OJEaZjveNlnshz9Xnq4NX%2B4eIZP1FX2hQHP9uDZ7clqJu7yO9mK6rCCn7c4lU6nkI4hPTsQK6C5rnCgT%2BkOMyCmJdlL%2FUwm73QOfeE%2BKZ2hNTs1UC4AZbYmIfpsKmDMPqlDxg5zqMLt9WOQc6jFHRw0Y30wvoGrZCyQaX1Hhd0AeR8qm%2BIPM8bv7dnWZSmii6wxh5T7CYR5z9A27VgSm89emdIY74VANkByvTUU%2FxzG%2BbYPY2BVmLiIJNrqweum5mVF8IM6MT2Zv5PWbY5au9eVoZfka1oHe%2BuTFXzRxzY1Za2OCdO8TDnVGV5DVmEF4YRin3ox3h2vfOElSIVuPNb19k8bmL83isWvJiPHUMMKitcAGOqUBhA%2BWtg7zJrOQiV4xPGF%2B5hBGiu3Hn7EJ%2Frkw3Ci4n3BfcnCf1REQdFRTYqHN6IBAF9VnNIt4ZgeWNPAWxZxvlmV1hpnMOWUvgR1AxRzCD%2B4GVfm81XfMxctRqUNrPpwgffljutsdtMWxdhiwOscJ6TTIYhb%2Biud1EH5cQBuorn7NuBBuNgNe8FzAhfqRrSuM4D5Nz6HGuqVzfbk%2BDYxT4yBms3C5&X-Amz-Signature=f6d63ea8e2bd11a8a4aa45676abd5c86ad31841c06bfec92a8215540fff50505&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
