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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKG4FWD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCQAPF8cnogTwk8IW2wosa6xgNvxeuQYbrwBCLIJ9tWcgIhAPJTgbnALdjFHNphB4Tk2g6ilUu2fW9jbo1KGizpe1wUKv8DCDcQABoMNjM3NDIzMTgzODA1IgztyuWKrK%2FSQHraW9wq3AMzRyUWi%2BIVLy0KkpUnSNiFI9lW18423p96pvndRgs4hJJRm9%2B%2B6E70cpsKenyBqWTUJkiW2t1cXh530d%2BPbc3nK4Vixs0wwMCYSkOU8yqlP8ThtMBPTijR%2BFMeS%2Bjy%2BvirXKCodNRvpdtnIly3ZY9Ea3Yc2dRH0qBkID8u%2B1%2FJMbYGNUTRYsiCy9f05t7rTFtq8wK7dA%2Fwtel0RKHUvqBZS0Vx%2BwR3hSevWpcHXpugu8dmM83cn4NKi7WFYU05VqHNX1Ik8sWeSvxH046bSUSeqxPJf8Vnfo0CGkk1pRAFL0AD%2BpuLWbK7q6xd5v6Cg%2F9KUXg%2FEWimmCYEceBS9SOt807u1PEP8ElpvyN84%2B5IBNrFlAQA7hp7ZIy7vT45HsnIu7%2Fmo4PqnGuSvFlOp0TKOCVBwkjZlEfA0XxUKUHOeagX0oxrY%2Fjf%2BWAvkrEFAMvdIzq2KeMilUtxxkErNiMhtBqtr0AlLMRt9H%2B4L%2FJDvJIImzOpHiM4R%2FfYTJ3OOL8c%2FtuBsDHqf8ewtL7OOFSCHDRSdKIZzTq%2FO%2FpMlHpTpoU%2FSqkUVwyRrjwCjS6X43J4DWMC8YZ1x4SS3jJdADiQEfLU7JuzkqLv4KGOtlAfIFnE3ltZXIwPpvF6JDCZ99XDBjqkAc27%2Fk9qGI1%2BJ5844pnLENFLtToBmSE%2FT1afJiz6OupMHR4hivFmU7CQ1u7y2ZPccDDMYGqNhpsjTf6N0Wb3TCWelicIuSioIadMjv0%2FE0tE9m4JQ9TVvTBgLz5Q2WWF%2FjTpX1c4VAWEJ%2FvSnFoAL2pqHRxl8vhWUWPSSPUAZ6z96qq4Q17IN5d9jzkQmq4poku8pkH2ZwVAUvjCrdXp3Oa8CS0W&X-Amz-Signature=9c1dd40d3475ce369addcaf8e3550bf8abf5ea7fee0a67d40a5d04eadff0d9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKG4FWD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCQAPF8cnogTwk8IW2wosa6xgNvxeuQYbrwBCLIJ9tWcgIhAPJTgbnALdjFHNphB4Tk2g6ilUu2fW9jbo1KGizpe1wUKv8DCDcQABoMNjM3NDIzMTgzODA1IgztyuWKrK%2FSQHraW9wq3AMzRyUWi%2BIVLy0KkpUnSNiFI9lW18423p96pvndRgs4hJJRm9%2B%2B6E70cpsKenyBqWTUJkiW2t1cXh530d%2BPbc3nK4Vixs0wwMCYSkOU8yqlP8ThtMBPTijR%2BFMeS%2Bjy%2BvirXKCodNRvpdtnIly3ZY9Ea3Yc2dRH0qBkID8u%2B1%2FJMbYGNUTRYsiCy9f05t7rTFtq8wK7dA%2Fwtel0RKHUvqBZS0Vx%2BwR3hSevWpcHXpugu8dmM83cn4NKi7WFYU05VqHNX1Ik8sWeSvxH046bSUSeqxPJf8Vnfo0CGkk1pRAFL0AD%2BpuLWbK7q6xd5v6Cg%2F9KUXg%2FEWimmCYEceBS9SOt807u1PEP8ElpvyN84%2B5IBNrFlAQA7hp7ZIy7vT45HsnIu7%2Fmo4PqnGuSvFlOp0TKOCVBwkjZlEfA0XxUKUHOeagX0oxrY%2Fjf%2BWAvkrEFAMvdIzq2KeMilUtxxkErNiMhtBqtr0AlLMRt9H%2B4L%2FJDvJIImzOpHiM4R%2FfYTJ3OOL8c%2FtuBsDHqf8ewtL7OOFSCHDRSdKIZzTq%2FO%2FpMlHpTpoU%2FSqkUVwyRrjwCjS6X43J4DWMC8YZ1x4SS3jJdADiQEfLU7JuzkqLv4KGOtlAfIFnE3ltZXIwPpvF6JDCZ99XDBjqkAc27%2Fk9qGI1%2BJ5844pnLENFLtToBmSE%2FT1afJiz6OupMHR4hivFmU7CQ1u7y2ZPccDDMYGqNhpsjTf6N0Wb3TCWelicIuSioIadMjv0%2FE0tE9m4JQ9TVvTBgLz5Q2WWF%2FjTpX1c4VAWEJ%2FvSnFoAL2pqHRxl8vhWUWPSSPUAZ6z96qq4Q17IN5d9jzkQmq4poku8pkH2ZwVAUvjCrdXp3Oa8CS0W&X-Amz-Signature=927a666fa416d41b34b346363797c2f09c22b4acc86dd052aceee6195bc6ad48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
