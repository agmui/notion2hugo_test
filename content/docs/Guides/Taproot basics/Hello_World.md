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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCRPANZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBbphksZd56seekix6ZcplDxxRt91xUZtIkbbNJ1lNtAiEAovb04nsv0k08WH4%2FW3mlvaiUZ5NFuUZRJrIjdtjXH0sqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2671DzhBOrAQ8WtSrcA%2FmurN%2FjqnZkDxCaTilIaFGicE9ORnf6WmMYQ5DASyBnsScaDrtwrAjkhXEHLuw9gnxZIq%2BhDE%2FPkxExHDO3w3k8jYRKn8B7zZJCNAi65rXc8AsGXYm9%2FOntI7SK7adtkdtwTmrMpdc1CfZPPjr0uM92G%2BuWKrZ4oyrew0X6ZwyS9UrQV4ZL%2FZHrJDJesazYNxvC0Ok9DpY9cr1bUtLLiDnq2GhwjAqglPMu0fGuC8NGwmWosxI4SBXSwNQq%2FCKiNgRwF%2BwvMcGG%2B5SyFZMrmSiYjf70kcUxkjdDqQij0jCKCgLTDuKlh7QW6BPbsexuA4smoscH0UCEfKkFBH%2BmFpoCcSLArcuSBEqzQ2xouMnqE1pu3ey74o%2B64IETyM9gAuU91RaWsHmVYZ%2B6%2FcUieYcqIWUiwo3KHW6FQdVolqaq8tVIj8H0Mov%2F2x%2BTD7me5yxHqHOQn07GYvqEIyPA%2B6W4dBd%2F%2BCO%2FRi6EpAprmHSO55mMIzU38cHz4zN0y9FZsdI%2Fq0t4rCe4aLky1XTWjBTphBecA7t71oXGPOppjNBkfWULi7sAh3sKhbTPrSrNdxYr2ePFxmvPk%2F6Oyrv9IqZtiMPbFm1gPMNo3j76Vcp%2FWVg840bQooPip%2Fb%2BMJDbj8MGOqUBKEi6CK6EjvfStGvd6UQfwA8drIWLEp1Wavcq9wqJ8nnCzKqYxNKlMfllWLAi5J1L%2BU9pvLIkpIbSa21MCMa6MRlPsjd1cEbH3SyJDjLJHf0ELdtrQyLPVdudhEIAsfltX%2BCGf%2FJPNozPsr9BnVOa4Tl%2F%2FVy1WkmeLJU2DAzfrz9YSSIq2w3Y2pAL8GK%2BmkyDu0wfacmsSXbAwLeoYxuW995T6w7O&X-Amz-Signature=0f40e799c1d82d6bcbfcbfe1cdbb5204fe1846b00253339c9e0aa18476d16a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCRPANZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBbphksZd56seekix6ZcplDxxRt91xUZtIkbbNJ1lNtAiEAovb04nsv0k08WH4%2FW3mlvaiUZ5NFuUZRJrIjdtjXH0sqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2671DzhBOrAQ8WtSrcA%2FmurN%2FjqnZkDxCaTilIaFGicE9ORnf6WmMYQ5DASyBnsScaDrtwrAjkhXEHLuw9gnxZIq%2BhDE%2FPkxExHDO3w3k8jYRKn8B7zZJCNAi65rXc8AsGXYm9%2FOntI7SK7adtkdtwTmrMpdc1CfZPPjr0uM92G%2BuWKrZ4oyrew0X6ZwyS9UrQV4ZL%2FZHrJDJesazYNxvC0Ok9DpY9cr1bUtLLiDnq2GhwjAqglPMu0fGuC8NGwmWosxI4SBXSwNQq%2FCKiNgRwF%2BwvMcGG%2B5SyFZMrmSiYjf70kcUxkjdDqQij0jCKCgLTDuKlh7QW6BPbsexuA4smoscH0UCEfKkFBH%2BmFpoCcSLArcuSBEqzQ2xouMnqE1pu3ey74o%2B64IETyM9gAuU91RaWsHmVYZ%2B6%2FcUieYcqIWUiwo3KHW6FQdVolqaq8tVIj8H0Mov%2F2x%2BTD7me5yxHqHOQn07GYvqEIyPA%2B6W4dBd%2F%2BCO%2FRi6EpAprmHSO55mMIzU38cHz4zN0y9FZsdI%2Fq0t4rCe4aLky1XTWjBTphBecA7t71oXGPOppjNBkfWULi7sAh3sKhbTPrSrNdxYr2ePFxmvPk%2F6Oyrv9IqZtiMPbFm1gPMNo3j76Vcp%2FWVg840bQooPip%2Fb%2BMJDbj8MGOqUBKEi6CK6EjvfStGvd6UQfwA8drIWLEp1Wavcq9wqJ8nnCzKqYxNKlMfllWLAi5J1L%2BU9pvLIkpIbSa21MCMa6MRlPsjd1cEbH3SyJDjLJHf0ELdtrQyLPVdudhEIAsfltX%2BCGf%2FJPNozPsr9BnVOa4Tl%2F%2FVy1WkmeLJU2DAzfrz9YSSIq2w3Y2pAL8GK%2BmkyDu0wfacmsSXbAwLeoYxuW995T6w7O&X-Amz-Signature=e8830cba042ea6fe466574348e0aeb9dbe5402b6c21fd7547a3c3c8e8befcc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
