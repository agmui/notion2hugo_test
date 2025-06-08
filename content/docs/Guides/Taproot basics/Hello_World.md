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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYZRPL3G%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0K4ytiIWWO07IBWkUa6R10rGYZTBaheOrc2cebkg6OAIgcqdUJd5YNIGxHIxYxe0xaHfP2PppG3qu5lUD2dDrb7IqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsw6%2FRq95ox8Mkg9yrcA%2BAiYg6zQnYeCuAS1yS7DqwYOWpEtSXyaEDOOvK94TZwD4KObwxTfn5JpkRSE2ti0QkhbhPDfu64IZKji3hUzGTN%2F4kHMZkqb7d%2F%2BW0pw%2B6PAHqIGTucX2%2BlmpTFDsuWJ6VdUoRRilPPKDgotoIwQ1IOFD6FBCv2idI%2BMuazbdtGM1%2BuOpLRIcS8kyNqZJiiVO68irdkUncgpxlpj2ifdRz8SYas2I2QUjB06WVp2TyjV%2FxUtjhZU%2BKmGdG3BvYvdAMVuCZBQhaEc%2BJkWdxka4GWBqWT8IzD5CtYuV6fisuL71EFMuRtqeY799zeBmIRnHjy20DsRmTbg8Wv85dsdxSwATfrS%2Br74xGHfA3cJJ%2BnthvZMlgT8ButovEYSbmr2fWnVOS4oNsqbICUSXfCaNH1ilVPADXR47jasO7SwvtK8VAE11w1Ni6jy5GwDfkZFT67ZsBtKgAL6wKDyTz1QnsgOUaFIdZjcCxb6FlPF76G7I2pQv0NEXRRW1GpwQENvDPTWByTe2N8fs6SPzW8pPyUmWmZZXpWc8Edqt5Nf7VMhkH9GzDO8%2FgsDjd32mRAIe8KlOHcHZEXgqBSjrpOxbt9oCIWx6pAeqtQf%2FqStHBkilgd0BYehtpsFdrOML2ylsIGOqUBdp58v%2Fi9ATNMGJd4V0NvDNp43bcuOK652X3QSvONroxZXg1s7GV9sePwdBWficDvUJhzrb3NcNzEPgg79%2B2cyvXqvgzrptHR4hTk5EXyVB%2FQpJc29KuAnkvEj3VjffrOf44Uurc2UXW%2B6fJ5xjclr88kfWJbfBWyayRLe3uT4Z2N6m7%2FshSPacWq7HVa%2FcAj%2BnOp0j6PHYILRTPcXTMxOhZ6KV29&X-Amz-Signature=37250358d169291a2bf690f09664f10ca4616e868abca141c2ca620b779e96c2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYZRPL3G%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0K4ytiIWWO07IBWkUa6R10rGYZTBaheOrc2cebkg6OAIgcqdUJd5YNIGxHIxYxe0xaHfP2PppG3qu5lUD2dDrb7IqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsw6%2FRq95ox8Mkg9yrcA%2BAiYg6zQnYeCuAS1yS7DqwYOWpEtSXyaEDOOvK94TZwD4KObwxTfn5JpkRSE2ti0QkhbhPDfu64IZKji3hUzGTN%2F4kHMZkqb7d%2F%2BW0pw%2B6PAHqIGTucX2%2BlmpTFDsuWJ6VdUoRRilPPKDgotoIwQ1IOFD6FBCv2idI%2BMuazbdtGM1%2BuOpLRIcS8kyNqZJiiVO68irdkUncgpxlpj2ifdRz8SYas2I2QUjB06WVp2TyjV%2FxUtjhZU%2BKmGdG3BvYvdAMVuCZBQhaEc%2BJkWdxka4GWBqWT8IzD5CtYuV6fisuL71EFMuRtqeY799zeBmIRnHjy20DsRmTbg8Wv85dsdxSwATfrS%2Br74xGHfA3cJJ%2BnthvZMlgT8ButovEYSbmr2fWnVOS4oNsqbICUSXfCaNH1ilVPADXR47jasO7SwvtK8VAE11w1Ni6jy5GwDfkZFT67ZsBtKgAL6wKDyTz1QnsgOUaFIdZjcCxb6FlPF76G7I2pQv0NEXRRW1GpwQENvDPTWByTe2N8fs6SPzW8pPyUmWmZZXpWc8Edqt5Nf7VMhkH9GzDO8%2FgsDjd32mRAIe8KlOHcHZEXgqBSjrpOxbt9oCIWx6pAeqtQf%2FqStHBkilgd0BYehtpsFdrOML2ylsIGOqUBdp58v%2Fi9ATNMGJd4V0NvDNp43bcuOK652X3QSvONroxZXg1s7GV9sePwdBWficDvUJhzrb3NcNzEPgg79%2B2cyvXqvgzrptHR4hTk5EXyVB%2FQpJc29KuAnkvEj3VjffrOf44Uurc2UXW%2B6fJ5xjclr88kfWJbfBWyayRLe3uT4Z2N6m7%2FshSPacWq7HVa%2FcAj%2BnOp0j6PHYILRTPcXTMxOhZ6KV29&X-Amz-Signature=3e29687f03199f3ed090027ae6eb36cac9f6ca627303c141bd7cee6fd6c48e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
