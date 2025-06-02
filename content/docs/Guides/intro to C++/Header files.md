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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPIULBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD4g7pKsKidv8bD1nWZicBUwnO9XohQ%2FgNna7KKeCYsWgIgfP9uArJFO4ouKtPFPXHA6w%2FIZmNxKtrwm9Sqoqlz1OUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxAFrzaiy3XvwsQyyrcA65H%2BpR7T%2B1ExKwwJ3cfTCktARIQ5oY4u4Zuvyu4XQxRv60NSEDZ2XILP6uVQ%2B%2BlWby4AP%2FNlyjWzf4nJ1V3TZaOvl310i56n2HxNw5ffX0emIAAOPcFFfzIosr483sY9F%2FVvd4LiykyOT0xGaRosB8Ak63srjX0zmqYcKxi1k%2FjDdEVclNnV6lcpVvTIznT%2Fwn5cZDm3GB%2BA98Ta9Fgl8ZKgsOR7YPz9LyPB2aEPkUoLGZOV5VftijDihNvfuW2efB5ZOT4OH7M2VdC1Vj5PxVRpWWQwZvKdLqoNIK72EzHtsUlWIis3h1A3aHzZFivD6te8FU%2BktPCNRhJFsbvWFlbWo2XVX%2BS4eh%2BRL5UbX8ixBhF1yfHFxumRj4MalTon7jhLZEilggMqsJytyfxWAjNVwt6WiEzkaOkUGaRECvA58Jnh5bPQaFLJPONVBocPE1Tm9bkv9Ph3Sn9hOA7mtFOYFhusyaCDGwd03bPfykYZbD%2BSbuOxpIJ3teOGhrnicatn6P0rmQK3eo5EHpdsNoza84trmpwqgp1kK%2B8fNRjIdQbXG%2Bxpuj8T6ShkusOofT5cIM9yjeCMDG5589JhOoOrEDmbMOVh8F%2FkaMruZwRFkgZy%2BzEIxNYapnSMK3C9cEGOqUBRbHj6QRoGASj8kIesWNQ2SKxEMDktCnhmBTOA1MSDNs8YiYyVx53yEUc%2BaJv%2F%2B8c%2FrHKZbtCI1Wi9Wn%2B8c8WnliVTcOuG2FFSFxiAsEXEy2sncRm33CtdJMELznUukawmdwXX3Zi0EHZQdVKbSApq9ybS33CoXtHqRaxLPwJlo2a2jh4o5OZe%2FWC826TQkxt%2FtHUhfD8HY6%2BlD2J8nOvrlka8Rd6&X-Amz-Signature=4bc9f457330e60cff1e15d6ef97c5094bdaf3fa013eb02320b93beb8778ac6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
