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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZI3OW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgu6CHwh2hJeRDWA7yf%2BWbSNNJIxRv%2FA6SqGPEXqiOaAiEAqgvPeTjtTdYyoDCujuZcVCAGhomcqniMCL1WBgTkKhkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENy6M1PuValYezBnyrcA8LxHKpQpQzSBp5zrWKyZI7k9kAETThgXwro35PU0vdWFQ6a%2FZTMHF0mkZrtkE6zY6yoyj8IHErVSYQQ%2BfhW8HAFL10HoeSfW%2FbcJRrXEEQ%2Fj6ZognAlbmMtp%2Fd0vXEP1aCC1T29R78hztvwre4boSvfz%2FntTA7v91GAMKY9JPcKB%2BOWyzCrddjVscMLr0%2FuP25pSfMM6DLh0Uh297eV1XulI0eYyaWaG4Z1gicTY1nL2eDyTrDkgwodXCtxi3e3h%2F4SkrE4%2BI9zEvvPPhtkwmTQ2XXjX8oEicR38%2Bqq01Mz7ZElPM08gQeK%2F3Ma0Rwr%2FOp8%2BnjwwMWDnpOIW7zAJWJvShyPYhqAwOWahTGQUq0Jd4qxwECieuZYtKo%2B6SlvdmZsSgOVaipZ8OanojPRrjj6SHoVFLaaJC%2Bz8n1dGuTIbyh5kDTsnfN524oxO8hpSyo10btjTVR%2FO%2FB6Nc4Mr6SjdQftpKyaHtpGg9mpYKITnXzWGGkNLXHYGTZ4nHlyMQ%2ByfpTegP%2FTybJFsxHyHHLEysXV1UfH6fennxa0PgunlbvZYVSGTn05y5zaS2h7sVYfOYOyv4l61tqcny7sAS1MzASTvHFPO0Lc%2BU7NA9IWnFsQLYS3yPsLmyXZMIamsr0GOqUBczoHIQcMLZLcKksi2xGOvfuM1Bv9%2BFQr6y6mH7GTP91OZgtA8m%2FTx17yNh%2F%2FtRLQa1P%2Fld7tLpNK15Zd5KneWUI2AsEqB%2Bm9uPt2L6SQpp%2Ff7pSozVsG4rn8pwj4S6HRwiqJNc63kLEEQWrUHLTixozT04YeiTJLtZRMQdHvctFaw6tmvQSz1UJ4k5vST%2FyCesRps3K10QliFQtZWV1W%2BnvB39ag&X-Amz-Signature=0c1521353c786d9375ce55ed2ca61cfe805b362598b841f3b9bce288296ac659&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZI3OW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgu6CHwh2hJeRDWA7yf%2BWbSNNJIxRv%2FA6SqGPEXqiOaAiEAqgvPeTjtTdYyoDCujuZcVCAGhomcqniMCL1WBgTkKhkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENy6M1PuValYezBnyrcA8LxHKpQpQzSBp5zrWKyZI7k9kAETThgXwro35PU0vdWFQ6a%2FZTMHF0mkZrtkE6zY6yoyj8IHErVSYQQ%2BfhW8HAFL10HoeSfW%2FbcJRrXEEQ%2Fj6ZognAlbmMtp%2Fd0vXEP1aCC1T29R78hztvwre4boSvfz%2FntTA7v91GAMKY9JPcKB%2BOWyzCrddjVscMLr0%2FuP25pSfMM6DLh0Uh297eV1XulI0eYyaWaG4Z1gicTY1nL2eDyTrDkgwodXCtxi3e3h%2F4SkrE4%2BI9zEvvPPhtkwmTQ2XXjX8oEicR38%2Bqq01Mz7ZElPM08gQeK%2F3Ma0Rwr%2FOp8%2BnjwwMWDnpOIW7zAJWJvShyPYhqAwOWahTGQUq0Jd4qxwECieuZYtKo%2B6SlvdmZsSgOVaipZ8OanojPRrjj6SHoVFLaaJC%2Bz8n1dGuTIbyh5kDTsnfN524oxO8hpSyo10btjTVR%2FO%2FB6Nc4Mr6SjdQftpKyaHtpGg9mpYKITnXzWGGkNLXHYGTZ4nHlyMQ%2ByfpTegP%2FTybJFsxHyHHLEysXV1UfH6fennxa0PgunlbvZYVSGTn05y5zaS2h7sVYfOYOyv4l61tqcny7sAS1MzASTvHFPO0Lc%2BU7NA9IWnFsQLYS3yPsLmyXZMIamsr0GOqUBczoHIQcMLZLcKksi2xGOvfuM1Bv9%2BFQr6y6mH7GTP91OZgtA8m%2FTx17yNh%2F%2FtRLQa1P%2Fld7tLpNK15Zd5KneWUI2AsEqB%2Bm9uPt2L6SQpp%2Ff7pSozVsG4rn8pwj4S6HRwiqJNc63kLEEQWrUHLTixozT04YeiTJLtZRMQdHvctFaw6tmvQSz1UJ4k5vST%2FyCesRps3K10QliFQtZWV1W%2BnvB39ag&X-Amz-Signature=bf00fc0528db05d320c9461847656d8ff6f5e3b5a00069e618065b4c421fc45d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
