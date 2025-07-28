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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRIDT6JP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBZXrPAMJEuEUHzEQc16DVEphVf%2BMUOWTZjLFzgMwj7TAiAMdL3ofhavRvS0jKfBmrYO3xvU2qE5E3RurL5ttS4POyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRwN97tq%2BpauDgYBOKtwDI2vJVzSXi8nyuzVTl9%2BKXhsK6UgEqD5dVeFBy%2BzJSQeHOJNuh1ZH6jxe5BdRT8pIX%2BHEDSx9CL7yVRGzslFw%2BrPimcOzkM0ZerGOsRA1%2BLsBwYWPF8p0Oo2Bs5dHFRtJsKrMBlkzKZuTlWToxAczDhhqL0fdgkX7ZuhL1bUbAkrrpKgssOAj5AEPvJvybgCU9LAg0beDlNuLyJDg%2Bb2X3yuOXowl%2BjDqoaU7mBPoUo%2FXqiioH5FYVRHMidoQOCrspIrqCpAMgkoTBwpBmtn0YLq5WEvL7C01DEFvY1NDt9mBv81dm9tCogHOV8u%2FBj%2FTYeRWebcJSiV75AAph7Vyjj4l7eon9kkZtjordBohZ51QyiZ%2BV77ZoJZj1dm38v%2BDZ4LJgG2P1O8Ob%2BNqI5GkvJzXYJ92Sz9QcuTHsu79g0d4zomYrv4gdlfvwOgnfnsx1yhzBLiUN%2BHqPrU8EFydEwkk%2Fuka7tvaTWl%2BJMNRZS%2F57AvQBx2HtMRcE9KEjTGiy76Gl5fkriDwpMJKF%2BbuUtDD1r3ttJn8EMSQwZDltjYYxFXdG3IxjXPbL7dx420jFNV1i4cCx7xajYeDe%2Fvtw4Jg85ujTRapovp3H6zxitlHu76Zu2wdb1wFHa0wv42dxAY6pgFr19zutNvnFJZyYS9sXJ6jClzkZOSMnXYRG1FuDJ0a%2FpcvA6xxrw7dpMZGPPWUoB%2BvCENV4VkXMo045UUZp1QBpOxjTd%2FJBeDDZ792oyNcxGENmz4q7WgL%2FtFnwoo%2FLQxiMnLyo1WRc0f85bYnGjQf53VMpqnIII3YoCtJ1C6r2uBN3z6c6KTttkSyzKrQIrPsgeaFb5JeRSTQNr0Z6SQaQOH8G6Tr&X-Amz-Signature=3d1d077e7104103f6e867c7b695beda1f890225eab9adbf03cc11afc612c3c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
