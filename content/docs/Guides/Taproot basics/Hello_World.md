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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YBUTH7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbk18paI1KVOUqWpkrFtRFRn8cO1gTrUT4IjjXsKLfZAiEAqI556YH3rsXynisld2KSUzFH8srFy%2Bai6Em2ZiZNMQQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOVhZstR18gS9%2FKAaSrcAyqiGZ8ThDEbZctye6Dk12TRwNS9d53BwofOes1h9Kve3LzMRVSgcR2L6gU0IoH30Il3xVgosJGMZDpQLs3G8pV8AH2g4ExMJKVVf2qbSPXYuX5rOh2iO85ul7NuqVtRjHjUSxBMJ%2Bq%2BeNn7h6kD6e1B7LmDnEtkN4aomX2jcZ3aw3QX60hyIWLmDLna2BXidBRTIV1BMDKbxyXcyCTc7Dng56m%2BpWylqaWs4hrEZ8fJw5N%2BuzmElCIO7YJzgJyvwLfTZmBqSC84%2B6zjM2tXSZmeZyO2qDLja4zDiAg6ZKb58OpLHxN4BhAHT9wywykQuz7k0yrFi%2FZrbX2sUllb2V8Z8DRjcW2V6UyDtS7g3Q2QBJa4Vb2cOF13Id7ggp3nIlX1z6giO%2FxTdL4Vrfl68AbTiUayH1UgTjlFAayKTMNXUwMNpVZAO99Ixehe%2FoXGxy9rdmZZDC94IPM32F7KWHHwdp8DNJqSRxHAqF1QRZdIQ07%2Bq%2FEymyeg%2FIkKOTQwEam8RJTCmjoMuVzVcqUAvr4XlpBK863BVS5dG8AlMbKlkJM8mVUPdAEdsr6Xnqn1dYMYm%2BTezADQjb2YInqgiuqjNY%2Bgf9lIIfHUZPWTvdAi5Ej03KfVtWOabUY7MPfr9r8GOqUBxvDqi3tPIG9zgZEctSA3NSm1jlHyI%2FjF5LHk5D69FexPsG5DtiWVPchsIY4EiXnfp%2BzMX3j1hCcZfLDmVKHhXt2za2%2FHI%2FjJ16CUzs23picRcZyGQ1Qw6xBOnrhjBtn%2F0WpWpMiRtHZ1qocxP5LVJT8fK8dF1N3Jg9G8HrCgA2kiYuypu02cAis70gPfrbUjhhVE2NPZtU36znMlkucJ5%2Fl3N9NF&X-Amz-Signature=b7084255eb178bab0557420235ce0e955b359bd4fab543200c24d154158a1a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YBUTH7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbk18paI1KVOUqWpkrFtRFRn8cO1gTrUT4IjjXsKLfZAiEAqI556YH3rsXynisld2KSUzFH8srFy%2Bai6Em2ZiZNMQQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOVhZstR18gS9%2FKAaSrcAyqiGZ8ThDEbZctye6Dk12TRwNS9d53BwofOes1h9Kve3LzMRVSgcR2L6gU0IoH30Il3xVgosJGMZDpQLs3G8pV8AH2g4ExMJKVVf2qbSPXYuX5rOh2iO85ul7NuqVtRjHjUSxBMJ%2Bq%2BeNn7h6kD6e1B7LmDnEtkN4aomX2jcZ3aw3QX60hyIWLmDLna2BXidBRTIV1BMDKbxyXcyCTc7Dng56m%2BpWylqaWs4hrEZ8fJw5N%2BuzmElCIO7YJzgJyvwLfTZmBqSC84%2B6zjM2tXSZmeZyO2qDLja4zDiAg6ZKb58OpLHxN4BhAHT9wywykQuz7k0yrFi%2FZrbX2sUllb2V8Z8DRjcW2V6UyDtS7g3Q2QBJa4Vb2cOF13Id7ggp3nIlX1z6giO%2FxTdL4Vrfl68AbTiUayH1UgTjlFAayKTMNXUwMNpVZAO99Ixehe%2FoXGxy9rdmZZDC94IPM32F7KWHHwdp8DNJqSRxHAqF1QRZdIQ07%2Bq%2FEymyeg%2FIkKOTQwEam8RJTCmjoMuVzVcqUAvr4XlpBK863BVS5dG8AlMbKlkJM8mVUPdAEdsr6Xnqn1dYMYm%2BTezADQjb2YInqgiuqjNY%2Bgf9lIIfHUZPWTvdAi5Ej03KfVtWOabUY7MPfr9r8GOqUBxvDqi3tPIG9zgZEctSA3NSm1jlHyI%2FjF5LHk5D69FexPsG5DtiWVPchsIY4EiXnfp%2BzMX3j1hCcZfLDmVKHhXt2za2%2FHI%2FjJ16CUzs23picRcZyGQ1Qw6xBOnrhjBtn%2F0WpWpMiRtHZ1qocxP5LVJT8fK8dF1N3Jg9G8HrCgA2kiYuypu02cAis70gPfrbUjhhVE2NPZtU36znMlkucJ5%2Fl3N9NF&X-Amz-Signature=a3c8a9d0213c8b429dd51bed596ed8cdfce435a52923c9df7414a283b3452174&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
