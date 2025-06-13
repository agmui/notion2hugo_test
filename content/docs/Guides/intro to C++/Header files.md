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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUMC3MN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDZfF7jqD5qm1DFk9XOMZZmi8ul4BH6%2BxK1fXwxNtzfkAIhAPQGfyb4hhCm6aoiWo2EtjSsSmEx8K1tzt8y%2BVaV5ewuKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkP2KwheloEtH3r0Yq3AM1%2FAjxc7ullP8Mfc2SzNb8y%2Bez9ZqlgIjvRy3XTQcX0559FKARg4j80vKEN9%2FHx73FaJHH7K%2FvWWewREXStZshsbzo4zHaMtRgyhc33mlkhlKhq3cGPOatBltElQyc53Fda9MdIoRSYV63gCaMggHbgBFcfMPM0C3CavwiyZdIfBORbqn9K164dgzhuwTUrwN5nigf4KvIkgOB6D%2BCVvq8dwgS6rEDEQN0hQQPF5CKRTbrON3Rp%2BRABGRXyB9PLEzQfl6b4GItIP7WjpmAh554fSpmAs9Ro8XSRO2xKvm86mOYpY5sXq2fE3UmYiJ1RkFm1QQbgv5KcyNFylWf%2B0y3C%2BbqMH1%2BLio73ay2RVCVxVoEiAy27vQCZ1WneQijStb%2Bxnuo9UKoW8QhfI8hzVyMwY2OzUD5juMlSeDjvBCR0hjonrbZ%2B74RxjuUlblIKIUNvgoX25hUEDBTZ%2FxmFVn3MnN3GvcrckzX4Vh%2BkWTsPIgEdaVD%2BaiEv%2B%2BVEiofl5Jh%2Fofqzt4GTEPzwBB%2FPWt9SIKFUluMdh14c5fedNmeXdzmDuJPYmogclWOVyupHos8uRQcjkxQHFeT6nMMbp8DRW74jD7jd4dZXUYXmh75wZGtM7pbZv5lpTVgIjCp1q7CBjqkAVIGqU3IMTsdFWw83m1IXjU%2FpsubgfV%2FcI3MLB%2F%2B0wxIVEczAHU9PR59tSlZndqeyxm5bYET6kv3m4BeUeowNwxBsJ%2FlawyZSOltCEGg4eJyR3WLRiGri0f6Hym7zm7RJdRkc%2FuPyKyUbtIGbVGkTVejU7H8Zz1fHNgjeT%2B%2BTRgGU%2BxLLaMiOvolSd3vulrfm6Cv4yHNTKplZS6Bl7FrSl%2F%2F9DSN&X-Amz-Signature=1c73155c34a707d33453fd131e93cca91a4f6e82a63947204a7761fd5607767f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
