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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCKLXR5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCcgPuj28yfMmOfC2X%2F6aw0TFRTZbsLRkFHO%2B0J1HfDswIgJu7qn6H95vfsKIE88AvSoyAuKhfhvEXV%2FJZXBxZKgR4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEpgDI%2F3upc9NxfUayrcA0Yi7Nvxp99vUvswAEAlTx9UEMFcrdgmTTroMrVA1oq2C%2FPnYXQ9se8bvL8GAddDc19UTSfQb87sYHbotaS%2FAhLBhQ15ECtLUbdt0qm%2Biaouya7GBnCZLjx5O1W7LizCqcrAZO3J%2F3420vFEq%2FQyONUqteyGOb2ns0WS8ckMS3FCohQmk4JGXbtVv7D4uY%2FL2CJS3%2FeT9WuGHMAajzz9Osx3ty8JBkg8HQnyDS2amX6Rq1ot4vnBzNof6rfPcuAOUku2Zm1RNa1bKrGnN2iQNTCEOVfoTloz7yauwu9ez6CtHYtl%2B3jUoVJuPF1jPHJhOyO%2BrsXWtPmy5wHTQzDD%2BQoKkITpIZAWEHE5nVwcFGW8Sair%2B6n5A0i34NNMnlhg7hNIyls3u%2BKGPQb0NHWQOJMYcRMDYV%2BuHVHpRzNrfYxElTKRJFSsMYC6LJ2DQ9iD5K%2BGmu5jsrpWSRPfUXbZ4hpzEdOB%2FHSS34v9g19SqFowKjpEP4ATurOtb%2FMa9BjqGp9NwqxcEI7P8hBH3%2BRwGTPmdMeoYIQiwdPWvaK0TXjZyGKmL4DI8aKgrtQxMQd7WPam8kxbRSuttOXVK1NIfs7lJplZxXUPec6rwFWmU8uTuy%2FlGq9R%2FrsteBRYMN3jysEGOqUBLkVnGPP4752RSrPmHzktbot7C5%2Fyv9rtoFZyIFJ5%2FYkbxEbGlEAki0%2F%2FfNs0yonE2RTdL2zS00rXDwu3ozjq8MQIB%2BvZ%2BEcpcXyxyrE%2BeNjP5VO7F7tjWgEi0kmYynYUJBp%2FUaRCskHWH0Q3KI%2FIEJ3aXaiao6tMZj2FBvuuScaoLXjgDvnjvyXFozpFfycuz3Os67%2BdmPv7eOM8DOWHSkQ4uIcn&X-Amz-Signature=3a883834c259bd4060a6ce04368ffbcd22cdc0853923cb24681f5966362d4fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
