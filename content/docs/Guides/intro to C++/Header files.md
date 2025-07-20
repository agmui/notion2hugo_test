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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQCISR2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmcBCFIrhG13e1mgw8Wk4Qltrc2ZRvrW0X%2B0r1p8LZOAiEAn71tCVk9DEa4tQ%2FHqoM4G1zwYi7xzIBnAuEAFJ9cr4YqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdUT%2Fd%2BzMe8QC18TSrcAysvSUN0LC4RVEnZGVfLqfZSU8kCOhTYzvDB%2FaNwNPherA9xcBAbfwCgxvxAPOgqntyTA9VjnyYsWOkmwJgWPHjP3ABUg6WyjxyWnRm4wnIJsTvMu%2BTYydb3OtxgMIUBJAQ96aIlfq0CrapjrcJj0x6s9j0B1gUmusaqXeMtITx01NtyPX41VEClj5EVKvHvLLIX8kaOLWRMsr%2BQwl%2FL6J0gzQrLZse%2BiMZRfKS36R1xFMsyhLErYy9D%2BeNbxneftmFi5b9ihZxutQ%2BZU9KEAVtYJexhMvTcUO14rrdN3SXhoHEUSw%2B2IZ09ya1VCBs0eJDzTUxna7rdlBdvxul9G%2BvpUcuWkDr8VrY17dtqF1ECHcmpyNkB%2FSQoc9%2BbTCBt%2FpoB8C0RXVFM6Zmc5rM8T%2FjvkF9%2FiOmzL%2BaljzXDqygeht2KdXc%2Beize5fdze7iYXiSsSAGcXi%2F%2FpXQ%2B5QSBwufXAlfGgZIyekMtphG0NBNu0hpg1QP0354tointFg0obdLT80CVJXBpKGGxHSxSg6%2F7gfTJEmj0fVEfakS7VTbP7smM5rzzpZxqpqUqfM1om5YGAIcqRfZ3heYRUXeNRDHFL%2FNkFfZoc4f8YuuItBY11%2FsJaWUrJi7hFrKeMP%2Bu8sMGOqUB6dMr09X5ZmmbOszuQCmirZf4y2B2be9Tc5wAJ5ubZwKQuRNpBX4A2qiJj5vfPOjchJd18ab7lcqVl0ZRyyBM40Ms9X9goiD87fs6%2B0qI%2FlJ%2FzVssBbP3vDOgtzrOsPZJKXEnvqpEiSQUQMFIBCLIBBuAE%2FwQh0j7m%2F3CmyLygp1flXGu61XOolXhQzfnCOBFLgpEJsZyXwyNLn7o%2B9YxAkxqwBYI&X-Amz-Signature=44fdcf66faa2366d1aa57b293bc0c42809359dfeacff0bac9b121c53aa23d28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
