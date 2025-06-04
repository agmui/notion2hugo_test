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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGWM46D%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDnDqB%2Fd499Jol4mZV4leHtGhWIWc5gKAGJIHBZ2dIKWQIhAJj4LPMBBTbyJ1v1Bcu89Wy45lw%2F3xRzauklLLMavalYKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1C8jKubfoJwkqNz4q3APprrIguK6UEOnQzPv4VAt26vDsj1ZGoL6ztCpEhNubfCoVPS4DcSrRhErwWuitevV51KikuCpMcADoUTMrpOj70xQEBM7aivQUCNj83mHPFB%2B9QObo3MBikLgni1nEPf7azqOKI9TnIoU6eKpvXH9rPQVdHouDNda4Og90BMOXgMVR40MEYJrzF%2FvxM5nxi3rNXASt46yKvddJuPl7NsRQ3XFuHE3AgD6nn7FHjZxhWfOaazTAo%2FahrRi0Vz42uXQ7jcna6ZieSVoxFgVsB%2Fl%2BQPUMlZsjuNU5z9vHB91JcjpyiEL8d47whJamRHsoC1xIu13kDk0zV8%2FhBXae16UFsnG6BPdb1anqkUOm216EeBOd99WbTggmOW7FakthZVj4EmM48uGtptQR1kYnqKDl1I1H9jiVZpzeUudexOw3uatPDFx8i0GLCn0dhqUKPp%2FxQhkpVldLnV8LfCo7DmW6I9aVTnL7VU3odMucydFjNENJ33TydAGjaOxeYTBa2GOl%2FxtgNvWrskHCzx5KLFQOAEvj%2FA4QZmF%2F8sGk5TMQFRvd6LgXYH%2FkFAIVLZZ0OCJ49OU0Jgm1dhc5a88j%2FapOR81Gn0gUt%2BFCBN0XtUuw5NTGqDG2Tcrul03L6DCniP%2FBBjqkASSo4VIB9x7e41u9WJtwO1oS6YQPKdz4%2B03z7nMwMNXfHxALlhKtDe%2F%2BakGoi0yVvWOa%2BuY%2BYJsQ%2BiGlV3saE13tRlHUE0lcEQCgWyNGSjwzpZLjUuzE9LNz%2FW7QxB519q47vJ4kKCarcNbwXmXOqWKGImpy0GOdvRIG9YdRejUjL21964oWMi0VnSLJDqJL5jHRl%2FUbeK3kqk7BhFLBqrLhHDvl&X-Amz-Signature=473b19753c3c61680ffc5ad2d4a0c0013c60af16aefa484fe1554e689ea83862&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
