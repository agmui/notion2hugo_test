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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KOAMKU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMTF9YaePs27olQ0OCLyfvcRFAC%2BqPUz047kdRXzehJAiB7nQ%2FcNYebYm%2B%2FfaVoo6yR2G21n4EVAzosj6RnJRToDSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bk60UYgzbjNiru8VKtwDRS55ewkwOfZ6oCRn0lbJ7yyBljUrG9Dl8IEUJZKioxnkDUc4mF7oSegiXW9k84WB4e3JayZRfSEepoQ%2BFK5n3HCTeOjM2CcEYvg66%2FbsIaVVslRsHBxZE4%2BDRR1BeDG7j3R1vqRjMqTGtsiIK9h7z0g7wJtkuJiyVHy%2BWihhA3YbELD7GAt0%2FFQVaX6B2OG%2FAy%2BmHnFCowoM35uozMHC8z%2BNJ2YNdhfcG7GqF%2FnEPU4nHa8T2%2FRVE%2BReSx%2F6RAfGPVEFPTWzTkt2qSo7KxkkvLaNJhFqVLp5YY8AnszfsK9H%2BeugtX3myU0%2FDeweZAZprXZQDoZ6%2BYCkBtEC21gbECMo7UHuZ2hEZgWtX2fbZNyvLhaSi76%2F18ABUH7qKatTQQ12qZiyL9Km%2B0nXlGK%2Bw280%2BjxHIBija68iQtWG91bdrLZ2TpVJK36BNd5HSKYrXPXySRpok7x7Cnt%2FN1HohGK2ztR9EhfnDfPnbfbsoulaG9pXJ1dRsPLecRyRf4kLHu2uXPBIl%2Bt4oFGbWuXWuM5TvpF8I4ANr5zwIV2nZ86p8hKOD1V7IPhJaSmkxpnykaMPjeUzFadNugq96RJIt8fe9glpUe8iaQ306HQbZ%2BheqzgYsUv6B4Io98Qw2ofovQY6pgGSPMfn%2BhTP78NJpGb3%2F3FQAiqVgQPZZSSzTzAxewJI%2FKbdRuzXqD9RgPNqpnSbm1TqMzv%2Be%2B1I0DTIoqQnfcjmmxwcQ4mODN92JMoYvDbcWhTYnsl76bDoKO%2FhVRLsm8oC5S1HIqGGTUdgAYxbyCubTHjdXg1%2F4wRm3%2Fj5JaOAMWYXtCFSFeRSNIE%2BQnR%2F6LY5Ib8zwZ%2F6ntw0jF5%2FVWZjJKgri1VZ&X-Amz-Signature=57f8e42a535c9d96ea8b55c8cbb36cb12799b1ba80f3313acd2445db930c0141&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KOAMKU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMTF9YaePs27olQ0OCLyfvcRFAC%2BqPUz047kdRXzehJAiB7nQ%2FcNYebYm%2B%2FfaVoo6yR2G21n4EVAzosj6RnJRToDSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bk60UYgzbjNiru8VKtwDRS55ewkwOfZ6oCRn0lbJ7yyBljUrG9Dl8IEUJZKioxnkDUc4mF7oSegiXW9k84WB4e3JayZRfSEepoQ%2BFK5n3HCTeOjM2CcEYvg66%2FbsIaVVslRsHBxZE4%2BDRR1BeDG7j3R1vqRjMqTGtsiIK9h7z0g7wJtkuJiyVHy%2BWihhA3YbELD7GAt0%2FFQVaX6B2OG%2FAy%2BmHnFCowoM35uozMHC8z%2BNJ2YNdhfcG7GqF%2FnEPU4nHa8T2%2FRVE%2BReSx%2F6RAfGPVEFPTWzTkt2qSo7KxkkvLaNJhFqVLp5YY8AnszfsK9H%2BeugtX3myU0%2FDeweZAZprXZQDoZ6%2BYCkBtEC21gbECMo7UHuZ2hEZgWtX2fbZNyvLhaSi76%2F18ABUH7qKatTQQ12qZiyL9Km%2B0nXlGK%2Bw280%2BjxHIBija68iQtWG91bdrLZ2TpVJK36BNd5HSKYrXPXySRpok7x7Cnt%2FN1HohGK2ztR9EhfnDfPnbfbsoulaG9pXJ1dRsPLecRyRf4kLHu2uXPBIl%2Bt4oFGbWuXWuM5TvpF8I4ANr5zwIV2nZ86p8hKOD1V7IPhJaSmkxpnykaMPjeUzFadNugq96RJIt8fe9glpUe8iaQ306HQbZ%2BheqzgYsUv6B4Io98Qw2ofovQY6pgGSPMfn%2BhTP78NJpGb3%2F3FQAiqVgQPZZSSzTzAxewJI%2FKbdRuzXqD9RgPNqpnSbm1TqMzv%2Be%2B1I0DTIoqQnfcjmmxwcQ4mODN92JMoYvDbcWhTYnsl76bDoKO%2FhVRLsm8oC5S1HIqGGTUdgAYxbyCubTHjdXg1%2F4wRm3%2Fj5JaOAMWYXtCFSFeRSNIE%2BQnR%2F6LY5Ib8zwZ%2F6ntw0jF5%2FVWZjJKgri1VZ&X-Amz-Signature=cae4b3ec3a7d7e2d348f9b91e6a6a01b38e69867ea8c033e1312dd5e6edf2cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
