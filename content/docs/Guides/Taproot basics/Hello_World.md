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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635C42NUD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCf64SGnFfd4ec6CGqbzgBY5pq4qHnl9BOFYn6qiUc3vgIhAJC4vSjIQEEBWaEmxOvY1%2FWlQ1xDbcc40%2F4Q0juCHsLaKv8DCE4QABoMNjM3NDIzMTgzODA1IgxMh%2F3EA8S7aTJuKk4q3ANG4BcE0DlqFXpDbcfN3OOfYp4snvBZdUVGslvBDvghgfg9TSpJjJHgIQ3Z4NwqtNXVSWyvABxnCA6aQnRBFstqDTqrmCw8pFwqPd4FTLMEMksPKsvjaNShJHnPziptJx%2BJ4WCEEfC8Baw8EZMOwkmB%2FOhBELyYaROAwNR2BI42PlAurCf5Q3wGACp4DubxPIh2KrH8hBCQopp23byjXZwtHj4s8pvJ0jwx%2FYBSZhNccTlJSXrCya6yxGFSHfjJPEh3c%2B2qaqRVOsDkHgQyUWhvHDCJh8cym3WpFMAEMhlJL3DkSy%2FI0Sx%2F4UvWo2UF20rEr3a2MbZ4tYhZKaIdntsPSmfC2E35s%2FbHnyd%2Fjxm7VXNNH4I%2Ftht67X2nl8T0OMqA%2B6tKZ5gdo8p7u7flggdfSI3%2Bt4x32CytgLGsXPEVVrLnIRbgZihEmcSFp4qb8BE707fLRfuYMRo%2BeVPjDFgSBmH3PZ2G%2F1xJU1z%2B5r8pMr0RR%2By9sJd%2BYCnhfJX7f4EY2W%2B6ooQVHbVXmzosSv2XExLyrqww8WGacYDOqRovSDhqgzkCV61Jo9Tsi94H969RhKVVgAoQ1L3JweRi%2F%2FDJNgHTw5P9fHlf9I0cUuCAok1s3xdV1GbTF5%2BsKDDhwMTEBjqkAbWR10r%2Bejd7iANErMVFB5acbhJJjgf6knV95IpW41WQNuzJUTUZYDe6%2Bm%2Fr4vc7FokQsFiSjH98us6EQmbW2AczQSEJwrJ7Q4SIiQPkvcd7AkyZn%2BJKp4Ut0F%2B9VJhqSVvObu%2FOUQkRwi5TSgcidx6aaO0o4hmyoYcehxHqchF1TrDCqeB3r4EvlBVhGz5j5RJuLU8fsFGDkPSMXP1n1Xg1%2FOZy&X-Amz-Signature=495eb7d5e1559a0ea6082bd64375572fc9e2bcc0c0da81a5564b5c113ecbd481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635C42NUD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCf64SGnFfd4ec6CGqbzgBY5pq4qHnl9BOFYn6qiUc3vgIhAJC4vSjIQEEBWaEmxOvY1%2FWlQ1xDbcc40%2F4Q0juCHsLaKv8DCE4QABoMNjM3NDIzMTgzODA1IgxMh%2F3EA8S7aTJuKk4q3ANG4BcE0DlqFXpDbcfN3OOfYp4snvBZdUVGslvBDvghgfg9TSpJjJHgIQ3Z4NwqtNXVSWyvABxnCA6aQnRBFstqDTqrmCw8pFwqPd4FTLMEMksPKsvjaNShJHnPziptJx%2BJ4WCEEfC8Baw8EZMOwkmB%2FOhBELyYaROAwNR2BI42PlAurCf5Q3wGACp4DubxPIh2KrH8hBCQopp23byjXZwtHj4s8pvJ0jwx%2FYBSZhNccTlJSXrCya6yxGFSHfjJPEh3c%2B2qaqRVOsDkHgQyUWhvHDCJh8cym3WpFMAEMhlJL3DkSy%2FI0Sx%2F4UvWo2UF20rEr3a2MbZ4tYhZKaIdntsPSmfC2E35s%2FbHnyd%2Fjxm7VXNNH4I%2Ftht67X2nl8T0OMqA%2B6tKZ5gdo8p7u7flggdfSI3%2Bt4x32CytgLGsXPEVVrLnIRbgZihEmcSFp4qb8BE707fLRfuYMRo%2BeVPjDFgSBmH3PZ2G%2F1xJU1z%2B5r8pMr0RR%2By9sJd%2BYCnhfJX7f4EY2W%2B6ooQVHbVXmzosSv2XExLyrqww8WGacYDOqRovSDhqgzkCV61Jo9Tsi94H969RhKVVgAoQ1L3JweRi%2F%2FDJNgHTw5P9fHlf9I0cUuCAok1s3xdV1GbTF5%2BsKDDhwMTEBjqkAbWR10r%2Bejd7iANErMVFB5acbhJJjgf6knV95IpW41WQNuzJUTUZYDe6%2Bm%2Fr4vc7FokQsFiSjH98us6EQmbW2AczQSEJwrJ7Q4SIiQPkvcd7AkyZn%2BJKp4Ut0F%2B9VJhqSVvObu%2FOUQkRwi5TSgcidx6aaO0o4hmyoYcehxHqchF1TrDCqeB3r4EvlBVhGz5j5RJuLU8fsFGDkPSMXP1n1Xg1%2FOZy&X-Amz-Signature=29020415b4322fab4aa2a207548545569caf6d0d2a3b5d7f542d7ccf1f2908d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
