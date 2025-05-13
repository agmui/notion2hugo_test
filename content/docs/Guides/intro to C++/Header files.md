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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKHINXY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCVr6KfhgBmE%2Fy0Tf%2Fcbb7oxPRBJCKBNqIZ%2B%2FaoLPAv7wIgcui8Lv4PL8bzGocX5bM9ut%2FSw7VH%2BX%2FcV1%2BZpWYSNHMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhBZ%2FU%2F%2Bm3OXba%2BHircA0pSbyyDSe5j%2BHSdbLfEs%2FI3pbDzC7Vgtq8i2tutTJGhAwdOjVi6ixTpeYW3mMMoaE4%2B9QAHLUaKA1pIulRpE6Yo%2FbXmWJFlxIe5nZli67woGqtxqrXVVH32xW9b4QD7AROZGEus0PSC2QfZLlPQWQQ9oMlxFv5YqY4NHYW1kNFVHrh%2FpBhfgZn3PDS61mJx3pnNhKtV6kuZDbkQ8n%2BnUPwKnpcKv8EInSJU7CT1t2mXYl%2B6FvhYRf1cXluhDsW2rKWgdhno7KHJham0rKW70J6JEKZKcr%2BP%2Bd%2FP%2BRV0ItIJ3%2F%2B6mEh2yNlNFvKu%2BKjD%2Fsdo3qTacW%2BG1k4%2FOz3Z%2FXg3CF0CdvQlqO4H6%2B9n7v2sr3bYuJ2dSyp9qOPLeFhNw81RPpvyVFNGojTSRp4mOoSxuYmNWSCOuaOaVxCOR4UXzNkP%2BWc1fHrQfeDvT%2FOTfoSwU6l3r3b9AIr%2Bk6VDzA9HsjQfDaSkkQbxD4bTXgJ77hYq5JTeHOQO2wR%2BYKk1UD9N9zHKBiK4WMgo1AI3VFOZNtEfnaX3BDfFgLmaCyyRO6YszkNnH5sL2SJQyjibWNV%2BdHiywrLF396a0MMzAtOS9P0yaEBPY3e9BH0%2FD18og4RXigR4DFcTuk10MNyOjcEGOqUBggbwmx1kc6AodWfBYfbK1ZxzJdHX35TOaMu8JSBcDRj2%2Fn7VmiR4a4%2FH6c%2F9ODNnsvIQxk24l%2FXv2LtIqAL%2BX90MrI391Gvut5XLxgbMj%2B6Vii8m2Si3xh%2BY0a3WLBhxeKDLEQQnVJubHJWt4BF%2FCaZ%2F%2FqbHVx%2FJT65hwy%2BuNHlbAGfYCrwjvQ7ti%2BGZ6l%2FD0flb9xze9aWGh6IyxL5oBDAAmZNb&X-Amz-Signature=7f8a05bc32ecb23559ff964825cc7381ca762941a1f4529c6eeb5c9c8e35071a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
