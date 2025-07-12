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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MHPW6R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ5vwV3b3MEqd7ZBVCGP2wPsqoG%2FOImhBgmrS3lIlyWAiEAn9ZtY3jWe2qcIRUVz0Qcy5nEvQau3y%2FwuXkes1xKK80qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3RaoVFKd2IwK1lZyrcA8hu1HiAeM77gA%2BTF07TBiGqhSoFM0uFB%2BiVHOQmf6U3moTnjO2s%2FEXxVnXwIfm0aYuZKoLIe%2FOvTvJZYpsJBnDj4WfeJdSVO9dKRPaq2x7iTPh5pXEWhxU%2BmW8sPCHnb5gnF9ZmZBDvcZovmJQBjPUMd%2BpzKAc7eQwYEnyGnZR%2BZGRWjsDOkds1HL%2BZ1RPFb7dWG%2BcBP4alEJQA%2FHEOoJ17aVJ0cwe3RvhI%2Bxnb7sBdH4o1kOXO4MmG2qMY%2FQ5ut17WWnUDKhrYIY%2BlGV5Zo%2BedwXPuiyTZw1%2FMVaEfrIwy%2FUad4qMboiMsB05VLDhBY7VtwZyrZbmVCjBpnI%2BZLC2OIDfpxNqI9HQ9yNf9J3ztMOD1whjVx8%2BYKFsUSB3jOA9TMA6JAzbh9v5aSd2QTDkGwv2tc9HNnIXt4YEygZhqpSI032jolncuFDB5E7vdBA6wUpV7fJXqpCvxCOLmRnkbVKxG9cofGPUz18G0V%2FGZVON37rSVaO57iVlfaqWXheF5Fdw3p7hD1ygemXR2m4jiJtHEQQ%2FzJD0Qf59md9%2FvIotxGzpUWuWst8iTvA%2BZhSvjhs3kPFpOYpibppv6Tkvp3Pal1XJPYkR%2FT7wlzHbYy1HQ4k%2BE5hER6DSVMO7YysMGOqUBQ%2B6d6ohfxwRJMlgm4jTbGucUVsCH5EvBdJshHe2jyyLfOXSpQATyi8i3lgJN8yxjiKJu5mfkQoo0tcqLty7QPiIxtQLzWHrY%2FMfn%2FWnSKl3y%2BV1%2BHdoxQ0d86lk5F65wjEgSjr%2F%2BZrl2FeBFi3qJPBYJz%2FhvgWKrBlFLuW1Ja8qVBlTgVcZo7wDLehUewYC9z2r%2Bmr5iMp9fCRYacHyqCefydJOR&X-Amz-Signature=b6d97c7e55c1cc1ecfa17bf0044518c0a5e602be2181d7720f485ab3332f2531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MHPW6R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ5vwV3b3MEqd7ZBVCGP2wPsqoG%2FOImhBgmrS3lIlyWAiEAn9ZtY3jWe2qcIRUVz0Qcy5nEvQau3y%2FwuXkes1xKK80qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3RaoVFKd2IwK1lZyrcA8hu1HiAeM77gA%2BTF07TBiGqhSoFM0uFB%2BiVHOQmf6U3moTnjO2s%2FEXxVnXwIfm0aYuZKoLIe%2FOvTvJZYpsJBnDj4WfeJdSVO9dKRPaq2x7iTPh5pXEWhxU%2BmW8sPCHnb5gnF9ZmZBDvcZovmJQBjPUMd%2BpzKAc7eQwYEnyGnZR%2BZGRWjsDOkds1HL%2BZ1RPFb7dWG%2BcBP4alEJQA%2FHEOoJ17aVJ0cwe3RvhI%2Bxnb7sBdH4o1kOXO4MmG2qMY%2FQ5ut17WWnUDKhrYIY%2BlGV5Zo%2BedwXPuiyTZw1%2FMVaEfrIwy%2FUad4qMboiMsB05VLDhBY7VtwZyrZbmVCjBpnI%2BZLC2OIDfpxNqI9HQ9yNf9J3ztMOD1whjVx8%2BYKFsUSB3jOA9TMA6JAzbh9v5aSd2QTDkGwv2tc9HNnIXt4YEygZhqpSI032jolncuFDB5E7vdBA6wUpV7fJXqpCvxCOLmRnkbVKxG9cofGPUz18G0V%2FGZVON37rSVaO57iVlfaqWXheF5Fdw3p7hD1ygemXR2m4jiJtHEQQ%2FzJD0Qf59md9%2FvIotxGzpUWuWst8iTvA%2BZhSvjhs3kPFpOYpibppv6Tkvp3Pal1XJPYkR%2FT7wlzHbYy1HQ4k%2BE5hER6DSVMO7YysMGOqUBQ%2B6d6ohfxwRJMlgm4jTbGucUVsCH5EvBdJshHe2jyyLfOXSpQATyi8i3lgJN8yxjiKJu5mfkQoo0tcqLty7QPiIxtQLzWHrY%2FMfn%2FWnSKl3y%2BV1%2BHdoxQ0d86lk5F65wjEgSjr%2F%2BZrl2FeBFi3qJPBYJz%2FhvgWKrBlFLuW1Ja8qVBlTgVcZo7wDLehUewYC9z2r%2Bmr5iMp9fCRYacHyqCefydJOR&X-Amz-Signature=b2a83edd38326012c51045725c8b473b71bb47c6d5fb4f5a4d949099a9c1ad66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
