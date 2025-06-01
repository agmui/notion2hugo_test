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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43UUHBU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDm%2BWdCnBq2eQmHQl%2FRAbrGVOFHuRFaW5%2F%2Bx%2BXg2aWCjQIgRrlh0tyLTYaXYEnfQcFUww7RHD0QmbqDTqLTdEfeDDAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1AufdFaWjWvF2LKCrcA7pmaSq6APVzryIBdVI5nACxhTugMOKK3UnCKMAjM9t01EmIGJude4FX%2B886d0yFT9stgh90sCGU%2FgjS0XOzgyncKZd0U1ddoF48a7Ad60TrOGJ94Ek94F9n%2FudLUD8PtWSoaxyr%2BDDmPni%2BiQsH%2BMhOKHIbkY8DyBvS0IrLui9GG0sYvarm9zG26AdCsTVbR0aEClM7B5c0FDlKdsK4XBanVMedLq6zbPeb0bmiO27i05swskVhKwBpqqb%2FpH2obYYO8SMmvChXZcadt0RwIyS%2FDKIiqXutTqnPCjbUzqqTrFquvmKyQd%2BWSWbwd2xGiatyqOApBNP2g8n6tJ%2F%2FVLoaZJOHN1WTJLUCwJhnbFiehKF8i52f%2F%2FQwqiwjJX08zLzSKAyFbDhHUrA7ySS7b697%2BwkIVM5lQjQ20Kr5WImB54r1Z54fgh3FUbqWhDJtBp5cAFgyMYt8ayqwjwdmhYmA3k%2BpNWBfjHs%2FN%2FN2GJODr3iytnbj3pL%2BRd4dgE6%2BHc11PVRIMBAN8xX5oO1ZODONZwK3tdQrutDZvJVf3cdmvoj0W3sK5PMqvJ%2BOKu26Rq7Ho7g4xSD%2Be8ugQNR1ET3h0u66oMPxYtjYZaGmGeC9GbWGuBFuKfuZAjZ8MPuB8MEGOqUBRVtsR1JSQ4NPBqM9xWhp%2BWUzv137ObAWru8Q09I%2BKAz05%2BA29HxKZSdyE51a7qUEZk0dTQdEsC4ogISev%2B5Nj7rvKBRSsXhd4VMU1PU4cQOWGHh50pazIAUAF8BF44JuWwv0KtrmsVi14%2FPFTa20KNveLoJt7SDWYheN2Nb5ArK1ViE0%2Fe8OVVURr1H7ZTeGhphevk9%2FmFGCtJjy51CNsHUfTnts&X-Amz-Signature=9851d7844f2351bcd511fbfb0af91ea506489e9d0bdaf419f3ec711a589cba85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43UUHBU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDm%2BWdCnBq2eQmHQl%2FRAbrGVOFHuRFaW5%2F%2Bx%2BXg2aWCjQIgRrlh0tyLTYaXYEnfQcFUww7RHD0QmbqDTqLTdEfeDDAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1AufdFaWjWvF2LKCrcA7pmaSq6APVzryIBdVI5nACxhTugMOKK3UnCKMAjM9t01EmIGJude4FX%2B886d0yFT9stgh90sCGU%2FgjS0XOzgyncKZd0U1ddoF48a7Ad60TrOGJ94Ek94F9n%2FudLUD8PtWSoaxyr%2BDDmPni%2BiQsH%2BMhOKHIbkY8DyBvS0IrLui9GG0sYvarm9zG26AdCsTVbR0aEClM7B5c0FDlKdsK4XBanVMedLq6zbPeb0bmiO27i05swskVhKwBpqqb%2FpH2obYYO8SMmvChXZcadt0RwIyS%2FDKIiqXutTqnPCjbUzqqTrFquvmKyQd%2BWSWbwd2xGiatyqOApBNP2g8n6tJ%2F%2FVLoaZJOHN1WTJLUCwJhnbFiehKF8i52f%2F%2FQwqiwjJX08zLzSKAyFbDhHUrA7ySS7b697%2BwkIVM5lQjQ20Kr5WImB54r1Z54fgh3FUbqWhDJtBp5cAFgyMYt8ayqwjwdmhYmA3k%2BpNWBfjHs%2FN%2FN2GJODr3iytnbj3pL%2BRd4dgE6%2BHc11PVRIMBAN8xX5oO1ZODONZwK3tdQrutDZvJVf3cdmvoj0W3sK5PMqvJ%2BOKu26Rq7Ho7g4xSD%2Be8ugQNR1ET3h0u66oMPxYtjYZaGmGeC9GbWGuBFuKfuZAjZ8MPuB8MEGOqUBRVtsR1JSQ4NPBqM9xWhp%2BWUzv137ObAWru8Q09I%2BKAz05%2BA29HxKZSdyE51a7qUEZk0dTQdEsC4ogISev%2B5Nj7rvKBRSsXhd4VMU1PU4cQOWGHh50pazIAUAF8BF44JuWwv0KtrmsVi14%2FPFTa20KNveLoJt7SDWYheN2Nb5ArK1ViE0%2Fe8OVVURr1H7ZTeGhphevk9%2FmFGCtJjy51CNsHUfTnts&X-Amz-Signature=ff08691e5539c76a676a9a4652c601e0c8562a8d01ce20849fcca9231d348565&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
