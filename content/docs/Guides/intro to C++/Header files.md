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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROM3QJME%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXG8nEZBNIruCp867zEs5dLzVo7cYXL1qNdIvbgUk3AAiB7y46UzqUOYZnRldn8hclsmP7gemBP6NpUKWlSfjvIQSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRxO6zWvJkR%2Bjudr8KtwDKmAWQrz2Np7hfmC%2BoW%2FmWFNLi9ooa36TESiUhl84tSzm5diSDj9wJ4v%2Fp4zLfCHLhpkDZiFJfAVzhlM88jnqMaU8RTazucENbzFVQsLVKjf93DjbU3TfUdv2j%2FUEu5qFGED5akdx8htA4Igs1V7%2By%2F8g1SLRiyAKiLb3pggyrI8jH48Aa3mNHopxRYnkhBCXWy%2B%2BGSfXGGDhUTpW3pT7qgXPMNOsstJVHWWNtZ0Ceqykc%2BuNcZ4%2BmFirKIhzDlnoEW3IeR8csofviVFZ1NPNkbyuo2JLm%2BQQVtG8EJkg1e5B9Tw65mBpbVIZ2rd0x0qO%2F92upyix0%2FXbNoBluKuuhwa95eu7pe%2FZdYjHSrwtxvF0CY%2Fbghq5Yq2XhN%2F1%2BBZfFvWo1XRt1BiPjGJfh8Z%2BJcGYneZz2XtXvfhJhEsoAch%2F1n9u8ZjuCLKqgf2qEb7LVNvszFDbtlT5a4J82p%2BTxrgPL%2FStzSL6TsjhRsfT1N9uMr%2B3Vv8JImzPzUo3Jt3UoIc85FnidF2GWtD%2FzciQr%2B%2BInghMjQqEYqzcoDq3sGM%2FtCW9Azln6YBF56m5TvKRrzTrVqnAhjFqlWC7M7u4VWBxh5eFaRgSzZ3Ss1E1427Nfjfcz8FmlUKDfhIw5PPKwgY6pgFuAC0IO%2BCOIi8%2BGC%2BJihu34d0fvmI8XBxPyactxmuJO%2Fl8EsIe06mR7h3uko%2FQOCPKMrQHRghwOgL%2BqKH%2BxPRE%2Ff9OStzlEH6Sb%2F3x0eQjWa9Okmvax0sk1DXBzypvkVR29pCmClMLR5PVOCqpeTqP9O5PWzUjc8qHEfUXEou4aiMF2tD9shys0JdqW1H1LZd2IvRl%2FAWdmRBo6RqDzGTsFzZFNuab&X-Amz-Signature=0a4511b5d9dbb4cdf43a83535bc9741a5176526a5668af0c6890a476d2f343cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
