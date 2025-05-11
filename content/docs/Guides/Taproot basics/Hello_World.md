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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2SEI7U%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIF%2FwVty8wEPAYzk5Hczc%2BfEKPKuAGXuumK8ragLm4hwFAiADb7Xq2DXNrKqVGpiCiqXyIK4l3KRNLJ1T1KxH7nB4ZyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfgTUHOjPBQi8p90KtwD4YH6ZxsPQLMBDaLhsa4hXoQ3isZNSlCBhvmfYEkVS0h6JNFwfBMdOfn%2B7zwhd4EdaXIqWeslFwvPB1xGMwTcHh%2B8b3cHTAPhjYd5mwFqGnpwC3ZFgRzqgyGgJfnDHie9bpU5onnKTQ5t3eboGuYjUZQ0r%2B7FZqPpbSuYUZ4Y%2B7HVpPolAEkwMEZbL3majy5RJe%2Fmp%2FsyGtWqFi14hVb3Z5r9aumrujCjzhfjnEU06NH%2FsImh%2B28qnyFelMhhgpm%2FgZiQc%2FLxsUkYGg%2B3wSBzYxhe5Fbp7KyLxAYjfb0TUbpYeokdQS1q97aPzxWi6VtBmqkwN%2BEzmCmFz9e9EXYmbXnC8zAn94pusnkD2ig6I9UqmU2skzKbBIH4%2Ftq6jqC4pdLS8rnGJblsF2RE3mp9%2BDPHuQyjrLrbMYdcdhB%2B3Mt%2BcK0rwU8F1pTlhTMFE0pa6QUaB4qm8%2FQ%2Bl8nYv9XUks1xleiIVy6EBi%2FAi3RA0O%2B1eOCFOYGJFB0EEie2YYYrBewhpv98mbQdCTM4obZWcX4u5lZw7%2F8bFYqY07iN98BBJ%2B6G0sKGD2o3Kmw84rn%2FaP0eja8hbNQbU1iTcQi8KHgVypmM3HyZp6G1IP13OsmYxDTa%2BmprHczr6xIw39L%2FwAY6pgEhBO3P8jppvloD2fnac9dC6bHSAQr0XEHu7QOUMNTHYkjnROtgAZ8rm3i%2FzE4mhm%2B56VpinET6CbbEq94EjJSdIUHGuI36SKoisi9q%2BxWoy3YgGJKvX6hglmmD1c5%2F%2F%2FUdFIbLkI3%2Fh6VaN1q%2Flt1KAbSy8PMmDBr7t%2BhHflGZNglJy9hng4gHqDk4WtuxHLFhaOi087JRsuLWGtMVnyr2r54nP9q8&X-Amz-Signature=b418decdecf305af346c1d9732e12ac160df3467191c5136714806647115767a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2SEI7U%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIF%2FwVty8wEPAYzk5Hczc%2BfEKPKuAGXuumK8ragLm4hwFAiADb7Xq2DXNrKqVGpiCiqXyIK4l3KRNLJ1T1KxH7nB4ZyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfgTUHOjPBQi8p90KtwD4YH6ZxsPQLMBDaLhsa4hXoQ3isZNSlCBhvmfYEkVS0h6JNFwfBMdOfn%2B7zwhd4EdaXIqWeslFwvPB1xGMwTcHh%2B8b3cHTAPhjYd5mwFqGnpwC3ZFgRzqgyGgJfnDHie9bpU5onnKTQ5t3eboGuYjUZQ0r%2B7FZqPpbSuYUZ4Y%2B7HVpPolAEkwMEZbL3majy5RJe%2Fmp%2FsyGtWqFi14hVb3Z5r9aumrujCjzhfjnEU06NH%2FsImh%2B28qnyFelMhhgpm%2FgZiQc%2FLxsUkYGg%2B3wSBzYxhe5Fbp7KyLxAYjfb0TUbpYeokdQS1q97aPzxWi6VtBmqkwN%2BEzmCmFz9e9EXYmbXnC8zAn94pusnkD2ig6I9UqmU2skzKbBIH4%2Ftq6jqC4pdLS8rnGJblsF2RE3mp9%2BDPHuQyjrLrbMYdcdhB%2B3Mt%2BcK0rwU8F1pTlhTMFE0pa6QUaB4qm8%2FQ%2Bl8nYv9XUks1xleiIVy6EBi%2FAi3RA0O%2B1eOCFOYGJFB0EEie2YYYrBewhpv98mbQdCTM4obZWcX4u5lZw7%2F8bFYqY07iN98BBJ%2B6G0sKGD2o3Kmw84rn%2FaP0eja8hbNQbU1iTcQi8KHgVypmM3HyZp6G1IP13OsmYxDTa%2BmprHczr6xIw39L%2FwAY6pgEhBO3P8jppvloD2fnac9dC6bHSAQr0XEHu7QOUMNTHYkjnROtgAZ8rm3i%2FzE4mhm%2B56VpinET6CbbEq94EjJSdIUHGuI36SKoisi9q%2BxWoy3YgGJKvX6hglmmD1c5%2F%2F%2FUdFIbLkI3%2Fh6VaN1q%2Flt1KAbSy8PMmDBr7t%2BhHflGZNglJy9hng4gHqDk4WtuxHLFhaOi087JRsuLWGtMVnyr2r54nP9q8&X-Amz-Signature=3c9804f380f077395f9156442837a08d8901b581a489545cf8a143be3f06b1bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
