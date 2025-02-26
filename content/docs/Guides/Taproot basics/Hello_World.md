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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIMJ7MV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIClWnq%2B7tyusfIfSZRwVH9WCDxgU2VXQZ5FtI%2Bw1%2BNSUAiBqyREPOqjSPw%2BK9BWQ29603vP53%2BfqV8A9ElYoirZ%2BWyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1DhFNYIsEw2WG%2B18KtwDSuBbkfpfTm%2FmNcCObkVgxIaCqjPeOWZ8UshqSP9cmjaxjib8j%2F9WFdpgYEZmaIqY6k3t1YuI0WYvjEzanJONfX%2B905Q0n2fs5Ugm8t1DzcLB9I0Yj6JM%2FkmoWW8LhTSh7ZH359bjFdfsfYk1%2BhCFWmUB3J3eXITjneWQZHSlRRLdSfP3G8Iv%2FkDeNSmBRMTGXXhnIpGyeJmcSkERv4pd2vMh4h14zN8daI3KU9wHExIGDv2nzI5AuegUis9hts03ExcbmbzXwM4SyzsOpfehGyoPOGJAdm3B8zUYuiFsaMu9e%2F76icUG5S1w9wlzEWKS4TfDR3Q96fgCJQ3nK04pugFCLZjHKa8Sxlmvlh2N2her58wtsGYQ5mDFDQFdC6IlbONlYwJhdTaOFKSnapZu94%2FWwRvkO1Du9SzuIK9w8uqk86EMK%2B0L69c55Lq4DokzNYRYCqlX4xrkr9%2FMOAYgCpWcWIHrFOJ0RuR4JURaw7tDxm3%2B04DVqyTig2FY%2BznHF0FYr6NcDDOmw0gLTr9DvTc5SMS04IAfVGH3kc9pKN8SBtpI%2BK19YAdQ8UU16frtXUs9Si0n8ZXGKXgxpyACc8yhK1zhyYQ83mBrYVXL%2FHLYzK4782HJM32ZYjEw4Lv%2BvQY6pgHQkfa%2BIXO%2FJ%2BXeRI8F5l2Lx8KpuY6LVXgpKmvZZXNmrypdqVfCVEiPidGKyiYRDScdTf87Uu%2BcekGtARalFe42b2qZ8YBaP9uEIfhvOj1j19p1SmuOXYFzQLPBj7t7lXJ%2FET7I0%2B%2FJzH6B7Pe0WeA8wb427oSbwyRmIrG8gBUQd21FpwFuVeGi3uYZVFePMcdXGJhgas8mxZCAJUbptfD84V4rtsCu&X-Amz-Signature=515214a4656ff7d8aec7a2fbe1127d22d606f820dce3a26a90ea3993846bbc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIMJ7MV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIClWnq%2B7tyusfIfSZRwVH9WCDxgU2VXQZ5FtI%2Bw1%2BNSUAiBqyREPOqjSPw%2BK9BWQ29603vP53%2BfqV8A9ElYoirZ%2BWyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1DhFNYIsEw2WG%2B18KtwDSuBbkfpfTm%2FmNcCObkVgxIaCqjPeOWZ8UshqSP9cmjaxjib8j%2F9WFdpgYEZmaIqY6k3t1YuI0WYvjEzanJONfX%2B905Q0n2fs5Ugm8t1DzcLB9I0Yj6JM%2FkmoWW8LhTSh7ZH359bjFdfsfYk1%2BhCFWmUB3J3eXITjneWQZHSlRRLdSfP3G8Iv%2FkDeNSmBRMTGXXhnIpGyeJmcSkERv4pd2vMh4h14zN8daI3KU9wHExIGDv2nzI5AuegUis9hts03ExcbmbzXwM4SyzsOpfehGyoPOGJAdm3B8zUYuiFsaMu9e%2F76icUG5S1w9wlzEWKS4TfDR3Q96fgCJQ3nK04pugFCLZjHKa8Sxlmvlh2N2her58wtsGYQ5mDFDQFdC6IlbONlYwJhdTaOFKSnapZu94%2FWwRvkO1Du9SzuIK9w8uqk86EMK%2B0L69c55Lq4DokzNYRYCqlX4xrkr9%2FMOAYgCpWcWIHrFOJ0RuR4JURaw7tDxm3%2B04DVqyTig2FY%2BznHF0FYr6NcDDOmw0gLTr9DvTc5SMS04IAfVGH3kc9pKN8SBtpI%2BK19YAdQ8UU16frtXUs9Si0n8ZXGKXgxpyACc8yhK1zhyYQ83mBrYVXL%2FHLYzK4782HJM32ZYjEw4Lv%2BvQY6pgHQkfa%2BIXO%2FJ%2BXeRI8F5l2Lx8KpuY6LVXgpKmvZZXNmrypdqVfCVEiPidGKyiYRDScdTf87Uu%2BcekGtARalFe42b2qZ8YBaP9uEIfhvOj1j19p1SmuOXYFzQLPBj7t7lXJ%2FET7I0%2B%2FJzH6B7Pe0WeA8wb427oSbwyRmIrG8gBUQd21FpwFuVeGi3uYZVFePMcdXGJhgas8mxZCAJUbptfD84V4rtsCu&X-Amz-Signature=4e3105967f1189f2c04cd257795013fdee657b1e269aa9d4b05237fbe5ec85ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
