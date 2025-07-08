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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXTB3G3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bLblUB1Np%2Bc4CjbDpe17uNAfiKpZ0iMZCyQS%2FsbIxAiAitgx2sBfw02a3P4G45NLMx5Jp3qZh3zpWDG9s8mExISqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbZTG7Ns1W2lVJ43KtwDoHELj1Z892nn13HRihGNCTXpbhCvXrlOyV7ONbitRGda7JFHJdHZnXHLJsUOJQxh42Noc315GbmZzgnZJyyEe8Gx3E7t9g%2BLg6a3YEmgVzj8Wb7RSIdc%2Bc9lEPUOz42cP3x84pJeuo5y1mzAN%2Bs7i%2BiMWJCvTIZdvH4CYK%2F3tApsGAtytMGJySqwf4ScsxwlDBEk7Gfx5FhLaFh%2FghL4OMyGw88P%2BvMfUjtxQSI6UcM0GZREI5CatueOYP5jnLlMX8Z8dk5N3TJn%2BQD1esPnjR%2FYBQCV%2Fz%2B%2BzbsfHz6TH0H0ZEB4L7nNOMdf0v0dIY%2BWsJQbd97sIDo%2BvI%2BZCOEL9WnXEZb0gKl4xTIlDgSSquu3qaDD6sSUdaf%2FsS%2Be5azJsYzDk15y2jDT3%2FyOS3uWQZlGkUAdpxq%2BAamiGec15XELE%2BPQd5T7IfhB8XTgAn2WNkiPsgrYuOvR8v6xpWPbheSKeetJIWBxB3%2Fg%2B5D4UI9no2IJzGXgd%2B95Svx%2FpghAz9A5OOVNNUerWxif2OMhEiJvAjpc5Zr4X7XE4ThqzNB25lIvGwajR3GKYUKSFTyrL5iAyZwP7iwYz5kBHePQLr8HZTNmReLTpdhsLNsm68XpdsP9OT%2BI3zw71DAwyq21wwY6pgHoZJnYSsvBk8R2zHe5vniMCfMuW1ZXMx3H9DixWyjVuSJKXqTI2jG7z8Eph09Rz6swcQJaVSM79NXCY2bsqkEb0566YvZOOE53WvZhS5RSKE58N4u1uFsEAeGjSa%2Ff0J60bBD%2FAFHpuvHSr3mFhHRgiq3mBkjcvWj3XdW5ezzJomfwxkKd5pw6p3s06N0lmqrnKYpYygQBylI%2BjvbOExexKPHQVRJu&X-Amz-Signature=0f77669b40d2fdddfafa561effe00b1198856751a31fe33cdbe13ea090b90480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXTB3G3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bLblUB1Np%2Bc4CjbDpe17uNAfiKpZ0iMZCyQS%2FsbIxAiAitgx2sBfw02a3P4G45NLMx5Jp3qZh3zpWDG9s8mExISqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbZTG7Ns1W2lVJ43KtwDoHELj1Z892nn13HRihGNCTXpbhCvXrlOyV7ONbitRGda7JFHJdHZnXHLJsUOJQxh42Noc315GbmZzgnZJyyEe8Gx3E7t9g%2BLg6a3YEmgVzj8Wb7RSIdc%2Bc9lEPUOz42cP3x84pJeuo5y1mzAN%2Bs7i%2BiMWJCvTIZdvH4CYK%2F3tApsGAtytMGJySqwf4ScsxwlDBEk7Gfx5FhLaFh%2FghL4OMyGw88P%2BvMfUjtxQSI6UcM0GZREI5CatueOYP5jnLlMX8Z8dk5N3TJn%2BQD1esPnjR%2FYBQCV%2Fz%2B%2BzbsfHz6TH0H0ZEB4L7nNOMdf0v0dIY%2BWsJQbd97sIDo%2BvI%2BZCOEL9WnXEZb0gKl4xTIlDgSSquu3qaDD6sSUdaf%2FsS%2Be5azJsYzDk15y2jDT3%2FyOS3uWQZlGkUAdpxq%2BAamiGec15XELE%2BPQd5T7IfhB8XTgAn2WNkiPsgrYuOvR8v6xpWPbheSKeetJIWBxB3%2Fg%2B5D4UI9no2IJzGXgd%2B95Svx%2FpghAz9A5OOVNNUerWxif2OMhEiJvAjpc5Zr4X7XE4ThqzNB25lIvGwajR3GKYUKSFTyrL5iAyZwP7iwYz5kBHePQLr8HZTNmReLTpdhsLNsm68XpdsP9OT%2BI3zw71DAwyq21wwY6pgHoZJnYSsvBk8R2zHe5vniMCfMuW1ZXMx3H9DixWyjVuSJKXqTI2jG7z8Eph09Rz6swcQJaVSM79NXCY2bsqkEb0566YvZOOE53WvZhS5RSKE58N4u1uFsEAeGjSa%2Ff0J60bBD%2FAFHpuvHSr3mFhHRgiq3mBkjcvWj3XdW5ezzJomfwxkKd5pw6p3s06N0lmqrnKYpYygQBylI%2BjvbOExexKPHQVRJu&X-Amz-Signature=b1a4adb5fc10f7be3ce4c3f6c3395aad5a9c1ae9e1e86c1b3e15adf9bd3da5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
