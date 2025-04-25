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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJABJCCX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtyvdGYtQ53Vnd8IyWz%2Fuy%2Fi%2BBqZOs04wG5%2F7gWq%2B%2FiAiEArZLvHpBmXeDLUfZ6YKkcV4J1a4KcKI1jNs13zJVaohEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJvTeTf6NUS8zaH9dircA0WDfj%2BpksK0vXLLhuJk7KQV8ztXHpyV5zRMrBfkGqcoLRotImceWktNZgc5ftQdT4PqrrJbmNjLwf8kTkQMh4yy91yHm0i8D%2Bu3Cv5DSLoymRC1jd2drEYn6x0Cmize8dzWCBfCR%2B7ayYPXPJge1iyz0wbKGFjrnOgARoJz5nD21%2B7c8RixPjYo%2FWiLpfvMtgcjt%2FjbZ4cXfV106b%2Fj%2FZlNff67Frx1zCSCrRMkuIep7lD0MLslRo3sFWXoLpAIy59FC9WmY4z%2Ft8N5FFPov%2FV6GA8%2Fsn0i385Sso01U%2BBWwXnpWUACqPmELIkdlzYhvxN3S6gTPFurOp2FAjAHyFQKmRCs0r76mEcvRxYAWjtXFSFqSsri1NbVsyn6YcKaYYWr5bYECnod5WgFszcbaq%2BmJnoMr1DFn9XIf0HgR%2F7LSmyGsn4VJClzXGjLLhafbK6tgRVbPpsBef9yYBvRaYHC0D36J3dByB0EYdWI3qyR9ZouBPrhDny77GtOo2keUaTLsdM7M6%2Bk6Kcz98NutzvzJRSXx3Q3pT9aIhhN03CvVoIyKsR7jxSAHQehqXI%2F0YiWNzTVHIX6LpGjbj3FDEuIiggGd3Bq3C%2B0eYxM2UpD2f9YRFuvVkmizFVcMI2HsMAGOqUB70yCU%2BsHUwthGWE7DCzlZNXNWAY3ooWrA11OUVeAfp6zWWHTEFhOWILHmg8pVe2tsLfMw6GMOECiy9pEP4yuVsJm6OatnpsSMf9bj8iH%2BNWzmGcbEz4W44u8xzNPMOgWq2eiP2QoRkDdEfydUL79ym1YrdvlG4rJ9ujC4wcGsoRD9VEdWMx3kKHKvGgNpnC2U9ZjE0g%2BrPByDcVQuqEkdpJfQ9l7&X-Amz-Signature=62ff651b0a9d3b728d5b487b57b926dce252436c6c760dfc7c6d68710732aa95&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
