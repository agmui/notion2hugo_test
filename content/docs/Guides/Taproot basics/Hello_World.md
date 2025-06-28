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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSFPVVTG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCY2ER3uAgEvoXtN0WTgD7fGlXF45DEbo2qWl65H9HQIhANRz5O8aBpqm394WE9zX4Jwp4kaGpPezKSYnEo%2BDDMviKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurFmqROC8RSJzE%2BYq3AMiUrI6txKOMv6CLV4wAGHtBNvxEgAhejNTi2VlBXyUHMcccrQbmqfl70gtAh59v%2BcXtod4VCSOusa%2BPwHdoDcJIEdYOZnZKUu7MethHQCOoAsmUTbrwqOqbe26j01iF19QkWkiKXXppXWlB%2BMYUpjTMsm2bxBapztVDr61g4LplaypUM56EuA9wXLyaTQZtL6hKyxTUOTQLj4QYVxZmm5FsHooK%2FQzDWYiz9upUojiHLm0kuw3UN6zG05XNMlMXQAyvtTcOKRT%2BaWdxtcE%2BsccAm1khERoWO%2BjG01nt31iujsaeCMAJ536UW05pzStcLle0ntmKS4pS%2BMT7nQu3x%2ByJ025Lo2ijEA8cJdy6gfQPrDs%2BU1XWbPoNa5IMHDN%2FsenbXGil%2FOGwzuRGqhw8GahwR9FgwxCveZR4SyfYI5FQ81URs3QQu0yemsguyHYFzosldj0NjCEj4%2FgEjLrdP7nuB3XzKDIccwUKv7PRWAtiUkuiCQSdojHprmuyjYUMEi3LfCArE5mfrg2K%2BCV31Tknq03n5vASSfNZcJoEkoRLxkTTQzVFrBD6M8tA07%2FOF98CeNVQ%2BgdIKutDgRSF%2BMs00HS0nC2yywJ5yZBLsb8WP%2FH%2FlU2wlpRRhEUjjCWyv7CBjqkAUjK50cT3Dr66xETSHVss5dibQewnZdWGCBwsojPGmZJjZmN76Fzlg%2BL%2BsA3FIxDYriSU7fnFbLNN1Lv8nx5VV%2BXsllm9oUjf7VURGFgQiLhGKok5L3AvYsZQYWbgOTeYyeaVrFs9u368QUMtH3OWf%2FlJgKkM7lyF99naR9ug8bqiOk1Uyx9d1dGv1fg%2BrQhm%2BWRDghnHcx5iwgq%2Fj9xvB7zuLNT&X-Amz-Signature=6d5627ee968ef843e2018fcc0efa4df7415ec1d7229ec42678f6ff2e344a3ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSFPVVTG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCY2ER3uAgEvoXtN0WTgD7fGlXF45DEbo2qWl65H9HQIhANRz5O8aBpqm394WE9zX4Jwp4kaGpPezKSYnEo%2BDDMviKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurFmqROC8RSJzE%2BYq3AMiUrI6txKOMv6CLV4wAGHtBNvxEgAhejNTi2VlBXyUHMcccrQbmqfl70gtAh59v%2BcXtod4VCSOusa%2BPwHdoDcJIEdYOZnZKUu7MethHQCOoAsmUTbrwqOqbe26j01iF19QkWkiKXXppXWlB%2BMYUpjTMsm2bxBapztVDr61g4LplaypUM56EuA9wXLyaTQZtL6hKyxTUOTQLj4QYVxZmm5FsHooK%2FQzDWYiz9upUojiHLm0kuw3UN6zG05XNMlMXQAyvtTcOKRT%2BaWdxtcE%2BsccAm1khERoWO%2BjG01nt31iujsaeCMAJ536UW05pzStcLle0ntmKS4pS%2BMT7nQu3x%2ByJ025Lo2ijEA8cJdy6gfQPrDs%2BU1XWbPoNa5IMHDN%2FsenbXGil%2FOGwzuRGqhw8GahwR9FgwxCveZR4SyfYI5FQ81URs3QQu0yemsguyHYFzosldj0NjCEj4%2FgEjLrdP7nuB3XzKDIccwUKv7PRWAtiUkuiCQSdojHprmuyjYUMEi3LfCArE5mfrg2K%2BCV31Tknq03n5vASSfNZcJoEkoRLxkTTQzVFrBD6M8tA07%2FOF98CeNVQ%2BgdIKutDgRSF%2BMs00HS0nC2yywJ5yZBLsb8WP%2FH%2FlU2wlpRRhEUjjCWyv7CBjqkAUjK50cT3Dr66xETSHVss5dibQewnZdWGCBwsojPGmZJjZmN76Fzlg%2BL%2BsA3FIxDYriSU7fnFbLNN1Lv8nx5VV%2BXsllm9oUjf7VURGFgQiLhGKok5L3AvYsZQYWbgOTeYyeaVrFs9u368QUMtH3OWf%2FlJgKkM7lyF99naR9ug8bqiOk1Uyx9d1dGv1fg%2BrQhm%2BWRDghnHcx5iwgq%2Fj9xvB7zuLNT&X-Amz-Signature=85b5bd2733f3f504d715a6c8dc3c3cdc1bc6d9a83f8f8a90fae2625cb260f814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
