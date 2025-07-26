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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBASLOOM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICVgKUbHnlzHvACrlaEW5IZ3XYtr%2B%2FY3UrPvIeN3YU5qAiA1VN7bzl0Fdqi3oFHqO5v%2FW89KN0MDKDP5i4%2F1RA11TSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMb5LbwA3EwOhl0yNRKtwDJU11ttcSwOMUol%2BNZJxaghgWxuZFbL1UL3D309mM%2FpJzINr5Ni5OatUL5oHqMeJvAtU%2BNQUFGuBa%2FI1do3dytW%2FThFvPA%2FvRQhBXC%2Fowd9fyC1amsyWRDuQYtV2iHQ8SNPZkA%2FMjB1X0CVk5gMc99KRTocAudcxqRh%2FBBinmTOM9pGsKKyUnK5ZUCupuKE8N2X6IteBCyTCYvk6fd9WTd%2B9d8bPKrbchKDvskum%2Fpxp7jEwlSv7qeOsCTbbsUbLHbEKSDhzf%2FK5scwSnjY1TESgiynISO%2Fs5Iv6tFiyOZ9jaPRN5qsaKnpUyepsUBUtyaOmVIBrcRMX2EKCavvIgBb3ApwJpU0JvXv7T1jl8tj0d2Hz49K33QGVS2Bs8cWZmo79cpzqVQUXtw5hQYDwWqmJ3nZsByPck2NWuNAIhcNW6l1hudpVus7jzOGkflOhdPl5ZyaD1XdN2sSo0SJwAHEErbtcVuARnbWnzXKFwIN6JbjbL5hqo8gwYYVsSsoYQ80HsEZ7GXo%2BlnIFTjbK0CsJWYry8AGF1Ob3qBCWss6e9783DkQlllFYItcIjX1mFaQbJV6%2FOvvljKfwDxvLoOClBfW5lXH2uS5%2BTrON0abFpZR8eoqD4IfIlBCQwtPqSxAY6pgG3b9e3xmcMfi0nT0eEK3YS5ItUEIyB7OkIzFbeNrsB7Aadx0oJzCAdglVaK%2Fd0l7VHQlTWHGYJHGJUekviYQhhOfzfVW%2BzvqpcKLJyy2BTg2MGK8NCHsu4X%2F743LNvSHB%2FrAlzsANs5YDcAtKVnXwE79JYnKlibBTPaxAfISAzFO0fnCvdl62Y7RaaDW0qK4mBPKPDUuQZ%2F2vlJkPKh1t5JGlVRjwh&X-Amz-Signature=ceb773eed8b70747aa23ca48d7e95b73243e3b78b6c1806c3ca344ae937f1600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
