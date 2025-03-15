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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWX3O5UD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBYbnkGmcSOlxq2kLIM9F%2Fa%2FYWLVPXTkkwpxzuRAwGOAiBsxRj9a00RzURccldGHvB3b8MYPsP4Wh%2Bpc0TOgXjI1CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgxPf31hmqIi0Ud%2FLKtwDBvf0MYNRqfkQbqgDKMokcVC8M662lf4L6jAEcEYEbf5RqJDlmZJ3cXp%2BdO6eAylaIwTbk0HwuHpHWVtoJZazjwNLhGewXuIT6h%2FSUbjF8bcW2qOQHwszuj225VHmkOsbQEOA%2Fjve2HnSVt5yKeMs7%2FV63P9gy00mwFKgpU2P3qt1IPysC58JdGcA5yUVMy0YA9JiJrNkxzJY8YOO6MmYWwIkkYLydtXdm7fXNLO4P8ejjzi0QoZgUjaLPnb4RT64isxr64cyyrtp24NVm53D9S0BQnUrSBZMwPJUYp0S1W9qX%2BjAp8XE7ZkVACq600vhidCL%2BdiL52hHxaYPCDexYghf2zQMPQ69cgeahj3ZmuPt5zUArZzOJZrqE7kfOVCckleArtn%2FYKbfV%2FJJypvNr3S4YO%2F66%2BFdYu42QqkKXyd4gFK%2F1UurrR%2Fg8HYuNXkHbfpPmRvVmEvYLEJXvPLyarcfAgiVbLW7zpnjswRRpushfuEbGBAEkrbBXR9F4MUqJZtz%2Bpt0wt%2BMOxIavXmvHW%2FkLdnLxqa0CVMh4Q6klwCXZUZiplh%2F%2BL5rHUyhNq3roRTR9EekZmPlUtzPIqT9G5%2FKTJarDJxlTmCcXEoe9%2FpPNaCB8BWump4Ae4AwmavTvgY6pgGmpqhbSmb%2F5cSm5ZYg9yLiX92uNNSg%2BL%2F84r5HNVr6m3ld6vDY04Dn9zwq2UDToxQDkxmK2bbsI8gZ%2F%2FmLTy2BdC73BrrsMEMBurxr4rJ5DmR1j04kZE7U1Vk3F6NrrTRdQWLBiqjsuHUwg%2FWSSQMxawlXEw0%2BELOLgDalQ2zZloiMJMsNSV6BfxRThP9jqmfK7KAphVuJwZUg2JvUImVpX7hOZbYH&X-Amz-Signature=4f7edb9ecef3fcf71731f086a8ee1a4418cac6b7c259142f161b8267056b982f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWX3O5UD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBYbnkGmcSOlxq2kLIM9F%2Fa%2FYWLVPXTkkwpxzuRAwGOAiBsxRj9a00RzURccldGHvB3b8MYPsP4Wh%2Bpc0TOgXjI1CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgxPf31hmqIi0Ud%2FLKtwDBvf0MYNRqfkQbqgDKMokcVC8M662lf4L6jAEcEYEbf5RqJDlmZJ3cXp%2BdO6eAylaIwTbk0HwuHpHWVtoJZazjwNLhGewXuIT6h%2FSUbjF8bcW2qOQHwszuj225VHmkOsbQEOA%2Fjve2HnSVt5yKeMs7%2FV63P9gy00mwFKgpU2P3qt1IPysC58JdGcA5yUVMy0YA9JiJrNkxzJY8YOO6MmYWwIkkYLydtXdm7fXNLO4P8ejjzi0QoZgUjaLPnb4RT64isxr64cyyrtp24NVm53D9S0BQnUrSBZMwPJUYp0S1W9qX%2BjAp8XE7ZkVACq600vhidCL%2BdiL52hHxaYPCDexYghf2zQMPQ69cgeahj3ZmuPt5zUArZzOJZrqE7kfOVCckleArtn%2FYKbfV%2FJJypvNr3S4YO%2F66%2BFdYu42QqkKXyd4gFK%2F1UurrR%2Fg8HYuNXkHbfpPmRvVmEvYLEJXvPLyarcfAgiVbLW7zpnjswRRpushfuEbGBAEkrbBXR9F4MUqJZtz%2Bpt0wt%2BMOxIavXmvHW%2FkLdnLxqa0CVMh4Q6klwCXZUZiplh%2F%2BL5rHUyhNq3roRTR9EekZmPlUtzPIqT9G5%2FKTJarDJxlTmCcXEoe9%2FpPNaCB8BWump4Ae4AwmavTvgY6pgGmpqhbSmb%2F5cSm5ZYg9yLiX92uNNSg%2BL%2F84r5HNVr6m3ld6vDY04Dn9zwq2UDToxQDkxmK2bbsI8gZ%2F%2FmLTy2BdC73BrrsMEMBurxr4rJ5DmR1j04kZE7U1Vk3F6NrrTRdQWLBiqjsuHUwg%2FWSSQMxawlXEw0%2BELOLgDalQ2zZloiMJMsNSV6BfxRThP9jqmfK7KAphVuJwZUg2JvUImVpX7hOZbYH&X-Amz-Signature=7a0cb690d010a893a077586f0d073d882cf5023443b8f43a32617295bf74a4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
