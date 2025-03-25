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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQJU6E%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDOlmt3ET8lzofKDv9VU7Pp82jILill3odCySgp6WqnAiBWsx6NtddjxI7DdkstsjHymdP1Hkw%2Fsa4im1GaiS8qjCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZr%2BOphc4CgKNsMbEKtwDu7XITm8T%2FuPA%2FX0qP27BzCOFEgCOMjeBUhI9No5%2BXhpQlUZnUtENEUw9X4ZHL0hNa1l7NT%2BPePkPwppgsWjLoDpjxWTrlcoM9lS6wDow3FLgDkAVXW7OMX17E0GaAIo%2BNkx5fvVdg3hVjgq67ynT1bnsNWuk1S1F7KggzvTFZUQapqH%2Bl6oRELR2cl6arrlD%2BNcRVb3X8FnMW6iZKnmOwoqojXXZLbn%2BGufLfC89jShJtCvzcwigm%2FLsFYih64Xa7gH%2BSYQsrLk2BH9OSf8j5m%2FY%2BcNXi%2BcBXU1L5AXfnuPRbvZI7hY5tvlj7O21wh4IGDVhw%2Fz51Bu0M9pbbrIEDj7LzDUMlm4op2cFaX3yFvoe8PHdRb6yqyMCbDPNhEkexFCE7nIyJ6fu78L%2BDVw7F%2F1PGDx%2BJkYdRkLVf4KUJsGLIrUP%2BsEf53hyTFVvtvtpl%2FBIy%2Bv5HeEqTtyJcI8RaImdSYJd46S9Wl0QAN%2FpnHNCSCnK%2B2QODZo9vMdLP0%2FoOAKwsO9wr%2FcF7JKCkqW5RXxkZnivAk7j2C581pFJeT3uXG%2Fc4rYbdDtM%2F9wiIo0TDY7F2BaWpnHGzVDxlMnaTGiguVG7CtDpq9UqXQHx5QB%2BT2FvPMkndk%2FNOasw1sSLvwY6pgEEy68yKrmSNY0fpZMoBn3ZUcfCMJvAwQumFS1G4dcf48EATGLw1uVl1%2FXtzEu7HnbuackIVk9676DBBElrPgwg0Tifv%2BjSWK5yV5odgiFTh67HMJgp7x7QDJBXK0IgH1Ko3wbuhrW3Sac9rJF2hwZZOpjJiAnrFjjdxWK1G9Mp9geN%2BktfiEV1POydrPrFm3tH%2F5Bj2qK59kefVJCw5FvFjZWuHSKu&X-Amz-Signature=b5ecfe38affb60a9780aa89adf5004d2e125c34c697d28770e27208a22e7eaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQJU6E%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDOlmt3ET8lzofKDv9VU7Pp82jILill3odCySgp6WqnAiBWsx6NtddjxI7DdkstsjHymdP1Hkw%2Fsa4im1GaiS8qjCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZr%2BOphc4CgKNsMbEKtwDu7XITm8T%2FuPA%2FX0qP27BzCOFEgCOMjeBUhI9No5%2BXhpQlUZnUtENEUw9X4ZHL0hNa1l7NT%2BPePkPwppgsWjLoDpjxWTrlcoM9lS6wDow3FLgDkAVXW7OMX17E0GaAIo%2BNkx5fvVdg3hVjgq67ynT1bnsNWuk1S1F7KggzvTFZUQapqH%2Bl6oRELR2cl6arrlD%2BNcRVb3X8FnMW6iZKnmOwoqojXXZLbn%2BGufLfC89jShJtCvzcwigm%2FLsFYih64Xa7gH%2BSYQsrLk2BH9OSf8j5m%2FY%2BcNXi%2BcBXU1L5AXfnuPRbvZI7hY5tvlj7O21wh4IGDVhw%2Fz51Bu0M9pbbrIEDj7LzDUMlm4op2cFaX3yFvoe8PHdRb6yqyMCbDPNhEkexFCE7nIyJ6fu78L%2BDVw7F%2F1PGDx%2BJkYdRkLVf4KUJsGLIrUP%2BsEf53hyTFVvtvtpl%2FBIy%2Bv5HeEqTtyJcI8RaImdSYJd46S9Wl0QAN%2FpnHNCSCnK%2B2QODZo9vMdLP0%2FoOAKwsO9wr%2FcF7JKCkqW5RXxkZnivAk7j2C581pFJeT3uXG%2Fc4rYbdDtM%2F9wiIo0TDY7F2BaWpnHGzVDxlMnaTGiguVG7CtDpq9UqXQHx5QB%2BT2FvPMkndk%2FNOasw1sSLvwY6pgEEy68yKrmSNY0fpZMoBn3ZUcfCMJvAwQumFS1G4dcf48EATGLw1uVl1%2FXtzEu7HnbuackIVk9676DBBElrPgwg0Tifv%2BjSWK5yV5odgiFTh67HMJgp7x7QDJBXK0IgH1Ko3wbuhrW3Sac9rJF2hwZZOpjJiAnrFjjdxWK1G9Mp9geN%2BktfiEV1POydrPrFm3tH%2F5Bj2qK59kefVJCw5FvFjZWuHSKu&X-Amz-Signature=66a69fe5d2404823bfe9273810c4796fe14fa8d29dffd1973161442005374bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
