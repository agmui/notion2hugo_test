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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHFB4Y2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDVeKjPgZ4YOP7AuTH%2FVK55wza5j%2Ba1TDfX5YHMx%2FUnkwIgIXfmFr4ag91thCNlBYAWQ%2B27Yu1fUZvlPtY5gjpOaxAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJWmtuXrqiC%2BgmFJCrcAzyZztaq%2BwUzbvu67xkkKcJ%2FA7bECNjhDDMCBpseaFyqLZnKK23JWcRiyg5wNTv9cUyW53Hs%2BPRfkZX9af%2FZF2dcdLhAoZFV8zU4z1iOqPSxK6QY1XzK3%2FlTtPgAYW9phWxiawA276RjafxyBP%2F8gn4M%2FiLKSeQTklJg3rAzuA7gLIcwsCgRASKPMKmCaaj1h8%2FeHc9UZAMjZcCFKBfl3N%2F52Tb1UM1tdmybfvm2LIqNyVo12SaCX4jaoHWi4BUxNYAkV4HL8a9CSA93qXgaArbSvJTu0y8DYp7q%2FzBwBDgd38QXb37s19Qga6nPuVR8IKcCJPYMt3fbiVLow4SyAV6cd0jlscgzrQK9LckbOV740AAcI3NXalBamCcgKf%2BgjeDQXWMDKT2zCoe8B8B41XimN4aOmKdcIhcUW2Es%2BOAF8JGDhOe0cA8zmuK4b4kOyKFjVSiO1kNhvmX%2B87S9choJHgHd3cwwBO1eBvgxBntrpmtdCIusWQydyXw20uHneRq858uO0zrFAzkCscYs2lDn9znZb2Wg6tHJU9Ce%2BzcV7h21vZ3Vc%2FMoZWna2IUJ8DUcl1hlLzypEVXU5bQAhJmp5ZyQ%2BRDbSsBw1cjVKHm%2BZbWB7gIzQ%2BLfkPkWMO3L478GOqUBoe1LaZRbMARMVoNpM%2BxU3UGik%2B3eFz9mH8Ln620XCQBDp0Fd9Zu%2Ft8xN7ILILeGWRy85fyyok2n44psbyDdlhZwzf4h2VL8Q7HGLXIqCvwFpdsxO6DIEaftVzs%2FoIu%2B9cgYfUcdms2znlqomnqOVLtQ7lsQjh2EcmZ2GeUe3VSqN96m90fyWOBhIoKCkwgqeDgOuaxA00QLH2y5VvhXI9kI0PG6k&X-Amz-Signature=b7a82f72c40eaf0cdd262ce18d9dcdfee24158ecf24c3a81c4e9588c0a09da76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
