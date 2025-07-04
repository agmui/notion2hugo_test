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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTFMH3G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIC7FrzBADLGGlxR4W2pRsZaDO4A8HRzvmEfRphAYRb62AiEAxd0H8bP416VoPq7ngfxMUUj8WHKoGJmMQbZGCIpivFMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIgeOPBqQJB2NJLS3CrcAx0f4RmLO0DB48%2BxLUF3aPIuxTO1blrrC4%2Bayt2YPUlS%2BRDweMjIGCE5%2Ba9nULiRVLt29fa%2F5rYRRHkSPkk%2BonKavvxIXy0b1zAkHzfYIe2n6mOjXpHP6dlSHT3mA33Vat1Xru2bi1J2HU4DMRROxG9q%2Ba%2F45%2FysXaeRHdexpwmq%2F9P4gQEb2h87WhFGprsl697FmQwifXtxey2Gfcv9x8JQdMT8kNWiQyykOkF%2BqMOgaokjWWcra9Sn5QZT2oqFYKICVMQ6kuAiYkXQ4q1HeOz2nkDnxZhocK0Kd6SD6U4SGpqla%2BYd3Q5CYeQcJFfYIzV5PlLavPNTKO%2Bl471YesQ0KY67kyYJP0AYfPg4u4p0PwmLg4UHZ1cFMFJ91aZhfX%2B6Zk8C5QiT81HjhJal46QBk7wzSoItIZs8J3e2dT%2B4Kti11Lovj3Wdd6JvLqXDjx%2Fzr0kQLkB27qcMeEN1K03LTn7JSi6LcYKRuamsknd04b5%2F2QVQcZEfzlLNjnCSsoWyNZGWiKo6yISbkrGZtnr6ccXuFimvni7Af33feN5WV3VqXI1siTs9J%2BAeXaW3L2f9zqPDHi%2BoVFCoNTI%2BKWLC%2FFSKigJpQXO8EP68jZEBAwaSL3GXP%2F0rPvu4MNuNncMGOqUBP%2BKWG0ydqXnIQ%2BD3fnTYw0vVzgHPJqK%2FuS%2FZ5JHyoyCGPQfg3Zwd9vn%2BVeHtMtzsQaimSnslyyRAS4ltQgCBe4OkaBFPlA9zP%2BCDNpER%2BL%2Ba1H6EPw4NiJdYhYuKpCYVuhXIkIwiqWl544YCNaqatI8UuIB3I%2FZmOYu5HqT25PdJBY8D5DFAmdA%2BA9sADUvpULJ5M4%2FIhSeP7y623hOcNapX0ZY6&X-Amz-Signature=b1a6196866a5974751c234af17ed2e2c6d828066a81af9972a2717904f896592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTFMH3G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIC7FrzBADLGGlxR4W2pRsZaDO4A8HRzvmEfRphAYRb62AiEAxd0H8bP416VoPq7ngfxMUUj8WHKoGJmMQbZGCIpivFMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIgeOPBqQJB2NJLS3CrcAx0f4RmLO0DB48%2BxLUF3aPIuxTO1blrrC4%2Bayt2YPUlS%2BRDweMjIGCE5%2Ba9nULiRVLt29fa%2F5rYRRHkSPkk%2BonKavvxIXy0b1zAkHzfYIe2n6mOjXpHP6dlSHT3mA33Vat1Xru2bi1J2HU4DMRROxG9q%2Ba%2F45%2FysXaeRHdexpwmq%2F9P4gQEb2h87WhFGprsl697FmQwifXtxey2Gfcv9x8JQdMT8kNWiQyykOkF%2BqMOgaokjWWcra9Sn5QZT2oqFYKICVMQ6kuAiYkXQ4q1HeOz2nkDnxZhocK0Kd6SD6U4SGpqla%2BYd3Q5CYeQcJFfYIzV5PlLavPNTKO%2Bl471YesQ0KY67kyYJP0AYfPg4u4p0PwmLg4UHZ1cFMFJ91aZhfX%2B6Zk8C5QiT81HjhJal46QBk7wzSoItIZs8J3e2dT%2B4Kti11Lovj3Wdd6JvLqXDjx%2Fzr0kQLkB27qcMeEN1K03LTn7JSi6LcYKRuamsknd04b5%2F2QVQcZEfzlLNjnCSsoWyNZGWiKo6yISbkrGZtnr6ccXuFimvni7Af33feN5WV3VqXI1siTs9J%2BAeXaW3L2f9zqPDHi%2BoVFCoNTI%2BKWLC%2FFSKigJpQXO8EP68jZEBAwaSL3GXP%2F0rPvu4MNuNncMGOqUBP%2BKWG0ydqXnIQ%2BD3fnTYw0vVzgHPJqK%2FuS%2FZ5JHyoyCGPQfg3Zwd9vn%2BVeHtMtzsQaimSnslyyRAS4ltQgCBe4OkaBFPlA9zP%2BCDNpER%2BL%2Ba1H6EPw4NiJdYhYuKpCYVuhXIkIwiqWl544YCNaqatI8UuIB3I%2FZmOYu5HqT25PdJBY8D5DFAmdA%2BA9sADUvpULJ5M4%2FIhSeP7y623hOcNapX0ZY6&X-Amz-Signature=54b253fe9341b4674e262593a888839a7c96d558a452f232c44754370ba324a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
