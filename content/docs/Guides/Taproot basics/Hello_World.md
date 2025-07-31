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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPAQWDC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUhLpsQay4F9%2FyEXnMoFvYrTk0im1wcF5D84MQ9H3Q5wIhANQ70h7kV1UdlZONGwmdsETrpb5P8AqWVULznMZ1PXarKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl5Nd%2Bw7mXBpO3ha4q3ANOU63Xdbgj%2F2xN6FNUYxADYhVswueIhemFfaBp7s7Ue1ktdVnGhhiF6uieSgkNN%2FuVVwirAdfBjLEPgNuPDVSCeOon9r0wj%2BS5I7ZcDPEvw5NYxOzv8xl2EaYt1yv0GR7r3Nf1JPm7%2F4iflaw%2Fk4digkYf08XJZrFY3LBmYIIdN%2BKXbyhY%2BPLMJaQRKHMK7t6bVbUAsaTIZjYs625dUZLUY%2B1RIU9zJZZd0vvZrQ953sldOoK522fCC52oHN6XhElQE%2FT4XZ7Kien8Csowkgal%2BhpQ%2BcbJ78ZSb%2BNaEU1hRL6igiZwCRt1Q5g2C3w7q5ZhLrCPHLY7YHMJyFpFAc58OhU8IlZL89yqePpoJxkT9CJzpA3C%2BZr7tAE%2FCBtb6RgwQyHltENu59lrz8MSEnPccxryKXXgRoetEck%2FXna6ctG4pIJ%2FafqtSP5LWUjWITCcemCXCN1CkiuVCUSRehumyhUjxv41bAH0JltqAQngtx8QwHt8gHLkgRx999itt9p0MJxooB4w9HPl3wVLB2ZxySb8lN5egiV%2BiDQPqkUybq5k171rjX68BpuG9FVWKE4%2BL2%2Bp%2BGJ0CCiFVfc%2F%2F3LYadY1MAI5JTY4fj0PUc5V17OTyM3uG7ZtoT6uoTD9mqzEBjqkAaPtX3RFRo25nHC7%2B2SAkPfPqKQ0A8csWM0HmXMz8Uhdc%2FKDwCn3G4ISygRpCaSoYDunBY%2FbUve%2FBSuN61%2BdBgic4AbK0T9DqCSBU2XByptQzbqUWMFqF8gjp%2Fs3eQ92AG%2FTvTXhfWQ%2FZrgwhtmzljY2ZIIHhbUQGUT4xNlGHJPwBkTNV4hQbSVXNZDEdfprw%2F%2F3S8wP94%2FpucWFT5UGTHF7HFjw&X-Amz-Signature=f165d06864a17641b3b3162cb6a2b38a59622e7643fb26a1007dfe63822127ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPAQWDC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUhLpsQay4F9%2FyEXnMoFvYrTk0im1wcF5D84MQ9H3Q5wIhANQ70h7kV1UdlZONGwmdsETrpb5P8AqWVULznMZ1PXarKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl5Nd%2Bw7mXBpO3ha4q3ANOU63Xdbgj%2F2xN6FNUYxADYhVswueIhemFfaBp7s7Ue1ktdVnGhhiF6uieSgkNN%2FuVVwirAdfBjLEPgNuPDVSCeOon9r0wj%2BS5I7ZcDPEvw5NYxOzv8xl2EaYt1yv0GR7r3Nf1JPm7%2F4iflaw%2Fk4digkYf08XJZrFY3LBmYIIdN%2BKXbyhY%2BPLMJaQRKHMK7t6bVbUAsaTIZjYs625dUZLUY%2B1RIU9zJZZd0vvZrQ953sldOoK522fCC52oHN6XhElQE%2FT4XZ7Kien8Csowkgal%2BhpQ%2BcbJ78ZSb%2BNaEU1hRL6igiZwCRt1Q5g2C3w7q5ZhLrCPHLY7YHMJyFpFAc58OhU8IlZL89yqePpoJxkT9CJzpA3C%2BZr7tAE%2FCBtb6RgwQyHltENu59lrz8MSEnPccxryKXXgRoetEck%2FXna6ctG4pIJ%2FafqtSP5LWUjWITCcemCXCN1CkiuVCUSRehumyhUjxv41bAH0JltqAQngtx8QwHt8gHLkgRx999itt9p0MJxooB4w9HPl3wVLB2ZxySb8lN5egiV%2BiDQPqkUybq5k171rjX68BpuG9FVWKE4%2BL2%2Bp%2BGJ0CCiFVfc%2F%2F3LYadY1MAI5JTY4fj0PUc5V17OTyM3uG7ZtoT6uoTD9mqzEBjqkAaPtX3RFRo25nHC7%2B2SAkPfPqKQ0A8csWM0HmXMz8Uhdc%2FKDwCn3G4ISygRpCaSoYDunBY%2FbUve%2FBSuN61%2BdBgic4AbK0T9DqCSBU2XByptQzbqUWMFqF8gjp%2Fs3eQ92AG%2FTvTXhfWQ%2FZrgwhtmzljY2ZIIHhbUQGUT4xNlGHJPwBkTNV4hQbSVXNZDEdfprw%2F%2F3S8wP94%2FpucWFT5UGTHF7HFjw&X-Amz-Signature=0bc4791e7babb072429f448f5390be3f4ddbf26dccd04f8fc55d5df83e0ceaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
