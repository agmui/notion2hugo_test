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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXS2JEZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDAdW7rYT5SvdDcLIgJDS2C78ypMs4kcdKS5E7VXN8ySQIhANlT9Tf0zvcNv%2BpdsAZ72bLbeUSXHSI%2FV3mhIdIC3aSiKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6S%2F7s4pUtl7ovQyMq3APl0%2FcUOsy8Y0%2BcFA1KZ3rEeX00q%2FftaN4FCBeK%2F%2Ftflo9b9yW%2FAswcIUyTbKt5MHPP15QOQr5xZpmzeSpqxXwQtscuugSfhwxkrf%2Fq7UQRcKgGdTKt9ynkbCrGO8wLsxxKKtLlEqD2%2Bsy66GZ4VzYn%2BcWuDZVXGLuBECSuzzjLTaOw%2Bt4UHNI7TQR8eKhuOwks1433SlP0m%2BJuKl7qCorqn7LNHX9axeCTz6quan%2F5iwnpfLafx3lO%2BcNAr9RVeJ91K7XZ54Y5U421LPfajCVwlo06XMueCAOrRCy5Sb0Jcl5R8ipmgDQ%2Btt0x6rNXSL8lhucRhXnPdwRZH5ssMCdnvjboVzdjFLIYnX26D1ZBh1xOgmhfgDu%2BeR9C4RH0Pn6LapaA7M%2FV4XlpqzLkOt%2FbFF6VKfejgKFRSrphT098p4YFCEOvlp2Jf3%2BPEvKaYE2OIv4sMvy326%2BJRGsiAYbxVsv9U0hHtk5bZ%2Fm8H1a6c8bh2ISm9hW%2BCBUuSqPVg4%2F46FpFrwW76yvz0MQExKNvCu6PAqhhBs%2BcmJCVSulPk53s%2FKONneE6d4gxCXd5KDu%2F4B8QQ9C%2FOusoudhHjUqZtLBwhUYOLp%2B67gK%2FmamooJ6kzmK9TAcEeSncvDCjk4a%2BBjqkAb3oGwxlfTJE5guDD33jn0LkjyVlqbdd0tfbDdon%2F2m5HpybyPXS6mYepESg0CROT2jjMAsg%2FzMdw4IRjh57NOGFxYFuqROUQzAIze7kI0crbDsrYLBbmqjqfawu0qqHBu5cdw1nNQIpDuIF0hXBBeMU7Q54mLzowj%2FBcwb0sNbCEUUN23peSADw%2BaUgk2U6igyXC4KR%2FogaG1sVixSEs5FlP9ND&X-Amz-Signature=2135e1774182439582638ed5605ebe592e772ecfb6504ac9f93a59d5c9bcd329&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXS2JEZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDAdW7rYT5SvdDcLIgJDS2C78ypMs4kcdKS5E7VXN8ySQIhANlT9Tf0zvcNv%2BpdsAZ72bLbeUSXHSI%2FV3mhIdIC3aSiKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6S%2F7s4pUtl7ovQyMq3APl0%2FcUOsy8Y0%2BcFA1KZ3rEeX00q%2FftaN4FCBeK%2F%2Ftflo9b9yW%2FAswcIUyTbKt5MHPP15QOQr5xZpmzeSpqxXwQtscuugSfhwxkrf%2Fq7UQRcKgGdTKt9ynkbCrGO8wLsxxKKtLlEqD2%2Bsy66GZ4VzYn%2BcWuDZVXGLuBECSuzzjLTaOw%2Bt4UHNI7TQR8eKhuOwks1433SlP0m%2BJuKl7qCorqn7LNHX9axeCTz6quan%2F5iwnpfLafx3lO%2BcNAr9RVeJ91K7XZ54Y5U421LPfajCVwlo06XMueCAOrRCy5Sb0Jcl5R8ipmgDQ%2Btt0x6rNXSL8lhucRhXnPdwRZH5ssMCdnvjboVzdjFLIYnX26D1ZBh1xOgmhfgDu%2BeR9C4RH0Pn6LapaA7M%2FV4XlpqzLkOt%2FbFF6VKfejgKFRSrphT098p4YFCEOvlp2Jf3%2BPEvKaYE2OIv4sMvy326%2BJRGsiAYbxVsv9U0hHtk5bZ%2Fm8H1a6c8bh2ISm9hW%2BCBUuSqPVg4%2F46FpFrwW76yvz0MQExKNvCu6PAqhhBs%2BcmJCVSulPk53s%2FKONneE6d4gxCXd5KDu%2F4B8QQ9C%2FOusoudhHjUqZtLBwhUYOLp%2B67gK%2FmamooJ6kzmK9TAcEeSncvDCjk4a%2BBjqkAb3oGwxlfTJE5guDD33jn0LkjyVlqbdd0tfbDdon%2F2m5HpybyPXS6mYepESg0CROT2jjMAsg%2FzMdw4IRjh57NOGFxYFuqROUQzAIze7kI0crbDsrYLBbmqjqfawu0qqHBu5cdw1nNQIpDuIF0hXBBeMU7Q54mLzowj%2FBcwb0sNbCEUUN23peSADw%2BaUgk2U6igyXC4KR%2FogaG1sVixSEs5FlP9ND&X-Amz-Signature=c2eae740f2a4b6880f83c31281375b1540ed09944d433a500f0eb021d9ab6502&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
