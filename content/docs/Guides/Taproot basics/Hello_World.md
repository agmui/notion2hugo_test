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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGMAIUJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDoZ1SNnf6KSjaH2NelrMoragbr5pspPYjs%2FzZjYc8DgAiEAu7K3na4QNxljZiQOr%2F4Khah2Advp%2BLBHmH9WO3dbeaQq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIrhKS1nze2eBjVvgircAzdk005Idt1XMbyoY%2FLzPiksuI6IrgE9NfbD%2FKBinB2pH%2Bw82Wu5kp8dZsc%2BcDxhuXe13y7cCI5K18H5ezU4fsKoil6Em6dRvtAye80rPTKzlC34wvIlFyO8WaTzP%2Fb6w8AC6%2FqWaIZ48wALb%2BogZkaJkh2tt%2FT%2BxoPUmxNmQdHJKgmkbsAn5zkrrLOyF0fdS%2FCtMokDPeII3rfQt2%2BO%2FGEPiRCE7ocMRSFAJ7kQUsQC9YXNxNrYhZXlHWEZARdxnG32eRQwpiacY9eBE313dR8dHAXl0Ybd3ewp9Cw%2ByZB4yRATeO6CnR8VymG%2FUnxoVAXfQjC3h3z1DvfuIFKfRpCoJ%2BwDNHgjU2dpVc49CBkFd8dHX5LfMdEdDLudg6OPvMu2VjdJl7KKfi5ymbbXl6Znlj0xnS4xfuyviyST0xNR8OCBK6WCtr%2BVPPQ80B9DyaRf2NroEyjmPRB0%2BUETxK7zkhkitkqGXygkCeEo7CYLsF91ZvSPf3LVq8s3%2FnCFVi3G1W9AxjP2%2FTVstaZDRlPPn62Tr8rf00IYiub1awm5Lkdr7lhQoGT2ep10I3yjO%2F2pGvpmSgkX6BR05O8h4%2FAgf1Y%2FxKiU5IsP4e0h4w2e%2BR0EQV0yk%2F9P9dBDMKbpp8AGOqUBUaM77NatImT2khrSwoJHKh2ICZT4vkjHBFwtKStaHUNarHX2jIEK0aBPLd05ep0XavZ2MIr0EtHWO7yUs2bq1qXuJXenx60y8kfpYVTLpfhxMXzUrtuBmw9byodNGnuSIbsDMdAvOec9KsF%2BrxDy8z3xZrUA8EXEitGfn0Q7CF8G6i58exYPbOXlmYk8bKXXyLXeu2x0k0zK8lXnkx%2Fw8k%2BazLlP&X-Amz-Signature=c2152818ad3723ffe76c13c1d45e63a54ed5ce8d59372f2783ea8e927895a3e4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGMAIUJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDoZ1SNnf6KSjaH2NelrMoragbr5pspPYjs%2FzZjYc8DgAiEAu7K3na4QNxljZiQOr%2F4Khah2Advp%2BLBHmH9WO3dbeaQq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIrhKS1nze2eBjVvgircAzdk005Idt1XMbyoY%2FLzPiksuI6IrgE9NfbD%2FKBinB2pH%2Bw82Wu5kp8dZsc%2BcDxhuXe13y7cCI5K18H5ezU4fsKoil6Em6dRvtAye80rPTKzlC34wvIlFyO8WaTzP%2Fb6w8AC6%2FqWaIZ48wALb%2BogZkaJkh2tt%2FT%2BxoPUmxNmQdHJKgmkbsAn5zkrrLOyF0fdS%2FCtMokDPeII3rfQt2%2BO%2FGEPiRCE7ocMRSFAJ7kQUsQC9YXNxNrYhZXlHWEZARdxnG32eRQwpiacY9eBE313dR8dHAXl0Ybd3ewp9Cw%2ByZB4yRATeO6CnR8VymG%2FUnxoVAXfQjC3h3z1DvfuIFKfRpCoJ%2BwDNHgjU2dpVc49CBkFd8dHX5LfMdEdDLudg6OPvMu2VjdJl7KKfi5ymbbXl6Znlj0xnS4xfuyviyST0xNR8OCBK6WCtr%2BVPPQ80B9DyaRf2NroEyjmPRB0%2BUETxK7zkhkitkqGXygkCeEo7CYLsF91ZvSPf3LVq8s3%2FnCFVi3G1W9AxjP2%2FTVstaZDRlPPn62Tr8rf00IYiub1awm5Lkdr7lhQoGT2ep10I3yjO%2F2pGvpmSgkX6BR05O8h4%2FAgf1Y%2FxKiU5IsP4e0h4w2e%2BR0EQV0yk%2F9P9dBDMKbpp8AGOqUBUaM77NatImT2khrSwoJHKh2ICZT4vkjHBFwtKStaHUNarHX2jIEK0aBPLd05ep0XavZ2MIr0EtHWO7yUs2bq1qXuJXenx60y8kfpYVTLpfhxMXzUrtuBmw9byodNGnuSIbsDMdAvOec9KsF%2BrxDy8z3xZrUA8EXEitGfn0Q7CF8G6i58exYPbOXlmYk8bKXXyLXeu2x0k0zK8lXnkx%2Fw8k%2BazLlP&X-Amz-Signature=a7d95a922fea6f3565e050550bfa7aad73af420c305730d2c1eacdf34212f673&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
