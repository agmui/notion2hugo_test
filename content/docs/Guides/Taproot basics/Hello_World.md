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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQGPKWD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCf0HH3f%2BxpwZpdKvtap4M1qfyBwwYFuDU4Fr5FtG%2FLxAIhAKXHftF3%2FwvSiqmC3LHOk6ha6gcngyMToGrxUdpNfcI%2BKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc1Nep4lfj2l9revwq3ANPgzeKcSIH%2FMoktqcqLOl0oCiDK9BItfGxOiyZh98%2BwnWbkF3j7S2AxNG1nYPVstjoN9ysb64gwU6LeGDtGpPggq2DFLJufn4G59CiL1I8Ql79a2gykxj%2FRaFnTBGfpLypw60FZDy1z8oof%2B2HB4jX04Avz7%2FeKa0PKbush%2FebFCGk8V6MFOStRsfstWYZh2r0ijaK3IOg%2FpfIFFpDHNAHoGlVp5Y3KllZDJx6qLHW5cMCkNR5%2BV58kwhZ6OKsmrDflvS6K8lJ4Nuua4BKJhlSVODjfyIifsSdZgKwFH0J%2B0P9MITU6joA7TTmamnYqhZseq%2B%2FzJnN%2BcgpY6quascj93H%2ByWrUL1sVKABGx7xW94tjFEJNXvFOB%2B5SoJMzdSXnCYlR9Zqu8LL8XjEjp6hjN1gjxMoX2KO8TCoFvL%2BPcG3CGh6A%2Fzt0Ghti6TDAu%2Fhf%2Fi9QagcNEVH%2F9NIUmrCOUkA4T2GeEeX2Kt2KrMUxEJ3m6OqaO9RnG%2FFzVfPV2OjH6POl0ZfeXO4yZgD%2FdszXY%2B7UWLq4ooKAqsFK44uiA2D2xdkvqg3u%2F7iQkBLtGqJC3%2Bh4sZoSq%2BlYhKzr5G4l%2Bn%2BNGwDAImCry%2BTLUzZ7XSu%2BA93oL%2FtdIFX6iTDc9MnABjqkAY5GnYvynA91rSx2xI7zsKK2vQxvit0hjFOXxYuiPdyCEovGuZNjA5xxtyINRUvMpH6kyCMHN78rV2UzvsJu4UNiiAYDoJYp5fYF%2FTYUuYmIglw3Xb%2BU20arIAOGlHLc9wNt%2BnbgPdPlt4%2B3wbj5TPJJGcR6H4VQWacugrw8tUlGIwitkIIdB%2FztSh1aL%2F1KiAdvqU8q9sAH%2FgaLuxtWtmWlyus5&X-Amz-Signature=558543dbad39c88dc8666e07b6012f2a3f9623bddd75d504f293d4566d15f1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQGPKWD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCf0HH3f%2BxpwZpdKvtap4M1qfyBwwYFuDU4Fr5FtG%2FLxAIhAKXHftF3%2FwvSiqmC3LHOk6ha6gcngyMToGrxUdpNfcI%2BKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc1Nep4lfj2l9revwq3ANPgzeKcSIH%2FMoktqcqLOl0oCiDK9BItfGxOiyZh98%2BwnWbkF3j7S2AxNG1nYPVstjoN9ysb64gwU6LeGDtGpPggq2DFLJufn4G59CiL1I8Ql79a2gykxj%2FRaFnTBGfpLypw60FZDy1z8oof%2B2HB4jX04Avz7%2FeKa0PKbush%2FebFCGk8V6MFOStRsfstWYZh2r0ijaK3IOg%2FpfIFFpDHNAHoGlVp5Y3KllZDJx6qLHW5cMCkNR5%2BV58kwhZ6OKsmrDflvS6K8lJ4Nuua4BKJhlSVODjfyIifsSdZgKwFH0J%2B0P9MITU6joA7TTmamnYqhZseq%2B%2FzJnN%2BcgpY6quascj93H%2ByWrUL1sVKABGx7xW94tjFEJNXvFOB%2B5SoJMzdSXnCYlR9Zqu8LL8XjEjp6hjN1gjxMoX2KO8TCoFvL%2BPcG3CGh6A%2Fzt0Ghti6TDAu%2Fhf%2Fi9QagcNEVH%2F9NIUmrCOUkA4T2GeEeX2Kt2KrMUxEJ3m6OqaO9RnG%2FFzVfPV2OjH6POl0ZfeXO4yZgD%2FdszXY%2B7UWLq4ooKAqsFK44uiA2D2xdkvqg3u%2F7iQkBLtGqJC3%2Bh4sZoSq%2BlYhKzr5G4l%2Bn%2BNGwDAImCry%2BTLUzZ7XSu%2BA93oL%2FtdIFX6iTDc9MnABjqkAY5GnYvynA91rSx2xI7zsKK2vQxvit0hjFOXxYuiPdyCEovGuZNjA5xxtyINRUvMpH6kyCMHN78rV2UzvsJu4UNiiAYDoJYp5fYF%2FTYUuYmIglw3Xb%2BU20arIAOGlHLc9wNt%2BnbgPdPlt4%2B3wbj5TPJJGcR6H4VQWacugrw8tUlGIwitkIIdB%2FztSh1aL%2F1KiAdvqU8q9sAH%2FgaLuxtWtmWlyus5&X-Amz-Signature=6ed599c90a96769b6d096d362d80ed1f7fa75a294f7a993be370dbf47fbe10e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
