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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QG55PJL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCqWt%2FlrvF4jaBNm754gAMB8aRlSLm5jfB0qI9QXeKRRQIgcmWles9ZwFBLo4nMfErIuBhWkSTFFjJc12%2FiHq24V6UqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB79%2BAp8incvjstH1yrcA7oq9WdJ3xTORYKQIFkOjykuaQYvR8SaUL9h%2B9YNQgCgKsrSfbaPEZ%2FFO1WcMAxkS%2F5goHJPCKQemCGAMZpGmGNZzvu0jQB2SWuyNy1VpzwYf4urBGnZPp%2FfiYYkiHub6V8VomtRY%2F73AO9%2FQ7TKP0x8bFf0SzdJFSmRtoYJHRHYnynaDZV0f8ZvPlJkL7bF2TLaE%2B4twaoOQ4wD2LF7JRpLNOBg%2Fw6GP92k33oUMFiNlmRdQF%2B42Xe%2BaF33A6NSJKUL7rwXRkd4IiHVcj3fCbVHDF%2Fnjq%2BaAHeTAdz0uIQiyarl6rpR%2BGyz%2BZGwJo91qn55QaEv%2FKYSCv0cjWqpT2YKoRarUtbddwUoEU3P%2F%2BrNAARHf71mDy1%2B%2BqH6hibARu3%2FYzEqCs2vmaxI0Vyjj3zAQ7mv1t1T58TsetJiFygJhEbRcb5iFRmePvMOxlnSFaSk6q0XNOlHoEZ%2BJithGz1UU%2F3CVTBKnHvb7Xv%2BQFdVRDf7YzRVNDLMIflIZf18UWd7DSm%2BvzH9nRrdLyqg5gt52GEjtis%2B9ewb2XvVjA4NEJHWMrHfeTqYHxPDWZ5q7qoV0OapscUHkkzB6iJNNWH8kGwH7YLl2n1AcV%2BwqxM8QNQmHOEf6IxYegfoMN3alcAGOqUBNTNzGyjpUGrfC44yfNXvQO225oKgUMTBnlxeaAJ1UnNk5cKVAlaa1QQ%2BduxPitox3dEuipgzigHvDwoMeeffKiMuMzC3lW69sxYMWhz235iPLo4fxKyjB9m7QMn1f%2B5xR8Y6PuSQAJonW6Zrdw9ZgNQqdDGQG1Gy5XTRAkc7nrTkItrBnaB0VdXUn%2BUk6%2BpUWMg1odwdMRT7D6CXRRubftDO7iYj&X-Amz-Signature=238d8a7e8ccd1ff0bd25fb9fd23e00bd50109f2959858f2e75a698201be4cb94&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
