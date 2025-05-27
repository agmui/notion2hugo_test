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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG7EQUDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbGF0IS3bbKfvl13ZWj041K%2BvozCqMXMPTAVmdLOPb0AiB4oyB7iVvsXfd1jdV5jUhbg1c8OtF4qhPSL3wnxvdjYyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMT8SBB3%2BwjvcW01EEKtwDjTHEatgcD0MdMr197mESy%2FutEDvzcwYoxqQBFWFAxiyQ4m%2F66SYSQvxez7sr2pX8ggQAbZ4S5kEiGibhzXNP%2B8ma%2F9PHKVPzYBW8uQQlymhQu%2BYRpMSqURbYUUEcFGGHYBCdWF78KLpmeLY3YvfuzcCjxDJrnAyHNfluy9rltWETYwDql%2F3beFUJEGg1ikSj%2BtYS2ILJYoDBoXY0BK3VArytsvsip5GrKAvPZhDMD1mdWhSsdgsz0ryWCNsDE%2FDxdEW2mrelqcfRc7nFam27KHKX6JktjvRmEaYEbiGbmdmmxWfuRdS1kutrZHt0OHHx6yu2gv9LS7iz0Hf124%2BQWMx9pG8lR1%2BbKfAbkzhiPJdYXUtrPv8TXJelbeAXYWYUFtJ5Cg5y9U4nWDSa6DZjMuw6Uz1qGaZwTJMTqzqptYBdSxSJ0XJh3V1ATn9HpLTT4PTG8cHinGICjtXS1%2F8i4MxoNh%2FL0DJJ2mV4%2B1AQ3DuCAL0n%2F1BUPUqGM15Kgq6gwfHJOL%2BMTOeDbxQc%2FXUE6b7HN6adGXIR%2BvBesQumnA5ocK9qGaIVN5sDDzVJtJU6vMhrT3K0g9Q4RK%2FjmsKeLjUJL%2Bd5QVxQNRDXZ21iRzgBvX35QtY2ZHeA7XQw5ZbUwQY6pgFDnLqI1I7aS64EPwUfdWY0kAK%2F3S5RZGw5C0rr7fIvMTzAdDRD1VKvxugCLmgMSL3hoRiTwZJ1P%2BH%2F2d7UFSpXGo870ZANeBD%2B3tCaAGP9E0cjo5ezDiDuz13egBK%2BcP3A9tDYMu%2FQNHO3KW9NFdI7uvbQnBIwssIqZLiwU%2BdKoQ%2BlsS%2B3CfACHB7ot%2BjZAzBvzpRMEvYIcuXYkCIk0qR6aeGFQen7&X-Amz-Signature=98dcade7ad8f50b7ac69ef6ed88c17cc60805d45826e4de130f973634c063897&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
