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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UMZDL4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBDxOxV%2FT0%2Bm8EBEaRwSnvzn%2FX6o89lKiv%2Bua0rlGeagIgdzFdnIMTgg%2FEOx2W4tSClLJy4OnfrO2PK5STsRKX6oQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfqB608n2rBB6GscCrcA5a%2FeSSEDPY2OHReyD8F2bGfCsPNM6iZtChKnGUsnH%2Bf0D%2B0FiAhiVu6DQRxvP9ux%2FexIRUhXfXVLMNPNoeTsTi9LcWpKy472N0rElv6ODL0Fzo0tXSjsXBEPDaIGsSc%2B7pbkgGoed4Pv%2Bjg2Jo58BX%2Bg2MotsRC1WBfFps94iU9LjeerOZ%2FPcq%2B%2BXu9qEihGBXfJMDry1ib1JM%2BE0FOqfFfRH28jKTmooOaEzfr8HX61kScVtNIK9CVv5PLDknBJEYTBvFB3PHaUn6qYIH%2FW%2B%2B7faP5jKZrghJxFDLPQ%2BKV48FqE%2B%2BN8LSzFy2IlP97MJeLM5NB3cIHw6RKdogebtqoZ2dlW0seVY0sx35TwCWuAXS6uPR%2BsjU3agvK3X0FJihGa7%2BGvmSKCr3yERjhU13PsrNZsrmyPLGC4NahisQYYoRfJMAtiBQzFpM9LXGRiSRq4AxxnwAHxWm%2BJPB5i453bVPbs8R2ixVDM2lkgKDjlu0jTdSoZlu%2BCe0MA7ku2fzkrpJagnGAtvTvVadPdzqNxq0yAh60t0eyBVbHd2QeZmqgflfyWAZuRR2z%2FHM3yKRcGJRhwTCl3dVsniblKJfuBN9t6b2SV%2FsRgvn25Gju7EQORrq%2BXPIsMlHGMJOP28IGOqUB2Vycmbeb4Tt061q%2BVDkGcC5LucUyjiw4WN%2F4aigTPqppnCzpUWbSzvqINWCEXuEZhy09Mwrc9V7RSyOJ90lO5hTWxCS3OAZT9Hyg1RHs8IDLnKDDeQVaejKzHNkjeqc%2BbaY%2FzwcRlhm4R4E38l2R7qhVwSg8iNQZ7T390Xew9vYW%2Fj6yXcWb6CNGQE3XR%2FT%2FoRNECRn5lqF6z7K%2FaxkzZBl6LID%2B&X-Amz-Signature=b3ee84f7c538d5584df223a4101edf307b93eaa306cb08e8ee47e41deeb08ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UMZDL4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBDxOxV%2FT0%2Bm8EBEaRwSnvzn%2FX6o89lKiv%2Bua0rlGeagIgdzFdnIMTgg%2FEOx2W4tSClLJy4OnfrO2PK5STsRKX6oQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfqB608n2rBB6GscCrcA5a%2FeSSEDPY2OHReyD8F2bGfCsPNM6iZtChKnGUsnH%2Bf0D%2B0FiAhiVu6DQRxvP9ux%2FexIRUhXfXVLMNPNoeTsTi9LcWpKy472N0rElv6ODL0Fzo0tXSjsXBEPDaIGsSc%2B7pbkgGoed4Pv%2Bjg2Jo58BX%2Bg2MotsRC1WBfFps94iU9LjeerOZ%2FPcq%2B%2BXu9qEihGBXfJMDry1ib1JM%2BE0FOqfFfRH28jKTmooOaEzfr8HX61kScVtNIK9CVv5PLDknBJEYTBvFB3PHaUn6qYIH%2FW%2B%2B7faP5jKZrghJxFDLPQ%2BKV48FqE%2B%2BN8LSzFy2IlP97MJeLM5NB3cIHw6RKdogebtqoZ2dlW0seVY0sx35TwCWuAXS6uPR%2BsjU3agvK3X0FJihGa7%2BGvmSKCr3yERjhU13PsrNZsrmyPLGC4NahisQYYoRfJMAtiBQzFpM9LXGRiSRq4AxxnwAHxWm%2BJPB5i453bVPbs8R2ixVDM2lkgKDjlu0jTdSoZlu%2BCe0MA7ku2fzkrpJagnGAtvTvVadPdzqNxq0yAh60t0eyBVbHd2QeZmqgflfyWAZuRR2z%2FHM3yKRcGJRhwTCl3dVsniblKJfuBN9t6b2SV%2FsRgvn25Gju7EQORrq%2BXPIsMlHGMJOP28IGOqUB2Vycmbeb4Tt061q%2BVDkGcC5LucUyjiw4WN%2F4aigTPqppnCzpUWbSzvqINWCEXuEZhy09Mwrc9V7RSyOJ90lO5hTWxCS3OAZT9Hyg1RHs8IDLnKDDeQVaejKzHNkjeqc%2BbaY%2FzwcRlhm4R4E38l2R7qhVwSg8iNQZ7T390Xew9vYW%2Fj6yXcWb6CNGQE3XR%2FT%2FoRNECRn5lqF6z7K%2FaxkzZBl6LID%2B&X-Amz-Signature=046f17abfa5cccb104d66687fbc295f3ffbeea89204c668d957a864a2e97cddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
