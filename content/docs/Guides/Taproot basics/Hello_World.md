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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6HKDSD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsEdOW2r0%2FrRYSleKHwvnWgbUtMhwxvtVqkLtLQ7yJ%2BAiEAqMGLz%2BzZP4eIlMwGP3r06FVCDXKJgSihK4TH0zPM1%2BQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy9WfwscqY49IhtySrcA%2F2bh96TXFWdesEmBSBEl0ubdJd2gHTHjtIemC0vQjoIIW1vsdTiSFhWl2uB3NfPpo1ihSHoq2aUxsNuh3SpKPrKU9jyyuiENH%2BvA5mgudCPds3acRHiMFraWpozdzXFYmbOA4yASmjyJtfV1qDJoSc1WwPtwxr%2FvMYXIeBIOYbUP7Dai4R6OrgLS2%2FvD1HIr43onaOs1FVHNouNRGciw2QnDyzvLShyywhqiUgcTfvYCH6EvlEe9FM5dWjDXzdn%2B7XP2DLvYakP925lVRK%2FV3%2FJWU4R03CBiGpb0h8VcMEmqYsb8ljc66ExQ4tf9UfLWRKH%2Fbv1CZIVQ8YS2GqmFldomK3RKPvvZuP82Bq5zX%2BANPJhxKy%2FW%2BcQ6hWnzEs0coacLJmaWImrTJ6o9Ip%2F4M2Ahlz%2Bm0CMiKbWCAJu7ZCKQrdpdFRXZ5usdH5l9sFlX5fqhRcUSjg3CcSBt0j3UgX1ozxGLXMO8bGptzlCzrpm%2FeCNLDHhqx1M%2Bz8XIYW1lmKkFFrYpYHBbs%2BIPl6TL5KQzlAdW9Vy215p2d7I1A5ljx2DLgv3Rmf%2FskHFaltVwtCNE0y9BdtkxlxFw%2BOg3ZgK7gCpdBvmggcroawxP69LonDwlEY0MV3Vwl7RMIe%2B%2FbwGOqUBZIYmPUlyAFk9Olc1wC6j75AehlILXIH%2BlYI%2FbA%2BPDDpMkphtLxaPjpBR%2BflqMKUsI3YfAn6dtKVi1cxHPyhPSrOA9fbkY8Er5yYZTqfpU4vm3T4ngSxcBGkVC5gLulK%2BQJN4WD6%2BPzliXAcPQR%2BwSlfcQnvTauuM9fh%2Fjh1N0hfc%2F02go9bOaj1oaud96etIF1apj17odD9qw8gcw5QB7ymLVkch&X-Amz-Signature=739c003864908598a0c51823c738fa5cf7a1a5a9f15b79accb02f3e782f58093&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6HKDSD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsEdOW2r0%2FrRYSleKHwvnWgbUtMhwxvtVqkLtLQ7yJ%2BAiEAqMGLz%2BzZP4eIlMwGP3r06FVCDXKJgSihK4TH0zPM1%2BQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy9WfwscqY49IhtySrcA%2F2bh96TXFWdesEmBSBEl0ubdJd2gHTHjtIemC0vQjoIIW1vsdTiSFhWl2uB3NfPpo1ihSHoq2aUxsNuh3SpKPrKU9jyyuiENH%2BvA5mgudCPds3acRHiMFraWpozdzXFYmbOA4yASmjyJtfV1qDJoSc1WwPtwxr%2FvMYXIeBIOYbUP7Dai4R6OrgLS2%2FvD1HIr43onaOs1FVHNouNRGciw2QnDyzvLShyywhqiUgcTfvYCH6EvlEe9FM5dWjDXzdn%2B7XP2DLvYakP925lVRK%2FV3%2FJWU4R03CBiGpb0h8VcMEmqYsb8ljc66ExQ4tf9UfLWRKH%2Fbv1CZIVQ8YS2GqmFldomK3RKPvvZuP82Bq5zX%2BANPJhxKy%2FW%2BcQ6hWnzEs0coacLJmaWImrTJ6o9Ip%2F4M2Ahlz%2Bm0CMiKbWCAJu7ZCKQrdpdFRXZ5usdH5l9sFlX5fqhRcUSjg3CcSBt0j3UgX1ozxGLXMO8bGptzlCzrpm%2FeCNLDHhqx1M%2Bz8XIYW1lmKkFFrYpYHBbs%2BIPl6TL5KQzlAdW9Vy215p2d7I1A5ljx2DLgv3Rmf%2FskHFaltVwtCNE0y9BdtkxlxFw%2BOg3ZgK7gCpdBvmggcroawxP69LonDwlEY0MV3Vwl7RMIe%2B%2FbwGOqUBZIYmPUlyAFk9Olc1wC6j75AehlILXIH%2BlYI%2FbA%2BPDDpMkphtLxaPjpBR%2BflqMKUsI3YfAn6dtKVi1cxHPyhPSrOA9fbkY8Er5yYZTqfpU4vm3T4ngSxcBGkVC5gLulK%2BQJN4WD6%2BPzliXAcPQR%2BwSlfcQnvTauuM9fh%2Fjh1N0hfc%2F02go9bOaj1oaud96etIF1apj17odD9qw8gcw5QB7ymLVkch&X-Amz-Signature=ad6075664247c19c2212b46d3fe134beb86f5029f1dcc90dfccd4621f782c9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
