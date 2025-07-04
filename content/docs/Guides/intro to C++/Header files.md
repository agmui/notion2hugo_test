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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEFR6SS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDy2nGDtcvsQoZrNCE045dKa0BX8%2Fj7qRSptIfKzYcrWAIhAI6zNEH85p8OfS1U0kKdwtko2tBopJSszLUnYDcUxsz2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgwFGP4Ar0S49fmompAq3AM6TKJj0LAFzkDZ9%2BUr1HrBpJrLXDAxb3cwwBnqYZRgvdwvsxnWXXw%2BtbO0btahieHS3ww1VwqY%2Fqm7jeTM49T3lKrgQJUu4tqhaRAZo4Sd3VkQ6TEUu%2FD%2FQu6vIubO%2Bg7FfkgYX2%2FPyKuCzQ6LgURE8%2FtIcmh%2BApqfo8INa7EwESkvMeJmm2CoPFFVDfDUKKIklF%2B53QYLhcJeL8WFpMqSPQye%2F9%2B3KLecWFg2SiVYKYp2%2BQI5cbGY%2FORjMyBmqF85B8T9IjbbRGkplBjUDNgcFnZ%2F%2Bhz89%2FQ8pP2ETkbh3mnMn3YSLflecCkpL5NKI0cR2688gB62mCUcbmm5DGC2%2BY4LxCStkr3PrKwgboWXay0FhwztZgCGRtABxVm6VLukzP3%2BshlykuUwGDAxvAarJj3IJjGeexV02RNhFyVOJLG1BeC%2By1opqSbGPieQVEb%2FfqICnXGb9vE8EiihOI%2BMADdXGuro84eSzXFQiF6CXnSS670ivxWJx5g6fXOtYXWjWIZ1PrvIWx6neG2dPocvibXPGaLAVZGj3cra%2FawEGXlFFwAB8KMTGpRMk0fl7EzkSo7nKelTO%2B6%2BBbFkHU%2B8JmXubz09oqPb8ERtVLGxZ9BgWOQZZmEuaR0%2FVDDUjp3DBjqkAb3dexOeyQBmI%2FJXOdMiHO%2BkKxZQZ2rR3tIcl%2BNNFpCSMyG%2BZy6WlSwRafm%2BmY96jmEw%2Bsl0ZstfFku%2FlTyCB2JW%2F7pvuYaiueuzFQEssTBDDnuIzRqjhAnjZfkpZ5i9mZU0JGp1n%2FC9TQp%2BZE4XkAjJ432lAS6iSgAh5bVioc59iaBvX9VoRaKb9H0%2FtHPJfl6cwk3FMyfqzYkXFcnuYTfKdM5S&X-Amz-Signature=712a7c04f5afa67306f8a5698ac9335e1218bc90a8a77f8cd1e955b802a538d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
