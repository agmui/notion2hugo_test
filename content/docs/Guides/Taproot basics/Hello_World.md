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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSAXC4T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTjcCY5B1hBxQ0ZYuMSeuZa39cJuuzZTquOaMRuHijEAiAGIEFvSgFW1onytGnXq%2FTJrv0nn4XateNuNAPg0rS%2FViqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2H5S4okDvlRD6pL3KtwDt6Wn3Gb%2FpZuRjvvr906SGG5dgjGwijREKKqWucuDYFuufCqKOuSsN77d09arfLX9mXE5woJtX4I0oBvL%2B4YsbeWLzr5pVq1dVvmPneoWWybPkSyBZM0Q%2FvHte7urPHRZFnfKDrNa3qXyChiHqOA%2FbMAdFR%2F8tSG0wc8owA%2B8RNR4ZulR8pY%2BmuVTH0Q8QyqujKOzSb2BIVOBmlFIAeyBewXHXaDARurxwl6HTZ3OLKyIo%2FpxrQ1kBhX%2B6gUJNVoAC0pHFgClIn0dVqVuZ05Vm5rDKD5retNJwyNrXJL8mVPI8PttLPtbgqKh%2BSJ%2FfbkrSAgeL2xMfSXStVpJYCewcxZMTuncaA6PUYp3bfiI6I8eTswGNdb6VGpYMu2jMp%2FabANds1QKLazyNQd%2FLZh5hx2MMG2oplCZn4j7sZbdD3f0N%2FWfSTFV3UF5ehTB6dgqCe%2BuTzhr2T23XFdehyozTkHy%2B9Zq80qR48hOqhQdaAiFR9TE9I8iyJ9H5mdUjObto36jKPDjE%2BPjqks%2FCCZZ%2FRU1uDWGtuNKRc0qpkFoWHtQBW0Vip9utmyCXTVW8y5Z0LsEuzjcovDnSHYdrNlBtKxQvKLnSl2FfmoOxbOVXmXgL%2B9lA0cIEuK8pLEw9%2B7YvQY6pgGXyJDJfAWLSfsH%2Ftye0GKYdhCCvlQEormCpznPQlBpY3k7KhwlgveuxcihuJQZiXI%2FSk%2FtFFCStyaAORnFR3vj9c1at8n3StEkFTK2r67a5xz%2Bs8iIAk4d2qtIG3tqdlzAwgVKkCaKgGlE25YMA4o6pjTNiiX9V5MEeIGfxX2BrjW0otnzyUK9fMdtB6t4zesSskv9G6DXGyMPT2bb3f9FIw%2B8qDD8&X-Amz-Signature=d4d047c0ad44e0d7209d7e9063ce80e4e288b66a620b55d9f9280b54217bf823&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSAXC4T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTjcCY5B1hBxQ0ZYuMSeuZa39cJuuzZTquOaMRuHijEAiAGIEFvSgFW1onytGnXq%2FTJrv0nn4XateNuNAPg0rS%2FViqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2H5S4okDvlRD6pL3KtwDt6Wn3Gb%2FpZuRjvvr906SGG5dgjGwijREKKqWucuDYFuufCqKOuSsN77d09arfLX9mXE5woJtX4I0oBvL%2B4YsbeWLzr5pVq1dVvmPneoWWybPkSyBZM0Q%2FvHte7urPHRZFnfKDrNa3qXyChiHqOA%2FbMAdFR%2F8tSG0wc8owA%2B8RNR4ZulR8pY%2BmuVTH0Q8QyqujKOzSb2BIVOBmlFIAeyBewXHXaDARurxwl6HTZ3OLKyIo%2FpxrQ1kBhX%2B6gUJNVoAC0pHFgClIn0dVqVuZ05Vm5rDKD5retNJwyNrXJL8mVPI8PttLPtbgqKh%2BSJ%2FfbkrSAgeL2xMfSXStVpJYCewcxZMTuncaA6PUYp3bfiI6I8eTswGNdb6VGpYMu2jMp%2FabANds1QKLazyNQd%2FLZh5hx2MMG2oplCZn4j7sZbdD3f0N%2FWfSTFV3UF5ehTB6dgqCe%2BuTzhr2T23XFdehyozTkHy%2B9Zq80qR48hOqhQdaAiFR9TE9I8iyJ9H5mdUjObto36jKPDjE%2BPjqks%2FCCZZ%2FRU1uDWGtuNKRc0qpkFoWHtQBW0Vip9utmyCXTVW8y5Z0LsEuzjcovDnSHYdrNlBtKxQvKLnSl2FfmoOxbOVXmXgL%2B9lA0cIEuK8pLEw9%2B7YvQY6pgGXyJDJfAWLSfsH%2Ftye0GKYdhCCvlQEormCpznPQlBpY3k7KhwlgveuxcihuJQZiXI%2FSk%2FtFFCStyaAORnFR3vj9c1at8n3StEkFTK2r67a5xz%2Bs8iIAk4d2qtIG3tqdlzAwgVKkCaKgGlE25YMA4o6pjTNiiX9V5MEeIGfxX2BrjW0otnzyUK9fMdtB6t4zesSskv9G6DXGyMPT2bb3f9FIw%2B8qDD8&X-Amz-Signature=8c9742ffedb20d18af99b0c27b7314be4a6de8aa55fdcfe5cb9884e4d7b61c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
