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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LTJ4HH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuwpf%2FKiGFD31imjWxcGWTJkRHuTQ0HHSbrFnsC4GrDAiBjin4oseZr%2Bu3h02rq%2F8aN8B5dS8g480IF2K6UARSgXyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMwfNgvVd1bFz%2F0YlHKtwD4Ab57TjXaPuaKWb5kOU%2FyLM%2B7yTDejQyLpXvYKqMtr9fygNpLGyu6pDias03BpA55GJ0MMTdTMHkvANTN68YrTzB4nNGF8Pn3%2Bi88eJTyjeqHKHp0elgOrUH2XndqiEdH8UBh5tHdaX9tY4tQnBx3Viu%2B0Lg%2FTDXvjdHbQ9VyeY4G5jX%2FUKCpNxiRVV3%2FuGsxdGbsOvls3GD4%2F8sgNgDHFWPS%2BOgqBCWnQtjRiU26m05SDg9NX9BuxOreZpWXKAse%2B800kK1jyf7%2FDfvqz5pDyBrlBbG9g1HdQMbat5lyp8MgQ1yTK4KtEN5e3%2Fzo51uufvwVvEuUp%2BnYgWo3Onf73pdVpTskIaPEOIsqoCCQ2PInXm0WVvKV3ObUbH1T23ivM9Xz84lVi6Db2MtoWdiNnldZg1%2FI%2F73cvx1IRfI%2Bul0KxcH3dBKieIDHUOCCq58%2FFyXJnHchFo30hSYZlj6Q5CWA5wdZOdx36A2f6tqet8o%2F0IJWwbIeblY95CLu81vs3pQ6IzYr6X1Wrp76ENdQJaE3pxXYwyZ21q1zObjp9Awo9iuOuNGpXr%2Ba%2BMQcNG0uoOvdfdYMo2P8Rzf1T4DEJjFfbREVHUWHCdOX%2BDqwgAIlds0Tn1ZCqPfiTEw5f2ZwQY6pgG3s8CY0hdKpuSIdpvUEMkuTgOftH10MYEADUpZEWobCcGLKF7M53ztanN6XxsnV1YyzW9G7m6DOsXrxrmrZdfoJhPHaTYWQFoH6zb6i7paoAgr8ut0SajtJfINLGW%2Ft5y2z%2B2URfurbhIQ1VyEJBTby4kHr4QTiEIgb8oDk6REX6k1PkM2r8Koo%2BlHA5dVFfS1X8dsoqKq4UJ0ZlUAcy1Zc1qtBPHG&X-Amz-Signature=ed6815a72b61aabd4bc5b54477261b8eff192f6c28766d28c4a8fa06f7c504ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
