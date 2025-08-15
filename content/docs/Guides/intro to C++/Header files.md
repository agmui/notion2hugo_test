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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XELC2QLQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFgdBwLH4hsFpHP778ZXFKBrxiLf7D4upQmodHdBjhR1AiBgsudlN2RTK%2BRCNNEsqsLGTNyiQ2VgFZI3zJ3OmgGSmCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMB9ex%2FEvJpampyxvjKtwDpaCh%2FeQsGc9HYTtekEbTNSqUuuFdzm5J7SeWzm3%2FWALfPqVI1n8JX00Yxmx3bRm9Xd1hyGq4UvYaTHS1D%2B8B88JGvfYrynkoQTfUvvkKHeZxY%2Fik81umaFd8QA2pbnCfl2TKajR9JJrLZzhDl%2BxwPSFLCpMAl%2Bl7Yttt2dzV1R0rFDHFSemczKlrzLFBj0y2snaHe1U3JihlSxG%2F0F2GiHvHX9sVNjO1j0cJsvnLFOl75K4fl5Rp%2BV2ks%2BbbE2EzgA%2FS16jvWt5FZB6lOJaKA4vy6bPnMMBFeV5u0Qww4x7GU81wLvGtsMMtUd9YyfwGjCfh5XU1cSZN1k%2BH458x4FioFpz9%2FnQIXelOtsxihX4%2Bw4p9cQAfhTuMgATRK0QaMM3KdFfoPPswqIJRIVYOxequygeYoI%2BrMNoVAF0ciqQYbGVk24lxz8LVdJd83Jp7o2HYKt3H6OhBwtfz4o25PYjton7bCOCkGlV95%2BOwE%2FNILp6VZBXF7mWluV%2FKzlWIleMvFJMaNdbV0dvm3ZFYKyB8r%2BM4RCszRRMvQ1xgJEBhHZSjgIRC2JMKej6bMLOo%2F3C7TYrPS0LZrd7lB8P7YqcgfZJEIpXgWyn2F0dMP3oQxeOzIejHMjGwjxgwuO%2F7xAY6pgF%2BYBbARTOO%2BXuXNCNXBPMhJTfW1hnWSWlACkEkmAnkMJZ6LlEl%2B7un4Ww2UnRfQHczasRVM1Yt3PAvionEDtTHWmJf4Y5a0uKd76OP2zh9BYYGAK8UEJkPFWPYFt9RglnllR9aZzJKUfoNJ2q429kCBS5LDG6QkkSyV17OpdlBQRl%2FMEDG5rMg4pniNaVCJMW4R2gJoMahYllMBRc7t%2ByfDFd9k6V1&X-Amz-Signature=d16a614a4de665555bfe255e541dfa7660ef9503ee4503d7687d0a8241e60be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
