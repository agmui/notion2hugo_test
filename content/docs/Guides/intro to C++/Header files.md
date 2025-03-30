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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OROTGB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHsJdL1GgtdBhFWS9HCN%2F2ZrtgBV0%2FKuppczIQ76t1kCAiAku2iZFY4eHS7yAmobXNpclmGg9XmcWaL0%2BdU7sCZ8fSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfSlI7XlSS2owl9goKtwDtkHA9K6o0aNo9lWVnFw5pp%2FK%2F5yh4sAZQ3RRDEAkW9lHJY4MQKvcIe7ztXV8WdjwSbwhBKGN1lBy6Dj18K7dOksJqs8bkYHjzBaoMi36fepkuyU1q8wcag339U8wUBfMdOFJPgPvjUSjvZoZLQEaAUeiDX9mlFnn9hGzcTw%2FpxiuNC3N9fzmRO7HSxlJqMbFFrvNsKr3hwSnKmwUlwujcoC8J0VaHDuB5E4vLgwHhXfDWt2mbjncwuBwbjsb5HFACnU4mz5UoAYvmYwxC37Uqxgpm7O3CGE4oFXcrpRV4EeZgVCg2PuLS1Xnyry%2FzPC3dKCiVv6dQ9iZUFKsnNcuqEXdR9SM9qmgKdBds9pOqxqhLUsT8YejJq2%2BsbeJIIFbAjpR%2FPE7GVMSu2kfBNIrnYlS15mWqzGeb8ifIlhAsDPiVLiRV8UocAQNzy1Drx9%2BEc8GnPLDkkLHp90sOBvHEcx9dfdG0SUt8MQUYrtk%2BmK0Df1%2FeH5lOJC0dWMzX8yVpaqC3IIDZWGeGhQBjguOWBIwni4b2T3dEVFh7OWmHzaaBhVxqdkljIOtJyyO069lqhAfTd4BojZ8RHJvxM9u2FwiSbayjQcgRytHf72bh%2BFRufxwbNU9qXvRfKgwhPCjvwY6pgFPp7RZaEtK8st6SDdx%2Fc3gmbcGQ6hmX%2Bx58pND3b6WX9%2BvxIXHNcu3gDZ5bkSb9rM770%2BFT1T2qH9e0jSez8NIFXSUDP%2FvEbkHoKk0FdKn5%2Fg88%2F%2BbenAdUoYJNjVDOcoGz2jT5vxM0lQYggA1vY1Hybwmwi%2FqS8uCoDju4CdU6ch56ihURIJKwHsH5%2FXrODnKdpfwSiVNV1KztZdFG5MLHWy7IrkO&X-Amz-Signature=f032b5489eaf4cf75fea00e956099ce00eb756921edec7eb799799f70f0d9e39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
