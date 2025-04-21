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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZX4Q47L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC1rIdpFenkm%2F8WYdALhexDAX3HEBRSk%2FuR6oyZMehhMgIhAKXfdEBznbpGDsMmTpsGweeedW2NzbjQpKT9YLsLLYPNKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNwRMyhk5yRzFiTOIq3AOwX475iAsTTgMN1r011T83WssXHCURBLGKYU5GSrqpJ5n19S9XUVRAOq6vSnrP7TqiY%2F88dIyMiK9s9Jn7Nkeqd%2BxKQo3lLxttMENAv%2BgOIj6ohOpFqMl4QmdW%2FIcDYpeoRpYoRS%2FD0Kfp35%2F%2BQ1wJnyz6dmZSCYnPwf%2FeOuWSQI7a1FDr%2Fgm6TYnkxvVDXJSrWpOPOJ4UAPqFo%2BHLLyh1mWCznWwsbN0JqTEEpl4M6XkGRF9HWTE%2BgWoT4VYkuJg9PpqAJUovC4%2Fm0lMxEuKHrPbNuf28pdrW38SND92oumL%2F5D8V4UlCa02nB5sMLy2RmZjNbxQX73ktqYbARFN0LlOYc%2BhXWW9bJjyJAtOrVNJ%2BBAxyu2egWyKU%2Feujgf0U1Uy8WNxYSAJE6jWDgUTtPPFzZFOP4psfww%2Fe1rNVVq9LU62bSqQfUll1obQ5ukYhBgfr642JdAFiDuvdKIxhzF%2FxM3twVKZiyhs5IcehsAKanp%2Bi6A2TboF51q3TiQnNfBKnNrLfsU5uekGZ8UZA%2BGiSNZsuhiXajMo7xcNBmxB%2BMXrhrP42%2FAaeXZ%2BIyXabdIsgqfVKaHcY6e2JtIk1ggP%2FYzy%2BgqB1byr1%2FwczBjbY9U%2FfkU5%2FEO34DzD2oJnABjqkAVtrwLog1p05UTYCea%2FWkRHjLrY%2FueDfgGcKnMiHB5lNuVBdgNfp6araV8NZyleKioVfvkn5OeVUw991lULh8LdpuzrhWVsowcDDllCrq3th0YdtccOVfEEZMvcTLUBX0KyuawD9iPAgxsNE4twNlf21LaLkvWTBrNr6brChCg1MLmR76kUZ0bi9YXR2DLVUjqPpMjzwNvBWz3b6NB1ac1Dddi0g&X-Amz-Signature=e177570da3c829af807ff2b466e8c39ef30440d9e985866db672e906cf7c9a15&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZX4Q47L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC1rIdpFenkm%2F8WYdALhexDAX3HEBRSk%2FuR6oyZMehhMgIhAKXfdEBznbpGDsMmTpsGweeedW2NzbjQpKT9YLsLLYPNKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNwRMyhk5yRzFiTOIq3AOwX475iAsTTgMN1r011T83WssXHCURBLGKYU5GSrqpJ5n19S9XUVRAOq6vSnrP7TqiY%2F88dIyMiK9s9Jn7Nkeqd%2BxKQo3lLxttMENAv%2BgOIj6ohOpFqMl4QmdW%2FIcDYpeoRpYoRS%2FD0Kfp35%2F%2BQ1wJnyz6dmZSCYnPwf%2FeOuWSQI7a1FDr%2Fgm6TYnkxvVDXJSrWpOPOJ4UAPqFo%2BHLLyh1mWCznWwsbN0JqTEEpl4M6XkGRF9HWTE%2BgWoT4VYkuJg9PpqAJUovC4%2Fm0lMxEuKHrPbNuf28pdrW38SND92oumL%2F5D8V4UlCa02nB5sMLy2RmZjNbxQX73ktqYbARFN0LlOYc%2BhXWW9bJjyJAtOrVNJ%2BBAxyu2egWyKU%2Feujgf0U1Uy8WNxYSAJE6jWDgUTtPPFzZFOP4psfww%2Fe1rNVVq9LU62bSqQfUll1obQ5ukYhBgfr642JdAFiDuvdKIxhzF%2FxM3twVKZiyhs5IcehsAKanp%2Bi6A2TboF51q3TiQnNfBKnNrLfsU5uekGZ8UZA%2BGiSNZsuhiXajMo7xcNBmxB%2BMXrhrP42%2FAaeXZ%2BIyXabdIsgqfVKaHcY6e2JtIk1ggP%2FYzy%2BgqB1byr1%2FwczBjbY9U%2FfkU5%2FEO34DzD2oJnABjqkAVtrwLog1p05UTYCea%2FWkRHjLrY%2FueDfgGcKnMiHB5lNuVBdgNfp6araV8NZyleKioVfvkn5OeVUw991lULh8LdpuzrhWVsowcDDllCrq3th0YdtccOVfEEZMvcTLUBX0KyuawD9iPAgxsNE4twNlf21LaLkvWTBrNr6brChCg1MLmR76kUZ0bi9YXR2DLVUjqPpMjzwNvBWz3b6NB1ac1Dddi0g&X-Amz-Signature=99fc0a803616e3691632e799f391005f5c06d86c8a892605f05dceb74f283256&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
