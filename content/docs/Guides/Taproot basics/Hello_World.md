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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWZN7W2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5x94GXDfAJ8B%2BD8rdWYPfrfkn10rxJIiyk%2Bc9BXtFtQIhAK6eK1ofRv8VUJW7cG5zajCgQCLqU6Z4DFNy27oN4%2B83Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxobI8UXKWUnDZAe0Aq3APw%2BarwRD3o8msafIlhl21ihR%2FTlgyU22Rui93I59iN%2BwDp2Hm7aZlXhKV3IqsZ9RnInEqZWiN6B4KCOIxHlt6Nd%2FlklnOW4DUPcFH%2BvjVcx8bvGekOZYWDBLiGROFBrUisShzEsefpAIthGSazApS8tht9V7qpTRvPYte2gr13cAnb8iMN5HlIePzpC4IOd3GQmTePV26KTEN9R7Msn0OXEcGdIULIsqaqoNU821r766jQLB%2Br7Css0l3JJbw86KOdqyVBBZkIfDPq61Jva48RsuWKZc%2BN6usGVLlPFi%2Fbu%2BLoAMZ3qyhEGueFd3IpgB%2Fxer4vvvQR6aMXke9SPUpJ%2FaB58HnU58YBOiOs8IiK0DNQIfbdY8T%2Bly0guPq3g7yAvfodSRUYZt4Kic1bptsk2nSvycmqYdUWeX%2BO4Q%2FwREMiogFn3vbB4UKVNMzFCE%2F8g0KD7n8o%2F%2Bz8U1OPUUXkw7aaz2krq3jjaF3OO0AhGm0VHwOoHMsFCUQh4uuezcua1tLTNfppfjVwWijS2N3hsPRlSuP%2Babkrb36wl%2BKJab6r8r26zBL%2Fu8CsUmxcBvUQsqSJyAPe%2FkmYpEQnjOQvrOP9ee30pzmwE0fqFKovhDlfehHTN7%2BwN3kOmzDiksa%2FBjqkAZaFzfTBaBMNqYzgIhLRSkrZFAct2EfwZXy%2BTye2spNaYAcKBpCGLGcIpz5PiRoO4WQv3JhLQOvcX1tUH1o7u7cAPuAokhx%2Fzf9b7sVLk6bNbL0kmTT3rQfRYfxV7lmpHWC2QrPdto%2BX%2BieqQf3fIHji4LZIDKfP7NC62J7fNnl%2FHITw9wuEcSoxXGLDf8rZmtTLZncTDhSeEWEIaFiWTz%2BSLIj4&X-Amz-Signature=5fef280648a055d9af1c267954c95ff68f5bd421e81ae1ca489559c9702e3a54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWZN7W2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5x94GXDfAJ8B%2BD8rdWYPfrfkn10rxJIiyk%2Bc9BXtFtQIhAK6eK1ofRv8VUJW7cG5zajCgQCLqU6Z4DFNy27oN4%2B83Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxobI8UXKWUnDZAe0Aq3APw%2BarwRD3o8msafIlhl21ihR%2FTlgyU22Rui93I59iN%2BwDp2Hm7aZlXhKV3IqsZ9RnInEqZWiN6B4KCOIxHlt6Nd%2FlklnOW4DUPcFH%2BvjVcx8bvGekOZYWDBLiGROFBrUisShzEsefpAIthGSazApS8tht9V7qpTRvPYte2gr13cAnb8iMN5HlIePzpC4IOd3GQmTePV26KTEN9R7Msn0OXEcGdIULIsqaqoNU821r766jQLB%2Br7Css0l3JJbw86KOdqyVBBZkIfDPq61Jva48RsuWKZc%2BN6usGVLlPFi%2Fbu%2BLoAMZ3qyhEGueFd3IpgB%2Fxer4vvvQR6aMXke9SPUpJ%2FaB58HnU58YBOiOs8IiK0DNQIfbdY8T%2Bly0guPq3g7yAvfodSRUYZt4Kic1bptsk2nSvycmqYdUWeX%2BO4Q%2FwREMiogFn3vbB4UKVNMzFCE%2F8g0KD7n8o%2F%2Bz8U1OPUUXkw7aaz2krq3jjaF3OO0AhGm0VHwOoHMsFCUQh4uuezcua1tLTNfppfjVwWijS2N3hsPRlSuP%2Babkrb36wl%2BKJab6r8r26zBL%2Fu8CsUmxcBvUQsqSJyAPe%2FkmYpEQnjOQvrOP9ee30pzmwE0fqFKovhDlfehHTN7%2BwN3kOmzDiksa%2FBjqkAZaFzfTBaBMNqYzgIhLRSkrZFAct2EfwZXy%2BTye2spNaYAcKBpCGLGcIpz5PiRoO4WQv3JhLQOvcX1tUH1o7u7cAPuAokhx%2Fzf9b7sVLk6bNbL0kmTT3rQfRYfxV7lmpHWC2QrPdto%2BX%2BieqQf3fIHji4LZIDKfP7NC62J7fNnl%2FHITw9wuEcSoxXGLDf8rZmtTLZncTDhSeEWEIaFiWTz%2BSLIj4&X-Amz-Signature=34f6459417150135499ce3061a74d820e0ad664e8c72009e63f077021a60967d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
