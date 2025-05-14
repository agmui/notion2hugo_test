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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MK4XHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH%2FMkPszi3lDP4xV7mrlM77MGRizk45SaMepBKwuN4HLAiBd2210cCeoj8C6F8iIehAV5s%2B2pMa6frUrg7Eu3GqMDir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMx%2FzdqZJXU1UoIhfIKtwDNPyah5zH8GAr5zpaQOd3UPuwbVmz%2FeTxJ7IANrWUvvGOaiTUrnCXRfAv%2Bcg%2F9BANV5f4O0PbAeq59CQc%2FJgwi09ufA4OJy9GM1elNy5xcb8JDXE%2FZZ02hJN%2FteVEXse0nYsDRXsCws6CKyKlMlPKKqX%2BdXDqJpnjE6NiU97yQlC2BMZp8Do%2BWa98OUnvwlAbicyH4AValmA%2Fb8jISAn89C6PzGoIqO5EYjjjxiVZVJjJA08rBk7O%2B34YXVH%2BvMCJSV4dBkdDEmoDk6jns6Q5xBFO%2FGYd%2F%2FZ5EKLe6MT0uDPCbTBVOo%2FdQ5S2WPeLmE24q%2BGLu%2FSmO1K1MFg7LzvDCDVm8zg%2BZM%2BTWWF%2FhovS4ozvllmyRMyapbJfuOKLSo%2Fiq2Lmn3BwGeHoPxNTXnXOl4J8Mebgi3PF%2Bizwao%2BoQJmRF3dbZMjZPVx44rJvfVtLsgaFqxEpwuhOGUWwm5nVGI1d5326YtdG35s2Q2Gm9gFMo2Ak9vTDNndodd637oNlSxfuSCSK%2BtzCH%2Bp5kD%2BHrPt0sxs8%2B1Sile8ilHrBv9psoATAJvTCnrf8cEFVabTkOPzzE84rZYtK7RnNt3K7btJvKBBllne2GBWnu1g8TvX1QE%2BYBvBl4BRvMPYwwaGUwQY6pgEvByL3PxVI8j5lLgCeWYYjc62gF1JvsqwTc9HYdrkEoCyMBCiE%2FydmHbQsspsZNO8bgL3XNOowLH083xhiSoPhEx39ISZ4ZywwUEm3kwWRjdIbhVyZGaiIzfkyPMDD%2BIvBZYEn5aXHPvS%2B8pPaqIVAT4W0ktRkyN9k9wVWHkHgHExrNByernMgilGQFyEt%2BfOwh9aF9sGEN7afnDAaEZt8W1jXi5Tt&X-Amz-Signature=4b34ed815c4348dc6ee90cb43e152a9a63f53e5eb30635544c31899c5b816f30&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MK4XHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH%2FMkPszi3lDP4xV7mrlM77MGRizk45SaMepBKwuN4HLAiBd2210cCeoj8C6F8iIehAV5s%2B2pMa6frUrg7Eu3GqMDir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMx%2FzdqZJXU1UoIhfIKtwDNPyah5zH8GAr5zpaQOd3UPuwbVmz%2FeTxJ7IANrWUvvGOaiTUrnCXRfAv%2Bcg%2F9BANV5f4O0PbAeq59CQc%2FJgwi09ufA4OJy9GM1elNy5xcb8JDXE%2FZZ02hJN%2FteVEXse0nYsDRXsCws6CKyKlMlPKKqX%2BdXDqJpnjE6NiU97yQlC2BMZp8Do%2BWa98OUnvwlAbicyH4AValmA%2Fb8jISAn89C6PzGoIqO5EYjjjxiVZVJjJA08rBk7O%2B34YXVH%2BvMCJSV4dBkdDEmoDk6jns6Q5xBFO%2FGYd%2F%2FZ5EKLe6MT0uDPCbTBVOo%2FdQ5S2WPeLmE24q%2BGLu%2FSmO1K1MFg7LzvDCDVm8zg%2BZM%2BTWWF%2FhovS4ozvllmyRMyapbJfuOKLSo%2Fiq2Lmn3BwGeHoPxNTXnXOl4J8Mebgi3PF%2Bizwao%2BoQJmRF3dbZMjZPVx44rJvfVtLsgaFqxEpwuhOGUWwm5nVGI1d5326YtdG35s2Q2Gm9gFMo2Ak9vTDNndodd637oNlSxfuSCSK%2BtzCH%2Bp5kD%2BHrPt0sxs8%2B1Sile8ilHrBv9psoATAJvTCnrf8cEFVabTkOPzzE84rZYtK7RnNt3K7btJvKBBllne2GBWnu1g8TvX1QE%2BYBvBl4BRvMPYwwaGUwQY6pgEvByL3PxVI8j5lLgCeWYYjc62gF1JvsqwTc9HYdrkEoCyMBCiE%2FydmHbQsspsZNO8bgL3XNOowLH083xhiSoPhEx39ISZ4ZywwUEm3kwWRjdIbhVyZGaiIzfkyPMDD%2BIvBZYEn5aXHPvS%2B8pPaqIVAT4W0ktRkyN9k9wVWHkHgHExrNByernMgilGQFyEt%2BfOwh9aF9sGEN7afnDAaEZt8W1jXi5Tt&X-Amz-Signature=ec1f0b964ede3a88e5d0ec16ff5c30fa4f36c7936cdb148effe00e720da333be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
