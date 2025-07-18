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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R45I5MJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDqunvSO0%2BWNCEKnvlIoyWA36FuhhQUHshP9QB8i4qWawIgMoauzAwgrge5ZZGnqGpbL7QclXbBsASARnX6ApcERWoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxRtIDYixwCbAfs6yrcAxwRLXO9%2BMP3dW6n2TGuPQ2Vq0QRf8SSFMTzpnx9h0K2jzrmcQS2aqkLLRXYbEA%2FpsVnwJm8BdO9nF23OEnzqP8RyUgdRFfUGyQMaavWh1ta1OkgE6vpGWKPDuKYXvQWJnYNSSmsC60Dvap4D8LhtXWM43B4557eb6%2F2p8WtJiaF%2BdC0n7Y1WeePydCJ8S%2F8Mc96RNmgnmDtXUd57Hxm5%2FJ66nhN9yJVBtt%2BjvUN9fhKoIvbJSkv%2FA%2FTyw9ZbJm1avCi9DnbaUZCz3TmVt7a%2BYGla8yJMHwNhtUqsc5Y%2F8iPYX%2F7uGfz%2BL9zh1mDitD2okKG%2BHV84wGqwTHX2lyW0xubcNpfFPLbL94Y4qELXVZukrs%2FBEUcvfRZLMC9niIGbHsPY5ZqTvUufoU8sFtXfYIhe92gnJPZncPnwWRC0JLgSNtbW5Tfl1ROG1z%2BwT%2F%2BPgKe1dNEcaGymR6s8KexXOboecDmLRmVQvjJJuF5CIeSHGO%2BUnM7sDm7hwM3iFl%2Fs6fLg2AyUBVDtN9vbI%2FvFj000WdSWceEQpPqvL8DPu5yP1y5%2FelDw99cPegKOKROdWn1Z%2BsNjMMNzoNjT7FjZLfRMsklJQFxH1qJibvuvPmllv9kWwQK2Esm6VoTMPvP6MMGOqUBoxtCFE5U3caNJmh%2F9iBw0nAYl08rFn96yogX2xgufqgBocuTupB0gNmitRBhoTnoqFay8hjZRa6epMhuQvGvbi009YUwr57fTAi%2Bas%2FsyXHctRfsT%2BCl3RgFkQufCql9N3Z7uK%2Fnt9Lt7%2F0ROHjxCh%2B%2FoFRtyqGEEHovMQ3omdVbg%2B4xPVPdsxfJKD10mRXaf0LK%2BzB1mQ6%2Fflnzf7ucKrmDIumq&X-Amz-Signature=564fce42de55e829db38c717e98fbc964660638c36ceb490cb23558c36b8ca62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R45I5MJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDqunvSO0%2BWNCEKnvlIoyWA36FuhhQUHshP9QB8i4qWawIgMoauzAwgrge5ZZGnqGpbL7QclXbBsASARnX6ApcERWoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxRtIDYixwCbAfs6yrcAxwRLXO9%2BMP3dW6n2TGuPQ2Vq0QRf8SSFMTzpnx9h0K2jzrmcQS2aqkLLRXYbEA%2FpsVnwJm8BdO9nF23OEnzqP8RyUgdRFfUGyQMaavWh1ta1OkgE6vpGWKPDuKYXvQWJnYNSSmsC60Dvap4D8LhtXWM43B4557eb6%2F2p8WtJiaF%2BdC0n7Y1WeePydCJ8S%2F8Mc96RNmgnmDtXUd57Hxm5%2FJ66nhN9yJVBtt%2BjvUN9fhKoIvbJSkv%2FA%2FTyw9ZbJm1avCi9DnbaUZCz3TmVt7a%2BYGla8yJMHwNhtUqsc5Y%2F8iPYX%2F7uGfz%2BL9zh1mDitD2okKG%2BHV84wGqwTHX2lyW0xubcNpfFPLbL94Y4qELXVZukrs%2FBEUcvfRZLMC9niIGbHsPY5ZqTvUufoU8sFtXfYIhe92gnJPZncPnwWRC0JLgSNtbW5Tfl1ROG1z%2BwT%2F%2BPgKe1dNEcaGymR6s8KexXOboecDmLRmVQvjJJuF5CIeSHGO%2BUnM7sDm7hwM3iFl%2Fs6fLg2AyUBVDtN9vbI%2FvFj000WdSWceEQpPqvL8DPu5yP1y5%2FelDw99cPegKOKROdWn1Z%2BsNjMMNzoNjT7FjZLfRMsklJQFxH1qJibvuvPmllv9kWwQK2Esm6VoTMPvP6MMGOqUBoxtCFE5U3caNJmh%2F9iBw0nAYl08rFn96yogX2xgufqgBocuTupB0gNmitRBhoTnoqFay8hjZRa6epMhuQvGvbi009YUwr57fTAi%2Bas%2FsyXHctRfsT%2BCl3RgFkQufCql9N3Z7uK%2Fnt9Lt7%2F0ROHjxCh%2B%2FoFRtyqGEEHovMQ3omdVbg%2B4xPVPdsxfJKD10mRXaf0LK%2BzB1mQ6%2Fflnzf7ucKrmDIumq&X-Amz-Signature=78ce1bb256dc97b895fb2051eac1e17cc026a56a4fb1166d7968339fc7c07086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
