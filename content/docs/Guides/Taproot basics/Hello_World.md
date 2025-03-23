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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIRZO3G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHeUQyizk%2FfzDUKOfZdscj3E60URXuWbKV5hkO2ACfcGAiEAxykTEiuFF7OmYBcVCTZm1sTebApuG%2FcqA2YGQoMeVCkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8I6P1p%2BFs79MopNCrcA%2FZzovX9XySbDMGr3n6nexa4vN3QzcVuvk0BNM2BLmFWJePC%2BpqFp9CLR88rXPn9keG%2B5sUh3Yf0LYSSXDR62v6xSHIpGuIPZsNbP4ABsqcQ2IK%2BJH18MVol1fWeSDn%2FaRSY926EKVnwG6jX7tzQJtbIN21gQRntWYqsbxN0LVzM0TNvl%2F6j5rQJcM8jKGdDjsPwqN%2Bt%2B%2BDB93TrX3uq5CH046kocXcOLyStroBdE9S2ny0%2BwvFHXLqsqnqS6kFxfUcb5%2BNNKUxB%2BxOW4yVo%2F3Vwo1D2sR2B09bZ911uRU%2FhK1R5sPCR1TFJ5f9Xc%2BLIVqbaDVtUxLmLhyKD2kqJMHIu6Oj3JAKbACCCC3M4UnPDrO5BrFmnVHW5j19WCd%2FviWaN0%2BiZwdXaB%2Fgotdj1WNg9o7Lc1%2Fam5pH%2BgZ5o0mY49nMFZMICn6hUbZ43GXGBiX1zh8i8%2FnltNMD2dwq2jRlHVhSnAl9WH27%2FOD9eNRcErrdby2OjLKxRyndI%2Buw9aHnhlM5i7WsVX89zlYmI%2Bb4ppH0%2B8WYNddoEmKGi%2FxNxIRv5lQTnuv532creJLD3JpHz9Kzvts9o8eCojNLL00SYGWW4gwkbBTMJBFI6I2FtO%2BULR7mst3m08MIUMJ7j%2Fb4GOqUBKGLVA3L6c%2Fq9whu2wZR%2Fgn%2Byi8W%2F7Ilf07kVVMH9YN3wrAT5szVrwHNI26b6DmYzGeVugXQvtIAumFGB3JOFLymbBIs8rixyGLRJI64R0J%2BifprOLaUqpa81FQgoYF9FG%2Ft9fRQJkg6ykLOkZSDBtW%2FTs8mYa1rzm8l8GDgAidVOLFvNju03K0Tis%2BARYY6meYIFX2Kavnr6nkNIAR45ek6ZIJNf&X-Amz-Signature=3cba9d750fe63bfd9a51a341d4173a6faf96f3fe8fec7c562473a7fb58a0f242&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIRZO3G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHeUQyizk%2FfzDUKOfZdscj3E60URXuWbKV5hkO2ACfcGAiEAxykTEiuFF7OmYBcVCTZm1sTebApuG%2FcqA2YGQoMeVCkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8I6P1p%2BFs79MopNCrcA%2FZzovX9XySbDMGr3n6nexa4vN3QzcVuvk0BNM2BLmFWJePC%2BpqFp9CLR88rXPn9keG%2B5sUh3Yf0LYSSXDR62v6xSHIpGuIPZsNbP4ABsqcQ2IK%2BJH18MVol1fWeSDn%2FaRSY926EKVnwG6jX7tzQJtbIN21gQRntWYqsbxN0LVzM0TNvl%2F6j5rQJcM8jKGdDjsPwqN%2Bt%2B%2BDB93TrX3uq5CH046kocXcOLyStroBdE9S2ny0%2BwvFHXLqsqnqS6kFxfUcb5%2BNNKUxB%2BxOW4yVo%2F3Vwo1D2sR2B09bZ911uRU%2FhK1R5sPCR1TFJ5f9Xc%2BLIVqbaDVtUxLmLhyKD2kqJMHIu6Oj3JAKbACCCC3M4UnPDrO5BrFmnVHW5j19WCd%2FviWaN0%2BiZwdXaB%2Fgotdj1WNg9o7Lc1%2Fam5pH%2BgZ5o0mY49nMFZMICn6hUbZ43GXGBiX1zh8i8%2FnltNMD2dwq2jRlHVhSnAl9WH27%2FOD9eNRcErrdby2OjLKxRyndI%2Buw9aHnhlM5i7WsVX89zlYmI%2Bb4ppH0%2B8WYNddoEmKGi%2FxNxIRv5lQTnuv532creJLD3JpHz9Kzvts9o8eCojNLL00SYGWW4gwkbBTMJBFI6I2FtO%2BULR7mst3m08MIUMJ7j%2Fb4GOqUBKGLVA3L6c%2Fq9whu2wZR%2Fgn%2Byi8W%2F7Ilf07kVVMH9YN3wrAT5szVrwHNI26b6DmYzGeVugXQvtIAumFGB3JOFLymbBIs8rixyGLRJI64R0J%2BifprOLaUqpa81FQgoYF9FG%2Ft9fRQJkg6ykLOkZSDBtW%2FTs8mYa1rzm8l8GDgAidVOLFvNju03K0Tis%2BARYY6meYIFX2Kavnr6nkNIAR45ek6ZIJNf&X-Amz-Signature=e41ca7bea1ffc1a427f0a096aa092701c6536b8df23b4b0d71773b331ef0c0f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
