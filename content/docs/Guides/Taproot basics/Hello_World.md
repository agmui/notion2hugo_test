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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESS4JXV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI19P%2F6ucUSrbhK%2FvhgwBjIt2osnL4VZnP4n7RweberAiA7sJ0gI09oB2l5cIvtBWJP8cBwNbp64Xf31emx4PUWTCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd9uCSeZQxMMuWGLfKtwD5facclrxZ%2FVlexDpkIVAHBeAMGPdAhUpd84hMi4QpwXhxfHLp8sTJC3JIMm8a9Z3nd582sXKmbeVQaiOgBsQEbfVE8ZdkcLG%2B%2FKO%2BhEUVs5awAKPOS4GTERx0yq3C5Fmd1Mm%2FwG3bN9w3T8JjhCw5suZ49p%2FC2oDB7bmm0WZjXsz9NO5nVXsmYsUePIFaWTaQCFCD5XtLDuSDCZbwZ2IGEMG4%2F4CoUcqrM1Sl3NZiGDMfKHHgAqjGvr6w9UbRn02isjl5ft%2BMhfeqC11ztz%2FnKMz8RLXzQobiCx5ipjj0c18XSloag38qtAobtKh957AtYk9CqS5IIYgtMKc5OXwJ5TvunOs5sd6DOv8vKpn4XWKSbDkAUcLvrWLuw%2BRnu%2Bxygte72UvR1mzHK71qXPL6Qq6FjpldfUazmVuh%2FER3Su9pfIEm8hCGGVNTesoVxvRrZR8Gkj6ZFv1uksfpV7s15eWBHRNgOST7mmDojAZHLvBme7lrm6%2FlG8ahUDpwji8j32JROfaPrYx%2BEBBaAOBP7BX1qSxsGgwyFwEsZmMTPfAgyrK%2B0hXIKjAkS%2FgVxs4CYETrwUAa48oVqkxCnh0iAEVfrtxL3XijxHXhDTaEoiJly%2BKOfmhXES%2BSeows4%2F8wAY6pgEd0f5dmchcofY5fBgSRocG%2BYKE28fTVX%2FcU5P8%2Bq870L3GBhkW8jJAk4EbzP4YM9L8xSMGyDCPKzkYOSckUWUNXfeb8jJHSB7CSV%2BZtmSjYfaWbYR1SrI5j1V7ffHkjOwIHV1cQfEDe31q2C8Gx%2BhhWa0NHUiTWkLyzUuZgr%2BasB9ZH6oM1ae%2BNVwLrpHVjf%2F7l34o%2FMMPg9ytvtmGL7UgMOWAcJQj&X-Amz-Signature=0420057a0e3ed661a7a133073878d0759705c6ddc4cc2164e591183df1c0c277&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESS4JXV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI19P%2F6ucUSrbhK%2FvhgwBjIt2osnL4VZnP4n7RweberAiA7sJ0gI09oB2l5cIvtBWJP8cBwNbp64Xf31emx4PUWTCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd9uCSeZQxMMuWGLfKtwD5facclrxZ%2FVlexDpkIVAHBeAMGPdAhUpd84hMi4QpwXhxfHLp8sTJC3JIMm8a9Z3nd582sXKmbeVQaiOgBsQEbfVE8ZdkcLG%2B%2FKO%2BhEUVs5awAKPOS4GTERx0yq3C5Fmd1Mm%2FwG3bN9w3T8JjhCw5suZ49p%2FC2oDB7bmm0WZjXsz9NO5nVXsmYsUePIFaWTaQCFCD5XtLDuSDCZbwZ2IGEMG4%2F4CoUcqrM1Sl3NZiGDMfKHHgAqjGvr6w9UbRn02isjl5ft%2BMhfeqC11ztz%2FnKMz8RLXzQobiCx5ipjj0c18XSloag38qtAobtKh957AtYk9CqS5IIYgtMKc5OXwJ5TvunOs5sd6DOv8vKpn4XWKSbDkAUcLvrWLuw%2BRnu%2Bxygte72UvR1mzHK71qXPL6Qq6FjpldfUazmVuh%2FER3Su9pfIEm8hCGGVNTesoVxvRrZR8Gkj6ZFv1uksfpV7s15eWBHRNgOST7mmDojAZHLvBme7lrm6%2FlG8ahUDpwji8j32JROfaPrYx%2BEBBaAOBP7BX1qSxsGgwyFwEsZmMTPfAgyrK%2B0hXIKjAkS%2FgVxs4CYETrwUAa48oVqkxCnh0iAEVfrtxL3XijxHXhDTaEoiJly%2BKOfmhXES%2BSeows4%2F8wAY6pgEd0f5dmchcofY5fBgSRocG%2BYKE28fTVX%2FcU5P8%2Bq870L3GBhkW8jJAk4EbzP4YM9L8xSMGyDCPKzkYOSckUWUNXfeb8jJHSB7CSV%2BZtmSjYfaWbYR1SrI5j1V7ffHkjOwIHV1cQfEDe31q2C8Gx%2BhhWa0NHUiTWkLyzUuZgr%2BasB9ZH6oM1ae%2BNVwLrpHVjf%2F7l34o%2FMMPg9ytvtmGL7UgMOWAcJQj&X-Amz-Signature=5e27adc37a937b7673ca3e84f140d7d9f5406ff262fd7f5900aafeee992a8b81&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
