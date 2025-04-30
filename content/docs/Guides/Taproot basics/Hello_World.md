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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV24LREA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCY%2BCAI%2Fg2%2BUBPB%2BHdqCYZk4b9QuGybQTXSP28YPvttjQIgQfRGLm%2FMUtNuHjyJ4%2Fh9H9ETFfw5fEPLwPYoRmRuZL4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7CJjc8RPR%2Fimz0xSrcA%2FktJ69ewjmFhuWL0rw9Jdw4fBec6Kr9yGxMQW%2FTXbAIHUPRgAF1OZszvV5TcWNZZk%2FHKzQIJfGFVC2o5m7S%2FAyW54F%2BcDVLuBcu158UAWaUO1M8bQys628iXdWXdmbB95vajBO7VCLOAfxW3bTR0d0B3PGgNujgnUkfp7hLjFDdRD8GuH1aUxL1ydGufcEKt0nr2FMoRJ0T%2Be48US%2B4uZUxuQXHot1k0zvvI8nENu7418E9BK0g%2FWpb26GaNIRl3uP8lASDdxtGRXk0ZCU22EMX%2FeyAWyUBYUCqj1WmVGBSf3j%2BlnYYrfjof9AbuUbzx2axMyngYj01wr9uNnRwgAi%2BISl7LT%2B27RzAgc2ByBG4PWt%2FoeoewxYuMYvqgE2EZq5zgimOe6U3dp3FGAGQrp3imRjP6cuU1wslAdrs%2F2VSVm05JzJfuWpIvxUl0gmpTwY%2BFpvn8kIPf5zPRMvlq%2FAP1PaoY%2FAQoM49M4gk5rsbE7hMp7a06b3wEH6NdF4JRN3DLKpBxpBMjdq5ROJQ0BfyWCBCb0yI3qiPOKEGrlvTxjIHIBYgqpG9qRF6jlnj63BCjUjf5jbsH%2FwPPGaotWdHauxrSUIECoYRW7zw1xZSbwN3nMXAtiedQfVFMOG%2FxsAGOqUBISQG2sXXxqEOMrmIK1vOKkkRe6fS5KxvWen11vH4QW8x6%2F2bxKrLrLd6leNqQg%2Brjb9LLJVmgVAuIy5wHK2eU%2BpdMrDwQ%2FfJFyMbaghur06ZgE5xdDXH6%2FrcURmLAOzOwmX8qHo9HmDnN26VhABcrt73hdvNrbyVm0zCGlNXu8lBWXwRsjbvvwwDnpbxOfg2Ubar0K%2F5vuqAh0BsC6yA1hnrbrdT&X-Amz-Signature=334bfd44a5db64e516688013ba74144233ca1dfbad09bc2d45a326886a52ac64&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV24LREA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCY%2BCAI%2Fg2%2BUBPB%2BHdqCYZk4b9QuGybQTXSP28YPvttjQIgQfRGLm%2FMUtNuHjyJ4%2Fh9H9ETFfw5fEPLwPYoRmRuZL4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7CJjc8RPR%2Fimz0xSrcA%2FktJ69ewjmFhuWL0rw9Jdw4fBec6Kr9yGxMQW%2FTXbAIHUPRgAF1OZszvV5TcWNZZk%2FHKzQIJfGFVC2o5m7S%2FAyW54F%2BcDVLuBcu158UAWaUO1M8bQys628iXdWXdmbB95vajBO7VCLOAfxW3bTR0d0B3PGgNujgnUkfp7hLjFDdRD8GuH1aUxL1ydGufcEKt0nr2FMoRJ0T%2Be48US%2B4uZUxuQXHot1k0zvvI8nENu7418E9BK0g%2FWpb26GaNIRl3uP8lASDdxtGRXk0ZCU22EMX%2FeyAWyUBYUCqj1WmVGBSf3j%2BlnYYrfjof9AbuUbzx2axMyngYj01wr9uNnRwgAi%2BISl7LT%2B27RzAgc2ByBG4PWt%2FoeoewxYuMYvqgE2EZq5zgimOe6U3dp3FGAGQrp3imRjP6cuU1wslAdrs%2F2VSVm05JzJfuWpIvxUl0gmpTwY%2BFpvn8kIPf5zPRMvlq%2FAP1PaoY%2FAQoM49M4gk5rsbE7hMp7a06b3wEH6NdF4JRN3DLKpBxpBMjdq5ROJQ0BfyWCBCb0yI3qiPOKEGrlvTxjIHIBYgqpG9qRF6jlnj63BCjUjf5jbsH%2FwPPGaotWdHauxrSUIECoYRW7zw1xZSbwN3nMXAtiedQfVFMOG%2FxsAGOqUBISQG2sXXxqEOMrmIK1vOKkkRe6fS5KxvWen11vH4QW8x6%2F2bxKrLrLd6leNqQg%2Brjb9LLJVmgVAuIy5wHK2eU%2BpdMrDwQ%2FfJFyMbaghur06ZgE5xdDXH6%2FrcURmLAOzOwmX8qHo9HmDnN26VhABcrt73hdvNrbyVm0zCGlNXu8lBWXwRsjbvvwwDnpbxOfg2Ubar0K%2F5vuqAh0BsC6yA1hnrbrdT&X-Amz-Signature=0ee12743a0d37855b8348799ed884963e979e2cb59f4ae7d70cf902e6c51a983&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
