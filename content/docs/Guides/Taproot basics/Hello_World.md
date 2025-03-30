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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672I5SNCN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBbGR6yRxe7tAY1iqz8yj9J4V9a6kXYxSvyUGwS5JT8AiBYEj1N7JExzy1vpr%2BeUZOAWinTY5Bm5f6Rdn5YELh68CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3oY6LiEsG9XC%2BZdpKtwDyPpi1x88x9XgfZbrr2rzk0DLylS4TpbP%2Bt1xars1d4MyJK8eRme6sMRUU%2BpTozhlpD0k3COm51FpP8shhg2fg9Yf9yXEIbKvtGPvjZBDuSQXIwrQRRxBqMEuVp2J3zKjlwL88F9tJ%2FQFtb8d6G3trz5%2FoUcTTCMULO7hEDT7ue3uFVsVFEcs3e8h3Miwy1V2YErOqrc%2BPvKF6FGOyOo8DlUBPouH85%2BRYr%2BRV9Sh0gciTc5u5RCrldMr%2FVtc0NPPSHPN0x5xWbsXijh6IKNUIdSJS42Od%2F5dMmMWzSmosGSkfJfO2bUg0ghhNZAgviQkAARrWca0Ibjgo8mOA20kp2fJCubySkG9IqVZGKHbPVOS3S5jzCXnnzdA%2BPX3a4PEYpT7g9HIAw%2Fs7%2F0nJOabA4rBTKDK%2Fj6cdFfGGMd3szRGR6pMIICx1lrL0zF4qECuBi8V2P36ZymjZvmM2ujFQJRhyiwcQZpakPAAffO3%2BPw4zUKJFGDqAU7rkgDtSDekCFHxKROpiJi9%2BDovYrAxZkwtfvRePnUnlHkgEyAqltgNHy%2B%2BL5F%2FUU1%2FH%2F%2F2dke6H0XVRXfPZTQh%2FKYvvQjBbN9VC758dXbwGNvtkkPnZvkEMbsrLD7zPCcQO2gwx9OlvwY6pgFxN%2B0fCvKSfQY%2BV778R62nRshddJvH6rJomNmgPpqNJp7aNrh0jPNkdFCKf4Hk14i%2BDbFxZbVUHeyejG6g636souZpPPcHpPXgNAeuN8ddLL4H%2FXdsZZXKytxR6tnj4Ho60rzs6%2Fhp%2BlpeT2jjzBBgWJGMHWuCyo2VvuGnprfPRPjtIbAnQKfM%2F8kpMnYerzULeAXw9e%2FWnFzq2ZhZkClu3goqfaIc&X-Amz-Signature=5e54801c3aa1351b881aefec2f1a24b1d93a9a58f5fd361f3de5b9ddf36004dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672I5SNCN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBbGR6yRxe7tAY1iqz8yj9J4V9a6kXYxSvyUGwS5JT8AiBYEj1N7JExzy1vpr%2BeUZOAWinTY5Bm5f6Rdn5YELh68CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3oY6LiEsG9XC%2BZdpKtwDyPpi1x88x9XgfZbrr2rzk0DLylS4TpbP%2Bt1xars1d4MyJK8eRme6sMRUU%2BpTozhlpD0k3COm51FpP8shhg2fg9Yf9yXEIbKvtGPvjZBDuSQXIwrQRRxBqMEuVp2J3zKjlwL88F9tJ%2FQFtb8d6G3trz5%2FoUcTTCMULO7hEDT7ue3uFVsVFEcs3e8h3Miwy1V2YErOqrc%2BPvKF6FGOyOo8DlUBPouH85%2BRYr%2BRV9Sh0gciTc5u5RCrldMr%2FVtc0NPPSHPN0x5xWbsXijh6IKNUIdSJS42Od%2F5dMmMWzSmosGSkfJfO2bUg0ghhNZAgviQkAARrWca0Ibjgo8mOA20kp2fJCubySkG9IqVZGKHbPVOS3S5jzCXnnzdA%2BPX3a4PEYpT7g9HIAw%2Fs7%2F0nJOabA4rBTKDK%2Fj6cdFfGGMd3szRGR6pMIICx1lrL0zF4qECuBi8V2P36ZymjZvmM2ujFQJRhyiwcQZpakPAAffO3%2BPw4zUKJFGDqAU7rkgDtSDekCFHxKROpiJi9%2BDovYrAxZkwtfvRePnUnlHkgEyAqltgNHy%2B%2BL5F%2FUU1%2FH%2F%2F2dke6H0XVRXfPZTQh%2FKYvvQjBbN9VC758dXbwGNvtkkPnZvkEMbsrLD7zPCcQO2gwx9OlvwY6pgFxN%2B0fCvKSfQY%2BV778R62nRshddJvH6rJomNmgPpqNJp7aNrh0jPNkdFCKf4Hk14i%2BDbFxZbVUHeyejG6g636souZpPPcHpPXgNAeuN8ddLL4H%2FXdsZZXKytxR6tnj4Ho60rzs6%2Fhp%2BlpeT2jjzBBgWJGMHWuCyo2VvuGnprfPRPjtIbAnQKfM%2F8kpMnYerzULeAXw9e%2FWnFzq2ZhZkClu3goqfaIc&X-Amz-Signature=0317934190f380a510fa690938fa915b9732b70a30a2f6e7bfb644e10564eaec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
