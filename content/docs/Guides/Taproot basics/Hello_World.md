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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7TAJU7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDTRoewo2YqeSbZKemyw0jtsZhPXi7bsklT4gmSbTZAKwIhAN0JGDt5piXhL7%2BLa0UVvfVqFTDPWH5nrUeksNKz9PR4KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIXbxcpVqwkV7Zucq3ANzHTS6BciodxUQBhQrWLtn0PnjxvsOX8aYQk%2FM%2FYYy8UesvtWf1uKZy1VKYA1mN%2BNaRqkX38tgyQAeveiA4ne%2FZTxEImq1nnVY7S5ho4NZaLHm6%2Bul2dTGI6YtgQHx3oUmtYpXJ1jRuI%2BR8ZbOYevscK7EQVMwiKh0pWgJa6BlPOVrEQbnFYGKRIUchwrbsH69d7lPL3xfk86dD92MznCfGnw0Zi0ZOPjXmVxFOV3rmMWV2nhatJGevp5c1sGckDJKyrkLKBTN%2FO5eN8w4i%2BToR%2FVCdek4zjYvEOtpQzh1wzPx2TwxYEPKMAUGk%2BhnYBw%2BWMd%2FgiJU1T%2Bz86XogfQjrLaksVhF3Yncd0gxAViA23VVJKRvZiwfqogmio1v35RO%2Bxre9lZRkEnG2JLr%2FDrgkf598AoD1inhAjAfi1xh4qzu0Rih9QAPsfR32AUjbsO1AveYnr6Va8joo5Ca5DT6%2BW2fTchpBVAq4sL4StlJCfwqIf67IT5fJ2GhZr0i2YZF2nn4O17aBbnTQP%2BfuAELJ6Hp5y6vd1bbBLKrInZOhhN7q8fYfxrzwftAIaDKD9w20LRYrFyAUV3STj%2F8e6tMwqvo7Sa49D3RhgMxbJOzIbuNfItashaDmG4OOjDWkqXABjqkAZRNG%2BtN2umWwtJgP1c3IrmkFi7D3yvWwYnQKs06k6p3RfnYJ7ciZfmDbGzjPfaBqu37vMso0IenymjYx4ZI7LYgP7t7bvkMGUuvbToGc9qeQn2Ryvc%2FO%2FQdvLPMeCyfD4%2Bv8gY6cAU7XpEDOct99ABpK1EgZyuqeuUwygNvJoYH2dBeJeIVQtD4J3W85aKaBramgXhJzZfjzhvKcAkquxPYriE3&X-Amz-Signature=41283cb5632aabcaad7e7d8af33eb4d99b092b0217b78696d0047350d9dba315&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7TAJU7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDTRoewo2YqeSbZKemyw0jtsZhPXi7bsklT4gmSbTZAKwIhAN0JGDt5piXhL7%2BLa0UVvfVqFTDPWH5nrUeksNKz9PR4KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIXbxcpVqwkV7Zucq3ANzHTS6BciodxUQBhQrWLtn0PnjxvsOX8aYQk%2FM%2FYYy8UesvtWf1uKZy1VKYA1mN%2BNaRqkX38tgyQAeveiA4ne%2FZTxEImq1nnVY7S5ho4NZaLHm6%2Bul2dTGI6YtgQHx3oUmtYpXJ1jRuI%2BR8ZbOYevscK7EQVMwiKh0pWgJa6BlPOVrEQbnFYGKRIUchwrbsH69d7lPL3xfk86dD92MznCfGnw0Zi0ZOPjXmVxFOV3rmMWV2nhatJGevp5c1sGckDJKyrkLKBTN%2FO5eN8w4i%2BToR%2FVCdek4zjYvEOtpQzh1wzPx2TwxYEPKMAUGk%2BhnYBw%2BWMd%2FgiJU1T%2Bz86XogfQjrLaksVhF3Yncd0gxAViA23VVJKRvZiwfqogmio1v35RO%2Bxre9lZRkEnG2JLr%2FDrgkf598AoD1inhAjAfi1xh4qzu0Rih9QAPsfR32AUjbsO1AveYnr6Va8joo5Ca5DT6%2BW2fTchpBVAq4sL4StlJCfwqIf67IT5fJ2GhZr0i2YZF2nn4O17aBbnTQP%2BfuAELJ6Hp5y6vd1bbBLKrInZOhhN7q8fYfxrzwftAIaDKD9w20LRYrFyAUV3STj%2F8e6tMwqvo7Sa49D3RhgMxbJOzIbuNfItashaDmG4OOjDWkqXABjqkAZRNG%2BtN2umWwtJgP1c3IrmkFi7D3yvWwYnQKs06k6p3RfnYJ7ciZfmDbGzjPfaBqu37vMso0IenymjYx4ZI7LYgP7t7bvkMGUuvbToGc9qeQn2Ryvc%2FO%2FQdvLPMeCyfD4%2Bv8gY6cAU7XpEDOct99ABpK1EgZyuqeuUwygNvJoYH2dBeJeIVQtD4J3W85aKaBramgXhJzZfjzhvKcAkquxPYriE3&X-Amz-Signature=31ee8ecb3b98e0c18ae763a4598446194a04ab0085f3ab7b4b522cfcad3a6401&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
