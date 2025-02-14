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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSJP6N5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH7FgCYh44RVRcU4LLwUZJxcWvaxTPz74beuQNTgOlfmAiB9USySC%2BKEkH%2FQ9p6Od6VDkD7ZOktNev48Eedv3A4q0Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMTBndmzW%2BZYaf77NRKtwD1KXiAubJmruojhrLdc6EEX7t%2FhRJOYY53aFcXb4UvguUYCt0Jv3Qs7TzwWVDbUo8Oaf0GhbcaX01cGI%2BA1KQpCrsfR0tViklUZVOOCk5AmNCru1wCG%2FFOJfLnTPCtns3ukUsksR5u3a1M9kF3v782XfWeMQEHqIV9axsLSqzf9nnrrmv8XiGHDqusCMTm6iJ2t%2BOufDBJaaEC7FN%2F7GPiTEnNTyUGOsRAGk9dK%2FCMVdg35FfzZsWV2f6H2T%2FN5tGOcrGkJeI41tZUzYhgsAuvGHmmwUrqwxffMhpeq0Mng7O7pgmBuH%2BuD9e73WYkHTYPWVmMN2JfyoQSFdHJJu2vZdSwwS4Zfr6vYwLOkgruvr7Ie41xxu6bSHbA2wAyul%2FIqU5x01U9JG%2FeB3YnHG2XMdIPAb8mX9mS75ZG496nmRxxqkP9GLt%2BIk4Tq5GpIx5qvL4%2FwRi%2BwO43GP8YdLfe9Mez0EmYioPGrVYfmSdRhTVAwGC59E2ZS5iVQImbblSNb8Bln0Wzs%2FN08S%2BFKY22iBJgEkqTM9gVTDOQkBYDwvtx3aBhrZA2k%2B2VRl%2FENbrMD6YXgtjc7ZxR4epfnlex4Lhg8%2F1hJVtaMlu81PVD4i2XC7Zn6PjuyeGe5EwhLK8vQY6pgFRHzZFtDzv0jm0KN%2FuP9eWaPh0%2FZO4T57k09D7n9kJlJnvoTxGy%2BZkk8u2w9t1t6XJ1Vl%2BP8zr2raRKyYyoIof3%2BbCDWcAHw9LEDAnR%2FaCg7cgWHkQ1Ssj9ZE6DqXmfCXQLGt%2B%2BYgibiK3svWNOAl1L87qqSXILTB5bmXbEL9dx0opKbzZpo%2BNkCnJdOsXUQTanQ8LqXlvpkWbbndIbwPs0BNQ%2Fz5Y&X-Amz-Signature=8906e35f6b31ed9f8a1d4147a37beb5012b490a8663509d2c3508787c34a86c5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSJP6N5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH7FgCYh44RVRcU4LLwUZJxcWvaxTPz74beuQNTgOlfmAiB9USySC%2BKEkH%2FQ9p6Od6VDkD7ZOktNev48Eedv3A4q0Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMTBndmzW%2BZYaf77NRKtwD1KXiAubJmruojhrLdc6EEX7t%2FhRJOYY53aFcXb4UvguUYCt0Jv3Qs7TzwWVDbUo8Oaf0GhbcaX01cGI%2BA1KQpCrsfR0tViklUZVOOCk5AmNCru1wCG%2FFOJfLnTPCtns3ukUsksR5u3a1M9kF3v782XfWeMQEHqIV9axsLSqzf9nnrrmv8XiGHDqusCMTm6iJ2t%2BOufDBJaaEC7FN%2F7GPiTEnNTyUGOsRAGk9dK%2FCMVdg35FfzZsWV2f6H2T%2FN5tGOcrGkJeI41tZUzYhgsAuvGHmmwUrqwxffMhpeq0Mng7O7pgmBuH%2BuD9e73WYkHTYPWVmMN2JfyoQSFdHJJu2vZdSwwS4Zfr6vYwLOkgruvr7Ie41xxu6bSHbA2wAyul%2FIqU5x01U9JG%2FeB3YnHG2XMdIPAb8mX9mS75ZG496nmRxxqkP9GLt%2BIk4Tq5GpIx5qvL4%2FwRi%2BwO43GP8YdLfe9Mez0EmYioPGrVYfmSdRhTVAwGC59E2ZS5iVQImbblSNb8Bln0Wzs%2FN08S%2BFKY22iBJgEkqTM9gVTDOQkBYDwvtx3aBhrZA2k%2B2VRl%2FENbrMD6YXgtjc7ZxR4epfnlex4Lhg8%2F1hJVtaMlu81PVD4i2XC7Zn6PjuyeGe5EwhLK8vQY6pgFRHzZFtDzv0jm0KN%2FuP9eWaPh0%2FZO4T57k09D7n9kJlJnvoTxGy%2BZkk8u2w9t1t6XJ1Vl%2BP8zr2raRKyYyoIof3%2BbCDWcAHw9LEDAnR%2FaCg7cgWHkQ1Ssj9ZE6DqXmfCXQLGt%2B%2BYgibiK3svWNOAl1L87qqSXILTB5bmXbEL9dx0opKbzZpo%2BNkCnJdOsXUQTanQ8LqXlvpkWbbndIbwPs0BNQ%2Fz5Y&X-Amz-Signature=732d1ed6d83f3cb65c6c367171967820197e71c054b257fe73407c371b67b37d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
