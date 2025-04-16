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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYIAKZU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2B68joA6bz3QYLL%2BMLuFe5V7okajz7iMVoIcX8nLl9gIhAJwtIHgHp6DLKJkKYx%2Bj2XGBrSl%2Bw%2FdnEkosyqXGIurSKv8DCEwQABoMNjM3NDIzMTgzODA1IgxddQoJ6wNWWifurLIq3AOowll0uVQBWy6I8oJ9kjcZTFxhrLRHWs2fYGNdKKb5MR3ILZkNAHkgAIaWXZg1hkHReES5VFE%2Fsu2VIKkveHJKo9yTBE3OxmsdfnpCJzgQ%2Bw%2FUfiOcmN08CJ%2FgRCzQi3rVN9IegpbeTZg5ctKwoVkZAXiICv29IXvA42lmZIjWCJPmixTTzbau8PVKCTaciVcmvIuePmvg5fard%2F2bqC4aNhw9CTDADMQ5aHPYfgC6dDhanYk2TeVxtV3%2FScem1Nqp0AtpTmbDjaziHqCV5VUd2e3bnUgyW1dVwpjhXsO%2BSiOfcNseMufMaFfP9XZ8H99AfSMZ0mvGoR03elcM3oHxEmggBdBlb5qk4%2Ft8MIXnMOZbtCYnkNghArgFKnP3Ps88H%2B31I2MG81fExfDqevbUpTVdn2qHTMKSgwP8VVQQOUpk88Ppr9JZUDI41d6ajMp4dDbOVVRXGGuB%2BViYa6l92zeMtaftzpCYoBLANLZnySDIHlpnLQPI1r9t5L3x8iGFZIPh2h7dPoK3lb4k27ZwFm8981X872gd%2BnpnuTClNwoUDXyIY7g6qsc1S%2BlKjWYkQ2giFpLlUexXIt4G7pRuDk6V0nPxY4NBunVkaOSfYE7i%2BhbnMg1w6zNERDDa9%2F%2B%2FBjqkATJeyNPdt416lspodqUj1eV%2FQjSEFCfYhdQTJPrvn2YCwozQ4d8LWLphTMrtuXOhE8xGSMr%2BUVV9gRiGfkOxfDgdk1wwA%2FFtsQBK6slyFRf911kym6VW%2BUg2UoOmu4GjLEPzYNv%2BUaZPqByiNhaFuGPHGca1HPgug9ehqT39cTmUg3TxVf6E2o46dl0yEvcPzCLSD%2FHZF7MngEeZktUMy1TJOWAL&X-Amz-Signature=02f00b2425350da12dbcadabff8414f8805fcb10343da6e456e018adb0ad51f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYIAKZU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2B68joA6bz3QYLL%2BMLuFe5V7okajz7iMVoIcX8nLl9gIhAJwtIHgHp6DLKJkKYx%2Bj2XGBrSl%2Bw%2FdnEkosyqXGIurSKv8DCEwQABoMNjM3NDIzMTgzODA1IgxddQoJ6wNWWifurLIq3AOowll0uVQBWy6I8oJ9kjcZTFxhrLRHWs2fYGNdKKb5MR3ILZkNAHkgAIaWXZg1hkHReES5VFE%2Fsu2VIKkveHJKo9yTBE3OxmsdfnpCJzgQ%2Bw%2FUfiOcmN08CJ%2FgRCzQi3rVN9IegpbeTZg5ctKwoVkZAXiICv29IXvA42lmZIjWCJPmixTTzbau8PVKCTaciVcmvIuePmvg5fard%2F2bqC4aNhw9CTDADMQ5aHPYfgC6dDhanYk2TeVxtV3%2FScem1Nqp0AtpTmbDjaziHqCV5VUd2e3bnUgyW1dVwpjhXsO%2BSiOfcNseMufMaFfP9XZ8H99AfSMZ0mvGoR03elcM3oHxEmggBdBlb5qk4%2Ft8MIXnMOZbtCYnkNghArgFKnP3Ps88H%2B31I2MG81fExfDqevbUpTVdn2qHTMKSgwP8VVQQOUpk88Ppr9JZUDI41d6ajMp4dDbOVVRXGGuB%2BViYa6l92zeMtaftzpCYoBLANLZnySDIHlpnLQPI1r9t5L3x8iGFZIPh2h7dPoK3lb4k27ZwFm8981X872gd%2BnpnuTClNwoUDXyIY7g6qsc1S%2BlKjWYkQ2giFpLlUexXIt4G7pRuDk6V0nPxY4NBunVkaOSfYE7i%2BhbnMg1w6zNERDDa9%2F%2B%2FBjqkATJeyNPdt416lspodqUj1eV%2FQjSEFCfYhdQTJPrvn2YCwozQ4d8LWLphTMrtuXOhE8xGSMr%2BUVV9gRiGfkOxfDgdk1wwA%2FFtsQBK6slyFRf911kym6VW%2BUg2UoOmu4GjLEPzYNv%2BUaZPqByiNhaFuGPHGca1HPgug9ehqT39cTmUg3TxVf6E2o46dl0yEvcPzCLSD%2FHZF7MngEeZktUMy1TJOWAL&X-Amz-Signature=2abb63b2403f1f7dfb78e084b9f5dff5812a8dafad0efc1fba122e1843977955&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
