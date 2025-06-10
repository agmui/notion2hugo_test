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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XMI7H5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaGOl5Bgtr1TfeSAUckkEm5NwX4VXi9YQvhXj5IxDPgAIgeGY983wncHSJytowtTKwm5G7azFVGSe7JcatCc%2Fjxh4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK03Sj9mwNe7vVlK3yrcA%2F8IiKsRwPFkHm%2Fo0nGpQRCw%2Fba64pJKwNMxCqp%2Fx2INVNquBNBcYWBRfFfvDOi83E9RECNAlFUnCgc%2FEVlx5m51HLlLz7mjMUZ%2BE%2F33FmFc0fYRdqkSx4tAV1kWYQDnMTskaVZum7Vkp9gUMdu%2FvsPpIqVfTFvGTxgJgS4wX0%2BifCutqPp3njYYdJRTfZBOEPbCA517aOFxAJFvPD1d68UmZPYuZIX9Ypz0HYoErSRmm29Ak01c%2FO9vLSLVC7M%2FaAjwKzt3S3XuCaHKmtSkg0sKaqsoWdJGdELjGCyDtCmgGaqIQWcFdB9Otl8f%2BmTqSL4V%2BUhV9mwhiajM%2FTx2gkD6dZR6eV5HVBOXBrRQei7b9S6ov%2Bjc8qUvSO29X07r6WkY4nzBafTp7HWc99IJJrCc4lBrHjNVSKuDmxURTAjQoUhGEdOe4ARqi%2FcoPmJzDLnzCOeZF5RRif%2FEWPxQ3NV5BUtE0JSmPyAgPgRDm3jKZsh9%2FqSQPfdfezXRNtHjxQc1Sm8%2BP%2B6K7PYWxBJksLpfRTImR8qaIxXRh5pg1cMnY19FNbaAwum2qsnKOHLNLFFZ%2BR93I0eK%2Bh1rtekMk%2FoofKye%2BOrozJ05QTbalU7QF6RMpYjHLSxFFRHlMM%2FJocIGOqUBug9h1E3Q6U%2BvKWBDp6cQPpyLZGK8qOTXMJxmGI4n5bA4PpPEv910s%2Bfzlp2TjvhNOtJctC8GvkeeKz5VdYnOOvLVddY1MzGno8OMMtHMY3jaB1zog0B32DHPJa%2BfowNFta%2Fuzr%2FKLd3UilAsRWpw%2BNPCY3o1aTvCPwp32bcqytf2MB%2FPvezTNss502y%2BpGXRil4V6i2x3QxFcWNo0yMnpNczHWwD&X-Amz-Signature=2a09c54836a6c57a2398b74be08b08105300f69bf44ee5615e33c26998fd6c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XMI7H5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaGOl5Bgtr1TfeSAUckkEm5NwX4VXi9YQvhXj5IxDPgAIgeGY983wncHSJytowtTKwm5G7azFVGSe7JcatCc%2Fjxh4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK03Sj9mwNe7vVlK3yrcA%2F8IiKsRwPFkHm%2Fo0nGpQRCw%2Fba64pJKwNMxCqp%2Fx2INVNquBNBcYWBRfFfvDOi83E9RECNAlFUnCgc%2FEVlx5m51HLlLz7mjMUZ%2BE%2F33FmFc0fYRdqkSx4tAV1kWYQDnMTskaVZum7Vkp9gUMdu%2FvsPpIqVfTFvGTxgJgS4wX0%2BifCutqPp3njYYdJRTfZBOEPbCA517aOFxAJFvPD1d68UmZPYuZIX9Ypz0HYoErSRmm29Ak01c%2FO9vLSLVC7M%2FaAjwKzt3S3XuCaHKmtSkg0sKaqsoWdJGdELjGCyDtCmgGaqIQWcFdB9Otl8f%2BmTqSL4V%2BUhV9mwhiajM%2FTx2gkD6dZR6eV5HVBOXBrRQei7b9S6ov%2Bjc8qUvSO29X07r6WkY4nzBafTp7HWc99IJJrCc4lBrHjNVSKuDmxURTAjQoUhGEdOe4ARqi%2FcoPmJzDLnzCOeZF5RRif%2FEWPxQ3NV5BUtE0JSmPyAgPgRDm3jKZsh9%2FqSQPfdfezXRNtHjxQc1Sm8%2BP%2B6K7PYWxBJksLpfRTImR8qaIxXRh5pg1cMnY19FNbaAwum2qsnKOHLNLFFZ%2BR93I0eK%2Bh1rtekMk%2FoofKye%2BOrozJ05QTbalU7QF6RMpYjHLSxFFRHlMM%2FJocIGOqUBug9h1E3Q6U%2BvKWBDp6cQPpyLZGK8qOTXMJxmGI4n5bA4PpPEv910s%2Bfzlp2TjvhNOtJctC8GvkeeKz5VdYnOOvLVddY1MzGno8OMMtHMY3jaB1zog0B32DHPJa%2BfowNFta%2Fuzr%2FKLd3UilAsRWpw%2BNPCY3o1aTvCPwp32bcqytf2MB%2FPvezTNss502y%2BpGXRil4V6i2x3QxFcWNo0yMnpNczHWwD&X-Amz-Signature=36f6953129f7d5a9687e8bb2a77d0cde569213b065b41a4949f23f111f8bb6db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
