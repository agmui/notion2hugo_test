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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWHD67I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCCvour%2BIg4B0rvC8eEK%2Bm1nkjzn1l1Z0RXk5n7YmrO5AIhAMfqsLFDMbxaA5SFyPOKn5Lg11VL4g9QECoqnFPMyQ8LKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8fFq3T5VaRVHIFg0q3AMs5NDqTJ7Q7bYa4BldvgdxiXnL3Wk3kJoV%2BeiV5Leb4%2Ff3fn2bj20KTAQmwEslM1%2BgxM78%2Fn9yF5u%2FP%2FB17cINWdhObq7kCI4zCF3Vssi%2FpryYfg2Tk7f%2BneUBw92KFiklEjamr3Xw3X3JD27VmJKdI1LvhgZbqKfKgGuwdcVmvxLuYTNmcZJOxD7AVfxNeQ%2BOKoao2QsW5JgOvM14VEtHY7lJ35OFKElnZS2EXEvkAGsMkRHHr4m8MrOZZKRn6N%2FlxemVTGHENRmHVb4RTI4k5r8G0BCkWBkH9uSgqroQecZborGl2XG7RfVMd6hI9dFmFV4VwrMGuVZMFQd49BzsiRSJAM7rhoeGIcgoekGO1mOu%2BesH8pHPl3mrfbIntnkOoTCVUwtXYAWrzkBcy7%2B9ajtOamQ6NwQZu566ZeI1ZbnSB%2Bawm8vhWV%2F1JaJ6GQWQrEJvq4d7hrSpOhAlqdIhiX%2FMQtpcCIW%2Bpe7Fgg0c3OiSPJHGpIlOe3akvi0uKUhTNpIg9vehje1FUbwsbRePrMcnXnl3c5e044GbkBzhC5tCrCT0vlbUhKqv4NdBxtFPAnWc3ZKDCeGKnpkMI3SH44gV5ptMAEkat3ra0wzPRLnc%2FHHJiPKZIvBTSjCshJbBBjqkAX7BYN3Bio%2Blh9SteImoWNKyhQ%2Fzwlzcj3CkIJ4I8ZFlJ9xssAE9tTv28SlbAXOJfHIEtxTlZo3cnTTEbL4JWJR8GrrFi3Z5haDQjqPHDYV8dqRIynHQE25aKI7%2B0PCB4r1Zwbn8pPWGt0tnwR0QqtTjtwYI6aSZZxA15cpmL4b2ZBZ6NUtCY%2Bc1MYv%2B%2BPjMb60dyQjXmVsj%2FczgCGaF9ZgrRToP&X-Amz-Signature=f68ca18c6c75a1d08a49c7348f3ffa21c39405cd2661632b420f0a310dbaf436&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWHD67I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCCvour%2BIg4B0rvC8eEK%2Bm1nkjzn1l1Z0RXk5n7YmrO5AIhAMfqsLFDMbxaA5SFyPOKn5Lg11VL4g9QECoqnFPMyQ8LKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8fFq3T5VaRVHIFg0q3AMs5NDqTJ7Q7bYa4BldvgdxiXnL3Wk3kJoV%2BeiV5Leb4%2Ff3fn2bj20KTAQmwEslM1%2BgxM78%2Fn9yF5u%2FP%2FB17cINWdhObq7kCI4zCF3Vssi%2FpryYfg2Tk7f%2BneUBw92KFiklEjamr3Xw3X3JD27VmJKdI1LvhgZbqKfKgGuwdcVmvxLuYTNmcZJOxD7AVfxNeQ%2BOKoao2QsW5JgOvM14VEtHY7lJ35OFKElnZS2EXEvkAGsMkRHHr4m8MrOZZKRn6N%2FlxemVTGHENRmHVb4RTI4k5r8G0BCkWBkH9uSgqroQecZborGl2XG7RfVMd6hI9dFmFV4VwrMGuVZMFQd49BzsiRSJAM7rhoeGIcgoekGO1mOu%2BesH8pHPl3mrfbIntnkOoTCVUwtXYAWrzkBcy7%2B9ajtOamQ6NwQZu566ZeI1ZbnSB%2Bawm8vhWV%2F1JaJ6GQWQrEJvq4d7hrSpOhAlqdIhiX%2FMQtpcCIW%2Bpe7Fgg0c3OiSPJHGpIlOe3akvi0uKUhTNpIg9vehje1FUbwsbRePrMcnXnl3c5e044GbkBzhC5tCrCT0vlbUhKqv4NdBxtFPAnWc3ZKDCeGKnpkMI3SH44gV5ptMAEkat3ra0wzPRLnc%2FHHJiPKZIvBTSjCshJbBBjqkAX7BYN3Bio%2Blh9SteImoWNKyhQ%2Fzwlzcj3CkIJ4I8ZFlJ9xssAE9tTv28SlbAXOJfHIEtxTlZo3cnTTEbL4JWJR8GrrFi3Z5haDQjqPHDYV8dqRIynHQE25aKI7%2B0PCB4r1Zwbn8pPWGt0tnwR0QqtTjtwYI6aSZZxA15cpmL4b2ZBZ6NUtCY%2Bc1MYv%2B%2BPjMb60dyQjXmVsj%2FczgCGaF9ZgrRToP&X-Amz-Signature=886e7b5d1cbd01a2c64ef3a6be8508a0bcc0aa63c85e1dca26691e3cd7d1d990&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
