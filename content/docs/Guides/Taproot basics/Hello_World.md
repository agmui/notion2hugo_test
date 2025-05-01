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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBLQYGU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD%2FaG7CilVxEtqsYkTyy1PPoUsJORDDSyTkOz65sfhG5wIhAM6qP7VmT5Yd4T1m9LzH6MU0TuvQVUrx8srH6AunDQz4KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbJtwkKoOA9Z0xpT0q3AMiqUwmOcEeKTPKomY273yJh6clyn2Vwh8rw2YUJBEe1CXEDUHJHKU9Li7tcuCHVYFzPG4US1NZyz4tksIZQg1zzMxbayBBRUy0vKDtyH00vACrVCK1zlhl7qT4y%2FVVHcNQZswWXNZTqNQY83bl4sfaakPH4dPiY9W%2FLvK3U01SIPY%2BNrRd99FPjd6lZpuTVWJsCTdHZZaryT1IjS6zkWiw8gkHpYrMIFJEFHRLPUH5rfG3rl1iqzmMfS3zik4Yfdi92GW2S3yv0nvJ1eLH1d98Op1lvlVBNNiNk1BGu%2BuSwwOtGCAuu9yL1bn60n3CrfkMn2S4LDLfgYG2XRUB98j4B5hdKEHxT1e1fDgM7jCl68J3Pmq7WxdEtZFpPHQT95uNDCYiqmzO%2F7TDtWxEkktZRUbrbZb6wGDbRZKql86x6vQ0QutxatJvJOUcAk8vzkSp9I2AMBG6YamW5cMKtclzsx6x2%2BSMKxQ5z5cOU2xz24NROzWG4zrKD5LBAziZE%2B6%2FT65DW6BIpVuema3omDH4eA3zPdzSZORg9XNeH9cbvWBn3Tt%2Fx0wobMXtYi8GbZDC0YqIcnaaA1yzn%2Bk8MGq%2BtB3%2BLcpUk9NipYeJDsaLy4AoMUlZDv13NdbDgTD2887ABjqkARv64UATOLzKb5yPYuGax%2BBL%2Bh8MZd3XxKYgvnMVHKSVDydVeELnei%2FpQinXIzC%2BoY68S9i1FtrLPc9qN30%2BvcZ%2B9vinCPSZcd7dRvGwKNQgRxffhEjSAUC0ixvjSOY7F%2BiYVpFOPwoOzzRN%2FhFSJVF9d17JnNpdQk%2FnKk5r%2FivIVHDD4eEbllbdawCilglc6OH%2Fmyn3LBBu4bzEj2HC5Dwf0h4h&X-Amz-Signature=cbfc29b81b5be55e6591afe845a022997c3470e81e93dd517c58d003b69b7273&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBLQYGU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD%2FaG7CilVxEtqsYkTyy1PPoUsJORDDSyTkOz65sfhG5wIhAM6qP7VmT5Yd4T1m9LzH6MU0TuvQVUrx8srH6AunDQz4KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbJtwkKoOA9Z0xpT0q3AMiqUwmOcEeKTPKomY273yJh6clyn2Vwh8rw2YUJBEe1CXEDUHJHKU9Li7tcuCHVYFzPG4US1NZyz4tksIZQg1zzMxbayBBRUy0vKDtyH00vACrVCK1zlhl7qT4y%2FVVHcNQZswWXNZTqNQY83bl4sfaakPH4dPiY9W%2FLvK3U01SIPY%2BNrRd99FPjd6lZpuTVWJsCTdHZZaryT1IjS6zkWiw8gkHpYrMIFJEFHRLPUH5rfG3rl1iqzmMfS3zik4Yfdi92GW2S3yv0nvJ1eLH1d98Op1lvlVBNNiNk1BGu%2BuSwwOtGCAuu9yL1bn60n3CrfkMn2S4LDLfgYG2XRUB98j4B5hdKEHxT1e1fDgM7jCl68J3Pmq7WxdEtZFpPHQT95uNDCYiqmzO%2F7TDtWxEkktZRUbrbZb6wGDbRZKql86x6vQ0QutxatJvJOUcAk8vzkSp9I2AMBG6YamW5cMKtclzsx6x2%2BSMKxQ5z5cOU2xz24NROzWG4zrKD5LBAziZE%2B6%2FT65DW6BIpVuema3omDH4eA3zPdzSZORg9XNeH9cbvWBn3Tt%2Fx0wobMXtYi8GbZDC0YqIcnaaA1yzn%2Bk8MGq%2BtB3%2BLcpUk9NipYeJDsaLy4AoMUlZDv13NdbDgTD2887ABjqkARv64UATOLzKb5yPYuGax%2BBL%2Bh8MZd3XxKYgvnMVHKSVDydVeELnei%2FpQinXIzC%2BoY68S9i1FtrLPc9qN30%2BvcZ%2B9vinCPSZcd7dRvGwKNQgRxffhEjSAUC0ixvjSOY7F%2BiYVpFOPwoOzzRN%2FhFSJVF9d17JnNpdQk%2FnKk5r%2FivIVHDD4eEbllbdawCilglc6OH%2Fmyn3LBBu4bzEj2HC5Dwf0h4h&X-Amz-Signature=639cfb6f26eedec3e2f4614533a7fe4bf5672b0f826e75b4f9f8fc311349b66c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
