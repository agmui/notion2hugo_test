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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XJKGVO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG2oEfld6QIH7D3CWn3m8XSrWdVy2QpbqPEIKuU4EEmGAiA7M3%2FvbcG%2FFbQq0XgDO2F%2BgyNuFyLVZH3qSRt3NWrGGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMBxQ%2FQ9ChbeSQ1otnKtwDRG20BIfEydwMILmO5W3fVtI3C9HnTsxZju8NN4k9gWsnbAlM36VOMNYJX%2BCN7luaL7Vyj45SRZRsxiPNpg%2Br%2FdJUh3vVRWN0smgE5UEprWBupxqb58iiDZh%2FEhkuIYPxopkDyiMswoL7Q4VO5KtBNsrHAcYpcE7lukfmtBDN7AIxJz8nDBmfM7e97bV76EtSKwJaKheGT8%2BziDsWITo5FUt%2B%2BfovCW1SqIJqzBT%2BfmM9ASEi616WWNiycdV4Jof6%2F9ZSiJ0pa3kZ59elf7VJRI6SFQ2Tqm7UKBScEJGO1s3aDqg2%2FhIP6Ol22Mr%2BQiE0bb%2BDJRwdj3wq0MRq28dXO2NG6TpE5CAcnNXw0NZrhXuGUdgfzHl7TorChBlyMVX5u60q2Sj9JO2ANN8XLfrZfM3TCE0AKJQMV7ey0gmu5KBC6ZYd75eL3s5IjH47bEl1yzB7KMMT7hWLPSp%2BJFpvUiG0XxvKKyxlR2v8u2ulNa5fzplXvKPdd85l%2BaQqJLCfExWI2g2XJQe7d1KRYFVGXN%2BKqZA95G1xdpB0vGz41aPmn0wTjzfYKdMs%2BmB8XAdwcbPANu1mlfS2fKvVen90x2jwYibvwgbuUKhaJdAuGABAkIuavI10ZQ8C9IMwlJawwwY6pgHWxcIdOhQCQbMeNX6WJfoFBFVSAnvKvjkJz2C3HUy%2FeS014jIxiA4Fjj0s0xa4eJOH5XMuH3joo2lsOl%2BvWymPbnnWqI24hZa%2FknU9bqzmTJ7EUWe0bFSQhugl3C3zIWPE9qcLJwA21MuOG9FuoteqFO7MWLVUh4ALu1jvx5iMPA%2BpUrVHREd5%2FQwLHLCHa8cePvUF3UmCtPfCIUA7zw9M%2FRFGZiPx&X-Amz-Signature=bb12c09c1623719afd291dfcdf962b8dbf7d19ce42223b58c5a61239ee10f5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
