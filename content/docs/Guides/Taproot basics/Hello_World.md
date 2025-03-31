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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAC63JQD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIE33wJqRo%2BbwFYwK%2F%2F0vutwGWttFxrV%2BZ3ZJ%2B1oRcvfcAiBqsGy%2BDeFcIH91zrNnrpRbM2T7YWe9uXF%2Bz1uvLxZyKiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66kPzlBTzW1jn3maKtwD1riigW%2Bj9f1ObqWsfmc8jrEzTH3%2F%2FbbMFIDjPQ3ywnBRyEfBegELa2m8g6Oj3qjTQzbRO6hY1rlz6EVo3F%2B1%2BNuFaP0oqTueuiYl6fPPJlcLMLaDfTB2bNr%2ByWtDDNQ9FNWUn%2FEYeGT0FWmly6NC%2BfM8YcN7QhuJ%2FpDYQFfpwPsJvQn%2FH29aT%2F8z71alrDaF9V8cjGHQNzW96FUIAZ%2BJ%2FWU3bYFHSublVrXXjrveV9qrfb483XOXqs8yIjk5GpE%2Bn3yuUimjb5b1K0416%2BdEE6qaTWEN%2FoYxaaZYlwuAsNJwcHp5SFRp34UteNwVENBd2Kk6b%2BUF0Kc8M2ES5vX4ZiZb3u1dvbcYelp4dwFVHSZDOipocoi7HDiUbb6V%2BNtZJm%2BDKvhNdhryWBbCbYjfsgbZhY6AY23dbmfOtYvkk5lBqzXoeJX4g2WlNpAX2c1%2BlpDsNzgBv4%2BxFLJiOlQaVuMj4CqfPyxn3g31CgukmoHNftWVZfECrbUfa0utCXI4K14D5gnGVH8lZtYjXpF04ktCkZqvjjqANSCthu4lLbGBVaLXN54djt0tLPYe9L9W519GE3wr7W7HKluFZfNE8KpUXfaIogy%2F0sQMoakjQmg1w19IeljpLhYWXzIw24KrvwY6pgEwpa%2F6sA0RjZDhXyvr9FqmzB20VdkU6ans4mNHQEysbZ2xSoh1NB0kCLOlmEh83hsTvJJwzHivUJJkKvXomHkruGkERcybyzOGPo5bkTPcYKheMDW35D%2FyrTR6IWwK5UCe7HgQZvT00PEZNDkN4ieUySkmL2NNc%2BssNeBUZpnysix5XbVlcjmKmzeIx2A%2FY8koZrkUVI8hZ5B7bb3RNHjtFzwoId7g&X-Amz-Signature=63fbace9017cbe259d2491bf31ec2c9cf8fb582bbd45e2c21413d961ac8d3c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAC63JQD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIE33wJqRo%2BbwFYwK%2F%2F0vutwGWttFxrV%2BZ3ZJ%2B1oRcvfcAiBqsGy%2BDeFcIH91zrNnrpRbM2T7YWe9uXF%2Bz1uvLxZyKiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66kPzlBTzW1jn3maKtwD1riigW%2Bj9f1ObqWsfmc8jrEzTH3%2F%2FbbMFIDjPQ3ywnBRyEfBegELa2m8g6Oj3qjTQzbRO6hY1rlz6EVo3F%2B1%2BNuFaP0oqTueuiYl6fPPJlcLMLaDfTB2bNr%2ByWtDDNQ9FNWUn%2FEYeGT0FWmly6NC%2BfM8YcN7QhuJ%2FpDYQFfpwPsJvQn%2FH29aT%2F8z71alrDaF9V8cjGHQNzW96FUIAZ%2BJ%2FWU3bYFHSublVrXXjrveV9qrfb483XOXqs8yIjk5GpE%2Bn3yuUimjb5b1K0416%2BdEE6qaTWEN%2FoYxaaZYlwuAsNJwcHp5SFRp34UteNwVENBd2Kk6b%2BUF0Kc8M2ES5vX4ZiZb3u1dvbcYelp4dwFVHSZDOipocoi7HDiUbb6V%2BNtZJm%2BDKvhNdhryWBbCbYjfsgbZhY6AY23dbmfOtYvkk5lBqzXoeJX4g2WlNpAX2c1%2BlpDsNzgBv4%2BxFLJiOlQaVuMj4CqfPyxn3g31CgukmoHNftWVZfECrbUfa0utCXI4K14D5gnGVH8lZtYjXpF04ktCkZqvjjqANSCthu4lLbGBVaLXN54djt0tLPYe9L9W519GE3wr7W7HKluFZfNE8KpUXfaIogy%2F0sQMoakjQmg1w19IeljpLhYWXzIw24KrvwY6pgEwpa%2F6sA0RjZDhXyvr9FqmzB20VdkU6ans4mNHQEysbZ2xSoh1NB0kCLOlmEh83hsTvJJwzHivUJJkKvXomHkruGkERcybyzOGPo5bkTPcYKheMDW35D%2FyrTR6IWwK5UCe7HgQZvT00PEZNDkN4ieUySkmL2NNc%2BssNeBUZpnysix5XbVlcjmKmzeIx2A%2FY8koZrkUVI8hZ5B7bb3RNHjtFzwoId7g&X-Amz-Signature=cea5c59112b9c3088c7198a8f3966b1f219d030b4dd1b3ce38b4d1d988a3bf90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
