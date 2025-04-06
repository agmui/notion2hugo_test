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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IELVHRS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgfLZ618342SxCj6FA%2FobWPwnFhC6iQW7depjyGtEOwIhAMxn5J5qRXShxCRaLBFQAYoY4eyom%2BJMPefpHdk6vw0yKv8DCDcQABoMNjM3NDIzMTgzODA1IgwL7BysbK6D4SUd%2Fmcq3AOo%2BAGA80zpAoMIbYGLBT49oOvmzXnVFhcVDGEeLIZIdE2ypCwo5j9TV6Ib%2FVRHSXNZ3wfWPEzrTe1AFI48VSKXGKjev22ZH0AaaAm3QhpDoZswZm%2BGgzFhsVpVt7xjjgxFQp72gjjUaOivfcYYLI7iDOVLjF2PPUUBnyFX1wrDtltuB465DC%2BXXPRGnvQkNPXyVmhRECqRwqLVt1pnW28%2BB9x4OVsof9%2BmboV9Y%2F0bcKSuRbPPpzD3sX1nIhH%2BKE2r9%2FbC4OEIKLcmRoZIHf1MZU4MKZapaTVgB9rKQ8l11KeiQo2S7iJ9ukah0izV92vIUgZKR8ss7btGauTYKMlq5BhzZJK7gAGmbMQu38QzS1WHa25fxO01GE%2BG91e71ZyB8rZjfi7Tc4Ss%2BuRotLWbPDl4BwgrWMot4jr3TW6jGbvAFXaUI14xZ5eV%2BVrF3uLSyQHRo9Atbz1wb2uJ5%2Fl60gMAn21CIdFIxJYzbFj5wXzdKIL0ZPNgOoTckliiBheeFSK2HJJngR7YRme4Ju1uDXK8eMbVG3rgr0%2FYOb8Be%2BbE8v1O1tWX5t%2Bhzhulwsb9bhMmroUlUv4IvhX%2F3Ilw%2F3t89e6CQymHYeyMLGKZq05VBPMRxpVq2Hii8jDCw8a%2FBjqkAfVxJ9Vr8z1Pl76BCriQwtN4RLJe6OWa0K6vyus1GKjo%2Fq4rI6wVog80cwUZvoX0TEEwjkSGyKkwClzDTf00cxfkvfDMgirApYWRY%2FZTlRxhD%2BbewhOERXQh1E80%2B3YmhqqPxSWlnDbHi4lbjjUjptuD974ypvGb%2Bj9dzmkd%2Fh9gNY2g82F0Y238vaLN2cly82Tm%2Bvp3I%2BRP%2Byit9XukN%2FZOymRn&X-Amz-Signature=de991abb91c78b95422063cd8d8bdc5ec6c1b7e9849a7af80ab4612eb5359d68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IELVHRS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgfLZ618342SxCj6FA%2FobWPwnFhC6iQW7depjyGtEOwIhAMxn5J5qRXShxCRaLBFQAYoY4eyom%2BJMPefpHdk6vw0yKv8DCDcQABoMNjM3NDIzMTgzODA1IgwL7BysbK6D4SUd%2Fmcq3AOo%2BAGA80zpAoMIbYGLBT49oOvmzXnVFhcVDGEeLIZIdE2ypCwo5j9TV6Ib%2FVRHSXNZ3wfWPEzrTe1AFI48VSKXGKjev22ZH0AaaAm3QhpDoZswZm%2BGgzFhsVpVt7xjjgxFQp72gjjUaOivfcYYLI7iDOVLjF2PPUUBnyFX1wrDtltuB465DC%2BXXPRGnvQkNPXyVmhRECqRwqLVt1pnW28%2BB9x4OVsof9%2BmboV9Y%2F0bcKSuRbPPpzD3sX1nIhH%2BKE2r9%2FbC4OEIKLcmRoZIHf1MZU4MKZapaTVgB9rKQ8l11KeiQo2S7iJ9ukah0izV92vIUgZKR8ss7btGauTYKMlq5BhzZJK7gAGmbMQu38QzS1WHa25fxO01GE%2BG91e71ZyB8rZjfi7Tc4Ss%2BuRotLWbPDl4BwgrWMot4jr3TW6jGbvAFXaUI14xZ5eV%2BVrF3uLSyQHRo9Atbz1wb2uJ5%2Fl60gMAn21CIdFIxJYzbFj5wXzdKIL0ZPNgOoTckliiBheeFSK2HJJngR7YRme4Ju1uDXK8eMbVG3rgr0%2FYOb8Be%2BbE8v1O1tWX5t%2Bhzhulwsb9bhMmroUlUv4IvhX%2F3Ilw%2F3t89e6CQymHYeyMLGKZq05VBPMRxpVq2Hii8jDCw8a%2FBjqkAfVxJ9Vr8z1Pl76BCriQwtN4RLJe6OWa0K6vyus1GKjo%2Fq4rI6wVog80cwUZvoX0TEEwjkSGyKkwClzDTf00cxfkvfDMgirApYWRY%2FZTlRxhD%2BbewhOERXQh1E80%2B3YmhqqPxSWlnDbHi4lbjjUjptuD974ypvGb%2Bj9dzmkd%2Fh9gNY2g82F0Y238vaLN2cly82Tm%2Bvp3I%2BRP%2Byit9XukN%2FZOymRn&X-Amz-Signature=2ba3ade2e957c3d6e90077076ede30535de8e4529ca0c27a6387058d67062edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
