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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKK2RR3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9tqV25plyx%2B3d9XI5cRGHpKenvQU4vNb4u7wldmyCnAiEAxeiSzDIUXFEy1x4mvDDdiuZXYaBsjrCxlHLSRJcBBDIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH1Cb84SzTVNma5vIyrcAyhsWlBSiayz9VfTKtkpihRIpTQP%2B1O38y1A0wW8F1ySM6cgkFYH%2FhE9s0nZQUXARXIwL17LO3eOpCiLrp0TXatgn%2BPOFB1YqpqhGoLcb0FAjZultujZYbVL87hpYVWqqYAxf0rymYZBaNB5CrjNw6iVy7exEsQmz5SN0WFn1Fej1uANBh%2FEEHShnRLvhnIv%2FYHYAzSTe2FHSNGKKdSSieFagvEdfcJZRet8ancPIYFTGRAnJxoSJGcMGGHpnV9Mq3uYCWaG%2BnMX8ratnZQbguCBdx81fW9oiC4yGFRX%2FkFH%2F0qT%2BmZwj7K8mjHv%2BRPSE2Nk27Y2kWCQNFnAOECfzued8oCmLr7tWk0mt95TcnME6%2FgApJde%2FtrpW98SrqSdtNDQMdhVJjjrW%2FmUXI9EMIr5bqa%2FZ4vREid5GHKYaomqmx%2FJqg53zaC1zgS7XQuZ%2FjzKDesdMTj%2FElaMLaKItqFftbhXQxCvBsuS2low5qcHioE9jVr43ep5ig%2BxKTZhwYOIOoPLtnG004WA3Yw%2BaiWpl1BdDPEew2rgFj3iryGlXF5IHNEtf8AYh2JgUyPlbH7538bj96fYPhTGs64D0SSJJlo9v%2BC8jqhpIsK%2Bb6xtkuojq4mrV3Y%2B6A0kMOfEicAGOqUBSPajM5VPd6mZRQOmmPE8buKdeAaNQHlDIbWRycUcckUB5GepLX1dcjsQ7p1Z0K3LCqsPcHU%2BVGQA2kM5gOWM55yPgzrp0NezZBsRRLk2RPS4M0V5EeTkqxmMZuncjy9%2F3i5WOg6xKG2n0X4K9BHdO5vKqGgpuQi1UQylDKFWEKHp4vbSHRIk3opkcLBhxCQWGqI4WcKKY1HImEcKv6RWmC5asidM&X-Amz-Signature=2b78cdf3629530eefae1cd886558db5b4976ce68113acaeca57f6b7d538c6442&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKK2RR3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9tqV25plyx%2B3d9XI5cRGHpKenvQU4vNb4u7wldmyCnAiEAxeiSzDIUXFEy1x4mvDDdiuZXYaBsjrCxlHLSRJcBBDIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH1Cb84SzTVNma5vIyrcAyhsWlBSiayz9VfTKtkpihRIpTQP%2B1O38y1A0wW8F1ySM6cgkFYH%2FhE9s0nZQUXARXIwL17LO3eOpCiLrp0TXatgn%2BPOFB1YqpqhGoLcb0FAjZultujZYbVL87hpYVWqqYAxf0rymYZBaNB5CrjNw6iVy7exEsQmz5SN0WFn1Fej1uANBh%2FEEHShnRLvhnIv%2FYHYAzSTe2FHSNGKKdSSieFagvEdfcJZRet8ancPIYFTGRAnJxoSJGcMGGHpnV9Mq3uYCWaG%2BnMX8ratnZQbguCBdx81fW9oiC4yGFRX%2FkFH%2F0qT%2BmZwj7K8mjHv%2BRPSE2Nk27Y2kWCQNFnAOECfzued8oCmLr7tWk0mt95TcnME6%2FgApJde%2FtrpW98SrqSdtNDQMdhVJjjrW%2FmUXI9EMIr5bqa%2FZ4vREid5GHKYaomqmx%2FJqg53zaC1zgS7XQuZ%2FjzKDesdMTj%2FElaMLaKItqFftbhXQxCvBsuS2low5qcHioE9jVr43ep5ig%2BxKTZhwYOIOoPLtnG004WA3Yw%2BaiWpl1BdDPEew2rgFj3iryGlXF5IHNEtf8AYh2JgUyPlbH7538bj96fYPhTGs64D0SSJJlo9v%2BC8jqhpIsK%2Bb6xtkuojq4mrV3Y%2B6A0kMOfEicAGOqUBSPajM5VPd6mZRQOmmPE8buKdeAaNQHlDIbWRycUcckUB5GepLX1dcjsQ7p1Z0K3LCqsPcHU%2BVGQA2kM5gOWM55yPgzrp0NezZBsRRLk2RPS4M0V5EeTkqxmMZuncjy9%2F3i5WOg6xKG2n0X4K9BHdO5vKqGgpuQi1UQylDKFWEKHp4vbSHRIk3opkcLBhxCQWGqI4WcKKY1HImEcKv6RWmC5asidM&X-Amz-Signature=f88b6657e8b42bfaee6be3863223aca7961fcb57f23a3bd9dfd6e400d0927368&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
