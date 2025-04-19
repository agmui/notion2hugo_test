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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWJJKRD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8oIrlCyVzhzr2%2Fyv0BEioLAqhUH380M8Zsimj8JlFcAiANjGoTnv%2BIAlL%2Fx%2Bbm3ulMtkotG2sLlkiarh8SZkSB2yqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRBie2KgzJpHT18qKtwDIgvCeGitX9SSBkyIKBJXD6cTPHfUWvIk1yHrKQdHW3Gr6lUffow19LjRG3EY3w9Fxpqn1J4am6uYFBO91YfzktTh7Eu3Yh0TojVlDQgrRcGWdhcYm%2B0tKdwfK8gMa7ZwXYgEgKvzWHDCuJygnLfIaKzUbz2s8lxSnQgsEj652rKCMJMJsS2Y2heS1dwCQ4gZCofgL0a9bXUb076rlpC0B%2FjkB0ejYwGtazH43NJbqI2wr9r9OuUPaauzxCussTZ%2Fa51a4F9ZShjyDuMEt3aEA48JE%2FQwfgxAtxKAi0WGyTizgu%2BCyV05QPWQM7%2FqUU1Qfp3exBBswkYbN2NMrA%2BohlrddZ5%2FNPq%2FPKTBs4V%2BH79jCCQnqRXpGpvqO0Y8mGQcl%2BN1QM%2F4CROOSxEsn5jrwoAEGl1p3TaUVlaFjPF0fh5LBrMh00mNDF2j3dCgISbBAfiVg4XBIqmO2xtJBmCHQCtid0lr0EaIHFLe4gwjuBSUYWbsHJqRdwRPKlFmY7u5VXb6TgF8z%2BVpfNpiCBVvnbBgRRqAXi6apdixIsOxIV%2BOC6pal6vrVAuF145QPpM9tuIt1pRTZeHhZ2m%2Fj%2B%2F9LZCN4nhLmAFueHFAQKKhbqLotghfwBqa%2FI88KlEwrqGMwAY6pgGyc4SsqHvOMYctdFnUXSLrfRimSmh51FmxStkfqDg5UrvzZSobMt9qFq0kNR%2BskN%2BhJESxdVZvGuLBNKJcr3Al%2FdvNBR5bSQ%2BfCxUPQIlQ14vp6tslCIK9A5voDsrzko1pMETJcsu1t9kXYHSjxk%2BalrCznK2%2Fb70MvqZuSTUJ2kd2g6RrIiX9RnoGpx0F5VpIlh15MYyhi8NmxMXSriF%2FD4MzjvJC&X-Amz-Signature=43ab8b1c87efce3fce796ec1f2e22dd177b4913b837a5f25702bf7043025bd1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWJJKRD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8oIrlCyVzhzr2%2Fyv0BEioLAqhUH380M8Zsimj8JlFcAiANjGoTnv%2BIAlL%2Fx%2Bbm3ulMtkotG2sLlkiarh8SZkSB2yqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRBie2KgzJpHT18qKtwDIgvCeGitX9SSBkyIKBJXD6cTPHfUWvIk1yHrKQdHW3Gr6lUffow19LjRG3EY3w9Fxpqn1J4am6uYFBO91YfzktTh7Eu3Yh0TojVlDQgrRcGWdhcYm%2B0tKdwfK8gMa7ZwXYgEgKvzWHDCuJygnLfIaKzUbz2s8lxSnQgsEj652rKCMJMJsS2Y2heS1dwCQ4gZCofgL0a9bXUb076rlpC0B%2FjkB0ejYwGtazH43NJbqI2wr9r9OuUPaauzxCussTZ%2Fa51a4F9ZShjyDuMEt3aEA48JE%2FQwfgxAtxKAi0WGyTizgu%2BCyV05QPWQM7%2FqUU1Qfp3exBBswkYbN2NMrA%2BohlrddZ5%2FNPq%2FPKTBs4V%2BH79jCCQnqRXpGpvqO0Y8mGQcl%2BN1QM%2F4CROOSxEsn5jrwoAEGl1p3TaUVlaFjPF0fh5LBrMh00mNDF2j3dCgISbBAfiVg4XBIqmO2xtJBmCHQCtid0lr0EaIHFLe4gwjuBSUYWbsHJqRdwRPKlFmY7u5VXb6TgF8z%2BVpfNpiCBVvnbBgRRqAXi6apdixIsOxIV%2BOC6pal6vrVAuF145QPpM9tuIt1pRTZeHhZ2m%2Fj%2B%2F9LZCN4nhLmAFueHFAQKKhbqLotghfwBqa%2FI88KlEwrqGMwAY6pgGyc4SsqHvOMYctdFnUXSLrfRimSmh51FmxStkfqDg5UrvzZSobMt9qFq0kNR%2BskN%2BhJESxdVZvGuLBNKJcr3Al%2FdvNBR5bSQ%2BfCxUPQIlQ14vp6tslCIK9A5voDsrzko1pMETJcsu1t9kXYHSjxk%2BalrCznK2%2Fb70MvqZuSTUJ2kd2g6RrIiX9RnoGpx0F5VpIlh15MYyhi8NmxMXSriF%2FD4MzjvJC&X-Amz-Signature=15302c6510af2884ca2e1e7f9d2a8054704b6474c0118c7411a3f228ea55ceec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
