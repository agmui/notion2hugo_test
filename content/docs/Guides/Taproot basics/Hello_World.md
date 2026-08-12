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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS36DI3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs365GDZWfpbCOr4p78CvIxhQ%2B%2FD%2BOH74WYoMSTPXo0wIhAL5QxxwJGmJZ1I%2F0l0Quqjr2rSD9JTLZXcLU9rdEqAEaKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl23XUtVAJaROX4pMq3AOgepxzsxPiOzfj9MKaa5LOO3rZ%2FBj4MBPzemuQRr0l7OYLmINXXcRUTa1qzvGx00JpZSUPuN4FpYWy68McJYKP6cThKyvoz0HyDvxzZNVyGcPwUxcbi9LQulGgtcEoGylfp7U0cwFVdLQZ3Q4AWgnx95PmWTyhXhJRCYVTA0XGedsaTdDd%2FN%2Fz%2F24scC5LPn6I9JK%2Brirho53fZCo2qdQ3Y6e6Nd%2BgsWh51cx7ClXtlN363F50wkak9yZlNked5MMPDdHBdlIvVAqKPG46cP2pNbtAdIUqzaalr2WAwXcDzeeD72JVX8fcSj2LKr0U1VrQE5%2FT83jS%2FOz1dHqzKyi562NLdfJF1%2F0nP7o8rYPT7yZSVH0%2BRP0t4Giqk1vL1e3UdrBNbn2sDz9fXGSGe12yQdzcc1nIDPZ6goTxWQtsXcqGjk7hwPVNdLqo0dGPuO8oVV5zCzAp5kBeYyPG1bkX8M1Be2Bdtw1F5WQJJrkCfIux4jYObK%2Bj8mHa5TksifgONgFQNkAg6dNZUPcKlHVxUJ7JDkQ2cfjg7Bs8ANS3xJrf8OknBwADGb2PevAqtEJ63j%2BW4P3myC72jpTagXaWLvT4c1%2FW1CcmX8i79vdep%2BL7UJM0xlJOsiur8DDG6O7TBjqkAVLGZYQPii75geXPs3swnO4gKgX28mvP%2F%2BSmm%2FFXaASTwhzHetb%2BINydDRvSgiJem2Y%2Fyvk1p6cGbFC8IkOdqYETfklwECdoH3MawNg4eW%2FrKD%2BwEN3ICmxUlnp4bJ2xxBsiR950z2yOwzWpwS%2Fwcq9ZQd%2FKWaWMv0Nb1qVkHeV02mhWNaAjKi0GM%2FoSXY2mWd4vfgrlC1i9gVvMsfOxcGE6wcmk&X-Amz-Signature=c54415eda8e49db4eb9fec7a655d952199e561d8a787faf467ce8ea4a12cbf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS36DI3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs365GDZWfpbCOr4p78CvIxhQ%2B%2FD%2BOH74WYoMSTPXo0wIhAL5QxxwJGmJZ1I%2F0l0Quqjr2rSD9JTLZXcLU9rdEqAEaKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl23XUtVAJaROX4pMq3AOgepxzsxPiOzfj9MKaa5LOO3rZ%2FBj4MBPzemuQRr0l7OYLmINXXcRUTa1qzvGx00JpZSUPuN4FpYWy68McJYKP6cThKyvoz0HyDvxzZNVyGcPwUxcbi9LQulGgtcEoGylfp7U0cwFVdLQZ3Q4AWgnx95PmWTyhXhJRCYVTA0XGedsaTdDd%2FN%2Fz%2F24scC5LPn6I9JK%2Brirho53fZCo2qdQ3Y6e6Nd%2BgsWh51cx7ClXtlN363F50wkak9yZlNked5MMPDdHBdlIvVAqKPG46cP2pNbtAdIUqzaalr2WAwXcDzeeD72JVX8fcSj2LKr0U1VrQE5%2FT83jS%2FOz1dHqzKyi562NLdfJF1%2F0nP7o8rYPT7yZSVH0%2BRP0t4Giqk1vL1e3UdrBNbn2sDz9fXGSGe12yQdzcc1nIDPZ6goTxWQtsXcqGjk7hwPVNdLqo0dGPuO8oVV5zCzAp5kBeYyPG1bkX8M1Be2Bdtw1F5WQJJrkCfIux4jYObK%2Bj8mHa5TksifgONgFQNkAg6dNZUPcKlHVxUJ7JDkQ2cfjg7Bs8ANS3xJrf8OknBwADGb2PevAqtEJ63j%2BW4P3myC72jpTagXaWLvT4c1%2FW1CcmX8i79vdep%2BL7UJM0xlJOsiur8DDG6O7TBjqkAVLGZYQPii75geXPs3swnO4gKgX28mvP%2F%2BSmm%2FFXaASTwhzHetb%2BINydDRvSgiJem2Y%2Fyvk1p6cGbFC8IkOdqYETfklwECdoH3MawNg4eW%2FrKD%2BwEN3ICmxUlnp4bJ2xxBsiR950z2yOwzWpwS%2Fwcq9ZQd%2FKWaWMv0Nb1qVkHeV02mhWNaAjKi0GM%2FoSXY2mWd4vfgrlC1i9gVvMsfOxcGE6wcmk&X-Amz-Signature=1f316e10570f251b4c1ef52b9341a09dd4e9e10bb85d2117084d60a554725ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
