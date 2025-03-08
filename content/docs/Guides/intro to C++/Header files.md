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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24TZUDV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHsC36YoiYr6dPM42tbBK%2Bo2BjQhISZIE%2B0AF4gzvB3lAiA99HtzywGyg8dJaSGs35x%2FPUqcP18NQ%2Bvy2tROxr8S%2FSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBrohaTAwUrBhRIRxKtwDs%2FSjQjLUPotOYYOjIsfYXaCNIcpopQEGQ9w4OuxVWetrxu%2BINRnBtiTmMVlE26xHsB1CVuevl7QIxdYQTb2winQSZ6bDAa3ZvlGQXexfIjR%2BBjBXXBCiQfh1%2BCOtfOR9fWVk6x%2FBLx3kh50DH65uo77MwZx88Yb203murQ3n%2B5vpTo6wb4eHKx9GuX2rmb0UKSVyVNiCKPQOPYVi19S0hxsnkpIisV4E2mUGBANXwWp53c9QzP%2FsPQ%2Bt5x6mkM8kNveEQo7sHQ%2BEUjE%2F%2BlH%2BDXT8eDampK6zcokwHI3TT8lVoUzsFbNiPvfEXtAXDRLOfTmIgFDBLeo6jlFyFvr7APajNMJA3FKkkQfYLCd0wknVBnHDqnvOOUlYCIJ0jv2Cj8oQR4MAgN0iUu9ptE1pLIJpscuOj2oTufpUt0SMgfSgXzhrZ1a8IF%2FGAa581tx8PikxJN5gIEtsxsOyWI5M2G78De7WgKPTEl2GI22JVF2dlwE6FOsdU1vtXxgejOSeFZv3LJ0mAE%2FECmhT%2Fc4Ytd2KpRDUmoiEbO4eldC%2BS81Oh8eaFbs7p8XewXr%2FYsGGAgoqfl9non4R2YDZ3Ft2cKJA6Qc33fD7V5RNjlpMlsmYaAZKoCKHut%2FOWZIw9oKyvgY6pgHkzgM4SEgGdqHc1tiPPq25GwKDHcuR9v3KNVGHy8mqmwNxF9Fc8guaDIOKyizsmqGyyYRmjsHiVUNuyinIRQrW57o3yRyOAj%2FoUOCI0vqRY3pVb4zBdzlnM18ts%2BalME%2FzEazrpkcsVsAiVI%2FVz%2FBWTvv7uRvCNfb0yMonEEINC8C9bamIfvsHdljc%2F9dxLsGzBXN6jrN6fzg1fmWldU6qFqeUrhnn&X-Amz-Signature=afa9cf3ea862c21967ae0587f605eb0cb01149f41b80b5f245dfbd6758d875f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
