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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IRSL3B%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8A12K4ce7cgqnMsbZ92JI7bqu2DwnC4pPYG13UV55%2BAiEAmCQcfCsxVR4XhsC5B3rgOlaK0uxU97EKNvtMQFCNMDoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEX9BBjdhboKvqC4%2FSrcAxEHecWU8DtXd%2BxtCsZORJaSOmuKSsX0RzuvsJwiPb8i1ZcxG6lPx9AHgxLIImU1ujm%2B0G8w34sFGAEwfBNxkztOfz9qvLVcBkwfXeKH3CCi41PaqwMm47rSZlQHf3P1O2bOraO%2FUg32z88v0JUB5dEnKgbnGUw%2FOMK%2FfqKeVPwm7GarcGG4vYNtYPCoRhH28IDdTMKuHNQ6FN%2BLfRvwH1EPe%2B3zrREkMR44K0%2B5hgDuUpQz7d6BsLLqbAX59CUj0WuZdJG6K60FwLNvZ1oyPNfU%2BhAnc0MjZru2EMQ6fzVahiB0cQMzrxrqF2ZQ%2FPXtPhfNenCkjhQ2mALHmMLq6QstQPcNHAAtrlzmx3drSGacCMos8XTrm4dOotrMBU5MbO8G9timHgTzzVrA2i3Ah4Naxyq7sgtidUyp4KSoARLsyoSvF0HWOukAb50C9XZmLApX0Qe%2BWHljfes7rY6CI0uJxHRvjzu44i2cWt%2BBmraJwN4IogzWcw3ksmSUpwZDPxQQ79hTVWFecf2TN0dhpDPLgznHu5aPVOpvSh7lDQFlfaSIeOgZxPA7%2BYK0hGlP1dXpCfVZI7rr3weZqX9mLJG2VuyEuaVV3ekXUXJ6wKPcMTndIjp0%2FAlgwAJZMPqc3b4GOqUBoSq%2FByosiSZUpIxsyV2JUn4uvwvBjDUgmEBB%2FUKcPnRJLmJZ4iw1GQXjmZK6Gg6PBngcnsP0PHuqEXUsXQpsVDyHiBOrYYUo6eGwoLIHEfehoaQa3%2Bmhe%2F5BC1XACB1Gj9y3vLd8EcZ9g4Ro7CW5vgTWXh1q9zThLPTr8CYGCmH8i4mShd7EGy7%2F4UmDEqEk1NHiucd2NVGIsEin9YD4GGu6ywiy&X-Amz-Signature=30d92a08da1ae7df34765942602c62b5428981fa146fb5d8af6e1e49b619128c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
