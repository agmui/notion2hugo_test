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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMD74NGJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo9t15FJdrNNaK8uR8Ut%2Fn2LEcJ6c7%2FvfZqdRKV9EMwgIgMQNtU%2FIZrn3HsC8QTULYkAj%2Fhh7KnxgNg7DbNXPesVcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2RzRGeW9mZ74LfBCrcAyt6RTX1Hr5MOZ1DtvAF22L1V1t%2FH3nnqOXHdtprvRymvZLC1H0XB4C7SrbQJVpbERrK7gD6zAxk2i51u6w%2BmDPfrcsQvc03kNPWUcVd8AitdTDc%2BxQKrYGfgfO701sU4QupjMFhvvAkChZchjR4YAK2HGT1sFZxA0IykiBHLMwFPeX6nO3iQVh9kIXZYXufMhJFwt59hxzt4846yBKkRtN0suc2CLqPLnBpI%2Fe1cQSjfoL9z%2BYlOMn1ZDCVtD1IR%2B7OGJMau%2BhTzQvzuY98fA0H2zsBPIB0%2FUhsnYAb0YoTX5NXyUvwY18C76FEh1GlvVrPDRPsjMt5D6%2FGm%2BBENPiv6%2BGpbyuSI%2BtJLhxM0upEDFNCRbq2J3MysfF2KC%2F1LfyLHaNB9B0wKwMAT6mIsHxGpj0ojaRfCmT7JLqqL6yoX2bpCWoXLnOniEOtXsZ7kRIabK%2B8vDs4thvnZt0WCxAIr1WhGQB39g%2BMdCji987GeeMDHvF7fxvgihPhg1bTSlTfp9%2FMgwO%2BPQ3RczhDNHnhD%2FM8yR0PHtzUECDxYDyqlZBnELmhLMbN7WUgVuHKkpc0bKTl5JfvndJG1LNnpwXtPtHUL0AUxpF51UwW6mNCHtjFKX%2BJqeZEK830MNv4mL4GOqUBSYbOQq1%2BdBxgPmEQxTMg1DA%2FIdLy4aZ5G3mIvBStgXzlgZcUKMaMn6CwLGUmi%2BEAdDkxD5Nmgqr2CgTkPKPKEgMJOYIkXQr8PHNPwTTt%2FyP7mo06p7Jvmw4kffZRmIi%2BhGasixsc2gUbB1evfqCqoDHRd3h6lkqqlaWaUrnRJXvQSiPySNZ6eLeGmfoFNXMl5VohhxnuK84sfAMljASX6FOVIOMO&X-Amz-Signature=212d9248af4771e8bea5e3ec5dd8ea2496ec666dc66d7e79977b379705409f57&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMD74NGJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo9t15FJdrNNaK8uR8Ut%2Fn2LEcJ6c7%2FvfZqdRKV9EMwgIgMQNtU%2FIZrn3HsC8QTULYkAj%2Fhh7KnxgNg7DbNXPesVcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2RzRGeW9mZ74LfBCrcAyt6RTX1Hr5MOZ1DtvAF22L1V1t%2FH3nnqOXHdtprvRymvZLC1H0XB4C7SrbQJVpbERrK7gD6zAxk2i51u6w%2BmDPfrcsQvc03kNPWUcVd8AitdTDc%2BxQKrYGfgfO701sU4QupjMFhvvAkChZchjR4YAK2HGT1sFZxA0IykiBHLMwFPeX6nO3iQVh9kIXZYXufMhJFwt59hxzt4846yBKkRtN0suc2CLqPLnBpI%2Fe1cQSjfoL9z%2BYlOMn1ZDCVtD1IR%2B7OGJMau%2BhTzQvzuY98fA0H2zsBPIB0%2FUhsnYAb0YoTX5NXyUvwY18C76FEh1GlvVrPDRPsjMt5D6%2FGm%2BBENPiv6%2BGpbyuSI%2BtJLhxM0upEDFNCRbq2J3MysfF2KC%2F1LfyLHaNB9B0wKwMAT6mIsHxGpj0ojaRfCmT7JLqqL6yoX2bpCWoXLnOniEOtXsZ7kRIabK%2B8vDs4thvnZt0WCxAIr1WhGQB39g%2BMdCji987GeeMDHvF7fxvgihPhg1bTSlTfp9%2FMgwO%2BPQ3RczhDNHnhD%2FM8yR0PHtzUECDxYDyqlZBnELmhLMbN7WUgVuHKkpc0bKTl5JfvndJG1LNnpwXtPtHUL0AUxpF51UwW6mNCHtjFKX%2BJqeZEK830MNv4mL4GOqUBSYbOQq1%2BdBxgPmEQxTMg1DA%2FIdLy4aZ5G3mIvBStgXzlgZcUKMaMn6CwLGUmi%2BEAdDkxD5Nmgqr2CgTkPKPKEgMJOYIkXQr8PHNPwTTt%2FyP7mo06p7Jvmw4kffZRmIi%2BhGasixsc2gUbB1evfqCqoDHRd3h6lkqqlaWaUrnRJXvQSiPySNZ6eLeGmfoFNXMl5VohhxnuK84sfAMljASX6FOVIOMO&X-Amz-Signature=1a88528b161341c961344af3273742304a8edff513c7af96c16b8ce50c087c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
