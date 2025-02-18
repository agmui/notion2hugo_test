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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIEDAB4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIC%2Bj3KMsYPTi4FX0rnk3uwjoU2TUG%2FZ0vHMkRVS5mDppAiEAoz2EZBJqrS5ZR5PtBHTUInabJ1mdqe7SlU9ye1nCRvUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmR7AoNLeqSWijxBircA1s%2Bk2d20KfAa5E%2FAWq%2FfQcFH7SQ7I4XxCMkgApadJv2h2oRfMvB%2BTMY0bxZHlGI7gbUQ1apOs0yHiE2QZXdNQI9qFPKqVF90pmkdWVpN%2BKSQXI4u7%2BtKJMvjJy1hmL538H67NQb3dAY2eYThTU32eHXWj9uz%2FwdwcVQw1%2FNrLk%2BV3QNJO%2FOTGLVxEXiUENua3C4EobqGevq5t5j6WJy1dLRlLVYOJEpfOQjI49s8%2BI%2BQGzjd9QH4a9axK1DRG8SXZ%2B3fWIMs%2F0gd92vjwcgAZOI5aj%2FJHPdiWTduV11uPU9CWbGb8EzZ%2BjkF%2BlLYfK6UFxI%2F7nKumYmpDgUkWlme23lXrGiln%2B1nfDiFMjVn2%2FE5aQGm6gcAdyZ5vq0jjfN09uaLDEb0XqEywNBLV6Yg7FsRXdR%2BsBH8PgF7i7jPqrzSuFGbwsaGTTN1FG4E%2FH5Gnf18UkVNGJRwPx5NIZ3qW5cBQiogNp7LdayUrB%2FYF9qAlb3YDodbEPxmHmvV1kSCmRZoJ9LcRNvjC%2Bszzily751nJA7Rk%2B141T9k7FZskMP9DC8iH%2FEJzGrksJNREHk3c2fUPkuHm%2BkmVBiAcau6t3ws42DOmjImubcQsgwa5maFxaq%2BnGn5yZFwNudMP3Dz70GOqUBfkSoKJe1%2FEHlURsS4%2BwHVr9LmAwmR8E5d4H2J%2F8T806sP2uF3r4htWlCiNrZQqtpTRQB8Ur7ax%2Bc9fthhzFcSOL1uy57uZ9ojXtBSLldojaEXC4RoXbdaswq5yscrYzhu83ENirSJ0%2FjQblXc3dk2BIA15vFjo4wCOq10wntjakXNYIhVtRq1yFTFAvbkM8cPQJk%2BJ5tSaRi0qRkkCe8YnKyNjFB&X-Amz-Signature=6efd4d2b0c2d88c0ec18755a3dac7ad6122da637067fb24ba5b177962ace9cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
