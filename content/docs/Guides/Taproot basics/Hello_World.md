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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJA7X2KC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2TVBKTuS3c7mNcBbQmTSr0k%2Bwb%2Bgu%2FNPO4Dr7Kn4TWAiEA0aqZ4WUIVNIZCnF5rtG4B%2B1OgxUJNR6kQ1Wl1S3%2FqSwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2%2BlAEgYKoAzg1ZCSrcA%2FD43AwZYr7uM5g5FpfuK1HoLaexn9UFnRKUeQkE4pQMm3k6dZiqMxthbIZhFWJn0sWK2ltiP6lC8afcRuJOrb9Hh3cVGp%2BoribnxzSIA%2FZgYJPVqaQndekCVJuHMDnOE97ucA92rfie3ItL1TtcQIRGUEx2sKJuhGjpaE6k6L45p7ocjXG5tdXp9zLUSGetCvZ2eRE7goHCawSiVB6rYT%2Bnmw5ju0CWmPp0ebdBEiZfYTmSVl4B8FipQ71qNqVKH556OlvgVOtSl8qeHzSyZZffue6CMtsegZMgIseRUc6ebHj4hHgjU9YM65iPo7XADgW28AEV5lqWO4r5QUh0jTbYkBDiKNOhBtdr1UZ8Yd4tO8GXgcxuHxFUQeWPCt%2FzivDuS5szSPihzzs4BZgVHHs0VuAU57E%2FQ8eWjwli56OHJxS%2BzbAHuhZPoHobLTCRF1u1FJar%2FDoO1LeQdROs9zHpeKVZXQNqHpBtwrA5WIgTEfMAvrQZTFYEVTOcje5CbCHNpCKOK5yXoyGB1AR2gVD7WrSPqXquZWnZubG%2FcyMXvTdvTTNXQ%2FP5DZVhQEr7TiwJsTLm15QJnIuIixULAg3PeV6srey7l7Xj9AzN%2FfJuO%2BrNkRLJ64oqR5DzMPK1ssQGOqUBER%2FZTgtFbVstK%2BsZ0QAd98H%2FpxxUMqZvINx0pall8%2F%2B7%2FeW1dnHYiPdnzahwX%2BX54UR3IkINJk%2FK3sXnoaYQR4R5XfnKE9wlS7hIw%2Fk0x7gPVlPfd8ETgY2rJNopzoXEqyE2MmCK1yjPNSkP9dAfTLyYnhI41e7aLLB8lJfaBs9WkIcgNli79M9E8grzXSfZNp0ugCRAo%2Fvkg%2FHXtvYr5UJZAguS&X-Amz-Signature=2439046d8e57a6bd4206fdfe4443db4c4719c0dd0139f42ba7256fa83fb4993b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJA7X2KC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2TVBKTuS3c7mNcBbQmTSr0k%2Bwb%2Bgu%2FNPO4Dr7Kn4TWAiEA0aqZ4WUIVNIZCnF5rtG4B%2B1OgxUJNR6kQ1Wl1S3%2FqSwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2%2BlAEgYKoAzg1ZCSrcA%2FD43AwZYr7uM5g5FpfuK1HoLaexn9UFnRKUeQkE4pQMm3k6dZiqMxthbIZhFWJn0sWK2ltiP6lC8afcRuJOrb9Hh3cVGp%2BoribnxzSIA%2FZgYJPVqaQndekCVJuHMDnOE97ucA92rfie3ItL1TtcQIRGUEx2sKJuhGjpaE6k6L45p7ocjXG5tdXp9zLUSGetCvZ2eRE7goHCawSiVB6rYT%2Bnmw5ju0CWmPp0ebdBEiZfYTmSVl4B8FipQ71qNqVKH556OlvgVOtSl8qeHzSyZZffue6CMtsegZMgIseRUc6ebHj4hHgjU9YM65iPo7XADgW28AEV5lqWO4r5QUh0jTbYkBDiKNOhBtdr1UZ8Yd4tO8GXgcxuHxFUQeWPCt%2FzivDuS5szSPihzzs4BZgVHHs0VuAU57E%2FQ8eWjwli56OHJxS%2BzbAHuhZPoHobLTCRF1u1FJar%2FDoO1LeQdROs9zHpeKVZXQNqHpBtwrA5WIgTEfMAvrQZTFYEVTOcje5CbCHNpCKOK5yXoyGB1AR2gVD7WrSPqXquZWnZubG%2FcyMXvTdvTTNXQ%2FP5DZVhQEr7TiwJsTLm15QJnIuIixULAg3PeV6srey7l7Xj9AzN%2FfJuO%2BrNkRLJ64oqR5DzMPK1ssQGOqUBER%2FZTgtFbVstK%2BsZ0QAd98H%2FpxxUMqZvINx0pall8%2F%2B7%2FeW1dnHYiPdnzahwX%2BX54UR3IkINJk%2FK3sXnoaYQR4R5XfnKE9wlS7hIw%2Fk0x7gPVlPfd8ETgY2rJNopzoXEqyE2MmCK1yjPNSkP9dAfTLyYnhI41e7aLLB8lJfaBs9WkIcgNli79M9E8grzXSfZNp0ugCRAo%2Fvkg%2FHXtvYr5UJZAguS&X-Amz-Signature=2c25ed9e8d8a336f3a27c7f3eb949efab39e21876f761941d3c752e1e1e18612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
