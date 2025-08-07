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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDNPCU5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDpXZnVYjzBfe1h9vjBVfW%2FGluDJxdj%2FlLcNal5IWL%2FWAiBoBGuciV7ROaLxQ1oitq6%2BWVCx1vbSMG4Y9oELB8AEsiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6uYdB60q9v5%2FD9fRKtwD%2FMumIeclYwD5vMIuQfkfPQL9o2sR1DshB9yDaUCn7WZIiBBnC0ClnjTw7bKOcPjl1gz31AFdmb488TBHZzls5ZGFb8ntfxcXLUhaXmxuG%2F%2FSggmu1uIFxRPsdYAaHIKPL0ci0KKsRfcZtQZ7WraL9JDO2KPLegPM1jKw45P6gIVUJmJPXFw70kDSbX7E%2FWCOIf%2Fcwq7%2FLz6reCrMeKl3Vs2W9QUrqZxQU%2FW4lcAKn4FTXjs3de4vtaz%2BjbjNR4FN8mP%2Fhng60g%2FIMLXSvOiQPcgRioSfWJZFG1%2BDBfQ1Lcfm4QCONKMNxyELoQRraXFX%2BIk5g1Kr9Do4hAtlQnYkqe5LnxtDxNF3yFebHSBsa84X59opz5ibdWNPQyBBVfRzlo1Y4wdHVXE1S2xAOpQqvOUurRyjJpcVXWoQKc4lOT0gRoTklBn5%2F8geI%2F7LDbTixWXteJWliJXwlOmEqEx0wRIW5uzu99RVCDl6hJzFa5J%2BOGWk254yHVn9LXO6R%2BiiEs1xpLYFTvj22XrR9p%2FsEA6OXNY2ie5Mv8GYRdFYAkQFfBQ0%2FbTZpRGabH6IlpCFwplNYcRf04l4xt%2BR%2Bnr0MSLpkPby76Yg2Xfw5Uow8mk8i7QmumqgM6iaDP4wuMjQxAY6pgEJHWm85y8Ii5LZ5SRzvTFJBkf1GM8WtCfZHs2pOBv4C%2BN9DT7dd1TtE5%2F4HxXW7kBkTybCe9FAl5eSyTitr35dmYjY3gXeZv3HhNro1e4bPHGOl1rz76d4VWSRn68qOtG%2BduYFv3suDNwLzIwEEpE9BJvXuMMunViSfqsNTSgw38G6gUtd4tb%2FVmddi6yLju22BB%2F7ZHMXFMzxKNQAspgWi%2BT6yFAx&X-Amz-Signature=2cdec4994470716948bdd2a02340dc42941c9046d31f103891b90f4e3ff27fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDNPCU5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDpXZnVYjzBfe1h9vjBVfW%2FGluDJxdj%2FlLcNal5IWL%2FWAiBoBGuciV7ROaLxQ1oitq6%2BWVCx1vbSMG4Y9oELB8AEsiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6uYdB60q9v5%2FD9fRKtwD%2FMumIeclYwD5vMIuQfkfPQL9o2sR1DshB9yDaUCn7WZIiBBnC0ClnjTw7bKOcPjl1gz31AFdmb488TBHZzls5ZGFb8ntfxcXLUhaXmxuG%2F%2FSggmu1uIFxRPsdYAaHIKPL0ci0KKsRfcZtQZ7WraL9JDO2KPLegPM1jKw45P6gIVUJmJPXFw70kDSbX7E%2FWCOIf%2Fcwq7%2FLz6reCrMeKl3Vs2W9QUrqZxQU%2FW4lcAKn4FTXjs3de4vtaz%2BjbjNR4FN8mP%2Fhng60g%2FIMLXSvOiQPcgRioSfWJZFG1%2BDBfQ1Lcfm4QCONKMNxyELoQRraXFX%2BIk5g1Kr9Do4hAtlQnYkqe5LnxtDxNF3yFebHSBsa84X59opz5ibdWNPQyBBVfRzlo1Y4wdHVXE1S2xAOpQqvOUurRyjJpcVXWoQKc4lOT0gRoTklBn5%2F8geI%2F7LDbTixWXteJWliJXwlOmEqEx0wRIW5uzu99RVCDl6hJzFa5J%2BOGWk254yHVn9LXO6R%2BiiEs1xpLYFTvj22XrR9p%2FsEA6OXNY2ie5Mv8GYRdFYAkQFfBQ0%2FbTZpRGabH6IlpCFwplNYcRf04l4xt%2BR%2Bnr0MSLpkPby76Yg2Xfw5Uow8mk8i7QmumqgM6iaDP4wuMjQxAY6pgEJHWm85y8Ii5LZ5SRzvTFJBkf1GM8WtCfZHs2pOBv4C%2BN9DT7dd1TtE5%2F4HxXW7kBkTybCe9FAl5eSyTitr35dmYjY3gXeZv3HhNro1e4bPHGOl1rz76d4VWSRn68qOtG%2BduYFv3suDNwLzIwEEpE9BJvXuMMunViSfqsNTSgw38G6gUtd4tb%2FVmddi6yLju22BB%2F7ZHMXFMzxKNQAspgWi%2BT6yFAx&X-Amz-Signature=0a67f6ba8daedb339db3a6101ad504dfd0ebbbc3794981d523341e163eb071f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
