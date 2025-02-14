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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGNRLC5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCLEFIWN4c7FalyVWg%2FyQlwbv1nM7lHMs34Ar4ByGmUsQIhALnwE32cFVKX0TeVKg97MEUp5ps2RZt5Jy1dmvAWlWwnKv8DCCkQABoMNjM3NDIzMTgzODA1IgxupZ%2FG61jJHcOwljkq3AOEn4IykOk2KTqRbierQJRu7f3kQtEwbseDK9TpEN0l6CT7vyKtTJ0hdZefvNjXQOY764SMRJ5FOJRwc49yg8x1ze%2Fz51b2QjHmXamrXQ%2B1MtafCGyqwQrC6DfM42GZjCuG6E6kPeZnGcHbMwkMNyZVrNNMQjasDV5LsagyJPyT3eeeNZI7Nr7oEDyxvN2ERkgcrCxPH9wjoop%2BakMBEUbUGC4G%2B%2FlxPVhtnf3M0tMkZjgd3GPIfethDJRtap%2FTCmnoS6oGbbdoIch0XADxbRfAqROhEnBl8ece6IIzpf%2BRFRI6C0E3WdSq9fDn59DL2IKZtXScFF%2F24irYZ%2FkKeP7b5MO6atYGfIW0Xot7CZI%2FBwZ12lpOjAzX9aDdY80ITQCvHSdOzeuLF2rtYENa9hn6cFIVDG%2FD5xWKeBEmwPzyERlP62LiUYaBpfkxSe1gO7%2F%2FLQk29DnlSDLIx%2B7WZ3XfgjWwxHGNcLwwzif9l6ovEzYedlrFcgTmHzOVRYVe7wHWZZNYNdnmjbpFKKBCt4aQ3mzZMgZXfruRAKkghhCMwF3SkGVw3PjmFNPdupeHzTAu%2B%2F9fAHpFovadjXkhiuoYxc%2FHU3CQgPvbU8VjZOOhJMFm%2FOasLr1%2Fyo6xAjDW6bu9BjqkAf3M93HRqSz6tdCPVdywUwGctzKWK2zFr9lv6wsO4ACrSRJ33i0rM4D%2Be3nr0pZ067YJMbygYqVbFtHQbbMDEKiSyGtX7sv3u4kkUSUbkZIO%2FZ98t3Pw39xZKlVW9SpwrgjgkvmIsILePqTly5kj7KwMBSanh00C3w1hOu%2FeST15e5CbPQPpLh4PHBmgRn0ZDWebjKpLOvp69JM%2BCRpLvsKB7fYj&X-Amz-Signature=af4121a7a095823412d5acdf813915d09a554a04f2d4495adce42207d27eef37&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
