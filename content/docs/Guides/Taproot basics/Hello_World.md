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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDQJV7F%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCUdWlp3wBOTDlV%2FLXFexvGoLhsYVDyNGdk15wIjbcFwgIhAOgDukBpJWafInGcpcKfeqsW%2F1IvB6eTIT4%2B%2BUBt47TNKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6VEEDXWEaI2MgEnwq3AOCRj5Uzzphss64%2F%2FXDAMdbs2HCvRk%2F99kAhITnLIqm5n34OEemuCsKb6DioDizPrvNc3jLYBEU7jb4bEQEwu5EHmb6bQ%2BIlMv9o9%2FRdRj%2Fqyzte%2B1mEqawRK4ZbCW0q%2BeH7NWSfhNRBiZxGm8EQjJDYZs2BuiyfWU9tVmidd5fhq0rqkGbiSbLwBM%2BY6p%2BQ8ig5RXO6fbXaudlokVoOm04joDPWQfqQCjq2M8P4vNWhb0fmBhnHOA%2FUc7sZiHM2R5WtRqrBBSqL9WY8xJrPsItqL2X%2B5MpuLr6RBAxofWhSkJU11dznyZlaymP1g6l8y79PdPv0iIqzXxNNvTnr9%2BfStF4eMUO6S8TKDkYzubY4NgxfWFM7eFL8Pv4W2%2F1RkTqPwrV4wCnw21lbxKHSb3wzeyArDJ1VD%2FMz6TbTp0tHvcdZyJID3cRW%2B6tZ7PkZl%2B4%2FAYPEaud%2FJOOUTrEIGFKFVXjgD5DyxptWIaYfu4Jite3uK%2F84e%2BQ8BhZUTHIrFSp7BWqMSYOzKZ6%2Fuighht%2BCvMEmO0Xi49dbWQtBFbyYIwuc3O7xMjFg737OYrraBSElYhHi32cD2M86VhmJ9Z9huYIcxvD1OBRm%2BSbpG%2F3QTvtbkRlUhkyUlb60jCehvC%2BBjqkAYTw5h225nNLbOaWcG3EBjb4nNZuGruO6pQWjQjz8AzH8pF6kejDwTKgCnNzLx8oAWIfkJZMXLw%2BgITgjjQV15zs5QaFzUV3S4HJHzV7tK%2BIAC%2BXCrr0iTGVjbw%2Fztru0uUzaKg6T4qnSedyutGBN9yaaA4%2B6z5hG4bVbtCw%2FUzRSju4%2F7xf9xsE7khPDo93tbSFp8zX8t%2B7sw0NV2dopALdCV07&X-Amz-Signature=8fad81a67d4afd00da3608242b18041a5692d031041057f349f10baa5fb4cc38&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDQJV7F%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCUdWlp3wBOTDlV%2FLXFexvGoLhsYVDyNGdk15wIjbcFwgIhAOgDukBpJWafInGcpcKfeqsW%2F1IvB6eTIT4%2B%2BUBt47TNKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6VEEDXWEaI2MgEnwq3AOCRj5Uzzphss64%2F%2FXDAMdbs2HCvRk%2F99kAhITnLIqm5n34OEemuCsKb6DioDizPrvNc3jLYBEU7jb4bEQEwu5EHmb6bQ%2BIlMv9o9%2FRdRj%2Fqyzte%2B1mEqawRK4ZbCW0q%2BeH7NWSfhNRBiZxGm8EQjJDYZs2BuiyfWU9tVmidd5fhq0rqkGbiSbLwBM%2BY6p%2BQ8ig5RXO6fbXaudlokVoOm04joDPWQfqQCjq2M8P4vNWhb0fmBhnHOA%2FUc7sZiHM2R5WtRqrBBSqL9WY8xJrPsItqL2X%2B5MpuLr6RBAxofWhSkJU11dznyZlaymP1g6l8y79PdPv0iIqzXxNNvTnr9%2BfStF4eMUO6S8TKDkYzubY4NgxfWFM7eFL8Pv4W2%2F1RkTqPwrV4wCnw21lbxKHSb3wzeyArDJ1VD%2FMz6TbTp0tHvcdZyJID3cRW%2B6tZ7PkZl%2B4%2FAYPEaud%2FJOOUTrEIGFKFVXjgD5DyxptWIaYfu4Jite3uK%2F84e%2BQ8BhZUTHIrFSp7BWqMSYOzKZ6%2Fuighht%2BCvMEmO0Xi49dbWQtBFbyYIwuc3O7xMjFg737OYrraBSElYhHi32cD2M86VhmJ9Z9huYIcxvD1OBRm%2BSbpG%2F3QTvtbkRlUhkyUlb60jCehvC%2BBjqkAYTw5h225nNLbOaWcG3EBjb4nNZuGruO6pQWjQjz8AzH8pF6kejDwTKgCnNzLx8oAWIfkJZMXLw%2BgITgjjQV15zs5QaFzUV3S4HJHzV7tK%2BIAC%2BXCrr0iTGVjbw%2Fztru0uUzaKg6T4qnSedyutGBN9yaaA4%2B6z5hG4bVbtCw%2FUzRSju4%2F7xf9xsE7khPDo93tbSFp8zX8t%2B7sw0NV2dopALdCV07&X-Amz-Signature=11f9a9a1bf4c308d109b9c362fdc67ce4fb7405f3f7c3c05fb81d1e92bff8034&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
