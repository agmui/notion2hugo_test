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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYUX6D7G%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICpGjM8qRh5W4dPzy%2BbZNkoQn9LJWO7IefbUF3Dfba4BAiEA38zxVncn4h2V4tR4ZtKqvX4HkeMnqKme5V7OU9mrtAgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYhPksnEu6sL7wbEyrcA7AHYiRumcTJrCiTdUSGekX3EBk5IhBu5U1QNGC9jwkaB10SMoWRpEisHyBLkWxN5DlRMCaniud6O8dJT1GFMIfOA%2FMiNGETwAal%2FojHLV1B7apwos6oWLJIXb53zMfl%2FC19l52WdPEmD3vk3MNanqaiIwmIbRkWFJWffX3tyUYE7BCJEWN8YWaMrz2ojEr4cqIfaJejEc2Ehlnfa7Rh00HdC2M6geYqxs09C4eF5m%2FbNAofkZUcamGy3SuTvS%2BSvb80aLd5%2F91rzQR4CdTATkxAZNfd54M%2FAOS%2BLcWy%2Fdb4lZzyPyQROGrrhepnIXDIogJoocEtn3YjquBA197d%2FSBIjiyShJY16kt%2FBBa2SQB7EFsuruQsuLPUlC2kVHBTG2jGSshjJ5JZvzMt9Bfw7V8XuxXi60gA%2FsM%2BHXfj13sOT5%2FiLv3Qp8zomc8gt0tUCj2IgDG0zYHoxSG3CdPC9KkRF4J6IvDu6NpJO242PJHswEfBQbJP0s5aeQ%2FDnBA4b%2FaGkXay0MS4VaFm3TAcKL3GrzoBtu%2BaJX2wUjEk1axtik2xGRGRyvZJd8HuUTr2igmE1ni%2BIWVZI0j%2FBqkOkwhoQSynVbuU0k6J4xE%2BuKuiC8i3VnoPDBfzTaLxMIjVib4GOqUBAmeiuJDC%2BO044gZGZLHK9xr8ywfFZNUuChh8FDIQ6Y5EONF3diSQznNbfoxo2fFokzC1tFCP%2BB4KA6mpSLZyFc3PyAUGJnweFGeY2Y3vQHHdct8NysdSlRp0WgRCgc7bpx02%2B20BEA%2Bhln6WjoIlbXJbyo3FajDHaKqbqekPWbXZX7ZrzZJqmMPqxtXSX7BgNdSX%2F5nLBYu4LZTuM01t03flN67K&X-Amz-Signature=0630e45177ccf38d6fd2946d43217e3a11e38469e6c6f4b9d200e7af3aa62541&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
