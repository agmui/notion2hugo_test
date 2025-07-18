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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNQ6YEC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC7SDuv%2BKTFkb1oXl%2Be7ZTGK0OjNWain3a2pz7OnPeZBAiA8nf5aM6a2odskfEUJgzIcQsGmIfRScOo%2F1lUGiBp6VSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vF%2Bvmo%2BFf28%2BNECKtwDvvYOuU1qsYvmQGVrnA0B1GHsVwty3gLGJ9aYUjRtAvt8i1YwqxRNggZfD%2F5Hxkx2PtR0opIzzt0Y8f8ayKPRLIlYkcZUdyIpTRZ5wozP4BbkbbL7Ammwlpg6dQh2%2Bpv4GkQWGIpLx6ISySqRKDM0rF9ZMCBsg82q1Y2EY96ZgxoHJJq2LANxW9FoQSNoiuKBj0bwjLU9JGz1T9jacubPeBWN8Yil2ot9ahukwJ724cM2TlCHAJiJVnZ%2FA4wrcHkM3eEEGzwBb3M4ELcowIA8jWW0Mkig%2FIG54v2W8fbUV31aZlvNfTMpXEV0Bda9uh84ptL5AIWgqQq6VWQ%2B2OeeNpmvIQ58Rm8IUcZycYe1bndP3tX5JAJAdej8D93QftaXGqMNy7%2F%2BfvqsXJ7Nq4Y%2FM45fG5MZXXHXfHt6J5abmgdd6cUcwIhl69gZrY2AowtqyMZYa5PCXAvklG2DYnfwvgIeY2QQ8ISlVwaWfu%2BGKp0aUeSR9f8JjMDMvTEd%2FjVhQjnIKkTAuNEolie2yZKRSjANZSWvkOAfRCG2P0r%2FuMNI6EiDzvfei9uMa3LjnyyF75f8A3gzhqPIRAjSacpaLQ8eX5ERDnbMgYQZpatpr%2BCMfc5t0fAAXcwEqt8w9YrrwwY6pgE8WrPtg%2FhhjeiHn4Prmve1Kr0jaGiS80RkFvTzDcxAf9WA3793VHgxdLZLOhszt4UcegR2Hd1osZYOnk0z8qPMmuYlbHOLl171hyo250oNtjzi0Q5HOgL1dPbheW7Q2bEX%2Fd%2Fu0IvlapavNmh%2BozWvc2bMM6Qi6dbKZzxjVvT0F33LuAUrv%2FFUyHwKc%2FhSFg8sgEmENTdU2fKrbUPEfCycBPgf6w57&X-Amz-Signature=5d21b039b02f2457f0c449a85cc1d72d3f80783fd031f83acaa4fb46757b4287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNQ6YEC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC7SDuv%2BKTFkb1oXl%2Be7ZTGK0OjNWain3a2pz7OnPeZBAiA8nf5aM6a2odskfEUJgzIcQsGmIfRScOo%2F1lUGiBp6VSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vF%2Bvmo%2BFf28%2BNECKtwDvvYOuU1qsYvmQGVrnA0B1GHsVwty3gLGJ9aYUjRtAvt8i1YwqxRNggZfD%2F5Hxkx2PtR0opIzzt0Y8f8ayKPRLIlYkcZUdyIpTRZ5wozP4BbkbbL7Ammwlpg6dQh2%2Bpv4GkQWGIpLx6ISySqRKDM0rF9ZMCBsg82q1Y2EY96ZgxoHJJq2LANxW9FoQSNoiuKBj0bwjLU9JGz1T9jacubPeBWN8Yil2ot9ahukwJ724cM2TlCHAJiJVnZ%2FA4wrcHkM3eEEGzwBb3M4ELcowIA8jWW0Mkig%2FIG54v2W8fbUV31aZlvNfTMpXEV0Bda9uh84ptL5AIWgqQq6VWQ%2B2OeeNpmvIQ58Rm8IUcZycYe1bndP3tX5JAJAdej8D93QftaXGqMNy7%2F%2BfvqsXJ7Nq4Y%2FM45fG5MZXXHXfHt6J5abmgdd6cUcwIhl69gZrY2AowtqyMZYa5PCXAvklG2DYnfwvgIeY2QQ8ISlVwaWfu%2BGKp0aUeSR9f8JjMDMvTEd%2FjVhQjnIKkTAuNEolie2yZKRSjANZSWvkOAfRCG2P0r%2FuMNI6EiDzvfei9uMa3LjnyyF75f8A3gzhqPIRAjSacpaLQ8eX5ERDnbMgYQZpatpr%2BCMfc5t0fAAXcwEqt8w9YrrwwY6pgE8WrPtg%2FhhjeiHn4Prmve1Kr0jaGiS80RkFvTzDcxAf9WA3793VHgxdLZLOhszt4UcegR2Hd1osZYOnk0z8qPMmuYlbHOLl171hyo250oNtjzi0Q5HOgL1dPbheW7Q2bEX%2Fd%2Fu0IvlapavNmh%2BozWvc2bMM6Qi6dbKZzxjVvT0F33LuAUrv%2FFUyHwKc%2FhSFg8sgEmENTdU2fKrbUPEfCycBPgf6w57&X-Amz-Signature=a16f6106d58a0bced28663ba03787228a0d192bf3209e07d0fbd9776ce2ca36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
