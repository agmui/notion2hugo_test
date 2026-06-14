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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBPVKZJ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIByuZ232Zze5zgUdfeuBZjEHP%2FbBWOW5g7r%2BPIC%2FS3W6AiAexFKrmrI%2FvYV2Z393AeKEL%2FJGArnkXYI%2Bj7i%2FtQdtCir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BuMUrm%2FPQtdcbZ8qKtwDLZ45mye9XQprhHn9pQFaLxMFb7XVbvPhbV8x6Dn7Q%2BD7yWm184iXRsxQSIf9zy5VfJljt4oozzCu1I8eSQ%2B%2BQKyR3OXim4RfmkJEP5QgY47P8jD%2FrzXPAJSPWtk7Ue3%2FwF6RXULK%2F2tuebdZlbMuXE1bRp%2BeB6m2WZ1rkohgd5BMo7HWIFGUhTxw7OTG7zjGkC1W3YizdMZgRVpLTZleAWExqyU55oT9ZasemqO2qXjpTkVtWeAyYjD7z7U%2BxmBPj3kryeqNcM%2B6pUSLE9%2BHl0VI6pnBOM6AAH5d3K6Aaq1zYCxUkXLtlhIm2hkMGL9dsSssP8chCHuMRKvWix9AmJrz5HeaHYDlxNujyw5XrIR13ucd2vJW%2BbZntA45rDPB3NpFnCtOItBomHHfNOra5weQrSipO9f%2B1FaEiOK%2Fzu7ilFVX9e4qHUoHRcfCYi884OaHToBwUxDaw%2Fv3OtEb5BfY%2BrJCYEarFcr7ZjryVvNBGhlMLX3PNmzHQfB49QdiTJPQc6JGsQAzltKoaJhjM2ywTn%2BXZSimUWY%2BSsqJo4T3BQAYg%2BIC5FETkuuWf54U7Po2mZEjKY1UdO%2F8boxzKrApIIwGUXP%2BM65txN028O8U16oyc3OGOpk6Xi4w6Zy40QY6pgHSInZxaX89uAY3HekTecD98RKoXWOEp4DhP2k1B5TE7vcEHGwU%2BvKyXLj1z80J0Sgphc%2BPD1N4qQ2eugWV5kstLh7HN9GdcssVtBc24UxOq%2FDGkRdcbPQqQ0%2B1n8ewfUece2VX5KlJUt1sXcLrKHHILeMqrRKBNGafct83a6%2FHdZdHjs9enV35raiIkrMwCMh9t1tvs7Omq50PWuAhD2ED5WoCKvur&X-Amz-Signature=7af9910d500f5aad14ac216e9a0aeda0aed351db5012c29f130f2f36bfbad351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBPVKZJ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIByuZ232Zze5zgUdfeuBZjEHP%2FbBWOW5g7r%2BPIC%2FS3W6AiAexFKrmrI%2FvYV2Z393AeKEL%2FJGArnkXYI%2Bj7i%2FtQdtCir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BuMUrm%2FPQtdcbZ8qKtwDLZ45mye9XQprhHn9pQFaLxMFb7XVbvPhbV8x6Dn7Q%2BD7yWm184iXRsxQSIf9zy5VfJljt4oozzCu1I8eSQ%2B%2BQKyR3OXim4RfmkJEP5QgY47P8jD%2FrzXPAJSPWtk7Ue3%2FwF6RXULK%2F2tuebdZlbMuXE1bRp%2BeB6m2WZ1rkohgd5BMo7HWIFGUhTxw7OTG7zjGkC1W3YizdMZgRVpLTZleAWExqyU55oT9ZasemqO2qXjpTkVtWeAyYjD7z7U%2BxmBPj3kryeqNcM%2B6pUSLE9%2BHl0VI6pnBOM6AAH5d3K6Aaq1zYCxUkXLtlhIm2hkMGL9dsSssP8chCHuMRKvWix9AmJrz5HeaHYDlxNujyw5XrIR13ucd2vJW%2BbZntA45rDPB3NpFnCtOItBomHHfNOra5weQrSipO9f%2B1FaEiOK%2Fzu7ilFVX9e4qHUoHRcfCYi884OaHToBwUxDaw%2Fv3OtEb5BfY%2BrJCYEarFcr7ZjryVvNBGhlMLX3PNmzHQfB49QdiTJPQc6JGsQAzltKoaJhjM2ywTn%2BXZSimUWY%2BSsqJo4T3BQAYg%2BIC5FETkuuWf54U7Po2mZEjKY1UdO%2F8boxzKrApIIwGUXP%2BM65txN028O8U16oyc3OGOpk6Xi4w6Zy40QY6pgHSInZxaX89uAY3HekTecD98RKoXWOEp4DhP2k1B5TE7vcEHGwU%2BvKyXLj1z80J0Sgphc%2BPD1N4qQ2eugWV5kstLh7HN9GdcssVtBc24UxOq%2FDGkRdcbPQqQ0%2B1n8ewfUece2VX5KlJUt1sXcLrKHHILeMqrRKBNGafct83a6%2FHdZdHjs9enV35raiIkrMwCMh9t1tvs7Omq50PWuAhD2ED5WoCKvur&X-Amz-Signature=8a3976eeffc6a8126723b4a93c5de156f1c6b7651ff80a45c8f27f6fd2a293cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
