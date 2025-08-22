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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5VKZNSL%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDADqlBGxknvH4jla2flsErsIgx1f%2FlTfkiOl%2BEvxFPWAIgdZ7a0VxI4pPCwyt6dzkzqQflu6ApqweOkVbrHSXFWOMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNno0fnbt1N0qxJIircAxNwkoSzFSVyttPhdUAURnjUj0o61bvSIDzJyaJAFQGwuf%2FBSC0QzZo3ZkUVvh10Oxq7TFwDqUgby4xmohGb1vw8iuXEj2IYlDS2UDYPBTJ8iE24O1opE2igZOMdCO42J5%2F%2F0Eg5whb3jTt%2FdjeAXGDdeCo4ubU5BvA%2F16OZbYI49uz0D3fzOKChKNRb3mlLXByrrSeGoSu1vQUWpUIJ9ON1vLtgrsN2i5kyDUBllg3oGaeeIzYQCCKADcc%2Fexl4g6%2B0EuiucDP0mSCoYP3mOUwbra%2BvODRrwLV1HzXp0ZJY25z0mIdDw6kXF7h5QV4O7mvLi3IZ9a5TJk%2FATcFWGxdARFijZ4DzxJtfbb5k6mcxmzEmaYjzdEPo%2Fu4ce3K3ltKfRFigWuTzV3TkVptCSXOUIpDwDZmTBr0yH0DXGtrdWGalMNQ4dOzlcyNTK7PjH3KjUUfjKHFZ7%2BoKJak3CyTIxQqo5Qh3ZQln7BZ7TcvEbnAJvW4OhU9MTixGrZkmyZdmVhjqMiTpQ1CQqMs%2F4JIBn2R2hRkRCgqJu4n43sra0y3vAY3SJ3USZz1kiYovd%2FYxyOTnwRYwdf12HSkT%2F%2FeN0q%2F2g7UP%2BT7ZGMHHcyS%2FLSUo9o70YPCk%2FlVsMITznsUGOqUBNqC%2F5TPL89fNiDaqC%2BBc9CfbfjEiIIQK%2BlqmtJ3G215BrqJ4XbW%2BAKeqPnhV2SHRWYg%2Bz4AqUvwQhSpxKUyDZQNiWRL8RPVt5gmtQVGzwQlZsmpavhquSf9huE0fzOqvoWTtFsv2%2Bj9J24xsDR2pgbRIVH8cyLBmfQQVwyCNcb51HGNzpC8WT77VAMcnZsxHULS3ebUUwlPyxt%2BNDNG0VHe2OYP1&X-Amz-Signature=38e7a77ae8243a4620f7f73c6bc2124311c88c73c6075d527203c9e1383ba600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5VKZNSL%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDADqlBGxknvH4jla2flsErsIgx1f%2FlTfkiOl%2BEvxFPWAIgdZ7a0VxI4pPCwyt6dzkzqQflu6ApqweOkVbrHSXFWOMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNno0fnbt1N0qxJIircAxNwkoSzFSVyttPhdUAURnjUj0o61bvSIDzJyaJAFQGwuf%2FBSC0QzZo3ZkUVvh10Oxq7TFwDqUgby4xmohGb1vw8iuXEj2IYlDS2UDYPBTJ8iE24O1opE2igZOMdCO42J5%2F%2F0Eg5whb3jTt%2FdjeAXGDdeCo4ubU5BvA%2F16OZbYI49uz0D3fzOKChKNRb3mlLXByrrSeGoSu1vQUWpUIJ9ON1vLtgrsN2i5kyDUBllg3oGaeeIzYQCCKADcc%2Fexl4g6%2B0EuiucDP0mSCoYP3mOUwbra%2BvODRrwLV1HzXp0ZJY25z0mIdDw6kXF7h5QV4O7mvLi3IZ9a5TJk%2FATcFWGxdARFijZ4DzxJtfbb5k6mcxmzEmaYjzdEPo%2Fu4ce3K3ltKfRFigWuTzV3TkVptCSXOUIpDwDZmTBr0yH0DXGtrdWGalMNQ4dOzlcyNTK7PjH3KjUUfjKHFZ7%2BoKJak3CyTIxQqo5Qh3ZQln7BZ7TcvEbnAJvW4OhU9MTixGrZkmyZdmVhjqMiTpQ1CQqMs%2F4JIBn2R2hRkRCgqJu4n43sra0y3vAY3SJ3USZz1kiYovd%2FYxyOTnwRYwdf12HSkT%2F%2FeN0q%2F2g7UP%2BT7ZGMHHcyS%2FLSUo9o70YPCk%2FlVsMITznsUGOqUBNqC%2F5TPL89fNiDaqC%2BBc9CfbfjEiIIQK%2BlqmtJ3G215BrqJ4XbW%2BAKeqPnhV2SHRWYg%2Bz4AqUvwQhSpxKUyDZQNiWRL8RPVt5gmtQVGzwQlZsmpavhquSf9huE0fzOqvoWTtFsv2%2Bj9J24xsDR2pgbRIVH8cyLBmfQQVwyCNcb51HGNzpC8WT77VAMcnZsxHULS3ebUUwlPyxt%2BNDNG0VHe2OYP1&X-Amz-Signature=ad2a5e09aaf9f108ece92940c34e562cb144dc70e6ba3ddfd78837d1251319a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
