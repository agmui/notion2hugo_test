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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FMJ7NX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIG%2FvuvG%2Fows67uglKUKrQc2n5kLWxvUaJpybz3peWDMDAiAeYb0IeKioRYeDjdxBp1VNAGgJKEwTXk3l%2F4T8EMLVdyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML9pxpa%2BsWhDBfqg1KtwDMv9QEABJlWpASkBGxL0RwCvDXWy3vQs68luo5EfWBbYZkV7RGceVGY6MaHR1kXV52tj1ca8QV8Y88eNe04LStrN032PbaYierNVp5lUPVRcOwJZg50gEyZ3LS2VGdTHldTw0GPTJm%2B%2BAU7BH0y7BitH9rpL0DhWhV6d2yCWCkIG%2Fo%2B3Xfnui9%2BmUhJS%2BOJT8epOAK6Ze7oyhHBT9sOllxZsYcE8XmXLUmim2Ull22Z%2B%2BbwUxiHGXbhrbG3LgXy1eAnwGKJMxkGmVnFzvGAainArQywqyJGCQoum7aVeY6fdjjMet%2BROz6QwSDVRMXKPA1G7eeQxYy1kMqmUFwsIY0UgnQu3lPgTfo4Sw3aZP8uJi1ZLpW8CUYtbJ7UNQ%2FUid%2BoUjVGUiCIr9%2B%2FkPP%2FG0oUyw3iYPKuQLwlaSzxdXi20qHZJoTJZ1b5wy5soaCOXKpeHKX5AZZ6XS9bDweerXbW33X2K9ZO86MzsWzA3KI%2BMOJGgSPPZCbB%2Bk487GvzazCGnf5fLsDoxDeopDGOZiYqEr1P5XEmRDaxtvfqKP2Aar%2B1iZf1Kr%2B%2BdPh65WKeJ1BY6fFvt358o%2BwgMAaZu1tT7jdwe6kR7YlolpupTwOyXB6998LveX2cQj6Z0wlIqfxAY6pgGnGD6%2FDZSjeMSaYZwqefQGQJvijK%2FNpTkJIjXKmk9s9ghx1PqtPZGEsn6itjO00vyu%2FDnYTDYgaAO6qxtxN9a9vQBM2ByUGN2PU84HW3l%2B0CFVvQLDBUJ70qv2fR2WJDbEkRpbFVSbr6jsZPgELjt2ezFUlvdRtBxrW6xe8DcNNF%2Fw6S1%2BmsEDeiXFARsbcWN7TQ%2FtSv1mYinioEZ7zaWV7Vk6A22I&X-Amz-Signature=d2300bb9d89cbe785f9c0937a4a0a1246c7fe484e3417470058cccc00bce845a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
