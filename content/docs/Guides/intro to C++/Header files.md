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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTO47LV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCFb%2Fp2kztdIuNfZblHo%2FVCd%2FeGQGPyC8OxF5PIJlUX7wIgOmva9rDZZWXDXJVZtN%2Fp0lp5XUTR%2FMkr8dPYz%2F%2F%2BphUqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPbKa7Ti3dp2R2RVSrcA0VwGL2y2wCCtSd8B3Hf27Kns6lIbgzFDrlxlYfdPuUe8pEaFWwifN8Bv9u2czwwRCWAOfuDgibfqI2u5qbf7QqJyJr2tZY7xhk7%2BUK8xWljww%2BLUHyTPNPhdP6%2F6iifWzDMJambNviZJEQ%2BNFPYnAPfKr0WGybX2%2FQUFzWACv0Zf82SDQ%2BEyNa%2F1t0yf8%2BnPPhjRlC0Q29wNM%2BofS5sYR3xiNDRlB9AJPl9FakHIOnluBWwMgeLzpfI1OpNXshnWzwTmcA%2FWrZNxJlD9YosIj8KNw74gidcI3Z4UHP50rJx6K0zOC49K0rxtemZ9t9YZ%2FDiW3GGP886PmHJlt7TA2GA0swREgLVL2uHy022jGHSnUkzp2EQrfHKXWAaAdqTweL9v2aJXqGIlosXnC7EjthHf163C9g8s9j4HVShSNdxKD2Fr%2BMyN0cgLvEs9%2BDNViBtTCtbdIln98mbWtHh48HJ2SAIaw7L59jZyGliXYI2issRAE6WyawnmcW5WubJ05Eg%2F9egP1dJlpTKxdO71NbhqU5DvKS0UyYjvP9MQhnxK6z5v3XvVFJbCXWdo8mDQrlt9WgVfMm%2BQgMpWXTMNoznh%2FZZUXm49c%2B8Z1Nzlo6EQgwf2wNoJMBH1mE7MJeA88EGOqUB8Xft82PHENrZBWLCozOm%2FTbkfFXmaY9YzkmvvqsfBU2OdyyM6bvSvzdAtxv2%2BN1o8f86suqQbrv7Cd0T%2FCyYbjVU3bcrRCFg2z7GkvlzFTRXYdkUsyvYRAOo3yIf3JLDxX8C02j3b8aeU7CAZUtdJvjfGF3RdSjnGeL0oHlz2bmGls84okfhpD7ERrANH51Y4n%2BU8gknh2GNWLHYMligNgQXFkrw&X-Amz-Signature=4f0754b3a4d68062a03237c540aa9a2788017cd4d113108fd40f6bbdc274ed08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
