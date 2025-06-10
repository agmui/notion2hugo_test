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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMNYNVXH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF4HGfjMF6A2JsdnBfi2apojw0g6tkTpKHKl65CgqxlAiEA9ZIZNisMQdrplvyLcbKKSSPF2yEk5xKyZKNNWs4sczQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsCeHwlVG7I6jU67CrcA3fqmSuroKYi64T4HAUDZZCH9XquzHuBdbbh8Qo5w1fEHlJewV8eT%2Bhx3msBxnd8xqeIAQzoqg7UriKr%2FBfcysLKsg%2BXI9MsVERE1QAyrTF97679Fj%2FCQ0zJkRS0IicbpKw81z%2BiWMdA%2Fz11r%2F1pYLt70auV2gzx50nJUUmtQZfT7SwkPD558g5P0TQ4dCeavvbohIhGGXzWhupQxKPJCUT8sp6ipp93oNN6oYmZ1KUwGIzBfR419RDxrI%2BEDMRtp2Ux8xONkWNHHGBcbUmNxUIyq1ywJ4%2FlGEyLOWZbCzUHh4BTFxenw0T76xM6Z5y3UQihgkLI2D5BoYo0UrL%2BoyY1TnRj5%2BwbbQPgy8srRGnD%2FLz1iZblyETHSo3dX%2FOa1pr9FSF6EQUmEHmz7mV4ACNNQLl3IichpZLNhdBmt%2B%2BR3S%2B5XdIdkuAAygGm0l%2Fxo9GPaI%2F78%2FllWoRbe5XB%2FMfdFbO1rskjrU8nO1%2BXRrIgSdW%2FxU9LpcrQ1%2BSm3BH4FK84setFM2qZ7vqbFfBeA6NwJyRzQUJ44Ouixdir0TEV%2BR%2BWLu0v82P2Ur3J0k80OZPuLLmFApULEDkQ5HXqaSVoAl3mT%2F0eAp%2FV4O7sJF7Y77wme2Jdr6Ia1a1yMK7fn8IGOqUBW4rrUSeBKf7RyEad6KylMrgmTcMPrFsOwM5pMo7AST7I8KHzdKBXlpvtdYyZZIR3v6HesEBu7PA6we1%2FSIeyH%2FXP54ETsw1QjnE5l8GabUdG76Hsafl9zqki1KlPUjVLd8q455i8pOUvXeNIcGVHMz53Vhun2fYro0T%2BjXBALgBtMYJvB3Z82y%2BntItb1j08ol5e9kBS9%2BBSfqdwOWrkE0o25Cqm&X-Amz-Signature=6388453cbbdcdc0af8e0ef641eb918b6070e52dfb6221f424036a930301d94f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMNYNVXH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF4HGfjMF6A2JsdnBfi2apojw0g6tkTpKHKl65CgqxlAiEA9ZIZNisMQdrplvyLcbKKSSPF2yEk5xKyZKNNWs4sczQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsCeHwlVG7I6jU67CrcA3fqmSuroKYi64T4HAUDZZCH9XquzHuBdbbh8Qo5w1fEHlJewV8eT%2Bhx3msBxnd8xqeIAQzoqg7UriKr%2FBfcysLKsg%2BXI9MsVERE1QAyrTF97679Fj%2FCQ0zJkRS0IicbpKw81z%2BiWMdA%2Fz11r%2F1pYLt70auV2gzx50nJUUmtQZfT7SwkPD558g5P0TQ4dCeavvbohIhGGXzWhupQxKPJCUT8sp6ipp93oNN6oYmZ1KUwGIzBfR419RDxrI%2BEDMRtp2Ux8xONkWNHHGBcbUmNxUIyq1ywJ4%2FlGEyLOWZbCzUHh4BTFxenw0T76xM6Z5y3UQihgkLI2D5BoYo0UrL%2BoyY1TnRj5%2BwbbQPgy8srRGnD%2FLz1iZblyETHSo3dX%2FOa1pr9FSF6EQUmEHmz7mV4ACNNQLl3IichpZLNhdBmt%2B%2BR3S%2B5XdIdkuAAygGm0l%2Fxo9GPaI%2F78%2FllWoRbe5XB%2FMfdFbO1rskjrU8nO1%2BXRrIgSdW%2FxU9LpcrQ1%2BSm3BH4FK84setFM2qZ7vqbFfBeA6NwJyRzQUJ44Ouixdir0TEV%2BR%2BWLu0v82P2Ur3J0k80OZPuLLmFApULEDkQ5HXqaSVoAl3mT%2F0eAp%2FV4O7sJF7Y77wme2Jdr6Ia1a1yMK7fn8IGOqUBW4rrUSeBKf7RyEad6KylMrgmTcMPrFsOwM5pMo7AST7I8KHzdKBXlpvtdYyZZIR3v6HesEBu7PA6we1%2FSIeyH%2FXP54ETsw1QjnE5l8GabUdG76Hsafl9zqki1KlPUjVLd8q455i8pOUvXeNIcGVHMz53Vhun2fYro0T%2BjXBALgBtMYJvB3Z82y%2BntItb1j08ol5e9kBS9%2BBSfqdwOWrkE0o25Cqm&X-Amz-Signature=03ebe120f359af61ade74bf7a6524216dcbb378b551433fb30a2054b712d9fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
