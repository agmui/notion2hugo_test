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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TFSE5B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW1aoGfwpsPwprtsj6pb8nKVKBD27iskjU484bMVd8%2BAiEA8As%2FketwR0e3evrsDiIUbakjeUUfK8qNurFmvrLXHBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPp7JzSoNVDBSGZZCrcA71qZGbDAru8MYUOVV0ff0v7T7oLKOuCSckXgixh9UxZqhkJ%2F%2BU163Agarn4yYT7zZ%2B84QlsLs3bIhST5wT8P5Tr9jVdTSERccT%2BpOLUeURNEdE5M6NO4hwUOTapvsiTqKuHDMPpy4YKLapX18WZqyhWQoOLUdVacvcdHX6JNzew0yIE4ytgZeB7bMNFH9bEQM5chma45KJE0dvSzcJYU7DQ1%2BEcquj%2BHu6UkiobsOckbAtsgPvfpFMeK7lKUiSjxzVyRdCva6tDltfeQEIH1Po0htEZYfcmMJTTg%2BcZ%2FHfb60Laht7LLG9h2YfoR0ajF1rb%2FZqCBTfTeCFn4OJnxZX0DzXRnCdC3vO6TOLaJXWxjY0gU4w%2FqUFUK0Nmcc%2B%2FU3ChE%2Ft%2FtmxbVYCB0pj94S1VSF7woWl84vPn%2BiZe%2B9Tx2f98RkzWD1K6vPM%2FCZExNfrEkVZWBIfWYTnodAjnuugCzAoGvmvIUi8ox%2FXT0BUrCPBCf4EV3qW%2Fdm6JUvAbuwpgJlKuCu9LI59HgA8t2OCqUnekwzwMWV%2FcaWDFjnybL6CjH%2FiapI3ob9tz0JMuHihfRuC%2FSrYBpAoReSkgZuqPaWG4MO7XNmnuTt5ERDRX2%2BmcGFrcAN8JpvYbMPCoxMMGOqUB2eNamXcQinmgQwyvsdXmCMMO7VdwGtHxHj%2BCs4PrDkR5xuq5Ade7rZCQXymL1C3hRte5TDP2PKhrpcaonHsgx2h8eK7EXYES42L6%2FiVMJdy3jAHYdtxnrkJ87ctYpeQ9UIwDxGhP6LD8xXfEYlcLuiE%2F3htKjbQ3KA9EQMh6whzJLDzKMyEaDQQz08kQxRkWctI8rVVHw7%2BlTnSqM%2FzawmaQ4l6H&X-Amz-Signature=199f060c8f96ff2d9a9c98cc55d1d7e9f72404c10197d958601ef8b0ec1b4c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TFSE5B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW1aoGfwpsPwprtsj6pb8nKVKBD27iskjU484bMVd8%2BAiEA8As%2FketwR0e3evrsDiIUbakjeUUfK8qNurFmvrLXHBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPp7JzSoNVDBSGZZCrcA71qZGbDAru8MYUOVV0ff0v7T7oLKOuCSckXgixh9UxZqhkJ%2F%2BU163Agarn4yYT7zZ%2B84QlsLs3bIhST5wT8P5Tr9jVdTSERccT%2BpOLUeURNEdE5M6NO4hwUOTapvsiTqKuHDMPpy4YKLapX18WZqyhWQoOLUdVacvcdHX6JNzew0yIE4ytgZeB7bMNFH9bEQM5chma45KJE0dvSzcJYU7DQ1%2BEcquj%2BHu6UkiobsOckbAtsgPvfpFMeK7lKUiSjxzVyRdCva6tDltfeQEIH1Po0htEZYfcmMJTTg%2BcZ%2FHfb60Laht7LLG9h2YfoR0ajF1rb%2FZqCBTfTeCFn4OJnxZX0DzXRnCdC3vO6TOLaJXWxjY0gU4w%2FqUFUK0Nmcc%2B%2FU3ChE%2Ft%2FtmxbVYCB0pj94S1VSF7woWl84vPn%2BiZe%2B9Tx2f98RkzWD1K6vPM%2FCZExNfrEkVZWBIfWYTnodAjnuugCzAoGvmvIUi8ox%2FXT0BUrCPBCf4EV3qW%2Fdm6JUvAbuwpgJlKuCu9LI59HgA8t2OCqUnekwzwMWV%2FcaWDFjnybL6CjH%2FiapI3ob9tz0JMuHihfRuC%2FSrYBpAoReSkgZuqPaWG4MO7XNmnuTt5ERDRX2%2BmcGFrcAN8JpvYbMPCoxMMGOqUB2eNamXcQinmgQwyvsdXmCMMO7VdwGtHxHj%2BCs4PrDkR5xuq5Ade7rZCQXymL1C3hRte5TDP2PKhrpcaonHsgx2h8eK7EXYES42L6%2FiVMJdy3jAHYdtxnrkJ87ctYpeQ9UIwDxGhP6LD8xXfEYlcLuiE%2F3htKjbQ3KA9EQMh6whzJLDzKMyEaDQQz08kQxRkWctI8rVVHw7%2BlTnSqM%2FzawmaQ4l6H&X-Amz-Signature=95ef0429a770815b132ba5c7a643f282b0f58b3e660e827f56977777e6121d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
