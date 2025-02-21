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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64LMXVK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkGv3H7GOoCqfX%2FZjRTso73zHOHw0KYSd%2F%2BIk%2BsAEcxwIgITFrVAc76ZIDwwLm6JiPWx1A7l7KCRIEnFch6PlUYLwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvAsv7fpbZZ5nSbUSrcA5LD3lzg6ghDNYMnWl%2BeblijqvbDkU899iLl9WlmOfFoRQnfSR1qZbdVh18O10MSp9t20o%2FBhi7lvGQPdQx%2BJdbTBl0O4KR0zffxDf5QqeQmErLyvveoL8LzS2R781S05UQIjbB8aj0dtREe0OfZZlXQnoOVyGGaCdPuCNVqYjVYXsEZ3LJlC%2BIpZN9TsFQT8Ou0ofwVuYvliTVvesnO37EE0BEUvWHeXfISK9MMQ76u5yTNy0bzxn%2BM7sjdF0cxOTOlyYBvo0vCZkaQIfKRs2x5TYzqG3wXRzt5rAQy%2BbF6h6zqsJ%2BUbt1ChCj8C8H0oLAtrFjH791PLNmM%2F%2FUYfAX2Ed73fmJ7I3FTPvFUJubtlIM5%2Fk%2FT6Hqtrhqjc9u4noGxnGMJNAH3iA5z6YAfEVaBLQXxMsnYIU%2BiwsQ9KomINCSQd1Z1%2F9EXpEb6GxbazKNnGUhekTiGMDj1r088ZU73JcWRfYxDSIuQsFxvIrp3YhA2keHqIGjaT6MigxGoEKjPLPH9IHJDMLwWA%2BDnFOtG1Ih7KNzJXGo%2B2lkZlP3qZIRnCcb%2B3HtIAxczmF%2FPJhskcu3URSF6FntP1mQjMj7VT7rskAaTdGbCLS50qJjGmsAtHWwjs1mKTlhiMKfZ470GOqUBr%2BDG7n3lSqxoOYCnwa%2F4%2FHyZTKITeNz7CJZJ1ZW%2B%2Fc5iI0X57UeNrSj5AlER%2B9z3yHUOEbtqeyL6EPEyKB9Z6xiE02k7i0nGvWrNmnCuvLag2yhOOVIUKnwma9dKQ4hYW%2FLiVQBAjfot2%2FSdB9kLuu4aK4zkcqHWJ88qSFxHB6O4M6T84yAywu%2Fbiw1Mga%2BzKm3426eOcInG2YT4NzCz7FCFioZb&X-Amz-Signature=6104a3a5c09a8fc91b3300ca259b6eb8e186ac5292aaf6ce4b81592c7062219f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
