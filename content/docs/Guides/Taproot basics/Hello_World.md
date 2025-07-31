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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMTVPAI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAHy3ErHrC%2FeLC%2F%2B9CHEJ9NOHk2xFr77dH4Jagl85l4gAh8NgEcV4kpOj8n3oa5rzh5LWIdTQ7xZGohAcj44dQ5DKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FL9ksJ5KAI7WeOccq3AM8P4Maadzq94tN73L158Y6KcSbBu3HGCkuen6xUso%2Ff09FP46h10vXMKpDK3jTkC2QN4SL1EM1JnQJYS8qDhNfREvEO%2FITUXPr3TKu7lOi9py8Y8NIAcat0FYVX6Zg6O45Jlvj2%2BQ1iZ8j9jXHiCkWPW8tkRLsZmM77%2BiLu7k2xI8FCV1D3eVHDmRESL2vlpR29NYHCsbc4TxsF6Yerep0V6TN0cAw46aIMH9ItxlwMmx6qEu9OGJE7QftBhFb0DAZ5DyvydhFy1Bvni95g2tio%2B%2Baw%2F5s%2BvcQyr51nnwkmCFu%2Bg6BxFXcUSLgg0%2F29t1JJFSRgkGa3h1Npp%2F%2B%2FG%2BWkxezZ1c06RS%2FO4SMfYBH2lXgxUHgl%2Ft%2F0kgMmF%2FLNNallBhp7JZWwIhDtCKksB0KoCElLfcJ6fuwMVRadnakH7eggR1li679%2Fl1gJMeqQ7TJqGAA2mhBMEGyDrGbHTOt39wnnxtsuE%2BYg44oooo%2BXMFIVOdwPE%2Fjw8dTQeImCwVza74YFCQYjo2GotkpgNjkiNuR%2Br5%2FHeuRsI1RltGIrHBWCb%2FOeCuvxij8nRt9fIVy9OFL6Z6iz05sEZEJwfMwHdgBVGQIyV2WhkcgmBErM18njZKwMnhdxwGnbzCpy6vEBjqnAcAP%2B06mPN058iKUn3qftowEgQ%2FeFvtXv6FUsBEdybMdMFWfCOr%2FRHKET9uKLmWTzLvv5WdQNDJu8AVTqxAme91n9k7Tq4p3DXTcG%2FX3Onz%2BXYIVeh3xT%2F3GIlReUosSJiRQIxmCeppBMPz9GhclAkyhsiiY%2FZUZCPeEVmtsZkxA%2FeV8aVNpEu9bsxHnuDyzk7M4Zn00QnHHctte95oErc8UjNyeMnkN&X-Amz-Signature=fc16d36ffdfa09d0c2ae437fcc2b4e6d647840ba9258a69ba2f0116e41544262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMTVPAI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAHy3ErHrC%2FeLC%2F%2B9CHEJ9NOHk2xFr77dH4Jagl85l4gAh8NgEcV4kpOj8n3oa5rzh5LWIdTQ7xZGohAcj44dQ5DKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FL9ksJ5KAI7WeOccq3AM8P4Maadzq94tN73L158Y6KcSbBu3HGCkuen6xUso%2Ff09FP46h10vXMKpDK3jTkC2QN4SL1EM1JnQJYS8qDhNfREvEO%2FITUXPr3TKu7lOi9py8Y8NIAcat0FYVX6Zg6O45Jlvj2%2BQ1iZ8j9jXHiCkWPW8tkRLsZmM77%2BiLu7k2xI8FCV1D3eVHDmRESL2vlpR29NYHCsbc4TxsF6Yerep0V6TN0cAw46aIMH9ItxlwMmx6qEu9OGJE7QftBhFb0DAZ5DyvydhFy1Bvni95g2tio%2B%2Baw%2F5s%2BvcQyr51nnwkmCFu%2Bg6BxFXcUSLgg0%2F29t1JJFSRgkGa3h1Npp%2F%2B%2FG%2BWkxezZ1c06RS%2FO4SMfYBH2lXgxUHgl%2Ft%2F0kgMmF%2FLNNallBhp7JZWwIhDtCKksB0KoCElLfcJ6fuwMVRadnakH7eggR1li679%2Fl1gJMeqQ7TJqGAA2mhBMEGyDrGbHTOt39wnnxtsuE%2BYg44oooo%2BXMFIVOdwPE%2Fjw8dTQeImCwVza74YFCQYjo2GotkpgNjkiNuR%2Br5%2FHeuRsI1RltGIrHBWCb%2FOeCuvxij8nRt9fIVy9OFL6Z6iz05sEZEJwfMwHdgBVGQIyV2WhkcgmBErM18njZKwMnhdxwGnbzCpy6vEBjqnAcAP%2B06mPN058iKUn3qftowEgQ%2FeFvtXv6FUsBEdybMdMFWfCOr%2FRHKET9uKLmWTzLvv5WdQNDJu8AVTqxAme91n9k7Tq4p3DXTcG%2FX3Onz%2BXYIVeh3xT%2F3GIlReUosSJiRQIxmCeppBMPz9GhclAkyhsiiY%2FZUZCPeEVmtsZkxA%2FeV8aVNpEu9bsxHnuDyzk7M4Zn00QnHHctte95oErc8UjNyeMnkN&X-Amz-Signature=da47ef6dea014eee64d1a01664afc880a230a156fd4033daef76f34991625f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
