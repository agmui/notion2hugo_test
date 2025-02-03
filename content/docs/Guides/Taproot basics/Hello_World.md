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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG4KZVF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBTfYFWfEESeUBUAWa4MbftcRnpfisxFLfHm4FusaFFMAiAYHlZC4otn1Qk%2BzX01x%2FpAEknhkUc34WJm9wwNYGntQCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVkzNRPkhIDp2iYbwKtwD7jZQfvMl76aDKDR09%2BO2BiwCNYtTq%2Bgsz3P%2BbjelUAXatc3Rtgomb3g8r8SevW7VOaRwEev9AD60kQ9xG%2BOyJAt2%2BXtFdBqrqyQx%2FCBEJJQ%2Bfb%2B8xeeem5894cmnlPkseDO67WD5iqR%2B2ZyFvRLyykn3WGQW2BjLSPAAz7FoPF9lvoIIv4192aQyp6yeHom74MpULKoKkr4nBj7DnV1hcULUTXn%2BxkOSfC%2BYqiSiorHhLshaLRXLPhgaaeI1kTsTHBeR0TW686cnlIGcWMNjV5q8lbpYawEDqH9w%2F0LOkIcMsroLMj0859XqvZiIjB7i7BE6jHRb6DfAVmYpStsrude3RnrUq8ENvkMCsU3veC7Y1jXWpfg8XHHXsphRnz8JaEhLsosZYYTg8bONGHmuwG088tVegHvl3kOPdQIISnytO55ex4TRwNhuie2K2I0a5UKMHuSQBIt3KRnUrHJVcGm5nIYWFJH%2FJ%2Bfwbuzy3WqPRLEtE9vPQhQfVsthf%2BLb3Ld%2B8Cm3VNvdELhXR0Qv2fI3VrNfQXiPmr2TjIz46snZ1VDcU1L%2BJUBxwySf1biecmmt4f4RpIsjg8BB2BHbFyTwetRSx80pdrjjy8Elt%2BIjnfOGD7Dkj9MfMmkwn%2BeDvQY6pgHQZKXLkfp%2Bpr3DW62elsRqOKKBxX%2FezUgJVcCKUqOvSBQkZjNUG4GgRLWcsc5KrLDIJeNepVebAkC8IYVpmpZ51eLrz7RXKY1oQ5KSWtJ3TppOjNbstb7EfFgP%2FfxHR5rHkkF5WM5Vn%2Fk%2BwLEK2FZp3%2BAI%2Bs98EDL8P9SoEI0E8UhNjoofX0Gx26IdMqZH%2BUalcxGvBjt1w%2BAsmwMwOMZWj%2FaDRjez&X-Amz-Signature=15c273d3c43409a544aded68db1fb6856d127e4281ac08fad66ea924882c0381&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG4KZVF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBTfYFWfEESeUBUAWa4MbftcRnpfisxFLfHm4FusaFFMAiAYHlZC4otn1Qk%2BzX01x%2FpAEknhkUc34WJm9wwNYGntQCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVkzNRPkhIDp2iYbwKtwD7jZQfvMl76aDKDR09%2BO2BiwCNYtTq%2Bgsz3P%2BbjelUAXatc3Rtgomb3g8r8SevW7VOaRwEev9AD60kQ9xG%2BOyJAt2%2BXtFdBqrqyQx%2FCBEJJQ%2Bfb%2B8xeeem5894cmnlPkseDO67WD5iqR%2B2ZyFvRLyykn3WGQW2BjLSPAAz7FoPF9lvoIIv4192aQyp6yeHom74MpULKoKkr4nBj7DnV1hcULUTXn%2BxkOSfC%2BYqiSiorHhLshaLRXLPhgaaeI1kTsTHBeR0TW686cnlIGcWMNjV5q8lbpYawEDqH9w%2F0LOkIcMsroLMj0859XqvZiIjB7i7BE6jHRb6DfAVmYpStsrude3RnrUq8ENvkMCsU3veC7Y1jXWpfg8XHHXsphRnz8JaEhLsosZYYTg8bONGHmuwG088tVegHvl3kOPdQIISnytO55ex4TRwNhuie2K2I0a5UKMHuSQBIt3KRnUrHJVcGm5nIYWFJH%2FJ%2Bfwbuzy3WqPRLEtE9vPQhQfVsthf%2BLb3Ld%2B8Cm3VNvdELhXR0Qv2fI3VrNfQXiPmr2TjIz46snZ1VDcU1L%2BJUBxwySf1biecmmt4f4RpIsjg8BB2BHbFyTwetRSx80pdrjjy8Elt%2BIjnfOGD7Dkj9MfMmkwn%2BeDvQY6pgHQZKXLkfp%2Bpr3DW62elsRqOKKBxX%2FezUgJVcCKUqOvSBQkZjNUG4GgRLWcsc5KrLDIJeNepVebAkC8IYVpmpZ51eLrz7RXKY1oQ5KSWtJ3TppOjNbstb7EfFgP%2FfxHR5rHkkF5WM5Vn%2Fk%2BwLEK2FZp3%2BAI%2Bs98EDL8P9SoEI0E8UhNjoofX0Gx26IdMqZH%2BUalcxGvBjt1w%2BAsmwMwOMZWj%2FaDRjez&X-Amz-Signature=0a2f646fd6f0906a92b119cb35cd4b77fb958642a786ea70d75929add96ea577&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
