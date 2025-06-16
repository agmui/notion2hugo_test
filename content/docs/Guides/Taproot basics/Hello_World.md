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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAP22FYO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB51qIhwxbj0maIsixleP9x2sMds4zWe4nO%2FMsb%2FpPykAiEAoOzJZPic6Y1O59mac3bDsTEt2oH8zN1NMer%2FyKjHlgwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO9Iy0XXQ72mnxALrircA2MmEJpesXlmJyT47L0b8W3DbkWFik%2FfdMxp%2FXqcT6PVCv42xV90ol5x3gSK0FtjbVRnvIcFFKR%2BeXeh5lq1dDYZo9zK0yXIMYzsfXQ9PA3lXYCi7ewduCFpQwnkGRSTcgfLGpznVyQrwk0YBCG83a%2Bt4DEwQlPDbXwOeDx31%2FCXmKB1%2FoiFEuF6vSQQVaDjF27dcNugBDY0d%2FHm1czneqF%2FY888S0wrwCI6WCTjVj7bEI3Sg73%2FDz4Rc7aTMudbSlKiRk0qmRGgWrbM6E7eFLBe5yzpmYOLYDGfhmy%2B%2BFz2AVsN%2BHwbH%2FfY6ap%2BeKBpTe7yiGlfLdNSaChBwaMyGCOPkhVovBhodGxFOn5nVkZ6Naf3bLGTyuM%2F2bJxVk05roGPIMP9pfdg3Qp08pXl66yZfl6IqKgtKIgSBP5qouH%2FRIYdwdNBbwufxG8Pcj2qxy1QOrBGahZvXrq%2FsvkPjlydiqOVzYUIYT1xgmZgSeg0zgDWf3ZeDrTqYlrxLeLYwEY3jIkb%2BjXNupct0XDo4uz86j7jsz9AVGIFcN7c9lLQJwQojIQzILOwswckR08xEdgUAG5edRpEHSEyKMKXyFVvQh9v65oSNo6WXAHdqfzbiWJfb1eGekgFMoJiMI%2FIwMIGOqUBZ%2F9q8Ke%2BWVHY8ZCXK5gvfeiE5f%2BY6KUJhTTykIGVr9L3QpKMYonoBdG%2B5pFUA%2BHNR61ktXmf8c1PY%2FVcYJOWSMC%2FqxX3RTVnEjAfF7xW6u%2BD88SFwqE%2B2ej4nlf%2BVbTfGvEDyC5%2BunnxHKg6M7B5aw3c9MusjxFTwy%2F8VnmzMsH6mPOWLJxNs2NHKPJDVuKmBD%2Fjka6%2B9Qh6movip%2Fq%2F5fAhYYIV&X-Amz-Signature=a38de89b5403f52681bc858b4e9f4363c239159b5a88ad7c2b300815525ada8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAP22FYO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB51qIhwxbj0maIsixleP9x2sMds4zWe4nO%2FMsb%2FpPykAiEAoOzJZPic6Y1O59mac3bDsTEt2oH8zN1NMer%2FyKjHlgwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO9Iy0XXQ72mnxALrircA2MmEJpesXlmJyT47L0b8W3DbkWFik%2FfdMxp%2FXqcT6PVCv42xV90ol5x3gSK0FtjbVRnvIcFFKR%2BeXeh5lq1dDYZo9zK0yXIMYzsfXQ9PA3lXYCi7ewduCFpQwnkGRSTcgfLGpznVyQrwk0YBCG83a%2Bt4DEwQlPDbXwOeDx31%2FCXmKB1%2FoiFEuF6vSQQVaDjF27dcNugBDY0d%2FHm1czneqF%2FY888S0wrwCI6WCTjVj7bEI3Sg73%2FDz4Rc7aTMudbSlKiRk0qmRGgWrbM6E7eFLBe5yzpmYOLYDGfhmy%2B%2BFz2AVsN%2BHwbH%2FfY6ap%2BeKBpTe7yiGlfLdNSaChBwaMyGCOPkhVovBhodGxFOn5nVkZ6Naf3bLGTyuM%2F2bJxVk05roGPIMP9pfdg3Qp08pXl66yZfl6IqKgtKIgSBP5qouH%2FRIYdwdNBbwufxG8Pcj2qxy1QOrBGahZvXrq%2FsvkPjlydiqOVzYUIYT1xgmZgSeg0zgDWf3ZeDrTqYlrxLeLYwEY3jIkb%2BjXNupct0XDo4uz86j7jsz9AVGIFcN7c9lLQJwQojIQzILOwswckR08xEdgUAG5edRpEHSEyKMKXyFVvQh9v65oSNo6WXAHdqfzbiWJfb1eGekgFMoJiMI%2FIwMIGOqUBZ%2F9q8Ke%2BWVHY8ZCXK5gvfeiE5f%2BY6KUJhTTykIGVr9L3QpKMYonoBdG%2B5pFUA%2BHNR61ktXmf8c1PY%2FVcYJOWSMC%2FqxX3RTVnEjAfF7xW6u%2BD88SFwqE%2B2ej4nlf%2BVbTfGvEDyC5%2BunnxHKg6M7B5aw3c9MusjxFTwy%2F8VnmzMsH6mPOWLJxNs2NHKPJDVuKmBD%2Fjka6%2B9Qh6movip%2Fq%2F5fAhYYIV&X-Amz-Signature=0f78494bd202d0b512c934c60e3a41b42dc0295bfd9366abf8534b66c2d1cf29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
