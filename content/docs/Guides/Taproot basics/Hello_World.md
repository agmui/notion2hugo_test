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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7WOTT6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCOR10mgx09ovu4I8rd4TOo68r9LXsEzsmTNUsRTpvvwIgBe%2BOcrmSugLNhk9t14CsCKOfMLh2fvYSfX3Lrxjc3UUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBBDJAivli8qpOEESrcA7l1QFj9fYW3s1pewPiMqaOG27V1jGX16DxGyYo2edQDGfExICss1wYOC7PP3O4vJkUWbITj%2BY3dkhBgvHx2k7t467dQ5z4484%2BwMftNp213EFYefh8jCkcvRA%2FGdY0sd5hUiEPsWGU5shDN3G12Kxw4iIwNjm0k38muO2NabFFv%2Bt3vsOEuzhi2Zv6W9g7pySTpUyqEAzXw7pQgkvWL3sQ518FMuYAbOMVMzoIwXt2vmsZDF3HBFKhFv8stpAyRa7PKG1Yf8WiRxbTpfJ5I8oo3Ph4TPyRkCkGjVup167CzWJMEPsvSnDV7Cnhw6ARjD5CA55p7mAD6VS6MtbLeaAKMNESclfjKrVmS1vE5BUuciP44q%2BJG9Pzj%2F3uzQdgZ6g8qcQ%2Fw9sBxvz2S4FWs%2BPJ6Xcz6GlArXOi8bV4WIggTqgBFyNCW8BHbQtb%2BgrFqcVpKH7BXZlt8laLdVd%2BLgpwVFA3MEfx1X%2BzRMzv%2Fr9vu1ul7JTPmI3ul3%2Bl7dRodljSxsYgc18ZmVfdmRezKxIbLj8pyG0Ooc4ywHsrHaZjhz8YIVZRHMc%2FCfPRtkj6PdEpa%2BOelM0ciLZbPHxiRXJk2UAhHK6EBh1iz2U5HB0PniKRvq%2FAd%2Fta7hRIAMMCv2MIGOqUBQEyLYK9NZQtEUEGXONk57wMw2ovFrnZ88ecS%2FDUAMYZImevqFobvcNMeQP3iOKCdYY3tld0YzxPjq04nVqXoJw6AR0%2BA0ORbTJE361fKKMed9OwnQ7rKqCL03VVbriFpY4LbricdB6lMuEPfIYEg7QOfLsJFKbifEC0KZN%2BMXSpaciR5g%2FBRy8rQcke6GHqvqtUGCzJOx6yoO%2BDs%2F2uzLfZbcs1d&X-Amz-Signature=9f5032d9d188bf78b6d5740cdc6db9f6927a5b128b9da485be61589e46ebd366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7WOTT6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCOR10mgx09ovu4I8rd4TOo68r9LXsEzsmTNUsRTpvvwIgBe%2BOcrmSugLNhk9t14CsCKOfMLh2fvYSfX3Lrxjc3UUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBBDJAivli8qpOEESrcA7l1QFj9fYW3s1pewPiMqaOG27V1jGX16DxGyYo2edQDGfExICss1wYOC7PP3O4vJkUWbITj%2BY3dkhBgvHx2k7t467dQ5z4484%2BwMftNp213EFYefh8jCkcvRA%2FGdY0sd5hUiEPsWGU5shDN3G12Kxw4iIwNjm0k38muO2NabFFv%2Bt3vsOEuzhi2Zv6W9g7pySTpUyqEAzXw7pQgkvWL3sQ518FMuYAbOMVMzoIwXt2vmsZDF3HBFKhFv8stpAyRa7PKG1Yf8WiRxbTpfJ5I8oo3Ph4TPyRkCkGjVup167CzWJMEPsvSnDV7Cnhw6ARjD5CA55p7mAD6VS6MtbLeaAKMNESclfjKrVmS1vE5BUuciP44q%2BJG9Pzj%2F3uzQdgZ6g8qcQ%2Fw9sBxvz2S4FWs%2BPJ6Xcz6GlArXOi8bV4WIggTqgBFyNCW8BHbQtb%2BgrFqcVpKH7BXZlt8laLdVd%2BLgpwVFA3MEfx1X%2BzRMzv%2Fr9vu1ul7JTPmI3ul3%2Bl7dRodljSxsYgc18ZmVfdmRezKxIbLj8pyG0Ooc4ywHsrHaZjhz8YIVZRHMc%2FCfPRtkj6PdEpa%2BOelM0ciLZbPHxiRXJk2UAhHK6EBh1iz2U5HB0PniKRvq%2FAd%2Fta7hRIAMMCv2MIGOqUBQEyLYK9NZQtEUEGXONk57wMw2ovFrnZ88ecS%2FDUAMYZImevqFobvcNMeQP3iOKCdYY3tld0YzxPjq04nVqXoJw6AR0%2BA0ORbTJE361fKKMed9OwnQ7rKqCL03VVbriFpY4LbricdB6lMuEPfIYEg7QOfLsJFKbifEC0KZN%2BMXSpaciR5g%2FBRy8rQcke6GHqvqtUGCzJOx6yoO%2BDs%2F2uzLfZbcs1d&X-Amz-Signature=32d7e72e28d532e23c382ef956890bd2755df9e6f885f2e252b7ea9408d97dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
