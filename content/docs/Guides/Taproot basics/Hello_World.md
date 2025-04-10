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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LQOEOA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIH2sHEGL5xalghBr8kw8jCKK4cc41vdMh1TD%2BmuRFJjVAiEA8X3w%2BPikbUWrz9iJbxTjtJttTFFWjFcsKimoNEaYajoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcBg4DU33liPE7aJyrcA2glWxpeur4ic%2BHOu8MWGGK3FILyUfKy9MSgaGYZJ2aHK28NAgxbFDb6C1fA9ff4n50ufLSl0GeKCFoNFE%2Bo%2ByO6DkvTaVXQlb4T8C679yrC51WBTQLT8X5oXbnte1Vx%2Btf8lcTokBQ5zGRw2s%2FHFBomv7a%2BD8ZRTx8HC84eTrzssyXxHLLVqMx2sMZdqOop2nnNx6J0cnZR1VxZo0X30CMPbCAyFkKZuAeEx%2FIeXK4oDCb4l4Df7qZARfJK0lvjSPFkdrUVJ9qvOIbq%2F%2Fucev4Wffr2hR2Cdqb3YdFgX1B69Sp%2FrOpJImMjiRs9logFJxklBlbM%2BVhiKYl6c%2FpmREfFLPaD5JuWzQ%2FzcaFqAk2oU1OWmSdLfjr2H1eg6tzNnZV5RHFX%2ByFrcw7cAKgtL06N7fCwVDuu%2Fpr2eyAtGbwcfPMJilr4z%2B5Kr8QXl6QwsXSizyjVzI1PdBLa%2BwybA7SJl8YfA9%2FRbGd8a2V9r2BP5qaOf7OZyQfHD5SJCJFXEUYzw2rkrtfuJTlb6h0qcmZ8OZKFwo0VlSh19Sg%2FzyE%2F4Hv5wk0L1BenmSa9NGU1hA3prk30dyyQ8pGGGrgfibvdX9qrQCByG47rlMeYB0%2BJ7DJjMQ6w7b1X1FDsMJyh4L8GOqUB7F%2FITZCxeBv%2FitRKV0yjzZZH9qJQJFbTSIh3usyrQo%2Fi5qBcxeqQhuny3ud8lrx9wJRQQqK0NG6B%2FwA6pSE7vkXNrNMXEW1RNsZrnf1LjUtdNT1Tw%2BkOVxo5P1m22MpCX3ccEQl9CvUsDXBIFGtNKMM7zdUvXHkwcIr%2F7lGLrn59KrfPg8W6yLHqfp7qHnnPsXx1It9GpHoRufs5ZR44Bwlq391v&X-Amz-Signature=0383562c056e8b4a23c34daa82d06f31e239611cefb3a47680356925b735fc29&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LQOEOA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIH2sHEGL5xalghBr8kw8jCKK4cc41vdMh1TD%2BmuRFJjVAiEA8X3w%2BPikbUWrz9iJbxTjtJttTFFWjFcsKimoNEaYajoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcBg4DU33liPE7aJyrcA2glWxpeur4ic%2BHOu8MWGGK3FILyUfKy9MSgaGYZJ2aHK28NAgxbFDb6C1fA9ff4n50ufLSl0GeKCFoNFE%2Bo%2ByO6DkvTaVXQlb4T8C679yrC51WBTQLT8X5oXbnte1Vx%2Btf8lcTokBQ5zGRw2s%2FHFBomv7a%2BD8ZRTx8HC84eTrzssyXxHLLVqMx2sMZdqOop2nnNx6J0cnZR1VxZo0X30CMPbCAyFkKZuAeEx%2FIeXK4oDCb4l4Df7qZARfJK0lvjSPFkdrUVJ9qvOIbq%2F%2Fucev4Wffr2hR2Cdqb3YdFgX1B69Sp%2FrOpJImMjiRs9logFJxklBlbM%2BVhiKYl6c%2FpmREfFLPaD5JuWzQ%2FzcaFqAk2oU1OWmSdLfjr2H1eg6tzNnZV5RHFX%2ByFrcw7cAKgtL06N7fCwVDuu%2Fpr2eyAtGbwcfPMJilr4z%2B5Kr8QXl6QwsXSizyjVzI1PdBLa%2BwybA7SJl8YfA9%2FRbGd8a2V9r2BP5qaOf7OZyQfHD5SJCJFXEUYzw2rkrtfuJTlb6h0qcmZ8OZKFwo0VlSh19Sg%2FzyE%2F4Hv5wk0L1BenmSa9NGU1hA3prk30dyyQ8pGGGrgfibvdX9qrQCByG47rlMeYB0%2BJ7DJjMQ6w7b1X1FDsMJyh4L8GOqUB7F%2FITZCxeBv%2FitRKV0yjzZZH9qJQJFbTSIh3usyrQo%2Fi5qBcxeqQhuny3ud8lrx9wJRQQqK0NG6B%2FwA6pSE7vkXNrNMXEW1RNsZrnf1LjUtdNT1Tw%2BkOVxo5P1m22MpCX3ccEQl9CvUsDXBIFGtNKMM7zdUvXHkwcIr%2F7lGLrn59KrfPg8W6yLHqfp7qHnnPsXx1It9GpHoRufs5ZR44Bwlq391v&X-Amz-Signature=75837f5f740a1593106258755ff3c51da2164d8d96779868441931d24bfc9f77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
