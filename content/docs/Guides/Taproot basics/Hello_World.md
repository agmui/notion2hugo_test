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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIFHW3J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRGnk7XYWDhpFh4CIJ%2BhN4teQc1aIZaqL7a07KXTZXtAiEA6moR%2BJJYBank%2BHajuxIaNWSt9Axft8Wm3bYEA%2BBobwMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLIeSRHGVdEJvlJedircA%2BANOG6FK8thu2X8zSjriEkkjfJ5fSyt0BFS0fFwYehmCqsspoQZc0ygDD%2BF37VnIjXRRIq3T9tbnqvFBCjW0sX1RGJvxGuLIpztnhzrCgbM9tbj4B21z%2FvKP6RWLIp8mFhgw7w16CxVFzTi5FTkimKopQNBaCQedAu8%2BnGfJrLrObDOmla1MOX%2F4NIoEIg8DiedsngZof9aOmx0bGgBBMlOfUfuhLiCqk%2F7%2FOG8ORBMUNmxuO6Zo%2BhiCv%2BtnKw%2BY3QSZm45jNei2Ut%2FziaGSdW1y%2B%2B64vUhUbyX0Zvioxy6tAOgsuKzN9ZK5Ms1jZTC1bvQ6d8eCVOPckfsEsofdmEgOjEP8LVRXiWFh8yvmJSVfwc%2B2r%2B7wNA23ufBEQLFfpnxdYV8E7JDM125VPVwkWJQGr56eFvD6WqRXm356Fxc4JoBd4Vo6lIPEwwGVsgWo8KCB8GST36ZYLdcDcSnemWLCjQMQaXsbx3FIxkHfAOAknFLAuVm1imeexR7y9pVwdnaBZ2yoP6eKD63GhUIkRsl%2FuJVdQvnFvCQxIruIPJws8cPxoOpE6K5dRI%2Fgk3A6TnsXsu7EKOnh5EpKN6%2F8NJ1VsYRHa%2BRMgqK0pxN2jXr7IZNOK8vhS%2B2vG45MNe8wb8GOqUBqaT%2BWrAbkyUlm5nKBeW8OKhhlQ44HCDEqKLLtMJiKwdM1muU9fT4kVulS1VyOTNGM03TrWWGnybjmrFgzMZthrVSFQvTdn8mKAvD9i4Jlmk%2FGwnMQ4ie164YZ0zBJObANchlmlJsqlFH%2F8q%2FYYVz7c5zKmFeBeWbIHWf0Z3lvp4GevMOgcBchtUF1D9fDVyshb6wDfFJVwAmI92kjEaZorw3dq8R&X-Amz-Signature=41cfaf73fbb07b0718014455ca36fd816a651a90551c3d0169875136cece138e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIFHW3J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRGnk7XYWDhpFh4CIJ%2BhN4teQc1aIZaqL7a07KXTZXtAiEA6moR%2BJJYBank%2BHajuxIaNWSt9Axft8Wm3bYEA%2BBobwMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLIeSRHGVdEJvlJedircA%2BANOG6FK8thu2X8zSjriEkkjfJ5fSyt0BFS0fFwYehmCqsspoQZc0ygDD%2BF37VnIjXRRIq3T9tbnqvFBCjW0sX1RGJvxGuLIpztnhzrCgbM9tbj4B21z%2FvKP6RWLIp8mFhgw7w16CxVFzTi5FTkimKopQNBaCQedAu8%2BnGfJrLrObDOmla1MOX%2F4NIoEIg8DiedsngZof9aOmx0bGgBBMlOfUfuhLiCqk%2F7%2FOG8ORBMUNmxuO6Zo%2BhiCv%2BtnKw%2BY3QSZm45jNei2Ut%2FziaGSdW1y%2B%2B64vUhUbyX0Zvioxy6tAOgsuKzN9ZK5Ms1jZTC1bvQ6d8eCVOPckfsEsofdmEgOjEP8LVRXiWFh8yvmJSVfwc%2B2r%2B7wNA23ufBEQLFfpnxdYV8E7JDM125VPVwkWJQGr56eFvD6WqRXm356Fxc4JoBd4Vo6lIPEwwGVsgWo8KCB8GST36ZYLdcDcSnemWLCjQMQaXsbx3FIxkHfAOAknFLAuVm1imeexR7y9pVwdnaBZ2yoP6eKD63GhUIkRsl%2FuJVdQvnFvCQxIruIPJws8cPxoOpE6K5dRI%2Fgk3A6TnsXsu7EKOnh5EpKN6%2F8NJ1VsYRHa%2BRMgqK0pxN2jXr7IZNOK8vhS%2B2vG45MNe8wb8GOqUBqaT%2BWrAbkyUlm5nKBeW8OKhhlQ44HCDEqKLLtMJiKwdM1muU9fT4kVulS1VyOTNGM03TrWWGnybjmrFgzMZthrVSFQvTdn8mKAvD9i4Jlmk%2FGwnMQ4ie164YZ0zBJObANchlmlJsqlFH%2F8q%2FYYVz7c5zKmFeBeWbIHWf0Z3lvp4GevMOgcBchtUF1D9fDVyshb6wDfFJVwAmI92kjEaZorw3dq8R&X-Amz-Signature=3779697ae34d6244e17a1d5c6eb9c1d971e1a5452681b7cac2cc9b3970003631&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
