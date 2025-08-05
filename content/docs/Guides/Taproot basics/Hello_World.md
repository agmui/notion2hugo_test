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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6HPAWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICJGAqe0V6Zbf%2FYNlRm0hPJMO1XGCyx5YLawagb%2BkyISAiEA0%2BlBXsKyCgMe2fl%2F41ORPPPxkxHcZUzXArb1arkuTFoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhIIDpIuQ2LmtEOAyrcAxafygL4NOifb5e3KLJZrMgjbOh%2BmxLPGKQxnctDItUOx7hZ6JNh3HK4mOOR1pLufboJyQlPRYrVT%2Fp%2BH8SH%2BJZPpKG3%2BlBDp5ym5l6NDJcj1iwZnuRfhSHHKwu7citV2fLcF1hyDAkOwiR9Nkom68dw4hs5%2FE3WXGPvsRN%2F8QI%2BQDpPhUqy8gc%2B%2FicvhVdU4e%2F8MtGzI9arKajr0%2B4YTJwucu6IwfqugY9DhuDhv1mNVn%2Bw8bHZQZHc0hRcyxIOV9JYR6M%2BVDvtnwZVG2iz9zMaNPQB1PduvQe7i1d%2BUy7coZcth5rHtd8m8UjkealOJRAjsOmh6D3xxgDPLMm5w%2Fx1VtWZVuGmEJZFI%2FDFsKBnzmnDRWyNp3GoomtWfK2MBzRS45Qm3TY0T%2FHmo%2FveVaLuTD2xXHkWc6RvcJLajWcA%2F2P0cXS%2Bj8FfehSoeebwNIQnxidlbyxfwI8tn%2BUE3EkrSm50uWD%2Bh3umvMrH1nt3S9TbY8%2Bl7bJqIauSR8lHgm5JDkhDOLqbiGnI1NXvvoFiPqdYPBofo9E9RADDL%2BI9n8J8Q4xEN0ULscbe%2FmrbhcfwMm1b9RR2T%2FsCv007xqL0k4D%2BG%2FkI6enSxPCHBwJbU1Rgzg%2FELVD8Nz5cMK35xMQGOqUBNqUGv80LGPpdzRaLWLoPfQMW6UihA3jPLZ6fSQo1SnUpxSsA38M4TOYDo98fyohYY81ZPIbhimF%2BxfGybg8mPgz7DcUBy%2FGum6pEcdHyCdsNZs6PQeXTuU3lcE7ywPs2t5cbbngU7dGoyG6KV749uN3baUbqU3lK0emspRmtxd2RYZlHL22EKviX56yBhsHxpdAqG1uH%2B1wejOatjnAlOWLmELbS&X-Amz-Signature=3796ed37ca7060a24764d310f5f53cb1f9dc7c9c8989b72505a3d9e135a4133e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6HPAWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICJGAqe0V6Zbf%2FYNlRm0hPJMO1XGCyx5YLawagb%2BkyISAiEA0%2BlBXsKyCgMe2fl%2F41ORPPPxkxHcZUzXArb1arkuTFoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhIIDpIuQ2LmtEOAyrcAxafygL4NOifb5e3KLJZrMgjbOh%2BmxLPGKQxnctDItUOx7hZ6JNh3HK4mOOR1pLufboJyQlPRYrVT%2Fp%2BH8SH%2BJZPpKG3%2BlBDp5ym5l6NDJcj1iwZnuRfhSHHKwu7citV2fLcF1hyDAkOwiR9Nkom68dw4hs5%2FE3WXGPvsRN%2F8QI%2BQDpPhUqy8gc%2B%2FicvhVdU4e%2F8MtGzI9arKajr0%2B4YTJwucu6IwfqugY9DhuDhv1mNVn%2Bw8bHZQZHc0hRcyxIOV9JYR6M%2BVDvtnwZVG2iz9zMaNPQB1PduvQe7i1d%2BUy7coZcth5rHtd8m8UjkealOJRAjsOmh6D3xxgDPLMm5w%2Fx1VtWZVuGmEJZFI%2FDFsKBnzmnDRWyNp3GoomtWfK2MBzRS45Qm3TY0T%2FHmo%2FveVaLuTD2xXHkWc6RvcJLajWcA%2F2P0cXS%2Bj8FfehSoeebwNIQnxidlbyxfwI8tn%2BUE3EkrSm50uWD%2Bh3umvMrH1nt3S9TbY8%2Bl7bJqIauSR8lHgm5JDkhDOLqbiGnI1NXvvoFiPqdYPBofo9E9RADDL%2BI9n8J8Q4xEN0ULscbe%2FmrbhcfwMm1b9RR2T%2FsCv007xqL0k4D%2BG%2FkI6enSxPCHBwJbU1Rgzg%2FELVD8Nz5cMK35xMQGOqUBNqUGv80LGPpdzRaLWLoPfQMW6UihA3jPLZ6fSQo1SnUpxSsA38M4TOYDo98fyohYY81ZPIbhimF%2BxfGybg8mPgz7DcUBy%2FGum6pEcdHyCdsNZs6PQeXTuU3lcE7ywPs2t5cbbngU7dGoyG6KV749uN3baUbqU3lK0emspRmtxd2RYZlHL22EKviX56yBhsHxpdAqG1uH%2B1wejOatjnAlOWLmELbS&X-Amz-Signature=000dec59753f0ddaa60ca0a036973914f4d33abeae14caa9c00ad27756e4e79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
