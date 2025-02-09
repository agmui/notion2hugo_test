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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPJU7PV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsvfn6njkWK%2BTK4vvE0JIBd1%2FuM9norKYKWleqVO2DrAiARQyFg%2BsQfu5OKN2oOquCnaURBXY0jJffiaRIhNKznwiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcKP7zbBRpJU9M42IKtwD1uHycxaLMBgRjzHEriZEqaxLV8b3pGykLyfbMbimvKE3WRlDMnEe2zYImUOx3GyWo0K5FjuEGlxHfwSmS4KZtJi2Cp9lPCSzmwkebQRgA4wHQoEYUGw26IbctaoUHJrIklEhAhYCYkSPkVw0nVVhj%2FdyfZcOlLDEzCT%2FhFuundoxV%2FjMwe8E0yk34sN0mRBxiSpJdW9eq1%2BcJYShB08MQbwl8nfR9XQTuvxB7dZD2vqKQAaz69P6FIHl5AQjI8W%2FHB0VjeBLX6210TCWPjAdHF79WVBLkiluMudhx7guuozgOC9bI1nb%2BHJ0HlVyeIDTHx7qZKQHkL%2Bzjx0T%2BAOV8viGg%2FsGnBT2k5urb1yaXXj4hg%2FTYIe33gS50N6QnVSpkike2HICTyzp2Jt8CP6SDvPLfEqQwyjIarf%2Fz4nYUR9JqdiR4pkgrogx0PffxBPh%2Bf4u13vno%2FYSmaRCJEVkMGPTWQMVG7R9i%2F%2B6JUtZthFMAKouCbd8E6GcB1%2FXELQ8%2BQSa8DOP1XFE9OVTQBwPH8LSPSThxB0ztLS2DKdGdHL%2FqcvGLal5Yhyg9hiWWZMMlHOR%2BjCT05s8VlueTzIAMBEfoRnKWvkCyTBd3OHYEcAd9t2gzXlI2o2JW8wwpuCkvQY6pgE%2FXqq2NjMfcyhuNxfoN6L4qxv5n04GNuXZiJ7sbedojsVByWqFbXrDOfCSF9b7XVyQlp5vzc8LdSrs8856SoWdb0WKteAYH%2FVwIoOXsoi4puTGHkAWbu%2BAknOsqvGWayX3t8voxmGr0HwV9M0ZFf1p4tMhXX3vEkWYZkbAAucZCDY1VRBef5N1OCUj6A07OtUfWyXegwK7pdQNthu%2Bh%2Bp2kXH7OjCA&X-Amz-Signature=051b3fa0e64bada474b58c967e1938ebe907127bc1de71423632013f7dd22a74&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPJU7PV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsvfn6njkWK%2BTK4vvE0JIBd1%2FuM9norKYKWleqVO2DrAiARQyFg%2BsQfu5OKN2oOquCnaURBXY0jJffiaRIhNKznwiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcKP7zbBRpJU9M42IKtwD1uHycxaLMBgRjzHEriZEqaxLV8b3pGykLyfbMbimvKE3WRlDMnEe2zYImUOx3GyWo0K5FjuEGlxHfwSmS4KZtJi2Cp9lPCSzmwkebQRgA4wHQoEYUGw26IbctaoUHJrIklEhAhYCYkSPkVw0nVVhj%2FdyfZcOlLDEzCT%2FhFuundoxV%2FjMwe8E0yk34sN0mRBxiSpJdW9eq1%2BcJYShB08MQbwl8nfR9XQTuvxB7dZD2vqKQAaz69P6FIHl5AQjI8W%2FHB0VjeBLX6210TCWPjAdHF79WVBLkiluMudhx7guuozgOC9bI1nb%2BHJ0HlVyeIDTHx7qZKQHkL%2Bzjx0T%2BAOV8viGg%2FsGnBT2k5urb1yaXXj4hg%2FTYIe33gS50N6QnVSpkike2HICTyzp2Jt8CP6SDvPLfEqQwyjIarf%2Fz4nYUR9JqdiR4pkgrogx0PffxBPh%2Bf4u13vno%2FYSmaRCJEVkMGPTWQMVG7R9i%2F%2B6JUtZthFMAKouCbd8E6GcB1%2FXELQ8%2BQSa8DOP1XFE9OVTQBwPH8LSPSThxB0ztLS2DKdGdHL%2FqcvGLal5Yhyg9hiWWZMMlHOR%2BjCT05s8VlueTzIAMBEfoRnKWvkCyTBd3OHYEcAd9t2gzXlI2o2JW8wwpuCkvQY6pgE%2FXqq2NjMfcyhuNxfoN6L4qxv5n04GNuXZiJ7sbedojsVByWqFbXrDOfCSF9b7XVyQlp5vzc8LdSrs8856SoWdb0WKteAYH%2FVwIoOXsoi4puTGHkAWbu%2BAknOsqvGWayX3t8voxmGr0HwV9M0ZFf1p4tMhXX3vEkWYZkbAAucZCDY1VRBef5N1OCUj6A07OtUfWyXegwK7pdQNthu%2Bh%2Bp2kXH7OjCA&X-Amz-Signature=17109ea45fe74c0858ddce2579cae5e5af0b155f1e3e6f6d89e600cbab41b153&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
