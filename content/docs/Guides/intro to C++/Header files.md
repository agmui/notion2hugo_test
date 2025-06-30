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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A423KEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2BckFzTq5FAofeUwynVb08OIjOPO3I6Z5NEIH4cRG5gIgJNpDB6EKansPBMQeOLuoGwi8O4wXKCO5iDMVTeBsjKYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmmWkzwF67cQqBfGSrcA0bYcIL7xvwjc7OGjR%2Fa2KNXRdwqZzgg8nyAuupAA6OLgZyY1rZefPNusABGjwN2ptpMJ%2B7c%2BUHop5uRtkZfyuiPdHjTHkOLoIRqxZEcxwCGw9LZ48kZqpcFG3OcJqWs7k49UlYeyH8%2Bht8CpX4Cg8inWz1f1Wk0yMZIPK9ct0i59r8L5FENG8Dy2Eg2Yy0pFe7rgooJd1vvlbTYyOB9zIpyMm24PTZN5oH5g73Bllsq1exvLg%2BeVhpz7Y5pQ1bNNghwi2eMTkjP2AAO%2BWkXpD9kwNLLtbiuQ32qatqbUPWpOD9B%2FC6kZ8mQpotDpNZPG3qjLWw%2FvNiaRQ7idah5d9DUVacFd8EubAWVikOcYUgJDVw4GSZpNO%2BDnYnRTASNkWwI7nyVJyjoZKFp%2Byy9mSvczFcDee7ugSaBez4pcdDneROYx2Ri95DbOqVRGSg%2FFHnmrk7NwBulIu5pDwAog7t0g8Gn8y72f6JZm2rNbQNnzbFHjPrPaltRMqr7BXmw0y9btTAHJiZ6t5IecXuS9HMgLkRVsjDeQkR3bvK6eiOHbBsnlEjVs6ZSa5IEmsT8IVLr3Gt0ivHYm01hzEJT%2F5etm%2BF6jx5xue2VPFZJW9pT3ne7ErBDfsNzD7mtMKPth8MGOqUBKnqeU80WO2u48zML6BVUJzVLMtP%2FIUXZdCHCwTdrOH3PmtuUU4B2zKLKDcA1mFn6UaUbNVLNnmqqymh7Sie8Rg%2FR6TELml%2FIoE6pQRWfuN3knXgNTvateqhsV7UTBfaXE2SRAzZh5LAxdaT6NyuqTgOUSvA8wFhKsIPHz3nwJFS76l78jLPdvbEfGcAQsm22ZqHi%2FQT6lAdSTqyd0Z%2BVMe3RWWCF&X-Amz-Signature=ad070b113bf3b6233988259088fce0fd0675f040f122615cf6f81084810a6e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
