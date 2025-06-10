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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5EGTRD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdNhTVC3f%2B7hdnoIuKdmnZLLk%2BigoCMV9x9kQw8EzTxgIhAJy7QAZgPwCNk9zzyURSI8XX%2BNZVHuP2p2K6tkMzEvPOKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycmTDJ4he7D6kN4Soq3APgbGRzFEDFnUtXZzStM0X9%2Bu0BvDdlXbp7Sd5hCgBsvC8s3BPTr6mbS3Y27jAmSuGWvkk7d3GARAPfyxiLt4vT2mMXpAeKeOKwrnanYYCK2JV6VGM8KsYuyoMXMjN%2F8M6Z6FZj9%2BOmfMOSiXdKzKHOyq0FsjNo9R4R5Y6NjosSZ%2BMBhCegprxWOwe6I%2FGQ1tBvN1wWQ0QiOkSqLg0n5iZPsWT6fRDWUoDzu%2FjXov05QutdTfG65cnQC4F5AuAgtU1svli7phg7W5QlRrqr9eAAn0vSvD9RPjhUYrP91pMiZ1xMRbbI0a8iIRQ9W8iLMh7DLck1eCjP1JbqDXGk13xakiSQMeP75Mab3KOYpqhmGrLJXs8J%2BhIzhoxGb9%2FE2e6ALoVNdr%2FA6uO8e%2BF7ZhiFiRJPA72XsmfUPap3Ad2TN%2B2R5vSAXsYCJQuJE4uZSp%2FFrpNCyvdOrTkTYlv3hwlUcDULM8bgnQt6ZU0VSNUPnQyDsZhO%2FZgqeYaFlDDUYbo0jdnG9vdKJwO4PzoYGx2AVegKXS3CBlfIUL8UygPpo28ejEoQdsIiQo%2BkfNvfUvCKFpDA9hM%2B1OawTT5P69JF3Dre0AYmKS1nb5L15%2BZDuQqGbX%2Be1MMz2hKY2jCvs6LCBjqkAVQDNN%2FS3%2BibfU8wCvna5KsU9zLWaK48o67%2Fx6fP1YTzG2rNK5k2HdjXyc6bOsbn2EE4KjWxyAmhT%2FVxA9fMyK6LEsF3UF4FciOkUxvc3EU9Yuevyw4LxO0wzhukunVv25RvMwqHP3Hm8mTXVQ4vYriyDStJYYWwnYzq%2BNW5JoTx9toXNGXH0uhik%2FkVBIlHeDbnNjYsUBFy1MWTCakWzR1xEB3W&X-Amz-Signature=37e4090199123d31a525cd091ca0364ab23f7f9bc6e2eb1f68da7f3a606c654b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5EGTRD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdNhTVC3f%2B7hdnoIuKdmnZLLk%2BigoCMV9x9kQw8EzTxgIhAJy7QAZgPwCNk9zzyURSI8XX%2BNZVHuP2p2K6tkMzEvPOKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycmTDJ4he7D6kN4Soq3APgbGRzFEDFnUtXZzStM0X9%2Bu0BvDdlXbp7Sd5hCgBsvC8s3BPTr6mbS3Y27jAmSuGWvkk7d3GARAPfyxiLt4vT2mMXpAeKeOKwrnanYYCK2JV6VGM8KsYuyoMXMjN%2F8M6Z6FZj9%2BOmfMOSiXdKzKHOyq0FsjNo9R4R5Y6NjosSZ%2BMBhCegprxWOwe6I%2FGQ1tBvN1wWQ0QiOkSqLg0n5iZPsWT6fRDWUoDzu%2FjXov05QutdTfG65cnQC4F5AuAgtU1svli7phg7W5QlRrqr9eAAn0vSvD9RPjhUYrP91pMiZ1xMRbbI0a8iIRQ9W8iLMh7DLck1eCjP1JbqDXGk13xakiSQMeP75Mab3KOYpqhmGrLJXs8J%2BhIzhoxGb9%2FE2e6ALoVNdr%2FA6uO8e%2BF7ZhiFiRJPA72XsmfUPap3Ad2TN%2B2R5vSAXsYCJQuJE4uZSp%2FFrpNCyvdOrTkTYlv3hwlUcDULM8bgnQt6ZU0VSNUPnQyDsZhO%2FZgqeYaFlDDUYbo0jdnG9vdKJwO4PzoYGx2AVegKXS3CBlfIUL8UygPpo28ejEoQdsIiQo%2BkfNvfUvCKFpDA9hM%2B1OawTT5P69JF3Dre0AYmKS1nb5L15%2BZDuQqGbX%2Be1MMz2hKY2jCvs6LCBjqkAVQDNN%2FS3%2BibfU8wCvna5KsU9zLWaK48o67%2Fx6fP1YTzG2rNK5k2HdjXyc6bOsbn2EE4KjWxyAmhT%2FVxA9fMyK6LEsF3UF4FciOkUxvc3EU9Yuevyw4LxO0wzhukunVv25RvMwqHP3Hm8mTXVQ4vYriyDStJYYWwnYzq%2BNW5JoTx9toXNGXH0uhik%2FkVBIlHeDbnNjYsUBFy1MWTCakWzR1xEB3W&X-Amz-Signature=f2b4862f24baaab53861a3eebb0feb143a6dac4884f32ba44766bcc08c3473f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
