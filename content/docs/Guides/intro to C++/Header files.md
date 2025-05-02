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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUTH4PG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAnx7I23ubHDIfLtjjoHrHjyixdfOFuEBsSB1beU%2Foo7AiEA19F7DG2dJ5KS8%2FL2DYWbL%2FmhGPlKCCobhTQdGWsSdiAqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND%2FnuwpOOY78CUXcircA2aFn2QNwTsQer3OW0fJslM%2B4IfEl0JrpRY90RZ6W1b6Iq%2BYPtzjUrVYN1rApnUq20r0pP3u3BjNTVnjki6Vn4Vc83W15M5h6IrdF9JsnCUAQR2lhE8WblS6PGs7MLFPwNG3tJxQyZf6mc87VRQXChGCMM8GgmadN0XVdRmEQ%2FR4TRokpnRhk6Hb%2BmvF8o4pD2JYuILbhIbzOFKcQzg5SQlIoQhr6T%2FAblsxKwCPriRM9ENeBc%2BluWuaj4SG%2FiHz8KP%2BLmPqEWVkAiPfhQD2Jpa9YP8YcV0qB2lwz5bcVl2BqIW2f0cQsM9%2FcwO9luPsLPxvvjSzee%2F5dYPIxeFz9qm4X%2FuVeGRRXQFNOFsCb1CeFgo1lQw%2BVaEB5OL9diz3uUEHU6w533K3sOE3oxyYE0kPpm8urKZwMIuuBroSTcG6nscNZ28GepKnUgTpjvxp39aWRyDY%2BwIpGQ00guvZ6rj2hxt83yEL3CPPTzEwB9Tpb8Bgys9ssqaMnKoBcipti9kd54BiJWvHnLH4R5pT2MozzSmYhv5DbBtgZCa4mGoGMzUfiMQp9Ybrc87w1ZrBaTPWt%2BAgvZ%2FwrtqH1rY2D6Kn2IA5wU55IpcAzSsMb1WYskkZPsUb%2Fap3uJuwMO2H0cAGOqUBx%2ByBNb9WzAKELu4GhOXZF1TM8cqcb%2FQH50xrbUNqPf%2FTuema7UsN0r50toZlYkUM5ilvhjvpFqDieP1ESRminGdlKfxi1CUq5UQzrvJn2TcjljFgQ6KwGiN7znvvCK063WW9DRZjULjrn%2Fw3VShqK1staaXJ0ONJutGV1EXe5K1RhHnwOuDjuG7nezs2DYDG6xDBxJBvcwNFSOycWfbS1gUmd7Lo&X-Amz-Signature=c50ee5869612824c422e14fe0d102f7e306a8091470c641a6fa394013518b30c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
