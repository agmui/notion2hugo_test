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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZBJ4DX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC5d7J0DZYJ3qK7fTeoaOfgDIymxSRl%2FFfqGSsZ%2BRl3ngIgNhV%2FT%2F0Lnhc%2FITHR3avj%2FZdo3lo6fTxIwH%2B7ARUHBuoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9%2BuAiMlAoojZ9lDSrcAwumKvi1WaBJGBwGGPEv4O%2FimN3WGwOZWSRXUgrtl8bmDZ9wU5unHXlDyQ2I7H6YbaL7iDfnq1KTYRUDOVBtqKtwCAZmKSFdJlGHKVmD%2Fuh55LiBR5ChpcEbb0vAYHFzBSLTfmfYlL1O0zLVDn6%2Beu7RVsPIPNrdmee5mKrRzjaa4aaba5nqE1V1PwvWMgRl0Vzdk9P66rc2bBsvcj5RByX8EcW8KLmrcr5MyBv%2FWnN8OuWequwnBD7ctJbPeOlYID9Kp8m5K1nEQ6FI4Z%2BPT%2BUIS2dJDog6yDA564y3WSDR93AUU1pbtSatfud%2FcA72oJczhMUioJHthnGesdML4PxpUk7Gzt0nlqFqXpuuqurAlta5ML3FwtyRpWGw8OpEClwU6oLMme2eQmcxM4khW0NEo7iUA5Jj89gueLawP3nGvVkIOGznTnQGUhAli72hlhOWuuEio0HI1yaQTyd%2Fd0WjLrf1A1noWZO94un6Gn532lCVeYgFqo%2FPdTbAUOEzxRP4wwuEvIGu1%2B27lL90y7D%2FaeZCf%2BrPBf3GixciaUJf8QPjt3Bork0x0E7E4JLzd53do3QBYb7aW%2F2g1pVlfxDPKsjkFEi7Oov0jf5ZDWNTI9A21BzzB3aPHRrwMJPW58MGOqUBgYo42KXZ%2FjxjUv%2F4tbJhKbI8Ejq%2Fa74hMY2TOiEcBoPIe83uM4339ME6yCxt%2BASs5x%2BsbLJbCR2Lr8qQfYJlVBWNsX5wapEAiSLzHfff49b3sQXc69%2BOIx5WZa8oJtrQK%2FDqBFlyrA9D%2BLikIRsfIewsAPEepIETnIxnFv8on%2BFqHK1IbWIBo5BVGX2Kxb2Ux5JmXmSjraWuwK15veytgWpSMsYb&X-Amz-Signature=1d1968819671ac1603d4a0815228299d732d40d2b940dc5ecf88b01ca2611dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZBJ4DX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC5d7J0DZYJ3qK7fTeoaOfgDIymxSRl%2FFfqGSsZ%2BRl3ngIgNhV%2FT%2F0Lnhc%2FITHR3avj%2FZdo3lo6fTxIwH%2B7ARUHBuoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9%2BuAiMlAoojZ9lDSrcAwumKvi1WaBJGBwGGPEv4O%2FimN3WGwOZWSRXUgrtl8bmDZ9wU5unHXlDyQ2I7H6YbaL7iDfnq1KTYRUDOVBtqKtwCAZmKSFdJlGHKVmD%2Fuh55LiBR5ChpcEbb0vAYHFzBSLTfmfYlL1O0zLVDn6%2Beu7RVsPIPNrdmee5mKrRzjaa4aaba5nqE1V1PwvWMgRl0Vzdk9P66rc2bBsvcj5RByX8EcW8KLmrcr5MyBv%2FWnN8OuWequwnBD7ctJbPeOlYID9Kp8m5K1nEQ6FI4Z%2BPT%2BUIS2dJDog6yDA564y3WSDR93AUU1pbtSatfud%2FcA72oJczhMUioJHthnGesdML4PxpUk7Gzt0nlqFqXpuuqurAlta5ML3FwtyRpWGw8OpEClwU6oLMme2eQmcxM4khW0NEo7iUA5Jj89gueLawP3nGvVkIOGznTnQGUhAli72hlhOWuuEio0HI1yaQTyd%2Fd0WjLrf1A1noWZO94un6Gn532lCVeYgFqo%2FPdTbAUOEzxRP4wwuEvIGu1%2B27lL90y7D%2FaeZCf%2BrPBf3GixciaUJf8QPjt3Bork0x0E7E4JLzd53do3QBYb7aW%2F2g1pVlfxDPKsjkFEi7Oov0jf5ZDWNTI9A21BzzB3aPHRrwMJPW58MGOqUBgYo42KXZ%2FjxjUv%2F4tbJhKbI8Ejq%2Fa74hMY2TOiEcBoPIe83uM4339ME6yCxt%2BASs5x%2BsbLJbCR2Lr8qQfYJlVBWNsX5wapEAiSLzHfff49b3sQXc69%2BOIx5WZa8oJtrQK%2FDqBFlyrA9D%2BLikIRsfIewsAPEepIETnIxnFv8on%2BFqHK1IbWIBo5BVGX2Kxb2Ux5JmXmSjraWuwK15veytgWpSMsYb&X-Amz-Signature=dc5741f5841bba095fc10cd77a296eab990901d08973f92e9e00a0379ca7e71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
