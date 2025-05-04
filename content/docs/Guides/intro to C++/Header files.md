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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHIB4K3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaY5IHkLY%2FOlweHjW4X0pIUp1%2B5U9bflCqhEKPtrliiAIgT9905s9WAw5OXO943Ttq0UkoyE4mmio2QHv7DrEBV14q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDK%2FCCekopxLfS%2B0UlCrcA9H1K1q0sUNI2PwIjEwBlouzIcne5Sgv1vN64hioCWii6uwTaxNIeEyVZDaJK43F25RKMNh1lTkkLx9fIFeOl1bxz%2B9YsFZVxdac6idWz2zcwVlxOSW5TbVbTXe3fvXMeWJhjWm8gxOGUm0VWl54pGckLLj97vepdirMYun%2Bbxa24v%2F24F1wl%2BB4zeHsHmj%2BGqUptVR9%2BhjOrxjyK9lw0D3lHJ0neI4SP7J2IQ0ABtqsGZQEO2A3XyQ6XOaUYgdyWH4SWFADNAQl%2Bg%2B%2Fy6a8RvRKAT9JEfA6EqAdXBLc6qGwAL59aJdSneQgXFjZNzZ31wI2uiE2tQmI6YT0YfbzK2lXaoT479BhJPYIVqlFFsvW5sHzEGeWJ1uUdM%2Bb0u6ZNh6roGMKOF48%2BcBl3KNgAiYZ6ZUuCC6Hvovd8EuLHDYdy0uiermKSZ0nOVZx0ON%2Bw%2F6Ty9kHPbTQAkDiXwPV73HMgxrZTzCmUqeZa%2BOsURpNx5CcWk7OJRbPuVff4U1G6tICxTZcWjxfL4j7Oo15XaNZyluY%2Frq4X6qhR8MHd7A7YGRcENDtB%2FomCzMsmiEGnzJvRHV3AVv0UL5DXfa%2FOGVySWArCUQ6iqu%2FF3jTw3iaValR6JJqWjvOEo%2F0MJeL3cAGOqUBYE7JRdqDgwiRN00deJ1noJVCyi7Q17vj%2BKWwU3U49ERzPyKauz5hlL7A6%2B7IWtCOlGfcCJli9Dg1F3EDfO3VlqAbVpFeFW9wSQeMD0F%2F2D17GVhwBRTx3r283nM0Plk7xmbqM04sggzw4SBpJFeeNwkptNAldzHDnTVcbMjoRFDg79d5TSJblRmwmnEst8C4ZaQ1eXBUfncvaY8fjOOgMO3dKYKJ&X-Amz-Signature=b8835a1cac245f4a10fb6f31f379a4160d4690edbec7950db51d212fcd00a1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
