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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OBZ4LU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXU68ymlRSFuanMR9OgJLL%2BgGYFzyctKXjXo8pUwI87QIgS1ZyOtnesCQsNWPQaLgiVczYrqwADq%2FgzoMO4iDcwUwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzYgs98cvlI2s1U%2FircAy5MskEfWnn6sTTbGndPqhndzprG8eh%2FjyvrisjHH2Yj4To8JGHFzcPiou7O0KNV0yVRp6SxHqQki3%2FE6bwdMrzRLpRkn8ZlIVeDtxOdNth9aHmSWxu5NH%2B1vwgVqpoHm7eKTtv0XEgfouk%2BAYRufOGHBKeclapW77KiqqboHvEKkGfG8%2BQScOFJVeIrYBWTmsQnhT%2FK0Hrg%2BZf0nAXKJWnUAc7aKlS7rGnAIYLrhqVXoyofRZZsX%2FjkUjnf1eX9BP2bVfBAbCOwWp4CimtBGgZJ%2F07%2FLPZGm0JWLJy%2FKpa3hAscofic1CtRbHk5UkXVAIJQr4OvK%2BBSYlxrkW7qB1e%2F%2FMU1nIUVGPKdgXeQjB%2FMwY3lg5ClHmpccCCyb7eB08BiE%2FoVbQ1CDRDiOBjxGaAvvtiZEQyHJFhzR%2F%2FE4honzJPqw9DlXHKe4rgoqTn7GGh8qoCjkhip90tMoHzzfr%2B%2Bv0OKuxYtzj%2BrkY0mPOcDQeksDyWKBOW3ld3ExXomFj23fpGeQmfJ5lQNz3D%2BejIHmQfO3pXBGReDnAng6ZKIg8PwSeDHr78ViEgwzillnY9wBcIafWyvbVS5q9cnicpyfuHfll2mLdz0iPBfFzii5JOkwtO0OCTG8ZY3MO3i8bwGOqUBkPjOZaoetzlUr%2F0j61HtNdxopVf4dKXj7b%2FGU%2F8u%2FQI85fSZBOuLR6hWuSlF8VNT%2FmmkK%2BAg8MSrF75xV4C%2FZNflRk%2B%2BdttgLvFVpfTW8BsiEmtPYL9WCN7rGjq3pZTiag0ELipkb7YUrxGu0aTTOsN00O0vzRePGK7jiam0iHwZgrniU5Y3cIk7VFI6IOyxM2zZFivFkYl%2Bp823EWjUcahs5fCh&X-Amz-Signature=867779a3da92f80703e65a31e9b33ea4eff669be0fc9f382114e172c7e461533&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
