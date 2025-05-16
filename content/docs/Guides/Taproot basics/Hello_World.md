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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEA2MNU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgfppYz5XYsSkOkxSQ37U6GcwDLEwIDokNNWGBExw21gIhAKFVyk%2BdXPAHlOzOMmqJ86yxxAVHF%2Fo%2FPCoQqBMVXO82Kv8DCEQQABoMNjM3NDIzMTgzODA1IgziFnB3qmg0cEpsqoUq3ANzrqCA1aXpHxn3KTvmFMpTjjLW7USvAF8YFdlvfQ9U%2BOIiBpHZRRFY1bVO3c8KrNsn1Pi075vsxCAgxP1Bz3IvRLJnn0rI2R03t1i3MPQVF2e%2BczQp5hu0CQf1Rl1duwa6ZHqKLkSZsZpjnwlq2c10v%2Bs1IeDSTXRW6qxuqQA9f6MceobI775XxbzGmzLdP7wYquSWGU7TBAejGaQNZ%2Fk2VWBO%2BpCgC7jpEeNyM%2F7XqnUh5j0Is%2FOaiZVwIFMYcw1pffl71XMfIGlQPzS%2BAA35m3Tq%2BkCzVDZ%2BiVO539lGeLdelO5arvbXJ7IPlBjftG%2BtG3mNayJpbVxaCip0%2BDJNlI0v5oUyNtR58gjJOyQE62k1M2M8%2FobKJe1wWPr7XTiVyULV68sWpcaLwmxbn9QJqxqIq21bXzgKdEPWmF4w5mPBFW0JsUuZjLa7glUknf%2Bdp8436%2BGKzfWu3OVRWj9Vs87AJJNI1CEkKW2XT414ijw3FM8tf1vpL5nRgOkNdlKLFyAxrMWS1O47QUdDufV7FDlpA1gktIESaMsS1gOpK%2FJ8ZR4dAwnHGs8zzPCuPawu3flKFddd7O2YkVDYpQ70dGe6%2BGKLIEITwiac%2Bzgy38WfIVTYwMGLvPWxtDCaqJzBBjqkAaM3DVBx87o8GKzZI4SAO8NK2fjYJl6eLCXL%2FuJApQALr8P8Oln48uZJDdGUtZgedA6uRumd4DlEWlxA91a%2FP9i7cKTGEnhlqj01JjR3DaEjGUM2XCxqnDexSmCeKObXL47kMgL6HiqFLETiUjTKtXueJTiJicq657ePxKqhlW7yIUBfCPTGz8LYrUGvxEzn7WYDgUZGHDjME5boxwH16rWLF4Bp&X-Amz-Signature=ecbfcbad7760816ec2ffd8edc29788b690d54641a8740d1449431e2459577139&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEA2MNU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgfppYz5XYsSkOkxSQ37U6GcwDLEwIDokNNWGBExw21gIhAKFVyk%2BdXPAHlOzOMmqJ86yxxAVHF%2Fo%2FPCoQqBMVXO82Kv8DCEQQABoMNjM3NDIzMTgzODA1IgziFnB3qmg0cEpsqoUq3ANzrqCA1aXpHxn3KTvmFMpTjjLW7USvAF8YFdlvfQ9U%2BOIiBpHZRRFY1bVO3c8KrNsn1Pi075vsxCAgxP1Bz3IvRLJnn0rI2R03t1i3MPQVF2e%2BczQp5hu0CQf1Rl1duwa6ZHqKLkSZsZpjnwlq2c10v%2Bs1IeDSTXRW6qxuqQA9f6MceobI775XxbzGmzLdP7wYquSWGU7TBAejGaQNZ%2Fk2VWBO%2BpCgC7jpEeNyM%2F7XqnUh5j0Is%2FOaiZVwIFMYcw1pffl71XMfIGlQPzS%2BAA35m3Tq%2BkCzVDZ%2BiVO539lGeLdelO5arvbXJ7IPlBjftG%2BtG3mNayJpbVxaCip0%2BDJNlI0v5oUyNtR58gjJOyQE62k1M2M8%2FobKJe1wWPr7XTiVyULV68sWpcaLwmxbn9QJqxqIq21bXzgKdEPWmF4w5mPBFW0JsUuZjLa7glUknf%2Bdp8436%2BGKzfWu3OVRWj9Vs87AJJNI1CEkKW2XT414ijw3FM8tf1vpL5nRgOkNdlKLFyAxrMWS1O47QUdDufV7FDlpA1gktIESaMsS1gOpK%2FJ8ZR4dAwnHGs8zzPCuPawu3flKFddd7O2YkVDYpQ70dGe6%2BGKLIEITwiac%2Bzgy38WfIVTYwMGLvPWxtDCaqJzBBjqkAaM3DVBx87o8GKzZI4SAO8NK2fjYJl6eLCXL%2FuJApQALr8P8Oln48uZJDdGUtZgedA6uRumd4DlEWlxA91a%2FP9i7cKTGEnhlqj01JjR3DaEjGUM2XCxqnDexSmCeKObXL47kMgL6HiqFLETiUjTKtXueJTiJicq657ePxKqhlW7yIUBfCPTGz8LYrUGvxEzn7WYDgUZGHDjME5boxwH16rWLF4Bp&X-Amz-Signature=5a704a7f6c9e5bc2a8e94035db89993afd2b160cf399a987c96e08a27fa6101c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
