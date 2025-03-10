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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXG7M5L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCkc55mDKOqtqKYaH5yxFcX58r1BG9ynIn%2FpJ9Giv1DWQIhAOW6XuRGv8GXxcxwZIW5B%2BJljga5ntswL6PX9yHYMeOGKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Y9sRpZtoPzx0yqEq3AMs1RbgMN7VZDJHiXs3CaS8AAMDzDgsd1ZJxQ8AwFqH666H72eo0XD25Z4R%2FHiaJbhhrT%2FXspjoUgGG%2BSwuKyOzz%2FOI0%2F2E6kDKbA%2B48sj3kdZkN2pxSHEzWDLHAgqajyGuQF27YQ20PvAUXHUnTRTzLpLQ4cXXJFV4p5tzNmFn90GcAtv8D6%2F%2F9bUJ2MACKgwibaE%2FmBxcN3tCopeZsT6%2B3WVv%2BerJNc3SmCdVUlT%2Fv7KVDCLM%2F2Oi5WVQ9ewdDHaLfRkUVMFk0mfWA8Iv0ZB1QZ2Y7P0%2BQ0PsxL0DvI5wIGWoJm42p%2FfX7xmZwfZZfD%2BXfPisKfd431cytscgjg%2FNP9VKIlqcbUoQXZzZFqfXkiNi0%2BqYCsxdrj5xd4iO%2FIbLaup46aEZSYQF7iR9iW%2BkcZDW3VC6RNxnot1rqNTJOtxdJy5h0vUZSWLOzHLKL%2FQv4Dzy5p0tIV75VXUfRrAoipgY7RzkiYhohP%2BjXp2AduUv7lmxNja%2B4Vj5AgqsuSI167qlkH08gtOI6dFk%2F1IgXgDDj04drW4p3oWsdhA0b9E74rUr53xKsMT6efvDkygYjrbDiko38zaYNIYedSJUtvgC%2FLA3LPdlQJbJeGFFC8jZtKMqN4MeYzqhqzCcybq%2BBjqkAbLUiQLqVQ1pn55FjNzGhSSSQHmyWBdlQfTqg7ZBvJqUIiFJW8LlKry3KJO%2Fy9JFs3BW6UGrJmenMKtZDWIbo8n71a7qf7u1mv8scBU8XQgqUfw0FHwPVm6Ivk1KCZsxgg4jw1qdiE66ytW1lxT%2B1NbLEWQvnYnRpP2Ncq5sfx0G7j4YkokM1tWBghOqjSYcYFjx9J2gDNbkGsc8rYgkLIfh%2B9yw&X-Amz-Signature=94ec10d49e3937152bbb8557ad63b6e84fb19351b7f4047621c5c983272c734c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
