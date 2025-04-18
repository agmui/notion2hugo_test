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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKT3BVTV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyW2wnLFz5J1IebksaDgvkUdiqXVYEL%2FKuVcwl5HhWjAIhAM9hYbvANyJBzlMa8Pq639nW%2Ba0Gw4cVsgkt8oeND0TiKv8DCHYQABoMNjM3NDIzMTgzODA1IgztFf%2F98FBQMR2T18Mq3AOGqS5POh%2F2SrUMjIl506gcmsf0ECsRWUoSl9IgX76mfkoJfzd%2Fv64KLjj9fbRBOVEbi04G4JpAbUP%2Be03fS6wOaC3r18E1y5%2FezCJXm59tIFuVDC61t4MZ%2BF4JdxcL6CDb66ih6zJsfxM%2FNzO61BZgHdNshx1wgiU9ITyD7yVewBlWumhL3ECNWVTUTOw%2BvKrZgqSy7hNUYUvoc3OsCt6JXwcDe2KXJiJFu5%2FK3GXln9ZkAvEHuCTgbvXsmOI65Pw08xvvi1iVXOqXiHum%2Fw8br5TTiGvzUeLdChlRrSh5V7VW50zywYupV8j4%2FJt9HrLZqRAx%2FUuVYCTdhpiM%2BmWQh9ODA1jolHPTFu5uQjHqLdgDjjDRnc5Sy1xtXRIlOXQ%2FocFm0ZXLCWDy4KgsEOfHRQ0Hy%2FGUaIiSeOm%2FNvhf%2FzgyF8WtcTKs4LFsK1jVLFFlzW4MGz2YxFbKjCCBj1J4XvF%2B7f%2FGxIlOPoHy6SfxgAA7CYqOWBUFZtPBTXZV7WyRoQIckOOY62DbK%2BPnItk%2Bjgpr5yXU001FtgehaNCn2iRz20ZdTVdTlQM0MoWx%2F0JjcjDuPF5N28cvT2Y6g1OTNUYOsiqu1k67Ac8rb1gdRtVnPBL74tOd1EGWYTDxjYnABjqkAQgGNcTIm9c8WOo%2BhRS7%2Bz%2F%2F2X42W4l2Zs3UlLQDBCGjQncmPed3sZuy0FSn05Jjmy8h1W%2FiW5gLrU%2F2piRQPTbAAgaMt79LZp%2F1Aiai7fVeheCA%2FeJoucTlpthLyJMfXHO9li9FHLNzK1NpaqaGzZvvMBq7T%2BJKq3bDPFv2wEopFtvMyPr9gXZNV2UuyiYzpIZ%2FjAllFaOTTs15be3aDoEbhKe%2B&X-Amz-Signature=f749cec032e31410d5a07bedb7ea0fe5dbab0be7d7ed3be248607d486e5e822d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKT3BVTV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyW2wnLFz5J1IebksaDgvkUdiqXVYEL%2FKuVcwl5HhWjAIhAM9hYbvANyJBzlMa8Pq639nW%2Ba0Gw4cVsgkt8oeND0TiKv8DCHYQABoMNjM3NDIzMTgzODA1IgztFf%2F98FBQMR2T18Mq3AOGqS5POh%2F2SrUMjIl506gcmsf0ECsRWUoSl9IgX76mfkoJfzd%2Fv64KLjj9fbRBOVEbi04G4JpAbUP%2Be03fS6wOaC3r18E1y5%2FezCJXm59tIFuVDC61t4MZ%2BF4JdxcL6CDb66ih6zJsfxM%2FNzO61BZgHdNshx1wgiU9ITyD7yVewBlWumhL3ECNWVTUTOw%2BvKrZgqSy7hNUYUvoc3OsCt6JXwcDe2KXJiJFu5%2FK3GXln9ZkAvEHuCTgbvXsmOI65Pw08xvvi1iVXOqXiHum%2Fw8br5TTiGvzUeLdChlRrSh5V7VW50zywYupV8j4%2FJt9HrLZqRAx%2FUuVYCTdhpiM%2BmWQh9ODA1jolHPTFu5uQjHqLdgDjjDRnc5Sy1xtXRIlOXQ%2FocFm0ZXLCWDy4KgsEOfHRQ0Hy%2FGUaIiSeOm%2FNvhf%2FzgyF8WtcTKs4LFsK1jVLFFlzW4MGz2YxFbKjCCBj1J4XvF%2B7f%2FGxIlOPoHy6SfxgAA7CYqOWBUFZtPBTXZV7WyRoQIckOOY62DbK%2BPnItk%2Bjgpr5yXU001FtgehaNCn2iRz20ZdTVdTlQM0MoWx%2F0JjcjDuPF5N28cvT2Y6g1OTNUYOsiqu1k67Ac8rb1gdRtVnPBL74tOd1EGWYTDxjYnABjqkAQgGNcTIm9c8WOo%2BhRS7%2Bz%2F%2F2X42W4l2Zs3UlLQDBCGjQncmPed3sZuy0FSn05Jjmy8h1W%2FiW5gLrU%2F2piRQPTbAAgaMt79LZp%2F1Aiai7fVeheCA%2FeJoucTlpthLyJMfXHO9li9FHLNzK1NpaqaGzZvvMBq7T%2BJKq3bDPFv2wEopFtvMyPr9gXZNV2UuyiYzpIZ%2FjAllFaOTTs15be3aDoEbhKe%2B&X-Amz-Signature=47d59ec3d3be51c1c8f421d6f6ae7aa69d53fcd871300d00cafbbaa4397e0a54&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
