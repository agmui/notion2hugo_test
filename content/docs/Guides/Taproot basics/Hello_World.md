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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDLWZLK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFuVx7p7hNd%2BBtHa4rfYrt18j3x%2B%2F8Lv9UxqRefJxPq7AiB4cMurhGfLpEqNBeWPxqEWRrGmDuBQdGA%2FFLQ%2BTrY4nSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS5N0tJswmNGSPDOKKtwDhfxLL5NE2adkHi5xy%2BlbBtnKgpaBF9Aunb2juXCaW1m9Dy1v4RouV%2FLLtUy6ftDQoUnb1Ea%2FUjLz8vORsp5rIf5ekaLvua4oxchdZD2dj6qBglltWBGFd%2FabZW5Ja4DqwuHbeecwpmkAczEyIcc0FpLzLVSu49nhuol1ugBdNwnG%2FewSUL7BaEhXkfuJTO7mciZUnjPvlRwC83KVzeIc8zqJNQxPncb4zDdQKNg3aEHZS3S1MsWH4QzMV1LqmYTngjgq4slqS8auvrGcfJIbLsm31OHnf4oX1nU7%2FoQdrvb9GLlZk7s%2FsXXmLexY3ES0LBYOZA5gMpepfSvsoKgj2a81KRJISk%2By5OLjtTjEQN%2FKLO5s3g9w5rc9CgZRaE0xa4jVUy7nPEgIJqsUh8JG9WXGFUfPuQzI5WSTL63rv5%2BYX7NtIebtoxXg1e2G4r%2BJT0EgoW9JPGzWMQCqSvgOQiBclzr%2BtfKmuN%2Fst56KpFJjSAce6WF7IgLD24kYbrF9%2BzMytSOp4AaefwHVp4m6wxZq%2F38pEefUqE93yvmG0g0NQfxVoqdTyG2EyBwiRvod5EFLsgWzMc3%2BGfWBggXuEd3khfracW1et1%2Blcbqj2AxLpMdVXeFSmmr%2BEJswsve6wQY6pgHbz%2Ba4jJvga4YQDALFuhcwllPvEAiybesNyKD6Z80kDCYuLZxbl%2Bkicg0L6kGqp7VDDvd1dZFKDlVguUuo5VNZ7EWAPPJZJmSnaQbBopqfaddrXxb1AFHEPEzEt%2BaOhxYI7B1yKCf7TaFzk8BzJ3wCuXTsOeG%2FlXoxdRcoaVQOGmeTuETXoHNtNUH0b7vfFcrsojbRY%2FRH1fxZy7K3uwQqjvaiyHz8&X-Amz-Signature=2621293b000951d63d887f85f31a418e69ac47745b44ea80b67bc17f9e832a17&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDLWZLK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFuVx7p7hNd%2BBtHa4rfYrt18j3x%2B%2F8Lv9UxqRefJxPq7AiB4cMurhGfLpEqNBeWPxqEWRrGmDuBQdGA%2FFLQ%2BTrY4nSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS5N0tJswmNGSPDOKKtwDhfxLL5NE2adkHi5xy%2BlbBtnKgpaBF9Aunb2juXCaW1m9Dy1v4RouV%2FLLtUy6ftDQoUnb1Ea%2FUjLz8vORsp5rIf5ekaLvua4oxchdZD2dj6qBglltWBGFd%2FabZW5Ja4DqwuHbeecwpmkAczEyIcc0FpLzLVSu49nhuol1ugBdNwnG%2FewSUL7BaEhXkfuJTO7mciZUnjPvlRwC83KVzeIc8zqJNQxPncb4zDdQKNg3aEHZS3S1MsWH4QzMV1LqmYTngjgq4slqS8auvrGcfJIbLsm31OHnf4oX1nU7%2FoQdrvb9GLlZk7s%2FsXXmLexY3ES0LBYOZA5gMpepfSvsoKgj2a81KRJISk%2By5OLjtTjEQN%2FKLO5s3g9w5rc9CgZRaE0xa4jVUy7nPEgIJqsUh8JG9WXGFUfPuQzI5WSTL63rv5%2BYX7NtIebtoxXg1e2G4r%2BJT0EgoW9JPGzWMQCqSvgOQiBclzr%2BtfKmuN%2Fst56KpFJjSAce6WF7IgLD24kYbrF9%2BzMytSOp4AaefwHVp4m6wxZq%2F38pEefUqE93yvmG0g0NQfxVoqdTyG2EyBwiRvod5EFLsgWzMc3%2BGfWBggXuEd3khfracW1et1%2Blcbqj2AxLpMdVXeFSmmr%2BEJswsve6wQY6pgHbz%2Ba4jJvga4YQDALFuhcwllPvEAiybesNyKD6Z80kDCYuLZxbl%2Bkicg0L6kGqp7VDDvd1dZFKDlVguUuo5VNZ7EWAPPJZJmSnaQbBopqfaddrXxb1AFHEPEzEt%2BaOhxYI7B1yKCf7TaFzk8BzJ3wCuXTsOeG%2FlXoxdRcoaVQOGmeTuETXoHNtNUH0b7vfFcrsojbRY%2FRH1fxZy7K3uwQqjvaiyHz8&X-Amz-Signature=75fcb9797b8ed71364d1ea1f932c5e93da01a36e93dc14d19fa077fde2137056&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
