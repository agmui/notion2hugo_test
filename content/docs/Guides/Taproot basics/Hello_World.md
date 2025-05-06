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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUA7FBN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd28NKNEBDwbgaG%2BREzHTFQ8FDp8mDET%2FTQ4xppsHJfAIhAJtpeXsdeDCVNBs15kAy1Gn7zmGJfYXKJbRWlZjmMgstKv8DCEwQABoMNjM3NDIzMTgzODA1IgynnUJ8wSJXxhwnJg0q3ANSLCATxi0jFU1lzmhhJWBvKCWZ0%2BPR2iHbZd0qgbOhRIjdoz%2FcPUwv%2BztXYWtx%2FdROWAP%2FnqSvMs5n81l%2FrTvJ%2FljnEE4t1zWuC%2BMoQ4XL3jMb7BRPvLty7SxUSVWIHrXePUqyu5Ft%2FTtpu9sE8fmjYT%2FCAvQ8NCMLI%2B3%2BGwB3rZw%2BULr5MgFgAEbERfzaq1Pbtg5zGXtOgLvh2oOqt2lbtL%2B7fDDqeDZGmQPl4q6fD%2FVH2ft1MxwM%2Bl8Vmd1E7MVQuXnGn0XmglO9%2BCfOVRviniQJD%2F3KaKRMHZJ9iDWJ1%2F%2BbE6MTxxNk6IslIs6WSJKBI26fvXsIaUoE7kH44WzYSUzzXHsJ5C9C01iMOltCNMCdwdgQYbwsFuHkAtuOsnJ1%2F6meMUMs5bMD9wxqRyhRMCQ2aBblbeWHLj%2BUr0RWtXfmN9BaK%2Bw15oI87BjeJWv2c4S8SWGt6WLG3Ps%2BcXCNl0XKhFsmN%2Brky6gYrJ4WcFqNvaNafnLcXQWO5aJDUTArqudsEh6fHvgnXj%2Fd1QrdXzVzgbjCRHwXVwDAQQoT%2B8EpYjchTeAGc2MJQ2gp8XY4Q0hn9oFyrEVZ%2BG%2FT%2FlEr8nG1ID%2FpcjU12E4QKy6nxJjva4ITxo%2F%2FFoPLIDCGtOnABjqkAWwpHkeUkfwG2MKgFORbYzKOUZqr5fQQFdnKlj7eZmjD1GahQMOznvJ9bMgVNx7%2FWo5fqk7HAryx35RAWG8ie5lHYS14yg8WW7bPozIk841mkETEeqYbSM4TmKDvfidOI7TMVBUpkjsJ37duIaLdl1ioL0MRJlrQESuC9%2FGYXtiylRllqUI3g%2FnD4euQizHWmCvTiVQndVBco7CntZAd8NNht%2BbA&X-Amz-Signature=4f26a7b36df17c8cda490840c8ce2bcd9a8a2e8d1f560ad968bb0fc9a436e664&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUA7FBN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd28NKNEBDwbgaG%2BREzHTFQ8FDp8mDET%2FTQ4xppsHJfAIhAJtpeXsdeDCVNBs15kAy1Gn7zmGJfYXKJbRWlZjmMgstKv8DCEwQABoMNjM3NDIzMTgzODA1IgynnUJ8wSJXxhwnJg0q3ANSLCATxi0jFU1lzmhhJWBvKCWZ0%2BPR2iHbZd0qgbOhRIjdoz%2FcPUwv%2BztXYWtx%2FdROWAP%2FnqSvMs5n81l%2FrTvJ%2FljnEE4t1zWuC%2BMoQ4XL3jMb7BRPvLty7SxUSVWIHrXePUqyu5Ft%2FTtpu9sE8fmjYT%2FCAvQ8NCMLI%2B3%2BGwB3rZw%2BULr5MgFgAEbERfzaq1Pbtg5zGXtOgLvh2oOqt2lbtL%2B7fDDqeDZGmQPl4q6fD%2FVH2ft1MxwM%2Bl8Vmd1E7MVQuXnGn0XmglO9%2BCfOVRviniQJD%2F3KaKRMHZJ9iDWJ1%2F%2BbE6MTxxNk6IslIs6WSJKBI26fvXsIaUoE7kH44WzYSUzzXHsJ5C9C01iMOltCNMCdwdgQYbwsFuHkAtuOsnJ1%2F6meMUMs5bMD9wxqRyhRMCQ2aBblbeWHLj%2BUr0RWtXfmN9BaK%2Bw15oI87BjeJWv2c4S8SWGt6WLG3Ps%2BcXCNl0XKhFsmN%2Brky6gYrJ4WcFqNvaNafnLcXQWO5aJDUTArqudsEh6fHvgnXj%2Fd1QrdXzVzgbjCRHwXVwDAQQoT%2B8EpYjchTeAGc2MJQ2gp8XY4Q0hn9oFyrEVZ%2BG%2FT%2FlEr8nG1ID%2FpcjU12E4QKy6nxJjva4ITxo%2F%2FFoPLIDCGtOnABjqkAWwpHkeUkfwG2MKgFORbYzKOUZqr5fQQFdnKlj7eZmjD1GahQMOznvJ9bMgVNx7%2FWo5fqk7HAryx35RAWG8ie5lHYS14yg8WW7bPozIk841mkETEeqYbSM4TmKDvfidOI7TMVBUpkjsJ37duIaLdl1ioL0MRJlrQESuC9%2FGYXtiylRllqUI3g%2FnD4euQizHWmCvTiVQndVBco7CntZAd8NNht%2BbA&X-Amz-Signature=a0f1cd1a6d5b35ba974e9e96a5096328d949e146c5475e4d5157313b3c1329cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
