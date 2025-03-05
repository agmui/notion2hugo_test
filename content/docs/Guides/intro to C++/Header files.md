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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PCYD3B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizZdFquwNEjLuGvD9LNfPQCkXLBPijUbaiF5VX6NYlwIhAM3Ikl1gPeVbQ%2B8CR5WWBUGNp5327J9%2B%2Fzq9AzAU1PANKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFjBUl%2BFfY1i2Wnkgq3AM648xJ8MHtWdfU5OzNSakw1ZKVrJwP5C%2F5PCDgXBXYD4exa3naiaHr8ABJ5sbYueenTc6qJSwzBetJEWVfVNwZBmgcgN3bfbX0V5a53ExtFEkiliooF6Q6HUcb8864l4F9bFSdsv%2FKaR6GJwUzxnVeP38kfyh9Zv5VSiuaH0VuJcnclSCfWqNoOk6qEglHybykPNXhYUL1yrq3F2U8XSJbchhXN666ZdRMFyCJg4hBg4hRTCch4fg9D1y3oKBLIHqL4QfzFA4QQU%2F%2BArhO5cPn67pHhY43dRQHJIvqvMR4s2768bZfCnEXzVWB4nyZ0Tz3eQ%2BiFmJnPu5uITnd%2FNQcO3LRdwSvySGPI%2F8EZMJWLET8c5WElMUyeULDYKoiaNBb%2BQhyl5ZHLOUNtEueMni2K11e%2BDXjPp1sVt1yNPSrPTmk619r7iLY1Gt1TknHDQkb45kdfvokBv%2FHC9DdjqKy45za7tguiInxSubc7y4dZERtAga2xKcWpsElJMzMaOFDRS8WghKB2MFlYCKL1GSYp96NjVA%2F59dM9%2Fw%2F059qp8G6vnzr%2F3pzPzUcLmDD0a5HF0RsWJtKsszDztYqukABLsyCPYzZOntBlVcFWnPiUwwXdv5Ko7N9uceZJjCn5p6%2BBjqkAWHHVQjQCeDqpYhXYfq20dL%2FTUJ%2FZ87ZlaoOFVZUyMcIyNnXXW9RnFlKvkNh8MfduJuHBu4tC%2B7A3ws3nNrC86qNWsfvx4FW1Fxf%2Fs3Xpwfs5f4Y3j5GPML2EudZIQ%2FH6xLCI76YGVQJD6qXBej8kaa%2F8ETpAYMDUwa8jwD6Lod2Ol9Mo13VN8NOMaZZUxsBF2XZLj9KYfkQtJYBHmhYXCv71xnO&X-Amz-Signature=2619c716188b39310bbe85c8fdc262687d1c5200e3e583a9470ba6f92b81e48e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
