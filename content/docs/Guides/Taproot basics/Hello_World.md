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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4H42J%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe3qlwO5X3gUdrKuuFVTcT3aEDTWF8XJsudlwpYR3ryAiAM8wJ7IloqSXaQyw%2F9Qi8qZ1M2WDkM4bVNLidxrJdy0Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNGrEIp7iACGQ9ubuKtwDuD95CxfW%2F83VZ7vQJlcM1TjmnI1pAyjAytHuFvMTFf8IR9l3Wwfj1rz%2B4Eqgj5%2BNzg766jhooB3uS3s7p36PbPMmcDHHBpkfPGjD6UXUv%2FlLrtwj1iZc3y%2FcbRzMhj%2Bj2sOA9jWBMY0jpqtS7jHpRWup5EYqpaw8jJ%2FWQIbHV9H3ClIK5vHSe52etu8%2B5q0amdPKbyUHjYUqrpq0hVNT9VbZVV89WJFES%2FElqBXRXh8ix1bLvyGDxBDK2cdAQ0niQ3IfAmr%2B2GUuf53mocldnaAGLNRStwlic8TWl7Epm0houVMhgLZ9U0PQcAUVHritcFuO4n5%2B%2BtQbBHJ8b9QBXbMajrLpRRLOeLioO1JSHe4Bj8OZPaLRPlI6NbXfGBvwFkCrSavN0rYJfU5%2BnjM6tVnZ0QxYD1w6PTVgavDErzzaExGtLg6p%2Fy1gdKg8RLPdoA6ppO2aLHHtUHVMywB%2FonU8sI6fGhb5Vtot6OQg4nJqFkxSnzRmhAqusTpXN0klyHa5jYB65DudEHsKVMVEC%2BLpoIx%2F4KdC4zHoZrdl2IDXJ8Hjb%2Bx%2B9GQLoiSv9tS5qwFzy16gaCvqLSOYEjIp2PSPd1DHPPAGjOpCzJRa2SdPh%2B61ERkpZ2W6nm4wmL%2B4vQY6pgFOyhT7%2BXbYH0E6YwOd6cE0HF8GB6DyVB4h5deZ0y2BX%2BfyYkacvEiA3bEPzTwFQ9YEW2ew3VpRGC9KUSX2pYPSCTlAye4BlftZVWQekUq1hcrY9FiYWf%2B5MFJuEiQTtV2vW37vI9TJhDpfMc6cH3KoSYvsX0oXAdgdQz%2B6ia4I0YyBBjjGzLJ4bznOAHPC8JY5hebatNjCNVUlL1SrQYO7tCP1%2BIAd&X-Amz-Signature=f39612e78b1cae22ac98c6ac512b3206117d5e2158cc540b3033dcb716382f18&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR4H42J%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe3qlwO5X3gUdrKuuFVTcT3aEDTWF8XJsudlwpYR3ryAiAM8wJ7IloqSXaQyw%2F9Qi8qZ1M2WDkM4bVNLidxrJdy0Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNGrEIp7iACGQ9ubuKtwDuD95CxfW%2F83VZ7vQJlcM1TjmnI1pAyjAytHuFvMTFf8IR9l3Wwfj1rz%2B4Eqgj5%2BNzg766jhooB3uS3s7p36PbPMmcDHHBpkfPGjD6UXUv%2FlLrtwj1iZc3y%2FcbRzMhj%2Bj2sOA9jWBMY0jpqtS7jHpRWup5EYqpaw8jJ%2FWQIbHV9H3ClIK5vHSe52etu8%2B5q0amdPKbyUHjYUqrpq0hVNT9VbZVV89WJFES%2FElqBXRXh8ix1bLvyGDxBDK2cdAQ0niQ3IfAmr%2B2GUuf53mocldnaAGLNRStwlic8TWl7Epm0houVMhgLZ9U0PQcAUVHritcFuO4n5%2B%2BtQbBHJ8b9QBXbMajrLpRRLOeLioO1JSHe4Bj8OZPaLRPlI6NbXfGBvwFkCrSavN0rYJfU5%2BnjM6tVnZ0QxYD1w6PTVgavDErzzaExGtLg6p%2Fy1gdKg8RLPdoA6ppO2aLHHtUHVMywB%2FonU8sI6fGhb5Vtot6OQg4nJqFkxSnzRmhAqusTpXN0klyHa5jYB65DudEHsKVMVEC%2BLpoIx%2F4KdC4zHoZrdl2IDXJ8Hjb%2Bx%2B9GQLoiSv9tS5qwFzy16gaCvqLSOYEjIp2PSPd1DHPPAGjOpCzJRa2SdPh%2B61ERkpZ2W6nm4wmL%2B4vQY6pgFOyhT7%2BXbYH0E6YwOd6cE0HF8GB6DyVB4h5deZ0y2BX%2BfyYkacvEiA3bEPzTwFQ9YEW2ew3VpRGC9KUSX2pYPSCTlAye4BlftZVWQekUq1hcrY9FiYWf%2B5MFJuEiQTtV2vW37vI9TJhDpfMc6cH3KoSYvsX0oXAdgdQz%2B6ia4I0YyBBjjGzLJ4bznOAHPC8JY5hebatNjCNVUlL1SrQYO7tCP1%2BIAd&X-Amz-Signature=23dcd7e36e96ae23b0ca8b97427d862e3cf189f924175193d1a1dc101b566cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
