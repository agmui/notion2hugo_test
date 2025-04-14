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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZX4NKF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3kE7DwpSB71o%2FKCUH0rD2R3lQC9tqu4eagYfwKXYGVAIgZtjIJ%2FguKOEB6Gh%2FB6QWJx8e5vLhg5b911hevIsdnEcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHYT2SlP0StAXFb4YSrcA4VdZ3MajCFFONeEbYYa6aQXRbDRyEETxgrlnlneRdO2RCVZ5cqBKSm6I875u59v7hB4VMc0wRCKPqvoxch3S89Nlr1qAs3yPoxf%2FaHiZpFdT9Swubg7CUQ90mDuDF6fhld2%2FwZqZ7ivcI8gSwZcacOoDUwVx1ceSTAHr4Tfc3SKKCFDNtpK1Q6Igc7eRfCVPNVhUTB16gA2FAbbyLxq3yNXj1ZjLbKa%2FvL1Q8lcp2wSj0VYQ7Vax%2FvDnFCp0SUHBp6IHymZWeh7k17VwaO8EWsdFmPR2HOHznHgSjwCi7Iwb57%2FWn9m00A97PcOt0BCYYrMZSA%2FjDKvr9N4DNoIhVmve22PRpbNPudLU2nol02h46DDdGenJPrDe35Kbc%2FFtS%2BlCrebz7cBjVdQjPjTuom%2BJOxvBhEx%2B%2B3rjbTCKTC%2Fh9ydGe17%2BtwNHyAV7zbjNqsJOfKBZ%2FDxizjtHKY%2BRiDRLOOFmzEQxHuzG56TYW5IZHSs0Jgb3saqiWB4ClgOJfSq%2BRiMDpo7Qo1uHw1y6eWq8EQsuYyTnhJAanDOTS%2Bdx9H%2FZpejg34uMrCZNS2mYxZIybogLbspxNLPR5BIgwJ60oJzXP1WCXQpFt4UiTbZrfan6aFkcbNyHlWLMK2n878GOqUBmvQjR1%2F7gH5qT4zDUdz4Gy7RrLn%2FID%2BhEjBGtrRtfKdI6zbeUw91pHPkjWhZ3PAKeHsw%2B3jSguiVlMGRtzqAvBt7mPTuMX%2BuSWSV7rQUBKEU3Z6k7WzYNLTruFM8GDUi2IKfl0fxPbpw9ry6SsKBNcd%2BNGp67Zfh169%2BhHryaQCn4NZD6WEde%2Bhn%2FAmv07fwI77aZAnxNSLhts3fjzHheqZXkAR4&X-Amz-Signature=40392b8c5a4e0fad9a2a8e922831d64eb9703c93dd557600a146a3fbe9ba1452&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZX4NKF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3kE7DwpSB71o%2FKCUH0rD2R3lQC9tqu4eagYfwKXYGVAIgZtjIJ%2FguKOEB6Gh%2FB6QWJx8e5vLhg5b911hevIsdnEcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHYT2SlP0StAXFb4YSrcA4VdZ3MajCFFONeEbYYa6aQXRbDRyEETxgrlnlneRdO2RCVZ5cqBKSm6I875u59v7hB4VMc0wRCKPqvoxch3S89Nlr1qAs3yPoxf%2FaHiZpFdT9Swubg7CUQ90mDuDF6fhld2%2FwZqZ7ivcI8gSwZcacOoDUwVx1ceSTAHr4Tfc3SKKCFDNtpK1Q6Igc7eRfCVPNVhUTB16gA2FAbbyLxq3yNXj1ZjLbKa%2FvL1Q8lcp2wSj0VYQ7Vax%2FvDnFCp0SUHBp6IHymZWeh7k17VwaO8EWsdFmPR2HOHznHgSjwCi7Iwb57%2FWn9m00A97PcOt0BCYYrMZSA%2FjDKvr9N4DNoIhVmve22PRpbNPudLU2nol02h46DDdGenJPrDe35Kbc%2FFtS%2BlCrebz7cBjVdQjPjTuom%2BJOxvBhEx%2B%2B3rjbTCKTC%2Fh9ydGe17%2BtwNHyAV7zbjNqsJOfKBZ%2FDxizjtHKY%2BRiDRLOOFmzEQxHuzG56TYW5IZHSs0Jgb3saqiWB4ClgOJfSq%2BRiMDpo7Qo1uHw1y6eWq8EQsuYyTnhJAanDOTS%2Bdx9H%2FZpejg34uMrCZNS2mYxZIybogLbspxNLPR5BIgwJ60oJzXP1WCXQpFt4UiTbZrfan6aFkcbNyHlWLMK2n878GOqUBmvQjR1%2F7gH5qT4zDUdz4Gy7RrLn%2FID%2BhEjBGtrRtfKdI6zbeUw91pHPkjWhZ3PAKeHsw%2B3jSguiVlMGRtzqAvBt7mPTuMX%2BuSWSV7rQUBKEU3Z6k7WzYNLTruFM8GDUi2IKfl0fxPbpw9ry6SsKBNcd%2BNGp67Zfh169%2BhHryaQCn4NZD6WEde%2Bhn%2FAmv07fwI77aZAnxNSLhts3fjzHheqZXkAR4&X-Amz-Signature=039f9f5bf70d24c169e997677e2c21ecd682acbac3189c3c1669b1b16d2051ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
