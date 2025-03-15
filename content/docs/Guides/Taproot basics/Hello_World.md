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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFZZWI6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsoUlWeCY%2BlmG7N93ILdriQ%2BP%2FX5Qq8NIZruaJ2bjfTAiA0qUrqpWrarPrCqjrNDq45HMZhB%2F9%2FcGY43w9ZnGlt8Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMDJuC5uzO4lxZs%2B4dKtwDsE2RTdm6W36ZqAuUdUq3NGYs0ggquw5cOW2OC7tGHw5LRnG01Y92X0RgOOQoyuemc2%2FcSPuErlSxDJfsbH%2FfDo4CGIvvOG88XolVdXr1XYvDql7%2Fg3Q3mkaEL2YlRSJQissZbI4Q2R15p7dyiTLLNOYrr9ociPdRH2ODT9vE6lXhZJEefywPaJPZQXDbCoeCQO2Nf71El2mg0Gz7p2tssfbht78eKPIpXpcnxMM%2FuFRl6LG0my0GnscrSPwRIqdnKpciSINRREceVI0jS2oXqRrUO5wHFt3BGEYNZj2gOpMQcOr%2BTlAfCEl8qI4gYMxu3rPR%2F2MEVz3KpB%2BCRK5Cpt3P7Gm0FjJ43bMrZIJHK7tQFQaCf%2FSgSR9vNzB96OjrLfVyz%2Fgxgrtcj7GufNOcDxhCvOcSL9Q7kOJE83FZDI2KyWFYUqrTB28nu1bOZcM1ZAMt5wAS1E8S3QGaOPNkA3qcVfyG7DrSXHq6gwettzIXOTrOj7hS2a7FHdLfe1aCZAPdV%2FzC9o7DXPtpwGZW4sFfAHQrkUGlZWOCNNafesCqRbPRgjZDk0yz5XbZGNAkZPs0U8aDWI113B2yijadlQbibv04PZ8AELj6XIXeB3vC5L0y6V3OoiXCjuIwzo3XvgY6pgF4HWiKN95YLuYo6QKadagAYy%2B7Z0ThEK%2Bfbc%2F1H8lcengwH1BaY32iFEdkgqSzw%2Fkhfi%2F797YyLPjwJtKQHQgsb4t4840AtAu2FAqe5li4i28Tj4KYBNDQhjkAjhXkXiELX9T6IPv1X1utiUFAccdeMobTSrxn5e6mSdxo8bsFY%2BomG7mPmpBndy6avL4KLo%2BdtrZDhb8seW%2FxiMEHinpXdaMquqD%2F&X-Amz-Signature=41189eadeff326c016a4dc83aad9ec7bbb40ff2bc11e35e79315eb15f4d0a544&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFZZWI6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsoUlWeCY%2BlmG7N93ILdriQ%2BP%2FX5Qq8NIZruaJ2bjfTAiA0qUrqpWrarPrCqjrNDq45HMZhB%2F9%2FcGY43w9ZnGlt8Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMDJuC5uzO4lxZs%2B4dKtwDsE2RTdm6W36ZqAuUdUq3NGYs0ggquw5cOW2OC7tGHw5LRnG01Y92X0RgOOQoyuemc2%2FcSPuErlSxDJfsbH%2FfDo4CGIvvOG88XolVdXr1XYvDql7%2Fg3Q3mkaEL2YlRSJQissZbI4Q2R15p7dyiTLLNOYrr9ociPdRH2ODT9vE6lXhZJEefywPaJPZQXDbCoeCQO2Nf71El2mg0Gz7p2tssfbht78eKPIpXpcnxMM%2FuFRl6LG0my0GnscrSPwRIqdnKpciSINRREceVI0jS2oXqRrUO5wHFt3BGEYNZj2gOpMQcOr%2BTlAfCEl8qI4gYMxu3rPR%2F2MEVz3KpB%2BCRK5Cpt3P7Gm0FjJ43bMrZIJHK7tQFQaCf%2FSgSR9vNzB96OjrLfVyz%2Fgxgrtcj7GufNOcDxhCvOcSL9Q7kOJE83FZDI2KyWFYUqrTB28nu1bOZcM1ZAMt5wAS1E8S3QGaOPNkA3qcVfyG7DrSXHq6gwettzIXOTrOj7hS2a7FHdLfe1aCZAPdV%2FzC9o7DXPtpwGZW4sFfAHQrkUGlZWOCNNafesCqRbPRgjZDk0yz5XbZGNAkZPs0U8aDWI113B2yijadlQbibv04PZ8AELj6XIXeB3vC5L0y6V3OoiXCjuIwzo3XvgY6pgF4HWiKN95YLuYo6QKadagAYy%2B7Z0ThEK%2Bfbc%2F1H8lcengwH1BaY32iFEdkgqSzw%2Fkhfi%2F797YyLPjwJtKQHQgsb4t4840AtAu2FAqe5li4i28Tj4KYBNDQhjkAjhXkXiELX9T6IPv1X1utiUFAccdeMobTSrxn5e6mSdxo8bsFY%2BomG7mPmpBndy6avL4KLo%2BdtrZDhb8seW%2FxiMEHinpXdaMquqD%2F&X-Amz-Signature=e74fd2fdb84c5034e8f70c57549307275b6ec6b3704c47ee379958cd0b9ad1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
