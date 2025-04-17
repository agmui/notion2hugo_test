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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRTGBJ2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz8TIgD48Ub3iIBsYvNoNMfjeVi7cnMZ4QaStIMW8caAiEAhPSulGjbZ6yIB%2B%2BySfEuA0DYv92mvi%2BKIc321UdeB9Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP6KykZph0syUTJkqCrcA3gz37bq6TCrf9Vvyyv1qyOCqgzgIE5oSp499IYkTHgBYOPYaGO1Uarynn%2FJWV3R6syOrzFTpki49gm04xxm%2BCRbuRLxx%2B0xjseX0eu13%2F%2BE%2FnuIoBMx68hehG3L95pQ7s5mVapDAqjTBGcytAl%2F0RuIlVx0rQ8DWYqw4GWkeJ0koYxDi9rZPofDNsKWAB3PB9CecuclPRV33aHLBWrn5B005dh%2BiYAZptoAeLQU79Kvqs450n1hEU9tSPvo7wZTQei4b1YCd5Gx1XmSrwGOOabXMUpd%2F5w1VjoCNGWU2COSlj4Dvh1v8b%2B0ZtdD54%2FGbDVTfSvaMRyI32MMqQEPvsqQ1AFWdEa6X%2FZTO%2BD4yWrN68K2HQcGJqFmMnoiIpjdX6Dt7cgt%2Fl54mE5hzc2%2FHRWtQaEk1ayW0gTfrp5VtK%2Fbmq25bzSU7IpUKldj0tivgZ8sDnmTB9X05SW51LGJhCgHhfMducM28DI27SH9qKSRGyZlfo2Bl5wazqlGnofOcEQ0ulSUKRAqO%2Bhuif%2Bv2T9tREfLwGeMoMhcJogXjVyWPf7SBSAUtDNCYCxLBDrYp%2FTSHwtRkQcq5JhoO61M50orpr9ERH6H6Ja6PsCKMaxO29xTBaYV6%2BPUoUuOMN%2F6gsAGOqUBfdsz22c6DXsKnoKJ1T748Zb62KMZG5aEvRNTT100aGK0WjaqwwoR4WphxDr8C7dE1bkpdv8Y9imHZtKKSqorUIx4jsOVFy0t6NEWbMuMa7YAebLbFjK34CDspmD2xm6beDUiJF1KOsM%2B6uA3oRv27gXlIhl6G8%2FScBjqH38ZmfKO8EyxS0lS3Ox1zlDEUkUg2yhUfJvnggGsTRSSIRLTQTKNmg8P&X-Amz-Signature=6612ddff14ae0de315d4b9e570a339acaca5eb9342bda5e321c8ee1288a1490f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRTGBJ2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz8TIgD48Ub3iIBsYvNoNMfjeVi7cnMZ4QaStIMW8caAiEAhPSulGjbZ6yIB%2B%2BySfEuA0DYv92mvi%2BKIc321UdeB9Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP6KykZph0syUTJkqCrcA3gz37bq6TCrf9Vvyyv1qyOCqgzgIE5oSp499IYkTHgBYOPYaGO1Uarynn%2FJWV3R6syOrzFTpki49gm04xxm%2BCRbuRLxx%2B0xjseX0eu13%2F%2BE%2FnuIoBMx68hehG3L95pQ7s5mVapDAqjTBGcytAl%2F0RuIlVx0rQ8DWYqw4GWkeJ0koYxDi9rZPofDNsKWAB3PB9CecuclPRV33aHLBWrn5B005dh%2BiYAZptoAeLQU79Kvqs450n1hEU9tSPvo7wZTQei4b1YCd5Gx1XmSrwGOOabXMUpd%2F5w1VjoCNGWU2COSlj4Dvh1v8b%2B0ZtdD54%2FGbDVTfSvaMRyI32MMqQEPvsqQ1AFWdEa6X%2FZTO%2BD4yWrN68K2HQcGJqFmMnoiIpjdX6Dt7cgt%2Fl54mE5hzc2%2FHRWtQaEk1ayW0gTfrp5VtK%2Fbmq25bzSU7IpUKldj0tivgZ8sDnmTB9X05SW51LGJhCgHhfMducM28DI27SH9qKSRGyZlfo2Bl5wazqlGnofOcEQ0ulSUKRAqO%2Bhuif%2Bv2T9tREfLwGeMoMhcJogXjVyWPf7SBSAUtDNCYCxLBDrYp%2FTSHwtRkQcq5JhoO61M50orpr9ERH6H6Ja6PsCKMaxO29xTBaYV6%2BPUoUuOMN%2F6gsAGOqUBfdsz22c6DXsKnoKJ1T748Zb62KMZG5aEvRNTT100aGK0WjaqwwoR4WphxDr8C7dE1bkpdv8Y9imHZtKKSqorUIx4jsOVFy0t6NEWbMuMa7YAebLbFjK34CDspmD2xm6beDUiJF1KOsM%2B6uA3oRv27gXlIhl6G8%2FScBjqH38ZmfKO8EyxS0lS3Ox1zlDEUkUg2yhUfJvnggGsTRSSIRLTQTKNmg8P&X-Amz-Signature=80883425b115ee77f1e1b6160dcc661b8b8a841a2d3a91ee59cb318cecc64ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
