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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDNHRCK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHu6gIeqK2vbAQ6tu1aXjCh6wO7pmz3pI3Rk6QR0onKzAiB3DTcFD%2BKQLwfOu94aHbyCvhuLv0iVhL8wvTZtlyqvKCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoiQ3JmTpyTx%2FJoLLKtwDroWPqSvC7LAWi9K1XVvzrrgLjlTrOGhoKG1D8ZqMxYrDaO03IojX3Jh5%2B7tLbx55BgVzQefPFJT2nlmUMnUSPgPVd17Lzp8M1pyxPtNSi2Gqrtl1f%2F6fuKhZ4wQI8MxccpODoZPnYzphXsKfaVCghssphgOmUlbbwd%2BtMEU9lzuh9HSsH1fCFyVF6Foj6Vp170bQ7plO70huY9Uft7Ow%2F%2B15UPP1jdvJIGL02py9jlGVVR39owuVyABQoq%2BQ1F3XpC6JeIpL1PKT%2FYY9P2NfsfufGEF2rFno1s%2FqCfxMYYlllQBRxWEoFjwreUP8duk%2Bzg%2BQxNN2xGom%2BzCzCcel0ZohuQsWW5abJT%2FRXa0N80YtrK9ZrOlphLuOp6aT3xn%2F4H5q2GNmWLXmtDHN7w390n%2FVrvEcANWGvZGnI4xNm8LYkmk7%2FXrJ7zQW2F9GYG9JbbDIgSVLoEOh1zvWhCUztbgn05zVOI%2BUXHfkOZaUu4WyKxiZW%2F3WBp7xd1%2BNFZ2Qay8JqOpdsvMyeWSSlcp9eTZKM52CXdPePXSn45VKIw9tKsPuO9pJnLwFWklhfBA8ZNzI2vwjUw0zKkYFfdOivzJc9i0uFsidpa2E%2Bva7XmSJotH4MLru1lVxwq8w1%2BqtxAY6pgEsmhiPt%2BNwTapG8TeAAYAvUltPAwDqrUGghfht9BMoLOtZ5jwQpW5AZnIheN93O86OUt%2BvCzyCrAgLH16qcPpBRufRP5BBKS%2BySV%2FUDb8iHJRFhfHw2ik5y9Puq9eFWdIxoP60%2FeIFSVWW9PKBFg8sVg17Ls9TUUNANU3QCX8TXN4Y1Vh6YvGL%2FIlkmpsmY17OHZ%2BZiSIP6LXCr34O6hVs23olF65H&X-Amz-Signature=ef7642a870de03f5f483a799f675d0010059ef5d8dfebd887cbca2e47aa70fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDNHRCK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHu6gIeqK2vbAQ6tu1aXjCh6wO7pmz3pI3Rk6QR0onKzAiB3DTcFD%2BKQLwfOu94aHbyCvhuLv0iVhL8wvTZtlyqvKCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoiQ3JmTpyTx%2FJoLLKtwDroWPqSvC7LAWi9K1XVvzrrgLjlTrOGhoKG1D8ZqMxYrDaO03IojX3Jh5%2B7tLbx55BgVzQefPFJT2nlmUMnUSPgPVd17Lzp8M1pyxPtNSi2Gqrtl1f%2F6fuKhZ4wQI8MxccpODoZPnYzphXsKfaVCghssphgOmUlbbwd%2BtMEU9lzuh9HSsH1fCFyVF6Foj6Vp170bQ7plO70huY9Uft7Ow%2F%2B15UPP1jdvJIGL02py9jlGVVR39owuVyABQoq%2BQ1F3XpC6JeIpL1PKT%2FYY9P2NfsfufGEF2rFno1s%2FqCfxMYYlllQBRxWEoFjwreUP8duk%2Bzg%2BQxNN2xGom%2BzCzCcel0ZohuQsWW5abJT%2FRXa0N80YtrK9ZrOlphLuOp6aT3xn%2F4H5q2GNmWLXmtDHN7w390n%2FVrvEcANWGvZGnI4xNm8LYkmk7%2FXrJ7zQW2F9GYG9JbbDIgSVLoEOh1zvWhCUztbgn05zVOI%2BUXHfkOZaUu4WyKxiZW%2F3WBp7xd1%2BNFZ2Qay8JqOpdsvMyeWSSlcp9eTZKM52CXdPePXSn45VKIw9tKsPuO9pJnLwFWklhfBA8ZNzI2vwjUw0zKkYFfdOivzJc9i0uFsidpa2E%2Bva7XmSJotH4MLru1lVxwq8w1%2BqtxAY6pgEsmhiPt%2BNwTapG8TeAAYAvUltPAwDqrUGghfht9BMoLOtZ5jwQpW5AZnIheN93O86OUt%2BvCzyCrAgLH16qcPpBRufRP5BBKS%2BySV%2FUDb8iHJRFhfHw2ik5y9Puq9eFWdIxoP60%2FeIFSVWW9PKBFg8sVg17Ls9TUUNANU3QCX8TXN4Y1Vh6YvGL%2FIlkmpsmY17OHZ%2BZiSIP6LXCr34O6hVs23olF65H&X-Amz-Signature=f21857e67cbea398846a6b351ac690fdda60fff473f2700063abd997e9c459e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
