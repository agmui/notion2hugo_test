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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWO2WVV3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCAkDmxIutSKxQkgjT7ZupckoVDxnZx%2F%2FkZKZAO%2FAbt0AIhANUJUDMotQLMGqKUeE4OvFHlnK%2FhWk0zJOH9RbIPBviOKv8DCF8QABoMNjM3NDIzMTgzODA1IgxtitP95RAN9mye%2BlAq3AMkz8s%2Fo9knaw80m1d4vuRozo8C1%2BnQELgtuvgFZCtpM6Uy2Nu%2BXubU6a5hxd1GMwjzJgi6IJ4JRTxhDi7HByFozf6INEmMFWoKktIxCeBU2tKNOtFUkxTaYPZexl2Es5lMpPe%2FBZcHEkO85i4ToYciIrfeEmNHjis4HiguXwE%2BQO6UxGcax7s5E62skKUeeLDN413J%2BsHjVWxWD7DdsbF5Y5plQCuc4AA2AZeyP73ZIFb%2BmPD9byclavn662IMJTOabNp3nqQZe6AZlX9dCvPFzlAWOkQ0U0JIsr6jc9MUra%2FcihtWNgBVM8codCyM%2Bbx10V4ymgG1hp4ICA5r07Lb%2F4mIiYSMrt3acvG0k0jKHuUUV61MEfbEde5Oyo2hWspptY1ExXS9NIKGV0P1FTZ5dEkvIAuc2IyMaaZANzMQv9WDjdOLZDRqI4rTLXhdlDctloyghwt%2FC%2FhuV1F2vP%2FJpQBBf2xhUMsHFDNwNgWCqnsTgNtqrIfHBSac2gbQv4EbyUGfVwohTs7dU6%2BqkbIzGlgVetrMi3cbHSP8YLYwHVb33FshAx%2F4VXEz0zk9NS1TTXQfLKAN5vakGWDw6okCU1lJhcCJw%2Fxs9cUducj3fUlDG%2Bel3pGB77rQ0TDMycDCBjqkAV8vAfie28c0RlxqnNJF7BYWXQX%2BrfUyOPCZiWZYJcqa7IlKF%2BK0LEDkL6NuNREEyE6WK1vLv297Q5wag2pxYs5a%2FdJ0aKI7axieAiNRHSYJuHaPcSGB0pIoFg5wDplmt%2F3ePSyeEjzs2WNmN4VnJCY6FOO3cOYy8xPLHpJ1a%2F0p%2BfvVyrHNHBnzz0L00xb8xcv%2BUc7LcHTWcsmxbQaXq2PG7Tgf&X-Amz-Signature=bb828cdc80d659b3f085c742531b7be664defe4ec7716b1ad337a766459aff5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWO2WVV3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCAkDmxIutSKxQkgjT7ZupckoVDxnZx%2F%2FkZKZAO%2FAbt0AIhANUJUDMotQLMGqKUeE4OvFHlnK%2FhWk0zJOH9RbIPBviOKv8DCF8QABoMNjM3NDIzMTgzODA1IgxtitP95RAN9mye%2BlAq3AMkz8s%2Fo9knaw80m1d4vuRozo8C1%2BnQELgtuvgFZCtpM6Uy2Nu%2BXubU6a5hxd1GMwjzJgi6IJ4JRTxhDi7HByFozf6INEmMFWoKktIxCeBU2tKNOtFUkxTaYPZexl2Es5lMpPe%2FBZcHEkO85i4ToYciIrfeEmNHjis4HiguXwE%2BQO6UxGcax7s5E62skKUeeLDN413J%2BsHjVWxWD7DdsbF5Y5plQCuc4AA2AZeyP73ZIFb%2BmPD9byclavn662IMJTOabNp3nqQZe6AZlX9dCvPFzlAWOkQ0U0JIsr6jc9MUra%2FcihtWNgBVM8codCyM%2Bbx10V4ymgG1hp4ICA5r07Lb%2F4mIiYSMrt3acvG0k0jKHuUUV61MEfbEde5Oyo2hWspptY1ExXS9NIKGV0P1FTZ5dEkvIAuc2IyMaaZANzMQv9WDjdOLZDRqI4rTLXhdlDctloyghwt%2FC%2FhuV1F2vP%2FJpQBBf2xhUMsHFDNwNgWCqnsTgNtqrIfHBSac2gbQv4EbyUGfVwohTs7dU6%2BqkbIzGlgVetrMi3cbHSP8YLYwHVb33FshAx%2F4VXEz0zk9NS1TTXQfLKAN5vakGWDw6okCU1lJhcCJw%2Fxs9cUducj3fUlDG%2Bel3pGB77rQ0TDMycDCBjqkAV8vAfie28c0RlxqnNJF7BYWXQX%2BrfUyOPCZiWZYJcqa7IlKF%2BK0LEDkL6NuNREEyE6WK1vLv297Q5wag2pxYs5a%2FdJ0aKI7axieAiNRHSYJuHaPcSGB0pIoFg5wDplmt%2F3ePSyeEjzs2WNmN4VnJCY6FOO3cOYy8xPLHpJ1a%2F0p%2BfvVyrHNHBnzz0L00xb8xcv%2BUc7LcHTWcsmxbQaXq2PG7Tgf&X-Amz-Signature=d5b09f983c31c15a4738d76282a08f84aeae748a7c7d57888c6fc766449a797b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
