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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBGCZ5D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1ACB5nVLm4paotxB%2BJZ3sS%2BqC2nlDyQ8eMspYNKMRfAIhAOLL1%2BcKmBCIaGeHa9crsMg2YkamuRhU7zW7Mgo%2FMZMRKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqLBQ4W7QKayqdVpgq3APf076Ac8k4nGBYegER3KJ4e%2BeeIMcAo5OydMcZ3EIHrEZ%2BTb4L8OwH%2BoE8MT0VB5CkytdDIcuOhoU3yNyzcB2D4rF0i4eRm6h6%2Bl5un%2B2WzVY0XeMYkpxvbv5KwSaBElxtfaYx5F65NeE2e6Sz9OxP%2FnSDI6PIpSAn%2BTcMqOOTYL6UqKJbJTK7Gbd9%2FOJyxGNFiWQEDL8Mi6uKohLLCIdDnXMEHG25400kjn6Rlq8fqjKA7mWo%2BuB4GJLHUGy0g7cgvnok%2FU7Md2F8mTCobqroOpm6KS1Y%2BdYzXpFMgBbF8%2BZUgkQO3DhzpV7J7XvRLnoMIvNzwaczICuwo2HW8L81bStxsNnczmomdYjKA0LqIY0cBn7QBlzYExMoa5AjUWjpUjh1UJEvnzj%2FYm1hMXpC7o%2Fpgs89CVtXILDaM50gLhaLZCq2JMqqSrzQ2RVvesKvPTrcbT1yzv3ssXI%2FjHbhiAZI5C0379lrY3RsKnT82MX5eN8e3nEGIkmEy3HluCOaOpLXAXb6%2B%2F%2F4Q3fiEKte37x6s%2Bs%2BMkg%2BtBbNf24azebSGIripcmhCyat9WIstH7XFa%2F6QRlJiqdCnM9GWmyphwmfcuVLPWSvwHfISHd%2B9Eu9y4l7qEQOEqFa8jC%2FktfEBjqkAesxacxwZDQEXryzGDYBoDfs31KgBpusHiKnqHpXvpfPDg67vtB9GY%2BwXZo23PvyLrwCuugJ6zRseYnuYdpf%2FQCn6HiKcumOz8%2FM9r2%2FAm1RdN0NsVbCWW5LO%2BOPj6j6ovIPvGr%2F6aAZHW5fqCKiN0fmWQWHgczjFdAGf1ODEi%2BZ8PU0dqnlT%2BAYcfqC8BGyCqwvBnyNrWr117MVDwx%2Fn4p9UuRj&X-Amz-Signature=e707e7407802ea90d12ec6ef9b8c7e1ca6f4bb45035ba89abb88040f2421ac03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBGCZ5D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1ACB5nVLm4paotxB%2BJZ3sS%2BqC2nlDyQ8eMspYNKMRfAIhAOLL1%2BcKmBCIaGeHa9crsMg2YkamuRhU7zW7Mgo%2FMZMRKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqLBQ4W7QKayqdVpgq3APf076Ac8k4nGBYegER3KJ4e%2BeeIMcAo5OydMcZ3EIHrEZ%2BTb4L8OwH%2BoE8MT0VB5CkytdDIcuOhoU3yNyzcB2D4rF0i4eRm6h6%2Bl5un%2B2WzVY0XeMYkpxvbv5KwSaBElxtfaYx5F65NeE2e6Sz9OxP%2FnSDI6PIpSAn%2BTcMqOOTYL6UqKJbJTK7Gbd9%2FOJyxGNFiWQEDL8Mi6uKohLLCIdDnXMEHG25400kjn6Rlq8fqjKA7mWo%2BuB4GJLHUGy0g7cgvnok%2FU7Md2F8mTCobqroOpm6KS1Y%2BdYzXpFMgBbF8%2BZUgkQO3DhzpV7J7XvRLnoMIvNzwaczICuwo2HW8L81bStxsNnczmomdYjKA0LqIY0cBn7QBlzYExMoa5AjUWjpUjh1UJEvnzj%2FYm1hMXpC7o%2Fpgs89CVtXILDaM50gLhaLZCq2JMqqSrzQ2RVvesKvPTrcbT1yzv3ssXI%2FjHbhiAZI5C0379lrY3RsKnT82MX5eN8e3nEGIkmEy3HluCOaOpLXAXb6%2B%2F%2F4Q3fiEKte37x6s%2Bs%2BMkg%2BtBbNf24azebSGIripcmhCyat9WIstH7XFa%2F6QRlJiqdCnM9GWmyphwmfcuVLPWSvwHfISHd%2B9Eu9y4l7qEQOEqFa8jC%2FktfEBjqkAesxacxwZDQEXryzGDYBoDfs31KgBpusHiKnqHpXvpfPDg67vtB9GY%2BwXZo23PvyLrwCuugJ6zRseYnuYdpf%2FQCn6HiKcumOz8%2FM9r2%2FAm1RdN0NsVbCWW5LO%2BOPj6j6ovIPvGr%2F6aAZHW5fqCKiN0fmWQWHgczjFdAGf1ODEi%2BZ8PU0dqnlT%2BAYcfqC8BGyCqwvBnyNrWr117MVDwx%2Fn4p9UuRj&X-Amz-Signature=68b5af245440a3b21a2feb64fa5ca8b14f8607e3814f181473ae78bbba17dcc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
