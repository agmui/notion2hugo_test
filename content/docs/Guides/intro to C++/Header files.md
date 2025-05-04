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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBD7INA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD4WUx1GqMpXPcppUuLg3lIa83PHNu2PsZqLtEs6fPZHwIhALS%2BEpUGrsO6mBWSXubk9IEiCEPLddjXXqJiTv8sfBWoKv8DCB4QABoMNjM3NDIzMTgzODA1Igx%2FK3kpuQvCmz4W41Iq3AM8Sbvl877x40DopFeItRCma%2F8k18JXSqBU95rcQIqRbXo%2FSLCY9uTGi3C9pPjJR9KQ75TpRh%2FI%2FNnLNf8S1XuUflB2bgnpkqeJZREqPsdBMTbiWd97Im7YwshpqEWMG3v9RFWdHwxt9wVUWFGH9NiXuZIcls75%2FbWeBtHFgUFyp9NUGDSlYmoJU5w7l5fe3fNs%2BCa914JOmiVGQ%2Fo%2B4vBL%2F6YExzo71aTqk%2FLj1kn4ETe6vn2yi1qL4GzSmAr0KS9g3FIiqOzdh%2BdQiIGt54in%2Fzy%2BKdKKW%2FOJLboYkK%2BfZwdoG0OUulbjmxoMwVVS%2FglPbTPGGqzWykkXA1TLDjobqC9q7SvSRyN0n8jMIrzxjTR7MP%2FseWi2rXM1tsnbT2sr3wNTu8NJKDMNgxXT%2BfS5G58GoQEm4QdISaxyYaGLucUUoWSHywTB5Xd6MPHbiX1RZgjQiTHKafYkdB5a4KkYZu8pDtrnnNDktL0IHbhmqOn6GhchaygT%2FklyIhdJOEfuImLY9TmnHkm%2BgJmUx7FnNd1OAzRKXfMl46SXiK2MjFtm6AuCYdHEaXN4ZcUMLkKUriSLNHP9jOe3G3e1DRq1PJ2Ls%2BJ24wh4Aygj9wlbpLvcmVNJUj7uKTk9KzDhrN%2FABjqkAd4oblLjvqGivlgCfOzhXkfO2ggCfj29GUCGyBGjYojC%2FjbKUh8IVIoXuk5zXnRE2NCg7qDgBHMRsMUvsTxbLgzgAJcgQH4iGgmvRo3ZmPRHh7dZ9oI2UkvOtQl2M%2FzP5P8qbJb6oAThSdLs1xYKDQWtNNV92v%2BXwlhP5VPpBug%2FgmvgowSsQu4c4or4NO7CFGiOQeeIZ2CGWIkI4YbzsBrRRKIj&X-Amz-Signature=5611ab2ef301a15fd84b4965f521da90e71b9ff052334d3f826392106016c36d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
