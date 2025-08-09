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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMXQH6M%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJywFnft%2Fr2mcY8B13B41395JjX6W7IETygmzH4xb9aAiEAyw1bV7CeuJhEFHq%2F963ytDuHKSsMOWo5t%2FcZcJuvzdEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUd%2Fw8I1r5w4nCgnSrcAwwt0N7dr5kO6nps7cmJ0w0521W8lQUnvRMLYpmoX%2F1qSrGPqCXpokiJdCrFXhMhTNLJOPpFcLCWwNnwebCGDYB4GqBPd9xHxdJc2un84WdyM67T%2BrquwNkverTx%2Fd11%2BSQQ6lOyDXd735NywGlxr3g3A7bGLNYpbCSvCO3H%2BTEkNtomEMokNeZGMb1JBX%2Fc%2BL2ODE8FUSQ8JvpilqXZGU%2FjEBUDFIOxv1858daO9hJSjdz55gebDlnJqf6vFHaFD4R1OlrIdIAiE3EfHlo%2BijMT8oOLKNFrC8pMi25RHaY0cLqxlxRvNZSvMGYfDPfABc5QmbgrKw9jrI0ZfR1%2FBKQM4GZ1R2UBKie%2FGq%2F2gjmnMwiTMM4aD0%2BSPoR6jHdePfRiZSQ5EgkQuYYTBUClmRhqNnI7GKT03%2FtiqI1qnQ4R%2B4hOM98j4sNryxkoLnY3sBMFAhEfwJ9K0w%2Bf7iCNGbCYdXnbK4fILVibZqOFXLyTNQAnwMd36%2BC07Mv2iveo%2F9wVcWjOqbsE78Zd%2BJTQm81dC2zi3if6D6AA2x%2FAmRKCwotqoLmelQ%2FfFBkwA7ydgl1F3sKX7UJpG8Z65%2ByyPpHLWgJ4V78l8fr%2Bzxpi0KfnfUUyM3ml6DP8XtbVMJXg3MQGOqUBB5klWf8gKEHDCF%2FrL0esYW3BZ0GrUzCIOJBOy3%2FUM16qTaAqkWNODsOJ1FWRuDgDcuGWUhytjShyFV%2F7WXMz1LWmOqcyqEKtuvGs15piIo6zZ2oWHp9a9i8ASQjNL%2FXWm4N1nYnY85ZgIGxeAZc1akBc6lSyKNqSvWaP0v9%2BA9qcdstFDQTCmFLkPn51GcVjTE%2Bsjst%2B%2BbTWCRuYg8Ju8c58d1bK&X-Amz-Signature=e981aaf9cfd58189104917d6a943843d26268ab63f4c87f5259a119d026e125d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMXQH6M%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJywFnft%2Fr2mcY8B13B41395JjX6W7IETygmzH4xb9aAiEAyw1bV7CeuJhEFHq%2F963ytDuHKSsMOWo5t%2FcZcJuvzdEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUd%2Fw8I1r5w4nCgnSrcAwwt0N7dr5kO6nps7cmJ0w0521W8lQUnvRMLYpmoX%2F1qSrGPqCXpokiJdCrFXhMhTNLJOPpFcLCWwNnwebCGDYB4GqBPd9xHxdJc2un84WdyM67T%2BrquwNkverTx%2Fd11%2BSQQ6lOyDXd735NywGlxr3g3A7bGLNYpbCSvCO3H%2BTEkNtomEMokNeZGMb1JBX%2Fc%2BL2ODE8FUSQ8JvpilqXZGU%2FjEBUDFIOxv1858daO9hJSjdz55gebDlnJqf6vFHaFD4R1OlrIdIAiE3EfHlo%2BijMT8oOLKNFrC8pMi25RHaY0cLqxlxRvNZSvMGYfDPfABc5QmbgrKw9jrI0ZfR1%2FBKQM4GZ1R2UBKie%2FGq%2F2gjmnMwiTMM4aD0%2BSPoR6jHdePfRiZSQ5EgkQuYYTBUClmRhqNnI7GKT03%2FtiqI1qnQ4R%2B4hOM98j4sNryxkoLnY3sBMFAhEfwJ9K0w%2Bf7iCNGbCYdXnbK4fILVibZqOFXLyTNQAnwMd36%2BC07Mv2iveo%2F9wVcWjOqbsE78Zd%2BJTQm81dC2zi3if6D6AA2x%2FAmRKCwotqoLmelQ%2FfFBkwA7ydgl1F3sKX7UJpG8Z65%2ByyPpHLWgJ4V78l8fr%2Bzxpi0KfnfUUyM3ml6DP8XtbVMJXg3MQGOqUBB5klWf8gKEHDCF%2FrL0esYW3BZ0GrUzCIOJBOy3%2FUM16qTaAqkWNODsOJ1FWRuDgDcuGWUhytjShyFV%2F7WXMz1LWmOqcyqEKtuvGs15piIo6zZ2oWHp9a9i8ASQjNL%2FXWm4N1nYnY85ZgIGxeAZc1akBc6lSyKNqSvWaP0v9%2BA9qcdstFDQTCmFLkPn51GcVjTE%2Bsjst%2B%2BbTWCRuYg8Ju8c58d1bK&X-Amz-Signature=58e00f1b9350397401504b5857d1986dcf4ce1ca7afdb3dd916dadbf0037a72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
