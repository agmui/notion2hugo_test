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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEJE5PH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDewLew%2Fz4BqmgzXYAqm8iUCcte0a9FSl7ySoAzUN%2B9hAiB61%2BRyeNliAkJw2AgMUYDKSLv57I%2F18MJDMxvJU%2Fwquir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMx6%2FDW3Ljgru%2BeAzeKtwDMJjnJ4kOmrrT%2B9FircGvo2T%2Bz7djX8n7FLBLVpHBdyUIFm0q35Lm2F7cWciGOsvvOdWyLA41o%2FbII32%2FetArC6AwH266EN7y7JfXYBSds42Zn09mZJub03sRVAlj%2F24MkwuacjRpf4J022RvlrOE5wRRUbEoz8ekqCcU8peTMndaaurqAUEtYYb5I2%2BpZOurk2JTQFjYHIhIK67DcVNd9Eexxq2bd2OkbuKqLGopwIlveEDQ8fqPnX9s1TFqxG7Ssk%2BTTHx%2FXcjeoXWxZ%2FGaNVqw%2B%2BTdzzFkB9i3IViXKyAxx2XGffSJ21ttkkXWgKkueYmO4YjGBFsUMGIXKh2aw86mgsUyaREko5mci50VtIiENEZ%2BNADYOuhdTR1HAsQymrUHiFUq8W4roCqBYGTBrMu1tAJ3pSnQzxy4Fw5n%2BcuXE8L%2FMfCQ4V8n%2BTJLWY9MUzaZKcaJAyHyMEL9t3FOd%2FN0AbhiDeDBLgL6Y%2FQbztGFmYOIfcFyCZeay3NESQqgzALMXMizxuzuRI5FS3%2Ficim4X4nBkuaSaUDKGN9TXX6C%2BQ1sm%2FMaUH%2B1vF4RH2Yaj9fuOIjY69FVCiSEWTqmyQc0JGd8UocOlESsF3ArWIp0B3yvgiga1gBq8SwwvNucwQY6pgFayP7bWJaKoUxEEAhhpoqUirbDuEL8NKA%2BG4MnE%2FmGl8vUubb8osvL1OChm6kC37XZBlck6j31039cK19yX3hWcb%2FWpFnAbKL4xLSLmR4O7nlhgCutw%2B8rF3EZxxbHhRgbyb%2FQ9dI4isOu4padHWtdy6rAnMg6fOeruj85pgo49Aa9M89p6x%2BJ5VvXeW3V0oFnVjxYdvVM1VmoSH3p%2FCeZRbaYL9bB&X-Amz-Signature=951bfc0c6ca4c69e5e13d65f79f35024a7eac949fd42cd656023e3f8c4394873&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEJE5PH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDewLew%2Fz4BqmgzXYAqm8iUCcte0a9FSl7ySoAzUN%2B9hAiB61%2BRyeNliAkJw2AgMUYDKSLv57I%2F18MJDMxvJU%2Fwquir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMx6%2FDW3Ljgru%2BeAzeKtwDMJjnJ4kOmrrT%2B9FircGvo2T%2Bz7djX8n7FLBLVpHBdyUIFm0q35Lm2F7cWciGOsvvOdWyLA41o%2FbII32%2FetArC6AwH266EN7y7JfXYBSds42Zn09mZJub03sRVAlj%2F24MkwuacjRpf4J022RvlrOE5wRRUbEoz8ekqCcU8peTMndaaurqAUEtYYb5I2%2BpZOurk2JTQFjYHIhIK67DcVNd9Eexxq2bd2OkbuKqLGopwIlveEDQ8fqPnX9s1TFqxG7Ssk%2BTTHx%2FXcjeoXWxZ%2FGaNVqw%2B%2BTdzzFkB9i3IViXKyAxx2XGffSJ21ttkkXWgKkueYmO4YjGBFsUMGIXKh2aw86mgsUyaREko5mci50VtIiENEZ%2BNADYOuhdTR1HAsQymrUHiFUq8W4roCqBYGTBrMu1tAJ3pSnQzxy4Fw5n%2BcuXE8L%2FMfCQ4V8n%2BTJLWY9MUzaZKcaJAyHyMEL9t3FOd%2FN0AbhiDeDBLgL6Y%2FQbztGFmYOIfcFyCZeay3NESQqgzALMXMizxuzuRI5FS3%2Ficim4X4nBkuaSaUDKGN9TXX6C%2BQ1sm%2FMaUH%2B1vF4RH2Yaj9fuOIjY69FVCiSEWTqmyQc0JGd8UocOlESsF3ArWIp0B3yvgiga1gBq8SwwvNucwQY6pgFayP7bWJaKoUxEEAhhpoqUirbDuEL8NKA%2BG4MnE%2FmGl8vUubb8osvL1OChm6kC37XZBlck6j31039cK19yX3hWcb%2FWpFnAbKL4xLSLmR4O7nlhgCutw%2B8rF3EZxxbHhRgbyb%2FQ9dI4isOu4padHWtdy6rAnMg6fOeruj85pgo49Aa9M89p6x%2BJ5VvXeW3V0oFnVjxYdvVM1VmoSH3p%2FCeZRbaYL9bB&X-Amz-Signature=d3dade441f58a8571f3a276b75285cc64ae447b6c25b04c2a93feb09d3b02aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
