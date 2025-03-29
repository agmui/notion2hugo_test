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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AULRLJI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCqCOmhJMvL%2BbnM3TCprjTN5KIoHRYFLSLYsP1fv6yDaAIhAJIrnqzoSeLNRuUIdmj8yD%2FDUS9P3PbBApNF4LFQRniQKv8DCHwQABoMNjM3NDIzMTgzODA1IgwnB%2BQf13y%2FRfzEkgIq3ANaTpP9pJNo7W8%2FY1d2fvFbdlCxwrbn0fr0Ch6D%2B8cFmmjr1sTo0hmuNwyvUVvgJI1Ie4Z4oiR7VGkASI88vzb0LoqAV%2BafQTTYs8ihVFxfz1DA30PfJmd1ibVJeQX6taLx02dsTSXbwMHx7GaK4gu24tS0cl%2FnUV8pVkgI04dj2OAkAKg2t5gA7gn2umGSg8BsDi03NFj416eP8kz8rcOWWTeBd8Qwj1WXb3B%2F8xP6QiCbsA09mHrm6ljHh7Z%2FPiadQp7O%2BgJBO3d6huddmm437%2B2AbhezplvSoQvRHs8eGExK79q8pHsWrVCwZaVqtC5bbFHPxAzuuGAMiYt%2FSwew6p1mCU2kni6hMkBXx3YaRCCqp0jRHzPGeLehFuKSANkZqv6iUA8v5JVYzWMDexfv4b%2BGhOXFT83%2BZnqcnaNHO2VdzYjH%2FwI7neh6Uq9il%2F1fB9OoJjLz9fRp36Xec6STH1XHYoSAQ93B3mgLrYc0qULrC7mqccBOqwTYk%2B3nKsEr7WG2fBBM5lZ9jtKVna5xsr6yrWDDCKjZHRW6KQykndHz63he%2FXKQ44vK2vYCZLfTplGDwdWfRuXkKNlzC%2Br2fbA8Bk6wvuY5hKAhSJqN9X9E9IXhrRhr%2BiV4TzCsiqG%2FBjqkAZqhIu8P0kVqqio8J3Ns6vGg5r2qrTczr0te6Ty5iF9I%2F1AGKQg2o89Uj76C%2BubO7dybxpb0sbI7Amyaqc3pd473gCiwgRcV6t4cwPyCZBHLar3SC8p2s0Dz5ygmirrf6OjcCqwzP6T2lRhS5htbWtHWm%2B7YD1STgPq2Mx2iXB4ucU8XP5LQDDlHMcmXXkbMYFjkwxoUnFmF4%2FsP4XhqzkPWqugy&X-Amz-Signature=40e623bdca1c6fe5ef9667077cf9b30d3c52d8dd22ce00f5e65363ddc90af7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
