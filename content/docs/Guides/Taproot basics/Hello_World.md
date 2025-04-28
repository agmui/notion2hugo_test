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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLEV4LC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTq9AkGD%2Fzt4gXRvsBAqItsswag6KeyihcykazhDCITwIgZIEKd7Tb8Jt8T06YD2GPLg7eBniTbLk7e52ZqDNDGsUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPgD0wJf6FchX9opiCrcAwTPMFpXSbYAxrIzYfRe%2BjQf0YydHBgxVbjJPkCAmM5cpAfDGZJnBZWKUXCBd29OPNzYdOlSpatMumtp9YFW%2BWcA07yzCnsWgzlLJW7%2FvoPJbWisWXmBneBpx77m%2Fu%2B9VKy1CX9sh%2FbT2yxCiwFeGEpUMFS983zWPCkH2rlCmiAuncxLc0%2BGhhhtebXoSmfMBrWvaA0R1A2Pp9ykd00EYC4nEs74Z7mxgkqRLdsDZEg5d4KTEIGgSXMq%2FlkgX85DYKDHRg5D7YoUETPEjI52zLzpj1yphjaAq0sx54eB5sXNec7BoMh78w7silqHNqjbvoMjHVqf1Yvx%2BQawdq870bRZuXTlBQMq2JZfeoig%2F221GitXAaHDq3HbvsgYmu6kav3xbmdXhSQUoYNSIe9FC%2Byq%2FZDooekog6j4CMOOg64rP83HmbC9DlPiPEPipfpI85CoY7q6%2FMk5q%2FYfoeoSJ30lxeXCCgwL2TbJ4SBdyxZf3%2FlRFNU0n9mQ2aNTIHRkOOMwH6U1EyXjYxQW27DwrO152dStE5fVWKFL1UvS8gacOkqTooR%2BsaCNV67vaYlZoqaQf2%2FYe846KniRvZnPr7rG3CT5XvpHrnEnKQ%2F%2FugzEH46yjwPCHzX8o6zpML3mvMAGOqUBRwfl05G1HldOvTG%2FgaZVD7r6QF%2BA%2Ft7lW5DdIJiItrI1XmWK8MQ9hSj7ojVnmxu6QKkN4WdGSMzq%2BJ0K%2BkOXbMw78vnZQAwVmHJyAZazbhVNBMIiKXDGGpg8nhgG3w5ZC16j6PYXXVphe2UzEOFZvTtZ0AVIMxRMOB6dk6sGJXs4G9Bp%2FGl7p0fBggFGU72CHA0ruNiQDkAq6fp6H4U2SNdtSlxh&X-Amz-Signature=e44cae08738fbfca8639d4dcccce3a71a27978b1e9fb310647ff452c3f0548ec&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLEV4LC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTq9AkGD%2Fzt4gXRvsBAqItsswag6KeyihcykazhDCITwIgZIEKd7Tb8Jt8T06YD2GPLg7eBniTbLk7e52ZqDNDGsUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPgD0wJf6FchX9opiCrcAwTPMFpXSbYAxrIzYfRe%2BjQf0YydHBgxVbjJPkCAmM5cpAfDGZJnBZWKUXCBd29OPNzYdOlSpatMumtp9YFW%2BWcA07yzCnsWgzlLJW7%2FvoPJbWisWXmBneBpx77m%2Fu%2B9VKy1CX9sh%2FbT2yxCiwFeGEpUMFS983zWPCkH2rlCmiAuncxLc0%2BGhhhtebXoSmfMBrWvaA0R1A2Pp9ykd00EYC4nEs74Z7mxgkqRLdsDZEg5d4KTEIGgSXMq%2FlkgX85DYKDHRg5D7YoUETPEjI52zLzpj1yphjaAq0sx54eB5sXNec7BoMh78w7silqHNqjbvoMjHVqf1Yvx%2BQawdq870bRZuXTlBQMq2JZfeoig%2F221GitXAaHDq3HbvsgYmu6kav3xbmdXhSQUoYNSIe9FC%2Byq%2FZDooekog6j4CMOOg64rP83HmbC9DlPiPEPipfpI85CoY7q6%2FMk5q%2FYfoeoSJ30lxeXCCgwL2TbJ4SBdyxZf3%2FlRFNU0n9mQ2aNTIHRkOOMwH6U1EyXjYxQW27DwrO152dStE5fVWKFL1UvS8gacOkqTooR%2BsaCNV67vaYlZoqaQf2%2FYe846KniRvZnPr7rG3CT5XvpHrnEnKQ%2F%2FugzEH46yjwPCHzX8o6zpML3mvMAGOqUBRwfl05G1HldOvTG%2FgaZVD7r6QF%2BA%2Ft7lW5DdIJiItrI1XmWK8MQ9hSj7ojVnmxu6QKkN4WdGSMzq%2BJ0K%2BkOXbMw78vnZQAwVmHJyAZazbhVNBMIiKXDGGpg8nhgG3w5ZC16j6PYXXVphe2UzEOFZvTtZ0AVIMxRMOB6dk6sGJXs4G9Bp%2FGl7p0fBggFGU72CHA0ruNiQDkAq6fp6H4U2SNdtSlxh&X-Amz-Signature=9e197dc9d0228a092391be0f8543979da2a7cbbc7c61ccc758d00b2182d3efb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
