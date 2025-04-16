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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3DVEOC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzTxViXOijjzCwkMNl%2B6ZuCo6%2BAU7I%2BkzpQC11u16lAiB0DD%2FCrSe9yU59nB8%2BLSGkwchsdqQ3maex%2FcKWBvgzMCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMh0fIwGcHOWZkeLxEKtwDuHl1Qf8BktJ3Yhf1nmqA9b2i2bR1PJ1cl61cbMtfYtJoKT3Rm3GM3zXLwvmuQvxf0YAwVJuBDBHr474MDDIL7mGqiOQNC9%2BKybpm%2BxpYCykB2JD%2BhjHjB%2Be5VF2nm90sdFnQKW2u3v98IPe26cQCV%2BjmW8zi%2FQRMgwFYmPLrNidk7TnAmtx6qGQaIOq13Z87ADiWHCwlxfBaGCoguBWvS3eD56Va4VXWJmPAvaej1S2JTGGRl0KOv21SmMFruOtHq2piK7VXOqJgATEcvtutUxk8fw7Us3r5B6qTZb2hRvq0g7rwVASfXye3GfjNp0Y3Id%2BNm22krnHFV8Fq8Hq2C%2B8BRhApswi65F6XnddGXKwzZzxyFmiRdNHvO0uxMHzc7Zyas18DeKId1ZHyDEi0qaTVnIEF8WVbM5YlFGvzUMSPZqXOW9GTh%2BucdWWK0epj4vyJh9%2Bw%2F6LO3wvb8My3ZdBbtQHzENczetS26lGNRnSht9yfuF2%2Bo0aEWu0HxZWuzVwhoMT9WtEM78Pp2Rh%2FOLal%2BzM8NVHyXIdhzxld1OV0ca1VsucHF9DCIawmpT6vaXdJzc0%2FsSi8yxE9juGuxlF71XrpPginn7Bl4pyx5o1ZKFuSALrqNA9UMMowxKv%2BvwY6pgEE7fBMeZghh4Z1eeZg%2FxdBILAKo6aKU%2Fg7WurZIPTclI%2BvP6S9jzWyW1HpsRRtQ8%2BShE2sALQ7zMbmVIRqhkxljI8WPQ%2Fryv1UwEGy8%2B7rrTrzxutz3XsxRP2xBKjfYGTZN%2BvLMlnDkCPyHIHNSE66Wzq6DbXvccWjsAEkrXz%2BJDP1iNma22eyHLu4kQuk3oy%2BGVrPTfyAOVsepvv95LPnKPnmek3v&X-Amz-Signature=690d3757ce71b207fe94f39d2ba93a578f344c3e664edf22117a1fd34c01743b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3DVEOC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJzTxViXOijjzCwkMNl%2B6ZuCo6%2BAU7I%2BkzpQC11u16lAiB0DD%2FCrSe9yU59nB8%2BLSGkwchsdqQ3maex%2FcKWBvgzMCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMh0fIwGcHOWZkeLxEKtwDuHl1Qf8BktJ3Yhf1nmqA9b2i2bR1PJ1cl61cbMtfYtJoKT3Rm3GM3zXLwvmuQvxf0YAwVJuBDBHr474MDDIL7mGqiOQNC9%2BKybpm%2BxpYCykB2JD%2BhjHjB%2Be5VF2nm90sdFnQKW2u3v98IPe26cQCV%2BjmW8zi%2FQRMgwFYmPLrNidk7TnAmtx6qGQaIOq13Z87ADiWHCwlxfBaGCoguBWvS3eD56Va4VXWJmPAvaej1S2JTGGRl0KOv21SmMFruOtHq2piK7VXOqJgATEcvtutUxk8fw7Us3r5B6qTZb2hRvq0g7rwVASfXye3GfjNp0Y3Id%2BNm22krnHFV8Fq8Hq2C%2B8BRhApswi65F6XnddGXKwzZzxyFmiRdNHvO0uxMHzc7Zyas18DeKId1ZHyDEi0qaTVnIEF8WVbM5YlFGvzUMSPZqXOW9GTh%2BucdWWK0epj4vyJh9%2Bw%2F6LO3wvb8My3ZdBbtQHzENczetS26lGNRnSht9yfuF2%2Bo0aEWu0HxZWuzVwhoMT9WtEM78Pp2Rh%2FOLal%2BzM8NVHyXIdhzxld1OV0ca1VsucHF9DCIawmpT6vaXdJzc0%2FsSi8yxE9juGuxlF71XrpPginn7Bl4pyx5o1ZKFuSALrqNA9UMMowxKv%2BvwY6pgEE7fBMeZghh4Z1eeZg%2FxdBILAKo6aKU%2Fg7WurZIPTclI%2BvP6S9jzWyW1HpsRRtQ8%2BShE2sALQ7zMbmVIRqhkxljI8WPQ%2Fryv1UwEGy8%2B7rrTrzxutz3XsxRP2xBKjfYGTZN%2BvLMlnDkCPyHIHNSE66Wzq6DbXvccWjsAEkrXz%2BJDP1iNma22eyHLu4kQuk3oy%2BGVrPTfyAOVsepvv95LPnKPnmek3v&X-Amz-Signature=fb868e17839f2201217786701ff11a838724243acc03190ddb86cc279b1396dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
