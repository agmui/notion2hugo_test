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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLFWRYS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7EV3vFDvmsI02PS1pz3rLKa%2BK8UgSSda1%2Bvw0jdacxAIhALraYtH8C2dAoB522RAUCLtHhFqnV67o%2FE2JlgbSwnlvKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2FqBmRhyGK765UWkq3AOrNPMEdjS5QqTurkBhFdtF1hEBq6RsWBFQi4%2FwnfCaJSw5IvxRCdIQfprOjxJ47uPD%2BxNPAzG0pRHSHSxTaVMKK9E12T%2FOY8O%2BUKtXz42cnQYiu6%2FSMBXlSu0Y6fnxZM0Pv8A1%2Bf2EJjNkhfL8pp4xvH8F4dgWqMsTb4d9%2BWPl9TXwzLy%2FC%2BawNAmn8xzQBODeQnPbbYjxqyjV%2BP67i5Lx2Kbd%2BEd9vs9aSpwZDwR6DT%2BfU2%2F%2B3XiEt6WizatBSN5PXnJ783y8SkJ1wBtE4eshgy13liExcC9H%2FJnbikJX1geznTWgTJVOmSzPN9UkkMBZALf%2FTxbQjp9TMJzeQoVlWu9o034dQQmH39RRBIDR3p5%2F2nZKhYDhgcyoK2FAZk6f05uV9G9ppzoGH1djqUwLbSM66B9pXuJofFtjeAYyNCgXST%2FIIywlmNGjZcVxKgGe06iueTOdiKlI081Z1ZLb4uYKHtuqs5knJ7mQkg6GFFkz4n0KtDDOceqkbe7EUNaDBmcRqH95liBPBsAOpfCFV85QQi2Qa5sc1D8UiHZ7XJtJv0dVD5WlGxV0eIda%2FCyVndlag6nFwauQpxl%2Bho9BeYiLuQkIDoTIKOmDd%2B%2FpUtwMOQVLH9Fb8%2FYiyDDNlvbABjqkAR8ndG8F93mvwYMxlyrT3n%2FQHC2LTgc2nadGbo1vjqgWyA7X8NoIL88TqaurOSQtw%2Fvodj5%2FNARG6ktug3fOwuBrWb7ruelz3CEXwmx7liuhI0jR8CVpGGYwvJKTLUVGZT4Peq36Zk0BL9oVvHOKOAAbGaXs1oEpTYtRewKaTDhuNDIx%2BFCWMNzqFYuYkBbFhhhFLmRI4bieLV1Jh7L6hm2FfPo9&X-Amz-Signature=4c317d96c9cb0a208567cdd374c9b041b95533b4e377229c8c690f4688fc3196&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
