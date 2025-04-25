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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UWDEX7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByuP%2BmwE6PUwKjBjkxEdwlgME5Sn2VsLAmykEnLjzuCAiEAgzd%2B5mlXgjTPAQ9k47df06pHD%2FzWbJgyJGVxn%2FCesHMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAVvsK5G%2BGivCtaTiSrcAw5ThhbYDte1yThvxuSIjCjfiQhDDC4X7FVg87cDy9DtlyD9AFPnuoZMNVXCtvlG8%2B2PUVh8HcoXYJkx6vZTeVizli8XiTfl70JflHrs6Dj6XrFW31TP2lg5rjP%2BltizLof1hSdVtdQKIoDMWr3WRfazb7XuczsXSG0CRnPB60yWhHRXmph4jhZm9bo1EAX0bGT0gvVkzBAxeTXukZSqzcN3JCSyP0PhsRq6gwdjxrCCngCqza9RapR6etoLqRZHNBcm01aqYcekp7nC88lEpaBCPgg57u%2Fxn%2FQ%2FGmWRAC%2FJOvj33k9L%2F2n3jDu4fz276odqjvFWtPJGco5Xnwd5X%2BEybzmaZXIOHJBTPgW4itc2qbQRVN8bTXsV%2Bx1ClpjSEtbcGv3BpvvoyxsljzmSwa65lzS1ox0Jiw7Qw56%2FqlowfFOsAECW1fjzhB2G8yBtihbyHWFo2Ut3Q8dt%2Bn%2B6%2FxwhsS0bKQ%2Fs2XK9ooZh3eOTqnqQQsyWrTBoI8H3t528%2Bwc%2Fp1S9dEqTD3jQeFAApVfDwLSCg8u%2F0GdZ6dtS19lgRPNCV%2BhyeWavuq1Ekd3CJsAmQMs0rApW9v9Mf%2BWFfDVS20GxxRXHi51KK4O8eSMtKA9%2BEdnOMBunOFlkMKTorsAGOqUBDN51n%2FLqARlJRxxauNtWF3LzgeR4CU0wu8rF6GUUFQX1cKGg7BP9lwogc2Xfun2pHaRsFm%2BgFjxy6XxGUdgOrxLXc4XSs0j%2FAVpF2t36JvBdcjHd9ysJPhvk8KW%2FpgiHdPwSNZT9HVO9ezOS50Tx6qs32kxA6kcamkbL82BNHGdejfp1KwNxEPuM%2Bfs%2Bk9h9uw9YTZbyDUABwLr8jEegQ%2BKOYlem&X-Amz-Signature=4fb45f290a1e9bc7c885c41fc045a51ae7bf1c6cd5498f7d4462cafba19a818e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UWDEX7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByuP%2BmwE6PUwKjBjkxEdwlgME5Sn2VsLAmykEnLjzuCAiEAgzd%2B5mlXgjTPAQ9k47df06pHD%2FzWbJgyJGVxn%2FCesHMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAVvsK5G%2BGivCtaTiSrcAw5ThhbYDte1yThvxuSIjCjfiQhDDC4X7FVg87cDy9DtlyD9AFPnuoZMNVXCtvlG8%2B2PUVh8HcoXYJkx6vZTeVizli8XiTfl70JflHrs6Dj6XrFW31TP2lg5rjP%2BltizLof1hSdVtdQKIoDMWr3WRfazb7XuczsXSG0CRnPB60yWhHRXmph4jhZm9bo1EAX0bGT0gvVkzBAxeTXukZSqzcN3JCSyP0PhsRq6gwdjxrCCngCqza9RapR6etoLqRZHNBcm01aqYcekp7nC88lEpaBCPgg57u%2Fxn%2FQ%2FGmWRAC%2FJOvj33k9L%2F2n3jDu4fz276odqjvFWtPJGco5Xnwd5X%2BEybzmaZXIOHJBTPgW4itc2qbQRVN8bTXsV%2Bx1ClpjSEtbcGv3BpvvoyxsljzmSwa65lzS1ox0Jiw7Qw56%2FqlowfFOsAECW1fjzhB2G8yBtihbyHWFo2Ut3Q8dt%2Bn%2B6%2FxwhsS0bKQ%2Fs2XK9ooZh3eOTqnqQQsyWrTBoI8H3t528%2Bwc%2Fp1S9dEqTD3jQeFAApVfDwLSCg8u%2F0GdZ6dtS19lgRPNCV%2BhyeWavuq1Ekd3CJsAmQMs0rApW9v9Mf%2BWFfDVS20GxxRXHi51KK4O8eSMtKA9%2BEdnOMBunOFlkMKTorsAGOqUBDN51n%2FLqARlJRxxauNtWF3LzgeR4CU0wu8rF6GUUFQX1cKGg7BP9lwogc2Xfun2pHaRsFm%2BgFjxy6XxGUdgOrxLXc4XSs0j%2FAVpF2t36JvBdcjHd9ysJPhvk8KW%2FpgiHdPwSNZT9HVO9ezOS50Tx6qs32kxA6kcamkbL82BNHGdejfp1KwNxEPuM%2Bfs%2Bk9h9uw9YTZbyDUABwLr8jEegQ%2BKOYlem&X-Amz-Signature=ae93c6639a929eb198381bd294625010357f7b20bf0d2c58f7d2d10de1080146&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
