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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4SDDCK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAUCL3zbnkhE9hTvxC8dBIWgdI%2FOLEWjb7HjpKQTptK5AiB4%2F4HcnuUKvtMAgECqFJOLwBCJo2aVEC9EoT%2BTgL%2FZ8Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMBHIopACQlLyoTy38KtwDy4nmDoTmevwL%2F3Us0nJ0YDNxCMwqSRGEAfVP%2BqWUYsvPpoZ13ohcg8Ha9g65vljHm5xqmdj0LtuKzCaVFTSE1RtnQ0ToFTk94LxxDdv4BSVXdSnKCuGgUeHmRgb7h7rxK06nG3qdsyrhO1lXm83iOIRw8%2FsfVz45J2jYBHsEBImkd8Wf%2F7xeuQyxHTlA6%2BIy64Zv2bplM8ShhYrRm%2BrawparYxT8MPG1qAR1UsqFkuyyz%2BTWIF2aarmEE31vVNtESCQK2hm3lR2T%2Fif3vK%2B2z3cXvEuI5VeU50HefNY7fVpshk6rYPrvFrc9eHvr0cbg4fOrpTuPAHFKlG6geydyhedwE5rF6fIvPItW6fF6cBf6b4HhyriTDdsNlP9j0cIi%2Fw6q5lzJqg%2B0NFnX5GqfTlF2ZdPlu586O%2BjYaO4JYuUPbLN3M8t0TwOMiQ49IKcGOdQRGLi9Da1AwzW%2BG7q95DTxaVF5SO%2FL1OLaVeb7w3hY9iruJHdTKNf2dOLhpND78vXlptBATCzyJFLsUW9WuXdpexn%2Ft3vR9fHzJxH3I54i%2FQcwFtB5EGLkFw535qNdsoxunw7mqXB%2FrtNvhGjdQt27Wz0yBYmtvUv1SLeu5%2BbUMQ0yETT36iP694Qw3%2FKyvgY6pgFlpjyanazOLn9LESMwI7s3FX6O96wtEPlamzj5WFI4DbpW5nKDtzBr5UnrSya35lNAV6RjWhNdiiwDEvW1RLnWJ7D49zlSk8f7PEiJ0C6wGQmIAD98HV%2B1j%2FIJRnkjSOtomozy2I0JHexR1PFnAmntGXO0R1AoYDIz5yN%2FZ0Fn7ZylJOPILsEdmttrCLUWdgaJNTDOd8q6%2BIGSCdT8qwGLKQaxRrCb&X-Amz-Signature=75c890773df81c0681d66028ac3e5a24e0fc14719634aa89c11f6e830cdf4f01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4SDDCK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAUCL3zbnkhE9hTvxC8dBIWgdI%2FOLEWjb7HjpKQTptK5AiB4%2F4HcnuUKvtMAgECqFJOLwBCJo2aVEC9EoT%2BTgL%2FZ8Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMBHIopACQlLyoTy38KtwDy4nmDoTmevwL%2F3Us0nJ0YDNxCMwqSRGEAfVP%2BqWUYsvPpoZ13ohcg8Ha9g65vljHm5xqmdj0LtuKzCaVFTSE1RtnQ0ToFTk94LxxDdv4BSVXdSnKCuGgUeHmRgb7h7rxK06nG3qdsyrhO1lXm83iOIRw8%2FsfVz45J2jYBHsEBImkd8Wf%2F7xeuQyxHTlA6%2BIy64Zv2bplM8ShhYrRm%2BrawparYxT8MPG1qAR1UsqFkuyyz%2BTWIF2aarmEE31vVNtESCQK2hm3lR2T%2Fif3vK%2B2z3cXvEuI5VeU50HefNY7fVpshk6rYPrvFrc9eHvr0cbg4fOrpTuPAHFKlG6geydyhedwE5rF6fIvPItW6fF6cBf6b4HhyriTDdsNlP9j0cIi%2Fw6q5lzJqg%2B0NFnX5GqfTlF2ZdPlu586O%2BjYaO4JYuUPbLN3M8t0TwOMiQ49IKcGOdQRGLi9Da1AwzW%2BG7q95DTxaVF5SO%2FL1OLaVeb7w3hY9iruJHdTKNf2dOLhpND78vXlptBATCzyJFLsUW9WuXdpexn%2Ft3vR9fHzJxH3I54i%2FQcwFtB5EGLkFw535qNdsoxunw7mqXB%2FrtNvhGjdQt27Wz0yBYmtvUv1SLeu5%2BbUMQ0yETT36iP694Qw3%2FKyvgY6pgFlpjyanazOLn9LESMwI7s3FX6O96wtEPlamzj5WFI4DbpW5nKDtzBr5UnrSya35lNAV6RjWhNdiiwDEvW1RLnWJ7D49zlSk8f7PEiJ0C6wGQmIAD98HV%2B1j%2FIJRnkjSOtomozy2I0JHexR1PFnAmntGXO0R1AoYDIz5yN%2FZ0Fn7ZylJOPILsEdmttrCLUWdgaJNTDOd8q6%2BIGSCdT8qwGLKQaxRrCb&X-Amz-Signature=b1024bd40b74f2b6b3ca8f21c566324b53ffa2f2e4e6f7b90d95211d5e9168e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
