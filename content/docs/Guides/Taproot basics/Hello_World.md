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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4TQNC3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU8mNS8leGjjPL5WCJjk%2FplKwsQAZfaQyLU8sOlEPXpAiAuKNuR9iW%2F%2BnPbiM5htmL3XUiA3k6D7yIhms6iU9CUtyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6DHuMEYS4u2vzUzKtwD5lsJdiXkQ0JNP84Vn1140qWtuS1Bnrc0pI2V6Ag3u5N8vq%2FydIgc4VVbHF2EZl5c9FZ5r%2FGAEShlSQ87pjisyctjbYocQD69AKZKeE4V%2FoZawY8LMm7kTlgWWKKc%2FieLvIoG66VVMdd9rAgnYZIro1QpdmcfeMiUcf1rsFzxX4U%2Bc60JOK2jmTuz68jd4Fye35VR8gh6zWNjDQ%2BLUzkTbk6tgs0HsO0KnNtg3ZD%2BoNRhJqvZcjcmt9FWCoPK%2BaIbQCFT28FmPiR0txJu1j9nzQjao5DyUctFrtauN9KLU%2FOOd2RrnSv%2FLQV4uNu8PiYJIQoq8cvZnxBZAwbh%2Fj%2FRCJns%2BHTeKz%2FLmtXYMsL3QiyzuTQ7%2F7ao8saRF%2B4oKlrr5XheHwlxnY%2BW2prpyWzftV4gD3%2B73wMOaZQd3qZw1rD3WsdkXX8YEiGUWYN1eDorGpxBWMiZWqAF%2BH0C%2FHangoWzMCfmuBu7S0sHPwyVYe3KsC%2F4S6YT1lmYM%2FnPL0koum5%2FzpiD8JnJbocWmMjQgeoCYjyS%2B%2BLpsl8LVgRiEuak6mS2hYl9vUFGw8yrTh7iyOa9ESzKBfD5EqgszWCVOChyq7MVW%2FruUjVHnx1lEu%2FmkvZt%2FOYATF9QDR4wq4vfxAY6pgFJdnpp6Uo2m%2BiWc7IkzKyJ5SqhkmGuq7w534VDHHqlmPMiBZNmptHYkLEUr3nVxIA5V76n0oCb%2BZgxiYvkWOVI1r1rQWMCgK63pvBxyTn3BUqye7c0JYAVjhoRmULnh%2FLb3R8qACnwKyKKjooV%2BCbDKNgk0cM8%2FiOai3RS5kKEPFx8vT4Slf8MmPaIWS8EHOs7AxOB2SoyB8tk23EK5lrQLAdz1775&X-Amz-Signature=013a3644d6ad7c29fdec778c49ac220b7d1ddcf05f74ef4ad5c6216d6551ec9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4TQNC3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU8mNS8leGjjPL5WCJjk%2FplKwsQAZfaQyLU8sOlEPXpAiAuKNuR9iW%2F%2BnPbiM5htmL3XUiA3k6D7yIhms6iU9CUtyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6DHuMEYS4u2vzUzKtwD5lsJdiXkQ0JNP84Vn1140qWtuS1Bnrc0pI2V6Ag3u5N8vq%2FydIgc4VVbHF2EZl5c9FZ5r%2FGAEShlSQ87pjisyctjbYocQD69AKZKeE4V%2FoZawY8LMm7kTlgWWKKc%2FieLvIoG66VVMdd9rAgnYZIro1QpdmcfeMiUcf1rsFzxX4U%2Bc60JOK2jmTuz68jd4Fye35VR8gh6zWNjDQ%2BLUzkTbk6tgs0HsO0KnNtg3ZD%2BoNRhJqvZcjcmt9FWCoPK%2BaIbQCFT28FmPiR0txJu1j9nzQjao5DyUctFrtauN9KLU%2FOOd2RrnSv%2FLQV4uNu8PiYJIQoq8cvZnxBZAwbh%2Fj%2FRCJns%2BHTeKz%2FLmtXYMsL3QiyzuTQ7%2F7ao8saRF%2B4oKlrr5XheHwlxnY%2BW2prpyWzftV4gD3%2B73wMOaZQd3qZw1rD3WsdkXX8YEiGUWYN1eDorGpxBWMiZWqAF%2BH0C%2FHangoWzMCfmuBu7S0sHPwyVYe3KsC%2F4S6YT1lmYM%2FnPL0koum5%2FzpiD8JnJbocWmMjQgeoCYjyS%2B%2BLpsl8LVgRiEuak6mS2hYl9vUFGw8yrTh7iyOa9ESzKBfD5EqgszWCVOChyq7MVW%2FruUjVHnx1lEu%2FmkvZt%2FOYATF9QDR4wq4vfxAY6pgFJdnpp6Uo2m%2BiWc7IkzKyJ5SqhkmGuq7w534VDHHqlmPMiBZNmptHYkLEUr3nVxIA5V76n0oCb%2BZgxiYvkWOVI1r1rQWMCgK63pvBxyTn3BUqye7c0JYAVjhoRmULnh%2FLb3R8qACnwKyKKjooV%2BCbDKNgk0cM8%2FiOai3RS5kKEPFx8vT4Slf8MmPaIWS8EHOs7AxOB2SoyB8tk23EK5lrQLAdz1775&X-Amz-Signature=c76ce06da75d55c9839765722991fd28dc65116bf17ec14dbe3ba3593214ec3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
