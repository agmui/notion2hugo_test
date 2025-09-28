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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAJVQAS%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIA5u%2Fqblk8WfYjXneFlS11QMsL9Ci64jExunA8J3JV9xAiA1Nscl%2BEXFMvzWxOtzXyNH1QSgBHCvkBXsrnXx6vLQuiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4sONKW0RcfrMOoBKtwDKkLZz1XHTFpglk0FZ08eT5c6gMeowiXR3m6Ztl0en%2FDgyGVM0XujAZ3KgLITTCu%2FysX0mHHMbc2XUG7o6CBYiFkDhlbpoPIgpTzIMKNlzr3tm8J5yaVN1%2FoaLQ%2Be0PziTsZL2BeGPq1AOedPiIWC1Wb8Dc6vA2pFjssnpVH%2BYSa6mUlisMaeIJdrKckuoOSlPL2IvP%2F7%2Bl%2FOk9cQJQdmMEqfpRytYVPt2uu62v2QE293fe1oCF4D8GpnFwyXuXz1HSOAzO%2FzkLJzCWDElQB2VII3R%2FRtXBc2k%2Bko5VNoC7SnQ9ZKRcK32Elj6ytZeUmebhaOQf6TkclEbWNcvR1jueoOKqn4CuliKp9RkKozeRO3SFna7xxCYwekspsMPBK6zkIWgujNCHb3HQUSg5PGKAGs0aMJs%2Bkub%2FPENTNlEWYiWxoopN5ysafEK8Msjm96j2Rs7h7jj2ahacXWFM5p4KGmrRsXd5pkGTRnHjkFapm8cB%2F4pWiVF7LtkQlBgyd6dNK9SA0oUaB5f5RGQQVJybV8OUqu28H7d%2F9bDpQjAsGzK6NKMHZ0qNR9a48AkFRAbjIQ53bzBDXk%2B1rZmzarhPhNaqOzLriu2PV%2BDZLv63UZpt%2BN%2FRp39%2BcNmzYwgr%2FhxgY6pgGaRLXTWsZ5JWkI6TU2pFvPMFop1mFBG%2BhQOy0jAC8JeRv7vyXcoY8lpxyXhbj1pQ7mRyLKjnzK5MpjKr%2B3HFNaT%2FYBWVbQ765jMwgWQs2uus92C5zEhMsx9QkbHdRXfdMFACyLENuM3HyZjkzBBoFQ4%2FzbF2HjNhKbhB5RW644OgnTtCHC8vNWBTMbOvxtHzaapPx8O%2BoSAc62iZc4ctacuEe5Wx27&X-Amz-Signature=d20b2c1ac388a14ce39fa6e8521171889be4f023eb4265191c85dcecf04b0b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAJVQAS%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIA5u%2Fqblk8WfYjXneFlS11QMsL9Ci64jExunA8J3JV9xAiA1Nscl%2BEXFMvzWxOtzXyNH1QSgBHCvkBXsrnXx6vLQuiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4sONKW0RcfrMOoBKtwDKkLZz1XHTFpglk0FZ08eT5c6gMeowiXR3m6Ztl0en%2FDgyGVM0XujAZ3KgLITTCu%2FysX0mHHMbc2XUG7o6CBYiFkDhlbpoPIgpTzIMKNlzr3tm8J5yaVN1%2FoaLQ%2Be0PziTsZL2BeGPq1AOedPiIWC1Wb8Dc6vA2pFjssnpVH%2BYSa6mUlisMaeIJdrKckuoOSlPL2IvP%2F7%2Bl%2FOk9cQJQdmMEqfpRytYVPt2uu62v2QE293fe1oCF4D8GpnFwyXuXz1HSOAzO%2FzkLJzCWDElQB2VII3R%2FRtXBc2k%2Bko5VNoC7SnQ9ZKRcK32Elj6ytZeUmebhaOQf6TkclEbWNcvR1jueoOKqn4CuliKp9RkKozeRO3SFna7xxCYwekspsMPBK6zkIWgujNCHb3HQUSg5PGKAGs0aMJs%2Bkub%2FPENTNlEWYiWxoopN5ysafEK8Msjm96j2Rs7h7jj2ahacXWFM5p4KGmrRsXd5pkGTRnHjkFapm8cB%2F4pWiVF7LtkQlBgyd6dNK9SA0oUaB5f5RGQQVJybV8OUqu28H7d%2F9bDpQjAsGzK6NKMHZ0qNR9a48AkFRAbjIQ53bzBDXk%2B1rZmzarhPhNaqOzLriu2PV%2BDZLv63UZpt%2BN%2FRp39%2BcNmzYwgr%2FhxgY6pgGaRLXTWsZ5JWkI6TU2pFvPMFop1mFBG%2BhQOy0jAC8JeRv7vyXcoY8lpxyXhbj1pQ7mRyLKjnzK5MpjKr%2B3HFNaT%2FYBWVbQ765jMwgWQs2uus92C5zEhMsx9QkbHdRXfdMFACyLENuM3HyZjkzBBoFQ4%2FzbF2HjNhKbhB5RW644OgnTtCHC8vNWBTMbOvxtHzaapPx8O%2BoSAc62iZc4ctacuEe5Wx27&X-Amz-Signature=fe2fecd38e37ac15482ec4ae25fc207eb482c6f7fdb461f5368846c726756ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
