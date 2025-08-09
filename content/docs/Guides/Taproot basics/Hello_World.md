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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYJVKOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAv%2BSkW5YsEkWaSGZyUar55PLCImdRYtoX8kzHKbsO1UAiEA4bxtBWP82TdID37trgsqNgqunskn4bWjEMK2si4EBe0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbp0YidRNeGbRbYtCrcA%2FJceyG4Hz3aWNcL1frmUBTVJPdf2qBHzut0Syv8UN1yhqNvtFvb35vWG64U7H7HIXXeD7uiw0DyXv6yH8Gg55PCdSPlSIL9UJhJRVirgS0bqYRio3YjqUvRUwA9CWknaZFRaExIAklJjQkV4jX%2BH9XdNPcypf84cC73V1tPkKN9e%2BT05%2B78u9top1BFY2gyszRkYNzF4gs6dSH86AkiJkXXVV6%2FbgsBVVn90cZIRywIkaF6doLjzCp6U9XWGyBrXZvgL7Oc5FQQA6pwo8ONnmFLvuITJvFjJ%2FYKwPgBRG8he%2Bb3KLDt6HdPvRTWj%2FmdISfDCVNV4pfRN8YKrlg3uC0WY8yP2EVFlkUByGARKLBWqyqevFVixRmeCJ5S5p%2F8hygJOaeTxf9GMdz76Cf0BeeeMiQHavx%2BvUqTlfY%2BkLOkinwOd47W67BHZ%2BPovEbamfAGlUuhqFtIdO5oiBJmxE0GOriOlD2xdZRBuiSuZqJjcsyKBZxHC2rr3PJBke8aGCaMSQwWA%2FbgPHy3taxhPH9pMASm%2F4gcd2FN4naB7u%2Fht3D7lw6olPThx5l8Slcqzjdm3pjjUdBHpGqYl3raGa36rPN%2FMzsHJDB6nPplrPDKOusaybV8Zeqf5bkxMPfE28QGOqUB4gu4eCcyLJv%2BugMGtnjPuRmjDhA5yXLFZMGHOI03m%2FNdh3C1KFjsW%2BwdYGQ1gDOm6zPMFoo%2BtmHegMRTdfd7VkzGU3l%2BHFdEKyYfKFe%2Fxn0XohLvuHJh967DI1alrkcvKbA5fE0AQfN7doriajWoBS9C5FnRw%2FzQ7kGo8%2BuMxSObAQKBPsLzTOKKFHIbL7DwTZXh3BEmgrI6%2B0rn%2FAv0u%2FjDJjjM&X-Amz-Signature=3964ba5a3ce3d0bd1675b1fe66031052d5ae52681e493acd298933695f666456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYJVKOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAv%2BSkW5YsEkWaSGZyUar55PLCImdRYtoX8kzHKbsO1UAiEA4bxtBWP82TdID37trgsqNgqunskn4bWjEMK2si4EBe0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbp0YidRNeGbRbYtCrcA%2FJceyG4Hz3aWNcL1frmUBTVJPdf2qBHzut0Syv8UN1yhqNvtFvb35vWG64U7H7HIXXeD7uiw0DyXv6yH8Gg55PCdSPlSIL9UJhJRVirgS0bqYRio3YjqUvRUwA9CWknaZFRaExIAklJjQkV4jX%2BH9XdNPcypf84cC73V1tPkKN9e%2BT05%2B78u9top1BFY2gyszRkYNzF4gs6dSH86AkiJkXXVV6%2FbgsBVVn90cZIRywIkaF6doLjzCp6U9XWGyBrXZvgL7Oc5FQQA6pwo8ONnmFLvuITJvFjJ%2FYKwPgBRG8he%2Bb3KLDt6HdPvRTWj%2FmdISfDCVNV4pfRN8YKrlg3uC0WY8yP2EVFlkUByGARKLBWqyqevFVixRmeCJ5S5p%2F8hygJOaeTxf9GMdz76Cf0BeeeMiQHavx%2BvUqTlfY%2BkLOkinwOd47W67BHZ%2BPovEbamfAGlUuhqFtIdO5oiBJmxE0GOriOlD2xdZRBuiSuZqJjcsyKBZxHC2rr3PJBke8aGCaMSQwWA%2FbgPHy3taxhPH9pMASm%2F4gcd2FN4naB7u%2Fht3D7lw6olPThx5l8Slcqzjdm3pjjUdBHpGqYl3raGa36rPN%2FMzsHJDB6nPplrPDKOusaybV8Zeqf5bkxMPfE28QGOqUB4gu4eCcyLJv%2BugMGtnjPuRmjDhA5yXLFZMGHOI03m%2FNdh3C1KFjsW%2BwdYGQ1gDOm6zPMFoo%2BtmHegMRTdfd7VkzGU3l%2BHFdEKyYfKFe%2Fxn0XohLvuHJh967DI1alrkcvKbA5fE0AQfN7doriajWoBS9C5FnRw%2FzQ7kGo8%2BuMxSObAQKBPsLzTOKKFHIbL7DwTZXh3BEmgrI6%2B0rn%2FAv0u%2FjDJjjM&X-Amz-Signature=bf04b432b7df4492cbb8722b4518c4cdb0e40ea43f122c1b1e663f76bb4ec5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
