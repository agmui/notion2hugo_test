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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RVKEHR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD0Cz8M4CbnJFVGDsa9ytCwhtlglRbtNJZqBXQ2Sd5pNAIhAK%2FNZkfaHI6gKgJfy4hYO0okCkLxit9MZPofA5VoCxAgKv8DCEcQABoMNjM3NDIzMTgzODA1IgzzFrUJjjgZee6LfY8q3AMGYqkSd%2BXDZLoD1gImXWxRJBORN7Rp7ipJgZ5wYxm0nuWQXugFxG%2BgKp7dRJsF0sUlHVQd%2BPo1oVRqVPWdR%2FcUD5NFqqszHaSXFC%2BHMWucpZhXmEMNRiXHZ44uVar1UPkjYZ0Bva6QuXtzflHiZqJLaY5y6DG%2Fejra7aTbB53zqIey3DIDKdnUGl47AYd8egsMvlg36tG6LHNGf6fftpcbkXkhTxHY6j8TANWXqpApibtKY22KLhti0E3mQP%2B6KuxcmECqtm5CNSNNYHRHV4IfXnt6DLb7XVWj6A4ms1TY4UnL%2BC4l%2BsIdDmKVX4P2e1YJ1ml3GUHywj5Xs25CdSPA4sjV17UuhGU29rIUwKYQa651e4075ug1LrEOf1ExI%2F0xxnPH4RT7lYKsPALKhKzJ0e0FSqrBMnMzVGzrVngaHb3MRr3OmQ1d%2F7NFNs8zFgCd6K9aGiL%2FOnmNMzXmDBSqrxAVuU6bPuxXSS9YMX%2F65a4i43lcHOwKI7armB5Tuf0T2sRJyzlPfgtcXh1YX9g8rRpykTv6AHn%2Bc%2B4PpOJxoXPeLzo9cip%2FGPVnqo011U8uGB9kH996A9Ux3gp9EHY2LFmVBnd9D6Ta1N5NiabVEvR3RQVcIPHN5P4K0jC%2B5Y29BjqkAfQ9giqs4HH3IS7fpPprbOjXSThGFj%2Be0uIF1U2PMZYoKiVqQwqdWZqtTu8Er3akfksO%2BgsmL%2Fw3YzbqLS2YqDbhaJoCe9UC90koKy04R1hK4Bv%2BWcUe9iqLnem%2BXnhHlZuBnegpYYlO%2FUmbOIlMOe0kWuCM6jv5kbgllYlusDO0Y2GLJXeCcdc3W8KKqd5xEQD07vQgFY6bIGGpP1cLuMKZqs8M&X-Amz-Signature=ef8511dd8010b7b773a6de78bcab6b727610dec5bf86ba63d846400f38c5048d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RVKEHR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD0Cz8M4CbnJFVGDsa9ytCwhtlglRbtNJZqBXQ2Sd5pNAIhAK%2FNZkfaHI6gKgJfy4hYO0okCkLxit9MZPofA5VoCxAgKv8DCEcQABoMNjM3NDIzMTgzODA1IgzzFrUJjjgZee6LfY8q3AMGYqkSd%2BXDZLoD1gImXWxRJBORN7Rp7ipJgZ5wYxm0nuWQXugFxG%2BgKp7dRJsF0sUlHVQd%2BPo1oVRqVPWdR%2FcUD5NFqqszHaSXFC%2BHMWucpZhXmEMNRiXHZ44uVar1UPkjYZ0Bva6QuXtzflHiZqJLaY5y6DG%2Fejra7aTbB53zqIey3DIDKdnUGl47AYd8egsMvlg36tG6LHNGf6fftpcbkXkhTxHY6j8TANWXqpApibtKY22KLhti0E3mQP%2B6KuxcmECqtm5CNSNNYHRHV4IfXnt6DLb7XVWj6A4ms1TY4UnL%2BC4l%2BsIdDmKVX4P2e1YJ1ml3GUHywj5Xs25CdSPA4sjV17UuhGU29rIUwKYQa651e4075ug1LrEOf1ExI%2F0xxnPH4RT7lYKsPALKhKzJ0e0FSqrBMnMzVGzrVngaHb3MRr3OmQ1d%2F7NFNs8zFgCd6K9aGiL%2FOnmNMzXmDBSqrxAVuU6bPuxXSS9YMX%2F65a4i43lcHOwKI7armB5Tuf0T2sRJyzlPfgtcXh1YX9g8rRpykTv6AHn%2Bc%2B4PpOJxoXPeLzo9cip%2FGPVnqo011U8uGB9kH996A9Ux3gp9EHY2LFmVBnd9D6Ta1N5NiabVEvR3RQVcIPHN5P4K0jC%2B5Y29BjqkAfQ9giqs4HH3IS7fpPprbOjXSThGFj%2Be0uIF1U2PMZYoKiVqQwqdWZqtTu8Er3akfksO%2BgsmL%2Fw3YzbqLS2YqDbhaJoCe9UC90koKy04R1hK4Bv%2BWcUe9iqLnem%2BXnhHlZuBnegpYYlO%2FUmbOIlMOe0kWuCM6jv5kbgllYlusDO0Y2GLJXeCcdc3W8KKqd5xEQD07vQgFY6bIGGpP1cLuMKZqs8M&X-Amz-Signature=fb5d47ab8d57a01b5985772112a6cb341e5f5c9926ad05c63b687bb92cf4b761&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
