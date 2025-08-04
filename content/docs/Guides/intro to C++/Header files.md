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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2Q32LFK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDA6Qs2AEYK%2BsBgbdGBU4SoAcf6W2mCriX25zc8RMNWxQIhAKov6ifNSFuWW%2F1N0IAjqVDtTMmZQpjPwyJ7Qg2CNUbRKv8DCEAQABoMNjM3NDIzMTgzODA1Igz4UQdR8Zz9eouP0Jgq3ANVsr1OioFx87XyxwaOr4KKpDmHPo89MM4tlT%2FL75D0UVKbBWF2TJtrNsy9ltHq7scN0X6WbJiscnDBt9R0PCCsG3VML5DaTG0sM1ipj1yl6RJX4dg3Hun5sMTHbMtJNIXvUESh9O8fK9tqfYR%2F9f0eztejTh0jQZEt%2FMyNGLOiw1hUPUXqi%2BAgeF5rP8940hFf5%2Fg4%2FO8dkA%2FRVQT5kDyKK4beelFu3tmW6wX0EToxC2gPoswy7WqcmzSs7siBo1sw%2FM8AodC%2F0hrp%2BQsv5Asq7ISAOWvYUfOdFPH1LcL2qgq3MpftBtH%2FEZ7xaPE4R44PofpURWX4NTSXhCO7LZhlbJR6ahdTdS40OOANUmh12nS0Ls8BV2kXbP%2FPw%2Ft%2FW57f%2BT3Yy4edmLyL6DNi27XHBIfVAXY%2FbqWPdj%2BlJtp96fl4NZezwMq34Jq%2FeyQYog7i3BzvCVCxlT64eeXfPtS2yXPrt2osOus6%2FOvmnTjPLrfK31uMm247Nk9OUCSzaH2mZuVBIJoJwbvuztogmcJd61pKfMg8ifpDXGU9%2FKY4EDYoO8d9AMgfMH0cF7wp5DovmXRmSXrUS9ZHgS5rlq%2BHEi5s%2BSvjkV3CJg1CGjhc47JRWauzX0DSpvgrMjCnuMHEBjqkAW5sVtzIW1sovTKEw%2BMV513VeZCljD%2FG7HlyAeaOBKRx7iPh0mPgfGc0MNyFC2cCU1gWkha4HZs7vlVr%2BEHO3OZenA0kqJuTwppWiVvEesm6zSZjCw%2F5LFGqh8EoEwxkGp2J4AOr2ZAGSTqL6xWrOFkx313rppKQdIg0ChNVUTK6IaHDAzPQzCM7nbALTS1pEBohar1S2uIsm0f3vY2i%2BiuuYJhk&X-Amz-Signature=c85315bf052dfca68632b147eac39e2703e987c8e15839abc496f142fb8d84cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
