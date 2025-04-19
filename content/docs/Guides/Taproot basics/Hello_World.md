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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVQIWWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCy%2BOz2HqRsiS9IO%2BA64Nxv16KvORGI71xE0tMF0pKL5wIhAM%2B%2BGmSdfm9DpGWF0XhfMzsMkNtC%2FpG9M3kmbKpnMEhVKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwel%2Fg9qoG%2BKy1SsQgq3AMR%2B7pmxdhPwtOuRjo1zPDhRqH%2FkHOUcAHO4S5Ix0uBUfXkbyPS1xH6nurbNq7Yyt%2BTTT6Ll0j8KYsMvSfkC0uiQTp%2BKHmn5s8O1uDz8JYLoFMUfX9uC9kjY09JoAAG72tUvm9LfkGMAIc3Tp7Ay3npzWAnEVK68mcpSvlnJTZid5TpollMjPQe3EgKm0RSJ3mh6NJ2rosuHdf0IXulQVn8jjwu2VzdL%2B%2B4bSnsP4Tx4m4Yx5d6PlnhXuifphcfgXghJzw4NAl78DLV4Q%2B6K%2BcGjjRGA%2FiZAo4XXCtnUaBafqr%2FLHngxga%2FF0LkzR%2F3v23FlkMBfu6RnuZPlOZVut0tyVH7z9HIPSLdY1CFfcmivIz6DmLui972qiguauC77Bmf1Yj7oFonqg2w%2FdQRmXxdO5dXCENw%2BL%2B6NGXuRyjiHq5b7SR5GwXzTShYDAu%2F8z9sxWDgUuazEe0jIXbZcDmg7OQfgeepJ%2FiWuWbl4xNM1pYzpd0F52nbFWeTMvajUT8dC4tX2bl9ipqFQuFMDk5uI36MhS%2BT2C631L6e6o%2B6hf33IIOngSExThqjroOyWqm0VaoKeJTe%2FrhZ%2BcpmwFHBMQKoTDrCAbGut8xRDl4FteNYBaUCwBHftSuUsTCTm47ABjqkAYDXT1A9GIynQ6%2BDg299Apq32EID5Sj52qc9g2U1cFWuzeuqGKfOr5VO1p2a9OpatMht08%2Bh%2BbkFb3lsn49IevkJDTGwuqNNEYAyeAKUEvjL7zvOFdgGezJolgbZEeky%2Fc1vx94iolkcHsVqwCT16VXIYz0WhAvLVhuQuE4bivH6Stji8ode28IaHMWilrttsiZgU3bEkHUM9S6X6eSHcUEpfP0q&X-Amz-Signature=8b28aa16e5121e669e6e6efffd8314d54b9a5081867ef2bbb9666adca01a2c86&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVQIWWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCy%2BOz2HqRsiS9IO%2BA64Nxv16KvORGI71xE0tMF0pKL5wIhAM%2B%2BGmSdfm9DpGWF0XhfMzsMkNtC%2FpG9M3kmbKpnMEhVKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwel%2Fg9qoG%2BKy1SsQgq3AMR%2B7pmxdhPwtOuRjo1zPDhRqH%2FkHOUcAHO4S5Ix0uBUfXkbyPS1xH6nurbNq7Yyt%2BTTT6Ll0j8KYsMvSfkC0uiQTp%2BKHmn5s8O1uDz8JYLoFMUfX9uC9kjY09JoAAG72tUvm9LfkGMAIc3Tp7Ay3npzWAnEVK68mcpSvlnJTZid5TpollMjPQe3EgKm0RSJ3mh6NJ2rosuHdf0IXulQVn8jjwu2VzdL%2B%2B4bSnsP4Tx4m4Yx5d6PlnhXuifphcfgXghJzw4NAl78DLV4Q%2B6K%2BcGjjRGA%2FiZAo4XXCtnUaBafqr%2FLHngxga%2FF0LkzR%2F3v23FlkMBfu6RnuZPlOZVut0tyVH7z9HIPSLdY1CFfcmivIz6DmLui972qiguauC77Bmf1Yj7oFonqg2w%2FdQRmXxdO5dXCENw%2BL%2B6NGXuRyjiHq5b7SR5GwXzTShYDAu%2F8z9sxWDgUuazEe0jIXbZcDmg7OQfgeepJ%2FiWuWbl4xNM1pYzpd0F52nbFWeTMvajUT8dC4tX2bl9ipqFQuFMDk5uI36MhS%2BT2C631L6e6o%2B6hf33IIOngSExThqjroOyWqm0VaoKeJTe%2FrhZ%2BcpmwFHBMQKoTDrCAbGut8xRDl4FteNYBaUCwBHftSuUsTCTm47ABjqkAYDXT1A9GIynQ6%2BDg299Apq32EID5Sj52qc9g2U1cFWuzeuqGKfOr5VO1p2a9OpatMht08%2Bh%2BbkFb3lsn49IevkJDTGwuqNNEYAyeAKUEvjL7zvOFdgGezJolgbZEeky%2Fc1vx94iolkcHsVqwCT16VXIYz0WhAvLVhuQuE4bivH6Stji8ode28IaHMWilrttsiZgU3bEkHUM9S6X6eSHcUEpfP0q&X-Amz-Signature=65d78a6c8da39d37602178b5db4cef3eb1458eec4e6446b740d826b3ec7b98cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
