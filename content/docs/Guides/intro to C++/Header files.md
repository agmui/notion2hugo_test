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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77EQNJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXAFrT1TSiqr3Rq8WWt9Me6SlfvjUkAozP7FWNBbvTdAiAvIdhHqtOLq%2FYKoXD233GJZ9dSzoL6cnopBbGzsn6CGyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qTjGfROXHudjuVvKtwDuCfIVCMzX18vMHQ9Wxn%2FDcTaGr7qW8j5fjZ%2FsN8Vt5Olc15EL627WT9HfDub9IceyUCADdkYGLLvSiE%2FjFPKwhT0TGZvktCXwC54197imufDaWbAr4fbxa%2B58B8TDMJ%2B%2B0qHNgn7XNs52GM9FyR5sUQs16n7VeSY4ngHAAjk%2BiEuGo2m%2FByyeoKx21yS0Zr%2FXtrsyCPKLK4UNlcO1uPx6U%2BUplxDG7Z4TAXj4uB%2BbG11ia2WaM8lAGx7L1FYhc5YdqOW%2F%2FTEDPerJhve0Ziaj0oecq0mmnFMS9SVjSyllkNCphRsr3N5FlmtVVrRcf9%2BJ9jEBIAVdeLU3dMQheZkVpBy%2BvkrwJNfnOg3G1w09Isq%2FPnrWjxBXqfCML9f7eNv4HkXe026tchZQdCoHdSEQ48Wb8M%2Fz0DHFPVGr2xR%2BZEEuiMGaXDu4Cbcus8O1UmROxwmqaq7d6fSr6xGlLiPec88T8QqsUi2IUFUfCcypjDINduHPcbdNPXHqAlnvx7%2BLsUxpoIplUjzdMJIEbTnzt4k%2BZWuhjsL%2Bql%2FPvgj1XuJ1TDRw1yCStzh515j64fjWQpzZSxjrACANrtTTIxe4yXhA4EQkQc3LtAqrdaw8mVsDgIVIqruPJaYDWwwiKfavQY6pgGhkpRurwE%2FggTKIWcY7BFfdJ29c%2BmZHA4awgSQuzFY%2Fi%2FQRVVZBHo%2F9qo4F4emmJ9NKmd0HSNY5NOo4HiA8km%2FlKQ0mZBl7qIL4c9YzuqiEuNWVquCnrae3Bld7mYaHb4JSLtH6Wbe3o2TobKerehWQecs7f%2BeZZpTjZUWOtPlzaWHhPfMKHaM1rbgLMxrIlVpUQ3pjCjqeuTOrIemb32H5b%2FaBdKx&X-Amz-Signature=129a23deaf4db598b71db3907802cf3bc363bfbcf65bbff472cde5b0476f808e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
