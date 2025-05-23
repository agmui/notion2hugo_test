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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFN4HER%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCntT4dMIVtntlVfTRuPvDZGfVBamEdf2bIoYgFFTstLAIhAIxQyPCEuI%2BtJHbo3aRyUZdsPY4G6eyKs76p74p%2FxMq3KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4XRYw8YRTpBImvVwq3APXEtnRp9uQ4sOm%2FDlAmJmxYSgh2%2BJplgirz4tp%2BnsqkIRyNFuuErmkEMbMFLkn0FR2kqZbXv2gbmZSVapU%2FjW9upRwBAGC%2B1n%2BMvuA5jkMMu%2BgMZ4oWRvYg7Tsn99gn5u7QNCwxa2jJXTT3WSmx97tlA74lgbOyR%2FG5z%2BgFaoBZ5TP6RYr0kqbnTk8edmDSCwVlmC1CXLz%2F2mplMcyRVmrK3C5kbqSpTID3EHY0x8W4J0MKrxoEvo7vgF66Jzsz3NaMpY2EJZP9jFFjW1kzkB5GBxJ0FLc3jS96NXEkhmZacpT40%2BOWcdcFEM9Zo7vwuiY6TgrXq8LiHcPjKJM62qZvt242bnXsk%2F58n9RzWLe%2FycpozTMtv%2BKCVTVKtrnUMdfMBhctZzWqKYnH0%2B8d9Dvd%2BxmHoKQANHsaTyH%2BZZJ9qY6z7Xrx6flpRf6rO5oxcdraEkRfMj7RMsOGcDgCrnP44Otg0v5wMr13iSLj%2BR4hMNC409rAN0EGAfC39pgd8uysqDCoHWVp6hjxy8uTGd0DMcCus83vQ9kgYD4mU9PikM1iWrAQrAXK9EwuP%2BeJFXVfw1HiAqtWLgliHi7mGfl2E9CUuh6z8TneYCXefa7HKiAgsZzF9giXM1hKDD7wr%2FBBjqkASblQ7jPu3P5rGOWJFf0Rbsidan2R7FN0q3lgVVb5tOqrcFXHBPuzumWOQn02mSxvTVrfePZZ%2B7e9NzXnRJBDdm7pVNtCPqY6eRW886zJjH1ZqR81DWrPNP5NajQ1Xg%2B%2FaMRCLvDkiP%2BQc09%2B%2BayR60FCIq3Cw%2Fg52Tj%2FKGzKyZSNXiFKnjaL%2BXpcx3PgZTr3OCxAtzJ3aVHCUHpXCVwVdu9Nj%2Fw&X-Amz-Signature=45a2003d04aafa0b7d3b63add49522d2f8e3b2d5cf1b594d7b6472439a6d2a44&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFN4HER%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCntT4dMIVtntlVfTRuPvDZGfVBamEdf2bIoYgFFTstLAIhAIxQyPCEuI%2BtJHbo3aRyUZdsPY4G6eyKs76p74p%2FxMq3KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4XRYw8YRTpBImvVwq3APXEtnRp9uQ4sOm%2FDlAmJmxYSgh2%2BJplgirz4tp%2BnsqkIRyNFuuErmkEMbMFLkn0FR2kqZbXv2gbmZSVapU%2FjW9upRwBAGC%2B1n%2BMvuA5jkMMu%2BgMZ4oWRvYg7Tsn99gn5u7QNCwxa2jJXTT3WSmx97tlA74lgbOyR%2FG5z%2BgFaoBZ5TP6RYr0kqbnTk8edmDSCwVlmC1CXLz%2F2mplMcyRVmrK3C5kbqSpTID3EHY0x8W4J0MKrxoEvo7vgF66Jzsz3NaMpY2EJZP9jFFjW1kzkB5GBxJ0FLc3jS96NXEkhmZacpT40%2BOWcdcFEM9Zo7vwuiY6TgrXq8LiHcPjKJM62qZvt242bnXsk%2F58n9RzWLe%2FycpozTMtv%2BKCVTVKtrnUMdfMBhctZzWqKYnH0%2B8d9Dvd%2BxmHoKQANHsaTyH%2BZZJ9qY6z7Xrx6flpRf6rO5oxcdraEkRfMj7RMsOGcDgCrnP44Otg0v5wMr13iSLj%2BR4hMNC409rAN0EGAfC39pgd8uysqDCoHWVp6hjxy8uTGd0DMcCus83vQ9kgYD4mU9PikM1iWrAQrAXK9EwuP%2BeJFXVfw1HiAqtWLgliHi7mGfl2E9CUuh6z8TneYCXefa7HKiAgsZzF9giXM1hKDD7wr%2FBBjqkASblQ7jPu3P5rGOWJFf0Rbsidan2R7FN0q3lgVVb5tOqrcFXHBPuzumWOQn02mSxvTVrfePZZ%2B7e9NzXnRJBDdm7pVNtCPqY6eRW886zJjH1ZqR81DWrPNP5NajQ1Xg%2B%2FaMRCLvDkiP%2BQc09%2B%2BayR60FCIq3Cw%2Fg52Tj%2FKGzKyZSNXiFKnjaL%2BXpcx3PgZTr3OCxAtzJ3aVHCUHpXCVwVdu9Nj%2Fw&X-Amz-Signature=0eaa315e506d68f75412d50e7e185b4daf7684b3ca845a1c6282ab9ec1f2970a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
