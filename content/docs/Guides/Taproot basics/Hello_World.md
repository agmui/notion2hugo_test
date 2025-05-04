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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WR7ESW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFMKFhHrsQOHQDQPhYpXC7hnN9tYkxUKHW%2Bu4sowGVKIAiEAiMNw%2BuWCEeeiuwCbRx90OL9mDhpixMvY0FmUWUIfgsYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDFDLFP3JKSzPPzHnmircA74%2BKwpY37p2dIxA0DQELT%2FCeKHCkSPzJtDrzFMEvyYJ%2FrJo3icqFsCqmtbR41EtZhpotaTQXkMapkTQ0bZxXQ056Gk4NvZpZfzXDI2Dx1eU0AjGI%2FkUePJwTgBgbThxKgE7ktOtr3gnXSSM%2Fq%2FF1OxzJVPU4TdUW50a%2F0suhhre598asWQGfDk6Fgp4eBIMcjxERm9MD0%2FhaK3dVq5WMD48%2FmugjUcKNxqK4l%2BpSuWU6lkIQdywQi7i1S1w9anXyionb6Pl2ylIxkdA%2BpSFPdx2OHyawbTUU9TjwWWfzxmqQTpu3SoaT0eAS31gsmkcrXzqaLyNOABeUgzCOT9RIE%2FAME%2Fmkvs4FkdZ8GOLPJgjYcveJkmq%2BKht%2BSoVb7h8SOsapS%2F3paZykju7PNjoaDI7aH5tE8Du7g4BNsYAiKNVvFSWUMAipo%2F15I7LX7%2BxFENgVXjdFAngD2kTnWQYWIwE%2F7XQX%2BUqCm71oeUfUkOOTr5gmgfUj6JKMEKvQmrFJU4AE0%2F32RIGrBZuMI%2Bmt9jCZEuHL4DXPsZB3qU%2FxutUzYUUsdXmNvWJlSUC5KbSdOTK7Q2OH1lmsie82Yohn3Z0FVZA5eTAuBvGBI%2FFbWYSxOSxyAmvPe3qXWY%2FMK2I3sAGOqUBFy8dWn66O1vg58siuYWbacicgYcWBeBFsBc9SDc2LyKpRdJHxrIhICVfSVmWvgKi0VcG2R50vOXAcbnWmeTWU9HiP7OyjYgqKzPr3MmUDirtFYIizOCRYdKdcMxMfVx6XWkSc9xR1yMSyvvoslfPFLhTYzT1nW3ZzMMpcivd15ScD9QqPehLWEne8cvKVrJGLqdFDX6lnAbnFChjLXHJDYIPQACz&X-Amz-Signature=bfb9ba35b891093f9ccfb6a88f15487b2a0e93ecf89482136231bda6a1df8dde&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WR7ESW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFMKFhHrsQOHQDQPhYpXC7hnN9tYkxUKHW%2Bu4sowGVKIAiEAiMNw%2BuWCEeeiuwCbRx90OL9mDhpixMvY0FmUWUIfgsYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDFDLFP3JKSzPPzHnmircA74%2BKwpY37p2dIxA0DQELT%2FCeKHCkSPzJtDrzFMEvyYJ%2FrJo3icqFsCqmtbR41EtZhpotaTQXkMapkTQ0bZxXQ056Gk4NvZpZfzXDI2Dx1eU0AjGI%2FkUePJwTgBgbThxKgE7ktOtr3gnXSSM%2Fq%2FF1OxzJVPU4TdUW50a%2F0suhhre598asWQGfDk6Fgp4eBIMcjxERm9MD0%2FhaK3dVq5WMD48%2FmugjUcKNxqK4l%2BpSuWU6lkIQdywQi7i1S1w9anXyionb6Pl2ylIxkdA%2BpSFPdx2OHyawbTUU9TjwWWfzxmqQTpu3SoaT0eAS31gsmkcrXzqaLyNOABeUgzCOT9RIE%2FAME%2Fmkvs4FkdZ8GOLPJgjYcveJkmq%2BKht%2BSoVb7h8SOsapS%2F3paZykju7PNjoaDI7aH5tE8Du7g4BNsYAiKNVvFSWUMAipo%2F15I7LX7%2BxFENgVXjdFAngD2kTnWQYWIwE%2F7XQX%2BUqCm71oeUfUkOOTr5gmgfUj6JKMEKvQmrFJU4AE0%2F32RIGrBZuMI%2Bmt9jCZEuHL4DXPsZB3qU%2FxutUzYUUsdXmNvWJlSUC5KbSdOTK7Q2OH1lmsie82Yohn3Z0FVZA5eTAuBvGBI%2FFbWYSxOSxyAmvPe3qXWY%2FMK2I3sAGOqUBFy8dWn66O1vg58siuYWbacicgYcWBeBFsBc9SDc2LyKpRdJHxrIhICVfSVmWvgKi0VcG2R50vOXAcbnWmeTWU9HiP7OyjYgqKzPr3MmUDirtFYIizOCRYdKdcMxMfVx6XWkSc9xR1yMSyvvoslfPFLhTYzT1nW3ZzMMpcivd15ScD9QqPehLWEne8cvKVrJGLqdFDX6lnAbnFChjLXHJDYIPQACz&X-Amz-Signature=6823bc148fe6e0dbba46e95de698022b1e65073b66d8f1256ed286e70059b4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
