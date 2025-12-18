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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTRB3KN%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhm%2Fc9zBPmXU%2FrE8Co2bw9pDxxISFgpPjjOm7QMqE%2BBAiEApCOT%2B6pSRHpREUmdXlrPle8IFKcl9LUMW%2FKvJHTpqqYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQfD5%2F0EeKVugvsXircA1y7L0OusbK5NWOxWCZIwxKko5qB58aTdNLwTsilxsNghx2yRIcBFiHUN8tMb3E%2BXWRbLXfIwdVJ5Y6PbZU3SQWxNTKNNgf%2By3w8b%2FmbJ9VWDufU94dSvRngvdqFJizPZCEOs5VFCauHHSdrAFmMcnIemV29ql1OsYmpc1NcZQW45%2BP2MX9df6Dewu7fYnOK4QW7oFg329IC92lK3Vawp7cNGK4f7we4OzgcNB7aVUrbWzKAXzsrupVa6RQ5odhxwU1fsQ%2FqUlNDql6mDWLLowDNgAz8i20sQaN3PysZM4w%2F4144OfsUtAP37JTRUVCOEsnONO0ZfHi0OTEDN%2FoytN6v1d%2Bf6jQWg2TbJwy%2BBDTNUR%2BHw33IPqQ60ENHMPk5mSfloMGJCgZXtMupyaepZXOsnSeKrO1P3CCmdXMkZ2oUoeK5Z3HyFVUYKxn5JNDYT3SQJ4zA7zXOPDvEqXwdXJiu2ZppLzfyg%2BCQOucXqnd%2B8tgVGcSaXfZUesa5YFFhLlTjueNLl4RC4Ybet8GckuKNlJXWVB%2B8eKlLmTeSl%2Fxs%2F0EoTHIeL1B69LKBo%2FEECBcC5jcfavoPKvaJfW5ID0Mv9RomKapxSLymRTzgojpBCR7O0otu3qGLQO5yMMesjcoGOqUBbugJ8Z9l9uVm%2F%2B6F1a52vvF%2FflENMQgAasINq3TJ3IeWpqJ0VzoQ57votgvO%2F2Q6ybqXtVfsl%2BFez6eiw%2Byu674a8RI5gp9ULTGVs%2F6w5oPrGAf7kl0Lr69wmkoN57pL3GlCV2VgjNWeQOcJpnKZcBz2Heb9KWpf8lucfbXMScyxBtVBRFKAtmZD%2FgwEBANAomMACYCXQnnQaNT6q69f4Me66Dpl&X-Amz-Signature=660cd82a134b5fb212bd3512430e7f4e87c00ef5d346c5746d535de2ef6e2632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTRB3KN%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhm%2Fc9zBPmXU%2FrE8Co2bw9pDxxISFgpPjjOm7QMqE%2BBAiEApCOT%2B6pSRHpREUmdXlrPle8IFKcl9LUMW%2FKvJHTpqqYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQfD5%2F0EeKVugvsXircA1y7L0OusbK5NWOxWCZIwxKko5qB58aTdNLwTsilxsNghx2yRIcBFiHUN8tMb3E%2BXWRbLXfIwdVJ5Y6PbZU3SQWxNTKNNgf%2By3w8b%2FmbJ9VWDufU94dSvRngvdqFJizPZCEOs5VFCauHHSdrAFmMcnIemV29ql1OsYmpc1NcZQW45%2BP2MX9df6Dewu7fYnOK4QW7oFg329IC92lK3Vawp7cNGK4f7we4OzgcNB7aVUrbWzKAXzsrupVa6RQ5odhxwU1fsQ%2FqUlNDql6mDWLLowDNgAz8i20sQaN3PysZM4w%2F4144OfsUtAP37JTRUVCOEsnONO0ZfHi0OTEDN%2FoytN6v1d%2Bf6jQWg2TbJwy%2BBDTNUR%2BHw33IPqQ60ENHMPk5mSfloMGJCgZXtMupyaepZXOsnSeKrO1P3CCmdXMkZ2oUoeK5Z3HyFVUYKxn5JNDYT3SQJ4zA7zXOPDvEqXwdXJiu2ZppLzfyg%2BCQOucXqnd%2B8tgVGcSaXfZUesa5YFFhLlTjueNLl4RC4Ybet8GckuKNlJXWVB%2B8eKlLmTeSl%2Fxs%2F0EoTHIeL1B69LKBo%2FEECBcC5jcfavoPKvaJfW5ID0Mv9RomKapxSLymRTzgojpBCR7O0otu3qGLQO5yMMesjcoGOqUBbugJ8Z9l9uVm%2F%2B6F1a52vvF%2FflENMQgAasINq3TJ3IeWpqJ0VzoQ57votgvO%2F2Q6ybqXtVfsl%2BFez6eiw%2Byu674a8RI5gp9ULTGVs%2F6w5oPrGAf7kl0Lr69wmkoN57pL3GlCV2VgjNWeQOcJpnKZcBz2Heb9KWpf8lucfbXMScyxBtVBRFKAtmZD%2FgwEBANAomMACYCXQnnQaNT6q69f4Me66Dpl&X-Amz-Signature=82234527492519101b11f8252df3541a2814bc807109847dbfd879008b9419ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
