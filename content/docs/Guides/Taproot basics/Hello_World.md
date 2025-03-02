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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZN5S6O%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQTO9uja%2BkaQ4VCgKMP5sX%2FNsa5tgM%2FD8Bi0fWSx2vPQIhALp9pSLEMxc7oyjSn%2F7MkkoT3IkWNROiwc8jyMoKN7DHKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3HIz1PHjWti%2BZW%2F0q3AO%2FVbg7VqaTnRDiblj%2Fu4sifJD4V5JdgSWO6bokioSTQWUxLo2rTbpv0RikS2c3C1tYCkbHWsmzXXhQYJFsVdaVTqmxNH%2F15jzFadmlHW%2FxgegBERYhHF7%2FCB2YggQTv8UryYzFXktDQ83LjLtlGh5%2FJ2WiyWXF7vIOJSi52UGbr9RZDBOIxOO4vmKxjm8y1n31jYU5qs2myv3Ytbwal5mrKjfv9pEiQNZxAKIo2j4pCE%2FGxunTEW4ZDMCY%2Bu5YmdGkEDnxs7aQ0DdEkjasITBj4sQTITt%2BW%2BbwD8OEUTh%2FSNyuXRdUF%2Bg89ZohzF%2F9AR5CKPVe4U25xvqXGd9olOSW%2F2eJVJ1T3Flslqw3No1q0sC6iEQkknNRRkbybzvwwGhg8uYfNTg%2FKx7usYUmyQHHt%2B2blPjHtfktfuZa4Pt6xkPgO%2FfkihB3zltnx5XlNRxq0gwkYoN2zvA3E9zI%2FH5nMK%2BqzQ6R1OJW%2Fz2pjqnWhg%2BXjWVS3l5jeTHq9Qe%2FGoByQQarn%2Bv1kz3%2BFHhW4T1UXEr%2Bas9wVp7VbY3fRHsXoYMJTxPMfH6fONQLSyoNIf4Ukj1dhaJ%2FIN4G%2Fpo8Uq0zIYh%2BPsYZwTGwTfcz6IAsNmuJRMzbcUycnOeNATCpt4%2B%2BBjqkAX0NKKbk2FKcsKeMwW8NOkI6x1w8nWgnWqnMXhRY49axsolzAI1BYnGMVF6tI7mYcSMfpyt13q9E56ZoRGQFGUGFP6nLopK1058lSX6Y15h%2B%2B7Z6%2FHcQTbDKetuFweJ8vpsxLVyLcld%2FGg3g5DUXL2y%2Bd8GGwNdciUurtheXt2JCnnIYOGMPpDtzTo62AeFLOaDyqGmkx5M9vyS9%2BzLLVvv%2F%2Fy9r&X-Amz-Signature=e39fc3d04f82cc7061d18ec5b300e4e3f1e17704683d4edc49e7bcbf91397086&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZN5S6O%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQTO9uja%2BkaQ4VCgKMP5sX%2FNsa5tgM%2FD8Bi0fWSx2vPQIhALp9pSLEMxc7oyjSn%2F7MkkoT3IkWNROiwc8jyMoKN7DHKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3HIz1PHjWti%2BZW%2F0q3AO%2FVbg7VqaTnRDiblj%2Fu4sifJD4V5JdgSWO6bokioSTQWUxLo2rTbpv0RikS2c3C1tYCkbHWsmzXXhQYJFsVdaVTqmxNH%2F15jzFadmlHW%2FxgegBERYhHF7%2FCB2YggQTv8UryYzFXktDQ83LjLtlGh5%2FJ2WiyWXF7vIOJSi52UGbr9RZDBOIxOO4vmKxjm8y1n31jYU5qs2myv3Ytbwal5mrKjfv9pEiQNZxAKIo2j4pCE%2FGxunTEW4ZDMCY%2Bu5YmdGkEDnxs7aQ0DdEkjasITBj4sQTITt%2BW%2BbwD8OEUTh%2FSNyuXRdUF%2Bg89ZohzF%2F9AR5CKPVe4U25xvqXGd9olOSW%2F2eJVJ1T3Flslqw3No1q0sC6iEQkknNRRkbybzvwwGhg8uYfNTg%2FKx7usYUmyQHHt%2B2blPjHtfktfuZa4Pt6xkPgO%2FfkihB3zltnx5XlNRxq0gwkYoN2zvA3E9zI%2FH5nMK%2BqzQ6R1OJW%2Fz2pjqnWhg%2BXjWVS3l5jeTHq9Qe%2FGoByQQarn%2Bv1kz3%2BFHhW4T1UXEr%2Bas9wVp7VbY3fRHsXoYMJTxPMfH6fONQLSyoNIf4Ukj1dhaJ%2FIN4G%2Fpo8Uq0zIYh%2BPsYZwTGwTfcz6IAsNmuJRMzbcUycnOeNATCpt4%2B%2BBjqkAX0NKKbk2FKcsKeMwW8NOkI6x1w8nWgnWqnMXhRY49axsolzAI1BYnGMVF6tI7mYcSMfpyt13q9E56ZoRGQFGUGFP6nLopK1058lSX6Y15h%2B%2B7Z6%2FHcQTbDKetuFweJ8vpsxLVyLcld%2FGg3g5DUXL2y%2Bd8GGwNdciUurtheXt2JCnnIYOGMPpDtzTo62AeFLOaDyqGmkx5M9vyS9%2BzLLVvv%2F%2Fy9r&X-Amz-Signature=2b4ad60205426b3ace9b495f4331ec40b49267e9d0285e79a45c59642417deaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
