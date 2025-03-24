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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMMDZBD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEIa%2FXyEYkSql%2B62uOdKstjCOuIRcrgbAtuzXFWnzmLAiBmiUZ4SCt14I1vu3WUDcqHqn3cSqjNjPKY94DAyEJ%2FPyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BzwmKqChaTSzmabKtwDppcIGn6GJU7EoX4tqT8NLwjvXjzQjaNM%2FmBfbAmhVcPY4lxyG7vUpFiLha75Ki40JmBrx37ovOglUupFe77YUv87cN720mbsKkQ9dBmn7H8nkARIG1mj6K8PDU08WpGRa3STT2vr%2F96PfLmkviBFNkYvfF0fU5AgSb42l2%2Bne99XFjyRY6aCH58kmZS5LiEEj4JvRosed9rl7ycSjDzwce2e0eDrFIfVp8UuZK%2BTy4bNbeeZWaZ4x%2B1lzVvibCzr8Cv1aA9dexsDcQx8FNvjjr3m2LXeI1ny%2BJ%2FyPq20iSt4O8mgEAXlgaHACXSPvgZD4okcUp1yG3WXzxCLmdNnCjv%2B22F4hR5W%2BF8UleyVPt118tBNuGoYq6wdzryaHCRjpJZH0aktcaucqTBzVorcVgYeHcnME93yM217XdVd21Nvx%2FfNp9h%2BRW4SyYtTYSUJvPO1rBGI1hahRjlgFHdEj9GkROdf5nA0TQ8m8E%2Fqi7H%2B0%2FW%2FCBhrTpzbfCFvK0EGNUF4KEByp1yC4mcRW%2B0eW4M2H0CwsHIokwPJR1GgNPDaH9NhS7vvtTbpsw9Kuk2HgNXqPgxQXjVX%2Bf519e56JKfJC0z2NLSvUGTBpiu6oAJrlwovE4s8t5uVIrUw076FvwY6pgFgOOCeKoKMDPVvwCkDlm7wuNrhA7eaYngNFQurEx5hGTIMUyS28rytAQ6zDqF%2FClC2MHYJNFQBC%2Bx6CNUNLK7%2Ftgbpw9zcn0vSI%2FkJSqYZKkzWPoP45Ykx0vlQsMvnKOW9lcyEoIgBT%2FbY6ba0fLtvD4PVZX119B1xlfvc27NhbibNLG7%2FTIr5O%2BVvA80OV9r4Q15w%2FoCk6%2FDlO3NgEpwPpo%2BX7tXw&X-Amz-Signature=f6b04aba75818b13f40c502a94f828549340c8d715a2ed2f79f4ebf980e176dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMMDZBD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEIa%2FXyEYkSql%2B62uOdKstjCOuIRcrgbAtuzXFWnzmLAiBmiUZ4SCt14I1vu3WUDcqHqn3cSqjNjPKY94DAyEJ%2FPyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BzwmKqChaTSzmabKtwDppcIGn6GJU7EoX4tqT8NLwjvXjzQjaNM%2FmBfbAmhVcPY4lxyG7vUpFiLha75Ki40JmBrx37ovOglUupFe77YUv87cN720mbsKkQ9dBmn7H8nkARIG1mj6K8PDU08WpGRa3STT2vr%2F96PfLmkviBFNkYvfF0fU5AgSb42l2%2Bne99XFjyRY6aCH58kmZS5LiEEj4JvRosed9rl7ycSjDzwce2e0eDrFIfVp8UuZK%2BTy4bNbeeZWaZ4x%2B1lzVvibCzr8Cv1aA9dexsDcQx8FNvjjr3m2LXeI1ny%2BJ%2FyPq20iSt4O8mgEAXlgaHACXSPvgZD4okcUp1yG3WXzxCLmdNnCjv%2B22F4hR5W%2BF8UleyVPt118tBNuGoYq6wdzryaHCRjpJZH0aktcaucqTBzVorcVgYeHcnME93yM217XdVd21Nvx%2FfNp9h%2BRW4SyYtTYSUJvPO1rBGI1hahRjlgFHdEj9GkROdf5nA0TQ8m8E%2Fqi7H%2B0%2FW%2FCBhrTpzbfCFvK0EGNUF4KEByp1yC4mcRW%2B0eW4M2H0CwsHIokwPJR1GgNPDaH9NhS7vvtTbpsw9Kuk2HgNXqPgxQXjVX%2Bf519e56JKfJC0z2NLSvUGTBpiu6oAJrlwovE4s8t5uVIrUw076FvwY6pgFgOOCeKoKMDPVvwCkDlm7wuNrhA7eaYngNFQurEx5hGTIMUyS28rytAQ6zDqF%2FClC2MHYJNFQBC%2Bx6CNUNLK7%2Ftgbpw9zcn0vSI%2FkJSqYZKkzWPoP45Ykx0vlQsMvnKOW9lcyEoIgBT%2FbY6ba0fLtvD4PVZX119B1xlfvc27NhbibNLG7%2FTIr5O%2BVvA80OV9r4Q15w%2FoCk6%2FDlO3NgEpwPpo%2BX7tXw&X-Amz-Signature=64b35ac7a948bceaecd0aba9ccdaa4a841ba89380a1a912a4712d6852cdc8902&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
