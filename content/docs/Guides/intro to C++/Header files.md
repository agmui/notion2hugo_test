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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRQ6BU5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDUVbG%2FES3snYfF8f%2BsAyOzj7CcyqYb1oqfj3bVLzn%2BEwIgQzFvceM0dRaDKbCkw84sKLV3aLZ%2BHzEOJvkvJz6Ot8EqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ2IX3Hs0WHraOfRircA1H5AjUSJmzCXydwI0kssXVnXnGwOpL0GqzI%2F3Uprvw%2FU8LDMiKHiCVQYSQ5EwOpYnYbu16%2BQsr4urfBrB269VnP6jg8SKMNhy8qo3F7pudiGJYhxviqhZRHMPzLGLwtqRBTleS9aikYGu4EwrB3fQcL3ttSLpRu%2FGlmR8AkBTrtt5z4SG9XTzmsbC4AknAveJDrXZVtU6Pju%2FnxjwF6jv7Pau5%2BL3IdL4KPB82e2PrqvPIYNUjSp4TlCF52iV87CuDdQYcyoKPp9A2BapdZRr9ejx%2F%2FEBBWHu61HfUcAYL%2B0WkbdlcDZ6dmL%2FnCKiEiI7D0gsYieJaB7MQ48m1tOuPDwUl%2F%2FFgaZLEOA7IJhCsKy%2BVwcy9Zg22Knv0j%2BUudrU35vMTpvAyf9mJOpKY%2BHl1wGNBg1NmRrw1%2BP74910Qo98nIpAbS8RbQQr9aJu0zkTOIC%2FXDXTE1RY286B8vOAvfeq2MdR8qLFRkDu4SYVCv7WhT%2B70jofQ%2BDvyqPt6z%2BYKIAbWOwekc1soGXjnBu4UlffQr3pylqlAuUrAwHD8IaSWxIOCc3z2ZIRcCbsIKGFLRJWkf2JHQXXX2tZGlGqDtvVewYNFAb8If7%2FkNh9MEBvQNuUesftBrfva%2FMJi%2F1r0GOqUB8yqxuHLNuW8GsNj8u12U74bNLSZ6xxgNvXo98QL4%2FqzTb2av87BytEbjeKNT4mmo7uVDZs5Boc0x7SnNto9tibFLAyudulr6kv28pkeh%2FWjKdQgl2Z38HNZKzV2HM1YnVSdSviNrophAoxI6MD26ZvVN2BdleTVAO%2B5%2BTN5askJZ9bGC7NMvy0EdpVyS%2B%2FgwBiPX0PlpfPkDnDqlo7blmfjr1FMN&X-Amz-Signature=51bcbcd059de4d91851622b5e4b7b673f9fa1773a4686c267db091f2588c1e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
