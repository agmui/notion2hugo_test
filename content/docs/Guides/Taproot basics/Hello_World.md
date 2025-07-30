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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYN7RGGL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiGjupuqdshW7%2BkSq7RQPaEOrk3nZgmqJd%2BrKIbTpbmwIgBKx9izOPAq4dkoU0l6lZX5S3%2F%2FPkmtSSjgqst8Uc%2BDwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKplvY3N8coBa8ns3yrcA3krlpMJtz01xOjp5e5wsgcCq98ySk%2FPoj4igz3Yt5TUS8JaQ4RBEIoybtxTNheMhOTh8xlrRBsZ4WNnu1iGcuYYz%2F4OaxA752vRJ9NnzbRcV8XTAl2iOyGUZGyM0ReJWWounm%2FntRi1mtHdjNjuYeeXEvZC1OqKqYXhAy%2BMWmku0OOn3cWhS0Kh5gilJpfcFgyJDRUco%2F%2B47YJl2QyCP72TRINGGRnuQfmHLOsLWmENYpekW%2BCrEFfplrVnvsidZmE6q2JFSBL5r1HF0R4tx8%2BXziT6wayw%2FcODk0qtX05aoYFmh7YRgZAyP%2FVBx2Ubd1XZVuPIGjZP%2F6LhdXeADrb%2Bvj5YA1Ui2P9HVwtF2zhRE9weYoxhFWZXq%2B4awjX1RnpRluz%2FUiTZvmuNUnSANenxe2NYziMzArowrVCjoLmdFeLVmEB9gCqITXwRtPD278pIR2xxtevpLgsFxfGgjoIFxSrZI0eq0apPnzfemZ9BNtEV5S6zz4r8f5WnExfpvU64aJt7ykr8vAupcHIjoA9aY2nYIQ2vVrXVV4zpP1w0Vkw8wJcC6AKqLJHIGNDukODxZQS2%2B1VjymTS3wjg3G4%2FUjV7jGy%2BFDJMIx7FNGxlHso9ZRIb6jRP%2FJxaMMmHqcQGOqUBiBaBBGIIpsGRfkbN90Zvx%2FSwwD%2Bb2QPBX5MNr%2Br6HHw6NykIVi5LmP%2Fr69kBclSsY1zTQRel%2F1Ru%2FUiXRbf5%2Fgm78BLsT1oV3k1se7VYHr%2F3g6fcVCOMJZp6V%2BF7uHVFPe1br%2BcMAbPAd3SL7NZNrQ%2F2gtDOm%2BerpcmN6TbX42IkMc8mxgjgiP5wvx4qV4SI2n%2B5slaoVj7Uz%2F%2BUYJtxw4160rX2&X-Amz-Signature=5ed7ee82cd7c106fd9b3a9f7e622453ee87180ab90f663d989058da785b5bed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYN7RGGL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiGjupuqdshW7%2BkSq7RQPaEOrk3nZgmqJd%2BrKIbTpbmwIgBKx9izOPAq4dkoU0l6lZX5S3%2F%2FPkmtSSjgqst8Uc%2BDwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKplvY3N8coBa8ns3yrcA3krlpMJtz01xOjp5e5wsgcCq98ySk%2FPoj4igz3Yt5TUS8JaQ4RBEIoybtxTNheMhOTh8xlrRBsZ4WNnu1iGcuYYz%2F4OaxA752vRJ9NnzbRcV8XTAl2iOyGUZGyM0ReJWWounm%2FntRi1mtHdjNjuYeeXEvZC1OqKqYXhAy%2BMWmku0OOn3cWhS0Kh5gilJpfcFgyJDRUco%2F%2B47YJl2QyCP72TRINGGRnuQfmHLOsLWmENYpekW%2BCrEFfplrVnvsidZmE6q2JFSBL5r1HF0R4tx8%2BXziT6wayw%2FcODk0qtX05aoYFmh7YRgZAyP%2FVBx2Ubd1XZVuPIGjZP%2F6LhdXeADrb%2Bvj5YA1Ui2P9HVwtF2zhRE9weYoxhFWZXq%2B4awjX1RnpRluz%2FUiTZvmuNUnSANenxe2NYziMzArowrVCjoLmdFeLVmEB9gCqITXwRtPD278pIR2xxtevpLgsFxfGgjoIFxSrZI0eq0apPnzfemZ9BNtEV5S6zz4r8f5WnExfpvU64aJt7ykr8vAupcHIjoA9aY2nYIQ2vVrXVV4zpP1w0Vkw8wJcC6AKqLJHIGNDukODxZQS2%2B1VjymTS3wjg3G4%2FUjV7jGy%2BFDJMIx7FNGxlHso9ZRIb6jRP%2FJxaMMmHqcQGOqUBiBaBBGIIpsGRfkbN90Zvx%2FSwwD%2Bb2QPBX5MNr%2Br6HHw6NykIVi5LmP%2Fr69kBclSsY1zTQRel%2F1Ru%2FUiXRbf5%2Fgm78BLsT1oV3k1se7VYHr%2F3g6fcVCOMJZp6V%2BF7uHVFPe1br%2BcMAbPAd3SL7NZNrQ%2F2gtDOm%2BerpcmN6TbX42IkMc8mxgjgiP5wvx4qV4SI2n%2B5slaoVj7Uz%2F%2BUYJtxw4160rX2&X-Amz-Signature=77572e0538e145a9a1b83c328251530b90911924cf06ca827b24c3fff6796d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
