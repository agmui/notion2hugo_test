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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQSN4P2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDOMTQQZ03txq8oNV8FIzo%2BIY9fcKf1R82IoLJ%2BgqObowIgSOnr0pt5wpAMl0y5ewd5tZ2HTbmCnWkRt6vX5lq4XusqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTq4enkTjAaVIVBCrcA898qX%2BDCkff4Ma1tYP%2F16uSPdqBNcUed8AEJzyKC3oM%2F4ME%2F6wbw9rFPKX8q%2Fvd9CD8zPLtYCR5NlN5phJuvzqyMHhv8UuXLU%2Fl%2Fi4HEq5ganzXAgkPCDwT6Sb3NdqqJD7VWUFCFTF3qrZBuH0JjfU1IE81Tsm%2FljkoAh4csjOXawe4UfX%2BDi%2FB2Xewc7UYo46RAMecFszHVS%2BwxjVj37qVZFdxIsffAZu%2BqXuw2P0CTPEiWuPJHYtKZDYj0CEz%2BSCukKDomsKayh4wBCd9KQVmtDi6z%2F59HombDApR6Iq%2BHqaa2ma4NxNb2PSv68jYMVPYB2hM%2FFIOeqzkZBdEt8prr6SSZ1s8bCHPetaBjrqaSfnFWHGKPkOuRmvxMLwlYk4WcDFvRhRGzf%2BoYHxhgPA4T6gH9%2FvAC9M6Fng5HOuTyiOmTitC7qn%2BaTjO7nP5qBiXntZkGwGshNarZgeC95ewfmXzBpgYyPI4Ll%2B982g8svb6G4cTxTRrx%2BNyYGX02%2B%2BAOZFET6JqD15L2qpAajLtBH6HgWNriZlvdl9Oo9MPy8DV%2FwE9igiW2rGRlP0gobdQjwAVg4n5oUABf0lc%2BJBxlxWcOTDpC9nK18sNZqHcUX%2BcgowXUP%2Bsij6dMIrb9r4GOqUBRNqqSzdpp%2FM%2BjGb%2BythGyWGfANTR2px9gLNHRcLjt2IENzBoHkPOJats0dqd0JVI4Pe1FJsgGabNr9CIW7hslK6f%2F3TZyXK5wt3y%2B1g16PVfgdgnbqgGXgxs6iN3Hl6HjYxtr%2FF5whfCZYnHEaFl3pya0c3%2BVKJOCo%2BfKHW%2BngMn%2FP7SiHx4IKhyeKmpH5JPB9SS5dkD8rWkezn%2F9se3vIFJptio&X-Amz-Signature=82e8ac3bf6fd0f887710a2234a1448397fa5cf2b272da12defa21f4b2bf0a4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQSN4P2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDOMTQQZ03txq8oNV8FIzo%2BIY9fcKf1R82IoLJ%2BgqObowIgSOnr0pt5wpAMl0y5ewd5tZ2HTbmCnWkRt6vX5lq4XusqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTq4enkTjAaVIVBCrcA898qX%2BDCkff4Ma1tYP%2F16uSPdqBNcUed8AEJzyKC3oM%2F4ME%2F6wbw9rFPKX8q%2Fvd9CD8zPLtYCR5NlN5phJuvzqyMHhv8UuXLU%2Fl%2Fi4HEq5ganzXAgkPCDwT6Sb3NdqqJD7VWUFCFTF3qrZBuH0JjfU1IE81Tsm%2FljkoAh4csjOXawe4UfX%2BDi%2FB2Xewc7UYo46RAMecFszHVS%2BwxjVj37qVZFdxIsffAZu%2BqXuw2P0CTPEiWuPJHYtKZDYj0CEz%2BSCukKDomsKayh4wBCd9KQVmtDi6z%2F59HombDApR6Iq%2BHqaa2ma4NxNb2PSv68jYMVPYB2hM%2FFIOeqzkZBdEt8prr6SSZ1s8bCHPetaBjrqaSfnFWHGKPkOuRmvxMLwlYk4WcDFvRhRGzf%2BoYHxhgPA4T6gH9%2FvAC9M6Fng5HOuTyiOmTitC7qn%2BaTjO7nP5qBiXntZkGwGshNarZgeC95ewfmXzBpgYyPI4Ll%2B982g8svb6G4cTxTRrx%2BNyYGX02%2B%2BAOZFET6JqD15L2qpAajLtBH6HgWNriZlvdl9Oo9MPy8DV%2FwE9igiW2rGRlP0gobdQjwAVg4n5oUABf0lc%2BJBxlxWcOTDpC9nK18sNZqHcUX%2BcgowXUP%2Bsij6dMIrb9r4GOqUBRNqqSzdpp%2FM%2BjGb%2BythGyWGfANTR2px9gLNHRcLjt2IENzBoHkPOJats0dqd0JVI4Pe1FJsgGabNr9CIW7hslK6f%2F3TZyXK5wt3y%2B1g16PVfgdgnbqgGXgxs6iN3Hl6HjYxtr%2FF5whfCZYnHEaFl3pya0c3%2BVKJOCo%2BfKHW%2BngMn%2FP7SiHx4IKhyeKmpH5JPB9SS5dkD8rWkezn%2F9se3vIFJptio&X-Amz-Signature=f5596f76467ff19bca3f634b8124c6e863179edb8ad24cdf8a81d7f1cd43bfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
