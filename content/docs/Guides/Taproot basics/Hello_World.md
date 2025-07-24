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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2N63WH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDOPgvAbTTsINzW5TnmHBAaWJ52rQHdKWnkbvsp1HPlgAIhAPuccSsNRmn72pOtDfATCQWSZm6Cu8vu8Kgm5b0ImN%2BwKv8DCDcQABoMNjM3NDIzMTgzODA1IgxFNG7NpVuFCpEa9fIq3APgcdHrxfhchkVN1YKHcewzg42UPIX9poLl5MD%2FYiv1kdtkVYtEaeqKZ1uG2rnwXdbcbUpoulk0mRuELAXQjWf4gAhsmRFva0en90s21G9Ta%2B0B6SGmwagt%2BJW6q0x3SE1XqQstY9yg6U2wpE5Q8YId3emlQEH9zj3dxj93qmSxW63KmKuMo1juoMIRM%2BgOugs%2F11FDRYdkhS4AMfhokZNBs%2FiKonivAKHuBJwps8LVf5nCMrevJjoT%2FJ8PcfnaSGSrkoV337rMsu5YRYYYU38N3SyHfjF6cG%2BYFno0e6wL1cNj4iai5EmLIPOvnCkleN0rnNvc%2BQAlK13K7QRjqVwmcfiaP8cgQGlgWvF2Az16z6vmm3uUY%2F9EvjYLK1Pg9arKFMuGRhGvRJtj2%2FBXYDih0kBarIQ8saXw2N9eoz8spRy796lQLIT2H9R6fLnHlu92MH5XGZ4Y8HLuDydVw1UI%2F0P%2FR6sSSK3XCEXciTM1Ow1dQs7yRoK1n%2Ba31S7wtggAcwie04z31%2B7GOPBATd2g8ZZxSp4G4VBa%2BKjR5Dln8CoV62ah4bS%2Bzo9z8i1OehfSfdT%2BToEVXyd%2BwkW2ZcBYS49xEcR%2FOrrkuM%2FHTIm0pu%2FcC5uXrwMF9esIoDDA14rEBjqkAXq72Z3n6LWs9EMvylHB43joXKcJhXh2xV2Us5Zzk7J4tyAc0MbM1eFOsCzgAOMUH8%2BZzZameZXh9SCfR9jwv7%2B9jMLflCrsS3Aih4USvylut1TKxs%2BWMgrJybVEJStfZANGcq8CQbFZhEeTGt4BiQ0z75i7SLkI67zIqyXH%2BX9JJm8qLJbXCDh7cdN%2Bqz%2B3GiGtw4l%2BfdA20OaJutua8ilOG0Sp&X-Amz-Signature=e8059c14197b00e03e7bff4076f5a4a46988bad8a99776f93c8ec1c335ad91ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2N63WH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDOPgvAbTTsINzW5TnmHBAaWJ52rQHdKWnkbvsp1HPlgAIhAPuccSsNRmn72pOtDfATCQWSZm6Cu8vu8Kgm5b0ImN%2BwKv8DCDcQABoMNjM3NDIzMTgzODA1IgxFNG7NpVuFCpEa9fIq3APgcdHrxfhchkVN1YKHcewzg42UPIX9poLl5MD%2FYiv1kdtkVYtEaeqKZ1uG2rnwXdbcbUpoulk0mRuELAXQjWf4gAhsmRFva0en90s21G9Ta%2B0B6SGmwagt%2BJW6q0x3SE1XqQstY9yg6U2wpE5Q8YId3emlQEH9zj3dxj93qmSxW63KmKuMo1juoMIRM%2BgOugs%2F11FDRYdkhS4AMfhokZNBs%2FiKonivAKHuBJwps8LVf5nCMrevJjoT%2FJ8PcfnaSGSrkoV337rMsu5YRYYYU38N3SyHfjF6cG%2BYFno0e6wL1cNj4iai5EmLIPOvnCkleN0rnNvc%2BQAlK13K7QRjqVwmcfiaP8cgQGlgWvF2Az16z6vmm3uUY%2F9EvjYLK1Pg9arKFMuGRhGvRJtj2%2FBXYDih0kBarIQ8saXw2N9eoz8spRy796lQLIT2H9R6fLnHlu92MH5XGZ4Y8HLuDydVw1UI%2F0P%2FR6sSSK3XCEXciTM1Ow1dQs7yRoK1n%2Ba31S7wtggAcwie04z31%2B7GOPBATd2g8ZZxSp4G4VBa%2BKjR5Dln8CoV62ah4bS%2Bzo9z8i1OehfSfdT%2BToEVXyd%2BwkW2ZcBYS49xEcR%2FOrrkuM%2FHTIm0pu%2FcC5uXrwMF9esIoDDA14rEBjqkAXq72Z3n6LWs9EMvylHB43joXKcJhXh2xV2Us5Zzk7J4tyAc0MbM1eFOsCzgAOMUH8%2BZzZameZXh9SCfR9jwv7%2B9jMLflCrsS3Aih4USvylut1TKxs%2BWMgrJybVEJStfZANGcq8CQbFZhEeTGt4BiQ0z75i7SLkI67zIqyXH%2BX9JJm8qLJbXCDh7cdN%2Bqz%2B3GiGtw4l%2BfdA20OaJutua8ilOG0Sp&X-Amz-Signature=f010684e5f0def612866bd67d370bdbede4ec0a2d75c05537d8f7a8b32cda1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
