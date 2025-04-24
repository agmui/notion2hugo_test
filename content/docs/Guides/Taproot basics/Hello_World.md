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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLCQXCE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1g6epT1756D9Y9Lh%2Bu1W3NQEWeZtENmthxpAhQRkQ4AIgCWhKFAa5a7pbz%2BtceyUwOKqCzNUW%2BrX%2FMEWW40NeOJIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI2%2Bs4StIcNfOcZOeSrcA1QBRghSt7xe6SH7b0D%2BAyGV48KDUYcHdWWz03t1sfHuBYhs3jY0Ej%2BVCgQpiI7mB56%2BJc3OqyoJC229QH%2BE%2Ffvzw6MImH7Qls45aDClXbXyZ6bxxx84AbZ7NuIR%2BcYpNSvB3M5ckw30PnIhVHn340nzXZ1hpgU78HA%2FiwBHhk7nDjNzErR%2FtN93UQHPHML1VXC8t%2F5ATqEHdFmTAJHGMyALc2yKp0xS31jG%2BiElZjf7RkQeLrImPWf5IHkAX51BpPcVeXl%2BXzj7VY54IYnznpUnvm3HftxKc%2B9Ig577H4lvyfRjejproQct9T41jdK4DcDbYjqBEAaQxT0AnmQNfzwzSHoj1UunrqTpVZC8mzqqHw6w8jDfFEUJS2sRl0ZbdP91K92ArfucHH5Wk0eMEp0NOa2Cy7aKEN29YogCpv1BegOlNBZ56mBmFjzaAwrAUcXw2RFGeX2miiaWbC%2FF3dJnhnlvmbmO2qoWZoLe55UQufWv1bO%2BOBKQH4u%2BsSFc8Bp4vuBIIVzDQzUiz1jYEg1u9s4TlUCP9g4rVkcDQCqruLvzvkFd6kXbveaH5CMc7eteEjOT3mgqSnwrnRVnEyVKaWiZp4Duw17Xo9MtGlDGBOSkkvwv1PiDluLEMM%2FVqcAGOqUB8pempjSvsCZFSijF1exaWVXs9cmH8ZC7kzWaKf%2FozeHEML9jQLppKZzMYr5PuWelMVmvWFKWIC0wU42q0udPbu8Dnbuy4af6JLsJPTHV2h8jfLrptzlAlQmQpcP9683lxRj9wpMxWlT0dD3U07Zdc4pWhQm6M%2FFEZgBQXbVCi7ycuNMW3%2FcdQQB1PXU29CiT9XGbKjskna2cFRJI4sFrtBwjgsaL&X-Amz-Signature=eea4b3b0d25adf35b460db480d935d2f78951be6157cb64f07145d33ab43f689&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLCQXCE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1g6epT1756D9Y9Lh%2Bu1W3NQEWeZtENmthxpAhQRkQ4AIgCWhKFAa5a7pbz%2BtceyUwOKqCzNUW%2BrX%2FMEWW40NeOJIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI2%2Bs4StIcNfOcZOeSrcA1QBRghSt7xe6SH7b0D%2BAyGV48KDUYcHdWWz03t1sfHuBYhs3jY0Ej%2BVCgQpiI7mB56%2BJc3OqyoJC229QH%2BE%2Ffvzw6MImH7Qls45aDClXbXyZ6bxxx84AbZ7NuIR%2BcYpNSvB3M5ckw30PnIhVHn340nzXZ1hpgU78HA%2FiwBHhk7nDjNzErR%2FtN93UQHPHML1VXC8t%2F5ATqEHdFmTAJHGMyALc2yKp0xS31jG%2BiElZjf7RkQeLrImPWf5IHkAX51BpPcVeXl%2BXzj7VY54IYnznpUnvm3HftxKc%2B9Ig577H4lvyfRjejproQct9T41jdK4DcDbYjqBEAaQxT0AnmQNfzwzSHoj1UunrqTpVZC8mzqqHw6w8jDfFEUJS2sRl0ZbdP91K92ArfucHH5Wk0eMEp0NOa2Cy7aKEN29YogCpv1BegOlNBZ56mBmFjzaAwrAUcXw2RFGeX2miiaWbC%2FF3dJnhnlvmbmO2qoWZoLe55UQufWv1bO%2BOBKQH4u%2BsSFc8Bp4vuBIIVzDQzUiz1jYEg1u9s4TlUCP9g4rVkcDQCqruLvzvkFd6kXbveaH5CMc7eteEjOT3mgqSnwrnRVnEyVKaWiZp4Duw17Xo9MtGlDGBOSkkvwv1PiDluLEMM%2FVqcAGOqUB8pempjSvsCZFSijF1exaWVXs9cmH8ZC7kzWaKf%2FozeHEML9jQLppKZzMYr5PuWelMVmvWFKWIC0wU42q0udPbu8Dnbuy4af6JLsJPTHV2h8jfLrptzlAlQmQpcP9683lxRj9wpMxWlT0dD3U07Zdc4pWhQm6M%2FFEZgBQXbVCi7ycuNMW3%2FcdQQB1PXU29CiT9XGbKjskna2cFRJI4sFrtBwjgsaL&X-Amz-Signature=6d547779f40e939976bfe22ecbd4b4b1c7f28b2eb52a062597cfee7a8590c22e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
