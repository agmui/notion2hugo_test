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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ADYFK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEoJ2Xptei3zHHfz7tjHuKki53FQODaIFYtJqujcYT%2BIAiEA%2BXp4crs8zfR09w8N0xUxZzAGe6YF5O6zTOoVF1UMgGMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNcPaJtVLOfW4k0CQyrcA872xbRrr0zrwwATwL1KN3Da3w3mRQrESCC32FM2PReVATuG5s4b7rxv2h40I3ZqrQSZhuCN0Wf3jlOO3GCXZJlNLW822mZkQl%2B4iamZzpPk8XDl%2Bs1b9832YUeM2Q59iF3sYrZHh7aFgJIMpE3X8AZ8jAf7wTqMotNqCFD1xlwNm5SGKwkfH5cqD2uQnehoWYqj%2Bhw958WWq1RDId6t22rJ5DCg3NvhsHOWuV1QHX1w2MXWf3tcI11Jgh2peL6X%2FjXZDtBDXrv8R5A23mdVFfIryHMXDUQIwQGVhJ%2Bb1fnzPpksOlXNwSEl72xmusvOU%2Bs0ME1PRCVWpyG5Bnz4EqMDqa31aZOjoQGJoCv7cOF%2BN5%2B3kT1IoRV1UgmGtQF3B0Ooi2zdBXHwsH%2B%2B2E9NkeJgSsLiq2mpLSWcqsr6zHHJR4UhDjZfUGQivRmSqRkon31ARJqcmDve1IEg0KqOP%2FPn0X9yCbFBsil6MLnvT7EYpsAkWZ3hyY0zpNEn8llttqPev91vCP3z%2Fkgn6RLzSlMgHssbdqR3OkehvvPq7k4tlH0hbzNesBW7gPCeFVThRHhy%2B3NEBmaP1FovE9%2FClt%2FkK3B%2Fb%2BEiLxOST0fnbn5OsJiS7i2KBfrURcJ3MLPps74GOqUBksS51zPBjCztic99Axn8pGyJyWSJQUnUxsR4mJkyCDF%2FTB20hZi9tIDWsuCun5y7BOyKES6GXt559uMxWUc2LhAzSryHZ3Ko%2BYryiNLENbsu2w8pjHdc%2BBjkBO%2BpwmcZUefHH2CmKB7Sk5%2Fw2r2fPkhgzesnIJLv0I91TCGrVnFy6qSTcsG9XOJa9p3%2Blmgv1YNu9mhMKMzyj4yFALQeAhe0mnJN&X-Amz-Signature=21f4817a819186e6814104a71af6d3787d0129202f6579f0637e7f1c1d2dfa02&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ADYFK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEoJ2Xptei3zHHfz7tjHuKki53FQODaIFYtJqujcYT%2BIAiEA%2BXp4crs8zfR09w8N0xUxZzAGe6YF5O6zTOoVF1UMgGMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNcPaJtVLOfW4k0CQyrcA872xbRrr0zrwwATwL1KN3Da3w3mRQrESCC32FM2PReVATuG5s4b7rxv2h40I3ZqrQSZhuCN0Wf3jlOO3GCXZJlNLW822mZkQl%2B4iamZzpPk8XDl%2Bs1b9832YUeM2Q59iF3sYrZHh7aFgJIMpE3X8AZ8jAf7wTqMotNqCFD1xlwNm5SGKwkfH5cqD2uQnehoWYqj%2Bhw958WWq1RDId6t22rJ5DCg3NvhsHOWuV1QHX1w2MXWf3tcI11Jgh2peL6X%2FjXZDtBDXrv8R5A23mdVFfIryHMXDUQIwQGVhJ%2Bb1fnzPpksOlXNwSEl72xmusvOU%2Bs0ME1PRCVWpyG5Bnz4EqMDqa31aZOjoQGJoCv7cOF%2BN5%2B3kT1IoRV1UgmGtQF3B0Ooi2zdBXHwsH%2B%2B2E9NkeJgSsLiq2mpLSWcqsr6zHHJR4UhDjZfUGQivRmSqRkon31ARJqcmDve1IEg0KqOP%2FPn0X9yCbFBsil6MLnvT7EYpsAkWZ3hyY0zpNEn8llttqPev91vCP3z%2Fkgn6RLzSlMgHssbdqR3OkehvvPq7k4tlH0hbzNesBW7gPCeFVThRHhy%2B3NEBmaP1FovE9%2FClt%2FkK3B%2Fb%2BEiLxOST0fnbn5OsJiS7i2KBfrURcJ3MLPps74GOqUBksS51zPBjCztic99Axn8pGyJyWSJQUnUxsR4mJkyCDF%2FTB20hZi9tIDWsuCun5y7BOyKES6GXt559uMxWUc2LhAzSryHZ3Ko%2BYryiNLENbsu2w8pjHdc%2BBjkBO%2BpwmcZUefHH2CmKB7Sk5%2Fw2r2fPkhgzesnIJLv0I91TCGrVnFy6qSTcsG9XOJa9p3%2Blmgv1YNu9mhMKMzyj4yFALQeAhe0mnJN&X-Amz-Signature=5a9ca512cc0a02592bf20652b4ffa8297d1b87fe2a80d0b48ad67e75e8ce3a04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
