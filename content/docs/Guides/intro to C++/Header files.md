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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FHOPBT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDU%2ByeBuRlLZ9IGusUkeR2%2FfHHDMGr%2BnHrVIQVxKsGckQIgSAFoGcDF336e7sbwSAjAEK6kE5NAxB7pKjNZhgE3luUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYLotxgaT%2FGxBFfsSrcA2wWDD99ZecDuL5lq%2FEMcn9SlC2GoWHNa21PiY8uVR1Z8zWqqOHlBAMp4bwSsZRIYQs%2F%2F13ZnZPUA4SkrCELMJLS6Yya2ltDx%2Brv8L1Dq9ccMz5dbH0aSPlE8E2oCqgZsbn3vQjimkpA3DcgWc%2FdLADTwe1IC2o1xkmHGZVdQyDoPYbHCZvyKpNIM9Uiu4Wngt9aq8yvjzSg7OzycgJrVUfpQC94LWItM51BWr3Z5SXoDaCeD%2B5f1C8LSCC7pXkmy%2B9mA1PHbrwFxnGnJWywe61WRedqqhqsXqcHZ2NJQAg7rspspJ9qutG4mSdheOFA4oD0VGscGmZhKKdk%2BhNuuDpJ7PvbpnNbsvGErkKyCwDd8j8qUDt58WqBoBrWZy2brEZL%2FlaXUyVLBkrOuigC1PY0PGsBPz7K8qNd%2BAcB997ZE8nr876ge0B7c2IHD6GFLYgu9H6easZdTXZVgqRhNPFdFFt0lE5OlJeltfXl3oZIZn71tc031tGFY6n2J5oX4UvFLGj5uPa1x8QLbWDiZ0NVpjM0uf9Y7pLKQ0Ae4Ri%2FFOxkM5lfuWSL0NYPtbe7pDzvjXye0VJVrmxX2%2BGwzSm1%2BPC9fiies6RitPymb858i8p6btO1S0uiFKPOMNOHnb0GOqUBwzirkqMXzVt3sc70w1YlIiWcee4%2FcuSxaVlC9t5rI3KjPHrZQd6vfMFQ3xgnRCqSZlNwNEGBewzuAWrKmV4siMcskIyj9AT6pU73Yo%2BGPWwP2Z0ZI920djIYs8%2Br4s54GUS947DXLIumJY7EJKs2mAyJl7Sw1MS0DEK0MG6C8BSu0NQwT5U5yrvLsDDhmbLhCQ%2BGeJnA63ISE%2BrHN7ai1D9kmdmq&X-Amz-Signature=7d29bc182e3d1aed3eac8de996044735664cf2e7f1f9e95882625b5bc3870421&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
