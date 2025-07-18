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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMAHSER%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCux7VvjNEKgA3dUbuD4eOvGUO9OD%2FcdhGSpSJQexTqWwIhAJgtALJXeJdTF0lJNVIRYazJ%2B2nWI3DFEq41kaDa%2BLAkKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJj6Auodx6iMLp184q3ANvvPdB6cj6y8MqvucQGPafdKbdPnx%2FAFLxLuJ5OGlNBhPcKPxslR69YLfj6Te6b4OKs7yPm3kC%2BSLQGpdG43QN2QV8TIh4p%2FvMq0N6UQe%2BhOydBBl9WLhy36ysKZbFFLaPeSGMqzn0YOo2LQOPkXZN2faMSTqVRxW%2BQv7bjCZ%2FBYI6X0BeOMoq%2Fe2CcZoiCqxrHOCmv8JvDmNxw93rVb%2F8YkrD%2BqOK72WJPlcwHAVbjL3N7J4f7fb1eLiAYc11z3VE9FAPsVkW1XThvbyLk%2FZF5k3MFBVkEAJf5ItjN2UsqZFcqbiXRcfd%2B0%2BFHZw8JDEDXp1jVHkNF7Ks28%2Fwo3yr%2FKMf0rND9pGYTUgw28FJjyj8ddTDAdyB6deEXBmKAY7VGoRyWUkAVHKIbuYLu22av8s5RNdKMDXphzFs33WnBzRFgL9eYdS17vtngjcyu07PBsjsNqBeAofdO69v%2BBCHA%2F6KRgH1oxC5Cpg%2Bn1qJI3KuVswawIePBh62U%2B0UvArGh8wpsKv4Zqt1moXiuGCo%2B33mFB9L5CSGTyEf4l0ytp0gClmCqIhdFSY3hEo4Ay%2BW46X3MLwkfbY68EQWuKZKxeqzg472NjNN1hGnPe%2BdPpAjPmJ9L276n%2BpuIzDy5erDBjqkAUxO%2Fiy7TQZ3SVNXY1yOR87zMn30KR7ie9AT4%2Bc3pTG6byIjFd1dKgInBlNH6cDbOEq%2FuyLPMdw%2FkWRy6WK%2Ff1TaeTzexfQ7RFm8MsRkmTUjV7T1frssl5LfMSvpFJ9KHocZ6exqf2aeb%2BXwaROq%2BLdpvPqRVB6J9zzdxGpaHox%2FQswzZ3uO5RVsoeUciVcUY2%2Fv1CqtbAD%2Ffr6zfrFhPAfGph7r&X-Amz-Signature=d96b9021bd7ee2db60bb4b6db8cf75383e824df2bba4cd9f9b74fb4b5c2edc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMAHSER%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCux7VvjNEKgA3dUbuD4eOvGUO9OD%2FcdhGSpSJQexTqWwIhAJgtALJXeJdTF0lJNVIRYazJ%2B2nWI3DFEq41kaDa%2BLAkKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJj6Auodx6iMLp184q3ANvvPdB6cj6y8MqvucQGPafdKbdPnx%2FAFLxLuJ5OGlNBhPcKPxslR69YLfj6Te6b4OKs7yPm3kC%2BSLQGpdG43QN2QV8TIh4p%2FvMq0N6UQe%2BhOydBBl9WLhy36ysKZbFFLaPeSGMqzn0YOo2LQOPkXZN2faMSTqVRxW%2BQv7bjCZ%2FBYI6X0BeOMoq%2Fe2CcZoiCqxrHOCmv8JvDmNxw93rVb%2F8YkrD%2BqOK72WJPlcwHAVbjL3N7J4f7fb1eLiAYc11z3VE9FAPsVkW1XThvbyLk%2FZF5k3MFBVkEAJf5ItjN2UsqZFcqbiXRcfd%2B0%2BFHZw8JDEDXp1jVHkNF7Ks28%2Fwo3yr%2FKMf0rND9pGYTUgw28FJjyj8ddTDAdyB6deEXBmKAY7VGoRyWUkAVHKIbuYLu22av8s5RNdKMDXphzFs33WnBzRFgL9eYdS17vtngjcyu07PBsjsNqBeAofdO69v%2BBCHA%2F6KRgH1oxC5Cpg%2Bn1qJI3KuVswawIePBh62U%2B0UvArGh8wpsKv4Zqt1moXiuGCo%2B33mFB9L5CSGTyEf4l0ytp0gClmCqIhdFSY3hEo4Ay%2BW46X3MLwkfbY68EQWuKZKxeqzg472NjNN1hGnPe%2BdPpAjPmJ9L276n%2BpuIzDy5erDBjqkAUxO%2Fiy7TQZ3SVNXY1yOR87zMn30KR7ie9AT4%2Bc3pTG6byIjFd1dKgInBlNH6cDbOEq%2FuyLPMdw%2FkWRy6WK%2Ff1TaeTzexfQ7RFm8MsRkmTUjV7T1frssl5LfMSvpFJ9KHocZ6exqf2aeb%2BXwaROq%2BLdpvPqRVB6J9zzdxGpaHox%2FQswzZ3uO5RVsoeUciVcUY2%2Fv1CqtbAD%2Ffr6zfrFhPAfGph7r&X-Amz-Signature=54cff17db36cf9271c0cfa81413cc3ea92a01ee842cbc8ed3ac78da337cd57c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
