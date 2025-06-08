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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7ZCF3A%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyT4rZfm3TWtwIu3lbVk7ROgE8E0RF6ZvOBwZ%2FDxIP1AiEA2q%2FQDOp0V%2B3v35c4DA4RfxV137P8fnoOqywYc5Wcuz0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPP%2FBX70jWiSy4yfnCrcA%2FFah%2FhkTOf0pYSk8GfgM3ayGlY7u9WLt7b6r13QK%2FvypxsO7bEGSQWKhLoZZ7TzYER1uKfm3ER68Cpqz5FdzxFxqlenTq4kN48HanR5g9wYo%2F%2BiuaDMa47i28qMw3dsSKxEH3%2FoNMHKP4N%2FPsgJwXxg4Fkz7smQo3m2AnRnxcmJ1UdzI%2BDJ3Lk5ANYeYkhHHPNPUCbOw1vsePDTySNrpFqkf2L577y3Z7%2BVzjnfDGCujms%2BQHLJjp8Oy4fgxZHpWJnF09jI9v7I7PpwySNz480g8FiE7oUIQJopB1LzW5CPJl9EVctWqX64l%2B3YwSwSPNCE1Gxm24ARedh3Il2qr5TpRme0EaM116N3yO%2BWILPbmK8dok8HBhJfTAUkyv9Nd7t5%2BKNGNCysRbSJl%2Fdn4cj3e3mcXENYulhC0qJrjTCerLB0kr3jeMlbIgD5wvqMtnVoHUOfOaub%2FbPXlff79b%2FgXMS6TI9QdVRuBGTjbqX%2Fcu5%2BPWUG4IhF2eqsYdLo8nYecQ0Ms%2F3ocs1IWDwGArD7wZZs4SwX%2FaCDQs7uuGyRb45XuEwndMVI4scL2kmuF1JAfg8DYDf0pliIMrRhBsTffpfWgoojEBuzRA3tVE%2FFFQSVYuJLV%2BejBIAGMKmmlcIGOqUB6QhK%2FJCluSJoxJdFmQ0YwL5whCDbAV1FJg99R%2FdE665eeJSdvt4dc8IX%2BEaG9K9GKopZ40OZXRIwqUCqnl3Wr6eNRE%2FgSTnLNr%2FZNffK70lVplEig2UiUkc2CLPoXgoZH7jn0JZ1wmK4NXJ5p2tLj17FMFFxH0Ru4iIEwrEeuFETY%2FRWK07lQrYjm%2BiXhW%2BZIxwTnlKj7DChTc8JFRwBJZasC2%2B1&X-Amz-Signature=dcd30ccbd9fc31968bcfa3681c7c7bda416095fd9648d9b10f6455cf21dacc54&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
