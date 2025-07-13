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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5ENCHW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5E5RwL0LmV79uZOcWOm4qxK%2Fcq3eUyKaoXf8VysM5swIgNjUbMJkkh75i%2Bn3KbwcE%2FQ6ogaVaiec2bqEnCP7qW0gqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwYSdS2MeWx7CWC7ircA21VGTWhXrSPfweuuMAXPLfaNat8xqCrmutTdfB9WGF8tphw9UWrHKAmSXVLtMKfVBXY6py2uvk17HuXVXbL99eV3gqKQRVWXYL6uJ7DdCfv6OqphvxuNsftaGz2zd2Rp%2BgPKq6dDCVtkjoWqRyGBYAz3hSZAiDZJxsVxdPv1KvWaJXWdYo4WdgIvLaGDDzY%2FDfMBCAro%2FkCB1rNMG1QdDSa4crZSj9BaVjc7koJjcHdklAIxxHjxHM0GE95zCFkYs%2FvtDiotC0oUPoxhO8sOm5%2FTFzD6ZX8BpLDV668CalRt%2FSvWzUhAjGqLrRJAyAxtpQMHBzFsJQQEOOZkLWoGfBTQ0XjGg%2BqtS66Oq9ZKRJw2yELJgMuqMzAFO9c2%2FurAyadc12nzO8PBPxBubam66lqElXi0ZmG0%2BuByV%2BWGg%2BdtFYp1aVRTOwXeWc8R707XZdDURWTpsUlS3urlrdVjlwvJXzghdMWD2BvkHsaKKBNQwzoCp3mDhR7xjJFZJhIKfEgZNTV12YAtdzw%2B4OUNWGsqGqqfjXsozNAXEEYUy3LQi0%2Fkc4kYtKC3FFElTzQpb1qDLDOr1irH%2F1DPqeFbZAwX5UuTrPxMZoeVTx6DAMHfPXRm%2F6GtJTaSFiTMK3YzMMGOqUBMnseTj7l67qmNJxnqG1o2E8BZkHGxr7hz7ZcJ0zMrPpN2T2KokmHEd8VvCXLQjre6G4%2BM8tfnjGDW%2FVPhEuBhmlYuU0nnn2LcfdU4uFqGjZE%2BwoIYxDAMlWLGRIF09ZaxrnRReZMSZu0d4mSzTygvLyD59%2BioV0MsmIEmtvwbNRNIZxVad3GSkORPUb3WtYC%2BcEq%2Fdki96vdQO7%2B434bL%2FYC0jM2&X-Amz-Signature=1bc1d1ea1d7b04f5ae6347f3fe022d45cbcd1ad8354cd88f060c9e3fe4320a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5ENCHW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5E5RwL0LmV79uZOcWOm4qxK%2Fcq3eUyKaoXf8VysM5swIgNjUbMJkkh75i%2Bn3KbwcE%2FQ6ogaVaiec2bqEnCP7qW0gqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwYSdS2MeWx7CWC7ircA21VGTWhXrSPfweuuMAXPLfaNat8xqCrmutTdfB9WGF8tphw9UWrHKAmSXVLtMKfVBXY6py2uvk17HuXVXbL99eV3gqKQRVWXYL6uJ7DdCfv6OqphvxuNsftaGz2zd2Rp%2BgPKq6dDCVtkjoWqRyGBYAz3hSZAiDZJxsVxdPv1KvWaJXWdYo4WdgIvLaGDDzY%2FDfMBCAro%2FkCB1rNMG1QdDSa4crZSj9BaVjc7koJjcHdklAIxxHjxHM0GE95zCFkYs%2FvtDiotC0oUPoxhO8sOm5%2FTFzD6ZX8BpLDV668CalRt%2FSvWzUhAjGqLrRJAyAxtpQMHBzFsJQQEOOZkLWoGfBTQ0XjGg%2BqtS66Oq9ZKRJw2yELJgMuqMzAFO9c2%2FurAyadc12nzO8PBPxBubam66lqElXi0ZmG0%2BuByV%2BWGg%2BdtFYp1aVRTOwXeWc8R707XZdDURWTpsUlS3urlrdVjlwvJXzghdMWD2BvkHsaKKBNQwzoCp3mDhR7xjJFZJhIKfEgZNTV12YAtdzw%2B4OUNWGsqGqqfjXsozNAXEEYUy3LQi0%2Fkc4kYtKC3FFElTzQpb1qDLDOr1irH%2F1DPqeFbZAwX5UuTrPxMZoeVTx6DAMHfPXRm%2F6GtJTaSFiTMK3YzMMGOqUBMnseTj7l67qmNJxnqG1o2E8BZkHGxr7hz7ZcJ0zMrPpN2T2KokmHEd8VvCXLQjre6G4%2BM8tfnjGDW%2FVPhEuBhmlYuU0nnn2LcfdU4uFqGjZE%2BwoIYxDAMlWLGRIF09ZaxrnRReZMSZu0d4mSzTygvLyD59%2BioV0MsmIEmtvwbNRNIZxVad3GSkORPUb3WtYC%2BcEq%2Fdki96vdQO7%2B434bL%2FYC0jM2&X-Amz-Signature=78bcc03c845ac84d5f6d9ee69ab4d2fbc546d98dffb1eab16c37a70899b21bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
