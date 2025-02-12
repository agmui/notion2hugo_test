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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNEFPS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmONqmTMhJ7X1Y8Lnx2rkL6cvVwTC8P44XHOM%2BP4x8CAiEApyJjfnPXoZJz0d31JKwcbG%2FeVX7SW5neGjX%2FhU7PX%2F8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDpmzKt%2B9J56GL4YSrcAz%2F7YdXe3o8UaGYMMsmue5nz5OX8X7jJ4bUdf%2FyuHaReUo%2Bf2OMVi8chH3g7erEvt1WcizkZlU6mUXe6PiB6H8wa6jvzfVRn72I3YroQFkwH%2Bq5J97m4yQZfLTQrFgMPi1fWtigSGdu6Y8O8YLjGaMairfsRE%2BQeYIb1N6h%2BEXtAJUmCtVex2zaTD0GPnvjES76CNF8EouCJn7aNMuAmxXDKf2fe%2Bsxqkq90TUp2b33GfiOwi%2B92eb1RT%2B8YRs2enUN2wNB7TBSYQBWqz2VH04nHXgHgpzHSi9%2BgYtEWJ1GOlt4x6BQm3c%2BzSgekZ%2F9P764WxcxfWyTpZnvla7kIOH2UFDx6spNNJ9xgs8AZy0dN44KHjMS9%2F8yH0m1qRu4mc7CkiK8F41hZCmmnasjqPkcghQVX8oXSI4VXxJRJmAthKzzGQVkpzNjQVSlgC%2FV2tSiBZyUFDxQrdAtlcPS%2FfDsnZheePewS1%2BBnopVHVaBwnqzgk0OgvtpLRlBJJShMdDRd4eBfUFCBb3Qxr5WGFlOtp0A87hckHo7Z0rOwN8%2F1RopVjefVPIJxPvQjyA0yloBjXsB3chY%2B90n60UQycpN%2F%2BhQxxQkeE8vuUckj8TxEiKRB5LmbUjSXVlR%2FMO7mr70GOqUBx63ryKUlWQjwjTPFyBDhl9PakwEfcQSY9rjRljKD9R9yQ4usqkgG1Auz14vUxb3dVq0aznSfk5Mu9Z16ZJD%2BTPwsuWXgD6U0Io50rMgtBwjdy8Rfs2qCKgqa%2F2%2FwtZc8q1cxCDQJYCJ6EgxOGa8t6%2Fjl1%2BHye4npHiVqghC1z6oLe5AE%2FEcXyHCGgtizJWQAnUE6j1hJbOdoSxMMGMH9Gg1218WR&X-Amz-Signature=23145eec75cb1171be50d8831bb7210afcb279e9c586cf36c309cbb190f0d30e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
