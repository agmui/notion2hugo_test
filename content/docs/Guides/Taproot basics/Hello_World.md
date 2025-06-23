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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINXJLJV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCgmc9Rb6Uz%2FFWBO3zAT9iUBZqMUMggaw6cbyJc9igyaAIhAJ7QsyN28GdWtO2oBdOrzxFRtfrvsotZnhhNhPniV0i0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPFGqtG6d2%2BmZHdIq3AOBNKLGJ711nLLGYmuedLTk6Ob0fom%2FVrzq5owC2EfMGqMvH4mdoPdjz%2B1O5pwrYUnt4cZECqTDHmwnrb9kYR9ASwU0RkG2JM5xGH0dg9w%2B99biR9dWxcrU2zk8%2BCoVD3tgw3fEBYFybizcZd3Iz3LQB%2Fg1Cf5q7fia8XCw6m1ak%2FL7Rp3p2sLXKVrKK4reXh%2BDzK8tOhNSD%2Bk4gs5txctir%2FFb5yE41pP4ZmOlaB3UBo%2BUmV4gou8KlRo%2B5F%2FxsZ3A4wJkaJEL6TGLZ%2BQwKEYsg9wjDDzi1UHe4XRGDXf7I2BzJP%2BVhdGhrmmlNR78PnxKIu6A%2Fg51F3fzv6PnSQQhIIpqLLrHJLznt0STlEpXYxkdYw6fW2AYgiZUJKGAyxBSgm%2B%2FLPWtMLg7%2FBT2%2BtkICHhLRNhLITrzU3sHKlj6mMs1644tPnRPS1AHWDs32Gzt5ymQEU%2BwiLoBecq5jMBoKTHBe%2F4lwoFEpu8AdPCi7XcszLlUNWn3CatTrYXc8eKmGZBR1aoitGt2purK70E2AD5wtMflLrGuZ3YrHyWJYjfT75ELlTOdTfJLEz71Qucg85OUFJK5Hm0ctLhwCOqaCfZ8DGG%2FOeTtzanJKGelE6%2BWtPMKmZq64uvoyTDMr%2BPCBjqkAQF303ibgsylDINobiqiVX0eJURjYpKPAyk4U2R%2BkAWXCgdZJ7FA5DBbWuQEcXNgxwjusJ8qVTk0TlztwNlJoeU3pz1TwlGghprgzjGs0D4kijgtIrPuJSX23BCcRqv0coXAeDzLtE8WkMOVL7tW%2BWPP187wbV4JqdbovYSyMaurPHAy9K8VCzsCkU6cqL9HDckKhEy%2F3YX0NnyFFSu4gkAtpwkF&X-Amz-Signature=1e41269b1363091909405243f5899063fc23cec8b0e0d5b938a9a2e6172fe6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINXJLJV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCgmc9Rb6Uz%2FFWBO3zAT9iUBZqMUMggaw6cbyJc9igyaAIhAJ7QsyN28GdWtO2oBdOrzxFRtfrvsotZnhhNhPniV0i0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPFGqtG6d2%2BmZHdIq3AOBNKLGJ711nLLGYmuedLTk6Ob0fom%2FVrzq5owC2EfMGqMvH4mdoPdjz%2B1O5pwrYUnt4cZECqTDHmwnrb9kYR9ASwU0RkG2JM5xGH0dg9w%2B99biR9dWxcrU2zk8%2BCoVD3tgw3fEBYFybizcZd3Iz3LQB%2Fg1Cf5q7fia8XCw6m1ak%2FL7Rp3p2sLXKVrKK4reXh%2BDzK8tOhNSD%2Bk4gs5txctir%2FFb5yE41pP4ZmOlaB3UBo%2BUmV4gou8KlRo%2B5F%2FxsZ3A4wJkaJEL6TGLZ%2BQwKEYsg9wjDDzi1UHe4XRGDXf7I2BzJP%2BVhdGhrmmlNR78PnxKIu6A%2Fg51F3fzv6PnSQQhIIpqLLrHJLznt0STlEpXYxkdYw6fW2AYgiZUJKGAyxBSgm%2B%2FLPWtMLg7%2FBT2%2BtkICHhLRNhLITrzU3sHKlj6mMs1644tPnRPS1AHWDs32Gzt5ymQEU%2BwiLoBecq5jMBoKTHBe%2F4lwoFEpu8AdPCi7XcszLlUNWn3CatTrYXc8eKmGZBR1aoitGt2purK70E2AD5wtMflLrGuZ3YrHyWJYjfT75ELlTOdTfJLEz71Qucg85OUFJK5Hm0ctLhwCOqaCfZ8DGG%2FOeTtzanJKGelE6%2BWtPMKmZq64uvoyTDMr%2BPCBjqkAQF303ibgsylDINobiqiVX0eJURjYpKPAyk4U2R%2BkAWXCgdZJ7FA5DBbWuQEcXNgxwjusJ8qVTk0TlztwNlJoeU3pz1TwlGghprgzjGs0D4kijgtIrPuJSX23BCcRqv0coXAeDzLtE8WkMOVL7tW%2BWPP187wbV4JqdbovYSyMaurPHAy9K8VCzsCkU6cqL9HDckKhEy%2F3YX0NnyFFSu4gkAtpwkF&X-Amz-Signature=7e12126a4e551e102f8c51ca215dc1ba2df6a634944182dc7f53eaa091614b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
