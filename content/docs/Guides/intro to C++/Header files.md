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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUO6YH7Q%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH31D2edR%2FmitAP6KaTNMHV52uoi2YB9KLFdHJViTbTaAiEAi%2Bnu%2FTatvZNU8w3bKQyYhwm8WLlAKcJHQId3ljIrr28qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcQA7YcScEKZg5k6CrcAxujk7bg%2BBLU3hURtIa0tnTLVMLB%2FYKDefmBQKe23QIOtIvZms2NepCcPZaLkZ2m%2BycHUQmly2wMgE34lFUG3FarLihgtGYD%2B2MNd4phOG4%2FRVQMwGn9dRpFGzAgfbvaPsXtOzQK%2BrkpJ2v4Hbb0s7Q83DoMi3ML06dLfqEJZQwhZEXPIL%2B6gm%2BlNs2tAH%2F%2Bt00ZU8mznHDAfeaHIYPMYrqR2%2FgyTmk33%2FYOG%2ByUotDNoXAmSjSv2ElQgBCJmjNq8KUuHNxcplY0zHC3k1ZgArYuu0AQaxhPFZDMf6Tl7jeBMf12bjlB4p87HFkdrCox736WmF8UMU3EkHZAQctS3AcH05grlf2NvYICKwBZ6VBDvLI9cVUi%2FYi%2BjbWnW79ke%2FxQOIDDHpV7N70tZKlThOp6taPGAzGt0dxPiq5%2Fk0D6ZTi7KlKSw9oXaAXtQTExQEts0UH8zyHgq3WIeflcpx2VO93JajqUFDAJC31gm9qjcziVAfFORwuCBV8zzkvZMern5pe5eLdBhWV9o6lcJSjcS%2BrqCem9ViQGZlIG439ElHNztK%2FvfkMh3fPCzY9n4MMGiy02%2BH6xXYMqOr5exzRL9%2BhW%2FojogFqUdeRMEKKhXP2OHAtL5M493jhbMKbHz8AGOqUBnRR0Qh3RS%2Fmyh%2BFmFdzIFSWzp3Smj8A0p7FR3ShFKCvCBnN0TcuJJD24XSwUSLPjL2SnWjJb4fruxitVaQOaYzfnALU9NYjgcg6uYQSt6PZQzHMeMDBWXg1YLPPmKJ9WqbKEcIDGcQxfgO3g%2BFkTgVPt0x3xPSvP3Hw9S5d8Aq1ZyiIpbSEeugfCYKZ5IxVOle1KpR3Ju6EvbftIkI5DQfnKwTgb&X-Amz-Signature=147a0d26027a727f3e6b9bf4a66768b2d220da6fc0d62d458bf4ac1c07378ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
