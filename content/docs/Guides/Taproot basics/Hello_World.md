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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JPG6DN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENOvfyVRW5j2NkYz9P%2FqamECQIFm8mAjUKW6ri82RUhAiB%2FjDyGNklfrulEJq4cJy7VmX%2BoUri6nuPIbkpCXLiqYiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcZ9SW60DfrfqY41OKtwDtETGBsUS4RVGwKx8lmIDz7iyofthRdegtBlLI%2B6JtASBdwSwgm286eLLGjfSkM39wKXrKB5%2FK2HW39MrNbE0OIIxKbwFwrKRpyGjRBdWIl2zq2qUTOofz1huk4b1kEmX3UZiTMUAsjG0HurBONf4RMetopPwHtKd2MgXRLv4UJsRVroWLuCj1n2FA8%2BIuD%2B%2BlLFMexnUnZQ4bg8Aj0qD4XH%2BdBDz4BD3oslvY%2F1uOmYcSq9RV1sbOmCguRSPo2KUgWjRMY7U1%2FdNRqTBYqmfVTwD2k36ZFZFd7p%2F5HvIPuyZ6PlcGI7Gv844t740rEOWYXlEVDceia7zX09h8eHcf2dBiYTBac321%2Fd7CJ%2BuJ432D%2Fp7OuKp4jYhgwF8jGUr9%2B6fg037yoCtYHdPyBEm3ZI7gbPbN2ph8dpgG%2FSdGGFbiDzX7aFx%2BEsawr8%2FNayXSYdQXqMZmUtkLCXCRb1vmjW489AmlSGOxtdfWYGUFcOyheks1tVgC1U%2B1nz9eWW%2Bjl2VdU0CurLAufCVkPHS4n3o%2BeoPmkwKSCsDTuuB2KKjFzRfuzeeE1HTDiHNnquy8ohXdqHUlzc5XzU0j4F1sE9YNEGYS%2FFZI8ZAyW8EeVuDstu6ht6y2yXFZygwmKTPwgY6pgFzyzGDhc2BlsQUQjCR7Eu1Grcjeyhu%2FY67kfCD5KbCKJnS8ASbt7PmF9EWDpF1UiZGmuv0tbW8DHd2yZR2GE3qEdgc76Ti2gypyBu5OArVCxerCnILUmaPWB6Uc0mh1U1q1gE6tGuZdFXOCSuLArqMNR6tHnB1pP39tIijPYEgX%2F06fcm%2BMt8Lza%2FUMAKWvoWIU0G7Twl7GTuQEYnChehFSKR%2By%2B%2B7&X-Amz-Signature=ddd5bd130ef39b6afe2a70ca79ac13498cdf50ecffb484fd6023c9e586562c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JPG6DN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENOvfyVRW5j2NkYz9P%2FqamECQIFm8mAjUKW6ri82RUhAiB%2FjDyGNklfrulEJq4cJy7VmX%2BoUri6nuPIbkpCXLiqYiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcZ9SW60DfrfqY41OKtwDtETGBsUS4RVGwKx8lmIDz7iyofthRdegtBlLI%2B6JtASBdwSwgm286eLLGjfSkM39wKXrKB5%2FK2HW39MrNbE0OIIxKbwFwrKRpyGjRBdWIl2zq2qUTOofz1huk4b1kEmX3UZiTMUAsjG0HurBONf4RMetopPwHtKd2MgXRLv4UJsRVroWLuCj1n2FA8%2BIuD%2B%2BlLFMexnUnZQ4bg8Aj0qD4XH%2BdBDz4BD3oslvY%2F1uOmYcSq9RV1sbOmCguRSPo2KUgWjRMY7U1%2FdNRqTBYqmfVTwD2k36ZFZFd7p%2F5HvIPuyZ6PlcGI7Gv844t740rEOWYXlEVDceia7zX09h8eHcf2dBiYTBac321%2Fd7CJ%2BuJ432D%2Fp7OuKp4jYhgwF8jGUr9%2B6fg037yoCtYHdPyBEm3ZI7gbPbN2ph8dpgG%2FSdGGFbiDzX7aFx%2BEsawr8%2FNayXSYdQXqMZmUtkLCXCRb1vmjW489AmlSGOxtdfWYGUFcOyheks1tVgC1U%2B1nz9eWW%2Bjl2VdU0CurLAufCVkPHS4n3o%2BeoPmkwKSCsDTuuB2KKjFzRfuzeeE1HTDiHNnquy8ohXdqHUlzc5XzU0j4F1sE9YNEGYS%2FFZI8ZAyW8EeVuDstu6ht6y2yXFZygwmKTPwgY6pgFzyzGDhc2BlsQUQjCR7Eu1Grcjeyhu%2FY67kfCD5KbCKJnS8ASbt7PmF9EWDpF1UiZGmuv0tbW8DHd2yZR2GE3qEdgc76Ti2gypyBu5OArVCxerCnILUmaPWB6Uc0mh1U1q1gE6tGuZdFXOCSuLArqMNR6tHnB1pP39tIijPYEgX%2F06fcm%2BMt8Lza%2FUMAKWvoWIU0G7Twl7GTuQEYnChehFSKR%2By%2B%2B7&X-Amz-Signature=901278590dc8ad8a612b6fa9c49145444e53fa93e0d25a8c8cb2e743080f82df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
