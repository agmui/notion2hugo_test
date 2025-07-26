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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMZFCVB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE6tKhsxD%2Bb1gM8D5Tv%2FeSf%2F%2FVQ75JvgK2o8qN3kaUp9AiEA1cZ9%2BmVSVv8q9jM%2BEZJG7ke5LFYjRkfy8xf2zdXLDiUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPprC5LtO3lrwDaAIircAxirLAT4HhtGe44I36n4dY4D5hAoUFXJITjR4SqemcUI2vd0xrWI1dzIjyPCskCDxdabCGMGs%2BZBUo%2FYng2t7lHQWgyPwhjAVQGL2GthpcK0R19wOynq6VwcOGOso6KkkSa%2BXNyAw%2BbSJBGECyykxb3kZ7rFelnAnUwL5nPwlLOiaK5RWWdaNNPOEMzwzLPq8v1Pmb795wCbvb3vwcErmH6DUxEIte0XnfoHp%2B3tlM2GN2i1HiOgg51OKRwvPHKOInUdJa6GrCdS3pCSIu3j2MzMhjLh7G18%2FgUKBwlVjlgfDfm8ANcg4rBhuqngKXNEnGjwZlLyW%2FbZYd%2FzrtTzgoVckUfxAdzmhTyZcGvg3u85wM3nvjtBGgs1snKxaPEdxhQSr29FL7u6MdEa%2FIuW9GJF3%2BFrzGm0c2RJeJpzHBm0%2B54PhsxNvnkQrtTnZTU%2FnEwIdhgwmIrVW91p%2FmwuboSWtGPQBfX68FMC6ZPCaX%2BmS1JnSY5V6D59fGv%2FVwKBVmPkGO9tS2TUcPV1e3uSy4AcK97MQ4w19VEkDdbtuZovhF51wl7IXc%2BTEYzM4CrDET946T%2Fr0FqA%2FJavp6SwnlrvZio9SqWF2HeikjxV9NgP03JXzfZQ%2FmGQDEf7MM%2FBk8QGOqUBNm671Vq2K0Ny0kyftK2JfqL4C4RzYGyk5ScC7K6PSY7JVDc%2FbpAaZmn8Gy%2BGeU4GgFHdEESkld4tkgSCI%2FvuieZD00WSbyLaCO%2BW1O07QxpOK3WsUCHxHNXVAShBvRzToXM4kCnDFCWwaduEgxpbye6X7oD7AxS7K6kH6ZTzMRyKVsliwUlQV0A5P3TA8qKg0XdE2v3AK%2FEGqxgd5wXTe61hpPIo&X-Amz-Signature=c591aabc5a265aa29dd68fefe27bb015d188559154f00b09e528c369b0b82913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
