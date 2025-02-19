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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJ3XMXY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHOxB0ZrE%2FP9P5tRjF43G0i7tUsL86zThqTZcGq%2FKTigIgWmqgq2nS3xo7y9P%2BiGSqB6eiRD39We6Y%2FJgbsd7RJEcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA9HDjB3gMkNE58DCrcA2jieu2%2BEl1TYFmLaKoYEHA4ejpZJTQO1ueW%2FnvrrDMVr7mipJzfiJ0FfOUJdBBMiL%2F6KBg2ChuMPhSELwf2LZlHdbVSQ9k305nzPgSxUkOj1%2F%2Ba%2BU8HanvBtRja5QOqIa7lrWR9gHf22B%2BIiQHYniV386DFBczVCirNr0r1gE58MHPpRNgiAxPBcpCE%2BsXc%2FfiLvzz%2Fcig87Vp1T%2FAgBIn%2FkWSK4lEJqEwYcsgYfxhkDNAueHNlpcCLSIkzWLBypZY45U0zmmuj7MB72N7VvgLqaspPBYIIcX0mF6uOqin1Szd7J%2FGba8TMMtYbBcMAM3Wemq%2Bn2S1pdrGSuq6i4kpG85OujZpTVpsEQNwCSoXeOCy5s5LPb7fy3VKCiY6Z%2FXpc4MOb5%2F%2FX%2B4tRbDuHgZMdRbu1MSEqlIJZVwlPO0qzdhIHeH2IzoV%2BwiKwIdR7owWcS%2Br0VSnTMHniLwAmpmnM23O27fdPRvvz%2Fg16UMy9UOuf7Qkuo5EEubK%2F7okelsSUbovfQXiUC0FX4xcP7rWqzY8DWKXYztnX18WNghqEZZ9qaim%2Bhs%2BXWxb2EbiE5QgMWjEW8fC5Cv%2F9h%2Bk%2Fmm0zxN%2B%2B9Qukb%2BLzkt7y4sdfUqrT%2B6SRyFlAZqbNMIf71r0GOqUBfaeHWjyEgTD8pOi26BotzRLM374XGCCXx3PcvG8UnAWumCC9pkwPWRQJboosYh%2FSsZe%2BT%2FrX40X1tE8DazbshnH6xMKUW9Qi9oANGfrFR2NocP48V%2Fn%2BNqHGkmrpbpcMRiTMjKc9a%2F9CHXsGQX%2FDmn6UhUE7r7Onnmp3vyjJ%2FywOHpQ6tb5lLw72rCMhD41HQSwMYpdoLH98TJzsQUrcK%2B6UldDW&X-Amz-Signature=b9784c51d11e2140780ae51621202fd023a26e55e3d81f1654d6695e54d95b83&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJ3XMXY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHOxB0ZrE%2FP9P5tRjF43G0i7tUsL86zThqTZcGq%2FKTigIgWmqgq2nS3xo7y9P%2BiGSqB6eiRD39We6Y%2FJgbsd7RJEcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA9HDjB3gMkNE58DCrcA2jieu2%2BEl1TYFmLaKoYEHA4ejpZJTQO1ueW%2FnvrrDMVr7mipJzfiJ0FfOUJdBBMiL%2F6KBg2ChuMPhSELwf2LZlHdbVSQ9k305nzPgSxUkOj1%2F%2Ba%2BU8HanvBtRja5QOqIa7lrWR9gHf22B%2BIiQHYniV386DFBczVCirNr0r1gE58MHPpRNgiAxPBcpCE%2BsXc%2FfiLvzz%2Fcig87Vp1T%2FAgBIn%2FkWSK4lEJqEwYcsgYfxhkDNAueHNlpcCLSIkzWLBypZY45U0zmmuj7MB72N7VvgLqaspPBYIIcX0mF6uOqin1Szd7J%2FGba8TMMtYbBcMAM3Wemq%2Bn2S1pdrGSuq6i4kpG85OujZpTVpsEQNwCSoXeOCy5s5LPb7fy3VKCiY6Z%2FXpc4MOb5%2F%2FX%2B4tRbDuHgZMdRbu1MSEqlIJZVwlPO0qzdhIHeH2IzoV%2BwiKwIdR7owWcS%2Br0VSnTMHniLwAmpmnM23O27fdPRvvz%2Fg16UMy9UOuf7Qkuo5EEubK%2F7okelsSUbovfQXiUC0FX4xcP7rWqzY8DWKXYztnX18WNghqEZZ9qaim%2Bhs%2BXWxb2EbiE5QgMWjEW8fC5Cv%2F9h%2Bk%2Fmm0zxN%2B%2B9Qukb%2BLzkt7y4sdfUqrT%2B6SRyFlAZqbNMIf71r0GOqUBfaeHWjyEgTD8pOi26BotzRLM374XGCCXx3PcvG8UnAWumCC9pkwPWRQJboosYh%2FSsZe%2BT%2FrX40X1tE8DazbshnH6xMKUW9Qi9oANGfrFR2NocP48V%2Fn%2BNqHGkmrpbpcMRiTMjKc9a%2F9CHXsGQX%2FDmn6UhUE7r7Onnmp3vyjJ%2FywOHpQ6tb5lLw72rCMhD41HQSwMYpdoLH98TJzsQUrcK%2B6UldDW&X-Amz-Signature=e880b90f9ec35e3a01fe0ebca2f399e4318db04171d506a3f4838af8f96d1a64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
