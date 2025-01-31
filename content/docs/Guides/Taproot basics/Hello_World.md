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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7JI5ZD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa0wm8bky6LsLKRN7tUxyEUCG2UtUnoBX%2FoHYeFshNHAiEA4EMpEh0zl3J8Opz4IHDVFFlforzAtoPNNO0Ib6BvxEQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmoB3mcCZuVooXkxSrcA3fgkdhIk42tbVMbI6pL7am3fYUqtoj7dz1ITrMTHe5wcntFMQ0KI7MvHdMIX9VHHzZfm%2BC6nGGxwPhC8Vm%2F42V%2B6Z6b%2FZHz7j7CWxIuVr0t4RNgiByP5jg%2B0ViV1U19NmA50kbt6MseEEnzlKp2x4f6DSMbT%2F9BWz2gxDFpsgVmCjznEwr%2FXGI2bA5MDIiTn%2F7oeIoLtQFOiDRBv%2Fd9v2b0ubxqz1ljC1EiR9msLPXhU9wj4S%2FIubWH9%2BvUgOZYWMuTpZqBmxkeuMuhAe6t4ra8LmYZ7X3iCp5u6T3iXtzvqxurUhlGEmOLTbvIeMlMltKveZcluO9QAep6hRvAQahrfhXV3lNXdwu8RLm3nW39ZNv6DcuwM9Axxe%2BT72e3dNm%2BwGuUMM318HRq6LP9sWoZLYMicPnKkK8Y9MZHZyVxFe%2FM%2F9hrgQl5HejCxxAtPrhVYBzv2YSDinpJ2Y77BhqTMo0r2EjH5%2FnwG8Vx%2FTRQ1nt7xGMpLYL0F%2FQtzWTjqz9RqCgZKcnWsDkGf%2FVmVuHsdxEJESV1AW%2B3792MMKoTWzZCqkQTxONqAS1mh0zUMnvj2BKr0OEiuJwBpjRm8Pf%2FbMLMcYHLpy1Cu6W6wVtn%2FLcxJGU2jrtFZ50FMJbs87wGOqUBQhnZ1h0HByK6G5jbOW2J1xoqETGv%2BXzf%2F881EuXTJF9x7xYVWINICXhe%2FJoteasRfSt1nuXHnF2MzfDj%2FCzRxKggOUea1lyOJB1QWzrutRXUyTvZIHoiylu7M%2BeGzjQUhzJIBLf3KzWQtbv6lu7BiKzGBnFXrGSsirv12i%2F3bWcn7WQvGrZ7H%2B8N6d9ZZUzs0OvcVqd5DC7Wnlhwcf9i9jVzY%2Fvc&X-Amz-Signature=48ef9c78622addccfab527889e18c3e36803eb42d522f81197d124ae3e354193&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7JI5ZD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa0wm8bky6LsLKRN7tUxyEUCG2UtUnoBX%2FoHYeFshNHAiEA4EMpEh0zl3J8Opz4IHDVFFlforzAtoPNNO0Ib6BvxEQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmoB3mcCZuVooXkxSrcA3fgkdhIk42tbVMbI6pL7am3fYUqtoj7dz1ITrMTHe5wcntFMQ0KI7MvHdMIX9VHHzZfm%2BC6nGGxwPhC8Vm%2F42V%2B6Z6b%2FZHz7j7CWxIuVr0t4RNgiByP5jg%2B0ViV1U19NmA50kbt6MseEEnzlKp2x4f6DSMbT%2F9BWz2gxDFpsgVmCjznEwr%2FXGI2bA5MDIiTn%2F7oeIoLtQFOiDRBv%2Fd9v2b0ubxqz1ljC1EiR9msLPXhU9wj4S%2FIubWH9%2BvUgOZYWMuTpZqBmxkeuMuhAe6t4ra8LmYZ7X3iCp5u6T3iXtzvqxurUhlGEmOLTbvIeMlMltKveZcluO9QAep6hRvAQahrfhXV3lNXdwu8RLm3nW39ZNv6DcuwM9Axxe%2BT72e3dNm%2BwGuUMM318HRq6LP9sWoZLYMicPnKkK8Y9MZHZyVxFe%2FM%2F9hrgQl5HejCxxAtPrhVYBzv2YSDinpJ2Y77BhqTMo0r2EjH5%2FnwG8Vx%2FTRQ1nt7xGMpLYL0F%2FQtzWTjqz9RqCgZKcnWsDkGf%2FVmVuHsdxEJESV1AW%2B3792MMKoTWzZCqkQTxONqAS1mh0zUMnvj2BKr0OEiuJwBpjRm8Pf%2FbMLMcYHLpy1Cu6W6wVtn%2FLcxJGU2jrtFZ50FMJbs87wGOqUBQhnZ1h0HByK6G5jbOW2J1xoqETGv%2BXzf%2F881EuXTJF9x7xYVWINICXhe%2FJoteasRfSt1nuXHnF2MzfDj%2FCzRxKggOUea1lyOJB1QWzrutRXUyTvZIHoiylu7M%2BeGzjQUhzJIBLf3KzWQtbv6lu7BiKzGBnFXrGSsirv12i%2F3bWcn7WQvGrZ7H%2B8N6d9ZZUzs0OvcVqd5DC7Wnlhwcf9i9jVzY%2Fvc&X-Amz-Signature=63be364abe76d6de60d03673865fe0de43e0a8fffe39a02fd9e0437529145684&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
