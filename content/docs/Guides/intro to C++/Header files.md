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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRWR2UV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpihvTRXnw23Arx8%2FTY3d4o47I%2Fn6f7WbF%2B4mlGWxHsQIhAORBzjiQROBiPXG%2FNuewBat79%2Fk0hqlR6QcBmD9HvUmAKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq68etXeBEVRW5Zmsq3AMTKXN%2Fmch8WbDh5N5NMG9NvB4B18VWGvtl9LpOe17xD6hKg2FvKRVwUYjvHQ5brdFxDGAieCSPNZgABqxkjlhFTNxyhzFxjwnoKlOqC0t9Jat8cA9jKRR5li6X4QBk6Trxuo2IJ7hq3BcAxtktvlfaNFfzUxLZrgLsMaXeaFfuutLb%2Fg1AKm6Vz5GQ9bszNHnoMMdVm2rE2HX89p9qFaZp6I9WPBWCXN9DvjLdhmc0RZ6vAs%2F9sIPVD8d3DiIiAuxAFSlPJyR9Fq2GFeOrihF%2F02tdQ7rIcCl6GOcEeLykdwcF%2F8iyddKXVpU3bvgpseOT%2B%2B2PuQXDkf9pBtreVzl07QRw5dQm5%2B3FHQL2xRfrPk9IWK2J%2FGjSMqnRjB5LTPj3elep6cMsspZkH0ZjcoEasPwIbixhFv79UDLZsxy%2FcXyvOtsc3d4JgT6TfzhgIbCqXMzqxMJ%2B4CS%2BDYVc6TfLCBLChnRzbiii4OJud6z%2F421e6FW%2FUoqpumYDDtNwz9KePRlperAfZPLA2dnxrCNzrRepkDmg%2F7hidZqFtp35geHlqkCPHAzJoRdeieNMT8hi%2FCvQsETsXm7GUzswe0%2FM%2Fq20KBF7I3PgAju0l4uOr4FbTXmboKLNzCvDVzCQ%2FtK9BjqkATk%2FGxikBro1OrYT1ZQhgn78CbIX3HiQSl4Glc1JNozaB4Xqrf7vAWZXj%2FXwgE41%2FOTaf9mq%2FPAC1NqqyV1nOe6LY%2FjZEGp0v3IPqr8C8jtEMEv2r8G9pt%2FtmcqMzwLBDZOuWPpg7WJZ1Ql34K3DQcnGmwle4rFMOb5rKN7uIYqQZR%2B1Ne%2FaK92IU8IWRfDUYYueJ2sRx0eJYMHCzr2p0UYPMv9M&X-Amz-Signature=556f93935554cffebbb1401cb471711a7107b7c8fde9a086d09380c73d7db028&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
