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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRLO2RX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEz%2BZVSpVvIlAVCMM%2BWzi02MXQZnGk4wXhOffsudsH2nAiAGt7IxykK%2FY4aXpkLwBKwluttHTYE9ckqLvEMZSpD2BSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BftpzDKLSfuRI62iKtwDSBsZoXJmHdQWfLtejjTJXHOsawZTEUItCKHaff8GKsurag4BkYnq53%2B4KKVxWQqg7LJ6CevsemJrDBOBsuMCSHayNMnuOrKv7fT5ShdiqOGwwUNtj7ojitkiGReWXChpfe5yz85iu7sM2Alt31UjzW8cH0tjaOJO83zCurhF%2B0zODPTAM1HxXNBoZUlDyFiqP9b3cJK%2FJ4eYXcYYTY2jjpG5YFjYIVjXqZD89Wv9ZCyFzdhp1Pk2rNi32ZDqPIV8VOUUx1vthqivgfvguyM5qRM7V8TIRN74bveq6iWkHLa1UJGZa8UXOIy7nD7VR67ZChDePaN2zIe%2BIWUYCT1%2F89vZ89T3RgZfyNl1BOLIoxdaqITZ8KFy67Dg7WbU3Q31UpCspUJZ9V%2BoalwFQMV8DbC0JXzliy%2FCkcYBtkThMm7ZvR30exhgbP1j8LSGu7MY3s3pk2HiRUtjhVqeQHAOjvFU0qcHLB8AgGSPLEzQ9QRnNm878Q1bl4ok8S6xc2N5OD4a%2FYg8vNMzx9s7ZMijcGmocCK%2FLmmQmcVX4bLC58vsCEXJ7Q4rIQmbknAjUTDqYbXT90RvtCfBz7bkBXfuHgBLRF%2F52bAg7oUc0hJCBj9EW46fHlpyGPD4rVwwyZCKvgY6pgHDnu0XduCjQU8wCz5s%2BHO7IcKtD4IcgG5SHRQsdvyf28upMQSKLnQ9Il4T1ESMEPw%2F5iN9%2BDA7mI7cZnmmBYpgiJc%2FUhtD83renL0p9SZ%2BfXx82kEp3ndT0pcvkII8cd2gxNKnR5hmpNutidmgRthtd53MDPHZkVweE8eSPNZSZDrtX%2BRrHoaYh9IF37AVgXmfPHunOsEL6MUUlLgctJPPk6KCU8kz&X-Amz-Signature=248ef543f5f0fa4d39a736c5d9500184b86649f8114dd2f4043eace97cd7605d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
