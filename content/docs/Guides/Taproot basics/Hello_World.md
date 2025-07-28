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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657Z2RH3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCSSTxgWFSNUQqnkGgSukd1m30LjJxy0fP%2BldPzWc99CgIhAOoFahY0a0B%2FqVQz80394uvCBA7wifH9Nl81%2BKrNLrUnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjGhoM0g75mKm8ICQq3ANEGW19bk%2B%2FyPMNISBrx9uOzx%2FdJIQNZqNwSqmcj4hi1XXH1P%2Fp7Ny1JZbGUUsQGUgpqoytPOX27h0qVuuRGz4hEF2Qt%2FCB1NoQY78iU9lpUaDbqULXujrlIDRM9wI1CHyfeFegUM8kWmxAbucUUWQ1K4gXgn43ZbHJAQjZS6917DBi57kbBTOixec0fANTEQthICuFdZEUBvAACuwEykRd2ggQZEtkqoT4TvHnw9MgxqFL1K8ATdHHMJB22PTpGlxw9LgzJjFalppY57fQGYigdkJ8VMEWBVcAph8JuJeplxr%2B6GlGzEu%2FCpoLNeSlrO1UWmJ7dF8jSalzzLpRzqyorJ93vpfzXmlTbiBChF6A82RDxsJ8J5OFfpQpKFlOVlQhVrgJEmhjmDrLFS9fu8eIhRtgVfkqz2zKgMPWprzKpcyMJuS%2FPPMgsEzlnZBN9%2BQcNWUg539xsxRRVGsWVrojhXIX9RYUetYL95iwlBreHfFpD5VjgH%2BQJWg5jjJJsfB7gvJlVPU1vk0IwBilrzbWtCHKdtLJvggIvuGwxX47W85iHmJXWuoGlJsxRTXTpOB%2F1j1Yrkmn4Xcb3ZciO7C%2BC52ZD%2Blo8r2x08Y9OglecJHKf4dNz7idp2yX7jDJ153EBjqkActKYCCt1xf%2FgnXEz4gy90nrLyyrrGqeCK6K%2BMaCYMwbzbVXROokZQ2ySfPBjHRp4tE4niEMExp292TjUSCv3yJDXIzpO0%2BCsiVIqZV%2Bw9%2F6XhqxgTfFQdG0Vy5ii0WBMasVe5LsULtQt7SEAqhlYXBjTgUTO%2Bmw1t7dRrgRkEp0UdfKmuXywaiYl3DzEiWwt6wS7h9Wb7ucqdmTMHunkw9LV182&X-Amz-Signature=01a31c30b3e946ac5bd568dc14789e29fc1bae245a647b74e5f6f272ba6d4b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657Z2RH3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCSSTxgWFSNUQqnkGgSukd1m30LjJxy0fP%2BldPzWc99CgIhAOoFahY0a0B%2FqVQz80394uvCBA7wifH9Nl81%2BKrNLrUnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjGhoM0g75mKm8ICQq3ANEGW19bk%2B%2FyPMNISBrx9uOzx%2FdJIQNZqNwSqmcj4hi1XXH1P%2Fp7Ny1JZbGUUsQGUgpqoytPOX27h0qVuuRGz4hEF2Qt%2FCB1NoQY78iU9lpUaDbqULXujrlIDRM9wI1CHyfeFegUM8kWmxAbucUUWQ1K4gXgn43ZbHJAQjZS6917DBi57kbBTOixec0fANTEQthICuFdZEUBvAACuwEykRd2ggQZEtkqoT4TvHnw9MgxqFL1K8ATdHHMJB22PTpGlxw9LgzJjFalppY57fQGYigdkJ8VMEWBVcAph8JuJeplxr%2B6GlGzEu%2FCpoLNeSlrO1UWmJ7dF8jSalzzLpRzqyorJ93vpfzXmlTbiBChF6A82RDxsJ8J5OFfpQpKFlOVlQhVrgJEmhjmDrLFS9fu8eIhRtgVfkqz2zKgMPWprzKpcyMJuS%2FPPMgsEzlnZBN9%2BQcNWUg539xsxRRVGsWVrojhXIX9RYUetYL95iwlBreHfFpD5VjgH%2BQJWg5jjJJsfB7gvJlVPU1vk0IwBilrzbWtCHKdtLJvggIvuGwxX47W85iHmJXWuoGlJsxRTXTpOB%2F1j1Yrkmn4Xcb3ZciO7C%2BC52ZD%2Blo8r2x08Y9OglecJHKf4dNz7idp2yX7jDJ153EBjqkActKYCCt1xf%2FgnXEz4gy90nrLyyrrGqeCK6K%2BMaCYMwbzbVXROokZQ2ySfPBjHRp4tE4niEMExp292TjUSCv3yJDXIzpO0%2BCsiVIqZV%2Bw9%2F6XhqxgTfFQdG0Vy5ii0WBMasVe5LsULtQt7SEAqhlYXBjTgUTO%2Bmw1t7dRrgRkEp0UdfKmuXywaiYl3DzEiWwt6wS7h9Wb7ucqdmTMHunkw9LV182&X-Amz-Signature=db48526896dd7c5ebb60d8c9d61bd11fa5bf2a6a5ed1c03fa6e4cb2b595fed9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
