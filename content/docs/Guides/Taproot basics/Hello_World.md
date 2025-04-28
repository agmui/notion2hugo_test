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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEGOHYS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAxyf1ask5d0ogp0erTDQuNPbN0EpyCI61LqeQI2j56QIhAPNhAOBv0JsbxrlmhhQnmCpLKO69s%2B7ROyUk5PhObN41Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzKRyv0AmJBXPkjVYQq3ANBUebZ4qSc3Qgb8h7sddEgDpXmKfjHfDKvjvsUS%2BhEJxmV%2F75QsfxD9nLPyO7UZxw6DBo39PSzkxzgOHYnf7A3lE9HfnQ2MmZvxAPiErIsKJ5ghV6QD6HRlACsBpG3wy2iLIhXeGtQpF1Oo4vzv7muNtJuUm3RW1OPBbayr%2Br%2FqVpz%2FeOK7UZtJ9uga4%2B4HAQ6hJj4t%2BoKYWInekcXHMcOGxtsmB%2F2BL838e5FqR9EBf4bbXn0kXri0CkQRGte26HjutJ%2B5g%2Fzf9MT8d8RaplFK94dk1J21e4sdAcP306Sv7zSdbeEdabfnFP%2F70dsFDCZty7h1pMFpa5Hb9Ewth%2FEYyiUzhFGRWZuXvE7fpZA%2BuZzXnLZ5QeWKid%2B2KM6ghg8D0oVdYvH271geZGdUChFcm3Kq0zHX%2Bu2zubDtxLco37t3m6uFSL%2FdAiMaANtVEuBRWW7dmbnGfusPVqKcNnJTdzFxKnMub2FjgL64J%2FK2%2B2K6gNrEHDU44uxb1C%2Bu3%2FtpU85DKu9%2FWBlr%2FFHaKpQInLHeln4cEvtKkH517ecKR%2Bgd7oAvNqvTgL8UeAPiRwQbxFkz7TqpgA%2BGs7pJ7fWt9Pk6ghZaUnc3GtPMWAeUWqnTBgfMRlhfUbayzDsorvABjqkAVcThc1d8%2BG9jynE1bHYeD4Najq5rxuXPnOrr2m7q6e4%2Bttc0kr3U4EzOUO5cGwAH4durbhQ49oSsQz5tzIIhdOIGhk9PAYaUsiVan1rZZwe0mwFiiwdDFxSfVu%2FUwYrIl4Je3TGBHFPFnSYU151HaI0n34lg34M9teA2M3D8uSSM9pdclNxtXz4YTcEo3zpXTGE8qMMcRUUxRZDCsXuUloHTXLF&X-Amz-Signature=b7ad6ed53e522a0b7949bc53092f775b631ddb4db6cb65a310758cd3e214af0b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEGOHYS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAxyf1ask5d0ogp0erTDQuNPbN0EpyCI61LqeQI2j56QIhAPNhAOBv0JsbxrlmhhQnmCpLKO69s%2B7ROyUk5PhObN41Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzKRyv0AmJBXPkjVYQq3ANBUebZ4qSc3Qgb8h7sddEgDpXmKfjHfDKvjvsUS%2BhEJxmV%2F75QsfxD9nLPyO7UZxw6DBo39PSzkxzgOHYnf7A3lE9HfnQ2MmZvxAPiErIsKJ5ghV6QD6HRlACsBpG3wy2iLIhXeGtQpF1Oo4vzv7muNtJuUm3RW1OPBbayr%2Br%2FqVpz%2FeOK7UZtJ9uga4%2B4HAQ6hJj4t%2BoKYWInekcXHMcOGxtsmB%2F2BL838e5FqR9EBf4bbXn0kXri0CkQRGte26HjutJ%2B5g%2Fzf9MT8d8RaplFK94dk1J21e4sdAcP306Sv7zSdbeEdabfnFP%2F70dsFDCZty7h1pMFpa5Hb9Ewth%2FEYyiUzhFGRWZuXvE7fpZA%2BuZzXnLZ5QeWKid%2B2KM6ghg8D0oVdYvH271geZGdUChFcm3Kq0zHX%2Bu2zubDtxLco37t3m6uFSL%2FdAiMaANtVEuBRWW7dmbnGfusPVqKcNnJTdzFxKnMub2FjgL64J%2FK2%2B2K6gNrEHDU44uxb1C%2Bu3%2FtpU85DKu9%2FWBlr%2FFHaKpQInLHeln4cEvtKkH517ecKR%2Bgd7oAvNqvTgL8UeAPiRwQbxFkz7TqpgA%2BGs7pJ7fWt9Pk6ghZaUnc3GtPMWAeUWqnTBgfMRlhfUbayzDsorvABjqkAVcThc1d8%2BG9jynE1bHYeD4Najq5rxuXPnOrr2m7q6e4%2Bttc0kr3U4EzOUO5cGwAH4durbhQ49oSsQz5tzIIhdOIGhk9PAYaUsiVan1rZZwe0mwFiiwdDFxSfVu%2FUwYrIl4Je3TGBHFPFnSYU151HaI0n34lg34M9teA2M3D8uSSM9pdclNxtXz4YTcEo3zpXTGE8qMMcRUUxRZDCsXuUloHTXLF&X-Amz-Signature=d93feb68153170f17b1305d14092651f34736994b2a6dc2d55cee4eef1bf83f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
