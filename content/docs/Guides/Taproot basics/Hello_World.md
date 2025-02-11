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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUH2T26%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZJQywmSWyc4P0CvxH6aPc0GPFB8PPbzOuFU3e7%2FVeAIgTuzx%2BxBcM0eCnTTQzInVzXif%2B3VEzgYhUkLRetu4wxwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0O3xMyuhts9a6nnyrcAxxLG5c919Otzd62AR%2BWm5aiY9albx%2BmXkGHevqtqk9X7uglDABlTcfPJ7Rdju0gW5NKCEOOaIFFQOF5cVVzLviEjuNbBW84XS%2FlA6SH78T%2FbgHPHNK9nudjQs0XnSeaj5XIGcpdAbHbUmRTeP8TXUcYf5TOHXJTlIEpdHhiftHeX8Pgf74eSguTN8%2B6h%2BjOjUZHuXLiunD1AIQ2UaHuLmD1Sq%2BLNrRjFk5xQA4j7Qfh0VxqQCEy4H0ixG%2BH%2Bwh3gs%2Fu7caO1FQVOuflqkxogeDWbgSV%2F7mPGlP2p9Fx9XmYNxzo6DV6DFqCsej2phosAjl1BkXslknrnxy5VkTylaQuiVInejpz7wwoGawIqPw8rjeoRd3Gs1U5VLt7e4fl4HFdNqU0DJMScGxnaxEi6a70EsPvailzeLdmUWQzOCgf%2B2PIdlB%2FjiEJ%2FTo7o2seZvaptsk6wpzHTeXKr%2F%2FCfiN609CkeyGdB3XxOzbt0gfP8qvvIuqMMQa0SMtBh8AqaC3XjxCGmCxgMrLUVvaDvL7Ll0fAQTCw30adQzeTv94LPicFXGhMGU1zWmwCYE%2F8qYN9JpDBh7MT8QzuPXMBgwUGXyg0mpFtc1uBtF3WUtiz14x8bv5K5fhZ5kfXMOnIrr0GOqUBXXsBcIXjk%2BauDP2%2BZ%2Fsw7dQeF68ni5Vhe%2BJWCwmFGmRAWx6M7SNXMUPZAsZ%2FM%2B7vdTW%2FIc1e%2B83b2vkjA7vDEAW6QKodhMHDl0EQ4qtBW9rw4RVe9wibcytRF2%2BwBZOBUf4z9O%2B8NU6xSH%2FrAwYeoMib4bENQg2C0FcmbkfCQ44aUo9SUr38tcOdGLy0MoKNolrHwAbi%2B6kRGwnbyDbn0RWnIfF1&X-Amz-Signature=811220ddc82e90841bce022df6f973ff612e7d4633915070bda299199d41b8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUH2T26%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZJQywmSWyc4P0CvxH6aPc0GPFB8PPbzOuFU3e7%2FVeAIgTuzx%2BxBcM0eCnTTQzInVzXif%2B3VEzgYhUkLRetu4wxwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0O3xMyuhts9a6nnyrcAxxLG5c919Otzd62AR%2BWm5aiY9albx%2BmXkGHevqtqk9X7uglDABlTcfPJ7Rdju0gW5NKCEOOaIFFQOF5cVVzLviEjuNbBW84XS%2FlA6SH78T%2FbgHPHNK9nudjQs0XnSeaj5XIGcpdAbHbUmRTeP8TXUcYf5TOHXJTlIEpdHhiftHeX8Pgf74eSguTN8%2B6h%2BjOjUZHuXLiunD1AIQ2UaHuLmD1Sq%2BLNrRjFk5xQA4j7Qfh0VxqQCEy4H0ixG%2BH%2Bwh3gs%2Fu7caO1FQVOuflqkxogeDWbgSV%2F7mPGlP2p9Fx9XmYNxzo6DV6DFqCsej2phosAjl1BkXslknrnxy5VkTylaQuiVInejpz7wwoGawIqPw8rjeoRd3Gs1U5VLt7e4fl4HFdNqU0DJMScGxnaxEi6a70EsPvailzeLdmUWQzOCgf%2B2PIdlB%2FjiEJ%2FTo7o2seZvaptsk6wpzHTeXKr%2F%2FCfiN609CkeyGdB3XxOzbt0gfP8qvvIuqMMQa0SMtBh8AqaC3XjxCGmCxgMrLUVvaDvL7Ll0fAQTCw30adQzeTv94LPicFXGhMGU1zWmwCYE%2F8qYN9JpDBh7MT8QzuPXMBgwUGXyg0mpFtc1uBtF3WUtiz14x8bv5K5fhZ5kfXMOnIrr0GOqUBXXsBcIXjk%2BauDP2%2BZ%2Fsw7dQeF68ni5Vhe%2BJWCwmFGmRAWx6M7SNXMUPZAsZ%2FM%2B7vdTW%2FIc1e%2B83b2vkjA7vDEAW6QKodhMHDl0EQ4qtBW9rw4RVe9wibcytRF2%2BwBZOBUf4z9O%2B8NU6xSH%2FrAwYeoMib4bENQg2C0FcmbkfCQ44aUo9SUr38tcOdGLy0MoKNolrHwAbi%2B6kRGwnbyDbn0RWnIfF1&X-Amz-Signature=1abcefe334aaf98856ecae858b2fd36b0d887dda1918a5048ba260afe6221a37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
