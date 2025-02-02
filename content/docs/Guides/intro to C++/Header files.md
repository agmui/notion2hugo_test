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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NGLXRA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAlwvei4f5jLrCYIrPuzMdxJqfNZ%2Fil2sslIOf2pVIXwIgdQxuFJStlMNaVjP3yIaqoQsF0Xpausb4TYWqhsXjWCQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1H7nN7TIz5DdWmyrcAxdcP3tokXXNVt37T7inIsay2yNnUpF5gp6U2Kony677ZzIlym9zY%2BtHnNPymhogzRWOWpfRFTK%2BdDBHIc%2Fc8ajG9ZpEXBVX2WjMAtaH8c%2FIFGDkV%2FSPdzAG39xc88%2BF%2FZZUH0rCd05CdZc1lOW4ZSMOWKatuK%2BDQGH1KwCGrgbPYOXfv9iZHn6x3Y6FKOpdgPraHI%2B%2BYtEvnFk05tpYdX1TJ7Sz41Qku%2BF5qiu1aOERlwKbnAZQu5Ogzgx4I%2F6VrCc1wm5SWgQCrRkQUaTA0ii0PQg1G%2Fbq9wrjPUtu9j4h%2FFErPaodPt0pySNW1p%2FZ0TGbHc%2BULMpf7MiIewC%2FLHi660TjPnupG2PvFpyiJaxX5MpO%2BGV%2FudiOWdTMnHSznO2LTXQfov9bsSjlycTUtGpSRZIpsQgLR5mncRY28Usfb2BsvLeOdap1qd0BUDlJrSoUnmmnPEKVykqpQi795zTPVmz7xs1%2FN2F6wBtExiYFZea5XgriqyzeghsydtR5AtgnCtK87vQuP5dpHxCdg7KFCFVsuinNTY4FkmgE2%2FaDcWXLfNZIEpcgF5niw5lvB30d7PkE3LEMwC1sJVbXnPQGgG52z%2B3HA%2BeP%2F002I5O6JF8WRw9T%2FVCStqLDMP%2Fm%2FrwGOqUB%2BiewDp2LhnynKC0SmDx70ZLgc2AWO1GRGYYA2%2F9OSEZwZ%2Bq0wSczkzA4Q%2BYIjNqkpR7Haglyoskp2MK8a7Il9ytjRclWkqTbH5dD%2BfjzehgPcdgxdPH9ocAzVGCfE1CzfQSvE5E%2FsbearJ3EUHTWpsg9nLZEBuhjCsvX4K2BMyQOVgrx8l33kftaotUus%2BTEd6evxyZ6n5kcwhw7TMtxGCVy75a%2F&X-Amz-Signature=174d0b71ee6a9072bcf4e9415df9cf85c4cc7726215009979fe64b3c1a340bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
