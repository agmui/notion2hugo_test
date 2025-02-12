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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUILW3Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5uSmJkJ1lxuG4YhEeodCxxMaCGQ5NYBBqdebwG54xaAiAEzVFJcKhn3n23xdVlQvgw5%2Bw6n7ZJUe8zwJfaeXnYWSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLmhZHV%2F3ZtlWs%2FaKtwD0mlolO6OhC5wA2nekBvdL4Fl9kn%2FKYBO1beH10gdeGgu9SVPgmO39sUIn1MH7LU9ujhIHH0EdN7b8R3lXeNi9pBlogN19itWnnANE2mmf5uPbSrPa1WUks3y%2FRcpv%2BffCRwUD9ZFXUlXVpRa%2FfohvdXTJNztqrLoD9Yy1MsMXuBS2dx9O%2F6ESrGvXDqEVi8blX3ANa%2Fj7J3Snep%2FW%2FH1df9pOi1l9BnHk0LpOx3mQn44T8iOiVba5u3tIajkhjUtWGe6wX9MPhE6HxGKLQU8Vls9Xys1J%2BN03C5n64K1X749iforHQKgtYY35orGC2P5V2566%2B5oIXSFkgW7T7UkM87TqdqffXjx6V765ITVQGUU84bKvA%2FCkt2l9kDkmyqY4qcMCUUIVtw65wuX3vlax44D06%2F0dnqL7UCqVDOj2QOl2VoogsVzrodW12Z4k09rWp36qc%2FyyTeWrkf3%2B0CMisdwv5JRDpHxNQhph9vdre5nfXL538p85frX2OqqQZrWygqGIktYE3IOac1Ev8t%2BHAlzUQSM0%2FizFLiiWBoh%2BO7uA9QRn1xdCChDJG2M3N7tNeuuAmX4%2FCGMPIXeTdHVWABokaFjBGqGfTCzST81K%2BUvKSl6gQCukYueFKwwru2vvQY6pgE4sk%2FUktNs5T%2BEneSyYHckA0U2Rf%2BitqUyJY%2Faigo4ettjXiIf0JFlkOmyU5Jh7rUuSzEcV2v1eK6Wto%2FN76L%2FdPmxICurMQKnpu2346rmeOY9A4kHCK8De1TU%2F7F69YmXEw2K3Xkw6rLlrdR05k57c%2FzH30butBFiTUZHB1uZuEtaGFaTZd5mZhyLZPflydcVkBeMFkQ8wN24zfON9iIyaOU4RB3g&X-Amz-Signature=9cc0a5266e42206e5d7136c0f033bc1db232c2c100b5fbcdb76799f8c27b462a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUILW3Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5uSmJkJ1lxuG4YhEeodCxxMaCGQ5NYBBqdebwG54xaAiAEzVFJcKhn3n23xdVlQvgw5%2Bw6n7ZJUe8zwJfaeXnYWSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLmhZHV%2F3ZtlWs%2FaKtwD0mlolO6OhC5wA2nekBvdL4Fl9kn%2FKYBO1beH10gdeGgu9SVPgmO39sUIn1MH7LU9ujhIHH0EdN7b8R3lXeNi9pBlogN19itWnnANE2mmf5uPbSrPa1WUks3y%2FRcpv%2BffCRwUD9ZFXUlXVpRa%2FfohvdXTJNztqrLoD9Yy1MsMXuBS2dx9O%2F6ESrGvXDqEVi8blX3ANa%2Fj7J3Snep%2FW%2FH1df9pOi1l9BnHk0LpOx3mQn44T8iOiVba5u3tIajkhjUtWGe6wX9MPhE6HxGKLQU8Vls9Xys1J%2BN03C5n64K1X749iforHQKgtYY35orGC2P5V2566%2B5oIXSFkgW7T7UkM87TqdqffXjx6V765ITVQGUU84bKvA%2FCkt2l9kDkmyqY4qcMCUUIVtw65wuX3vlax44D06%2F0dnqL7UCqVDOj2QOl2VoogsVzrodW12Z4k09rWp36qc%2FyyTeWrkf3%2B0CMisdwv5JRDpHxNQhph9vdre5nfXL538p85frX2OqqQZrWygqGIktYE3IOac1Ev8t%2BHAlzUQSM0%2FizFLiiWBoh%2BO7uA9QRn1xdCChDJG2M3N7tNeuuAmX4%2FCGMPIXeTdHVWABokaFjBGqGfTCzST81K%2BUvKSl6gQCukYueFKwwru2vvQY6pgE4sk%2FUktNs5T%2BEneSyYHckA0U2Rf%2BitqUyJY%2Faigo4ettjXiIf0JFlkOmyU5Jh7rUuSzEcV2v1eK6Wto%2FN76L%2FdPmxICurMQKnpu2346rmeOY9A4kHCK8De1TU%2F7F69YmXEw2K3Xkw6rLlrdR05k57c%2FzH30butBFiTUZHB1uZuEtaGFaTZd5mZhyLZPflydcVkBeMFkQ8wN24zfON9iIyaOU4RB3g&X-Amz-Signature=382cbcda9b15f97b715fbce95f730f8c2fb6aed0183b05cd0d2353d9a9637b91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
