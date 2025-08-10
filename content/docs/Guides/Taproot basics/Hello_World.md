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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POG4U5D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FtVS7XcssdW1TIH9zj4%2FEyY96356AIK1MlZYjEfQj0AIgcLhN9o1mfKtA7MiUQem%2FxK2slf8hGAiqhIuyNApAcnsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRHQH%2B1rPOGQGD9GyrcA7oCk0YtdFZH3%2FvKlxF%2BpKYJLdD2U06nxAgD1BNpXeeP1SXtZsrN92pXLMg5d5jycikc%2F1BYOpMMYPmHwxPeSCSjnyuL%2FmNeC4ILOTc8KUzJgqrdSb4MSKe05kEgEXdribdcVcKRDJzNNcJFBBH12pqaMWPvCX5zDEU8dwnUXzFoDBeN3VfrPtj6656RHFsNgFxvHXaq6L9YxUpXUaYc%2FSYjThw4MnEB9eHoVIz2nscHelKPuoqOvIg4bVJLnuRkb0a1uEq1nzeLylOiaZphm5ibvGY%2FlsGWDwcSeW2lBBjdtbvJf6oZy7BthHaZgu9scSZUGpn%2BOlOZ%2Bhptml2yb0QVRw56EdF450cK6pZwENhwHlsKgknPSlHaMjZ5v%2FRkRTQBTuw%2FOd3jYzP9AEFHJa25wDhCoNLxWPt%2B1j8eF3ZltYgTuwD4o95i5p36pQW2NGDy%2BZvOsa1Wy6YTf0PVq2BDz2YhQ4Y%2Bg0qhJxmMhAjE2I%2FEI24U8zulSf8VtzbJNIrCsYJrAJhBlXc07dn0l7hrP07AiBVWnemuPptPqYjbj5%2FvMlE56hRr3OhoOlQNt85O2JM85nneGSXN513oxJJgCIfOMSx66YetIt1wYV5atQKsCeAU921AZ8mpMLD14MQGOqUBbpBg27jF82iT3ctFbySdU%2B93pJM%2FZ5muTFdTBgKU%2BGAvFiPbbhIjojY7S7B%2BX7imJXtJrhDRgmjmwiZACI%2Fv4r920z8V61zew8AZE9TiLJ1UjTUo7bTCBOj6SJijXnzlvrE212DNVUln91LeuKxpPEtQXPhwHM5pFdaGmCgXvZZ7rKsedzu6hFkfvtwlcNyKhLvsly5h%2B8Ah43n32C%2BMJern2NNg&X-Amz-Signature=bb8ce9bd32935d26aff01b7033a0be7699e1eec1571b6aed22cb790b75bb37a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POG4U5D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FtVS7XcssdW1TIH9zj4%2FEyY96356AIK1MlZYjEfQj0AIgcLhN9o1mfKtA7MiUQem%2FxK2slf8hGAiqhIuyNApAcnsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRHQH%2B1rPOGQGD9GyrcA7oCk0YtdFZH3%2FvKlxF%2BpKYJLdD2U06nxAgD1BNpXeeP1SXtZsrN92pXLMg5d5jycikc%2F1BYOpMMYPmHwxPeSCSjnyuL%2FmNeC4ILOTc8KUzJgqrdSb4MSKe05kEgEXdribdcVcKRDJzNNcJFBBH12pqaMWPvCX5zDEU8dwnUXzFoDBeN3VfrPtj6656RHFsNgFxvHXaq6L9YxUpXUaYc%2FSYjThw4MnEB9eHoVIz2nscHelKPuoqOvIg4bVJLnuRkb0a1uEq1nzeLylOiaZphm5ibvGY%2FlsGWDwcSeW2lBBjdtbvJf6oZy7BthHaZgu9scSZUGpn%2BOlOZ%2Bhptml2yb0QVRw56EdF450cK6pZwENhwHlsKgknPSlHaMjZ5v%2FRkRTQBTuw%2FOd3jYzP9AEFHJa25wDhCoNLxWPt%2B1j8eF3ZltYgTuwD4o95i5p36pQW2NGDy%2BZvOsa1Wy6YTf0PVq2BDz2YhQ4Y%2Bg0qhJxmMhAjE2I%2FEI24U8zulSf8VtzbJNIrCsYJrAJhBlXc07dn0l7hrP07AiBVWnemuPptPqYjbj5%2FvMlE56hRr3OhoOlQNt85O2JM85nneGSXN513oxJJgCIfOMSx66YetIt1wYV5atQKsCeAU921AZ8mpMLD14MQGOqUBbpBg27jF82iT3ctFbySdU%2B93pJM%2FZ5muTFdTBgKU%2BGAvFiPbbhIjojY7S7B%2BX7imJXtJrhDRgmjmwiZACI%2Fv4r920z8V61zew8AZE9TiLJ1UjTUo7bTCBOj6SJijXnzlvrE212DNVUln91LeuKxpPEtQXPhwHM5pFdaGmCgXvZZ7rKsedzu6hFkfvtwlcNyKhLvsly5h%2B8Ah43n32C%2BMJern2NNg&X-Amz-Signature=bc3a55f984a7e741bf07e07b514547978935f608a53f622e3b7ab58bacc9115d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
