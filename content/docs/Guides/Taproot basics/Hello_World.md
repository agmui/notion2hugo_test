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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=ac7d7badf08699866cb8a5c012ecccf0f7129da1c062de73f3a196b49ab334af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=48a2d1934b37c298fd9a8c57109273f431872b98570e64749efcab38fc7e7ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
