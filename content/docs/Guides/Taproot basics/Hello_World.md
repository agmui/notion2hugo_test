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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKB6OVFS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEngyKTXL%2BdwizfYe%2BgZV7GVu0U6OsBqAINxq1JXjRyzAiEArG91Slh0ihje7qZlvlrRpRBVPT4T7AqfsNYySy3pjp0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEMA%2B%2Fce%2F5vJ5G69FSrcA8Ff1B6gpt2gLtZy8eGXyj0jUkgA5KxiuC%2Fz9RVcjY%2B9OI1PB2Xl7Q6zTYs4mmI3JkYC7lLvitHLXH0W1N4NpqciUm%2BMeZkuOfPhab%2FW8%2FI7INhX0TwfqTiycyXa4oZTEfMOTn0E5Schj9hfokclq90Ou82Yeac4iBXlXAFzz%2FFoj5GrycTmiob4NgRuGspsYFzf8sPHBEGYkANRX1W7qyymoUh8MXFAgr79RnK64NXnGma7s94IzDzMcYlFTQ8ZmFEPtnSh8soqkSDxk9%2FgIkB%2BLQz7%2FkVNoa8bWc1ppIt4judtb9Vb2lbAduSAvpjCYM4VPLiH%2Bhy2KYo%2BU2ppOjy1GftxhKXmdDkgCTxxhkBnk%2FQlR0nfKJ21tupwfPjfkKGtncliOOl0a%2B55HRvEnLQBlJ%2B9fZa2QR7Spi9okC4%2F7BTjPZx1YHSEYftvahYWT5insoIXv2XKvplyCao9FqUceO00YHUfCg%2BbTiCNzOYrIvSZ7HKET1EFAJUXhjl%2B%2F31BDS8jbBKqwLkHpObdFVlGliW7c%2BhG4E2WqbDctJTswOkkNIAfDsMTTKlO5z3bK1v2w8n4f%2FwRINnXaeCylO%2Fc5Usp%2BBOKaOXc9%2FNpbLc%2B1hIOpEVHry2QC8d%2BMJ7G%2Fr8GOqUBDHpHZeCtvayXbvyDOEZYX1hxF7nkyYMU8zA8yYRdgviLDrKfPuC4MFz6ddY%2Fe2zbAZs07G2Na9y1MkR7rV2SQ0gxbEgSY%2FmEOIZvUMuoH7O8oAOqNmJ%2FO02xUgsJHjs%2FE7y%2BT2z1%2F8LA%2ByTqcOtbAZF%2FieuljAwsPfmlHxbfCee5CrfAWtR%2BFTE5xhPetXCQlQk0J%2FZUTMtQuRMwe46AClbporLG&X-Amz-Signature=a11fe23e71b80b152296c5dc3b19eb56611e3c2ffcc4400a1dabcba6d3a21c57&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKB6OVFS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEngyKTXL%2BdwizfYe%2BgZV7GVu0U6OsBqAINxq1JXjRyzAiEArG91Slh0ihje7qZlvlrRpRBVPT4T7AqfsNYySy3pjp0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEMA%2B%2Fce%2F5vJ5G69FSrcA8Ff1B6gpt2gLtZy8eGXyj0jUkgA5KxiuC%2Fz9RVcjY%2B9OI1PB2Xl7Q6zTYs4mmI3JkYC7lLvitHLXH0W1N4NpqciUm%2BMeZkuOfPhab%2FW8%2FI7INhX0TwfqTiycyXa4oZTEfMOTn0E5Schj9hfokclq90Ou82Yeac4iBXlXAFzz%2FFoj5GrycTmiob4NgRuGspsYFzf8sPHBEGYkANRX1W7qyymoUh8MXFAgr79RnK64NXnGma7s94IzDzMcYlFTQ8ZmFEPtnSh8soqkSDxk9%2FgIkB%2BLQz7%2FkVNoa8bWc1ppIt4judtb9Vb2lbAduSAvpjCYM4VPLiH%2Bhy2KYo%2BU2ppOjy1GftxhKXmdDkgCTxxhkBnk%2FQlR0nfKJ21tupwfPjfkKGtncliOOl0a%2B55HRvEnLQBlJ%2B9fZa2QR7Spi9okC4%2F7BTjPZx1YHSEYftvahYWT5insoIXv2XKvplyCao9FqUceO00YHUfCg%2BbTiCNzOYrIvSZ7HKET1EFAJUXhjl%2B%2F31BDS8jbBKqwLkHpObdFVlGliW7c%2BhG4E2WqbDctJTswOkkNIAfDsMTTKlO5z3bK1v2w8n4f%2FwRINnXaeCylO%2Fc5Usp%2BBOKaOXc9%2FNpbLc%2B1hIOpEVHry2QC8d%2BMJ7G%2Fr8GOqUBDHpHZeCtvayXbvyDOEZYX1hxF7nkyYMU8zA8yYRdgviLDrKfPuC4MFz6ddY%2Fe2zbAZs07G2Na9y1MkR7rV2SQ0gxbEgSY%2FmEOIZvUMuoH7O8oAOqNmJ%2FO02xUgsJHjs%2FE7y%2BT2z1%2F8LA%2ByTqcOtbAZF%2FieuljAwsPfmlHxbfCee5CrfAWtR%2BFTE5xhPetXCQlQk0J%2FZUTMtQuRMwe46AClbporLG&X-Amz-Signature=9e55506c88da28e476d98a12316bc42abae0e6afa09f62e52feb2b3806af551f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
