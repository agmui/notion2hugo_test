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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ2RLK34%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Br2Gb4Avr3FMPQVXWPiwtuQInpFfcTp8aAbOgpnlMbwIgIukoQn72h9woh0GFcj69la%2BtQS3ZQDep36Bnt52u528q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBFIgTS6YlB2uwrsPircA4X3g%2F2KHjeDohIoCSm7aQDZJdwlBWF6ZkKES1FD1SEsZCn5aZlcpmHPh5HS9CmBGcvthg4CQUA8He2PanI3ACIyzmFGpxPq%2BFFDel0HxN7kxAEOLI2OvTxWabLxqdGpprdS6tMGG%2F%2BZ8%2B6yoQ8WT4MtOwbRMq%2BzCBqrjThm6VRo2uDaY9vrpagiik9MpBFlvGQy%2Bcv09sN2VeTYuuMWB3gxAjJKhv2el3b2t3l2hkh7mC4rxLtEkg7d2TbZioUMg15B5hjwJeDTmItNFiCuTjNR3%2Fw1m8453D8HPo%2Fh4y6oqs6OcxrhvxrV6LwsmFGePLcwExMdFH8PHjjVfLpQAhPzbLYN4W%2ByUo3uGJRvucroKCf7h9KZSy0d3ekb6WYJOFit7P%2Bx637wNNvulN%2BOz1SrtzcVphezMSinqPj4yO7rBLzieDyI2QCSCgdv5D0MFuEvzX81C05zjE2ZG8n5lI6d7KusgWM6VzzEwugjyvwFpOzlRAXRkwGGCyscYr4GUszOYLmC2yVLDb3xsB806jBPT10ilycHHb%2Br%2BRYnVOsy0Zk6FgFJyJkD49whQFBcQI%2BcFvMxObxClFt%2FJTZsC6jOy9gwRK6PIlXlzll75XotsbAqvBRKxd0wr2GoMPTjm8EGOqUB8qoCn2PfZPNOdz9QYoVVgoJ6Ft2B4jxUbE8cBk0BsGesH18cFARAovesTQaOJygJ2ctASYgif2JuNn3fQkNM4N7D38SuQdLRALhVNyxZIodPFnOdHgMEq6qoA2g%2Ft5esb%2ByWQY94q8LEASqD98bdUDyFIeSZq4f8KHAN04Xd4rch7Mu4SuBWDUP0n7p064ML5AAqlmEXOTWtQQcFLWuBq1G67B0k&X-Amz-Signature=0705a463d8416bed22c8a5845326052d4927318fa383ac977ad31fc6c5c5a40e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ2RLK34%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Br2Gb4Avr3FMPQVXWPiwtuQInpFfcTp8aAbOgpnlMbwIgIukoQn72h9woh0GFcj69la%2BtQS3ZQDep36Bnt52u528q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBFIgTS6YlB2uwrsPircA4X3g%2F2KHjeDohIoCSm7aQDZJdwlBWF6ZkKES1FD1SEsZCn5aZlcpmHPh5HS9CmBGcvthg4CQUA8He2PanI3ACIyzmFGpxPq%2BFFDel0HxN7kxAEOLI2OvTxWabLxqdGpprdS6tMGG%2F%2BZ8%2B6yoQ8WT4MtOwbRMq%2BzCBqrjThm6VRo2uDaY9vrpagiik9MpBFlvGQy%2Bcv09sN2VeTYuuMWB3gxAjJKhv2el3b2t3l2hkh7mC4rxLtEkg7d2TbZioUMg15B5hjwJeDTmItNFiCuTjNR3%2Fw1m8453D8HPo%2Fh4y6oqs6OcxrhvxrV6LwsmFGePLcwExMdFH8PHjjVfLpQAhPzbLYN4W%2ByUo3uGJRvucroKCf7h9KZSy0d3ekb6WYJOFit7P%2Bx637wNNvulN%2BOz1SrtzcVphezMSinqPj4yO7rBLzieDyI2QCSCgdv5D0MFuEvzX81C05zjE2ZG8n5lI6d7KusgWM6VzzEwugjyvwFpOzlRAXRkwGGCyscYr4GUszOYLmC2yVLDb3xsB806jBPT10ilycHHb%2Br%2BRYnVOsy0Zk6FgFJyJkD49whQFBcQI%2BcFvMxObxClFt%2FJTZsC6jOy9gwRK6PIlXlzll75XotsbAqvBRKxd0wr2GoMPTjm8EGOqUB8qoCn2PfZPNOdz9QYoVVgoJ6Ft2B4jxUbE8cBk0BsGesH18cFARAovesTQaOJygJ2ctASYgif2JuNn3fQkNM4N7D38SuQdLRALhVNyxZIodPFnOdHgMEq6qoA2g%2Ft5esb%2ByWQY94q8LEASqD98bdUDyFIeSZq4f8KHAN04Xd4rch7Mu4SuBWDUP0n7p064ML5AAqlmEXOTWtQQcFLWuBq1G67B0k&X-Amz-Signature=5d7896ab2e0b382ae1fc81f90a77067e103c82afe43b1299a16fa7f4de1174bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
