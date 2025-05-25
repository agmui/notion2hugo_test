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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2U7AIH7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIEjlzGFanYXoK1TmAhfnH4Ray1O7brV7%2B47nGk1EXS87AiEAuyMfzLJs9VznUNC0Vu%2Bx6aMH8SMz2qm5TLeVhNuQ5Psq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHyq%2FTuSIwTm2z9yHCrcAytBMmvSoiQ3Z1QZua8Od8jSsjGsW6pOIwGMAkstmPSISbAy9HbPfyIHiSMK8ZMYQPP7xzPJc4f2iPvN7aMi4mpLzDHPjW9egV1QLypMXncnzKY2hiYcaWX5N5Z5WZnBbQ%2BpCfnI3z0vc9GmSY1DAhWMpLCyW56ELilgI1AY%2FRGkVVtvlIPnqds49iYLF15U9yAymupqaUr2l3m0gIP%2BJd9jGaiE3Ymd674akf%2F7VO8haEVhNoujVeSp%2BHhYTZMHRGVomh5In%2BjOstYXCUwaHzP2QFOt1k8kmmwNDiaMtRJmHQR98Lxx8WH9PwIV7Znnhmx7IpshoN7z6R2K2uxVdGZSdpkadvynC14zZW4GTxx%2F%2B3vVCTrkNsAyuJDDm45Do%2BlkZRyucqeBp9MqeNfI6hZ8Xe8KUTttD0gxm9Q%2FeFK4C2nHr6Cg913cg9uGQI2DQX%2Fc%2BcF0I0mCB98CK8YjwnG1wQBnA8PhPReI%2FtgtuSOx9G8mo%2BsNIXw4qhY8uKSFMG%2F5unEq6M6R9NJuuisCjWOxMAOdWCI7fxb%2Bq6fDXY%2BkydE0X4XgUTZ21L%2BL5Gb9U5MZqLEbduJGpbwmpU31ZeeSoPhXX9L4F0itSzzM4VPmtAU5PpUX%2BWohjkReMPXmysEGOqUBw0D38c7Bon8bnhvstJiDEW2IZ6FL%2BTt%2BcQLUqv4jBMBP3Tw%2FjQldJUCcVAO2E1eH2F%2BBOTP%2BZ84PCcsC8nEIkYZU5KtXZKBFsbhn0v1LjQ%2BNkmKKKcF8RZ7ycsSqBRW5%2BUs%2FftiOPmRtY36lUrLszrNE5ysOPg6kVLalrJHZFQwffmSO%2Bj24J5td8Rx3EwmmkNHUh2zNu4fcennZHW8JVFH4HeUy&X-Amz-Signature=fa2249e61e727cb209000ec4ff69777c83af2a3e884c053b0f4b1b13688694a0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2U7AIH7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIEjlzGFanYXoK1TmAhfnH4Ray1O7brV7%2B47nGk1EXS87AiEAuyMfzLJs9VznUNC0Vu%2Bx6aMH8SMz2qm5TLeVhNuQ5Psq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHyq%2FTuSIwTm2z9yHCrcAytBMmvSoiQ3Z1QZua8Od8jSsjGsW6pOIwGMAkstmPSISbAy9HbPfyIHiSMK8ZMYQPP7xzPJc4f2iPvN7aMi4mpLzDHPjW9egV1QLypMXncnzKY2hiYcaWX5N5Z5WZnBbQ%2BpCfnI3z0vc9GmSY1DAhWMpLCyW56ELilgI1AY%2FRGkVVtvlIPnqds49iYLF15U9yAymupqaUr2l3m0gIP%2BJd9jGaiE3Ymd674akf%2F7VO8haEVhNoujVeSp%2BHhYTZMHRGVomh5In%2BjOstYXCUwaHzP2QFOt1k8kmmwNDiaMtRJmHQR98Lxx8WH9PwIV7Znnhmx7IpshoN7z6R2K2uxVdGZSdpkadvynC14zZW4GTxx%2F%2B3vVCTrkNsAyuJDDm45Do%2BlkZRyucqeBp9MqeNfI6hZ8Xe8KUTttD0gxm9Q%2FeFK4C2nHr6Cg913cg9uGQI2DQX%2Fc%2BcF0I0mCB98CK8YjwnG1wQBnA8PhPReI%2FtgtuSOx9G8mo%2BsNIXw4qhY8uKSFMG%2F5unEq6M6R9NJuuisCjWOxMAOdWCI7fxb%2Bq6fDXY%2BkydE0X4XgUTZ21L%2BL5Gb9U5MZqLEbduJGpbwmpU31ZeeSoPhXX9L4F0itSzzM4VPmtAU5PpUX%2BWohjkReMPXmysEGOqUBw0D38c7Bon8bnhvstJiDEW2IZ6FL%2BTt%2BcQLUqv4jBMBP3Tw%2FjQldJUCcVAO2E1eH2F%2BBOTP%2BZ84PCcsC8nEIkYZU5KtXZKBFsbhn0v1LjQ%2BNkmKKKcF8RZ7ycsSqBRW5%2BUs%2FftiOPmRtY36lUrLszrNE5ysOPg6kVLalrJHZFQwffmSO%2Bj24J5td8Rx3EwmmkNHUh2zNu4fcennZHW8JVFH4HeUy&X-Amz-Signature=22a29aee1132344056c5225ad5baf761837d2ce6d1e03190762e1f8bbbd3bba1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
