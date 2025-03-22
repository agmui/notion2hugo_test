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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD2RQT2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFleXR5cDMveDb9ParyFWmNPfzpL61d6SKkt60gCYXrJAiEA%2FN8o8sA9i16VaY53v%2F%2FQ10ss9Ck%2F9NCRpC4JvaRhdH0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqvsquFag39J7QXdCrcA3%2BlYPyfk1F%2BCSC9q4ESMVdvSBWOWBXtg1SFbesTY190uuxqHC4fFrS5wsm22pcAZw3w0NurS5YLjaMmr1jmEOAzwqbcysSSTkBcFZBWxy%2B7ngbxP2TUYaogTQj4J8HVnN1SEMENpEIlxWv5pN2ZvDjKoItzlx%2BIgY96uboXqqTpLOaE5jOWeBic3uoVOEY%2FqMKmqms10nW7lqfLQCCPL%2FTEOaqb2l2iLs0sc1AgdJ1D4I2F81HOyqMydh0irwtOhqH2VnInJsAzycfItdqLdrHjmhe9H1mSFZFrEzj4ZSGgDvLjbmAWJQrCRSffaU1m2fkfnpbHr4gZk90JcjefZZq1d5zhjZooQsqKi4A2%2BORQQg%2B55iTh4rDzVc8y0OM3Jli%2BXRfk5N086OxaPD%2FRIVi30xGWawNxVfA6ZZ0J9xGcCJRkb7sL5DPhk79zN2jdh96ukl0HjQIJwJA1aTqBSdOCePGbd5TK5ak3VWCCB0Y1%2BqSwjLwkbgLC0vAHrHk1xqmy9MgLzdaPTxfv4Nt%2BXm9KQHoDJdlf8K8Ert7J077jTuec4A2AvIzKTx0bm6%2FZPa45gdY2TsQAOB7DrjU69KVAD2apCRcVuQxT0qOKi80vDwwU4BxaLdlbXThaMPS2%2FL4GOqUB5Z4Dj6WKTAOvh4M0aFzxuLR67G4zoYju9C7qs%2BDk1Ql%2Bp%2FGuv0FnVRjy4izD52HSnJuEZP00kq%2B74rt9Qo9vL2hZYSar8Mfi8rhR9SxtMYY1YLZd4h4nmC9SpQdqbsp25M6v7G2xpOPNkCA8%2BSgl3RCD9%2FQRrS2D3kKaG6DxBuxK%2F9sq5Z%2F8F1WvRl0aLmIdSggSvMbIXanMDVpfc1XE3UW0taoW&X-Amz-Signature=d50b48a4909784b9fa1b45f824f51b2bb4dbe023acffc0a9cf049c75c3d2bb63&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
