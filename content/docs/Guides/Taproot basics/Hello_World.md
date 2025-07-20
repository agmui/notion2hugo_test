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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLOVLOL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3frEL6HvMYlejif97xhW%2FJNApkLK6Tnr3L50LdHqKZAiA1a5HskkQ2DeZ8AgPXzfaI1GTrhyTaf%2BU0Nk1lNt2uwCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmRoHX12rrOxTsibmKtwD51HDJ2aLSsxS4y7b4ijGvx3nJX0nFSISejLucns5nufRz9CW8NQsTbgp8hY0J8JY5YFuD7vvtufBuOPVtVSJtYCxt%2FRkQEwas2Niz5jx50vaJ5VdOcCf0PU2liXJa%2Fp54puNoawU4qhNUauuNVVF5XDmFQDjoEeDBHbAslYp6dg9Wj5g071vi1GPQl1vnvtD1qKPSgEwcxXPZgwhEAE%2FV%2BqXy5be6cvh3EqsUKyU7fRhdQxprNUI9L6FMVw209Protxxh8R%2B9X7%2BCFCg4fA7t8jMURRWJYa6ckQgcXM7k%2BqWPBL98UT4VqrcxqhHz46BnmnsAoKTxmnLzYy0s0Pe2W%2FlmiCrxt4UTz5wqiwE7I%2BVfs%2FLD9%2FUfHC0rjyfRnRopvifo4xtBc8B7nxrLBuDgEe2xYaFza0JUCJlZcHJTd2c2OzH3ByT326Af%2B7YgeKzOpTlTf0VLX5%2Fp8S9BBBE5JZQUEbSsibjQcAPyxma8dupkRZZ84rNGz2WJamsIQxRUEIUuTwtjd0hJoHMZWlYIwm%2Bwpf86IEJyFGzs6r8p%2FW40%2Bbt9E1PNB4gJd08i0ElJfJhm2GioMsV0yejf4M5maQgLYDtP9hTkx8wC4VngA%2BLy7UbFC%2F%2BYzLaJfcws9vzwwY6pgELu22AqaHvAX8mC5UL7QOhaKsNSEXVAQ3I4V%2BLaA9oc7tE8sMI28FKARfHRd9wPV0%2FASQa3kUcrF3jsmRgovMIKDaFkIXWM%2FaKhc9qIcWGqDJsGvw1kRvIH4mFcu6JEB4Gxkp5nyyYZcQbXiumPkE37W6cGphN7TTtyD55QuCDMz%2F56W0GP%2BujsJ3zuh%2BH9%2BLRxiW6X4DHgZb%2FO%2FCi9CkqU1ysDS7P&X-Amz-Signature=e3ce10fd6a91190f9b5dd09b7305c5d1346d35817947e17bb5cf424a514135bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLOVLOL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3frEL6HvMYlejif97xhW%2FJNApkLK6Tnr3L50LdHqKZAiA1a5HskkQ2DeZ8AgPXzfaI1GTrhyTaf%2BU0Nk1lNt2uwCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmRoHX12rrOxTsibmKtwD51HDJ2aLSsxS4y7b4ijGvx3nJX0nFSISejLucns5nufRz9CW8NQsTbgp8hY0J8JY5YFuD7vvtufBuOPVtVSJtYCxt%2FRkQEwas2Niz5jx50vaJ5VdOcCf0PU2liXJa%2Fp54puNoawU4qhNUauuNVVF5XDmFQDjoEeDBHbAslYp6dg9Wj5g071vi1GPQl1vnvtD1qKPSgEwcxXPZgwhEAE%2FV%2BqXy5be6cvh3EqsUKyU7fRhdQxprNUI9L6FMVw209Protxxh8R%2B9X7%2BCFCg4fA7t8jMURRWJYa6ckQgcXM7k%2BqWPBL98UT4VqrcxqhHz46BnmnsAoKTxmnLzYy0s0Pe2W%2FlmiCrxt4UTz5wqiwE7I%2BVfs%2FLD9%2FUfHC0rjyfRnRopvifo4xtBc8B7nxrLBuDgEe2xYaFza0JUCJlZcHJTd2c2OzH3ByT326Af%2B7YgeKzOpTlTf0VLX5%2Fp8S9BBBE5JZQUEbSsibjQcAPyxma8dupkRZZ84rNGz2WJamsIQxRUEIUuTwtjd0hJoHMZWlYIwm%2Bwpf86IEJyFGzs6r8p%2FW40%2Bbt9E1PNB4gJd08i0ElJfJhm2GioMsV0yejf4M5maQgLYDtP9hTkx8wC4VngA%2BLy7UbFC%2F%2BYzLaJfcws9vzwwY6pgELu22AqaHvAX8mC5UL7QOhaKsNSEXVAQ3I4V%2BLaA9oc7tE8sMI28FKARfHRd9wPV0%2FASQa3kUcrF3jsmRgovMIKDaFkIXWM%2FaKhc9qIcWGqDJsGvw1kRvIH4mFcu6JEB4Gxkp5nyyYZcQbXiumPkE37W6cGphN7TTtyD55QuCDMz%2F56W0GP%2BujsJ3zuh%2BH9%2BLRxiW6X4DHgZb%2FO%2FCi9CkqU1ysDS7P&X-Amz-Signature=368d32309c999c2889e101cfbd68afbafb959ebde1f7feb6e55f14e55ee666db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
