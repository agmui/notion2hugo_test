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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTF2LLF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhdbSkhwmirm530gL999WTdqjXqR076genjKB8n2ESJAiEA%2BrpVCL9fzAJtonIiSE6oCZDjoVMV%2FR8J31JghkQJL4UqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKbDiZsLQ3VFlRUkSrcAwM3qAiDO2WLqbRBr8J%2BAGCvcVjF9JDTY8WPbS5304ApZ0r1dINx3c6qS%2BjeARVpEV26FAzRnnFwL1w3GTh%2Fg%2BIi7YTdy%2FCiYUiIjUTNfOHaj0bykR9lhnEOXOxd2Vi4bBaeo5IW2VBk6j3ea035ESVX26n25HC5RcZZ70pk6S5izphBYXXr8AQdflt2LEU3B3VU2NPjbVsGgEsVBEuVu6aWfrRvAzpO81Nkea28GifrPZtYJ5qFmEqqBXeD4%2FvV33Iu%2F1lhJ9%2BTK%2BLTvjyjdcqcHoaUOZzciUQLISNlIVfg8MGK2faV0lZM9FZ5UX4XTlYjJjIPSMy2lO7Xp%2BqxtateKH9Hkqmntf4b1gJcFIW%2B4fpk4Ms1JJ9S3ghT0u2Y43u75%2BjIf2gyRy9Xa509gy8ZnbCI7UJaoyS4GdZgtgeePPgVBMK8qLBpJHlmxi4XDO%2FnPHiG8BBiOsS2s8tzF%2BQZagXOuwqQ%2FJxkF%2BLD%2FuE3X%2F5aM%2F460I0GTM5e4992VQCi86UyTnufkEXMWi%2B8zGWnFuVU1E42gciVLbtGNxsbt8oDxa3zfSzvYtFa%2F0%2BcSOu5uLKa11nuXz0j9wp8Z5GUvjOSidZuj1e3HTfczAM%2BdCQqwG4i9xhjNulxMPzd4L0GOqUBiOSs727kXNEpjpXa8STP0ui0dtfy6Pegay0oH3XQUpHcVdOGa09VsodAjRSm9y6lI345HGQMb0M1wjjtWT%2F34cD9dsVYQ7P2BDIbvKa%2FF0k0BIkTzMnJsFDBbeVa2vs9piybsu6QIYXLeDNs5zHZq8gFTvoq3yQcgPtKeQ8Vu1OOnCCQoe5RpumppIPgPiYWuL00LKJ%2F9w7uzhlQL9BGGNZauguL&X-Amz-Signature=3e789455fc6263ba716c90422109ccb2ea164f30ba64d13523d7fcd577108eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTF2LLF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhdbSkhwmirm530gL999WTdqjXqR076genjKB8n2ESJAiEA%2BrpVCL9fzAJtonIiSE6oCZDjoVMV%2FR8J31JghkQJL4UqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKbDiZsLQ3VFlRUkSrcAwM3qAiDO2WLqbRBr8J%2BAGCvcVjF9JDTY8WPbS5304ApZ0r1dINx3c6qS%2BjeARVpEV26FAzRnnFwL1w3GTh%2Fg%2BIi7YTdy%2FCiYUiIjUTNfOHaj0bykR9lhnEOXOxd2Vi4bBaeo5IW2VBk6j3ea035ESVX26n25HC5RcZZ70pk6S5izphBYXXr8AQdflt2LEU3B3VU2NPjbVsGgEsVBEuVu6aWfrRvAzpO81Nkea28GifrPZtYJ5qFmEqqBXeD4%2FvV33Iu%2F1lhJ9%2BTK%2BLTvjyjdcqcHoaUOZzciUQLISNlIVfg8MGK2faV0lZM9FZ5UX4XTlYjJjIPSMy2lO7Xp%2BqxtateKH9Hkqmntf4b1gJcFIW%2B4fpk4Ms1JJ9S3ghT0u2Y43u75%2BjIf2gyRy9Xa509gy8ZnbCI7UJaoyS4GdZgtgeePPgVBMK8qLBpJHlmxi4XDO%2FnPHiG8BBiOsS2s8tzF%2BQZagXOuwqQ%2FJxkF%2BLD%2FuE3X%2F5aM%2F460I0GTM5e4992VQCi86UyTnufkEXMWi%2B8zGWnFuVU1E42gciVLbtGNxsbt8oDxa3zfSzvYtFa%2F0%2BcSOu5uLKa11nuXz0j9wp8Z5GUvjOSidZuj1e3HTfczAM%2BdCQqwG4i9xhjNulxMPzd4L0GOqUBiOSs727kXNEpjpXa8STP0ui0dtfy6Pegay0oH3XQUpHcVdOGa09VsodAjRSm9y6lI345HGQMb0M1wjjtWT%2F34cD9dsVYQ7P2BDIbvKa%2FF0k0BIkTzMnJsFDBbeVa2vs9piybsu6QIYXLeDNs5zHZq8gFTvoq3yQcgPtKeQ8Vu1OOnCCQoe5RpumppIPgPiYWuL00LKJ%2F9w7uzhlQL9BGGNZauguL&X-Amz-Signature=27d8e5083be66761ca9c71bb54f71a94c74711f7a62318af0c190d8f8e0ad429&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
