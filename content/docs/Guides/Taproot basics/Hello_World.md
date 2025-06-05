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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQORC6S%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGoXbGbjEkCZrZze4Rq9vivURiZOnBT1s%2B1UloiCwJ4%2BAiB4r2PCGLAyx8ovxd7zsd5DKNRFvQJHECw%2FXyXifQEYVir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMWpsIvKEELwnc706cKtwDct9QAx8nm07ZD7n5Y39GDnUuEggz2u6NN7tCXxMun62MRZ7Ng03c5PNoDI0v5dR8odTi9ci88c84ujBpfAR8ghEPxtzRAU36yJe5MdZZ%2BWRPJ%2ByB7Rqa%2Feau6ljmtxIg1GqWKgHtGDkBKfoZU%2BXbn9a76hMPXLB3C1XxPkgUWgGdVcNEwQ04Wzpu9rCJs9mge8IW%2FiCdrZDF2yNf2SqjWl4d8wsZBdLKH9wj34Pokj4SS73%2BrQ4Ncl49v3KHe%2B2Ew2JvaGrRWdSEjoULdeuGR%2FTnFhZRrZkpnwNIjzkumMWy%2BmpOJiMqU42gg%2FaXdHoa4taE2g0XgmwzNW0qO5B8X3%2FcUsRvzx3OQEB65vsgmOj2kvIKXaKyq%2BxmGYuXdz1Ko8fArYUY%2ByzQtkCf4p1hU%2Fe9E%2B6UjFRAmvVVjPVTKOVlOtMPnUWi3hVGPkxxjo5coDc7B8eCxfunefJpXk3YBv80aq%2F32lGPmJwvbZtbWAY85V8IyHSDdqE9Bf%2FEh%2BBji%2FB42xERDMHYYGw1j3RRpyRLBosmkvg8KNxm%2FU6kPEeysFTyVJnFIh242qj%2FztA6KiBuQItaKzC4vmZfM9rRluQ89zgHI3sLfJlxhkFUYazyP%2F%2BYmk93e4KzPmQwgcqDwgY6pgHY%2Bwu%2BWYAthuSzZCswCajAG1kk8Zc3zD6PHwmFgPQaCgEo%2FkOj%2FQxUWfP2v06eysR9keHsanbnwKfFHW%2Fxzxhz4AHJ%2F%2BSuhxYOK2KvwWjyVH5E2sTkUKjRmMscl69yRzNFG%2BaQwuc8APWvZqJFiyHPz7%2FLFKVuzoZYdb5pR4iDwaXVz5cj3tfTlvWOBdaIse12yWFMMAWzGE1tAuzzwvfybee%2BB43w&X-Amz-Signature=a2dfb86b5a80be2aa4ac1d68e8eaf3ff684d21afcc095ebb5beea5c3c643ce6b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQORC6S%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGoXbGbjEkCZrZze4Rq9vivURiZOnBT1s%2B1UloiCwJ4%2BAiB4r2PCGLAyx8ovxd7zsd5DKNRFvQJHECw%2FXyXifQEYVir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMWpsIvKEELwnc706cKtwDct9QAx8nm07ZD7n5Y39GDnUuEggz2u6NN7tCXxMun62MRZ7Ng03c5PNoDI0v5dR8odTi9ci88c84ujBpfAR8ghEPxtzRAU36yJe5MdZZ%2BWRPJ%2ByB7Rqa%2Feau6ljmtxIg1GqWKgHtGDkBKfoZU%2BXbn9a76hMPXLB3C1XxPkgUWgGdVcNEwQ04Wzpu9rCJs9mge8IW%2FiCdrZDF2yNf2SqjWl4d8wsZBdLKH9wj34Pokj4SS73%2BrQ4Ncl49v3KHe%2B2Ew2JvaGrRWdSEjoULdeuGR%2FTnFhZRrZkpnwNIjzkumMWy%2BmpOJiMqU42gg%2FaXdHoa4taE2g0XgmwzNW0qO5B8X3%2FcUsRvzx3OQEB65vsgmOj2kvIKXaKyq%2BxmGYuXdz1Ko8fArYUY%2ByzQtkCf4p1hU%2Fe9E%2B6UjFRAmvVVjPVTKOVlOtMPnUWi3hVGPkxxjo5coDc7B8eCxfunefJpXk3YBv80aq%2F32lGPmJwvbZtbWAY85V8IyHSDdqE9Bf%2FEh%2BBji%2FB42xERDMHYYGw1j3RRpyRLBosmkvg8KNxm%2FU6kPEeysFTyVJnFIh242qj%2FztA6KiBuQItaKzC4vmZfM9rRluQ89zgHI3sLfJlxhkFUYazyP%2F%2BYmk93e4KzPmQwgcqDwgY6pgHY%2Bwu%2BWYAthuSzZCswCajAG1kk8Zc3zD6PHwmFgPQaCgEo%2FkOj%2FQxUWfP2v06eysR9keHsanbnwKfFHW%2Fxzxhz4AHJ%2F%2BSuhxYOK2KvwWjyVH5E2sTkUKjRmMscl69yRzNFG%2BaQwuc8APWvZqJFiyHPz7%2FLFKVuzoZYdb5pR4iDwaXVz5cj3tfTlvWOBdaIse12yWFMMAWzGE1tAuzzwvfybee%2BB43w&X-Amz-Signature=f8bd9df9ceda4ab97ac4e7afdf23a67f930295f3458cc6807b40ad1e8efd528e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
