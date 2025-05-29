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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIXJYJPV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW%2FSw%2BiNWDvfEED9D%2BgML7SQgnIhV5povjl4NlgyNMyAiEA9Os7uMhTSCSadqsBzcJvljoxgQE%2BVviRJBEHmgjqYm4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGYATtDWfgNLzgtqyrcA4VwPLV0lQNBrq1hyYQUFb%2BFJO0eMDsT2UoyEmxbtyjqZegqg3kRW6SFuPyhldTO6mMVkOTzO%2FXZUe6KNRZmTK%2FliJuh7PHDccwggrtyiT2T13tL6dPd1kMIlZmDQfTEeJ6LlpDpX4rIgdXrJYs9y6mVa89AhkujoSjmgq2nRvq7A2%2By4yVpcmJDofCRgr1VpGE4JYSyxcbmfrHZdHIRX6rwlmLQ92w4L7%2Futv5QKiTtB%2F36SCa8cVTk7tQmL0a9ENqTH7ERqdFWvCB9oFWkgYg6wtVqaPiVe2YTAjf%2BILKLqqmrwMEnroxLrVIJZy1COejf%2Ff7O3rZhSqnkSdNi2%2BUKC0PaicFmYPTun%2BdIiX%2BEaMKShIUQ9SrAIFl3g%2FPZqF4AhBw%2Bo2u6DTQ5ZG%2F45zsp%2BbFE3%2FhG7NQLhwVw%2BQrHRB7UylmBwDOCUeawc25vmkml3ktfLiAwI%2B6H441RkOJB42X4yTS5ehsn10Cnp5xrZMuzf12isrxe%2BMc0seTr4ubvpn9niTbEtLsehxA79tShy51wie2LqPIk98mooyOsP3%2BWIPBqkGgCS%2FHuXtUn%2BzNfnR9UOO7CFIUBR5TKNC5J7Ca6riCtqk0C0kRWijHVoY4oKzhT%2BvGi9H7aMMPb4MEGOqUBxoHuof7kS5xVuWSc6bXtZFjKzOOyhun8CxK7RrPBhtXG4BHy%2Fpwu9iXNcDGoJamKD4SHKMFnd2udLzgGFqVbl1%2BR4pqV3NXb2uvP6p54RECVB3bUKF8GE0OjnoalPZsL%2FYcOP1OL4XLEaDeXMNNG70Vj4OIOMCqGbTpN7gC2iuZM2ZEPY7GD6UoHYqcCZifjPQUqz0XBC06FtLwfPGNFuYGQquSn&X-Amz-Signature=8bf90af2aa210bb767c0885b94790aead71127350ed05c0d44d095783a2ee12c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
