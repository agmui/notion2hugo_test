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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AYGYQJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqolP1yosgSkpq6BIVGhM87zLbTGZ%2BYC0jv9DRQklWIAiEAo7%2B94jgpmweLyNarUdFVtQnwsIxsrUy55SXoDXuetf4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMJApi7MXI84h447VSrcA2FSmXhFzhO20qImr3hpbW9mH0nggcx2LWBbZxkAAbLYHIS5dt0FgqPhnQbPUNEC5qzg93iBRJwFjrICl9NzOKPhMlCml2QsxtCEIX4Mu5Wg%2BHMYVDmrpdR42CTy4pSxAWFkNY%2B7mGmNOFGDuX4Czor%2B5%2FUd%2BA07zju7fQ%2FbMSYXQQUxAJtBpNkrG62m1qyC8NdfHLnMH%2B9HZH4BdriZLxOS9P6O8nPpHVquA10kSG4Xv3Mf7FI53QxvD9i8uj6BQanXku8Aa8Ut7QErT6hDQrt2X1%2BVxqjNqPWe4F76M8988oAYU05nA%2Fumesnu39emwRvhRlWYFjERmXbaUGwIsy5lM5%2Br0c%2BPY79yAuWpi7CG19Y9lkIyQRuzmWSymEc07T4TtAV31ifijrFk1wU5oj2OLbH46EwXaKUKC1ce%2BENOnGhcgoEv%2BCyIh2iAGjCv0ROLpx4jaoJFfjRJRGindxxiJ4tNDTQQBxe6imcR0A0f3t4t1oQkTKUNGVSuaSEQr9NoSPjHUfzDBfWtVuDG9KIhdZZN7WYOU6Yqo5jMSGQP9y92i9ExdbxvTUNRNJerGJVLM350kg9z9NLgxaYaLu7f28bhe4jEtUeLoQaNGIU9Ab7jZiNkWeUId02jMJiU9b8GOqUBqwbLHxE4DxM1ocT2TnwquD%2BuAsjMr7IAaGyGFdwryKls8CbXkIYdf6Yr8WC4r%2B4KB%2BLGp2rtvWwzNmpzXQX7DYwvuhqyuvJrkOgUI2mMJTl9bFhD1b0MnCGhD50GhUEORjJlkUzWhmGyB3P05yVWLTNhtjFVRfrQJWP3yoxI0YDsNC1X12ECnjKdG7MXvwHRK8Z%2BjU5S54vwI3TJmhVSymIw90QR&X-Amz-Signature=7678574ce2ea264402323cdfb535943de04f876e4821f4adb51e1cbafc91ddf2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AYGYQJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqolP1yosgSkpq6BIVGhM87zLbTGZ%2BYC0jv9DRQklWIAiEAo7%2B94jgpmweLyNarUdFVtQnwsIxsrUy55SXoDXuetf4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMJApi7MXI84h447VSrcA2FSmXhFzhO20qImr3hpbW9mH0nggcx2LWBbZxkAAbLYHIS5dt0FgqPhnQbPUNEC5qzg93iBRJwFjrICl9NzOKPhMlCml2QsxtCEIX4Mu5Wg%2BHMYVDmrpdR42CTy4pSxAWFkNY%2B7mGmNOFGDuX4Czor%2B5%2FUd%2BA07zju7fQ%2FbMSYXQQUxAJtBpNkrG62m1qyC8NdfHLnMH%2B9HZH4BdriZLxOS9P6O8nPpHVquA10kSG4Xv3Mf7FI53QxvD9i8uj6BQanXku8Aa8Ut7QErT6hDQrt2X1%2BVxqjNqPWe4F76M8988oAYU05nA%2Fumesnu39emwRvhRlWYFjERmXbaUGwIsy5lM5%2Br0c%2BPY79yAuWpi7CG19Y9lkIyQRuzmWSymEc07T4TtAV31ifijrFk1wU5oj2OLbH46EwXaKUKC1ce%2BENOnGhcgoEv%2BCyIh2iAGjCv0ROLpx4jaoJFfjRJRGindxxiJ4tNDTQQBxe6imcR0A0f3t4t1oQkTKUNGVSuaSEQr9NoSPjHUfzDBfWtVuDG9KIhdZZN7WYOU6Yqo5jMSGQP9y92i9ExdbxvTUNRNJerGJVLM350kg9z9NLgxaYaLu7f28bhe4jEtUeLoQaNGIU9Ab7jZiNkWeUId02jMJiU9b8GOqUBqwbLHxE4DxM1ocT2TnwquD%2BuAsjMr7IAaGyGFdwryKls8CbXkIYdf6Yr8WC4r%2B4KB%2BLGp2rtvWwzNmpzXQX7DYwvuhqyuvJrkOgUI2mMJTl9bFhD1b0MnCGhD50GhUEORjJlkUzWhmGyB3P05yVWLTNhtjFVRfrQJWP3yoxI0YDsNC1X12ECnjKdG7MXvwHRK8Z%2BjU5S54vwI3TJmhVSymIw90QR&X-Amz-Signature=fd6ba115de1c2912d659b30976cbb2d51491d9fa4793c045c749104fd47c4124&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
