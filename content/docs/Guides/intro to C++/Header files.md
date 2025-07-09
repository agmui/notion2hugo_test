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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MEKMUSG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7L34TGc%2FRm3sqzcojX6OISrjnUUZ0iUP5otqMOskrNAiEAmE9PBzgu25jE7LRAtMoCLLanSJlocNwStzqZgt%2Fr4ZIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHlNbtpYRzPYU%2By%2FSrcA4NOM%2BE6S6pjxLjZtMy7CWcAenUIHbEEv0QEo8FhbsOo8fT63HJBs8dBnd9Hw%2BPcchlt8%2F3XLWclLpV26cPyGMK41kC2lBgniEhkywwOgC6%2BCAdiVpLH1OhqU%2Bp2K49JuWVYGaq3AmqQY%2BuzPN032SSs%2Fxp4VnU%2BoE7tZd5MAdAaouDihKUXoqnh0uCqJtzkHOsHBEYMWKe6Z6fw1uNbmGf3AjCeKfc94pAm0SYyEC5m0UF0rq6wgjIgpy4tskGDsfYde1OhcA4ctlyfULZ1oHMFO%2B1PKcpJEatDYSFZMWwuuDB%2FgGu%2Ffm7jAuQsfgPrepMBK7tGJec%2BCIOIp2ecttnEhmRUzKr9jHh1dUBGy8VUkXAgRr65FbpR5FZzjfyR2Iz1qpwof1gSq3C0yknCiLH3znz8mFfmKDIXFF78nqOzpSZq1rK%2BmIZ2R3kV6I4l8TXSBmNYj11abKc5fkAJsIAq8Ei3VDSdUpqPNWIwXcEDWj1jBg0%2BZg1SQJyy4p8pb4ndUIz5Yv1gUYrf9S7oQgBEjYPj%2BkYuJBarfGQQsSXKs1u0HkhMPl5%2FChB9kkGgm4%2FovWoRzu5yEDpVHqDtiVugs%2F8%2Bm4CLuKYx2awzKHnut00TEYmqLDsQvS%2FKMNvuusMGOqUBKTYpOfSqQRSlQgrjOua%2BE%2FLbGedZXaiwl%2FuWPjHl3gV6tQZ8cfO8avudFzAZeDPW2T1L%2BeZoIZSr6%2BAe%2BLi%2Fnt2lIW%2BSh51hww0EBk9o1Jzst3WC9z8ubqgOeDrQbBYC7%2Ft7Ug9NOJczhbXh2nCzeIMzDQtAE7ZXCWZ6%2BYJL%2BZlzASPut6Yfsmkz7Upekgmnwjp1t1VU8E%2BIWOif7lSN39VYWF6A&X-Amz-Signature=c245b801cbebaaefa19213f9fe6a72844f34b4169b36d309b41a8044f67fd1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
