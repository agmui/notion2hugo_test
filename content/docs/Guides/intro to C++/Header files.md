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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6LZX3Y%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAo%2F7fyYSNnrYqGk5xyFkuRWxLWlS61RPdbKuzoGb%2FikAiEAnZb%2F8HiIfr0FEGfdijgbgu46Pb8d0buByF2kKGaAoTQq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDA%2Bo2FUcuTlmyhhKlircAxvFiPXI3B6Vcj9VhgPzyPpcCKddG80kWVseDKcoKL%2BPOUCwb70DvHllzoELGcBFh4YrZVscp37Ada%2FjvoF%2F9CHbgc87FMC11tE3p0u3%2FHHZsukEjdF1izSrVxdQq8NQ3EyH78s6cvNsg6Br%2Ba9J2ehBLpm3wOCIu882oL2HHMlL7FdRLzVUNCPK58o%2FR5kH%2FBGsrsUZz3a2yk0ftZ96UHAzoYfiOUCB5EyBqyPKnCr4NUFY%2FB0XdY4hjwGP3FME6jdRK0YYRwwViCOpMDbb7czB7RIUiTRnvMkgdrssX4IwzdHOrn2yhO4E8UkML0kk%2FdRKordg2y0qKb%2FhAZrVZ1irwF3L7e1eMXycmP9gGvt0Y0ylGNE3k4hRUBiPM3Y9OV%2B1SjNU0BVKHeKBPfYa4bfsk4cQi8gLPDLtAQyU4P3zkkME5LCifdwf6hapgs1iHJc65oTTA75TK51%2B%2FpHbc2Xb9gmjyb%2FzNsQx0YvS4TipiDJCjsLa%2B8XqAIkHa4zoiT3tc3WQ%2FL0rclrPn5f5Y6QE6MbmpKMapa7jYYCfxdae2Hz8BSIYEojcp23GxdzH0LnoNnPuFpyZFh9qZlQBYP4fD4HO7HtwyOcA4OSfLxa1Bjwm9S8yj7wag%2F6nMOy%2FhL0GOqUB%2FhrCgK27fBRrP1HNqS1FICajEJmpes6rBDMxM4dm4Slflli4vZsA3r38jUo5G1EV8PtxRSSAvftjBdPmpD%2FFv9ziMio1NUy6YHn8%2BSgmGrUJZpdR3j6zKxXjTZXwZlHKj7%2FFGy8Fjkk1H2wIRIGY6TKKOd9EuI79qR8k79PBMk3mukh1z5WtAlfKFhTKnop80RIg6zKV1n3VRZKo%2BTnI9Y%2F%2BXcVr&X-Amz-Signature=1ea92e1559ad23c84ccfa2f88fb6ca2752082f3ea610b79ff5cf68104d267730&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
