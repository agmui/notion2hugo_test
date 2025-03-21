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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMTGIKH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID%2Bdzs9XW9NwNr7cE4MAmTr2hPAXj%2BJ06J9%2B2mtZpnNLAiEA%2F72brvBpc%2FEqcxMurRqgrVmJhhKFR4lQwAG2bCs7tWkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5ISmHJyKsuyBrqDircA7sJaIymy8aw3XcjRRjtjDDSSqjgAwIbFxJw5AJXNHYZPdC6skLFgYdlo%2Bt61WTwmY5JxEtKqlCh90t52sI8ehC3w%2BExwzRYOM7DsLtjfiGQvSuAoO9GBn0JB8ju3IeW%2FNSlOqwWVsNu0pCbUARc5GBO%2BU2cQvxCVGDeV2YzSIXdCWTwmK13X1ActlHA%2FDlVJhNt1QmWf7uqkWmyw%2FHXVOPDbroJ3n4NKbMrTqQxlWoWobbNFz04nRRXCEECeEfGae%2Baf29lSAciuBpbpN8tF2bddoISFiyd%2BHeChj0ZjKznz23Ra0apGrnBul%2Be1dFRhaKQ6Iv9Tkzae0eYlEW8NfyZDoxzfnlai%2B4h87iwOog0bPqh5RBApgmk8MVH1LuY1gQxzar%2Fozr%2BFJE5dW6xkHdgRwafWIFrDys6KsDnM%2FtqxsWprsnOeBnKgfTAPawlS%2FjPo2%2FgQ9%2Bl%2FjIdIucbDaGNBHKUxzqHrTVIAf1kOtjbkyAXzWUf6sUBDz47ui7SHiyydjeamrNHkj04LTetYfJXFCRe%2FyfYqgzju4xK3M01czOzks2%2Fy9MhfDakL9t84G1UiHALHdFTdOAT6WT%2BFG03mfAIat9Khv3rq60LoFNVFNkWZ5ksYX1jrq%2BYMNqZ9b4GOqUB%2Fjn8zLPx41ZMUalnhHTHYl4FcD23%2Fz9yaeYDJN4mmY%2FrDXZ1ZlP7aAWfdgfYIPFwUHt%2F%2BO4IyLI8aEpXa1eUoywDxN2RJcLKH5FxySNC3aGoK9IWwKIlTt2YBYYscQv9Nsd1DNmD3NtyoxbL6P1T1OJmyj9DamavLKwJ1QodhRzRDLKCZEauJ3hwdYStksNp8Atjnid78qjyb96jmYHyw5TEYcde&X-Amz-Signature=5ce2fbee4c2fbb3a5d2af9d982af5f5098b6049cf301e5b41c381d9674c6f599&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMTGIKH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID%2Bdzs9XW9NwNr7cE4MAmTr2hPAXj%2BJ06J9%2B2mtZpnNLAiEA%2F72brvBpc%2FEqcxMurRqgrVmJhhKFR4lQwAG2bCs7tWkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5ISmHJyKsuyBrqDircA7sJaIymy8aw3XcjRRjtjDDSSqjgAwIbFxJw5AJXNHYZPdC6skLFgYdlo%2Bt61WTwmY5JxEtKqlCh90t52sI8ehC3w%2BExwzRYOM7DsLtjfiGQvSuAoO9GBn0JB8ju3IeW%2FNSlOqwWVsNu0pCbUARc5GBO%2BU2cQvxCVGDeV2YzSIXdCWTwmK13X1ActlHA%2FDlVJhNt1QmWf7uqkWmyw%2FHXVOPDbroJ3n4NKbMrTqQxlWoWobbNFz04nRRXCEECeEfGae%2Baf29lSAciuBpbpN8tF2bddoISFiyd%2BHeChj0ZjKznz23Ra0apGrnBul%2Be1dFRhaKQ6Iv9Tkzae0eYlEW8NfyZDoxzfnlai%2B4h87iwOog0bPqh5RBApgmk8MVH1LuY1gQxzar%2Fozr%2BFJE5dW6xkHdgRwafWIFrDys6KsDnM%2FtqxsWprsnOeBnKgfTAPawlS%2FjPo2%2FgQ9%2Bl%2FjIdIucbDaGNBHKUxzqHrTVIAf1kOtjbkyAXzWUf6sUBDz47ui7SHiyydjeamrNHkj04LTetYfJXFCRe%2FyfYqgzju4xK3M01czOzks2%2Fy9MhfDakL9t84G1UiHALHdFTdOAT6WT%2BFG03mfAIat9Khv3rq60LoFNVFNkWZ5ksYX1jrq%2BYMNqZ9b4GOqUB%2Fjn8zLPx41ZMUalnhHTHYl4FcD23%2Fz9yaeYDJN4mmY%2FrDXZ1ZlP7aAWfdgfYIPFwUHt%2F%2BO4IyLI8aEpXa1eUoywDxN2RJcLKH5FxySNC3aGoK9IWwKIlTt2YBYYscQv9Nsd1DNmD3NtyoxbL6P1T1OJmyj9DamavLKwJ1QodhRzRDLKCZEauJ3hwdYStksNp8Atjnid78qjyb96jmYHyw5TEYcde&X-Amz-Signature=0d8454cb546de8d23f403fa33f2ee84111d283e4fa83e0b06e44697563b042e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
