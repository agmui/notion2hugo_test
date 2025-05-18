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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFHIIQB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5wdcS%2FDhGvb8mIZ%2BM34oVcZKM%2FSfggJyeopPyAd4%2FxAiACeFFoluhKzUcNPOrB74zmxNvHl80iHM1otmYzyQxwOSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMINHk1NIDo6cjjTOpKtwDC24QgxE1wAKm1x%2BeLZg6GxKtIavNUH0ak3sRaGinf27hB1S6C1%2BU3bq%2Fx%2BuSvFtA73yABvjhlI901z73y%2B9gZGJ2FbVhMaMXQR%2Facv%2BnT6gaVqbEyMcvytkok75g2ogGCoDQ9WEV%2BfYh7cQAoaDmq1opxqZjVNS0ufpnLaHwx9bV3FUXHzbWhFBOUHHSfSsQMhdaNKhN9sGLPwXNBh6IbjwpZaQxXebhFRqmiKb4djEgpXt%2BvItfZUgUKxh15MezqNiS4RxwLVBowm1mNmdnaxTA%2Bj7TkCLu3EGUpm%2BRoUfivsuM74f0vT2EbJ9MngIOu9hLGx93MqbRFeydoFdwHkfIjoraPSz%2BB4b5l9mw7hayEe01nVJBtvUNhkIWtiDhxGCohdSGXePrmwtIicpgB25SI0FCsTwnZNGeX9dbghY3YCOe%2Fyckz9fsMlq5lxSqyMAeiRzue8lrK7f5zT2ff34iK%2FQ6LHnHHwbAQuoF8NM0r%2F7Yd54HXi5C2Hn6sylA4o3W45Lj3W%2FcE00kKVvZhWgOiI5wl%2BDXBc6zDLoFh5H5on5I9V%2B6vIwRvvvaFcss4a6NY1tQFskVdJOpWgQLJQKa19H710uGA9bPuwMgZSSx5zFuj0C9DbTe8u4w7uOlwQY6pgH65A8zOLt3K7ZRbt6RNUvA20BiKIbGYZzPREc4yWmj8HEPGbTlSvPe%2BhQ8sX%2BR%2BdL8JT5WZobgXc71dgQj5rWcBlQveNtF5tFTMo4c%2B9esTJljLpAh68nK71oqh48nEGtkgI%2BMhyg9RhQMJMTLFSHi0iR9hB1yTgJUQpaPlrA4EQ5hX45JhyyEwB1FDb3kJ5Bjw1HbxqiuUR04FXuA0bfUw%2BisX8IB&X-Amz-Signature=622bf5225eb9ca35d13c32b4a205b8fe229229dc3930ecc261f9e3f6e6c62ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
