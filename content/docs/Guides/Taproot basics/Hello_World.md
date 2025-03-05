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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTWORCN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzbbZgGKIMoniHneKDvb3Mu2UPJPZL95WeMvmPRbCGGAiEAmeZv0BbZP9%2FPeuWwp7Z5z7%2B9iy8W3nGLsFCNmsKCJ4Aq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNSajlcyPJOqE%2FFegCrcA%2FZVk5X66nUmOQrJEsgOSzFZFkCeWFLEtCXvDah%2BaE9FYVuI%2Fx209zjqr074f%2FS6f%2BtdE39TNW2mEuCNj26iLoRcWB8XXrebYbc4whZgwyrvEWEWx2fZNrI8THyIjQQ9%2FVYPMtpio73ShSXhqk82zb%2BLkhDTI2VoI03GT6XF0cmCEz8E%2Fl8pQTwa%2FrEwu5E%2Fh9nauUc39yZEzTjPYxVYRqI1H5I3%2B9tCruYj%2FWC8%2BUQSdM%2B7n84s8tTj%2FQP51dHqseb24%2BNoZKxRyip4JbMzOHFqSBzCfBGKs0siUX7zP0pfM%2Fr0sgV%2BVcgIM6OEm15%2B2whTN6N4EoUgWsnCWYmWeOssChZEqIwpRkBdCtEEAzVwQFJ5DDHfZiEpSnsMCLQMtwYgGrL4rAdLg1ifkvooc%2FgEzZUbdHwh3tVvnQr%2BvVhKM%2BS%2Bf%2FqOFHBV0VjNnRSrZSIQknh98z2%2F949RjRL9VdFkyansFMcyA%2Bct9TT0hAU9NmDTRbPXC49OAXabudujneo%2F4s0SrSbovzCQrgsy5HcmG%2FewkdDzXXU9TWP3KNPK57M4dZni0o5zMVqjevXiSba8L6MB7w%2FUQsaS2%2BRK5tw5Uh%2BvY08V3mXOLfi2qZZCjeGdgzNT0eL6%2F50RMMiDor4GOqUBGi%2B%2FXBMz7rFY%2BiwucReWiifIIz9rmDgqcfpVMgVyvf5StbHF61p7n5v53my8U5K%2FhoR5551eRECxGU%2BQpX0VoYkBiVi%2B3yPKXzFi9YJ27Atkvq1o55HrJ9diuJok6hYbtkiIJ%2BZU6cxajdrXR7SqIDjXKsW%2B4%2B48XAL9QvmlhMVIYkCcLrXk02vKA9BK1IDFhbolRHaeb9TJH1YfSFOBkh6b%2Bnp1&X-Amz-Signature=317c362de92ef3bece984e33354787f68faaf9a2b48b3bef246083ff4edce12f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTWORCN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzbbZgGKIMoniHneKDvb3Mu2UPJPZL95WeMvmPRbCGGAiEAmeZv0BbZP9%2FPeuWwp7Z5z7%2B9iy8W3nGLsFCNmsKCJ4Aq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNSajlcyPJOqE%2FFegCrcA%2FZVk5X66nUmOQrJEsgOSzFZFkCeWFLEtCXvDah%2BaE9FYVuI%2Fx209zjqr074f%2FS6f%2BtdE39TNW2mEuCNj26iLoRcWB8XXrebYbc4whZgwyrvEWEWx2fZNrI8THyIjQQ9%2FVYPMtpio73ShSXhqk82zb%2BLkhDTI2VoI03GT6XF0cmCEz8E%2Fl8pQTwa%2FrEwu5E%2Fh9nauUc39yZEzTjPYxVYRqI1H5I3%2B9tCruYj%2FWC8%2BUQSdM%2B7n84s8tTj%2FQP51dHqseb24%2BNoZKxRyip4JbMzOHFqSBzCfBGKs0siUX7zP0pfM%2Fr0sgV%2BVcgIM6OEm15%2B2whTN6N4EoUgWsnCWYmWeOssChZEqIwpRkBdCtEEAzVwQFJ5DDHfZiEpSnsMCLQMtwYgGrL4rAdLg1ifkvooc%2FgEzZUbdHwh3tVvnQr%2BvVhKM%2BS%2Bf%2FqOFHBV0VjNnRSrZSIQknh98z2%2F949RjRL9VdFkyansFMcyA%2Bct9TT0hAU9NmDTRbPXC49OAXabudujneo%2F4s0SrSbovzCQrgsy5HcmG%2FewkdDzXXU9TWP3KNPK57M4dZni0o5zMVqjevXiSba8L6MB7w%2FUQsaS2%2BRK5tw5Uh%2BvY08V3mXOLfi2qZZCjeGdgzNT0eL6%2F50RMMiDor4GOqUBGi%2B%2FXBMz7rFY%2BiwucReWiifIIz9rmDgqcfpVMgVyvf5StbHF61p7n5v53my8U5K%2FhoR5551eRECxGU%2BQpX0VoYkBiVi%2B3yPKXzFi9YJ27Atkvq1o55HrJ9diuJok6hYbtkiIJ%2BZU6cxajdrXR7SqIDjXKsW%2B4%2B48XAL9QvmlhMVIYkCcLrXk02vKA9BK1IDFhbolRHaeb9TJH1YfSFOBkh6b%2Bnp1&X-Amz-Signature=6844470b2853f7a15c5fde8080c388a4ebe00c1aba4fbdac9801340dfe2523b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
