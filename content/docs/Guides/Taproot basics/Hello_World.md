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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2V3CIT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEWdF3EYS8hiRxwy5KDU2oHn%2BRMOuEyRg99specCkmcKAiEA%2FKi3yoPv4VxR%2FgTz33F1FxGSmLSR615NPIgZ5fxWHgQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDN1TNrOK4luzFW%2B%2FxCrcA0EC%2BFdqMoi0coKXK%2FnRr2q1XtB7%2F8vxqgPHuTQ7g0OpgYoSqiuqqLDoqDRlK1cb1bxmiY947%2FKn9MrwFHwUMKdw8bE842obCJ4m7wzfb4gjxWmGri5swx27rdhioLehEVcCeCNFpOd%2FgIQBwIX4sW4hO%2FcTZA0BgZC2ccDVQ3AzPeeaYfVXVBV2XKA4nuK4AW9KOG61qS3oBEOeDlCZJ2%2BdiMdW7%2FfySsX%2F2iYk1EkY7oNS1ZnXT1gbErw6q86RD8pWPB%2BoNfNA2tz288w8k6BEC3hWNOOmIqiZdCWuMIHWwCTUERpuSLiEKGVGcfdGcgZEKjrTG1FHVQy4LvW9I9SCnNjc8fSty8NFd4s8L71lEix%2BIH3yDgEJQ8TYZ%2BeTKB2HKyhzdtV%2BzbSdEDw67YPN7cqxqo2lo1boVfJ%2B9zErsIoymCYskj1TJhDXb7vwURs0ETAw6BsG1wdekhzYxUR2SmQusbvzNCSW68dFnPS1E5llFOp3aP79jSwDvUzLdKEHfTVyEDcTfMyjWOq11Rj5XKEQ2hcXtW2v3JPkgBTWgnUp3UDJ976nRZIYiu3QeZAaQ9EJa7T1e8J8GQvcFKE9WfQWa6TRV%2BDRcB1KkUgTCr3sPdYydh3W82kxMMj%2BvcIGOqUBX54lWyeNPyUt70vCkIcZWvJcPczuz1vkSt1VDhHWfBflY3s%2BWsDlidy2VITk8rLj5gBRfqyLxgxNzwJNayrV18ar3t%2B0IzBCuWoCHO4FGbZO11NxbD54fIiXHAL3UTkkONKOOk21sauVlbajaWJQpw8kTD3H%2Bii78KBQdp1cIL6hVRqHoUZa9q23WiojkFto4D%2FRuJa%2FEf9TACa8bqcc9mbJItEW&X-Amz-Signature=459d567e581debc3a2465c879840c9d27528bc0bca42115fa7282b1536298034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2V3CIT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEWdF3EYS8hiRxwy5KDU2oHn%2BRMOuEyRg99specCkmcKAiEA%2FKi3yoPv4VxR%2FgTz33F1FxGSmLSR615NPIgZ5fxWHgQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDN1TNrOK4luzFW%2B%2FxCrcA0EC%2BFdqMoi0coKXK%2FnRr2q1XtB7%2F8vxqgPHuTQ7g0OpgYoSqiuqqLDoqDRlK1cb1bxmiY947%2FKn9MrwFHwUMKdw8bE842obCJ4m7wzfb4gjxWmGri5swx27rdhioLehEVcCeCNFpOd%2FgIQBwIX4sW4hO%2FcTZA0BgZC2ccDVQ3AzPeeaYfVXVBV2XKA4nuK4AW9KOG61qS3oBEOeDlCZJ2%2BdiMdW7%2FfySsX%2F2iYk1EkY7oNS1ZnXT1gbErw6q86RD8pWPB%2BoNfNA2tz288w8k6BEC3hWNOOmIqiZdCWuMIHWwCTUERpuSLiEKGVGcfdGcgZEKjrTG1FHVQy4LvW9I9SCnNjc8fSty8NFd4s8L71lEix%2BIH3yDgEJQ8TYZ%2BeTKB2HKyhzdtV%2BzbSdEDw67YPN7cqxqo2lo1boVfJ%2B9zErsIoymCYskj1TJhDXb7vwURs0ETAw6BsG1wdekhzYxUR2SmQusbvzNCSW68dFnPS1E5llFOp3aP79jSwDvUzLdKEHfTVyEDcTfMyjWOq11Rj5XKEQ2hcXtW2v3JPkgBTWgnUp3UDJ976nRZIYiu3QeZAaQ9EJa7T1e8J8GQvcFKE9WfQWa6TRV%2BDRcB1KkUgTCr3sPdYydh3W82kxMMj%2BvcIGOqUBX54lWyeNPyUt70vCkIcZWvJcPczuz1vkSt1VDhHWfBflY3s%2BWsDlidy2VITk8rLj5gBRfqyLxgxNzwJNayrV18ar3t%2B0IzBCuWoCHO4FGbZO11NxbD54fIiXHAL3UTkkONKOOk21sauVlbajaWJQpw8kTD3H%2Bii78KBQdp1cIL6hVRqHoUZa9q23WiojkFto4D%2FRuJa%2FEf9TACa8bqcc9mbJItEW&X-Amz-Signature=0a75c318e642f31206b0904a6731ac9ce630341307482bd53a4cfd6781aed8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
