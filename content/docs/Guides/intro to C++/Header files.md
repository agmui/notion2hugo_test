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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHJOTXJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCDn8oFy4S4MVHIzXwvnUbzCZB32hy4U6Zb7G%2Br0SCXoQIgYygUKqkNpa%2BDPnTwBw5yjM1I16PEYPx2ZnDgUcS6g%2BwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL4Ht2LBNOXdPfBJircA%2B0YVs0hZI8Ay1Hnlhxf9stVJ4nTDuC9wqa13%2Fnj9lf9valFwq9m9HEoOowk6esrxJllleGVK3xndT6LbI7x8fVQdHIBGI6%2FoBMUZhtBenSmUq5OFJIBFNEYIxlkylFaBKOr0A8uLNc3gxLbhHB1SZw%2BE3WAM%2BFn5yvfQqnbooQXOY0VmsUxBhSu%2BdWeMbNW3Tw895lQCsbzunZaGoLkHnjYB%2BgoG5W8W1hiuM3OjFa3MrM9oGY0ef1oTVhDKlyhMe73NWu0u0tq8M05ktRelkB3HEXMc81I7xNrkUQjssp61GM3IHujlHujSxktaJs0KWZx2TpDGUEfT9n5WjVOQVRPQYmcTO%2Bh2%2FuF8sa9lWXWAC4AF9xZzBFYCSpjI93XfqNf3txeOe7yPqlU9VXEkWjfzNyzHyTdZyxSbeemH5QW9qkurjgv539H1Hu34p4CLB%2BtJ%2FRhlv56ZDRFRAo9M4JSKI1euCmnXLxQRogx2okwWJY2gco6%2BgK0um8SyjJuwzg6eJO07tdtNzRgOTkBTdov0UUwyUvWq2styFDGjua1%2BPYmzQsUxtAOviun2USqwNy7BOBSW01qqLvypXx8G1ZDnr86j%2BOznaMgpItpvu3OCisOdLFZfMhFh5s1MIiywr4GOqUBZ2eT5Tujnz%2FIq7bKGhRVuOTJhdu4e0fY4en4LXq%2BUvyY9Zhjk6OIT0v%2Bd1emgWYS%2B4ajrZ2oIrNpKELOrycNLMK3xdm%2BoQ74J6PF6otQkjpJB3Ro1ibYHDpsNojOgGH3ZvTusCEnh1lL9DV%2BkIBjIomJk3VwGYZx%2FCftaNZnFTyou5VxlptoX3T9W8vi5aKL%2BwZyLzC8%2FPAIINT4XJZalFSBVrMj&X-Amz-Signature=0704bb273954844618a13b36fcf2352d93ff79ad13908bde90c3e77a91a42d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
