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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFFLIZ3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBeioIPr73g4di87tLYUul7Gl0s3BkbD09tynQKGiQeZAiEAwI53DEkucgAooyGWeqT%2Bdz32ED5ew1t8N%2FnZUIo9nCgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDXUpctRGz17lXbb0ircA6gcNTgqWIxS%2FJVjhIf%2B3EYGUPMRExmxYVc%2F4%2FUVaZa3bOb%2FteS30XBsNKf%2BYUYfRxnoAeZ6ozMCTxSFzOs0mcSNE%2Fnlqr3z3z9D7v3vNx7dg6sMrjBhEtfLH2nKnXXTDa58yEqq2AI44KHGL6o8kVTIP7cG%2FnW8zCekKJYasZYDbwKlzxFKsWSO1pK%2BW%2BoLwJOI9%2BPozPDHFlAc6HGW%2FExJir8IbrwLyRKTNvpczJonupbM4LAITa4qHAsnrLQK6HA%2FpSkyEQlU9mKuzKScP4Umjr4QkmBGFj8x2hr%2Fsj3wrTj9D9M34sxTmLlf27DioAXExRTCAuhhgGpCRR%2Fussn6XsBCE2M2NJFLoQ%2ByEP2M1Pp8jYMCp62TfAMRRK%2BRbkYn%2FF2MnGjmxQtrnO6%2B70986M%2BGSPM59xEplD2%2FvZEnUG3i3j059in50OsZ4HV6W5FxWm%2F4EXNiznV6EbpsdLK6kY6TONeDO18Vh55AsAzD9IMoKWxJbBKLsEG70feVbAUmXjaMgPxruN%2FjODcyTWAln21wha4lEeOJFMw4G%2F7NGDNkuFdgqSlsxQE7KhJOivTL81Ys0R9y806ULKxZkwvAHmHGsQGYnDlJ4CjM%2BVDRIHHBxH7pQPg84ijDMJX8%2BsEGOqUBKC4ZtAnFv9jdMFsKUh8bOaLQ4C8LmnMSP9%2BiUzETNVvetRoDpAuzByxaBswjUCsIM%2BkZiSQJtWiUBhpBAWtjHpxtNP9oYlOqvP%2BbjfMb0wJmBFnFdv7rJJK87HWiV67JLLg3xkDXgs5WiXR1aAhqTG0ypeoL%2FUBWe79HycwF8Sz4IyB9aYKLRO6Eu%2Fe7FnSmN%2F4ZAF6jjnPKea%2BMxAzbgJOB4QAW&X-Amz-Signature=c45224d65d6f911d22f51e4e3db54d77f62c5590d6e1b86e77542ee3503b28d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFFLIZ3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBeioIPr73g4di87tLYUul7Gl0s3BkbD09tynQKGiQeZAiEAwI53DEkucgAooyGWeqT%2Bdz32ED5ew1t8N%2FnZUIo9nCgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDXUpctRGz17lXbb0ircA6gcNTgqWIxS%2FJVjhIf%2B3EYGUPMRExmxYVc%2F4%2FUVaZa3bOb%2FteS30XBsNKf%2BYUYfRxnoAeZ6ozMCTxSFzOs0mcSNE%2Fnlqr3z3z9D7v3vNx7dg6sMrjBhEtfLH2nKnXXTDa58yEqq2AI44KHGL6o8kVTIP7cG%2FnW8zCekKJYasZYDbwKlzxFKsWSO1pK%2BW%2BoLwJOI9%2BPozPDHFlAc6HGW%2FExJir8IbrwLyRKTNvpczJonupbM4LAITa4qHAsnrLQK6HA%2FpSkyEQlU9mKuzKScP4Umjr4QkmBGFj8x2hr%2Fsj3wrTj9D9M34sxTmLlf27DioAXExRTCAuhhgGpCRR%2Fussn6XsBCE2M2NJFLoQ%2ByEP2M1Pp8jYMCp62TfAMRRK%2BRbkYn%2FF2MnGjmxQtrnO6%2B70986M%2BGSPM59xEplD2%2FvZEnUG3i3j059in50OsZ4HV6W5FxWm%2F4EXNiznV6EbpsdLK6kY6TONeDO18Vh55AsAzD9IMoKWxJbBKLsEG70feVbAUmXjaMgPxruN%2FjODcyTWAln21wha4lEeOJFMw4G%2F7NGDNkuFdgqSlsxQE7KhJOivTL81Ys0R9y806ULKxZkwvAHmHGsQGYnDlJ4CjM%2BVDRIHHBxH7pQPg84ijDMJX8%2BsEGOqUBKC4ZtAnFv9jdMFsKUh8bOaLQ4C8LmnMSP9%2BiUzETNVvetRoDpAuzByxaBswjUCsIM%2BkZiSQJtWiUBhpBAWtjHpxtNP9oYlOqvP%2BbjfMb0wJmBFnFdv7rJJK87HWiV67JLLg3xkDXgs5WiXR1aAhqTG0ypeoL%2FUBWe79HycwF8Sz4IyB9aYKLRO6Eu%2Fe7FnSmN%2F4ZAF6jjnPKea%2BMxAzbgJOB4QAW&X-Amz-Signature=219ac6e5547478b74a1c3faeed9184f82c4579efbc69e9a5fd47f4076e185749&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
