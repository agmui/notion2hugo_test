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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2LN4PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDBoQHosLVc8dZUggl%2FyPGLypPo04fzPidEA%2BWAYwBdbgIgSnNrV75tCU6CPA9rh6iBCI7S7eBDu97bhvKZU8Qa%2B0UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCacF8J0w0pxOLkfCrcA6sRWOi73AP6Et%2FeZJN%2BJnshptHn7Nl%2Fvs7xi1bVoZ9Pwh9GklT0esd%2Bi4mIVDjTt8lkb8RfxTG2GfV%2BtgrsP0YfVd4MqNabi05irMbtM3g110w%2FRiQcPwdxiUJNA0YhFIBn0O3sj03QefPJZfGS1M0YVZgCWqHfk30kk%2B9J0yVT%2Fx4awVYEi5UKVkLkJkr8wlRjwZZvlIe4j3RLXbL4P4BUJMejynBxMqz6AaaS77tE0HSneRg4z1FuMcfbAf21f0mLTbMqoUZWqZ7yoKFU5AtsFq4gR3HeQ6%2FlwbRyMBQdbQUEb0JyadELlp6I6jLWtiIiilPKIfdU0kkYJaen%2BIxuSkEPTSgbeL3NKKG1TPz1RwbfSxjmASmqDRT4q2cLo33evfQWA0DeHuCOVA8KSU6chzGzsrYACOjP6c9DZz2WZKZ3ZPde0%2FyQ4ftlo6tNmSDM0IcdhfNTrdCtRAjMVn4MfVewWsQI0QuNpL5p7wGNCjcsTfECEAUkn3PTAUKqwg3xA%2F2S8RpoWI9NTc8RkisqDSVuVqkO5QCEWGkj5l6soPTas%2FbwCnZmAulVX62nc7DmQHT2N6%2Fr4F0sfJ8TljJvesi1vJNMToHMPdpb4M%2BggsUMRdfyZIF5m94%2BMPq4jr4GOqUBDTDBPbjuzKxuxqmDbodPl5PIj751tyPhLoqbP%2FrCCS3ER4K4K5qwa3u1hwiX2MypPvOuLBP%2BNysUXb9nT2GYlVFfzRhB1EKn7y986CbkbbhiO9nTCq4op7bHlKNUTXcFPSQXW2101kxJLqSYSy1HOHycfdF9ZhJkIa1Pt%2F2EqaJ%2FLDrNFUcx7h7lIrCvd5dqaYk3a4xX%2BB2m202NcV8%2FS0z22lYG&X-Amz-Signature=e2c379e8034aadec497ce1176e469d510050b59feef779fd6a14ac8687836b45&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2LN4PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDBoQHosLVc8dZUggl%2FyPGLypPo04fzPidEA%2BWAYwBdbgIgSnNrV75tCU6CPA9rh6iBCI7S7eBDu97bhvKZU8Qa%2B0UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCacF8J0w0pxOLkfCrcA6sRWOi73AP6Et%2FeZJN%2BJnshptHn7Nl%2Fvs7xi1bVoZ9Pwh9GklT0esd%2Bi4mIVDjTt8lkb8RfxTG2GfV%2BtgrsP0YfVd4MqNabi05irMbtM3g110w%2FRiQcPwdxiUJNA0YhFIBn0O3sj03QefPJZfGS1M0YVZgCWqHfk30kk%2B9J0yVT%2Fx4awVYEi5UKVkLkJkr8wlRjwZZvlIe4j3RLXbL4P4BUJMejynBxMqz6AaaS77tE0HSneRg4z1FuMcfbAf21f0mLTbMqoUZWqZ7yoKFU5AtsFq4gR3HeQ6%2FlwbRyMBQdbQUEb0JyadELlp6I6jLWtiIiilPKIfdU0kkYJaen%2BIxuSkEPTSgbeL3NKKG1TPz1RwbfSxjmASmqDRT4q2cLo33evfQWA0DeHuCOVA8KSU6chzGzsrYACOjP6c9DZz2WZKZ3ZPde0%2FyQ4ftlo6tNmSDM0IcdhfNTrdCtRAjMVn4MfVewWsQI0QuNpL5p7wGNCjcsTfECEAUkn3PTAUKqwg3xA%2F2S8RpoWI9NTc8RkisqDSVuVqkO5QCEWGkj5l6soPTas%2FbwCnZmAulVX62nc7DmQHT2N6%2Fr4F0sfJ8TljJvesi1vJNMToHMPdpb4M%2BggsUMRdfyZIF5m94%2BMPq4jr4GOqUBDTDBPbjuzKxuxqmDbodPl5PIj751tyPhLoqbP%2FrCCS3ER4K4K5qwa3u1hwiX2MypPvOuLBP%2BNysUXb9nT2GYlVFfzRhB1EKn7y986CbkbbhiO9nTCq4op7bHlKNUTXcFPSQXW2101kxJLqSYSy1HOHycfdF9ZhJkIa1Pt%2F2EqaJ%2FLDrNFUcx7h7lIrCvd5dqaYk3a4xX%2BB2m202NcV8%2FS0z22lYG&X-Amz-Signature=a9cd51680320541d516edb3008345a199da0d10933c75856448b293b45fd598c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
