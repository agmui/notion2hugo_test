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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL6R4DF3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx%2BRCF0wFsMRlXcPep6OkVEikT%2Bj%2FS81zeKwUXrOlzRAiB3bb4%2B%2FIkc5e45J7VXT7EMWb0nCBSwX%2Bk6liWo77T9tyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOc0cFKOIPFF0%2BWQ3KtwDesXO3cWyJ4ZL%2FjM%2BWiPbzlkJA5zOWomxfppPsZ3h3Ny3FTH%2BhsnvTAObhm8HY8Mlmv0agWB5Ih2EMckXeNOfh3THD8BUD8gXmfMWgci%2Fn8QsJTqjyZdq2RHB1ONH%2Bynhnv3x6b3y%2F5dWvegMtCkMPwi%2FENGt7vQjIQWJwTXFuDdzhMXL0mvQethwuw%2FDzw1fzWGuNplToh2%2FBFFgfnofuCk78BuU8N07SQuKMGq91zJnY29yQofAmBcktUbTlB6NDiF%2B30p%2BbbUTkysGlAFWx3AdtTwzWG8V5o0FscGzxlZv9g%2FTlti4%2Bv4rf7pn%2FeUE%2FxR4WVAN738M9CN0rXnz344tDyJS5aqd0soIWI2aEo8zh779wh4TqHVwe1rrxyoZ2mM8OAziD7ZbEnCb0%2B02WRB8YDj7ftIwZ7ECk7NW8FgLHTs4AphWo1T4cD4aip0WGA4y8GPJ2SAbSWq%2BfUHmjGRNNrYn6fSSSqcsVhXJ0p8EAs0fF4b1g3GXmuSrXDJpbIG7VCmwjlyQ8papY2t%2FUC1TZA0t6TuIx83V%2FRvs226Kam7XmWGYAGq9AwezfXxkKfp64wdfq3Z8XQ%2BPSjZNU7tC2v3kGD9luK4pAW2M9r58%2BYWGKkmRRNSPcAowqIzPvgY6pgFfIdkx0Oqge%2FVWIKysDLG7Hd2%2FUlzzpjr%2Fwvn7y%2FQsTF6%2BGOZ2UgfOpGiI3vYiSJlxOfzxk%2F6IJ9Uf1JOLC%2FLbFLoN6BDT6y0vFystt5%2BIgG%2BvoQi2Qh7c%2Fo0hgshvraluqyskchZwRKN%2F368N8IxjWNyUR5dQGbmjOEHb%2FNnNG1H48JEcsmOHkUFMhISyP2dOxHhcHYmEM09kMGNJcUdAE6jSQkwt&X-Amz-Signature=7ef3182cad338e8db061fcdda7904aa75a00159f0d4398328a5a6607e1ede0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL6R4DF3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx%2BRCF0wFsMRlXcPep6OkVEikT%2Bj%2FS81zeKwUXrOlzRAiB3bb4%2B%2FIkc5e45J7VXT7EMWb0nCBSwX%2Bk6liWo77T9tyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOc0cFKOIPFF0%2BWQ3KtwDesXO3cWyJ4ZL%2FjM%2BWiPbzlkJA5zOWomxfppPsZ3h3Ny3FTH%2BhsnvTAObhm8HY8Mlmv0agWB5Ih2EMckXeNOfh3THD8BUD8gXmfMWgci%2Fn8QsJTqjyZdq2RHB1ONH%2Bynhnv3x6b3y%2F5dWvegMtCkMPwi%2FENGt7vQjIQWJwTXFuDdzhMXL0mvQethwuw%2FDzw1fzWGuNplToh2%2FBFFgfnofuCk78BuU8N07SQuKMGq91zJnY29yQofAmBcktUbTlB6NDiF%2B30p%2BbbUTkysGlAFWx3AdtTwzWG8V5o0FscGzxlZv9g%2FTlti4%2Bv4rf7pn%2FeUE%2FxR4WVAN738M9CN0rXnz344tDyJS5aqd0soIWI2aEo8zh779wh4TqHVwe1rrxyoZ2mM8OAziD7ZbEnCb0%2B02WRB8YDj7ftIwZ7ECk7NW8FgLHTs4AphWo1T4cD4aip0WGA4y8GPJ2SAbSWq%2BfUHmjGRNNrYn6fSSSqcsVhXJ0p8EAs0fF4b1g3GXmuSrXDJpbIG7VCmwjlyQ8papY2t%2FUC1TZA0t6TuIx83V%2FRvs226Kam7XmWGYAGq9AwezfXxkKfp64wdfq3Z8XQ%2BPSjZNU7tC2v3kGD9luK4pAW2M9r58%2BYWGKkmRRNSPcAowqIzPvgY6pgFfIdkx0Oqge%2FVWIKysDLG7Hd2%2FUlzzpjr%2Fwvn7y%2FQsTF6%2BGOZ2UgfOpGiI3vYiSJlxOfzxk%2F6IJ9Uf1JOLC%2FLbFLoN6BDT6y0vFystt5%2BIgG%2BvoQi2Qh7c%2Fo0hgshvraluqyskchZwRKN%2F368N8IxjWNyUR5dQGbmjOEHb%2FNnNG1H48JEcsmOHkUFMhISyP2dOxHhcHYmEM09kMGNJcUdAE6jSQkwt&X-Amz-Signature=3256b6b0da3ed61a0954c618b95eda5ddef55ea6854c8d5abae06e0fc1d256e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
