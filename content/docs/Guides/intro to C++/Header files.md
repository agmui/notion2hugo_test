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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKLWIMB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDZluFJ66P8UwOml45SXhTcs7YHt6BY68UfE71CX8PVGgIgVhb7lqahetM7XiE9NpfjwOo42AN%2F6mY4yLeADdHG6VkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC63xM%2F2I00OXRo8byrcA13yKOk6DqBiVpNrtEy53Z1ouSpvSgtKzR9j7ZVM999laPTmRHeLgEn8tE54I8S6RxwQ%2B%2BrTRSDgT6eNYtKEZtIcdmH6F%2BOG%2BU1ElOLSpaCRdOgs1xXFH4fnTDI0%2FvxZGJwXAOa6rPxFGiHqmUUVOozAqAlBjCAsNgLJp2Vnr6WQdxQRoIcf%2FNZIY7EyTNurixcHyYAuRyDcFD9aQSEdzmJmUdVvPAdsShMuH3yVB771vJa0w%2B6dU0RVz6RkLif%2BBRUJy7AofuDRPhhaKvangyAh2Vcxaj80nkfpdDcdxrOjMYwOON%2Bt1LrZN0xkeVZTkDjYyolN89Tg0p7z71ghkdoBItSA%2BynqH1Jo4HT9o3Ct4gzCOHYc3HXkweD4moeW5kc7JIHNCMUGrvHiI9t0usN3ZDbqqTheiWZfvsHBZi9YTihAuDfkNXo0VaDouwOGrDRrZJqSpMYCvVyfLzFYpg8m3%2BuIWkQKy%2F%2BkRR5IiWwG3ZkzbKypoCQtIk75TDkuU9Dpi9AbfKeEc9tEZrDGA6cJs2za87OUP30clQNVoQskV0hdgMIXtxoefYWDOx7QQCCFuaGPAfhPv6l3%2BLQgkAuOhJ5UFB9VQi6P5D%2F4iXv6YoVQmBiGFx7SgUTDMPnXj74GOqUB6SoQUn6O6cCflNWMiHnKV9VTl0zkNPQXaRa6s6Nb4P8W3K8DHP3lQxzx3xXj9SyGIsKp5tYolfxdQJQiNd45nIQnrBnqr7w6fuMf8EnFIuYOwCVd%2F0NNz6H3FkGgpIBka7nm161sswRafYswCRAPVENsXvyzv1Or0Rs742lrVvkoSUTwG5bCwf9zCOxfUq%2F%2B61ksb6Wygb20Zlg48mBppIrwjS8T&X-Amz-Signature=dbafa3ef03556e3048f53fa01e18fd8134ced9cb8fa32dedebde7048ee1684e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
