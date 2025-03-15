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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB5CKLGC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEqlCjV1CD1Zw0t7N38hNekG4D9mcqmgQA%2FkyvYN0vPwIgPvqpikz2ZSSeaS9dYghOgasKzuO1Cg6eH86e1tyx14cq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJGN4wdOHhgE5Ezn5CrcA2g306AnXWfDg4qi6nynJm91s%2FbhkZk1ahQZXqKkPdSD6QBwL90lffjTs%2Fe3pq4VUzsN3Ica36tSdDFiupcuDAu%2FFGXzDK7kK8mn0RSn%2BoOYwAUqJ34xfe7j%2Fm%2B887Ix7D9MEEphRf23JNE22ERUKbVuONf1fmlzivgBtoY%2F9OLFq26tpUETDupNN2ZakqN93ko%2FnDx8TR33794SpW2iSquD8aq4%2Blx%2BtAptzQXJM7W2KDP5bd4cQptMiB3v3l8bHeakCGbnMjmwUhH5tneGDKXM%2BAK%2FDlSvRgE5XlYHhr0vCDIaUfUthU26nGGgOlkjoW7s5tBFo%2BBDGXUMkfhqBGuSAQWOq0%2BnSoAiSYaddJs6iIKs%2FdZjG2IJmNLRkyV4jnpimw5s9eX6UyS9xjBiizAaMHtatlWrJdwSdifF1wleniZJcl0NaiSLi%2FacRMZ8QdFOBAhh86wCCLOwvSD2rAwVa3sUcZXYoVP4OHC8E9RFplFE6UT%2F5Q%2Bq%2FyQqck53WU4VB1MppZxjM0UBohyG3sDppU%2BR3nhYpSLaB4H1JHV93ht4NWuEmOZ6DMCTU2XOPu7BpLcOqLHq0%2F%2FpnwsK3B%2Bpx3qFwnPB3EtbxmKLuhInORGifYeioKWaPz4VMNjh1L4GOqUBjUc%2BCX0JBo1uU0fddgLhyLc9NoFdmfMd6J9u%2BtfGBSLHU5%2BPdmlRpjBLDWrq%2F054ZK88NUwRnHG5qRnhuTiQPJQRkrtVa93kagC76ZWqAcBo3moAituj0xV6Us1czPtf9fpLw8upRQoQ%2FEV2BEe%2Fdkz6oQtulisPvQw%2F5QZaJscwgOooH4JfzEeoKuzWxO0zflIiW0o8JCFrYtWvApitfxYBQESt&X-Amz-Signature=6512c9d8084401e817d2a6a73f90368607df877bdfb30abcef53439352820aca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB5CKLGC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEqlCjV1CD1Zw0t7N38hNekG4D9mcqmgQA%2FkyvYN0vPwIgPvqpikz2ZSSeaS9dYghOgasKzuO1Cg6eH86e1tyx14cq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJGN4wdOHhgE5Ezn5CrcA2g306AnXWfDg4qi6nynJm91s%2FbhkZk1ahQZXqKkPdSD6QBwL90lffjTs%2Fe3pq4VUzsN3Ica36tSdDFiupcuDAu%2FFGXzDK7kK8mn0RSn%2BoOYwAUqJ34xfe7j%2Fm%2B887Ix7D9MEEphRf23JNE22ERUKbVuONf1fmlzivgBtoY%2F9OLFq26tpUETDupNN2ZakqN93ko%2FnDx8TR33794SpW2iSquD8aq4%2Blx%2BtAptzQXJM7W2KDP5bd4cQptMiB3v3l8bHeakCGbnMjmwUhH5tneGDKXM%2BAK%2FDlSvRgE5XlYHhr0vCDIaUfUthU26nGGgOlkjoW7s5tBFo%2BBDGXUMkfhqBGuSAQWOq0%2BnSoAiSYaddJs6iIKs%2FdZjG2IJmNLRkyV4jnpimw5s9eX6UyS9xjBiizAaMHtatlWrJdwSdifF1wleniZJcl0NaiSLi%2FacRMZ8QdFOBAhh86wCCLOwvSD2rAwVa3sUcZXYoVP4OHC8E9RFplFE6UT%2F5Q%2Bq%2FyQqck53WU4VB1MppZxjM0UBohyG3sDppU%2BR3nhYpSLaB4H1JHV93ht4NWuEmOZ6DMCTU2XOPu7BpLcOqLHq0%2F%2FpnwsK3B%2Bpx3qFwnPB3EtbxmKLuhInORGifYeioKWaPz4VMNjh1L4GOqUBjUc%2BCX0JBo1uU0fddgLhyLc9NoFdmfMd6J9u%2BtfGBSLHU5%2BPdmlRpjBLDWrq%2F054ZK88NUwRnHG5qRnhuTiQPJQRkrtVa93kagC76ZWqAcBo3moAituj0xV6Us1czPtf9fpLw8upRQoQ%2FEV2BEe%2Fdkz6oQtulisPvQw%2F5QZaJscwgOooH4JfzEeoKuzWxO0zflIiW0o8JCFrYtWvApitfxYBQESt&X-Amz-Signature=6c72281cc693ea7f1dfcf0231a77e89e9c095b1ccc08a68849e91ddea9f498e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
