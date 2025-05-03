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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EIHQD2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCjSXppuKTXHEVAmY7jvRSMj4FRgzkqFZJfST7%2BYVtkzwIgQq9Xo8RpZEX953M1pHFLBP%2FTlFdITQMJ82gTW92gSYcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmoKPnWQCtbWW9l5SrcA6pd2GIBvvWWMNWcHjXvPAvvu%2FHq6MxMEMtVkVn2x5G59BRsBmusippfCPxdIr1DdojKUesCB1hVdkzs18p8UGGY0q2S%2FklS1hJlvKlwsqt%2F5RStfe1xZlG1pET31zNrePfW57fuu7XQfBByh6bL2N8Gc69hXbgRCUOAuUj%2FFGdgci9%2Ft5POeM0ozHXKMSpFCzFfJdIVIWJLrExozfqgqBpjqMtHh1qn4RtCeJ8JhkeDlNBWdNuKq8JTFxb59%2B9tMEPvR%2F2%2BVHqtetEBn8a95EIPEG0di1thdV4Ate0yBcuf7GyPzFT4AzAyw%2F1aZztCRefEYDG8Xy%2B5MC4yFczR1K8%2FvPiAV0uHOJq%2BjRZqkEqBGAubsg56su1MkSsVezJmnSlPEQvzqsg3b54BIBGGUqWZDLqmZiT9TBn1stiKoqlqtZ%2F6EKsJTxJ%2FZU5dmkpiwhx4Ys5W8tQabnswF1jQ%2BJc3YVhdPnmsAHaNBaFq9P3QNhYU0glC1boLoIN5Jx1aIdcrK2MFFUx66xmUbO3Eh7hvmi%2FvoBhrPo%2B327H73rx%2FoyZKFVfcBovUEjUe0ePlo%2B%2FV8p2Ys9k%2Bv7bns8AvZPrOzABDeyoZJisAyBdRZQX%2FEWFXfHpzHowSYXC3MKje18AGOqUBo7Y1680z2izpuCR8hRwNUkosL800QyA6%2FcXjNTuAoytyYh%2FTvWlGL1RDUvEYxxmH3mn51UXqfuVMJnTMdztC%2BA%2B35jXv4LWbipKtaeGowZ%2FDuaXFiGGhk4VkDEtq777heHzur%2FPhqnDYfo5iFLzYVA05HzDZVAvPH08%2Brhm5VlH2pH%2BYw6X1Ord2NT5Jz7wF4WswMgNJJewTbrcz77nGY3pj3jMi&X-Amz-Signature=33b0b9412ffa272827c995eacb0080037c5360e18f351fee41e4a1f2fb24eca7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EIHQD2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCjSXppuKTXHEVAmY7jvRSMj4FRgzkqFZJfST7%2BYVtkzwIgQq9Xo8RpZEX953M1pHFLBP%2FTlFdITQMJ82gTW92gSYcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmoKPnWQCtbWW9l5SrcA6pd2GIBvvWWMNWcHjXvPAvvu%2FHq6MxMEMtVkVn2x5G59BRsBmusippfCPxdIr1DdojKUesCB1hVdkzs18p8UGGY0q2S%2FklS1hJlvKlwsqt%2F5RStfe1xZlG1pET31zNrePfW57fuu7XQfBByh6bL2N8Gc69hXbgRCUOAuUj%2FFGdgci9%2Ft5POeM0ozHXKMSpFCzFfJdIVIWJLrExozfqgqBpjqMtHh1qn4RtCeJ8JhkeDlNBWdNuKq8JTFxb59%2B9tMEPvR%2F2%2BVHqtetEBn8a95EIPEG0di1thdV4Ate0yBcuf7GyPzFT4AzAyw%2F1aZztCRefEYDG8Xy%2B5MC4yFczR1K8%2FvPiAV0uHOJq%2BjRZqkEqBGAubsg56su1MkSsVezJmnSlPEQvzqsg3b54BIBGGUqWZDLqmZiT9TBn1stiKoqlqtZ%2F6EKsJTxJ%2FZU5dmkpiwhx4Ys5W8tQabnswF1jQ%2BJc3YVhdPnmsAHaNBaFq9P3QNhYU0glC1boLoIN5Jx1aIdcrK2MFFUx66xmUbO3Eh7hvmi%2FvoBhrPo%2B327H73rx%2FoyZKFVfcBovUEjUe0ePlo%2B%2FV8p2Ys9k%2Bv7bns8AvZPrOzABDeyoZJisAyBdRZQX%2FEWFXfHpzHowSYXC3MKje18AGOqUBo7Y1680z2izpuCR8hRwNUkosL800QyA6%2FcXjNTuAoytyYh%2FTvWlGL1RDUvEYxxmH3mn51UXqfuVMJnTMdztC%2BA%2B35jXv4LWbipKtaeGowZ%2FDuaXFiGGhk4VkDEtq777heHzur%2FPhqnDYfo5iFLzYVA05HzDZVAvPH08%2Brhm5VlH2pH%2BYw6X1Ord2NT5Jz7wF4WswMgNJJewTbrcz77nGY3pj3jMi&X-Amz-Signature=07b7147be6f5aae15d550d0f4721df956c98dca93e12e70705ea7a0294579925&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
