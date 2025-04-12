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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MBKV3N%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGP3ZipPMblQyBghxM8%2BarMyDeTqXprrTSzsdYh2QBbYAiEA9kp%2BM1NLYwy3eNMWU8akBH%2BFk%2B4NmMb%2BQ7oh2gLE2cIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOanwgMgai6RIW76yrcA8bHs%2FAKiF6559I72SBAVwcOomV8UGBZZ%2Bhnhw%2BUtE8j69n2BxUomVprPD5TNvp8Nz7X38FRM%2FpwE5WxSOVKkdHNnhmMXJuRM9SGoQ2qsoYT49MJ%2B88d7V%2B7mJWlLcUNgr4Bm55LDZmsXxA%2FKbD%2FosQqbRwEdhzw%2F3eYnOtdt3aPZ1TblVuxUEn7eKiLWolJr6%2FQ8gNUq6kflAxIz14BuOEqiB1XU%2B2WlqrJZxsQ3FPyRMlEJcntr6HClzavfwAH1AOTIPqnZRYymo3qCvtNOCkXETikFCBoPorbjC4yAnboDWelcX9A0IKdTVYj4OuM9UBXm1Xdhq2kaTSJV1zkPk2uuJxKWZozqOv24JM8bxJIMjXEkOGKx%2FUMKqIGkwZ5wPRESRvfXNRexoglc%2BW70%2BUxiWH47Q%2FGRdrLV56qTgSw9OzJN8%2FgsC5zxO7kPIuKd02q8tE6BVpz%2F3wAKDxoJTYHeEuX6%2FZw6tVE2%2BoGZytIOrVZxt6PtYa8RReihUyO%2B7bowv4poVfF5Q2y2LO%2FVZGgsAqbZIxcex8o%2Fa7mpFjrJrs6JeofeDCCUm7%2FQLnkAipK0rb8T4hyWtZLTS7rMIxf0vNP09Xf4n2kbf02Eub3b9TZEr3%2B7TDQ%2FRKIMJKn6L8GOqUBvUd2s5oCc6cROFGHZ15OYMN2jYt1Vri73a1HkJ%2FPP0QcsDA8euzMNwE46G9idNBmpOqUzxXSqMC3OsgTO1QlZrgdzGLLr38vjxgsm2q8wE0f%2FWNV0O4PStjkU5O%2FJKbuzvZtA9Ulqfawm0J56NNWH4KK7ZD95yIs24ApoU%2BiNT%2BiyqlDQG3Ze86Yqtx7Ub1xeJdaJKEcjEu0oH8yOvCe903zfguM&X-Amz-Signature=785fcfaaf38245c109c08f84e2bc8d1f6c1e07a2b724eecaa73d41d766d59ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MBKV3N%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGP3ZipPMblQyBghxM8%2BarMyDeTqXprrTSzsdYh2QBbYAiEA9kp%2BM1NLYwy3eNMWU8akBH%2BFk%2B4NmMb%2BQ7oh2gLE2cIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOanwgMgai6RIW76yrcA8bHs%2FAKiF6559I72SBAVwcOomV8UGBZZ%2Bhnhw%2BUtE8j69n2BxUomVprPD5TNvp8Nz7X38FRM%2FpwE5WxSOVKkdHNnhmMXJuRM9SGoQ2qsoYT49MJ%2B88d7V%2B7mJWlLcUNgr4Bm55LDZmsXxA%2FKbD%2FosQqbRwEdhzw%2F3eYnOtdt3aPZ1TblVuxUEn7eKiLWolJr6%2FQ8gNUq6kflAxIz14BuOEqiB1XU%2B2WlqrJZxsQ3FPyRMlEJcntr6HClzavfwAH1AOTIPqnZRYymo3qCvtNOCkXETikFCBoPorbjC4yAnboDWelcX9A0IKdTVYj4OuM9UBXm1Xdhq2kaTSJV1zkPk2uuJxKWZozqOv24JM8bxJIMjXEkOGKx%2FUMKqIGkwZ5wPRESRvfXNRexoglc%2BW70%2BUxiWH47Q%2FGRdrLV56qTgSw9OzJN8%2FgsC5zxO7kPIuKd02q8tE6BVpz%2F3wAKDxoJTYHeEuX6%2FZw6tVE2%2BoGZytIOrVZxt6PtYa8RReihUyO%2B7bowv4poVfF5Q2y2LO%2FVZGgsAqbZIxcex8o%2Fa7mpFjrJrs6JeofeDCCUm7%2FQLnkAipK0rb8T4hyWtZLTS7rMIxf0vNP09Xf4n2kbf02Eub3b9TZEr3%2B7TDQ%2FRKIMJKn6L8GOqUBvUd2s5oCc6cROFGHZ15OYMN2jYt1Vri73a1HkJ%2FPP0QcsDA8euzMNwE46G9idNBmpOqUzxXSqMC3OsgTO1QlZrgdzGLLr38vjxgsm2q8wE0f%2FWNV0O4PStjkU5O%2FJKbuzvZtA9Ulqfawm0J56NNWH4KK7ZD95yIs24ApoU%2BiNT%2BiyqlDQG3Ze86Yqtx7Ub1xeJdaJKEcjEu0oH8yOvCe903zfguM&X-Amz-Signature=dc9b9c04158cf8c42cb5751c436480ebbe5a8ff2db1a91f29bc0944915299132&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
