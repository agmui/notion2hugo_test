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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPBGLSZ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDRBv6gx3gjP%2FQ1blv66t254PrVEbfZeCobDVA86%2FRmvAiB6iRucNFdMUVWy2PqZJDf%2FPk18CrK4x0oOFpsUaRRlhiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FTgScq2PaseNsUp0KtwDyEPhvVK%2FzTbkF2qOWIUgPQFe%2FOlwHQo2vGoAM4X1gHl%2Fk6%2FXqD29bevZ1vEGbTomljVW4loaHraVW9af3kscHZSQIUdDKfD13SB8F%2FMgf6UifSqzYSvj%2Fxtce38h%2BBX5uLD%2BrGvaT9TaMDVgFBsPQBzdakrnbb1EQ0UjNil592l1zziCW9iSanWjTQu6uBszVgjjdnIlbdoLXuYZJGnuD1AbubzCMB6rDcY%2FODaMH%2BES7H18oGTfpierKdeDTtiv321PsE%2BUTj4EHSB%2BYfhD6UQu2b5V7wK5CCMR9TlrcvX0y9wfYOtVJ8DmdWcGxMLmPB0miImhA29nOtmu1O2laBxreIxWZWaLNwG0DDW%2BS9hI%2FXacJmoh6r3P%2BA5uYRMckr8se35CbZ6OeApIygub%2B8gGTjhFNCCsM2NPNx7827JMgwiwoFmTdub7WNerk0%2F9%2B6YTM0vjrT%2BYgfibvdUI8hSQv4XtWrkKr4rCpTa5PWMuCJdr0%2FUXT6ntgrE17saOUXURxDvju0JjxryQ9pNKeEOfcXUdQDqrX%2BX5UwQ6ZzdxJO%2FN%2FlL8AUJUyLk31%2FPbeZZ59W%2F799bD4s15n%2BVyXup0SGUi1pVu49VJpEumzhYjjyDhtX8SzjsM%2BAYws%2FGowgY6pgE9Q1r%2B3FCZShdizvqmVaK9PEh1eW04l3ElvAVYghhTG%2BgCs74mxX9x9vpwXpVZlRIVrEU8%2FqGDI2q3W14YqhY5vZ%2F13Ofcy86YRHQGwociyIqrN44s%2FGI3FTB1h%2FHAyPy0XX%2BWf7NEA7z42NN%2Fr6dkVPiiujeOxDcRawBWZIuE3pwv9%2BmifkL%2BIgwxC%2BFPr%2F1SQB7l4m6q1x2gyofrC79fqblxpWQw&X-Amz-Signature=9ead3945957a971c5b98dcdcd9814cd90da97c15bf841cd2aeffc9372274ef57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPBGLSZ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDRBv6gx3gjP%2FQ1blv66t254PrVEbfZeCobDVA86%2FRmvAiB6iRucNFdMUVWy2PqZJDf%2FPk18CrK4x0oOFpsUaRRlhiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FTgScq2PaseNsUp0KtwDyEPhvVK%2FzTbkF2qOWIUgPQFe%2FOlwHQo2vGoAM4X1gHl%2Fk6%2FXqD29bevZ1vEGbTomljVW4loaHraVW9af3kscHZSQIUdDKfD13SB8F%2FMgf6UifSqzYSvj%2Fxtce38h%2BBX5uLD%2BrGvaT9TaMDVgFBsPQBzdakrnbb1EQ0UjNil592l1zziCW9iSanWjTQu6uBszVgjjdnIlbdoLXuYZJGnuD1AbubzCMB6rDcY%2FODaMH%2BES7H18oGTfpierKdeDTtiv321PsE%2BUTj4EHSB%2BYfhD6UQu2b5V7wK5CCMR9TlrcvX0y9wfYOtVJ8DmdWcGxMLmPB0miImhA29nOtmu1O2laBxreIxWZWaLNwG0DDW%2BS9hI%2FXacJmoh6r3P%2BA5uYRMckr8se35CbZ6OeApIygub%2B8gGTjhFNCCsM2NPNx7827JMgwiwoFmTdub7WNerk0%2F9%2B6YTM0vjrT%2BYgfibvdUI8hSQv4XtWrkKr4rCpTa5PWMuCJdr0%2FUXT6ntgrE17saOUXURxDvju0JjxryQ9pNKeEOfcXUdQDqrX%2BX5UwQ6ZzdxJO%2FN%2FlL8AUJUyLk31%2FPbeZZ59W%2F799bD4s15n%2BVyXup0SGUi1pVu49VJpEumzhYjjyDhtX8SzjsM%2BAYws%2FGowgY6pgE9Q1r%2B3FCZShdizvqmVaK9PEh1eW04l3ElvAVYghhTG%2BgCs74mxX9x9vpwXpVZlRIVrEU8%2FqGDI2q3W14YqhY5vZ%2F13Ofcy86YRHQGwociyIqrN44s%2FGI3FTB1h%2FHAyPy0XX%2BWf7NEA7z42NN%2Fr6dkVPiiujeOxDcRawBWZIuE3pwv9%2BmifkL%2BIgwxC%2BFPr%2F1SQB7l4m6q1x2gyofrC79fqblxpWQw&X-Amz-Signature=73713ec0a785f8b65e82b86bc25be7047e33f3947148c922f08abdf9aa0866ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
