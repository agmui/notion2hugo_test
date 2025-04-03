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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPTF7SZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4DsrXXOyz10aWwc8en6WwtD%2BEf9TVvAzIkQa9j6dFgIgHdKfB2WzvPZnFPPvwrQE0ZME01RcP1Ur4JefL2wycDsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2KDEXn6scGAMU9DyrcA6CkHSjeqpe80JPDIMYuBbtMrJJvq6cadfD2BD9xlXuS%2Fk4cARPX%2BvlHvgZ1PirTCi9mRXoieY76y4MRvxOSMjS5jdeB9xsyVRbkDW51sCNXpGz09hhmjEgdCvw0GJgivzioScE78PzxE%2BG7bGtBiPCRJI6Vx98dA6saGlqlr5hCEiU%2Bx1h3ngpapjNLh%2BTiB5aM75%2FNUixm8fNKCgWOA0mg%2BSGgs3uo%2BDNMKMpC31R%2F%2F7nUf8iEKZy71nY3If%2BhZlH20lIOQKtXSahIIxHUkB6mCuoHLw6PEoF25ipjuEqLsg%2FZWQD8gLY6cgIqQ9QtQkveSi%2F%2BoFINBnh2n2lvo%2B%2F6PTkHp2R3NpMGw%2BWjz2kgjkms0%2F5FwexraCAH4JaK0%2FGtKovYE9xYgItXFC40%2Fx4ILtXtObspspcFR2AlgL7FgMwihBkWFLc1ixpClzU6OWRr65Ks74HAzarzSFwEx1TZz7BmGIc5iPO9%2Bk8vupzrXUBXsUSbdhxEgrxskRQODy55vvxbiYY0pTA9ZBBOq21RxV4GYlmEwkQ4HCQqTQFel%2BKavQ61bCoe4updTpbTAKyhUOmkD3XMOld6OfGA0pyFkSbQYPhQt%2FyRYvXvozRSkAladop9n2tES9n1MI%2Bxub8GOqUBjdITU%2BUgbpUXbvmso9Cu7dNPypVhgjXZV9YQgjtEb6g%2BQl7JHD%2FrqCuMS6VbZhzydF72MNrPSLgcncXpiFSSMeKjNmhwy%2FrqRqvrV45zFeYBaXRcPVvDTASDKe74p%2BbhHO80GsYFdrp3Ot%2B7BW9GXhM0t2eviKZvjk2%2FK9mfyJX%2F0ulXejQ%2FAz4kKsWWSA92%2FVVIzK3cTS%2B%2BSazpaxU9sJjQwVlb&X-Amz-Signature=22670666d1423d034d975e6c6b25d7b365d9de8965a0659ac1152b86bbe93bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPTF7SZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4DsrXXOyz10aWwc8en6WwtD%2BEf9TVvAzIkQa9j6dFgIgHdKfB2WzvPZnFPPvwrQE0ZME01RcP1Ur4JefL2wycDsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2KDEXn6scGAMU9DyrcA6CkHSjeqpe80JPDIMYuBbtMrJJvq6cadfD2BD9xlXuS%2Fk4cARPX%2BvlHvgZ1PirTCi9mRXoieY76y4MRvxOSMjS5jdeB9xsyVRbkDW51sCNXpGz09hhmjEgdCvw0GJgivzioScE78PzxE%2BG7bGtBiPCRJI6Vx98dA6saGlqlr5hCEiU%2Bx1h3ngpapjNLh%2BTiB5aM75%2FNUixm8fNKCgWOA0mg%2BSGgs3uo%2BDNMKMpC31R%2F%2F7nUf8iEKZy71nY3If%2BhZlH20lIOQKtXSahIIxHUkB6mCuoHLw6PEoF25ipjuEqLsg%2FZWQD8gLY6cgIqQ9QtQkveSi%2F%2BoFINBnh2n2lvo%2B%2F6PTkHp2R3NpMGw%2BWjz2kgjkms0%2F5FwexraCAH4JaK0%2FGtKovYE9xYgItXFC40%2Fx4ILtXtObspspcFR2AlgL7FgMwihBkWFLc1ixpClzU6OWRr65Ks74HAzarzSFwEx1TZz7BmGIc5iPO9%2Bk8vupzrXUBXsUSbdhxEgrxskRQODy55vvxbiYY0pTA9ZBBOq21RxV4GYlmEwkQ4HCQqTQFel%2BKavQ61bCoe4updTpbTAKyhUOmkD3XMOld6OfGA0pyFkSbQYPhQt%2FyRYvXvozRSkAladop9n2tES9n1MI%2Bxub8GOqUBjdITU%2BUgbpUXbvmso9Cu7dNPypVhgjXZV9YQgjtEb6g%2BQl7JHD%2FrqCuMS6VbZhzydF72MNrPSLgcncXpiFSSMeKjNmhwy%2FrqRqvrV45zFeYBaXRcPVvDTASDKe74p%2BbhHO80GsYFdrp3Ot%2B7BW9GXhM0t2eviKZvjk2%2FK9mfyJX%2F0ulXejQ%2FAz4kKsWWSA92%2FVVIzK3cTS%2B%2BSazpaxU9sJjQwVlb&X-Amz-Signature=29e3c7b2592323c4e16872afeacc413dc07d242d2639ceca6978b3feed86333d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
