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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPB4RKP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4pEfVNEFRWS85z0Lc3W78VY6j4ih08dEi5e0UCy1dLAiAceP%2BI%2FagL%2BpJIExCV2iBDEj6HXb3SQFn9zXRsZ2EsviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BRtENFTKLiB04kDRKtwDx7o2m1WX6Rw1wsAJRaVCoI04z%2Fg0Ekjda3%2BOzB5Z9CYLtiHLM0S6F6yHR9r0P65CrSxPCxPiaUuu%2FhW%2BxqL%2FzBmzVM4NM29T5shmraha0R7HHA%2FuyUVP%2FfWcOF3W88%2BZaEA6zgFNB9ceicvC9R24fbU5MwMdioOFAlTQHZ%2BOABs88Ue6bkjxGKROqy%2FknxLW6UX7tZLZVSgQzBQdSujVPQB1a8fi%2FYBcBtVjurXazV1caqx4vRG1fbi5TuhFAXJW4Viy%2B55yqEntjAEocgDjwUE1BUgRLKYKbVoIFtEqrxjha6XKVGDP54qx7ajkkTAxoRbIvBATDiP8W9FYu%2FU947fr0TZvxj9wb8Bus2xR0381pDH7ZwsCe23f8gWqMgK5cQ0MjGGgDRtecdftUcfKwznUHNgLUjpdyXNoaVz9bzply1ngTWSIzxzxnzOtsXV1w%2BFRW7TG%2BjiQIBS5dFJzsbiu%2FRaonj%2BHuIMr1zTJVebkPOrjJ85JCghMsrIxOypqTWlzCDDm43NMsOFEA7dL9d6xu4aDOs6ZYa7XPbgAhPMfRnvVh26bKR4uSxwMD9edQLxVykldxSyHlfWNrb0oQNCjH%2FQ1oBisKObanOtBgO2tZBz1Aoiyf4%2FbF6owhJ7lxAY6pgHP%2B7rJMYIJ%2ByYUdFeAQzYNZeOTqVHkMrxlRZ6JaJEoK8Zi4TRAY%2B8eMSRUxVgT802cpVCGL%2BM6Xv5v6GB80ywhHV68rgKn1PW8Sq0mEZ3sp6%2F%2BkY92HS%2B0h6izg5JOHAohA1%2BSfRh08Eh8N6tkwwhbejjylPpmghfn0dpa5QggZ3VupdmSlkk75Uq1m9v98e2J4DI2Biv%2F5sRKgn0GwKGxbYYVq42t&X-Amz-Signature=5c5b3e76070dc45dc944098bed8600809087c471e7eda93c2a4d849ff5390ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPB4RKP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4pEfVNEFRWS85z0Lc3W78VY6j4ih08dEi5e0UCy1dLAiAceP%2BI%2FagL%2BpJIExCV2iBDEj6HXb3SQFn9zXRsZ2EsviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BRtENFTKLiB04kDRKtwDx7o2m1WX6Rw1wsAJRaVCoI04z%2Fg0Ekjda3%2BOzB5Z9CYLtiHLM0S6F6yHR9r0P65CrSxPCxPiaUuu%2FhW%2BxqL%2FzBmzVM4NM29T5shmraha0R7HHA%2FuyUVP%2FfWcOF3W88%2BZaEA6zgFNB9ceicvC9R24fbU5MwMdioOFAlTQHZ%2BOABs88Ue6bkjxGKROqy%2FknxLW6UX7tZLZVSgQzBQdSujVPQB1a8fi%2FYBcBtVjurXazV1caqx4vRG1fbi5TuhFAXJW4Viy%2B55yqEntjAEocgDjwUE1BUgRLKYKbVoIFtEqrxjha6XKVGDP54qx7ajkkTAxoRbIvBATDiP8W9FYu%2FU947fr0TZvxj9wb8Bus2xR0381pDH7ZwsCe23f8gWqMgK5cQ0MjGGgDRtecdftUcfKwznUHNgLUjpdyXNoaVz9bzply1ngTWSIzxzxnzOtsXV1w%2BFRW7TG%2BjiQIBS5dFJzsbiu%2FRaonj%2BHuIMr1zTJVebkPOrjJ85JCghMsrIxOypqTWlzCDDm43NMsOFEA7dL9d6xu4aDOs6ZYa7XPbgAhPMfRnvVh26bKR4uSxwMD9edQLxVykldxSyHlfWNrb0oQNCjH%2FQ1oBisKObanOtBgO2tZBz1Aoiyf4%2FbF6owhJ7lxAY6pgHP%2B7rJMYIJ%2ByYUdFeAQzYNZeOTqVHkMrxlRZ6JaJEoK8Zi4TRAY%2B8eMSRUxVgT802cpVCGL%2BM6Xv5v6GB80ywhHV68rgKn1PW8Sq0mEZ3sp6%2F%2BkY92HS%2B0h6izg5JOHAohA1%2BSfRh08Eh8N6tkwwhbejjylPpmghfn0dpa5QggZ3VupdmSlkk75Uq1m9v98e2J4DI2Biv%2F5sRKgn0GwKGxbYYVq42t&X-Amz-Signature=9182c23e57f27b6d0b6c7e0dca2608ad69dd0dc48e3fa881da08fa4fbcc7963a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
