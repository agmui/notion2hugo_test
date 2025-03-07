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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652CQYZNT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDhuS8G9Tq5M%2BiLIoZl4pA0m3NCm96Z8bd3wF0FIGHyUAIhAP1JuXs9ildM0QQqNOWMSDQKqrA1gE5Z33Jir%2BXTvKHhKv8DCE0QABoMNjM3NDIzMTgzODA1Igy0hWUFSVyV%2Fnyqmi8q3APK4IW%2BOgS9hpo%2B3nBQw4w0YAdzPJsqE9%2BEndOBs7bf34zULi3G1Anr%2BtDjzby1OUYWo5a2AU4w5eVugP0xf3U6fBMmlo%2Fjrv3%2FT1z4K8VKu3VJHApLIECNOuTZYu%2BKPFKqcWEkkgwuM29MW7jjCE0PpjTxH3c1gVPnzvO9uCJmGl05uXtjyzQzAoIPscFlLhhIIMQWLzd7XISkNjcER2XOutSYH2N5yrfkrq6jutniSNRaZE3PxmwiSA2f%2BBhR5kbV2aglFXaGQTPI4ngq9evd9sx0tOQMbH5HSLADaNSP%2BCWfpCIOPWNXAe%2BHkaDHtap3PHxSltgy47NRmtI2fjlDrh%2Bq12kqcQUELDOGuCeFAJiCGEQehovzVi0axlM6vZU0UV%2BrXqk9vIRDj3eh263W8GM9H8gFF%2Fl1KwXXApOEm8Nk8tCouFYvIPY8L4YVPfJ1%2BPHtAiWTX6D%2F%2F3AzuU8SLxQLYTVnPnMYpu%2BE9xzaLu0hesUcljWf4k%2Fbb8V1TXeUo5j0DcvV4DzrGjsY4d56Wh7wIamC8mI7rmn2Ycm3o4mIK2aYKlUY7FhtkCPpWy01mXFWQy6EHm%2F8oiEgVwtPl3yHjspQRhZ0mo4ZBHv3vf7qvYRg9yEXcBL7JDD5n62%2BBjqkAQxUnTOe5OmDEDCa%2FQOyUI0ockCdt%2F%2FCQ1zc8BgOgneyxui3PrKuQEAElDmLvClWQz3qZQCE%2BK48GjEt1Ol9wOg%2BFpvXnsqLKg1mj1%2BdxN9sL6Z0tKIPT0F%2BE30V4k6CXiGMFDmyT87KIic6uCXSD9vNFUVZYFFiMIAa%2FsyPT6uL8wt%2BZyF4U0dMuwcpt%2BETY%2BrTH%2BXmschm1%2F6Bc2SS1wtCy%2Fgv&X-Amz-Signature=2b55942483a6ac67e4a289b8f3d7082576f845510dbce4e325d7de771ea54d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652CQYZNT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDhuS8G9Tq5M%2BiLIoZl4pA0m3NCm96Z8bd3wF0FIGHyUAIhAP1JuXs9ildM0QQqNOWMSDQKqrA1gE5Z33Jir%2BXTvKHhKv8DCE0QABoMNjM3NDIzMTgzODA1Igy0hWUFSVyV%2Fnyqmi8q3APK4IW%2BOgS9hpo%2B3nBQw4w0YAdzPJsqE9%2BEndOBs7bf34zULi3G1Anr%2BtDjzby1OUYWo5a2AU4w5eVugP0xf3U6fBMmlo%2Fjrv3%2FT1z4K8VKu3VJHApLIECNOuTZYu%2BKPFKqcWEkkgwuM29MW7jjCE0PpjTxH3c1gVPnzvO9uCJmGl05uXtjyzQzAoIPscFlLhhIIMQWLzd7XISkNjcER2XOutSYH2N5yrfkrq6jutniSNRaZE3PxmwiSA2f%2BBhR5kbV2aglFXaGQTPI4ngq9evd9sx0tOQMbH5HSLADaNSP%2BCWfpCIOPWNXAe%2BHkaDHtap3PHxSltgy47NRmtI2fjlDrh%2Bq12kqcQUELDOGuCeFAJiCGEQehovzVi0axlM6vZU0UV%2BrXqk9vIRDj3eh263W8GM9H8gFF%2Fl1KwXXApOEm8Nk8tCouFYvIPY8L4YVPfJ1%2BPHtAiWTX6D%2F%2F3AzuU8SLxQLYTVnPnMYpu%2BE9xzaLu0hesUcljWf4k%2Fbb8V1TXeUo5j0DcvV4DzrGjsY4d56Wh7wIamC8mI7rmn2Ycm3o4mIK2aYKlUY7FhtkCPpWy01mXFWQy6EHm%2F8oiEgVwtPl3yHjspQRhZ0mo4ZBHv3vf7qvYRg9yEXcBL7JDD5n62%2BBjqkAQxUnTOe5OmDEDCa%2FQOyUI0ockCdt%2F%2FCQ1zc8BgOgneyxui3PrKuQEAElDmLvClWQz3qZQCE%2BK48GjEt1Ol9wOg%2BFpvXnsqLKg1mj1%2BdxN9sL6Z0tKIPT0F%2BE30V4k6CXiGMFDmyT87KIic6uCXSD9vNFUVZYFFiMIAa%2FsyPT6uL8wt%2BZyF4U0dMuwcpt%2BETY%2BrTH%2BXmschm1%2F6Bc2SS1wtCy%2Fgv&X-Amz-Signature=17f0bde44dab662e197938d6177087f4563e17e388ccf6c34d8e5e11080bf03d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
