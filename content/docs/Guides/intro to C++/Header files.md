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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4UEMWV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBzIgPA5y8nQGIW3pv5nQ7ClVn19AfGpK4y9SrR5CpswIgVbmbDcsiuabP4kITD7pTglF3%2Fo5k0r%2BTpziH6yC%2FHXsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBnjmxyYrPW8dBu9SrcAwypj3QnmpXxR4nTKZeudFkLcrEAeZjInSaryW1nVsNYEQde3%2FrhpzXREuxuph7n%2BYk5XE9rDdW2%2BiK4KziNY7QX4TmZ0LofqrZfhlBBqycTWnv6X19idc535QigrkZM25Fd%2BAO5jJN18%2FfiTk21e6xRARDu3hKJStsPggMwtBhg%2FVdRoonCrMTUxwD9jBl0WuZZsUAAkuIlPqZh%2BH2cOpu53%2BbSkIxQeQwyC7SZB423FqxjdLz6JdbBjM%2Bos6TilOunh9H%2BmqSdKiIyyWX7NBaGNLd2E5rK6Sn4qn6%2Blcvd7%2Bp%2B66cN6iIt7Z3C2k72wg8u31FRYdQYxuVpXZqPqBytE5EXPgP%2BgQhx%2BjgC6T52O91sHaw0s8Pq3Xt9cozepw1m%2B7aeDb0P%2F5EMPhuGetIrbqmouR8dC9kkkQ04Keqkdmgg7qgzH2aQYJwZlyKkFnGtf2f1axh8LG5wc7sexP7N9g8H9%2B%2FMFFFnuA4hBrtJcePd60OEchbltua%2BwNAEYdV%2FPHCs016Z%2Fnw9KKo4mRO6S4SmiM573GaHcwDcdXqByPydnGEMmaPpJ6j4M3ED7eOyZvNuh%2FmQEwsxRPhZSDlAZmU9qJiQPD3QtUPd3mJ1fHTUZuQU68rr599bMLuUzb4GOqUBH7n6EdYHvsEMSA1qyhoq%2BWdIgTYTKGWKxi96AgQF%2FRCugETtgriehvkW7Ms93Mc5E4en7y9e%2FgjfeSymjryHi3au29IBkIRGm%2BbFczRnIagT4SIevT2NqbzyDv6DzFwWC3LjdLdWy7WlQmFFn531yTJ95erSk7sK%2Bm1c5RFp0E4kJO7Ydv01J1p%2FvB1lGFsz1YcvzYLrpVvvvpvlWpJgc%2BypBm%2Fn&X-Amz-Signature=b22afe9f1458570ad34548fb48612c4706d36206b20d9161edbe8096460567e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
