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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VOZSFX3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEi6vPgOpZxZgFRkrFPWGum7WXZcvfdbPplpWPFmYOcpAiEAoRYPyPQp4J%2B8JwemcrquY4wfNfhZBY9GZ%2FPMJHTKTKYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH2pc4a838tPrzsOCrcAxPE5jDBheMRZ0w%2FXJO6N%2FDh6RFbiVZG2Ul%2BTjZY57gUibac11j5YkzwMlNka8iPFhTSGzFrBWH1gBK4l1QcW2vS4bxj%2FwHN5gnIBIXr4umSkAvPBqJq3W85RNZ0cADeoLpDQ7ZgnXAq%2FLamNocpjm0drfaE8V41ou0XObuqUE4flDehKxsFjUR8P3g7V%2FWD7ktU%2FlPz%2BwvfUCaOTY1uySlbizLs72LAhsQlRTp26we%2BQ0qHJS23XJoF03bJjnBAnSev84BY55bz6oK57olei0SWT1uFXKBZi2dLL6y8cLov8XXcHjFIa03DQN3tq%2F%2BtxyiW1Wt54pJncPnP1fuvfH6OXsZNr2DQz3KK18uSSHFV03TFFjIcxNlUXYmNH5Aqr0ga5nV%2FdWTGcg9RC72MAD%2BnF%2FZeGiJTqUxK0t4PjGxmDO4NEOtp7rjDBFl0UAbAbS9w1ZCCWXHhPOTFakloHK7O7iO8RNGmthrR80SQnRRO0YoM6WPNNjZSyytjRlYWxXrfyFaSpWgNLu1enXC%2BXmPH99sgxlasdnlfRMaXyWxjnmwpnEMvw795oK0iT70ka12k0HU7zreT35kSFp4m0BtzaBHlR81JZV7Oe9a0guWeMkZVOBs6Kr%2FsJFLMMInKqL8GOqUBLErFfq2lJ3aURWhSKK2DuCcUylSj0nMTmVG8ym%2FP4IZKC%2Bqb1DRZu7Yb6Tzo%2F4TeXYZrCjOcK%2BPpqZkDaDRP7RTqSSuhvfYMTNDjRybKu5yk2A8Gb2g6fmjy%2BRuJiXHreocHi%2B2KmP2HIEhgyKP%2FYSRqr2%2BuT6ml39d2NPFHEfWT2aqtoOW1tixz6KGr4hfKH5n5E2yoIXsXr1vIp9HjY7Jr5B5e&X-Amz-Signature=7edde66b8af5bb6f9c1ca0ca9e340ae1196f9738035bcdb36d29a7371284d42c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VOZSFX3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEi6vPgOpZxZgFRkrFPWGum7WXZcvfdbPplpWPFmYOcpAiEAoRYPyPQp4J%2B8JwemcrquY4wfNfhZBY9GZ%2FPMJHTKTKYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH2pc4a838tPrzsOCrcAxPE5jDBheMRZ0w%2FXJO6N%2FDh6RFbiVZG2Ul%2BTjZY57gUibac11j5YkzwMlNka8iPFhTSGzFrBWH1gBK4l1QcW2vS4bxj%2FwHN5gnIBIXr4umSkAvPBqJq3W85RNZ0cADeoLpDQ7ZgnXAq%2FLamNocpjm0drfaE8V41ou0XObuqUE4flDehKxsFjUR8P3g7V%2FWD7ktU%2FlPz%2BwvfUCaOTY1uySlbizLs72LAhsQlRTp26we%2BQ0qHJS23XJoF03bJjnBAnSev84BY55bz6oK57olei0SWT1uFXKBZi2dLL6y8cLov8XXcHjFIa03DQN3tq%2F%2BtxyiW1Wt54pJncPnP1fuvfH6OXsZNr2DQz3KK18uSSHFV03TFFjIcxNlUXYmNH5Aqr0ga5nV%2FdWTGcg9RC72MAD%2BnF%2FZeGiJTqUxK0t4PjGxmDO4NEOtp7rjDBFl0UAbAbS9w1ZCCWXHhPOTFakloHK7O7iO8RNGmthrR80SQnRRO0YoM6WPNNjZSyytjRlYWxXrfyFaSpWgNLu1enXC%2BXmPH99sgxlasdnlfRMaXyWxjnmwpnEMvw795oK0iT70ka12k0HU7zreT35kSFp4m0BtzaBHlR81JZV7Oe9a0guWeMkZVOBs6Kr%2FsJFLMMInKqL8GOqUBLErFfq2lJ3aURWhSKK2DuCcUylSj0nMTmVG8ym%2FP4IZKC%2Bqb1DRZu7Yb6Tzo%2F4TeXYZrCjOcK%2BPpqZkDaDRP7RTqSSuhvfYMTNDjRybKu5yk2A8Gb2g6fmjy%2BRuJiXHreocHi%2B2KmP2HIEhgyKP%2FYSRqr2%2BuT6ml39d2NPFHEfWT2aqtoOW1tixz6KGr4hfKH5n5E2yoIXsXr1vIp9HjY7Jr5B5e&X-Amz-Signature=0bd4ab671b9ba8445391e087f9cf091b3a5e1432b9517cb2d5edfea69f20d977&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
