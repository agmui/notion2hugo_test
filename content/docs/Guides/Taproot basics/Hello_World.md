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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJG6JOB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAsdE33ABEI72gOQYwwyT9qHFME6qQ8kzaaqK%2BUeFO6aAiBkw6CD3BXFwIxfsLYzlthzgrgn5odF1sihqmcAB75rmyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMbIRC42xZ6Lbg7n0xKtwDUUYh4%2FkKp4LwHzA8j9rKRXOmcAniFijzS%2F5nNgJoH2bMWrlJdCJmdekX9gGfwm91Bn9a79c9vb16idTon7cG3j5Msmgl09%2BQ9tZbiQWuLdm6KzghC0W%2B5mEI9jjZX9xPzC0rOku8s2n3cOIEMsulRkbKB77vA7KBKvcHoZZ763vvc9Evj7qqbi0E2271aklZYqzGqpvRqSH0OXIqWIynOwto7mLT86ZuGNb5a2gft5a9FW8400t6sKMpZJ%2BSljKQ9MDh7uGZD8cHpwE4vtwRHO3RKcnMG53fvaG0uwWN3oy2tmDD0L1Mb39LIGpp20JpQoP3ywp4Pe6JXbC4elC7h%2Bfel%2Fz%2For%2B71zdI7ImrbHA8eSTFBMgOKLocrDvcu7sYhdyJrxMIMPIrufWNniaxiTssQj17NBGuAiBJav85vXrLHx%2BZXdDFq4DYyzVA9AadK6QtTD6meJKP6FSzjZb9WNtmQgp84%2BkwuQ4Qglk5dbJYGdQFHnNxud8TLjk47K3C514F%2FlCNBND0NCFHXWv0GF8SZGoz6nz7HspJ65gp2Ue0xijCW%2B8bROjn9NWieB4IOExL%2FqfNoz0Vm1UyyHdnM5N%2BFZrvkasBWBPx7RB4wXjvOonFikVuFTHGw9MwqrKJxAY6pgGOkiZN%2Fp6gSuHWZ2gO50jDuvnux6IBhoaJx9K5PrBJoTsXtnDqCB6GLxDnm51%2B8VnYAKdGk1%2FA5%2FK3Sj9r7SfqnI0QKLv8wzUmx9MXl24oSRjayRYf%2BXlJ0I9cgYPojCztwPJkS%2FWR22VbtcktnU4fl9BqtU%2Bjh9JimtemHSrMaprN71Y%2FvF4QbKMwDhkJNV4jFuY4vJunLmuB5dWpsFT8pmKK9%2F0Q&X-Amz-Signature=ed9a18890de9d845aa65bfafc5b30d52d30d3745215c862e505d30cd828e8d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJG6JOB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAsdE33ABEI72gOQYwwyT9qHFME6qQ8kzaaqK%2BUeFO6aAiBkw6CD3BXFwIxfsLYzlthzgrgn5odF1sihqmcAB75rmyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMbIRC42xZ6Lbg7n0xKtwDUUYh4%2FkKp4LwHzA8j9rKRXOmcAniFijzS%2F5nNgJoH2bMWrlJdCJmdekX9gGfwm91Bn9a79c9vb16idTon7cG3j5Msmgl09%2BQ9tZbiQWuLdm6KzghC0W%2B5mEI9jjZX9xPzC0rOku8s2n3cOIEMsulRkbKB77vA7KBKvcHoZZ763vvc9Evj7qqbi0E2271aklZYqzGqpvRqSH0OXIqWIynOwto7mLT86ZuGNb5a2gft5a9FW8400t6sKMpZJ%2BSljKQ9MDh7uGZD8cHpwE4vtwRHO3RKcnMG53fvaG0uwWN3oy2tmDD0L1Mb39LIGpp20JpQoP3ywp4Pe6JXbC4elC7h%2Bfel%2Fz%2For%2B71zdI7ImrbHA8eSTFBMgOKLocrDvcu7sYhdyJrxMIMPIrufWNniaxiTssQj17NBGuAiBJav85vXrLHx%2BZXdDFq4DYyzVA9AadK6QtTD6meJKP6FSzjZb9WNtmQgp84%2BkwuQ4Qglk5dbJYGdQFHnNxud8TLjk47K3C514F%2FlCNBND0NCFHXWv0GF8SZGoz6nz7HspJ65gp2Ue0xijCW%2B8bROjn9NWieB4IOExL%2FqfNoz0Vm1UyyHdnM5N%2BFZrvkasBWBPx7RB4wXjvOonFikVuFTHGw9MwqrKJxAY6pgGOkiZN%2Fp6gSuHWZ2gO50jDuvnux6IBhoaJx9K5PrBJoTsXtnDqCB6GLxDnm51%2B8VnYAKdGk1%2FA5%2FK3Sj9r7SfqnI0QKLv8wzUmx9MXl24oSRjayRYf%2BXlJ0I9cgYPojCztwPJkS%2FWR22VbtcktnU4fl9BqtU%2Bjh9JimtemHSrMaprN71Y%2FvF4QbKMwDhkJNV4jFuY4vJunLmuB5dWpsFT8pmKK9%2F0Q&X-Amz-Signature=20a46279b66caa1714958ad512fd539f766a4d4460f60bb89c4c58229c75aa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
