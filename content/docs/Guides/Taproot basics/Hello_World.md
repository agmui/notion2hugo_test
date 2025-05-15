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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WREEC3PM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCzeKYds6MgWqjPRw3IfwrZzTBcwysPEKRL2%2FmAby6HigIhAKXTqLOR2EhV9a%2BOtYkTLqAPcqNe20iJaz50GFvuoeowKv8DCCgQABoMNjM3NDIzMTgzODA1IgyjpQKKGfnvQ9Dn0OIq3ANI67sM7T6hT9ZMrJOuysT5sRYbdN7Bv7VSZXZTPioX9k0ahjXrSjXFwsP8J8JH0e0QefJtyVNtBBWA1AkVcuwUcTz%2BMWeTFMTyEbxAPoY1wLwcpe2kyUJl%2FKJTtJua%2BGEULIdWToCPvZnGM9V2iEPaCRFOT%2FWN01DS43dot5%2B%2Bl8wTjGufDCMN8U8mSJoBnhTyBihoM3MjReEngBAOXX7TxEzVJvxgqIj7%2FcHeKyysA0zQKnDsH%2BI4IZB5r1qo3TLcvN6JPvMFDiG%2BzdtmRL6RMPk109irZDMg991RKqYoUFgDSGH8cI2WAHeu4KiV4nX5dMeeA3gEaA7zynYfz%2Fxljrxx42%2BYdTHMiwh2tVlytUzruuc%2FET7k27DcrkR8qkXQ9LdCRTCYk1euA8Nd8Z%2BlteJqM1c%2F0cctgrWaBQAp1C38%2BcWaw1TcMXg4U1%2FOIJw16eFJHB52TN7GAkPGl3ViUAMJBNFchQeGDneFpkHKWOG%2FWO13wehUL3TdECBGjKFVW%2FQELzddYQn%2FJBectdd9wHeEsaBecoR0gQZtYs65YPqkszm%2FKj4%2FjevAtgkpjFiq3zwFInRI4G0OdyBmher5MDRna7wJmXNve0oKyaqTS0hCUs9kCslF12xisDDPnZbBBjqkAegUb42J4p314ctVwOM8e49aAjQK6UpfEU8CAPdUFqXQs%2Fu9jCyAERsuP%2F3rwIrD2ntEXjdxN9uX7D%2BDWmXQnj6uO3FMlXGbKT%2FZCQzLVn9XO6%2BqKqeiKhHp83nkSklwdNQ4H791eEl19L45R95ABDVZBh9J1zDdiqllRlPyPeLWVppDKLxVyXELTTRFhOHhF5HRIPO1S3Dw6FsEZmdP9haQ7NET&X-Amz-Signature=7ff1a012f0265233c413a0f3d2359a1d9649841059816e6a2c3ff9d1e2841050&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WREEC3PM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCzeKYds6MgWqjPRw3IfwrZzTBcwysPEKRL2%2FmAby6HigIhAKXTqLOR2EhV9a%2BOtYkTLqAPcqNe20iJaz50GFvuoeowKv8DCCgQABoMNjM3NDIzMTgzODA1IgyjpQKKGfnvQ9Dn0OIq3ANI67sM7T6hT9ZMrJOuysT5sRYbdN7Bv7VSZXZTPioX9k0ahjXrSjXFwsP8J8JH0e0QefJtyVNtBBWA1AkVcuwUcTz%2BMWeTFMTyEbxAPoY1wLwcpe2kyUJl%2FKJTtJua%2BGEULIdWToCPvZnGM9V2iEPaCRFOT%2FWN01DS43dot5%2B%2Bl8wTjGufDCMN8U8mSJoBnhTyBihoM3MjReEngBAOXX7TxEzVJvxgqIj7%2FcHeKyysA0zQKnDsH%2BI4IZB5r1qo3TLcvN6JPvMFDiG%2BzdtmRL6RMPk109irZDMg991RKqYoUFgDSGH8cI2WAHeu4KiV4nX5dMeeA3gEaA7zynYfz%2Fxljrxx42%2BYdTHMiwh2tVlytUzruuc%2FET7k27DcrkR8qkXQ9LdCRTCYk1euA8Nd8Z%2BlteJqM1c%2F0cctgrWaBQAp1C38%2BcWaw1TcMXg4U1%2FOIJw16eFJHB52TN7GAkPGl3ViUAMJBNFchQeGDneFpkHKWOG%2FWO13wehUL3TdECBGjKFVW%2FQELzddYQn%2FJBectdd9wHeEsaBecoR0gQZtYs65YPqkszm%2FKj4%2FjevAtgkpjFiq3zwFInRI4G0OdyBmher5MDRna7wJmXNve0oKyaqTS0hCUs9kCslF12xisDDPnZbBBjqkAegUb42J4p314ctVwOM8e49aAjQK6UpfEU8CAPdUFqXQs%2Fu9jCyAERsuP%2F3rwIrD2ntEXjdxN9uX7D%2BDWmXQnj6uO3FMlXGbKT%2FZCQzLVn9XO6%2BqKqeiKhHp83nkSklwdNQ4H791eEl19L45R95ABDVZBh9J1zDdiqllRlPyPeLWVppDKLxVyXELTTRFhOHhF5HRIPO1S3Dw6FsEZmdP9haQ7NET&X-Amz-Signature=8364956d2530bdc46f108e4d48de6dc71b3c96d4c27dcf54cb6284881d007451&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
