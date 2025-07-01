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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADJAV53%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNuVxuYJF3k%2B2JHkoUQN%2FJkGzVVNDP0E2xuwrW%2FOZb8gIgdON1PEeM8NIK5yaaDdUCjiEUJo0w%2FfsH7dEAvJktLL0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXXEoo1%2FrtQvBB9WyrcA5wnjOon14Xy%2FWOgHRSXILuAVz6dUsQM1kcD9Ubsi%2FWVuDOnU2Fd9yV6XOz5n985q3oQ6cR5EuGyfKW0PAO%2FIgl%2Bipwn5ZO5Vv9lKvrO%2FKk6rHLOKsJmRoRVymTD0E4XinfvA0rnmN%2By84m84jgjuMDsu064Ju%2FceciJmBw26t1%2F7Du%2FhG45u01igjjHojsMOJh3%2B2ZQfLrwpgNBfMruxNqxapbovQLbJ8%2F%2FjupaFQESqGw2Swld6jlUvU3P%2F9QO1Qd6NCPEIRLJk7r60x9oWTulcdnL5R5NvSLmgw83AP3uAbvQgtqhFx8fv6GNGk%2BW4lCrsACeK60AIRR%2BmkliRLHWnuxtcFPbcrh5ygRcOHhbarsQUtNAGbcUTlJBl9hhZyk%2FoN%2BtjlxeJ8awrKJCY%2B53%2BvakMFbSFS%2F%2B02WIjMa9l7qlP7xi1XwFqlRKVh4xbW3OcwpeMLDNLV5sqsunMkQBawNQRwg9Xfj5YDFANz%2BFxEryI4VdrZgDMIyQZTw96B%2BjENJJlHHwTD0Uurv2rA6AQo%2Bg8J6oDphvn4Vnka%2B5RPQ9vzFiK1Z0tygqbyRiCxVh6Gj75V0l7wIxHbAfv%2FcOBeGKzlpJDn%2FLB3jF0kzsfJGVlwoq7M3xGY9uMNDEkMMGOqUBoaVi%2B5ainba6gkGLL4CWYzy%2BIyaBsFKgXblxjjhykZszwjdEUcVuxqYN0nCwAupDxQyJvbWsnncQd5vpfCWTZF1scagqnZR5tFDagAp5m27tZ7qsjK7JlY0JBDq7Ggu0Uv6NPl8Jpt3XZ7HG%2FlcGaZobL4ieSM162oGoIjj7DrGwZTYkOD2%2FDmtNJN%2F21z9wZp8jjlVMGWGLTlsXtimT25FqCSOo&X-Amz-Signature=54f23647e7895b692cfbdcde300b0038c14f7dd49a258a7c71c27d19ceb5c8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADJAV53%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNuVxuYJF3k%2B2JHkoUQN%2FJkGzVVNDP0E2xuwrW%2FOZb8gIgdON1PEeM8NIK5yaaDdUCjiEUJo0w%2FfsH7dEAvJktLL0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXXEoo1%2FrtQvBB9WyrcA5wnjOon14Xy%2FWOgHRSXILuAVz6dUsQM1kcD9Ubsi%2FWVuDOnU2Fd9yV6XOz5n985q3oQ6cR5EuGyfKW0PAO%2FIgl%2Bipwn5ZO5Vv9lKvrO%2FKk6rHLOKsJmRoRVymTD0E4XinfvA0rnmN%2By84m84jgjuMDsu064Ju%2FceciJmBw26t1%2F7Du%2FhG45u01igjjHojsMOJh3%2B2ZQfLrwpgNBfMruxNqxapbovQLbJ8%2F%2FjupaFQESqGw2Swld6jlUvU3P%2F9QO1Qd6NCPEIRLJk7r60x9oWTulcdnL5R5NvSLmgw83AP3uAbvQgtqhFx8fv6GNGk%2BW4lCrsACeK60AIRR%2BmkliRLHWnuxtcFPbcrh5ygRcOHhbarsQUtNAGbcUTlJBl9hhZyk%2FoN%2BtjlxeJ8awrKJCY%2B53%2BvakMFbSFS%2F%2B02WIjMa9l7qlP7xi1XwFqlRKVh4xbW3OcwpeMLDNLV5sqsunMkQBawNQRwg9Xfj5YDFANz%2BFxEryI4VdrZgDMIyQZTw96B%2BjENJJlHHwTD0Uurv2rA6AQo%2Bg8J6oDphvn4Vnka%2B5RPQ9vzFiK1Z0tygqbyRiCxVh6Gj75V0l7wIxHbAfv%2FcOBeGKzlpJDn%2FLB3jF0kzsfJGVlwoq7M3xGY9uMNDEkMMGOqUBoaVi%2B5ainba6gkGLL4CWYzy%2BIyaBsFKgXblxjjhykZszwjdEUcVuxqYN0nCwAupDxQyJvbWsnncQd5vpfCWTZF1scagqnZR5tFDagAp5m27tZ7qsjK7JlY0JBDq7Ggu0Uv6NPl8Jpt3XZ7HG%2FlcGaZobL4ieSM162oGoIjj7DrGwZTYkOD2%2FDmtNJN%2F21z9wZp8jjlVMGWGLTlsXtimT25FqCSOo&X-Amz-Signature=f5287fcba243680459b063cd1bb87920611f4d3bbd11faa483948412805ef557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
