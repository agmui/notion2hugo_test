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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYAYASXQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBwOwZFp%2F3W%2FJ7u1V5RP2qLhKnJDdOWTpKOqiXRQ3vCaAiAGqFMMYwPqEjKXFb%2B9oXS86G0Mb9qSxv73%2BVcIaUdESyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMEpZNKonunXZqsY0pKtwDMsj6Ao8td35V9CR%2B4zY3QP5dBjX8hBC96Pt0%2FLcENmjLPm%2Ftw05gihf36WM03anDT9Pr%2FSUbwTI5hiiJLSGJAH3PPMkN3ch9hNBO4GEnuiimNbMqg8ZgmoX4TjTLIU%2FI3fja%2B24sFvdoZpXA1UxnMKncXDVKCAKIIjEjvWTT6VSEAxJDAO2O78W3oM8xf6vEDMj5M807CEJ6ApeNtXlLTbjlXyOFYlUk9dGvIhz%2FmkEJGLLqECRydLWY0JFWoS0VNtsgVo8kQZ6DlMB47sAREUU8UxV0DctZVWVEphHXMMGb8Y2yyWSr5hBvE2xhLMpheP7GeS7RF7mOU9dBaR31ybqTwfCYyIYN969ESa6chell%2Btf7JRlLPWO%2FrcYkUgeugnMFoxF8%2FMeInohO3Na%2FJjzl7JQIBVPLYXI0PqJ8RK9uZmjor9GsyO%2Bz0yLyXWNfjzjSuRhNWnb4BRb3O9uufB2ldrnJdqsQcPNkpQl5xiJRhmFg1Oy%2BmGawR272PboGV0PjD9M%2BUw3A3hSuEWT16YIX9x9naiE1uD0viKsezbhQYKFB7yoksGsgiIJUz2Vmv1YCbQYnQqdDdj%2BYzi6yFSd7lwKPK39crY53%2FDU0CskiZQVhKF5z7nu7RHQwqYCBwgY6pgH9grdTNWGTqBeMZYVXdDjDs7pYdDs%2Fq3ZEE2GvjMcrKErcclCdwmSacx8Me%2FG6yRS0sw%2FN%2FEgLgyC5HK5OLvEL1fSJPl8P86YwUohakFy479YRpAwhDkb74XEt7FVv0JWSQZKknEss9AZfz9%2BheOnck%2FQ4URkOA%2BXV%2BOQytXdswIRXSCmL4SaJTJqSm%2BDFlvviqOAM8xSFWDIZ4%2FjNnxbUkJg2Cpjm&X-Amz-Signature=72a32ecff6ba38f74f6e125e31ad7bc69e97edb2be14a7349293171b655d7b18&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
