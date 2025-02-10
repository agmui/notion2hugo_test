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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVKEJXU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCYjwV1SorAeqQR8%2BBfY3P3f85XkFxsQegrg6XEh8FEgIhAIyTAQsfrIfbrnVAX6472d%2F22m4xsBPwtU6X82n72oQRKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BpClkq39Tx8IG3xQq3APSFPboht9pf4%2Bq5J4cgYkcDQs7DoCHurMQn5RmxKsQ5Eyljz2p%2BLzDeMAk%2B0K2rkSr2DK4Itd3IeQ3Rua47sDoKeRkWAjlaF%2B%2BJPVM%2FjJ4qVvTfaPiEMkw1EkYSmUYwYEEs4iNHTrxgUVqSownQZme4RdJgD%2FVJEModYDXMzzd6ujg6BeE1FBy6qLP8GMnb8kjB9BKRbqbNkiAxgBBycxq0kxXT8KoHrq%2Fk0o0aw3TMnDgIfDrQPzWX%2Fpi995fNoaVYTPaqbQPnfZm9CMrqNeFb0iIljdL4cgPJOVNpZ0DQ1TZaqQFvrCCOwNLRt0kXIsbsnwb9F%2BIa1G%2BpcvS1VGEhfJRpV9IFRo8PnY0Pofd6kN0DmpWhvStmuLhApKFRMN8l9XNPpMy2iMI8KDC5pJaa9aGNzVLumO9jC1O3qlEGaXg8pXdOWs9cXZ5eZNkrcDkByXcXkbllOfMUs5wn%2B4EIbOAnBxeq1vN0avIDabmjLpqPyq%2FXIxYnridrTHrgafgnlXWVVEQRqeD3tLm9fIvHYBnB5WeKJoOFuIJmwt1yUPgYwynlAhTRlohHOF%2F6VUPfhDJDHJEVVa2iihbPzH2oG9GhXB4w8whAbJQke8nS%2F4HW9S4d1ZKOAnJ9zDgnqi9BjqkAX10fc7YMggTtdZ8bopY7f6PGKl%2FxluaWMR7RDX%2Fq46aJt2p2cZQp49mNItkScZHQylPAlX2dzAcRuG58HidKnxSg4VM%2BEqFLHamp6SmYt03Hem436DzFnJbBioAxAYDopRDg8xYxukTM3hn3XWY373iglWRCFg4u6wbrNqr7NlMJs8xi80Wqr3QZvouUkyZKXi5Zb3rVexLq7C0E1PNf7y7fD6k&X-Amz-Signature=025cfbc8a0403ef3533c9e15132b3edb0468b8f50dbe4a377c2dd08f59982e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
