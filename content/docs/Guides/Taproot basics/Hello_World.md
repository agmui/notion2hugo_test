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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA6ECW2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUzHC0kR2pkEyyEJxsS0f1PUwm2z37fYpsEn7TLP%2FTdAIgf%2Bd4PM2IFkO%2Fir%2Bh%2ByL8FoSuJR4XTNDFeXEz02kXGzkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtBYewlo379ORkdeCrcAzFIUq0hgK84PrX2Ynj6XJC0AxQb5dtVu9tcuTVj4lu4MBjPHXddt5wIWzJUjdSrq%2Fg4KaE%2FJuHAErlAQ3LoIOS02H3HLVL8WYuPyvVeKihTXdQEPdvEm6nCHdI%2B1bhN6syXxyxj1ckaDOcq5XYcGrqbIYw8i%2FiqAO9AeTMohYGDbb9Yw%2BKQW%2BAahARVRkNraC921gWGF1P6AN9J3mne6Z9GiO6687bnn6ZYkIRH%2FPaA4EVIJyLIXp%2Fa75vYvaH74S%2FPEAKq1UU%2B%2BJjfotmlbijhyJa%2Bu%2F2ma8jTnziQh8PvDJPNySeyAyTj0AOTDohunzP7%2ByazgA23zXVDFiaQMRuBK0geHy%2FF232VZU0ez22kcnUW%2BnvBIDrRZZlemj5a2YH6fcQD0wCWeJg1EIfYbNRwW7MDkpgL2OKhVLe0AW1CX%2BCQZ5wwVXqpMFQuqP5v9C6%2FmqSWZP%2BbNTFsJG%2BWpO6xOcz2RXDMURn986%2Bp0T0UctR9oB2zAk4E2nd4Xavgsj2PDracnICwmXnl%2FRY%2BxOjVOSpfr6nAP1ns%2FCRYdtaLmH2kM01hZMhIRlbtajM5AGhPjyWQPK%2Bwyg7CZEh4%2B4DM9Xo7j0mhymXwzMdW9VpMB8Jx9pVagqx39u8jMOCFlsIGOqUBU44YBb9SO5%2FTc84sTwgJRBb1kMX0PwhRcVVYq3%2FGdLoIg1J8GYoXIrG8ZSgIK8pLjYCPy%2FsZTEAteE8Dqq1IaZh9vifFmgPYDhJQ9waqzybLeGXI18udrNCD9KYQMHAIfB41tzjiJYK555pbgpL5ycsRD6p5flXwn4bWxW04apCxzgOK5RSTPgwxCFhO50q1qEW0hcixa5H%2Bhltao3dn4xqpBGBe&X-Amz-Signature=07752b92a28000218a2f20652dada85cd94256cd0940f58c5e9111feb326cf68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA6ECW2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUzHC0kR2pkEyyEJxsS0f1PUwm2z37fYpsEn7TLP%2FTdAIgf%2Bd4PM2IFkO%2Fir%2Bh%2ByL8FoSuJR4XTNDFeXEz02kXGzkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtBYewlo379ORkdeCrcAzFIUq0hgK84PrX2Ynj6XJC0AxQb5dtVu9tcuTVj4lu4MBjPHXddt5wIWzJUjdSrq%2Fg4KaE%2FJuHAErlAQ3LoIOS02H3HLVL8WYuPyvVeKihTXdQEPdvEm6nCHdI%2B1bhN6syXxyxj1ckaDOcq5XYcGrqbIYw8i%2FiqAO9AeTMohYGDbb9Yw%2BKQW%2BAahARVRkNraC921gWGF1P6AN9J3mne6Z9GiO6687bnn6ZYkIRH%2FPaA4EVIJyLIXp%2Fa75vYvaH74S%2FPEAKq1UU%2B%2BJjfotmlbijhyJa%2Bu%2F2ma8jTnziQh8PvDJPNySeyAyTj0AOTDohunzP7%2ByazgA23zXVDFiaQMRuBK0geHy%2FF232VZU0ez22kcnUW%2BnvBIDrRZZlemj5a2YH6fcQD0wCWeJg1EIfYbNRwW7MDkpgL2OKhVLe0AW1CX%2BCQZ5wwVXqpMFQuqP5v9C6%2FmqSWZP%2BbNTFsJG%2BWpO6xOcz2RXDMURn986%2Bp0T0UctR9oB2zAk4E2nd4Xavgsj2PDracnICwmXnl%2FRY%2BxOjVOSpfr6nAP1ns%2FCRYdtaLmH2kM01hZMhIRlbtajM5AGhPjyWQPK%2Bwyg7CZEh4%2B4DM9Xo7j0mhymXwzMdW9VpMB8Jx9pVagqx39u8jMOCFlsIGOqUBU44YBb9SO5%2FTc84sTwgJRBb1kMX0PwhRcVVYq3%2FGdLoIg1J8GYoXIrG8ZSgIK8pLjYCPy%2FsZTEAteE8Dqq1IaZh9vifFmgPYDhJQ9waqzybLeGXI18udrNCD9KYQMHAIfB41tzjiJYK555pbgpL5ycsRD6p5flXwn4bWxW04apCxzgOK5RSTPgwxCFhO50q1qEW0hcixa5H%2Bhltao3dn4xqpBGBe&X-Amz-Signature=06930856de0f97ebf5be582f67ac90392b410255787d4c6923ea7d179e592c38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
