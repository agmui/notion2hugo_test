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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QGJNI4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8xq%2F%2FSNqWN1PtrYdWJw4MMZXv8wx8XXDJT1thkKsgYAiBeLNxk3mx5MN5doSxeyhUmO7MSCAYSKhIKukApm2SfSSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMOzcu2CsPq8jHy7FXKtwD%2FiaMtc3FVjIYv8Zn9WwHvWGPn3Uig9JHxQVuodWYN8PqvObdt%2BVZUcs18HdINdtNv%2BvPE5sPO8xMqyHRf8b0zNZ%2F14GvVmUlJmT61xXhb9fVR2hJlIJXi8h6XQlNGyap0Ko5B%2BdBqYKIY33rwaUUGl3ybgOx7D3wl7Mf4KyV3QcDT%2Bz7N4GMYWKCNu7FD4S5fm%2FuZ3lFF4BwMGEpzL0N%2BflCbqgpo85k%2FcEgArhax5y665EMYXwyMUAM55U72YJNpLjZ%2FlObB4zcvvr31Wb0C%2FZY%2FAhCYLdPNQukHXM%2FCa4PArRtuZQ8n1FwxEsPgXyIo7febFSYDEmPlxOLFP%2F2wzjY%2F9MCG8RBPX9jNeALuKLW%2BppGRB43C9o8PG01w6hrmy3yBofHcvis7XF174JAgissGyYVC22tea4h59As%2FkS265Pcb4VTAxt%2BL9Y5eiE6B0RjOczqwRdlA2MIDyyg3k8kHR2UJtfq5JpBA19JUHOMUnLMh7UxQvcGQxJgVu6VOHafSyWCk%2FhYtr2CR85DUi6W%2BlxgETTHhu4ykbg4fdzR64AuTTn1xoA%2F2HFNgV%2F7GEgRpaLu%2F0FWL0iQlqRdxeh9h2zQTrYxIdev64kstn2gJu%2FADGvpUWsWx9EwjdzcvgY6pgG%2B5fNZeaC9t9gAcPBuTvqZlquTs59O%2FcieNDkrWpzMovaYKqogF3fjIQynAtxaqAJe16qyV%2FFQshSiuN5qRRTnZ28c4Nkbk5x9S4Zc%2BcmHkkNyo6tu3%2BX616CFFaWjWNcgQSv50aCI6P1vcSq688cYv%2BIq3ogyrE1axYfyJUOe921No0onRN%2BSzuWEG3%2FImi2dAlPde9YBCfae7vRccHJO%2BCJfd5C7&X-Amz-Signature=e2c5bc2f11e6bc3f5ce04a80a45c0f3813607a644e2db3edd069c10c76abb5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QGJNI4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8xq%2F%2FSNqWN1PtrYdWJw4MMZXv8wx8XXDJT1thkKsgYAiBeLNxk3mx5MN5doSxeyhUmO7MSCAYSKhIKukApm2SfSSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMOzcu2CsPq8jHy7FXKtwD%2FiaMtc3FVjIYv8Zn9WwHvWGPn3Uig9JHxQVuodWYN8PqvObdt%2BVZUcs18HdINdtNv%2BvPE5sPO8xMqyHRf8b0zNZ%2F14GvVmUlJmT61xXhb9fVR2hJlIJXi8h6XQlNGyap0Ko5B%2BdBqYKIY33rwaUUGl3ybgOx7D3wl7Mf4KyV3QcDT%2Bz7N4GMYWKCNu7FD4S5fm%2FuZ3lFF4BwMGEpzL0N%2BflCbqgpo85k%2FcEgArhax5y665EMYXwyMUAM55U72YJNpLjZ%2FlObB4zcvvr31Wb0C%2FZY%2FAhCYLdPNQukHXM%2FCa4PArRtuZQ8n1FwxEsPgXyIo7febFSYDEmPlxOLFP%2F2wzjY%2F9MCG8RBPX9jNeALuKLW%2BppGRB43C9o8PG01w6hrmy3yBofHcvis7XF174JAgissGyYVC22tea4h59As%2FkS265Pcb4VTAxt%2BL9Y5eiE6B0RjOczqwRdlA2MIDyyg3k8kHR2UJtfq5JpBA19JUHOMUnLMh7UxQvcGQxJgVu6VOHafSyWCk%2FhYtr2CR85DUi6W%2BlxgETTHhu4ykbg4fdzR64AuTTn1xoA%2F2HFNgV%2F7GEgRpaLu%2F0FWL0iQlqRdxeh9h2zQTrYxIdev64kstn2gJu%2FADGvpUWsWx9EwjdzcvgY6pgG%2B5fNZeaC9t9gAcPBuTvqZlquTs59O%2FcieNDkrWpzMovaYKqogF3fjIQynAtxaqAJe16qyV%2FFQshSiuN5qRRTnZ28c4Nkbk5x9S4Zc%2BcmHkkNyo6tu3%2BX616CFFaWjWNcgQSv50aCI6P1vcSq688cYv%2BIq3ogyrE1axYfyJUOe921No0onRN%2BSzuWEG3%2FImi2dAlPde9YBCfae7vRccHJO%2BCJfd5C7&X-Amz-Signature=f4e8992b107e77da02d72d496c766d6fb9c1397ca898fb913b6faed198fb9c82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
