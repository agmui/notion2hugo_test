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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UM2RIDR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDbRHQ%2FykIBVdsjzq%2FzmgKPQrZmmWVOydltcG2mq96FmwIhAOn3es3iNAkEQ%2FHTodAd8aFct2qLyD%2BtmhVPvCiswEfvKv8DCDQQABoMNjM3NDIzMTgzODA1IgyuizgB426jJMUnBVQq3AMfZLbb1kb3K6DJhLqDy5QBdRLkHpjnkYpVPTLY1jcm8yT6siDMQC9BeJR2y9NH63iXaiN1ckSPSNtmbJkSs99u5tkma182H5j5II4zj6o2ZHIIcmMv5rl1NEujnKZ7D13XicDpRAIpK1V%2B9A%2Bli5SBKRdFZ0Kvsai4YakE%2FWLAVzxQrGy4Flf2i%2BLgj08cIh93k2lPN6SeQtUtfj6%2B5dwG7ji0NYVddb1zLDhDWX9BcSIfW1Pk6it8So2Cg6dUiJbLzs%2Bwf4%2BHZkL%2BLxSZnRmpthPQobj5hvHGuIIQAOWEt%2BqaKts8VSANs0%2BiYTpArFaeUx49IXjDzEMAkAw72Clizn%2FVdnSONK42Oa1CNjLfdlyLTSPZIorBcUqcnzhN74jB9wdBJD0P6yFTsjQxyP6b3r76%2BVEVKYXx%2FaAyjGmjmi2NZ8r1J%2BrDuVoQAA%2FFacEuH4jCuVjfAWpF07onOYiPnp2mKDAUv7IgGdOc5W0YbnB0KRHWfJGg43Dx9Qv%2FasFIKdnxnsDbdAVqIztH0Jpj2i%2FWaxXWMgFRqkh9yCJMXXrOOGab0cjrBQ12SZDS%2FX8gV%2F3sT5Rl2npIeRXqgZudIjbuEO2%2BrwhZjhgItuAErIJ%2FhV061mOYT5Xs5zC2nb69BjqkAWcM%2FcgeylNDOMPv3ls%2FiwthtMsoA%2BXHow6kCGurT8DkmfNesFjTdMtGTjuFEnszKHWU1UgBHfys050bNtNKAoz5uiiSuwKdLxBYuuAGmibQYPFlIfgoIz4wtleS%2F7n%2Feg9xQE5GSe1TSsIMroshuC0CgnHOKlJ%2Fi74zGm60niagKN8fmOcsuamf8xj9%2FuCzJSHA5tFOwAwvz6m5zfYpKhdZkvaq&X-Amz-Signature=381a01097c1058d3e2aed5af3ed736fb26eaa484e2b5428208dcdd5198255fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
