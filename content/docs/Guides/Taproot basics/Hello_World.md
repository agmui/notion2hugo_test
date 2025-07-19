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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHK35AD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2ByMPaeTOoVQyO%2FZT%2BdxxmtOxIgmxl3n1JwS6o9KA%2BQIhAKqU5HjVkc40xevwRf4CoWJfiE25TtyglXkIHWR0D1oYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySi5PYyXxQ%2B453ecUq3AN5%2FTUH54m5HBHD6ckL6QfMF5aOENhNZI5Yx8%2BYlu5M95Jjst7GUq3iCaHGviaWIpcO2%2Fbnk2uc%2BS73pn2HEBcp6iO%2Fh08C2UsStFZSduLNmh4S221D0bTPa6Qb8ysfWKYZ%2FBClz9238DIs7wSv%2BnGjGA7FX6PRFhJTZ%2FU5QKfBWNtQOIrgj52NcinVVag9Xo2QwdHGRUZND5vgSdhd0cyuR38zcVfd1w74erEPbJKACPSE1tewM%2FjJhbDaLkO%2B6DVDBg3o9Za1csjjnjbxgog4AROgdpW26CYDVOxTU3raoBhaVago9RTsyczOvBpc12ggT2M%2B%2FxUBuJ60lDcJaGJdtrqd3gBbMDJ1HADn4OGZ6Ucoe9Kavgxmkgza6ge%2B72R1NSjEKbk1gi%2Br2MQTZ0wmhPcl2fnehF43Q5S8EnMnxTTdCDeoBlSYkUSDSa5qZXdxv821FmkrM%2F4cHqDUs%2BTzt0%2BGF936u%2Fu8t4vlhEUHI9RNKwLGH%2F%2FQqmPiNWLmZCTlmysgJN8fbfOyBtvsKTckMdYJiId98VIRxpTdxDV%2BfT8LACM%2Fu%2FT3%2FBkbdaxTtnByZGB7HrQt5SW6zvxqlO%2Fjwg2XUvvTf7KSosg3jx2XMBx1ZyC7L2wbbhhL%2BzD0oOzDBjqkAfu2VCiULB5Sw5W895q7qwNd9gQoyCZecgUZWW%2BV2aHUWIPaw4lD92BzFU1108sDuNMK5tIcxVFJfJCPEf2IUDnCIONqCgPhzmLMUqD0kgMa1mzgLfu5V3pSLOqKwyFX3sKvZBfo0v5VEZLEhwRbQMC9IzB00TI6vFLnddcbswjAEF66xR%2FB%2BpTltjVdX1OblSVxYvAabcn1clsP%2FxBOvP7zpJLj&X-Amz-Signature=3a8c7d1542cf3bc5e5ff01ae7818df3383ae309f19744675a9702cac4f78530e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHK35AD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2ByMPaeTOoVQyO%2FZT%2BdxxmtOxIgmxl3n1JwS6o9KA%2BQIhAKqU5HjVkc40xevwRf4CoWJfiE25TtyglXkIHWR0D1oYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySi5PYyXxQ%2B453ecUq3AN5%2FTUH54m5HBHD6ckL6QfMF5aOENhNZI5Yx8%2BYlu5M95Jjst7GUq3iCaHGviaWIpcO2%2Fbnk2uc%2BS73pn2HEBcp6iO%2Fh08C2UsStFZSduLNmh4S221D0bTPa6Qb8ysfWKYZ%2FBClz9238DIs7wSv%2BnGjGA7FX6PRFhJTZ%2FU5QKfBWNtQOIrgj52NcinVVag9Xo2QwdHGRUZND5vgSdhd0cyuR38zcVfd1w74erEPbJKACPSE1tewM%2FjJhbDaLkO%2B6DVDBg3o9Za1csjjnjbxgog4AROgdpW26CYDVOxTU3raoBhaVago9RTsyczOvBpc12ggT2M%2B%2FxUBuJ60lDcJaGJdtrqd3gBbMDJ1HADn4OGZ6Ucoe9Kavgxmkgza6ge%2B72R1NSjEKbk1gi%2Br2MQTZ0wmhPcl2fnehF43Q5S8EnMnxTTdCDeoBlSYkUSDSa5qZXdxv821FmkrM%2F4cHqDUs%2BTzt0%2BGF936u%2Fu8t4vlhEUHI9RNKwLGH%2F%2FQqmPiNWLmZCTlmysgJN8fbfOyBtvsKTckMdYJiId98VIRxpTdxDV%2BfT8LACM%2Fu%2FT3%2FBkbdaxTtnByZGB7HrQt5SW6zvxqlO%2Fjwg2XUvvTf7KSosg3jx2XMBx1ZyC7L2wbbhhL%2BzD0oOzDBjqkAfu2VCiULB5Sw5W895q7qwNd9gQoyCZecgUZWW%2BV2aHUWIPaw4lD92BzFU1108sDuNMK5tIcxVFJfJCPEf2IUDnCIONqCgPhzmLMUqD0kgMa1mzgLfu5V3pSLOqKwyFX3sKvZBfo0v5VEZLEhwRbQMC9IzB00TI6vFLnddcbswjAEF66xR%2FB%2BpTltjVdX1OblSVxYvAabcn1clsP%2FxBOvP7zpJLj&X-Amz-Signature=e190e5507b1d80dac91b1a964fb4bc315930dc0640d6b39e372487222546bb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
