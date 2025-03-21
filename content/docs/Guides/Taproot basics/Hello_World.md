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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F727HRC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCyPDu8LfIBKIibCyQqkiKYAAgS8%2Ft3Ih76hYnFntdMGQIgI%2FJ2%2BGd4JQruUlcH0VX3k%2F25gF3GijbUj3WdyDppCRgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFdIfGbjjbezqHBbSrcAzGYkb4mnQuaI03fnGjaDLgTbO%2BpWnJ3m9%2BSfWwehLgN2n7097pwKs1JH2mc8gGcruw%2FbYuFJtMVPjB5EXE%2BYoeMKlhZW%2BGI%2F0UF1bcoED2%2BYlYpyIzBPwSXTYml5M4hhUUz7Czb%2BFYENnRkgCg0eR6x%2FOOdoZ7aAv1ykmmSqWSUPLfUqxtHV89JIYfOGHbmeyHJ95b%2B0oIthodLnZ37%2FY%2BdHafhbSuFK6l7nMUzqexWYjH9D8Vl7Y5ACycHIkibfLz3Z%2FTeEaY%2FzWUUH5tTVLrYywouHnrd%2FKF0zIlAkmoDWgrxl3G%2B7p3M8h6JsoL4ATjxyzBs1Wzf%2BNVUC6FEekeSytpllI5fuBTIq1Tpz95ZB2YaCb7w50jlod0X3iJFlEEBcV2WL7w%2BD6iC6DUWWl1BZ53QEncWKBLZpty%2FMex5%2FpbdPJ2%2BthFJhOnLVzhLpRVCT%2Ba7mw2PGadWCnNXx3fubmC9hMsFm4IPmjdnYafb%2FJqhd7sXwq4cip0SBDl4kKSOnBndyf%2FvpspG8UqkfH26exWr26tveaVDIF6b19AmTroyiW%2FmX4KkLVidPhjAbwHYAxQrVC8YajiXjIMs1ycEx%2BOUsu9pc9Kp5ZO9bLSEpc5Yuv4OSatunPSxMO359L4GOqUB2P2biy5AZCzyCCOY5FTr5bw8s712aZsvgNfCWxbHm1McOGmyGkumXxBdtfJbKYz1tVuGx5akooCbXUmCiL7DMiGS6ONrz3bq2%2Fdx1wOTnNLlbB100%2BTnHRwWTv8oGUFIlMF0c4pWCCiAe0byERXf71E2GabSjkCk2SQ6w9983fzZPo%2FGhnUbMfwy7KBYLVTouWx0BS47GoXextW4aiJY9hYkoANe&X-Amz-Signature=66645b6387a454e67a3f0b8dd04560424c9983722b80893a4d6401c1a4cea059&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F727HRC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCyPDu8LfIBKIibCyQqkiKYAAgS8%2Ft3Ih76hYnFntdMGQIgI%2FJ2%2BGd4JQruUlcH0VX3k%2F25gF3GijbUj3WdyDppCRgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFdIfGbjjbezqHBbSrcAzGYkb4mnQuaI03fnGjaDLgTbO%2BpWnJ3m9%2BSfWwehLgN2n7097pwKs1JH2mc8gGcruw%2FbYuFJtMVPjB5EXE%2BYoeMKlhZW%2BGI%2F0UF1bcoED2%2BYlYpyIzBPwSXTYml5M4hhUUz7Czb%2BFYENnRkgCg0eR6x%2FOOdoZ7aAv1ykmmSqWSUPLfUqxtHV89JIYfOGHbmeyHJ95b%2B0oIthodLnZ37%2FY%2BdHafhbSuFK6l7nMUzqexWYjH9D8Vl7Y5ACycHIkibfLz3Z%2FTeEaY%2FzWUUH5tTVLrYywouHnrd%2FKF0zIlAkmoDWgrxl3G%2B7p3M8h6JsoL4ATjxyzBs1Wzf%2BNVUC6FEekeSytpllI5fuBTIq1Tpz95ZB2YaCb7w50jlod0X3iJFlEEBcV2WL7w%2BD6iC6DUWWl1BZ53QEncWKBLZpty%2FMex5%2FpbdPJ2%2BthFJhOnLVzhLpRVCT%2Ba7mw2PGadWCnNXx3fubmC9hMsFm4IPmjdnYafb%2FJqhd7sXwq4cip0SBDl4kKSOnBndyf%2FvpspG8UqkfH26exWr26tveaVDIF6b19AmTroyiW%2FmX4KkLVidPhjAbwHYAxQrVC8YajiXjIMs1ycEx%2BOUsu9pc9Kp5ZO9bLSEpc5Yuv4OSatunPSxMO359L4GOqUB2P2biy5AZCzyCCOY5FTr5bw8s712aZsvgNfCWxbHm1McOGmyGkumXxBdtfJbKYz1tVuGx5akooCbXUmCiL7DMiGS6ONrz3bq2%2Fdx1wOTnNLlbB100%2BTnHRwWTv8oGUFIlMF0c4pWCCiAe0byERXf71E2GabSjkCk2SQ6w9983fzZPo%2FGhnUbMfwy7KBYLVTouWx0BS47GoXextW4aiJY9hYkoANe&X-Amz-Signature=d16b9852417ea38cbe9255999d49cb9243d70e76be326c7539adaa8a10894e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
