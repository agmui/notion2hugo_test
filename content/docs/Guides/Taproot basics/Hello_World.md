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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLQ3TJ3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDjeThxVU24bt6cJpGKz5cLBKj%2FHhFbgAAG3tKJzGrwaAiBUxYjxhMHerTzNbSBWMncixsggOsiz2Ao5pBDrv3uOFir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMZPrreK43q7TB5i3bKtwDg9fj%2B%2BdTBWvH%2BuTrLmpzmxEFZ5jPOsmoXLH08pZLXTDfbY9vNWt6cPGPYhMdbL68eqSAeAOMVYBhtYT2GbPvqNPcRU%2BNu2fHClkh0mvPoizL1RRaR8xE%2BEMxKqTbnJ%2F%2FKrJhm%2FeBKnPIrKE3ZoRjVz8QCMv%2BBnTWEUQfS7s4Ltnkx5UT%2FsxIFDTLMlHCbxFMd9Gjn3Bl%2FSCA2HAloR8sIHbsTLmj%2FiOa3seNYtrsam5QpVJgSzgtweswwc8Zcl2CFFdrynG4JeFc1k1zD05rUaOUzFOjh942qWpOvLUCdzWNXbLGmSi8v8ciVAgn2%2Bvaki3nsWpeliZzqp6ZH43MjoAnBF7DXl7Fl%2FSlfj7CDFoiWBRyx1J58yi%2FhppfZvpCKDAaKmO8MIr9qP87P81Ps2ZMZTLSU%2B6Dxbz7%2B8QFp%2F%2Fh5W7Nj8ElTSs%2BqhTMgbXYVCAOg%2B%2FMr7IB%2BD45FXjPHGqrN0TjdKJ1Bu0IBSVN1E6nkJvgD7VXT0RnoL7i4ATJYDw2X28R%2BtEsUCH%2Be3Bvq7vqgocEvNvt29TaJJD0OEWyZUPquzEGpaTXOqy%2BR8Q2W276%2BhpU851lzQV%2F6OiQXu%2BPFkwYCEXVFuMqa46zJ1%2FPNizWu4Q5Dx1e7k0w5sjQwwY6pgFjrSwkTqR%2F70aPHmqbOR3Dh72uVUM6y3F4mAPHn2qho5jAGB02qovJC1WAtfsSdw%2BQXmWUSvgmTeIdzJnMGjq5NDTh4%2F7yAB5j2t7u67FpQdhOEuZq04ZaM8URJeeg8S9XYmIooj%2B3RipPi0kSdagy7yhqxbeGfdg%2BWFbHWFpSPHF%2FD6Njjn3tZVDiJS0GIDUh6WFIFz4Uw2A7xoUVHoUo29LFSBqL&X-Amz-Signature=5fc5e61885454b70a37fd40ab2d9032d954d6d5c0e5a790efae1025621bf3365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLQ3TJ3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDjeThxVU24bt6cJpGKz5cLBKj%2FHhFbgAAG3tKJzGrwaAiBUxYjxhMHerTzNbSBWMncixsggOsiz2Ao5pBDrv3uOFir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMZPrreK43q7TB5i3bKtwDg9fj%2B%2BdTBWvH%2BuTrLmpzmxEFZ5jPOsmoXLH08pZLXTDfbY9vNWt6cPGPYhMdbL68eqSAeAOMVYBhtYT2GbPvqNPcRU%2BNu2fHClkh0mvPoizL1RRaR8xE%2BEMxKqTbnJ%2F%2FKrJhm%2FeBKnPIrKE3ZoRjVz8QCMv%2BBnTWEUQfS7s4Ltnkx5UT%2FsxIFDTLMlHCbxFMd9Gjn3Bl%2FSCA2HAloR8sIHbsTLmj%2FiOa3seNYtrsam5QpVJgSzgtweswwc8Zcl2CFFdrynG4JeFc1k1zD05rUaOUzFOjh942qWpOvLUCdzWNXbLGmSi8v8ciVAgn2%2Bvaki3nsWpeliZzqp6ZH43MjoAnBF7DXl7Fl%2FSlfj7CDFoiWBRyx1J58yi%2FhppfZvpCKDAaKmO8MIr9qP87P81Ps2ZMZTLSU%2B6Dxbz7%2B8QFp%2F%2Fh5W7Nj8ElTSs%2BqhTMgbXYVCAOg%2B%2FMr7IB%2BD45FXjPHGqrN0TjdKJ1Bu0IBSVN1E6nkJvgD7VXT0RnoL7i4ATJYDw2X28R%2BtEsUCH%2Be3Bvq7vqgocEvNvt29TaJJD0OEWyZUPquzEGpaTXOqy%2BR8Q2W276%2BhpU851lzQV%2F6OiQXu%2BPFkwYCEXVFuMqa46zJ1%2FPNizWu4Q5Dx1e7k0w5sjQwwY6pgFjrSwkTqR%2F70aPHmqbOR3Dh72uVUM6y3F4mAPHn2qho5jAGB02qovJC1WAtfsSdw%2BQXmWUSvgmTeIdzJnMGjq5NDTh4%2F7yAB5j2t7u67FpQdhOEuZq04ZaM8URJeeg8S9XYmIooj%2B3RipPi0kSdagy7yhqxbeGfdg%2BWFbHWFpSPHF%2FD6Njjn3tZVDiJS0GIDUh6WFIFz4Uw2A7xoUVHoUo29LFSBqL&X-Amz-Signature=48bde5a4d21159c79fdb0ce60e5f1dec14ec17fbeda7815646f656a4b1f34843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
