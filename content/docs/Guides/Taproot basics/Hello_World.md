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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NLIA7CN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDtMM7cGm5%2FZdCUpaWiTrAqReyMmZbJLhdStQt569SDBAIgfLptXFhF8R2KsMGl%2BBO1WErUBn%2BYfJqQtnd0hP%2FDQWkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCP%2B0Yyz8R2iqqZoXCrcA8MU%2B6LRtmsF1Aa1C5vmBuWlDjUsR2D34qdwe9MuNFwg%2F0kl7L12MMePHABjc0dD%2F%2FTwNarYveX8iMVeF3HY81OaO3ROVizapRRyuUsz71ycWiKtBKDOnHbtGJhtGnSUBzuOCez%2Bbxl8nW1C7Ws4PDr%2Bi9pukZaTkFhL%2FT%2FNNshaw14zhvp6VrOI%2BOVwlWeK2dyj%2FqKuvUhuYrC2H2hyRdN50%2FcfOU9jS2K6kQ4enbfDqKhOx%2FMel5SgbvkKl25NWG%2BrHT43nG5TP8q45uJqrCKV0vj8jM756ga1Jfb6LCC11FAFSkvoeJqLBLXOR2tD4yUVqfm5nNyi%2F%2BtiZ3dFfWB%2FeQ6xk0T0j1geJ0EdFQvtsvvfSDR65MkYt6MmFRkgCqelXnfo%2FeFaM4wbPJQ8b2nWtnhTMX%2BKlq0aw6hbrXzi2jjGY8snxAYjoVYG0%2BTNbV2YJSNYZLTEIvxFI5Y0r3%2B160T1CfEpfHOSeB3E%2FJcLRMb8k6BHIduULsztZs1cN%2BrYqZca9DyY5sKpr2ZMpsXB8QOWc55WbbQe5gHOO4kXMo2blSRnea8DEeCdPcXE0i9ctE1Ze68xuH4elFKDbjNAR3SsyOqfX0Xf26U6jA3Aid8f3msN1izJRtGHMJeR3cMGOqUBVzaYQcJf%2FbbqPdVDq3yNMiVob1KOwtWXriu5Zdl2x0jvYH6PTGKzPc871mQ%2FtHyh%2FwNK0BpdXkRSHeYBK3tjHsM6W%2FXDeab7Vcjc7sfF1IUkrWloYbje9roNeFl3bq6L1AOUrJneHHI0pihjCiKA8lZAK8vaCWyWxT8gZnK%2F1a7z654NSu47R6xUwLO8RVb%2BoES%2BJI1dfIGkoqZDsEdnYBnKLO2C&X-Amz-Signature=ae25f5a443922d4edc019ff8ef9a371f09d98c87360b7a8b548b1ce4f2d55f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NLIA7CN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDtMM7cGm5%2FZdCUpaWiTrAqReyMmZbJLhdStQt569SDBAIgfLptXFhF8R2KsMGl%2BBO1WErUBn%2BYfJqQtnd0hP%2FDQWkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCP%2B0Yyz8R2iqqZoXCrcA8MU%2B6LRtmsF1Aa1C5vmBuWlDjUsR2D34qdwe9MuNFwg%2F0kl7L12MMePHABjc0dD%2F%2FTwNarYveX8iMVeF3HY81OaO3ROVizapRRyuUsz71ycWiKtBKDOnHbtGJhtGnSUBzuOCez%2Bbxl8nW1C7Ws4PDr%2Bi9pukZaTkFhL%2FT%2FNNshaw14zhvp6VrOI%2BOVwlWeK2dyj%2FqKuvUhuYrC2H2hyRdN50%2FcfOU9jS2K6kQ4enbfDqKhOx%2FMel5SgbvkKl25NWG%2BrHT43nG5TP8q45uJqrCKV0vj8jM756ga1Jfb6LCC11FAFSkvoeJqLBLXOR2tD4yUVqfm5nNyi%2F%2BtiZ3dFfWB%2FeQ6xk0T0j1geJ0EdFQvtsvvfSDR65MkYt6MmFRkgCqelXnfo%2FeFaM4wbPJQ8b2nWtnhTMX%2BKlq0aw6hbrXzi2jjGY8snxAYjoVYG0%2BTNbV2YJSNYZLTEIvxFI5Y0r3%2B160T1CfEpfHOSeB3E%2FJcLRMb8k6BHIduULsztZs1cN%2BrYqZca9DyY5sKpr2ZMpsXB8QOWc55WbbQe5gHOO4kXMo2blSRnea8DEeCdPcXE0i9ctE1Ze68xuH4elFKDbjNAR3SsyOqfX0Xf26U6jA3Aid8f3msN1izJRtGHMJeR3cMGOqUBVzaYQcJf%2FbbqPdVDq3yNMiVob1KOwtWXriu5Zdl2x0jvYH6PTGKzPc871mQ%2FtHyh%2FwNK0BpdXkRSHeYBK3tjHsM6W%2FXDeab7Vcjc7sfF1IUkrWloYbje9roNeFl3bq6L1AOUrJneHHI0pihjCiKA8lZAK8vaCWyWxT8gZnK%2F1a7z654NSu47R6xUwLO8RVb%2BoES%2BJI1dfIGkoqZDsEdnYBnKLO2C&X-Amz-Signature=6cd106e61ae4d81cdeba06e23d01b2a1f7d4756825eeb1b4a808d4018d2cda8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
