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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTOYUVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoXZd%2B8gYWwI3pAUlaEvA9AlCSsxduhYKPDAGk14nn1AiEAyiDcBlVpIxLuEHxNVXHYo6B3DMEDC0qxE8MUPLXAqG8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbI3ekX3pm3UIsNSircA0dj6v5UytUR%2FGSD1TbCqOD9lyfLNF6FbPAo%2F47Gdgs9stXeDWZ%2F8W8DVXjoBuRq%2FJLsGfQesc11LgSTqrm2F0joiMoIjkJKbr5Ntouf6cXa%2BXZ5NvVzGcAjdTVRtkZ7Et69bHal1HoFnblzIC0OEp%2FRM%2FQ1U5N0xDLX8x50zalrTkTLjNcoeHRYN%2BoPjWcmVBot4uCi%2F1uXsHIehSwkeXbI6PvY11ObwRVx3ebkq2sxiCfKBkUaVJiubPkrkBKNn3RUja2U1N7JOBgsDXrxJm47QEwKllJ5nm1%2BRD%2B1TIzbSNm1OGIRJR3yITa4Oprx4aCPw3JHKoaPtcqBY6sGiP3oYY4Q%2FWRb15DfhctsR0tl37zRL%2Bb0WkHVM%2FSzNuLc9LneIs546rSe8JACchiR1GaPQcgBveX%2BPfdZWVn5WFWeu4vosVaDry8NyAUAc6OOXpkh6BeQmu2RnK5PSTK%2BRkF2gtnqtuS3IRMBom8B0YGxBb7PaD6HvXnoMV%2B6H2ckrq0Tpp2eHsXPg9noXY8LBnbeY%2FcK34fr8Mus5GsneV9CLFiHdew6LmeepcMP7IX%2FokcWPokpxloE5Q7N3LM7fA%2BbFdeFo%2BQe5p0WKEX77iTfEIfrJO4LUn8kpqGAMJ%2BAtcMGOqUBN4sFcxkav72XQ8sU8O2T2pAqjU%2BeMgv%2Fe9s3%2BQ%2FXzomgMcimVIcO7hvb16lINwXbNyhTbg7uTpWqDSC1XRivnelXZ9qn1zaKM%2FGVCLZTVYj%2BSVA%2FkR6G9r3PN0CKqx6HD3zZSs%2FuUiZZHKL%2B%2FKEjqQRpzbMUK7lPdokmRE4ZaOAbzzR5t1KcnjlLibna1swJBeLPd7XJA%2BednOlH3wKk5qr5j1ar&X-Amz-Signature=4e3edef52699685b7e1b73f806d77878a1dce5315233726f7feae51c15891f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTOYUVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoXZd%2B8gYWwI3pAUlaEvA9AlCSsxduhYKPDAGk14nn1AiEAyiDcBlVpIxLuEHxNVXHYo6B3DMEDC0qxE8MUPLXAqG8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbI3ekX3pm3UIsNSircA0dj6v5UytUR%2FGSD1TbCqOD9lyfLNF6FbPAo%2F47Gdgs9stXeDWZ%2F8W8DVXjoBuRq%2FJLsGfQesc11LgSTqrm2F0joiMoIjkJKbr5Ntouf6cXa%2BXZ5NvVzGcAjdTVRtkZ7Et69bHal1HoFnblzIC0OEp%2FRM%2FQ1U5N0xDLX8x50zalrTkTLjNcoeHRYN%2BoPjWcmVBot4uCi%2F1uXsHIehSwkeXbI6PvY11ObwRVx3ebkq2sxiCfKBkUaVJiubPkrkBKNn3RUja2U1N7JOBgsDXrxJm47QEwKllJ5nm1%2BRD%2B1TIzbSNm1OGIRJR3yITa4Oprx4aCPw3JHKoaPtcqBY6sGiP3oYY4Q%2FWRb15DfhctsR0tl37zRL%2Bb0WkHVM%2FSzNuLc9LneIs546rSe8JACchiR1GaPQcgBveX%2BPfdZWVn5WFWeu4vosVaDry8NyAUAc6OOXpkh6BeQmu2RnK5PSTK%2BRkF2gtnqtuS3IRMBom8B0YGxBb7PaD6HvXnoMV%2B6H2ckrq0Tpp2eHsXPg9noXY8LBnbeY%2FcK34fr8Mus5GsneV9CLFiHdew6LmeepcMP7IX%2FokcWPokpxloE5Q7N3LM7fA%2BbFdeFo%2BQe5p0WKEX77iTfEIfrJO4LUn8kpqGAMJ%2BAtcMGOqUBN4sFcxkav72XQ8sU8O2T2pAqjU%2BeMgv%2Fe9s3%2BQ%2FXzomgMcimVIcO7hvb16lINwXbNyhTbg7uTpWqDSC1XRivnelXZ9qn1zaKM%2FGVCLZTVYj%2BSVA%2FkR6G9r3PN0CKqx6HD3zZSs%2FuUiZZHKL%2B%2FKEjqQRpzbMUK7lPdokmRE4ZaOAbzzR5t1KcnjlLibna1swJBeLPd7XJA%2BednOlH3wKk5qr5j1ar&X-Amz-Signature=696e7630f97134667125a78f40380cdf54e63ad2883191fb48575af612366900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
