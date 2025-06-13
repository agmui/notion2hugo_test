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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TUVZV4K%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCLKN2eLkJUcUZw4Bw82czuvgWAIoKgB1D2rav4B0g9OgIhAO0F9IiyFK%2BtuwomD6RyM2PetWb2t0UYNJzHy30leZ%2BuKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf4BzYUA9BJhgsSOEq3AOGDNNdse8QEQl1gxt9jHbHFdIfzHbZezFodCyjhQfzZxjog%2BRZZNEvu8qgsjcht%2F57m8T%2BXXbpUGBmC8tdX1b0ND5OR%2F%2FxPi%2BFU2UbwutqCufK9Jad8aV8qRuIcQ4yFhruTG5fE0lQ4CnZjwyFARKwxCLd6euP222psOB1HNwiL31E8adn6ZAFz%2B2ZLdXTeYfkFTOvDuCzUWaA%2BheYzUlCgUSVAUFXBxuKYDVF2wEf4Z3CT6ccnK%2FIicdqPOL2gZwhlyI6OgO9FNWC3OkLOr8E4EWW0DzlhXABUvlnQl1LUFd%2FR3C1AscGrZwFkS0nhB%2B5PjKJxeXNL8Uz77wEXvYlMI87rGUc%2FeKjS5tHhsjxW0sR33ow3poZqyX%2FHEZScfHWhrb3NlsUKSvZkW7LZQ0BXqITh14WIEapVScs5FhtJD2f7cUHrkg2j6mMt%2F9eQb%2FneGu8h4mp0u8wZx7VkxV2oHsWP%2FYlvz5Qaa2kqrH%2Byykeqpi1Px9hARp4RkZ1FU9kqIGfZGeMfXbaz0DNS0YJR%2FO2boNntxbY%2B2fJw47Rm5NLRJt1uLoghmK274XCseLEY%2FfGWRaawd7Y2Gb1pCsH8GY8UftpDa3taBdAVS3zT3D6FYmv0C8HOi1taTCm3K7CBjqkAWdxc4gpVlkyw%2FF3NNndH0sMcj8JD879BcpqBJmfRfQoP%2FkmPjTZPzh%2FYztaRiB3t6MZSxa0AMemv8IaepN0O100C37JgMVuIADAtVlDr%2BxGvjZCrMoPa%2BOqeqyGt0xc9eW1G8z1YCCrzfmXIzxW2FYZYiKfjkVNs8%2FtyzEPjpmYl0dNAqOZPoAT8bIU64oneguMcJU9gNSFMEBPlkDJphOHf6gf&X-Amz-Signature=ba3ff6dc86525c7cd3b4b254bdce95a0f9a0f4c063d30d8c92c0b7c51e42bc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TUVZV4K%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCLKN2eLkJUcUZw4Bw82czuvgWAIoKgB1D2rav4B0g9OgIhAO0F9IiyFK%2BtuwomD6RyM2PetWb2t0UYNJzHy30leZ%2BuKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf4BzYUA9BJhgsSOEq3AOGDNNdse8QEQl1gxt9jHbHFdIfzHbZezFodCyjhQfzZxjog%2BRZZNEvu8qgsjcht%2F57m8T%2BXXbpUGBmC8tdX1b0ND5OR%2F%2FxPi%2BFU2UbwutqCufK9Jad8aV8qRuIcQ4yFhruTG5fE0lQ4CnZjwyFARKwxCLd6euP222psOB1HNwiL31E8adn6ZAFz%2B2ZLdXTeYfkFTOvDuCzUWaA%2BheYzUlCgUSVAUFXBxuKYDVF2wEf4Z3CT6ccnK%2FIicdqPOL2gZwhlyI6OgO9FNWC3OkLOr8E4EWW0DzlhXABUvlnQl1LUFd%2FR3C1AscGrZwFkS0nhB%2B5PjKJxeXNL8Uz77wEXvYlMI87rGUc%2FeKjS5tHhsjxW0sR33ow3poZqyX%2FHEZScfHWhrb3NlsUKSvZkW7LZQ0BXqITh14WIEapVScs5FhtJD2f7cUHrkg2j6mMt%2F9eQb%2FneGu8h4mp0u8wZx7VkxV2oHsWP%2FYlvz5Qaa2kqrH%2Byykeqpi1Px9hARp4RkZ1FU9kqIGfZGeMfXbaz0DNS0YJR%2FO2boNntxbY%2B2fJw47Rm5NLRJt1uLoghmK274XCseLEY%2FfGWRaawd7Y2Gb1pCsH8GY8UftpDa3taBdAVS3zT3D6FYmv0C8HOi1taTCm3K7CBjqkAWdxc4gpVlkyw%2FF3NNndH0sMcj8JD879BcpqBJmfRfQoP%2FkmPjTZPzh%2FYztaRiB3t6MZSxa0AMemv8IaepN0O100C37JgMVuIADAtVlDr%2BxGvjZCrMoPa%2BOqeqyGt0xc9eW1G8z1YCCrzfmXIzxW2FYZYiKfjkVNs8%2FtyzEPjpmYl0dNAqOZPoAT8bIU64oneguMcJU9gNSFMEBPlkDJphOHf6gf&X-Amz-Signature=b3b7a24f0cd4bc176b0e0dd974dd1a5d1c66a8d27f2dabebdc65c86dea376641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
