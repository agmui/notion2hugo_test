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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAA27JJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQm%2FWBIK3tTnhDr3Llkyvp91xdZcUl0GDyzpPaP1dAiEAqK02GMd6j2OBAnWqzfqD0ZfQgdfiF%2FiQPN4HMYzdupIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9dvCzmCg5%2F4kdOxSrcA4jekx2%2FSZwwKlFS2yqkwRmPH4mdi4HAlZ930fPXabAZYRQQzme5HFhhBim4ZZV%2FMZW%2FZzSinysWNGjR2aspFiwl%2FarqF5bX87jG9rIewQD1TpEcgnoDF9ePxKIkldxOfBWHan3ZJspODpVMEfZkp%2B1J5Q3ukJ68L%2BOXEcMglg2N%2F1sjhrb2jNxug5T5W3FvHkPI0VcngDbREVYvKce%2BqKLYyFGD8Ue6p8lJx4w%2B8j%2Fm64ewtrUhY3l0jTGWSNAYaY7JHL5C09L3KCGgUnff3LMDp209xPaQT7zeWkyfviqAzYmYmNMksVRNnSa98lFTLTjzZ7kqp1DH1w79vzBjqR5iqfrs3fEhEkBSBaGdAwPeV9CGDO3wf%2BUkdPKWu1d7aOlbHPOyBsxVOhVyHfELrF7mRJ8nS5qd22XT5La2joa0Xn8O7RZ3FsGyKBJ0rTX0OJ87HlD5wIopE4fRRa0syc1eqxs3PiDttBSolPRf7nfRi7HfMYK%2FMDufwj5JBxCnFsu69w3pejIIqVbBvRFuK0EDy70%2BVLDsilH4UBFW5RFFt6buIF8hEzZTVr452TJkNFL882YPUa5YmtorAFDuorhBBzZwZ6BxWsxuPkSbU057eKhz9uitPmh0LYLjML%2F%2Bw8MGOqUB9PNXIXJLoqE0MC3iNOrkLYaEPAdaV%2FJB8UxcUqcfTeCB4nFGydFDJ1iMmD50ZXgSKL1qkSd9u2DJGQFAvnfZv526tUQBMNiDWhkk9RXdw0drTndW20UBw0HpflLtxUgf%2BJsNJZlvL3nPkz6Ve%2FixM2h%2BoJnUycZK9hlyJt6mt5wMBHzAYlT%2BF8%2B2yHVrgEbgoPx0qJmq1R%2FvFzq%2B%2B49wNI4Zj2f4&X-Amz-Signature=c9dab825bee7d594c79db6b61f6ef434a6b778a6e2f25a05c34a00b76a624a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAA27JJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQm%2FWBIK3tTnhDr3Llkyvp91xdZcUl0GDyzpPaP1dAiEAqK02GMd6j2OBAnWqzfqD0ZfQgdfiF%2FiQPN4HMYzdupIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9dvCzmCg5%2F4kdOxSrcA4jekx2%2FSZwwKlFS2yqkwRmPH4mdi4HAlZ930fPXabAZYRQQzme5HFhhBim4ZZV%2FMZW%2FZzSinysWNGjR2aspFiwl%2FarqF5bX87jG9rIewQD1TpEcgnoDF9ePxKIkldxOfBWHan3ZJspODpVMEfZkp%2B1J5Q3ukJ68L%2BOXEcMglg2N%2F1sjhrb2jNxug5T5W3FvHkPI0VcngDbREVYvKce%2BqKLYyFGD8Ue6p8lJx4w%2B8j%2Fm64ewtrUhY3l0jTGWSNAYaY7JHL5C09L3KCGgUnff3LMDp209xPaQT7zeWkyfviqAzYmYmNMksVRNnSa98lFTLTjzZ7kqp1DH1w79vzBjqR5iqfrs3fEhEkBSBaGdAwPeV9CGDO3wf%2BUkdPKWu1d7aOlbHPOyBsxVOhVyHfELrF7mRJ8nS5qd22XT5La2joa0Xn8O7RZ3FsGyKBJ0rTX0OJ87HlD5wIopE4fRRa0syc1eqxs3PiDttBSolPRf7nfRi7HfMYK%2FMDufwj5JBxCnFsu69w3pejIIqVbBvRFuK0EDy70%2BVLDsilH4UBFW5RFFt6buIF8hEzZTVr452TJkNFL882YPUa5YmtorAFDuorhBBzZwZ6BxWsxuPkSbU057eKhz9uitPmh0LYLjML%2F%2Bw8MGOqUB9PNXIXJLoqE0MC3iNOrkLYaEPAdaV%2FJB8UxcUqcfTeCB4nFGydFDJ1iMmD50ZXgSKL1qkSd9u2DJGQFAvnfZv526tUQBMNiDWhkk9RXdw0drTndW20UBw0HpflLtxUgf%2BJsNJZlvL3nPkz6Ve%2FixM2h%2BoJnUycZK9hlyJt6mt5wMBHzAYlT%2BF8%2B2yHVrgEbgoPx0qJmq1R%2FvFzq%2B%2B49wNI4Zj2f4&X-Amz-Signature=7013c33c0b382f7dce2fe2901d8d7677d56c1db34877fd323eb31e79a2dceafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
