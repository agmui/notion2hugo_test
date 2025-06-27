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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUCI4TJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHvmCgURnxPcfxRjVBKmiPV8HSkLm7YcjA8jS2kJhPOrAiEA8w1%2FWrP1xyG08DLw7DkSKYG8IwWpaRBRs8T%2Fu8B%2Bm1Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNskNrYm50Ksq7nj%2FyrcA2J%2BG5mKHA60py0U4178mKUhV1bB%2FtGvfHaU7LEk7HcT5pX2oPrTBTCEnDytAl2byn18W2G9WKMGPCHIVVkGhWB38NfxSXocQwXdYpQY3sj8VUvFTq1BMmSIYsOyTCawBTsj2y0%2BUm%2FyMz9YyxjZqwqAcgTyBCvoY8OC0egxe3BqKPWQzbEMPY9CoXiCTYQngOMhLJ%2FTqH767%2FjJUOoZ8CyC16JLWm1AWd9KI0Cud7eHLRFvPTwd%2FxZeZnjTPFZ3%2Fph6cfhNZq9e5CKPKRnWpYDYg%2ByVnm7hGi%2F6A1w0Pt%2FilABZQNP%2FrzJzxoCFTuWbfWrG%2B8bKhPkYaWlv8fAHI5ugCMCwINhCvJnvV2OfXoQinjfuRGawjwKGiyc9UM4CQ5FTXuacIMV%2Bd0Yd9pUXTS8ecZqA6%2BM%2FoaYx%2FNjTDlp64xZmhUOi8VNybT5mH0xyGG0If7XRexqB4pb1nkjCKmbxaB%2FS7eGyXSOQC0DwqiiaziFlKwAnDHCaDZaB9XiCwhyO%2Fwqd7O49NuoOkwo5hDVSlm2oEGvjmRGd3I%2B1OtlrZheys1Mok5FXCeznlcFKkBqi0uQ7rHah6RgEtMexsrhBUqwcpbptYjpusHm2yesRwY5Uh2YbjTieJoePMPbL98IGOqUBUyJx%2BJCpb5I104ll7p%2FWM32f2HtS9aVuqTDmsYoFOEKYbIfW%2B2%2B1pvAoh9LNHksCSK6YoIqxdOsuUtbCeodjVcwQyATXeMIU9Yymt2OKaXJKTff9OSldPZimM34AbG3vrFetAF70tT20WTa5AJbJCniuf9sCpCBymyjmMkiJ9R1J254myShn%2FFKkABgjQQ6FoCTNPSWqiYLO%2FG%2FQattm9m07acTb&X-Amz-Signature=17a87609946ceeb0cf32540ccf68d1854e271e31a43e3928930c3665df5363f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUCI4TJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHvmCgURnxPcfxRjVBKmiPV8HSkLm7YcjA8jS2kJhPOrAiEA8w1%2FWrP1xyG08DLw7DkSKYG8IwWpaRBRs8T%2Fu8B%2Bm1Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNskNrYm50Ksq7nj%2FyrcA2J%2BG5mKHA60py0U4178mKUhV1bB%2FtGvfHaU7LEk7HcT5pX2oPrTBTCEnDytAl2byn18W2G9WKMGPCHIVVkGhWB38NfxSXocQwXdYpQY3sj8VUvFTq1BMmSIYsOyTCawBTsj2y0%2BUm%2FyMz9YyxjZqwqAcgTyBCvoY8OC0egxe3BqKPWQzbEMPY9CoXiCTYQngOMhLJ%2FTqH767%2FjJUOoZ8CyC16JLWm1AWd9KI0Cud7eHLRFvPTwd%2FxZeZnjTPFZ3%2Fph6cfhNZq9e5CKPKRnWpYDYg%2ByVnm7hGi%2F6A1w0Pt%2FilABZQNP%2FrzJzxoCFTuWbfWrG%2B8bKhPkYaWlv8fAHI5ugCMCwINhCvJnvV2OfXoQinjfuRGawjwKGiyc9UM4CQ5FTXuacIMV%2Bd0Yd9pUXTS8ecZqA6%2BM%2FoaYx%2FNjTDlp64xZmhUOi8VNybT5mH0xyGG0If7XRexqB4pb1nkjCKmbxaB%2FS7eGyXSOQC0DwqiiaziFlKwAnDHCaDZaB9XiCwhyO%2Fwqd7O49NuoOkwo5hDVSlm2oEGvjmRGd3I%2B1OtlrZheys1Mok5FXCeznlcFKkBqi0uQ7rHah6RgEtMexsrhBUqwcpbptYjpusHm2yesRwY5Uh2YbjTieJoePMPbL98IGOqUBUyJx%2BJCpb5I104ll7p%2FWM32f2HtS9aVuqTDmsYoFOEKYbIfW%2B2%2B1pvAoh9LNHksCSK6YoIqxdOsuUtbCeodjVcwQyATXeMIU9Yymt2OKaXJKTff9OSldPZimM34AbG3vrFetAF70tT20WTa5AJbJCniuf9sCpCBymyjmMkiJ9R1J254myShn%2FFKkABgjQQ6FoCTNPSWqiYLO%2FG%2FQattm9m07acTb&X-Amz-Signature=61f392b73e6873c736555a4b69ba1005cd5fc0406a2ebca95972815585325536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
