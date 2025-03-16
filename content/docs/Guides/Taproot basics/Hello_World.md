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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YEBYV6M%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ02EcDJ3x39J1lyyQlrvCHZDwU7KoDAljTSid%2Fm1jXQIgTbQp5P8jYrI8kZMlA3bNseIOWZXguEAuSaNww0t2oTsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKqKI5T4F4qTTeUx6SrcA6hdeF%2F%2F8FIkRwmYmcz9jZ7B22PL7s5mZcp%2BkAEAZqveAfc6MFOlHROfGOmUK2Nori1b5MFDioL%2FLdNM697PRAFi6YEGkuWt%2BbAZi5qKKHjLKNbQyLRL9eb7qhk6%2FnP%2FDB36%2FQmypkZ4B6EV0SnoHcXau71oYCFIJeNjZwVKpS784c3qKBG%2BgFnEj5vQ4onTEhSr5GisH4638nEhK3mFiIbWpw6KGABeSGnN0bhFY4bpHT8VsJXunn9uzrGPV%2FTEG7LNadhtiUsHOmtZ4JYe3ciV7mAXSVFZoy40Vs%2FKWs17bX8sl4ayLvmMytiHoyrg3QP606JLT%2Fm7PNfmFViJaITrOeo%2Fgjw3C%2FPbt8fAFqsmqb8Gq0dhAVX1PwTcG2sOKCtE%2BueRWW%2BZuo50vQMJLeuJNTw0AtuqwVzKuilAsGmpx72qThRKvTeFBgXag6WX6S1aBP35ZTxwRcUm%2B9m9gndsJ5r%2FHn11weQSTLT5%2F5jcrZyAaQkycDQiGHYB1%2Fbg4MQdLh6uJ3DqjQ%2BPx6PUUGaVkEYRJ%2FlFnAqcsWk%2BJ%2BWlFwwpqPB8TFVmokEcSjQzcNJZsbcsF9m2%2FzlfhuqMWqj3mdRvL2J0tG8Sn%2Fgz37dlTYTJqxvQ7GYmgONmMMbe274GOqUBVlZ%2BqutIZ%2FpN49Cy9xcHvpV8fKguvNkzwSA0xHyauyG136V1D5XHsbyOicxSIBpmbriKgliTC%2Fu02nyhl7e3AvWGiqr3HJvlS8429XcmDpDtG5yXoJQTHKuPDvyn9BmN2rbSttTRECcd9EPVKhb3VBY%2FpJ1evwiMxGJimEoxKlU%2BW1ifCf9zyAnyY8stpmgvFnr4dO2tl7TxvY63EVPk2ePFIWIJ&X-Amz-Signature=3f8eaf18b616eb3298b344dd588ac2e4554a1d5a5c78a94b6e946f1f6c91c973&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YEBYV6M%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ02EcDJ3x39J1lyyQlrvCHZDwU7KoDAljTSid%2Fm1jXQIgTbQp5P8jYrI8kZMlA3bNseIOWZXguEAuSaNww0t2oTsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKqKI5T4F4qTTeUx6SrcA6hdeF%2F%2F8FIkRwmYmcz9jZ7B22PL7s5mZcp%2BkAEAZqveAfc6MFOlHROfGOmUK2Nori1b5MFDioL%2FLdNM697PRAFi6YEGkuWt%2BbAZi5qKKHjLKNbQyLRL9eb7qhk6%2FnP%2FDB36%2FQmypkZ4B6EV0SnoHcXau71oYCFIJeNjZwVKpS784c3qKBG%2BgFnEj5vQ4onTEhSr5GisH4638nEhK3mFiIbWpw6KGABeSGnN0bhFY4bpHT8VsJXunn9uzrGPV%2FTEG7LNadhtiUsHOmtZ4JYe3ciV7mAXSVFZoy40Vs%2FKWs17bX8sl4ayLvmMytiHoyrg3QP606JLT%2Fm7PNfmFViJaITrOeo%2Fgjw3C%2FPbt8fAFqsmqb8Gq0dhAVX1PwTcG2sOKCtE%2BueRWW%2BZuo50vQMJLeuJNTw0AtuqwVzKuilAsGmpx72qThRKvTeFBgXag6WX6S1aBP35ZTxwRcUm%2B9m9gndsJ5r%2FHn11weQSTLT5%2F5jcrZyAaQkycDQiGHYB1%2Fbg4MQdLh6uJ3DqjQ%2BPx6PUUGaVkEYRJ%2FlFnAqcsWk%2BJ%2BWlFwwpqPB8TFVmokEcSjQzcNJZsbcsF9m2%2FzlfhuqMWqj3mdRvL2J0tG8Sn%2Fgz37dlTYTJqxvQ7GYmgONmMMbe274GOqUBVlZ%2BqutIZ%2FpN49Cy9xcHvpV8fKguvNkzwSA0xHyauyG136V1D5XHsbyOicxSIBpmbriKgliTC%2Fu02nyhl7e3AvWGiqr3HJvlS8429XcmDpDtG5yXoJQTHKuPDvyn9BmN2rbSttTRECcd9EPVKhb3VBY%2FpJ1evwiMxGJimEoxKlU%2BW1ifCf9zyAnyY8stpmgvFnr4dO2tl7TxvY63EVPk2ePFIWIJ&X-Amz-Signature=c514a41883a7d0a944db878663f94c7ab173cd57491a3d9062dca48de7d2f005&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
