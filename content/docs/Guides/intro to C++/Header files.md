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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6G7PA3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrecx%2B5sLOKHxfA2c5C1PN4ljVhIj24V6TQAtnKGAzwwIhAK6j%2BFZREj9vz8ZRJcbCEe96BTqjRqFbLeFDWKdisK4gKv8DCFsQABoMNjM3NDIzMTgzODA1IgxnJunp55JLJmFzq0wq3ANvS5NnKTUgpczJMqoNrdJ9GwBWQmsAg%2F2zs%2Fb%2BzFw36VLs%2BK0jrexzbMLwRns3IcXT%2BjQYYoP4h7Cnet6evTXo03Wrgdmr1PKKFUrWVNnDsNoaQnACFpTPNcS2XU62dVdQ%2FYPdehNCHw%2FQM9AZhhgvAqBr682tZ9FKNZiM5mSHQOgSNi0x4xGwIvFAGQZyoXG5CppSzFIr2t6al7eA0GOl8PWEIuHv1eW26EvAmdb5ttGfDtfwEZ7ey5%2FW7pyhilMPQaDD3BulkE5iXsN%2BXSnYHSAOofKupR4YNLvBHw1kyCrty68e5oj2bWgYJJSoX4vCUGgNqiL8G1Zbajwo8cXougw9%2Ft%2FfPCOI9Da0dTFhZcUGluHQKGG43eiuYJUZICXN8NBpo38hjhJOthC8s4kWn9lCd5FWE%2FuJojnoakTNOEINGnv76e%2BqtkgfC8GmfBYhUh6IOnOUHhWvCvt6ZR%2F%2BD9KuL4LG9FLrZCEVj1xVBTAdSWyJvTazHLeq9wutWZK8Hm%2BZVHBoLfAqgbMF8iLzig7jBkTW6XsRk1AcgEjZ3iYXCpcyfh2RqCwHPqLh5%2B%2BTD2j46dp7GGeTzfCeIuyKl1JAJX5YdhBj78UCp%2FYzJ7KEj2PpMXIUj2dxAjCRvaHBBjqkAc5mmtCtQ1HpN9vYM%2FZzrn6lv2m51bSs5nuTeJiqWYN83EbIUYgCTonkFf9Ur6Mb5l%2FXC1iZJdF%2BztCuCC15TS7oQj0D%2F9VZx6Wxu7kI1PMw%2Bga7p0o%2BjvDeYCAw3vdVhYIQwUcaR0F0m4Pt%2B65XWoPINiS1usrGjEBEzPbnXEItzxIdktl5JI9JoZUKKP46iZwKzHCDdvPsrsnvJcdu7q7ym3qX&X-Amz-Signature=01828afd87c9432c49ab8729f79671f81292e77d9784caa6f3be3e46af925ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
