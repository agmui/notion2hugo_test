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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624A6245Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01uBLRCAQqvqfV5LnttlTAoOCOcoav15LNktVkobhXAiEA0tKNY0QRdJfBcYvu8zsz4An9RlQ6YwKvlr4SvLcqdTQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC6XPa3i9fnM%2BOT%2FircA2bvcfSSC5rBYVABw2Z6SHiB6luzXAKWy0PrMyJERw4rZm9R83XpaNzx4LkQo4i96t6X1c5ojLfZrqzeQZyE7UC2y3ISJXNfYVXez460hN%2BXsOAGT4AGCqmASGrst4ZcIH3df19pyUp87zPhMiOeqV%2BjnIK1%2Bx2ZwtzxSIDIasHGyC3Ant%2BRBd5ERrypqvuFfverFUycsmqKS1%2B1zoC5NtdGpq5IJ0jJC3%2FRveUB7M5%2BwThKW3p%2BZVH9g6HG%2Bl5wJe%2FWmA0thH4xoujtyXrhyIgmUIYNktMguow6ZCP2rvmzv1H%2F9JKmi6gNibfIXw1F6JrkAh4onoyZEOebw0gTSX%2Bg%2FQiFfMAlheXBI0bHmpsTMUpHPQ3d%2Fr6HGKMt4rOd1dr67Xm7K7SUV7FZV6GMjA5LAqwDAxQwy8gnxdWLPv3SfwmGctCFmtFiwg4hd3QFzCI6n69YxfOQdoobYTIBy5Qn0L4kEjgC%2BpPkiMFs7NHQ4MqcS7VCmTriVkJvccTlJgw9YAaJVxB2uDmTfDOdVK%2BOcqfLVbSGjfC97WtNIyAHeIAPthaaRmYgBNCrWZrW0vkOdUk1W6T1d757i5TkO%2BAhGnlf7WIiVLxiiborD7YaLgqM72iWQ3881hkrMLvbl74GOqUB1mOnmvPRHqd%2F9XJi16bKflH9h3j85XNbrZsOJ6rVL%2BmcTIJkfspNJSWihAP%2Bt4FDk%2FzW7OrwOhnC5hs9VFCaGfoD9FiL%2F6LlFcz%2BJSO2ZZtbsyELgCZyuQV0k5adeSFtgN2%2FsLsAA2OgCvKE2OSzUfk%2FbsqG9lrwBIqNRSZywq5jDYo44jJxi90g4DwRyHrJLPGFx%2BFnDDvtOWmIiXtmN2ufnc9Z&X-Amz-Signature=9dcc2e06970d2bf39d8412716af6803bc48c59bcb48a1d253b67b83de1bf2818&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624A6245Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01uBLRCAQqvqfV5LnttlTAoOCOcoav15LNktVkobhXAiEA0tKNY0QRdJfBcYvu8zsz4An9RlQ6YwKvlr4SvLcqdTQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC6XPa3i9fnM%2BOT%2FircA2bvcfSSC5rBYVABw2Z6SHiB6luzXAKWy0PrMyJERw4rZm9R83XpaNzx4LkQo4i96t6X1c5ojLfZrqzeQZyE7UC2y3ISJXNfYVXez460hN%2BXsOAGT4AGCqmASGrst4ZcIH3df19pyUp87zPhMiOeqV%2BjnIK1%2Bx2ZwtzxSIDIasHGyC3Ant%2BRBd5ERrypqvuFfverFUycsmqKS1%2B1zoC5NtdGpq5IJ0jJC3%2FRveUB7M5%2BwThKW3p%2BZVH9g6HG%2Bl5wJe%2FWmA0thH4xoujtyXrhyIgmUIYNktMguow6ZCP2rvmzv1H%2F9JKmi6gNibfIXw1F6JrkAh4onoyZEOebw0gTSX%2Bg%2FQiFfMAlheXBI0bHmpsTMUpHPQ3d%2Fr6HGKMt4rOd1dr67Xm7K7SUV7FZV6GMjA5LAqwDAxQwy8gnxdWLPv3SfwmGctCFmtFiwg4hd3QFzCI6n69YxfOQdoobYTIBy5Qn0L4kEjgC%2BpPkiMFs7NHQ4MqcS7VCmTriVkJvccTlJgw9YAaJVxB2uDmTfDOdVK%2BOcqfLVbSGjfC97WtNIyAHeIAPthaaRmYgBNCrWZrW0vkOdUk1W6T1d757i5TkO%2BAhGnlf7WIiVLxiiborD7YaLgqM72iWQ3881hkrMLvbl74GOqUB1mOnmvPRHqd%2F9XJi16bKflH9h3j85XNbrZsOJ6rVL%2BmcTIJkfspNJSWihAP%2Bt4FDk%2FzW7OrwOhnC5hs9VFCaGfoD9FiL%2F6LlFcz%2BJSO2ZZtbsyELgCZyuQV0k5adeSFtgN2%2FsLsAA2OgCvKE2OSzUfk%2FbsqG9lrwBIqNRSZywq5jDYo44jJxi90g4DwRyHrJLPGFx%2BFnDDvtOWmIiXtmN2ufnc9Z&X-Amz-Signature=808e059ecba1b9f2736f62c15da93e42251a525418b30bdbd942b049cc5feddf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
