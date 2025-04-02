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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXTR6FS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCg2pX3oYfvFdvP1rEIcdixzV0MJs7zd%2BaMWxtTP6RBfAIgYj%2F1pAt8tLTmAI%2Fb%2BPQEy8KpZ6D%2B%2FKr5buSjs%2BN%2FfjkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZTohjvAfBnri2LOCrcA%2Bm2ynFFkF7WkDL8XgbuV26C6UZXwYDUbLLtwQ1nTtdDSB2NUqqYWb7vIc0Ud2IJZgMR1B1k77jRCSxHT8CpXB4neRICpk5c59rVRhSm4jjyQOfcslt3%2F1DiuhSCfjFTasTGMvdzWT%2FGS45UUExK%2F6gLuC2zsctwZniG%2FZw88swkg4HR4zBSbWLzlYDgnO5NhAZQdcZLn6jMmlwr%2FrwbokWQcNFBzti%2B97IHpEaVg814geGRk%2B04sEBkiQyjzAexbEPchKdAI9lyMlZkG77Ir81VREFtZcUZaUW7fzBA4OtNaPkFwAphkPaEKIoTf5xGkN9Fq9MYVcxBjXc8jJTSq821zz8hBWUNEfCgNuqybCvbwjWDp%2F4KfsyMsyZumULPflv70WhsAfWlrSgWCrj3JjdfuhNuPfkSCqNNXXgywVOhQ6n8%2BlwbHdBKU65jfRS86kM%2FSRCc2GuYPvTQZKP%2BD2sRbgBPij2DFt2OWuDb8GadoqEogL45JQbzzND6cylS7qNatpOiKb4hqQ5%2FvbM4txoJh4xqdl8szSb6CpX3Gf37C4Burdkwy%2F2Jv0%2BOGXjr1hFrPQ3sPHt0lRi77fmJK7e2wKJlwYbYFyF82r83bZmtACDb28Atl%2FPmHJwIMKn7tL8GOqUBPjZJCjclQ0WXzg%2BBrYtShx%2Ba8IqJHW3ZnOOjBc1N5pvZ2TeDNZIrxa7jtRe4epKhPtE%2Bcrt27FZmdvPtQCTA53cx2l4ZnbJTF1MzCvNe5qtgLp%2FaHsSWX3E3%2BpauAeIhStYzt00X70nydB4wJkZsGbLkZuntEHkaEVF30ZBC1O2420X%2FNxAOj7KkLDsDSP%2BCyyXsUh%2B%2FaBpmx0v8I8HhGCU1oOW%2F&X-Amz-Signature=b8cf595095d109beb67b5a36262cb73df2148d2b001a4591ee1c3cc35255af51&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
