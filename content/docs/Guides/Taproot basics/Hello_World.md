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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLDU4Y7S%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjEsV2PidIP0ZnV%2BereMOZ5tPbQ6uLCjPO3PdvFZXUtAiEAmvQLzkaY9WRzqJuiypmL1PiiKXGHJiJO8U6sHHD4SBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGgiCDcmqywHWI%2BnGSrcAzU1ISeaZFIK5b8ly8nc1f30Nax9Nhb3nlwHWYqEVWcndcbXMBQQlDfZIkc3rxVMyDQWYFD9weebAyowHk8K2dC9QV0iGQEWKF1hQR1SscyeSP789nwnSnAEXepajcJQ3vW%2BriTOXagWJgMpmENAXQUDYczs2pjSsxe7FsQIHQAJYtmjpMwmdz1CzMrpDb1aKT20kMg4HBQkEF7Eejloy1todLuHqiar83hEbJE2tUzlqQdL%2BcmxBotRSxDZNbhhVxvig5%2B921wMgkrSnm1nLvvcw8JuZVkWg41fukACuhoifU%2FNlGOLD5YvrkFfQY%2F%2FtQg4M8d4RNdrQJFKGYAkEGFtbienB6eAgD5bNv9zSoLMeYLQm1iEtCV%2Fkl9n5CpiiF%2FjGsLslgmVkZrFWTxiSZb8D5ZirfFTVLkOfuWriX2YQgbF3qU5gchYTjSKSbNTJAQbYa3SmZXIoE%2FP3tKRO3iAkdKB%2Brjt4jatnJtfL9cD7ZUzVnPxss310fzOSDL8CoO3LrfeN1Rq4Vy5%2BpxibIF9fhyvP53ZDfbD%2Fv1s1JHc2Ay50eBXilPzciSjZ5ivZNaZ0ybDqkXl283dHh9gz5N0FPUpFX5KN2BP3p%2BcsYZir%2BXSxMdDBxi2FwedMOfT0r8GOqUB0RzA7oHly0VQ9D0Z1HkvlM397yrFLNR3xkqWCa4hlQeVXlLFzX5y19%2ByYtzMo3tP7XpiFy%2F427AqqRETcbLrtD%2FafYLS8SlfRZKZemfyDIQ8Dtv62WPVfvvBj03Bn3o5IUD%2FDLbsIJeQnzztXkjMeomdqkN2RJWGbt%2BG%2BWH7KaNtIG2NGCKwzkyCM1bUVxHRo5EdtQOxUXqvUP%2BLLiZIPLKdMb%2Fz&X-Amz-Signature=acc8b5e79830948eee8ef583192635f317ed5ed052ff13112f5232b7a8c6e338&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLDU4Y7S%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjEsV2PidIP0ZnV%2BereMOZ5tPbQ6uLCjPO3PdvFZXUtAiEAmvQLzkaY9WRzqJuiypmL1PiiKXGHJiJO8U6sHHD4SBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGgiCDcmqywHWI%2BnGSrcAzU1ISeaZFIK5b8ly8nc1f30Nax9Nhb3nlwHWYqEVWcndcbXMBQQlDfZIkc3rxVMyDQWYFD9weebAyowHk8K2dC9QV0iGQEWKF1hQR1SscyeSP789nwnSnAEXepajcJQ3vW%2BriTOXagWJgMpmENAXQUDYczs2pjSsxe7FsQIHQAJYtmjpMwmdz1CzMrpDb1aKT20kMg4HBQkEF7Eejloy1todLuHqiar83hEbJE2tUzlqQdL%2BcmxBotRSxDZNbhhVxvig5%2B921wMgkrSnm1nLvvcw8JuZVkWg41fukACuhoifU%2FNlGOLD5YvrkFfQY%2F%2FtQg4M8d4RNdrQJFKGYAkEGFtbienB6eAgD5bNv9zSoLMeYLQm1iEtCV%2Fkl9n5CpiiF%2FjGsLslgmVkZrFWTxiSZb8D5ZirfFTVLkOfuWriX2YQgbF3qU5gchYTjSKSbNTJAQbYa3SmZXIoE%2FP3tKRO3iAkdKB%2Brjt4jatnJtfL9cD7ZUzVnPxss310fzOSDL8CoO3LrfeN1Rq4Vy5%2BpxibIF9fhyvP53ZDfbD%2Fv1s1JHc2Ay50eBXilPzciSjZ5ivZNaZ0ybDqkXl283dHh9gz5N0FPUpFX5KN2BP3p%2BcsYZir%2BXSxMdDBxi2FwedMOfT0r8GOqUB0RzA7oHly0VQ9D0Z1HkvlM397yrFLNR3xkqWCa4hlQeVXlLFzX5y19%2ByYtzMo3tP7XpiFy%2F427AqqRETcbLrtD%2FafYLS8SlfRZKZemfyDIQ8Dtv62WPVfvvBj03Bn3o5IUD%2FDLbsIJeQnzztXkjMeomdqkN2RJWGbt%2BG%2BWH7KaNtIG2NGCKwzkyCM1bUVxHRo5EdtQOxUXqvUP%2BLLiZIPLKdMb%2Fz&X-Amz-Signature=2137efddab28c0046cb8aa235ba66d8ec8f30af77004b48db911d5e0302f5fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
