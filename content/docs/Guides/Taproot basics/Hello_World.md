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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAJOKMD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8%2BKgRmZcwOcviB6EBQv5qlmNSXhoLfkghtsZ9xnGK9AiAjjuSMCkGgWqR3hWL2e4Er668%2Flc%2BMgN10mZgjxnJWMSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJhApBDMHolKfzAuwKtwDdpJeh76YptVnoylMIb8gdvcttHN5g5GpdkhG6Qp2Z6EnNNJIXgc1AsGRtCwbHOoLYlIRv5Z4CYSp5%2F%2B5jVfLci%2FByC%2B9OgI613TZOeIh0z8s3ILC2qIIvRkb1h9NQucSsui4xLx8K%2Bvtqg8na%2BYffw1xnPU5STSo30GaJLsDntRFhOFDnhPmKRCaJPmUN9KHCe4vCWNH1RfmZmlunrXtrAJ0B8fGKyJ%2BAuWLBXRsTE9lhjhUaVwVIrYKlXu7sj3awLLt7GyWgx4ZmhbeaDRqeZNRJ4iSpX0kg%2BQQRf0YZ3klAMR9uIGywmihXUpPAfH5xSSJyGPaB2kgv1vN079s%2F1P4ohBQ2QbG2oY%2FMWsYhZdyTy1k7%2FVfCb%2FK0qm0oQSEnfKzUCs4CdPQcfYOC04KnAZo1ytK37NfINk8J%2F4b2CftvjWoTP9SNJ6%2Bz2EiIdGaDqIWs1zvhjrBjW%2FWHbKUUJcw0tp7mCiqUnsH3Z5Zq5%2BZeHwnAOG4rVzNEPYp2zVw6NDMmOknxrbgju7zFC5ltx9vo%2FLOnSOefzmC7WeZb8fcYA8YrewaDTxUeRAYWG%2BtXUrgCn%2FHJXxx5oq6EUUnGc1b92PM3QuSjTzClowh6rrGeQWlsZstBfJ5H18wzbGswQY6pgGHtQQlwd40WncUOxTfaSKWJdcIcqul4%2BoOdRpm3yaHIvCutDphDUKKDG7EW3SoiFnctzIbTcgoLDW765jrzQCpt8NbTYlnjTkGliIN6nOW7pgKNj2LWYC0hgQJkZBybkH1D8055Q1PbUvIVNawId%2F1%2F%2FVbUJEcPggJfJBHFrBeViR8gyf%2BS%2B%2Bc0WgBr3Mr9zaSp%2F%2B0LroVd20skjf6L6z8jpKUKDME&X-Amz-Signature=5ad1f77cf6e40bb773436b848e2bd333e158f4d197992fe334169115f37cba3f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAJOKMD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8%2BKgRmZcwOcviB6EBQv5qlmNSXhoLfkghtsZ9xnGK9AiAjjuSMCkGgWqR3hWL2e4Er668%2Flc%2BMgN10mZgjxnJWMSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJhApBDMHolKfzAuwKtwDdpJeh76YptVnoylMIb8gdvcttHN5g5GpdkhG6Qp2Z6EnNNJIXgc1AsGRtCwbHOoLYlIRv5Z4CYSp5%2F%2B5jVfLci%2FByC%2B9OgI613TZOeIh0z8s3ILC2qIIvRkb1h9NQucSsui4xLx8K%2Bvtqg8na%2BYffw1xnPU5STSo30GaJLsDntRFhOFDnhPmKRCaJPmUN9KHCe4vCWNH1RfmZmlunrXtrAJ0B8fGKyJ%2BAuWLBXRsTE9lhjhUaVwVIrYKlXu7sj3awLLt7GyWgx4ZmhbeaDRqeZNRJ4iSpX0kg%2BQQRf0YZ3klAMR9uIGywmihXUpPAfH5xSSJyGPaB2kgv1vN079s%2F1P4ohBQ2QbG2oY%2FMWsYhZdyTy1k7%2FVfCb%2FK0qm0oQSEnfKzUCs4CdPQcfYOC04KnAZo1ytK37NfINk8J%2F4b2CftvjWoTP9SNJ6%2Bz2EiIdGaDqIWs1zvhjrBjW%2FWHbKUUJcw0tp7mCiqUnsH3Z5Zq5%2BZeHwnAOG4rVzNEPYp2zVw6NDMmOknxrbgju7zFC5ltx9vo%2FLOnSOefzmC7WeZb8fcYA8YrewaDTxUeRAYWG%2BtXUrgCn%2FHJXxx5oq6EUUnGc1b92PM3QuSjTzClowh6rrGeQWlsZstBfJ5H18wzbGswQY6pgGHtQQlwd40WncUOxTfaSKWJdcIcqul4%2BoOdRpm3yaHIvCutDphDUKKDG7EW3SoiFnctzIbTcgoLDW765jrzQCpt8NbTYlnjTkGliIN6nOW7pgKNj2LWYC0hgQJkZBybkH1D8055Q1PbUvIVNawId%2F1%2F%2FVbUJEcPggJfJBHFrBeViR8gyf%2BS%2B%2Bc0WgBr3Mr9zaSp%2F%2B0LroVd20skjf6L6z8jpKUKDME&X-Amz-Signature=5ef280afd8d8e5d7a37fe1e13997f7983483c9e941886758761580632fadf87c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
