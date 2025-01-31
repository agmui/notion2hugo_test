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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXNHERC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXqXkzWmTflI3efOmTbOWvMECkl6A0Uo8hu1ixVrdMfAiAri9E2d9wJYya9B%2BAYfx%2B9Vg109M8GuBjsMN2SW%2FaU5SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMApSmUL9EA288GkfUKtwD2oC%2Bj%2FK1B18xowmTqc%2BHI7srdr57vuJPPIi45a93WNzEaoPigDSWQqWRaKqK5KTJwVXE3c%2BQ20AIOw8hSCfuUT8P0Fmxc448Lks6B3eglo%2FIExhug1%2Fenswl5Qnlg9ESAqfsf9KwokkcnHhXDmiAIKrIo0TitYSmwP91H0xXX6P7nHUJj%2BBDV8mQp5WdhWKqXAIo%2BLPeaDDvP0I%2FjOYZGa6VQ%2B5vXISHtG%2Fus70mbnaYkz7kVBAnsTxQ3M7Y3Vhp%2Fsga2kCkLpOTNmpgR%2FT2%2BjQF1qJGoC%2BtlUH3vTuNziGIgEeWbPm7DOH940m3kV4ZrdQRQEm2Ca%2BEHZUWFvQROfuYfwzBpDxKsBqZTnj%2FeuEDUjNmQhrVpdv97YtV8YqHJyOegONDi1262P1m8a%2BHKUzMON%2B4Z%2FQp2KaAEjyQO%2BxY9PoDFLTlgrqAgqyKl6drIiIglJ1nKKCfCCZgHu15BAGcLM7EKhdu%2F6NOc99eon3UWaW4sRXpQjknCloraUSu1yqVmb4Bw2YSKVpOTOa%2FIdr1vcFtNffVh6Oocg2fLhpboaRMpQFjbCkqnt625i5l1%2BbRAJa%2BW4e5SREzHvVqZeIC5eDl0E5rwZUxRK4RNZXKoF15SNdxFZOZQ1gwj930vAY6pgFMkuwQ%2FSu6FZEjS4HkwtUZs980AJoTNtvQqB4hVGXQlkS9Z3dK5LcVLANLKmx1bX%2B6wuuVytSXJzTqUxMVzCYIcJAuzNymmzUJmddZL4s81SkzXYrhyyvp9243mRRY8EAY6sIEWS7H%2F%2FJVF1qn21a%2F5Zu16qDb%2BpwduQWVuTCUUuDzvReWQil1kl9qDwZP%2BR3kClhVhtVrfcX8iZpM9ix0HcepqJs%2B&X-Amz-Signature=5f8aa7a68751c12dc7087a4193a0772df090663ce5343e07f37dceb02d29eeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXNHERC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXqXkzWmTflI3efOmTbOWvMECkl6A0Uo8hu1ixVrdMfAiAri9E2d9wJYya9B%2BAYfx%2B9Vg109M8GuBjsMN2SW%2FaU5SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMApSmUL9EA288GkfUKtwD2oC%2Bj%2FK1B18xowmTqc%2BHI7srdr57vuJPPIi45a93WNzEaoPigDSWQqWRaKqK5KTJwVXE3c%2BQ20AIOw8hSCfuUT8P0Fmxc448Lks6B3eglo%2FIExhug1%2Fenswl5Qnlg9ESAqfsf9KwokkcnHhXDmiAIKrIo0TitYSmwP91H0xXX6P7nHUJj%2BBDV8mQp5WdhWKqXAIo%2BLPeaDDvP0I%2FjOYZGa6VQ%2B5vXISHtG%2Fus70mbnaYkz7kVBAnsTxQ3M7Y3Vhp%2Fsga2kCkLpOTNmpgR%2FT2%2BjQF1qJGoC%2BtlUH3vTuNziGIgEeWbPm7DOH940m3kV4ZrdQRQEm2Ca%2BEHZUWFvQROfuYfwzBpDxKsBqZTnj%2FeuEDUjNmQhrVpdv97YtV8YqHJyOegONDi1262P1m8a%2BHKUzMON%2B4Z%2FQp2KaAEjyQO%2BxY9PoDFLTlgrqAgqyKl6drIiIglJ1nKKCfCCZgHu15BAGcLM7EKhdu%2F6NOc99eon3UWaW4sRXpQjknCloraUSu1yqVmb4Bw2YSKVpOTOa%2FIdr1vcFtNffVh6Oocg2fLhpboaRMpQFjbCkqnt625i5l1%2BbRAJa%2BW4e5SREzHvVqZeIC5eDl0E5rwZUxRK4RNZXKoF15SNdxFZOZQ1gwj930vAY6pgFMkuwQ%2FSu6FZEjS4HkwtUZs980AJoTNtvQqB4hVGXQlkS9Z3dK5LcVLANLKmx1bX%2B6wuuVytSXJzTqUxMVzCYIcJAuzNymmzUJmddZL4s81SkzXYrhyyvp9243mRRY8EAY6sIEWS7H%2F%2FJVF1qn21a%2F5Zu16qDb%2BpwduQWVuTCUUuDzvReWQil1kl9qDwZP%2BR3kClhVhtVrfcX8iZpM9ix0HcepqJs%2B&X-Amz-Signature=f56f822b20ee4ef8e8de8669034bba839d16b7c96850bb3b79e52281ec652a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
