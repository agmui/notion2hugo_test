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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOU4AYA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBih2xJjw1bi5HB6ip8YvSsP6W1ejmdB4s3U%2F0%2FHw%2BShAiEA4UKbzErs%2BNQWV39sBo%2F%2FNF5R68tnH%2FasThCYjJWO21IqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPRjwBnKZBhfpBN5yrcA7%2BSrQ88Al4QXapAOqmonfB3NtySGkgDrzcjhAsguNizFGvTRhs%2Bvh4LeS3pZUJGj8mRwZ2FF6yCxuwR2r5PB6w%2BhRdvAVzU%2BLtOHeLS7F6hVCbfcDlO%2B1o1NG0p4P0uCQVPwnF137HrgCK6GGC8zXB9neJ3WHCJ%2BUTMvsjRqrCh0PaFV62cV1qS0MEmdMjoVjHNToOF7xGNzgfuEKODSkoN4vqEi%2FTKA%2BkxV5BXaEKbNP3RCN40jcwsBuaUN5bHhVVhH3bAbpr4dHeKI%2FQIgqDMDorEB5O5wZIfZCJdo69zOBbRfGo%2FXNkN38wz7snM%2BUqfwQjqqOaeK6B90GGt76kopbvwDO3Acs769wwVT6Vetg9lidVYF5lI4bAonBv%2BQMXFc5xez%2F6qSSvNIwm2I89r1zHcW5jnCu1HW0tjqft2%2FMjY4AD60D7HKBqwNdyMaDaGfQNUXbIb%2FpLuzpt5ThFEhBidA0%2FRAKnjQ6F2FjXC2hetT%2B%2BIhsUJ13AcCcfKZVf5BjeS1uv012yi8t82AONNVSB5A2C0Gh2VsHq8z7aVLLcfxgGoQb5cQOmWYWzr%2BIA42smSNpZos7ZTnjwJeXgaBBwr2AM9MNfBKJZhLjJj6EWrRSeUz%2Bgf1XcDMNGssMEGOqUBJ5pxqsqscKcz18xkbkLyLiYVVJHabWbWy6wr6nbgmI0X8PNM%2BFIBtLICGF2HyeVB2qgeJb447ju5w2PGYkPrVAw3hCoMKiB2GasVDWBNIbPR8o6NlIba0qrsG7q%2FvtXPgFk%2F1u0z2QUEa%2Bk3DGkwA9duNbuxNGTXQf8Yy2kCFItKquLrksJs%2BFHl4RInnX6QZL1lPFeM8kaSzFC9F5250e0O9jLF&X-Amz-Signature=c4901e6253edb0a44eabe386b43cad0b1ef3e9d47aaa244d3de3ba21588a5d35&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
