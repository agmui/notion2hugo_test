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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLWTOX5A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICA7Wf0UoEYMDFQa12loIV%2BUKbA3GQQYrhWKOJskMIu7AiEAo%2BC3Y8iQE0niYDkjRTfH5qh4WkHVE6th5Ts51egb43gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPewfMnrcBNbEQw0TircA0X479NjYwJ0H1Y1NnJcUm7eq46J8ztAgy162tkS5fnupzPTpslYE7qIKrX7eMkkr2ZhPWKZ7QBeoPUtTgsGXDiq%2B9Q9f1yGjymB59H%2BkmBLhYtHoCvyNh%2FhA3Xx%2Fa6Fz1AS2p6RBde6eOi3HlRIoo0aXTzWNWUisVBQLmqI%2BOo4HtkQ8h%2FafIXJLSuD9tdnXYpV6mWmBGs8SL9UONn9L8AkrN0ChfV6VDXg%2BDeFeKpwbqfe%2BAyzAdB5SzLzZM58a%2BsnRoVXBczGivnBidCXIKftld6pZuzeW3njnftvPipw4GfgtbpNrbcLE0HURic00A7vuOHA6uWvfVBlstLen8JcSko3Fa5a4YlbhYnJzxl1k9hcl%2BAZW4q6nFnj80kxPUbl6PHYCmJX0uqYxzh4XsUEj7FSZnkfyZa8nQMk524c7pcaRN69XKLUD70sFlYUZeveuyBjGXRAHVul3sk1WbOIZOac3U4HaFgUYXWrqymg7oRziFcy8hC4RdNpuOz%2B1KA%2BeEnqKSoDcs0r2Lj%2BilpwbxTWZjyEQfqjRLWwVC5qJ1B85HcMH2xbAsBshbdMf98pWkrfQiXWWgUW3IcCL1IjHnO6VB9jsu2YDIo3SNHWlA%2BrUaefnoH1zJEeMPvEwcEGOqUBELRJtL%2FnQC1AsJqVQAlWyMp8j3krDZNLAL98G7YQ5AKYsGARsX1ORV8R082jr8BhYFyu%2B0%2Fh5t2u6ddZx9XhxF6DnmTFv%2BcSog58BIQH4VGKw99hOwxcDLTx%2FbOe%2FTjBypsHb8MRHPWKmBXH%2FIVq0KoKjOi9VRn%2Bg3rPL5guV3%2FLIcPT%2FKKYeeGdCHKQt3js3wKtbWNylXcd1kSQha4%2FG3dGL18%2F&X-Amz-Signature=a1d7753f0ec793dd684b7093eb8ce33229a2acac9cb9872a0ca8bd59ec60efad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLWTOX5A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICA7Wf0UoEYMDFQa12loIV%2BUKbA3GQQYrhWKOJskMIu7AiEAo%2BC3Y8iQE0niYDkjRTfH5qh4WkHVE6th5Ts51egb43gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPewfMnrcBNbEQw0TircA0X479NjYwJ0H1Y1NnJcUm7eq46J8ztAgy162tkS5fnupzPTpslYE7qIKrX7eMkkr2ZhPWKZ7QBeoPUtTgsGXDiq%2B9Q9f1yGjymB59H%2BkmBLhYtHoCvyNh%2FhA3Xx%2Fa6Fz1AS2p6RBde6eOi3HlRIoo0aXTzWNWUisVBQLmqI%2BOo4HtkQ8h%2FafIXJLSuD9tdnXYpV6mWmBGs8SL9UONn9L8AkrN0ChfV6VDXg%2BDeFeKpwbqfe%2BAyzAdB5SzLzZM58a%2BsnRoVXBczGivnBidCXIKftld6pZuzeW3njnftvPipw4GfgtbpNrbcLE0HURic00A7vuOHA6uWvfVBlstLen8JcSko3Fa5a4YlbhYnJzxl1k9hcl%2BAZW4q6nFnj80kxPUbl6PHYCmJX0uqYxzh4XsUEj7FSZnkfyZa8nQMk524c7pcaRN69XKLUD70sFlYUZeveuyBjGXRAHVul3sk1WbOIZOac3U4HaFgUYXWrqymg7oRziFcy8hC4RdNpuOz%2B1KA%2BeEnqKSoDcs0r2Lj%2BilpwbxTWZjyEQfqjRLWwVC5qJ1B85HcMH2xbAsBshbdMf98pWkrfQiXWWgUW3IcCL1IjHnO6VB9jsu2YDIo3SNHWlA%2BrUaefnoH1zJEeMPvEwcEGOqUBELRJtL%2FnQC1AsJqVQAlWyMp8j3krDZNLAL98G7YQ5AKYsGARsX1ORV8R082jr8BhYFyu%2B0%2Fh5t2u6ddZx9XhxF6DnmTFv%2BcSog58BIQH4VGKw99hOwxcDLTx%2FbOe%2FTjBypsHb8MRHPWKmBXH%2FIVq0KoKjOi9VRn%2Bg3rPL5guV3%2FLIcPT%2FKKYeeGdCHKQt3js3wKtbWNylXcd1kSQha4%2FG3dGL18%2F&X-Amz-Signature=fa2f26b4828b719d170bc4a8018c2d9b1ced73f8d35271223f8aa36f71525042&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
