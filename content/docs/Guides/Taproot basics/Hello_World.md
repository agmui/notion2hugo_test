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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJBSBA5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXAn5TZ2jAjfSL8kF2%2BQ3fzef43ikPfVAcYbow0KIXIwIhAOatVVD%2BR8rAnaJZC4Qj65X2nd7k13WOzlI0MwDh4apkKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw19FAub%2FNasmbMS48q3APk0Zo%2BBwkfSOv0mggzb%2FJUMUD0W22CZgiyeDMcqd0Exuy6fazh8N8xSvXiXWqOQlDCsQWNCjigdkGNHj1yMnYdyh4IHDPko46RJVfP8MS0lvjlBIPS37YMB%2F%2BixvPOeMO537EMbolB0iamhDdcrt%2FwUWNaPGX%2FCFYb8eKmd3nfiZpKncfaF34a%2BqVkwgHSx%2F1IQPszudpzBVG1GImKavqJ%2Bk8aOujbGDxLLNd94NFbqiTXCsXrsB0GdvTE8cfeBXjdnOf729tNzfdNabYZXu0JYHS8W57dPfZh0pe5Ku3HnBYEjAQ5Axpv2daXyHzDsP%2BX4TQkcjloBEkYids%2F1WgbY888Y1QQlzgHDAhoLJQI65ODoWjHuVDgE1Xa4uvDcbhi9LtRl81Z9J%2F%2Bzdks4O3Unt85OJc86s%2BEjXroiCNIDT%2BEEo5k08XyanborbHRkKThrg46M7X3TwxA8mtejtPUUC%2Bqcdfy7lAr6HO%2FbGyeCsrv6a%2FoA%2BBkUDfJ42j%2FsO%2FQp0S7wrvPEUE26JIlQJCKORxW6rmwwBaATSIhxYZP61OoDqJS1J7HBKbCYxDdceisj47sNQ1bkVRa5UfilSRlpy5XIOcQOsHId8mFOI42xLQyqGim967qzygBuDD1zcDDBjqkAeEGCV5l6qf9edQ0QbIIQ0VTdrysUkJd0lApwwleaKBB7YORJ036EDxeXbwndq0dDBcqwVVPyeXdo8mFu1MNyV0XJcOjYO1D6bmMKKtHPP8fR2IFZ13NQW2rMcX8tbTRfoTvvM4h5cztJdGnk4jfiKnPs%2B2j%2B9paCLGAEN56CBqZUgHtcChv%2FzuNYr9CyytvhtwgR1prz8PAG6CnM2bdcUr28Eue&X-Amz-Signature=db22f82c845e40d54ad75341a1882683589aa0cfdd7a2d9e18b78c4a615ef0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJBSBA5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXAn5TZ2jAjfSL8kF2%2BQ3fzef43ikPfVAcYbow0KIXIwIhAOatVVD%2BR8rAnaJZC4Qj65X2nd7k13WOzlI0MwDh4apkKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw19FAub%2FNasmbMS48q3APk0Zo%2BBwkfSOv0mggzb%2FJUMUD0W22CZgiyeDMcqd0Exuy6fazh8N8xSvXiXWqOQlDCsQWNCjigdkGNHj1yMnYdyh4IHDPko46RJVfP8MS0lvjlBIPS37YMB%2F%2BixvPOeMO537EMbolB0iamhDdcrt%2FwUWNaPGX%2FCFYb8eKmd3nfiZpKncfaF34a%2BqVkwgHSx%2F1IQPszudpzBVG1GImKavqJ%2Bk8aOujbGDxLLNd94NFbqiTXCsXrsB0GdvTE8cfeBXjdnOf729tNzfdNabYZXu0JYHS8W57dPfZh0pe5Ku3HnBYEjAQ5Axpv2daXyHzDsP%2BX4TQkcjloBEkYids%2F1WgbY888Y1QQlzgHDAhoLJQI65ODoWjHuVDgE1Xa4uvDcbhi9LtRl81Z9J%2F%2Bzdks4O3Unt85OJc86s%2BEjXroiCNIDT%2BEEo5k08XyanborbHRkKThrg46M7X3TwxA8mtejtPUUC%2Bqcdfy7lAr6HO%2FbGyeCsrv6a%2FoA%2BBkUDfJ42j%2FsO%2FQp0S7wrvPEUE26JIlQJCKORxW6rmwwBaATSIhxYZP61OoDqJS1J7HBKbCYxDdceisj47sNQ1bkVRa5UfilSRlpy5XIOcQOsHId8mFOI42xLQyqGim967qzygBuDD1zcDDBjqkAeEGCV5l6qf9edQ0QbIIQ0VTdrysUkJd0lApwwleaKBB7YORJ036EDxeXbwndq0dDBcqwVVPyeXdo8mFu1MNyV0XJcOjYO1D6bmMKKtHPP8fR2IFZ13NQW2rMcX8tbTRfoTvvM4h5cztJdGnk4jfiKnPs%2B2j%2B9paCLGAEN56CBqZUgHtcChv%2FzuNYr9CyytvhtwgR1prz8PAG6CnM2bdcUr28Eue&X-Amz-Signature=f898230ba2fa487dcec2c5c83f726f2e10173ba99635a797926b1d7af70c8890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
