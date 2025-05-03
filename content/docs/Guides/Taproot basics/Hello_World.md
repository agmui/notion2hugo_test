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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEOL4JU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD4ywPpzukwdBw8YzXD1pRW759V1m0T3FLvXbZyT%2BQzlQIgb%2Fx4GHZBLeVkmVW9j6TYKVzGfhwMGWnqdglCFtXGPjIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVE6de7BMrsdSG8oCrcA8kpvU1uGAEfSPxKMa0E%2BP4VHg%2F4GKDcnZbSK7CG94ZBO4o2cOizythns7SepxRYt%2FQFbiNH%2FHOefeRFY3ZpHIZKM50Y67CHgWxtukML0EPc0Wbra4a55Jux78ysqJszTbenHs5sr7YpJwXKYS1wXYg8sa32qGjgtF8f5TY4ycCUypzgoro31C6cTq1EwmMb%2FejdVCX4qOYwfRBL4Nf%2BglStT7NvtQ0U2eqUFpb%2FVG3256KbKe2gQNDlqk%2FhpzYH1WQJb4j7HU4HoQjmsiroKkW%2FeGr3if93HiO5XNaQ6GZSi5A1F1Ydjx25Lm4YeCMghzM35lOz%2FtJjTJmqmstFUNl6ApVjM5LhxJwmTPNidjHQeWOpUlfITs0hSwmYE182dtEQBTnsdG1Ndk3vYaCWNQFALEY81JWRdz8znue4yoybMfC%2ByjSd8%2BxWXjRqlA41rtUgPaaR4SYNZ0PdkNPlOWkjKbMVsExDRK%2BaIT%2FxNKWGWl%2BX0EeSkRRknQWX6X7UrV8834pqq2o%2FFYHvAD8wf1KRH%2Fr2sj1UBMhO3T9tg9BqRyuOQbA07d9aGzKcTwPDOv7VjVqDcPHXffbpNvqs45MaTwdSK7dlARgMPpItAdnF%2BGIBA1m8rQcLKSZ2MImH1sAGOqUBmbp%2FHloqqqWXrWs5vQeMvJg4Ythsklrhg2eV7Ut5i6BsMGdMzlwuZG3V7NNXTbSIH7XDkGTQHfd0tRGuaR%2FGqFZrrVvQKX8P05tLc3PpOH5JL7wuWwbkq15lwuoXi9ePq5az4mS0GgPYPHu6DHfZdexuoR3QlPv05zlNPZOhG6SXOvAWyK3aHo0pnAgyc3p3JkIXaoeRloCzodPEIFrgn9aXxqXt&X-Amz-Signature=2067a0a104377fefe41b3dab0abb07a5e39f9b8bb018f668eabd9e2531a297e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEOL4JU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD4ywPpzukwdBw8YzXD1pRW759V1m0T3FLvXbZyT%2BQzlQIgb%2Fx4GHZBLeVkmVW9j6TYKVzGfhwMGWnqdglCFtXGPjIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVE6de7BMrsdSG8oCrcA8kpvU1uGAEfSPxKMa0E%2BP4VHg%2F4GKDcnZbSK7CG94ZBO4o2cOizythns7SepxRYt%2FQFbiNH%2FHOefeRFY3ZpHIZKM50Y67CHgWxtukML0EPc0Wbra4a55Jux78ysqJszTbenHs5sr7YpJwXKYS1wXYg8sa32qGjgtF8f5TY4ycCUypzgoro31C6cTq1EwmMb%2FejdVCX4qOYwfRBL4Nf%2BglStT7NvtQ0U2eqUFpb%2FVG3256KbKe2gQNDlqk%2FhpzYH1WQJb4j7HU4HoQjmsiroKkW%2FeGr3if93HiO5XNaQ6GZSi5A1F1Ydjx25Lm4YeCMghzM35lOz%2FtJjTJmqmstFUNl6ApVjM5LhxJwmTPNidjHQeWOpUlfITs0hSwmYE182dtEQBTnsdG1Ndk3vYaCWNQFALEY81JWRdz8znue4yoybMfC%2ByjSd8%2BxWXjRqlA41rtUgPaaR4SYNZ0PdkNPlOWkjKbMVsExDRK%2BaIT%2FxNKWGWl%2BX0EeSkRRknQWX6X7UrV8834pqq2o%2FFYHvAD8wf1KRH%2Fr2sj1UBMhO3T9tg9BqRyuOQbA07d9aGzKcTwPDOv7VjVqDcPHXffbpNvqs45MaTwdSK7dlARgMPpItAdnF%2BGIBA1m8rQcLKSZ2MImH1sAGOqUBmbp%2FHloqqqWXrWs5vQeMvJg4Ythsklrhg2eV7Ut5i6BsMGdMzlwuZG3V7NNXTbSIH7XDkGTQHfd0tRGuaR%2FGqFZrrVvQKX8P05tLc3PpOH5JL7wuWwbkq15lwuoXi9ePq5az4mS0GgPYPHu6DHfZdexuoR3QlPv05zlNPZOhG6SXOvAWyK3aHo0pnAgyc3p3JkIXaoeRloCzodPEIFrgn9aXxqXt&X-Amz-Signature=55106b0db4fd9f21e8e4fe9f3c42fa4c755e0760cf1970c3cc35641dc6b2e5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
