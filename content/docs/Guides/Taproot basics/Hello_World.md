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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCLP46B%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClBGOOQAYyH2kFVIA69P6%2BrMI75Tb5hBCqX%2BlWBfjR6AIhAP5qEh%2BtvTlHoiFZ2dr3sEW32hiLZMWrK0TEBq%2Bsxk7BKv8DCE4QABoMNjM3NDIzMTgzODA1IgwzTVQHC%2Fwe0KIdY%2BIq3APtLMokQvEpss3xg1WpNgL2SiYndMjWa8cfdIx4czTMAkzoPAlpWKxIwSLXWt0zDpoBXLnXtD6zD9UzfRetSMtgy2XFb5tCJToZJIlB4TexsmjvTbV3R3HmlZZj0cttUkWsAwE5I1b2KGd8b8HPlfzg4JkdPKBlcSAH%2BHFZ10o%2F%2BNsV2HzIsZxpKIV8RKi0MsmfkCiRjCXNQWpVzMN767DUhNKo0vAXu3XkuTAZ1%2B6TkuzM6bVnK9wGub9kZocJjbvR0xvyrrDqwiDJTQhLblHO4b9UGJHdKxpKliC2TTdHzy4Zn09Llmcfe72mTcJS2QKQKvZd8fkEdeweu8qVRcPGyt69UYLy1ZnWm2H3VgwU934yRwzF06lp6w5z7Y0QuRHaiwon36dFbGM0dn5ORpdeeHMX8YE%2F5rxWZaPwu0ImRT5TRczsDfDe%2FnGZeuxo1dI%2B5tgeHOU50rNR1ukVjsiMCc9b5GvLdUtNgMAhrFXkxXgBJiK%2Bo%2FZ2Apuq4slSjEbcEI6LwWZLcjk%2BIP%2FXGZHIbGooD9Igr8LHmMIJO45x4yy%2Bv35EPC%2BeHPdbjfftqPWwX4Q3fRFCzRy4HJUyC7H62uUNlaSpsBGwb7DhUt62aIhrdZerg4R6cdIF4TDoxJ7BBjqkAQcGggryqDAqI%2BQTw36v2PLYr%2Bxml3ciZkSjU4P2HmE7Tu1ZB0J5GxRI%2Bq1v6Ehq2yg5MheR2Ao9TcOVJYJYzg8m0sY%2BoJ5mDOw8Wt2Rih5ap6kVBVVxWi7q3cdaKuaAFbArMOhEjplhl3gUVTGh2MkNOdkIQqpkGpCAwCsHuwJZLsBxwI2n%2FBTG9cn6V34iCOwJ6sjGWJy%2BgqOKrbKdyDuCI2aY&X-Amz-Signature=3d0c15ea877b0a2823ca6a354d9cb2d780cf2d4fd80d394ed491a6b69a92c2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCLP46B%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClBGOOQAYyH2kFVIA69P6%2BrMI75Tb5hBCqX%2BlWBfjR6AIhAP5qEh%2BtvTlHoiFZ2dr3sEW32hiLZMWrK0TEBq%2Bsxk7BKv8DCE4QABoMNjM3NDIzMTgzODA1IgwzTVQHC%2Fwe0KIdY%2BIq3APtLMokQvEpss3xg1WpNgL2SiYndMjWa8cfdIx4czTMAkzoPAlpWKxIwSLXWt0zDpoBXLnXtD6zD9UzfRetSMtgy2XFb5tCJToZJIlB4TexsmjvTbV3R3HmlZZj0cttUkWsAwE5I1b2KGd8b8HPlfzg4JkdPKBlcSAH%2BHFZ10o%2F%2BNsV2HzIsZxpKIV8RKi0MsmfkCiRjCXNQWpVzMN767DUhNKo0vAXu3XkuTAZ1%2B6TkuzM6bVnK9wGub9kZocJjbvR0xvyrrDqwiDJTQhLblHO4b9UGJHdKxpKliC2TTdHzy4Zn09Llmcfe72mTcJS2QKQKvZd8fkEdeweu8qVRcPGyt69UYLy1ZnWm2H3VgwU934yRwzF06lp6w5z7Y0QuRHaiwon36dFbGM0dn5ORpdeeHMX8YE%2F5rxWZaPwu0ImRT5TRczsDfDe%2FnGZeuxo1dI%2B5tgeHOU50rNR1ukVjsiMCc9b5GvLdUtNgMAhrFXkxXgBJiK%2Bo%2FZ2Apuq4slSjEbcEI6LwWZLcjk%2BIP%2FXGZHIbGooD9Igr8LHmMIJO45x4yy%2Bv35EPC%2BeHPdbjfftqPWwX4Q3fRFCzRy4HJUyC7H62uUNlaSpsBGwb7DhUt62aIhrdZerg4R6cdIF4TDoxJ7BBjqkAQcGggryqDAqI%2BQTw36v2PLYr%2Bxml3ciZkSjU4P2HmE7Tu1ZB0J5GxRI%2Bq1v6Ehq2yg5MheR2Ao9TcOVJYJYzg8m0sY%2BoJ5mDOw8Wt2Rih5ap6kVBVVxWi7q3cdaKuaAFbArMOhEjplhl3gUVTGh2MkNOdkIQqpkGpCAwCsHuwJZLsBxwI2n%2FBTG9cn6V34iCOwJ6sjGWJy%2BgqOKrbKdyDuCI2aY&X-Amz-Signature=0536d9aeb0a69f4b3b617344e6d7c530edf80e3d815efe5f2da0c0448897a310&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
