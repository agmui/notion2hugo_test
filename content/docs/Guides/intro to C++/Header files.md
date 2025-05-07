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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE36VO7F%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxGQ%2F%2BzYsIjrH5D%2BsQ666OIf4i83aYhse1ilWIY5o4jAiEA7z%2F3GZOI%2BjS4F4l4lpqsltjuH8teMbDYvXgTgBnTflEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJS0TGT9huZg97ukcCrcA0U7X9iL45brbyhKtVnh7H%2FH%2FsauATEyyem%2FrCwPzFthxMAEAs0NSGIhsPCzjguRNYzEi%2BPXu1uDnPM34mGguOg%2Ft4h7Zjxpm6xFzNdQn6yY9H7iWaWGaSg1xtk%2FkSrJyCz0qu%2Bth4oKk%2BYUVBIptGFjxubWtnEiQ9y8zNFzoCMJIPurC%2Bx3EaHxnTyYqsIe%2FBr5qSUHcAaf%2FlfRRk5XnQuaFf6wOZpO81J0C29g2yE8XDEUqEl4cDf5YwsO2njw5G%2FhmjYWrxUnygu6bGZ4LqPmKv530M8m7A7rhm5%2B4ztWg5PKi%2BjuD7jj3o8ESowiBKYysb3kg8%2BlE6D9vNaAiuT3OXv5hN1W4uI3%2F6Q%2BSdozurGNixJi1%2Fql5oCzpx4%2FTKgki%2BPHFQI8XDbrTHCcFPtWh9WKxT%2BjnPfpHMZMR%2BRJzxgArwbwnYPAoLcF%2BUpyBWCxIToH4JmEfztwAEutaZjfNW%2B6hYPDGvqO4dUH2kQJm%2BNz3jesqTx0c5vqgh%2BQWa%2Fp%2B27jhpcFmeRoR26KPSGwUYEiLiMevOUCZH3BUzASXGHtp833RtuvKNkNt88cBMSVaEr9ZcYKUj4VbsBAX8LN4ckpDXnJe%2FvaUkRBZhu5QvVxlBQfd4Tg%2FD9lMPOR68AGOqUBvyYN6ZTL1QqaDBli2zvld7zsvf2XhL8R9xsKauOTjjpfOfE49Srmff%2FSuy4H4S8LMY%2BVE3hrBLl4Gg2Bi%2FmeUNghhkAV0vgBKWXftvpJ76%2F1nfXYLforZn%2BGmET7jmFOh4ohX%2Ff1rH0hw2puxeJvdR2mM0M6iiiM2ylKYyc92i7iFnZwpnJmqjC%2FTDz7rq5boFgNrEok04uSiLUOmMiHvs24dSjH&X-Amz-Signature=8dba6a54c6998694cb59f0922f4e30f7785107a322b867b27aca69fe85d9c4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
