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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJQR445%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLLVC106taHOcEn7UY%2B3DPQmAMtlXjdrsMPG6FJukoDAIgU8b3izyBXyPb8Kq8%2BYUtyGHJY%2FS%2BbfLHDRxuRDN4chYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDF%2FljsyHUp%2FnAQzrjCrcA6mgjtNXmSNj4TLbK%2B4pUuFeOqzkLg18UAKa2W4G8w55Un5bedxFCp5UjZnPRFKevGgijDuA8cqdYmDPuZ33kQQ8Nb6tyKt8uv07gE22avc4JAkhJaiOGQxKUXJ4q9Ud04ptLu4lJ5okPpGyzFMZ8pwBz%2FDYvTdD0%2BLBi9wD0n8b4nWzAantriE5fV5B1X7o2pbxhTlIZY%2FO6DurZtCjhFvGNlj4mueXNdp%2FXH2N1fQLnv850FzvpLnbDnUZzFUdXMxUOxAMhKYpj5sWk3QSgSce2JCgZ59h8UoIcHugvEMYIp%2FrGB3GScK7AoqU5v7gKbK7YD6ChOVfJr35XmGBrhe7GyLbaTayl0ovuLBVSOVtJsoS1vb0PlyBX8i0MfYtWtpDXweCDe7UBmNkLmR3lL6Oypr7HymuDSUJpu2oRbBU3u5p4pKQXpvPMSqKFJEBI%2BWXxNd2usH7ore87ZGjx8TZU7x1ZKZafglLKmw4wlBb4c8a5rQv15zw0bworZ6vsbPqdjihrSIZJmmmIDI%2F6y97DDpItvIjrlXtzFzAlVTTxXWjt86OHjQVlKFLqp38G8mZSluVjEJKTp0YzrlwS%2Bu57jJVZCFBHpgCPa7W6gBB7hX%2FXTguOf9QaqKBMKbQ1b4GOqUBjPpF9hO%2FapZE0ZWIbxwUYEra6cceo3LXshdVkzftpjHNPOtDLOANFbwFc1LG%2B0wvUBdat3R7ngwJMeTmkwWvj2GRNmveAl8AF5BkqLADxVFi7f4DViHDjXuS1neMD4CfnBNi4LUZxe%2BN1xIp%2BWL%2BEfluIGtm%2B8VRPkadot64qbtZfaXhqrYJJk6nir68GQO1swjHwCv8rX1zwU48sCnH2p3j8GUA&X-Amz-Signature=5b83230396fd7fe6a7fa8bd614f271f114c05ecccdb68219af5e8a5b88839a31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJQR445%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLLVC106taHOcEn7UY%2B3DPQmAMtlXjdrsMPG6FJukoDAIgU8b3izyBXyPb8Kq8%2BYUtyGHJY%2FS%2BbfLHDRxuRDN4chYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDF%2FljsyHUp%2FnAQzrjCrcA6mgjtNXmSNj4TLbK%2B4pUuFeOqzkLg18UAKa2W4G8w55Un5bedxFCp5UjZnPRFKevGgijDuA8cqdYmDPuZ33kQQ8Nb6tyKt8uv07gE22avc4JAkhJaiOGQxKUXJ4q9Ud04ptLu4lJ5okPpGyzFMZ8pwBz%2FDYvTdD0%2BLBi9wD0n8b4nWzAantriE5fV5B1X7o2pbxhTlIZY%2FO6DurZtCjhFvGNlj4mueXNdp%2FXH2N1fQLnv850FzvpLnbDnUZzFUdXMxUOxAMhKYpj5sWk3QSgSce2JCgZ59h8UoIcHugvEMYIp%2FrGB3GScK7AoqU5v7gKbK7YD6ChOVfJr35XmGBrhe7GyLbaTayl0ovuLBVSOVtJsoS1vb0PlyBX8i0MfYtWtpDXweCDe7UBmNkLmR3lL6Oypr7HymuDSUJpu2oRbBU3u5p4pKQXpvPMSqKFJEBI%2BWXxNd2usH7ore87ZGjx8TZU7x1ZKZafglLKmw4wlBb4c8a5rQv15zw0bworZ6vsbPqdjihrSIZJmmmIDI%2F6y97DDpItvIjrlXtzFzAlVTTxXWjt86OHjQVlKFLqp38G8mZSluVjEJKTp0YzrlwS%2Bu57jJVZCFBHpgCPa7W6gBB7hX%2FXTguOf9QaqKBMKbQ1b4GOqUBjPpF9hO%2FapZE0ZWIbxwUYEra6cceo3LXshdVkzftpjHNPOtDLOANFbwFc1LG%2B0wvUBdat3R7ngwJMeTmkwWvj2GRNmveAl8AF5BkqLADxVFi7f4DViHDjXuS1neMD4CfnBNi4LUZxe%2BN1xIp%2BWL%2BEfluIGtm%2B8VRPkadot64qbtZfaXhqrYJJk6nir68GQO1swjHwCv8rX1zwU48sCnH2p3j8GUA&X-Amz-Signature=44fcedc3b9b3b3b926d7db8b54dbf1f3351666ad8cbfc2c668769cae6cdc167d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
