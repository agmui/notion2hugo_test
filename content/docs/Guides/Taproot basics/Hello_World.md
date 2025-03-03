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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJSX225%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeckh0t99TuYMaa0YwbG6NUzgRAEuPgwWXQ3QQJvp3IAIgQZ4zE2gjoEmpdpV0LxAnDdTQ%2FcC%2FI5JV77Qkb%2FcY7Q4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFWpSXrELpPwcs8vCrcA6t8Yk0VHkrnzYzCEQQwuaCSI1PzkqPSrnuwNGh3fdAYr21D6Vv%2F%2BzdMWh%2BaCsFIccH6mYF0SyYymAu7Xd21J%2FWZAs6Oj1kXFcemew29cVZFbxYMZw74%2Fn373flaXtradjQfnM%2BP3aFoh2yyKat1FxdIAiaC%2FkKir36yJTMT8R5V7iXTOMG36RVv2pxKjB8Z9d42VJjBQD4yHt0FqSHUeJAkGNFQophnPxAzn06onYzhRDXd%2FGY6qWprVSdiPm5h%2BshCGpfIloJDMS1g%2B0Ko3KXaRywlGbCLhG%2BjUufRacSEtP8qcCOGwclgYPo9para6PW39h4tnC317C1sa%2B7yI5bipyBHov%2BDUBga5GmKwAsgLSmiqQ92VjSxSGGWGENln5Mkz8YOxm83J7J18ca72Z1t1bWWrdtVjKV%2FKsr8higsvg%2Bsm34EtnXiEDgPSc6kOS1usB7wBFU%2B6aJ2vuBHr54bnE%2FtshFr%2F6X4oGrBbu3PUv9YMbIjToGmSoBAb%2B3ZW5r%2FzLzZKy%2Bq%2FM3KdWKKYwLvY09GJWOYcmNaqfvgm8TbRtJVC5io56yKdwk0qWdrfdXNoXvkqj8dorYRtORVfTkwAYH6LUDOtS907Pdlummy8addkhLRrINd6mLLMNWWlb4GOqUBmFOj9tMq3TXsvQeHJ4E9IGD88VEU9hKenbupkd9UQ%2F8YM8vYFqAyXkNKkKUR9b6xoeByPk0IM%2FstvwsMpmwu%2BoGoFuzlGPc5coJqB%2B%2Fu3AuhtqOpZFUuogHlpjMNtNxsCG11QlCgGLUeDSxOQNTrLW2iLs7QFyP4qZ5b4q%2Fk0TBcMZfANnfi345IXwGH%2FxEDHFsfAYQLyzBaT2NxjFhk6vwLTnn5&X-Amz-Signature=d13b72ca1682186f65ee3bd129c1beb534be5783344fee9bb58b3f9a3900c83a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJSX225%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeckh0t99TuYMaa0YwbG6NUzgRAEuPgwWXQ3QQJvp3IAIgQZ4zE2gjoEmpdpV0LxAnDdTQ%2FcC%2FI5JV77Qkb%2FcY7Q4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFWpSXrELpPwcs8vCrcA6t8Yk0VHkrnzYzCEQQwuaCSI1PzkqPSrnuwNGh3fdAYr21D6Vv%2F%2BzdMWh%2BaCsFIccH6mYF0SyYymAu7Xd21J%2FWZAs6Oj1kXFcemew29cVZFbxYMZw74%2Fn373flaXtradjQfnM%2BP3aFoh2yyKat1FxdIAiaC%2FkKir36yJTMT8R5V7iXTOMG36RVv2pxKjB8Z9d42VJjBQD4yHt0FqSHUeJAkGNFQophnPxAzn06onYzhRDXd%2FGY6qWprVSdiPm5h%2BshCGpfIloJDMS1g%2B0Ko3KXaRywlGbCLhG%2BjUufRacSEtP8qcCOGwclgYPo9para6PW39h4tnC317C1sa%2B7yI5bipyBHov%2BDUBga5GmKwAsgLSmiqQ92VjSxSGGWGENln5Mkz8YOxm83J7J18ca72Z1t1bWWrdtVjKV%2FKsr8higsvg%2Bsm34EtnXiEDgPSc6kOS1usB7wBFU%2B6aJ2vuBHr54bnE%2FtshFr%2F6X4oGrBbu3PUv9YMbIjToGmSoBAb%2B3ZW5r%2FzLzZKy%2Bq%2FM3KdWKKYwLvY09GJWOYcmNaqfvgm8TbRtJVC5io56yKdwk0qWdrfdXNoXvkqj8dorYRtORVfTkwAYH6LUDOtS907Pdlummy8addkhLRrINd6mLLMNWWlb4GOqUBmFOj9tMq3TXsvQeHJ4E9IGD88VEU9hKenbupkd9UQ%2F8YM8vYFqAyXkNKkKUR9b6xoeByPk0IM%2FstvwsMpmwu%2BoGoFuzlGPc5coJqB%2B%2Fu3AuhtqOpZFUuogHlpjMNtNxsCG11QlCgGLUeDSxOQNTrLW2iLs7QFyP4qZ5b4q%2Fk0TBcMZfANnfi345IXwGH%2FxEDHFsfAYQLyzBaT2NxjFhk6vwLTnn5&X-Amz-Signature=34e8f5563cf761334a14e0f2d3457e0b5812bc7930c4e0077f6648a0cf475a54&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
