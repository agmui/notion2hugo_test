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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQ2UU4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX5V48QC3tJcveJwqU4wctQoAwIyB4%2BqzW9v2553pwLAiEAzHdfC3qk1SgaY6PxutXWtXbCzcJ2MWzhNHWudYuRm5gqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUsJZ5H%2FWsSyADBOyrcAx4zNlfXP4EwxHRNQP8UXlKrPrN2B8JbqwFhGBrmCgz3Eu%2FDtzKW5TxVH0RU2ILF0T5DToQF%2Bo39%2BVgS5MFFLElq2zN%2BHPAb7shWBrcOF%2BHWXOcm82ADCxFNri%2BS6istC3gJTuY%2FM3gs7y1CDOltjJPq1Z484Tnh5YRwrf5%2Fg5diW3DGNylk4uPSD%2Fd2V6jcIrKMzVIMPkpgVO4tHbnweVoe3k7LMGqOdDjjTtSdgOsiOIMR9qoipIqiC8pcbp%2FKYpakas%2BC10ug0sm8oRekU3jFlvItdwzaWvfTpgvZek2plsm0lJ%2B0cften%2BPC8fSxFdaYTBrZJTRncr0DVkB2PScptojPhFGehYaLQu7cISfAEkNNLu5dtFQ9Rn4A%2BNa72jjixb7cGuQ9h2qb3HeYITKLVfgOybgU2%2FJAYiaGnLZMhhe0jJnmadjhKT6RE8QgkLEy0w1GAVEyu6BocgiGHHhCA1AnTh6erSKtcImNhQYqlkEDy0PFaTnCSCsa27%2Fn4vnz8mMKx0AOHvyggpzxX0xJbj%2For0edik4eGTdZNTQmN0V2VMC5AxdXg%2Bomj19cgkalVFI3JF1suG6ehXV5jHzANmgWKm2%2FAHfAr2O%2FzXQdfWMaKp5J2fUvn3JkMM%2F8wcMGOqUBa0cARtUaWTBbsnaO2VJkMfpbRaWn68c3U0m4YlnjzDxhXjn169PAGVEBVGxFU8z%2BGS43kqg7B0x%2BbjAg1WHfgROms9trvHkVGcV7chY%2B7dW6cHdWPc8%2FqUTzUbSL9hLQKn7FAPsR%2BeokeOgDcsWRoy4cxIKRnoFjMWhvqfr3X%2FApKp7pPr%2F5AOQV2NhqRIn1MCA3ICy%2BWgHly8iouZ%2BUNKJZUwHe&X-Amz-Signature=ef4e49cbcb2c812b09be3268db74f2feecd9d9430331e8ed2cadecae10d76951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQ2UU4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX5V48QC3tJcveJwqU4wctQoAwIyB4%2BqzW9v2553pwLAiEAzHdfC3qk1SgaY6PxutXWtXbCzcJ2MWzhNHWudYuRm5gqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUsJZ5H%2FWsSyADBOyrcAx4zNlfXP4EwxHRNQP8UXlKrPrN2B8JbqwFhGBrmCgz3Eu%2FDtzKW5TxVH0RU2ILF0T5DToQF%2Bo39%2BVgS5MFFLElq2zN%2BHPAb7shWBrcOF%2BHWXOcm82ADCxFNri%2BS6istC3gJTuY%2FM3gs7y1CDOltjJPq1Z484Tnh5YRwrf5%2Fg5diW3DGNylk4uPSD%2Fd2V6jcIrKMzVIMPkpgVO4tHbnweVoe3k7LMGqOdDjjTtSdgOsiOIMR9qoipIqiC8pcbp%2FKYpakas%2BC10ug0sm8oRekU3jFlvItdwzaWvfTpgvZek2plsm0lJ%2B0cften%2BPC8fSxFdaYTBrZJTRncr0DVkB2PScptojPhFGehYaLQu7cISfAEkNNLu5dtFQ9Rn4A%2BNa72jjixb7cGuQ9h2qb3HeYITKLVfgOybgU2%2FJAYiaGnLZMhhe0jJnmadjhKT6RE8QgkLEy0w1GAVEyu6BocgiGHHhCA1AnTh6erSKtcImNhQYqlkEDy0PFaTnCSCsa27%2Fn4vnz8mMKx0AOHvyggpzxX0xJbj%2For0edik4eGTdZNTQmN0V2VMC5AxdXg%2Bomj19cgkalVFI3JF1suG6ehXV5jHzANmgWKm2%2FAHfAr2O%2FzXQdfWMaKp5J2fUvn3JkMM%2F8wcMGOqUBa0cARtUaWTBbsnaO2VJkMfpbRaWn68c3U0m4YlnjzDxhXjn169PAGVEBVGxFU8z%2BGS43kqg7B0x%2BbjAg1WHfgROms9trvHkVGcV7chY%2B7dW6cHdWPc8%2FqUTzUbSL9hLQKn7FAPsR%2BeokeOgDcsWRoy4cxIKRnoFjMWhvqfr3X%2FApKp7pPr%2F5AOQV2NhqRIn1MCA3ICy%2BWgHly8iouZ%2BUNKJZUwHe&X-Amz-Signature=9098ba20e645dc2d87edeecdffb770c45b47b24a25d9af2dabef7f8cc632b795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
