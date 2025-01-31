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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFSRDLV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC50YRUX81LT3Jx%2BZcU17%2Fq5HqetrcGJ7b6fmanCmsuzQIge6BBgf2joUgQ5bqp%2FjILHwEfu2oB%2Be414WsdoAFDRyQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpN8hcaEKHOZ0d2circA1xxnsCIHNZf%2FwKg9YQoMnwD7h0MOd9hc4LMygE5VNKWdKeTodTuQYwC1kHQfs64D9IGDqsT2cN2g6wEs1dhEKlPyIv6kKxVGAM%2BlxboYQumPilsz57zvVsE%2B9Pvx3j%2FElWqS4dHtHmJ%2BFAmCmh38MDbpioZQpiIgTiVvS5dYRr%2BnaUjors9YD8gZ7VGyb6Kkpe4drfBIfquQbyk8tPDpgX%2FNaH5UauaicgWhGqv1Ej95CxOeb6jpHHyhJ4t9vXn6CRO1Ejtd2jmbtH5cC%2FCJUlm6fTvFBEzNYAnTZjgyswzAFK2Gc5VNOow25NG1O6TcCd%2B1BploO%2FDVNcovvtbVStq5RYO7QT8bQxzW4kTkth6HGreT6GT1XsAMOymRxVgLgQO7OG0xEWcFCBgdXPdfOYsDhhymKslIhINx%2Fl17ONq8XUMzkrxN0BjhxRdiDq5j4IAXgIeo3rj89bXFvWuwnMriDNdE5av%2BoL0zjhtvW0ERZjmWvXnpHmK%2FWBgU3Piq1Xsc9WQTdXpEAYEBnTQ2M5xDeSY%2B7q%2FR4Fy5eF23SVfSR5lasy14Eu08kT64QBdYXnX4xk0o2LlCf1bvTCCispy4cbehZi19Iufx8oVwMar6f6ctNLMYk9j5v4aMJbS8LwGOqUB8mdfkegu9lmoIXd4UjAmznJgIHp47d9ZkJjByXA8J61jIMKwnSSSrJpOmd1zrNBWy%2BzyzkMQ%2BR0QaPe64frwsHrR6gtwVUrp11%2FW3Z4cg0NsovqLWIjHVgJE%2FE4k353M%2Fr2cE8wReqv1%2FgOXS%2FHbsFpRIHRkCY%2BLq21XNw4T3RUZHiQh97KJnXpe34AE5ByKcPVxkyNDl%2FBu%2FYdp9kQGfiFFVuX%2B&X-Amz-Signature=de164a225d28e53acb34ecd103f8cbcbee7b229058baef176c853b587a9143a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFSRDLV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC50YRUX81LT3Jx%2BZcU17%2Fq5HqetrcGJ7b6fmanCmsuzQIge6BBgf2joUgQ5bqp%2FjILHwEfu2oB%2Be414WsdoAFDRyQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpN8hcaEKHOZ0d2circA1xxnsCIHNZf%2FwKg9YQoMnwD7h0MOd9hc4LMygE5VNKWdKeTodTuQYwC1kHQfs64D9IGDqsT2cN2g6wEs1dhEKlPyIv6kKxVGAM%2BlxboYQumPilsz57zvVsE%2B9Pvx3j%2FElWqS4dHtHmJ%2BFAmCmh38MDbpioZQpiIgTiVvS5dYRr%2BnaUjors9YD8gZ7VGyb6Kkpe4drfBIfquQbyk8tPDpgX%2FNaH5UauaicgWhGqv1Ej95CxOeb6jpHHyhJ4t9vXn6CRO1Ejtd2jmbtH5cC%2FCJUlm6fTvFBEzNYAnTZjgyswzAFK2Gc5VNOow25NG1O6TcCd%2B1BploO%2FDVNcovvtbVStq5RYO7QT8bQxzW4kTkth6HGreT6GT1XsAMOymRxVgLgQO7OG0xEWcFCBgdXPdfOYsDhhymKslIhINx%2Fl17ONq8XUMzkrxN0BjhxRdiDq5j4IAXgIeo3rj89bXFvWuwnMriDNdE5av%2BoL0zjhtvW0ERZjmWvXnpHmK%2FWBgU3Piq1Xsc9WQTdXpEAYEBnTQ2M5xDeSY%2B7q%2FR4Fy5eF23SVfSR5lasy14Eu08kT64QBdYXnX4xk0o2LlCf1bvTCCispy4cbehZi19Iufx8oVwMar6f6ctNLMYk9j5v4aMJbS8LwGOqUB8mdfkegu9lmoIXd4UjAmznJgIHp47d9ZkJjByXA8J61jIMKwnSSSrJpOmd1zrNBWy%2BzyzkMQ%2BR0QaPe64frwsHrR6gtwVUrp11%2FW3Z4cg0NsovqLWIjHVgJE%2FE4k353M%2Fr2cE8wReqv1%2FgOXS%2FHbsFpRIHRkCY%2BLq21XNw4T3RUZHiQh97KJnXpe34AE5ByKcPVxkyNDl%2FBu%2FYdp9kQGfiFFVuX%2B&X-Amz-Signature=17e62877ee0ac57637ced448210f519d803057ee9c30c5ba7cd37b04dbdf4907&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
