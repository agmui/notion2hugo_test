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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PYDD2W%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCW6%2FtsI4%2BVQZJ1c%2BgoAmYQ5PQRX3j%2FTFKxxKa0ScSxggIhAIEqRzqEL9QXLrQ%2FptPvx4A98LEphCgTbnDSS%2Fmocg9NKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7L6G4WO1KAy0fLbkq3ANKisk44rerso%2BlW%2FEYaEW8H0qjO%2BGxVkhsqUKdkjr8x6AX3Xyj%2BAPDqK6LydLTIv9p8AfhqDwWPcTEZ4NUL5bCkGthEfCGOOwNFxzsvUwyPPK%2BlXT6MX1Y8E3z2ch%2BqXDrRzvQPOTSITAeUO35UMWs2yLulAaF171AWr4whp7VCxPMSwPXKOmDVhponbH4pKcNeQ2N73buzv5YnUZ5sbALiV4fOLGn4cqgf6%2BtZ2npOnN51sieTnwKfmWlM%2F5J8LXdQRf7j%2FuzlswddpIqBMuuqKUAQKK4zaN4GmbUYOspXr8C%2FVtQYkUXmN7OzH7aDvh97rDWrUkVSKBl99aLTZmozxxoqu3G9J8Z005VAFJ%2BWFKJp7HrmoYMehYXkALJP6QCfzHWCGNeHT5c1tvub3xYsxl2ZnWTtPnQV9loH8Jh3lhwLSBnk2ozP9WYmvS92PUdun8UWn2Y2QZPZn48U0XqhxYcZjBgUHLNBHlPenz76x2YtX8GWMrxnLjqOC87gos6QOinHACqjtMwxAZc7EvVyvFWAEKoV692aPucGt4BSIlhvPDnLuDglle66tTIRA%2FKRv4lo%2BvL87%2B%2FREVUsxI1DxzYeCRJhZjCyNLQlPFjVvEyKEH8tTxU7qiN9DC4gofBBjqkAfF9Z4yPgQlTsa5os6tvNgzWyb6K8Ee%2F0x8VYYmyylKb8vsLeeOrK%2BYg52wSWcxcQBSQRGwaegGFGAHVTpesa8ZUNX2pw3Knnf9cU%2FsRlFwImeCm3d0hWCb1V8a49C%2Bc3LPvaVU7sFIBDy2wy6tIcTABcjTR2vmu%2Fro1NX6mU10oU7JGE0MQRzfCK18sd4r6RNvVXESrZYnqTMcpNSjYwEoLaTWe&X-Amz-Signature=3f50b1f5424155fa01b549ed0382a4b6ef3b536cfb7c678628357082163178fe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PYDD2W%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCW6%2FtsI4%2BVQZJ1c%2BgoAmYQ5PQRX3j%2FTFKxxKa0ScSxggIhAIEqRzqEL9QXLrQ%2FptPvx4A98LEphCgTbnDSS%2Fmocg9NKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7L6G4WO1KAy0fLbkq3ANKisk44rerso%2BlW%2FEYaEW8H0qjO%2BGxVkhsqUKdkjr8x6AX3Xyj%2BAPDqK6LydLTIv9p8AfhqDwWPcTEZ4NUL5bCkGthEfCGOOwNFxzsvUwyPPK%2BlXT6MX1Y8E3z2ch%2BqXDrRzvQPOTSITAeUO35UMWs2yLulAaF171AWr4whp7VCxPMSwPXKOmDVhponbH4pKcNeQ2N73buzv5YnUZ5sbALiV4fOLGn4cqgf6%2BtZ2npOnN51sieTnwKfmWlM%2F5J8LXdQRf7j%2FuzlswddpIqBMuuqKUAQKK4zaN4GmbUYOspXr8C%2FVtQYkUXmN7OzH7aDvh97rDWrUkVSKBl99aLTZmozxxoqu3G9J8Z005VAFJ%2BWFKJp7HrmoYMehYXkALJP6QCfzHWCGNeHT5c1tvub3xYsxl2ZnWTtPnQV9loH8Jh3lhwLSBnk2ozP9WYmvS92PUdun8UWn2Y2QZPZn48U0XqhxYcZjBgUHLNBHlPenz76x2YtX8GWMrxnLjqOC87gos6QOinHACqjtMwxAZc7EvVyvFWAEKoV692aPucGt4BSIlhvPDnLuDglle66tTIRA%2FKRv4lo%2BvL87%2B%2FREVUsxI1DxzYeCRJhZjCyNLQlPFjVvEyKEH8tTxU7qiN9DC4gofBBjqkAfF9Z4yPgQlTsa5os6tvNgzWyb6K8Ee%2F0x8VYYmyylKb8vsLeeOrK%2BYg52wSWcxcQBSQRGwaegGFGAHVTpesa8ZUNX2pw3Knnf9cU%2FsRlFwImeCm3d0hWCb1V8a49C%2Bc3LPvaVU7sFIBDy2wy6tIcTABcjTR2vmu%2Fro1NX6mU10oU7JGE0MQRzfCK18sd4r6RNvVXESrZYnqTMcpNSjYwEoLaTWe&X-Amz-Signature=f0a1b9bb504a79c3a6de5f18b290a5c1503b40755a441a27e9dbe1f3a8968252&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
