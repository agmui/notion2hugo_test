---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFTAIH5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1s6i1BZH4CaA2Bm%2F7YDzGYKEK1wLMfMLd0O9NdgZR6AiEAgbB0oUOB39Fn6k%2BcuGTMDEZ%2F19a3U5bVA2DIjyZCfzEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR4ZVy%2BLkTO9dDCEyrcA3CwFfdEKwMwelxG6vkFa6u9mMSF4YAQJJ3OOEtoF2GEyiI1gbOMMAO1hCKSkawxVkb7CJG1PxnJAEyuy72KTCZKT0CQhjy%2F4IFNgiePvrkFd9EASLZTP63o0e4DExrID1RoMAaQUZ20dOislb8gydOo8pva3%2BebOXQKIwGs0GxlkdH2wMoDBeB3C00MJmGAmHe37cdOBQDDT9haf9woXO2aKjXUdY4tR%2B4Dhg0f4mrLCiLrwzAPV1465EW%2BRnYH2N%2FnsIQAOVEe2XgAQluWIgpwnRTLZDn8813mTdOMGEsBxaesOuszrwUgPcSi90Q4sYIBq%2FRRAXT3sjNlEEt%2FI0VPQrE2LY0Gdenejx%2FBVSJyDTkcnHP48zxw1IAoUArwHnOvXl6FhpCF2kkfA%2B5opsHia9hcVOFePjAPwUXFNj6b2hMBFPWq6nkh3lXmuhHvJPYtp7%2FTBHx6b99qE8ANasdwjcHd6gPpQ9hWRrDej74%2FSERBjF0HuHiz4pw0%2FXqooOlV%2FcungDM%2F1cvT3BJxPA%2F0SZhJfNaEsLodtKv0X4ZD%2BJw68YGDL9q6GIs8jJ%2BmxaDI8AoXyjTcEgT8tmgFTJFKkCoR9v56Xxf%2B3%2BkbWpAjU4nbAdK3omDhAJg1MOfGtMQGOqUBFL%2BGNIqhdfAgwg5hRTx95AwPM16YLCzPyegnk093bNX79oEO1h9HV3Eb7W1UIPPSOmdmyBUD2PAw%2BhVLXbEZ9%2F1IYTsl%2FgZO%2F%2Bi9FMBBxS%2FMDOKeLGRYGXR5woK3UuOKGJFQ2AstKttOy0gM3Tc908n%2Bai15cAIeriq8RbT2Jf1kBCfmfTVXYtmkGTu9W5r%2Fr8jT6adcwrwPIxPD9uQsXOYG%2F9Ns&X-Amz-Signature=767b27171bb4fffda59b1ecae0ec2458768e97c486653a324f572d173a06d1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
