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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRTNVGO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIF1cRvfX73g35JUWh1j9ZvWCYsfb4Rv5ozSc1X54g1oaAiAvb7KJlof52pO9pdG18PtP4N5bSggQUDv2RQY3oUddJyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMdMZkEgtvwXQqZdy1KtwDliiN87X1CksR2ct6wJiOHYd8L22k%2FiKQk0k0MTAN5b7lcj9Hu2ZmrM%2BWmBwr1WueMQs%2FuMBTNdWU2uN1v1fqY3Lz5vsS%2B1Nmll%2BESzdSxx3v%2BYii6FBsdskr1vhQ0coIFVa6OKAirbUupJwdizwrSM3pT2nVS77N6MSSvwtnFROfmVquHwFARloCJx35dJFImJokdhlthi%2Fd97YZMbWIc11S2dq7n%2FWm%2FtgruVs%2FbZjn14AUapJtCma%2BPqW6m2zPp0dF8jgyTdwDBNRYvP5QwiNxGUFJvJ20iwCR4CajZGYhW%2FVxVyli2fSOKaQ%2BA1siG7caPeZE3B%2FX6nUsr0L8jmy3O7%2F1s4e8aSrA4H9SW%2BW3Z5y6IGiZT79qRPE3fYtzb6GkBrueuGLyvwKLgL%2F9u4JmVVzCyvd6dA%2B4FTCAtUiFNegaYIxW6%2FNDjuxrXkNv2QJ1KRO6UORaDmQz%2BJXCtakxFGTE8ZJaKDM7wi0L0HBiqUAdSgF8WCktSbMuNZ8jUrcyvR4fWpV%2FTarFma3NM09AW%2FZL8VoSay6XvCfXQCRrdSxl70hLM0%2FDpQIePINyH4yBILLQS9TDiheSbwyAcuDhkVUEaqfJMe7PDn0ikFiUArVKIEDBLcFGzTkwqfy9vQY6pgHrmqMIbzh3xkI4zCRkzp1Uw9bo06ZGM41icHEAaojYtLFS8Zcwz8GsHvzwmd8UuXrxyomaBN6Q0MWQf9clhAYzqnNxwJ5%2B8YoylrlKnvqmfwLkqt7gcR9kF%2BM6Ji3qf%2BccmilCLkAgzJPDQKLIfYpl3937uGGvF%2FFV8UlIUjNeC%2FgMiV6exIQ52Q7ACXZSoES3CP%2BukAIhQ3ocnf6ygr%2Fqpsnpctep&X-Amz-Signature=92f5e13aa1b84be416140cf1a9370e5320d1852e7a349d65e2f45636b39842ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
