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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24NLX7I%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDtHNlmuwkV9aNfTyjSf5Joycy%2FcPHyVKHdwC0WwCez0gIhAPvwF%2FpGQZL3aHgyZtQrB1z84Hp2O9mFDUnHVLBG%2B3kCKv8DCBUQABoMNjM3NDIzMTgzODA1Igw50bhVuxD4MBaP68kq3ANaDj92lhKg%2BvRhjCMXLNwptacpFsmj8kDnsJR4nKp4A46zNzGEOd0IkoPkCFLTE1GGbThLafnTKhkMlWA7Q3urEtazheJg5X1FSd2WLB1YSyuJ4M88PpFHLfeNoZczxPqZ6NmSv8bZ2pBb00rSA2yj7tMo1dh0l7dAr0%2FnyS6357YrRqmAn%2Bi3Na1Xlt0E0cOksx85zPjEGNrgyLpp6UZI2Bru0CE97cb0WCxWjA5yzsZ4Jg6kcYQD1TaOrWNUc%2BsB9tAMk%2F3VhCAHRKotmVT7PsIQYGs4USaQyZ1d8B06ubAESc39BDfxSeIsTzsqo8wZ66QmHdvguS1gNw7gDUNuom6RMfMCbKAz1TDX%2FhZ5AprifsVVq5mEviwfP7dqBE3xsNoQwBzvtfwAZv%2F6HeapbQJNZyA6rstZbwbbdDLF%2BWKl1xsTbHqUDOJYIN1PXSytFLO8AikFQBA2JFxnJOtF8aazpzEDcP4mmA9rV%2FmPDjRaf7m2lH3tcEOmYojj9eDI8oZnga6GHRDUK0H1wz1iPo1kp6WmmKVNZ9u0yokpHmmgxIPSmLbQYLjwPLn1aLd%2Bh8HcFJ28lYWw15eKthgr6WsQ56fNFm01rBwhJoSNKuYuDttP8AAde2IN6TDWqbDCBjqkAd1OZpCkIjKOrTSs31OsPdDFGuqYME6PGiewPGUdRq7ePj8u0YFJw74IolztkIPd9WBmdicrdhS0kiBF1xMtZmi0JQgkCsznMmj6yFzoAuox3kt4EOQqKm1KWVsBBrjINq1A8%2FZviodi3MdblEv1EAjjJHiXGNReh%2BDfdI2gA4O3Vu7NKEVnnCg2Zrjg49ZotHUsxIH5FbBuOUcn60fN7luxZAK5&X-Amz-Signature=371ec91d8aca4354d0f7cd31fdbe14afbf40f01e3f32e0589181a888d7ebb0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24NLX7I%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDtHNlmuwkV9aNfTyjSf5Joycy%2FcPHyVKHdwC0WwCez0gIhAPvwF%2FpGQZL3aHgyZtQrB1z84Hp2O9mFDUnHVLBG%2B3kCKv8DCBUQABoMNjM3NDIzMTgzODA1Igw50bhVuxD4MBaP68kq3ANaDj92lhKg%2BvRhjCMXLNwptacpFsmj8kDnsJR4nKp4A46zNzGEOd0IkoPkCFLTE1GGbThLafnTKhkMlWA7Q3urEtazheJg5X1FSd2WLB1YSyuJ4M88PpFHLfeNoZczxPqZ6NmSv8bZ2pBb00rSA2yj7tMo1dh0l7dAr0%2FnyS6357YrRqmAn%2Bi3Na1Xlt0E0cOksx85zPjEGNrgyLpp6UZI2Bru0CE97cb0WCxWjA5yzsZ4Jg6kcYQD1TaOrWNUc%2BsB9tAMk%2F3VhCAHRKotmVT7PsIQYGs4USaQyZ1d8B06ubAESc39BDfxSeIsTzsqo8wZ66QmHdvguS1gNw7gDUNuom6RMfMCbKAz1TDX%2FhZ5AprifsVVq5mEviwfP7dqBE3xsNoQwBzvtfwAZv%2F6HeapbQJNZyA6rstZbwbbdDLF%2BWKl1xsTbHqUDOJYIN1PXSytFLO8AikFQBA2JFxnJOtF8aazpzEDcP4mmA9rV%2FmPDjRaf7m2lH3tcEOmYojj9eDI8oZnga6GHRDUK0H1wz1iPo1kp6WmmKVNZ9u0yokpHmmgxIPSmLbQYLjwPLn1aLd%2Bh8HcFJ28lYWw15eKthgr6WsQ56fNFm01rBwhJoSNKuYuDttP8AAde2IN6TDWqbDCBjqkAd1OZpCkIjKOrTSs31OsPdDFGuqYME6PGiewPGUdRq7ePj8u0YFJw74IolztkIPd9WBmdicrdhS0kiBF1xMtZmi0JQgkCsznMmj6yFzoAuox3kt4EOQqKm1KWVsBBrjINq1A8%2FZviodi3MdblEv1EAjjJHiXGNReh%2BDfdI2gA4O3Vu7NKEVnnCg2Zrjg49ZotHUsxIH5FbBuOUcn60fN7luxZAK5&X-Amz-Signature=a9d392cebc3fdcfa87ef165a1f053bded1c794a54e6828140189c1a3a07282a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
