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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFUO5A65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIA1pof93fGtUUlIS6j2rj9wqZ56S2qkWfSNIqibzu7%2FlAiB37kompLp6vIsoHd4qcD5EZxmHo88YnWyO9B4WCidbXyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM6DKtjDgRAHKicZ6XKtwDrbOeNyeaJY2nEwbNqoRpuSFJuKiG9fLT7x7%2F2XMDa8kl%2FFWh4VEAPBXLftq%2Frula0aWwPYFShG1w14JUl5j8%2FsxT6qI%2Bl0USyh2IdqYnIAHRMSzqsrd5srGkuwgcJxGj%2FH3i19bqx9%2BLr6A5MWxLUjZ9Sw210Yiant9kTnhF0sORWHl80FPropRXVBu9%2BIMA7RBjxZC2pjfu9Z1r4fWwB8WYNkrrtzRwQ%2B9DNEKvHnk1rSH9RpB5El33z9TN0TXw%2BFOoIirBN6nFsd%2BVtuwWJaf2Op2caPQ%2FWwj2AUbiCnMGK%2Fs3K3Kg3IodpQnOPFlwXp6fU%2Fysqzu6gb1sm%2BM7ffHgJr8meLm7c%2BcR6BFLkWWKv9Eu2i8WH9dutOKEsrOzXJbFVauv8HyckkiREjxKghAs6OWEX5YVP%2B%2BsLUcRTfjZc2wsKwTj1W56%2FncJ8MJ1bD6ipZepWpnZRD3y2mzZV8O7d6pivPltePDVLbVTsa2nVRNKLBFiWcsZdZ0y74TeqJ7A%2ByzY%2FvuQWef4NnzLpkvPqQwMnCa417tQ0dyYPY8Rl1mnsnXRQC3gfd%2FreO%2B%2FWBe1Lprm70nwbcYCpgCEE%2BivmtARwk32ZiAUJy89D4%2Bw35h%2B%2FsOz9oQj%2FAYwlZbIwQY6pgHxC9i9Q5W5go5rP36e%2FVDsCrn7TGcGOpP%2Bt%2Bujgtls9jgf7poJUIWDCte4m9N0x9Y0uu8QhVNKY7pppNsl0HRJkhVoKKo9eNZVNc3IcbTcmVikxIStsuAYQrMQNukq9%2B54X%2FCjC8u%2FazgzYNfGn1Vp3zy1afDceS4YX%2FSkA7Gl03NVpGFjYgwBkaM5J5VnyCxPqW%2F3UHDR9Nm6xlDyxX1iZ4cZQjjJ&X-Amz-Signature=f7dce38fbb8b63f1df7f68f2bacbd8cd016a329c86cc9639d3acfe24d3157955&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFUO5A65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIA1pof93fGtUUlIS6j2rj9wqZ56S2qkWfSNIqibzu7%2FlAiB37kompLp6vIsoHd4qcD5EZxmHo88YnWyO9B4WCidbXyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM6DKtjDgRAHKicZ6XKtwDrbOeNyeaJY2nEwbNqoRpuSFJuKiG9fLT7x7%2F2XMDa8kl%2FFWh4VEAPBXLftq%2Frula0aWwPYFShG1w14JUl5j8%2FsxT6qI%2Bl0USyh2IdqYnIAHRMSzqsrd5srGkuwgcJxGj%2FH3i19bqx9%2BLr6A5MWxLUjZ9Sw210Yiant9kTnhF0sORWHl80FPropRXVBu9%2BIMA7RBjxZC2pjfu9Z1r4fWwB8WYNkrrtzRwQ%2B9DNEKvHnk1rSH9RpB5El33z9TN0TXw%2BFOoIirBN6nFsd%2BVtuwWJaf2Op2caPQ%2FWwj2AUbiCnMGK%2Fs3K3Kg3IodpQnOPFlwXp6fU%2Fysqzu6gb1sm%2BM7ffHgJr8meLm7c%2BcR6BFLkWWKv9Eu2i8WH9dutOKEsrOzXJbFVauv8HyckkiREjxKghAs6OWEX5YVP%2B%2BsLUcRTfjZc2wsKwTj1W56%2FncJ8MJ1bD6ipZepWpnZRD3y2mzZV8O7d6pivPltePDVLbVTsa2nVRNKLBFiWcsZdZ0y74TeqJ7A%2ByzY%2FvuQWef4NnzLpkvPqQwMnCa417tQ0dyYPY8Rl1mnsnXRQC3gfd%2FreO%2B%2FWBe1Lprm70nwbcYCpgCEE%2BivmtARwk32ZiAUJy89D4%2Bw35h%2B%2FsOz9oQj%2FAYwlZbIwQY6pgHxC9i9Q5W5go5rP36e%2FVDsCrn7TGcGOpP%2Bt%2Bujgtls9jgf7poJUIWDCte4m9N0x9Y0uu8QhVNKY7pppNsl0HRJkhVoKKo9eNZVNc3IcbTcmVikxIStsuAYQrMQNukq9%2B54X%2FCjC8u%2FazgzYNfGn1Vp3zy1afDceS4YX%2FSkA7Gl03NVpGFjYgwBkaM5J5VnyCxPqW%2F3UHDR9Nm6xlDyxX1iZ4cZQjjJ&X-Amz-Signature=0b30e9a9005b3ca8dc4dadcd09cd00de026d1bbf7d38d86e96217ef1df9de9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
