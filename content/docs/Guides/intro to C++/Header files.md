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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYLZPXA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASMImCuCvdqmPQSiz2jatHmBDZkkUWtHBQzrHqE8WjXAiBsQdvKwACab5ZhTxSTTuX6OkZwVDncKanuUs7alNHFLCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpnEDYDXZ5ggmTiaKtwDtW2lzb1oBZQZR6Msy0tf4FcjaVwZ1jVQDvDWQonqP2mGF%2B3cMxJnbDHZxjwHJUA%2FwRmPmwmWtO7Hlgsq34AawduObWNn2xrGnPKKxyEIdxLTQlO77qwUjZX60f6g7FfiqmVEVePjljoMKTtBA7zdhBTnfeUCtCyWVC7o7qWv%2FC2pO%2BPOVQZaFrlll7koHQ8Z56iHUHsM19IrYxy3NGbgpDZSyXXqUm%2BbKkRLi1pUUF2%2F2NGRQZHyzrvg4bYYghEeTdt674W7JFdt%2BZd6C8yqxRL5MbWL2WtR6ctdGjDGLM5UTKZHKlujYMV15Dgs%2FredYQ43bYiKordC7R%2FdDQFVlyTE4ACyfkAm62SeKauLWDFTOVw4anx8zXSCC89XF54V5qSdzDWeo3ZUH4T%2BFnuVNUvDPqQBS6pn3wAs%2B44iu6lUEWVkcY%2Bb%2F5Zt5d8ldM32FBJJhudikD0SPAH4xKF5zadtVIZ%2BFDRV%2F40zXtVR4%2BuM2d5vK7lbycRD%2BYr7iN6f%2F74me8X%2FLK8ORaCQ%2BLqo1XOUeAxGqctGS8ntJTaTmX%2B8sbLLfHDgyb3zVIRXfb%2BAxumBjS21AlpeoTkKZyDfgazwAOr%2FmQQ%2BI5rAnYUpAxN9B02ADvzEoeo7ep4w7%2B6HwwY6pgGCAkTcddrlZu1LYUezDbsIDIiqiP941XtBPe3TtOYJ0lSeyBuCTs4zFkIU0fOvunCNjsGLJH%2FRQp2dhK0leGA7UEp826MiL4oM50a1rBXb1Wua1ityWm8Owa%2F79YSsUtBTdZ8s562jvi8c1xy83gBQzORYi3rfOAgH%2FW8Tp5j0Y24aOotRUFtz%2FfXvdDPzinY%2Bt5dUekv9yMaMQIoY3jJrBx%2BW4T2c&X-Amz-Signature=1bfff4ed0efaa0e2f233f391b79dce32d593a51c737b26ac41a652db138d6891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
