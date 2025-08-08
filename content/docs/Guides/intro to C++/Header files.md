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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOFCHJ5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGZaJqU%2BNYTuNaJRj1n5I%2FhE%2B69PvBpmSJbXX38FDCiOAiEAzWUpoqfTAsJY6E7kmV8fPnyOT0esZhEWnFg3kpqzfHUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJicQY0UNYwpVMQhTircA6HmRSmdfKAHyiYnvIC4mDNSrn7k2jIJHTYqTagvVkJ9mfUmRxuEojuextHVM9aQFrdqBgHlIVrwvQicgIBYwfTADV1GhOBdzv5zIu00QHLaeXXffFuCX9%2FyVnF6nuk4V6Ia4MrdIT2in8wc7%2BEIWqSxyFlgLGk6DQ%2FecQjWBiUbtsI4ChpHLTk7iXwOXvIkH%2Fs8CB32843Xb5ChNEGDTBHuR%2FxfWBSXNnjsLaIm4zL3%2BOgLiC6XcmaOn%2FVvZ5HwPhEwLchilfVT8WPCQ9Dx%2BXlA2g%2BG%2FuJ1aQsMM8B3W5HgxFKJJU4pQci4iXQvM%2FfSMP5WxOjiuPRcYZeX3NUSUZXvQ3wJWOEoG5FMzB%2F0KSnsKKMKc970mcmYfHnd2ABC9Et%2FFkbo6EiiM4hPR1%2FXomTYQa1eOq%2BCtnEFHkQ%2Bkt7FvbbFO56ZYou3%2FLzRzr%2FE%2F6ecILjvz%2ByezD8ieYRNLWrQg%2BVOFkyuJ9zQF9hdx5CV2WRkGwq8f9r0tWMwGgrAlbW50OtiDhzZzWSAySY1l%2BwpA2v%2BqLqB%2F6hVPlqTtxGsZgHHW4FP1OTJrxOxcUoYdEO6Jz%2FI6HNNAS4s9UoL%2B4s1XbXKbtjhG2iLhAXiPiGwCcvJKhXS7QdOLFt3MOTq2MQGOqUBF9jw18NsSE1ArAGOuUwznc%2F6ixIwTIemZtdx7z5rxpmv1IQCHYZkWrEowBcoH1hizhYFrNVdY7rC4XTELll5dRDDxzZWj12QxL3%2BaFVK0l1lC1c3xgMDuU%2BHM4CC80d415CO%2Brwyhbciv4KzqIO0YxiYf9G9fAAU2yweWZGThuWUEIW3bP7vScXwzc%2Bjc6HxySUSyu0jLSyWLJPgbYrARcURyN8S&X-Amz-Signature=c07bb10b1f4a98ea2412bb0e482d4a17eb788dea2a02044ed72a34655e71f2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
