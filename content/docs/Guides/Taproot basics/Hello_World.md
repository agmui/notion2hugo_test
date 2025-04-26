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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTZLG6S%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvuRKqFCTS%2FXXIro7UnmpE7qRpwBkjx28WH47ogDYFNwIhAOFVsZQHgSLPWygU61NALID%2Bn1oeHHVO1LOPsLQIKroTKv8DCEwQABoMNjM3NDIzMTgzODA1IgzVx2zqmxLD%2FlZIM34q3AP15YUka%2FlXMJnHK2lNH0X3afR1UkMz8ip92niG6NpLWbBedwZ8GFfkzCCL4YIfi%2B5IERTfqFAzKDnS%2BlDjzo2feRwmRyOoqyRu0Q3DJyekL8B1qUGW579ZGazntgMsD1eIxzAfHV9nuvfDFiLpOuRwTo9ThDCpIb1VI7EmJogiYPR7fguRvX%2FR0moJZpPlma%2BXlUtwNecsXVBcWC%2Fn3WJTWBSwDgrVFLJqyyo3geZpSYLmz7pr4bGp%2F%2Bt49rn5wPC3kU4Sr4XtO0gy2HX3faxx3pSITIEMi8%2F4sd8%2B4oQmKztRSJUvttgqn9jJKhmmxEhFqqZufe8OrAc7nuCntPyYjC%2B%2FajEkfva9ZHGqYZRoCNvPrhqLh4jlG2%2Bc72jgVck431oma5TR3WONTFeovtsfyJGuBy%2F22ongQ0IT7kb5DqSZo8qaSebFNFRTvYMK9Ll0lxikHCzGz%2BKJghSjy6kcKf%2Fu6MUfn4TQgcXka9Go8M8DovqQw3qH5XBwjmhXtWheqvSGd5C277qXRTmaqy20ykxfpi6zUbrmyWTr7sywXrcyuDdy4p9tHlKZrWUgHnnxUTTjbrMaJdd7z0hXqv9PS7jYxYhl%2F7ifbvYiRsdrn20Qy%2BTN2had9qGUdDDJ3bTABjqkAcPpLBKRHqIhRoc%2F5DEf0QWrydPaJ4xruHE9KiUFy74T1O4I%2BQaG8VL8YFbzZ6OXbN1Xi%2Fi7QqOscVtGwFb%2ByRFuzEGs014j87bG2oadfdxLaUhFA1%2FyBVkkbHdSWLDutp8ddvCbAPOh4xH3M2pJUC23a17t9kNcjJMAXGFitQ8njicDnUNj5ey1ST2LnFesxUQnISO9DpV0qSjF9ApxWbGU8dFC&X-Amz-Signature=18568c62ee6653c8d383d4e56343b734206754153acc8c4b914d70e88d61dfe8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTZLG6S%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvuRKqFCTS%2FXXIro7UnmpE7qRpwBkjx28WH47ogDYFNwIhAOFVsZQHgSLPWygU61NALID%2Bn1oeHHVO1LOPsLQIKroTKv8DCEwQABoMNjM3NDIzMTgzODA1IgzVx2zqmxLD%2FlZIM34q3AP15YUka%2FlXMJnHK2lNH0X3afR1UkMz8ip92niG6NpLWbBedwZ8GFfkzCCL4YIfi%2B5IERTfqFAzKDnS%2BlDjzo2feRwmRyOoqyRu0Q3DJyekL8B1qUGW579ZGazntgMsD1eIxzAfHV9nuvfDFiLpOuRwTo9ThDCpIb1VI7EmJogiYPR7fguRvX%2FR0moJZpPlma%2BXlUtwNecsXVBcWC%2Fn3WJTWBSwDgrVFLJqyyo3geZpSYLmz7pr4bGp%2F%2Bt49rn5wPC3kU4Sr4XtO0gy2HX3faxx3pSITIEMi8%2F4sd8%2B4oQmKztRSJUvttgqn9jJKhmmxEhFqqZufe8OrAc7nuCntPyYjC%2B%2FajEkfva9ZHGqYZRoCNvPrhqLh4jlG2%2Bc72jgVck431oma5TR3WONTFeovtsfyJGuBy%2F22ongQ0IT7kb5DqSZo8qaSebFNFRTvYMK9Ll0lxikHCzGz%2BKJghSjy6kcKf%2Fu6MUfn4TQgcXka9Go8M8DovqQw3qH5XBwjmhXtWheqvSGd5C277qXRTmaqy20ykxfpi6zUbrmyWTr7sywXrcyuDdy4p9tHlKZrWUgHnnxUTTjbrMaJdd7z0hXqv9PS7jYxYhl%2F7ifbvYiRsdrn20Qy%2BTN2had9qGUdDDJ3bTABjqkAcPpLBKRHqIhRoc%2F5DEf0QWrydPaJ4xruHE9KiUFy74T1O4I%2BQaG8VL8YFbzZ6OXbN1Xi%2Fi7QqOscVtGwFb%2ByRFuzEGs014j87bG2oadfdxLaUhFA1%2FyBVkkbHdSWLDutp8ddvCbAPOh4xH3M2pJUC23a17t9kNcjJMAXGFitQ8njicDnUNj5ey1ST2LnFesxUQnISO9DpV0qSjF9ApxWbGU8dFC&X-Amz-Signature=616e9498ebd61c510335c39a110189ae4b6444354babcd04f5c0fe7bb07b4e89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
