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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5V3YKDS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDAf44XIDWWUi334uWCUscVbyrfwaXkSW4FnJjzMDN5RwIhALxCsWtpmRdLRRr0JlfFKWHVaUM8n8EiLHBofb%2FWDvBYKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPR1cnIk6jnGp4LNAq3APPRvPfsal7jcTSDkvrvzpek74%2Fnka%2BGDeGslBOj9dRyJC6ErrdwIsb4j0aaYaD6zpL0LvVow6D6DemC%2FO1XHEMTm9ciHacvWUn8ReJVfjq5DRhZP2BQMn8KNdPAfhxjelWMuobE%2BVOw7Nk7jVsUpd%2BbyQt60iZsU2U7hzBexLlBzB5AJx3zqKNOHwqjzEps9%2FhwwilcYOWlbIxpL0c7b8hWlFV3mlragz6UcuMT13J05s%2B%2F3fIuSbEq%2BdWxJypnyXoHkA%2B9TBBfVw6kQZcE8jOgwtPeHIucPwh%2FK6hxfAGEWiaMOv5w6shX1ddo3Sv6atXj%2BQXmvzEd%2FvJT%2Bx%2Flkew2%2FW7cWB4Tc8MF6tZjO4xhRe0%2BDtGSrc4UdcH0Se9G5UtFtmJuXGU6rm8cyYcmiBmKjAit2bATGckSYMgb3QTvlShbIdwDXEXfoSCvwlwGIkWvyYmJaw0e1aI1jqRrs9pDiR54Kp7HcGh7oUvRTfuP%2B2%2Bl2K2LzFWUnO9ovz7i4BqM38HIJKutKwqgyl8Y9NoABpiEelapfMVtkcZvE89uzGF5S4CeXrybs7nt3fb7BeGe%2Bl0dTKsU6uD3ilE5skKUnUyzTxDsFT0tv6xXSEiIJoRk1BfJuc%2BNupYrDCz2q7CBjqkAYxv4v%2Bi6C1odo5zyCOtuLtw0xgoqUqAnZmMImfCpWm9rfVkz1s%2Bpao4nIJck57I9S4A%2FOE5FBZkT6v9gDOo4ZNe2mG44kSBdXACLLGxyMleIuPrNqbvxtm5XQ5TfaQg97TcgdeC0p1rwjf9KrwKAAprotBttFqBmyNhNj0aH51C0ffV7WPq4jdyGyJE%2B5OUZtRYoL5iYJtXducTBWkFI8M6%2BE16&X-Amz-Signature=34377d62895708539f1cbba9243f299452d94cf96e03140ef1a08f889765da75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
