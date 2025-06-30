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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW7PO6JE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmPFt1ddy%2BgFC4BpQwEbbef5Sa%2FNp4vO0uz7yJ1WKEvQIhAJ3MgemzK97ifwZpFnNJ0ZGhjzj2e1%2Faycgsqeh2Dy1xKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQKTgUZ1XoZiIwiqgq3ANlF%2B5i0bKLGFRC7hfukiVqk4cvxXLQ8bu1CYMR7kXhbaxNUqF4oEPHrwmLdg36gy065%2BuEptPUZv3XRNeZsMB1wjlPD%2BsRkMC0i6x7kBSllz6dWcgAEw0GaJ2YwqKRIQMcVU%2FyCm%2BnV27Z0WM9knMAQo5DAWmvewv4GKW2RrSlyKsFlaTvKnYL9zuXDClK8QWfuBMAxdV99hx8yacKfcimEZwM7KPIlfDzFxRjxmGuzjvTVSvWDgemNbxYol9AiTMwyIOIukhLIj0sDezOLdjiO5sL5bUKJxhOUMGUjNvuUuJ3qEUE8Q9%2B5IUwlRlcm7mCTyv8AJkZVOt2c8Mf%2FwneaA0kcE2fbql%2Fs4L1SQbhjOHBc9c2f%2Fdo8CIcgCJNG2c%2BAOu8c4TXJFgRSpsmwXzDb%2BRC%2BjrybEBRAh%2F%2FxxlV09R1A52b10MZ3oK1GWtzhMgn7trqeTuP2OlCjEP%2BkBCk4PD4ymLSqBxYcGvfx3GQBg014lBUaFi1CPHx3n%2BJijZVPW5WkWL1TNOYKn8Lg3JCGRFXAYthLEdXwrFNzHgEqqYMNNeD%2BU7ZfeIP2Kb1Yf5h7D8RPKqJUgbsejjMK2%2B9T6KSTWhPC17R0RiUeViQBdth9oLm5WhifTKjcTDkzYvDBjqkAepCyPwN7EFjRmHfdvb%2BorA7uX0e4NhIMDPF8XA0Q6Mbpw%2BKfJEaBFxfs6xTta9pbOKJHGc4r92U%2FzTdhnD7CvmCou248MREnqFLWG5Y7n1cGGJo2CpW1PR6UB3yygul5oZjZBtAVikQhEtwBZpsQQSRjfGz7n8weYmydpehhSxh91lViAcEgsd%2FVFilBNkZMs6RJobopylwhBTfH4jyerLGzUEp&X-Amz-Signature=456bfacad3f7f65e33f3e795672d69ba89c1dfb891ef878322f063d6dd9c6ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
