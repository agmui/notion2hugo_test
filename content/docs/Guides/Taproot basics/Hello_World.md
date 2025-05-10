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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV2BJOD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQnPLX1AkdipPsQm2mLV4zxcs3lDwTlRiqIGc7H3GZlwIhAP8X%2BuOEYCjZRO%2FmEcqe7Sj%2BcnRNnK9nJeQwgSu2qENJKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp4eoQag0EbSMs9ckq3AMxAbiF%2BrPY%2Fsz%2FTg7JoyI86C3Y9ejyStFqGp8NSLK3SK3YsGOhhWIlRjHLAHHgSpnRF0K%2B%2F5r7QVatzVZDsVivpL%2BlhaRVOwq42Iqw9P2byD0wbxYOtrrdre5oAkjkdALuaCElb8UkQJiRCQjkZYy%2Bgp1RxMpfuXjUSng%2FOGlD0AzE4tU06GTDzN3CviXbLl5Jo5LI6jd%2BBO%2Bb%2FO%2Fbbxt13tJgWapiWsuctCqdjMB5PHUcOLBsoaOOT2aBv%2FXAY7XXkvo8H2kIMmwkVsJGKwRaxGW4ptdrhuCFJI%2FaBszHWf0hhQCt7jk%2F0XhB1e8Luc%2FniufTpltXtov1TPTaqmXEazMullnNPETnu5iV2RPv%2BBoow9y40gyGiNh2Z%2B%2FdJZh%2BQLvuiiSlK993F%2Bg3EPxFaJcn1deybc5h%2BM7c4mqJQCmavVIQce6%2FAU7qzF0R%2FGb%2FgtETvYrsbSOqq%2Fdp%2Bl5XqeNClARQ2ONsPF%2BIDVSHUWhflhoVaPwEYqpZ3PGFepyxssIAUwphT8ps1V4x5dWn8DfDbWL0LeQKZ7%2FYDaFQxnCFoellG%2B%2BqJVq6JRN%2B%2FLsmly67SyGIA0SylKRJIUED%2BWzeErJp1nPPyGKNR85ZkGx6T7ImJNGoc8UmGDDNj%2FzABjqkAer%2FrDCplpnTvI7%2FdJ%2F3qLLQ%2BJy2jzSXMSEudzKzAxxEgSScaLiYG1IpK0ktrv%2BSGMFxgjoiVTP4rCpjWFXjddQW%2BKX4HpWZYvLYNw4%2FbZzpR4xkMHWd4dkfiXg6tCvyAa2Yd%2FY1gKD8Z2ISnTOP9jjpFNJGeq%2BYGZBd39GDQ262Scy14PQqEgq313ssetdDhjfhyYkTv4oUgLloFEWd61PSRmtA&X-Amz-Signature=ec5e82af7e60247d1067ef481cf6e1ec73b4b1b5266c0032ce662a194cdb92a7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV2BJOD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQnPLX1AkdipPsQm2mLV4zxcs3lDwTlRiqIGc7H3GZlwIhAP8X%2BuOEYCjZRO%2FmEcqe7Sj%2BcnRNnK9nJeQwgSu2qENJKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp4eoQag0EbSMs9ckq3AMxAbiF%2BrPY%2Fsz%2FTg7JoyI86C3Y9ejyStFqGp8NSLK3SK3YsGOhhWIlRjHLAHHgSpnRF0K%2B%2F5r7QVatzVZDsVivpL%2BlhaRVOwq42Iqw9P2byD0wbxYOtrrdre5oAkjkdALuaCElb8UkQJiRCQjkZYy%2Bgp1RxMpfuXjUSng%2FOGlD0AzE4tU06GTDzN3CviXbLl5Jo5LI6jd%2BBO%2Bb%2FO%2Fbbxt13tJgWapiWsuctCqdjMB5PHUcOLBsoaOOT2aBv%2FXAY7XXkvo8H2kIMmwkVsJGKwRaxGW4ptdrhuCFJI%2FaBszHWf0hhQCt7jk%2F0XhB1e8Luc%2FniufTpltXtov1TPTaqmXEazMullnNPETnu5iV2RPv%2BBoow9y40gyGiNh2Z%2B%2FdJZh%2BQLvuiiSlK993F%2Bg3EPxFaJcn1deybc5h%2BM7c4mqJQCmavVIQce6%2FAU7qzF0R%2FGb%2FgtETvYrsbSOqq%2Fdp%2Bl5XqeNClARQ2ONsPF%2BIDVSHUWhflhoVaPwEYqpZ3PGFepyxssIAUwphT8ps1V4x5dWn8DfDbWL0LeQKZ7%2FYDaFQxnCFoellG%2B%2BqJVq6JRN%2B%2FLsmly67SyGIA0SylKRJIUED%2BWzeErJp1nPPyGKNR85ZkGx6T7ImJNGoc8UmGDDNj%2FzABjqkAer%2FrDCplpnTvI7%2FdJ%2F3qLLQ%2BJy2jzSXMSEudzKzAxxEgSScaLiYG1IpK0ktrv%2BSGMFxgjoiVTP4rCpjWFXjddQW%2BKX4HpWZYvLYNw4%2FbZzpR4xkMHWd4dkfiXg6tCvyAa2Yd%2FY1gKD8Z2ISnTOP9jjpFNJGeq%2BYGZBd39GDQ262Scy14PQqEgq313ssetdDhjfhyYkTv4oUgLloFEWd61PSRmtA&X-Amz-Signature=e449d3debf62fc46818176e39a5801d472bb5042a605f7bab579c937e9e29c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
