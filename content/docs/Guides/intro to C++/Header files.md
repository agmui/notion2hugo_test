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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6OTXSR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFJsIsKA53aOcfxWovAO2ZJz9NITpAoWrRb96jpNLSVEAiBgTCXKzuvgtmoEeyhHilGTMIlBektEZmQaZmHbe8YiQiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3vgjq4l6xZbBrvDKtwDFxTJSp3IAbXat5gUIqWGXkLf37dJL7%2BGd48LnicLTHoA6SKg1cPFI%2BMPuknxBSkSA0%2BrnNiRFXnqpwI9mRTqRu5Vj7nfM1ADLEwfhX6VRhljcQQa752LfE8uinV489Nzeku17MYYNU7CE2fkvqDXBJJnVjSiYWHwpOkjqNnh1i%2FLWjRc7rHGjcRr3knzRDW9nOOJisEBgF7cRceI4Y7KVu2yf53PeoiBsu7896mS4%2BzWBoYKDUuKo4aXDgtITNqJtNlCErGpdjDgrSPdSBZ8ANxBGbUw3t8CY0A74FDL4ZPZ2vb1qgslIGSQSB%2BahK9USyCY3RptXV8dnn4zVF0M3EN1VzGAsgu5OeNllHfwRExEhTX7WZntwZ5hkWkeYSTg9OeiQdjHxlYeyGv9ug6t9P2BgQUjYybhY267UR9vfjGxzA7OBRMb1owx6N0IBXFGDn%2Bkw%2BRSphV%2FVejZczdyXw5u6%2FVLtPpXxL5sz9u%2F0qes9ROsdeajhmlbazxBie6h0zCmMoR5k3wp%2FfQFh1FRBDA4Fc4jNdc9OM3orwWalTssot0ER4sfWQpGQJbIt4TXhoOJgaRv1zbQgeXb7%2Fn3Q7hfnB2rZ1pF7MtfrduaJeosyqmKJjIQ%2BEYe2gwwo%2B%2F7vgY6pgG0oEzpVNw1jNtI%2B%2FxuAVI8SHO4U7C9sLMLe1oFixSpek66dNdoWsCgxcBvHxjv65J%2FlCtjS8XNc%2FxHeoGxTnnwQc2VayFhGQx0OpWvvAuEhjOkc%2F79Mge8jfr5Ui4Bvr9Yr06uFxGQz9ISimYvBJGT0lwaziFz9Z6jW%2FsjLYPT69Hzy8w4go62jvSd%2BiH0R6FCU%2Bxvoht1x9CRVWj0l8zKCMHG2fLt&X-Amz-Signature=7613660ebf06a9fdaa3bf98e813bb6b20c6245685535b34123d061e046cfc8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
