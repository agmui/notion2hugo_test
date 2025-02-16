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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELMVI5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdAYGqZ9xUjazj5nMp8eaQZGWq3joJz87%2FJ2psSYlc8QIgGNEpC7GNExQt5w2qNXD%2BCer9rct9KXtX6ApUHoIqLscq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDK7oi%2Bj3EYJqPofkSrcA9QJUSS97LNp6bh2ChiRjHIecXT%2Fz7GOvuOrIBouHrNTGBKk6Mcaar4ahiVUQTvumA7luTWefHKgYAVlyV81p9PIFzlPDy1f%2BAM89GNQkj6xAKZ%2BTcAoGvZcnvcr1D0e6gTpUoDyBeWrccHL0uyVAF0wQurD5Biw%2Ff1ssZpUmz4%2BbR7UtqsY59cqhnkAdgjj8tU8BUAVM%2F9%2BC1aPgoL94fOqwIFR7A6dbwht5usb8aNMJ1S2t0tlr9XfCMw0R8ECfJaVU3L8rnTwatLJMJWOCroXauDg5MjNmMu0yaMP7%2F62p9NPOB%2FmVr7wT4p%2F678j5%2Bm1mzL7DsduggWZeT1diddeNvG5aQn%2FAwwOynrXjWrIKy2n6227nqF9%2BoqpuGZ3jKFDLqjiWz%2Bc82Jx6sQq9O0n%2BIqUCMOnr%2B%2FRvgJ1Dl%2B4p%2FyRyDlLGRuVcsrRapByHxiAxBSfFwiA8NpZgqoNCMMexu%2FWu8p04lffB%2Fu3Jno15Mmt7NtZ37%2B8StVfA%2F%2FqZmerlALEYQSuoTmeeqf3CuWfyz3ObMOi6CUxhsq0vsZ1svQFg%2BxEckg%2FNxqr5ivQj4X%2BT86pxkw60aLL9Om%2FKwACSCx3MmiyBXeXnZ1Cud%2Bm5BntM9I1EbqjkftjMOL9xb0GOqUBVB%2FAw49EJR51Wzf4gnbkmHG48k%2FulVPABn9OxyJViBJM3ccFPinKlHYuegcbnqucU%2FxHIFLQlC9SOikGSjmdcb5Wq7ZqexVhOzmbSibl4AWZ2ttjHwvDYOTY2Z16KMwRlEZIzn1J2PMhkMoaSH5QF2acWccB48L4pmbc22SHmBM6tU0PsPvPIlIvqHs%2BLB6EEHjj%2BssBDAt21Sqbsscp8yQnb8zg&X-Amz-Signature=64dc6cc0336fe985bbf529cef4de05c6fcc79abbbd7cd42fddb17549e6710131&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYELMVI5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdAYGqZ9xUjazj5nMp8eaQZGWq3joJz87%2FJ2psSYlc8QIgGNEpC7GNExQt5w2qNXD%2BCer9rct9KXtX6ApUHoIqLscq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDK7oi%2Bj3EYJqPofkSrcA9QJUSS97LNp6bh2ChiRjHIecXT%2Fz7GOvuOrIBouHrNTGBKk6Mcaar4ahiVUQTvumA7luTWefHKgYAVlyV81p9PIFzlPDy1f%2BAM89GNQkj6xAKZ%2BTcAoGvZcnvcr1D0e6gTpUoDyBeWrccHL0uyVAF0wQurD5Biw%2Ff1ssZpUmz4%2BbR7UtqsY59cqhnkAdgjj8tU8BUAVM%2F9%2BC1aPgoL94fOqwIFR7A6dbwht5usb8aNMJ1S2t0tlr9XfCMw0R8ECfJaVU3L8rnTwatLJMJWOCroXauDg5MjNmMu0yaMP7%2F62p9NPOB%2FmVr7wT4p%2F678j5%2Bm1mzL7DsduggWZeT1diddeNvG5aQn%2FAwwOynrXjWrIKy2n6227nqF9%2BoqpuGZ3jKFDLqjiWz%2Bc82Jx6sQq9O0n%2BIqUCMOnr%2B%2FRvgJ1Dl%2B4p%2FyRyDlLGRuVcsrRapByHxiAxBSfFwiA8NpZgqoNCMMexu%2FWu8p04lffB%2Fu3Jno15Mmt7NtZ37%2B8StVfA%2F%2FqZmerlALEYQSuoTmeeqf3CuWfyz3ObMOi6CUxhsq0vsZ1svQFg%2BxEckg%2FNxqr5ivQj4X%2BT86pxkw60aLL9Om%2FKwACSCx3MmiyBXeXnZ1Cud%2Bm5BntM9I1EbqjkftjMOL9xb0GOqUBVB%2FAw49EJR51Wzf4gnbkmHG48k%2FulVPABn9OxyJViBJM3ccFPinKlHYuegcbnqucU%2FxHIFLQlC9SOikGSjmdcb5Wq7ZqexVhOzmbSibl4AWZ2ttjHwvDYOTY2Z16KMwRlEZIzn1J2PMhkMoaSH5QF2acWccB48L4pmbc22SHmBM6tU0PsPvPIlIvqHs%2BLB6EEHjj%2BssBDAt21Sqbsscp8yQnb8zg&X-Amz-Signature=1e81a6886592d4cf93a94be9201fec6b3c101b7788eb61252bffa491653051ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
