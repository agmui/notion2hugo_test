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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RTH364%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpGLxkeZQeKkhkcIZOMZdjTAtn5WOxT67k%2FtJyjYsq3QIgIrQgYXJrbjiX%2BpkLPF0kiJoiPxDzuqfJEdAaLCJWdEcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMrqBnUAQqd5iYYlGyrcA8lvXgFFfPXHttnLUJcWk1qgyoDR7qEcJteG%2B%2FXQ2ysUjVHYvdFBPyMW%2Fe%2BAtWpjBzR6c54m7JCCEhO75J%2FcS%2BjGSAh1dd%2F50yM0p%2Fy8i%2FYlKpoIlpehQ%2BZn2Ut6LttqQRYkPPJwpdYthHARpVsmtwyp8QUXUfT%2FpHd7neIAx%2FOAe52dt7TsrKGG873P7hvp2c2Upmry0LZo6mzHE73RLzuDrElkia7IRbTgraSqC%2FvCgsCQHgD8okjs2oHMHriWoHp7aBlwrGCOFAtgbvIhifhjHpJyYifOdOKOgCzs04HiIVvQYaIVzVn%2BAwSe7O2W1Sh%2BODPQfHY1eEbV9LKW8VN0wIv0fJFN%2FsAXRjPWXOsjU%2FXwQf9h5n6Lg6%2F3LS855rG2n%2F14E%2FZbW83SFIpKGEdXw9xYtH76NtARAt0fMgqc3PB5WROqOKRLC8pYef0XkkITItNhxSZS85bn96O41Kc6drsngVAtIgRI1CdsxchXqwVdhhFSmx5ltx%2FEGMhYmjDPuE4I4lPam8Ad6HO7MFRo3jaLjyol1iXl5aiLoooVBzMTy3eMslWUrlvjvlz2Mes%2BCi65rIGN5QIueEDLctdak02JXByOOPh9NCRVr%2FWCKhAFuZn29rt1t0%2FsMJfqg8IGOqUBb6KXofasasyLCIG5JYuXXaSJLOTDA0GGmrGIZHJt9wzjr1APH0k09jbJxhtlHL5EJECpGHABdagKZKSbnH1W17sTH62Edk5n4OMhhAYuloYvFIwj6iN3VLbgc28u7D%2Bn%2FiglXcwxXYerWSJY6r7gpaB8oi%2Fxo0LruC5%2Bl6kl2rYKaB5BaAQZ8LNxriIqxRSonkdrmlsyS2H2d17cNqIbLDxzwFNR&X-Amz-Signature=ff4d83fc23d3b1d5c4564b1737ce0a0a88d2f51accd270ea3b0c2fe626c3f883&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RTH364%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpGLxkeZQeKkhkcIZOMZdjTAtn5WOxT67k%2FtJyjYsq3QIgIrQgYXJrbjiX%2BpkLPF0kiJoiPxDzuqfJEdAaLCJWdEcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMrqBnUAQqd5iYYlGyrcA8lvXgFFfPXHttnLUJcWk1qgyoDR7qEcJteG%2B%2FXQ2ysUjVHYvdFBPyMW%2Fe%2BAtWpjBzR6c54m7JCCEhO75J%2FcS%2BjGSAh1dd%2F50yM0p%2Fy8i%2FYlKpoIlpehQ%2BZn2Ut6LttqQRYkPPJwpdYthHARpVsmtwyp8QUXUfT%2FpHd7neIAx%2FOAe52dt7TsrKGG873P7hvp2c2Upmry0LZo6mzHE73RLzuDrElkia7IRbTgraSqC%2FvCgsCQHgD8okjs2oHMHriWoHp7aBlwrGCOFAtgbvIhifhjHpJyYifOdOKOgCzs04HiIVvQYaIVzVn%2BAwSe7O2W1Sh%2BODPQfHY1eEbV9LKW8VN0wIv0fJFN%2FsAXRjPWXOsjU%2FXwQf9h5n6Lg6%2F3LS855rG2n%2F14E%2FZbW83SFIpKGEdXw9xYtH76NtARAt0fMgqc3PB5WROqOKRLC8pYef0XkkITItNhxSZS85bn96O41Kc6drsngVAtIgRI1CdsxchXqwVdhhFSmx5ltx%2FEGMhYmjDPuE4I4lPam8Ad6HO7MFRo3jaLjyol1iXl5aiLoooVBzMTy3eMslWUrlvjvlz2Mes%2BCi65rIGN5QIueEDLctdak02JXByOOPh9NCRVr%2FWCKhAFuZn29rt1t0%2FsMJfqg8IGOqUBb6KXofasasyLCIG5JYuXXaSJLOTDA0GGmrGIZHJt9wzjr1APH0k09jbJxhtlHL5EJECpGHABdagKZKSbnH1W17sTH62Edk5n4OMhhAYuloYvFIwj6iN3VLbgc28u7D%2Bn%2FiglXcwxXYerWSJY6r7gpaB8oi%2Fxo0LruC5%2Bl6kl2rYKaB5BaAQZ8LNxriIqxRSonkdrmlsyS2H2d17cNqIbLDxzwFNR&X-Amz-Signature=3f803fb937c7b2614b257c9df0d75e4ea00fe0b26b7fc609ed1cacfc61188e61&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
