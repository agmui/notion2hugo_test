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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLCRESX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxH%2FYcXQl2ql1lzhgvyM5vAjq5qyjPrhIkFjA9CH3WGAIhAORA14lO9qdwn1jvXIVuVN1oE2FL97AGiuXsGB1BmV3gKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF3hEnY5eus6DoNysq3AOT6clyJgQv8rH62jeMBsIfh2xgClhulw8wkUQibiSPRzsU5qEd%2BbjTMREXg4gCrscRinSdx4IgTBxil0ZMk1ne5dWCixGg9RI0sTqtnpg%2Bb%2BoZkUO4XNmqPzkBE8ztSasX8Jm39Z%2FEixanfYl%2FEsv0LvOwyMw3qtpR4ZbFIQKh8oPz3FTBvCTeNg%2BJ%2B3lLGhRw0F49FgM7PE9Z6JZX07n8fBZYI1lkLQEaEjv%2BDmObUtgji4BZdGmGxkDXBR40%2FGAkrUjuUkqYJAJ3r5c8wW1HlSMk6nrIy%2BuWcDdIvtLMsW9QaqizOVY%2FUtUYAWEEpgno3h2o5SuXkD1OVvgfiSo0czixGDKin7Ie6IKaU7h8oJbqmdvBYcabNLiyZIYs4zfhVFJzENGzX5wkQLb%2FWbRRn5tcBrbJCjJ1%2B8kj6QlkYoYfHMd%2BGqOoCf4BdBtLOmjLhNDmKDaxFQY9Vx4xzoDKBrFdv%2BYX%2BUSQwv1wQMF8bjey3U1GUXv6349LCz%2F684UQx1mq6xdVnmvv6BnEHnAear0QUUmULn3OQ4fixZbyYf0E1c2ubpKweRrV7vt4zr0dU5DEdkrw69I7%2F9DZW0qKaa7F801bW62HdCHaX0RjqOHJh7YZaoSmqzkfKjDNwZ69BjqkAa3mLIFcD%2F%2Ffk7h0M5TfFmeO76t22NbKDIa3RiRqSk%2FSt%2FVPpz%2F%2FP01zEhva%2By6TqBeXnbGczpKhcExJFYJJXLgl84bQ1epPisPJ92ty9pLWHVaZSEcNYcCEK7GXgZ9%2FAGQ8Od0uzeckng%2FPh%2B%2BtSoYNUSa3rc%2BBLqSYC8zw%2B%2FrGjWNrbbEKYJiOvdFXNz9paxCqEWZmpQkwvA3zMqGI1aS2%2FguL&X-Amz-Signature=da2b102caa8727411fd9f39868cf07e790099c996540fdd40b5d07c450227927&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLCRESX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxH%2FYcXQl2ql1lzhgvyM5vAjq5qyjPrhIkFjA9CH3WGAIhAORA14lO9qdwn1jvXIVuVN1oE2FL97AGiuXsGB1BmV3gKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF3hEnY5eus6DoNysq3AOT6clyJgQv8rH62jeMBsIfh2xgClhulw8wkUQibiSPRzsU5qEd%2BbjTMREXg4gCrscRinSdx4IgTBxil0ZMk1ne5dWCixGg9RI0sTqtnpg%2Bb%2BoZkUO4XNmqPzkBE8ztSasX8Jm39Z%2FEixanfYl%2FEsv0LvOwyMw3qtpR4ZbFIQKh8oPz3FTBvCTeNg%2BJ%2B3lLGhRw0F49FgM7PE9Z6JZX07n8fBZYI1lkLQEaEjv%2BDmObUtgji4BZdGmGxkDXBR40%2FGAkrUjuUkqYJAJ3r5c8wW1HlSMk6nrIy%2BuWcDdIvtLMsW9QaqizOVY%2FUtUYAWEEpgno3h2o5SuXkD1OVvgfiSo0czixGDKin7Ie6IKaU7h8oJbqmdvBYcabNLiyZIYs4zfhVFJzENGzX5wkQLb%2FWbRRn5tcBrbJCjJ1%2B8kj6QlkYoYfHMd%2BGqOoCf4BdBtLOmjLhNDmKDaxFQY9Vx4xzoDKBrFdv%2BYX%2BUSQwv1wQMF8bjey3U1GUXv6349LCz%2F684UQx1mq6xdVnmvv6BnEHnAear0QUUmULn3OQ4fixZbyYf0E1c2ubpKweRrV7vt4zr0dU5DEdkrw69I7%2F9DZW0qKaa7F801bW62HdCHaX0RjqOHJh7YZaoSmqzkfKjDNwZ69BjqkAa3mLIFcD%2F%2Ffk7h0M5TfFmeO76t22NbKDIa3RiRqSk%2FSt%2FVPpz%2F%2FP01zEhva%2By6TqBeXnbGczpKhcExJFYJJXLgl84bQ1epPisPJ92ty9pLWHVaZSEcNYcCEK7GXgZ9%2FAGQ8Od0uzeckng%2FPh%2B%2BtSoYNUSa3rc%2BBLqSYC8zw%2B%2FrGjWNrbbEKYJiOvdFXNz9paxCqEWZmpQkwvA3zMqGI1aS2%2FguL&X-Amz-Signature=f5a072370d4a4a611b0e80fd470f920adfa4ed2b5103b69d4fbf01b51e2dff90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
