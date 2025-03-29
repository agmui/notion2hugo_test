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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVIBJ7H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChTotwDtzgQl5iFF8lONfiPyi0aTuCUXEZBi5bZpi%2FzwIgDlgbRZlSQHlwldpzhj8MCDs2tLqMN4mS4mMwup06tZQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHYMk9aTVhB3vlp1%2FSrcA4YSwmHb2ntCFzRIMhINAAs%2B5TYWXRSHEXpNjZoSwNmQQjk9ZXpzIG7UIgMqi8DDDYemvXX%2FBKjVqDjg2NVDebIMY56fJPFq3yQEW1YVcxusKg1doBh%2Feytg9Le3bqJhGEEehl78QYCKxR%2FzOxiwSS0pxs0dfG5s4gnmqo1tp9DbBJ6SLiVw0sQnWxjJ6DWH6giYDfC1a5PSrb2H2aw1i6xfEEyO4vx9vGM5w%2F9aAPQwcCkkKw414XrY8GDyRx9DUlfU4iwQadS2WU3cx6Ay3joVJQN%2Frcko1QJkX56b132k1a3vIyIqLEAip7zCP4PBvlXIJNfAn%2FuRWarSj4mYOVNXByGqewHOZhDwdPU3hs%2BfWyvO%2F32YOAq%2BfFRDPxaWS%2F5WdHI82H%2FwyZToemdogxKluttDs5SWPY71SgIUm%2BEvd8OSm8y2s0ST2sw7GGS4eIzgo9C4GtFOqQteRig0UQ9lSofLsBtaGbqkJh3uEanfwOmeO1Xd4D8NiqoNmFbot4DOuphV3dCsl7eci2EJTfgq%2FuAVE%2B0A2jW1ybDQ7938zlOX08HnH%2FLPFLN%2Bxxb6VhYBwQ0jtwq6RRo6BfRof0E1Nzn%2FnjoqzejXc5PmLxpnkkxdcZ2Es%2F476VLqMPGKob8GOqUBe9%2F5iWxyncQvfNtgA9arfAp%2FC4Tvu9m%2FoQ9GabexTae%2BL88rMDmjtgUfiKk2ZnoThDv9xdaSLmumle%2B8R%2BVFIT%2BP6SHyNFqet21zqFfaTSEXcwvGdPZnp%2BFvpwE3LhpZ8jxcMYhIUUfKPk37vECFEzxBXSAEkvYBt7CWMlQa5w%2BcRy5zEh7K1ryYTcRhK7%2FYjU5UgrgfV%2FM6QKERk%2FDAuVSF5e1O&X-Amz-Signature=3cf24b0601c78f4c66f25cc9114a3cfa10259e1babdc8dafb26342cedc1de711&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVIBJ7H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChTotwDtzgQl5iFF8lONfiPyi0aTuCUXEZBi5bZpi%2FzwIgDlgbRZlSQHlwldpzhj8MCDs2tLqMN4mS4mMwup06tZQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHYMk9aTVhB3vlp1%2FSrcA4YSwmHb2ntCFzRIMhINAAs%2B5TYWXRSHEXpNjZoSwNmQQjk9ZXpzIG7UIgMqi8DDDYemvXX%2FBKjVqDjg2NVDebIMY56fJPFq3yQEW1YVcxusKg1doBh%2Feytg9Le3bqJhGEEehl78QYCKxR%2FzOxiwSS0pxs0dfG5s4gnmqo1tp9DbBJ6SLiVw0sQnWxjJ6DWH6giYDfC1a5PSrb2H2aw1i6xfEEyO4vx9vGM5w%2F9aAPQwcCkkKw414XrY8GDyRx9DUlfU4iwQadS2WU3cx6Ay3joVJQN%2Frcko1QJkX56b132k1a3vIyIqLEAip7zCP4PBvlXIJNfAn%2FuRWarSj4mYOVNXByGqewHOZhDwdPU3hs%2BfWyvO%2F32YOAq%2BfFRDPxaWS%2F5WdHI82H%2FwyZToemdogxKluttDs5SWPY71SgIUm%2BEvd8OSm8y2s0ST2sw7GGS4eIzgo9C4GtFOqQteRig0UQ9lSofLsBtaGbqkJh3uEanfwOmeO1Xd4D8NiqoNmFbot4DOuphV3dCsl7eci2EJTfgq%2FuAVE%2B0A2jW1ybDQ7938zlOX08HnH%2FLPFLN%2Bxxb6VhYBwQ0jtwq6RRo6BfRof0E1Nzn%2FnjoqzejXc5PmLxpnkkxdcZ2Es%2F476VLqMPGKob8GOqUBe9%2F5iWxyncQvfNtgA9arfAp%2FC4Tvu9m%2FoQ9GabexTae%2BL88rMDmjtgUfiKk2ZnoThDv9xdaSLmumle%2B8R%2BVFIT%2BP6SHyNFqet21zqFfaTSEXcwvGdPZnp%2BFvpwE3LhpZ8jxcMYhIUUfKPk37vECFEzxBXSAEkvYBt7CWMlQa5w%2BcRy5zEh7K1ryYTcRhK7%2FYjU5UgrgfV%2FM6QKERk%2FDAuVSF5e1O&X-Amz-Signature=46fb98ea252455659ff9ceb44f947741045ee364d10d88007466e2bdf984961e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
