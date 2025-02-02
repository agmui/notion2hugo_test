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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNQDKZG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAas9RkW2lTWVFPRfQpoAaC15ik9iRxw1jK%2FppIuYswoAiEAuNTVQxItwcbyD9SUT9GaHEgssMcvRAlYjTZ5m09PyaEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJUl5eSz9enzmdgOCrcAxZAdVkPNoxGsVjW8Dn7StM5ccqHHesQJhvMb9YmRxjecGIV8mNB3YePFUJLtN93on9PR8U9bwFRiq5QMVo0dRRG5rlIyd9p0mK6bMgdi2akPkEO7FI4j7yuBsDlefOIkTf%2Blajv2d2XkhqzWQ9PawXGJzcJXme%2B9hne6BwzfZUHlF0tWpJheNAWVxwCsDsZE%2Bdw2BI10ydBbA1ITDX6Z7XS%2BF2V88HwOIGZuj8Q35T7hZK3QmyInLIiSmPiuR0QmSQpLnWQ8DN96x2KC41hL%2BI4N2ZhdvXLS48UR%2F900uZWMO8liToiyyEutxyRg8rm5xthWNsL12ffrRymkZ84F4K0vOVeu%2FF0098B86CDdKqzKcBMv1lS4hbUaSBlky3LaBFVlfROyuzurql07TLa9%2B9BFwljZGIO8kwRfYj5KgIbxxuvGQUuRcWoTQsukcMtAwNVcWe0Kx04aXyjIYqsuasNALMJ5FwHjtYWRg5sb2Uf2uoXn3aSCRJxk2S%2FWwkKbGndD2ztZJiTbGuaYh3YGFFVNb0ufQBF88N96triRs1gBZra0oj1rSx%2Fr%2BbQrLjvm3jNtxUWhJpwp6sivw9L%2BBELsz8que%2B7AKnwhg84bPeJ6dpFMg9lhoBKsApGMI7m%2F7wGOqUBvF%2FMKow4xQTZo%2FGLaSaMLiw5YhM47DD5vESdLU1nooO5hFBkluxQDfoxjchwpc4PVQjmfh1sKfzbo6FhhFD36iqXNbGeidAtBSEvk2y3YfOeFAhPbPtYs7Z77AXqb%2FXnaP2zGJyqafw4Rw0UiFxeh5UNOt2pxmDJ5rfl9ArKAI3E3zpSDjgMd8H0fkJkVuYfu9Iknb3%2F3lNnAE3SUbN3ALBWARb8&X-Amz-Signature=592dce864a301acfb299a3522c8e62ccf2fccfe8eebd4a386c58b33a1f9ad3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNQDKZG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAas9RkW2lTWVFPRfQpoAaC15ik9iRxw1jK%2FppIuYswoAiEAuNTVQxItwcbyD9SUT9GaHEgssMcvRAlYjTZ5m09PyaEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJUl5eSz9enzmdgOCrcAxZAdVkPNoxGsVjW8Dn7StM5ccqHHesQJhvMb9YmRxjecGIV8mNB3YePFUJLtN93on9PR8U9bwFRiq5QMVo0dRRG5rlIyd9p0mK6bMgdi2akPkEO7FI4j7yuBsDlefOIkTf%2Blajv2d2XkhqzWQ9PawXGJzcJXme%2B9hne6BwzfZUHlF0tWpJheNAWVxwCsDsZE%2Bdw2BI10ydBbA1ITDX6Z7XS%2BF2V88HwOIGZuj8Q35T7hZK3QmyInLIiSmPiuR0QmSQpLnWQ8DN96x2KC41hL%2BI4N2ZhdvXLS48UR%2F900uZWMO8liToiyyEutxyRg8rm5xthWNsL12ffrRymkZ84F4K0vOVeu%2FF0098B86CDdKqzKcBMv1lS4hbUaSBlky3LaBFVlfROyuzurql07TLa9%2B9BFwljZGIO8kwRfYj5KgIbxxuvGQUuRcWoTQsukcMtAwNVcWe0Kx04aXyjIYqsuasNALMJ5FwHjtYWRg5sb2Uf2uoXn3aSCRJxk2S%2FWwkKbGndD2ztZJiTbGuaYh3YGFFVNb0ufQBF88N96triRs1gBZra0oj1rSx%2Fr%2BbQrLjvm3jNtxUWhJpwp6sivw9L%2BBELsz8que%2B7AKnwhg84bPeJ6dpFMg9lhoBKsApGMI7m%2F7wGOqUBvF%2FMKow4xQTZo%2FGLaSaMLiw5YhM47DD5vESdLU1nooO5hFBkluxQDfoxjchwpc4PVQjmfh1sKfzbo6FhhFD36iqXNbGeidAtBSEvk2y3YfOeFAhPbPtYs7Z77AXqb%2FXnaP2zGJyqafw4Rw0UiFxeh5UNOt2pxmDJ5rfl9ArKAI3E3zpSDjgMd8H0fkJkVuYfu9Iknb3%2F3lNnAE3SUbN3ALBWARb8&X-Amz-Signature=18eccac49767fd2445aa5f973197ab06c3bb41756a0974252dff07bf4bee569b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
