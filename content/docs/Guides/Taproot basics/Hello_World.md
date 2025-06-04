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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEDULUV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICpiJmfrAjdXDjJogt06yCm3WVdo27Cnt9unIXQjOZgYAiEAq9ryFDooc1tiXJXripUgYOnr8PtoF1y9q1nn8w8i%2B3Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHloFCcDb%2BJzSEoYoSrcA%2FbjzLg3p4ncNye9WvJjNTW2V3aHuu%2FZ3sb3M69vmybB5637CStKOWrpLBhpGCdV1vwQxrLj8eXA0ep3TZpy5jX50fsZOtLU%2Bm6le2vB9NnZB94W1o%2BEfQ9beIzilRfCiP3HjFg0Q3Ph0HWZ9mkrHzdh6dAyobXtDidQ%2B3iR7VFVqZtQ1MAU%2F%2BPGnEDeJjFZaerbJ0ZncmD5yVMevUn%2BAWmfqgsuBCpf3A9%2F59h9cEn3Wk93RtfgTfpRapP%2FyUmEwX%2BH%2FfYvy9MvY45DH5WNXNGw83HtP7pb35p20xBFLUOTauRVnlRn7Q1u45gFLI%2BklIda6k%2Br%2BrhB3H6XtzAJjmLZ7D8WwKsonhGBG%2FmnAVUBXzwDHHIRPtM%2B5sQ1H6yBLHUpVm%2Bychj5pW82vUVxTa1ZEMqnnWw3%2BQZvv4zOvCUQdlcuIPcLUeMUiczEoHZeMT%2FsrxEUEkRMWPqB%2BXebqKOuGpwT76iRxvtE2C%2BG4j3pdsf%2Fdun0dx3DE8LSazl5644epCQH483PB2CcSnmPJCb7SoDM7wMrSPW8G5EW%2FKE%2Fb1%2FVwivYCxXZZ760aAvQzJO8Y%2Fl0222CJWH4ZNQIs69CV0%2FJZw7JgpLOZCfYBxvfPxLu45HrLyReabuvMJ%2BHgsIGOqUBlZ74IffQj6%2FRjyYbmWCG7Uy4TW47Wzorj3w3YrC1WXenynVdVz0Kea0kLM6QpzdKu2rXdmcPIaiXRdLWfiHF9pCmMetB8zHQjvgDacrP2TqQUKR6dwfbVVmahD8I6Dj7HMeFsAG%2BHPXVSDawx7p1KL9UEtVZ0BA5vJlQaUMl7Eaa1oFWPXlLCWdNG4qmE%2B8Rmm6gJap4PfKKRjAyfRLLMWPl%2BF7A&X-Amz-Signature=9732f437a3e705d7abaf9e3bb765a2baea3c178ff9780f97d02bd0664fca29f5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEDULUV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICpiJmfrAjdXDjJogt06yCm3WVdo27Cnt9unIXQjOZgYAiEAq9ryFDooc1tiXJXripUgYOnr8PtoF1y9q1nn8w8i%2B3Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHloFCcDb%2BJzSEoYoSrcA%2FbjzLg3p4ncNye9WvJjNTW2V3aHuu%2FZ3sb3M69vmybB5637CStKOWrpLBhpGCdV1vwQxrLj8eXA0ep3TZpy5jX50fsZOtLU%2Bm6le2vB9NnZB94W1o%2BEfQ9beIzilRfCiP3HjFg0Q3Ph0HWZ9mkrHzdh6dAyobXtDidQ%2B3iR7VFVqZtQ1MAU%2F%2BPGnEDeJjFZaerbJ0ZncmD5yVMevUn%2BAWmfqgsuBCpf3A9%2F59h9cEn3Wk93RtfgTfpRapP%2FyUmEwX%2BH%2FfYvy9MvY45DH5WNXNGw83HtP7pb35p20xBFLUOTauRVnlRn7Q1u45gFLI%2BklIda6k%2Br%2BrhB3H6XtzAJjmLZ7D8WwKsonhGBG%2FmnAVUBXzwDHHIRPtM%2B5sQ1H6yBLHUpVm%2Bychj5pW82vUVxTa1ZEMqnnWw3%2BQZvv4zOvCUQdlcuIPcLUeMUiczEoHZeMT%2FsrxEUEkRMWPqB%2BXebqKOuGpwT76iRxvtE2C%2BG4j3pdsf%2Fdun0dx3DE8LSazl5644epCQH483PB2CcSnmPJCb7SoDM7wMrSPW8G5EW%2FKE%2Fb1%2FVwivYCxXZZ760aAvQzJO8Y%2Fl0222CJWH4ZNQIs69CV0%2FJZw7JgpLOZCfYBxvfPxLu45HrLyReabuvMJ%2BHgsIGOqUBlZ74IffQj6%2FRjyYbmWCG7Uy4TW47Wzorj3w3YrC1WXenynVdVz0Kea0kLM6QpzdKu2rXdmcPIaiXRdLWfiHF9pCmMetB8zHQjvgDacrP2TqQUKR6dwfbVVmahD8I6Dj7HMeFsAG%2BHPXVSDawx7p1KL9UEtVZ0BA5vJlQaUMl7Eaa1oFWPXlLCWdNG4qmE%2B8Rmm6gJap4PfKKRjAyfRLLMWPl%2BF7A&X-Amz-Signature=8a0a54ae461dc1797ad1e9285fcbaa099b5a298df74275fa71cbe0b060f1d9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
