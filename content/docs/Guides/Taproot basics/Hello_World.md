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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37YXUFU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdIgPsA5KveyEyselTvdOzGR2bseTUobMuW9m4xY%2BszAiEA92qBGLe%2B3Y7LxlZ%2FltacwdP%2FkSKwN3a%2BskvRPTd1AkEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJoKPj9OrZjNyTPZircA3f7fEDBdT3c55hSpaWPalzZ045jhFCL4Xz66wEU8xG%2F3IHauaS7oGdDG0jmLAfTsiEbH%2FvGNph8rqRDMW%2FKWxecfC7rKNQWDfMNkhGVFAbKUPe%2FsxEYA0uxu3eYfZ9LOmOGgQNexR6PPYm2WNRX87KPHvw0GYnzeO32JpYqZVkL3Lh37ZKsM35Y9VVu1eK7zISgErPIy319zuyxaWu46trfZSEdBJly734%2FyHY1QDsu1WDAX4UtiNH1fizvwEwoJfv81DHmCAtSfI82fl139p48ORgI65stgB5Ho9q619QFC7jtpCMLNoHs%2BxeqYkRaRzCeG6y9rmZvWX9FnnEkvetGKJg7zzTwOGTGNSNW5jM5QAQvjhaRoG%2Forfd3L0U7tmYcBRqdSAcHQxxbT4slZHwj69cVhZ6wblbmInDOTuWt0qv1tjhVMm3rSBlFpz23UZ%2Fglyg4pCb6DZ1QtIDL3y7BKl2EW3LhC6YtpemNYSb%2FkYYQNYM4n5xhr02HyFKdNbS1jaUpG%2FCzKg07YSfF8x2yJQOl3kkBzKmmzCsH%2FI1NXQolTwSed%2B4VUF5kVb5msiGTbwQHN4XNoTnD7y11Wyt0xWjRgGlanrJYjL9hU9zIPN2jxR2hLYpYGb3mMP3W88MGOqUBrKQTPzQSHZ%2BkMeno7lw2Z3HP98FAljd4%2B%2BYVor%2FqTo28XxiWTM%2Fl8TF7hXjLVvptXogQ5NxRBQ2bjxcJstSCWuoKek6SdCxLzM1BZsB1cmM0cl8VSetOih2G%2Bf6PyXVPMBTeqs7SdNVhEvbG6OAT8%2Bv6jDz2fd8pw8YbqkTdplqiwYfZ1BjVwHMmsnz07V8xToH2g%2BGBQeem9Is5%2BXU08lH868oH&X-Amz-Signature=cbfdc28b6f0afbd70b4eb916b42fac5e3df0b4b3ad4dc0130f8aa86d3e0ccad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37YXUFU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdIgPsA5KveyEyselTvdOzGR2bseTUobMuW9m4xY%2BszAiEA92qBGLe%2B3Y7LxlZ%2FltacwdP%2FkSKwN3a%2BskvRPTd1AkEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJoKPj9OrZjNyTPZircA3f7fEDBdT3c55hSpaWPalzZ045jhFCL4Xz66wEU8xG%2F3IHauaS7oGdDG0jmLAfTsiEbH%2FvGNph8rqRDMW%2FKWxecfC7rKNQWDfMNkhGVFAbKUPe%2FsxEYA0uxu3eYfZ9LOmOGgQNexR6PPYm2WNRX87KPHvw0GYnzeO32JpYqZVkL3Lh37ZKsM35Y9VVu1eK7zISgErPIy319zuyxaWu46trfZSEdBJly734%2FyHY1QDsu1WDAX4UtiNH1fizvwEwoJfv81DHmCAtSfI82fl139p48ORgI65stgB5Ho9q619QFC7jtpCMLNoHs%2BxeqYkRaRzCeG6y9rmZvWX9FnnEkvetGKJg7zzTwOGTGNSNW5jM5QAQvjhaRoG%2Forfd3L0U7tmYcBRqdSAcHQxxbT4slZHwj69cVhZ6wblbmInDOTuWt0qv1tjhVMm3rSBlFpz23UZ%2Fglyg4pCb6DZ1QtIDL3y7BKl2EW3LhC6YtpemNYSb%2FkYYQNYM4n5xhr02HyFKdNbS1jaUpG%2FCzKg07YSfF8x2yJQOl3kkBzKmmzCsH%2FI1NXQolTwSed%2B4VUF5kVb5msiGTbwQHN4XNoTnD7y11Wyt0xWjRgGlanrJYjL9hU9zIPN2jxR2hLYpYGb3mMP3W88MGOqUBrKQTPzQSHZ%2BkMeno7lw2Z3HP98FAljd4%2B%2BYVor%2FqTo28XxiWTM%2Fl8TF7hXjLVvptXogQ5NxRBQ2bjxcJstSCWuoKek6SdCxLzM1BZsB1cmM0cl8VSetOih2G%2Bf6PyXVPMBTeqs7SdNVhEvbG6OAT8%2Bv6jDz2fd8pw8YbqkTdplqiwYfZ1BjVwHMmsnz07V8xToH2g%2BGBQeem9Is5%2BXU08lH868oH&X-Amz-Signature=961a13d0e0022bd883aa1e85db8d154742196952ab07c5d5537ae432dba5c8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
