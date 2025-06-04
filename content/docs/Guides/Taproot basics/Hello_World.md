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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CGGGRUA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCV%2B9G4LHfYgjHXqnZKJrwVWAgEWgUWa%2FvlGmoIyQRitgIgb1NcJNIaV9orIvEt6Ts124MFWaeCJtwzpbLtiyBGu4kq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDN%2FEnJOUGLnA5kp0uyrcAwwcniL%2B3i0VZGozjvxIIRJYURu7uG8EVklXH0rHPsJuPUcLYXMdaSeOG1Ppge4k2TlaXi8mP3wcLBzqk7CUojhbxE0SS0OC2Ml29Rtz6wPH8fKdAyLiulQJ115ElWETKGoncAMTqzDpGV64%2FgZanwqI7HsYh5wlmeYCdlNpYYXlSFd7FztJ3bYVOoKO2xJEJ%2BcZvc%2FajghvEEyM99k%2BOgAN5eXPASdmXv61ZkaUh5lPJFYsieI9SPK%2BR2huEKtFscFRQdgpCXa15lcNhTfweZkRryj%2Bmq2e0hQervuK1J6f9LY0fGl5J9E8yjxa9qG3tAI0q5y%2BwAAtRRd8JN73OmPfuvnX7gHf8lM7Ub7S%2BLllB5ytxObqgmTZ48kILDARhfjtfAN4c9J1C5%2B80uxXGF4geLbHVYWY2X1kGfVGVKYxGNzKAdqwvkkGhSPY7dhN0eWockwX52BqfHr%2BGsPkE1cbSPL6YEsA03dNi4XKQtG18kuKJaqMFwEIvXKolRRiMULYkuEjJodie4Q0%2Fg2HrNbHBaM19xtVea0CvatZIzW%2BdbDPbQe80nQRCgVBZJ%2FMsVmqQ5A8mqDCjPWttWdGQIiMNq%2B7DoSt3Wt8xszgr%2BeawBUdlOef7Vn00bmDMMPQgMIGOqUBSjnyuGo8UzQKyJTDA%2Bh3PkxK03xDCn7xA4wBWLr73Lzj%2FSntDqpgNBMn5M81exAZqRoIkQ37FfrHWOm3vMiFr5zYOtG9JKJ%2FFCYBfP7WS9B%2BIXLosfqSmkc6dSM5Lttk%2BoX%2FwrFj44T7xOtdejHTOsuFixyzhYFBovfnAO8rZ%2FsNwirYSMO4hbq6boQjZ0GPPIt6Kd4PcN625zLswk0QpDlCmirW&X-Amz-Signature=43ddd44aaa89711b00881d67f0f76f827b6673b47c9432062c1cb24a5437bc57&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CGGGRUA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCV%2B9G4LHfYgjHXqnZKJrwVWAgEWgUWa%2FvlGmoIyQRitgIgb1NcJNIaV9orIvEt6Ts124MFWaeCJtwzpbLtiyBGu4kq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDN%2FEnJOUGLnA5kp0uyrcAwwcniL%2B3i0VZGozjvxIIRJYURu7uG8EVklXH0rHPsJuPUcLYXMdaSeOG1Ppge4k2TlaXi8mP3wcLBzqk7CUojhbxE0SS0OC2Ml29Rtz6wPH8fKdAyLiulQJ115ElWETKGoncAMTqzDpGV64%2FgZanwqI7HsYh5wlmeYCdlNpYYXlSFd7FztJ3bYVOoKO2xJEJ%2BcZvc%2FajghvEEyM99k%2BOgAN5eXPASdmXv61ZkaUh5lPJFYsieI9SPK%2BR2huEKtFscFRQdgpCXa15lcNhTfweZkRryj%2Bmq2e0hQervuK1J6f9LY0fGl5J9E8yjxa9qG3tAI0q5y%2BwAAtRRd8JN73OmPfuvnX7gHf8lM7Ub7S%2BLllB5ytxObqgmTZ48kILDARhfjtfAN4c9J1C5%2B80uxXGF4geLbHVYWY2X1kGfVGVKYxGNzKAdqwvkkGhSPY7dhN0eWockwX52BqfHr%2BGsPkE1cbSPL6YEsA03dNi4XKQtG18kuKJaqMFwEIvXKolRRiMULYkuEjJodie4Q0%2Fg2HrNbHBaM19xtVea0CvatZIzW%2BdbDPbQe80nQRCgVBZJ%2FMsVmqQ5A8mqDCjPWttWdGQIiMNq%2B7DoSt3Wt8xszgr%2BeawBUdlOef7Vn00bmDMMPQgMIGOqUBSjnyuGo8UzQKyJTDA%2Bh3PkxK03xDCn7xA4wBWLr73Lzj%2FSntDqpgNBMn5M81exAZqRoIkQ37FfrHWOm3vMiFr5zYOtG9JKJ%2FFCYBfP7WS9B%2BIXLosfqSmkc6dSM5Lttk%2BoX%2FwrFj44T7xOtdejHTOsuFixyzhYFBovfnAO8rZ%2FsNwirYSMO4hbq6boQjZ0GPPIt6Kd4PcN625zLswk0QpDlCmirW&X-Amz-Signature=2c6ff99e4866d172e67f9c1221bb98df77dcf26f77de15857b29184f757c9acf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
