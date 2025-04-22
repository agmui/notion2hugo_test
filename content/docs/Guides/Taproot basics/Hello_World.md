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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWGJJAM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIB5Y%2FPGpzFXiIddy2%2BBOMEfB1%2F6Lo0%2Fo1z%2BiiOPRn%2BVGAiEA4kOcHnDQQalTXZ70U6vSK0jQ82NO6rQYjZ3fAPA0yL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGeaBv3U5Ghd4UXfCrcA%2BhDWsWPpFV4tPzqGMPqtnR3npUoOFTxe5DsLq%2By%2FlLzZx9bsGm3rnCb%2BRtcOcDho0yfgujsDPx3gKdb7%2BnC6oq6x1YDo%2Bc%2BjnFJ9YiREKZ3F85T1QYIK0m1I8iqfKilLs3w0GIqJovKta33ueMBOkrbnmBb7HbiNoCa%2BXCrkB7dLr2a7YQXWNrGwkzJJW1DqL60myzdoxF13eog%2F9ZpY7CTbFsDOk%2FXKYxZc9Szmx7fqv%2BnD4wdIMqUD38na0mLaSzzmF5r03wjk2W6W35j723yEEdCyJGmeC6yswgvsozkEft5VySrv0qZkqVG9kJrYD6VH1s6l%2BQAFMHyd%2BlNjwzoQAdfyeL29PbEGSwdL%2FdHEkC7%2FqXoc4oOuN113HDsB5k9AcF4qbyc8tfk3ClP88l3Lg5WlajMG5TLOD4OkT8cVBfowrgwaCK9bzmNY44%2B%2Bvo5QfBsuN5ClJSdmAANiUjJlLSgKWIaZ6v7%2BxV1KcOlwqGbxIBauD18KKrRXbU4hG0jIZ%2Bc08DDv72ymSfj%2FQ5NzvK1yOXBHdRfsaXfPTixR3OCWvfEdtj1SFqAboVlfij%2B5LzD4t726tFXI8wWv8pm3U%2BX7HkCcs8KQpgfu8F57wm03u8z2RN%2BgWaYMLbwnMAGOqUBUUHv8RgKi2k7gt9ViI%2BZve2lWB%2BIhs8twgeuHwjbb0C%2BvL7XvdVl7ne1HUpLPHZdXoLVA3EtmuSOhwjQMKKEW9hm6m0y0eYNo%2BuvJYHIL13Zbuj%2F7gD48DRzFwVibslGEzYi9fBwhYYVYYa2VxprK4%2BCBhyTM6lsgs%2FyTUvg2QleVc2otc%2FcObSRYzvWfRf0TUwjSVR1keszJa7pxVwMy%2BMVkK96&X-Amz-Signature=010902282e7c6e8c429c18fd04a863caa1330310ff9400be0eb024c753259bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWGJJAM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIB5Y%2FPGpzFXiIddy2%2BBOMEfB1%2F6Lo0%2Fo1z%2BiiOPRn%2BVGAiEA4kOcHnDQQalTXZ70U6vSK0jQ82NO6rQYjZ3fAPA0yL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGeaBv3U5Ghd4UXfCrcA%2BhDWsWPpFV4tPzqGMPqtnR3npUoOFTxe5DsLq%2By%2FlLzZx9bsGm3rnCb%2BRtcOcDho0yfgujsDPx3gKdb7%2BnC6oq6x1YDo%2Bc%2BjnFJ9YiREKZ3F85T1QYIK0m1I8iqfKilLs3w0GIqJovKta33ueMBOkrbnmBb7HbiNoCa%2BXCrkB7dLr2a7YQXWNrGwkzJJW1DqL60myzdoxF13eog%2F9ZpY7CTbFsDOk%2FXKYxZc9Szmx7fqv%2BnD4wdIMqUD38na0mLaSzzmF5r03wjk2W6W35j723yEEdCyJGmeC6yswgvsozkEft5VySrv0qZkqVG9kJrYD6VH1s6l%2BQAFMHyd%2BlNjwzoQAdfyeL29PbEGSwdL%2FdHEkC7%2FqXoc4oOuN113HDsB5k9AcF4qbyc8tfk3ClP88l3Lg5WlajMG5TLOD4OkT8cVBfowrgwaCK9bzmNY44%2B%2Bvo5QfBsuN5ClJSdmAANiUjJlLSgKWIaZ6v7%2BxV1KcOlwqGbxIBauD18KKrRXbU4hG0jIZ%2Bc08DDv72ymSfj%2FQ5NzvK1yOXBHdRfsaXfPTixR3OCWvfEdtj1SFqAboVlfij%2B5LzD4t726tFXI8wWv8pm3U%2BX7HkCcs8KQpgfu8F57wm03u8z2RN%2BgWaYMLbwnMAGOqUBUUHv8RgKi2k7gt9ViI%2BZve2lWB%2BIhs8twgeuHwjbb0C%2BvL7XvdVl7ne1HUpLPHZdXoLVA3EtmuSOhwjQMKKEW9hm6m0y0eYNo%2BuvJYHIL13Zbuj%2F7gD48DRzFwVibslGEzYi9fBwhYYVYYa2VxprK4%2BCBhyTM6lsgs%2FyTUvg2QleVc2otc%2FcObSRYzvWfRf0TUwjSVR1keszJa7pxVwMy%2BMVkK96&X-Amz-Signature=3980f070ea00388c68196cda616ac2e4d574a203ea819f473e7e0f11489dcbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
