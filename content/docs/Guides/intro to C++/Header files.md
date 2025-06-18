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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RQH4QWJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhoMQRyhZO%2BszBbD0owuwVrPFR7L8hC%2FuryDt8M6tffAIgDW2KVyRJjWFIyaWL4yd1aCtLwjZj9RsaR3uz1DdSjMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXcOKY27ePo8fa0LyrcA5Xcl0MqM%2B9xWs2m6UDoqiBmQlPszhIRDHFTNJdgnIFOAvCPn6SePHuT%2FjQ6o9wqxz5pBJd21mKDb2hB6O9c6VEvrH35rC98eITx%2BoiS0xOdkSMIdIFqnHEevuL30X%2FHVHrBNndu49WhEerAksUryZZ%2Fp0VZOqivq9abDAN2MW57WvbB2f9VBBP0LVgTO7wZgEjteeieJrOnNV3jn2bAfxo7qD8NQeNDk5Z4JJkl3dZPJybUxolcwS433HLuTVdoRj6JL6jedI7KfOgL0PTYXCFhNcezKrEbVEZE3LeHLHIix07aXHoVTyVyKtxdddg7b6uKkbRoSA6FdM2xHUWgKsfXVlsw6H5W2TQY%2FjYi4TgMIUghLwuliN%2FfoWTJQfwnm4Upaeafxdw50rwtGxNjN3q%2Bu%2BuAJeNLkFp9uv9gGNHVRAUg9R2K1mE%2Ba3T11D6U2YeTbvEY8rLxaXT562SVib6%2B4cSxzrBUKVOKYGe%2BnbYP1SQIenTbRrz95M4HUi9EH2ziMo4mIJafbl9wSbnUI53ziqCFuS%2Fb5db%2FfFSKe30Td9qCKa5EpfnqITIzRWK8iqeGjSuIMwxlyG3Q%2FZ0EKvBqFpmK1jVQkjw%2FVsXJ4CouEcvIaD7fcEVOHubrMMT7y8IGOqUB3lBLF6iy6SN5dgtfp2RQuGRsAd7UFSmiwYHMp%2B%2F5FJtMov3gAo35pv12OzgzulOWqmljnSE3w2mEABS0MWXeZ6KD6pDiv99mjaD6Uj9EcGCuovvPd39Y1b9juaRxzAzCh4gV9uJ4Hgs5IDo%2FJI51JJnOvP9RXKFp9QL0ioPeO6RJmv1tadJfL2iH87%2Fj%2BKjJOy7hQ3MzOLbthdgqN0ussvwDP0Df&X-Amz-Signature=7a504f6193f20d05c4e4a15ba45b80612a51e5dba5b389ce6ad41e12e37961e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
