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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2X4ZMJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUOO%2FJfoB%2BRhc83x%2BCCssQlk1BohMED%2BBllLJsjxZ4oAiBtaXnhXuUSKAm6vrbYKhtByBael5G2TYpemmx5JYW7%2BiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTV6db7vWSdXGSlA1KtwD2ozicdKBL0kUO8l68LQdbh0jPI70hLFMFAZTyLqR8y%2FW0Lw7fBr5lgkOjVJ5j1lXiN4IuyGmwwMZNcuw1uph1YxjTe6eBEwQJabmCFtLfMLj%2FudHlXc7L9C2Yigqf2uB%2BwCoG8XaYiQ4UqG%2FQDG5Sz0%2BUEnErx0W94hkXt6wUa6KuevzjnixiS8H5dGysiBqbSxTPB6NaDthyPHljMs9sfrjsXH61I%2FUILjBFrIRNZX83oFExXOSajxUGfTA0hAKaJuoy8EWYr9OLyBZKy%2FMEXB2Ii8jRVDlst9KaNYQw4bOA0D4dviq1lG0rr9GOpj8G3vqmHsDvlCQ3%2FJZyGS%2Fw1gS4mHN3uIpNbwfHFZZ8bYdggFSCwTDg9FcyfbaJ2%2BGY6XsNRtb9k4VU3Wt2pZxk%2B69wa94oxawWC%2FifUbih1cd%2Bzt2sq7gxmgzbO4y3i7MDvDJ2sDz%2F9NO6hetw1GmC4pd5OmZZY%2BNZwuf8Tdl8pQ%2BC0Borc%2BAlGPNp3HtsaTh56YHpvXzzY0T9MMjIeYZZMbgGmFo9QvHRpPzbSknQpF06rkWwndUVeX57rTX%2B1cTRlIHtF7zUcA5U4RNUQuAIx1W%2FmesaQC%2BLJNtskCvJd6se%2FDQKzqY4%2BVJp4EwoeCkvQY6pgH6Beu42I3NaLsYF67cubnsvFF%2FKlA%2Fz24nd6rZ5kfsvj2E4kZrJQkxVuz4D1K%2FxPq5oG9mbyGjMkXR75%2FIexG4X8NTGJN5543F5h1P9ng6MlHwCb%2F39GBmJ43WbwxjFOvDqdRp87LwZ6%2F%2Fk9RFwLxsV4hp%2FMHZ%2FLlaqixA9LXcRbRgEHSRD4X%2FU8zq82M7TRDFkipBZ5%2Fgl3TiF%2FWjnN5X9%2B4OogOa&X-Amz-Signature=73541ec91214ae3c58469d30f88615f231a6309d176ee362d8c2183099846cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
