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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPIQKOK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHg7ZuZDK7QhEdz7DNI5M1wf0QGVznGdRk3f9IoxUEfFAiAMfG1hyM%2BBd1ofT2i2f1kbzeZdFh0%2BtUxQZd9NInXOECqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyi5lgLVeutj%2BZloKtwD9cc3G6Zy8oe9WH0lMLxlc2VkBULFAHmdN7pFqCe6ioCQJVcklmfcTg71iQfTVojOOKJgIM7y9jxw9ecEgr0MNa%2BQBcwuHC2rjO3I5EktDdvkHKJjJuB6U%2FRAAgaUk5maqLyJ44ETqLm4QdZt413XzgOvSy%2FUsnEeqisy%2Ftbbh8FHF36H9ZVmp2BCs3H9fUkvYLIGHZSW%2FJCC6Z5cLgF1pyDp8nHuPMVW0QOfLJ8XbvQmj7opcGrwlKnlKIb6RRz%2B2XaLsQ678Wend2q%2FKLORxVRPrDDXHXYdM9bKfQUtYQFSW9ga5r2AbrFxHmeSkPp%2BfpLvG8nvNfsBOq2Fu48vYQSlB7NS7wpMdmXNBLFWrbCAPwGWG9WkKxYHuw1R4Zo47QNgnKfLlGJbQPRf%2BJljDDjsSTGH4An%2BL2y8C54UZsrLbgX5WpnCKTMmoP4brpD%2FpwLlYaWeim98DqXcmlKokAEhyX8a%2Bnf%2BuUH4DwGZzmMCSvb%2BCfcckcRG3pYlij75styjOXnFnmGYJA7A8er2exhtcuC4d61sHvWbUKXrTepsnp%2BIpyX0UOC86dmNIJT1al28lkIKCqBg2599AGMuF7gHpZF9VJuO5CVE1iowOY8q1EPm3V4Sl8Vu1QEw4IuIvgY6pgHNG%2BY8i1qYMDfRwX8r%2BJYLfkowDzxw4Yo%2BUwBNSVh5g61v1uLjaCslSf1l8av5w8vhbn%2FwM350g9NCGJN1gA9hJLcdv%2BkP3fyuKpXckTR9LVPD%2FV5ErbnpNzc9%2BM9y5XFPcazn6waeeTjUyCbR82G0bwawpTvKNKUTzWqlC5ADWlX3uG69pzRAwc0AGJLP48NDMkZl340Ym5O8AQ7gPNeb%2BrssrhHe&X-Amz-Signature=07302d97c6f64958a1354dfe059ae98dff49969ccd5b1bcf894a824cb017ac03&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPIQKOK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHg7ZuZDK7QhEdz7DNI5M1wf0QGVznGdRk3f9IoxUEfFAiAMfG1hyM%2BBd1ofT2i2f1kbzeZdFh0%2BtUxQZd9NInXOECqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyi5lgLVeutj%2BZloKtwD9cc3G6Zy8oe9WH0lMLxlc2VkBULFAHmdN7pFqCe6ioCQJVcklmfcTg71iQfTVojOOKJgIM7y9jxw9ecEgr0MNa%2BQBcwuHC2rjO3I5EktDdvkHKJjJuB6U%2FRAAgaUk5maqLyJ44ETqLm4QdZt413XzgOvSy%2FUsnEeqisy%2Ftbbh8FHF36H9ZVmp2BCs3H9fUkvYLIGHZSW%2FJCC6Z5cLgF1pyDp8nHuPMVW0QOfLJ8XbvQmj7opcGrwlKnlKIb6RRz%2B2XaLsQ678Wend2q%2FKLORxVRPrDDXHXYdM9bKfQUtYQFSW9ga5r2AbrFxHmeSkPp%2BfpLvG8nvNfsBOq2Fu48vYQSlB7NS7wpMdmXNBLFWrbCAPwGWG9WkKxYHuw1R4Zo47QNgnKfLlGJbQPRf%2BJljDDjsSTGH4An%2BL2y8C54UZsrLbgX5WpnCKTMmoP4brpD%2FpwLlYaWeim98DqXcmlKokAEhyX8a%2Bnf%2BuUH4DwGZzmMCSvb%2BCfcckcRG3pYlij75styjOXnFnmGYJA7A8er2exhtcuC4d61sHvWbUKXrTepsnp%2BIpyX0UOC86dmNIJT1al28lkIKCqBg2599AGMuF7gHpZF9VJuO5CVE1iowOY8q1EPm3V4Sl8Vu1QEw4IuIvgY6pgHNG%2BY8i1qYMDfRwX8r%2BJYLfkowDzxw4Yo%2BUwBNSVh5g61v1uLjaCslSf1l8av5w8vhbn%2FwM350g9NCGJN1gA9hJLcdv%2BkP3fyuKpXckTR9LVPD%2FV5ErbnpNzc9%2BM9y5XFPcazn6waeeTjUyCbR82G0bwawpTvKNKUTzWqlC5ADWlX3uG69pzRAwc0AGJLP48NDMkZl340Ym5O8AQ7gPNeb%2BrssrhHe&X-Amz-Signature=b06a6ce66786f6696963fec5f0806e48ed41b6b1663eca2cc172d87c2af6d119&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
