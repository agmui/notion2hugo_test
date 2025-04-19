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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWWHS7L4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC5wOvxJWhmyq6FJUDJb%2BPEcUMru9J4dTca1ZMG3D2ifAiAc%2F6WO3cmftuncQ%2BBdfSmV7B4nxrCf1YTuixhX%2BhpmMCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjnhX1ve448aA6pz0KtwDuQdIh1C%2FblC2kNrCG6Qithfrz22QF2odYYRkwfb2gjWR%2FMa8Wl0fDbiMdBw3CMfAF04XZk%2B9AHdnkfT5QusCIeXIGrY8V2XNdTul0web1S64SpkYBxYeBU9Q3azLi7poreRlNY%2BGYZBFLtfS7WIVfdbqE8mdWkALZmquEwJnOv%2BE4ypBao0v%2BvmPLRfqFlqG3qxPCg19uKYzw%2B%2FIAMMnxquRYB98V9G9XOo%2F8kbhygdC6ohxg%2B9Lwq775yeMX993DlCOPtMEC8cwQIfREpTh0WWEkEj3k1qZsbjTByzTUtuteHkFdPGVh7%2FvreDmCiBqLOIAmc2kzMxp9Ygqkt8%2BLh%2Fw3eYP%2Fc68IQM0kfwJ0CXJ6FYy%2BXVrSKLlaxM3tXoltrsF4C1FxTt%2Bg%2FUL1tPzKcvT09cyem8VW8t9Dq%2BFPD%2FgczCrvnuYbarxY2vN0iDKNS4pAdVXInK8KtbKmDAmOsE36w5PUYhf%2FIJ2V%2Bz3TWsqMUuUFsg0ehSpN1Eg0caWU1La76fAkLfg4rrHmBT4a%2FLDfhjt%2BLqm%2F2ac7boJJu3zNupnzYKUlHsO%2ByuL3bM%2Fh7oeeN7DvqBprB3WEi6TMpdHAhyVacyzN%2FQHvqLX9KVwc%2FcoxRoltjXBdrYwuYKPwAY6pgHG8hVq0e82l4u9ScS6izzlzXUsQ8%2B3mRK75Lg6ZbsyZxEnTf%2BdPXimdhiJnFnr%2BAqORlBFSA5Y00A2beavAEBxHf%2FpJD7zJdsVL2VPq9nynbOFgfxNa5mc1%2B1cEwixT7mvNufYjHSInfXAz8Pbieo7HWdT1lZmLsAxej23Lpmjcrr0tQsgUtDid6CQpYhx8zqVplj%2BqgubTzk4zmp7nz43OmGwEm8f&X-Amz-Signature=d029fdb8bc6fbf94e8f05d25a742c4e7c9bd79564d13ea5282829e5f237fe439&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWWHS7L4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC5wOvxJWhmyq6FJUDJb%2BPEcUMru9J4dTca1ZMG3D2ifAiAc%2F6WO3cmftuncQ%2BBdfSmV7B4nxrCf1YTuixhX%2BhpmMCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjnhX1ve448aA6pz0KtwDuQdIh1C%2FblC2kNrCG6Qithfrz22QF2odYYRkwfb2gjWR%2FMa8Wl0fDbiMdBw3CMfAF04XZk%2B9AHdnkfT5QusCIeXIGrY8V2XNdTul0web1S64SpkYBxYeBU9Q3azLi7poreRlNY%2BGYZBFLtfS7WIVfdbqE8mdWkALZmquEwJnOv%2BE4ypBao0v%2BvmPLRfqFlqG3qxPCg19uKYzw%2B%2FIAMMnxquRYB98V9G9XOo%2F8kbhygdC6ohxg%2B9Lwq775yeMX993DlCOPtMEC8cwQIfREpTh0WWEkEj3k1qZsbjTByzTUtuteHkFdPGVh7%2FvreDmCiBqLOIAmc2kzMxp9Ygqkt8%2BLh%2Fw3eYP%2Fc68IQM0kfwJ0CXJ6FYy%2BXVrSKLlaxM3tXoltrsF4C1FxTt%2Bg%2FUL1tPzKcvT09cyem8VW8t9Dq%2BFPD%2FgczCrvnuYbarxY2vN0iDKNS4pAdVXInK8KtbKmDAmOsE36w5PUYhf%2FIJ2V%2Bz3TWsqMUuUFsg0ehSpN1Eg0caWU1La76fAkLfg4rrHmBT4a%2FLDfhjt%2BLqm%2F2ac7boJJu3zNupnzYKUlHsO%2ByuL3bM%2Fh7oeeN7DvqBprB3WEi6TMpdHAhyVacyzN%2FQHvqLX9KVwc%2FcoxRoltjXBdrYwuYKPwAY6pgHG8hVq0e82l4u9ScS6izzlzXUsQ8%2B3mRK75Lg6ZbsyZxEnTf%2BdPXimdhiJnFnr%2BAqORlBFSA5Y00A2beavAEBxHf%2FpJD7zJdsVL2VPq9nynbOFgfxNa5mc1%2B1cEwixT7mvNufYjHSInfXAz8Pbieo7HWdT1lZmLsAxej23Lpmjcrr0tQsgUtDid6CQpYhx8zqVplj%2BqgubTzk4zmp7nz43OmGwEm8f&X-Amz-Signature=a1b7fc7bbf97b7288c0cadf2972e02334768b15af3c4ce2eb3e6dc0970641273&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
