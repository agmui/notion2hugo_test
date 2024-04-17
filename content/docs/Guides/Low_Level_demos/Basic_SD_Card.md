---
sys:
  pageId: "f28bce47-11a9-4a6c-a2f7-cd1b2baf9982"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T04:41:00.000Z"
  propFilepath: "docs/Guides/Low_Level_demos/Basic_SD_Card.md"
title: "Basic_SD_Card"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
toc: false
icon: ""
---

from [simple_example](https://github.com/carlk3/no-OS-FatFS-SD-SPI-RPi-Pico/tree/master/simple_example)

API for refrance: [no-OS-FatFS-SD-SPI-RPi-Pico](https://github.com/carlk3/no-OS-FatFS-SD-SPI-RPi-Pico#using-the-application-programming-interface)

hw_config.c

```c++
/* hw_config.cCopyright 2021 Carl John Kugler IIILicensed under the Apache License, Version 2.0 (the License); you may not usethis file except in compliance with the License. You may obtain a copy of theLicense at   http://www.apache.org/licenses/LICENSE-2.0Unless required by applicable law or agreed to in writing, software distributedunder the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES ORCONDITIONS OF ANY KIND, either express or implied. See the License for thespecific language governing permissions and limitations under the License.*//*This file should be tailored to match the hardware design.There should be one element of the spi[] array for each hardware SPI used.There should be one element of the sd_cards[] array for each SD card slot.The name is should correspond to the FatFs "logical drive" identifier.(See http://elm-chan.org/fsw/ff/doc/filename.html#vol)The rest of the constants will depend on the type ofsocket, which SPI it is driven by, and how it is wired.*/#include <string.h>//#include "my_debug.h"//#include "hw_config.h"//#include "ff.h" /* Obtains integer types *///#include "diskio.h" /* Declarations of disk functions *//*This example assumes the following hardware configuration:|       | SPI0  | GPIO  | Pin   | SPI       | MicroSD   | Description            || ----- | ----  | ----- | ---   | --------  | --------- | ---------------------- || MISO  | RX    | 16    | 21    | DO        | DO        | Master In, Slave Out   || MOSI  | TX    | 19    | 25    | DI        | DI        | Master Out, Slave In   || SCK   | SCK   | 18    | 24    | SCLK      | CLK       | SPI clock              || CS0   | CSn   | 17    | 22    | SS or CS  | CS        | Slave (or Chip) Select || DET   |       | 22    | 29    |           | CD        | Card Detect            || GND   |       |       | 18,23 |           | GND       | Ground                 || 3v3   |       |       | 36    |           | 3v3       | 3.3 volt power         |*/// Hardware Configuration of SPI "objects"// Note: multiple SD cards can be driven by one SPI if they use different slave// selects.static spi_t spis[] = {  // One for each SPI.    {        .hw_inst = spi0,  // SPI component        .miso_gpio = 16,  // GPIO number (not Pico pin number)        .mosi_gpio = 19,        .sck_gpio = 18,        // .baud_rate = 1000 * 1000        .baud_rate = 12500 * 1000        // .baud_rate = 25 * 1000 * 1000 // Actual frequency: 20833333.    }};// Hardware Configuration of the SD Card "objects"static sd_card_t sd_cards[] = {  // One for each SD card    {        .pcName = "0:",   // Name used to mount device        .spi = &spis[0],  // Pointer to the SPI driving this card        .ss_gpio = 17,    // The SPI slave select GPIO for this SD card        .use_card_detect = true,        .card_detect_gpio = 22,  // Card detect        .card_detected_true = 1  // What the GPIO read returns when a card is                                 // present.    }};/* ********************************************************************** */size_t sd_get_num() { return count_of(sd_cards); }sd_card_t *sd_get_by_num(size_t num) {    if (num <= sd_get_num()) {        return &sd_cards[num];    } else {        return NULL;    }}size_t spi_get_num() { return count_of(spis); }spi_t *spi_get_by_num(size_t num) {    if (num <= spi_get_num()) {        return &spis[num];    } else {        return NULL;    }}/* [] END OF FILE */
```

main.cpp

```c++
#include <stdio.h>//#include "f_util.h"#include "ff.h"#include "pico/stdlib.h"#include "rtc.h"//#include "hw_config.h"/** * * NOTE: make sure to add add_executable(rm_pico_dev app/main.cpp app/hw_config.c) * in cmake * */int main() {    stdio_init_all();    time_init();    sleep_ms(3000);    puts("Hello, world!");    // See FatFs - Generic FAT Filesystem Module, "Application Interface",    // http://elm-chan.org/fsw/ff/00index_e.html    sd_card_t *pSD = sd_get_by_num(0);    FRESULT fr = f_mount(&pSD->fatfs, pSD->pcName, 1);    if (FR_OK != fr) panic("f_mount error: %s (%d)\n", FRESULT_str(fr), fr);    FIL fil;    const char* const filename = "filename.yaml";    fr = f_open(&fil, filename, FA_OPEN_APPEND | FA_WRITE);    if (FR_OK != fr && FR_EXIST != fr)        panic("f_open(%s) error: %s (%d)\n", filename, FRESULT_str(fr), fr);    if (f_printf(&fil, "Hello: world!\n") < 0) {        printf("f_printf failed\n");    }    fr = f_close(&fil);    if (FR_OK != fr) {        printf("f_close error: %s (%d)\n", FRESULT_str(fr), fr);    }    f_unmount(pSD->pcName);    puts("Goodbye, world!");    for (;;);}
```
