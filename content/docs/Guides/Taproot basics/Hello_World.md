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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZXICPE%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDen9287Ur2uxc0mJknV2ofZOrE30z%2BHRAD5sR75LGvGAiEA%2BOf9hSdmxsI6SberK4wctIGLibTexV1HiZTJHvXvmcMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATvyrB%2F3%2BrSBsBOaircA9v9MzriZaiTsB7r9GPEIoL%2FYNoAP4lw7aIJOhiVlz9geWDzZvMco7mrbnXSr3n89YJL3cP6%2B%2BEcRMVEq%2Fxe%2BSUFVZG3eGKaLw86fMNjrwnFOieohioa%2BEAgSLNOzsiQpTqhrli4zKYXfVQHNDNgLuLwWFvKrC0OU8zG%2F%2Fww1elTIlHfks9%2B7PwWfAv2yIuL%2FQ4NCDajE2wXgF%2BesBx%2BKA6nZOLXLGI6VQOqJ4T7Kx8%2BhkofuCuRxJF4kc09r6OlqeI3bQdf%2B2tdoclT%2BGRgoadUYT%2BUssfWmEJ2kDtGcBTAiRkQDiSEcKCHMYQ4C544QCwWJhThqFohSi8FB80lN2dg42gJTG67ERuJ%2F1mADpmOC939zc0nXJ7v5cPGbU4sBuMhpy1SxL0rRebLTmStkSeqfJ0AvQs5rOkIqUV817NdsR%2Blu%2BOL2HCUbAQ7dJAFMIyDV89IjyHmCXqlQibQPxafDP%2FZANeAjygRY9p5318aPRCjUbGkmNqVwQ%2FRtuw%2Fz%2F9dXyIyePG%2BSdjD8Ln0Uyhm1ckvmb88aeOfDopaGJEUdDlvwttJrmELhhPrtvP5tlUsMyC38ryxXZSG6byLDVtFMsn2kmnCrpZld%2BbTOo4pLB%2FSAHNKHVZJ%2F8zqMOuT8cMGOqUB%2BS3sGzd3A9LTwii6p7i%2Fg7523%2F%2FXxIbuJN5vGfnhdSdbPQ1m47cbLeiWc4puLZnflYaGP4%2Bt%2F7GChYzR4AGaaoMpYzWdRoZ32A7lsNa2tzF6K5WVqJrFstLtVIGbnEvNHt45JvvGkPS9Pa%2F3Il2VUxhD2G%2FeEy24hPftPAlqa30dQcY2cLq4M1nxRS6KNVcWtjrCqGK0fno0vh8mci7ILX4KTXkL&X-Amz-Signature=6af683a1ffe1cd23ca8c18c4ade90eb2edfec673fe05526c79893c590eabb90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZXICPE%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDen9287Ur2uxc0mJknV2ofZOrE30z%2BHRAD5sR75LGvGAiEA%2BOf9hSdmxsI6SberK4wctIGLibTexV1HiZTJHvXvmcMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATvyrB%2F3%2BrSBsBOaircA9v9MzriZaiTsB7r9GPEIoL%2FYNoAP4lw7aIJOhiVlz9geWDzZvMco7mrbnXSr3n89YJL3cP6%2B%2BEcRMVEq%2Fxe%2BSUFVZG3eGKaLw86fMNjrwnFOieohioa%2BEAgSLNOzsiQpTqhrli4zKYXfVQHNDNgLuLwWFvKrC0OU8zG%2F%2Fww1elTIlHfks9%2B7PwWfAv2yIuL%2FQ4NCDajE2wXgF%2BesBx%2BKA6nZOLXLGI6VQOqJ4T7Kx8%2BhkofuCuRxJF4kc09r6OlqeI3bQdf%2B2tdoclT%2BGRgoadUYT%2BUssfWmEJ2kDtGcBTAiRkQDiSEcKCHMYQ4C544QCwWJhThqFohSi8FB80lN2dg42gJTG67ERuJ%2F1mADpmOC939zc0nXJ7v5cPGbU4sBuMhpy1SxL0rRebLTmStkSeqfJ0AvQs5rOkIqUV817NdsR%2Blu%2BOL2HCUbAQ7dJAFMIyDV89IjyHmCXqlQibQPxafDP%2FZANeAjygRY9p5318aPRCjUbGkmNqVwQ%2FRtuw%2Fz%2F9dXyIyePG%2BSdjD8Ln0Uyhm1ckvmb88aeOfDopaGJEUdDlvwttJrmELhhPrtvP5tlUsMyC38ryxXZSG6byLDVtFMsn2kmnCrpZld%2BbTOo4pLB%2FSAHNKHVZJ%2F8zqMOuT8cMGOqUB%2BS3sGzd3A9LTwii6p7i%2Fg7523%2F%2FXxIbuJN5vGfnhdSdbPQ1m47cbLeiWc4puLZnflYaGP4%2Bt%2F7GChYzR4AGaaoMpYzWdRoZ32A7lsNa2tzF6K5WVqJrFstLtVIGbnEvNHt45JvvGkPS9Pa%2F3Il2VUxhD2G%2FeEy24hPftPAlqa30dQcY2cLq4M1nxRS6KNVcWtjrCqGK0fno0vh8mci7ILX4KTXkL&X-Amz-Signature=4767b7ea7b8b1b7725c3d448ceacbdd808012c75980c9fe0eb5ceb33935b6ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
