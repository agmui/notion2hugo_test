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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFAUTL3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEb71WpkXu8Q0r5leEzSaOUBBXOjQswFkbhlOBEiMxuQIhAI%2FIEYUweY8KwEYP%2B1SEHNnG%2Bjn5%2Bpwaq6QFcrFfrjDYKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8U6zxgS0CT1m620Uq3AOOQXmKsIdOxaKJR%2FYnPnKONb8ms0P2TK%2F0Yn4I2ZcRFQMGz7RYxAj63oKTWrdSPvBWrxDhkGFpArXbSvGd5Xx73mswKefkLAS14OILl42ylgcm8kg7qGltCq0%2BIHgDME%2FgI0rR%2BSUwYdrLAZS5gQi%2BC%2F8xO6iNCUpD3TfKLGkMgrGzH5XpscQdeBQ7IaKQKkf0IGby1bhnAhH06q1pNr0VHsTanx04SoyJJbmblBB%2FQXARPFseZ2PC9FBtMob%2B%2BeJCdVhXBpmuWf6GzEwdK6Eemu1e7CFz9YmRufbcCNIZU7HZdi4thxq709Mh16LwTO8UbkCYZpPGjWOo33fRwalj%2BzfpMwhqbXu%2BVOpOyrVXDqmUa9rL4DAae7OgIPC4xSAxBZ8Qn5ZHH7eYlVBUh3znXflC40vxVC7JNXXOLsjiX%2BdmbWsHeEFkQ91PExeJSbRAZqRlFvJtLgfyj2A6PULhVaeFsg5QWDd4uU3gK6A6RFdFjDRzY3UleX4CiVJB2s0LUCXi03UGZZUbvb44zR18dzFFC%2BGwDVaxzg65QJK%2BuCPhDHX2m9%2FEy7eMAekjRLn%2FVSPE9ljfN5Pytt3s24onq%2B2qskXXrvjibq1WmqBmpc74wAcgp4UR4lkY1DCmtPLDBjqkAfuthzB1bdfWt5NuF9c4UlFJR0oFHR%2BX%2Fj%2BBrEb21S6Fj9NpxlgITzC%2B3MCYtYn36JGmNLaBpYlCxhfD6rP828ku6e9abmlGDxWjgWVf3DY6EPIXvRvs08Igr%2Fg%2FJgaZ5NEZe8jaqGT5kqzMIc4JIhXyZaCHInQtxg2c0ec8wjwtUzB%2BeANMqRqY2aLn1t9WUT38HinIsnCQnSN0Jn39pQe8Xt%2FJ&X-Amz-Signature=cdb757b0bcb076ec224309ab0477d2ece069c1796f4585710e5925e1d5d133ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
