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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAJBQG6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1EYUmV2ngCCelIQa0NVr%2FAQAspfZvyuaYUbXTDJVxZAiEAowhboYoxPKw0s%2BxzQwvpzDm%2BOArWzzQxExjccfrUt7gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvq4svj5UjimPcg%2FyrcAyiKK0fqq7EwgbYxpckqrwR79C8P8vt4Vo3jVEWI4Zvo8swNNH7r6gTpDHdBUEa00Cal2U60EAPXi%2BxXvOOyo%2Bql%2Fv927g2KaV3fURBPUpD45oP5KksqOgSxNGaHOFRCijNCARUFaRL7SiyWsiK7aVaxprD%2BKkDMuOluSEhNRVcsc31t%2Flqzs65zk3BQC2Zl%2BwVKb87AeLVIalJKVcxT5W6nlpXPrtMY5FkJXrfBx7HLlhiVP%2BpchAz1T56rQRyWy%2BqDUsQwQbe6h2ydJLj%2FuZJKV12X7d04u%2BPz%2B0qA%2F0OFV%2FYqK9%2FzID%2BaD4G%2FsxRXQKvyGALnZffBej4nC2d5K7oTAmkapr1zoC2wW4nMtZibblSwJCcZSwH2SGTix%2FJ2sDCV3b7x9dxUo2U4Uij%2Bv8MWSWf8TFZpJrTRB%2BDomIFJSHM2gx6lKArNVkn6fxoF9HQ7bzXXX1roXAqFb1Ir0OwHFKNgkCWnvMritAxu6lv0Qks59GlkYpm16SiEu%2BTYQloHaXCqM%2FX6lWpAtK7JDGjF%2F8QjUjOrtArhtw6M9j6uwRqz96Ix91UD%2Bm3a5DKlPJ95UFeyqP8XFpcoz%2FBP5aAjHwOTV39xi0yiN5czRGAzlAJNRrdTQ9mvIaGOMLrWm8IGOqUByvMBIqvv5U4YnPfUWItWTBZn%2BLf1Ue6tVT%2FUaRzNsyGI47rxHqbPTN0YwLUGluaHkAyAdoGh5IduswNd9diHUa07HNWGd%2FLlJa8WPS%2F1oGmjJIWccYV7YGsbIoIQZJycZkrpT8OaW308Gkq7%2BfWmf54rqtbUyssLZHVErFT1DRCOWB%2FRojFzh4%2F6FfRLiSZgohmM9qaKdktQy4Wsyg%2BaaUHpHqOT&X-Amz-Signature=64d7df37f5e058790773d3f0f7b228e718b6e67cca4f22877794a68b09b01290&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
