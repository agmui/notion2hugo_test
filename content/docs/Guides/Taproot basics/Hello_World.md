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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXCIXNE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGhTvc2kZx6AleO0P3yUh2Z2WOfviAOL6aykydagZKawAiATAGkEB9s5p89Xw9WnbmGZ2ljP4AHCJd3w6cMVwfN7BiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONj%2F0XoKzWi%2Fl7A8KtwDKNbYZ1zo2DwfzOs%2BPTFmAAA92pPlDP6NFmLS58B1Izv8jf346xTlt%2BgdBI96fMlnumsYf%2BDRmZnqkCY3Y8dhAlojHzKygk%2F%2BQAdhW6lx1C2qjff8BFwbkxrmLdJENY3gDtVhFJ%2FHEpIpz3IYK1oLKjViaOEV8pO%2BJjL6XoirDxzvcIgwkQ4LR0bAEU97ny7IMiB4sbAmhONcW1AwpgA8tTJ54wBy54sop5lhSSJmUYKsI1B%2FrV6cjPuYTyGT4G%2FXfRLhwrPjPX%2Bho4HkcmGHTrW%2FJZ7v2UTkZN4z%2FbccTvYB65YsCXiE0Qw3ICsPE8KKY8k7CkI9QdnKfrQylobbDxa%2FP6oUMLCU5TviQovK0ADR5eD9%2F5mHQtGYrR9fBE6aUvjD90fzNpIa3k1jdIzDekN6YqVzEhCiYjuzaYt%2BPetJsBDT%2B9KuLH1%2Frt%2BIXPHJNBAsM%2BYfQMeROe9s4F87SitpVIQhhVX%2B5p5MI3DTphpDg1vKh3zkkJ%2BfGOLaCIxdeQbch52ll%2BiXCdo%2B8xvlI%2F9UAxmq%2Fr6a0YMtu1zhGZWaVixrShZeVSUE%2F7uYgJtD16DyN3iX9ZmKuADga1kugZcAtEYbiWhHmTieeGW0ZbGzFTt3Nj4H6818SaMw%2F6TawAY6pgGiWmiQKNcPSLPVB9A0l6rLOa%2FsD%2B4DmdZJnDI5RqpVLhlh%2FU8BmtjhHRXMmUZ6iLtfv6gtoa7ZJrTwZZEZT5K4zAXTIbdWH92fpG8sS2zjUrZrnLtMCdsr9%2FR1Yy%2FRdTiqWfF7lPwS01iXVIwpvTQqydx7ESwgBBQaUy7rx0DJJq8VPxaGwN6npDDIfUc1wH%2FD9pRHRdgYvu%2BCJpJDxcS8TX49BWtb&X-Amz-Signature=b52d048d3a121ffb66cf5886ea70a849bf73cada3695a1322f8caf50ce2d06c8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXCIXNE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGhTvc2kZx6AleO0P3yUh2Z2WOfviAOL6aykydagZKawAiATAGkEB9s5p89Xw9WnbmGZ2ljP4AHCJd3w6cMVwfN7BiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONj%2F0XoKzWi%2Fl7A8KtwDKNbYZ1zo2DwfzOs%2BPTFmAAA92pPlDP6NFmLS58B1Izv8jf346xTlt%2BgdBI96fMlnumsYf%2BDRmZnqkCY3Y8dhAlojHzKygk%2F%2BQAdhW6lx1C2qjff8BFwbkxrmLdJENY3gDtVhFJ%2FHEpIpz3IYK1oLKjViaOEV8pO%2BJjL6XoirDxzvcIgwkQ4LR0bAEU97ny7IMiB4sbAmhONcW1AwpgA8tTJ54wBy54sop5lhSSJmUYKsI1B%2FrV6cjPuYTyGT4G%2FXfRLhwrPjPX%2Bho4HkcmGHTrW%2FJZ7v2UTkZN4z%2FbccTvYB65YsCXiE0Qw3ICsPE8KKY8k7CkI9QdnKfrQylobbDxa%2FP6oUMLCU5TviQovK0ADR5eD9%2F5mHQtGYrR9fBE6aUvjD90fzNpIa3k1jdIzDekN6YqVzEhCiYjuzaYt%2BPetJsBDT%2B9KuLH1%2Frt%2BIXPHJNBAsM%2BYfQMeROe9s4F87SitpVIQhhVX%2B5p5MI3DTphpDg1vKh3zkkJ%2BfGOLaCIxdeQbch52ll%2BiXCdo%2B8xvlI%2F9UAxmq%2Fr6a0YMtu1zhGZWaVixrShZeVSUE%2F7uYgJtD16DyN3iX9ZmKuADga1kugZcAtEYbiWhHmTieeGW0ZbGzFTt3Nj4H6818SaMw%2F6TawAY6pgGiWmiQKNcPSLPVB9A0l6rLOa%2FsD%2B4DmdZJnDI5RqpVLhlh%2FU8BmtjhHRXMmUZ6iLtfv6gtoa7ZJrTwZZEZT5K4zAXTIbdWH92fpG8sS2zjUrZrnLtMCdsr9%2FR1Yy%2FRdTiqWfF7lPwS01iXVIwpvTQqydx7ESwgBBQaUy7rx0DJJq8VPxaGwN6npDDIfUc1wH%2FD9pRHRdgYvu%2BCJpJDxcS8TX49BWtb&X-Amz-Signature=4c0f97c16aac294fb2ce8d0ac8358c980f503c5f10b4476b98cdb492007dc83d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
