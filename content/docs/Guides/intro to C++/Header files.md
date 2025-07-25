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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YWKX7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC011lLSlB6OYWzfgHa%2F6Vz05SILSK5%2FznbsUvTABnmqAIhAOM5vnuYgyCMFH%2FFfSxlLwTjMRvd7PlGT25fL2pgKvQFKv8DCEwQABoMNjM3NDIzMTgzODA1IgzW%2FgPPcnkiZkD8kyEq3APEaf7cAc9sLAliuKzb1diNQ8IKQpxJESt5v%2FkGichBSyMIKO0iluvXHNM8I%2B3twp9bNILTpfNCOOpkhAPJkWDHWGStmg6l2FdXngnfK70FEku1VrCKcs6PV0khYVl36xE%2FwrnRkHeut%2FORzYMv9r3b79su9AdnEfABe4mV4Pd6NwFX4jZIqwWfWIoX8BMHRl%2FGe7dqPB%2BHeh7JXRUP0lN3uuzHFbuvIqp086d%2BH97jLFtATvE6q6rNVdk4uU%2BG1NLsrA1N1vwz4Ap%2BhIsuXCvas1C2aX9UE1aPgbzQjebaajus4FaZ3asXPrPIL79uBgL2AqNCk6XtRH8HuuMS0ttTdhyHQVd6yyNyx7EtCeRhm9m%2BeXdWpEymaZoyZzNPR2l6qEriXuhpo3c1bpF28pgXgfrDxcShcv9khFvIuA%2BRjO68UJIqkZ54Z%2FLu67Je0KuLGMMOe136kOFN2hhGDhNUgMkR1KdaeoYHAcarWZxFLHsWXxjeCetZ3g8qICqFfjt1l4mk6bQIGddSudYlYtRntZYy%2FqiBLTGpuS4MbAgOB3wyic1SEWEGsGrEl91ONJI1EcgD3ZtEbZBzua7AgMD2%2BjT%2Fp%2B5i7v2Imu7RLq7Z%2FpqCk4bpjzz4gKXyEjDcqo%2FEBjqkAS%2BCYZORzmTT3HaEGULm6qt1NJc9CFWG3twVXdCbXkCGHkGDlGpDhg02fY5ypVtiMixpMYcAbtT22ehFd8hUYiICEQBPCnIDHtH509k6PzWZPfxes8pdVBQfYZbsHQR%2BDJmilbv4qIM14w5iUyWSHHfOLtXDPElzsdzjUzMyIG8DQI07r1Q4VDgwyUyGTrg2BlTibkCzTfXvVxRBCMouvdcLnF8f&X-Amz-Signature=b9fad78cabdd69a34b4d473bb1bc1ce509ca40d36d53abf1cb5f74892513d3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
