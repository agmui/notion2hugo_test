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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJ24JLB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBILRbnrcTcwIyFJOmb0DozvyuZVqg15ObeS28%2ByiG2lAiBTm1%2B4CbxTuZeS8ZiRqMA33lRPTijdb8AFKthby6mihCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgHbjuIY6gcOfSpTkKtwDRNCQ10ZoID4Gtw1s0dPs7zRLke8mH0Z7qLO0Wg0qrAeXjFJpjQPCq3f35VfOXlcKDy%2FRIsbrYgZ4VmzRDjlwGc95IOwGPm9iuc73%2FusJhFqUqeGKsgL25DoyNLvDCKsIpZNNqqfmjXahe1%2FCgDZb8W6hgwC7q8f8m%2BN0An1tN24bOV%2BfaSAQiD3iWflW%2BCxhC1hkvZkjgeu5VN%2BBVRzInP%2Bfe%2FtgJRXHlGH0tMv0KfvdcvKVPjaBVZTZUFFJkdaDcWIFuf%2BhdTlRJAZhWdsjTjSOQfPr4SbxRWa9hBjRXGFEnYkn3%2FxUuKf%2FF9QPrKp8BY6gdRLZ%2F4MPY5qOOoK%2FiTAeA%2BGI%2BtJq%2BftYMlN4CqmNKOw9Hd%2Fu9QLzpl9e5cZ9wae6vV5gPJxOU8xtY0r%2BK1qxfXw7NGkvv9T1c%2B4c4HNTOxggKmTevtTW8XaRr3Smu5YQjUZtl9jXK%2FNjwb9bJtY3OizwXpm6oRjEE3m%2ByTkER1EXqjnUhSplKnjA7lhNlxPtOqZQosFx3ecNsnFNJN92ZquPzMlITcZCMdcMdMTcFDDVEAGOHFu8DlLFXcabA0ZYoS8%2BTZmsfsYFIU5UJDOddWUVMOOeputnB9eO8LF6%2BmPErcBSQXFdehcwjsfhwgY6pgEn%2FCUYzf42PnbPSEu1peOq1DfuhP64FAvL0EMiMFWGs3KTzO1M9Q9jWJ%2FZo2%2FNJK0XGsKZmVI4zW378vsByrk35hKPd8vRb1ccyH8QtCtdXqKo2NUewktT%2FotJd4QqIppEy8sAZPhn9D8LpoKh0n806A6xNG3KA5Fuy7yC2sitpE0luYzaCN%2B2cmQV4%2BtW8gKo9w8FPhzbBCCkMJ9FYUoJEJEgaA16&X-Amz-Signature=83b0a53eaa5174bd8c5b9a35f9be79011460f907c890f9361cb81e81231d19e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJ24JLB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBILRbnrcTcwIyFJOmb0DozvyuZVqg15ObeS28%2ByiG2lAiBTm1%2B4CbxTuZeS8ZiRqMA33lRPTijdb8AFKthby6mihCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgHbjuIY6gcOfSpTkKtwDRNCQ10ZoID4Gtw1s0dPs7zRLke8mH0Z7qLO0Wg0qrAeXjFJpjQPCq3f35VfOXlcKDy%2FRIsbrYgZ4VmzRDjlwGc95IOwGPm9iuc73%2FusJhFqUqeGKsgL25DoyNLvDCKsIpZNNqqfmjXahe1%2FCgDZb8W6hgwC7q8f8m%2BN0An1tN24bOV%2BfaSAQiD3iWflW%2BCxhC1hkvZkjgeu5VN%2BBVRzInP%2Bfe%2FtgJRXHlGH0tMv0KfvdcvKVPjaBVZTZUFFJkdaDcWIFuf%2BhdTlRJAZhWdsjTjSOQfPr4SbxRWa9hBjRXGFEnYkn3%2FxUuKf%2FF9QPrKp8BY6gdRLZ%2F4MPY5qOOoK%2FiTAeA%2BGI%2BtJq%2BftYMlN4CqmNKOw9Hd%2Fu9QLzpl9e5cZ9wae6vV5gPJxOU8xtY0r%2BK1qxfXw7NGkvv9T1c%2B4c4HNTOxggKmTevtTW8XaRr3Smu5YQjUZtl9jXK%2FNjwb9bJtY3OizwXpm6oRjEE3m%2ByTkER1EXqjnUhSplKnjA7lhNlxPtOqZQosFx3ecNsnFNJN92ZquPzMlITcZCMdcMdMTcFDDVEAGOHFu8DlLFXcabA0ZYoS8%2BTZmsfsYFIU5UJDOddWUVMOOeputnB9eO8LF6%2BmPErcBSQXFdehcwjsfhwgY6pgEn%2FCUYzf42PnbPSEu1peOq1DfuhP64FAvL0EMiMFWGs3KTzO1M9Q9jWJ%2FZo2%2FNJK0XGsKZmVI4zW378vsByrk35hKPd8vRb1ccyH8QtCtdXqKo2NUewktT%2FotJd4QqIppEy8sAZPhn9D8LpoKh0n806A6xNG3KA5Fuy7yC2sitpE0luYzaCN%2B2cmQV4%2BtW8gKo9w8FPhzbBCCkMJ9FYUoJEJEgaA16&X-Amz-Signature=0c6fd2a1de9ea269c2964185affaf5de78ef18fda81184a65fc3cf09f2d77fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
