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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZBTZIS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2FiDNxEaCsFThGzwcfky3qq3zXrHTmS7Ww9JBY6kkSbAIgNEv94%2BnMl1AAT1qp%2F2xAPzoJ8QDXP6IPE%2FJuqRnAkBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB1ADfcw6PA7wzp%2BOyrcA591PlPONdeUo8jcXl9JuEQqya3zAVe%2BQNn405QjLo2wZwNmtNULPzXrmP8n4hwrEhX9zkFfNzCbKKjBKARI15tdxWwz%2BOTZYknDsvmRr%2B9fIu7lviOV0Ej%2BPmq%2FuUvyeLUPyodxy7Hu9xZySMdhhG3HeN2%2BlvRjY%2FMuPsR88JcsAJ58EJaDXiFRc1V9xYv%2BAaUIjyNiUuXlYAPa9xHqgRdHulTn8vVbBvvwimUjCxrrKiMq31m5hhPeN5z%2F%2FMcEb8TOiYJL9J08vKEDqQoob8moPsBX1gkwdozQmjVR7or%2F24wCKzv%2BmLrIoF1MiyI%2FIF0pFxNuEtoaQajRpzKyyj6Kp0%2BtFUL0MLHyai8Hf5RWms8xXv3qiTsYRzQ5eAiMSlsX%2Fs3YGbaU2r3j%2F7ZndcRoicS78nsTahdzI7I5sMorGVggTYOXzLGkQWqfheMvGQfZJcRUf7PwiwuLsCngR%2FErJX7bHTLj1PF1LVdFIY9SzfPfvAfwWpwH7BRT4ckFMaljz3cxuQcw0tuTHokTFGZ3NCHh3Gx0z6HnneiQdqYp4YUJqr9UNT7fEGSyFeWJLrev5Unvka3Qif4lwoGBEigg8HW9YI1Y1R0YR%2FamZSpmD6H920iXdi5aJYMCMJaj%2BsQGOqUBX0F9T%2FUnhBryKU7dvPc8BwefTGjzJuCFk51jizH2Wuqj2BzevpfiuzCwy2hUsyYTxxm6gP9%2FzwEfc2E0GHkQUpzmWbyDFwsJ2OHUKPVh%2FVnLGplp3mJDQnKHRIAlMzCn5HFXuYWaFBlLOAg6vcBgRon4nKiYH3SQ%2B2%2FHvQVN%2FYa2756V%2F5%2F4wSwtZZR0rpWslj41RHuc40rJiM5UATlEdUxtTyH6&X-Amz-Signature=e7aa78f0be1bb1a8db7fd3871e880c641f51313489209d4a314dc07678e95c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZBTZIS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2FiDNxEaCsFThGzwcfky3qq3zXrHTmS7Ww9JBY6kkSbAIgNEv94%2BnMl1AAT1qp%2F2xAPzoJ8QDXP6IPE%2FJuqRnAkBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB1ADfcw6PA7wzp%2BOyrcA591PlPONdeUo8jcXl9JuEQqya3zAVe%2BQNn405QjLo2wZwNmtNULPzXrmP8n4hwrEhX9zkFfNzCbKKjBKARI15tdxWwz%2BOTZYknDsvmRr%2B9fIu7lviOV0Ej%2BPmq%2FuUvyeLUPyodxy7Hu9xZySMdhhG3HeN2%2BlvRjY%2FMuPsR88JcsAJ58EJaDXiFRc1V9xYv%2BAaUIjyNiUuXlYAPa9xHqgRdHulTn8vVbBvvwimUjCxrrKiMq31m5hhPeN5z%2F%2FMcEb8TOiYJL9J08vKEDqQoob8moPsBX1gkwdozQmjVR7or%2F24wCKzv%2BmLrIoF1MiyI%2FIF0pFxNuEtoaQajRpzKyyj6Kp0%2BtFUL0MLHyai8Hf5RWms8xXv3qiTsYRzQ5eAiMSlsX%2Fs3YGbaU2r3j%2F7ZndcRoicS78nsTahdzI7I5sMorGVggTYOXzLGkQWqfheMvGQfZJcRUf7PwiwuLsCngR%2FErJX7bHTLj1PF1LVdFIY9SzfPfvAfwWpwH7BRT4ckFMaljz3cxuQcw0tuTHokTFGZ3NCHh3Gx0z6HnneiQdqYp4YUJqr9UNT7fEGSyFeWJLrev5Unvka3Qif4lwoGBEigg8HW9YI1Y1R0YR%2FamZSpmD6H920iXdi5aJYMCMJaj%2BsQGOqUBX0F9T%2FUnhBryKU7dvPc8BwefTGjzJuCFk51jizH2Wuqj2BzevpfiuzCwy2hUsyYTxxm6gP9%2FzwEfc2E0GHkQUpzmWbyDFwsJ2OHUKPVh%2FVnLGplp3mJDQnKHRIAlMzCn5HFXuYWaFBlLOAg6vcBgRon4nKiYH3SQ%2B2%2FHvQVN%2FYa2756V%2F5%2F4wSwtZZR0rpWslj41RHuc40rJiM5UATlEdUxtTyH6&X-Amz-Signature=6f4f7331c1e68454298e738ae83776696a2bc6b02d2ca51c95176e5c9f7c8657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
