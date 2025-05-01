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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24VWQJ3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcxuYZbR5JKXuZyIqpbL%2FMPvkpp10Y0doRuQZcJTDYJwIgMNKSe9RAshgF2xgPp5IOBP84v80WVIeUyHGwGtqfrEAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCsNlbZfBDw3mp1zCrcAyRuTlpcXVpq8jWxWEqo%2Bt2T86%2FE44CP3SjJhfgFe5ySMgg0MdK1MDyYuhN0DNMh4OsU7e0Nb0RDFjfggt7S3M4tFvYzwpD9p6AXAxGVhL2OZyxFh%2BkK7TMwVpmTpIk%2BrrZU6ryMzfSi7ad%2BCd0eEJyADYwM1bcbVI98SHWdTgf3q1Np51KS50cFOpsjfCZd%2BOdOlmh3LWOgZChJ40Ngah2UNWxAVfC4esQuihbGFjKk5LYdpjYYqWAiFtRCkDW5uX2TLcQ2rWsDLs7edJY1kFNEU399aZ5HZE453zNrOcR%2FAtgQzhUMadLKmNGL99BR98Ew2XOPaharJTzsS%2F087gdQO5dzNkds8YnGjvWAohEsBgX0gA%2FuH9fODcadahbLT3mxCeIy2pq6DRC81a23yUFIuBiZSzSaZQ%2BhXvvPu6zNaTQNG5Y2NNm81tBVtAkDq1fDNKVUnXuPbCuN9qtfEOYgkcHqkj%2BBG5d8Vuj0PbnsMCCMkWTreLWxSdw01buiwHw437EYHSXu5ST%2F%2Bed2HGWi%2Fzji4eIXw8Ptek1SmBiBUzvzZe1%2FQYKHj%2B%2FonAz2YoulD16BgAA3r2D95yUZa7tzngiNjCYlq%2FnA9CYEETXy%2F469Z8oSf3VNEruLMJnJzcAGOqUBr1tgoYaDLwLRfmik3iU97tgVwxuZcZ2vQTAwIg5udp89zF0BRmjCKiDVfR6911g0tmw7oreSslDIwF%2FHOSolc3%2BlRlcmYXDnoBTJqDJ%2BSmVaLTTZQIwpF9AxpqjvVFx5P0hW0UO4qVri%2FOdd7dLs7%2BJVhtTEkZb6VdMPbJFJFN6Igi5Ktpd2A1us4lQrhYjBj1L3Wu%2B3txC84vAGIrl3XsA6W%2FOC&X-Amz-Signature=b09eb94d18f3a63d184adce66ee07f00d5b883f1187828fbba21ca5ad92f71ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
