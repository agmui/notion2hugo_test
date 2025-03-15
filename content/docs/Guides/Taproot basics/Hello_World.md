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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WQFQWR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEznxpgReDPZxkvLsU2NgjC6WJz1rif1VkDSqLigQK%2BXAiEAo6nXUlboIasGfUIrK0QWYUpvPoTxgehSkiX1NrDmd%2BIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7nvXfHTFsjzdY%2BayrcA0vA8KHaQmtOCTrjVWcfUwLsam9EKtGI8yeaZe2iGogpGx97PHUa6BKLEGvpVFbl1X3TvYpzniZAMeYyWYlnkwsUTZrXEr5NXmHonYaslpiIRKb6t54Gbn0Tr%2FB6EuIjzFPpAcWfkrutwdZZGgGlpt51b%2FxWhjEfChwgoqNc4H9hgjbjiXKig0pssNw%2BeSk0lpnCpkL1Z6ddnTkHp%2BqiIDkNHeYJCBERuNsQ3faiVdCpZBoCKwd0HmP8VlZ1r5p2yqO75IThSC8u27zXBkEgiMaUzVAdgwnBfE8xnvCMtnjwvSPQcVdvSAvjxRkN5ooMkhgo7HQTmXch9B9vaYZfGxkd8Bu5p6eHIB55vW49md%2BmzHLavgpx4YDGAq1PVnAMkrWBJkKAnSC7u9gsPKDKecG5VilnVcfrRDFfiyzA3%2F8Q6h1d1HNkEJPoUlfrvBt%2F4dT2pDI0vKL8lAYelC990QHvJ0g9Km5Z%2FUjddcSGbPIO4M4ITuBQVLbnV4HwrI6H6sY6o8LCKVfrXpIgj1WQjub8gPLXWta1XdJN5R8vvu46VZdcFwZB5Qu%2B1DC7cQ9hPBaGVuaSGEh%2F%2FHWDMfG1OBQW9CcCOH9NCOebO0Pki7wWqolImqQhgkqDGssPMJKN074GOqUBXNvwEUmBpOKaPrMxSusJkaE5ynTlSyJQJzziyxtWK5%2BNCl4H5cABAWVFytbw1JwCKuuTexOAxmLM2KlfeY9DcLf113u9tIaqQfpehv2tdKNfayHohgR8ifPHwmLE7CTV5sTA0HqEsCMJQMtoXbHKaQh58Ow%2FnqaedTZLvWb1t2IW6wIL%2FAQzlwMSWNxpSNlXbS5R17Sw2m0IQal0SIMwPeqX5Wzj&X-Amz-Signature=e9d11a9dd3e125834bc258d9e5c46b0d1bb4e2511561990d893e767a362c2ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WQFQWR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEznxpgReDPZxkvLsU2NgjC6WJz1rif1VkDSqLigQK%2BXAiEAo6nXUlboIasGfUIrK0QWYUpvPoTxgehSkiX1NrDmd%2BIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7nvXfHTFsjzdY%2BayrcA0vA8KHaQmtOCTrjVWcfUwLsam9EKtGI8yeaZe2iGogpGx97PHUa6BKLEGvpVFbl1X3TvYpzniZAMeYyWYlnkwsUTZrXEr5NXmHonYaslpiIRKb6t54Gbn0Tr%2FB6EuIjzFPpAcWfkrutwdZZGgGlpt51b%2FxWhjEfChwgoqNc4H9hgjbjiXKig0pssNw%2BeSk0lpnCpkL1Z6ddnTkHp%2BqiIDkNHeYJCBERuNsQ3faiVdCpZBoCKwd0HmP8VlZ1r5p2yqO75IThSC8u27zXBkEgiMaUzVAdgwnBfE8xnvCMtnjwvSPQcVdvSAvjxRkN5ooMkhgo7HQTmXch9B9vaYZfGxkd8Bu5p6eHIB55vW49md%2BmzHLavgpx4YDGAq1PVnAMkrWBJkKAnSC7u9gsPKDKecG5VilnVcfrRDFfiyzA3%2F8Q6h1d1HNkEJPoUlfrvBt%2F4dT2pDI0vKL8lAYelC990QHvJ0g9Km5Z%2FUjddcSGbPIO4M4ITuBQVLbnV4HwrI6H6sY6o8LCKVfrXpIgj1WQjub8gPLXWta1XdJN5R8vvu46VZdcFwZB5Qu%2B1DC7cQ9hPBaGVuaSGEh%2F%2FHWDMfG1OBQW9CcCOH9NCOebO0Pki7wWqolImqQhgkqDGssPMJKN074GOqUBXNvwEUmBpOKaPrMxSusJkaE5ynTlSyJQJzziyxtWK5%2BNCl4H5cABAWVFytbw1JwCKuuTexOAxmLM2KlfeY9DcLf113u9tIaqQfpehv2tdKNfayHohgR8ifPHwmLE7CTV5sTA0HqEsCMJQMtoXbHKaQh58Ow%2FnqaedTZLvWb1t2IW6wIL%2FAQzlwMSWNxpSNlXbS5R17Sw2m0IQal0SIMwPeqX5Wzj&X-Amz-Signature=3ff7aba7fc62da558598e80e839c97981e73b0c36fdfeecc0b836932c1ced652&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
