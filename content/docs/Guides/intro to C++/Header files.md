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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJZBFLX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICKzpn296u2udZT6lY%2F7IlzGO2iZyQei42Q%2BfIneOqYgAiEApp7l1DsDu2f4rzLjGHt1b4ZasxeNUe7B7%2FIAaJMZmlIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0stp%2BmPdO2JkG8NyrcA3a8RL0FyfT%2BzamgyzsbEI4fQnvFMgqwU92kJnyZ4DAx4ZK3R7M3DDvhp726hw1LOHWIewUE03Xyk9DcsRra8xEx7905k0MVv1ADcqLyk9MEDOr7gHCBehSHk2Wn7hw%2Bd5ZCWWApxDQvoRwopnLP%2Bh3rxdabLmRImzn%2FGUKLHblHpbSl0pRkEJCPc2NHYdJV8%2FI1yIa3ku17zbKoKsp2cQvuq6ms2lCEdrlD8velQVaz0maRh6xsGWHS8cw81LFo4AOMD27EHzcfUNxTAIlKCDMulk%2Bcqy%2FfLCDhHZTmEZ9t6rbIzUWHK1Rha%2B4489UI57u6Ju49lYY7pwvZg%2BasVz4EP6T8clfyZ9%2BwZQUHPN7pXWn5kB6vZejM6GMX%2FmEr3wW1JHvmUKlnK%2B4I8R5B1KBAJNu71Z%2B9tNTT%2Fb3WmhwBSW20HsaQY8yvycv86OVMepXihJgjdiZirD6ACRV1SAIKRoPUNgqlyW%2BoYqniukF4wIhAsX%2BUPklGa5TIX9peSzcRV5N02a3VlTQw7aTZVkkxG6UZ3F4jvXXM0TFSO8LiGfE749mf9JZCvCb%2Fxx5aWcB4teSuLDU6ss9OrWa6Apyja8JOjwRnzwM162MWO22gOZXW7LslOe1CIhL6MLLLvb4GOqUBqdZ7mF7vFHzBcyXxaqqXGKR4M9j00KRVVXVxlk%2FglsuwNgLHNncARu%2BYM6XRBzHT2yd3Pw4qGIcIojeJvR%2FWqLMhezgwPGutUhzXLlJ4sFK67jhQ0pelkVYR5ilBlxX9aNaOGd%2FZhV274IDVD5QXsU8VUG1z%2Bi2MOhCEonlErEeAjH0uihSKzPzRiah7rqphkco%2FhXTTfn4jmuqdoXysXJzuPIJR&X-Amz-Signature=d106abf9664ceb41906f2a54078961cb2d098e6bb9fa7d91aa39c796ba7b8a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
