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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECP3YTB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwWp%2Bfgle4hMAugwoFz2WfL7xEWAtKVU244JInBHWKwIhAOd0WIWeMS1EyTm92sG2gStIXEu5E1olg9XyNEuQ5zyiKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyAGrbGC89Kpfuvewq3AO9gWaMQFF6M1MLEWk4HIxbKUnOg9hoSMN%2FTOX%2FYbObTkzRB2YoBjFypgLPblK5AoVDWu6jkyVWaiW%2FAlEdHocpLj%2FNYWmJD2O97qg3BFi4VIdYfFyGDDJq3Ed%2BmfWod2q6aZRjjuzWjzWXzqwEx92%2F%2FMew8zXavnFyB7oGAtWK%2FWirf8IyJICWrYLIi7SAaczdpU3XoHuWTkyaI2j5y4nG9jZ9kQL3sJfbM8agXGxvU6i3At4fdzItPiuiVdB5yrVECHheRvXwz%2FGSxaOBeD932JujjbKccRDWuE%2Bt3ZbRxCHdEJ0ZRkhzHU3Pyrc6xcb6nhJqosTB2L6fbUiyQpwvrgYE2K0QUtGCS1ya3hqRtCHyqbuACbyqxWTOyMnbhutVMIMcUBvAaWqkQbNB3zJfSXc5qOYRWKS83eUnI0yWNp95yDjopNUNif%2BoZzB%2BiBYBtJhO3mvIg85TpAKVRFbkVU2T2MRRiCshNybKtf1xitDe2HI71k9axQL4lZTNE3%2BOQIGEIcczCoaH4kPJwgKDS5zf0KoJ06NbFagwJy3O7xG4C3Nn8ptbeHvrEuyY4WrMqG27tqUjmlTGsnJk4SOC5XYW0Y8Dq05MOkte0biejuWDtbARCXCmj36rDTC4m7HEBjqkAS7Az4EbjRrHhOXLYfTt6LBGonSUOSZ7TI9b9aFzOJcs2z0i3hcZ0uOooUi9w%2BVUibDpoSee3U0QnkNW8oqtX0QsGS2jgM%2BB3McQbzefbCTEAydIagHhC12hKFOVIHRBwKdCAUMShrATi60mkWk1QnN8oib3usalU70o373Xtk8sI59bEMk0lMFNnM%2B0iWhB5dH94YykxXetOSs1MNV%2B1bkBou5s&X-Amz-Signature=ca1943401fb2c5ccee97c8b3e090317a5078c7c0e64edb603e8dcb514f0b4cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECP3YTB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwWp%2Bfgle4hMAugwoFz2WfL7xEWAtKVU244JInBHWKwIhAOd0WIWeMS1EyTm92sG2gStIXEu5E1olg9XyNEuQ5zyiKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyAGrbGC89Kpfuvewq3AO9gWaMQFF6M1MLEWk4HIxbKUnOg9hoSMN%2FTOX%2FYbObTkzRB2YoBjFypgLPblK5AoVDWu6jkyVWaiW%2FAlEdHocpLj%2FNYWmJD2O97qg3BFi4VIdYfFyGDDJq3Ed%2BmfWod2q6aZRjjuzWjzWXzqwEx92%2F%2FMew8zXavnFyB7oGAtWK%2FWirf8IyJICWrYLIi7SAaczdpU3XoHuWTkyaI2j5y4nG9jZ9kQL3sJfbM8agXGxvU6i3At4fdzItPiuiVdB5yrVECHheRvXwz%2FGSxaOBeD932JujjbKccRDWuE%2Bt3ZbRxCHdEJ0ZRkhzHU3Pyrc6xcb6nhJqosTB2L6fbUiyQpwvrgYE2K0QUtGCS1ya3hqRtCHyqbuACbyqxWTOyMnbhutVMIMcUBvAaWqkQbNB3zJfSXc5qOYRWKS83eUnI0yWNp95yDjopNUNif%2BoZzB%2BiBYBtJhO3mvIg85TpAKVRFbkVU2T2MRRiCshNybKtf1xitDe2HI71k9axQL4lZTNE3%2BOQIGEIcczCoaH4kPJwgKDS5zf0KoJ06NbFagwJy3O7xG4C3Nn8ptbeHvrEuyY4WrMqG27tqUjmlTGsnJk4SOC5XYW0Y8Dq05MOkte0biejuWDtbARCXCmj36rDTC4m7HEBjqkAS7Az4EbjRrHhOXLYfTt6LBGonSUOSZ7TI9b9aFzOJcs2z0i3hcZ0uOooUi9w%2BVUibDpoSee3U0QnkNW8oqtX0QsGS2jgM%2BB3McQbzefbCTEAydIagHhC12hKFOVIHRBwKdCAUMShrATi60mkWk1QnN8oib3usalU70o373Xtk8sI59bEMk0lMFNnM%2B0iWhB5dH94YykxXetOSs1MNV%2B1bkBou5s&X-Amz-Signature=81edda119f53ce9177d1b764d78ddf7f58e566b98a46bf9776579bb92e21b167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
