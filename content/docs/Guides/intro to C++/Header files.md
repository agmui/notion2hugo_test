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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFFJ5C4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaIDTJut%2FbUnZ4mjyr%2FnFNljlZRmmAX2NvNMhFxFGwgAiEAxxyZLMesgyn9DdJjxltsoMFvyXJycIYFwVhfJBvl4dIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1BuzocgoTBBC7U4SrcA%2BI02dr%2FPAX51eKCCPDiYda9Nv1AHBLBbL5Im2%2FM6uvTo291zK%2B9mmthAOLdmd41CHbpZDDntivoLawhfrZbSQTfd6fd4SgxHI0%2BA1h5CyeTVFWE49glCDj%2BQQQ%2FZ%2BPs2eMEjFbmWtzMzAIXpba0q5nVfnHCN2T7ns%2F%2FcqfB1jtKHeK%2FcFptkuj%2FyFrDeFwXK%2FC9rg4rxiui0kayn3%2BGybsCrcev8W1NX75bhdo9zbKI2lxqNS8BBysFcM4AX3Ojv%2B0mmqLrU2N8oRbK4RXdKzpXwkXobuEmBEF38lbFZ8sShQAEuETOSyN4o4jICVcsVCJF3mDkS9fmR%2F3gUyv55mMbnRD8TiiOYOO4cufKHBCPbDJwNeGvJ%2F5vWU%2BNECDUKWCruIgFkwxRiS%2BWC0rsuqMhscCgPOc%2BGI%2FZiDJ8h7MIrH3pAHCi1Fkoo88F6L4B%2BumCx8Y%2BL0mUjdDifkppUVUi8V9K8VGeGXab%2FuFeOSeTZxuk5vNoZpZfsksS%2BYwJcQl0%2BE2y0KnPNOrI6N%2B2khPcFcDUfnCK3IHBTRatg%2Bf3ncjY9Gty9XVqNS18ofCYnsk7bQBRJBsDzhshLKSUGk6EsmkocVsqXEhERV2ecE1kyfkBc1dnHHfWynhAMJ6j2sIGOqUBwwxl1%2BGGjp4aHOJYcurx1bAoPzH1xesRbs3ZmYPE805zgx5bL3vLnObcnKKer4aRcW3bVCwIeZHargRDwqPPqheqTjA%2FAHR5D5KOeEgnctMRg%2BetDdQZvm%2FRQ4fSnOT4DlX%2BeTwqQMB4gQs1FGsYKpjD2nM%2Byfm%2FPzeqf4DnNNKD33oac35WvRjR%2Fy2QOf%2FC0wy15XMURvtThbkfYnD3scw2KOu2&X-Amz-Signature=c5a154ea9d8f325fa5d38bce39ddd92d92af93d2a6275b31eebe84eafb154685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
