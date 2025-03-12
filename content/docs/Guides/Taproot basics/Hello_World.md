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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTLWUIX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIH3gx%2BCA1hTNYqb2qTZGH%2Fgujd8V31Pqaw%2BTkpSY0emGAiEA7z27laC7Zs64l8vZUMbQN%2BvL3Je5LMGOZHUyoyToKNwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC1sZca8%2FLCm8M5XSrcA7pY3umBMAHb6exUchziyuEBExJKtI7rB89Gt5NSnhq5kURewrV4qwXrw1PN7p7Afru61r7yEbqH0d5iCvmdzb5niMvhQqo%2BTJ8c3NEDneDmRwSSgzpkdae9cgWL%2FsgRZqO1e03hKNPpiBfJaEopwWR3oFfVsxfiU5K7sL792MVZs9cTKR3ldRuPlHOF7jMXPFVqEjfmoKPRLNZJA39nsZGar0jz%2B1aNSnUnIlyU%2B28E8Md2oEf%2FWearQVK2qJ9dhoVJy5k8OApzDiSNJzaAWrxEWCPd7gTr6ck3wvIyx3SuqAdv8twibz2MWu%2BKTHgfaSW4icYbJ2b5IeBOq7Eoll4YOUgk4PM1ddiZaX8AwuBB4w%2FtPqRBdJ4eEPbRL2h%2BaRGl1ADDjd1klANBTLhq0mbXkdpzM5DRitZyTwXcUJ0clT%2Fbk2%2Bj4rvyDhZ0ebqvX08fTcPKNIa38juT9bTgc8NIiZCcuMzRJdCkM9m5KXiJmczBKGW8WVr12JpLASBGpPo7Fu59oqpNhGMH1Rfvn9xuBFqtoxDy7FOTnbmrtPSeJJATGYaL2m8xmi4QGbs8FCeRnnIFpBWkzE6EzeKGEV%2BvgVG%2BFV1O6yTV%2BO4wTyyaGKK169E%2B1PdPDTTyMPWAx74GOqUBnFVr9pipIqJ1z5oLMpAL5wkuM0HheyLvj4eEcC%2FKxKEQkB5y0OVcz0e3RRI88giDES8VgcWSWvZ01Mf6Eny50AcoZdN0kOOA2mjc%2BB%2FDTPIWHJlzMJ6VWZwG59%2FmQRkJGF6eK4VTGPasU%2BvXQI0DcGtH20RRwc5HLt2ZV%2Ff0unox857SgXualN7x0DHMBKtIyMz1%2BA4cODhcbDyjUjESOSkLsbHI&X-Amz-Signature=c7c17a3dc096f8c1caec695ab204dd6aeaf3ddc45406e2b34ca31b0d2984e669&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTLWUIX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIH3gx%2BCA1hTNYqb2qTZGH%2Fgujd8V31Pqaw%2BTkpSY0emGAiEA7z27laC7Zs64l8vZUMbQN%2BvL3Je5LMGOZHUyoyToKNwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC1sZca8%2FLCm8M5XSrcA7pY3umBMAHb6exUchziyuEBExJKtI7rB89Gt5NSnhq5kURewrV4qwXrw1PN7p7Afru61r7yEbqH0d5iCvmdzb5niMvhQqo%2BTJ8c3NEDneDmRwSSgzpkdae9cgWL%2FsgRZqO1e03hKNPpiBfJaEopwWR3oFfVsxfiU5K7sL792MVZs9cTKR3ldRuPlHOF7jMXPFVqEjfmoKPRLNZJA39nsZGar0jz%2B1aNSnUnIlyU%2B28E8Md2oEf%2FWearQVK2qJ9dhoVJy5k8OApzDiSNJzaAWrxEWCPd7gTr6ck3wvIyx3SuqAdv8twibz2MWu%2BKTHgfaSW4icYbJ2b5IeBOq7Eoll4YOUgk4PM1ddiZaX8AwuBB4w%2FtPqRBdJ4eEPbRL2h%2BaRGl1ADDjd1klANBTLhq0mbXkdpzM5DRitZyTwXcUJ0clT%2Fbk2%2Bj4rvyDhZ0ebqvX08fTcPKNIa38juT9bTgc8NIiZCcuMzRJdCkM9m5KXiJmczBKGW8WVr12JpLASBGpPo7Fu59oqpNhGMH1Rfvn9xuBFqtoxDy7FOTnbmrtPSeJJATGYaL2m8xmi4QGbs8FCeRnnIFpBWkzE6EzeKGEV%2BvgVG%2BFV1O6yTV%2BO4wTyyaGKK169E%2B1PdPDTTyMPWAx74GOqUBnFVr9pipIqJ1z5oLMpAL5wkuM0HheyLvj4eEcC%2FKxKEQkB5y0OVcz0e3RRI88giDES8VgcWSWvZ01Mf6Eny50AcoZdN0kOOA2mjc%2BB%2FDTPIWHJlzMJ6VWZwG59%2FmQRkJGF6eK4VTGPasU%2BvXQI0DcGtH20RRwc5HLt2ZV%2Ff0unox857SgXualN7x0DHMBKtIyMz1%2BA4cODhcbDyjUjESOSkLsbHI&X-Amz-Signature=c11f5caffc1f534243afc8eeac7c42c28f04c99bcbf66b1c439173cafdaa0d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
