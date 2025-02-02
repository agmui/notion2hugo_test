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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EXMJXZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPJsPR495jgVSTs4fu86HjaldANeEfnGTtU6aJKT%2FRDQIgZUVHBJ6HzgxymH6dkLrogAJwvSlDD0N8OCtAMycoluwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsdIOzBEox2KJrqvSrcAzLaGr%2F07onau5F9c2DJL9kkPHYejmHnQa3qcBUyXnNv7LAsjlWi5xx0aHZ3GRSJKtuOyD54lUuxdnX0qX2bqoZggPkJVJdyEmGPxkCJdFBblVFmAklNMEE6l7pLjXbrxuznF5iiOxeuNKxmCrUx9OW8bWBQBL%2FTUl86fzr%2BmDwo%2BB8bcjhLB4Nz8OhnPfHr8cUweDiiWS%2FjsV2RPzA3HB3LO7Rx2saMrPkhpEVsyyKwJ7fuDvh1hLYK%2FzcQT%2Bn48ZA3QYQUM5Lz%2FPeL%2Fhucqful6r08BBePegSvcQb2VkcMoB1Qs4NDI%2Bfss%2FSUyQksUULc8wmXaOl3rcVvgFAFrw4uBFtS4J1FdhOLIPkB1D4%2B4WBywQe25bMDh6HDtWHpV5bLgYJpl25NEJmMyFxOnhfVoS%2BO%2FlU81z%2B%2BUfIiQfVVSZx9vy3NiYDp8NVK8TZ6mm7sHYHL5R1zpd65NlKcs5UQt9JYjacRfRQ0Y%2FEnryxie3yyVCOXzNVjXhjp4RJU7DvCB%2F4CPNgCcAbdQ3MtPiHfp1eUdp1jXLcvHLw%2B%2BW%2B6I4x1Xv7Pa%2BqCyqjew2NKfBAkebl0g%2FroDcP3vZIYCkfTMkPf4oxXrEt2ygq2aH4Wkgv%2BIvxVhmRrH1uUMI69%2B7wGOqUB02fhRMdlhkStFIBdtnXOJbJs1Z9eCNPIrIRkvvHPBaHrVZ8cTpOzbJ%2FkVQyYvrXiqQsf23gIjXePVHu7PMw1HCXWqB3daLnyQXaGFwicwq6UiwqPJfILbpT7dv95Hl5HoGxNjq2dnJKY41b3AHxIoqmXAsYgWQNKVEOZuNBFSBQGk9W4v9DnFPo6eOggdm5v78Aj5YqWgxjXLuUz1gJYfHA4CA%2B%2F&X-Amz-Signature=e7d13fa4d85f82df247a008ee7ce49b59a3a95ae12ebb60b3d926fc44b4f414f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EXMJXZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPJsPR495jgVSTs4fu86HjaldANeEfnGTtU6aJKT%2FRDQIgZUVHBJ6HzgxymH6dkLrogAJwvSlDD0N8OCtAMycoluwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsdIOzBEox2KJrqvSrcAzLaGr%2F07onau5F9c2DJL9kkPHYejmHnQa3qcBUyXnNv7LAsjlWi5xx0aHZ3GRSJKtuOyD54lUuxdnX0qX2bqoZggPkJVJdyEmGPxkCJdFBblVFmAklNMEE6l7pLjXbrxuznF5iiOxeuNKxmCrUx9OW8bWBQBL%2FTUl86fzr%2BmDwo%2BB8bcjhLB4Nz8OhnPfHr8cUweDiiWS%2FjsV2RPzA3HB3LO7Rx2saMrPkhpEVsyyKwJ7fuDvh1hLYK%2FzcQT%2Bn48ZA3QYQUM5Lz%2FPeL%2Fhucqful6r08BBePegSvcQb2VkcMoB1Qs4NDI%2Bfss%2FSUyQksUULc8wmXaOl3rcVvgFAFrw4uBFtS4J1FdhOLIPkB1D4%2B4WBywQe25bMDh6HDtWHpV5bLgYJpl25NEJmMyFxOnhfVoS%2BO%2FlU81z%2B%2BUfIiQfVVSZx9vy3NiYDp8NVK8TZ6mm7sHYHL5R1zpd65NlKcs5UQt9JYjacRfRQ0Y%2FEnryxie3yyVCOXzNVjXhjp4RJU7DvCB%2F4CPNgCcAbdQ3MtPiHfp1eUdp1jXLcvHLw%2B%2BW%2B6I4x1Xv7Pa%2BqCyqjew2NKfBAkebl0g%2FroDcP3vZIYCkfTMkPf4oxXrEt2ygq2aH4Wkgv%2BIvxVhmRrH1uUMI69%2B7wGOqUB02fhRMdlhkStFIBdtnXOJbJs1Z9eCNPIrIRkvvHPBaHrVZ8cTpOzbJ%2FkVQyYvrXiqQsf23gIjXePVHu7PMw1HCXWqB3daLnyQXaGFwicwq6UiwqPJfILbpT7dv95Hl5HoGxNjq2dnJKY41b3AHxIoqmXAsYgWQNKVEOZuNBFSBQGk9W4v9DnFPo6eOggdm5v78Aj5YqWgxjXLuUz1gJYfHA4CA%2B%2F&X-Amz-Signature=d44916c9e42d78b8afbea83145a51e1d789661d717d19898db21ff97f8bf597a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
