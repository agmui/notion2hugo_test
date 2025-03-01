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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663YBRL6Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDIlZDS%2FO9QTw12MuTIBTIbF083P1G6H1oldddBgOua9QIhAMnFThk1Ev1PKh4CFP0UrqIGaDOhVsd98gTGNv2lMuVTKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV71G3vRZwNn1a36Uq3AOxO9dfotOyYObx%2FdxHE4SMG1SQO9gOLJ7pjMJeOP0VR5v9AlxG3m1qB7JkkZG9QsQjoKCC7LgZ%2FjFK%2FEGQ9BTV90IHjhxlJ7HGa98XyXvfSD6VwlYXPwcTIK%2FliudPPmcA%2BpFDF3M7O%2FrPEK3sZ%2FDH8nFotWt8D38NVQXZqw7SpWdhPpw6VExVu8CCkfvhl1%2B2qC2JVIzVR8T2rgptfzYEKPlnPpYZKgFjHockHIgL1ApUpYeK9xiILSxeAcDGF%2FYgas7%2BhaX7DkhW3eVODXty1U623lwTzBcwNovvwtlErlBH20msJUJNDfsozdS4cEOj1tgYS9H5FSrnklwBnHG2SDqAP5148DgD60jHuhpNIDi%2FeSmTMEucrQzplxvXattlhQG3p%2BfAvP%2B5tdiIplvx1hP4PAu7b03e5%2BfJOwgmYlacisK94cIQY%2FlMQgXbkiFn1VHZhMMAuvtd8rwph78oQRuYqulVZlbA1L0uESeLPLRUULdpznZNSCMAwIFiRk7eFzZu4GLUmtP5%2F4GkCCfhrPz4e8LjmhATwTMOdP9VQtIabxcAcdvIFBExZ6DesLWxlXeH%2BvkRcsvVsjVgh%2BC3dcJ6yPJQplN2oiNV8fW%2BfLT1d4J7JT3pcz4u%2BjDTkIq%2BBjqkAbpSJJalSJ6vC4em9DePk6Q9H9YYwZbAVkfvFH2ohdzkIYMsN0UQtl6ceYWwmduAF3%2B7zK8aoWflhsvtWyYDREEKX2%2Bx0SJjn7HbXV1rNr9FjVNkXnur99bCe20zG4TC3e8kx%2BQRSRA%2Bdb4H%2B3p7ibAUSstHHKwvwF0zRioLLmZf2h0hQNluQCpIm39yc4%2B%2Fe0eKei3vIbW7QtN6dGd6ruh4aF%2BF&X-Amz-Signature=8bb2b0a80466848c7cdb1a207e097b0c716fff7d0da2b8d36704344460422816&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
