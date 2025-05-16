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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WI7LT2J%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4xJircjyQcrHL9DqezFbjoP50f4XwOn3drAV1AN7PUwIgM6T0LZ6VCMTBVNftZxSZjtVybSdyPkNqAITHxkndoe4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDdvIMMvXX3bgPyfoSrcAw6%2BlU9vAR0RzNlJw1QFAjTBj9v07ueufoinFDGyEkSHeBA1SriUb9likO6dF7BFh0tvHBrK2hPWO2K2pug%2Bc0Vsi%2BFO5tvhb4lPGOlSJnn7WVxUruaRxdnobwfsR2S3%2BeGKWEEwl4fK11bRPKLFW52mnYspUi%2FttrB3zuJS9%2B3V6YLtZ42KMqc2%2FWd6mYmp%2BWw6Czwfys5djqja6tR6%2BQCoT0FLkZaNpBvFD64kyk22AUOU%2F5zddmvOW5u6uXzlXTnWjJ53bwdRGjKrHdrfnf8NitZGn3pgDjM9r28HvQqW02kRrTglXtJzEjkHe%2FUdK3caui0FfQr3LgxICFKWXCkfSjQKrvjtE1nJ5L4dAjmo1H4sdY1joXryjUwuFEEqqH1D1r0D0x5yvPUHRtJikUYqoDim%2BCmaczPNObPN7cvefxGVFjXuLVoVkV08mhDa8bNKtgZSTfOBycB%2Fbv%2F0oJy740KZbDSkJSp10DQNOc1UWFXvHN3piRYkj0B1DBIX5Fw%2BXoqi74mQ4OtWPLV2HoUkerlYLI9li0uJ9OcM2gvACTqaImojwkzU3zN5wZuzIn7eo2zVbLSlG%2FI3LBBbjrMpVooivCvo5BPnqVvlvZ0sfc6%2FzCkpmivUtrBTMLTEnsEGOqUBIKcc1A6KCZ2Qp16z9dbdrxLXR8krHMGewIY3ByXZdgT5l5zVJSPAOjvzuRXMIt8bUKZwt3VyYOCdgkwE%2F6O5%2FZwdMQ3kgh%2BrLHzse3jc75xqVHd2GSSTQ4pUFddIaB5sfjABgUXJG%2F9dDuYZd94h0I%2FNtAXEz3whL2D4Q8pAWmAoJkNJPhBqtp2TNtK%2B2Ih1HZvqDw8vb2%2FHcrn1qCvM3nnAguEC&X-Amz-Signature=faddbfccdf8afc58b947c0784d8da76589b342e8c94ae30c3fc1b944de20137c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
