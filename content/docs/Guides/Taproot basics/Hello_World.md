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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWRF3BD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCayUDwRt6GD02SReNVfL8exlx54YFV79J3yxkU077vLAIhAIMRL38QYOakHmPgQcencebSlQI5Cn7U%2B3SAEVS7Uc2WKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfkKZlvkkyjZTHY08q3APepe0wjyynItUopSvlFJknYDGpyh4Fw%2FT6JALa0ZCeFPYZlswRrVwkmAjYIc6%2Bz%2Fh%2FPvQiK1tZGYXKyT4wfna82xWvGojbq6xxkRnZPQi9tb25hrlYALUraL1MHq0LORGLZiRVIPR9SBcoussQZxZNvqFWpLB2jxUkYa47U29uDsoxJiAsHig5Jwv1LRhgjS6UNNXLIpakVFlY3ZxWOW%2FU4YJTyk6Dd6ET7120pcPzYG3O3fwhumNM1v5P%2FkqwBKrBqB0BA0ET%2FovjzcoOskLxtY7ZDbrK8GSTMFIj%2B%2BgImtV%2FdZx2p9pVR%2B9ZMWr8LOcWDIRcK68TjtRrmsq4WtYvFmpml7ShAePvvudZLstTsZgQg4bVHOSfILKiTrJT0JMCeXy6wGx7%2FSY9j45Nxipb2I5STULNUhrKymcDTKP5jcGdKTNEZI%2FBo9eBKV8d0AZ4BJjOdsGleNZgwtX8Lolcd%2F9fAkEiEqC8W7fz0TJj1CDWUFQ20LqrMOyc4ac9TWjdr1gGKhLL4yp6751lO%2BosxVIfunmuQsfTD7n5JNO5GQnWTlZMYxd4ZqDOORG%2BP6OGVULPJoKPzS0WaP6AoeAxwk5jAdpAJEVbITpeiLBO%2FNcQqqCAoqyrCQo%2FazCn2YjBBjqkAcaLbcEYKPylrwxxCoVs2cNn%2F0SiSxiizSWTRIxJ3lqGYC4yIabW0TR07oEr2gS2DaOQTmqE1VoWoRbChbk8GkenQXDxsH615yGSJEW7jbckm3ek0aqOezWAgTKtRXs7sT85ZEM0K0CqYIaSyXn8345p1cZXZBLnss4S%2Bdtd6vtAn6cya80zBYMSsBvaeujCbGXvthXfoOdskpob0TZTeaO6w%2FVg&X-Amz-Signature=7a4c3588e270cfdda12d89b0199d009453a9a0b97703031a24ea2c1089fbd521&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWRF3BD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCayUDwRt6GD02SReNVfL8exlx54YFV79J3yxkU077vLAIhAIMRL38QYOakHmPgQcencebSlQI5Cn7U%2B3SAEVS7Uc2WKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfkKZlvkkyjZTHY08q3APepe0wjyynItUopSvlFJknYDGpyh4Fw%2FT6JALa0ZCeFPYZlswRrVwkmAjYIc6%2Bz%2Fh%2FPvQiK1tZGYXKyT4wfna82xWvGojbq6xxkRnZPQi9tb25hrlYALUraL1MHq0LORGLZiRVIPR9SBcoussQZxZNvqFWpLB2jxUkYa47U29uDsoxJiAsHig5Jwv1LRhgjS6UNNXLIpakVFlY3ZxWOW%2FU4YJTyk6Dd6ET7120pcPzYG3O3fwhumNM1v5P%2FkqwBKrBqB0BA0ET%2FovjzcoOskLxtY7ZDbrK8GSTMFIj%2B%2BgImtV%2FdZx2p9pVR%2B9ZMWr8LOcWDIRcK68TjtRrmsq4WtYvFmpml7ShAePvvudZLstTsZgQg4bVHOSfILKiTrJT0JMCeXy6wGx7%2FSY9j45Nxipb2I5STULNUhrKymcDTKP5jcGdKTNEZI%2FBo9eBKV8d0AZ4BJjOdsGleNZgwtX8Lolcd%2F9fAkEiEqC8W7fz0TJj1CDWUFQ20LqrMOyc4ac9TWjdr1gGKhLL4yp6751lO%2BosxVIfunmuQsfTD7n5JNO5GQnWTlZMYxd4ZqDOORG%2BP6OGVULPJoKPzS0WaP6AoeAxwk5jAdpAJEVbITpeiLBO%2FNcQqqCAoqyrCQo%2FazCn2YjBBjqkAcaLbcEYKPylrwxxCoVs2cNn%2F0SiSxiizSWTRIxJ3lqGYC4yIabW0TR07oEr2gS2DaOQTmqE1VoWoRbChbk8GkenQXDxsH615yGSJEW7jbckm3ek0aqOezWAgTKtRXs7sT85ZEM0K0CqYIaSyXn8345p1cZXZBLnss4S%2Bdtd6vtAn6cya80zBYMSsBvaeujCbGXvthXfoOdskpob0TZTeaO6w%2FVg&X-Amz-Signature=14a0a247fa78d13d30103533935451a4f4bb555896be791a54886e9e8d7f50dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
