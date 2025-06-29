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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLY4KE7P%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM4IH95RRkNARshY%2B9Ja24pN8pNdoMMFpPQet2Dw%2BDfAiB%2FOMSzrgC4dyOsTwJJsqpIAZJ1fObtrt0VISPn9OqTCCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMa93rzpi0qIJ%2BKjKtwDlKzvZa4gKY8Y1GwOUy2uaFNrwRLkwpNIRUyTz5ZkWJSlBCYb4MBj%2Fe3%2FAG4lzZTIAWlsnHmLrutAMbWp1BMiOMm%2FgUfvyB1ULXIA8AngsTk%2B4aZPsoMWuOTWLw9%2BIYb8ymlAnqLWlUB2hfjTMcbn7PKjQJ07u1BkcuOBfCc5CS9Sc0SCV3FsTyhJM2FAg%2FrSEgKBIqlzc9c26UEEakxk1qoznz77dKlSb8IAR2fwUwIE%2F0bu3LniZhHrOkNLkuey9TFW2mhJ3vD3CFUspOzROtme1HcsRcaT2CqLedae%2BJ5FHf3kWcGBCjSASIfdsVUewVT%2B0nXVZZ1P7NWia3I64HP4ekPkZgbrrlcMuMBdj3bRqhO5sZ%2FKgg32yKPdFxVxufg5kxrUPNZ1ijRgVN%2BYNa80JF23c2WZte9G1wBFJm7A9yTssfcYe8fKquN6IzxluDPtkon6%2B8WHEwdvHEuShayE9pWjgjFumSjiyIdgEVqDSTxnDSgwknIv0xpYjW1%2BG798GRn1k%2Foa3VN06Lm%2BByW4tU3gWRBwrin5I8u0we%2FMqEF5MNTctKC8C5HA1cF2zpmvgRVm9Yeby6cQv7zU3%2B6XxSw7LcAnGw5FRaO%2F%2FluYLXLLkikHWznsSisw2c2GwwY6pgF2e5CMjNWxnNWAsUn%2FzErpYKOYznmNlJtt3mmOH%2B4QBOHcewoRt%2FruupMxgD%2Fkq7FU56E73Yo5UczT%2BITSYPEIp1hsOqyTWHNZF6ASrXLkzAe9qOR4AVkrvRi0a0g4%2BCZU8N4wx2n%2FybC6kfnFVZevFccBbqvY8EErMcVVeIfN1gfQH9yeX9MmtcilnQpED0aIb6wUiMWpUEkaQTqqCdH5vYWDpYyK&X-Amz-Signature=8fc2908222906933b2262f665be957cfda1c7a5e572fb2a9a2a59f7541754e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLY4KE7P%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM4IH95RRkNARshY%2B9Ja24pN8pNdoMMFpPQet2Dw%2BDfAiB%2FOMSzrgC4dyOsTwJJsqpIAZJ1fObtrt0VISPn9OqTCCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMa93rzpi0qIJ%2BKjKtwDlKzvZa4gKY8Y1GwOUy2uaFNrwRLkwpNIRUyTz5ZkWJSlBCYb4MBj%2Fe3%2FAG4lzZTIAWlsnHmLrutAMbWp1BMiOMm%2FgUfvyB1ULXIA8AngsTk%2B4aZPsoMWuOTWLw9%2BIYb8ymlAnqLWlUB2hfjTMcbn7PKjQJ07u1BkcuOBfCc5CS9Sc0SCV3FsTyhJM2FAg%2FrSEgKBIqlzc9c26UEEakxk1qoznz77dKlSb8IAR2fwUwIE%2F0bu3LniZhHrOkNLkuey9TFW2mhJ3vD3CFUspOzROtme1HcsRcaT2CqLedae%2BJ5FHf3kWcGBCjSASIfdsVUewVT%2B0nXVZZ1P7NWia3I64HP4ekPkZgbrrlcMuMBdj3bRqhO5sZ%2FKgg32yKPdFxVxufg5kxrUPNZ1ijRgVN%2BYNa80JF23c2WZte9G1wBFJm7A9yTssfcYe8fKquN6IzxluDPtkon6%2B8WHEwdvHEuShayE9pWjgjFumSjiyIdgEVqDSTxnDSgwknIv0xpYjW1%2BG798GRn1k%2Foa3VN06Lm%2BByW4tU3gWRBwrin5I8u0we%2FMqEF5MNTctKC8C5HA1cF2zpmvgRVm9Yeby6cQv7zU3%2B6XxSw7LcAnGw5FRaO%2F%2FluYLXLLkikHWznsSisw2c2GwwY6pgF2e5CMjNWxnNWAsUn%2FzErpYKOYznmNlJtt3mmOH%2B4QBOHcewoRt%2FruupMxgD%2Fkq7FU56E73Yo5UczT%2BITSYPEIp1hsOqyTWHNZF6ASrXLkzAe9qOR4AVkrvRi0a0g4%2BCZU8N4wx2n%2FybC6kfnFVZevFccBbqvY8EErMcVVeIfN1gfQH9yeX9MmtcilnQpED0aIb6wUiMWpUEkaQTqqCdH5vYWDpYyK&X-Amz-Signature=0755aa6aa41221e8e7871a2021e52212088180292887350dd1c6742bd9954a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
