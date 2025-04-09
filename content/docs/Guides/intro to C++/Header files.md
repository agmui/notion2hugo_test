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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ML6EPS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDuygtcA8v6fzL4UEGZJKNgtgAL%2BrNhkuIGcVT%2BpqycUgIgFCe7vAH6IpxgEqpcYZSwW2AS0HlxdLKgI9ZiEgJGsdAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9n3JZ2OI2qT17PvCrcA6VNG3nlKL193J198h3kosmxk%2BPw1SfjMNlhbbZaNV30dskI2acI5xrg682ryUAgdT9vOpqSyDcJb86lMhyI0Q0A553godJa8geehNMWfYeW8e4H9IcKD9CNpHbEEALLjpQfkpZwPVaNzTj0ya71z00UJN4sdmuYYoJgFAs7oIOwHBb06C1ROkJPd5rgWUf0%2BMoNVr%2F99XuhX7746VI1hJdTnavi9%2FdQKMt7Rg6P3Fqa%2FVmt99gfMikU28pIh4yFSkKFfq%2FEZSuDduJTfdEdpXH1vKVTqHhwBOjXT8JoLE0d6L1FfS%2BfJr8q7BeFryr92Unn3%2BrB2Zwo9Q7I9RXqgCW9TDLJ%2BpS6yuoTXlTiA8QZKPSuJ8cBPz3hc%2BOx2oSmhM8rXM10oqr625XMArIrTjdvhChitYsqNloo035TCNpa%2B0w%2FbKa0s4n01jVhKnIXhIq5QeWgtIupjA7%2FaKoCDki6gYW6PerNgfMf13BqvbGEas57Ks14JpVqvB88kZWcbMmBENLsd2XMrqnTYXOUokPzo3SUdojiSUMN43pWycb02m55V5ubxm4PH%2Fn9%2Fi4XAjPQy5eL0GNf%2FP1FjVYcwDQGGNgyLgJ6fR%2B3opuUgEUFo4C74gy6SW97%2Fau3MPfi278GOqUBCGMN5Ng54y0Z%2FK1b3p5SB1Sy59BDr8Ea47b7pNcT5lnS6asbklk09jMlmKGRC4%2FAMMDkAdhBkzlJR%2F%2FqPuTs6zS%2FQFcQ%2BVOKHP3RUup6d0HzzAlpkCJyoxJIjzyNZgGFtb1IdeK6MI%2F3rkMrrEY292QJLOUij7bSStzblMQD9bz3RspohYrFJ8Oy51kKWoOzZtU%2F%2FvTBzz%2FudPzXtEgpoIWzezQZ&X-Amz-Signature=00919bed7358a7b1b026a5a674089cb37b98d2686fe065888d97db2cc0a36fde&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
