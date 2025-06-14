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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQ6BD5V%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCjIfR2OCOPlcGZdxyAlUAVwgXHwhdraGsXbAV01%2FevYgIhANMcRE4DM1%2Ff9nAia5LG8lUVC%2B%2FnIEnZCrmxoleaxFEHKv8DCDMQABoMNjM3NDIzMTgzODA1Igy4uVtZbJ9mC%2BXkkAMq3AP%2BNSPocV3faa26XZWhC5rxZFijwiPQNnp2hhOqsw%2B%2FmwPW5WxMh%2BybHhFDZe9Axp%2BeEY5a2jN6WamLxr6CnKM1dhnr2CewiBgTpLYoeelttviJNP5N3I%2FXSQzUqlgSp1QMq1Ck%2FwiZYaLnv%2BBVNw6ZooRjLdMNDOr9uQc6tTBLMuMRbdHDdMX3vkNVQDZxz3rgethrVHrjTtsfT3asgNzfpmcRXpvQvTGx7XfVBHMDalwIygiQZVd9TQbpNIOccDxJ9H9PVy6Rza1YovZhZbBNyMeaedFJdk2%2B65lD2ipys%2BpPruQth%2BIH6ITH9KGpgWiGVVTeaSTJh0UGAqda%2BW6U6%2FUnPQCl1TeLe%2FHW8KNsWr%2BiPWIozpuTAsTZH7n2owcMGpJcGP%2FIIkbaazmhXhsv%2F1gbAb4WNvO6oOYUvPuuIUnPnY4gzJNPpTIZ9uyzgDwREvxONHy7paqD49tacsRSTzPDb2F2YSLzyTFpMg%2Bb2F%2FlyQo2Q6SVPvO4ZsvLTTnA2Xg711zneESzL9fyxUijsTQjc5eVBaKkrWRN9NwylP0JpqQyTnEMhqEXK3QYwQa%2Ft6qaLowrxrPGZN8iShSv%2BPMV4HOpWpCmhS2GbOx42WQWrrTkyoZVYDreTTDG%2BrbCBjqkAYBpvpgIQPPYIz39gYUfsVhtkpJALhnyK8ysGwWjlx0Qhl%2FRwaA6%2BT8B7lsVodrRD2y%2BeWhrr0bZYKtge%2BRkvwAH9ZXckdKzJ%2FQqUu%2BZYeJM%2FDFhj%2BdQH93ZaRUSwDwiBMESID2dHOk6PGM%2Br1FUDwEgtR5Q89NRhuNOkhkykh90MeYulEJan%2FFbBu5jvAJ64M0C%2F3%2BmZBi40m56sMRVbXFNeJcO&X-Amz-Signature=200881627d4e5a49effdd70db88983ae2f98b22b163d60235aced36eb8637029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQ6BD5V%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCjIfR2OCOPlcGZdxyAlUAVwgXHwhdraGsXbAV01%2FevYgIhANMcRE4DM1%2Ff9nAia5LG8lUVC%2B%2FnIEnZCrmxoleaxFEHKv8DCDMQABoMNjM3NDIzMTgzODA1Igy4uVtZbJ9mC%2BXkkAMq3AP%2BNSPocV3faa26XZWhC5rxZFijwiPQNnp2hhOqsw%2B%2FmwPW5WxMh%2BybHhFDZe9Axp%2BeEY5a2jN6WamLxr6CnKM1dhnr2CewiBgTpLYoeelttviJNP5N3I%2FXSQzUqlgSp1QMq1Ck%2FwiZYaLnv%2BBVNw6ZooRjLdMNDOr9uQc6tTBLMuMRbdHDdMX3vkNVQDZxz3rgethrVHrjTtsfT3asgNzfpmcRXpvQvTGx7XfVBHMDalwIygiQZVd9TQbpNIOccDxJ9H9PVy6Rza1YovZhZbBNyMeaedFJdk2%2B65lD2ipys%2BpPruQth%2BIH6ITH9KGpgWiGVVTeaSTJh0UGAqda%2BW6U6%2FUnPQCl1TeLe%2FHW8KNsWr%2BiPWIozpuTAsTZH7n2owcMGpJcGP%2FIIkbaazmhXhsv%2F1gbAb4WNvO6oOYUvPuuIUnPnY4gzJNPpTIZ9uyzgDwREvxONHy7paqD49tacsRSTzPDb2F2YSLzyTFpMg%2Bb2F%2FlyQo2Q6SVPvO4ZsvLTTnA2Xg711zneESzL9fyxUijsTQjc5eVBaKkrWRN9NwylP0JpqQyTnEMhqEXK3QYwQa%2Ft6qaLowrxrPGZN8iShSv%2BPMV4HOpWpCmhS2GbOx42WQWrrTkyoZVYDreTTDG%2BrbCBjqkAYBpvpgIQPPYIz39gYUfsVhtkpJALhnyK8ysGwWjlx0Qhl%2FRwaA6%2BT8B7lsVodrRD2y%2BeWhrr0bZYKtge%2BRkvwAH9ZXckdKzJ%2FQqUu%2BZYeJM%2FDFhj%2BdQH93ZaRUSwDwiBMESID2dHOk6PGM%2Br1FUDwEgtR5Q89NRhuNOkhkykh90MeYulEJan%2FFbBu5jvAJ64M0C%2F3%2BmZBi40m56sMRVbXFNeJcO&X-Amz-Signature=35a70a9c45cdf78eb54ac224f72396f656dbdc8162274c3ee4b2599d7c2a1111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
