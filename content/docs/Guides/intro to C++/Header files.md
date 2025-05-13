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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSKMJHX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBJBTkHv2JIi35zGJVfMCCrqJbhYgnHwiFWN1vAi5KntAiA86Tt3TCOod36IvoU%2FAg1ga0r0tx77iWZL1KqkDqhF7CqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIb2j5dNi0EfCylnKKtwDZh7f%2FKeSPdQDCLU5YCDNhWd07iIcu6UsgoKjHGeJCPlxZcLpaB4Vq2n3X0yl859ZVQjoJSaZMzjKtiyrEPm3QpL6cKY%2BJMlQRnb%2F1CDxyyaWHZXYf45DosPzXqjMC6FP0lcplK4PgxU3wtwhLE68PFhw9CgnVjqoptNjmtrqzphdH6%2BoUSFWBq5FUGeWjKp0IQi48zCuiLev8KvUg9H27NPImu7Jonixd1GX36iqUbwptNt8pDm7RoqCrBOzPRBQTJncpL1%2B99UYDdBHXIpmyxn1OTsQCprvHezXfLBRCPbRY6XYPjjoLpcJhAnM5hmmiwkZx1tDcX%2FwqJ%2FqRv1sTxqPSjBdYH3XxBYCOkzEuZCdlcD%2FJMGakiZrabovFD70Txvkw7s76w72fbuC5I2890lienCyrfRjL%2BuDcEKFpLWRWWEJfHmn1loM18n8PEHvmp5Z6LETaqz3UKwH8%2BvBRLDGdC5pBanaMg1zMFwzquwMjYAPkNO92wUvPBgIhEEr6%2FLEEfLaSv267SXRvSgeg9S0bMpSdxD4GjLgfLJ0%2FIxBAKHJ7XmCJQAXVEjwGpvAqNi2xYUXqTKJLIjSNAIBRA2dkDElk1pR%2FxB4mAjNGuBub%2FmCMbVL3OfAzxMw6KmOwQY6pgF%2FoZpZ2ob7C98yQbljLhYNJQv9jEJUitzpXLAHdmYJs5b0UkxYjOfrW2CGxkFjBw8PYptzVb5Yg1LRB9YUzlrJJpOiGbNVkzmvNa2b%2B6V%2F0OKM%2FtmbYscUgDAazUXXAqNLYWPEVs7%2BKVtKaop5ELl0qlhVhSZh0YclLxfPiv8IokIJSEoqQAFXqafWG4KFOMtytC4RDGo1oA%2BJ9vnS1WN8GnuZdVpg&X-Amz-Signature=94102d54729c353d2f69fd98fa41fe21599302bb80d18dcb1ad36162587c68e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
