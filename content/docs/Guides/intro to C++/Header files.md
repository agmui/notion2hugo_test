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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774PCFIY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICfU%2BoQA2Uy5fdrJmBVF8ItbF8VW7PMcV3fMUk2d9cQhAiBtdDRfdika4kx7oXZBxcRK2P1jcxwQ0UssECIHmBnPrSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2FX1AU30oyJ5H6Q0pKtwDxxM0NOTiIDpQ5isNt%2BrQ40yJTgoGF6aAk30QOEEBSkFpT2QNs3zK%2BsE1SpIxfckGP900evTdeAYPkDrG0xIY5YLvNdaJ6NUIo1u0DkCcuKDhXMWIJ9RlmUSEyiHsm64zz3nWST2G4Zf%2BmMpk5xKYprtMZdNlR9Pu7e7ZUo6TaeRjLbH%2Fzx2h3P%2BJhB1IQtjcKVRlezTkn1iq9fY%2BfOIi%2FdsT%2FgYfODyOJ7w%2B7%2BBaqkHDYTpLhmaepOepruqAANQC%2FDYIOQiPY6n790AZvszShbHh7TdpdYvXN8QuX31XThD3fEDb67ho2xbTzKN9wX%2FIAR3IJGkIjpTfqix5mohYo1jFTxXeyoP0iVfsYDuVEGxwdFqLmujIW6OeM52%2Bhxhh0s2tzm%2BJhTlV%2FHGKe2%2FUewKFjEOfzFCOfkA5aX9KLtcjfvkYq0JEGr%2BVxabN4fGUn%2Fe0%2FEidWfR2rBB7UkMEh6p6cKlA7pBGsgxLTqAynO0Jhe9MVjZ%2BES2QjkFnDH3g2Y31yHLEoncVmzamt9ahHqT6zq9fN%2Fdy%2FAfVQHYId7yBBMF2ZZx9pEAMqlFIuwfmoF%2FUWvbnOiGV3JWRqtxyAnc6q5JvBzDiQcwcYEF3OqkZn4SZZ4HQG6oWPEkw%2FNzqwgY6pgG1NlPTF9NYC%2FiAsRYTehVPfekb%2BPtrRjKxIUa%2F9pDSnuQOZgQTqxS6jmqOeKkjoR97MILsj4b7PF%2BlPO%2BNWI9fFdFRr9jPvuYu5BO%2BS8NZgU1urWZ8Vc%2FmKENmwLd1Lr%2FzJ8gJ458UuYVd9KZO4Z9pEw8AWrpk317BRxt%2FgRkx08XJqdjfTCXjjOLqnxSjzudbvCE%2Bvd0Qt0usabU7QwFf7nWFpljr&X-Amz-Signature=66a02d396709ddf62565a0f5ec384838f91653f7eeef945c7fbc0e94b4e90c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
