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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQGB4CP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoS9blKVhumJhQEqlXRk2I9xfSfUk4x6jty4t3HAhCKAiAo0rfsCFCNWZdLPkIZmzgC89U5MDdUXn9tMCP6Rw8Ivyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMe6wmrJaCyeMM7gGQKtwDZyhK8escOIbjEEKWkH3GxPtztt%2BeiikQheZ2MY3rgTL8Cgu%2B3nxfy%2Bb8BBV3KiPE0KGV3I3frWQxVz7qMA9IkVhz1hICpUw5P4K7p510eoVJlrthriE28hiapUqwD%2FyP39AI9IDlm13%2BvhRHKpyC5I8T9Rlglvkm6664OctlYmQYzoO%2FAVkk17nKhxRS5ezV%2FyfXRv%2BOtSPzkh6EZiuzJ8%2F%2Fxg%2FeCEz2w6xz1eEW2ivP4sp601%2FuCSTAiyP56rIzLNAPoJg3Y4PHGbwMYKfHMynnM5okGL%2BKzBhQKuN7oTO4K%2BZZUznHQpbuG%2F2T3Z45QL3q7j3WKm3lSS5FvzJCKXF3HgvRZUob%2Fq8UFGsc6MTooFyeYj8mYLR39Fyxcyn%2BjZ05r7LhpCE0jtwb%2BMXt3mJF0xFu4TiukWK7Semk1lOGKRYYDaj8fAs0VyYFCXRA56mPXDyw6FGf%2BjZhOQ5PmZ2IYzBS4sLq%2FKQ3mmuzIzLfZZ6%2BPhWkeX3%2FIIlHcJ6CTvBhVFKC9C%2FGr1AOUQhlVKjKUBxmKzGiS%2FARlhXkGsBBGZlmW7JVHQYN7FybBZHb3FUclxcanMfjOvJI7XventkeL5%2FdBYfvfbEmJlcD72EOcqqJtiguKyH7kBAwyrehvgY6pgHm0dqDU4rNJ2dEEGAirSmKd9ul0Pyg6eqCHJmdzJ1W36BJ%2BWg9WlWTWeh91XOopzeIf1ufQ2iZ%2BhvGdXlkHxt2Jerc7rBddg%2FOKOBOGJ1nDsViIUGXtKVPLFN4zEp6CU0ZEpDcViDhIvgd31tHGjgLNMoYhsHazOo85XFzMyg8oJAJr6AEq7yqEiKuT%2BKiyglIYuQaa1Yzpi7Gz0BAOGyJNQZ9ZrY1&X-Amz-Signature=9e3207a6913ea3b6d31c38bb38b954a058dc0446d709c88348446c3608b22487&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
