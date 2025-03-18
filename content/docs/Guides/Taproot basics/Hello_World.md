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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3GT4D2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMCoqWIsuiJxLUTZjHb%2BxiXevHnxfNKjWCCHdijB4nBAiEA2uoPGBWexw45rWxfGPzMPH7G6geDx4D3vyHdB7doClcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMNR3Kb1EJZYqdoEqCrcA19tuV7mniaS71y2QAmzO2N%2FR6b6fU5KbDSCTLypqdU6002GDWVXWf5KvRSPAJyE4oxJA2aT2zeUQCsHFocrffYJ4H5SND0FevuwDjbJ2wfE%2Bd%2BDeTKZ3ao8awks%2FCJ1d80kpu7LJzvSWcmloo5%2BMMmME6vIrzZ02Q6Y2RUp7uaD24gMVoLoU6ZKAxjLKVcuxmuDGOPDV3WN1cMK6n%2BVoD3ucAvXrZdDdpD6qkn1N2qJQKDd1FgxRfwf5nwQOxWTc1bdc%2FFlnGkite2fzeX9j6Vusal8J8sbr2RUOBz5tKW7J4lDHxEOA2YTLUAxQ3bPjNcBtvnweUacpmcAggw04ZT9MUvj9UEu7BrH8fBX%2FziR0jJchNy36gHxqxrwyeJxb7HXpEZLWaldAwTDHqHMgjhe6jvDcvujGqv5%2BjNTtcm0EsmQIZQUZAq00KnnRNiHC1evLRNHEoVxKp021reTPwSXLcqVVn26YXvHyNBmDmY%2BW4kVDMajV1YS6dmWhHmtzbOzOjDs1ah0lItsIhmtiamuuc8cvUPX3io1z%2FghZGugfKzEnImhCc078w1UP1DkWS9aUav5F2TbOzdBHYheF0yRVxqfolshPvLG0wzhAniIgfuBAkBMaW2BsxveMNfJ474GOqUB0jxL%2FHKbCjPKEov%2BjN365QB6s9pop384hm4w%2Fbis1qLkHco8BWZmZz%2F0ygH51v8jQQTUtElT2x%2FZWG7T64978%2FUqnAzdhtXRUsrZVFKJQcdMM1N%2FO6l5q3W8hEi6JHSeIWqqx5kgGGqWabk2s4fOUxpb7KwOwo1HPopB6eojNRDpo%2F8Y07gDwAySFEfqwAnwVFSS3yhbyqt9jtnY5gEUhwunMrX6&X-Amz-Signature=3423c4707253c065273d1b59e0c1e1ee150f4fc6c8ce02de6044dc308e4ebf6e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3GT4D2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMCoqWIsuiJxLUTZjHb%2BxiXevHnxfNKjWCCHdijB4nBAiEA2uoPGBWexw45rWxfGPzMPH7G6geDx4D3vyHdB7doClcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMNR3Kb1EJZYqdoEqCrcA19tuV7mniaS71y2QAmzO2N%2FR6b6fU5KbDSCTLypqdU6002GDWVXWf5KvRSPAJyE4oxJA2aT2zeUQCsHFocrffYJ4H5SND0FevuwDjbJ2wfE%2Bd%2BDeTKZ3ao8awks%2FCJ1d80kpu7LJzvSWcmloo5%2BMMmME6vIrzZ02Q6Y2RUp7uaD24gMVoLoU6ZKAxjLKVcuxmuDGOPDV3WN1cMK6n%2BVoD3ucAvXrZdDdpD6qkn1N2qJQKDd1FgxRfwf5nwQOxWTc1bdc%2FFlnGkite2fzeX9j6Vusal8J8sbr2RUOBz5tKW7J4lDHxEOA2YTLUAxQ3bPjNcBtvnweUacpmcAggw04ZT9MUvj9UEu7BrH8fBX%2FziR0jJchNy36gHxqxrwyeJxb7HXpEZLWaldAwTDHqHMgjhe6jvDcvujGqv5%2BjNTtcm0EsmQIZQUZAq00KnnRNiHC1evLRNHEoVxKp021reTPwSXLcqVVn26YXvHyNBmDmY%2BW4kVDMajV1YS6dmWhHmtzbOzOjDs1ah0lItsIhmtiamuuc8cvUPX3io1z%2FghZGugfKzEnImhCc078w1UP1DkWS9aUav5F2TbOzdBHYheF0yRVxqfolshPvLG0wzhAniIgfuBAkBMaW2BsxveMNfJ474GOqUB0jxL%2FHKbCjPKEov%2BjN365QB6s9pop384hm4w%2Fbis1qLkHco8BWZmZz%2F0ygH51v8jQQTUtElT2x%2FZWG7T64978%2FUqnAzdhtXRUsrZVFKJQcdMM1N%2FO6l5q3W8hEi6JHSeIWqqx5kgGGqWabk2s4fOUxpb7KwOwo1HPopB6eojNRDpo%2F8Y07gDwAySFEfqwAnwVFSS3yhbyqt9jtnY5gEUhwunMrX6&X-Amz-Signature=f64b84871fe22dbeffe6c450ce80746d80060456f6d28e6bc33123ec7284ce38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
