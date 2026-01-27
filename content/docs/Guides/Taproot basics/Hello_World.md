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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPU5RJR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtjwnr%2F6ZSI9t4f7w6aMzZqvRMiH%2BbUKGRiPGSyIp3EAiBoKguSu%2BTjsw3U4PNfkKdFIby9fKiGO8J6vGIhNjAHQCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPKSBGs9gSA7ChR1MKtwDTdwBnZdDZoyjQaVRGUsJSFHUWMBLIaJV1Vco8Tpt5FPBpbMQYBLChE6tBfGUQq6lV2c%2BfzXsZ%2F0E8tSN8hnjQ181Az7Z4kiOkAagbkqohrPjrUQ7%2FYvPtR7HlLLRKsOBT9fi%2FCRCJRdbEVk%2BTZtb5%2FZnHDEIU0gPD%2B8IEPr3UY2bTBWI56E4p0uNgo5u8ztaIScYprITBe4ht5JBys7igyigdZhbxl9ASFGwCn6E2EzNxEz%2FdaLWXLMczpaIOXpE2sG%2Bdt623Z3XsKbRtRlsJiPX%2BOORkX%2FtP4LRQQUTSEMFB7etx06D4rcOY9QlX9xgYMi3JnI%2BsRncAem4SNLYSfLjWpgh8AuVdjj2tWvBmgKbO%2F8Cn6t28nOpB2k%2BnMghL3bpMHxuueHBm29So%2F1k0nwfP3LXtq7I%2Fvij9jVKl7w2kiPzpXyFrqveNLnjTodQvQcxhaGT%2BK8UBZRF29SUNboZK5XuWG2iXIctg0aq6%2BQOl7eOUVdMnR66aMCuIrTqjWWjBGJqz%2FQ2xD0n6vkdLykGCv31VuaNvt2CThSqZ0a6DVPias%2BaUVducitWyUfgkbFaUStdAO96Wk7qRrkX1bXRNSRMDvqxBK7VxgJuBvpl5rUQw8yhfzZs3YswobLgywY6pgEF8N2DO4u2zTqtg9rpHg1ZcSuOzIbix4EHyCwfHFaEySBQlqawosKLP1uaL4LpNHiWpmZEr1pwLYocj%2BsWpIw6wHKgnUr%2BfoTUPChOY1jUc0e%2FolCkSK%2BbY5l8sz95H3U%2F2ZqNRN%2FL2l15q6P%2FTaIqBowDd6Jcjf59qPDfBVtslJtnFMBmMe4vuuslx0ntphRvq1d0iCJT9o0xBX5%2FZMZpXPu1%2Fq2H&X-Amz-Signature=8fbc4a85c6b32c2936489b841667666c2346bf887de538ffc50c7afb1bce6981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPU5RJR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtjwnr%2F6ZSI9t4f7w6aMzZqvRMiH%2BbUKGRiPGSyIp3EAiBoKguSu%2BTjsw3U4PNfkKdFIby9fKiGO8J6vGIhNjAHQCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPKSBGs9gSA7ChR1MKtwDTdwBnZdDZoyjQaVRGUsJSFHUWMBLIaJV1Vco8Tpt5FPBpbMQYBLChE6tBfGUQq6lV2c%2BfzXsZ%2F0E8tSN8hnjQ181Az7Z4kiOkAagbkqohrPjrUQ7%2FYvPtR7HlLLRKsOBT9fi%2FCRCJRdbEVk%2BTZtb5%2FZnHDEIU0gPD%2B8IEPr3UY2bTBWI56E4p0uNgo5u8ztaIScYprITBe4ht5JBys7igyigdZhbxl9ASFGwCn6E2EzNxEz%2FdaLWXLMczpaIOXpE2sG%2Bdt623Z3XsKbRtRlsJiPX%2BOORkX%2FtP4LRQQUTSEMFB7etx06D4rcOY9QlX9xgYMi3JnI%2BsRncAem4SNLYSfLjWpgh8AuVdjj2tWvBmgKbO%2F8Cn6t28nOpB2k%2BnMghL3bpMHxuueHBm29So%2F1k0nwfP3LXtq7I%2Fvij9jVKl7w2kiPzpXyFrqveNLnjTodQvQcxhaGT%2BK8UBZRF29SUNboZK5XuWG2iXIctg0aq6%2BQOl7eOUVdMnR66aMCuIrTqjWWjBGJqz%2FQ2xD0n6vkdLykGCv31VuaNvt2CThSqZ0a6DVPias%2BaUVducitWyUfgkbFaUStdAO96Wk7qRrkX1bXRNSRMDvqxBK7VxgJuBvpl5rUQw8yhfzZs3YswobLgywY6pgEF8N2DO4u2zTqtg9rpHg1ZcSuOzIbix4EHyCwfHFaEySBQlqawosKLP1uaL4LpNHiWpmZEr1pwLYocj%2BsWpIw6wHKgnUr%2BfoTUPChOY1jUc0e%2FolCkSK%2BbY5l8sz95H3U%2F2ZqNRN%2FL2l15q6P%2FTaIqBowDd6Jcjf59qPDfBVtslJtnFMBmMe4vuuslx0ntphRvq1d0iCJT9o0xBX5%2FZMZpXPu1%2Fq2H&X-Amz-Signature=e3d895c412da5ff791453f560968511b762d0be946ae08308eba03a75a0d2244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
