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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4BMOBT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDKqfDA%2BiLoHnkUCu0Fnli5chOUaA%2B3jpNLqvzpTZnVOwIgRtyxvXCWTeldg9kYOaZ8dQ8u9vQtqsBsRvc7bKPneToqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsvfSwWWgXa6jxkBCrcA7GAJzUIu78e8%2F92C%2Bst%2B25UD8pqSrOB7V%2F6LAd7Vm3CzyB14K%2BybP9LblXzyGwUp0hbYdn05hyGkHfR%2FU9blfwvP%2Fs3oIFOa5gaq%2BsCDFzxAOg%2FLtKYyPviv2t1%2BoJTJytwPq6W7RJmVRZD3qPg1qtPoT6txt2wI1vVf3oQRC2CR%2FEHvRb3WPRMZcFah0FuPHZEr2ez3cPLHFsiZR%2Fhw4ZEtZuyu%2FZWHN6k70EF%2BQJ5Jt9ft48olToej2%2B4nHKnw45Z1FS6vRsT37HAAsTBeQ0o8R2ZJN9D%2FOJZ5MZpdKxhfWf0ibp0qpJPKoY9ZYvkvPBhvRSVl5ofOjiw6B%2B%2B2j2TXtFT8vTEwSfZaa0NdWvHNM2fN0M3U6LVBB%2FJo7fdtzYDJs1Z%2BqasP0%2BIfAWPetvQLYmBOgkKezDtgIIX5rCw7UDQ8RspRHBIrDRgnlQygYzCtJznyOdKjzrBMhYH%2BJuw%2FfmKjjcyYn1BVzijMtLcrztOjqHLmtVzx1CXSRSexaSs32%2Bq3fnG9zKMHxlUTkitj%2FJsGjlbdI%2BQPWaF6%2BcBumKSFOPy2dAv3c%2BcRQARUVHGRlxxjrgmJdATjKGFGWczI82sah7iHmAk0csU%2BqdKDDfTVhUJAnixj7vbMOCWrr8GOqUB3atjFz8UnhN62z5Yd%2F4B%2BttcuBDcGG3Gw6Fcz7kCdObn1O3PwhjYewInqC%2BI1vtOocIRmBFdCk2NLBic3bQOVjs9pqtB9TW3Lt%2FQn1pYgwAg%2BHayfFq6iprh4jHYVuSned25JLtdzbdaIO7Q%2Bwgk5taW308adds9LXIPrlUiZ%2F3HPK%2FZNRDfEltrV9d4UHZjIZmsj92BX9QISC6qyTQvzyoY06Mi&X-Amz-Signature=63c32e612549347bf86e13d7fd2de2e29737e5828ddba0166321e88976f7cdb3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4BMOBT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDKqfDA%2BiLoHnkUCu0Fnli5chOUaA%2B3jpNLqvzpTZnVOwIgRtyxvXCWTeldg9kYOaZ8dQ8u9vQtqsBsRvc7bKPneToqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsvfSwWWgXa6jxkBCrcA7GAJzUIu78e8%2F92C%2Bst%2B25UD8pqSrOB7V%2F6LAd7Vm3CzyB14K%2BybP9LblXzyGwUp0hbYdn05hyGkHfR%2FU9blfwvP%2Fs3oIFOa5gaq%2BsCDFzxAOg%2FLtKYyPviv2t1%2BoJTJytwPq6W7RJmVRZD3qPg1qtPoT6txt2wI1vVf3oQRC2CR%2FEHvRb3WPRMZcFah0FuPHZEr2ez3cPLHFsiZR%2Fhw4ZEtZuyu%2FZWHN6k70EF%2BQJ5Jt9ft48olToej2%2B4nHKnw45Z1FS6vRsT37HAAsTBeQ0o8R2ZJN9D%2FOJZ5MZpdKxhfWf0ibp0qpJPKoY9ZYvkvPBhvRSVl5ofOjiw6B%2B%2B2j2TXtFT8vTEwSfZaa0NdWvHNM2fN0M3U6LVBB%2FJo7fdtzYDJs1Z%2BqasP0%2BIfAWPetvQLYmBOgkKezDtgIIX5rCw7UDQ8RspRHBIrDRgnlQygYzCtJznyOdKjzrBMhYH%2BJuw%2FfmKjjcyYn1BVzijMtLcrztOjqHLmtVzx1CXSRSexaSs32%2Bq3fnG9zKMHxlUTkitj%2FJsGjlbdI%2BQPWaF6%2BcBumKSFOPy2dAv3c%2BcRQARUVHGRlxxjrgmJdATjKGFGWczI82sah7iHmAk0csU%2BqdKDDfTVhUJAnixj7vbMOCWrr8GOqUB3atjFz8UnhN62z5Yd%2F4B%2BttcuBDcGG3Gw6Fcz7kCdObn1O3PwhjYewInqC%2BI1vtOocIRmBFdCk2NLBic3bQOVjs9pqtB9TW3Lt%2FQn1pYgwAg%2BHayfFq6iprh4jHYVuSned25JLtdzbdaIO7Q%2Bwgk5taW308adds9LXIPrlUiZ%2F3HPK%2FZNRDfEltrV9d4UHZjIZmsj92BX9QISC6qyTQvzyoY06Mi&X-Amz-Signature=80255b083f5c0a91259e5f5d4edf04bdc60a0c5fcca5e0392941b3f1e4615b03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
