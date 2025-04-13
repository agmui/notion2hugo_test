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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJJ2XQ4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDieZYSYF8O6KXDhfFLubwIQFycHR1v0wFXwcvNwaJITwIgdcDWc4ooE5UoeiyEnS70jeY8pdzcm4xc0s6dDRH9s54qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWy1aUOADvEkUOq9ircA1fyHSMEhG1VHUJUaubFIfy75wtUow2Y1AyiPkID4DopqbUtKsl690qJT5iJ%2Fy402i%2F1iX8%2Bue6pNbt4lGSOOc%2FbRK7S0dHu2bYIZVUOsrEBw1QAFMcWurcnjDvUN6B1%2Bf7NhHgheK0X3YoADIb47swSj6IP3TBQ0d5i3KwbZW09td%2BRZIIyg8ocBN0hUl%2FiuID6L%2Bsg%2F1eH%2BTQKLL4rc%2F7muhKeKlTyO8l52rJL0Mz9AaitkRuKXC9q%2FohABuqoxYa3DHHfPtZB0cUWa1tmijS5alMC2Zq%2B1sX0cPbepDnGxn4zaA%2B7zHnMaKDratAVY90%2FCdPX%2B3O5ZfMPm6%2FfU%2B%2FNPrGostHR0FS3%2B%2FeHRYekD2iUZW2B8DGym%2FW7pv1ncih%2FDIVNYMchZ9fWhVXYYhjAZYN43UzmygwC2SMypqNNRBsAifPE1WjNCIuolY2AY%2FPwVRXvnKxGMd4psuSmjjvyQF1XvQvGmX7ckaF8KI0ZV1EdMwWXYd8BFTQxQvRuxpiD%2B5Ofnz078ormQTQt2FZDfTQU8cYQz0Yss5%2BY8%2FEqfFlbTCbxfpLCzZxbw85goWueJ%2BvCKoiLbP9kXEAdLHSwWE8ez6qV%2F03Mo2F8ENPp71WP3Wzm%2BH6dSH1ZMKe97r8GOqUBvm4tJpM4%2BiX33m%2FJjyz7pRKpCzu5ZYoT2iYBtZXHR23lNF7F4eWm%2B4Oqs8T%2BZaqoXUlydN%2FL0OtMaDRAAQS2e5sDjM%2FPT7kgQTHW7xFy5ofnqdcosFURsmDEVWCMOTtW%2Bcmbm2gLvOjH%2FcsJW9AviPDYBTaTmFVOhA2o6aKESmm8micSL3cW8cKriEsqV017u15vgG0pD1IXpKuXgyg9m2ZCGLJo&X-Amz-Signature=73e1c1921bb405269825c5b8dda09f134023e7ad1c0344eaf6c3b64f455632ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
