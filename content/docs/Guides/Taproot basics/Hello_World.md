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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5ZNCRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDfAUcveLW29DFbY3fm25qjQir643bRh6utevLWmN2SqQIhAOZv9Pb74xluoondfcnJmxrK3Ildh2j%2FeB0IJaEMOw%2FhKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqQcsWW2qQqL97t0q3ANK2iZiCVJV3POkb1sg5UI0mIbGtZ4MMl2griW7fkOmMwvYB0tN%2FQM2fzHVrF7trak%2FfEu7jdlYRWzow00GpMHYM7d2peh1ayEBNWEEntG3zNlc6Q44bhpfUGUcS0R2bdS1aVMOb5eHkbtroFHfwG8ASS4j4ch%2BBX026x%2BQXIeNLk84QlnfdqvFSqfPbWryTx3B6bn6D68oVT1%2Fi9ZNVVbyoi3FMjsNeIX2%2Fup7%2Fl3%2B4AENrXp7u2qC6ZSwtin25RvIqaEdTgAIbzrlevkWGwX0RsT%2FxoRtUzhfqnWTW9gYVVvMx2gJFzEpNZVngbcjgKqVxIo4IRuTguvnfyn05aumcuzojrHzdJajhliO75DrJ5LAaOfuZjbw8DjjP8cCAIT4qDMQU0ZkmQvnum7sDNBG1PJ6TabtIK8PEni%2FEXKfEYEjvGCTqs3lh4%2F5QOshSfm658%2F3oAHt3A0vpGpclqiIN%2BKyf%2F84fikzTxFdBTjlJd32HthNi1IRQMX5RkFMFA%2BlcE%2BSN0KwSD%2BUCjZNbCojmTsuuIWsJayzYCao5UvqxjZ4%2Bak7NG2aB3jPEUitN87WBBZjwYoCTnPmacVNM7oAEE4vbk%2Fhgt%2Be2u4J7siIh0IcT7hkjWNFBcFLzDDbkIq%2BBjqkAd6qsO%2B%2FhCf8dLi%2Br4FNzLpcM7tEQdGJVuvK5IDk9GykBEeBPeNvYnUlF5%2FZtjKMJy1iPsB7Vlw4lbw1TzCzcAWKU0wS3p%2BnLrBRkq4cthuhocAcHkzZrdCHmA%2BbMgJIZKA3xkIO6TWZZyqRwFNbnttS7kXOUpLMsec%2FvLqZcf9PhT0sWf0%2FS11W7GPw3Gg53g1tu2sEVLXicOBgW6AE0GdA0BJA&X-Amz-Signature=88141e1ca7702d7556d8abc60be555dd39639388ba112de6e8a92200a0c28af7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5ZNCRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDfAUcveLW29DFbY3fm25qjQir643bRh6utevLWmN2SqQIhAOZv9Pb74xluoondfcnJmxrK3Ildh2j%2FeB0IJaEMOw%2FhKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqQcsWW2qQqL97t0q3ANK2iZiCVJV3POkb1sg5UI0mIbGtZ4MMl2griW7fkOmMwvYB0tN%2FQM2fzHVrF7trak%2FfEu7jdlYRWzow00GpMHYM7d2peh1ayEBNWEEntG3zNlc6Q44bhpfUGUcS0R2bdS1aVMOb5eHkbtroFHfwG8ASS4j4ch%2BBX026x%2BQXIeNLk84QlnfdqvFSqfPbWryTx3B6bn6D68oVT1%2Fi9ZNVVbyoi3FMjsNeIX2%2Fup7%2Fl3%2B4AENrXp7u2qC6ZSwtin25RvIqaEdTgAIbzrlevkWGwX0RsT%2FxoRtUzhfqnWTW9gYVVvMx2gJFzEpNZVngbcjgKqVxIo4IRuTguvnfyn05aumcuzojrHzdJajhliO75DrJ5LAaOfuZjbw8DjjP8cCAIT4qDMQU0ZkmQvnum7sDNBG1PJ6TabtIK8PEni%2FEXKfEYEjvGCTqs3lh4%2F5QOshSfm658%2F3oAHt3A0vpGpclqiIN%2BKyf%2F84fikzTxFdBTjlJd32HthNi1IRQMX5RkFMFA%2BlcE%2BSN0KwSD%2BUCjZNbCojmTsuuIWsJayzYCao5UvqxjZ4%2Bak7NG2aB3jPEUitN87WBBZjwYoCTnPmacVNM7oAEE4vbk%2Fhgt%2Be2u4J7siIh0IcT7hkjWNFBcFLzDDbkIq%2BBjqkAd6qsO%2B%2FhCf8dLi%2Br4FNzLpcM7tEQdGJVuvK5IDk9GykBEeBPeNvYnUlF5%2FZtjKMJy1iPsB7Vlw4lbw1TzCzcAWKU0wS3p%2BnLrBRkq4cthuhocAcHkzZrdCHmA%2BbMgJIZKA3xkIO6TWZZyqRwFNbnttS7kXOUpLMsec%2FvLqZcf9PhT0sWf0%2FS11W7GPw3Gg53g1tu2sEVLXicOBgW6AE0GdA0BJA&X-Amz-Signature=4ed4935f3773df7bb3e067f64d09e5a53a6be8440e56a7462a53284085666b56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
