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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEVSRH5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIC0gdoppngqAWT5BJN0Z5e14yiI3BILOQClX0JsSAtNkAiEA9XT6FqroA%2BMmCL1Hgtjz1HjAqcs4j6ubtGLyW8LDOVQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOhm%2F5mQ%2Br14Sqp3LSrcA8MXCvmVMsW4bTAZ5rCQF7eMSTIQmeD5mSowEhz9Z0eDSJiTHMAmtT492wKl3L0iygLib51jIGt0ajG2NTe3Joxeth4g6tuyvtYOYe9EVip01bHPtfKlcCuf1gKT1VLxo2XNn6YxoxssMOQLCsyWNJPKzk77X4qCvqfwcdMicDo0naqoL5QvBaYfyZXXLgd%2FuPZ0QASYATgj2pW9InOC7T4D8XO%2BCaUg1Hh4Wzvz5FuKh%2FM1X%2BCT5MBqGfkK9CCT%2BY0duwfyZStGE5dyQwQ%2BLEGxdfzaKdBC4mPclpHokRfGNa3yYmDqb10UNbwNeNEMYjxxcsTjVLpAjeU4nSDWrnvAvvE09PDjm0tI4eFnXHkKux3RAvbfPuKaEZZprOeYpq3kKBa6r97ShuIYMYinJcPDUoMgHDKRHYqMAXsI%2FtDpkfltKHBzvymk0YZeXshwso1GBupf8tylmTOfKzohp08q2laM7cSD6Koc%2FVyvRBAjueoDnCIUGRGf0kbJ9qfkmlfb7ndpaBif1czqtJ1nS7GX5lzXuZnu%2BhlhKuoxruSbrkYwHlBbANVGHQPxo1IlBvYG9DxLJ%2BB5VKSrckRhQOeSwaCgM8MXC8mq6FhYuXhDSOKV4mR20ZRCvtCTMLzEmMEGOqUB2354%2FkCxBZyofI9G1sbmjT4%2F62O1Mgq82ymmnnI26VVGeb%2FQli1uqb4U14KFIP%2BaJtcsta%2FYLdvYqhY0ALhMiai2MWnT5W4EZi21A0z%2BEwRbLurXxZ8Lara1steV0E%2B%2FhBgmq08oMudF3a5HH42aGrZy%2BEDCZmcIrUXVNOtE%2FGEBNiKv71mwSbb%2FQtF6m5eq9zo20a7js7Adww6cA%2F98xxMw%2Bp8J&X-Amz-Signature=e8e9e57c9d3e117d5b3ecbe650d548e90846f84b5310c54cffde878637a9abf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
