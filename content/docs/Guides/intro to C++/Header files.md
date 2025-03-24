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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMIJKOB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkA7TPiwDjbhkdI82w2W1K99eZYrocVaD6cNxsmwv%2FiAiEAnEUHVe%2Bu1jUUz5W00cpw8A5jj9t6F0zGj8YsV5y0oO4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQRxubw0Rc326EnPCrcAxWvenL32%2BjVrZNupGnx3lki9uTIc0IhrgQqRwQKKXraS9mgYkwsyWIJIHMgmvXONyZWEUZ5rfTQLcXv6yyG4Q3lGYlDqVpk368KVjXAbg6EWtKfQCbXhK0XXYjjyxXu1De6OsU%2BLV2hHRcH6vWDy%2F7TsIMIuS7r5DiihUZPHU6W9lkENaCVD2scvvYLTwWq4D4DFYejQMl08AeXQGGIYmPWt7zG2UeaTCfG%2B83I%2FJI3rpGAiLRQzLYWyf7Qznw8lBc0p6E49pZi%2Bx4GpAfgu3aI53cnFSDW5kAxbpTGBs1juI9l4%2BCdQ9BBrbcM%2FT3Rlkc1wVk4zK43B8oHBKXXq62ezhrLZt1Qs%2FPYmiYLEKGj02CP5MhKfy7nX%2BQ6AFWdkiXYt353v5EeqqHj4QDaIlvmUZ7ZyNd3AH20gwSRPemp%2BhyJU%2B8QDZG4HrzZdjVL5DjvbmE5UScgmM8X9M%2FHfF9siRZxGXB4dQ2ZifduXOCRBS6v%2F2a1nAwGYW5CTE8dWYCDhuUcd7H4K%2FGjKvMGuN%2FQQFYvz8tnqdFbZP%2FLHiFR4LRIz1dlV0lMs5vhj3kV3jerljbyIrkTIxYcB8Hqs23actJKUxULxDG1MW09mGB77M5DmzANDThcRi7WMMb%2Bhb8GOqUBBQTza%2F3Lue1FqFfuCOuRA2YlnKm6PB3z6criUOoz4AMuh0e1wevux3ksjUfDSmfuX0FVfKB6hQAfjpGpreXnkESJT%2FlLWs90UpzznrO95n7%2BdBl%2FD%2Brb7YfUPEw9iPFUmmRSbSkezYmp4o8uXOBYiXstaPgnY0dB6v%2Fv2STTIDtdMLyniZFnUdGFrnim7USmO16yfok2PLMHaBB2wqnFkQkv6pi4&X-Amz-Signature=a684e2ac17d40a9810e578a50d2bd594ed2e138bf5b0fed459407989d570535b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
