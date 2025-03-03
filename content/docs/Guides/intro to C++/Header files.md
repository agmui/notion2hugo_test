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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKH75CU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnS4IZDF4TxGMaQ%2B4TliMvkZOFmqPQK5zYgus%2FgZWR%2BAiEA6xa29b30OdSy70kkJkBSY7Xjpig7aD7qcThWxhLiFS8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlpve778%2BmeZolp6CrcA%2BHcGy3F2lObcGCvxsuiqfvXwMN3Rn5wCc%2BYn4Hs1Ih3G8Jo1s1do0Mw%2FeOOsFt%2BBazQ%2BNXBnjm7esy4rS0tLNEQfv0yLJ5RD2LB1e5jmcuVroayi8MPNY%2FdlQgo8jip53d6jI9rRTU%2BAG2acfCuh2pDVmSwDpAIxCUXwahn7kXt5Na22yht72FwL4dlIX7D4dQge%2BFFB7483nCp9sP6ecqhHeIIXU9%2Ffa0qXjB%2FCJnLHW0UkrYQ5jdhQZ%2FdCsCH%2B0kpQO6TXux9wWE%2BG4KF0glFhFPu0M4gLAS4BlKZ3wgX8DXTY1toARDvoDlN1IfRs7hmZs3PhgJUrN1Vbr3XT5qFAZEG%2BTSuPziX27F%2BlT5XoRtM%2BrMWFvGGEZmi4YIc8wIT5mkfuddqW8YWdVgru5UTcHAYaUnWrTjJ%2B7QHUHaYexrBFyrdPAFwF2vurNrLPWjEOubrnj%2BocUnY%2BMPjEMAk6NsEz%2BUg1tJjP4QXFIjvyF4xjqbE03uzn5TPE7MSH9Yh4pf9tkTQecbFDNCBsWfjIVmotjx0TPHQP9d6F3Om15pwa1cL0Vkip1dwr%2Bs5XcnidXgJsVdyrb1nuUlGTMB%2Bnb%2Bwdhrr7WLYy%2B%2BiCPk7qmucJzO1ShMgwq05MJ6flL4GOqUBVnbCZbHyCM0DQoGPbvCXC%2FVpQ2W6pLWjr3SaofnnZkZOJwe7vQk2WGUs4h64nfeAhQMLfSHc7Lb7Wk1CEJraEpMGoYIZNBqaTfTBeNzH%2FmK1UPMCJeP1E25IDBCwcg%2BPaPLnGLe9IMjlU3AyM%2BUa12TXOSgpWyjc3uPkKaGuaJpMBUNwMtcVwTXt%2Fdp7awzZdZpNr1U73iriBtdK37aV3%2FNQxV%2Bx&X-Amz-Signature=575fca0df62d75a26329ad49b4c2314c2f4878057e279598cd166fcbb839f680&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
