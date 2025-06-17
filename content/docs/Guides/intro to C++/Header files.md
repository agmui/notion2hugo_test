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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF524XM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BBPZdea7A6g%2BeavbQ0eX2ZMmP379pBloRqcdmPMkDUAiB1jwxwcDtP5ttpyn276Bdl%2BNB1%2BzH032km582Q%2FG3fWyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMQr1fa%2FM5aVadKaegKtwDRUiWhYOAm7QKdz%2B3EY%2FyaTOrttV1w7G%2F76A0KNX5XGQz81urrpwqT%2FCxr3g%2BDHlureXBHB%2BY6L6%2FSnOatyADOMtzfXsRIoZk9ApMrw3zw9Pbe%2FzZ6rlkk1eULfs4qZ0Gnu7NHtErYXi0Tl%2BZsJI3OG32J2SVTIJ%2BIrzLVjQdEeIMcNuxq8p6EueTmuX%2BIxzYLKZve21%2BuQUrPEe8QGuxFk%2BWZA4bNFgt88Q619MJSt95DHaLm9K4WSDsLQRX1kCpHT9sSAR2UNNtS0yVfRt%2FFUMLrbWprPShE6uRNkymyVaZB0XnLPzSEdC6hG3piniTegm%2FB0TnxJIrFw3%2F5EJxcRRB6RFqvohhmjXPoVDP%2BdU%2B0pGfkqa%2FYkUtwU%2BK5affXu99zbVvw5sXwGcUNfPqIXzIbZZAYg1AvZVibs%2BdWFjHQdFNHWlWxTo%2FyitF%2BrknwbswnZ8eELm5OrQHbkWmQvoCE%2FlctpjFmnfnJHZrAG1EAHZCl2RONDqRzoIIKaohPLOT5wajaONxVJ0QIvyRi3Q%2B922pYAcnHAlr3mNhaPQaTK00iwSJtNXf%2B7h53Vzr5Zl55WXkCGGECXA2ix4F3nMHg0cVMtyEUhunmA5kvQWZdOcmUf7UinUIC8cwo4nHwgY6pgER6zrJuqMVZPipp%2BNgSWpFaGttQ73JEMhoExi6TnSa8OcTKEhsjCOt%2FU09uZ%2FOrJJk1YhGxV0mDD0sq8BWuaWtH2Pkg0zYZU2gZ%2FvBtR3%2FaxiGbH6aJz%2F2NXDsyZnbx4M7nQsO4oBCGHMRoT4R%2F%2B4s7N%2FWbDZnHqSS9%2FrAyym6hCNROLfpf9Dl61HtD0FwJigKdh9tpjlmx1ZYl%2BSohyHc0SUB4Bmw&X-Amz-Signature=513ec8e72257978f95f368e6b6534a67670b704a6820f11753719cd790c9a35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
