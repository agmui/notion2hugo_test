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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466272EPGMG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqWtHCDaH4seYrk29aJj0KjftKrm5BDp3LZUZ4y1Ac0AiBBTig4bopMPz%2FgZf6KLkXnJ%2BNXMg4W3xllCGmbiN%2BUUSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWkBGcW%2BzRhxnsOvKtwDJOAN2gZ8tKnEiWAbdf2FCuyU8sFNzqKR9xPw9ItWAaVR4m0hxjp7MhbgmZhkc23bSY0l1lbKsahbhOkVVzCrbqCjRNZomc0QkajyFSBl4OVuY29CK87vIAOoFkfRV6Zn19oeEw2Cxaec8OH9Y8mZHXAIUtMGAku%2Fgxqvwb9qIK0d0UjlJLov4UJf6HIXT46D9WYYJ12s8OvlLoqTXTfDfW6hK6BUQ1i4%2Fy%2FBN8fwHPO09Od766%2F%2F4NjtoXjgiHTGTP9AONEzcX%2B8CjLsPp7UespxUr9WdmT1SuUllTAYoiBrNc61qhJfo1EsgIIh1Ay1D%2FVjoAS1ooIEuSnHLPN8w0n78x2%2F5UfZNjX1YKOOZYtQMKxGcGlZoqNTLqYEYyNyvAr6WyKtFlzyZDQIInXNanWstsBsjpNpiwTp58tovLk59DLz6W8mWINh943hYOA%2BMdx9TfhkTXlb3arLyE5BSdeGIzcCQEmUwlvv5NfTM%2BAwRVJ0F3UsOz4cM3FgMBGAyeY4BUdhp%2BVzXr54AGmUQ6YrTcgfvjb61IxGvR%2FRUR%2B5vso0bKMWfozVzi6LLSqYdbZK6%2FXTRlp1UEqwZNFJFlHKsNK5bNPJX2XjYctoG%2FiIXm%2Bk%2BfDc%2BF5DgfUw4P6FvwY6pgFVIZ3SKn%2FgvpRHIaP7wG0%2Blu7zyaQEGsgIalIAH1LV5%2F%2FN2qJc%2F2vJCnb2LmWn24Uw%2FxabyU7pstvmdD4Zd9A1%2Fkkk%2Bm%2BS3u15eUr57Gb%2B%2Bq%2BKQ1jCAOQ9eWzHZ1LG9XYl%2BEz7heK0%2BHuFQmE5IIjES5g4ttkRX1k9Uj5%2BcgX2avU8dFMITnSJUq0JA5g80x%2Fhh2NFXgjqwBgnSR7H2CF5PcxTv5CN&X-Amz-Signature=9f48e51b79db20a2b2f7f687c0e7eb09031ef26f1461093f063b0779913ffe36&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466272EPGMG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqWtHCDaH4seYrk29aJj0KjftKrm5BDp3LZUZ4y1Ac0AiBBTig4bopMPz%2FgZf6KLkXnJ%2BNXMg4W3xllCGmbiN%2BUUSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWkBGcW%2BzRhxnsOvKtwDJOAN2gZ8tKnEiWAbdf2FCuyU8sFNzqKR9xPw9ItWAaVR4m0hxjp7MhbgmZhkc23bSY0l1lbKsahbhOkVVzCrbqCjRNZomc0QkajyFSBl4OVuY29CK87vIAOoFkfRV6Zn19oeEw2Cxaec8OH9Y8mZHXAIUtMGAku%2Fgxqvwb9qIK0d0UjlJLov4UJf6HIXT46D9WYYJ12s8OvlLoqTXTfDfW6hK6BUQ1i4%2Fy%2FBN8fwHPO09Od766%2F%2F4NjtoXjgiHTGTP9AONEzcX%2B8CjLsPp7UespxUr9WdmT1SuUllTAYoiBrNc61qhJfo1EsgIIh1Ay1D%2FVjoAS1ooIEuSnHLPN8w0n78x2%2F5UfZNjX1YKOOZYtQMKxGcGlZoqNTLqYEYyNyvAr6WyKtFlzyZDQIInXNanWstsBsjpNpiwTp58tovLk59DLz6W8mWINh943hYOA%2BMdx9TfhkTXlb3arLyE5BSdeGIzcCQEmUwlvv5NfTM%2BAwRVJ0F3UsOz4cM3FgMBGAyeY4BUdhp%2BVzXr54AGmUQ6YrTcgfvjb61IxGvR%2FRUR%2B5vso0bKMWfozVzi6LLSqYdbZK6%2FXTRlp1UEqwZNFJFlHKsNK5bNPJX2XjYctoG%2FiIXm%2Bk%2BfDc%2BF5DgfUw4P6FvwY6pgFVIZ3SKn%2FgvpRHIaP7wG0%2Blu7zyaQEGsgIalIAH1LV5%2F%2FN2qJc%2F2vJCnb2LmWn24Uw%2FxabyU7pstvmdD4Zd9A1%2Fkkk%2Bm%2BS3u15eUr57Gb%2B%2Bq%2BKQ1jCAOQ9eWzHZ1LG9XYl%2BEz7heK0%2BHuFQmE5IIjES5g4ttkRX1k9Uj5%2BcgX2avU8dFMITnSJUq0JA5g80x%2Fhh2NFXgjqwBgnSR7H2CF5PcxTv5CN&X-Amz-Signature=11e2b1b3eee5fbc21ff419b83fdad2e0f92c1db2f54c5431a29a2263d6a22acd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
