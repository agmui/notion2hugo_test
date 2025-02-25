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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EFXEYY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHwfoB4Q%2BQ7PrlE8i0TthKpGnXSgLSDzXua5DOUisDnRAiBQ1XpbmS0Wu2ngbGkybRUoqySWJq8oatM1Q7jKknW5tSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMRjDg1lhlLhf6t1slKtwD3AFElxzt18hZRE0lFdXjioSntLe00zaWSmPGKkAoDVZaBLNolV4PISeW5mFTHtQo8JZRqIYVV7VzmGh58st8szz55N9Hp5dt44e23OI8xRH3sq4mf3gacT7dk6%2FUab1ukI5lQDCNt3DIlGxgGexf3sF3JDL%2B6oNReFG1aaIUJCezW7D7dAXU7gldFP%2BYxXkFOUo31GXdtHYK%2FDcmoyEEWDdQmU7rNNhw6Xv4VAwIHLuzFlULn8yFtzuw9okxkut4sC3lmFsTjXHjMEdhpMCzunuSphzcvQnyYabEpujFTp6u3rEFpDitF%2FrEnkziUvAPcYyprYeqzp98Ch6E%2BymX8HgmckmjuhukrvYofkb7kuxshuSBWuvtPy7lHfU9%2FC1nboMV9tXvmMSBrmJ%2BXceNy47zh1vQNVEPVRzZaI9u6YmI%2BFIDIp3X6nwLlYrBAYHO9cDB6MQYhVeTe4y0f9zHKDmWqcO%2FnbRqWQOlUSzPEmb8My4qrDxAFkqs4q8pC%2B%2B%2BpRnrlFpP022AW%2Bf5gOJsTP%2BUmumITKunp1CVHzLgiKnYL3Ze%2FYuafqX9b%2Bx%2F7LtDWJh4S9L3drFtIK18JzxM68RNihX5sqCx%2BxRrt1jvXwm9DzoC1tn%2FB7uP05Qwu4%2F1vQY6pgGwiRQ%2FGy%2FlXQFDWW83WcrT9tCnqB2fWrl5jyAHm9yF2GhDXkoycIVTKy2qyk41BztwoXO5SdqihMnUimZl6RwOe1aBDe9BDpDWFKyJxBBKuFWNatQofUM9KLgcq61v2UQe6vxzrGLg2HK%2BN49GD7gMJHYGcb6PRGYYfZbogFYX2qeZLxeyOeel3ApKLrD8O%2FzQyUrZWgY8eDvvW9ibAYD26as5mdzE&X-Amz-Signature=05f04dc4e7db7c0870b8e592b21dee4f52750ce5c62dbff20d2473d7fdfd5e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EFXEYY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHwfoB4Q%2BQ7PrlE8i0TthKpGnXSgLSDzXua5DOUisDnRAiBQ1XpbmS0Wu2ngbGkybRUoqySWJq8oatM1Q7jKknW5tSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMRjDg1lhlLhf6t1slKtwD3AFElxzt18hZRE0lFdXjioSntLe00zaWSmPGKkAoDVZaBLNolV4PISeW5mFTHtQo8JZRqIYVV7VzmGh58st8szz55N9Hp5dt44e23OI8xRH3sq4mf3gacT7dk6%2FUab1ukI5lQDCNt3DIlGxgGexf3sF3JDL%2B6oNReFG1aaIUJCezW7D7dAXU7gldFP%2BYxXkFOUo31GXdtHYK%2FDcmoyEEWDdQmU7rNNhw6Xv4VAwIHLuzFlULn8yFtzuw9okxkut4sC3lmFsTjXHjMEdhpMCzunuSphzcvQnyYabEpujFTp6u3rEFpDitF%2FrEnkziUvAPcYyprYeqzp98Ch6E%2BymX8HgmckmjuhukrvYofkb7kuxshuSBWuvtPy7lHfU9%2FC1nboMV9tXvmMSBrmJ%2BXceNy47zh1vQNVEPVRzZaI9u6YmI%2BFIDIp3X6nwLlYrBAYHO9cDB6MQYhVeTe4y0f9zHKDmWqcO%2FnbRqWQOlUSzPEmb8My4qrDxAFkqs4q8pC%2B%2B%2BpRnrlFpP022AW%2Bf5gOJsTP%2BUmumITKunp1CVHzLgiKnYL3Ze%2FYuafqX9b%2Bx%2F7LtDWJh4S9L3drFtIK18JzxM68RNihX5sqCx%2BxRrt1jvXwm9DzoC1tn%2FB7uP05Qwu4%2F1vQY6pgGwiRQ%2FGy%2FlXQFDWW83WcrT9tCnqB2fWrl5jyAHm9yF2GhDXkoycIVTKy2qyk41BztwoXO5SdqihMnUimZl6RwOe1aBDe9BDpDWFKyJxBBKuFWNatQofUM9KLgcq61v2UQe6vxzrGLg2HK%2BN49GD7gMJHYGcb6PRGYYfZbogFYX2qeZLxeyOeel3ApKLrD8O%2FzQyUrZWgY8eDvvW9ibAYD26as5mdzE&X-Amz-Signature=9931a3d8a08ab27b47d1ce647eae926adeb7cf1a289b241ad81e43602b5606d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
