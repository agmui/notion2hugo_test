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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634Y37NPB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkyvAyLMjVUG1jBiCurx%2Boef5GtUj8Mfpshtjn5yta1AIgO2hcm2FshMBEir923POkixFcj8kHJDNWa7PYzlYUm%2FIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkZ%2FaYffOzjCjJm2SrcAxgvi049yERbTHuHEQZIsegSOtMaqvTzp2hXcB5OFI53g5%2FTmDdy8fSj7z1ozcco2VTtqwvD8KEl8VFZTK7kjg3JUbTApfMonjEpfYH2%2Fo%2FN1sXRFk%2FAWFRwb1syHlRKhBm8LfhsNyvF%2Bit7x9j8%2BhOGTZ5cgN5lZH5CttTMBheKWSLv9vAARsAEK221WqLxxthjiFxvLZvKWBCB86F%2B1BySpBLTJuu1UzEzD9YiwYjp5ob59BX0PMhXU%2Bb2cKCddM495IGnG2yiSo%2BakV1%2B5qPXc2ncAuZcxDmS2xQXci2YJnr%2BGiHsNOqnGUkAE%2F0B5%2Byw0oop70R6ha6sFKLdY3tXjO7USkqmzDkg8orwQd7YC39vKTZYw1978I%2BYrxLi5OddCayKZloYaeNrONtx%2B%2BrkRhDd5m%2FN6mLAYvnB6SFTC3zj7sCK2eP2R%2F2722SOpkhPg7XWMZd2DaH1JTGn7u11k7IEx89fHv%2BuKMyqlUya1QJYHrfgWPIu3wSzdiwEXq9bZioYYZmC2uj7ztoO%2BfSVGul4AthPd6FTNJV%2FhUDbwWx6VrgfABVHlngyx4PH3q8tsFkFXnc4jSY9AR7dpeOw2%2Bxu8%2B99C6F3tCcYqtxWZLL%2FeB9RukXcRdJCMOyoxcMGOqUBXn2tgoNvxMldH7ogMNG%2FBixpYm526%2FzM%2FCS4QmEl32hu%2BGBC%2B6iH0NSbuqK10YmY0qP8NbbXqY75P3467f21F8ydhUGEHgBXzVuYypCd5ce3vS%2BabwtrVWs9RGwUD34Nojjg9sN7PZCWP%2F2BAqzpj%2FK%2FJT%2FZI4SB88NSH%2Bs1L0i7uzutX3CLhDmFci3IR0Fz50a%2FHAYSpQlWkjIpMth4qOee6cey&X-Amz-Signature=044514389327ccc0704d95f2151d8782a5dbdc936c7d38b4eee00704dd25ced1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634Y37NPB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkyvAyLMjVUG1jBiCurx%2Boef5GtUj8Mfpshtjn5yta1AIgO2hcm2FshMBEir923POkixFcj8kHJDNWa7PYzlYUm%2FIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkZ%2FaYffOzjCjJm2SrcAxgvi049yERbTHuHEQZIsegSOtMaqvTzp2hXcB5OFI53g5%2FTmDdy8fSj7z1ozcco2VTtqwvD8KEl8VFZTK7kjg3JUbTApfMonjEpfYH2%2Fo%2FN1sXRFk%2FAWFRwb1syHlRKhBm8LfhsNyvF%2Bit7x9j8%2BhOGTZ5cgN5lZH5CttTMBheKWSLv9vAARsAEK221WqLxxthjiFxvLZvKWBCB86F%2B1BySpBLTJuu1UzEzD9YiwYjp5ob59BX0PMhXU%2Bb2cKCddM495IGnG2yiSo%2BakV1%2B5qPXc2ncAuZcxDmS2xQXci2YJnr%2BGiHsNOqnGUkAE%2F0B5%2Byw0oop70R6ha6sFKLdY3tXjO7USkqmzDkg8orwQd7YC39vKTZYw1978I%2BYrxLi5OddCayKZloYaeNrONtx%2B%2BrkRhDd5m%2FN6mLAYvnB6SFTC3zj7sCK2eP2R%2F2722SOpkhPg7XWMZd2DaH1JTGn7u11k7IEx89fHv%2BuKMyqlUya1QJYHrfgWPIu3wSzdiwEXq9bZioYYZmC2uj7ztoO%2BfSVGul4AthPd6FTNJV%2FhUDbwWx6VrgfABVHlngyx4PH3q8tsFkFXnc4jSY9AR7dpeOw2%2Bxu8%2B99C6F3tCcYqtxWZLL%2FeB9RukXcRdJCMOyoxcMGOqUBXn2tgoNvxMldH7ogMNG%2FBixpYm526%2FzM%2FCS4QmEl32hu%2BGBC%2B6iH0NSbuqK10YmY0qP8NbbXqY75P3467f21F8ydhUGEHgBXzVuYypCd5ce3vS%2BabwtrVWs9RGwUD34Nojjg9sN7PZCWP%2F2BAqzpj%2FK%2FJT%2FZI4SB88NSH%2Bs1L0i7uzutX3CLhDmFci3IR0Fz50a%2FHAYSpQlWkjIpMth4qOee6cey&X-Amz-Signature=9a4cc4771579e8a5a5531c7f51b65076ba59c3fff9035b4728852efa1b17a9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
