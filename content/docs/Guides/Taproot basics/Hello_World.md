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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7MWZUA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbQsz%2BIyTf%2BYmv5hTpjROWxsilRpNlf%2BvAE2VBpobW7QIgIyVj7MqvsWtgi4zFwQ2eI0dbmlJ1Q8gDJHckvN4sRSgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZto42a1ls5St1L6SrcA5oDD35N%2BOUxOeKUcG25UO6uN%2By1oHepUTz0Ig0TwuRmFMEUTJHkv2D06wgSmbB9Rg6YMK4mswsgTzydapCRG96W5B1eNnlDUaZ%2BRu4gqu%2FMBT0iLGWvvEZH7FFo4GlLn7pO1aoQXrkfizCJ3f1m%2BB2sfq%2BjmAlgH%2BDEh20aTQYHSQ1g2PQqZUiTqW%2FzsSXdDE73wG1Oe%2FeZFuntV00VUI8Ue%2Fo6dW79FHEJ%2FZ%2FgBVPh4o8qem0A8O7%2BfqRsdMGOBwDo2pWwyQafcZI9qkCVNCfg0wM%2FOjcgua6obTmR1ZXAfGWR67HzgE1RL4iUztsY09N59AALfGBASRVRaQyjbcC%2B9A0W%2FCoDicLunbBEjIwhGyWC0i2i8MeQgyyzQTc3EMpMv%2BQsc%2F8ZSE1DcFgLJCfYrcnKvIOSSLJoaXJTkXCaKTHO9auH5ksy7fLDrVQgMyIVCqCLuH%2ByxQGmkBoT69AHQx7LUAxibH3SSdyrkuYHn9hhNCe6DB08D1txAEg2fv4jXgEtVaaRv6yoHpL03ZyfJGtR21vGIa9iwcc%2FgdSd144OILAhmJG%2Bf8OnzKkLm8Px2LSKFfwVTkzWy9vnbiHCPaipTUFM7MJy2MBpdiNu0JJzj5kdV3scd2FZMKewhb4GOqUBol4hUbmRIHoPj1OCYny2IIeoHxUbjVsyja2vLbDi5vtEZ8CiJjy4okODXo2MF9O3aq%2FyfpItVC3RsQC8INylbOQqCT0WixHBy2lfly6CuOc2uSD32SvcuGvo2B7llIwNzVCN2IE2Ln4VgEzHnqnJaBQsIMRv1v1GHR4TnSuvkGyZ2Xda3gm90vhsaR8mvXno8tZVQn1RYNzgsJuPumYoZ%2BiOS9xr&X-Amz-Signature=9189ce6eba2574eb9166f7735984d87e95db51e43d2f64eecae845feb1a13367&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7MWZUA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbQsz%2BIyTf%2BYmv5hTpjROWxsilRpNlf%2BvAE2VBpobW7QIgIyVj7MqvsWtgi4zFwQ2eI0dbmlJ1Q8gDJHckvN4sRSgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZto42a1ls5St1L6SrcA5oDD35N%2BOUxOeKUcG25UO6uN%2By1oHepUTz0Ig0TwuRmFMEUTJHkv2D06wgSmbB9Rg6YMK4mswsgTzydapCRG96W5B1eNnlDUaZ%2BRu4gqu%2FMBT0iLGWvvEZH7FFo4GlLn7pO1aoQXrkfizCJ3f1m%2BB2sfq%2BjmAlgH%2BDEh20aTQYHSQ1g2PQqZUiTqW%2FzsSXdDE73wG1Oe%2FeZFuntV00VUI8Ue%2Fo6dW79FHEJ%2FZ%2FgBVPh4o8qem0A8O7%2BfqRsdMGOBwDo2pWwyQafcZI9qkCVNCfg0wM%2FOjcgua6obTmR1ZXAfGWR67HzgE1RL4iUztsY09N59AALfGBASRVRaQyjbcC%2B9A0W%2FCoDicLunbBEjIwhGyWC0i2i8MeQgyyzQTc3EMpMv%2BQsc%2F8ZSE1DcFgLJCfYrcnKvIOSSLJoaXJTkXCaKTHO9auH5ksy7fLDrVQgMyIVCqCLuH%2ByxQGmkBoT69AHQx7LUAxibH3SSdyrkuYHn9hhNCe6DB08D1txAEg2fv4jXgEtVaaRv6yoHpL03ZyfJGtR21vGIa9iwcc%2FgdSd144OILAhmJG%2Bf8OnzKkLm8Px2LSKFfwVTkzWy9vnbiHCPaipTUFM7MJy2MBpdiNu0JJzj5kdV3scd2FZMKewhb4GOqUBol4hUbmRIHoPj1OCYny2IIeoHxUbjVsyja2vLbDi5vtEZ8CiJjy4okODXo2MF9O3aq%2FyfpItVC3RsQC8INylbOQqCT0WixHBy2lfly6CuOc2uSD32SvcuGvo2B7llIwNzVCN2IE2Ln4VgEzHnqnJaBQsIMRv1v1GHR4TnSuvkGyZ2Xda3gm90vhsaR8mvXno8tZVQn1RYNzgsJuPumYoZ%2BiOS9xr&X-Amz-Signature=6a1ed24b42d5063ba5188952d6afd4e165fb0f7202b88f4c990c40fbf388408b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
