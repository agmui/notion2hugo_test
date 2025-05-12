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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4VAQKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBCED76Xp1JG3ZvNatBHUMmgYVGVk6JpsasZgpspD1ThAiEAhZl6PLZljYzzVydj7yljgFhRRpKWrDi05aQYDbsykg4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0tSiKYNjqTlZz85ircAzaccsSpMelPHZ0t2wklbLWzhEZx72AzK8lZT7Qz3x0BpFbuyhqdUlJ2eU3MwrVAUFJNbwaV1E8lJEw7J0iXK7%2FiW2VkPLeV8s9zVAgioBKhlFtFBpJ11OJnVmGK%2Bk9LQQd1CSQF1DkKtIzE7G3t8iUyYl8AfYODa47D%2Bfko5wH2Sw%2BEMms5B2g5Q5uCoLPB4rssoCNZbe9eubt73kC%2B0yTzNC785WteiyF1dkS3%2F7OP8Y6GI045kvIGFof56dxA8Fr8YrbG0rEHMr2%2FYu2EiUyZb3tBzXiZ80ZXgMwgx%2FWdDFsY4vjmJQ9HsBCo1wjv2Z%2BEa3qwSEzyo2iS32OuwzWseKuWDzX1j962EHIH0ycu1nWvwkD05z18SFBNFOEV4ci5Tii1aoK37UYMgfS2m%2FH3pX2U0AnHu2QgOS2A5XvTjJoAGPthZvE6hi7J94Dk3Na6QLcYG4HFyUSm%2FuBMRtj41eIw%2Bbc0lbNGwxKeucP9J7CckwnIB9gJIVRmijg23yUyCmZwPx6jy2N6Mrv8eZFtLGECrVty61RfeMqBj6YIcefOVqGOnXuAMm3mkC%2B5aHZ6wWqIFpOqwC2hYQ3qnmLRbL1cvI9eaAYOEbgnYHDLSkTQOHx%2BbliR8BODMJeFhsEGOqUBwC6QnBjbN7f59rc%2FEx1SJ9WRyH%2F1M9ObHz8FodgA95ty6eXcsbb4vFtzSm7TRyrDpxdyj5nafyM7zBEU1va60%2FZBlH1XJcxglLorSdgU8jYYuZoRBjh3hOy3M%2Fg3Lp40suUsGclvJk5xWMWgJaIfCdMfkBTUPvailjRhu%2B4b6UszOyz%2BWCQDUh61nixgKm11wbWcI7vrR3ITRyGmmiSF1DqPrZOu&X-Amz-Signature=8f60ffc9aed1e5a1a4738dc4d90e4407c0dc27fd5ac9832898fd72dafccdc2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
