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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDALC7M%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNWqLu%2F5fJYtJ88y1FLv2jUKE3Wg%2BUY5jw9WX0MRcM%2FwIhANTIlBjAcViUXOcsmdLlfSDHyU92uD3svEus6lIetThaKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrvzyJjurWxQOaU4gq3AP1kmsvMzeuIgj6ClhHwO4FKUlP3sRuNyRYTETYsDnQiyyxXqgZvNK6lcXz0mvsr9WK3K2NOnx%2FhKdwXy6k0DLe8bqQjzvWVkvCTKmTiZ7HW2GhQ1Sr%2Fw5Bq3IsFx3K83MocKY0nT8k2NlekgO9kHzMg1AwZrie5ZloV1ZGt%2B7gCJcXLYQeJ%2BFbS%2B4oZe6fDBq6RHKlKHp5nX25LqRrywfm8hUOF04kEiM%2BG1Qfau0w1Ev1WprM8f38J8uoCBt9Ev3cokK8mRMJe5ZwQPNarsp9j1jyL2Av8ukzQhjOq%2FJrr%2Fsutszp1Feb9xNz%2FmYbhlH5Cg4eIjeT56MAHqZYdzcbUsWxJ7OPWisP29dB1UZlWstypcXlH%2BYShmT1gwQucixJopM5pRVkDg5IMkNuqoYnst3CORGhEZ%2B%2F2HbKERPRJYJ7b%2Bx%2FVUUKKFS8caJfzdgM9yyLlVrkmXwPcBygYDOYvPKxv4JmtYxNjpwmoHHjWwokbiOBCdFjl72nHkCysREaLt8tVFThkSJArhvhgV8kHb5yIBPt4LYEUrnF377QsUpfnefav6K2tbqL%2FfaUsejSR1mDqRvJ8362%2FDIfzLnss7MT%2FKlWwYd%2FjJuld28Nl9StMraWctMSQwq2yjDWnLu%2FBjqkAUEAlo463bSbhdbjR%2Fr%2F6RijYJNcYGXH8LlO13i0PVu%2BFWnQ52O2DreipW3Rby%2BZkfbDhOjO5ARFEK7mHZJ5oqKImZrbEtMkuiNaBlbVYRG9UiZSYm%2Fg2uODSmQ05qi2XjYaBhugGa08O4hR1jxEWGohkkmR67hLm8LCYPiygG%2BXX5pM4zEs7UON1Y6r3zOH8sM98OXzJdzDrS%2FettN7zi6rpZJD&X-Amz-Signature=21f592ea8cb8aabf7b3027731e73c0b8006b8a001b18b48b98e973169eee25e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
