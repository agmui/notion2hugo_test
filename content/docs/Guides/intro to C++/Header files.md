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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGVWFGN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBavhWyzrXSVdg6UpnYn0RPUsvuwmJyU98w5K9t9FEvlAiEAkE9wcN02CGUPf7tmk5btHYbx6hSlz0V4nOd7YTglAXgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM23oLZkZxznDTq5oircA4NGz5aLqj4jXCES2tzVo79QYtgfU4T4c%2BFBGNf62QmFTWOFZQtivUF7YoUD%2BPX%2FRstyL2F2TCd%2F8tAZ4jQqyJpsDTympoQcemehhmlGPK7UnaOAUTweNcAP4WhOIA%2BbZv58DYl6nm64DGZvYkcejOjQtBP%2FSCN69CKsj59dfhdEPynCv9dWgFXMyQ6Bia8EH2EfAXEhvr6fKtE4MhIHqhBBfTCvRg16k2cpAdEQ2sAQATddTwaochizsZekFC7SEPgE9r64phyyky0S02yn32VEXo6MhzoiXN4PHq%2B2JdXlIs0XhnV1xVMceXw07vy9N8a%2Bk%2BVjsuxHXxFe4OiqlGdUinyOG6I0EjYLaIfeX70cNBCBXhK7XI%2FuC%2BpWkyboFXcU3J%2FmoUdErJBKSXnz4VbgEoChblQ%2B821guCV1s7LcVoJ%2FlsIS7CLOi3yeLDcc%2F1CnhiCgY0uRnpWA7b0UBF80MnzBUpgFXIxSxfJIq4JxIev7JSSHT3hmHM1yqYe%2B18BJgTz3B%2FfTh5MwBfvHQieDB67kDcYX7Sbpw8%2BnOeHeMXCKrmZiSnAfn9oV6%2B8jKReO7DYSxsPFjU7kRUm536%2F6xOpnTT2VM%2BgXTKwURaqSSdtBBt7Ff1fWRn1gMKaKu74GOqUB4p1EhO72BrkArFJHVHDJlOF1Zk8%2BQjEEM6tLYFkWbe7TcSjGkiaAT3zg1isU0wUepglSorB7VGZCVr2KL4Anzajqivrd43mC0gy7VJw%2BhVAYwJTDPFkyYD8Db7n9XL7eI2IYkq0z8xh9CaQZoWPTZcqALGzFIoNOK0idS8qCWsjXpnuV4%2BLwYP%2BhHzjssq%2FZ%2BpWpC7dAoT8D3%2BGFIrRX8ietJljM&X-Amz-Signature=595612771f36c9d18d6bb08adf13d8697fb5c8e4da6b17d9f667984aec1214f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
