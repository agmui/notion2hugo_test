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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAW7Q4B%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBMwiFiVEDwRmNlFaaz%2FVmoyXQpc6QwpGbkqYkfwKNRfAiEA1KUCupCSOTSZR5C8eXpfDes9N3cKcZ6GLf2iJIrNxCwqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDse3SlzR%2B6RPBzrVCrcAzXoOygJ3I%2F0%2Be2rjcrc%2BrWvIsWItxsU7GCelG9cxaJVF3TBYcNKaQFE3cBK%2BvSJTwetwtm9tjdhHxHH%2BP6ANNX45uSXgADJD%2BOK%2FbPhaGzRriEmplaC4NPYOQPuLSp%2F5cDMwMcTqvQfw%2Fx5SogZ1Z6VZBubItcoemx1SC9w0cIqe4SW7b1kaZkSvzDl35PCSVekI7bFbtffwKKglKDHicy2ZgTBSc4C9P5%2FkrATZl8ZNBgb%2Feel34qK9SY7CP1ZVKT%2B%2FH%2BnVZL4PwRZiYMms%2Bd2VTfUSLCtcbgETy3DN81EZqjKq4ttIklZI%2FNB3WF9XQ5doK1BVUNG4ZbYZJe2yq6CtntFhle5QQEBXeTleTAcPGhCGdDZPJJpUeJV9CS0JvBmr3SiFT5nfn%2BpGX5bFvwRxlHL8bSSg5yj%2BXhFBgIObXhejkXr%2BUTBPrjzKtslzx%2FIeInG8vYh1rR%2F4Au1Oa%2Bw0KIjnQyps%2FNnRfzxIR2JcO%2BKju6oilPTTqphOVy5T6wAzjdnChY3GGvA1evh0OcFlSDxhSxkmxdYL5sg6s04FtGVrDK%2FuJGycJq16ECZ9OvUNkxNW0742NKs%2BdYqKgq3mSmAvOqu881nYPjQHgiCG8RuEqcI3juKKb5aMNuGsL8GOqUB4INaZ9Ki0px1XZRcJmiLUnPf%2Fq4EieALoDezZ4QEW02XvG22Ep%2BnoJI0nNZyG%2FmyIfu0wDKi9JUm9fHnbL1I9q%2FxMocOrURb%2BuYsGMH57jvNA4PSqX9Q7RrDuxsTUozHqREqTeH7Yyg3NQbNyYtmH0chexT3ESsGIQ%2F4FZexQxwss2QtkuwyxQmtDx3vNch5enXSb3Wkwdg7ORlW4Exd08a1RQoG&X-Amz-Signature=47f6031d11dabbab5dda2e1dd415bf468b058d35d217dc22495e5c673a418864&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAW7Q4B%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBMwiFiVEDwRmNlFaaz%2FVmoyXQpc6QwpGbkqYkfwKNRfAiEA1KUCupCSOTSZR5C8eXpfDes9N3cKcZ6GLf2iJIrNxCwqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDse3SlzR%2B6RPBzrVCrcAzXoOygJ3I%2F0%2Be2rjcrc%2BrWvIsWItxsU7GCelG9cxaJVF3TBYcNKaQFE3cBK%2BvSJTwetwtm9tjdhHxHH%2BP6ANNX45uSXgADJD%2BOK%2FbPhaGzRriEmplaC4NPYOQPuLSp%2F5cDMwMcTqvQfw%2Fx5SogZ1Z6VZBubItcoemx1SC9w0cIqe4SW7b1kaZkSvzDl35PCSVekI7bFbtffwKKglKDHicy2ZgTBSc4C9P5%2FkrATZl8ZNBgb%2Feel34qK9SY7CP1ZVKT%2B%2FH%2BnVZL4PwRZiYMms%2Bd2VTfUSLCtcbgETy3DN81EZqjKq4ttIklZI%2FNB3WF9XQ5doK1BVUNG4ZbYZJe2yq6CtntFhle5QQEBXeTleTAcPGhCGdDZPJJpUeJV9CS0JvBmr3SiFT5nfn%2BpGX5bFvwRxlHL8bSSg5yj%2BXhFBgIObXhejkXr%2BUTBPrjzKtslzx%2FIeInG8vYh1rR%2F4Au1Oa%2Bw0KIjnQyps%2FNnRfzxIR2JcO%2BKju6oilPTTqphOVy5T6wAzjdnChY3GGvA1evh0OcFlSDxhSxkmxdYL5sg6s04FtGVrDK%2FuJGycJq16ECZ9OvUNkxNW0742NKs%2BdYqKgq3mSmAvOqu881nYPjQHgiCG8RuEqcI3juKKb5aMNuGsL8GOqUB4INaZ9Ki0px1XZRcJmiLUnPf%2Fq4EieALoDezZ4QEW02XvG22Ep%2BnoJI0nNZyG%2FmyIfu0wDKi9JUm9fHnbL1I9q%2FxMocOrURb%2BuYsGMH57jvNA4PSqX9Q7RrDuxsTUozHqREqTeH7Yyg3NQbNyYtmH0chexT3ESsGIQ%2F4FZexQxwss2QtkuwyxQmtDx3vNch5enXSb3Wkwdg7ORlW4Exd08a1RQoG&X-Amz-Signature=1f56ec59764f2acc8d47eee22624dc4596f8abc10aabe787e69c4f0be7107296&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
