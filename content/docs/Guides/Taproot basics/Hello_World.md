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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOP2UNW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIC7hIu8ID5P3c7CAmePIfQ4HNM9q43l9FY5peNDW3oKVAiEAuyMNhyVvzfwI3XZ5ON3VgTgrOgUyleEdl4r8twgO56AqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5Z5oD6VlUZx4R9vircA%2BKQIBrnqXomr3HAJZYg5SQnJChqmj%2FMDKRBLS%2Fe5%2Bprw2BZx1PWgaAVZyckep7GptFOvri0xl7J9eWPHCj2sPH90seB4af1R30mM%2BVHV8phntCo%2B53gBAptBu3Cpx1Uy4K7wJogCZI%2FvgIGGTPVh%2FlLefeviZRjuKBMbD11WKOZX4MM7rABeFHmBwul8zTa2cEKIwY7hzHw9pV2kOax%2FD%2FS473WThu2cQKTOgPNAZPn%2F6nplg3e8ue3eKTq7ElRRMkHGHmi95MbZqME8puKpfqQcx6g2IydBe2bPV8IqLFoLKboW1emBG7bhVpnmoCdtBjtxls6us5QcOMenqLS2aqd%2F0A1UFeo9oKvpfH8txAEK7%2FR8YFoVHauyzsVSeqpQSUgC3rdxrehO7SMWX%2FbDjOhFeK0DfVmh0Eq%2FJ4NEcNyh2Qz62KgEl5siKS6izGrv7cm009fcpfgIUANne6v3dqoBRdyoOkz3xurqMF9hCIppK4GtQgsamwj7vKL9CP6BI3%2BuUJxWQyqpnTTSXH2d93%2BxJRj%2Fm%2B8mSM3%2B6pGHVEUyvZrOEHTT2GZIW%2BdVuIyNP%2BvL%2B1HlR%2Bh3zRAe1ZGxNTiMhDcdsiEcFCAzGIXykh0V12fC0PQC2tluP1jMOKN6L8GOqUB3lrmLp4p2Xsj%2F4NNgkBfRrmeaRzyTuTSLaZAn67c3Yny7idHgzSooCdeKYb5CyMeGvE9tC%2F2sGP175XtIpapmDnZlz2mBkuSW6EZxVBhG09P2ZC33tJgIeGZHrCUexJEv5%2Foq7TIhV9BWr%2Fm%2BCLNzXahgENOpoBYmBa6V9PxCAFIuNuZ307jrJhegP9QyvtOnwbZGggAASPeXrbgJBYBq78LouHl&X-Amz-Signature=19898cd6a2ccef9683aeafd9ddcfe7ebe4d71336237f419411dfe0c659f53eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOP2UNW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIC7hIu8ID5P3c7CAmePIfQ4HNM9q43l9FY5peNDW3oKVAiEAuyMNhyVvzfwI3XZ5ON3VgTgrOgUyleEdl4r8twgO56AqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5Z5oD6VlUZx4R9vircA%2BKQIBrnqXomr3HAJZYg5SQnJChqmj%2FMDKRBLS%2Fe5%2Bprw2BZx1PWgaAVZyckep7GptFOvri0xl7J9eWPHCj2sPH90seB4af1R30mM%2BVHV8phntCo%2B53gBAptBu3Cpx1Uy4K7wJogCZI%2FvgIGGTPVh%2FlLefeviZRjuKBMbD11WKOZX4MM7rABeFHmBwul8zTa2cEKIwY7hzHw9pV2kOax%2FD%2FS473WThu2cQKTOgPNAZPn%2F6nplg3e8ue3eKTq7ElRRMkHGHmi95MbZqME8puKpfqQcx6g2IydBe2bPV8IqLFoLKboW1emBG7bhVpnmoCdtBjtxls6us5QcOMenqLS2aqd%2F0A1UFeo9oKvpfH8txAEK7%2FR8YFoVHauyzsVSeqpQSUgC3rdxrehO7SMWX%2FbDjOhFeK0DfVmh0Eq%2FJ4NEcNyh2Qz62KgEl5siKS6izGrv7cm009fcpfgIUANne6v3dqoBRdyoOkz3xurqMF9hCIppK4GtQgsamwj7vKL9CP6BI3%2BuUJxWQyqpnTTSXH2d93%2BxJRj%2Fm%2B8mSM3%2B6pGHVEUyvZrOEHTT2GZIW%2BdVuIyNP%2BvL%2B1HlR%2Bh3zRAe1ZGxNTiMhDcdsiEcFCAzGIXykh0V12fC0PQC2tluP1jMOKN6L8GOqUB3lrmLp4p2Xsj%2F4NNgkBfRrmeaRzyTuTSLaZAn67c3Yny7idHgzSooCdeKYb5CyMeGvE9tC%2F2sGP175XtIpapmDnZlz2mBkuSW6EZxVBhG09P2ZC33tJgIeGZHrCUexJEv5%2Foq7TIhV9BWr%2Fm%2BCLNzXahgENOpoBYmBa6V9PxCAFIuNuZ307jrJhegP9QyvtOnwbZGggAASPeXrbgJBYBq78LouHl&X-Amz-Signature=66d192085947ea12c6603549fe0c8567ee5c35541f7275a7d9652562da1fb6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
