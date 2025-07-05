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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPKIC5BA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCCl6CVR%2Fbi6DdfAL%2BNQzFW51KV2IL0GUD6DbDP6aFbbwIgUNzo3Uraug4eniVHh%2F1oU42PwCEA9Qas%2BbqtI6toIOsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNKOydUIaixsVBf%2BMCrcAxVc%2BXuHcBz68%2B01snn93v53jCZQrBqlKlPiXnlZOI%2FZ9oJutdVGZtd1jxiy67%2FjNRw%2FX77OZA1rh6TPS43qnf5YZWgtmEDr8P7TTav1vtOLC2SqtwS%2F6Oaa1Z9LyZR3xFYNblHjijgLpz1CE3G0grtBeVbcX0qnvOhNN0bCX4qm9nHl2TTggQBFOmxynveFpMdJhnF9hqpCwu37wH9HTDFYEqUZ%2FXAOvL2o3XQRIOK6%2BuP2EwdwRkssEvTUY1bzAgZfc7rmIZJw3NTkfen6gqLIOcKXfjWXwL6RZVkOTnKa42STxsqSoTbyJxC1s0lIOl5QJsOUMy6v58T0tMvgYYLIwgG9GCcdOxxxV5vOc1dm3Bdp5j%2B6S19WI4LGSDkBknC8JK%2Fu7%2FUo4J0bg%2B7m9bw1aL0snJbRyFI1IFFRiOVuLQ6x8SP8qb7ev707bUqz15JgDYxZXb1B9e7Kz0CjMm5fF5W6Te6Cn5eit356BDzDbCtPHi%2FwUn3nb1aCw0fx0inl7oBU1pPESA2nLwy9ZxHppsJexz5%2B%2B%2Bp%2BT%2B5Jkyq%2FYy2S7haseIMyUIGq2ewn0%2BL%2FI2PN%2B7pAo43lnquAgeGgagDxosAsjV082hYNihPoNsfyNxMmIx0xunm%2FML%2BLosMGOqUBwBg4daa3wgMvN4D6k68J0EqQMy0Fl7xmBA1sdHJLl1san%2FGofqEViFwoNN63OAudncXGvRQZc1DWTJfNx7d106lakv2NaUH0xAkWWqV4Oq6J3mUeEfDX7AOCaxw0L1vYgNXTxbFBeRf7eJ%2Bi3nfBqNyGDryiFMt9PctvO%2BqAWIdpCWCWswk9wO%2FMF6B6qBmPaVMo6b6SXLBZfpq9ZAeZ3nMBzzKO&X-Amz-Signature=83a113796dd13156e54fdcea845f06bed7d39ab59010169256bb9d0a0d702d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPKIC5BA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCCl6CVR%2Fbi6DdfAL%2BNQzFW51KV2IL0GUD6DbDP6aFbbwIgUNzo3Uraug4eniVHh%2F1oU42PwCEA9Qas%2BbqtI6toIOsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNKOydUIaixsVBf%2BMCrcAxVc%2BXuHcBz68%2B01snn93v53jCZQrBqlKlPiXnlZOI%2FZ9oJutdVGZtd1jxiy67%2FjNRw%2FX77OZA1rh6TPS43qnf5YZWgtmEDr8P7TTav1vtOLC2SqtwS%2F6Oaa1Z9LyZR3xFYNblHjijgLpz1CE3G0grtBeVbcX0qnvOhNN0bCX4qm9nHl2TTggQBFOmxynveFpMdJhnF9hqpCwu37wH9HTDFYEqUZ%2FXAOvL2o3XQRIOK6%2BuP2EwdwRkssEvTUY1bzAgZfc7rmIZJw3NTkfen6gqLIOcKXfjWXwL6RZVkOTnKa42STxsqSoTbyJxC1s0lIOl5QJsOUMy6v58T0tMvgYYLIwgG9GCcdOxxxV5vOc1dm3Bdp5j%2B6S19WI4LGSDkBknC8JK%2Fu7%2FUo4J0bg%2B7m9bw1aL0snJbRyFI1IFFRiOVuLQ6x8SP8qb7ev707bUqz15JgDYxZXb1B9e7Kz0CjMm5fF5W6Te6Cn5eit356BDzDbCtPHi%2FwUn3nb1aCw0fx0inl7oBU1pPESA2nLwy9ZxHppsJexz5%2B%2B%2Bp%2BT%2B5Jkyq%2FYy2S7haseIMyUIGq2ewn0%2BL%2FI2PN%2B7pAo43lnquAgeGgagDxosAsjV082hYNihPoNsfyNxMmIx0xunm%2FML%2BLosMGOqUBwBg4daa3wgMvN4D6k68J0EqQMy0Fl7xmBA1sdHJLl1san%2FGofqEViFwoNN63OAudncXGvRQZc1DWTJfNx7d106lakv2NaUH0xAkWWqV4Oq6J3mUeEfDX7AOCaxw0L1vYgNXTxbFBeRf7eJ%2Bi3nfBqNyGDryiFMt9PctvO%2BqAWIdpCWCWswk9wO%2FMF6B6qBmPaVMo6b6SXLBZfpq9ZAeZ3nMBzzKO&X-Amz-Signature=ab420f1583069198ae7f11f1ea9ef6b61e51da0c367117a6475a8b5df92ff296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
