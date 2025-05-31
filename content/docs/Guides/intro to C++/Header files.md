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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MEP4QG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYjIW%2BJpF%2F%2F0C4OBrTOUOdMtHg1fir9k%2F5f3p9cJtneAiAi1TlVngd%2BDbUpepFooPRTzSBoXiyGOq4COgLYz86fVyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM53VNCbdj2olALEPQKtwDZsAn183hWvrOXgzdpRxzeMPUR9LtOHJAdK8SPhfUk6j5JuNTFXkBdkwFGD7joQ6BQFV7YPxj5IlYH8NE8J4%2F9OBeb9%2BBQW6hwPmO4QaWJyhfG0TmL3CpMSkHrxQmyX0YE1B87MJ9rLSSVfdyYRvjhVy5jEE4L%2B%2FXPbkaakFny%2BHSw3Bi%2Bl5qYhZxq9qvVAVS8FmALFGLwWJ3R2tlXMifLELPEH6ShdoZ4GP8ptbF1q6L1myApnZ7H4wwNtp2atW2kKHvYHvBtU7EYHJlsJpUsccApeAUkZ%2FO8j%2FhdQqiWSOmqwe8SCr9ZQpuHPqZa%2BjxDipIh2bfTsKxkcHe0wxJyS8uHAB3tUFojQjqOrFKTIGYUessN%2B8wuJz8cHj0HK16yg7Z%2BEfB5UB3RnBbhBxdghvDdHQKmNxb42kaze4z3kdl44bHK4rXdnQsaXkQx1r9pg2Y%2FjXh%2BY12ihzbrb%2F5M1O4jGOZjWIy9IIIA4T%2BgPl6rltBokUB%2FME74Hp3m24mWCOOdtklhs1TxiknNSvPh%2BmGTpYx7cKKXw26XlJqvV6oSgLYG5DFNhlUcmVaqp7cy28IvFtDkUJk6qjVKcuhUlQ2yV4%2B8bEaU1yU2UX5QygorKwaACjJh1pUnzswyqXswQY6pgFssERoj7UjoxcXhsweyuJ%2FaG1iVy%2BDraHWk%2F5ToQGgmHSh%2BLA7j5ocLCeNsAxdwnZgH77EqXl7AebF7If5O11dmBSvTeiAi%2BMKATluZjbJ8i8Qi%2FBODJ6TiiISyhFr67wnyMk%2BZiPUESJHAQfpMnKPiy8T0P4zebqYGpRkupaa%2BqOBCqmTCkEzYanrcZbWd9F4GF8vZBQUom672mfRtCd3y09K%2FA6U&X-Amz-Signature=fd62d8ce8332e3546c3845f4c6c0a729cdc73f94bb747be490f78994d7a0c37d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
