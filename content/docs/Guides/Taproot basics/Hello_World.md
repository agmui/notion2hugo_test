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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYBLVIF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCmO5zWU0S9qBsstflUpPhTNgxA9FegmTNCmH%2BFyZYqBAIhAOIPNVwJ5xTiSFcCI7z%2FO%2BrcAW2P29KQ%2BTwbLlHg2JBbKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzXTnw4A8QRJWrUAYq3AM97el70vJ%2Bjm1uCS42hhwCv54IssOkaQ8hFIZiY2b2KQECTYkwXhkHZnYRmbBTnBAR6b16jZKxF8WEpH9UI8gS%2FBwrZak1ydtYVp2IbjcuR0bIcGXabar6YbbISP7aNi4i7k1cP7AePnykQa80WG3sJ6bCB2lgZOPg7JE%2FLv7%2FJ7r2Kmt1W6g1L4BIaWV6%2FQSOUwfCROAbHoAKa5%2BJNwzps2o%2BGbkayEt0xHgVVgClpwMHgOLoZNRwUU6vPNVRRNn8e3mOfuTEGcVk%2BYHzAfRkJtYX1ibnaWP5XeG%2F%2FyGSk11pB9Hq8uSfR1B5pBw%2FZ0amyo7se17pKb06pVlh6DoltmpDWJ3mtzb6MmBADnjZw8pUXcmPgFK%2FmAews6jSIFbP1%2FGOD%2FOfsxNiy8pepurYApLS2BUc36QVoSzle5oJ1L7hxwbMAdq88zVSCEde7%2Bg010icrgoX6KSQAx8dKNhW0n%2FZUqhkgA5XbagUcuEHBmlg0UpTdt7RGDHIzlnXzgIFjIA8h8X%2F4KXWOkeoptPb%2FAme7nNY7G9AcLXVubb9sbvueeB81WUMoNJ0XE0HSanok%2B%2BOV10K%2FQ9Mk0VXpM5JGEgKy5kJNOVCq2ty8M45Q2mxYZokdeRhpyvSmDDG74a%2BBjqkAc4R%2BAiyYeeEsHQL3mpbG26u8w2ICNGPhHc7RDSGmuNFOghjv%2BYnOsvyq5a3K%2BWvs9HlV%2BQHvdoLpSEj2C5i35Q2p%2F7Aj5epl47BqsUq%2Fu%2BytKTK5B%2Fkxc4s5ufiJwtX7obQQl0IPyPjG%2FOnub1R5uzl2WXMCgqMJ7OWaQYKCFBVbiXdqQxMGhwBrBXpkTdOoUzozTYEUHQ7HKTE79WAIRNGTx3U&X-Amz-Signature=971510e91ebfa395c1378cf1ca2cdffd67b7ac1110d58a35433d016294d4b455&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYBLVIF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCmO5zWU0S9qBsstflUpPhTNgxA9FegmTNCmH%2BFyZYqBAIhAOIPNVwJ5xTiSFcCI7z%2FO%2BrcAW2P29KQ%2BTwbLlHg2JBbKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzXTnw4A8QRJWrUAYq3AM97el70vJ%2Bjm1uCS42hhwCv54IssOkaQ8hFIZiY2b2KQECTYkwXhkHZnYRmbBTnBAR6b16jZKxF8WEpH9UI8gS%2FBwrZak1ydtYVp2IbjcuR0bIcGXabar6YbbISP7aNi4i7k1cP7AePnykQa80WG3sJ6bCB2lgZOPg7JE%2FLv7%2FJ7r2Kmt1W6g1L4BIaWV6%2FQSOUwfCROAbHoAKa5%2BJNwzps2o%2BGbkayEt0xHgVVgClpwMHgOLoZNRwUU6vPNVRRNn8e3mOfuTEGcVk%2BYHzAfRkJtYX1ibnaWP5XeG%2F%2FyGSk11pB9Hq8uSfR1B5pBw%2FZ0amyo7se17pKb06pVlh6DoltmpDWJ3mtzb6MmBADnjZw8pUXcmPgFK%2FmAews6jSIFbP1%2FGOD%2FOfsxNiy8pepurYApLS2BUc36QVoSzle5oJ1L7hxwbMAdq88zVSCEde7%2Bg010icrgoX6KSQAx8dKNhW0n%2FZUqhkgA5XbagUcuEHBmlg0UpTdt7RGDHIzlnXzgIFjIA8h8X%2F4KXWOkeoptPb%2FAme7nNY7G9AcLXVubb9sbvueeB81WUMoNJ0XE0HSanok%2B%2BOV10K%2FQ9Mk0VXpM5JGEgKy5kJNOVCq2ty8M45Q2mxYZokdeRhpyvSmDDG74a%2BBjqkAc4R%2BAiyYeeEsHQL3mpbG26u8w2ICNGPhHc7RDSGmuNFOghjv%2BYnOsvyq5a3K%2BWvs9HlV%2BQHvdoLpSEj2C5i35Q2p%2F7Aj5epl47BqsUq%2Fu%2BytKTK5B%2Fkxc4s5ufiJwtX7obQQl0IPyPjG%2FOnub1R5uzl2WXMCgqMJ7OWaQYKCFBVbiXdqQxMGhwBrBXpkTdOoUzozTYEUHQ7HKTE79WAIRNGTx3U&X-Amz-Signature=88f768f29e03e9b060ba92402409da64349410aee71f33554de75314c3f70377&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
