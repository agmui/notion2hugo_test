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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTITOCJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1RwuBtVJPK8yz8ptHe6oexADwcHs0TH6q5YJ9sPOSaAiBKA3Uy50UeTUDwHhZwJ8yiAnk3xkyhyNXf5%2B1cbnlLjSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4RlWYaUZ2UswOlIvKtwDKJpvrmbzyy7Q0o4prnyvT2gjstavnSQselxqSoRkT7xi3998siTKIRpo4XK32QUuDkchuQx4hPgDMNmUz0V56nnFHO0%2BzRbBCZK91ss5tAZieYrivKGARq0wE3aBFOYu6UUi2cm7HzO8ojVfMVIBBcd%2F9eGFTBSoWB3KUYO9N%2BfCo381SUHrP4Huu8K9CSq6aKsgZrOe6bVFOrCdPOVYPbHAQXkshAGDePO9TMBTwFxgpHZDMxSOJw4ZrPUL53jtStl97p2HscNzwkZEQkISCEf0Amx8dbNEhootcu5NH%2FXBebgrFOfF5DJTVZxK4otax6Mrd6S0bEyIM1x5a4%2F69preJG3%2Fd%2BTvlPQkH%2Bs%2Brum6tiE6fp6qoEdZRWIIPoj2yVfymuNLDq3KskFtwUQG2L7RaLR4rZUQmXe4DbRViT6%2BSDtfU6SUyig7gCv6HpUYTcryQcuND%2B2tUIaJLVWxFF39INthrc%2BUJQcJ%2FeGQqjPR9961o13SgoDVMJN6ftLWObhdf%2FhXKdYNA7VbCq9gDDwB6N9OqujItdTJ%2BnRcT8oR1yT8R6V%2Fxbq%2B9hIa9eH5aUKvSk3kJWyP02tMaRu7rH%2F8oq3vWMsIo%2B%2BvhVTRso5CbuYtofMTf020ENQwxpGNwgY6pgFrC01m5MM14cpqZcO%2B1G1bo%2BOxelBkBliwLH5gZSAtK3s3ZrHTqpAzDoK2ax6tNDBs8Pe5PXqmqgyrzXw3FbhvJBWUM1dbwl9rSLIwNRxwPm7QNlj%2FC8W0AD7DkB6cS2K1hPOaYxehB%2FX01sei%2BtL4nRVz7X2Lwh3QfcjsTmKGDcVBNSaksEw5efQEcH7cwHxYDahhMJFIxhA%2FImqkLTuBagUnYFT6&X-Amz-Signature=52fcb75bc741e0f86f0abd39032827e8b1be53c5da7744ec57ff377f720bf9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTITOCJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1RwuBtVJPK8yz8ptHe6oexADwcHs0TH6q5YJ9sPOSaAiBKA3Uy50UeTUDwHhZwJ8yiAnk3xkyhyNXf5%2B1cbnlLjSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4RlWYaUZ2UswOlIvKtwDKJpvrmbzyy7Q0o4prnyvT2gjstavnSQselxqSoRkT7xi3998siTKIRpo4XK32QUuDkchuQx4hPgDMNmUz0V56nnFHO0%2BzRbBCZK91ss5tAZieYrivKGARq0wE3aBFOYu6UUi2cm7HzO8ojVfMVIBBcd%2F9eGFTBSoWB3KUYO9N%2BfCo381SUHrP4Huu8K9CSq6aKsgZrOe6bVFOrCdPOVYPbHAQXkshAGDePO9TMBTwFxgpHZDMxSOJw4ZrPUL53jtStl97p2HscNzwkZEQkISCEf0Amx8dbNEhootcu5NH%2FXBebgrFOfF5DJTVZxK4otax6Mrd6S0bEyIM1x5a4%2F69preJG3%2Fd%2BTvlPQkH%2Bs%2Brum6tiE6fp6qoEdZRWIIPoj2yVfymuNLDq3KskFtwUQG2L7RaLR4rZUQmXe4DbRViT6%2BSDtfU6SUyig7gCv6HpUYTcryQcuND%2B2tUIaJLVWxFF39INthrc%2BUJQcJ%2FeGQqjPR9961o13SgoDVMJN6ftLWObhdf%2FhXKdYNA7VbCq9gDDwB6N9OqujItdTJ%2BnRcT8oR1yT8R6V%2Fxbq%2B9hIa9eH5aUKvSk3kJWyP02tMaRu7rH%2F8oq3vWMsIo%2B%2BvhVTRso5CbuYtofMTf020ENQwxpGNwgY6pgFrC01m5MM14cpqZcO%2B1G1bo%2BOxelBkBliwLH5gZSAtK3s3ZrHTqpAzDoK2ax6tNDBs8Pe5PXqmqgyrzXw3FbhvJBWUM1dbwl9rSLIwNRxwPm7QNlj%2FC8W0AD7DkB6cS2K1hPOaYxehB%2FX01sei%2BtL4nRVz7X2Lwh3QfcjsTmKGDcVBNSaksEw5efQEcH7cwHxYDahhMJFIxhA%2FImqkLTuBagUnYFT6&X-Amz-Signature=2a878f66c90b0f97607ef32999e82c4c71aa5589d1abe56cd9ecb1b555170ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
