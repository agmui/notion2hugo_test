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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLCNBQSU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ1JcGer0RZZeN1iShNYd0t%2FsDkAlcbT%2BnHf5rldWUhgIhAPfexXySXbhLwyG%2F2vDdoAZ2DAby4KnOusCaV07ooyVLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwloX6%2FKxojAb4C4ecq3AODFdyxAbs07G%2B5ADEiOBt2oXWZIg%2F%2Bip8i3bnLcCtjHQrTbOFUpov4kqsAqnFvobCm3ZC3JvJpYEbcCL7Wk7y03FlsYmn4OgXfcp2lTio%2BdCTOkWXPC96WVR5VNLYRyEtjQVDD3TDBoAaYsCL9sm7WbD%2FezT2PyTePaDhRmZu8kFoS7RaT29imAA20ztZ55pEC4EwC2lL1cRtMulRdsReLFSxQl1O08%2Fo1EPQAAoK6ef%2FHxBTSHi3IrS0gUlUeQ6RBPIrOierYi3IjhrtWE%2F6D6Baj8G20SOzI3S54xNnMLN4pWpW2AZwCQ3alZ6qUmjAASEiPP8hdQoTs3nnB0VGbcvPT%2FJw5eMXZVDxlgWYjwV1fx7lVgQJ2w%2FJQ79ECjzONIkuPUjL%2FbF4sMLZNrfwdJ6auT1IZ3lmPSspxpKK%2BWVNxxWsPQVAQBCfpwpRW5gj9taltxTJ%2F5VJj14m6H3rWM2dGg%2FUVL%2F9kh69JTPGLkLEcF1qF0HIzZ2vJNxbnGFonjocEDrbsMUzQWHLBAiBdadoyfth%2F1DPhGubH%2BlOBASsP6ZPqJdvMIcbt6bTlN9QKghUOEtT6IfCW3U%2BrgMVf%2F5ZoHzYPaYRwqT01%2FgL%2BpYHTxEzJVqNq%2Bc155jDWlLPDBjqkAY9F%2BmzzJclThVrs9TbaHYFFQEjbCBpHu2965iIUW7cGFnij7YNntZsXXgMBNm6Z4t6gGWVsPIwoYj4qRaZejYegXKfWhvQ79hRhXD%2B%2FAWj5k6pKFFrjBp0w6q44HlYYEHcocr%2Bx6pbyYSgKEvJnWhfD49j3Cbb5ov0cmKzmIlgr3dq%2FMtIOUfKAnm%2BrZfCboh7mvLaU9aW5hA1lTco2EGIQ9dGg&X-Amz-Signature=352b1ed6aa8e7bd1e49575ac03fd146b03780ddbe42e1bb2f0b3bc90ef85a225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLCNBQSU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ1JcGer0RZZeN1iShNYd0t%2FsDkAlcbT%2BnHf5rldWUhgIhAPfexXySXbhLwyG%2F2vDdoAZ2DAby4KnOusCaV07ooyVLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwloX6%2FKxojAb4C4ecq3AODFdyxAbs07G%2B5ADEiOBt2oXWZIg%2F%2Bip8i3bnLcCtjHQrTbOFUpov4kqsAqnFvobCm3ZC3JvJpYEbcCL7Wk7y03FlsYmn4OgXfcp2lTio%2BdCTOkWXPC96WVR5VNLYRyEtjQVDD3TDBoAaYsCL9sm7WbD%2FezT2PyTePaDhRmZu8kFoS7RaT29imAA20ztZ55pEC4EwC2lL1cRtMulRdsReLFSxQl1O08%2Fo1EPQAAoK6ef%2FHxBTSHi3IrS0gUlUeQ6RBPIrOierYi3IjhrtWE%2F6D6Baj8G20SOzI3S54xNnMLN4pWpW2AZwCQ3alZ6qUmjAASEiPP8hdQoTs3nnB0VGbcvPT%2FJw5eMXZVDxlgWYjwV1fx7lVgQJ2w%2FJQ79ECjzONIkuPUjL%2FbF4sMLZNrfwdJ6auT1IZ3lmPSspxpKK%2BWVNxxWsPQVAQBCfpwpRW5gj9taltxTJ%2F5VJj14m6H3rWM2dGg%2FUVL%2F9kh69JTPGLkLEcF1qF0HIzZ2vJNxbnGFonjocEDrbsMUzQWHLBAiBdadoyfth%2F1DPhGubH%2BlOBASsP6ZPqJdvMIcbt6bTlN9QKghUOEtT6IfCW3U%2BrgMVf%2F5ZoHzYPaYRwqT01%2FgL%2BpYHTxEzJVqNq%2Bc155jDWlLPDBjqkAY9F%2BmzzJclThVrs9TbaHYFFQEjbCBpHu2965iIUW7cGFnij7YNntZsXXgMBNm6Z4t6gGWVsPIwoYj4qRaZejYegXKfWhvQ79hRhXD%2B%2FAWj5k6pKFFrjBp0w6q44HlYYEHcocr%2Bx6pbyYSgKEvJnWhfD49j3Cbb5ov0cmKzmIlgr3dq%2FMtIOUfKAnm%2BrZfCboh7mvLaU9aW5hA1lTco2EGIQ9dGg&X-Amz-Signature=40b14c66665e777a2cd2f35e448a57af6193ac04d32bfd34dec9b30531adf0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
