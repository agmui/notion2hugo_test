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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ3GY2KO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd4C9g5pOgA7E7HnsH%2BX1ytaph5zPq49Ye7ZiemQxRVAIhAKBRynloSnGsPzJb4%2FSRRKalpxi8KJlQwZ%2Ftfj9sP6hHKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXnvzWnM4k07Q9tYQq3AOfQtutqsF3GJ%2BolTvUe4%2BGh8cfNzuHv1Mm9kwXkRyKjWHpR4NfzK9OcFlMAv2j%2B2Zfbhj8kFmOee2oJJB78lNpOA%2FdiKbQEazIr6GXrG4tFdJWuaFA81lfzfWhnXOXt1k2gGckQp9kE%2FM%2Bfx5w9c0QWupU5oBVK05d2njsSHX4cbdruC%2BVyVwr0h%2FKozfEQzbyyDgTaoS8clI1Esc2f5FRcipiuUBDY8HHcR5nOib1lIvogFBMICegutiuJITzNB9fUHtv1TE3Hi5vIWt2CCPsEio6IjgUfctIHEsSsy7ubh5os86McZYrzt34eeIP6ITiGka6Ujm5m%2FO6QJH3WWxNRhHYr0ba6Oz9PMdH1WksYASVx3fMliMbf4AbLdabG%2Fl%2F7YXQ%2BoU9SRHjtlHFEXrU0k1zP3n5n2v7hNGvPM8fVXZycZvz3TvwdmjE8n%2FexEsSPbFbv34FEzgyLs%2FhnJFcs%2Fbdl6ZfA%2FKekP%2F0dzST%2B7ZPkSsBfeTGQMYt208H%2F0BvJQb2MVJho2iQB%2FcpGVjvPrsgh0qnbQDN%2FYxWk7%2BIHphVm67oLjTydpEJIvBtW4ezCk7i%2B%2BCzFkQoJ9AdXH7HU1w5sfeLSxuNLIZItsEiniWSZIgXkUpvkN63JzDr8sG%2BBjqkAQuG1hAW1BFslN1SAZoV1rmv%2FDehKiEjqFIh1t%2Bz7XfuBhNPsluI8AQtLd2cL0xZ4Rpxd4GkR0hB9PUddh14MtukxGZTnhkhw4HUA8iwfOKuH8qGbydRrmTabgajsfUtbOOzHN7brZK1TBlAHc4OH6hnL%2BXzah6bK7oxDGDo%2FPtjdy9PItr5hiWcX34Z4Iw6m3YA0DbR2avBLN%2Bvbdo%2FPzX8sYMI&X-Amz-Signature=640d05a11d4c9ccbe2d52489d86ffa2747c7404d915a726de5d1832f005b22ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ3GY2KO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd4C9g5pOgA7E7HnsH%2BX1ytaph5zPq49Ye7ZiemQxRVAIhAKBRynloSnGsPzJb4%2FSRRKalpxi8KJlQwZ%2Ftfj9sP6hHKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXnvzWnM4k07Q9tYQq3AOfQtutqsF3GJ%2BolTvUe4%2BGh8cfNzuHv1Mm9kwXkRyKjWHpR4NfzK9OcFlMAv2j%2B2Zfbhj8kFmOee2oJJB78lNpOA%2FdiKbQEazIr6GXrG4tFdJWuaFA81lfzfWhnXOXt1k2gGckQp9kE%2FM%2Bfx5w9c0QWupU5oBVK05d2njsSHX4cbdruC%2BVyVwr0h%2FKozfEQzbyyDgTaoS8clI1Esc2f5FRcipiuUBDY8HHcR5nOib1lIvogFBMICegutiuJITzNB9fUHtv1TE3Hi5vIWt2CCPsEio6IjgUfctIHEsSsy7ubh5os86McZYrzt34eeIP6ITiGka6Ujm5m%2FO6QJH3WWxNRhHYr0ba6Oz9PMdH1WksYASVx3fMliMbf4AbLdabG%2Fl%2F7YXQ%2BoU9SRHjtlHFEXrU0k1zP3n5n2v7hNGvPM8fVXZycZvz3TvwdmjE8n%2FexEsSPbFbv34FEzgyLs%2FhnJFcs%2Fbdl6ZfA%2FKekP%2F0dzST%2B7ZPkSsBfeTGQMYt208H%2F0BvJQb2MVJho2iQB%2FcpGVjvPrsgh0qnbQDN%2FYxWk7%2BIHphVm67oLjTydpEJIvBtW4ezCk7i%2B%2BCzFkQoJ9AdXH7HU1w5sfeLSxuNLIZItsEiniWSZIgXkUpvkN63JzDr8sG%2BBjqkAQuG1hAW1BFslN1SAZoV1rmv%2FDehKiEjqFIh1t%2Bz7XfuBhNPsluI8AQtLd2cL0xZ4Rpxd4GkR0hB9PUddh14MtukxGZTnhkhw4HUA8iwfOKuH8qGbydRrmTabgajsfUtbOOzHN7brZK1TBlAHc4OH6hnL%2BXzah6bK7oxDGDo%2FPtjdy9PItr5hiWcX34Z4Iw6m3YA0DbR2avBLN%2Bvbdo%2FPzX8sYMI&X-Amz-Signature=21980e6c6cffe8e2c0ae9d01971073df852306d3e1a8c0d5d8cee85f06318fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
