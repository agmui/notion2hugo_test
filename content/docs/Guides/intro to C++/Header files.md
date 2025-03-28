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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HTKNU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjcZL%2Fk%2FLwIPbxIZinqtwmthc9t5BibSMjsaW%2BsXTz7gIgI%2FAbYfJeIRiZcGAGmojGiRXeQgVcuApwMh6grKPU4bYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDEQ7ap50Uj77Fg7nSrcA2%2B5%2FKpbEhN%2BCDm7%2BkXYIXQTg8Ukf9mibLr2kYFj7o7%2FHzOTHDW%2BozZpyVTsiEmL5RfyAKsK3H9JlTksxvF%2FpYGdTZPUokTJs9FQNug7B%2FP60B%2ByMgl0n1OcQCnTVw71CMNlvkVdCMTXLlbrTld22c7v82089pMR6HRbIk2MvSefXJlsmNSnuTCfds3Vp4RY%2BPcCIva%2FzTlgaR8kvvesyLUs8hhnN0hMy%2BkTy%2F8opXavNTJRVpQIeklgkyw9G9zH9gGsGB8xml%2BPDj5LQGcxdIItAp%2FqE0B%2FejDSDAK8k7x07rYm1EzBybeZ1eLHLSS%2F63BDGe7jOyaukMhY3wZI4Ap3stQgHKQ0vLhulBcrVswE4sEdonqV9rBWajS6tEpQB%2FtQRjuh6StjoApdvIIu4vV8YBtSMDTDZWDH0OlR3ScsEADvafRsvDiNYmvwkY2m3Cg%2BDTTRLxnGI%2Fp%2BTg0TZHTeM5cL3lGrxpWmAqyh25V11A1FEFNqNZeh2P6KOyCKmo2TcBxiD%2F1QgkXb4DJ0x0hKN4%2FsSYRbuuFm56kVuRk9aV1O4pRK%2FMm5YC3Mhe3Z28nbefH%2BBYwJaPX08TuLwlxObRo0NJ%2B2SsDgMIV9m5q3OXrN%2F5MWfKAQFc5qMKGqnL8GOqUB4M5Rh5oN%2FSauOVCwK17mvQT%2FTAod9FzN3NW7g5NI2MfICj746Dccag%2Bvu710l1Zk5k8k6n%2BC24CEKpv4Q5B7519MS3ydxc1Gi7tjAl9iZmJDD1PfNALGg4xIjd%2BH1nOV61XfNK1CrW4kpqgc9PLwwaUCeu7FdDPaN7wfwPehkav0fOP3D5Te4Tt3eEKFngr5lGfbv4ZhDwCXAnYiKA1%2BK7YcztUF&X-Amz-Signature=043d4604a65f3f66556ff831616ee5fb97becb0d713ef59b45db62a13cf8604a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
