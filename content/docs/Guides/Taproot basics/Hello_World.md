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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRW562X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUhTPkg%2Fj5r8N7%2BAzaLs%2FaG8cq3C6%2Fd7NhHKSwMiufYAiBPSg0TT8hoaZZWcnAFct7kxt3LL14v8vYHB1w%2FPX7L4yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2fTAY9noB%2FsgTucwKtwDM%2F79Io3c%2B3V3cgHiqjmV0aiLnZsx0GEey3YXdMtnmj2XfiMPypMY2e8BuWuFpzZDS%2Bfu%2B3RjJr5dzLOadVjaW5yvKBY9keEBEOjw1YXRsq33arJg90703nQaj7h7CaQ06w8vhqG7qFAccg0QrTo3DVl4QyaKxQBjcaJ6tHRHFUhDYQvbzBSDab30bjW56NkL%2BvQOsEjK4dH33m%2BQh7IISaFA3t8tjh3fRdcIP5tuYV8OgJOp2Dsm2F6R2Wh0baZMJprjoCnKo53%2FggCn0n3Nu0trrROWmL3TBMmjczT4TrCz3yVvJhcN8lqLCRW39FUf50dQrnbdwauv%2B0nzsv3a3qWtdhuAeizuXYoEh%2FAtXYXRMiavyru9R42mECh9SDPs0PsyY2TSpFsqMfAOKASkdiPMLS8uoh1GORyekDesUmc%2FFHxUypuk5Bstu9sB5gf%2BkhUM29Q783qzjfUhqbgLFY7iK%2FcTWkM1SpEcbdQwybGYZ3hrN8%2FcABxrqjDPlJEOzoEfju94ge2MYzHKetv6c9FzbMT2n8Bl6ELiLKHtrpyNVWgfkQP5k8KptK4i20CUYr%2FcimF0T7m2DR9OH%2FC%2FzBAHHghf82LBPw052rdiUJrJgpsnt%2FD%2BgSPYgiMw3c3AwwY6pgHfKu1a2eshsADVXRmvYadlR91phAcRfGWg57QLj%2Ffsj6dWsnRkayQ77fzRo6iNh%2BPTdykZvGd9HBW5Y44FnsRQ1%2BTXm9A6v9gjCG%2F2LUC%2B3q3k1oe2crsNe%2B9ctqX72GirPaII1zFFIR7ThygfakNkToCUb%2ByUzOzNvMY9jMFLf4rRgjvzR%2BuKB8lVPxUHNkPvn1wcg%2BKyVe1vfjwkqCdczpUgaWvz&X-Amz-Signature=8add8420ad1cce7d9071378224b43dc0e50b695abf00738b6fddea82850913d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRW562X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUhTPkg%2Fj5r8N7%2BAzaLs%2FaG8cq3C6%2Fd7NhHKSwMiufYAiBPSg0TT8hoaZZWcnAFct7kxt3LL14v8vYHB1w%2FPX7L4yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2fTAY9noB%2FsgTucwKtwDM%2F79Io3c%2B3V3cgHiqjmV0aiLnZsx0GEey3YXdMtnmj2XfiMPypMY2e8BuWuFpzZDS%2Bfu%2B3RjJr5dzLOadVjaW5yvKBY9keEBEOjw1YXRsq33arJg90703nQaj7h7CaQ06w8vhqG7qFAccg0QrTo3DVl4QyaKxQBjcaJ6tHRHFUhDYQvbzBSDab30bjW56NkL%2BvQOsEjK4dH33m%2BQh7IISaFA3t8tjh3fRdcIP5tuYV8OgJOp2Dsm2F6R2Wh0baZMJprjoCnKo53%2FggCn0n3Nu0trrROWmL3TBMmjczT4TrCz3yVvJhcN8lqLCRW39FUf50dQrnbdwauv%2B0nzsv3a3qWtdhuAeizuXYoEh%2FAtXYXRMiavyru9R42mECh9SDPs0PsyY2TSpFsqMfAOKASkdiPMLS8uoh1GORyekDesUmc%2FFHxUypuk5Bstu9sB5gf%2BkhUM29Q783qzjfUhqbgLFY7iK%2FcTWkM1SpEcbdQwybGYZ3hrN8%2FcABxrqjDPlJEOzoEfju94ge2MYzHKetv6c9FzbMT2n8Bl6ELiLKHtrpyNVWgfkQP5k8KptK4i20CUYr%2FcimF0T7m2DR9OH%2FC%2FzBAHHghf82LBPw052rdiUJrJgpsnt%2FD%2BgSPYgiMw3c3AwwY6pgHfKu1a2eshsADVXRmvYadlR91phAcRfGWg57QLj%2Ffsj6dWsnRkayQ77fzRo6iNh%2BPTdykZvGd9HBW5Y44FnsRQ1%2BTXm9A6v9gjCG%2F2LUC%2B3q3k1oe2crsNe%2B9ctqX72GirPaII1zFFIR7ThygfakNkToCUb%2ByUzOzNvMY9jMFLf4rRgjvzR%2BuKB8lVPxUHNkPvn1wcg%2BKyVe1vfjwkqCdczpUgaWvz&X-Amz-Signature=5f7adfb8ad1738459bc4bf88a7155f172794611571862eb5f8d946bf6db3c292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
