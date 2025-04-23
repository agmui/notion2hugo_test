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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7CXPYC7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZMZzlQEFwcJfLZxSdYkJS25ZNX7DlO3kQOuHx%2BXM6WAIgb5Q%2Fb7OsxaGXzQoewrPR%2B9CJVHlQ871BEL%2FmGKqottEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KliTLlbkRJBR69ircAzp9I%2FlyHm2ZhYKMfRF38Fv4bcgk5n26R9nuX1rx8RTvy0XqTvawhShwge%2BZAq8kABbAx2o6NNms%2B20Qn%2BaS5iMWoSSsaaLZK5p44UTRTcb7VV09BRfcQN8zg%2BfVOwdNK6Gq5sJ3TAXoLoCIoFuezf5oelWLFj9bj8fKtZk7ww8dphZuAL%2FNuraGKUso%2BkzD80ftHUpR5FELKREu%2F%2FTuUpTVKWneXLh0%2FV3ePjIxefGHU4IwYvyq8mErg1E8XS9WvroXP24yeGqa93ElSdSJprSwkDwqrMfN3nBxvy3e1gE3y6H%2FhYaDpgCTAsJU0FZGStVHzc8AxO0DNW6Rx2xUwwXBZQAqqMvt13W%2BTfvPmIyTmDs5mW8JNulOXAglXgefA1i%2BCFeHC86v0UIFYqOy5ngUp1QQyYUHRMdvkZGDEBvZrLb3TGeEmLCsuW7qZrlrKFadFv2jkhfPLgRI1Ib0%2FDthJDD3H926ZS%2B%2FgioKX27LZphtMa8UHEeiSqM7cTIXL1T7RG5Hbl5YddE7ATtZ0WW%2FSIuOF0iTVq9zj5h3EgT2jWcL9yCrRXK2zuDj2fs6nhsxtNT%2BPXKewxLMeyelQr5beRaZNo7lEdVx2paslN60NHzbtT2uEguEuV8tMKWUosAGOqUBc4yA2W4Lkw9cFcOo3OtpvV1oEPF%2BoZbWlac%2BtDUGxAVgzL8WT%2BlpECiOVRPy6Pt0y5PQuecGaP1G%2Bt3MDZL0meME%2BWp2ePgz0YDEFy4gLdrxFWrSky8CJoxbjt%2FxlNsV3R%2BCvug3kqd62O7nQrWbWVeLAq1jBJ5zb14V%2BqD5QpAGMWBL6nU%2B2Rl%2B0ZyaDBMWnQeWBq0bvj610S54Hsam2%2BLpyPCD&X-Amz-Signature=7401640f62fcd4eeac2a6acc33311b6938f351d2afa6403cfad26265afc74a27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7CXPYC7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZMZzlQEFwcJfLZxSdYkJS25ZNX7DlO3kQOuHx%2BXM6WAIgb5Q%2Fb7OsxaGXzQoewrPR%2B9CJVHlQ871BEL%2FmGKqottEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8KliTLlbkRJBR69ircAzp9I%2FlyHm2ZhYKMfRF38Fv4bcgk5n26R9nuX1rx8RTvy0XqTvawhShwge%2BZAq8kABbAx2o6NNms%2B20Qn%2BaS5iMWoSSsaaLZK5p44UTRTcb7VV09BRfcQN8zg%2BfVOwdNK6Gq5sJ3TAXoLoCIoFuezf5oelWLFj9bj8fKtZk7ww8dphZuAL%2FNuraGKUso%2BkzD80ftHUpR5FELKREu%2F%2FTuUpTVKWneXLh0%2FV3ePjIxefGHU4IwYvyq8mErg1E8XS9WvroXP24yeGqa93ElSdSJprSwkDwqrMfN3nBxvy3e1gE3y6H%2FhYaDpgCTAsJU0FZGStVHzc8AxO0DNW6Rx2xUwwXBZQAqqMvt13W%2BTfvPmIyTmDs5mW8JNulOXAglXgefA1i%2BCFeHC86v0UIFYqOy5ngUp1QQyYUHRMdvkZGDEBvZrLb3TGeEmLCsuW7qZrlrKFadFv2jkhfPLgRI1Ib0%2FDthJDD3H926ZS%2B%2FgioKX27LZphtMa8UHEeiSqM7cTIXL1T7RG5Hbl5YddE7ATtZ0WW%2FSIuOF0iTVq9zj5h3EgT2jWcL9yCrRXK2zuDj2fs6nhsxtNT%2BPXKewxLMeyelQr5beRaZNo7lEdVx2paslN60NHzbtT2uEguEuV8tMKWUosAGOqUBc4yA2W4Lkw9cFcOo3OtpvV1oEPF%2BoZbWlac%2BtDUGxAVgzL8WT%2BlpECiOVRPy6Pt0y5PQuecGaP1G%2Bt3MDZL0meME%2BWp2ePgz0YDEFy4gLdrxFWrSky8CJoxbjt%2FxlNsV3R%2BCvug3kqd62O7nQrWbWVeLAq1jBJ5zb14V%2BqD5QpAGMWBL6nU%2B2Rl%2B0ZyaDBMWnQeWBq0bvj610S54Hsam2%2BLpyPCD&X-Amz-Signature=a6f54d7416ea676315c66730036e0905b5139fef9e2c2490522b7e8a4df3efdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
