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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDEWFRUZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDY4j8ol8dA4w2MrTuP15FgJKarQZ1H3smg0BVTdlrlewIhANeEkDHUfFf7RP%2Buko9Ebe3oFG88wZ6PESc5sDg4vOhsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF%2BVXN6x7P3GiQAMcq3ANeanbjlYzYa9qeZq9IBRIEmbTbYi0MeRQzLdkP2VLKP%2Bzsx5V%2FYk9Qgv1Z9pMRsF0TSZviT%2BjZxecK4qIJw84h4oH0tLNi9%2B5cxfgnBK3UiUlgOytuCUNINd6ai6MeNVb1D4WY8xYyeAmVI0EnUURLQi4ak4rjPalqBjKxhHUh5QW6p4U%2BjdxPh9x2TpU5qZIgyPF38I0Tcnvwal%2FFoqccDvyw%2Fdnbre9UigkJ%2BOzJ%2FnyXZIZGLAxDDfg8QqnNwV7GLMyowHag0YSZI5VnmaXEH%2FBJME2OCABanLA4%2B%2BKAUgGR9CwLKfw42z4c271mT6I8cqLJhZ232Mrz2Uefh4dFjnL%2FQH6liEdVwN9zpg7dgeJ98HlvWEXKvmpUCDc%2FRi2lYHoRuEoGfKzxuSCwVKI4EdHENwIr9SSF3mEG%2Bt%2FX5JY%2FyeD8C9F4QwGQ55gpWQ2aSMZLhmrq6SEzYX%2BvxQeZo2Peuoq4Yp7IHCl5m4tbijtYLdjnk9WG3FP1bsTmm8EM%2F%2B1rR8NO75Uo0dVBWwnjklgdoJg%2FFBT9LO8MnI2uN9aa6t%2BNuLEicIW%2BlwO5qpDdUq4lc0CqI5QK3JS8rsI3k038VOHDmCQYEJnrVf1O23VkriCZoIJuanLpajDG7Oe%2FBjqkAW1cEt%2FqESeG%2BeUS2sQPIgZhR6bRoEUXt1QispFMocvA%2BttpBrh9LgOfHH%2B3ZYUWRdWfGhhwxYNNUAGB9JbHuDGDHi8kTquUALkMb2%2BOCMaRuQz7QFPISJZkP4PFoUq9%2FtBGH85yGcm8ju2uIxKzXDkfdMBMZXl3rBDlrEHMY1jwq%2FvzGehUzzi%2BEEKgqADeP3u%2FQViXxb8bLXIbMzOwtDLiCINA&X-Amz-Signature=9d563fca89ede7147df0818f62603a1612609a0c9c1fb2893ddc932134569a35&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDEWFRUZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDY4j8ol8dA4w2MrTuP15FgJKarQZ1H3smg0BVTdlrlewIhANeEkDHUfFf7RP%2Buko9Ebe3oFG88wZ6PESc5sDg4vOhsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF%2BVXN6x7P3GiQAMcq3ANeanbjlYzYa9qeZq9IBRIEmbTbYi0MeRQzLdkP2VLKP%2Bzsx5V%2FYk9Qgv1Z9pMRsF0TSZviT%2BjZxecK4qIJw84h4oH0tLNi9%2B5cxfgnBK3UiUlgOytuCUNINd6ai6MeNVb1D4WY8xYyeAmVI0EnUURLQi4ak4rjPalqBjKxhHUh5QW6p4U%2BjdxPh9x2TpU5qZIgyPF38I0Tcnvwal%2FFoqccDvyw%2Fdnbre9UigkJ%2BOzJ%2FnyXZIZGLAxDDfg8QqnNwV7GLMyowHag0YSZI5VnmaXEH%2FBJME2OCABanLA4%2B%2BKAUgGR9CwLKfw42z4c271mT6I8cqLJhZ232Mrz2Uefh4dFjnL%2FQH6liEdVwN9zpg7dgeJ98HlvWEXKvmpUCDc%2FRi2lYHoRuEoGfKzxuSCwVKI4EdHENwIr9SSF3mEG%2Bt%2FX5JY%2FyeD8C9F4QwGQ55gpWQ2aSMZLhmrq6SEzYX%2BvxQeZo2Peuoq4Yp7IHCl5m4tbijtYLdjnk9WG3FP1bsTmm8EM%2F%2B1rR8NO75Uo0dVBWwnjklgdoJg%2FFBT9LO8MnI2uN9aa6t%2BNuLEicIW%2BlwO5qpDdUq4lc0CqI5QK3JS8rsI3k038VOHDmCQYEJnrVf1O23VkriCZoIJuanLpajDG7Oe%2FBjqkAW1cEt%2FqESeG%2BeUS2sQPIgZhR6bRoEUXt1QispFMocvA%2BttpBrh9LgOfHH%2B3ZYUWRdWfGhhwxYNNUAGB9JbHuDGDHi8kTquUALkMb2%2BOCMaRuQz7QFPISJZkP4PFoUq9%2FtBGH85yGcm8ju2uIxKzXDkfdMBMZXl3rBDlrEHMY1jwq%2FvzGehUzzi%2BEEKgqADeP3u%2FQViXxb8bLXIbMzOwtDLiCINA&X-Amz-Signature=cb850b0cd56eab7a1656eda21f6cbf988c158208ea46d340107b46fba54bd772&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
