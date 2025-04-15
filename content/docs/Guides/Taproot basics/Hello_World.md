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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RDQSP7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPZba%2F1nuGIhbQdcIvwohwHzYYPGnZFtJoWJO%2Fr%2FANwIhAIH6cfdJ86hvNXJxrE8JI5ngv43n6eRFr7pthICuxnk1Kv8DCCQQABoMNjM3NDIzMTgzODA1IgztBCUgCc523YEWWhwq3ANTN2yr0uMniyWDfsJ14zzE1f4GSoMHk8WGiYzJIR4%2BAHGatdvUQZNcogY9K9bjrWT7VgekcdAWeO3D8dicQ%2BTMPPekQ%2B4DDxfNsfzwOtLeCR0KXpMgzg26J3oqdEFwFuJlbRn%2F1ATeEOEKoCSDNhNy2RAyI41n6mHQCaxEDPTiFDmGlzNnxcLnNynMtCxxNMz%2FaZHOakVRYXyv5kyahViLj60Y3Fs%2BmGc6vNvo4B14jfeKHKHuTNq%2BrazH8fYLN%2FfJhgqK1kp7%2FpP4VR0DWJ7ZqwQwNYZY0mRI4P6n0pDMNe5kWa2suO0vNbu%2F2dFRfgjLi%2FmvcFmCxwm8w58xzncHSlgAXUaKIkLK%2Bquay3u%2BN1W3yYI1E7krCdu9oqjRXtDe9shV5LXqmM05svn0skFiyGtHFcsVDoZ9TxYYEQtyGqQts95SAQqjpK0zNKLfyGsQ25%2B8vaI3Cf%2BwRvMXACoQNadeDRQjfJM67YbKJmkMrrDggSF%2BdEH6VycT2TMC3%2BjvHx%2BPphwFkJ56xXArppWfjtH8wNYnf6qB5D93VNWUOoGkSlPUrnsEfGINhMBsdvicTXfyIYmOAXct71d4lkv7e8mB7d5%2BNCuNxcprhFcfRxauwtIzXD8dH%2Fd9wzCkn%2Fe%2FBjqkAQ9tlFHPT2wjTZHIBcUxW%2Fo89xeBQvfA42dlk7TD66ZzRiurM%2FuvYpcm5n6gDbBsqBBXAuZFuxBgw4AthXmE1JUP2tr0VV%2F2gpgEn30elCGhrQDVDCPx2RuKskO%2BqnbUqRObjvOnNc1c3KYSuNH%2BNdeGa3WJ9oVbgsS9S0ncMFw1o%2F1nMW0JL8fodllzQzNL95QqxjcP9J%2BSEpejFY%2BaAWTm5RDY&X-Amz-Signature=aa276ee0240779f6fbde9380e3130fc780904284a8e3973a77d3c06d6b79d27b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RDQSP7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPZba%2F1nuGIhbQdcIvwohwHzYYPGnZFtJoWJO%2Fr%2FANwIhAIH6cfdJ86hvNXJxrE8JI5ngv43n6eRFr7pthICuxnk1Kv8DCCQQABoMNjM3NDIzMTgzODA1IgztBCUgCc523YEWWhwq3ANTN2yr0uMniyWDfsJ14zzE1f4GSoMHk8WGiYzJIR4%2BAHGatdvUQZNcogY9K9bjrWT7VgekcdAWeO3D8dicQ%2BTMPPekQ%2B4DDxfNsfzwOtLeCR0KXpMgzg26J3oqdEFwFuJlbRn%2F1ATeEOEKoCSDNhNy2RAyI41n6mHQCaxEDPTiFDmGlzNnxcLnNynMtCxxNMz%2FaZHOakVRYXyv5kyahViLj60Y3Fs%2BmGc6vNvo4B14jfeKHKHuTNq%2BrazH8fYLN%2FfJhgqK1kp7%2FpP4VR0DWJ7ZqwQwNYZY0mRI4P6n0pDMNe5kWa2suO0vNbu%2F2dFRfgjLi%2FmvcFmCxwm8w58xzncHSlgAXUaKIkLK%2Bquay3u%2BN1W3yYI1E7krCdu9oqjRXtDe9shV5LXqmM05svn0skFiyGtHFcsVDoZ9TxYYEQtyGqQts95SAQqjpK0zNKLfyGsQ25%2B8vaI3Cf%2BwRvMXACoQNadeDRQjfJM67YbKJmkMrrDggSF%2BdEH6VycT2TMC3%2BjvHx%2BPphwFkJ56xXArppWfjtH8wNYnf6qB5D93VNWUOoGkSlPUrnsEfGINhMBsdvicTXfyIYmOAXct71d4lkv7e8mB7d5%2BNCuNxcprhFcfRxauwtIzXD8dH%2Fd9wzCkn%2Fe%2FBjqkAQ9tlFHPT2wjTZHIBcUxW%2Fo89xeBQvfA42dlk7TD66ZzRiurM%2FuvYpcm5n6gDbBsqBBXAuZFuxBgw4AthXmE1JUP2tr0VV%2F2gpgEn30elCGhrQDVDCPx2RuKskO%2BqnbUqRObjvOnNc1c3KYSuNH%2BNdeGa3WJ9oVbgsS9S0ncMFw1o%2F1nMW0JL8fodllzQzNL95QqxjcP9J%2BSEpejFY%2BaAWTm5RDY&X-Amz-Signature=b5d0bf792d8a11ff69a07ecd7be80b7e9c3c5556a04cc87a601bb792aebba816&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
