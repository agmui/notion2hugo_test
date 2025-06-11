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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYUN7D2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjRtkjZDQ0leb2KEtfwYb%2BSMb8JD2XWaPBIeEZD5o93AiAqVmtc6BoigpWy8lrxS2ZnfUcPSEhcnIepgB3DfldbbiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUxOkGl8vlS8HSi0jKtwDTpyjkEDJkcm1mr4i4JCvA8aBgX7IDEF16OYGVNFOus3f0N0RpKOKjWG8lvqA7sdjTHWcqec11LyPAsxG6dl%2Br381Vds7lQ1VnX3pfIVoiVa8F6I4Wqm3PKk0woz2NtE7w6rRpc%2BGjSQyciE6aMwXsD7DlOyPLvve2osxDVdhlByKgGcvsQx9z0ReyAci%2FLKyAITN38x2Ese8uZklQUW5ZpRmlAZXJhhD3p3yPRP4%2FB8D8o5FrgbHbBwQvzQO0NyvWgj0SdmLaBmg7uQEyA8qt1ROQI3lLOsvX5%2FMI6DIjoXGitHE43tn4%2F%2FNMj7Z60wAa%2FHhTrJ9dahyEtpTPN%2BT%2BjJzbAhfl5QMJNJj7PHLLznSolyPoyYrdimhSklKO8Z8V5FNuND6OFgZzcWZ3im6MnqFmhr%2BuqJvMJNnmE050XeUd5T4wyTR5rw3ViTNUNyBJBA%2FK8bxYFoHv6%2F03VYp61sXTe5SXWQxw91KwHggIZ%2FMIScySpTvDFVRFQLw6XrXk%2BfjKV0OaOng7KwReDV9wsgY55LaKwBXHNmRroduW5t6tREBiMEVgZZju%2B9iPzpCkHrRsJk6UxRj0Fwak%2B%2FgGil1RMK750ygofamn7B%2FtvnzIDKaic1ax9Hc6pIw5YGlwgY6pgH4xRfbogrYDZ6SoMtm57alljynBTHIlKi54HAnUwPGACqmSoXXKzJVrQwLR2Auk4K7O5ibEOZkgetFrFVfaCUG31bwUSiQ1PxVvcHn4fhwTxbYrhSCusW5DAtd0znWzwamODguFwo%2BZ8ukmfTPHEy7BHExsPUz6DkjUi3evBcDlJxidoacjnIkqRguDkY2lKWyiF9hOrQ69KNuLA9FNUtVq5cxp5vr&X-Amz-Signature=60832116b883063c3667a30745de9184d2eafd8e61c3b460512ffa9979410c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYUN7D2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjRtkjZDQ0leb2KEtfwYb%2BSMb8JD2XWaPBIeEZD5o93AiAqVmtc6BoigpWy8lrxS2ZnfUcPSEhcnIepgB3DfldbbiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUxOkGl8vlS8HSi0jKtwDTpyjkEDJkcm1mr4i4JCvA8aBgX7IDEF16OYGVNFOus3f0N0RpKOKjWG8lvqA7sdjTHWcqec11LyPAsxG6dl%2Br381Vds7lQ1VnX3pfIVoiVa8F6I4Wqm3PKk0woz2NtE7w6rRpc%2BGjSQyciE6aMwXsD7DlOyPLvve2osxDVdhlByKgGcvsQx9z0ReyAci%2FLKyAITN38x2Ese8uZklQUW5ZpRmlAZXJhhD3p3yPRP4%2FB8D8o5FrgbHbBwQvzQO0NyvWgj0SdmLaBmg7uQEyA8qt1ROQI3lLOsvX5%2FMI6DIjoXGitHE43tn4%2F%2FNMj7Z60wAa%2FHhTrJ9dahyEtpTPN%2BT%2BjJzbAhfl5QMJNJj7PHLLznSolyPoyYrdimhSklKO8Z8V5FNuND6OFgZzcWZ3im6MnqFmhr%2BuqJvMJNnmE050XeUd5T4wyTR5rw3ViTNUNyBJBA%2FK8bxYFoHv6%2F03VYp61sXTe5SXWQxw91KwHggIZ%2FMIScySpTvDFVRFQLw6XrXk%2BfjKV0OaOng7KwReDV9wsgY55LaKwBXHNmRroduW5t6tREBiMEVgZZju%2B9iPzpCkHrRsJk6UxRj0Fwak%2B%2FgGil1RMK750ygofamn7B%2FtvnzIDKaic1ax9Hc6pIw5YGlwgY6pgH4xRfbogrYDZ6SoMtm57alljynBTHIlKi54HAnUwPGACqmSoXXKzJVrQwLR2Auk4K7O5ibEOZkgetFrFVfaCUG31bwUSiQ1PxVvcHn4fhwTxbYrhSCusW5DAtd0znWzwamODguFwo%2BZ8ukmfTPHEy7BHExsPUz6DkjUi3evBcDlJxidoacjnIkqRguDkY2lKWyiF9hOrQ69KNuLA9FNUtVq5cxp5vr&X-Amz-Signature=956de36ee1345f362427194029d4e1eadeb8ff0fb5f22d652313aaee7a6350af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
