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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQSK7PN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqqBG3jtQYZ1uhs3U%2Bl83GXMfoHoxFZ%2BEN76vN0y1UPwIhAKVFdUuay%2FW%2F7ND%2FmbIcqbMLwxgayBuJvEKudLD9UFQwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX1Bhf0xKZpJYZtYoq3AMg4mqEQlAuetOr1Nm0TBQKU%2BAViW7bt06%2FWBpbU4c05P%2FvTq8ZDxmrIinpSQN%2BBsyYWGb%2F5h5koK%2FUKzLPBWDQIU6yWf3xAqwWeUET%2BePoEVthVIiOU%2BuvlcfDJld5YEJKh%2Bb0WLt7o3mLYRlMCIdTfaJXVz3iF76WG9w7cEgwc8xA%2BcEmjWE%2BAPuFPQXRGif%2FqMYWuRGbDnc48igK1qKTEZz7ewLOlP58PevToi2MskOV%2FUx%2Fzhbr0Lt6lucUhn8ku5mHZrGgl9Qbe2Cw3tkh4we3S%2BnC0W0XznrXCZRA2q7H0J9PaBv%2By5Hx2c%2FvmPMXGX1b43JJO1IEg4gyhZpSmDLFdY4B3q7tOGC6Uo4Arv14IQRT64Fl4MYODlwR6i7zPt%2FMx3TY%2BcfnS7R3nSbP9gjnLQP9TpDq%2BK5o5ue9sZAGUG81w7IGtLy6QZ%2BoT6gG5JFUBvpyhG%2FeILsRWSfGS2RLiVanPiIJFveMXmQz4NwVO2JfieNKmBaKXcfXx6izEG%2BJMvyZtgVATzEvxoUCn9fMTQVmT56EqCg6NOoyqhaT8%2BcTt%2FQzhvN9vjVAyUZPfP5J6sg2mhT%2Fd1odSusNJffHHFrFxOj96qG9wIWIB9ER3Hu85gsJhOD39jCzj%2FzABjqkASV6p30IdgIdopgAy1c1nAvKRx4vTsplyyvDvLcsa8VJHs9Wwx%2BgkeKD1PxdpvyMpujNLjqu0aqeKmUdJXJheZihU3%2F3KmPblG99XAE3u02uQULhL7n8rojT6KGnYtnXlX%2F%2FmWrLx7SX%2BYCGjLRThNGqt%2F4VYs56zjaQgihI8UEeB6AhqqyzLKJKDm2I%2BTl%2Bi2L4q2CNzza59fHvCF9jJX4AXBsQ&X-Amz-Signature=a7ce5614833a9349bb74a36e6060bedd94286839e52156ef1c6d281b298003b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQSK7PN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqqBG3jtQYZ1uhs3U%2Bl83GXMfoHoxFZ%2BEN76vN0y1UPwIhAKVFdUuay%2FW%2F7ND%2FmbIcqbMLwxgayBuJvEKudLD9UFQwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX1Bhf0xKZpJYZtYoq3AMg4mqEQlAuetOr1Nm0TBQKU%2BAViW7bt06%2FWBpbU4c05P%2FvTq8ZDxmrIinpSQN%2BBsyYWGb%2F5h5koK%2FUKzLPBWDQIU6yWf3xAqwWeUET%2BePoEVthVIiOU%2BuvlcfDJld5YEJKh%2Bb0WLt7o3mLYRlMCIdTfaJXVz3iF76WG9w7cEgwc8xA%2BcEmjWE%2BAPuFPQXRGif%2FqMYWuRGbDnc48igK1qKTEZz7ewLOlP58PevToi2MskOV%2FUx%2Fzhbr0Lt6lucUhn8ku5mHZrGgl9Qbe2Cw3tkh4we3S%2BnC0W0XznrXCZRA2q7H0J9PaBv%2By5Hx2c%2FvmPMXGX1b43JJO1IEg4gyhZpSmDLFdY4B3q7tOGC6Uo4Arv14IQRT64Fl4MYODlwR6i7zPt%2FMx3TY%2BcfnS7R3nSbP9gjnLQP9TpDq%2BK5o5ue9sZAGUG81w7IGtLy6QZ%2BoT6gG5JFUBvpyhG%2FeILsRWSfGS2RLiVanPiIJFveMXmQz4NwVO2JfieNKmBaKXcfXx6izEG%2BJMvyZtgVATzEvxoUCn9fMTQVmT56EqCg6NOoyqhaT8%2BcTt%2FQzhvN9vjVAyUZPfP5J6sg2mhT%2Fd1odSusNJffHHFrFxOj96qG9wIWIB9ER3Hu85gsJhOD39jCzj%2FzABjqkASV6p30IdgIdopgAy1c1nAvKRx4vTsplyyvDvLcsa8VJHs9Wwx%2BgkeKD1PxdpvyMpujNLjqu0aqeKmUdJXJheZihU3%2F3KmPblG99XAE3u02uQULhL7n8rojT6KGnYtnXlX%2F%2FmWrLx7SX%2BYCGjLRThNGqt%2F4VYs56zjaQgihI8UEeB6AhqqyzLKJKDm2I%2BTl%2Bi2L4q2CNzza59fHvCF9jJX4AXBsQ&X-Amz-Signature=b62859007b279433c14b0c457b1b6196d2dcf4ac9e8b47a2ee8995b4380ec1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
