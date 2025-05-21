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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OULSN5V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAGaOG7Ih03tqwJU2xBEY0zo7SR0RRXCiWnPXfrlsv%2BpAiEA00qSYeVgvEuDH2%2FSA7%2BTvKCrxkojBYRvIzApBvaYdbUqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzqT%2FH9eKOioKyGGircA3LgiLG164H52NaoTK%2BaoxCWKIr8wKpsGCE7YP1eljQSnR87G3lQsFXi5T3MqQTw%2BUF9RIN1LlM0JU9ayRi67FDhITIkwacM387ZcBUBAg80NWIgE0tHrhl5kqBHtSKcDBxJSFYEz3Mat5HXxYmQud6Yq0SzsH0ueuQK0M7IR6Yo8GHPMiMuFt5VPwzE%2FZ%2F%2F7lrXLgOLagWo6Jvqzsj5sL3bwQmpLsmXiIscgZzZCjVXxwfyA9nRuuasVYSnbnZ9GeMVa9TMvYu%2BLxqX4iq52mamITTmkqr1RsITyFtcl4hm1E5%2FTvm1FSPLcxGq%2FuuM2Nr07IHeyjQDYJfKIPEj5UpSzKNMMIAnxW46NpmOa%2FLhFz9fEz71mfhyDeTlxhs4c53q4CNTEN1Nnt7ad11zfcHJClNzEfSWDVleysfsD2kv7tKG2L62k9eQnFCAMnCSqF3hH3VAFfEXIPHqEUi5KjZwYydLeGBl2fxiDJArtYsbQSKuvkkQDnhxkV7pugzwUpxVqQVNqKZPnFo%2F8q71B3LaBwxvViMagwu6iDaXmebArkwYsP3DQIzog%2BneEFEwFbD1nX%2BvgTAuR%2BTdpRYfZAMzA89pcHANifmG8E0wtBu4dsAXDnOBbtHIFjX0MI2hucEGOqUBWw%2BLVaJfutOXICAJn4r2ewe2zN2VrNChPWUSoD7d2LWVmCvHjGGTWZkXMGGRnUVwTESbiNbfGEXXK2OiDMgEG70mjYO5zmgPNr7pcnq4IvFgmLCTahVp9m8M7%2Fb1JfvxwnLO94WNLHjhhMHpLvcI5Ncwq%2BvrxDUcxEqksr6blLZZkow7vPg1ablXZofDx2L%2BNCd98YcwitRlV4HkXwtFKOo3Xj%2FJ&X-Amz-Signature=fb62661723cb4f5d5612e0bd9147ea9e96914272932f4c7ee8f652effd6a3cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OULSN5V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAGaOG7Ih03tqwJU2xBEY0zo7SR0RRXCiWnPXfrlsv%2BpAiEA00qSYeVgvEuDH2%2FSA7%2BTvKCrxkojBYRvIzApBvaYdbUqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzqT%2FH9eKOioKyGGircA3LgiLG164H52NaoTK%2BaoxCWKIr8wKpsGCE7YP1eljQSnR87G3lQsFXi5T3MqQTw%2BUF9RIN1LlM0JU9ayRi67FDhITIkwacM387ZcBUBAg80NWIgE0tHrhl5kqBHtSKcDBxJSFYEz3Mat5HXxYmQud6Yq0SzsH0ueuQK0M7IR6Yo8GHPMiMuFt5VPwzE%2FZ%2F%2F7lrXLgOLagWo6Jvqzsj5sL3bwQmpLsmXiIscgZzZCjVXxwfyA9nRuuasVYSnbnZ9GeMVa9TMvYu%2BLxqX4iq52mamITTmkqr1RsITyFtcl4hm1E5%2FTvm1FSPLcxGq%2FuuM2Nr07IHeyjQDYJfKIPEj5UpSzKNMMIAnxW46NpmOa%2FLhFz9fEz71mfhyDeTlxhs4c53q4CNTEN1Nnt7ad11zfcHJClNzEfSWDVleysfsD2kv7tKG2L62k9eQnFCAMnCSqF3hH3VAFfEXIPHqEUi5KjZwYydLeGBl2fxiDJArtYsbQSKuvkkQDnhxkV7pugzwUpxVqQVNqKZPnFo%2F8q71B3LaBwxvViMagwu6iDaXmebArkwYsP3DQIzog%2BneEFEwFbD1nX%2BvgTAuR%2BTdpRYfZAMzA89pcHANifmG8E0wtBu4dsAXDnOBbtHIFjX0MI2hucEGOqUBWw%2BLVaJfutOXICAJn4r2ewe2zN2VrNChPWUSoD7d2LWVmCvHjGGTWZkXMGGRnUVwTESbiNbfGEXXK2OiDMgEG70mjYO5zmgPNr7pcnq4IvFgmLCTahVp9m8M7%2Fb1JfvxwnLO94WNLHjhhMHpLvcI5Ncwq%2BvrxDUcxEqksr6blLZZkow7vPg1ablXZofDx2L%2BNCd98YcwitRlV4HkXwtFKOo3Xj%2FJ&X-Amz-Signature=4355246dc6b6f07c687cff6f1d82fda3e0cbd72654c9efebb5a17c129793a8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
