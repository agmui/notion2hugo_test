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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HRBOZ62%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC6jJB23%2BJcKkiOlVrwvXarrs7YNDjHufZclNTOJPEKsQIgRlBrD6PDTIeY7rxUWAyH6F9Xdz7q6p9ZDRWB5dO9M1Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNH4bipNQ9CHnxUwhyrcA9Vql4Lhsz7X5B08VRhw9GWymkfkmTsWOnr96BJcon761YOzeZ9NTtLdMdRYTRvBF8C3FSBsa1WyiHNCxIEK1Fto4yvHM8XW%2B3mBgtkPSwFH8SiJeiYsFcylrqOPVQKYYkPKgyS457y8fROIs9whWfG9Vt4nb2m59evVM8zaPrC3Ox%2FvC55POQSOcdXAYQ%2Fycsz4Zsc0RxFstt2mUFzZKvHZWCMEzl0lU6sQbEHZrKLDBOtyXK01Y9oFcyrWRls7kDpcuEtNdg05o3oPb5oAshtJwu4ptl0SCz7cN7LUMiFKVQlA%2FLf4hiGIn0Zvyll2KcFA7%2Fu%2BU%2BIuUPVHrqKSTRKtNFgH2Seny3BClpmijBOzjJCvnGSxN763R2maeAlq3lpE3a6uJtQq%2BwUC95ZLIEMKmRjaQpTmOb4gwr9PcaPLJoQo2ndenvQccaeunPnhNu11y%2BmIEFiUJTcthaHalTZKnVHXuJER2XohlzLeySbeJD4OHoChgINZDM7hxdP5waRozBn6Dn3xTwewwLFE1NVaMDwfGac946LQ%2FKd3Z%2BFGWbTo1lKLatwRfwYNFfiBDKo4%2FiX0Db96s4clfSBvo4VBc4bg5y%2FCOWKznlilQXcLLUF2WkZxeXDt9QD3MMHQ%2F70GOqUBZfhtWGKvgkfYCPby6GEnHsoDYosATdZbT2TKJThR13Wsp%2B8kRVfaAY9FQzP5ggSxAgJibPjS2SzK1Tcqxg3JL%2BE0%2FK3SEkdgLC8sioRELWnlp9vfKWpYtRFgfqNzDSaXyp%2B06fO7bPkLyHCUA8tIUJHEazWqzo7LeX3eohykGsIxfPAFaOITN5jq%2F%2FIqZ2dUlrJm9DfVfQ3S31vkv5oUGYNRAXcD&X-Amz-Signature=45971958e6d1a8827392f42963b029982dbe31a542e9b465cc9e4be69f88aafa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HRBOZ62%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC6jJB23%2BJcKkiOlVrwvXarrs7YNDjHufZclNTOJPEKsQIgRlBrD6PDTIeY7rxUWAyH6F9Xdz7q6p9ZDRWB5dO9M1Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNH4bipNQ9CHnxUwhyrcA9Vql4Lhsz7X5B08VRhw9GWymkfkmTsWOnr96BJcon761YOzeZ9NTtLdMdRYTRvBF8C3FSBsa1WyiHNCxIEK1Fto4yvHM8XW%2B3mBgtkPSwFH8SiJeiYsFcylrqOPVQKYYkPKgyS457y8fROIs9whWfG9Vt4nb2m59evVM8zaPrC3Ox%2FvC55POQSOcdXAYQ%2Fycsz4Zsc0RxFstt2mUFzZKvHZWCMEzl0lU6sQbEHZrKLDBOtyXK01Y9oFcyrWRls7kDpcuEtNdg05o3oPb5oAshtJwu4ptl0SCz7cN7LUMiFKVQlA%2FLf4hiGIn0Zvyll2KcFA7%2Fu%2BU%2BIuUPVHrqKSTRKtNFgH2Seny3BClpmijBOzjJCvnGSxN763R2maeAlq3lpE3a6uJtQq%2BwUC95ZLIEMKmRjaQpTmOb4gwr9PcaPLJoQo2ndenvQccaeunPnhNu11y%2BmIEFiUJTcthaHalTZKnVHXuJER2XohlzLeySbeJD4OHoChgINZDM7hxdP5waRozBn6Dn3xTwewwLFE1NVaMDwfGac946LQ%2FKd3Z%2BFGWbTo1lKLatwRfwYNFfiBDKo4%2FiX0Db96s4clfSBvo4VBc4bg5y%2FCOWKznlilQXcLLUF2WkZxeXDt9QD3MMHQ%2F70GOqUBZfhtWGKvgkfYCPby6GEnHsoDYosATdZbT2TKJThR13Wsp%2B8kRVfaAY9FQzP5ggSxAgJibPjS2SzK1Tcqxg3JL%2BE0%2FK3SEkdgLC8sioRELWnlp9vfKWpYtRFgfqNzDSaXyp%2B06fO7bPkLyHCUA8tIUJHEazWqzo7LeX3eohykGsIxfPAFaOITN5jq%2F%2FIqZ2dUlrJm9DfVfQ3S31vkv5oUGYNRAXcD&X-Amz-Signature=2325e8abc057389779053d7b2b76f4a28a41afb54b667be2eecff7cef895a186&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
