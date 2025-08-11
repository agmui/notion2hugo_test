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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZR4AVZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbmKVNIa207uNn3s%2BXZCfwjcA3Cm1gJwvQcWeOTd3PlAiEA9qg8cXewRy805HvZ7ux3W3cnZtqDTvjUVszv3BJUf2kqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOobhdVGe9oXDS7NMyrcA9z%2BmLNOAXXNfrcX0JN%2FwcsgboPbk35X%2FETyiO3QU0ju5rKswFKZg%2FC6GX0R9SrRgD287p9FXmSAYfxH5H022Gml6XwQse%2BaPoAPy3kklSkT89iqIWyhtQv4Dgbu%2BKH1%2F0UGXfT4XMO6SVUBwu%2BscFyhs9q%2BfijA4R6SdxML%2BEx64FEbgcyjZCTwHW%2BikA9H8DeodohzTUf4Q3l7S4OiXOIsV0Cj1DUOl%2BHKAWwWZNWkj7zm3qdZrp%2FvudCWnA%2FgXtpmg2m43F9gPi6moyQMqs%2FL8uCMLUSLxMPhVZO%2FlOqCYtgutLtTxZWXtQeQ%2FmjhSqtQHj4lW3AM20%2BrsIigd4jiG%2BuoRkax5oX2Q0Uovw01HkzQSviE%2B4baKi6PEl0I%2BS%2FeI466cf1zbmJ%2BlmG30lWcnwKnEKjY5NIJsB37PDxC2Vu8sT%2F1qMskc1e6Ue%2BXpEhf7%2FnZBGN6h8fyf8tIn6P62uuuhExTN9JR8iK8NOpD%2BahDO%2FmVO%2Bhe3M7yRbhmcH0Woh2b0tHR2UwE5%2BiQP65zwLTOd%2Bmo8TBPUDxfQThXKtQxukHlWpnRUBcLfO7U8JNlz5DLitEB4kjpE1TXpdVMSGbaBQtkezPw26OvZlu%2B4PESliOZus7ssdeoMP%2F35cQGOqUBN4eZ6TkEwk5ndSnrXwmgUgBRYuhVBgn1uZ7rVVxLsU%2B2u6zb6YP7cI9NHXgra7ZTUafnweoKAA8BS0iygqhgUErNlnovI7Abc%2FI76e6AbK3GfL%2BEbLJFl90wBkaYa9PMyFeZqIMITz80oWA9SuDUE0EDoz3NO7t0D51YsOGZahB4s1cbAPlcZbKfmhjApmafBw%2FA59Mmsd3GmuDnpd3mB2tauJ3p&X-Amz-Signature=5b49db73934f38031528db10b7b425d754ba251e819616d913b97a7c1cb549af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZR4AVZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbmKVNIa207uNn3s%2BXZCfwjcA3Cm1gJwvQcWeOTd3PlAiEA9qg8cXewRy805HvZ7ux3W3cnZtqDTvjUVszv3BJUf2kqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOobhdVGe9oXDS7NMyrcA9z%2BmLNOAXXNfrcX0JN%2FwcsgboPbk35X%2FETyiO3QU0ju5rKswFKZg%2FC6GX0R9SrRgD287p9FXmSAYfxH5H022Gml6XwQse%2BaPoAPy3kklSkT89iqIWyhtQv4Dgbu%2BKH1%2F0UGXfT4XMO6SVUBwu%2BscFyhs9q%2BfijA4R6SdxML%2BEx64FEbgcyjZCTwHW%2BikA9H8DeodohzTUf4Q3l7S4OiXOIsV0Cj1DUOl%2BHKAWwWZNWkj7zm3qdZrp%2FvudCWnA%2FgXtpmg2m43F9gPi6moyQMqs%2FL8uCMLUSLxMPhVZO%2FlOqCYtgutLtTxZWXtQeQ%2FmjhSqtQHj4lW3AM20%2BrsIigd4jiG%2BuoRkax5oX2Q0Uovw01HkzQSviE%2B4baKi6PEl0I%2BS%2FeI466cf1zbmJ%2BlmG30lWcnwKnEKjY5NIJsB37PDxC2Vu8sT%2F1qMskc1e6Ue%2BXpEhf7%2FnZBGN6h8fyf8tIn6P62uuuhExTN9JR8iK8NOpD%2BahDO%2FmVO%2Bhe3M7yRbhmcH0Woh2b0tHR2UwE5%2BiQP65zwLTOd%2Bmo8TBPUDxfQThXKtQxukHlWpnRUBcLfO7U8JNlz5DLitEB4kjpE1TXpdVMSGbaBQtkezPw26OvZlu%2B4PESliOZus7ssdeoMP%2F35cQGOqUBN4eZ6TkEwk5ndSnrXwmgUgBRYuhVBgn1uZ7rVVxLsU%2B2u6zb6YP7cI9NHXgra7ZTUafnweoKAA8BS0iygqhgUErNlnovI7Abc%2FI76e6AbK3GfL%2BEbLJFl90wBkaYa9PMyFeZqIMITz80oWA9SuDUE0EDoz3NO7t0D51YsOGZahB4s1cbAPlcZbKfmhjApmafBw%2FA59Mmsd3GmuDnpd3mB2tauJ3p&X-Amz-Signature=b59e1dcafb01d3dc7ef5b91278fb82026eb9ff308551eeecc713d3bc919a83b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
