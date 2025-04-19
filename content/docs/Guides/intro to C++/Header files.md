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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6A54UVO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIfAvIikpYJ%2FNTcv5yywUKjfmN1pPS9oMJ9neY8uq%2BfAiArkAATLbEZCiSyEtWJvmTNoaawG4caFSK1q6kubpcU9CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKU03daLkD89KF9dhKtwDcAQFIX4%2FwriGlK6sfWMHqzmYjMJytRKZvr22pAztSDz2aKfDW7XnaXj9fVN4bo8r3zTcvZkjizhRsyQndXLEd5s2DsUBn%2FAI9gNv1hC4n6uuaFu6FhiQ%2F%2FruV2560Lv0%2F7OTrXLePTctmrsEIMzAE5AzwUW8hFxCeFHvHrtD%2F42hw%2Ft85n82bnVN1zFcQNQwjho4KzkzEt0gYudSJ6VJyTD8eYK%2BO2f8mdjtst4yGgIgGZB9sqyMAYVXVqp%2Bk43pHRGCeEDp0uNF3K%2BobGFveG%2BWbbgScMVuZR4K%2BLVE7oxYAMzEiWqWrlaPIdfcdWT6MvevQAeLeuCFOsj8KoOfg13qbj2WzL0EHHG0Qe4kOEkTuG2ihDk4crlzzWEB7GLCKSx6Mxd9P5AUqjxFSsC1W3v66m9%2BgjaM0j54FOdM0LJhb45V3hDny9DmoNlLMg%2BuoqHctvuSfLEXgxtGTtmEv%2BXIrhNqFJFAHJUPPfFuIlGV5rhQJjGk%2FVJ52aWTlNIfXrzkCuolH7mA9Mdxj3Lngep5iFA4IEZmGnzj%2BwXIZq04vn1nCoMPjw1ve%2BS6ZRoQ8Vev5n5tTkXOrjIC0yk1H43ckpD24VFuvhIAqY%2FkR2Xr6YQLQUQmhrpX%2FX8w6vuMwAY6pgHIyXnMP663k5ZTDeWRRo%2BZX%2FqjfuTbLQWbDo1E2cq9p9SU7KlxB5gVcCAt76avWhHHVuOwHnSQAtD6gRxe808%2F0XsoiesivRItk9xJLXNLRWt2ozJyqQnBrcnTyQF45Bk6sPPTu6LVOk0glwXJIS3G%2BIhapTsawap%2Ff4xsHP7PyN9Gexz%2BXcblWcrB0JUKPEanm3gt5JIwBr9KjQacuJBVlw6cu91e&X-Amz-Signature=e4bfacf1c5177dc51ccdc0b991e3ebe607c9239c9480ec48fc71a24752e9ef7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
