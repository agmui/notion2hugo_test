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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYX2I5HK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMJWGYgMGPWmvb2X5ZcYyqQiuycWkDU3sMLOG8%2Bav8NAiEAkd6kdI2uRUNM3aedITcKe2oT%2FKD50k%2B0%2BOdi069zg48qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy2BM9ZSTd3gGchdSrcA4Sn53xLBEd7kT5A%2B2Q2VvHK%2BH3cG5NQwiC28aj0oKKj55qsKWgD4W7Uig8S7rXKOq1nWmwrO0zWfM7KZfhJ%2FxOmbgBpY8MbPFsGI708hznue6apvR6jaQS5XfwifLVHKT8LuAbrFzDPeZo62ylOgpcmQoblmOygDzd1O3zt3j9uml6Jy8N2IUlXtSDW%2BuLivfyR10RIQsmd8IFjC0bOeeaB5zkwu26RykaAV7Bn4RzKAfCvsvmi%2FVTTQqOjjXJLQYyTrvsbXw8mU3NQyxAtlhrPadGWB3LMq42kTXyPfasUXrDQGTA%2FKk%2Bd1uzWpvfQ57D9mz%2Fj0z9icxL%2FpsjVOjLLxMPvEurasRkrKXPA8WxhcJNJg1w20bLyimYBMy0afKNEoOH5l%2BbrMer5tRoRgTT6JiP3zMEaPajKT%2FAolUnfDlqnlaAf%2Fr0WWzE67JZjX2wIHUW1BM9HHGbOjEaDXgNzRtMM%2FP0LGldkDTy1WcOHC1L62fY5uhXSMJnIYEQxfj7lSNv9eF8Z8Gp4UmFQ7xaGKFRSuGBxVq19kcVraAiKMC0Y1t79hyRyvwyB6H7Bqkvr2gUKH1%2BkZ948CuuzknQMHFDeB%2Bic6oz6yCiH0UXgwDXs7NZ4aYED6%2Ft7MIeamL4GOqUBSOFDZhi6sif24A7qw3hqMgXCPqLsMZKpICrwYy5kteZ0B5OKOhc8ktv9w54%2FYv6w1rva%2BCWwLWEYt07TmSPfXKf0D6wkMbC8fgAylBU3wilHzT2gMn5o4L0F9qt6NoyNsyX4TgFtlEZuCGirhrZs%2Fp%2FAKsCsyhfWV8xmP4yypeT%2Fq5ZAkAVbz3te4q%2Buo6sIGaSoJ6tp7FSwT1J%2BBbmwH%2BEypXU%2F&X-Amz-Signature=e14c8822b7ba9f85729350aa109d8ee69779be818cfb6f677e8759d1072769d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
