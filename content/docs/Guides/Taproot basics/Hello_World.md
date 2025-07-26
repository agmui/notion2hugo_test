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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ22E77U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGDM3WD7AtHw7sXh1j%2FzEPkhO8QxJxbbXQQ%2FR6UMOrrdAiEAjc9p90EsU1jaMrdvZQx52%2F67rYeNQhIUQwowlrUDkjQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLwkbJkA6oRG4L1i5SrcA9ZylsOJDwj4j3QM7drif%2Br5%2FC0o31j73Z2CdKnBlkNg%2Fceaj4oEf9cehu%2B8e4FmY3Ch8dxerAvt0jrLylcElIlZA5LFNhdEMEfXr3MyWsq%2B2GIknsYAqzK8SOfTaEJ1kEmMN4pkZuKgFEwUPDWhUz%2BAhhtwTUsER0M%2B2pyMC2rt170yN7ub%2BD8rLecRM0dZ3jAxJwk145B%2BaO7Xb8Ty9xmDA2tvlkoaZY9YGaQr6RzSDny2tDCBdDmVAS01PvAVqAknzEuvap43oc3jUi2cuAV8LWETsSTVyjmM8MJVF8AWCO4vLix1o5wuhcA5a8Cbb8AMP6OAMTRsVx%2BklUkvAjCY9vK4Gf2W1F6JOCJswsPUzDX5S6eDcGlIkxBWhDPYLbsUBMbyLUnQLvwcNlMdNfxDzJD3yGPx1nko7rg%2FoBW6%2FlFaz%2BNlR6jg73Ds2q6kxvsLDKssE5b4EZRNjqRqBmfd%2FTI38EPcO0w6hLtzPgxyu60RrePa1fShznEDJPtrAsM4h5V1n75h7QHiUBDXvYZJv7hYFbXnIF6rCLQEpYTUtR6xIIpgNchaNi3G%2BEmdxPGpjp9LloUfIsv5GFMs2GTpjT0RJz9BHQkVvk1rnwUYqavFz5pc%2FJWBmSvrMIfxkMQGOqUBTDq1t%2FrowfvUnjPXn%2Bw03Hc46weMo6dacl%2FWg%2BXK%2B7ThLOlLdmvS8LFo6J%2Fq%2FHZQr61IxSbs7HnRuo8%2FB4OtbQV%2FNy%2BGP%2Fz4Uj7QlzpeAAFckUtH4OkZfU288WRWC1sG2snjJHJapTznMqRFy%2FsrvskliAaM%2B9tbBegefzcHc3n8KgTIGKTOSRVJ2zonTNV6KoG2PTfmiDjpXPxWWnNX0FXGM3IS&X-Amz-Signature=fe58079e6f12601ed91096063a1cdf20e3f8ae90c00b612d2bbdfbd915d62a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ22E77U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGDM3WD7AtHw7sXh1j%2FzEPkhO8QxJxbbXQQ%2FR6UMOrrdAiEAjc9p90EsU1jaMrdvZQx52%2F67rYeNQhIUQwowlrUDkjQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLwkbJkA6oRG4L1i5SrcA9ZylsOJDwj4j3QM7drif%2Br5%2FC0o31j73Z2CdKnBlkNg%2Fceaj4oEf9cehu%2B8e4FmY3Ch8dxerAvt0jrLylcElIlZA5LFNhdEMEfXr3MyWsq%2B2GIknsYAqzK8SOfTaEJ1kEmMN4pkZuKgFEwUPDWhUz%2BAhhtwTUsER0M%2B2pyMC2rt170yN7ub%2BD8rLecRM0dZ3jAxJwk145B%2BaO7Xb8Ty9xmDA2tvlkoaZY9YGaQr6RzSDny2tDCBdDmVAS01PvAVqAknzEuvap43oc3jUi2cuAV8LWETsSTVyjmM8MJVF8AWCO4vLix1o5wuhcA5a8Cbb8AMP6OAMTRsVx%2BklUkvAjCY9vK4Gf2W1F6JOCJswsPUzDX5S6eDcGlIkxBWhDPYLbsUBMbyLUnQLvwcNlMdNfxDzJD3yGPx1nko7rg%2FoBW6%2FlFaz%2BNlR6jg73Ds2q6kxvsLDKssE5b4EZRNjqRqBmfd%2FTI38EPcO0w6hLtzPgxyu60RrePa1fShznEDJPtrAsM4h5V1n75h7QHiUBDXvYZJv7hYFbXnIF6rCLQEpYTUtR6xIIpgNchaNi3G%2BEmdxPGpjp9LloUfIsv5GFMs2GTpjT0RJz9BHQkVvk1rnwUYqavFz5pc%2FJWBmSvrMIfxkMQGOqUBTDq1t%2FrowfvUnjPXn%2Bw03Hc46weMo6dacl%2FWg%2BXK%2B7ThLOlLdmvS8LFo6J%2Fq%2FHZQr61IxSbs7HnRuo8%2FB4OtbQV%2FNy%2BGP%2Fz4Uj7QlzpeAAFckUtH4OkZfU288WRWC1sG2snjJHJapTznMqRFy%2FsrvskliAaM%2B9tbBegefzcHc3n8KgTIGKTOSRVJ2zonTNV6KoG2PTfmiDjpXPxWWnNX0FXGM3IS&X-Amz-Signature=a8113ad6711a4bb28cdf19ef036f738c10d1d3abab3b9dacc71e8affca9f38cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
