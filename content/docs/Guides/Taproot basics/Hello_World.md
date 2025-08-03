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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXZLPTM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDheBEJdwfNjGWydfp5Uaz%2B1jEak9STmL6%2Fva4U7ITRsAiBnPHa0y8axA2OpKG%2FFwlnm5vgUzGui82KCD%2Bz7g9h%2BFyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbSH%2BiFoijk4Nymx7KtwDMrNhwpmioibYRXNs%2BrbiLaLOjuR4Kj18ZEojcQrXXJW7XAYvbD4JJw9xLx5mKi2%2BocHCYnPSg5zrUP1jl76H2GUeRPkXOWeqYZu8GlCslwRgjzyaXPy4kLifQxUnJY%2BizeeQOCkSJMp7NWhlKNb8dZG9NwZDXOhVGyeMsj8IG0BgkS3b%2Fc02WmbzUNFjI5uObOs3IygMzyOv2eP0Xxl2fQOEJ4buXV8BfBP7uWnv1jX2w%2BT73Fn9eFRdb%2B7tAlroGxB0eMBm6CVN0vwFRSBlaWZqqZEE8HUX8CyM22e3ynZy3hL7prwxKgTvZBynya%2BvPVhHwj3Vpmn42ZjK7rIqsoxjm%2B9fRay6ZDsCKM4mhsnfH0ebwO6KxQJ8oBAKRgrbWrc5YHJCaYOZqSnvOPscXdwe8z6NXyvDliQskvh4akVKz3OUBZHQvq4grelCtPEnLj5ChslRbwXar3%2FI%2BTFerPuiFoHJ0koulsHWC7itiswVUPMJELc1VBPhwj7Qnl1gdDy2FMofD%2BviJEiuSJ85unDTCmj2gcg9uvkL78v675HgKUGMvJ7sWOpHvV4JKgV9lm45W1LBFVI%2BYto9MxskHCKfuFGdR2RmGw1CFwBwgT%2BHsyUS%2BKc1EQolBvQw8L28xAY6pgGpxPTIo9%2Fj5lsGtGD9%2Fu88O3OJ0JNdR44ZQNrL26I6UHQKsVn5QESNdKgZKC%2Fsi%2F8oeIjJdgfdYwCcFcZKlmn1AdI11uVbT99BnyL8fr%2F3J0IwQDt3Nk7fgKkJFPmIZHyJ4ZXqHustSerX%2F2a6b7QuHhht%2B7DfQhad%2F2nFSvWaFnrpuZx83KR1q5qjVmLNkaxhAR306tDWgAnX5W3ItNtjDaCEwUUI&X-Amz-Signature=a276514aebc5d003686e268d8b83cc4001c3970508cfe8f7b19aaec17dd56630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXZLPTM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDheBEJdwfNjGWydfp5Uaz%2B1jEak9STmL6%2Fva4U7ITRsAiBnPHa0y8axA2OpKG%2FFwlnm5vgUzGui82KCD%2Bz7g9h%2BFyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbSH%2BiFoijk4Nymx7KtwDMrNhwpmioibYRXNs%2BrbiLaLOjuR4Kj18ZEojcQrXXJW7XAYvbD4JJw9xLx5mKi2%2BocHCYnPSg5zrUP1jl76H2GUeRPkXOWeqYZu8GlCslwRgjzyaXPy4kLifQxUnJY%2BizeeQOCkSJMp7NWhlKNb8dZG9NwZDXOhVGyeMsj8IG0BgkS3b%2Fc02WmbzUNFjI5uObOs3IygMzyOv2eP0Xxl2fQOEJ4buXV8BfBP7uWnv1jX2w%2BT73Fn9eFRdb%2B7tAlroGxB0eMBm6CVN0vwFRSBlaWZqqZEE8HUX8CyM22e3ynZy3hL7prwxKgTvZBynya%2BvPVhHwj3Vpmn42ZjK7rIqsoxjm%2B9fRay6ZDsCKM4mhsnfH0ebwO6KxQJ8oBAKRgrbWrc5YHJCaYOZqSnvOPscXdwe8z6NXyvDliQskvh4akVKz3OUBZHQvq4grelCtPEnLj5ChslRbwXar3%2FI%2BTFerPuiFoHJ0koulsHWC7itiswVUPMJELc1VBPhwj7Qnl1gdDy2FMofD%2BviJEiuSJ85unDTCmj2gcg9uvkL78v675HgKUGMvJ7sWOpHvV4JKgV9lm45W1LBFVI%2BYto9MxskHCKfuFGdR2RmGw1CFwBwgT%2BHsyUS%2BKc1EQolBvQw8L28xAY6pgGpxPTIo9%2Fj5lsGtGD9%2Fu88O3OJ0JNdR44ZQNrL26I6UHQKsVn5QESNdKgZKC%2Fsi%2F8oeIjJdgfdYwCcFcZKlmn1AdI11uVbT99BnyL8fr%2F3J0IwQDt3Nk7fgKkJFPmIZHyJ4ZXqHustSerX%2F2a6b7QuHhht%2B7DfQhad%2F2nFSvWaFnrpuZx83KR1q5qjVmLNkaxhAR306tDWgAnX5W3ItNtjDaCEwUUI&X-Amz-Signature=7ef0a35c80838ab33d6e7c8ba127abe5961323ca47643f92fb5774f3f5aadbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
