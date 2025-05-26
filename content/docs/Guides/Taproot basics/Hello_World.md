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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RCVVTA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCo747wD9gnprD%2Fk6RBX4wf8ybaFfC5FgXnE96ztfUdrgIgJW%2Bo7wSPLyHmI%2FLZk7eCEDQ0TFEpgk77afMJBWRX71gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKvyPR5d8sTQaE4IWCrcAxDz8A4iPtR4BZyEcOAWXIlCKnon%2Fv7duFe3m%2F4E4NyUO%2FvOGVbfW9tkruZwm2%2BPNookzuy63aOnxHI5ZR3zvYazhvzlJKtVewmCtZnmFt4VTqQfEmHhxV2XMHswrcPL%2FZiVupywFgAaH126EeOGaXLSnpqu2BKofmaKuego5eMc9wpmOTMGNEQrUe9K%2B26Hklq50JQ8YHelVoe%2F3Oupd1jUE3XvcDRdUbubArNIUDPlnI%2Bo3XFyPF3WdZ0rEsnZyUCMCmGNqLqs1m77wQRXU1DSKR1TBTTmSm%2F1UO%2Bh72QQhVsMM5OOEcALpDc49N4V6YpXFN8uXVZVmTgUsZJxLdkp5xjanc%2FPcEwigxCtn%2BcBXJ0rhU%2FhrLN57pwiQ%2BaZc9owc%2FAhm1diuJMsoSWvwcYsvW7Qg%2FQ7LlsWCvpMhHGrs3jjzSSfRQ3BQyQ%2B8uAqwZiKe%2FCsT%2Fba7YjHGDMqL1ODC8%2BgKOsprLFqW0pWvMvSLB%2FN4nS548RGSzBet6E51dqYjB0t6Aj%2FzbFhWJVrff5r%2B5oiKkwuy9Z1%2Fd8u%2B21JdjHDd0Z6W7baM%2FpjA63YAyB%2FV1%2BKJtqgw9gQdhtNi9Ot7CGtuiubWOxhnAhkbttxvALLktfOoM0jxHUqMOOq0cEGOqUBjNIG16egvIhTQKNQikwTU%2FFcFvkCNfa1POgjXwhwx19x9iNLiCSMPgnpMnnv3jpokKgVuGoIC6O0ET3PxxhDdyxa7MUKvYehoyyrw9ZXt3sQPaKojN8cHxnz7s9LtTmKdsvti7HB%2FPJ3NSqG7bHQ7%2BuKIu9cBBs%2F%2BxvgpFO6tMrQcf%2BSdlZ671sx3lJYXf67u2biGcW9k3yqj6I3%2BlrZ5iIUWkFS&X-Amz-Signature=9b8d50a990125963978489b5dea6954cebf58133a7ecffbd3281f7c40ff1b789&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RCVVTA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCo747wD9gnprD%2Fk6RBX4wf8ybaFfC5FgXnE96ztfUdrgIgJW%2Bo7wSPLyHmI%2FLZk7eCEDQ0TFEpgk77afMJBWRX71gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKvyPR5d8sTQaE4IWCrcAxDz8A4iPtR4BZyEcOAWXIlCKnon%2Fv7duFe3m%2F4E4NyUO%2FvOGVbfW9tkruZwm2%2BPNookzuy63aOnxHI5ZR3zvYazhvzlJKtVewmCtZnmFt4VTqQfEmHhxV2XMHswrcPL%2FZiVupywFgAaH126EeOGaXLSnpqu2BKofmaKuego5eMc9wpmOTMGNEQrUe9K%2B26Hklq50JQ8YHelVoe%2F3Oupd1jUE3XvcDRdUbubArNIUDPlnI%2Bo3XFyPF3WdZ0rEsnZyUCMCmGNqLqs1m77wQRXU1DSKR1TBTTmSm%2F1UO%2Bh72QQhVsMM5OOEcALpDc49N4V6YpXFN8uXVZVmTgUsZJxLdkp5xjanc%2FPcEwigxCtn%2BcBXJ0rhU%2FhrLN57pwiQ%2BaZc9owc%2FAhm1diuJMsoSWvwcYsvW7Qg%2FQ7LlsWCvpMhHGrs3jjzSSfRQ3BQyQ%2B8uAqwZiKe%2FCsT%2Fba7YjHGDMqL1ODC8%2BgKOsprLFqW0pWvMvSLB%2FN4nS548RGSzBet6E51dqYjB0t6Aj%2FzbFhWJVrff5r%2B5oiKkwuy9Z1%2Fd8u%2B21JdjHDd0Z6W7baM%2FpjA63YAyB%2FV1%2BKJtqgw9gQdhtNi9Ot7CGtuiubWOxhnAhkbttxvALLktfOoM0jxHUqMOOq0cEGOqUBjNIG16egvIhTQKNQikwTU%2FFcFvkCNfa1POgjXwhwx19x9iNLiCSMPgnpMnnv3jpokKgVuGoIC6O0ET3PxxhDdyxa7MUKvYehoyyrw9ZXt3sQPaKojN8cHxnz7s9LtTmKdsvti7HB%2FPJ3NSqG7bHQ7%2BuKIu9cBBs%2F%2BxvgpFO6tMrQcf%2BSdlZ671sx3lJYXf67u2biGcW9k3yqj6I3%2BlrZ5iIUWkFS&X-Amz-Signature=1af509f688478383d1a27d4f527507d172d79a41b8fef201552d23129bc6f205&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
