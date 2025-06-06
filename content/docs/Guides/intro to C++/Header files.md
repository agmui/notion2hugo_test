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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TRL4ZV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5URvA2H7WI1gOlJrTqM0lhINNInfhwn2vdIwCP0qQmAiBuV8e5eNqFrulflqb7%2BAZgdMgMmwWzVKqb5nVGufitKir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMlJoWdNEL2IqO%2BWzWKtwDGEK8dAQ7Znlcxz7aOxBCFA%2BQ0BvoG9GLimcLBYLhGNJbtkDEKNbUy4EKNesEyMkOAnW2dHQrqxJL8jYOqx2xDdy%2Fo1ryeZrv4uppd1FUtOlk8JBIKZpC%2BOcrRAzOeH7cehrMgUt3qtXBppgrA2OkKWQErh4VTLWCWcOiz7GxZUcnN6UzIxF0ZrfhQlCLKUACxx77uw%2FYkWZAnj8i8L1D9KC8KOZZV08ID6gbOYZQxaYLHgak5F6Sj4OdNUbxA%2F2BThyikFKW8edGLyBVN51zixzj%2BmVgAv8eYsh1WCNGoo67ezDpfmHN%2F%2F%2FLDhviLjxeiJqWD%2F9LD1BWw9DDb7PVOn%2B8UMLJLDfrMNiiqueztMcqlG6HoXvY4uZKVS75m%2BQX2houo3bgdbrnYpBovttXejBkFY6TxbJisdWBKlbbW99iCeJZ7bVleeElVY%2FF18Pop%2F4U1YawRRHXrqp5S31covf2AInYNFosX810GyfPGd9Hrj2CyzDFVBwP430a15OSjhXUez2FPmmvSH809Z0m1LRpUkOCjDS24SVK70yqYzvwvLcpX9bpf86PKWZeJD7Q8olFq1WUUSd%2FKEA%2FD6ATZ1KnNW8fgESwR%2BmE8sUSG3BDHcEWlgM7UgDqJyMwupGNwgY6pgFoI4V95I9cwpb2v6YFoVutfFe3cYJr%2BcuIdyFjGUipHuIyq0s8dLnRb%2FFvIhbUFdrqjTE7rJgt63liQtwuPIA4FkQ%2B6Yxr22aEmEnldlSoLpKBUo2ljnv%2BjToiwYmKZ9qbQGYn1GThNOpAAm5rrkeACzPc7OUq%2FcXDhR%2Bd8F772CrJdMwSch6Bt3p3iiCEHXpz7KTRefxYQW0R2jd7BgALX1Yk7By3&X-Amz-Signature=c1df40aa50d2fee41f2b6980ba01ddda1c0af5bf0b9cbf37cd7b8cea3ac5de9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
