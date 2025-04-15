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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDXDA5P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtiL9FLAzRH%2BjhAUWZqTm0NAOY8G2xLw9YBS0Lw3YZSQIhAL5frszrIHrdy8b0OASeXgCAh%2FknumyIGay1kE%2FI3wmUKv8DCDQQABoMNjM3NDIzMTgzODA1Igxc6lGv6PhXhbbbFt8q3AP4RlmQtIuDx2FYTQCo4tn3iiztP1XS0uoXJKdx2KlwRNtPNa845JrOjp4xX6JMt5a865yRymZ3dFYe%2BXscU8U%2FFS9WVlVOqqiRnd11iPD%2FRt%2B3PvEXJ4rY%2FGfxLzXHR%2FRMVM6wiI5TiEFq57KjhcfZv2cBRzi8lbmFiGCCxq0ynZF5DN9Pemq1RDPWqRnO%2FnWGXloHP0w2GTxnp%2BhoMRWO0a%2BeVKvsrYtCLJ5lJYi0%2FbqVLVFnGMlal6zrYBpcj05x9uS0xArwfiWfrxkakc0b6aR3mBcnJi1JJ9aXFcNo85%2BFanH%2F0k4XuYAV45wniGvpe38oycA9GTodQ7GzBJ%2FczZYWD3cIr%2F2RKF2HrXsaboj9brGRsPjQcPYgff%2FHOh7qXIYRLFFSVR0LL2wlH36x5%2FeHsQPxunlMYxAcK4oVSAMcNV1nHDC2N2Ef0yyVa%2FOdoZTnL7h0qEyCPDcESDsQOD2S9glKAv%2B5SpXyEWC6kPjI2TZj6uPtVnEpZfnlp2pXuG%2BelN5DYq9mBnUW0CdMJ4dTgo4SX7Ed%2BzjB7z4nDpH3x%2Fg%2F%2BBB9ESiWiXk9Q5IUtV2FhO%2ByBwrj0RdxLmInbq%2BGQGf7AiYbMGK3DMYsUSXDxy89M3Vxa%2B1yezCX1vq%2FBjqkAfYlTn6a3xR3oeTpjD51poi3oZ1v2rhVJSr5276kUJw61LY5U2YTg1RkLluv3HilgGRXibtMikoq1sDKOTLThcMVc4%2BvWzvvvP6fX28xcRTABkyu%2FDjo%2B7%2Fpz%2FA6jJp0RI5F8ot2ywQIsBPIZSO8mP4ssPcyIkZg02j8ileF88E5eY5hoVEOT8mTuBRmCMvv54MY6LTMOXl0SXcXwJi7IoKQZw6%2F&X-Amz-Signature=a1a69ca8d46b04bd1988cfa06646cacb53f8f5a72a55badeb1cfe7adc26c702a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDXDA5P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtiL9FLAzRH%2BjhAUWZqTm0NAOY8G2xLw9YBS0Lw3YZSQIhAL5frszrIHrdy8b0OASeXgCAh%2FknumyIGay1kE%2FI3wmUKv8DCDQQABoMNjM3NDIzMTgzODA1Igxc6lGv6PhXhbbbFt8q3AP4RlmQtIuDx2FYTQCo4tn3iiztP1XS0uoXJKdx2KlwRNtPNa845JrOjp4xX6JMt5a865yRymZ3dFYe%2BXscU8U%2FFS9WVlVOqqiRnd11iPD%2FRt%2B3PvEXJ4rY%2FGfxLzXHR%2FRMVM6wiI5TiEFq57KjhcfZv2cBRzi8lbmFiGCCxq0ynZF5DN9Pemq1RDPWqRnO%2FnWGXloHP0w2GTxnp%2BhoMRWO0a%2BeVKvsrYtCLJ5lJYi0%2FbqVLVFnGMlal6zrYBpcj05x9uS0xArwfiWfrxkakc0b6aR3mBcnJi1JJ9aXFcNo85%2BFanH%2F0k4XuYAV45wniGvpe38oycA9GTodQ7GzBJ%2FczZYWD3cIr%2F2RKF2HrXsaboj9brGRsPjQcPYgff%2FHOh7qXIYRLFFSVR0LL2wlH36x5%2FeHsQPxunlMYxAcK4oVSAMcNV1nHDC2N2Ef0yyVa%2FOdoZTnL7h0qEyCPDcESDsQOD2S9glKAv%2B5SpXyEWC6kPjI2TZj6uPtVnEpZfnlp2pXuG%2BelN5DYq9mBnUW0CdMJ4dTgo4SX7Ed%2BzjB7z4nDpH3x%2Fg%2F%2BBB9ESiWiXk9Q5IUtV2FhO%2ByBwrj0RdxLmInbq%2BGQGf7AiYbMGK3DMYsUSXDxy89M3Vxa%2B1yezCX1vq%2FBjqkAfYlTn6a3xR3oeTpjD51poi3oZ1v2rhVJSr5276kUJw61LY5U2YTg1RkLluv3HilgGRXibtMikoq1sDKOTLThcMVc4%2BvWzvvvP6fX28xcRTABkyu%2FDjo%2B7%2Fpz%2FA6jJp0RI5F8ot2ywQIsBPIZSO8mP4ssPcyIkZg02j8ileF88E5eY5hoVEOT8mTuBRmCMvv54MY6LTMOXl0SXcXwJi7IoKQZw6%2F&X-Amz-Signature=061be635e4f62ffc3c588cacebb7f0a6a1ff780a1b8d09ce054bee96104a8d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
