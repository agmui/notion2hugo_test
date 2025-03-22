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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKLJQKG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCOVnCxdpW1O0KxIW7N4O2ci0PMq2le7jU4TM1uCc%2BIkQIgdSLmeLlsQDkV7OHMjhQw4pE0oZAP3UEpM2MhvfrDKnUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC0R51DHMUSRyY%2FqyrcA%2FUpQf%2Baztncpvnek80LzT2He8nt81TDK1Tg9w2pWkARg2Iuk6wwTJDWKWQtXRy33ZzAEbUtoHi%2Fg39YtFzpjWW6ONWM%2FyVr51FcLVU61M1pxERbDsAINo3mhm4BkvvVGrMEtRy278cBGslq6mT7NJ6XHXv%2B0D25qAQEPb6gCPKngG5DL4hsQ5bQe5vzi5ZiMvkzau8S0e38OChtv9KcLaI%2F18Ue2fTppaESdqYNnIQdcbUeNRXFsKNTel%2B1r5r%2BjW5Wy%2FslNMBbIEO7nqYazREkgFfY40Mmh9jYTEAOuLbGFBq9CWB19A%2BvDamIKp7x0ntH3PhvgQ505uy5RfgtxE2P3xYIJXV8jNLBlORSJG6Ef7CXpf4O9o5ak%2Byg3EJJvkiBO%2FgL%2FPvLiZ3RpiMutH2F%2FjhOipG%2FEnFV%2Fm968rQ%2Fmt%2FQKKLDtSbpvZlzbOwCkxv7LkVbUuMTcwGPaFBu34OsFiroIpysfG9ZNfAXxW6E9Ly2iDtyh9h9JBr1R4HQCqi7NRTafE1BytNIKkCTNOyEAJqUsMDtYadv2EIBF3xG8r6xcaxNH54Igmxn2f4UyEo7204xiPCmJOJZZr72OrS5VuYXPck0g94ss%2Fkb1RGrSbdqMr9RXkwzoj6PMIO2%2FL4GOqUB9XoZnN6an%2Blt2RItZqapqSY%2Fgr4smytpIXFFwPWacCK%2BHihioDSO0OADE1AIsTLkOWhszTL%2FrI4ylgzg530r2uHMM9ChieCujq0IZQFUj42wEBVSJDsffRpJfmWQAYYlEjPSgOF3TEQ6dbHHW%2F2NcTpUat8ndu%2FH4tlNZbo2gqSJ%2BjRI1fTVpx7zI3Lq0A5lHiiuIIs6Ja8JChBM%2B8DuOPJZg5x4&X-Amz-Signature=1ec4a8387afc7c4cec1cb03c5dde45fc7ed22a915cb1b533e5195b6c01b0da42&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKLJQKG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCOVnCxdpW1O0KxIW7N4O2ci0PMq2le7jU4TM1uCc%2BIkQIgdSLmeLlsQDkV7OHMjhQw4pE0oZAP3UEpM2MhvfrDKnUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC0R51DHMUSRyY%2FqyrcA%2FUpQf%2Baztncpvnek80LzT2He8nt81TDK1Tg9w2pWkARg2Iuk6wwTJDWKWQtXRy33ZzAEbUtoHi%2Fg39YtFzpjWW6ONWM%2FyVr51FcLVU61M1pxERbDsAINo3mhm4BkvvVGrMEtRy278cBGslq6mT7NJ6XHXv%2B0D25qAQEPb6gCPKngG5DL4hsQ5bQe5vzi5ZiMvkzau8S0e38OChtv9KcLaI%2F18Ue2fTppaESdqYNnIQdcbUeNRXFsKNTel%2B1r5r%2BjW5Wy%2FslNMBbIEO7nqYazREkgFfY40Mmh9jYTEAOuLbGFBq9CWB19A%2BvDamIKp7x0ntH3PhvgQ505uy5RfgtxE2P3xYIJXV8jNLBlORSJG6Ef7CXpf4O9o5ak%2Byg3EJJvkiBO%2FgL%2FPvLiZ3RpiMutH2F%2FjhOipG%2FEnFV%2Fm968rQ%2Fmt%2FQKKLDtSbpvZlzbOwCkxv7LkVbUuMTcwGPaFBu34OsFiroIpysfG9ZNfAXxW6E9Ly2iDtyh9h9JBr1R4HQCqi7NRTafE1BytNIKkCTNOyEAJqUsMDtYadv2EIBF3xG8r6xcaxNH54Igmxn2f4UyEo7204xiPCmJOJZZr72OrS5VuYXPck0g94ss%2Fkb1RGrSbdqMr9RXkwzoj6PMIO2%2FL4GOqUB9XoZnN6an%2Blt2RItZqapqSY%2Fgr4smytpIXFFwPWacCK%2BHihioDSO0OADE1AIsTLkOWhszTL%2FrI4ylgzg530r2uHMM9ChieCujq0IZQFUj42wEBVSJDsffRpJfmWQAYYlEjPSgOF3TEQ6dbHHW%2F2NcTpUat8ndu%2FH4tlNZbo2gqSJ%2BjRI1fTVpx7zI3Lq0A5lHiiuIIs6Ja8JChBM%2B8DuOPJZg5x4&X-Amz-Signature=30468d81d9e2f9600458721bfdcb49aa5974e134b33b272c1b894419ca1d304b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
