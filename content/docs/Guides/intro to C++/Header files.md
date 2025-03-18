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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKLJBGY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZQbh%2Fc%2FXLl8Yb4B%2B%2BZWOwRnikLPLolT%2F4oHvLiw9SugIhAOVlhBrgDBHc1sbfi4uDrQEObp%2FuOELurcfIa730Jj70Kv8DCFQQABoMNjM3NDIzMTgzODA1IgwJ8Yw4QFEDvAIzspIq3ANE8V92tYzsQeaYfNU9Ob0Lfu%2FYKLC%2BMQukEeoIooesaPwxRPrMo3m3LL1uVEJwqmbSA63iiSyiUtxJn7zUAJWEKUdDJObh2h89jfxdiAkGEywxTBkUy7oevJ9I1Bnu%2BHNvU3dg0hRpFI6IyALhaDTHz9WnILpu1eVXAxBnI%2Bj5j%2Fx9A1Wy%2F5NjTdW%2FubAw%2B%2BpzHEWC83%2F3PoC5wUN5OTeGbssH2rJhppHEoPo9GPDBCy2397izNOM0i53LkbsrXVvv5Tumnx5AzpexSebpqSz%2BkQX43WQdZaNDeMZOIuOf66yssrK8cOfLdJFWgDhe35lNT0EEBxlrdbZS7%2F71xgj3Ct119uwH%2BB0SFRsBJiUXP2wh8oUbW6bJsrohp76zYaDBC4iUvIkxaEdr83wuP%2Fhd4vyhAuaxYkXvsbdcOMmqkQepC9E1ELiS2wSgCRaPpXh%2BA%2FDlg1hiFxOTN90QeuGjyMqD7or2Sp%2Bpn2jwa6YUtHXLsnJzhcx6%2Bft%2FOTGwnQQ%2FcmK3fa%2F3unHsBhDZNWrA0igwphCDqklCEyoaTv0xwDq%2BtY9WeG1q0lKhddNpRhoJqszKVIZ08Nhm%2Bq59Ei4o8Pchdiim78aELEGQgRC1WpspM0wy%2F1PArgeqnzDYyeO%2BBjqkAWciO7mNGW1VepbbD7XCnsCXpJrqUPyR8SSoKwm9YM3r7olPS2zgyFt%2F3xXNBNelaMDhmNXommJKVkDpp2J22StVVh%2BbMxy9GVyaUdlQ9t52EiD78XjnvQshJoOt1uyJdus9zkKiMXFTO1rwq7rOTOBFfSMDdaRC5BI1vQ4IHDEnJoclY3oxzN%2FR%2FjPBdOt94H1egnuuVbm9RKlnjRcXa%2B1Cgkrh&X-Amz-Signature=3307030e4e3d2ef081ae554bf46a9e4d725d9551db948abc61f468d10b5a818c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
