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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQXCQK6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC3%2Bp88t61Kl1Y6aC3ggRNR4In%2FpXNp2KuXeGyqjQscugIgSHF1MVQwweJy5ZwfCWtM%2BWgFbRCC12m9h7I1xjEtF3cqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyNGs4DyYOgupcU5yrcA5KQsEgokIHqz52imB7%2BhJfoOPIAK7gkKl9lExQf3B%2BJ6lCToLvX0dp5mhZwq%2BajWMH1shDm%2FfS2tVWOA4KfUKUvK5CaIkVY8b59pay9SALFYcd9f8ZTUzDm45zXEgfoBEyy6pyFUYuph8Ri7eilBPOk9Y5qBbYkh%2FFAzUj1iSNPrVFyfXhPAW%2BWaGkKKXgnD1bcYVQ8D00NEui6UPzSk5qhYi6CZsrbEPcW9fF3%2Fm8F9e%2FNenXseX5OUuxX%2FSfe2AW4pjiMj%2FwKuoZ%2FAxa%2F2VylXsjpaUwGIMIe0gDDuQv2lo6IFdCSQVeGwIl5Mi%2FyqPlOOZcOjhP1QXJPo%2FdHjMieV6%2FbnvGgXGn9CCQ8jvsjaVeVpBk2E%2BREXYStrC810vdtveiGmb%2F9v1%2BqsfEmv1niEXmodTfNOsoZpnX1PPhkLxIclmWuVwfXJ%2BUTN8%2BajURWUhl%2FcrsakrKL2LHnh9gOnLp%2Bv%2BIkreIKkF0D2EncGL0a5WceUdSuhxz6yD177GslbgoHSJTa4BViuH%2Bw1SEB3pmm%2F3vgqtoxGk1c4zmLsoFytBesTHPhIFQwbLkzrEE7L%2FxBdrwAL4SU0%2FCJ%2BDX9XT2tLHYIjXAcVuYe3O%2FlPmLcUEzGFMPCX4SIMKOqnsAGOqUBcM3eJ2KDUawBsLWwuxtTWTcanCi1magfIpwAFg5EY37XLS8EQpWOC0liV1n6TXLW7uprpKvW%2B20baX644Dh8dl57RBOlnuy1ERxvOdxxKYxCuMvlxbCsGxFB6vQ2RE%2FEQqrqrM0auX4P2zDTFS73Zfy1ujNDkLCOstQpxes2dHVsYrzdHOjtQViU%2BHdczhDoAHyI73dS4KNsPW%2FVYJPIyghO3ZJp&X-Amz-Signature=f00ed6251f79f9a37a35818ab94deab2aefb54cf5fdc457a41ae9f9f2922754f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQXCQK6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC3%2Bp88t61Kl1Y6aC3ggRNR4In%2FpXNp2KuXeGyqjQscugIgSHF1MVQwweJy5ZwfCWtM%2BWgFbRCC12m9h7I1xjEtF3cqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyNGs4DyYOgupcU5yrcA5KQsEgokIHqz52imB7%2BhJfoOPIAK7gkKl9lExQf3B%2BJ6lCToLvX0dp5mhZwq%2BajWMH1shDm%2FfS2tVWOA4KfUKUvK5CaIkVY8b59pay9SALFYcd9f8ZTUzDm45zXEgfoBEyy6pyFUYuph8Ri7eilBPOk9Y5qBbYkh%2FFAzUj1iSNPrVFyfXhPAW%2BWaGkKKXgnD1bcYVQ8D00NEui6UPzSk5qhYi6CZsrbEPcW9fF3%2Fm8F9e%2FNenXseX5OUuxX%2FSfe2AW4pjiMj%2FwKuoZ%2FAxa%2F2VylXsjpaUwGIMIe0gDDuQv2lo6IFdCSQVeGwIl5Mi%2FyqPlOOZcOjhP1QXJPo%2FdHjMieV6%2FbnvGgXGn9CCQ8jvsjaVeVpBk2E%2BREXYStrC810vdtveiGmb%2F9v1%2BqsfEmv1niEXmodTfNOsoZpnX1PPhkLxIclmWuVwfXJ%2BUTN8%2BajURWUhl%2FcrsakrKL2LHnh9gOnLp%2Bv%2BIkreIKkF0D2EncGL0a5WceUdSuhxz6yD177GslbgoHSJTa4BViuH%2Bw1SEB3pmm%2F3vgqtoxGk1c4zmLsoFytBesTHPhIFQwbLkzrEE7L%2FxBdrwAL4SU0%2FCJ%2BDX9XT2tLHYIjXAcVuYe3O%2FlPmLcUEzGFMPCX4SIMKOqnsAGOqUBcM3eJ2KDUawBsLWwuxtTWTcanCi1magfIpwAFg5EY37XLS8EQpWOC0liV1n6TXLW7uprpKvW%2B20baX644Dh8dl57RBOlnuy1ERxvOdxxKYxCuMvlxbCsGxFB6vQ2RE%2FEQqrqrM0auX4P2zDTFS73Zfy1ujNDkLCOstQpxes2dHVsYrzdHOjtQViU%2BHdczhDoAHyI73dS4KNsPW%2FVYJPIyghO3ZJp&X-Amz-Signature=af6055c77cb0d9ee8e4f7878de4f3013b93fe08e3b69f664fbdaf4ab5bb6b5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
