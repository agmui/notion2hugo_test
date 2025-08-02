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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMIOREF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9rcGLdmSadozMXTlcZEEx5hbO4EvhJBkQnJEjUgODzAIhANrwKUA1W0dysUbyPQonV1Q6h%2Bv2dMYnFy1UZ0dmAHzPKv8DCBYQABoMNjM3NDIzMTgzODA1IgxjjkihN3%2Bzpb11rIsq3ANunbZs0xyjyIwqYJUoEun3w73WFTUMfFUmddehNhps7HSkLRkeSlBYhzn7Af8PkKzJhXUri2qGY%2FMd65G2%2BHG60fSyzEk3jMyNsau4jxobW9ln1TlT8OIURHTXhThld0Tc%2BCog%2Fw30VoKhonRmjgLdq%2F1wES7UomGDVFK5eE%2B61WKRaub3AxL6sJ57Y1Q4PwBn7pR%2FKVfAAC2W%2BaesALIdRsXJIkPiX1OsXylZ4LjTOuZ3SQgR%2FpljtGoiYl96x%2BiP4TPqAfovE8sKBPMh%2B7Xyv5XPMgjTdMthvdWyIONGUJdHxSSCGa5N%2FWAmaD%2FE9kkVwzpoOoM%2FuBjYJ%2BQrVamNGWla6v2A5zwX%2BPez%2FtgNBh%2BzvwXx%2BZuXq5LHGfRtkHPqlwBvb2yzB2aGIplXn5jxBbPNwAsKEMlM0pvXxo6x9S7Cb0VntikUWu36l4hYJx1i%2BdEJ1t%2FHZA68KIfiLBXLtyMN9mIMlPEx8tWWbCukeLX7uttB0FbQ%2FzEFnDFz7fuSwuv%2Fod6SI4LuhcHgq7dOv1EBJlOY%2F%2FRmhWg1sBjv09fI1gZCxVw46BJYFwgZ2xYkHS%2FysYklVJXILfj80apk5Ebv9PB7pjaE6C22btHeHfE6fZQZzu%2Bw%2Bxf%2BcDCakrjEBjqkAQFPu49z9O43oDSFQSuZXXYiw6YMO7gJqFCw%2BtutRAm3PTaWMPgb3IpSXK%2FjcxCrWKX3MVhVCpctGMMilCkQjUargReszaLNwadUSRBjyRe0fqTSBfO4JsYhio77I66hvWpRrtVEAJHomumUV57FRdA6Dp4y9rpYoPSlFLc1MIBwVqdocd2rYVKJJWfVGgI3KXpHixLuxSsEcDiX6aSMlTuXn3q6&X-Amz-Signature=b1aa4fc89a056e8935bc68ec96052e6b4dd74e45aad45913f0688b72df3302ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMIOREF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9rcGLdmSadozMXTlcZEEx5hbO4EvhJBkQnJEjUgODzAIhANrwKUA1W0dysUbyPQonV1Q6h%2Bv2dMYnFy1UZ0dmAHzPKv8DCBYQABoMNjM3NDIzMTgzODA1IgxjjkihN3%2Bzpb11rIsq3ANunbZs0xyjyIwqYJUoEun3w73WFTUMfFUmddehNhps7HSkLRkeSlBYhzn7Af8PkKzJhXUri2qGY%2FMd65G2%2BHG60fSyzEk3jMyNsau4jxobW9ln1TlT8OIURHTXhThld0Tc%2BCog%2Fw30VoKhonRmjgLdq%2F1wES7UomGDVFK5eE%2B61WKRaub3AxL6sJ57Y1Q4PwBn7pR%2FKVfAAC2W%2BaesALIdRsXJIkPiX1OsXylZ4LjTOuZ3SQgR%2FpljtGoiYl96x%2BiP4TPqAfovE8sKBPMh%2B7Xyv5XPMgjTdMthvdWyIONGUJdHxSSCGa5N%2FWAmaD%2FE9kkVwzpoOoM%2FuBjYJ%2BQrVamNGWla6v2A5zwX%2BPez%2FtgNBh%2BzvwXx%2BZuXq5LHGfRtkHPqlwBvb2yzB2aGIplXn5jxBbPNwAsKEMlM0pvXxo6x9S7Cb0VntikUWu36l4hYJx1i%2BdEJ1t%2FHZA68KIfiLBXLtyMN9mIMlPEx8tWWbCukeLX7uttB0FbQ%2FzEFnDFz7fuSwuv%2Fod6SI4LuhcHgq7dOv1EBJlOY%2F%2FRmhWg1sBjv09fI1gZCxVw46BJYFwgZ2xYkHS%2FysYklVJXILfj80apk5Ebv9PB7pjaE6C22btHeHfE6fZQZzu%2Bw%2Bxf%2BcDCakrjEBjqkAQFPu49z9O43oDSFQSuZXXYiw6YMO7gJqFCw%2BtutRAm3PTaWMPgb3IpSXK%2FjcxCrWKX3MVhVCpctGMMilCkQjUargReszaLNwadUSRBjyRe0fqTSBfO4JsYhio77I66hvWpRrtVEAJHomumUV57FRdA6Dp4y9rpYoPSlFLc1MIBwVqdocd2rYVKJJWfVGgI3KXpHixLuxSsEcDiX6aSMlTuXn3q6&X-Amz-Signature=7c3d2ae6f11aff637a08acb296e06c2673b676d7c2d6819c625b06d5ae42c38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
