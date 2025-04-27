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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWYEOYG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pf4LNQSPiwlSS0T4Bt%2BOw9aQIlK3z86vifFZ6IwrzgIgDQ4NAG57CciJ4B00NaEgBkGedtPnyKG83RkQ4M3%2F0xYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDINO%2FhbPxLHpoedj5yrcA8L%2BlxHoRelCeum3UDy%2BvphlfqFIThOec8dJLPhtcsqrM9YfQVE%2BnsXdf%2Bc2RkLvt9AVhe1LpiHrkVPBUAHYAvs%2FqLbR%2BoKVeOWiwlKTrv%2F3GXfiOUzdkUrSj1yhr41s%2Fg0PiQ4FdpnFyhXWp1Dxv1izmqwTK61i6KlQWui90xLEMRkHwVzqTHXeU7On5TcIkeV%2F0zNWyb2iFkGTxF8yh9fpdaezWDCRJkYKcYKfh9wuI2SOFGqtVBeFV4sFdqO2oNLuC0O8Hrhx5OCXwMd9mJJhqeAZ9xuR7m8V%2FELKOya%2BJgGivyDLW22qmDM6p4LMEs%2BmMQcOtKH47U6jgMnYJsRJ4YTenkCiVSYxhoo7k%2F5nxkyZ%2FYMk4a726HVj6dUexZjws1rYw1wDI011QupVCTT%2Frl7uL82NsGuBHFSJGmq%2Fj%2B9ZVTGpPqE9hnVCMEE7INFz%2BxWyibspdC9%2FOABZ2V9C46RxPUEHRut5gRRYPCRmhqkaFk0KebcD3bOrEkb9Z%2BwUXSjeZZMMgeYvRs7Q03Q9zQ8NStP7E6y3gAyBqSrxOkPYsmZgqZI23%2FEOD%2B5Zdz%2B%2F3YiMVRAhJYkBktsBoc2IlgTvQ7AgebFPjHnEbqtl4KYFVpvfMXDek5ZCMP%2B%2FtcAGOqUBNXOaSqPJsxLSvNHwe3iN50pILxpNbCa0Ta6b%2BtxTDLf2agFzT7Rj%2BoCk3q%2BU%2Bmo8FKqsXkll%2FbbW%2BxzcgtWX7lhEbMUKxsVOPJkPNqhdms8D2ascrwatM2PnzsQjJsG1lKB7AiOOJXrlK6TKvnREFj4PmYbFG7FuedhS84inh0jxwdE7XJZumeOVSvtr0vI%2F%2FKp1iaG4AZqqG7FuPR7ZYw1m%2Fmv9&X-Amz-Signature=29c314d7f8ae201b06f5fb910563a353c07e2f7527e14d53303fd056df0efeaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWYEOYG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pf4LNQSPiwlSS0T4Bt%2BOw9aQIlK3z86vifFZ6IwrzgIgDQ4NAG57CciJ4B00NaEgBkGedtPnyKG83RkQ4M3%2F0xYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDINO%2FhbPxLHpoedj5yrcA8L%2BlxHoRelCeum3UDy%2BvphlfqFIThOec8dJLPhtcsqrM9YfQVE%2BnsXdf%2Bc2RkLvt9AVhe1LpiHrkVPBUAHYAvs%2FqLbR%2BoKVeOWiwlKTrv%2F3GXfiOUzdkUrSj1yhr41s%2Fg0PiQ4FdpnFyhXWp1Dxv1izmqwTK61i6KlQWui90xLEMRkHwVzqTHXeU7On5TcIkeV%2F0zNWyb2iFkGTxF8yh9fpdaezWDCRJkYKcYKfh9wuI2SOFGqtVBeFV4sFdqO2oNLuC0O8Hrhx5OCXwMd9mJJhqeAZ9xuR7m8V%2FELKOya%2BJgGivyDLW22qmDM6p4LMEs%2BmMQcOtKH47U6jgMnYJsRJ4YTenkCiVSYxhoo7k%2F5nxkyZ%2FYMk4a726HVj6dUexZjws1rYw1wDI011QupVCTT%2Frl7uL82NsGuBHFSJGmq%2Fj%2B9ZVTGpPqE9hnVCMEE7INFz%2BxWyibspdC9%2FOABZ2V9C46RxPUEHRut5gRRYPCRmhqkaFk0KebcD3bOrEkb9Z%2BwUXSjeZZMMgeYvRs7Q03Q9zQ8NStP7E6y3gAyBqSrxOkPYsmZgqZI23%2FEOD%2B5Zdz%2B%2F3YiMVRAhJYkBktsBoc2IlgTvQ7AgebFPjHnEbqtl4KYFVpvfMXDek5ZCMP%2B%2FtcAGOqUBNXOaSqPJsxLSvNHwe3iN50pILxpNbCa0Ta6b%2BtxTDLf2agFzT7Rj%2BoCk3q%2BU%2Bmo8FKqsXkll%2FbbW%2BxzcgtWX7lhEbMUKxsVOPJkPNqhdms8D2ascrwatM2PnzsQjJsG1lKB7AiOOJXrlK6TKvnREFj4PmYbFG7FuedhS84inh0jxwdE7XJZumeOVSvtr0vI%2F%2FKp1iaG4AZqqG7FuPR7ZYw1m%2Fmv9&X-Amz-Signature=bb2c9aced842a9b4d3279e500645250dac9efb8f811ab9adc8be3d9c5e2a14b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
