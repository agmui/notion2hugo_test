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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKVH2SI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIArS%2F8Q7LfmLQfqS3VYVynA83SCJ%2FHUyUyMDWk3O4PzcAiBazKR%2FbsI%2F200kuanbso1U%2BZpEsz%2FU%2FC2rYUUoCmbNnir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKND%2BNYHnCLmicqeSKtwDvs6LzmWYvmY36vU5hjGjJaVm2f8hfC0eaZwHmqhy%2BL2iBzgtn%2BWGcOWI5%2Fbu%2BcgMNFmWIAIRQQM89DRpV7mkByh4w9JTXbJzn9M9pbcOYO4U9VlIkjlGhg2KU7uv8J75S2vy1A0MnfZ7dsWcU1ed0iNnZEq%2F4prXIbIdbQlnIApldOU0uf7dBpwXpfibx3EuauxJaa0uQEsrmPOgvCedR9vAH8D1g3KjK7mjET8TjADOxswZC2Bc98NuX2GaDnOikUYMAd1rJTk5usKF7fJ9VgSxlwpxPo%2FOEfiU5KduUutr2hKzjZe0rE4YAXwvfojcnoBXncr9MdaU2yVu0MqJ2LuhQCS6mhoFFDRM3XxCTyDzCLgoErq6gzAvQtqKWmGH67OmINIBKis%2Bh1Ptq9EPOt3UGjw3MQ5dGpP%2F9rtV5YxYfk%2B2XAl1XOdoN%2BkmwtfZhbdEUw9BP%2BfIB5shjK9cpqYYu5RCLrs2noeJ%2Ba4X2u4k2P0z2vMJWlU89G175seoxSUyTbC%2F7xsiJWF%2FYMlonfhSlhQ81UUKX9c46XQxHdqM42JdC3zGsRbEOGEtVWDQstCG%2FQX03jqUNigryR1zJoBIUqD2vZD4O%2F5vdXQl24aKISPChooqMnwVXAAwnZiCxQY6pgH%2BcpUwSy37zrwcGOFeCeArspx%2FURyHwb8Kr3Lwm3fJ5s5Aa4jEDj3P5IIuGAxMVRRSJ8bYLi2cc99ctkWCU6eWHOkY4AAaEggiRL7%2BqCk5Ozefg2YyXm1Eg3%2Fhmm9aaiEM9ZA8VnsBpq6JpGQMikWcfZcz%2FS%2FYbNXwDg7in2XFwrNXaewITuHCtVtN4QltJAlDDYsgS2Swcqejz2GxJO5H2t%2BySGd9&X-Amz-Signature=a1b4e8d74f81c774d31dfcf07928699946e929f4a12b989749491f6bf9d4fbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKVH2SI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIArS%2F8Q7LfmLQfqS3VYVynA83SCJ%2FHUyUyMDWk3O4PzcAiBazKR%2FbsI%2F200kuanbso1U%2BZpEsz%2FU%2FC2rYUUoCmbNnir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKND%2BNYHnCLmicqeSKtwDvs6LzmWYvmY36vU5hjGjJaVm2f8hfC0eaZwHmqhy%2BL2iBzgtn%2BWGcOWI5%2Fbu%2BcgMNFmWIAIRQQM89DRpV7mkByh4w9JTXbJzn9M9pbcOYO4U9VlIkjlGhg2KU7uv8J75S2vy1A0MnfZ7dsWcU1ed0iNnZEq%2F4prXIbIdbQlnIApldOU0uf7dBpwXpfibx3EuauxJaa0uQEsrmPOgvCedR9vAH8D1g3KjK7mjET8TjADOxswZC2Bc98NuX2GaDnOikUYMAd1rJTk5usKF7fJ9VgSxlwpxPo%2FOEfiU5KduUutr2hKzjZe0rE4YAXwvfojcnoBXncr9MdaU2yVu0MqJ2LuhQCS6mhoFFDRM3XxCTyDzCLgoErq6gzAvQtqKWmGH67OmINIBKis%2Bh1Ptq9EPOt3UGjw3MQ5dGpP%2F9rtV5YxYfk%2B2XAl1XOdoN%2BkmwtfZhbdEUw9BP%2BfIB5shjK9cpqYYu5RCLrs2noeJ%2Ba4X2u4k2P0z2vMJWlU89G175seoxSUyTbC%2F7xsiJWF%2FYMlonfhSlhQ81UUKX9c46XQxHdqM42JdC3zGsRbEOGEtVWDQstCG%2FQX03jqUNigryR1zJoBIUqD2vZD4O%2F5vdXQl24aKISPChooqMnwVXAAwnZiCxQY6pgH%2BcpUwSy37zrwcGOFeCeArspx%2FURyHwb8Kr3Lwm3fJ5s5Aa4jEDj3P5IIuGAxMVRRSJ8bYLi2cc99ctkWCU6eWHOkY4AAaEggiRL7%2BqCk5Ozefg2YyXm1Eg3%2Fhmm9aaiEM9ZA8VnsBpq6JpGQMikWcfZcz%2FS%2FYbNXwDg7in2XFwrNXaewITuHCtVtN4QltJAlDDYsgS2Swcqejz2GxJO5H2t%2BySGd9&X-Amz-Signature=6a7255b4dd48f7d806c155932e5e5a05504daa8b072db4446284ff4dd3cb9664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
