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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2AVFHD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCLr2YFDtVk2g%2BSjV4kZClPVer%2FUXi1BiA8ofL2ICUMPgIgH6bUU4SBllnpLxbCrb6%2F%2BkvAJWoYhJ%2FCFINJofRZ3YsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdp6rLGqj2NGYaT2yrcA4nMTG4PVRyVpgj81ziZCKes%2F7pLf%2FcDZHLjaAoeG5ee1IP5A%2BeXUnfp3amkFbnmR%2F1ZTAZbmdqEWXIdSxepMYu7iChI969cCfQkXqOhJEi2HSgBItUxhlNzaDYONCr1DBitlP%2F3SHzYiqGik8GM8RkwHWIre5ZejfBkGRYoKgynBjpM0nPC1ZbqAjto1eFFBBmpg%2BLNGjf2kLyGmu%2FV022MeepOvbW1PjkFcoYRXvVjEKmPJwu8PK4SdtQ1NoZXg%2BgywU22uT%2BhAX8UIbjv2CL3AbGK%2FYjcheLBJKYv9rs82rbhJRNCDoxHfhzshR2yfJ9BhC7iezil9V7EYXnnH88JFpVrorrtuYAsmw457qqElUcCrIqhNbcoarsyvMWYE4UQuxImlGqppIoQimyM0VwtO0Ewbl8zXv%2BJgLS4QHYmmfJyewvG%2FI%2FcGQpUGLThEt%2FtqEB%2FCYlUop%2BC6dqu3GBd1m1naGcM7utg0c18lYPLTzg8TzDecep1HV1YrOyi7piaD6JfEvK%2Fn046Ny1JouC0A20HhzvTA6QyfnEhBpXDr20%2BRCFqy1u6bQhVPlYrljcfpkD0QcUpPO4dp%2BMpz%2Fai9mzx2%2BIlptP0avBti3b5AjFpN5AjEekkuyRDMKqI58MGOqUB%2BX9%2FrpndCUtXyQyBFWHtBlZ6RnX8I8jp%2BpG7E%2FkBKEEwTyZj7wzO0qvQAh3HvaZzTp9o5a06WRviJEoGNcfDW9OwIBRYnogSbPwiGNw8Ug0N5OU%2BEP9lxkftJ6kUdUKX8gH7r1LEmeIkd8sYcSAw%2B%2BQIaJbBbl3YlU0hswbBk6w6aME9o8kMTpFThivoXXQW583BZkWMwjioVY6BF%2BU4Vo4LR3tZ&X-Amz-Signature=9330db4dd423444a552683202e246e3977ad56dd688eb80179ab1554fe8cbc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2AVFHD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCLr2YFDtVk2g%2BSjV4kZClPVer%2FUXi1BiA8ofL2ICUMPgIgH6bUU4SBllnpLxbCrb6%2F%2BkvAJWoYhJ%2FCFINJofRZ3YsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdp6rLGqj2NGYaT2yrcA4nMTG4PVRyVpgj81ziZCKes%2F7pLf%2FcDZHLjaAoeG5ee1IP5A%2BeXUnfp3amkFbnmR%2F1ZTAZbmdqEWXIdSxepMYu7iChI969cCfQkXqOhJEi2HSgBItUxhlNzaDYONCr1DBitlP%2F3SHzYiqGik8GM8RkwHWIre5ZejfBkGRYoKgynBjpM0nPC1ZbqAjto1eFFBBmpg%2BLNGjf2kLyGmu%2FV022MeepOvbW1PjkFcoYRXvVjEKmPJwu8PK4SdtQ1NoZXg%2BgywU22uT%2BhAX8UIbjv2CL3AbGK%2FYjcheLBJKYv9rs82rbhJRNCDoxHfhzshR2yfJ9BhC7iezil9V7EYXnnH88JFpVrorrtuYAsmw457qqElUcCrIqhNbcoarsyvMWYE4UQuxImlGqppIoQimyM0VwtO0Ewbl8zXv%2BJgLS4QHYmmfJyewvG%2FI%2FcGQpUGLThEt%2FtqEB%2FCYlUop%2BC6dqu3GBd1m1naGcM7utg0c18lYPLTzg8TzDecep1HV1YrOyi7piaD6JfEvK%2Fn046Ny1JouC0A20HhzvTA6QyfnEhBpXDr20%2BRCFqy1u6bQhVPlYrljcfpkD0QcUpPO4dp%2BMpz%2Fai9mzx2%2BIlptP0avBti3b5AjFpN5AjEekkuyRDMKqI58MGOqUB%2BX9%2FrpndCUtXyQyBFWHtBlZ6RnX8I8jp%2BpG7E%2FkBKEEwTyZj7wzO0qvQAh3HvaZzTp9o5a06WRviJEoGNcfDW9OwIBRYnogSbPwiGNw8Ug0N5OU%2BEP9lxkftJ6kUdUKX8gH7r1LEmeIkd8sYcSAw%2B%2BQIaJbBbl3YlU0hswbBk6w6aME9o8kMTpFThivoXXQW583BZkWMwjioVY6BF%2BU4Vo4LR3tZ&X-Amz-Signature=61483e8e59ade11d59e8e30e27e38d07b699c33126f11814be2212f02737de56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
