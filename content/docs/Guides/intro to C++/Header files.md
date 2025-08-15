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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT3BKBP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEID%2B1KNCaThz6mh8jGSrilJJjveaeTRWe65oCAxtthFAiEArVruNugDwvdiecrv5gAijDhZ7OZULBWV%2FAa6y6A0jYsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDILF4EflCicxD68x4yrcA3mJz6KGUKZ4ndDfsHyQbkjDtNW28mwxzMJ9iSow44rBy9FdzJd7E39b%2BOKH2O3UN80DpN1u19aE%2BNUOfVMv9YxW4xZsCi74sW9XL%2FS16bTPgnLTyZ3DmJ%2BbT7a5oyE%2F4HkgXXzWv8V%2BIQixmPQJvNdtC8HEuA%2B94WtqasAkS9pENWwwqMeYWie%2F8IR03%2Fo9oPSMIHTXnFU6lCBiE42ErmVUQjNK%2Fup7JUaRXIbaKxMvIMGnYKj07VK1WpIVBus7IL9fdUQRY9ZIUVkueqEfGhy9%2BpW%2Bqpnd5NY52q33%2Bv76EqmrZd9pcPPfDmCVh82vIm3i8XG2rTDrdQgR8iUtL6rPyYGy%2Bbzxg3jXF9k1osl8MbY%2BjrMoLst2wf9zOjGaS%2BHpeZx4wjQKridS7H7MRSMFXhAKFrPTpQBeH83n%2BB7HDPHxvlK769Aoe%2Fid4kngXLTFtmEYiAsaWQ4d63CkHN1bs97i2QZ7h4%2FpLbfOchGwMeb6pcDyRnbG9IygBzP%2FSFjKSt33UwkX9FiO6XaYYJhmB0RnvQM8KdtioK2itVblzbMWlplufFOnTa3HKTNi%2FrZZdX6sYF14wcri%2B%2BwF0KkxDxHzez2PXH3fhPkMkZHySDRr9%2FHc3vugfXmaMKCj%2BsQGOqUBtOkDLYw9aZjvKGmAlzG41LcdQtCre%2Fduxhg1SuzmgZE3ugRAczF1U7JYaOaIENow7OSdJOPEf2exLy8Je1Xl2hIEkEwEjAua5%2BpFi9d8nRWURf%2BvHcRjyItrvd8s5Md%2BICn0UdqOcXJvjp34F8B1blfF%2FnY2oaDIrNjfpOiZ7nXo%2FukGct66nkoRmjPTczqOEmoKgE753%2BvkzF0q6DecU77g6lS6&X-Amz-Signature=9a5ae67b94e34857499562d930a64a8efb8314b19cb75fd77da8f5574efa03be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
