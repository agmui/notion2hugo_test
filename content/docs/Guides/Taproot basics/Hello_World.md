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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6V3F6TD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCXq4%2Bt%2FEF0cTZRhgMQGOrOHWWjpeYdpqnG0Ur4vVAIdgIgdtLSL5qTTLDIaNcxU%2F3gX6cTkkooCQdm%2BokCZIObK2cqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Faz0nD9L2Sxbt%2B%2ByrcA9rasBb3m7cvlt0qb4NVRNVERZZ6y%2BTPPLiRECEcbjfkrkshG5aeTcI5LAboaGQCvcSbLHuwQLCSlhVRmkB8zDBC17r6mMCT2hsZV3PrqgysbA3g9lAQY3hbKsDjWX7LJVWrPCTbo6eprNj6mDhc%2FVZIDMyvBDugNEQzFE4l9Piy5JZPYHvbhkg%2FTJOKKENRzot2T7p5fZr%2F4%2Bz%2FA35S6m0u%2FDmByg9UKGleqC%2BzAh3Pq3X6R8Kayph%2Bnu%2BY2%2BaFPA1eTJ57ZaNBuU1puLRnAVYeK8irXm4145ND8RTIGTzoNpEyeT3K8INePPjl1%2FnGnX4pNM4dZ74bLSwo4gCMbNqSxV%2BFZ%2BG6eamiP%2FcKG7xbZac81Np5T6ziK%2BAk1gL%2F4XC8RPrkSKFJ7NPcmezaS%2FQlQumuIPhUaQFny5y1hROdWIbvuXIxSo%2B137LXGEgs6FaweurCYp%2BMXt62yrU1v6GB9KQ5jLOcT5qICXGunpdcs2FcuBtEvSyYPO3QR0XZe1OpsgD57s7BG1SMEWfBEYkAyFPqZW0s5TUZdM%2F87pKhiz4rYl38SXFXSK7rTlm0rQiCGshqW8R2BUDlqBY5r4MjdsdjAFHfy%2BS1Z0DX27hIcATqo7C19dPRJ9H4MNjfnsAGOqUBlXtm%2BJFXzyV%2BXId9qKqXflu5UKbOV%2FwzMaP7O7xre76mNTia4KbHvN24Y%2BsZQI%2F4Af%2BNUZJFEDjemDv081V63LlCEnxMX0TM%2Btq2%2FAgsf%2Fq18waqZz%2BIIBY3As79briPZ9O1cbjnfdUoZV8kIw%2F1LulYHxMH%2FK6JXcUR9qxiYfghLt60CzawJ%2BGCjURJrA47zOnTN94lW9gQTF0s1FmDMujQVus%2F&X-Amz-Signature=04706d334b0d9c5bb875db52729f049487ae533bcf2f2ee95f7bd0a19ef2b009&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6V3F6TD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCXq4%2Bt%2FEF0cTZRhgMQGOrOHWWjpeYdpqnG0Ur4vVAIdgIgdtLSL5qTTLDIaNcxU%2F3gX6cTkkooCQdm%2BokCZIObK2cqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Faz0nD9L2Sxbt%2B%2ByrcA9rasBb3m7cvlt0qb4NVRNVERZZ6y%2BTPPLiRECEcbjfkrkshG5aeTcI5LAboaGQCvcSbLHuwQLCSlhVRmkB8zDBC17r6mMCT2hsZV3PrqgysbA3g9lAQY3hbKsDjWX7LJVWrPCTbo6eprNj6mDhc%2FVZIDMyvBDugNEQzFE4l9Piy5JZPYHvbhkg%2FTJOKKENRzot2T7p5fZr%2F4%2Bz%2FA35S6m0u%2FDmByg9UKGleqC%2BzAh3Pq3X6R8Kayph%2Bnu%2BY2%2BaFPA1eTJ57ZaNBuU1puLRnAVYeK8irXm4145ND8RTIGTzoNpEyeT3K8INePPjl1%2FnGnX4pNM4dZ74bLSwo4gCMbNqSxV%2BFZ%2BG6eamiP%2FcKG7xbZac81Np5T6ziK%2BAk1gL%2F4XC8RPrkSKFJ7NPcmezaS%2FQlQumuIPhUaQFny5y1hROdWIbvuXIxSo%2B137LXGEgs6FaweurCYp%2BMXt62yrU1v6GB9KQ5jLOcT5qICXGunpdcs2FcuBtEvSyYPO3QR0XZe1OpsgD57s7BG1SMEWfBEYkAyFPqZW0s5TUZdM%2F87pKhiz4rYl38SXFXSK7rTlm0rQiCGshqW8R2BUDlqBY5r4MjdsdjAFHfy%2BS1Z0DX27hIcATqo7C19dPRJ9H4MNjfnsAGOqUBlXtm%2BJFXzyV%2BXId9qKqXflu5UKbOV%2FwzMaP7O7xre76mNTia4KbHvN24Y%2BsZQI%2F4Af%2BNUZJFEDjemDv081V63LlCEnxMX0TM%2Btq2%2FAgsf%2Fq18waqZz%2BIIBY3As79briPZ9O1cbjnfdUoZV8kIw%2F1LulYHxMH%2FK6JXcUR9qxiYfghLt60CzawJ%2BGCjURJrA47zOnTN94lW9gQTF0s1FmDMujQVus%2F&X-Amz-Signature=563a62260a4306c368ce43fdb1d47d1bf9b7eca9f5239de7d31c7c6594c4dcb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
