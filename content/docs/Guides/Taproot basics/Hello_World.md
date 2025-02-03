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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ54XLCT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbnWmReGpm2E82B0ftZjBQl60Au49omf8J1pTh2AgpPAiEA0B8%2BWgv0HGU8jYgW8TJnrUdDWK55QyxJ8vGsbkfDnTEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDIO94V%2FbVKaLdSe%2ByrcA%2FmypGyHjRmCihVEZsTPGaaRe67eyrn70%2FnQGgOXGIJJBsajhfPvlnHiBcbC8JwLN0T5FvtQlVTayPGnFy0EQ2hNmdpZuTsKVbnhmtCj%2BBuX%2BUCMc234CZLMvFBREOc4Y5IJUzKRAv4DzamXX2GBFpC5%2FC%2B%2FL9aoGBIw6GmWUMtgybzDCbNjVXKbuDW2w%2FXRdrPMm95Y3vy6p149CCTUgAAcudYs5cTRwDtI2DXVriOGYmsojiLfWKYoB1wQsFl%2Br0gTiQQfilE%2BzeJKllUR%2BSPSE8ldmaZfd8CCSOkvl9YEblO%2FMNOvxv69nVLGPCW%2Fz%2FXFceyCyNAtOTvmrNzgLR1fZE%2B%2FGIWDmH8ADafVNAARW2N%2FJ9WwTSUXWXO3ezJcxFzpkwTeC40BxoXWG8g2tws9p11VVmBJarc5%2BYLduLoryH7%2FuQxhCwd4K5FO9xBJjeKv4%2BqoaUBD0mjaRJcEIC8yYyk%2FrsH3dv2jXIHa5VzUsZmi1%2Bqfv09Z0siDL9A%2FdwhCq27H%2FaH8jn7QMUavNxefnVv7Jodk9L2na4%2B0t4E3Fpc9RYw8J8qPgXwLXM5LMN6r7k58cqDG%2F%2FaX8rSxm33fvRCEKVTeKWjSDxyJCaeOHbwmu52wRAvGbz6iMLb0gb0GOqUBfYhx%2ByGtGxHwxYTNRpl1NIbVd4hmMZaUEDg%2F8o1hLe1Vl1WVWJG22bARq0GaabjBbCcgZAPrROp26dIqAluA0VcUCG5I2073W94rKv4eLbi46CRwPUzDdQ5FN07yvPEMcv7xja0r4q2yJfugJzOMUeBK41hAt4xG0U7AikCnqvUwMbNJ6c2MzdNsR5OZ8fOmL7ssHfvQCujgfPnOllyLlzatbgwG&X-Amz-Signature=5efef3c087592ee52ff8c1f6fc9815f71118364a1f146710172752d208015d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ54XLCT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbnWmReGpm2E82B0ftZjBQl60Au49omf8J1pTh2AgpPAiEA0B8%2BWgv0HGU8jYgW8TJnrUdDWK55QyxJ8vGsbkfDnTEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDIO94V%2FbVKaLdSe%2ByrcA%2FmypGyHjRmCihVEZsTPGaaRe67eyrn70%2FnQGgOXGIJJBsajhfPvlnHiBcbC8JwLN0T5FvtQlVTayPGnFy0EQ2hNmdpZuTsKVbnhmtCj%2BBuX%2BUCMc234CZLMvFBREOc4Y5IJUzKRAv4DzamXX2GBFpC5%2FC%2B%2FL9aoGBIw6GmWUMtgybzDCbNjVXKbuDW2w%2FXRdrPMm95Y3vy6p149CCTUgAAcudYs5cTRwDtI2DXVriOGYmsojiLfWKYoB1wQsFl%2Br0gTiQQfilE%2BzeJKllUR%2BSPSE8ldmaZfd8CCSOkvl9YEblO%2FMNOvxv69nVLGPCW%2Fz%2FXFceyCyNAtOTvmrNzgLR1fZE%2B%2FGIWDmH8ADafVNAARW2N%2FJ9WwTSUXWXO3ezJcxFzpkwTeC40BxoXWG8g2tws9p11VVmBJarc5%2BYLduLoryH7%2FuQxhCwd4K5FO9xBJjeKv4%2BqoaUBD0mjaRJcEIC8yYyk%2FrsH3dv2jXIHa5VzUsZmi1%2Bqfv09Z0siDL9A%2FdwhCq27H%2FaH8jn7QMUavNxefnVv7Jodk9L2na4%2B0t4E3Fpc9RYw8J8qPgXwLXM5LMN6r7k58cqDG%2F%2FaX8rSxm33fvRCEKVTeKWjSDxyJCaeOHbwmu52wRAvGbz6iMLb0gb0GOqUBfYhx%2ByGtGxHwxYTNRpl1NIbVd4hmMZaUEDg%2F8o1hLe1Vl1WVWJG22bARq0GaabjBbCcgZAPrROp26dIqAluA0VcUCG5I2073W94rKv4eLbi46CRwPUzDdQ5FN07yvPEMcv7xja0r4q2yJfugJzOMUeBK41hAt4xG0U7AikCnqvUwMbNJ6c2MzdNsR5OZ8fOmL7ssHfvQCujgfPnOllyLlzatbgwG&X-Amz-Signature=cccb7441a73509eddb374825e10830ffb7248b602ddd27ec862f96ddc360ec77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
