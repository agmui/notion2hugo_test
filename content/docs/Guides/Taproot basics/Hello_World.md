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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGB6UX2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf3fOGhJSpSDlfbiE1EMepPgMs6Zm85JakmWZj1d2LjAIgJ3T6M0JCAyqYpMo5ZURgHl9morV4ePxJcx8iKLFJY%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB4Ysc1GdY%2Fdv6TfircA5jHOHGh61FvDhm8tA8oBXrXRKPp4EggWC72FNHMxNKWlpkt1j4f4bEniQvK%2BH8o%2B6dht3EGCCC0FbjlMb83x29Fp2Rflst49RFvibyKiWIFwCyDVlpgb10AAotldl0l8%2FUJqlRT7ICLHm2SGlZ53rViiVpYXDEtkgmFU02sfcWXiuQGip0psUVL6Fowxr9zz56quyBFdo6FqEeflkRSqkUdPeN%2Bs42a2yNXKPRLziAIHvhdEgR6I4GMs1bhftILeLqCvbKtNLk6Ant%2FlIadzdRN7B9EVyyVh86CHOpOUARJyO7Z7AuwGy06xKLLf%2FFvZNh8ZpHeiFo76l73xaaXdMAzVVFujqd3%2BPQRBMdIWTjg8HTlc9hEh8waLfnJw96NRLtVGAo%2FCEURHIyfq2w3dLfzYag741vkCW09jR8MxIoXefskcdGtCuFkEb9g%2FVMW3HKTRuiMrZtC3BPFT4gbjopN9Hg1s9Gys3qvzc1azqXLDXEe%2FaHqlcoCl0tlHLyy2lE9VDABLWZSPs8rs24IYg0TBpfkL%2Bw2sKdre5lIvZy%2FDNT7ga71mf7SPaqTOs8ll884GVdOHrlMF13YMsC3LqHCFWbj6QtXBHjoj6C%2FPJEEkMKNOhfM%2BPLYQlE%2BMK7Nzr4GOqUBHEUEjVZIq7sIT%2BGNR9ORs%2BHlE1vAex%2FfyBToCwOlmrLsyX9V6GyymV4AtMPuzb3oZbsa4S9cD6bcGKEeLViSHlM8p8NIDTwFEb%2BsX6hv%2BtiOqtyHHDSUPL%2BDaDjWUNeBVOjotanme8920jqN8LDp0BvXUsygVgu3Uviht9p03btC96GH%2Fuk45uDaM%2FEARZnNpg8i%2BwOyZW9gRIIEb%2Fw%2F%2F4PoLqB2&X-Amz-Signature=e9ac3e7796c2cd7019484950f53b71380d92146c0af2662dc8e8f90924d15f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGB6UX2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf3fOGhJSpSDlfbiE1EMepPgMs6Zm85JakmWZj1d2LjAIgJ3T6M0JCAyqYpMo5ZURgHl9morV4ePxJcx8iKLFJY%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB4Ysc1GdY%2Fdv6TfircA5jHOHGh61FvDhm8tA8oBXrXRKPp4EggWC72FNHMxNKWlpkt1j4f4bEniQvK%2BH8o%2B6dht3EGCCC0FbjlMb83x29Fp2Rflst49RFvibyKiWIFwCyDVlpgb10AAotldl0l8%2FUJqlRT7ICLHm2SGlZ53rViiVpYXDEtkgmFU02sfcWXiuQGip0psUVL6Fowxr9zz56quyBFdo6FqEeflkRSqkUdPeN%2Bs42a2yNXKPRLziAIHvhdEgR6I4GMs1bhftILeLqCvbKtNLk6Ant%2FlIadzdRN7B9EVyyVh86CHOpOUARJyO7Z7AuwGy06xKLLf%2FFvZNh8ZpHeiFo76l73xaaXdMAzVVFujqd3%2BPQRBMdIWTjg8HTlc9hEh8waLfnJw96NRLtVGAo%2FCEURHIyfq2w3dLfzYag741vkCW09jR8MxIoXefskcdGtCuFkEb9g%2FVMW3HKTRuiMrZtC3BPFT4gbjopN9Hg1s9Gys3qvzc1azqXLDXEe%2FaHqlcoCl0tlHLyy2lE9VDABLWZSPs8rs24IYg0TBpfkL%2Bw2sKdre5lIvZy%2FDNT7ga71mf7SPaqTOs8ll884GVdOHrlMF13YMsC3LqHCFWbj6QtXBHjoj6C%2FPJEEkMKNOhfM%2BPLYQlE%2BMK7Nzr4GOqUBHEUEjVZIq7sIT%2BGNR9ORs%2BHlE1vAex%2FfyBToCwOlmrLsyX9V6GyymV4AtMPuzb3oZbsa4S9cD6bcGKEeLViSHlM8p8NIDTwFEb%2BsX6hv%2BtiOqtyHHDSUPL%2BDaDjWUNeBVOjotanme8920jqN8LDp0BvXUsygVgu3Uviht9p03btC96GH%2Fuk45uDaM%2FEARZnNpg8i%2BwOyZW9gRIIEb%2Fw%2F%2F4PoLqB2&X-Amz-Signature=fd0da9c41035886d56db1fceaba4d520f9de31c4ee84e6249a10cc3fd97baaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
