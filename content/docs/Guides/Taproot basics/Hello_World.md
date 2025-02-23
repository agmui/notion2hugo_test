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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PSLHDA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByYBeRkzeaZ516oHorXp8R%2FrOK3oV5R0A%2BUp%2B1br0cUAiEA2zHTTHwmT1Pk8WqjkAx%2BbfddaIuJAAOQm9T9P1VdkQUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMNZSCLGoGAa9zdgrCrcA6yXhT%2FkHJqiK3SzPWCdK3kzSE5BGNvu2lnm80%2FSMYkSoe4BQx7exV9twXQxdXoEfoj%2F7wSbJ5ihvW9w4vMOgnUKHTRakywV3w9qaXGL2lvYQKF9Jn4EmlSOxTd4mb5tiIOZQ0NZcRw2jbdIOv4ixf5xf76pCcDOpeYmR23bXB6oWGIvgnR2lkms4fLCryGQeR2V%2F4%2BP5N6Nenp6i3jTTwHJDr%2BveZZyGosxyd4cvR7ZXVyi9SxqUaAjal%2FiqUdVlNi3EJ9GrNDUU3clgJ7dqbaqxp5JnjdDXPUhYLy17BwKsgQx34W7bVxo0xHEcy0HwwoSsJPpHUUw68UsRVzoixMEDmUOxCNw9LpfT7nYZIp7xL6YufFYM1qd3EdXP8plfl6yhRLiNBDyE1ZwmI6PXbfhf2QVoSaPJJ6BSKH7SqkqzXJYODwcKiFIiijVFiRqgCjHOdKIK33QOJFsdUZ1VD33Xo8ptFObKmR1g0Z3M8hiqR7ZyQvjSRuSVjYbBtzWgN4qTLhhmGKbz3rRpEW6WzADb4TJ3QUCbcngW2R%2FqwuMhn64Nx8grt7sURaelNZ4XH%2Fk9kgbBXe5lwJY0HFTS%2BJIE0y1eanRTW8cy0Pz2SVF45gWbrkO6h4m5XnOMLfj670GOqUB8x%2BtnpEHBVWGPicwNziK%2B2Ac%2BUB3FnQOZwargxhBfUjh0GLjYGJA5EEpyMDBS1GfGeFwkgZZk0QCvcNmPOP6%2BvinP3cO28A4GQeQUPmDbmezAVtRJXsWGII9X3Kd20dKwgTxBsaWChOh4gmRZGFO4hfPOWjHJ7hB%2BpeCVy5RZlS2UIG40pncaX8s3inXYMGFRISLBa2iCFdo%2BenjLT65cLBeGvT1&X-Amz-Signature=5bc161cb6d52a7f6792f7385d21a7b734ebea236970d2206924e9d3a44849d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PSLHDA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByYBeRkzeaZ516oHorXp8R%2FrOK3oV5R0A%2BUp%2B1br0cUAiEA2zHTTHwmT1Pk8WqjkAx%2BbfddaIuJAAOQm9T9P1VdkQUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMNZSCLGoGAa9zdgrCrcA6yXhT%2FkHJqiK3SzPWCdK3kzSE5BGNvu2lnm80%2FSMYkSoe4BQx7exV9twXQxdXoEfoj%2F7wSbJ5ihvW9w4vMOgnUKHTRakywV3w9qaXGL2lvYQKF9Jn4EmlSOxTd4mb5tiIOZQ0NZcRw2jbdIOv4ixf5xf76pCcDOpeYmR23bXB6oWGIvgnR2lkms4fLCryGQeR2V%2F4%2BP5N6Nenp6i3jTTwHJDr%2BveZZyGosxyd4cvR7ZXVyi9SxqUaAjal%2FiqUdVlNi3EJ9GrNDUU3clgJ7dqbaqxp5JnjdDXPUhYLy17BwKsgQx34W7bVxo0xHEcy0HwwoSsJPpHUUw68UsRVzoixMEDmUOxCNw9LpfT7nYZIp7xL6YufFYM1qd3EdXP8plfl6yhRLiNBDyE1ZwmI6PXbfhf2QVoSaPJJ6BSKH7SqkqzXJYODwcKiFIiijVFiRqgCjHOdKIK33QOJFsdUZ1VD33Xo8ptFObKmR1g0Z3M8hiqR7ZyQvjSRuSVjYbBtzWgN4qTLhhmGKbz3rRpEW6WzADb4TJ3QUCbcngW2R%2FqwuMhn64Nx8grt7sURaelNZ4XH%2Fk9kgbBXe5lwJY0HFTS%2BJIE0y1eanRTW8cy0Pz2SVF45gWbrkO6h4m5XnOMLfj670GOqUB8x%2BtnpEHBVWGPicwNziK%2B2Ac%2BUB3FnQOZwargxhBfUjh0GLjYGJA5EEpyMDBS1GfGeFwkgZZk0QCvcNmPOP6%2BvinP3cO28A4GQeQUPmDbmezAVtRJXsWGII9X3Kd20dKwgTxBsaWChOh4gmRZGFO4hfPOWjHJ7hB%2BpeCVy5RZlS2UIG40pncaX8s3inXYMGFRISLBa2iCFdo%2BenjLT65cLBeGvT1&X-Amz-Signature=3a9b77b95e782b05c7009faf199548751d2d89b58e7be3154b90b198617c58c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
