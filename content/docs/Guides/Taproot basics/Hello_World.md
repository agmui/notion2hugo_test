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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCHP2UC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC63qDY13yO7Ba%2BrDTvOG1huPIamX3hwU1BjuL66OKN2AIhALi0ZM0UvveW7ebpvhX6RV0V1NnKVADqlluYOKt5wNgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQNRwlndOHsTWcO5Yq3APTaVbwgpbdOSu4UaivijVpJwdwBfvXZmtNdST725NOVJPGg%2Bmh5MoCxA61LWr8QmOY387pWOFzImDA9Pu2hvargrZnWW3ZiI3dB5gxTL1YoKWQ8BsaZ%2BXCQqycB%2FiV3%2BSwlfPuuIhIiOLt3KZpwegtpoDPVzuNTUD%2Bj%2FRWMEDnprxBTdq2B%2BBBLWNzbLW0pkeE%2FjN83pabUTzsKX69%2BABjnma8q8fDffruSClCkY%2FmybXnGAevomH%2BslMaZBS949AoY6jDGZbG8SkzF5HI7HZ6u5CfQYbJsGCY%2Bh2whQ5CBl36vhvhOOiswCQV7W4w8eINc1qp3hm8NRBE7T0a7DZIuLQk2Twv4zZIYAPOuXEDxsnPHzrjKFy3h5PaxUzohRvt7urWhf4Jv26Dl0hqweT7LkaR6d%2Bk%2F%2Fohwv1cMsiCCHgGWZQ5L9D0dqUOwtnwrZ1AYQxjTUUHCiPoikKeEQ8IrJGddfnQSkfmDb47yp%2Fd1I3HFypreytr5IFCZi5xTO77X21aSUxOs5EwDFhcYmSwM4sv2RXXIDpLNybZLVtCN8yUmcSwPU6CH3ZfpBScVPh1vE8CMHZznch4Zn26bizoWv8waRTmFY1IzsMijEw9FJFiUAtCm6dgxMsrpzDwgZHABjqkARkT%2B25owa83P9vq6CTrZn1NC792stPYlHdRisqITVPRXCjet3B4g4xVpw1dpTiOJgzI4y1G9R2nHtR0LwnSn9s4Erzu5GAbVMKO2rWqqXaXVA4U3NB%2BPfUN0%2Fiuwr4qJ36TDXtzZXoJ5TNyeZOWQiizS0BE4IH9t6jaYJOSWeLEr3kBw4WFT7tDCASKL7mjtmLuWhCcFU72iV%2FxdcobrMGmFpTI&X-Amz-Signature=6264e22250835feb5897534065b087849ef459e353a054ff5319884abf670058&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCHP2UC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC63qDY13yO7Ba%2BrDTvOG1huPIamX3hwU1BjuL66OKN2AIhALi0ZM0UvveW7ebpvhX6RV0V1NnKVADqlluYOKt5wNgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQNRwlndOHsTWcO5Yq3APTaVbwgpbdOSu4UaivijVpJwdwBfvXZmtNdST725NOVJPGg%2Bmh5MoCxA61LWr8QmOY387pWOFzImDA9Pu2hvargrZnWW3ZiI3dB5gxTL1YoKWQ8BsaZ%2BXCQqycB%2FiV3%2BSwlfPuuIhIiOLt3KZpwegtpoDPVzuNTUD%2Bj%2FRWMEDnprxBTdq2B%2BBBLWNzbLW0pkeE%2FjN83pabUTzsKX69%2BABjnma8q8fDffruSClCkY%2FmybXnGAevomH%2BslMaZBS949AoY6jDGZbG8SkzF5HI7HZ6u5CfQYbJsGCY%2Bh2whQ5CBl36vhvhOOiswCQV7W4w8eINc1qp3hm8NRBE7T0a7DZIuLQk2Twv4zZIYAPOuXEDxsnPHzrjKFy3h5PaxUzohRvt7urWhf4Jv26Dl0hqweT7LkaR6d%2Bk%2F%2Fohwv1cMsiCCHgGWZQ5L9D0dqUOwtnwrZ1AYQxjTUUHCiPoikKeEQ8IrJGddfnQSkfmDb47yp%2Fd1I3HFypreytr5IFCZi5xTO77X21aSUxOs5EwDFhcYmSwM4sv2RXXIDpLNybZLVtCN8yUmcSwPU6CH3ZfpBScVPh1vE8CMHZznch4Zn26bizoWv8waRTmFY1IzsMijEw9FJFiUAtCm6dgxMsrpzDwgZHABjqkARkT%2B25owa83P9vq6CTrZn1NC792stPYlHdRisqITVPRXCjet3B4g4xVpw1dpTiOJgzI4y1G9R2nHtR0LwnSn9s4Erzu5GAbVMKO2rWqqXaXVA4U3NB%2BPfUN0%2Fiuwr4qJ36TDXtzZXoJ5TNyeZOWQiizS0BE4IH9t6jaYJOSWeLEr3kBw4WFT7tDCASKL7mjtmLuWhCcFU72iV%2FxdcobrMGmFpTI&X-Amz-Signature=4a65424e94075f60b123992f5f7ab83a22388c2f8b3396db1ddc4ffaa8c57e23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
