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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP3YP6CF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErLei6EGKu7hjyOP7Z0Jh2QzRCg3zvC8CfTOM%2F6Z6dhAiBmwRto7QF8z4RxfKp%2Bn24GfkL85S6MffqdFWBcaI5GdyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRNc2WLCQbN3%2BoESKtwDxxj70AF%2Btbl11ao%2Be%2FYkYzALad%2FOoaDQsQ6Ze0AXyucc5QvV2jpONUKDGdMLThofU2Nup%2FC3FqpHH%2BRJFYI67SjyprAnnTpQDjCUGgMQl2J9zr1aIV6BY4WUW%2Fyk3b3U9aavu6D3XR9ErsGEErRudx1Yp5rsxC4N2nYCZJFrLEW51Y283BWetswfnHlDUJLLgiC7jvhM3DXwaNTuzF0h8CFe%2Ffyk05VSHfHUzT0zjVM5w%2Bo1aRw69dgPbDX9A1fFITjTeJwKB7tNFHWULr5ozmOLLITPx2UeEWr%2FbFttA3%2BhEcnIy2jUIkQJyxRC6xqXQ4GcKsIwIznAa9%2FF0ExaVwHrVomXvaHEKi8D5U1KH0CCFbwqX5U0xvB7TRma0qUc6ovB1RIURcTNmvczwdFAe%2FnKSHKLNj2snQGLAzChVJD538LB5AinTCg%2Ba6HT5ORgJa7JusbyEoSy1%2F5%2FyKuPyHROp2ZHkIVUJRP1jEMyw4PNKFBRruYQYPhekX%2FLhoKiY8r7ZA2ExXLjHS%2FXrCasuUK3qF96VnDuMQfftto7lmDmwytVX3OitvEbG97RmAfS49ql46rJseuLd3GIx6TKwlE0gYkRIL6rzDvbACUU6uVVtVJUOwV5xwkh1QswpZDbwgY6pgH4MEeepK0gKvr7LqxcQl2LK4OaN2x9HJxRvkfCurwBrsWj8YSkSHx63%2BliNG9Ivz5AqYIO3c4iAj9O7dnbP1hGwXiW3I7ITZxPPLmgio8ehBlWHQuyEvLNncICSExHHygSXjTkEW3tmb%2BOLVgtjAFCQWPwfT7QikYIOtxBjefs%2B1U59Q2vb2Z51Qc2xcD%2FF%2B4RrjJ03yaKRhsqCB3LkCZc1puXdDA8&X-Amz-Signature=1c6b371711293093d9b90afeddbae6f848f3e0033328346b7c5c887705adae70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
