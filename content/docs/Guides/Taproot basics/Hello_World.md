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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZRR4A7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDsxUhAY3EEDO8XGknEWt2ciwmwESgHOBfxsmVEBT%2BsaAiBs%2FfKLy20s43jcnHDWwN4GCwmI71UztkKn8DgQ1IDEiir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJaqKuEmqefKeSZJ6KtwDswKrX7fp3Lw6GdLKtxVZYV8aS83jPCTUHaHZ%2B4qOGe9Ym00dvPo7qBWkJv%2Fy6hwfF%2FPhh2vQW7gwhtZlnwTQMDHTZ7%2Bzr2dzZ2zAAF3wjrr72jmtMLk%2BSdWdN%2BCGsY86MVa4bdYxKEO3o8iMh0KiBylqaP7mLNTEc4oEUl3mrrZHLPnu5PBiS8HJu004NQJEUUKlrUJor4kw7hw4M8167NLzIUiYDWKiermSDawOFBrH61X%2FIlvc5I%2BHG%2BODRdGeu87HqlZBOI20aVgNVJGFr8l2qAztDzR8l1TicjyJ0ZFxIVjMnS08OgytS0QEsCp8Twu3Taf3ndbh3uDyKifBFcNNTn1ZZqIx5MzqR%2FskXRy8yT1cOyxeF6007XXT8BVTxM8Kos5rAR8wORrABQVv7cjek7E7hsLZTDDCE0IwUfqEC%2BYJpHA%2FNnIN4TbMcKky4fOku8bmwYa%2BqLJ8B6P8ryUlewxD11Mn4c4ovhcAGfS7IJVuHVETs930BKas%2FinTjJmRtz7Nm%2B0Wt5hnc0B2aa5Znt8Mj03SXhKpP4dlvI6s3lpwNhiidZALNQxOOX6ouTv7C8SzBcJXoNOBfHAgbcQMZcdC0DDUcTWfe6iDt28qrfL%2F8En7h0G1KbcwmeacwwY6pgGsfLa7BniE3b8af4iufdCICs3DOatd0KFclbnrLJlZy%2FR9B6vUVLt8OXIeE3P3RGBJNyKMbE02b%2F7Owzj492mAzsN9M92TqzC0Ffry4WUlelyN1%2BTPvBd%2FHnTFpX6mkJUopeOahoNr6LxJxU0fCO42FjhaRSeqmI3trxMvMplrLB7SKfRWLBDwwmnVuoVKPiDxcyLPdN78nRabqnzEI9FiZCcspbF6&X-Amz-Signature=ab6b964cc660f1d21f7e17f81388d023df5a3461bf9db84770f96007049a8aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZRR4A7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDsxUhAY3EEDO8XGknEWt2ciwmwESgHOBfxsmVEBT%2BsaAiBs%2FfKLy20s43jcnHDWwN4GCwmI71UztkKn8DgQ1IDEiir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJaqKuEmqefKeSZJ6KtwDswKrX7fp3Lw6GdLKtxVZYV8aS83jPCTUHaHZ%2B4qOGe9Ym00dvPo7qBWkJv%2Fy6hwfF%2FPhh2vQW7gwhtZlnwTQMDHTZ7%2Bzr2dzZ2zAAF3wjrr72jmtMLk%2BSdWdN%2BCGsY86MVa4bdYxKEO3o8iMh0KiBylqaP7mLNTEc4oEUl3mrrZHLPnu5PBiS8HJu004NQJEUUKlrUJor4kw7hw4M8167NLzIUiYDWKiermSDawOFBrH61X%2FIlvc5I%2BHG%2BODRdGeu87HqlZBOI20aVgNVJGFr8l2qAztDzR8l1TicjyJ0ZFxIVjMnS08OgytS0QEsCp8Twu3Taf3ndbh3uDyKifBFcNNTn1ZZqIx5MzqR%2FskXRy8yT1cOyxeF6007XXT8BVTxM8Kos5rAR8wORrABQVv7cjek7E7hsLZTDDCE0IwUfqEC%2BYJpHA%2FNnIN4TbMcKky4fOku8bmwYa%2BqLJ8B6P8ryUlewxD11Mn4c4ovhcAGfS7IJVuHVETs930BKas%2FinTjJmRtz7Nm%2B0Wt5hnc0B2aa5Znt8Mj03SXhKpP4dlvI6s3lpwNhiidZALNQxOOX6ouTv7C8SzBcJXoNOBfHAgbcQMZcdC0DDUcTWfe6iDt28qrfL%2F8En7h0G1KbcwmeacwwY6pgGsfLa7BniE3b8af4iufdCICs3DOatd0KFclbnrLJlZy%2FR9B6vUVLt8OXIeE3P3RGBJNyKMbE02b%2F7Owzj492mAzsN9M92TqzC0Ffry4WUlelyN1%2BTPvBd%2FHnTFpX6mkJUopeOahoNr6LxJxU0fCO42FjhaRSeqmI3trxMvMplrLB7SKfRWLBDwwmnVuoVKPiDxcyLPdN78nRabqnzEI9FiZCcspbF6&X-Amz-Signature=66d8a6d948639a08b2787e62989919b9f2897937cc2c0dcf464a8859d1a84e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
