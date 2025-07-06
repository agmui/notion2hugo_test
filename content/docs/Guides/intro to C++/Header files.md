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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH76X5EV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ%2FPFKzSQQmZEryabLZLB9j8W5x25CkFRddC6Jf7jQlAIhAOuwVQW3rItkQtNKDuVjYM6zqPUYx%2B1%2F25%2BFrz4j1K1OKv8DCFIQABoMNjM3NDIzMTgzODA1IgyqQDTNwX4j0lRd9DAq3AOPUyevfMLREyjouOmOv9HmVEg9w2%2B034nDo%2Bue%2BRbfuxGYy1v1HCBkqZCoNxaVzd4yxVAlBtdYj8hvoU5U51Shl2HZ5qDi8b7Ii8WWvisMzEfh8x8M19aY4fVJM3MrkVxTu8EeO7iW9HAa14u9HcbjKu29mSR5V4AFsOhEjkbCxBha7HysNGSBP0pHkZSBydwVbtALE0rP%2BUJuhxuuv6FJUfaVELATpG5np%2FV6yEdLft2ZY8gJh15RJ%2FhXBCsRkXtKxao8pfi6BfeVLbXirxofidCDKtd3%2BFnF60pK41WyYdVr7M8wMU0ZuV07pPuBgfau4aMKGX4auScozOVRfJ1XYDWiKhArzmz5tfKtuXqmr5pnSaSUeMo7TD5HGTOI6NlxCIaGb34%2F9wwHCVjYYBrNYUuenwDKtyaRYC9PQs%2BY2d7C80%2BMmTCwwIsFzj1Qqv5JcPdAEAwLJ8HjbMBIX7F6NygE0GjQJQr%2BRsqJHpgPD%2B0hSL7mdjMC315DWtU4U5R1XOKLGNCkcSY3JiIAJU1pR2bbjBULgKRF3eCuqjtd1xI%2B8Ti3l1tsX4C3RcUVYmpNVmrqwHQkWJggGykR0wJMObSHBTGIBB%2BrqConxJ%2B5t%2BkiKny0cHgClYfu2zD0kqfDBjqkASIrs0%2F9pNAtPCs1fCEiq9zsvyXgwAWe%2BR0XrXVLixXUag%2B3ameLWOuLgcyKCn4QqlzPGPcoArZ%2B4p%2FPJbIhu79eJhRy9KTZUe%2Bhe8SPTGG3DlOtoBDzgLOiWj9E4no2VI2etEJIp8Lf2eF4m0z1TbhAZuwybJwYajGjrMsrMm%2Fohiv75Gk3axSf8unMpOVwPQpXJUpyqmbFbAgGWhNDQ04xysoG&X-Amz-Signature=a4780b3a02047fd84afb3a07db99030c8b1c1cfe9813fb1d4b78b1d830f5e7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
