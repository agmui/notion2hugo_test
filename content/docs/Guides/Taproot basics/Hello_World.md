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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTDMMER%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVle89zAtSTx%2FLqG4xEUWx29zAFZcF2tCnk5CZhGgE1AiBlx55PEOgKDGVYlovG2ZKUIGeGhduAh1aLreNJGaIy6Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMWbRWSbvXuYoF70oQKtwDYc2FsVqgW9iwXRmdgl66OgnvIfKcnYYKy0qFj8Jby4gtRjXCmeTfc6RcoLzQr8gKxqv5%2B6DInysmp731yd129Y54fnCniTk3Fc58StntkZpKNu09JN%2B8z8U913BCLYt2ul26L2KlGsljl8jd6TPW7fCp0nmqI2a50ZSw2Cpj0wroHk5E40GUNRy%2B82DzbhTSIBbya1VtzNG%2FaXhyj2rJTJx8A4wKCG4x2WUK7iIUJfjcYSvc6HbApoPdHO0Gdk2HgBswf9VxOMSODk2tzla8zUogAwb%2Fjnh89EL1QgtGKZGOS4ReEc1Y1kXNuIEL7wes9urNZs038tKYXojCntWeRNKcfssURl7u7zVol00crDqWqknjgHNQl3dPc4F54zrXuqVPSyDHq46RgJiYPmvHZ7jxN8Rd9%2BYYpxsM1KF34y%2BpYqsmyy%2FY0EVMwQz3vYInTYPf80lgY7adQOc%2B2Qlk2%2FMd5HrE%2Fxgm2B6z70pitClPAU9IWyCC79fsySIT5w3BpbymiP6CUyebq%2FZFGeJnrjxkrYgVWiIgQelOv%2FTW2kldgHqddqD4BtVlu8Ao8c3LyUUJriKb3k%2FiYpkIGy8F1N1pwSPoYTfNP7WWA88C8cV8xR3nkF48F7Glc1ow%2BeOtwAY6pgFqxEQ8mRobl50E%2BtfnL8HjDfgEguNYO2y2%2FOZwqZaEngqjBsHuOIswe%2FiydS6JlTrpgzKpliSAtTa0DdPnm6UsjgrX42ZFloSXxY1nzbv42ufxtdbhTH9p3ozQtldhySwk2VGDzCld01EbIVIkee1YGHzFMvZMe8cu7PgsRONGKNx4Ytxe%2FgMW%2Bi1Q741bSWuh%2FiVWY4XeIOJHalecFbWr10UpuiNQ&X-Amz-Signature=7ae23f05ad03b30e27e12e5184734cfdff01eecaa55edf27cc20e54a2e7973b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTDMMER%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVle89zAtSTx%2FLqG4xEUWx29zAFZcF2tCnk5CZhGgE1AiBlx55PEOgKDGVYlovG2ZKUIGeGhduAh1aLreNJGaIy6Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMWbRWSbvXuYoF70oQKtwDYc2FsVqgW9iwXRmdgl66OgnvIfKcnYYKy0qFj8Jby4gtRjXCmeTfc6RcoLzQr8gKxqv5%2B6DInysmp731yd129Y54fnCniTk3Fc58StntkZpKNu09JN%2B8z8U913BCLYt2ul26L2KlGsljl8jd6TPW7fCp0nmqI2a50ZSw2Cpj0wroHk5E40GUNRy%2B82DzbhTSIBbya1VtzNG%2FaXhyj2rJTJx8A4wKCG4x2WUK7iIUJfjcYSvc6HbApoPdHO0Gdk2HgBswf9VxOMSODk2tzla8zUogAwb%2Fjnh89EL1QgtGKZGOS4ReEc1Y1kXNuIEL7wes9urNZs038tKYXojCntWeRNKcfssURl7u7zVol00crDqWqknjgHNQl3dPc4F54zrXuqVPSyDHq46RgJiYPmvHZ7jxN8Rd9%2BYYpxsM1KF34y%2BpYqsmyy%2FY0EVMwQz3vYInTYPf80lgY7adQOc%2B2Qlk2%2FMd5HrE%2Fxgm2B6z70pitClPAU9IWyCC79fsySIT5w3BpbymiP6CUyebq%2FZFGeJnrjxkrYgVWiIgQelOv%2FTW2kldgHqddqD4BtVlu8Ao8c3LyUUJriKb3k%2FiYpkIGy8F1N1pwSPoYTfNP7WWA88C8cV8xR3nkF48F7Glc1ow%2BeOtwAY6pgFqxEQ8mRobl50E%2BtfnL8HjDfgEguNYO2y2%2FOZwqZaEngqjBsHuOIswe%2FiydS6JlTrpgzKpliSAtTa0DdPnm6UsjgrX42ZFloSXxY1nzbv42ufxtdbhTH9p3ozQtldhySwk2VGDzCld01EbIVIkee1YGHzFMvZMe8cu7PgsRONGKNx4Ytxe%2FgMW%2Bi1Q741bSWuh%2FiVWY4XeIOJHalecFbWr10UpuiNQ&X-Amz-Signature=f3c08ecd1320ac6180f46a476a0ebf5a00225ef202f898364fe262a8c173d02c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
