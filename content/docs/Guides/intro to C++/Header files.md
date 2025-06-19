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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMK2UNP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDskiotgKfB5OZp4nZCapEkqMwD%2Bj%2BbuRqeVQmbwjNXuAiBcRWBvitwEuBKyujXsefE%2Fks8DHqsyZqvjR1ItTBVhJiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknOEXekvt6S1HbAYKtwDS2GUfPuUojPm6pZu4ixuggJ0OEl58aGarSzGqv6qk6p7I6%2BBuRU%2BcevhQALOUlaAXXy0yiM%2FQrLuaVb%2BL9PsXZonUBuKxkTvNdMPM5dyM8M4HyOkAn7aKdczXsnXdFohmI7e1vu6lb2VSJdOuXJhTWGill0%2FHvHU0eg2Fu8SSOh3PWP1J2gaUim4BQXodxZYMfdL862spj7ZA6N7GLX7Z97okS6BbHzQ17hUv5p3pvdEZVE1C3zxmHV4k9rCsNclSMg%2B0oD1lV%2FWBoP6YCGaZurDy0ZZv5gj%2B33bfx6xTZ%2Bll7VxBUDVX3eGjpSE4wpuDUOv21Fc5S1QwSz8OhFtnWqZq7dHhmIb9afDKHJqx8f1IH3OnGDHFEXrq%2BDx8qxn0BaZ3Xa6yNmLQ1Awv9BfvqiIavz%2FkckdzGzch5WWagi9MVtQbumP1dunF2QQU7NjxoZj2lNOC%2BKTveQNEYEMbLrx1CTkGGZTU3KPZREGs54w5gAkc6LGZsBl2oiIYNcQvKrGOpIL4QdXc1aUEjgLmxHnqxXItezRuRw79Qk5MYPJYwPx%2FigDWV%2BbPcHbBRHRFVu8FUFtXhG4zdWqcJPgRVT%2BW0Z0WbCsu9UVKDysixyPTzCUGlHleRLMn1ows4TOwgY6pgEunokbVqeCxTh5lQXkdvfB0OPYwIWpMzRg5NkIblXxJ25paYUtdde65P8f2ZRD6IFjPHLn%2FWAUJQWzGIqKV2m6FBx%2FrecwylVO3REVgH8kWCpeINg56ry9PV4ht7t0%2BKmiTsVGoUGsJkh7nlm%2FrjsbhzLZ8x3ircC6V7CIJxfgdiU%2BBGhPK9lpcpoGJ34c%2FC71BinSgaEJYoU5mKoroQrBVCWIyzGz&X-Amz-Signature=08690a46e17de3c53cb4ba37c76a0209e2043cd9f1896d0b3fde7c46e693d309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
