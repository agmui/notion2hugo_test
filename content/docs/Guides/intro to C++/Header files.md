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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLUQOIW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWL3YD2uirh%2BYYigJp3SpI%2F%2BZ%2FepC3F6TEJsqLWjc4BAiEA1ALj8spSqjS0hDYV0w0Nnyy8NPJ4W11H8luUUDqAzgAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFrzPUtExbuKRj3OyrcA4ufqNh0W2Cebvc%2BEY%2BY0YN93Og01az32rhBOxsJH8vJpjREulBbNd%2FGqB0rT7OUxbCUqbBSHLSwrbYn3ZvfLekK9iPWSGtjcUeVUtIzKTdff8C8HNZQK6zh0QMC8q2jocb3bsFwWO7RCHPcyZII5kpV38gMXgyMEQHoBzY4EHSHpu0o6Sh3XEq%2B5aTWUtWG8IeicGyfUc5MWFcOX68tK4Zl5RcmZrSTEMRDJdLLq8JrudDLhv6qEvirptyc8jAVs9d5qpK%2Bo%2Bqm1Fr0KLgYVR0WkP4y72M5ScK7ej7i5qq%2B0OkqHzF5QpYU0ced7aZhmLv7qZS9XNdi0cY86UK1R%2FKAjVUArUBDa3Ba2g9ui3Uv5UJseTD9Sdnp1n4mFhHqShxEzZXR095voKmQVT2Icg99EjNGysFQndKlkyfiJ8xQQm1UC0mOcxCUhiv1%2BC7pX%2BznPqSe5neUT6h56zyYEfUoGYWvPyB1Q9NHb7hk7DaAybqVnT4tDV5o773rtJCGuZs7dcVmyMWdOFYdR5YBnjZhR%2Fx2e%2FI64Y0UjnTDfAc5l60lO7kt%2BKpLnsKrZrxZSahPfdoeIpabRZZSU%2FTvURCjivCUOTSjF47htaaxVj5HTeE3Knw1WzbQ09AlMJHLr8EGOqUBQqwIVnSETVurL0TvI2FcNIGvdPbohSCndSqfqraFjiiOiflxG%2Filk7Bl%2Fb5%2BYAE4dBn4H4ntphX4NhZhT9XtXoOV2tTHn%2FOtl87K0lt6dtFoSxsZYJwz3w8eS52F7NAnZbEzJBpNbC1bYEiCGmoaRieRwW57dWNRlTQ69VYFXNT5CUrvhEV13OmbKrJLv0bzyw7a85zD2Xwo6V71a46er2ZN0%2FdO&X-Amz-Signature=8f94f1b907deb08b4a20d09cd0fdb7c47b4f1c28ffe228401a6e78eb4cb50f73&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
