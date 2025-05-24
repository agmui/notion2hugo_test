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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6TXXMZO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEp4TozqGt0aVLWRQqOQYovpVDjjtaXITLyfWnXf9WH9AiB3xVgsTGaikNsk2mv4X1piA8d0TleYpUIzayoPhZ6ypyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMxC3U8e1VgBPCzx5wKtwDoSpnRL21K8wvlPb%2FEnEhf13vqemQ20yZDT6tHrBtZh21Jfsv03Wmp8A%2FPPMvyI%2FbMRVPQetoo3ptmSaRlbnS8vbb5qqpu%2BlIKeFI8%2FJWx8nyZuSEivSm5XBqmxbfNs5oz9d5y46Bw01MYKcIrCHG4jkmYRnL86dvsIQspwHSESt%2F0fntZmxedUPkNV9Ka6ccaIjiwK9yYnTGsa9TYH8u6VGY0htT%2BKvB5pmeGeBvHAZZy9l3T7OMaqllicdwlS7j%2BOO4qZ9LeHdwE32sEbX5WQp82rpVNNw3D4%2Fpndjz08dKEGb%2BS4IeaC2EW6UAGFwFIKzrXdR5oOdklo6wSCCtDzV2pjMiUsgFaiqusDcRhPN%2BNLkXyPxZjXuMJbl6hwhhCxMjN6eMIgenf845yNKzUvyvX1EFscuRCnGbxXi6l%2FlqYSoIhv0z1BjkyAhkDVURfAGdGLXRSlTiMrz7J78%2B5EFjeO7G%2B4Z%2B5y5X5Cgo62mmR%2BjyU1Rv4pNdpEL5ubeDWaFX%2FSv4X8eQBn%2F8U9AQU2zJ%2BdW5yc1Tit9aB1aFgqeVXlsxfGdXcOKKrmDEf24dF9ayZok2eVYr82xQMlPvuDaL0ThIdtkd%2Bk9hvy1aVHPZ9dK4mbMvObJOFXMwsLfGwQY6pgEtoBBFGJBjNFQb3%2Fb0Uu3dGyIJtnAVACq6ox4pL7hxU0VjZ31hSYBLJvnLY3PRWdZqPf6s7TB%2FDuS6PkFYcnWkY1JkJOh6cvu156X7DJCkuk0xlN16qc1yHl4BTXt3HQD1rQVVh0bn7YIDyuiPQ%2FNpJ2a8JWiD8xh2G%2BCUeqMwqo1sjVadGJ%2FgCdbyqYAqq95OVL07bbMRvO1x3WqRVwf1EDabPxZO&X-Amz-Signature=ed77bd8fa3f2889c1176cf8d3da1463a622d9efc9daeb4949d4f09915156f37d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6TXXMZO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEp4TozqGt0aVLWRQqOQYovpVDjjtaXITLyfWnXf9WH9AiB3xVgsTGaikNsk2mv4X1piA8d0TleYpUIzayoPhZ6ypyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMxC3U8e1VgBPCzx5wKtwDoSpnRL21K8wvlPb%2FEnEhf13vqemQ20yZDT6tHrBtZh21Jfsv03Wmp8A%2FPPMvyI%2FbMRVPQetoo3ptmSaRlbnS8vbb5qqpu%2BlIKeFI8%2FJWx8nyZuSEivSm5XBqmxbfNs5oz9d5y46Bw01MYKcIrCHG4jkmYRnL86dvsIQspwHSESt%2F0fntZmxedUPkNV9Ka6ccaIjiwK9yYnTGsa9TYH8u6VGY0htT%2BKvB5pmeGeBvHAZZy9l3T7OMaqllicdwlS7j%2BOO4qZ9LeHdwE32sEbX5WQp82rpVNNw3D4%2Fpndjz08dKEGb%2BS4IeaC2EW6UAGFwFIKzrXdR5oOdklo6wSCCtDzV2pjMiUsgFaiqusDcRhPN%2BNLkXyPxZjXuMJbl6hwhhCxMjN6eMIgenf845yNKzUvyvX1EFscuRCnGbxXi6l%2FlqYSoIhv0z1BjkyAhkDVURfAGdGLXRSlTiMrz7J78%2B5EFjeO7G%2B4Z%2B5y5X5Cgo62mmR%2BjyU1Rv4pNdpEL5ubeDWaFX%2FSv4X8eQBn%2F8U9AQU2zJ%2BdW5yc1Tit9aB1aFgqeVXlsxfGdXcOKKrmDEf24dF9ayZok2eVYr82xQMlPvuDaL0ThIdtkd%2Bk9hvy1aVHPZ9dK4mbMvObJOFXMwsLfGwQY6pgEtoBBFGJBjNFQb3%2Fb0Uu3dGyIJtnAVACq6ox4pL7hxU0VjZ31hSYBLJvnLY3PRWdZqPf6s7TB%2FDuS6PkFYcnWkY1JkJOh6cvu156X7DJCkuk0xlN16qc1yHl4BTXt3HQD1rQVVh0bn7YIDyuiPQ%2FNpJ2a8JWiD8xh2G%2BCUeqMwqo1sjVadGJ%2FgCdbyqYAqq95OVL07bbMRvO1x3WqRVwf1EDabPxZO&X-Amz-Signature=af8f1f2bc83fa411918a72615302fa9c49491637ff37df0fbbc1d69b37e8c2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
