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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYU3CVF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCHw8%2B4k6EIvEMW2uM4icPD10UgX%2BaVcsUhUOy777ajZMCIQC7yV7CpRnmzGVBPOGLAmSIaV9VokM4MmqCCOE%2BGMEmHSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxTPVHClAx5QSiAOQKtwDZql1nfIuijU8f0sGRB8yv7txI5E3YDL%2FkEI6gWEFk38x8mMHZLM02UYUwF4Wi%2BXdrnaYX3L7kky73a82JHiPFu5LeMDX%2B0Dd8O4%2Fl%2BstA0VnRiFr0x5p03kYhdJZkXqhRWmLzr%2FmLrK7KpOdnfqkHXHkDCN5vC7aqIPIUFGNKdpbb3wPHvd3Rqkf%2FSIz6QvaiAOYNeyPpkoYXLr68cxrpNJotslllwhdjSvrPrNuNnXF3DEIjlw%2FEj5l5T7pvlz2V1DVeTgruKVjfu5oLpMR%2FRHC49ydFWFVOKAve1xRKCXSrx7sAXv4bjQd4ULJ9iBCJNVuaO6ee9rbf1M0P2TBLoj%2Bf00RqkrAQ8CQomkI3P%2B%2Fm8UaVjBFLkofXvUr5L0V1APcdBCCLRoUXMgchuwb6C4ToXSQUuYF5U1evIzC5ThYNFhMBR3r5N%2FGPuJVWT8QawlC55fWwgBev1QWwKEQ8sZVxHvSOlbmc%2BQwBW9BZ%2FyJrkx7oVAawBrb6MjrLITFkz9uE9earQvfsuSRwe6gUfLFIlqy0B0UJ8eBFEsVnVK8GGr%2FpX5CmZzVrv6fGvjWI9%2F%2Buikf0K9dfLI0TXkJ3nv%2FGnnDgsSyf8ZUkjMOQJ56SwMXX7hGPtetkLEwvv6UvQY6pgHIvMqwfdGlqjiJX5doAOyZxjDzXJPDJ93HFbEbgQrTqyJZ%2B9s9a7sRFdYL6eP17u724xQq1Ln78rD6jWQ9zJ9U5YvJNkF986YQv%2Fklcxo1WHE%2FNOEqMu9%2Fef85REZ%2BYYxC6Kj3K%2Flwh1j5k1ldj2tH5Ggnl76iiPXoIiv1DqcqVXk2%2Fa6uMMoC8qHiw9qN6%2F2qSR20kucjoIbKvHZYIOmrQFETCvly&X-Amz-Signature=6e462e1d90e395c6fa8508fa0417e01c6aba982b54bd1a7aebb16c9c0f4a1912&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYU3CVF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCHw8%2B4k6EIvEMW2uM4icPD10UgX%2BaVcsUhUOy777ajZMCIQC7yV7CpRnmzGVBPOGLAmSIaV9VokM4MmqCCOE%2BGMEmHSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxTPVHClAx5QSiAOQKtwDZql1nfIuijU8f0sGRB8yv7txI5E3YDL%2FkEI6gWEFk38x8mMHZLM02UYUwF4Wi%2BXdrnaYX3L7kky73a82JHiPFu5LeMDX%2B0Dd8O4%2Fl%2BstA0VnRiFr0x5p03kYhdJZkXqhRWmLzr%2FmLrK7KpOdnfqkHXHkDCN5vC7aqIPIUFGNKdpbb3wPHvd3Rqkf%2FSIz6QvaiAOYNeyPpkoYXLr68cxrpNJotslllwhdjSvrPrNuNnXF3DEIjlw%2FEj5l5T7pvlz2V1DVeTgruKVjfu5oLpMR%2FRHC49ydFWFVOKAve1xRKCXSrx7sAXv4bjQd4ULJ9iBCJNVuaO6ee9rbf1M0P2TBLoj%2Bf00RqkrAQ8CQomkI3P%2B%2Fm8UaVjBFLkofXvUr5L0V1APcdBCCLRoUXMgchuwb6C4ToXSQUuYF5U1evIzC5ThYNFhMBR3r5N%2FGPuJVWT8QawlC55fWwgBev1QWwKEQ8sZVxHvSOlbmc%2BQwBW9BZ%2FyJrkx7oVAawBrb6MjrLITFkz9uE9earQvfsuSRwe6gUfLFIlqy0B0UJ8eBFEsVnVK8GGr%2FpX5CmZzVrv6fGvjWI9%2F%2Buikf0K9dfLI0TXkJ3nv%2FGnnDgsSyf8ZUkjMOQJ56SwMXX7hGPtetkLEwvv6UvQY6pgHIvMqwfdGlqjiJX5doAOyZxjDzXJPDJ93HFbEbgQrTqyJZ%2B9s9a7sRFdYL6eP17u724xQq1Ln78rD6jWQ9zJ9U5YvJNkF986YQv%2Fklcxo1WHE%2FNOEqMu9%2Fef85REZ%2BYYxC6Kj3K%2Flwh1j5k1ldj2tH5Ggnl76iiPXoIiv1DqcqVXk2%2Fa6uMMoC8qHiw9qN6%2F2qSR20kucjoIbKvHZYIOmrQFETCvly&X-Amz-Signature=289f9b1f5dbfe7bc0b295d90ebd6896f95715f379cf8ab9daa0f6b56652b18ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
