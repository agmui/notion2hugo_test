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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VOFT4N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC7vFFut%2F%2FW6lA4dgHytXYQ%2FlLO%2BXuSuygn05prLbHudQIgP7JqULJprN3HZyUwX29FP3WylAtw92dwl90J%2FgbmDagqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpx2rqUXEvc%2FoSiSircAyibOaitbgcLC3yWapVGggKZ3BVqygUTfykzn0OdMDy%2FHE9fyxa7jQ8m8lepER5oLG9ACGYsLoanE1ecgYEPVCXT%2B12khic1o3HaZP%2Fu00iKbtuPya0OxjJaRgs%2B48bddNX9SiPmXqVfOtSYhFuKXMtIJON2bvdCc3ZbEVwQgeEhuDf60MkmL88JnkW3OoHy0yh6f8GhquGbSpFfKZdg1%2Fun9Ifi8rpsSE5OlKGUn%2F0JCGhib72IQR4iWFUiXGLyUuCWokxvMMy3b7VL4KulToc9gjHrdehvIPnFuUh42sFBz1giIwmLCq9NgTXyox5FGmepoahEjV7mBBfPZTHZ3bSezTzkU9EKzyig5y0ZgeJEPRi9iIHVimn4aErpcIrbFnBpG7SwlYtc1sZtakLvbSX28f6pOYkXrET4uzD0gGSPJqQN6NJv52mjIJUPT%2FNOtipigACQ7vWw%2BreMopY9URc6ePpzmmxvSBWRevoc9M4JBipyorOdFoq1pYo7jysZS05EJPK5zXad32aX6ZkatadS7nuIPSMiCGowPGMmxqbVaC5bqDcNjbwQ%2FlaZdQ%2FiiEvZuAYY4RuKd3TVTVLWqrw%2FVTI%2BoYux4PMPLIgehr3gF5ux9UfakGE3Jj6pMJavqL8GOqUBp9s0hjpPmzB%2BXSacb8I2i6HfVvz3fUTdvo9h%2BRZb2UHQCTFAq74Gr06g%2BOIP8AJfE5pfzykdu%2B%2FqpEuYZbbe5yKfQ3I6gupl6ywGXC6UUF2ZAPEav1n8z8CMsvTpzjK9BWYi3355Bwlap0GJKwSuMbKsupBQAFcegvmvijsl8KixHz8NW%2Ft5Q8BieNDHWg%2BLMJJI8f%2BMf%2BSqbxwlW4QTAmRuRJ6y&X-Amz-Signature=6f825d5f4e5fac0f7ffc1d1e038495d36bdc346999e174e6f4163760cddfb5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VOFT4N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC7vFFut%2F%2FW6lA4dgHytXYQ%2FlLO%2BXuSuygn05prLbHudQIgP7JqULJprN3HZyUwX29FP3WylAtw92dwl90J%2FgbmDagqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpx2rqUXEvc%2FoSiSircAyibOaitbgcLC3yWapVGggKZ3BVqygUTfykzn0OdMDy%2FHE9fyxa7jQ8m8lepER5oLG9ACGYsLoanE1ecgYEPVCXT%2B12khic1o3HaZP%2Fu00iKbtuPya0OxjJaRgs%2B48bddNX9SiPmXqVfOtSYhFuKXMtIJON2bvdCc3ZbEVwQgeEhuDf60MkmL88JnkW3OoHy0yh6f8GhquGbSpFfKZdg1%2Fun9Ifi8rpsSE5OlKGUn%2F0JCGhib72IQR4iWFUiXGLyUuCWokxvMMy3b7VL4KulToc9gjHrdehvIPnFuUh42sFBz1giIwmLCq9NgTXyox5FGmepoahEjV7mBBfPZTHZ3bSezTzkU9EKzyig5y0ZgeJEPRi9iIHVimn4aErpcIrbFnBpG7SwlYtc1sZtakLvbSX28f6pOYkXrET4uzD0gGSPJqQN6NJv52mjIJUPT%2FNOtipigACQ7vWw%2BreMopY9URc6ePpzmmxvSBWRevoc9M4JBipyorOdFoq1pYo7jysZS05EJPK5zXad32aX6ZkatadS7nuIPSMiCGowPGMmxqbVaC5bqDcNjbwQ%2FlaZdQ%2FiiEvZuAYY4RuKd3TVTVLWqrw%2FVTI%2BoYux4PMPLIgehr3gF5ux9UfakGE3Jj6pMJavqL8GOqUBp9s0hjpPmzB%2BXSacb8I2i6HfVvz3fUTdvo9h%2BRZb2UHQCTFAq74Gr06g%2BOIP8AJfE5pfzykdu%2B%2FqpEuYZbbe5yKfQ3I6gupl6ywGXC6UUF2ZAPEav1n8z8CMsvTpzjK9BWYi3355Bwlap0GJKwSuMbKsupBQAFcegvmvijsl8KixHz8NW%2Ft5Q8BieNDHWg%2BLMJJI8f%2BMf%2BSqbxwlW4QTAmRuRJ6y&X-Amz-Signature=3c28b76fde28926f73e9c799b6b2286731bfc8ae98dd89132c72958c472d02fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
