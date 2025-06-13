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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2NWV6U%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDejJMpUazPKKSiPHx7OMRdh9UPpui8ioKGjTaW%2FQtUEgIgTXgqckjQP%2B3Q3%2BkP0fiZV2wNZwiUiQ0KPVbBjG2HKokq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdaVWCGvz1RNz6tzircA4yZfntIxJ47minA450ivBNzgEDMp8iCm92O0gw1SPGJJDSPx9%2FLicVUa3aoa7MFEbqiXnYniG58h6zpUYSbxKrc%2FEzsMBQskkySFdZFf48d085C%2BLH7OoY%2BzT%2BnOpRaNo50mYFZysO%2BhraTDNBpdmQoRHyE7HImwXOvfn4jkYDzRGGFWQ97tz9qmClmAasPk79BqlkPryhFcIYELu6P1RzaPyd0CVhFcZRvpQ%2Be8rrJ%2FWPfr%2BBjSo3dtfH968Kdhm0Y4i7aKYbTIo%2F2tM9bx0k%2FohCNOhl9%2FWxtBdadrtA1N3OHEoly5uBHvxJF56KnTVJNxKaUwDJfA%2BtFNFBg2bJL137iWS0koIWataLUpSXbA4HHcXDS40g1CGJOCIef0Y59Al516Yyz2NLg3QuSoS%2FS%2FK5RotRNqaLHb%2FoMJB8XZ9eCr2av6EG59fc4IRoHQJ3fThYF7%2B9laVmdUzVTf%2Fnf63VKhc3cQ29t5vPX0Y%2B4N1aPC6NLnwK0%2Bmb3xw9jd7vhP1QoPfs2CgBiI12FVkVpZ%2FNQIglNUg%2BbhCERoO27tvI%2BraMcuKy8K6RawMjBNERH9VTlhIqKbF8F7cCpNIpwJlUw69ssR2gFMIg7y8KDwnohZBHfTl85p9U7MOGOr8IGOqUBfvUqAi0cdTcssgo2rqS%2BLaduOqkZMGrDR8chw4JMKFv6zM%2BSdMew6oO%2FOKWUTiIZAxKa9ACZwKfA2QFAtD%2BBAEBdgvCCq8eY%2Ft%2BQJdZk4%2Fuqs4SwwhNXpvnSDv7YNPWgJ5HcaKLOWfahYbXiiG71yl66eM0vP6vqZ7GaQyecdncLtru98RC%2Ffwve9Oh1iyQzsoVWcxUlZ5hr6nX4yIze%2BWNhZ8Mz&X-Amz-Signature=7da598457d0535c9b09d4a392907c7c509ef60d0c8e4dfd1a0c33c3fc97b37ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2NWV6U%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDejJMpUazPKKSiPHx7OMRdh9UPpui8ioKGjTaW%2FQtUEgIgTXgqckjQP%2B3Q3%2BkP0fiZV2wNZwiUiQ0KPVbBjG2HKokq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdaVWCGvz1RNz6tzircA4yZfntIxJ47minA450ivBNzgEDMp8iCm92O0gw1SPGJJDSPx9%2FLicVUa3aoa7MFEbqiXnYniG58h6zpUYSbxKrc%2FEzsMBQskkySFdZFf48d085C%2BLH7OoY%2BzT%2BnOpRaNo50mYFZysO%2BhraTDNBpdmQoRHyE7HImwXOvfn4jkYDzRGGFWQ97tz9qmClmAasPk79BqlkPryhFcIYELu6P1RzaPyd0CVhFcZRvpQ%2Be8rrJ%2FWPfr%2BBjSo3dtfH968Kdhm0Y4i7aKYbTIo%2F2tM9bx0k%2FohCNOhl9%2FWxtBdadrtA1N3OHEoly5uBHvxJF56KnTVJNxKaUwDJfA%2BtFNFBg2bJL137iWS0koIWataLUpSXbA4HHcXDS40g1CGJOCIef0Y59Al516Yyz2NLg3QuSoS%2FS%2FK5RotRNqaLHb%2FoMJB8XZ9eCr2av6EG59fc4IRoHQJ3fThYF7%2B9laVmdUzVTf%2Fnf63VKhc3cQ29t5vPX0Y%2B4N1aPC6NLnwK0%2Bmb3xw9jd7vhP1QoPfs2CgBiI12FVkVpZ%2FNQIglNUg%2BbhCERoO27tvI%2BraMcuKy8K6RawMjBNERH9VTlhIqKbF8F7cCpNIpwJlUw69ssR2gFMIg7y8KDwnohZBHfTl85p9U7MOGOr8IGOqUBfvUqAi0cdTcssgo2rqS%2BLaduOqkZMGrDR8chw4JMKFv6zM%2BSdMew6oO%2FOKWUTiIZAxKa9ACZwKfA2QFAtD%2BBAEBdgvCCq8eY%2Ft%2BQJdZk4%2Fuqs4SwwhNXpvnSDv7YNPWgJ5HcaKLOWfahYbXiiG71yl66eM0vP6vqZ7GaQyecdncLtru98RC%2Ffwve9Oh1iyQzsoVWcxUlZ5hr6nX4yIze%2BWNhZ8Mz&X-Amz-Signature=639ea2a7da4d6eea457cdc1d4aa939036cefe84ff5299ecc38a0e4e7a7d0a90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
