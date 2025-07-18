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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WPX4WL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDNMaQ2MMklesUiBpp3U%2FdfRurC45g65ZsK0odGieSTuQIgJmnAh3akHBKDmq5m1FOTiNlqU2g5Rn5Evh9HDVnryCMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQTPE4QLUOpcmeIwCrcAyP5ZKJBqXJ%2Fvw5fhwwOgSZQT4FKNDoRIS4aZ57dElYWSFxbMyXmISNAPmQjFMyXDmeVKWEWh0DLBSseWYazX76SnmNw4y5%2BDq5Aol%2BqiUNX6Yn%2BM5dnG%2FHmQL5sHB6Hlm727KviXVJwa2KBNNmyDDsz6RwCvjIEhauPuIOX2ASdTJNuVfAPJrV0sm1A25PEDP1JF3TpSuoN1uLylkMYYoWhPUPfcvXNZKSjRnablhngHRUWJpBCL2Kp5FCab8RSUHjQJhm199H9jDWpCZLq7cobgdqAbdYWeO5F18t7PMNLbw8KomECui6qImw4lPs4r4MGjq3jE36YuctVMGqThpYDaNAeRWt7YaVQRbaILqhr5FoNvN3mvqQPZRyK0pm6cgLc4EDZGvMaRtIHQ1yOMNqZ0GhujusSvgPW6VjbttpGDSgBySITJJgXV0jKp5f2NvfPg2ujPgl7%2FhEhKqVhmd2%2BoGTNDLvqdVmVvwc8sUSzmoPyU76F9R%2F6N%2B17r5SBYuNZRUwjM59ahwdFWqu%2Bcs6jcyKobwQ3TfIF0Tsrz2NyeLQTgts%2BxScnYI%2FOAwUKhBUVdxHb4tKwjj1eXIKrujH%2F9zBShINsFlz20vqPa%2Bjw52wVyLdniWntA%2B%2FPMJW%2F6sMGOqUBURIOStcPJtrPJV2ABz7RYxdunnsjRRxoYuEwxvyXRFlYNe07S%2BB4iKUu7ev1xrzsjS4tMzClboau%2BoF6CWqzjmHIqR%2F7gP98EXSn0uiymKJRbscg5Q3mmKtYv5nYjn7Abtlxu5UCfboEhDMX58509mlzdBffSdgBnc20NcVMX8EhAQhZG4EnDU4cj0wMlda7MaOqv%2BNfqkNRgkVRcSc0Ctb9iRTv&X-Amz-Signature=cbb37794ed046b5612cda6c8ed7ca3185ce336bd8a71130a15e52f7da83fed9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WPX4WL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDNMaQ2MMklesUiBpp3U%2FdfRurC45g65ZsK0odGieSTuQIgJmnAh3akHBKDmq5m1FOTiNlqU2g5Rn5Evh9HDVnryCMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQTPE4QLUOpcmeIwCrcAyP5ZKJBqXJ%2Fvw5fhwwOgSZQT4FKNDoRIS4aZ57dElYWSFxbMyXmISNAPmQjFMyXDmeVKWEWh0DLBSseWYazX76SnmNw4y5%2BDq5Aol%2BqiUNX6Yn%2BM5dnG%2FHmQL5sHB6Hlm727KviXVJwa2KBNNmyDDsz6RwCvjIEhauPuIOX2ASdTJNuVfAPJrV0sm1A25PEDP1JF3TpSuoN1uLylkMYYoWhPUPfcvXNZKSjRnablhngHRUWJpBCL2Kp5FCab8RSUHjQJhm199H9jDWpCZLq7cobgdqAbdYWeO5F18t7PMNLbw8KomECui6qImw4lPs4r4MGjq3jE36YuctVMGqThpYDaNAeRWt7YaVQRbaILqhr5FoNvN3mvqQPZRyK0pm6cgLc4EDZGvMaRtIHQ1yOMNqZ0GhujusSvgPW6VjbttpGDSgBySITJJgXV0jKp5f2NvfPg2ujPgl7%2FhEhKqVhmd2%2BoGTNDLvqdVmVvwc8sUSzmoPyU76F9R%2F6N%2B17r5SBYuNZRUwjM59ahwdFWqu%2Bcs6jcyKobwQ3TfIF0Tsrz2NyeLQTgts%2BxScnYI%2FOAwUKhBUVdxHb4tKwjj1eXIKrujH%2F9zBShINsFlz20vqPa%2Bjw52wVyLdniWntA%2B%2FPMJW%2F6sMGOqUBURIOStcPJtrPJV2ABz7RYxdunnsjRRxoYuEwxvyXRFlYNe07S%2BB4iKUu7ev1xrzsjS4tMzClboau%2BoF6CWqzjmHIqR%2F7gP98EXSn0uiymKJRbscg5Q3mmKtYv5nYjn7Abtlxu5UCfboEhDMX58509mlzdBffSdgBnc20NcVMX8EhAQhZG4EnDU4cj0wMlda7MaOqv%2BNfqkNRgkVRcSc0Ctb9iRTv&X-Amz-Signature=ce8adc0c66006c0a5ece4ee7a1a6c247a60aa3101691a5d4b6418725d0d696a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
