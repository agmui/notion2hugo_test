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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=8e698c018ead04f6830d283e59eb407197b7cfa9ac6998df21538565c12c2bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ADYEDU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHvu%2F2qJKFUiVfOqxuL1nTb5SkCSCJVAS50kgDtL8pgMAiA82yhHTbht5PTYTsMyT%2BkDl4a1PIgkHdP9Xb5TysxzcCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFtf%2BNeIIL%2FYU0YA1KtwDBdr6RPwSpYDh3jLYQ6oxTJTZquath2TiaD0zf0d%2FOtkYgTNSKfrNU28ChxV1IIxCqFldUVHYjeTpEfpLJMJSJY6qd6n6dYR%2FfQwJa0hcx5VGGIBigk7uyH7J%2BsF7aJPKQmBnG3PtcQuZyVz6wn3ttSXq1BkkVNevS52J1xGcqyHZsOegDo52zFgCyZlXCxMpPGXLhzFVnpaH0jaRNvmO9%2FNy63%2BfpbO4vMf2g2Du5Y8ovxzYmsR26ReeTQn9j4fSdSf%2FjLd%2BzqOo4%2FuOazgcssHfltEgUiMioiOMEwo79CG14Mx1TcGqs4Z0EZMEBVBw%2FQALqpHWbwzEZx0gV1vOH7jPgorKiGolG80WclawF6UcUe6%2BKxlmBDZ9Ej9Eqac2Rpvx80h1pD5NNudnSE8WlLZur%2B%2FAnqBl0929K7RW1YFaKRBpbm9qvS5JSGTXH1JWwlpFImLch%2FrX8bBKltnX4K7XN2g43gwuClaDkO1bJ1aEHAcNkcD2DsLHvUZC%2FcC5KUP%2B%2FVa3LNieVRyox4CXpePBF4U7avoaKcPu2zwQ0gIFOsavn%2FDucJoKJ4aF9z8LUehMlwuz30YmnXRh%2B1rOjtMS21QEVX8M5r5GKH31iiS9hfQAi8lEdUA8w9kw3t6AwQY6pgHK1niCjrMBGqUzzddr%2BKDkZz0zshWKL3lo7n%2BEa%2BYGlJ34UsZ9Rks1rGBUpzfmvUTw74udsFLbUFwAfb3LM%2FJ%2FsK1ogwRtAdAGNB1Y84Lt8YL0rDpUKpEC97w3M%2B5uz12Lc1YMMklKE3TLHQCRLTjZyY0lu%2Faahn28CYLhidKrZeTZgOO%2B9Ax78qA23dexKa6Xq%2BDO4jaB49PRSKX9KNGarDASu1o7&X-Amz-Signature=5144d64241b7326c046ae2951fb29016f10a0833ac925c56b12b703f41ea603a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
