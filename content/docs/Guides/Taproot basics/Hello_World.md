---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-02T12:56:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-09-02T12:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

imports all the libraries that will be used

```cpp
#include <iostream>// allows printing
#include <stdio.h>// allows da gud stuff ;)
#include "pico/stdlib.h" // the pico-sdk lib

```

Sets up the pico to be able to print

```cpp
stdio_init_all();

```

2 ways of Printing Hello world

```cpp
std::cout << "hello world" << std::endl; // c++ style print
printf("hello world\\n");//c style print

```

### Code:

```cpp
#include <cmath>
#include "stdio.h"
// #include "/home/agmui/cs/Robomasters/MCBV2/MCB-project/taproot/modm/ext/printf/printf.h"
#include "tap/communication/serial/uart_terminal_device.hpp"

#include "drivers_singleton.hpp"
#include "tap/board/board.hpp"
#include "tap/communication/serial/uart.hpp"
#include "tap/communication/gpio/leds.hpp"

using namespace tap::communication::serial;

static tap::arch::PeriodicMicroTimer RunTimer(
1000000);  // Don't ask me why. This only works as a global. #Certified Taproot Moment

static constexpr enum tap::communication::serial::Uart::UartPort print_port = tap::communication::serial::Uart::UartPort::Uart1;

int main()
{
src::Drivers* drivers = src::DoNotUse_getDrivers();

Board::initialize();

UartTerminalDevice ter(drivers);
modm::IOStream s(ter);

drivers->uart.init<print_port, 115200>();
drivers->leds.init();

while (1)
{
drivers->leds.set(tap::gpio::Leds::Blue, false);

if (RunTimer.execute())
{  // Calling this function every 10 us at max
drivers->leds.set(tap::gpio::Leds::Green, true);

// char buf[] = "hi\n";
// char buf[256];
float x = 1.0;
// snprintf(buf, 13,"x: %f\n", x);
// drivers->uart.write(print_port, reinterpret_cast<uint8_t*>(buf), strlen(buf));

// ter.write("hi\n");
s.printf("hi2 %f\n", x);




}
}
return 0;
}

```

{{< alert context="info" text="to upload to the pico press `ctrl+shift+B`" />}}

TODO: talk about Wokwi

## Common issues:

- 
- 
