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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2KBLUU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDZ2FT5K6rAdgGyiG5ujqzQ6B1aYJmUyO62QOBgedOkWQIhAIjd6wG5%2BrS4sV70tBWsdFMRSeGrS0QqpEM2xO5Pzx1sKv8DCEgQABoMNjM3NDIzMTgzODA1Igzjnp1oBNW0BjsRxhwq3AOeBoChptv5O05Uykr07Rcc2m90TKU4p0O4lW3vslew7dUd%2BWmTOy%2Fk2CuVHv619%2FULT4OXQBXbR%2BTWPYAfzeZWQqgeDKSM6FFYNamSsxGPT9F1R%2FasArZGgHSQKixH8zl6G7KFUoos6%2Bl0UmZRz6D5E%2FruH5dTiwW44GNwKm3U4WJ2SCVALWADeWRgXeN3a7VWvdonRtAcR3VxatK4XBXIH4EYh%2B%2Bp7IN%2BY8A49x4Ku4709a1iefAXyZj0roxjszY7DS8KoArn1jVd9Iu6pToayIv%2BOkUvnmhf%2BY0xBB1cR4qvYqC81EVJPNhHCX34NLVaW%2FeVWsE1GneREngVwiL9LEUiX8OyYgKRW2fpAnaYY37mpX0QqFoynlfVHPvtTeE2Xrwwkm1gMDHn9IgVjDicfzRBtN4N49gmEbS40SMUQRmV6l5AhCaKgGSK5SCzGxTaVJOq5xYk0yMtmSk5ljOtNbSndy64ryU11r3u8PtZHbH4U2eNHwzXG9XMtY5VQO1hP%2FPQ1f45sDwK37WeOggBjZcaApQZcVnWjTiMvZtcy9bzbTVK4KyHhYhLX13iuEiD5aPnivXWpvm0H%2FVbEd7HRU1OWF0p26AEhRR%2FXhPetH4tiMlxwQSabdXb%2BDDElvDCBjqkAdtQj%2FCqeHFnhNREHgoMMbbBlhYr2KeW2E0kIekc3VwqUwUaa1nTJMxwEejgrybcBS6u5%2F%2FvKSF1%2F7f4P8PFv5OPh%2BmyhtvXg7bidKhEsQd0Ez7Z1S8On8alIuX0cf8IP7EfkJIs8d%2BdYdEt58PV7BMCfwTPFXVMqkEut0ajin2IHM%2BNYEEabeuk2QFAz1Ykk1pSrqWdNzfUSv3n7ibkJGHZ6K9U&X-Amz-Signature=735425816d50d5b4a6c5cd3250bae031b2a9d292586b9feab21b01f8d0882884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
