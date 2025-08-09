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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGG77GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDnWDUgiKNVC95wmPv16xf%2FV7vNrKAjZTd%2FR4dYF6LdQAiALqqu75WZHsiHmmvAKghbX8RaQWXW4tX%2Bbo988mlUPAiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLDDA%2F2QmVarTRk0KtwD6UnltAqBjGom3GV%2F4niesgi7ybp5GucnFQWRJGHKNbK5nRWwOfSxWXmigl0rtUSW9vAOGSEv55B2NdZrktSn4Qg%2FkVXdDLIIL6dCWvCh%2Bf6ix6RuI29JTm%2BjLyYiaDxvmOsjk3FeB%2BofpER1Yry0kfkBD90AzZpH%2BUxYhY2RqdxxscAL8vE1Y%2FZ%2FH6IJbNXtUNnMssYvY4b6aO650qPnEecddSwSxYGDXzIIJqrgyYCAoIMREgWM4yyKg%2BCnqM6YWwI6Jz6bGvNIF0Ud0P9aaBgvOGe8qzNLawXHZn%2FNm2cyfyJSELAHmtqwerkhoLTY27WWunhgzZSrPTMcu85U4SuCeRlyY%2B7xov5K8GFVJ7xbRgSXDGJb10sCqN03TlLQh7WGL6%2BAHGeDaAkqaHQXG%2BdO6spUuPhe11R5bp1mAAUods6OKmqmX78IXtAX8qKOOOr5tzvT8VdewVKIvyq3SXtuwU6cZuqgGxE4llCf427RnhPfkAo72YDGgASflAxYlbQz2znZLzZBIzhiPaSnPYDDjkLBYEk%2BquVrv6gGcPNYDfQgHUYY5YHtCSJr56jLHADRntzMZu4gzcK6EalBYHqZ3aoRqUnQ3o%2BTzMWjZC%2BkpZ3IaTKT3F4ro2wwjvbaxAY6pgFsWXkb5lqY5j6uZNGT9HuUEw7uRVzTM2RqPdlTLkcs%2Bhxrshs34j3Ppw6iXHCoI8ymyOFS%2FQXXY%2BC31xJ4aUlRScsQc6CZf7PhdTJN9tTzqBeQVWkHMDR0MiNOnGh0wGJm8k8Yv1BbUtOIfapnqZmIgXRs%2F4oH9INvU6fx%2FTJ%2F7rsU0GyD4TS356vaA5rjurUy0kkJuvHOwxwtQFOeYh%2F6gWHmxQQt&X-Amz-Signature=8f576fda5a763d9c2e33226f41c72631f8b5cc9c85ded2166f29fab1e890dace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
