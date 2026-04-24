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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAT3EGD%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYxbbNUriKa70tReVvFhXxEi1EgvlAs51zOEKNaYfOTQIgUM2%2FVZ4pIXEmDKm7JMv8YU6XLN%2FA%2FH1FtNEqn8IslFUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCcxlh6MkwtwkZqn%2ByrcAyTr0g1%2B%2FCRNKrifpst7iFLNlI%2F8b%2BLDFnT4SwnXqBhjpUy0VfVOKGzlf%2BWsp8j%2Bl1AcqYbI%2F33XG2u0J3GOdmpYYbMl0LHSjKSV%2Bs9SzhSD0sXsTDofqTZUAWWJouIGTDH8hZc98iSwfnnWIWAUuAT0bkFx%2FGUOIaMlWUlb9GSPPZADOxxTiwYzq2r%2FJ6bcya%2B74vOFty5h%2FkCQ02KJ4skJPrxjO09ePyV2LGNSr7O85vN%2F6W%2F1A6UCp%2F4yObUDCiygKv2ASMYUSive3vH6%2BhWY4nmgjYKdoLuz3tH7gd3t%2FHJzL3V2ENaMkDcM2Zw2agMKd7ifnCZ0Q2veNWkK2kYM27nVIMwRZ2We4HH6QSvo%2F2C0%2F6m0vHoN9Lg%2Blj8OlVHzBN3EKnEqgVqIbAUZt0laf7YdL7H%2BAUwZ2l4Vm0imwa69SDeNv7Wo9%2FHJgBxBD72jfHg7eMfiN61UZbMeXLSFYuzDvd9kELIPS8fSSwvsk0zxFupipvyXiWLaGbHIEsGoG3NS4nPmnzr4vMZqvdCNwTProSUbk99dsZLgl7%2BWrCyiQdQxA6YRpFjgb4zbYCcAMMKQkGNRjrL3gGblbHS3TZyZswDXF4uHYDn%2F%2Fm%2F%2Bu9%2BnammVh21N8ZHEML2Kqs8GOqUBBRDru8btK6SXpLdf2nf2iqzdPNPHnoovhuUGwJOd%2FwOSGN5p4gZxYKdyXONUZkrr%2BoSCPr6vvJT552lTxl8PGYQs8MdC6b4AA1meiNq43NFaEnSi42zEViMb9r2LVc2ifQWUvnBC%2FKbKp0GFLa7QueaaiE32ylO%2Fx6y3420peEZKjO1WBH3VCRF3BSvHOroq73%2Fs0NdwZi4UW0CQteYx%2B3Fk%2BiQ%2F&X-Amz-Signature=b043119a2d8942d0e722b06e0f98f4b1c0fd56da307673da80ca2365f5cc31dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAT3EGD%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYxbbNUriKa70tReVvFhXxEi1EgvlAs51zOEKNaYfOTQIgUM2%2FVZ4pIXEmDKm7JMv8YU6XLN%2FA%2FH1FtNEqn8IslFUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCcxlh6MkwtwkZqn%2ByrcAyTr0g1%2B%2FCRNKrifpst7iFLNlI%2F8b%2BLDFnT4SwnXqBhjpUy0VfVOKGzlf%2BWsp8j%2Bl1AcqYbI%2F33XG2u0J3GOdmpYYbMl0LHSjKSV%2Bs9SzhSD0sXsTDofqTZUAWWJouIGTDH8hZc98iSwfnnWIWAUuAT0bkFx%2FGUOIaMlWUlb9GSPPZADOxxTiwYzq2r%2FJ6bcya%2B74vOFty5h%2FkCQ02KJ4skJPrxjO09ePyV2LGNSr7O85vN%2F6W%2F1A6UCp%2F4yObUDCiygKv2ASMYUSive3vH6%2BhWY4nmgjYKdoLuz3tH7gd3t%2FHJzL3V2ENaMkDcM2Zw2agMKd7ifnCZ0Q2veNWkK2kYM27nVIMwRZ2We4HH6QSvo%2F2C0%2F6m0vHoN9Lg%2Blj8OlVHzBN3EKnEqgVqIbAUZt0laf7YdL7H%2BAUwZ2l4Vm0imwa69SDeNv7Wo9%2FHJgBxBD72jfHg7eMfiN61UZbMeXLSFYuzDvd9kELIPS8fSSwvsk0zxFupipvyXiWLaGbHIEsGoG3NS4nPmnzr4vMZqvdCNwTProSUbk99dsZLgl7%2BWrCyiQdQxA6YRpFjgb4zbYCcAMMKQkGNRjrL3gGblbHS3TZyZswDXF4uHYDn%2F%2Fm%2F%2Bu9%2BnammVh21N8ZHEML2Kqs8GOqUBBRDru8btK6SXpLdf2nf2iqzdPNPHnoovhuUGwJOd%2FwOSGN5p4gZxYKdyXONUZkrr%2BoSCPr6vvJT552lTxl8PGYQs8MdC6b4AA1meiNq43NFaEnSi42zEViMb9r2LVc2ifQWUvnBC%2FKbKp0GFLa7QueaaiE32ylO%2Fx6y3420peEZKjO1WBH3VCRF3BSvHOroq73%2Fs0NdwZi4UW0CQteYx%2B3Fk%2BiQ%2F&X-Amz-Signature=33c8d68cfc64cf1b0adcb8753b8b377124b87f1c1064afdf4958e07049ae932d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
