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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVQZ3NY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2Fp518O221nklcLTsIKWzzfjdL49YLRjfQJrv6DJX3QIhANfrXW%2FwS9QDt4mPeHokuFUBHA3m2BoxB5inPYx4S0QBKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP9WxbPrDkzW8qcpAq3ANKONQVSjohum%2BA3jDZYZedP0Uocoe0D%2FCAGndmTgR4EMAewu%2FOj16L9JoSemzMgwnzN%2Bevn0XBHj4iTC8X5a48kQJIpIW%2FfGotpADn4lbQ2BcDRSr2OVkREq4FuvbU4njQG6eFij0mVlQZd1%2F8BIicVpNxVg%2FMqeFpOLVY4nFY4UOfbFW7jjbTzdeRg2psYgWn3Yev1TxmsYlgMggAJfg3Kfklt4ExeM93jq%2FGTPBxl2EVt08qEjEYPkPe8dEz5kA1jaeZTLQNXQkLO8lx7KauR0p6Z96RglvhHVhFkSSjV%2BNL%2B%2BaREsm2FKkV6ZTGFa6LUUi7NjjUJrOvhRGYGSpiZJF9%2B%2FT5CjwFmSN3uH2vdsv6SovQa5y86Z%2FTG07U2r2QpdjPsEaZ3YZNpWvFbz1dh%2FU%2BxCMJqgE3weqAsU3P6uBOQ2Cch7KPhTLv6UTRHBiQUWdtPdeTRXKvXm9tQ2a7%2B5gBgnrbz4OmZNF%2BbUlMdllvy0HEfMqbXhWr2FvDxd1e%2FRRMoj56E31jlOdO%2FWVKm%2BYHthJgZzANUm5KOG22vjs4RHbE%2Bnj%2FMga6rYDFiqKcFfGwomyhftPvC40RVGiW9TJxzyGhozSUImmtNvnuQhZmdliR8QQDvvLywzDNibPEBjqkAd%2F9CfeZnXfeCjQbUgYLwFsuFdXic0oc%2BEmSY3foJsiu2gB2XhiY7qCLFkPrIg71gOyE%2F8KsjOULnM5EQQJeEBGcpRSZGa2GwQL8k4U2RkLZoFrubA4jMz%2F8uBfc81qLGBw%2BLm8WTt0Pbk%2FjJcuK6isIrnIfcFQJMDOAYwiFt6MVpx5i%2FDT0sPiGIUzn9OYVNiaKMHE7ChDhO49FvdyQxgsGDTI5&X-Amz-Signature=e493b785a80491aaa5f4fd20f15521fa2ef42bc1d27a0f7423cb0b863ce4c93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVQZ3NY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2Fp518O221nklcLTsIKWzzfjdL49YLRjfQJrv6DJX3QIhANfrXW%2FwS9QDt4mPeHokuFUBHA3m2BoxB5inPYx4S0QBKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP9WxbPrDkzW8qcpAq3ANKONQVSjohum%2BA3jDZYZedP0Uocoe0D%2FCAGndmTgR4EMAewu%2FOj16L9JoSemzMgwnzN%2Bevn0XBHj4iTC8X5a48kQJIpIW%2FfGotpADn4lbQ2BcDRSr2OVkREq4FuvbU4njQG6eFij0mVlQZd1%2F8BIicVpNxVg%2FMqeFpOLVY4nFY4UOfbFW7jjbTzdeRg2psYgWn3Yev1TxmsYlgMggAJfg3Kfklt4ExeM93jq%2FGTPBxl2EVt08qEjEYPkPe8dEz5kA1jaeZTLQNXQkLO8lx7KauR0p6Z96RglvhHVhFkSSjV%2BNL%2B%2BaREsm2FKkV6ZTGFa6LUUi7NjjUJrOvhRGYGSpiZJF9%2B%2FT5CjwFmSN3uH2vdsv6SovQa5y86Z%2FTG07U2r2QpdjPsEaZ3YZNpWvFbz1dh%2FU%2BxCMJqgE3weqAsU3P6uBOQ2Cch7KPhTLv6UTRHBiQUWdtPdeTRXKvXm9tQ2a7%2B5gBgnrbz4OmZNF%2BbUlMdllvy0HEfMqbXhWr2FvDxd1e%2FRRMoj56E31jlOdO%2FWVKm%2BYHthJgZzANUm5KOG22vjs4RHbE%2Bnj%2FMga6rYDFiqKcFfGwomyhftPvC40RVGiW9TJxzyGhozSUImmtNvnuQhZmdliR8QQDvvLywzDNibPEBjqkAd%2F9CfeZnXfeCjQbUgYLwFsuFdXic0oc%2BEmSY3foJsiu2gB2XhiY7qCLFkPrIg71gOyE%2F8KsjOULnM5EQQJeEBGcpRSZGa2GwQL8k4U2RkLZoFrubA4jMz%2F8uBfc81qLGBw%2BLm8WTt0Pbk%2FjJcuK6isIrnIfcFQJMDOAYwiFt6MVpx5i%2FDT0sPiGIUzn9OYVNiaKMHE7ChDhO49FvdyQxgsGDTI5&X-Amz-Signature=bb69bdc8e936bd1e16865aeb2ad0e85f0ca7bb3227fbd4f4cf90776adb234d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
