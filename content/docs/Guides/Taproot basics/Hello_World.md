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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY3K5Q4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCNgTLtS9AoD9t2zIqfSpiJN%2BBqOpm8CQqb4I2zDZ7B%2BQIgMSBxWjfPY5wt7uNfIYg1UTwqMLvzwuPu%2Fuv%2BEzWy%2BAEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPhQnG1Oos4VjiAHDircA1ml3RWPIiSAl39dseFalA4k0C2y4p9NaeW7rWd6jfYT%2FmPwrJl90vh5ekpdh%2Bkm35xGyN%2Bu%2F1YCebK7JgERvVBuwSvOvtitn4ZsRSYtY7diyHcHLLhClhh6eGwbaXoBzwxljwkAVzVCoHw08S5Ag0ud1kjwvafTa4QnPfEdMOn%2FPWVplOL1jJDIizvOwulwEDfODkZTW%2BKHLT8eoGemDvstP%2BQ5k5H43RU2j7dLY5kgrSmq91OuD18Nmz3Mh1Xy019%2BcrzQNA65PpbJdp7XlOB4fegPVzhoNCz5Zv1radaGV3pNpNlm5rNmMIalZfU%2BhUq%2BnOBcfhKlg2JbJcrmcXalClV%2Fglff4b61QOyLUIY8qwuaiJ9i9sfxYuKUFIrHxAlCAvIH1sERCgDJVTGPO093tveTFMH5UjcC3jznSSUQbNRGNZboaW%2BK4FcNyQ%2F4DD5%2BSbihyP3nrMFyr4gWTAr2MY0Sngw%2FQkUKzG%2F6zEBL%2B8uVmN%2FR8N3R0PgaN%2B1SDAYE%2BL7y1vNYOtqlSbolrffjOPL5BDk3ibkyuIkcGb4Xa0kbFk1GPAoFkpiSx%2F539fAdtrcU8S%2FCNfeygNOb%2B90%2B2HHhie0LNvG87V0IAJEeL7Mpw%2FxYVyIvtTDdMPXrtL4GOqUBYYs1gYul3m3Qwht%2FwQbTSi%2BSs1OtzfRxc3LFvcgQYdyuBonj7I7%2FafC0NGhdMX7Obn9QtVFK20yNXvvDaxiqPUGnF6bXOoLs12LTzoEj1BxO%2FpEj8PUJ9dKsdlJ%2FBF1euxeK39x54aXAA0%2Bhn%2F5nxn3GXiaTCoCfrfHAeYAe3H6XNIPq5uoaP4R20pZOVjfFvlnyIW7vUcYH%2ByzxmOQoc3yLFR72&X-Amz-Signature=d0aa708b700c0ade1840dcdde078a784d63713910db8e4837311141ac7160c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY3K5Q4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCNgTLtS9AoD9t2zIqfSpiJN%2BBqOpm8CQqb4I2zDZ7B%2BQIgMSBxWjfPY5wt7uNfIYg1UTwqMLvzwuPu%2Fuv%2BEzWy%2BAEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPhQnG1Oos4VjiAHDircA1ml3RWPIiSAl39dseFalA4k0C2y4p9NaeW7rWd6jfYT%2FmPwrJl90vh5ekpdh%2Bkm35xGyN%2Bu%2F1YCebK7JgERvVBuwSvOvtitn4ZsRSYtY7diyHcHLLhClhh6eGwbaXoBzwxljwkAVzVCoHw08S5Ag0ud1kjwvafTa4QnPfEdMOn%2FPWVplOL1jJDIizvOwulwEDfODkZTW%2BKHLT8eoGemDvstP%2BQ5k5H43RU2j7dLY5kgrSmq91OuD18Nmz3Mh1Xy019%2BcrzQNA65PpbJdp7XlOB4fegPVzhoNCz5Zv1radaGV3pNpNlm5rNmMIalZfU%2BhUq%2BnOBcfhKlg2JbJcrmcXalClV%2Fglff4b61QOyLUIY8qwuaiJ9i9sfxYuKUFIrHxAlCAvIH1sERCgDJVTGPO093tveTFMH5UjcC3jznSSUQbNRGNZboaW%2BK4FcNyQ%2F4DD5%2BSbihyP3nrMFyr4gWTAr2MY0Sngw%2FQkUKzG%2F6zEBL%2B8uVmN%2FR8N3R0PgaN%2B1SDAYE%2BL7y1vNYOtqlSbolrffjOPL5BDk3ibkyuIkcGb4Xa0kbFk1GPAoFkpiSx%2F539fAdtrcU8S%2FCNfeygNOb%2B90%2B2HHhie0LNvG87V0IAJEeL7Mpw%2FxYVyIvtTDdMPXrtL4GOqUBYYs1gYul3m3Qwht%2FwQbTSi%2BSs1OtzfRxc3LFvcgQYdyuBonj7I7%2FafC0NGhdMX7Obn9QtVFK20yNXvvDaxiqPUGnF6bXOoLs12LTzoEj1BxO%2FpEj8PUJ9dKsdlJ%2FBF1euxeK39x54aXAA0%2Bhn%2F5nxn3GXiaTCoCfrfHAeYAe3H6XNIPq5uoaP4R20pZOVjfFvlnyIW7vUcYH%2ByzxmOQoc3yLFR72&X-Amz-Signature=07f13602609166f357c60fcac5fb7ede58e2ee0a8af85d08e60bee733aaa5a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
