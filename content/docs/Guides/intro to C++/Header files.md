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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4LH2JB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw%2B4sRRkaONmUEVQzgfzjBYH0qNjYJ8lnzp2%2FqEG3JOAiEAmnLsA1QaB4RPsWZD%2FRqj9JUvIJt91eJs3hy9KkGl5hEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHbvGZW6VEoO4i7LZCrcA0wBPI4B7OjfHMI%2BThQxiqUHpibE24ZPBv%2B1b4puHC9XbrjE3%2BNqhVmF28%2FNQWhYNuBx53FqNnVt00K25URxZ9dvVHMCHs9msXPWcAwntoZirX%2BaFSHcGzYry2i7dWXSAPQm3vgR%2B%2Bv7lVjPMJkDZmJDhj%2BrIkl7Jr6mZEssVQzyYCn%2FaZ8ZZ4Qo%2FEwMN9ioKtvDEp1c2yJa3djDzmwiY%2B15dtlyNDj6Xag5zszcNG%2BQ1kSwbj20B36t%2FWFZlqB8dNVjjYjV6%2FfSiUIgOwNpmKwxRe%2F08ZEhPOtfOyIqb8xmUyhs4JvMOKl8hFuCnSW7y%2BLO9YDTwygteLrlSxUSTwKYk4D6tcN7OFazQ4IltbEdd%2FiVZQK0XAUTFjDX24cy60ok1IBpTWKGY%2BMzU%2FJTI2eFsh3J5vXViaIlq5yty42fecYDJtrHJpOnWtmhh8jzXXJHhUcmRxNF8Y7AFeTMzlYiXXvVwz9135CdNcZZlMb8EKiWdYtWwtC7mMtVJU39ZnwHMPMTzr91Ki9cPtDJap5KyLybq0cDWFj8XGnxKilyry5H1DchgswiyPhie82xz%2BTnNRR2yDTXKfZqsW2NFE1MFfAXa87%2BM8q0L498%2FdseHCmErQpgAopyefmuMNe40r8GOqUB6KSFYCHLBvOMJ4eLFPQb9Jcrhl%2FEAdwIwEmhIYQcpYj5XdCc6ZYiiYYOlcTJPrFyCGW2IS%2B%2BEDBbWPaA3eiN6AFC8RGk0WvfBZfK5pa61WtkUA%2FdWImXo5%2FfbUhaMG09%2BmsjQ8OuWL%2BS3CmjPi5uwAGGwYycBdbkHYgqNvBt5eX1pZ18Rlkld%2FjIiBu0E%2FiSMHVxVAlZOWECa57dQX%2BXkvmL%2FdrN&X-Amz-Signature=b1821a9fcb71be40ea7a34516da0a4b0586baca0f919ec0e674400a8c7abe5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
