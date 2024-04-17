---
sys:
  pageId: "7a366b1b-e121-4ad8-95f6-43e5612c5d2b"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T05:50:00.000Z"
  propFilepath: "docs/Guides/Low_Level_demos/pico_to_pico.md"
title: "pico_to_pico"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 165
toc: false
icon: ""
---

can2040 [API](https://github.com/KevinOConnor/can2040/blob/master/docs/API.md)

pico_transmit.cpp

```c++
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/pio.h"
extern "C"
{
#include "can2040.h"
}
#include "RP2040.h"

typedef struct can2040_msg CANMsg;
static struct can2040 cbus;

static void
can2040_cb(struct can2040 *cd, uint32_t notify, struct can2040_msg *msg)
{
}

static void
PIOx_IRQHandler(void)
{
    can2040_pio_irq_handler(&cbus);
}

void canbus_setup(void)
{
    uint32_t pio_num = 0;
    uint32_t sys_clock = 125000000, bitrate = 500000;
    uint32_t gpio_rx = 4, gpio_tx = 5;

    // Setup canbus
    can2040_setup(&cbus, pio_num);
    can2040_callback_config(&cbus, can2040_cb);

    // Enable irqs
    irq_set_exclusive_handler(PIO0_IRQ_0_IRQn, PIOx_IRQHandler);
    NVIC_SetPriority(PIO0_IRQ_0_IRQn, 1);
    NVIC_EnableIRQ(PIO0_IRQ_0_IRQn);

    // Start canbus
    can2040_start(&cbus, sys_clock, bitrate, gpio_rx, gpio_tx);
}

const char *pilk = "pilk";
int main()
{
    stdio_init_all();
    canbus_setup();

    const uint LED_PIN = PICO_DEFAULT_LED_PIN;
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true)
    {
        CANMsg msg = {0};
        msg.dlc = 8;
        msg.id = 0x200;
        // clear buffer
        msg.data[0] = 0x00;
        msg.data[1] = 0x00;
        msg.data[2] = 0x00;
        msg.data[3] = 0x00;
        msg.data[4] = 0x00;
        msg.data[5] = 0x00;
        msg.data[6] = 0x00;
        msg.data[7] = 0x00;

        for (int i = 0; i < 5; i++)
        {
            msg.data[i] = (int)*(pilk + i);
        }

        int res = can2040_transmit(&cbus, &msg);
        printf("Sending! PILK returned: %d\\n", res);

        // printf("LED ON!\\n");
        gpio_put(LED_PIN, 1);
        sleep_ms(250);
        // printf("LED OFF!\\n");
        gpio_put(LED_PIN, 0);
        sleep_ms(250);
    }

    return 0;
}


```

pico_receive.cpp

```c++
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/pio.h"
extern "C"
{
#include "can2040.h"
}
#include "RP2040.h"

typedef struct can2040_msg CANMsg;
static struct can2040 cbus;

static void
can2040_cb(struct can2040 *cd, uint32_t notify, struct can2040_msg *msg)
{
    if (notify == CAN2040_NOTIFY_RX)
    {
        printf("msg read: ");
        printf("%s\\n", msg->data);
    }
}

static void
PIOx_IRQHandler(void)
{
    can2040_pio_irq_handler(&cbus);
}

void canbus_setup(void)
{
    uint32_t pio_num = 0;
    uint32_t sys_clock = 125000000, bitrate = 500000;
    uint32_t gpio_rx = 4, gpio_tx = 5;

    // Setup canbus
    can2040_setup(&cbus, pio_num);
    can2040_callback_config(&cbus, can2040_cb);

    // Enable irqs
    irq_set_exclusive_handler(PIO0_IRQ_0_IRQn, PIOx_IRQHandler);
    NVIC_SetPriority(PIO0_IRQ_0_IRQn, 1);
    NVIC_EnableIRQ(PIO0_IRQ_0_IRQn);

    // Start canbus
    can2040_start(&cbus, sys_clock, bitrate, gpio_rx, gpio_tx);
}

int main()
{
    stdio_init_all();
    canbus_setup();

    const uint LED_PIN = PICO_DEFAULT_LED_PIN;
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true)
    {
        printf("waiting...\\n");

        // printf("LED ON!\\n");
        gpio_put(LED_PIN, 1);
        sleep_ms(250);
        // printf("LED OFF!\\n");
        gpio_put(LED_PIN, 0);
        sleep_ms(250);
        // sleep_ms(1000);
    }

    return 0;
}


```
