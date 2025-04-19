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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPP4HP3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xIpkwtCAEP5QV573GZ4LsBuD0EasCiyFMztKrD0WjAIgXNwhYH1%2FQ1IgbGA%2BI0UNMXK4%2FEq%2F1k1Zjy4w2y3K10cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL31azR7CsM%2FjdHWeyrcA8vMlD6o%2BGMD5Ni%2FWh52Rs%2FiBd1l9pBPYijL%2FRjzc0tf8Dltn15Vy5hhU8uvbSYH%2FPV%2BQTd8xHn8bdeldNDoYFjQer2eWXo%2BY%2FyVAcaXOrkRTvnBPdIiFB3htriaN55APnOkEXGIvOxReg%2Faxf8L8LLrohNYWNc%2FtJnxIz68u7LIkiMZqHKc681jd3z3EQXNTEY5ulAeTR4XDGeKlimicQyfyx4O9XKNyiblB2R59ss4uftt4dYyLlTOAKf9ukOMahsx61oc2Dr9ztlZdHe%2FPt6B1kwNx5jS7cjFihoCDmggM2UP7i7eDy11VQcj45MA4KdiXZMR42a6GIiTkkW9jUVMPn%2Fzy2l0%2B8d66T3roxMerJ9%2Bb7FXEuZSfYyIICe%2FoDuBCqyOedawi68o7MiNR0ipTfLZqAixny%2FDglJwamNjlN33KraD31gv9NiNu5FGyGHfan9lgCQnHGfLIpKNvgSQjfGuDGYxfa9GI%2BETCX1w4Mvos8heHulQmiBUzKK2rWdw9%2F%2F2hZ2BTmqSv3MJZ8XVCUJ%2BUza7IKsldgnIR47rUQj3CdwrXboMvaWqy8yIgeCqKY0EY%2FkrhpNg6ZmHgRGwp19XaVw3RYv34res9cCWH2VsJzwXHcAGFQdiMMH8jMAGOqUBZzqSKaNjMqwfUyUdawJXOVGRqkAn%2BlzvrrOiLMZzyE06RGcl2QinUVZHG5I22%2BXKl8elUth4tZIKBauQ8xUfCGp1GwpEqTfyiWKEU%2BmIHDO7BRg6vkXPPM9n%2BlXFYsK5NuU4OXo358UC7K%2B75jXtBApgeg0%2Fd%2BHWAXzXFfXq7TVi6vaMvs%2FfNxw0R6J5bzkeDHgJ4w4VDlEErm51Jq7QKcdiAr94&X-Amz-Signature=f42ba74802810999ec97760818761c8269730168d57043c989342e9f4d8df042&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPP4HP3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xIpkwtCAEP5QV573GZ4LsBuD0EasCiyFMztKrD0WjAIgXNwhYH1%2FQ1IgbGA%2BI0UNMXK4%2FEq%2F1k1Zjy4w2y3K10cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL31azR7CsM%2FjdHWeyrcA8vMlD6o%2BGMD5Ni%2FWh52Rs%2FiBd1l9pBPYijL%2FRjzc0tf8Dltn15Vy5hhU8uvbSYH%2FPV%2BQTd8xHn8bdeldNDoYFjQer2eWXo%2BY%2FyVAcaXOrkRTvnBPdIiFB3htriaN55APnOkEXGIvOxReg%2Faxf8L8LLrohNYWNc%2FtJnxIz68u7LIkiMZqHKc681jd3z3EQXNTEY5ulAeTR4XDGeKlimicQyfyx4O9XKNyiblB2R59ss4uftt4dYyLlTOAKf9ukOMahsx61oc2Dr9ztlZdHe%2FPt6B1kwNx5jS7cjFihoCDmggM2UP7i7eDy11VQcj45MA4KdiXZMR42a6GIiTkkW9jUVMPn%2Fzy2l0%2B8d66T3roxMerJ9%2Bb7FXEuZSfYyIICe%2FoDuBCqyOedawi68o7MiNR0ipTfLZqAixny%2FDglJwamNjlN33KraD31gv9NiNu5FGyGHfan9lgCQnHGfLIpKNvgSQjfGuDGYxfa9GI%2BETCX1w4Mvos8heHulQmiBUzKK2rWdw9%2F%2F2hZ2BTmqSv3MJZ8XVCUJ%2BUza7IKsldgnIR47rUQj3CdwrXboMvaWqy8yIgeCqKY0EY%2FkrhpNg6ZmHgRGwp19XaVw3RYv34res9cCWH2VsJzwXHcAGFQdiMMH8jMAGOqUBZzqSKaNjMqwfUyUdawJXOVGRqkAn%2BlzvrrOiLMZzyE06RGcl2QinUVZHG5I22%2BXKl8elUth4tZIKBauQ8xUfCGp1GwpEqTfyiWKEU%2BmIHDO7BRg6vkXPPM9n%2BlXFYsK5NuU4OXo358UC7K%2B75jXtBApgeg0%2Fd%2BHWAXzXFfXq7TVi6vaMvs%2FfNxw0R6J5bzkeDHgJ4w4VDlEErm51Jq7QKcdiAr94&X-Amz-Signature=d807844c38a57099f985344fc4bb4f111ae91e95d946411371c40dda7e8dd82a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
