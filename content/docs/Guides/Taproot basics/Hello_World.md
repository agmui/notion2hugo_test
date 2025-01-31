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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQY3JDZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T080959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpA1teKNwwX8NUkFYKsxImHI9ysu1ALS%2BjJZt0wHlkMAiEAjIZ1rHUZN2jGgzJ7rNOqhyxithqqAjUUJwOCFyYF%2BAcqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCY0s%2BNX4%2F5zYrGuCrcA3UEgtiAYpFVIyR5LKPzlOY%2Fxm4V5avLvlflG2ZUvZvGZzf4N1OrtbenS0miogyP5gp1Qt%2B9%2Ber5DltPumxbR8QTx00FmIXEXdBe9XMbbhh7i9vNXf1zx5w%2BF%2B27BL8UIvpUcBv%2FymuohP9Nwwv4Pe1oEVyjqUtsiDfgm%2BvrpWOWvEwbB40z%2F401xqtJFOjKdMyUwBFmrCMWMte2eUlC2UjeskMtAfE5atFNYOf7dxC5QmWub84dCl2G3jpzuXY%2BHYE6j25PV9D8k%2FQ4cMDUaZW4V2klmhbv3GZ2hMLk6DKKNv%2Fr4yLkFSqYx3yJJw6bO2B16zfFK67OjqAPSlhtDREjcc%2B1%2B%2B7beLAN%2FFHnJ1vlzeKppA%2BRmyYgVwpfvPYGxLrjZ8mNfh9aUv2jTWvb6cNIXmWis5cX9dY9wyBgss1ZCQtQXjKucykwKL6jKZF3eELeJrIlgpMs9YPGdBe78PS%2FMvTX0r7H9apG3PPF9rbCF3TRaOnedaL6PYR9vpiIBYwW6mzRLUbVG3ItOLg0p3EQ3tynxCUL%2B01L3IyREB6TnLvcwbY9urh%2FecRSEIQZj3n2AQIUgkEXrMBtNFa6storlTXWxgfzzYGH%2FzhPI0FFEkF1BXAR5a74TaFpMJqA8rwGOqUBH%2Fit3ZG4%2B0DNZCAqazk5O3eR3n%2B6V%2FFMYRUodXiIyuhVq4kMysgU8WpXP9KCSQxJjkdimpuQTeJDCRua45FmddVyMgyezdxmri33RI%2F50pONJo92I12%2FRzlUywK8%2BlrTK0uxzVLRSafapU5lHFLCP4hM4DIemn2Acyhvco5MtJXNfPPOkLAC9KgS3BwE%2FbBYK5t0f8uPZE%2B4FlW9%2FXXo4duQ1%2BcB&X-Amz-Signature=5f677839f905f9d193687af4a23e1bac80e89754e11262c73a81c42da340e3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQY3JDZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T080959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpA1teKNwwX8NUkFYKsxImHI9ysu1ALS%2BjJZt0wHlkMAiEAjIZ1rHUZN2jGgzJ7rNOqhyxithqqAjUUJwOCFyYF%2BAcqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCY0s%2BNX4%2F5zYrGuCrcA3UEgtiAYpFVIyR5LKPzlOY%2Fxm4V5avLvlflG2ZUvZvGZzf4N1OrtbenS0miogyP5gp1Qt%2B9%2Ber5DltPumxbR8QTx00FmIXEXdBe9XMbbhh7i9vNXf1zx5w%2BF%2B27BL8UIvpUcBv%2FymuohP9Nwwv4Pe1oEVyjqUtsiDfgm%2BvrpWOWvEwbB40z%2F401xqtJFOjKdMyUwBFmrCMWMte2eUlC2UjeskMtAfE5atFNYOf7dxC5QmWub84dCl2G3jpzuXY%2BHYE6j25PV9D8k%2FQ4cMDUaZW4V2klmhbv3GZ2hMLk6DKKNv%2Fr4yLkFSqYx3yJJw6bO2B16zfFK67OjqAPSlhtDREjcc%2B1%2B%2B7beLAN%2FFHnJ1vlzeKppA%2BRmyYgVwpfvPYGxLrjZ8mNfh9aUv2jTWvb6cNIXmWis5cX9dY9wyBgss1ZCQtQXjKucykwKL6jKZF3eELeJrIlgpMs9YPGdBe78PS%2FMvTX0r7H9apG3PPF9rbCF3TRaOnedaL6PYR9vpiIBYwW6mzRLUbVG3ItOLg0p3EQ3tynxCUL%2B01L3IyREB6TnLvcwbY9urh%2FecRSEIQZj3n2AQIUgkEXrMBtNFa6storlTXWxgfzzYGH%2FzhPI0FFEkF1BXAR5a74TaFpMJqA8rwGOqUBH%2Fit3ZG4%2B0DNZCAqazk5O3eR3n%2B6V%2FFMYRUodXiIyuhVq4kMysgU8WpXP9KCSQxJjkdimpuQTeJDCRua45FmddVyMgyezdxmri33RI%2F50pONJo92I12%2FRzlUywK8%2BlrTK0uxzVLRSafapU5lHFLCP4hM4DIemn2Acyhvco5MtJXNfPPOkLAC9KgS3BwE%2FbBYK5t0f8uPZE%2B4FlW9%2FXXo4duQ1%2BcB&X-Amz-Signature=a44e063340d90122ab6654a8bec10d1abb32adf3acdbf5bf095df646e94e22fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
