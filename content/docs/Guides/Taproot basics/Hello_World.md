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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOLIIQA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChcSal906JEBhEQ172I4H%2Flbein0M3VPOZf05vvN7klgIgH3htp9TP%2FidG7Ev%2FJ4T%2Fu5EfUwWsUvGgwvzz1xsxs0oqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0YYbZU6Vkj4PiWmSrcAyIyWHVoh00MVz9TjQmPW0Oq63EVqJJEEHv5q7FWZA1y6vZ4wbxRQ9%2BSluMf54FSMPAMWvj424Cw0ldnJxSeoNZ2Mbq9Oj27%2FpAvkAekg72dm2GooQodkwxG01YCU%2BpbQLSQFsg5N3qDqZZCCOeJIICZJD5HJN%2FAp7LQ5iCN7SIFQuYuhzVhkpu%2BPn3KdPkMfC0JU69ENsokxJUCRzq3UiZe7gJjr6Ue3CCJkbf30%2F7Os5URKq43WlESK1LAByi3N%2FOwdsGyWuuA1AoMMX86eEMPIAu6gCoyXJFL6V%2FZK5IBPkTDEBYo3TO8u8cl9Ekx1Unw%2Fjp6gp%2FDWhFdj4w%2FGrbUAkhauOtApQ1iMRvjkzo5%2FykbaFouN3s%2BwPf4giola4CDqw9uOXdxMc0ulRVKsDAeVKq7G7MCc37AiT8%2Bl5pb26OaMzMhTf%2BIK6kbalZ44O%2F4KgrYjbfwLhomHWH5xC25x74yR8iVWFMsuTk6AbQHzUCELHRazH3wAnqH9cTiDwK2n0Yxhw9%2Fnnim%2FvVSzwUdH%2FMVeC6NPATqk7os%2B71Rf3dXWmmhEd6FxNjdMSI7X6m9XqVPwTIQHBJR8nacHOzc5hgTIvx3aMBnHb%2FSr3Ee5Vg2l45BT1ekAZuiMM%2F8jMAGOqUBnSiNVOU7FLoKyAOL1JLKbEyuuVK%2BqRBID25rw95hRyJ9I07ksawfGTdTs0xhaERlYCwlfo%2F9nIr7mLyPhvLDXZ6xuEWobjAjKffitzufrTCRjoysqIYDcNH%2BJ%2BKxTYV3zy9TYWHirURGIRRLJEzwrqETNcQQR0KUyeNF092dtCAXb94XVRl1ICqhNPhQq3jbMcnusJVIOKS3frIO1FKtNsr7LQHS&X-Amz-Signature=6087b0da24ef424d38943dff1adeff12217ccbf9883118b7411a0fdd3e81c8af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOLIIQA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChcSal906JEBhEQ172I4H%2Flbein0M3VPOZf05vvN7klgIgH3htp9TP%2FidG7Ev%2FJ4T%2Fu5EfUwWsUvGgwvzz1xsxs0oqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0YYbZU6Vkj4PiWmSrcAyIyWHVoh00MVz9TjQmPW0Oq63EVqJJEEHv5q7FWZA1y6vZ4wbxRQ9%2BSluMf54FSMPAMWvj424Cw0ldnJxSeoNZ2Mbq9Oj27%2FpAvkAekg72dm2GooQodkwxG01YCU%2BpbQLSQFsg5N3qDqZZCCOeJIICZJD5HJN%2FAp7LQ5iCN7SIFQuYuhzVhkpu%2BPn3KdPkMfC0JU69ENsokxJUCRzq3UiZe7gJjr6Ue3CCJkbf30%2F7Os5URKq43WlESK1LAByi3N%2FOwdsGyWuuA1AoMMX86eEMPIAu6gCoyXJFL6V%2FZK5IBPkTDEBYo3TO8u8cl9Ekx1Unw%2Fjp6gp%2FDWhFdj4w%2FGrbUAkhauOtApQ1iMRvjkzo5%2FykbaFouN3s%2BwPf4giola4CDqw9uOXdxMc0ulRVKsDAeVKq7G7MCc37AiT8%2Bl5pb26OaMzMhTf%2BIK6kbalZ44O%2F4KgrYjbfwLhomHWH5xC25x74yR8iVWFMsuTk6AbQHzUCELHRazH3wAnqH9cTiDwK2n0Yxhw9%2Fnnim%2FvVSzwUdH%2FMVeC6NPATqk7os%2B71Rf3dXWmmhEd6FxNjdMSI7X6m9XqVPwTIQHBJR8nacHOzc5hgTIvx3aMBnHb%2FSr3Ee5Vg2l45BT1ekAZuiMM%2F8jMAGOqUBnSiNVOU7FLoKyAOL1JLKbEyuuVK%2BqRBID25rw95hRyJ9I07ksawfGTdTs0xhaERlYCwlfo%2F9nIr7mLyPhvLDXZ6xuEWobjAjKffitzufrTCRjoysqIYDcNH%2BJ%2BKxTYV3zy9TYWHirURGIRRLJEzwrqETNcQQR0KUyeNF092dtCAXb94XVRl1ICqhNPhQq3jbMcnusJVIOKS3frIO1FKtNsr7LQHS&X-Amz-Signature=153a7a536f80ad56d40ee549cf21cdde32568de232c1d5e3e9cd1e8f5564b222&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
