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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2SMJW2%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtu6r6wrjD43%2F3dB8LXKXoS4vw%2FTGKGlQLy5eV06ZpgIhAMeOPhutWute7BmkohJOll%2BigYpbFUhqqFM7oeFG49xGKv8DCGwQABoMNjM3NDIzMTgzODA1IgzA1AuMaR3acTQU8GIq3AOCB7SMZvCgY9n9j49oYOLnQ4QIAKqh67h4i4erVFk4%2BY0K0ohhSByFxG99Csr5z1egIlitw2RXCvardbIkUAjyWwRr2DRt%2BUSSTcarM%2B6Geq1wREi8pidxbmmlrsA0R42uMWryMMHc8lH%2BVLe8yLYLN%2FF%2BF3QeC2fFDv62S%2BVwQR78%2BDcvxMfHmJvpww5JTU1gXbZoqywziM6ZHW15dYhOT2%2BZJUeW4dPcmxcdl%2B%2FLEGIc64LsB%2FNSIt4qB66Z%2BRKLBAg0VAWOQJ5x%2BuNNCus%2BZVJnRhauX1wtH7wAjh1v2EdG1jQ%2BXdsv59xz8VDQoxxbawgozCqFtiN%2FzUfoDkYAWWT0W8CKFAoi6DxDCmPhsp%2F%2BEJSgN6Uqfb%2BVSVEK0TQhPR%2Fp9sm9b1BfbECJKqpdjwPmhYDGsdbj%2B21f0tjKIfaBCS%2FRzDoR2pUhIHW7JCZrqQqCdHH9BYTXc9SfAF68nnrTwfmFcpBwFmO09bdF%2F8H0XNWI%2FCDIEBCas5HVvXMXhRusUF6XQ%2FJV56u9wFjMFTI7oITgVdvFqbYsiAtD97sRPHndSSAie5u9xXn5hZTTT%2FaXJy8WcQInlRHerzCDYuF2KPFSMXhLso02iOJT5OvTH2lChdob4SjX0DDc6p%2FMBjqkASbc%2F1t2pXBGAqYn%2Bmvm5xL2eE2kJGS1kZOWHZKeqxdAkIxmRtpb71DAtEbOteTB2voPmlUYxX%2BDyv6JvJxptBxU0woEbrxQZPuj7fhSqQKmRDLlhdLwLjUzivDk%2B4iRtEKtNDPl7ynCNbB9iLeJ5KRvMllKCaU8oKiW%2B6ijoMXryCHI6iRB4xHXdNkNQ2IovXn%2Bgwr92x4T6%2BA7oIoHuaTwb9mV&X-Amz-Signature=252b2d296dc8d099535414ca78311496e4f90dc0e60e71930325ba032e045746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2SMJW2%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtu6r6wrjD43%2F3dB8LXKXoS4vw%2FTGKGlQLy5eV06ZpgIhAMeOPhutWute7BmkohJOll%2BigYpbFUhqqFM7oeFG49xGKv8DCGwQABoMNjM3NDIzMTgzODA1IgzA1AuMaR3acTQU8GIq3AOCB7SMZvCgY9n9j49oYOLnQ4QIAKqh67h4i4erVFk4%2BY0K0ohhSByFxG99Csr5z1egIlitw2RXCvardbIkUAjyWwRr2DRt%2BUSSTcarM%2B6Geq1wREi8pidxbmmlrsA0R42uMWryMMHc8lH%2BVLe8yLYLN%2FF%2BF3QeC2fFDv62S%2BVwQR78%2BDcvxMfHmJvpww5JTU1gXbZoqywziM6ZHW15dYhOT2%2BZJUeW4dPcmxcdl%2B%2FLEGIc64LsB%2FNSIt4qB66Z%2BRKLBAg0VAWOQJ5x%2BuNNCus%2BZVJnRhauX1wtH7wAjh1v2EdG1jQ%2BXdsv59xz8VDQoxxbawgozCqFtiN%2FzUfoDkYAWWT0W8CKFAoi6DxDCmPhsp%2F%2BEJSgN6Uqfb%2BVSVEK0TQhPR%2Fp9sm9b1BfbECJKqpdjwPmhYDGsdbj%2B21f0tjKIfaBCS%2FRzDoR2pUhIHW7JCZrqQqCdHH9BYTXc9SfAF68nnrTwfmFcpBwFmO09bdF%2F8H0XNWI%2FCDIEBCas5HVvXMXhRusUF6XQ%2FJV56u9wFjMFTI7oITgVdvFqbYsiAtD97sRPHndSSAie5u9xXn5hZTTT%2FaXJy8WcQInlRHerzCDYuF2KPFSMXhLso02iOJT5OvTH2lChdob4SjX0DDc6p%2FMBjqkASbc%2F1t2pXBGAqYn%2Bmvm5xL2eE2kJGS1kZOWHZKeqxdAkIxmRtpb71DAtEbOteTB2voPmlUYxX%2BDyv6JvJxptBxU0woEbrxQZPuj7fhSqQKmRDLlhdLwLjUzivDk%2B4iRtEKtNDPl7ynCNbB9iLeJ5KRvMllKCaU8oKiW%2B6ijoMXryCHI6iRB4xHXdNkNQ2IovXn%2Bgwr92x4T6%2BA7oIoHuaTwb9mV&X-Amz-Signature=cc8c830991e7fe1ede419faddd1081cabf5c15d8a6ed937516316633e199f16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
