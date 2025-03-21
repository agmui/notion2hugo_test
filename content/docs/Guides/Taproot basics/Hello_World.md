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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6DX3HB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDSJFJHA38iSKLM7jHJ2kwjPEJjGzRKiMVnr1RPgLQjQwIgabjRepNBaX%2BgdqLRF1LDqjOaDYMwnUSsieDRUcnEQiQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2FNAhaR6m%2BXci4ircA%2Bll9iyrF26lf0SBKCLoQ0jKrrzwKy2cmgDp2ZjzjIiPpfOOOa4PU0Xc1BdVlqGGscVVNghAEWII9Rv3vnF37SObV9q8oQ0Qv7bCb%2F%2FdSEb16YYttXPBXDS%2F2Ufo1yCvVlMSsV3whjpVNvua%2FGCzcznrTmDS3rOHHvFq0JCDVJipRweJS8Vo%2FvlYOzCY9kXtxAQTG2zC9x7jVpdRG7H0%2BXkm5ScM2doyucfdljqLA6GPHGmAi9iFNPGbAoaVaK8qRwodde1BhS%2B4itEtwfipwCFre%2BRpaHHqD1gcTO8oDpm5dQnVdx1OSSfOBQHEdwak1cV2xNaRnSPDI374KHsv3ePTvubO453YUE4yYtrWTDahj4Zpak0mRme9oTneQqxsADSO6kk65sE2mQkyXB%2FAC4Yz0qvRzFqyXxNDZvzLQdHWve82pPTPsWyzfb6BnHPJHfwditDz7ZxuP0fbbwMHjf04nUjybocEUdN27V4reW763%2Bui%2FhAxblksHJg6xc9wkBNf00oBo62mjeVUm6%2BRTMEmfoFceqgzb3LvGiMZ4L8y8srtrk9d6MxaascgwjGLyExevf80GmTZwcQWvqxzxesqH9D0Nj%2B1CGISfv00tgopasBoeEXauFIkspWbMKHc9r4GOqUBXArsDVJAODM8NeMAcYfUXpiwyPCQuPn9UwGqhMYYUbficB0pIJ65eH4Qf0VQuy2LjbuPgt%2FDqoKj4V53RBMxsdtjPDvddVMjiZ09bJEA1mcnT64MbTZqZ9aN3ewSINpheg6qe%2BcVcbuc144IA3%2BRR9eQCGYyYYi1Wt%2FjxEt1DUNrbqlGu8w0oFDQhTEcpSXeo1eFwCsKHRrjN9N1SYo8Ojo5sBRG&X-Amz-Signature=40479897ca9e021945e5ef4dcef4debb33bbb91aea94c24cffb347c99e8aa35d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6DX3HB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDSJFJHA38iSKLM7jHJ2kwjPEJjGzRKiMVnr1RPgLQjQwIgabjRepNBaX%2BgdqLRF1LDqjOaDYMwnUSsieDRUcnEQiQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2FNAhaR6m%2BXci4ircA%2Bll9iyrF26lf0SBKCLoQ0jKrrzwKy2cmgDp2ZjzjIiPpfOOOa4PU0Xc1BdVlqGGscVVNghAEWII9Rv3vnF37SObV9q8oQ0Qv7bCb%2F%2FdSEb16YYttXPBXDS%2F2Ufo1yCvVlMSsV3whjpVNvua%2FGCzcznrTmDS3rOHHvFq0JCDVJipRweJS8Vo%2FvlYOzCY9kXtxAQTG2zC9x7jVpdRG7H0%2BXkm5ScM2doyucfdljqLA6GPHGmAi9iFNPGbAoaVaK8qRwodde1BhS%2B4itEtwfipwCFre%2BRpaHHqD1gcTO8oDpm5dQnVdx1OSSfOBQHEdwak1cV2xNaRnSPDI374KHsv3ePTvubO453YUE4yYtrWTDahj4Zpak0mRme9oTneQqxsADSO6kk65sE2mQkyXB%2FAC4Yz0qvRzFqyXxNDZvzLQdHWve82pPTPsWyzfb6BnHPJHfwditDz7ZxuP0fbbwMHjf04nUjybocEUdN27V4reW763%2Bui%2FhAxblksHJg6xc9wkBNf00oBo62mjeVUm6%2BRTMEmfoFceqgzb3LvGiMZ4L8y8srtrk9d6MxaascgwjGLyExevf80GmTZwcQWvqxzxesqH9D0Nj%2B1CGISfv00tgopasBoeEXauFIkspWbMKHc9r4GOqUBXArsDVJAODM8NeMAcYfUXpiwyPCQuPn9UwGqhMYYUbficB0pIJ65eH4Qf0VQuy2LjbuPgt%2FDqoKj4V53RBMxsdtjPDvddVMjiZ09bJEA1mcnT64MbTZqZ9aN3ewSINpheg6qe%2BcVcbuc144IA3%2BRR9eQCGYyYYi1Wt%2FjxEt1DUNrbqlGu8w0oFDQhTEcpSXeo1eFwCsKHRrjN9N1SYo8Ojo5sBRG&X-Amz-Signature=8f8265808d2c8c053bb9bb7d7c9c8573d0c4a7f60287bec0364612303682b2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
