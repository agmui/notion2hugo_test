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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DS6RKF%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC320Ng3EcXLLXhaC9bymlGFqBPjgDIVs37ADlE60B3BgIgXmSndhCRwc%2FyEgTG5m%2BoIkLLbtI7hWH1oE4l2Kh9LVwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDK6vnmtNyd7WBLS1YyrcA4J9LeIZ4uhgmRns%2BvsbfAHtsXpAbWgi7kgJ9ujBE%2B5GHw5VDWEz6O9KNslDHH0NWY3U5lmmyNnkvUQhH8vv%2BZRVE0%2BOXUxrHk8V9uIwFHvFAhn3mCeLUPX0UsXfeKUFO0sA6PfVYNbrXjTzjgxfVW%2Fjd7jYtOpGnVU7GtMTaU1O8WeeYZZ6JVchWdpwmd2DL8jcPhpYrEavTjMEI%2FXskabQxoE06EroRdqrLwlO1nqzvdNymGSshT4FjG5%2Bo97%2BMcGnfZ%2FMmDtTZ306OTbL47SbQsEHHejZBxUcOyJzPlUWhf4tE0F2e6hHB7K%2FaP%2FVjIch1JvhShNhA4skm3WySXRb4qv5h4hulSGkOT0CgOD52ImZPM6O3k9icx6U5vm3pIpcc32%2FTDBzpKOj10pDvDJCVndjXzZg7PqWCBtaszIr1Gm5uPHJKEB51W18cjrcDPN1KLyePYktsOOIW6wDStEakdc1B%2BDWNewgdOI0HBFIbSVDQK88u%2BL9ehE0CPFM1MqJJ8sNP1u4mEVM80E%2FIaebMTH6L42rtKM1x%2FBKEyN0y412g%2BCd6Fn6fd0PePvLVaT%2FhnDrBhc9ewvtTe9LV2yBjDRL4da3UKKoPKkGJSpco7o9jkDfl4ckmil3MOml5tIGOqUBdKQnyFdU4s106Wf0Pus9KL9qgLUpWK7BUnWb0S7ozVtbRZSrGHEPjVXLP0GmX1Buagi5k3lqdNq5PcrQp8ZP4YXSpLJrR0k1Qk4ZTxWYEnp%2FbTL6BIznMRlL7kycxY28Tb1CgAQ96e9i2Cl6%2FqAUdp%2FHGzFOe1o0zaOTWkH1Xv%2BQRHeuo7yegYp%2BdIn9jmDGBlNTmdE2%2B4PPUQrDuaiCN9yXQudA&X-Amz-Signature=9b27e72501658c8bf611b233c56de1d10802b5d406b8681abb206338e0c3088b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DS6RKF%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC320Ng3EcXLLXhaC9bymlGFqBPjgDIVs37ADlE60B3BgIgXmSndhCRwc%2FyEgTG5m%2BoIkLLbtI7hWH1oE4l2Kh9LVwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDK6vnmtNyd7WBLS1YyrcA4J9LeIZ4uhgmRns%2BvsbfAHtsXpAbWgi7kgJ9ujBE%2B5GHw5VDWEz6O9KNslDHH0NWY3U5lmmyNnkvUQhH8vv%2BZRVE0%2BOXUxrHk8V9uIwFHvFAhn3mCeLUPX0UsXfeKUFO0sA6PfVYNbrXjTzjgxfVW%2Fjd7jYtOpGnVU7GtMTaU1O8WeeYZZ6JVchWdpwmd2DL8jcPhpYrEavTjMEI%2FXskabQxoE06EroRdqrLwlO1nqzvdNymGSshT4FjG5%2Bo97%2BMcGnfZ%2FMmDtTZ306OTbL47SbQsEHHejZBxUcOyJzPlUWhf4tE0F2e6hHB7K%2FaP%2FVjIch1JvhShNhA4skm3WySXRb4qv5h4hulSGkOT0CgOD52ImZPM6O3k9icx6U5vm3pIpcc32%2FTDBzpKOj10pDvDJCVndjXzZg7PqWCBtaszIr1Gm5uPHJKEB51W18cjrcDPN1KLyePYktsOOIW6wDStEakdc1B%2BDWNewgdOI0HBFIbSVDQK88u%2BL9ehE0CPFM1MqJJ8sNP1u4mEVM80E%2FIaebMTH6L42rtKM1x%2FBKEyN0y412g%2BCd6Fn6fd0PePvLVaT%2FhnDrBhc9ewvtTe9LV2yBjDRL4da3UKKoPKkGJSpco7o9jkDfl4ckmil3MOml5tIGOqUBdKQnyFdU4s106Wf0Pus9KL9qgLUpWK7BUnWb0S7ozVtbRZSrGHEPjVXLP0GmX1Buagi5k3lqdNq5PcrQp8ZP4YXSpLJrR0k1Qk4ZTxWYEnp%2FbTL6BIznMRlL7kycxY28Tb1CgAQ96e9i2Cl6%2FqAUdp%2FHGzFOe1o0zaOTWkH1Xv%2BQRHeuo7yegYp%2BdIn9jmDGBlNTmdE2%2B4PPUQrDuaiCN9yXQudA&X-Amz-Signature=da8a60e5a3d4167a730562d0a83c34c75f795f9f79aa2ebdb5454d9122e31219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
